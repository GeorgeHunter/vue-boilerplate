new Vue({
	el: '#app',
	data: {
		complaints: []
	},
	mounted() {
		axios.get('http://data.consumerfinance.gov/api/views.json').then(response => this.complaints = response.data);
	}
})