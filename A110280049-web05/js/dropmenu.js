var VisibleMenu =''; //紀錄目前顯示的子選單的ID

// 顯示獲隱藏子選單
function switchMenu(theMainMenu, theSubMenu, theEvent){
    var SubMenu = document.getElementById(theSubMenu);
    if(SubMenu.style.display =='none'){
        SubMenu.style.display = 'block'; //show選單
        hideMenu(); //隱藏子選單 for Click 滑鼠離開 選單 2時用
        VisibleMenu = theSubMenu;
    }
    else{
        if(theEvent != 'MouseOver' || VisibleMenu != theSubMenu){
            SubMenu.style.display = 'none';
            VisibleMenu ='';
        }
    }
}

//隱藏選單
function hideMenu(){
    if(VisibleMenu !=''){
        document.getElementById(VisibleMenu).style.display ='none';
    }
    VisibleMenu ='';
}
SubMenu.style.minWidth = theMainMenu.clientWidth;