/**handles:to-top,mobmenujs**/
!function(a){"use strict";a(function(){var o=a("#to_top_scrollup").css({opacity:0}),t=to_top_options,i=!1,c=0,e=function(){clearTimeout(c),o.is(":visible")&&o.stop().fadeTo(200,0,function(){o.hide(),i=!1})},n=function(){i||1!=t.enable_autohide||(clearTimeout(c),c=setTimeout(function(){e()},1e3*t.autohide_time))},s=!1,l=function(){s||(s=!0,a(window).scrollTop()>t.scroll_offset?(o.stop().css("opacity",i?1:parseFloat(t.icon_opacity/100)).show(),n()):e(),s=!1)};(void 0===to_top_options.enable_hide_small_device||"1"!=to_top_options.enable_hide_small_device||a(window).width()>to_top_options.small_device_max_width)&&(a(window).scroll(l),a(document).scroll(l)),o.hover(function(){clearTimeout(c),i=!0,a(this).css("opacity",1)},function(){a(this).css("opacity",parseFloat(t.icon_opacity/100)),i=!1,n()}).click(function(){return a("html, body").animate({scrollTop:0},400),!1})})}(jQuery);
"use strict";function getSelector(e){var t=jQuery(e),n=t.attr("id");if(n)return"#"+n;var e=t.parents().map(function(){return this.tagName}).get().reverse().join(" ");e&&(e+=" "+t[0].nodeName);var n=t.attr("class");n&&(e+="."+jQuery.trim(n).replace(/\s/gi,"."));var n=t.attr("name"),t;return n&&(e+="[name='"+n+"']"),n||(t=t.index())&&(e+=":nth-child("+(t+=1)+")"),e}function enableMobileMenuElementPicker(){const e=new Picker({elm:document.getElementById("elm1"),mode:"cover",excludeElmName:["body"],events:[{key:"contextmenu",fn(e){e.preventDefault()}}],onInit(){},onClick(e){var e=getSelector(e.target).toLowerCase();window.parent.receivePickedElement(e),jQuery(e).hide()},onHover(e){}});document.getElementById("m_on").addEventListener("click",()=>{e.on()}),document.getElementById("m_off").addEventListener("click",()=>{e.off()}),document.getElementById("m_cover").addEventListener("click",()=>{e.changeMode("cover")}),document.getElementById("m_target").addEventListener("click",()=>{e.changeMode("target")})}jQuery(document).ready(function(n){const e=new URLSearchParams(window.location.search);function t(e){var t=n(e).parent().next();n(e).parent().next().hasClass("show-sub-menu")?(n(e).find(".show-sub-menu").hide(),n(e).toggleClass("show-sub")):!n(e).parents(".show-sub-menu").prev().hasClass("mob-expand-submenu")&&t[0]!==n(".show-sub-menu")[0]&&n(e).parent(".sub-menu").length<=0&&(n(e).parent().find(".show-submenu").first().hide().toggleClass("show-sub-menu"),n(e).toggleClass("show-sub")),n(e).parent().next().hasClass("show-sub-menu")?t.hide():t.fadeIn("slow"),n("body").hasClass("mob-menu-sliding-menus")||(n(e).find(".open-icon").toggleClass("hide"),n(e).find(".close-icon").toggleClass("hide")),t.toggleClass("show-sub-menu")}"find-element"==e.get("mobmenu-action")&&enableMobileMenuElementPicker(),n("body").find(".mobmenu-push-wrap").length<=0&&n("body").hasClass("mob-menu-slideout")&&(n("body").wrapInner('<div class="mobmenu-push-wrap"></div>'),n(".mobmenu-push-wrap").after(n(".mobmenu-left-alignment").detach()),n(".mobmenu-push-wrap").after(n(".mobmenu-right-alignment").detach()),n(".mobmenu-push-wrap").after(n(".mob-menu-header-holder").detach()),n(".mobmenu-push-wrap").after(n(".mobmenu-footer-menu-holder").detach()),n(".mobmenu-push-wrap").after(n(".mobmenu-overlay").detach()),n(".mobmenu-push-wrap").after(n("#wpadminbar").detach()),""!=n(".mob-menu-header-holder").attr("data-detach-el")&&n(".mobmenu-push-wrap").after(n(n(".mob-menu-header-holder").attr("data-detach-el")).detach()));var o=n(".mob-menu-header-holder").attr("data-menu-display");""==o||n("body").hasClass("mob-menu-slideout")||n("body").hasClass("mob-menu-slideout-over")||n("body").hasClass("mob-menu-slideout-top")||n("body").hasClass("mob-menu-overlay")||n("body").addClass(o),n("video").each(function(){"autoplay"===n(this).attr("autoplay")&&n(this)[0].play()});var s=n(".mob-menu-header-holder").attr("data-open-icon"),a=n(".mob-menu-header-holder").attr("data-close-icon");function i(e){n("."+e).toggleClass("show-panel"),n("html").removeClass("show-mobmenu-filter-panel"),n("body").removeClass("show-nav-right"),n("body").removeClass("show-nav-left"),n("html").removeClass("mob-menu-no-scroll"),setTimeout(function(){n(".mob-menu-sliding-menus [data-menu-level]").scrollTop("0"),1==n(".mob-menu-header-holder").attr("data-autoclose-submenus")&&(n(".mob-expand-submenu.show-sub").click(),n(".mobmenu-content .show-sub-menu").removeClass("show-sub-menu"))},400)}function r(e){n(".mobmenu-content").scrollTop(0),n("html").addClass("mob-menu-no-scroll"),n("."+e).hasClass("mobmenu-left-alignment")&&n("body").addClass("show-nav-left"),n("."+e).hasClass("mobmenu-right-alignment")&&n("body").addClass("show-nav-right"),n("."+e).addClass("show-panel")}n(".mobmenu-content .sub-menu").each(function(){n(this).prev().append('<div class="mob-expand-submenu"><i class="mob-icon-'+s+' open-icon"></i><i class="mob-icon-'+a+' close-icon hide"></i></div>'),0<n(this).parents(".mobmenu-parent-link").length&&n(this).prev().attr("href","#")}),n(document).on("click",".mobmenu-parent-link .menu-item-has-children",function(e){e.target.parentElement==this&&(e.preventDefault(),n(this).find("a").find(".mob-expand-submenu").first().trigger("click"),e.stopPropagation())}),n(document).on("click",".show-nav-left .mobmenu-push-wrap,  .show-nav-left .mobmenu-overlay",function(e){e.preventDefault(),n(".mobmenu-left-bt").first().trigger("click"),e.stopPropagation()}),n(document).on("click",".mob-expand-submenu",function(e){1!=n(".mob-menu-header-holder").attr("data-autoclose-submenus")||n(this).parent().next().hasClass("show-sub-menu")||0<n(".mob-expand-submenu.show-sub").length&&n(this).parents(".show-sub-menu").length<=0&&t(n(".mob-expand-submenu.show-sub")),t(n(this)),e.preventDefault(),e.stopPropagation()}),n(document).on("keyup",".mobmenu-left-bt",function(e){"click"!=e.type&&13!=e.which||9==e.which||(i("mobmenu-left-panel"),e.stopPropagation())}),n(document).on("keyup",".mobmenu-right-bt",function(e){"click"!=e.type&&13!=e.which||9==e.which||(i("mobmenu-right-panel"),e.stopPropagation())}),n(document).on("click",".mobmenu-panel.show-panel .mob-cancel-button, .show-nav-right .mobmenu-overlay, .show-nav-left .mobmenu-overlay",function(e){e.preventDefault(),i("show-panel"),n("body").hasClass("mob-menu-sliding-menus")&&n(".mobmenu-trigger-action .hamburger").toggleClass("is-active")}),n(document).on("click",".mobmenu-trigger-action",function(e){e.preventDefault();var e=n(this).attr("data-panel-target");n("body").hasClass("show-nav-left")||n("body").hasClass("show-nav-right")||"mobmenu-filter-panel"!==e&&r(e)}),n(document).on("click",".hamburger",function(e){var t=n(this).parent().attr("data-panel-target");e.preventDefault(),e.stopPropagation(),n(this).toggleClass("is-active"),setTimeout(function(){n("body").hasClass("show-nav-left")?(n("body").hasClass("mob-menu-sliding-menus")&&n(".mobmenu-trigger-action .hamburger").toggleClass("is-active"),i(t)):r(t)},400)}),n('.mobmenu a[href*="#"], .mobmenu-panel a[href*="#"]').not('[href="#0"]').on("click",function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&0<n(this).parents(".mobmenu-content").length){var t;try{t=decodeURIComponent(this.hash)}catch(e){t=this.hash}n("html").css("overflow",""),t.length&&(0<n(this).parents(".mobmenu-left-panel").length?i("mobmenu-left-panel"):i("mobmenu-right-panel"),t=t.length?t:n("[name="+this.hash.slice(1)+"]"),n("body,html").animate({scrollTop:t.offset().top-n(".mob-menu-header-holder").height()-50},1e3))}})}),window.Picker=class e{constructor(e={}){this.elm=e.elm||document.querySelector("body"),this.mode=e.mode||"target",this.excludeElmName=e.excludeElmName||[],this.switch="boolean"!=typeof e.switch||e.switch,this.events=e.events||[],this.onInit=e.onInit,this.onClick=e.onClick?e.onClick.bind(this):null,this.onHover=e.onHover?e.onHover.bind(this):null,this.fn_bind_clickHandle=null,this.fn_bind_hoverHandle=null,this.fn_bind_contextmenuHandle=null,this._init()}on(){this.switch=!0}off(){this.switch=!1,this._removeTargetShowPos(),this._removeCoverShowPos()}changeMode(e){let t=["cover","target"];t.includes(e)?(this.mode=e,this._removeTargetShowPos(),this._removeCoverShowPos()):console.error(`Mode error, only includes [ ${t.join(" | ")} ]`)}destroy(){this.events.forEach(e=>{e.fn_bind=e.fn.bind(this),this.elm.removeEventListener(e.key,this[`_${e.key}_Handle`],!1)}),this.elm.removeEventListener("mouseover",this.fn_bind_hoverHandle,!1),this.elm.removeEventListener("click",this.fn_bind_clickHandle,!1),this._removeTargetShowPos(),document.querySelector("#_picker_cover_wrap_box").remove()}_init(){let e=document.createElement("div");e.setAttribute("id","_picker_cover_wrap_box"),e.innerHTML="<svg></svg>",document.body.appendChild(e),this._initEvent(),this.onInit&&this.onInit()}_initEvent(){this.events.forEach(t=>{this[`_${t.key}_Handle`]=e=>{!1!==this._triggerEvent(e)&&t.fn&&t.fn(e)},t.fn_bind=this[`_${t.key}_Handle`].bind(this),this.elm.addEventListener(t.key,this[`_${t.key}_Handle`],!1)}),this.fn_bind_hoverHandle=this._hoverHandle.bind(this),this.fn_bind_clickHandle=this._clickHandle.bind(this),this.elm.addEventListener("mouseover",this.fn_bind_hoverHandle,!1),this.elm.addEventListener("click",this.fn_bind_clickHandle,!1)}_triggerEvent(e){let t=document.querySelector("#_pick_tips_content");return!(!this.switch||this.excludeElmName.includes(e.target.localName.toLocaleLowerCase())||t&&t.contains(e.target))&&(e.stopPropagation(),e.preventDefault(),!0)}_hoverHandle(e){if(!1!==this._triggerEvent(e)){switch(this.mode){case"cover":this._coverShowPos(e);break;case"target":this._targetShowPos(e)}this.onHover&&this.onHover(e)}}_clickHandle(e){!1!==this._triggerEvent(e)&&this.onClick&&this.onClick(e)}_targetShowPos(e){this._removeTargetShowPos(),"body"!==e.target.localName&&e.target.classList.add("_picker_target_elm")}_removeTargetShowPos(){document.querySelectorAll("._picker_target_elm").forEach(e=>{e.classList.remove("_picker_target_elm")})}_coverShowPos(e){let t=e.target;var n=window.screen.availWidth,o=window.screen.availHeight,e=t.getBoundingClientRect(),e={tX:0<e.left?e.left:0,tY:0<e.top?e.top:0,w:e.right-e.left,h:e.bottom-e.top},s,e=`M ${e.tX} ${e.tY} h ${e.w} v ${e.h} h -${e.w} Z`,n=`<path d="${`M 0 0 h ${n} v ${o} h -${n} Z`} ${e}"></path>`,e=`<path d="${e}"></path>`;document.querySelector("#_picker_cover_wrap_box svg").innerHTML=n+e}_removeCoverShowPos(){document.querySelector("#_picker_cover_wrap_box svg").innerHTML=""}};