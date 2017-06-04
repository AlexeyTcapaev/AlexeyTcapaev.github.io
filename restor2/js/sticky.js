if(document.documentElement.clientWidth<=414)
          {
              var menu = document.querySelector('.mobile_nav');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('ul');
placeholder.style.width = menuPosition.width + 'px';
// placeholder.style.height = menuPosition.height + 'px';
var isAdded = false;

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
         document.getElementById('comment_bubble').style.top="190%"; 
      document.getElementById('comment_bubble').style.right="32%"; 
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
         document.getElementById('comment_bubble').style.marginTop="50%"; 
      document.getElementById('comment_bubble').style.right="37%"; 
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
    }
});
          }
else
{
var menu = document.querySelector('.headnav');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('ul');
placeholder.style.width = menuPosition.width + 'px';
// placeholder.style.height = menuPosition.height + 'px';
var isAdded = false;

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
         document.getElementById('comment_bubble').style.top="190%"; 
      document.getElementById('comment_bubble').style.right="32%"; 
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
         document.getElementById('comment_bubble').style.marginTop="50%"; 
      document.getElementById('comment_bubble').style.right="37%"; 
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
    }
});
}