
$(document).ready(function () { 
    var $menu = $('.header-left .dropdown');
    function showHideNav(e) {
        e.preventDefault();

        if (!$menu.hasClass('is-active')) {
            $menu.addClass('is-active');

            $(document).one('click', function closeTooltip(e) {
                // console.log($menu.has(e.target));
                // console.log($('.header-left .dropdown .navbar-burger').has(e.target));
                if ($menu.has(e.target).length === 0 && $('.header-left .dropdown .navbar-burger').has(e.target).length === 0) {
                    $menu.removeClass('is-active');
                } else if ($menu.hasClass('is-active')) {
                    $(document).one('click', closeTooltip);
                }
            });
        } else {
            $menu.removeClass('is-active');
        }
    }
    
    $('.header-left .dropdown .navbar-burger, .close-icon').on('click', showHideNav);
 
});
  