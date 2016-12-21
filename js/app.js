// 搜索
var search = new Vue({
		el: '#searchGoods',
		data: {
			shopNameS: '',
			goodsNameS: ''
		}

		methods: {
			searchGoods: function() {
				myGoods.search(shopNameS, goodsNameS);

			}
		}
	})
	//addButton
var addButton = new Vue({
	el: '#addGoodsButton',
	methods: {
		function addFadein() {
			$("#modal-add").fadeIn(200);
		}
	}
})

//add
var add = new Vue({
	el: '#addGoods'
	data: {
		shopNameAdd: '',
		goodsNameAdd: ''
	}
	methods: {
		function addCancel() {
			$(".modal").fadeOut(200);
		}

		function addSure() {
myGoods.add(this.data, function(){
			$("#modal-add").fadeOut(200);
		});
		
		}
	}
})

//modifyButton
var modifyButton = new Vue({
	el: '#table1',
	methods: {
		function modifyFadein() {
			$("#modal-update").fadeIn(200);
		}
	}
})

//modify
var modify = new Vue({
	el: '#modifyGoods'
	data: {
		shopNameMo: '',
		goodsNameMo: ''
	}
	methods: {
		function addCancel() {
			$(".modal").fadeOut(200);
		}

		function addSure() {

			$("#modal-update").fadeOut(200);
		}
	}
})

//render
var render = new Vue({
	el: '#table1',
	data: {
		goodsList: renderList
	},
	methods: {
		seen: function() {
			if (renderList.length == 0) {
				return 'sorry,there is no matched goods'
			} else {
				return
			}
		}
	}
})