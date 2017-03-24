document.getElementById('new-chunk').addEventListener('click', (e) => {
	require.ensure([], function(require) {
		require('./app')
	}, 'appView')
})