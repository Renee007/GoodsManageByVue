(function(window) {
	var host = "http://localhost:3001/";

	function Goods(targetTableId) {
		this.targetTableId = targetTableId;
		this.goodsList = [];

		this.search();
	}

	// 新增商品
	Goods.prototype.add = function(data, callback) {
		var that = this;

		var _formData = data || null;

		$.ajax({
			url: host + 'goods/add',
			type: "post",
			data: _formData,
			success: function(res) {
				that.search();

				callback();
			}
		});
	}

	// 修改商品
	Goods.prototype.update = function(data, callback) {
		var that = this;

		var _formData = data || null;

		$.ajax({
			url: host + 'goods/edit',
			type: "post",
			data: _formData,
			success: function(res) {
				that.search();

				callback();
			}
		});
	}

	// 搜索商品
	Goods.prototype.search = function(shopName, goodsName) {
		var that = this;

		var _shopName = shopName || null,
			_goodsName = goodsName || null;

		$.ajax({
			url: host + 'goods/search',
			type: "post",
			data: {
				shopName: _shopName,
				goodsName: _goodsName
			},
			success: function(res) {
				
				vm.goodsList=res.data
			}
		});
	}

	// 渲染表格

	window.Goods = Goods;
})(window)