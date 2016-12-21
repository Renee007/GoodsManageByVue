(function(window){
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
			success: function (res) {
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
			success: function (res) {
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
			success: function (res) {
				that.goodsList = res.data;

				that.renderTable(that.goodsList);
			}
		}); 
	}

	// 渲染表格
	Goods.prototype.renderTable = function(renderList) {
	    var result = '';

	    if(renderList.length == 0){
	    	result = "<tr>" +
	    		"<td colspan=\"4\"><h3 class=\"text-center text-gray\">没有符合条件的结果～</h3></td>" +
	            "</tr>";
	    }
	    else{
	    	var renderData={item:renderList}
	    	var vm=new Vue({
	    		el:'#table1',
	    		data:renderData
	    	})
	    }

	    $("#"+this.targetTableId).find("tbody").html(result);
	}

	window.Goods = Goods;
})(window);
