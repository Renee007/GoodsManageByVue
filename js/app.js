$(document).ready(function(){
	var myGoods = new Goods('table1');
	// 搜索
	$(".J-search").click(function(){
		var shopName = $(".J-shop-name").val().trim(),
			goodsName = $(".J-goods-name").val().trim();
			
		myGoods.search(shopName, goodsName);
	});
	// 添加
	$(".J-add").click(function(){
		$("#modal-add").fadeIn(200);
	});
	// 确认添加
	$(".J-add-submit").click(function(){
		var formData = {
			shopName: $(".J-add-shopName").val().trim(),
			goodsName: $(".J-add-goodsName").val().trim()
		};
		myGoods.add(formData, function(){
			$("#modal-add").fadeOut(200);
		});
	});
	// 修改
	var goods_id;
	$("body").on("click", ".J-update", function(){
		var that = $(this);
		goods_id = that.attr('data-id');
		$(".J-update-shopName").val(that.attr('data-shopname'));
		$(".J-update-goodsName").val(that.attr('data-goodsname'));
		
		$("#modal-update").fadeIn(200);
	});
	// 确认修改
	$(".J-update-submit").click(function(){
		var formData = {
			id: goods_id,
			shopName: $(".J-update-shopName").val().trim(),
			goodsName: $(".J-update-goodsName").val().trim()
		};
		myGoods.update(formData, function(){
			$("#modal-update").fadeOut(200);
		});
	});
	// 取消
	$(".J-cancel").click(function(){
		$(".modal").fadeOut(200);
	});
});