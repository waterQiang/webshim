jQuery.webshims.register("form-number-date-ui",function(c,f,n,l,v,g){var o=f.triggerInlineForm,s=Modernizr.inputtypes,t=function(){var c={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},b=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");return function(a,h){var f,i,g;i="width";b&&(i=c[a.css(b)]||i);f=a[i]();i="width"==i;if(f){var k=parseInt(h.css("marginLeft"),10)||0,q=h.outerWidth();(g=parseInt(a.css("marginRight"),10)||0)&&a.css("marginRight",0);k<=-1*q?(h.css("marginRight",
Math.floor(Math.abs(q+k)+g)),a.css("paddingRight",(parseInt(a.css("paddingRight"),10)||0)+Math.abs(k)),i&&a.css("width",Math.floor(f+k))):(h.css("marginRight",g),a.css("width",Math.floor(f-k-q)))}}}(),p={},w=c([]),r,j=function(d,b){c("input",d).add(b.filter("input")).each(function(){var a=c.prop(this,"type");if(j[a]&&!f.data(this,"shadowData"))j[a](c(this))})},x=function(d,b){if(g.lazyDate){var a=c.data(d[0],"setDateLazyTimer");a&&clearTimeout(a);c.data(d[0],"setDateLazyTimer",setTimeout(function(){d.datepicker("setDate",
b);c.removeData(d[0],"setDateLazyTimer");d=null},0))}else d.datepicker("setDate",b)};if(g.lazyDate===v)try{g.lazyDate=c.browser.msie&&9>f.browserVersion||500>c(n).width()&&500>c(n).height()}catch(z){}var u={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};if(!g.copyAttrs)g.copyAttrs={};f.extendUNDEFProp(g.copyAttrs,u);j.common=function(d,b,a){Modernizr.formvalidation&&d.bind("firstinvalid",function(a){(f.fromSubmit||!r)&&d.unbind("invalid.replacedwidgetbubble").bind("invalid.replacedwidgetbubble",
function(c){!a.isInvalidUIPrevented()&&!c.isDefaultPrevented()&&(f.validityAlert.showFor(a.target),a.preventDefault(),c.preventDefault());d.unbind("invalid.replacedwidgetbubble")})});var h,m,i=c("input, span.ui-slider-handle",b),j=d[0].attributes;for(h in g.copyAttrs)if((m=j[h])&&m.specified)u[h]&&i[0]?i.attr(h,m.nodeValue):b[0].setAttribute(h,m.nodeValue);m=d.attr("id");h=g.calculateWidth?{css:{marginRight:d.css("marginRight"),marginLeft:d.css("marginLeft")},outerWidth:d.outerWidth()}:{};h.label=
m?c('label[for="'+m+'"]',d[0].form):w;m=f.getID(h.label);b.addClass(d[0].className);f.addShadowDom(d,b,{data:a||{},shadowFocusElement:c("input.input-datetime-local-date, span.ui-slider-handle",b)[0],shadowChilds:i});d.after(b).hide();d[0].form&&c(d[0].form).bind("reset",function(a){a.originalEvent&&!a.isDefaultPrevented()&&setTimeout(function(){d.prop("value",d.prop("value"))},0)});1==b.length&&!c("*",b)[0]&&(b.attr("aria-labelledby",m),h.label.bind("click",function(){b.focus();return!1}));return h};
Modernizr.formvalidation&&["input","form"].forEach(function(c){var b=f.defineNodeNameProperty(c,"checkValidity",{prop:{value:function(){r=!0;var a=b.prop._supvalue.apply(this,arguments);r=!1;return a}}})});if(!s.date||g.replaceUI){var y=function(d,b,a,h){var m,i,j=function(){k.dpDiv.unbind("mousedown.webshimsmousedownhandler");i=m=!1},k=b.bind("focusin",function(){j();k.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){m=!0})}).bind("focusout blur",
function(a){m&&(i=!0,a.stopImmediatePropagation())}).datepicker(c.extend(!0,{onClose:function(){i&&b.not(":focus")?(j(),b.trigger("focusout"),b.triggerHandler("blur")):j()}},p,g.datepicker,d.data("datepicker"))).bind("change",a).data("datepicker");k.dpDiv.addClass("input-date-datepicker-control");h&&f.triggerDomUpdate(h[0]);"disabled,min,max,value,step,placeholder".split(",").forEach(function(a){var c=d.prop(a);""!==c&&("disabled"!=a||!c)&&d.prop(a,c)});return k};j.date=function(d){if(c.fn.datepicker){var b=
c('<input class="input-date" type="text" />'),a=this.common(d,b,j.date.attrs),h=y(d,b,function(a){j.date.blockAttr=!0;var h;if(g.lazyDate){var f=c.data(b[0],"setDateLazyTimer");f&&(clearTimeout(f),c.removeData(b[0],"setDateLazyTimer"))}try{h=(h=c.datepicker.parseDate(b.datepicker("option","dateFormat"),b.prop("value")))?c.datepicker.formatDate("yy-mm-dd",h):b.prop("value")}catch(k){h=b.prop("value")}d.prop("value",h);j.date.blockAttr=!1;a.stopImmediatePropagation();o(d[0],"input");o(d[0],"change")});
a.css&&(b.css(a.css),a.outerWidth&&b.outerWidth(a.outerWidth),h.trigger[0]&&t(b,h.trigger))}};j.date.attrs={disabled:function(d,b,a){c.prop(b,"disabled",!!a)},min:function(d,b,a){try{a=c.datepicker.parseDate("yy-mm-dd",a)}catch(h){a=!1}a&&c(b).datepicker("option","minDate",a)},max:function(d,b,a){try{a=c.datepicker.parseDate("yy-mm-dd",a)}catch(h){a=!1}a&&c(b).datepicker("option","maxDate",a)},placeholder:function(d,b,a){d=(a||"").split("-");3==d.length&&(a=c(b).datepicker("option","dateFormat").replace("yy",
d[0]).replace("mm",d[1]).replace("dd",d[2]));c.prop(b,"placeholder",a)},value:function(d,b,a){if(!j.date.blockAttr){try{var h=c.datepicker.parseDate("yy-mm-dd",a)}catch(f){h=!1}h?x(c(b),h):c.prop(b,"value",a)}}}}if(!s.range||g.replaceUI)j.range=function(d){if(c.fn.slider){var b=c('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),a=this.common(d,b,j.range.attrs);c("span",b).attr("aria-labelledby",a.label.attr("id"));a.label.bind("click",function(){c("span",
b).focus();return!1});a.css&&(b.css(a.css),a.outerWidth&&b.outerWidth(a.outerWidth));b.slider(c.extend(!0,{},g.slider,d.data("slider"))).bind("slide",function(a,c){if(a.originalEvent)j.range.blockAttr=!0,d.prop("value",c.value),j.range.blockAttr=!1,o(d[0],"input"),o(d[0],"change")});["disabled","min","max","step","value"].forEach(function(a){var b=d.attr(a),f;"value"==a&&!b&&(f=d.getShadowElement())&&(b=(c(f).slider("option","max")-c(f).slider("option","min"))/2);null!=b&&d.attr(a,b)})}},j.range.attrs=
{disabled:function(d,b,a){a=!!a;c(b).slider("option","disabled",a);c("span",b).attr({"aria-disabled":a+"",tabindex:a?"-1":"0"})},min:function(d,b,a){a=a?1*a||0:0;c(b).slider("option","min",a);c("span",b).attr({"aria-valuemin":a})},max:function(d,b,a){a=a||0===a?1*a||100:100;c(b).slider("option","max",a);c("span",b).attr({"aria-valuemax":a})},value:function(d,b,a){a=c(d).prop("valueAsNumber");isNaN(a)||(j.range.blockAttr||c(b).slider("option","value",a),c("span",b).attr({"aria-valuenow":a,"aria-valuetext":a}))},
step:function(d,b,a){a=a&&c.trim(a)?1*a||1:1;c(b).slider("option","step",a)}};if(!f.bugs.valueAsNumberSet&&(g.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range))n=function(){f.data(this,"hasShadow")&&c.prop(this,"value",c.prop(this,"value"))},f.onNodeNamesPropertyModify("input","valueAsNumber",n),f.onNodeNamesPropertyModify("input","valueAsDate",n);c.each("disabled,min,max,value,step,placeholder".split(","),function(c,b){f.onNodeNamesPropertyModify("input",b,function(a){var c=f.data(this,
"shadowData");if(c&&c.data&&c.data[b]&&c.nativeElement===this)c.data[b](this,c.shadowElement,a)})});if(!g.availabeLangs)g.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");n=function(){c.datepicker&&(f.activeLang({langObj:c.datepicker.regional,module:"form-number-date-ui",callback:function(d){c("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",
c.extend(!0,p,d,g.datepicker)).getNativeElement().filter("[placeholder]").prop("placeholder",function(c,a){return a})}}),c(l).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};c(l).bind("jquery-uiReady.langchange input-widgetsReady.langchange",n);n();(function(){var d=function(){var a={};return function(b){return b in a?a[b]:a[b]=c('<input type="'+b+'" />')[0].type===b}}();if(!d("number")){var b=f.cfg["forms-ext"],a=f.inputTypes,h=function(b,d,e){e=e||{};if(!("type"in e))e.type=
c.prop(b,"type");if(!("step"in e))e.step=f.getStep(b,e.type);if(!("valueAsNumber"in e))e.valueAsNumber=a[e.type].asNumber(c.prop(b,"value"));var h="any"==e.step?a[e.type].step*a[e.type].stepScaleFactor:e.step;f.addMinMaxNumberToCache("min",c(b),e);f.addMinMaxNumberToCache("max",c(b),e);if(isNaN(e.valueAsNumber))e.valueAsNumber=a[e.type].stepBase||0;if("any"!==e.step&&(b=Math.round(1E7*((e.valueAsNumber-(e.minAsnumber||0))%e.step))/1E7)&&Math.abs(b)!=e.step)e.valueAsNumber-=b;b=e.valueAsNumber+h*d;
return b=!isNaN(e.minAsNumber)&&b<e.minAsNumber?e.valueAsNumber*d<e.minAsNumber?e.minAsNumber:isNaN(e.maxAsNumber)?e.valueAsNumber:e.maxAsNumber:!isNaN(e.maxAsNumber)&&b>e.maxAsNumber?e.valueAsNumber*d>e.maxAsNumber?e.maxAsNumber:isNaN(e.minAsNumber)?e.valueAsNumber:e.minAsNumber:Math.round(1E7*b)/1E7};f.modules["form-number-date-ui"].getNextStep=h;var j=function(b,d,e){if(!b.disabled&&!b.readOnly&&!c(e).hasClass("step-controls")&&(c.prop(b,"value",a[d].numberToString(h(b,c(e).hasClass("step-up")?
1:-1,{type:d}))),c(b).unbind("blur.stepeventshim"),o(b,"input"),l.activeElement)){if(l.activeElement!==b)try{b.focus()}catch(f){}setTimeout(function(){if(l.activeElement!==b)try{b.focus()}catch(a){}c(b).one("blur.stepeventshim",function(){o(b,"change")})},0)}};if(b.stepArrows){var g={set:function(){var a=f.data(this,"step-controls");if(a)a[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};f.onNodeNamesPropertyModify("input","disabled",g);f.onNodeNamesPropertyModify("input",
"readonly",c.extend({},g))}var n={38:1,40:-1};f.addReady(function(g,i){b.stepArrows&&c("input",g).add(i.filter("input")).each(function(){var e=c.prop(this,"type");if(a[e]&&a[e].asNumber&&b.stepArrows&&!(!0!==b.stepArrows&&!b.stepArrows[e]||d(e)||c(g).hasClass("has-step-controls"))){var g=this,i=c('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(g).bind("selectstart dragstart",function(){return!1}).bind("mousedown mousepress",function(a){j(g,
e,a.target);return!1}).bind("mousepressstart mousepressend",function(a){c(a.target)["mousepressstart"==a.type?"addClass":"removeClass"]("mousepress-ui")}),k=function(b,d){if(!g.disabled&&!g.readOnly)return c.prop(g,"value",a[e].numberToString(h(g,d,{type:e}))),o(g,"input"),!1},l=c(g).addClass("has-step-controls").attr({readonly:g.readOnly,disabled:g.disabled,autocomplete:"off",role:"spinbutton"}).bind(c.browser.msie?"keydown":"keypress",function(b){if(!g.disabled&&!g.readOnly&&n[b.keyCode])return c.prop(g,
"value",a[e].numberToString(h(g,n[b.keyCode],{type:e}))),o(g,"input"),!1});c.fn.mwheelIntent?l.add(i).bind("mwheelIntent",k):l.bind("focus",function(){l.add(i).unbind(".mwhellwebshims").bind("mousewheel.mwhellwebshims",k)}).bind("blur",function(){c(g).add(i).unbind(".mwhellwebshims")});f.data(g,"step-controls",i);b.calculateWidth&&(t(l,i),i.css("marginTop",(l.outerHeight()-i.outerHeight())/2))}})})}})();f.addReady(function(d,b){c(l).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(c.datepicker||c.fn.slider){if(c.datepicker&&!p.dateFormat)p.dateFormat=c.datepicker._defaults.dateFormat;j(d,b)}c.datepicker&&c.fn.slider?c(l).unbind(".initinputui"):f.modules["input-widgets"].src||f.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
