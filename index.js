!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("three"),require("@seregpie/three.text-texture")):"function"==typeof define&&define.amd?define(["three","@seregpie/three.text-texture"],t):((e="undefined"!=typeof globalThis?globalThis:e||self).THREE=e.THREE||{},e.THREE.TextSprite=t(e.THREE,e.THREE.TextTexture))}(this,(function(e,t){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=i(t);let o=class extends e.Sprite{constructor({fontSize:t=1,...i}={},o=new e.SpriteMaterial({depthWrite:!1})){super(o);let a=new r.default({fontSize:t,...i});this.material.map=a}onBeforeRender(e,t,i){let{material:r}=this,{map:o}=r;if(o.checkFontFace()){let{scale:t}=this,{height:r,width:a}=o;a&&r?(t.setX(a).setY(r),o.setOptimalPixelRatio(this,e,i),o.redraw()):t.setScalar(1)}else o.loadFontFace()}dispose(){let{material:e}=this,{map:t}=e;t.dispose(),e.dispose()}};return["alignment","backgroundColor","color","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineGap","padding","strokeColor","strokeWidth","text"].forEach((e=>{Object.defineProperty(o.prototype,e,{get(){return this.material.map[e]},set(t){this.material.map[e]=t}})})),o.prototype.isTextSprite=!0,o}));
