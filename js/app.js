$(document).ready(function() {
	var host = "http://localhost:3001/";
	var vm = new Vue({
		el: '#together',
		mounted: function() {
			this.fetchTableList();
		},
		data: {
			searchFormData: {
				shopName: '',
				goodsName: ''
			},
			addFormData: {
				shopName: '',
				goodsName: ''
			},
			modifyFormData: {
				id:'',
				shopName: '',
				goodsName: ''
			},
			tableList:[]
		},
		methods: {
			fetchTableList: function() {
				var self = this;
				$.ajax({
					url: host + 'goods/search',
					type: 'post',
					data: self.searchFormData,
					success: function(res) {
						self.tableList = res.data;
					}
				})
			},

			addFadein: function() {
				$("#modal-add").fadeIn(200);
			},

			addSure: function() {
				var self = this;
				$.ajax({
					url: host + 'goods/add',
					type: 'post',
					data: self.addFormData,
					success: function() {
						self.fetchTableList();
						$("#modal-add").fadeOut(200);
					}
				});
			},
			modifyFadein: function(goods) {
				this.modifyFormData.id = goods._id;
				this.modifyFormData.shopName = goods.shopName;
				this.modifyFormData.goodsName = goods.goodsName;
				$("#modal-update").fadeIn(200);
			},
			modifySure: function() {
				var self = this;

				$.ajax({
					url: host + 'goods/edit',
					type: "post",
					data: self.modifyFormData,
					success: function() {
						self.fetchTableList();
						$("#modal-update").fadeOut(200);
					}
				});

			},
			Cancel: function() {
				$(".modal").fadeOut(200);
			}
		}
	});
});