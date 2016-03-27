/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
 function trim(str){
   var  reg =  /\s/g;     
  return str.replace(reg,"");     
 }
function addAqiData() {
   var city_val=document.getElementById('aqi-city-input').value;
   var air_val=document.getElementById('aqi-value-input').value;
   var city = trim(city_val);
   var air  = trim(air_val);

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  var target=getElementTarget(e);
  if(target.toLowerCase()=="button"){
		

	}

  renderAqiList();
}

function init() {

   var btn_click = document.getElementById("add-btn");
   var btn_delete = document.getElementById("aqi-table");
   btn_click.addEventListener("click",addBtnHandle);
   btn_delete.addEventListener("click",delBtnHandle);
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

function getElementTarget(e){
	var e = e|window.event;
	return e.target|e.srcElement;
	
}
init();
