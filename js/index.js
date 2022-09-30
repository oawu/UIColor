"use strict";/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */Load.Vue({data:{segmented:{envs:["iOS","macOS","watchOS"],names:["iOS UIColor","CSS var"],types:["RGBA","HEX"],get env(){return Data.get("oawu/uicolor/env")||0},set env(a){return Data.set("oawu/uicolor/env",a)},get type(){return Data.get("oawu/uicolor/type")||0},set type(a){return Data.set("oawu/uicolor/type",a)},get name(){return Data.get("oawu/uicolor/name")||0},set name(a){return Data.set("oawu/uicolor/name",a)},menu:{get"0"(){return Data.get("oawu/uicolor/env/0/menu")||0},set"0"(a){Data.set("oawu/uicolor/env/0/menu",a)},get"1"(){return Data.get("oawu/uicolor/env/1/menu")||0},set"1"(a){Data.set("oawu/uicolor/env/1/menu",a)},get"2"(){return Data.get("oawu/uicolor/env/2/menu")||0},set"2"(a){Data.set("oawu/uicolor/env/2/menu",a)}}},envs:[{name:"iOS",menu:[{name:"text",title:"\u6587\u5B57",groups:[[{colors:[[0,0,0,1],[255,255,255,1]],name:"label"},{colors:[[60,60,67,.6],[235,235,245,.6]],name:"secondaryLabel"},{colors:[[60,60,67,.3],[235,235,245,.3]],name:"tertiaryLabel"},{colors:[[60,60,67,.18],[235,235,245,.18]],name:"quaternaryLabel"}],[{colors:[[0,122,255,1],[9,132,255,1]],name:"link"},{colors:[[0,122,255,1],[10,132,255,1]],name:"tintColor"},{colors:[[60,60,67,.3],[235,235,245,.3]],name:"placeholderText"}],[{colors:[[255,255,255,.6],[255,255,255,.6]],name:"lightText"},{colors:[[0,0,0,1],[0,0,0,1]],name:"darkText"}]]},{name:"background",title:"\u80CC\u666F",groups:[[{colors:[[255,255,255,1],[0,0,0,1]],name:"systemBackground"},{colors:[[242,242,247,1],[28,28,30,1]],name:"secondarySystemBackground"},{colors:[[255,255,255,1],[44,44,46,1]],name:"tertiarySystemBackground"}],[{colors:[[242,242,247,1],[0,0,0,1]],name:"systemGroupedBackground"},{colors:[[255,255,255,1],[28,28,30,1]],name:"secondarySystemGroupedBackground"},{colors:[[242,242,247,1],[44,44,46,1]],name:"tertiarySystemGroupedBackground"}]]},{name:"color",title:"\u984F\u8272",groups:[[{colors:[[255,59,48,1],[255,69,58,1]],name:"systemRed"},{colors:[[255,149,0,1],[255,159,10,1]],name:"systemOrange"},{colors:[[255,204,0,1],[255,214,10,1]],name:"systemYellow"},{colors:[[52,199,89,1],[48,209,88,1]],name:"systemGreen"},{colors:[[0,199,190,1],[102,212,207,1]],name:"systemMint"},{colors:[[48,176,199,1],[64,200,224,1]],name:"systemTeal"},{colors:[[50,173,230,1],[100,210,255,1]],name:"systemCyan"},{colors:[[0,122,255,1],[10,132,255,1]],name:"systemBlue"},{colors:[[88,86,214,1],[94,92,230,1]],name:"systemIndigo"},{colors:[[175,82,222,1],[191,90,242,1]],name:"systemPurple"},{colors:[[255,45,85,1],[255,55,95,1]],name:"systemPink"},{colors:[[162,132,94,1],[172,142,104,1]],name:"systemBrown"}]]},{name:"separator",title:"\u5206\u9694",groups:[[{colors:[[60,60,67,.29],[84,84,88,.6]],name:"separator"},{colors:[[198,198,200,1],[56,56,58,1]],name:"opaqueSeparator"}]]},{name:"fill",title:"\u586B\u5145",groups:[[{colors:[[120,120,128,.2],[120,120,128,.36]],name:"systemFill"},{colors:[[120,120,128,.16],[120,120,128,.32]],name:"secondarySystemFill"},{colors:[[118,118,128,.12],[118,118,128,.24]],name:"tertiarySystemFill"},{colors:[[116,116,128,.08],[118,118,128,.18]],name:"quaternarySystemFill"}]]},{name:"gray",title:"\u7070\u8272",groups:[[{colors:[[142,142,147,1],[142,142,147,1]],name:"systemGray"},{colors:[[174,174,178,1],[99,99,102,1]],name:"systemGray2"},{colors:[[199,199,204,1],[72,72,74,1]],name:"systemGray3"},{colors:[[209,209,214,1],[58,58,60,1]],name:"systemGray4"},{colors:[[229,229,234,1],[44,44,46,1]],name:"systemGray5"},{colors:[[242,242,247,1],[28,28,30,1]],name:"systemGray6"}]]}]},{name:"macOS",menu:[{name:"text",title:"\u6587\u5B57",groups:[[{colors:[[0,0,0,.85],[255,255,255,.85]],name:"labelColor"},{colors:[[0,0,0,.1],[255,255,255,.1]],name:"quaternaryLabelColor"},{colors:[[0,0,0,.5],[255,255,255,.55]],name:"secondaryLabelColor"},{colors:[[0,0,0,.26],[255,255,255,.25]],name:"tertiaryLabelColor"}],[{colors:[[0,122,255,1],[0,122,255,1]],name:"controlAccentColor"},{colors:[[255,255,255,1],[30,30,30,1]],name:"controlBackgroundColor"},{colors:[[255,255,255,1],[255,255,255,.25]],name:"controlColor"},{colors:[[0,0,0,.85],[255,255,255,.85]],name:"controlTextColor"}],[{colors:[[0,99,225,1],[0,88,208,1]],name:"selectedContentBackgroundColor"},{colors:[[179,215,255,1],[63,99,139,1]],name:"selectedControlColor"},{colors:[[0,0,0,.85],[255,255,255,.85]],name:"selectedControlTextColor"},{colors:[[255,255,255,1],[255,255,255,1]],name:"selectedMenuItemTextColor"},{colors:[[179,215,255,1],[63,99,139,1]],name:"selectedTextBackgroundColor"},{colors:[[0,0,0,1],[255,255,255,1]],name:"selectedTextColor"}],[{colors:[[0,0,0,.1],[255,255,255,.1]],name:"separatorColor"},{colors:[[0,0,0,1],[0,0,0,1]],name:"shadowColor"},{colors:[[255,255,255,1],[30,30,30,1]],name:"textBackgroundColor"},{colors:[[0,0,0,1],[255,255,255,1]],name:"textColor"},{colors:[[0,104,218,1],[65,156,255,1]],name:"linkColor"},{colors:[[0,0,0,.25],[255,255,255,.25]],name:"placeholderTextColor"},{colors:[[255,255,255,1],[180,180,180,1]],name:"highlightColor"},{colors:[[255,255,0,1],[255,255,0,1]],name:"findHighlightColor"},{colors:[[0,103,244,.5],[26,169,255,.5]],name:"keyboardFocusIndicatorColor"},{colors:[[0,0,0,.85],[255,255,255,1]],name:"headerTextColor"}],[{colors:[[255,255,255,1],[255,255,255,1]],name:"alternateSelectedControlTextColor"},{colors:[[0,0,0,.25],[255,255,255,.25]],name:"disabledControlTextColor"},{colors:[[230,230,230,1],[26,26,26,1]],name:"gridColor"},{colors:[[0,0,0,1],[0,0,0,1]],name:"scrubberTexturedBackgroundColor"},{colors:[[150,150,150,.9],[40,40,40,1]],name:"underPageBackgroundColor"},{colors:[[220,220,220,1],[70,70,70,1]],name:"unemphasizedSelectedContentBackgroundColor"},{colors:[[220,220,220,1],[70,70,70,1]],name:"unemphasizedSelectedTextBackgroundColor"},{colors:[[0,0,0,1],[255,255,255,1]],name:"unemphasizedSelectedTextColor"},{colors:[[236,236,236,1],[50,50,50,1]],name:"windowBackgroundColor"},{colors:[[0,0,0,.85],[255,255,255,.85]],name:"windowFrameTextColor"}]]},{name:"color",title:"\u984F\u8272",groups:[[{colors:[[255,49,38,1],[255,79,68,1]],name:"systemRed"},{colors:[[245,139,0,1],[255,169,20,1]],name:"systemOrange"},{colors:[[245,194,0,1],[255,224,20,1]],name:"systemYellow"},{colors:[[30,195,55,1],[60,225,85,1]],name:"systemGreen"},{colors:[[0,189,180,1],[108,224,219,1]],name:"systemMint"},{colors:[[46,167,189,1],[68,212,237,1]],name:"systemTeal"},{colors:[[65,175,220,1],[90,205,250,1]],name:"systemCyan"},{colors:[[0,112,245,1],[20,142,255,1]],name:"systemBlue"},{colors:[[84,82,204,1],[99,97,242,1]],name:"systemIndigo"},{colors:[[159,75,201,1],[204,101,255,1]],name:"systemPurple"},{colors:[[245,35,75,1],[255,65,105,1]],name:"systemPink"},{colors:[[152,122,84,1],[182,152,114,1]],name:"systemBrown"},{colors:[[132,132,137,1],[162,162,167,1]],name:"systemGray"}]]}]},{name:"watchOS",menu:[{name:"color",title:"\u984F\u8272",groups:[[{colors:[[255,59,48,1]],name:"systemRed"},{colors:[[255,149,0,1]],name:"systemOrange"},{colors:[[255,230,32,1]],name:"systemYellow"},{colors:[[4,222,113,1]],name:"systemGreen"},{colors:[[102,212,207,1]],name:"systemMint"},{colors:[[106,196,220,1]],name:"systemTeal"},{colors:[[90,200,250,1]],name:"systemCyan"},{colors:[[32,148,250,1]],name:"systemBlue"},{colors:[[120,122,255,1]],name:"systemIndigo"},{colors:[[191,90,242,1]],name:"systemPurple"},{colors:[[250,17,79,1]],name:"systemPink"},{colors:[[172,142,104,1]],name:"systemBrown"},{colors:[[155,160,170,1]],name:"systemGray"}]]}]}],refs:[{text:"OA Wu",href:"https://www.ioa.tw"},{text:"Color Palettes for Designers and Artists - Color Hunt",href:"https://colorhunt.co/"},{text:"siktsu\xED \u8272\u6C34  Color World - \u514D\u8CBB\u914D\u8272\u5DE5\u5177",href:"https://siktsui.com/home"},{text:"Fresh Background Gradients | WebGradients.com \uD83D\uDC8E",href:"https://webgradients.com/"},{text:"Apple Developer Documentation",href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"},{text:"Color - Foundations - Human Interface Guidelines - Design - Apple Developer",href:"https://developer.apple.com/design/human-interface-guidelines/foundations/color/"}]},mounted:function mounted(){var a=this;window.addEventListener("keydown",function(b){49==b.keyCode&&(a.segmented.name=0),50==b.keyCode&&(a.segmented.name=1);var c=a.segmented.env,d=a.segmented.envs.length;37==b.keyCode&&c--,39==b.keyCode&&c++,a.segmented.env=c<d?0>c?d-1:c:0;var e=a.segmented.menu[a.segmented.env],f=a.menu.length;38==b.keyCode&&e--,40==b.keyCode&&e++,a.segmented.menu[a.segmented.env]=e<f?0>e?f-1:e:0})},computed:{menu:function menu(){return this.envs[this.segmented.env]===void 0?[]:this.envs[this.segmented.env].menu},groups:function groups(){return this.segmented.menu[this.segmented.env]!==void 0&&this.menu[this.segmented.menu[this.segmented.env]]!==void 0?this.menu[this.segmented.menu[this.segmented.env]].groups:[]}},methods:{nameStr:function nameStr(a){return this.segmented.name?"var(--ui-color-".concat(this.segmented.envs[this.segmented.env],"-").concat(a,")"):a},colorStr:function colorStr(a){return 0==this.segmented.type?"rgba(".concat(a.join(", "),")"):1==this.segmented.type?"#".concat((a[0]|256).toString(16).slice(1)).concat((a[1]|256).toString(16).slice(1)).concat((a[2]|256).toString(16).slice(1)).concat((255*a[3]|256).toString(16).slice(1)):""},copy:function copy(a){var b=document.createElement("textarea");b.className="copy",b.value=a,document.body.appendChild(b),b.select();try{document.execCommand("copy"),Toastr.success("\u8907\u88FD\u6210\u529F\uFF01")}catch(a){Toastr.failure("\u8907\u88FD\u5931\u6557\u2026")}document.body.removeChild(b)}},template:"\n    main#app\n      nav#nav._h\n        segmented => :items=segmented.types   :index=segmented.type   @click=i => segmented.type = i\n        segmented => :items=segmented.names   :index=segmented.name   @click=i => segmented.name = i\n\n      aside#menu._v\n        div.env\n          segmented => :items=segmented.envs   :index=segmented.env   @click=i=>segmented.env=i\n\n        div.menu._v\n          label._v => *for=(item, i) in menu   :key=item.name   :class=['_' + item.name, {active: i == segmented.menu[segmented.env]}]   @click=segmented.menu[segmented.env] = i\n            i => *text=item.groups.length\n            b => *text=item.title\n            span => *text=item.name\n        div.refs._v\n          a => *for=({ text, href }, i) in refs   :key=i   *text=text   :href=href   target=_blank\n\n      div#groups._v => *if=groups.length\n        div.group._h => *for=(group, i) in groups   :key=i\n          div.color._v => *for=mode in group   :key=mode.name\n            label => *text=mode.name   @click=copy(nameStr(mode.name))\n            div.mode._h => *for=(color, i) in mode.colors   :key=i\n              figure => :style={backgroundColor: 'rgba(' + color.join(', ') + ')'}\n              label => *text=colorStr(color)   @click=copy(colorStr(color))"});