(function () {
	// start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
	var 	thumbnail = document.querySelectorAll('.data-ref'),
			name = document.querySelector('.modelName'),
			price= document.querySelector('.priceInfo'),
			desc = document.querySelector('.modelDetails');

	//select model
	function selectModel(){
	   //get current selected model ID
	  let	objectIndex = carData[this.id];
			//Apply data from object
			price.firstChild.nodeValue = objectIndex.price;
			desc.firstChild.nodeValue = objectIndex.description;
			name.firstChild.nodeValue = objectIndex.model;
			//Apply css class to selected model, fade in model.
			thumbnail.forEach(function(item ,index){
				item.classList.add('nonActive');
		})
		//unselected models fade out.
		this.classList.remove('nonActive');
	}
	//add event listener to every model thumbnail
	 thumbnail.forEach(function(item, index){
	   item.addEventListener('click', selectModel, false);
	 });
	//fade in F55 everytime load the page
	selectModel.call(document.querySelector('#F55'));
})();
