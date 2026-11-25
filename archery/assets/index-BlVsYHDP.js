(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const _d="183",Pm=0,wh=1,Lm=2,Zs=1,Dm=2,$s=3,Ji=0,Mn=1,si=2,Ai=0,as=1,Eh=2,Ah=3,Th=4,Nm=5,fr=100,Um=101,Fm=102,km=103,Om=104,Bm=200,zm=201,Gm=202,Vm=203,ml=204,gl=205,Hm=206,Wm=207,Xm=208,$m=209,Ym=210,qm=211,jm=212,Km=213,Jm=214,xl=0,_l=1,vl=2,ls=3,bl=4,yl=5,Ml=6,Sl=7,Af=0,Zm=1,Qm=2,oi=0,Tf=1,Rf=2,Cf=3,If=4,Pf=5,Lf=6,Df=7,Nf=300,Sr=301,ds=302,oc=303,cc=304,zo=306,wl=1e3,wi=1001,El=1002,an=1003,eg=1004,Aa=1005,un=1006,lc=1007,gr=1008,Pn=1009,Uf=1010,Ff=1011,ra=1012,vd=1013,di=1014,qn=1015,Ri=1016,bd=1017,yd=1018,sa=1020,kf=35902,Of=35899,Bf=1021,zf=1022,jn=1023,Ci=1026,xr=1027,Md=1028,Sd=1029,hs=1030,wd=1031,Ed=1033,io=33776,ro=33777,so=33778,ao=33779,Al=35840,Tl=35841,Rl=35842,Cl=35843,Il=36196,Pl=37492,Ll=37496,Dl=37488,Nl=37489,Ul=37490,Fl=37491,kl=37808,Ol=37809,Bl=37810,zl=37811,Gl=37812,Vl=37813,Hl=37814,Wl=37815,Xl=37816,$l=37817,Yl=37818,ql=37819,jl=37820,Kl=37821,Jl=36492,Zl=36494,Ql=36495,ed=36283,td=36284,nd=36285,id=36286,tg=3200,Gf=0,ng=1,Vi="",Rn="srgb",us="srgb-linear",xo="linear",lt="srgb",Fr=7680,Rh=519,ig=512,rg=513,sg=514,Ad=515,ag=516,og=517,Td=518,cg=519,Ch=35044,Ih=35048,Ph="300 es",ai=2e3,aa=2001;function lg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dg(){const n=_o("canvas");return n.style.display="block",n}const Lh={};function Dh(...n){const e="THREE."+n.shift();console.log(e,...n)}function Vf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=Vf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=Vf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vo(...n){const e=n.join(" ");e in Lh||(Lh[e]=!0,Pe(...n))}function hg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ug={[xl]:_l,[vl]:Ml,[bl]:Sl,[ls]:yl,[_l]:xl,[Ml]:vl,[Sl]:bl,[yl]:ls};class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,rd=180/Math.PI;function _a(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function fg(n,e){return(n%e+e)%e}function hc(n,e,t){return(1-t)*n+t*e}function Ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],g=s[a+2],b=s[a+3];if(h!==b||c!==d||l!==p||u!==g){let m=c*d+l*p+u*g+h*b;m<0&&(d=-d,p=-p,g=-g,b=-b,m=-m);let f=1-o;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);f=Math.sin(f*x)/M,o=Math.sin(o*x)/M,c=c*f+d*o,l=l*f+p*o,u=u*f+g*o,h=h*f+b*o}else{c=c*f+d*o,l=l*f+p*o,u=u*f+g*o,h=h*f+b*o;const x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-o*p,e[t+2]=l*g+u*p+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new F,Nh=new Rr;class Fe{constructor(e,t,i,r,s,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],b=r[0],m=r[3],f=r[6],x=r[1],M=r[4],S=r[7],R=r[2],T=r[5],A=r[8];return s[0]=a*b+o*x+c*R,s[3]=a*m+o*M+c*T,s[6]=a*f+o*S+c*A,s[1]=l*b+u*x+h*R,s[4]=l*m+u*M+h*T,s[7]=l*f+u*S+h*A,s[2]=d*b+p*x+g*R,s[5]=d*m+p*M+g*T,s[8]=d*f+p*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=t*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(r*l-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=d*b,e[4]=(u*t-r*c)*b,e[5]=(r*s-o*t)*b,e[6]=p*b,e[7]=(i*c-l*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new Fe,Uh=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pg(){const n={enabled:!0,workingColorSpace:us,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vi?xo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[us]:{primaries:e,whitePoint:i,transfer:xo,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),n}const Je=pg();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let kr;class mg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{kr===void 0&&(kr=_o("canvas")),kr.width=e.width,kr.height=e.height;const r=kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=kr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gg=0;class Rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pc(r[a].image)):s.push(pc(r[a]))}else s=pc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let xg=0;const mc=new F;class vn extends ws{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=wi,r=wi,s=un,a=gr,o=jn,c=Pn,l=vn.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=_a(),this.name="",this.source=new Rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wl:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wl:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Nf;vn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],b=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,S=(p+1)/2,R=(f+1)/2,T=(u+d)/4,A=(h+b)/4,v=(g+m)/4;return M>S&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=v/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=v/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-b)/x,this.z=(d-u)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _g extends ws{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new vn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Rd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends _g{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hf extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vg extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bt{constructor(e,t,i,r,s,a,o,c,l,u,h,d,p,g,b,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,p,g,b,m)}set(e,t,i,r,s,a,o,c,l,u,h,d,p,g,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,b=l*h;t[0]=d+b*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,b=l*h;t[0]=d-b*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+b,t[1]=c*h,t[5]=b*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=b-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-b*h}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+b,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,yg)}lookAt(e,t,i){const r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ni.crossVectors(i,wn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ni.crossVectors(i,wn)),Ni.normalize(),Ta.crossVectors(wn,Ni),r[0]=Ni.x,r[4]=Ta.x,r[8]=wn.x,r[1]=Ni.y,r[5]=Ta.y,r[9]=wn.y,r[2]=Ni.z,r[6]=Ta.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],b=i[6],m=i[10],f=i[14],x=i[3],M=i[7],S=i[11],R=i[15],T=r[0],A=r[4],v=r[8],w=r[12],z=r[1],C=r[5],U=r[9],B=r[13],W=r[2],k=r[6],H=r[10],O=r[14],Z=r[3],J=r[7],de=r[11],ge=r[15];return s[0]=a*T+o*z+c*W+l*Z,s[4]=a*A+o*C+c*k+l*J,s[8]=a*v+o*U+c*H+l*de,s[12]=a*w+o*B+c*O+l*ge,s[1]=u*T+h*z+d*W+p*Z,s[5]=u*A+h*C+d*k+p*J,s[9]=u*v+h*U+d*H+p*de,s[13]=u*w+h*B+d*O+p*ge,s[2]=g*T+b*z+m*W+f*Z,s[6]=g*A+b*C+m*k+f*J,s[10]=g*v+b*U+m*H+f*de,s[14]=g*w+b*B+m*O+f*ge,s[3]=x*T+M*z+S*W+R*Z,s[7]=x*A+M*C+S*k+R*J,s[11]=x*v+M*U+S*H+R*de,s[15]=x*w+M*B+S*O+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15],x=c*p-l*d,M=o*p-l*h,S=o*d-c*h,R=a*p-l*u,T=a*d-c*u,A=a*h-o*u;return t*(b*x-m*M+f*S)-i*(g*x-m*R+f*T)+r*(g*M-b*R+f*A)-s*(g*S-b*T+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],x=t*o-i*a,M=t*c-r*a,S=t*l-s*a,R=i*c-r*o,T=i*l-s*o,A=r*l-s*c,v=u*b-h*g,w=u*m-d*g,z=u*f-p*g,C=h*m-d*b,U=h*f-p*b,B=d*f-p*m,W=x*B-M*U+S*C+R*z-T*w+A*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/W;return e[0]=(o*B-c*U+l*C)*k,e[1]=(r*U-i*B-s*C)*k,e[2]=(b*A-m*T+f*R)*k,e[3]=(d*T-h*A-p*R)*k,e[4]=(c*z-a*B-l*w)*k,e[5]=(t*B-r*z+s*w)*k,e[6]=(m*S-g*A-f*M)*k,e[7]=(u*A-d*S+p*M)*k,e[8]=(a*U-o*z+l*v)*k,e[9]=(i*z-t*U-s*v)*k,e[10]=(g*T-b*S+f*x)*k,e[11]=(h*S-u*T-p*x)*k,e[12]=(o*w-a*C-c*v)*k,e[13]=(t*C-i*w+r*v)*k,e[14]=(b*M-g*R-m*x)*k,e[15]=(u*R-h*M+d*x)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,g=s*h,b=a*u,m=a*h,f=o*h,x=c*l,M=c*u,S=c*h,R=i.x,T=i.y,A=i.z;return r[0]=(1-(b+f))*R,r[1]=(p+S)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+f))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+M)*A,r[9]=(m-x)*A,r[10]=(1-(d+b))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),c=Or.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);const l=1/a,u=1/o,h=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=ai,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,b;if(c)g=s/(a-s),b=a*s/(a-s);else if(o===ai)g=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===aa)g=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ai,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,b;if(c)g=1/(a-s),b=a/(a-s);else if(o===ai)g=-2/(a-s),b=-(a+s)/(a-s);else if(o===aa)g=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Or=new F,Gn=new bt,bg=new F(0,0,0),yg=new F(1,1,1),Ni=new F,Ta=new F,wn=new F,kh=new bt,Oh=new Rr;class hi{constructor(e=0,t=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mg=0;const Bh=new F,Br=new Rr,gi=new bt,Ra=new F,Us=new F,Sg=new F,wg=new Rr,zh=new F(1,0,0),Gh=new F(0,1,0),Vh=new F(0,0,1),Hh={type:"added"},Eg={type:"removed"},zr={type:"childadded",child:null},gc={type:"childremoved",child:null};class Qt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new F,t=new hi,i=new Rr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Fe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(zh,e)}rotateY(e){return this.rotateOnAxis(Gh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,t){return Bh.copy(e).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zh,e)}translateY(e){return this.translateOnAxis(Gh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ra.copy(e):Ra.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Us,Ra,this.up):gi.lookAt(Ra,Us,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(gi),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hh),zr.child=e,this.dispatchEvent(zr),zr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hh),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new F(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ag={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),f=this._getHandJoint(l,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function _c(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=fg(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_c(a,s,e+1/3),this.g=_c(a,s,e),this.b=_c(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const i=Xf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Je.workingToColorSpace(ln.copy(this),e),Math.round($e(ln.r*255,0,255))*65536+Math.round($e(ln.g*255,0,255))*256+Math.round($e(ln.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(ln.copy(this),t);const i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Rn){Je.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,r=ln.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Ca);const i=hc(Ui.h,Ca.h,t),r=hc(Ui.s,Ca.s,t),s=hc(Ui.l,Ca.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ye;Ye.NAMES=Xf;class Cd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=i}clone(){return new Cd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $f extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vn=new F,xi=new F,vc=new F,_i=new F,Gr=new F,Vr=new F,Wh=new F,bc=new F,yc=new F,Mc=new F,Sc=new Ft,wc=new Ft,Ec=new Ft;class $n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),xi.subVectors(i,t),vc.subVectors(e,t);const a=Vn.dot(Vn),o=Vn.dot(xi),c=Vn.dot(vc),l=xi.dot(xi),u=xi.dot(vc),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(o,_i.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Sc.setScalar(0),wc.setScalar(0),Ec.setScalar(0),Sc.fromBufferAttribute(e,t),wc.fromBufferAttribute(e,i),Ec.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sc,s.x),a.addScaledVector(wc,s.y),a.addScaledVector(Ec,s.z),a}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),xi.subVectors(e,t),Vn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Gr.subVectors(r,i),Vr.subVectors(s,i),bc.subVectors(e,i);const c=Gr.dot(bc),l=Vr.dot(bc);if(c<=0&&l<=0)return t.copy(i);yc.subVectors(e,r);const u=Gr.dot(yc),h=Vr.dot(yc);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Gr,a);Mc.subVectors(e,s);const p=Gr.dot(Mc),g=Vr.dot(Mc);if(g>=0&&p<=g)return t.copy(s);const b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Vr,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Wh.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Wh,o);const f=1/(m+b+d);return a=b*f,o=d*f,t.copy(i).addScaledVector(Gr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Pa.subVectors(this.max,Fs),Hr.subVectors(e.a,Fs),Wr.subVectors(e.b,Fs),Xr.subVectors(e.c,Fs),Fi.subVectors(Wr,Hr),ki.subVectors(Xr,Wr),sr.subVectors(Hr,Xr);let t=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-sr.z,sr.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,sr.z,0,-sr.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-sr.y,sr.x,0];return!Ac(t,Hr,Wr,Xr,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,Hr,Wr,Xr,Pa))?!1:(La.crossVectors(Fi,ki),t=[La.x,La.y,La.z],Ac(t,Hr,Wr,Xr,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,Ia=new Cr,Hr=new F,Wr=new F,Xr=new F,Fi=new F,ki=new F,sr=new F,Fs=new F,Pa=new F,La=new F,ar=new F;function Ac(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ar.fromArray(n,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),c=e.dot(ar),l=t.dot(ar),u=i.dot(ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Wt=new F,Da=new je;let Tg=0;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ch,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),r=bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),r=bn(r,this.array),s=bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ch&&(e.usage=this.usage),e}}class Yf extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qf extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Rg=new Cr,ks=new F,Tc=new F;class Es{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Tc)),this.expandByPoint(ks.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cg=0;const Dn=new bt,Rc=new Qt,$r=new F,En=new Cr,Os=new Cr,Kt=new F;class Vt extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?qf:Yf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(En.min,Os.min),En.expandByPoint(Kt),Kt.addVectors(En.max,Os.max),En.expandByPoint(Kt)):(En.expandByPoint(Os.min),En.expandByPoint(Os.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Kt.fromBufferAttribute(o,l),c&&($r.fromBufferAttribute(e,l),Kt.add($r)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new F,c[v]=new F;const l=new F,u=new F,h=new F,d=new je,p=new je,g=new je,b=new F,m=new F;function f(v,w,z){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,z),d.fromBufferAttribute(s,v),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,z),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[v].add(b),o[w].add(b),o[z].add(b),c[v].add(m),c[w].add(m),c[z].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,w=x.length;v<w;++v){const z=x[v],C=z.start,U=z.count;for(let B=C,W=C+U;B<W;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new F,S=new F,R=new F,T=new F;function A(v){R.fromBufferAttribute(r,v),T.copy(R);const w=o[v];M.copy(w),M.sub(R.multiplyScalar(R.dot(w))).normalize(),S.crossVectors(T,w);const C=S.dot(c[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,C)}for(let v=0,w=x.length;v<w;++v){const z=x[v],C=z.start,U=z.count;for(let B=C,W=C+U;B<W;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new kn(d,u,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ig=0;class As extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=as,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ml&&(i.blendSrc=this.blendSrc),this.blendDst!==gl&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new F,Cc=new F,Na=new F,Oi=new F,Ic=new F,Ua=new F,Pc=new F;class jf{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Cc.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Cc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Na),o=Oi.dot(this.direction),c=-Oi.dot(Na),l=Oi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const b=1/u;h*=b,d*=b,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cc).addScaledVector(Na,d),p}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){Ic.subVectors(t,e),Ua.subVectors(i,e),Pc.crossVectors(Ic,Ua);let a=this.direction.dot(Pc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const c=o*this.direction.dot(Ua.crossVectors(Oi,Ua));if(c<0)return null;const l=o*this.direction.dot(Ic.cross(Oi));if(l<0||c+l>a)return null;const u=-o*Oi.dot(Pc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yi extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xh=new bt,or=new jf,Fa=new Es,$h=new F,ka=new F,Oa=new F,Ba=new F,Lc=new F,za=new F,Yh=new F,Ga=new F;class ft extends Qt{constructor(e=new Vt,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){za.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Lc.fromBufferAttribute(h,e),a?za.addScaledVector(Lc,u):za.addScaledVector(Lc.sub(t),u))}t.add(za)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(Fa.containsPoint(or.origin)===!1&&(or.intersectSphere(Fa,$h)===null||or.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(Xh.copy(s).invert(),or.copy(e.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=M;S<R;S+=3){const T=o.getX(S),A=o.getX(S+1),v=o.getX(S+2);r=Va(this,f,e,i,l,u,h,T,A,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const x=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);r=Va(this,a,e,i,l,u,h,x,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=M;S<R;S+=3){const T=S,A=S+1,v=S+2;r=Va(this,f,e,i,l,u,h,T,A,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const x=m,M=m+1,S=m+2;r=Va(this,a,e,i,l,u,h,x,M,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Pg(n,e,t,i,r,s,a,o){let c;if(e.side===Mn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ji,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:n}}function Va(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,ka),n.getVertexPosition(c,Oa),n.getVertexPosition(l,Ba);const u=Pg(n,e,t,i,ka,Oa,Ba,Yh);if(u){const h=new F;$n.getBarycoord(Yh,ka,Oa,Ba,h),r&&(u.uv=$n.getInterpolatedAttribute(r,o,c,l,h,new je)),s&&(u.uv1=$n.getInterpolatedAttribute(s,o,c,l,h,new je)),a&&(u.normal=$n.getInterpolatedAttribute(a,o,c,l,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};$n.getNormal(ka,Oa,Ba,d.normal),u.face=d,u.barycoord=h}return u}class Kf extends vn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=an,u=an,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sd extends kn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yr=new bt,qh=new bt,Ha=[],jh=new Cr,Lg=new bt,Bs=new ft,zs=new Es;class Dg extends ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sd(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Lg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),jh.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(jh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),zs.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(i),e.ray.intersectsSphere(zs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Yr),qh.multiplyMatrices(i,Yr),Bs.matrixWorld=qh,Bs.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){const c=Ha[a];c.instanceId=s,c.object=this,t.push(c)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kf(new Float32Array(r*this.count),r,this.count,Md,qn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dc=new F,Ng=new F,Ug=new Fe;class hr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Dc.subVectors(i,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ug.getNormalMatrix(e),r=this.coplanarPoint(Dc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Es,Fg=new je(.5,.5),Wa=new F;class Id{constructor(e=new hr,t=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],b=s[9],m=s[10],f=s[11],x=s[12],M=s[13],S=s[14],R=s[15];if(r[0].setComponents(l-a,p-u,f-g,R-x).normalize(),r[1].setComponents(l+a,p+u,f+g,R+x).normalize(),r[2].setComponents(l+o,p+h,f+b,R+M).normalize(),r[3].setComponents(l-o,p-h,f-b,R-M).normalize(),i)r[4].setComponents(c,d,m,S).normalize(),r[5].setComponents(l-c,p-d,f-m,R-S).normalize();else if(r[4].setComponents(l-c,p-d,f-m,R-S).normalize(),t===ai)r[5].setComponents(l+c,p+d,f+m,R+S).normalize();else if(t===aa)r[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);const t=Fg.distanceTo(e.center);return cr.radius=.7071067811865476+t,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wa.x=r.normal.x>0?e.max.x:e.min.x,Wa.y=r.normal.y>0?e.max.y:e.min.y,Wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fs extends As{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bo=new F,yo=new F,Kh=new bt,Gs=new jf,Xa=new Es,Nc=new F,Jh=new F;class ts extends Qt{constructor(e=new Vt,t=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bo.fromBufferAttribute(t,r-1),yo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bo.distanceTo(yo);e.setAttribute("lineDistance",new Ct(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;Kh.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Kh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){const f=u.getX(b),x=u.getX(b+1),M=$a(this,e,Gs,c,f,x,b);M&&t.push(M)}if(this.isLineLoop){const b=u.getX(g-1),m=u.getX(p),f=$a(this,e,Gs,c,b,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){const f=$a(this,e,Gs,c,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){const b=$a(this,e,Gs,c,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $a(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(bo.fromBufferAttribute(o,r),yo.fromBufferAttribute(o,s),t.distanceSqToSegment(bo,yo,Nc,Jh)>i)return;Nc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Nc);if(!(l<e.near||l>e.far))return{distance:l,point:Jh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Jf extends vn{constructor(e=[],t=Sr,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oa extends vn{constructor(e,t,i=di,r,s,a,o=an,c=an,l,u=Ci,h=1){if(u!==Ci&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kg extends oa{constructor(e,t=di,i=Sr,r,s,a=an,o=an,c,l=Ci){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zf extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ir extends Vt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function g(b,m,f,x,M,S,R,T,A,v,w){const z=S/A,C=R/v,U=S/2,B=R/2,W=T/2,k=A+1,H=v+1;let O=0,Z=0;const J=new F;for(let de=0;de<H;de++){const ge=de*C-B;for(let ue=0;ue<k;ue++){const ke=ue*z-U;J[b]=ke*x,J[m]=ge*M,J[f]=W,l.push(J.x,J.y,J.z),J[b]=0,J[m]=0,J[f]=T>0?1:-1,u.push(J.x,J.y,J.z),h.push(ue/A),h.push(1-de/v),O+=1}}for(let de=0;de<v;de++)for(let ge=0;ge<A;ge++){const ue=d+ge+k*de,ke=d+ge+k*(de+1),At=d+(ge+1)+k*(de+1),St=d+(ge+1)+k*de;c.push(ue,ke,St),c.push(ke,At,St),Z+=6}o.addGroup(p,Z,w),p+=Z,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ca extends Vt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new F,u=new je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=i+h/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(o,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pd extends Vt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const b=[],m=i/2;let f=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(p,2));function x(){const S=new F,R=new F;let T=0;const A=(t-e)/i;for(let v=0;v<=s;v++){const w=[],z=v/s,C=z*(t-e)+e;for(let U=0;U<=r;U++){const B=U/r,W=B*c+o,k=Math.sin(W),H=Math.cos(W);R.x=C*k,R.y=-z*i+m,R.z=C*H,h.push(R.x,R.y,R.z),S.set(k,A,H).normalize(),d.push(S.x,S.y,S.z),p.push(B,1-z),w.push(g++)}b.push(w)}for(let v=0;v<r;v++)for(let w=0;w<s;w++){const z=b[w][v],C=b[w+1][v],U=b[w+1][v+1],B=b[w][v+1];(e>0||w!==0)&&(u.push(z,C,B),T+=3),(t>0||w!==s-1)&&(u.push(C,U,B),T+=3)}l.addGroup(f,T,0),f+=T}function M(S){const R=g,T=new je,A=new F;let v=0;const w=S===!0?e:t,z=S===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*z,0),d.push(0,z,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=r;U++){const W=U/r*c+o,k=Math.cos(W),H=Math.sin(W);A.x=w*H,A.y=m*z,A.z=w*k,h.push(A.x,A.y,A.z),d.push(0,z,0),T.x=k*.5+.5,T.y=H*.5*z+.5,p.push(T.x,T.y),g++}for(let U=0;U<r;U++){const B=R+U,W=C+U;S===!0?u.push(W,W+1,B):u.push(W+1,W,B),v+=3}l.addGroup(f,v,S===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class va extends Pd{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new va(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ts extends Vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,p=[],g=[],b=[],m=[];for(let f=0;f<u;f++){const x=f*d-a;for(let M=0;M<l;M++){const S=M*h-s;g.push(S,-x,0),b.push(0,0,1),m.push(M/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const M=x+l*f,S=x+l*(f+1),R=x+1+l*(f+1),T=x+1+l*f;p.push(M,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(b,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ld extends Vt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,p=new F,g=new je;for(let b=0;b<=r;b++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let b=0;b<r;b++){const m=b*(i+1);for(let f=0;f<i;f++){const x=f+m,M=x,S=x+i+1,R=x+i+2,T=x+1;o.push(M,S,T),o.push(S,R,T)}}this.setIndex(o),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Og(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Bg={clone:ps,merge:pn};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vg extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oo extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gf,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hg extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wg extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xg extends fs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class ep extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class tp extends ep{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Uc=new bt,Zh=new F,Qh=new F;class $g{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===aa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ya=new F,qa=new Rr,ei=new F;class np extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,qa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,qa,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ya,qa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,qa,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new F,eu=new je,tu=new je;class Xn extends np{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ba extends np{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yg extends $g{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ip extends ep{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Yg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const qr=-90,jr=1;class qg extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(qr,jr,e,t);r.layers=this.layers,this.add(r);const s=new Xn(qr,jr,e,t);s.layers=this.layers,this.add(s);const a=new Xn(qr,jr,e,t);a.layers=this.layers,this.add(a);const o=new Xn(qr,jr,e,t);o.layers=this.layers,this.add(o);const c=new Xn(qr,jr,e,t);c.layers=this.layers,this.add(c);const l=new Xn(qr,jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jg extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function nu(n,e,t,i){const r=Kg(i);switch(t){case Bf:return n*e;case Md:return n*e/r.components*r.byteLength;case Sd:return n*e/r.components*r.byteLength;case hs:return n*e*2/r.components*r.byteLength;case wd:return n*e*2/r.components*r.byteLength;case zf:return n*e*3/r.components*r.byteLength;case jn:return n*e*4/r.components*r.byteLength;case Ed:return n*e*4/r.components*r.byteLength;case io:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case so:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Cl:return Math.max(n,16)*Math.max(e,8)/4;case Al:case Rl:return Math.max(n,8)*Math.max(e,8)/2;case Il:case Pl:case Dl:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Ul:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Zl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ed:case td:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kg(n){switch(n){case Pn:case Uf:return{byteLength:1,components:1};case ra:case Ff:case Ri:return{byteLength:2,components:1};case bd:case yd:return{byteLength:2,components:4};case di:case vd:case qn:return{byteLength:4,components:1};case kf:case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);function rp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Jg(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],b=h[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,h[d]=b)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const b=h[p];n.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,h0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ax=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,__=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Zg,alphahash_pars_fragment:Qg,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:r0,aomap_pars_fragment:s0,batching_pars_vertex:a0,batching_vertex:o0,begin_vertex:c0,beginnormal_vertex:l0,bsdfs:d0,iridescence_fragment:h0,bumpmap_pars_fragment:u0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:x0,color_pars_fragment:_0,color_pars_vertex:v0,color_vertex:b0,common:y0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:S0,displacementmap_pars_vertex:w0,displacementmap_vertex:E0,emissivemap_fragment:A0,emissivemap_pars_fragment:T0,colorspace_fragment:R0,colorspace_pars_fragment:C0,envmap_fragment:I0,envmap_common_pars_fragment:P0,envmap_pars_fragment:L0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:W0,envmap_vertex:N0,fog_vertex:U0,fog_pars_vertex:F0,fog_fragment:k0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:z0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:V0,lights_pars_begin:H0,lights_toon_fragment:X0,lights_toon_pars_fragment:$0,lights_phong_fragment:Y0,lights_phong_pars_fragment:q0,lights_physical_fragment:j0,lights_physical_pars_fragment:K0,lights_fragment_begin:J0,lights_fragment_maps:Z0,lights_fragment_end:Q0,logdepthbuf_fragment:ex,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:rx,map_pars_fragment:sx,map_particle_fragment:ax,map_particle_pars_fragment:ox,metalnessmap_fragment:cx,metalnessmap_pars_fragment:lx,morphinstance_vertex:dx,morphcolor_vertex:hx,morphnormal_vertex:ux,morphtarget_pars_vertex:fx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:xx,normal_pars_vertex:_x,normal_vertex:vx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:Sx,iridescence_pars_fragment:wx,opaque_fragment:Ex,packing:Ax,premultiplied_alpha_fragment:Tx,project_vertex:Rx,dithering_fragment:Cx,dithering_pars_fragment:Ix,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Nx,shadowmap_vertex:Ux,shadowmask_pars_fragment:Fx,skinbase_vertex:kx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:zx,specularmap_fragment:Gx,specularmap_pars_fragment:Vx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:$x,uv_pars_fragment:Yx,uv_pars_vertex:qx,uv_vertex:jx,worldpos_vertex:Kx,background_vert:Jx,background_frag:Zx,backgroundCube_vert:Qx,backgroundCube_frag:e_,cube_vert:t_,cube_frag:n_,depth_vert:i_,depth_frag:r_,distance_vert:s_,distance_frag:a_,equirect_vert:o_,equirect_frag:c_,linedashed_vert:l_,linedashed_frag:d_,meshbasic_vert:h_,meshbasic_frag:u_,meshlambert_vert:f_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:x_,meshnormal_frag:__,meshphong_vert:v_,meshphong_frag:b_,meshphysical_vert:y_,meshphysical_frag:M_,meshtoon_vert:S_,meshtoon_frag:w_,points_vert:E_,points_frag:A_,shadow_vert:T_,shadow_frag:R_,sprite_vert:C_,sprite_frag:I_},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ii={basic:{uniforms:pn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:pn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:pn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:pn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:pn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:pn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:pn([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:pn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:pn([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:pn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:pn([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:pn([oe.common,oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:pn([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ii.physical={uniforms:pn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ja={r:0,b:0,g:0},lr=new hi,P_=new bt;function L_(n,e,t,i,r,s){const a=new Ye(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function p(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=e.get(M,S)}return M}function g(x){let M=!1;const S=p(x);S===null?m(a,o):S&&S.isColor&&(m(S,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(x,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===zo)?(l===void 0&&(l=new ft(new Ir(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:ps(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),lr.copy(M.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(P_.makeRotationFromEuler(lr)),l.material.toneMapped=Je.getTransfer(S.colorSpace)!==lt,(u!==S||h!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ft(new Ts(2,2),new ui({name:"BackgroundMaterial",uniforms:ps(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Je.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,M){x.getRGB(ja,Qf(n)),t.buffers.color.setClear(ja.r,ja.g,ja.b,M,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:b,dispose:f}}function D_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(C,U,B,W,k){let H=!1;const O=h(C,W,B,U);s!==O&&(s=O,l(s.object)),H=p(C,W,B,k),H&&g(C,W,B,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(C,U,B,W),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,U,B,W){const k=W.wireframe===!0;let H=i[U.id];H===void 0&&(H={},i[U.id]=H);const O=C.isInstancedMesh===!0?C.id:0;let Z=H[O];Z===void 0&&(Z={},H[O]=Z);let J=Z[B.id];J===void 0&&(J={},Z[B.id]=J);let de=J[k];return de===void 0&&(de=d(c()),J[k]=de),de}function d(C){const U=[],B=[],W=[];for(let k=0;k<t;k++)U[k]=0,B[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:W,object:C,attributes:{},index:null}}function p(C,U,B,W){const k=s.attributes,H=U.attributes;let O=0;const Z=B.getAttributes();for(const J in Z)if(Z[J].location>=0){const ge=k[J];let ue=H[J];if(ue===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ge===void 0||ge.attribute!==ue||ue&&ge.data!==ue.data)return!0;O++}return s.attributesNum!==O||s.index!==W}function g(C,U,B,W){const k={},H=U.attributes;let O=0;const Z=B.getAttributes();for(const J in Z)if(Z[J].location>=0){let ge=H[J];ge===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor));const ue={};ue.attribute=ge,ge&&ge.data&&(ue.data=ge.data),k[J]=ue,O++}s.attributes=k,s.attributesNum=O,s.index=W}function b(){const C=s.newAttributes;for(let U=0,B=C.length;U<B;U++)C[U]=0}function m(C){f(C,0)}function f(C,U){const B=s.newAttributes,W=s.enabledAttributes,k=s.attributeDivisors;B[C]=1,W[C]===0&&(n.enableVertexAttribArray(C),W[C]=1),k[C]!==U&&(n.vertexAttribDivisor(C,U),k[C]=U)}function x(){const C=s.newAttributes,U=s.enabledAttributes;for(let B=0,W=U.length;B<W;B++)U[B]!==C[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function M(C,U,B,W,k,H,O){O===!0?n.vertexAttribIPointer(C,U,B,k,H):n.vertexAttribPointer(C,U,B,W,k,H)}function S(C,U,B,W){b();const k=W.attributes,H=B.getAttributes(),O=U.defaultAttributeValues;for(const Z in H){const J=H[Z];if(J.location>=0){let de=k[Z];if(de===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const ge=de.normalized,ue=de.itemSize,ke=e.get(de);if(ke===void 0)continue;const At=ke.buffer,St=ke.type,j=ke.bytesPerElement,ie=St===n.INT||St===n.UNSIGNED_INT||de.gpuType===vd;if(de.isInterleavedBufferAttribute){const ae=de.data,Ue=ae.stride,Re=de.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<J.locationSize;Ie++)f(J.location+Ie,ae.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)m(J.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,At);for(let Ie=0;Ie<J.locationSize;Ie++)M(J.location+Ie,ue/J.locationSize,St,ge,Ue*j,(Re+ue/J.locationSize*Ie)*j,ie)}else{if(de.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)f(J.location+ae,de.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ae=0;ae<J.locationSize;ae++)m(J.location+ae);n.bindBuffer(n.ARRAY_BUFFER,At);for(let ae=0;ae<J.locationSize;ae++)M(J.location+ae,ue/J.locationSize,St,ge,ue*j,ue/J.locationSize*ae*j,ie)}}else if(O!==void 0){const ge=O[Z];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(J.location,ge);break;case 3:n.vertexAttrib3fv(J.location,ge);break;case 4:n.vertexAttrib4fv(J.location,ge);break;default:n.vertexAttrib1fv(J.location,ge)}}}}x()}function R(){w();for(const C in i){const U=i[C];for(const B in U){const W=U[B];for(const k in W){const H=W[k];for(const O in H)u(H[O].object),delete H[O];delete W[k]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const B in U){const W=U[B];for(const k in W){const H=W[k];for(const O in H)u(H[O].object),delete H[O];delete W[k]}}delete i[C.id]}function A(C){for(const U in i){const B=i[U];for(const W in B){const k=B[W];if(k[C.id]===void 0)continue;const H=k[C.id];for(const O in H)u(H[O].object),delete H[O];delete k[C.id]}}}function v(C){for(const U in i){const B=i[U],W=C.isInstancedMesh===!0?C.id:0,k=B[W];if(k!==void 0){for(const H in k){const O=k[H];for(const Z in O)u(O[Z].object),delete O[Z];delete k[H]}delete B[W],Object.keys(B).length===0&&delete i[U]}}}function w(){z(),a=!0,s!==r&&(s=r,l(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:z,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function N_(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let b=0;b<h;b++)g+=u[b]*d[b];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function U_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==qn&&!v)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Pe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:R,samples:T}}function F_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new hr,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const x=s?0:i,M=x*4;let S=f.clippingState||null;c.value=S,S=u(g,d,M,p);for(let R=0;R!==M;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const f=p+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=p;M!==b;++M,S+=4)a.copy(h[M]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const Hi=4,iu=[.125,.215,.35,.446,.526,.582],pr=20,k_=256,Vs=new ba,ru=new Ye;let Fc=null,kc=0,Oc=0,Bc=!1;const O_=new F;class su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=O_}=s;Fc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,kc,Oc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ri,format:jn,colorSpace:us,depthBuffer:!1},r=au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=B_(s)),this._blurMaterial=G_(s,e,t),this._ggxMaterial=z_(s,e,t)}return r}_compileMaterial(e){const t=new ft(new Vt,e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,i,r,s){const c=new Xn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(ru),h.toneMapping=oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new Ir,new Yi({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(ru),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):S===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const R=this._cubeSize;Kr(r,S*R,M>2?R:0,R,R),h.setRenderTarget(r),f&&h.render(b,c),h.render(e,c)}h.toneMapping=p,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Sr||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Kr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Vs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,p=h*d,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-Hi?i-g+Hi:0),f=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Kr(s,m,f,3*b,2*b),r.setRenderTarget(s),r.render(o,Vs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Kr(e,m,f,3*b,2*b),r.setRenderTarget(e),r.render(o,Vs)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*pr-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):pr;m>pr&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const f=[];let x=0;for(let A=0;A<pr;++A){const v=A/b,w=Math.exp(-v*v/2);f.push(w),A===0?x+=w:A<m&&(x+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const S=this._sizeLods[r],R=3*S*(r>M-Hi?r-M+Hi:0),T=4*(this._cubeSize-S);Kr(t,R,T,3*S,2*S),c.setRenderTarget(t),c.render(h,Vs)}}function B_(n){const e=[],t=[],i=[];let r=n;const s=n-Hi+1+iu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Hi?c=iu[a-n+Hi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,b=3,m=2,f=1,x=new Float32Array(b*g*p),M=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,v=T>2?0:-1,w=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];x.set(w,b*g*T),M.set(d,m*g*T);const z=[T,T,T,T,T,T];S.set(z,f*g*T)}const R=new Vt;R.setAttribute("position",new kn(x,b)),R.setAttribute("uv",new kn(M,m)),R.setAttribute("faceIndex",new kn(S,f)),i.push(new ft(R,null)),r>Hi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function au(n,e,t){const i=new ci(n,e,t);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function z_(n,e,t){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function G_(n,e,t){const i=new Float32Array(pr),r=new F(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ou(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function cu(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class sp extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ir(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Ai});s.uniforms.tEquirect.value=t;const a=new ft(r,s),o=t.minFilter;return t.minFilter===gr&&(t.minFilter=un),new qg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function V_(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===oc||p===cc)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const b=new sp(g.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,g=p===oc||p===cc,b=p===Sr||p===ds;if(g||b){let m=t.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new su(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return g&&x&&x.height>0||b&&x&&c(x)?(i===null&&(i=new su(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===oc?d.mapping=Sr:p===cc&&(d.mapping=ds),d}function c(d){let p=0;const g=6;for(let b=0;b<g;b++)d[b]!==void 0&&p++;return p===g}function l(d){const p=d.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function H_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vo("WebGLRenderer: "+i+" extension not supported."),r}}}function W_(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let b=0;if(g===void 0)return;if(p!==null){const x=p.array;b=p.version;for(let M=0,S=x.length;M<S;M+=3){const R=x[M+0],T=x[M+1],A=x[M+2];d.push(R,T,T,A,A,R)}}else{const x=g.array;b=g.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const R=M+0,T=M+1,A=M+2;d.push(R,T,T,A,A,R)}}const m=new(g.count>=65535?qf:Yf)(d,1);m.version=b;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function X_(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function h(d,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,b,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*b[x];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Y_(n,e,t){const i=new WeakMap,r=new Ft;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let z=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",z)};var p=z;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),b===!0&&(S=2),m===!0&&(S=3);let R=o.attributes.position.count*S,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*h),v=new Hf(A,R,T,h);v.type=qn,v.needsUpdate=!0;const w=S*4;for(let C=0;C<h;C++){const U=f[C],B=x[C],W=M[C],k=R*T*4*C;for(let H=0;H<U.count;H++){const O=H*w;g===!0&&(r.fromBufferAttribute(U,H),A[k+O+0]=r.x,A[k+O+1]=r.y,A[k+O+2]=r.z,A[k+O+3]=0),b===!0&&(r.fromBufferAttribute(B,H),A[k+O+4]=r.x,A[k+O+5]=r.y,A[k+O+6]=r.z,A[k+O+7]=0),m===!0&&(r.fromBufferAttribute(W,H),A[k+O+8]=r.x,A[k+O+9]=r.y,A[k+O+10]=r.z,A[k+O+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new je(R,T)},i.set(o,d),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const b=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",b),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function q_(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const j_={[Tf]:"LINEAR_TONE_MAPPING",[Rf]:"REINHARD_TONE_MAPPING",[Cf]:"CINEON_TONE_MAPPING",[If]:"ACES_FILMIC_TONE_MAPPING",[Lf]:"AGX_TONE_MAPPING",[Df]:"NEUTRAL_TONE_MAPPING",[Pf]:"CUSTOM_TONE_MAPPING"};function K_(n,e,t,i,r){const s=new ci(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new ci(e,t,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),o=new Vt;o.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const c=new Vg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new ft(o,c),u=new ba(-1,1,1,-1,0,1);let h=null,d=null,p=!1,g,b=null,m=[],f=!1;this.setSize=function(x,M){s.setSize(x,M),a.setSize(x,M);for(let S=0;S<m.length;S++){const R=m[S];R.setSize&&R.setSize(x,M)}},this.setEffects=function(x){m=x,f=m.length>0&&m[0].isRenderPass===!0;const M=s.width,S=s.height;for(let R=0;R<m.length;R++){const T=m[R];T.setSize&&T.setSize(M,S)}},this.begin=function(x,M){if(p||x.toneMapping===oi&&m.length===0)return!1;if(b=M,M!==null){const S=M.width,R=M.height;(s.width!==S||s.height!==R)&&this.setSize(S,R)}return f===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return f},this.end=function(x,M){x.toneMapping=g,p=!0;let S=s,R=a;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(x,R,S,M),A.needsSwap!==!1)){const v=S;S=R,R=v}}if(h!==x.outputColorSpace||d!==x.toneMapping){h=x.outputColorSpace,d=x.toneMapping,c.defines={},Je.getTransfer(h)===lt&&(c.defines.SRGB_TRANSFER="");const T=j_[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(b),x.render(l,u),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const ap=new vn,ad=new oa(1,1),op=new Hf,cp=new vg,lp=new Jf,lu=[],du=[],hu=new Float32Array(16),uu=new Float32Array(9),fu=new Float32Array(4);function Rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=lu[r];if(s===void 0&&(s=new Float32Array(r),lu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vo(n,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function J_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;fu.set(i),n.uniformMatrix2fv(this.addr,!1,fu),Yt(t,i)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;uu.set(i),n.uniformMatrix3fv(this.addr,!1,uu),Yt(t,i)}}function iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;hu.set(i),n.uniformMatrix4fv(this.addr,!1,hu),Yt(t,i)}}function rv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ad.compareFunction=t.isReversedDepthBuffer()?Td:Ad,s=ad):s=ap,t.setTexture2D(e||s,r)}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cp,r)}function pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||lp,r)}function mv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||op,r)}function gv(n){switch(n){case 5126:return J_;case 35664:return Z_;case 35665:return Q_;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return cv;case 36294:return lv;case 36295:return dv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}function xv(n,e){n.uniform1fv(this.addr,e)}function _v(n,e){const t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function vv(n,e){const t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function bv(n,e){const t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function yv(n,e){const t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mv(n,e){const t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sv(n,e){const t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wv(n,e){n.uniform1iv(this.addr,e)}function Ev(n,e){n.uniform2iv(this.addr,e)}function Av(n,e){n.uniform3iv(this.addr,e)}function Tv(n,e){n.uniform4iv(this.addr,e)}function Rv(n,e){n.uniform1uiv(this.addr,e)}function Cv(n,e){n.uniform2uiv(this.addr,e)}function Iv(n,e){n.uniform3uiv(this.addr,e)}function Pv(n,e){n.uniform4uiv(this.addr,e)}function Lv(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=ad:a=ap;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Dv(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||cp,s[a])}function Nv(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||lp,s[a])}function Uv(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);$t(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||op,s[a])}function Fv(n){switch(n){case 5126:return xv;case 35664:return _v;case 35665:return vv;case 35666:return bv;case 35674:return yv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return wv;case 35667:case 35671:return Ev;case 35668:case 35672:return Av;case 35669:case 35673:return Tv;case 5125:return Rv;case 36294:return Cv;case 36295:return Iv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Uv}}class kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gv(t.type)}}class Ov{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fv(t.type)}}class Bv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function pu(n,e){n.seq.push(e),n.map[e.id]=e}function zv(n,e,t){const i=n.name,r=i.length;for(zc.lastIndex=0;;){const s=zc.exec(i),a=zc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){pu(t,l===void 0?new kv(o,n,e):new Ov(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Bv(o),pu(t,h)),t=h}}}class co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);zv(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function mu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Gv=37297;let Vv=0;function Hv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const gu=new Fe;function Wv(n){Je._getMatrix(gu,Je.workingColorSpace,n);const e=`mat3( ${gu.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case xo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hv(n.getShaderSource(e),o)}else return s}function Xv(n,e){const t=Wv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $v={[Tf]:"Linear",[Rf]:"Reinhard",[Cf]:"Cineon",[If]:"ACESFilmic",[Lf]:"AgX",[Df]:"Neutral",[Pf]:"Custom"};function Yv(n,e){const t=$v[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ka=new F;function qv(){Je.getLuminanceCoefficients(Ka);const n=Ka.x.toFixed(4),e=Ka.y.toFixed(4),t=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function Kv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ys(n){return n!==""}function _u(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(n){return n.replace(Zv,eb)}const Qv=new Map;function eb(n,e){let t=Oe[e];if(t===void 0){const i=Qv.get(e);if(i!==void 0)t=Oe[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return od(t)}const tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(n){return n.replace(tb,nb)}function nb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ib={[Zs]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function rb(n){return ib[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sb={[Sr]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[zo]:"ENVMAP_TYPE_CUBE_UV"};function ab(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ob={[ds]:"ENVMAP_MODE_REFRACTION"};function cb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ob[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lb={[Af]:"ENVMAP_BLENDING_MULTIPLY",[Zm]:"ENVMAP_BLENDING_MIX",[Qm]:"ENVMAP_BLENDING_ADD"};function db(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":lb[n.combine]||"ENVMAP_BLENDING_NONE"}function hb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ub(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=rb(t),l=ab(t),u=cb(t),h=db(t),d=hb(t),p=jv(t),g=Kv(s),b=r.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),f.length>0&&(f+=`
`)):(m=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),f=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==oi?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Xv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=od(a),a=_u(a,t),a=vu(a,t),o=od(o),o=_u(o,t),o=vu(o,t),a=bu(a),o=bu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+a,S=x+f+o,R=mu(r,r.VERTEX_SHADER,M),T=mu(r,r.FRAGMENT_SHADER,S);r.attachShader(b,R),r.attachShader(b,T),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(b)||"",B=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(T)||"",k=U.trim(),H=B.trim(),O=W.trim();let Z=!0,J=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,R,T);else{const de=xu(r,R,"vertex"),ge=xu(r,T,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+de+`
`+ge)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(H===""||O==="")&&(J=!1);J&&(C.diagnostics={runnable:Z,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(R),r.deleteShader(T),v=new co(r,b),w=Jv(r,b)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(b,Gv)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=T,this}let fb=0;class pb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mb(e),t.set(e,i)),i}}class mb{constructor(e){this.id=fb++,this.code=e,this.usedTimes=0}}function gb(n,e,t,i,r,s){const a=new Wf,o=new pb,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function b(v,w,z,C,U){const B=C.fog,W=U.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||k,H),Z=O&&O.mapping===zo?O.image.height:null,J=p[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Pe("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=de!==void 0?de.length:0;let ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let ke,At,St,j;if(J){const ct=ii[J];ke=ct.vertexShader,At=ct.fragmentShader}else ke=v.vertexShader,At=v.fragmentShader,o.update(v),St=o.getVertexShaderID(v),j=o.getFragmentShaderID(v);const ie=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,Ie=!!v.map,qt=!!v.matcap,Ke=!!O,ot=!!v.aoMap,gt=!!v.lightMap,ze=!!v.bumpMap,kt=!!v.normalMap,P=!!v.displacementMap,Ht=!!v.emissiveMap,st=!!v.metalnessMap,yt=!!v.roughnessMap,Me=v.anisotropy>0,E=v.clearcoat>0,_=v.dispersion>0,D=v.iridescence>0,q=v.sheen>0,K=v.transmission>0,Y=Me&&!!v.anisotropyMap,xe=E&&!!v.clearcoatMap,re=E&&!!v.clearcoatNormalMap,Te=E&&!!v.clearcoatRoughnessMap,Ce=D&&!!v.iridescenceMap,Q=D&&!!v.iridescenceThicknessMap,te=q&&!!v.sheenColorMap,_e=q&&!!v.sheenRoughnessMap,be=!!v.specularMap,he=!!v.specularColorMap,Ge=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,se=K&&!!v.thicknessMap,ne=!!v.gradientMap,me=!!v.alphaMap,ee=v.alphaTest>0,$=!!v.alphaHash,ve=!!v.extensions;let Le=oi;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=n.toneMapping);const Mt={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:At,defines:v.defines,customVertexShaderID:St,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:us,alphaToCoverage:!!v.alphaToCoverage,map:Ie,matcap:qt,envMap:Ke,envMapMode:Ke&&O.mapping,envMapCubeUVHeight:Z,aoMap:ot,lightMap:gt,bumpMap:ze,normalMap:kt,displacementMap:P,emissiveMap:Ht,normalMapObjectSpace:kt&&v.normalMapType===ng,normalMapTangentSpace:kt&&v.normalMapType===Gf,metalnessMap:st,roughnessMap:yt,anisotropy:Me,anisotropyMap:Y,clearcoat:E,clearcoatMap:xe,clearcoatNormalMap:re,clearcoatRoughnessMap:Te,dispersion:_,iridescence:D,iridescenceMap:Ce,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:te,sheenRoughnessMap:_e,specularMap:be,specularColorMap:he,specularIntensityMap:Ge,transmission:K,transmissionMap:L,thicknessMap:se,gradientMap:ne,opaque:v.transparent===!1&&v.blending===as&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:$,combine:v.combine,mapUv:Ie&&g(v.map.channel),aoMapUv:ot&&g(v.aoMap.channel),lightMapUv:gt&&g(v.lightMap.channel),bumpMapUv:ze&&g(v.bumpMap.channel),normalMapUv:kt&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:Ht&&g(v.emissiveMap.channel),metalnessMapUv:st&&g(v.metalnessMap.channel),roughnessMapUv:yt&&g(v.roughnessMap.channel),anisotropyMapUv:Y&&g(v.anisotropyMap.channel),clearcoatMapUv:xe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(v.sheenRoughnessMap.channel),specularMapUv:be&&g(v.specularMap.channel),specularColorMapUv:he&&g(v.specularColorMap.channel),specularIntensityMapUv:Ge&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:se&&g(v.thicknessMap.channel),alphaMapUv:me&&g(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(kt||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Ie||me),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&kt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:Ht&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===si,flipSided:v.side===Mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)w.push(z),w.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(f(w,v),x(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function f(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const w=p[v.type];let z;if(w){const C=ii[w];z=Bg.clone(C.uniforms)}else z=v.uniforms;return z}function S(v,w){let z=u.get(w);return z!==void 0?++z.usedTimes:(z=new ub(n,w,v,r),l.push(z),u.set(w,z)),z}function R(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:A}}function xb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function _b(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Su(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,b,m,f){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:f},n[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=g,x.materialVariant=a(d),x.groupOrder=b,x.renderOrder=d.renderOrder,x.z=m,x.group=f),e++,x}function c(d,p,g,b,m,f){const x=o(d,p,g,b,m,f);g.transmission>0?i.push(x):g.transparent===!0?r.push(x):t.push(x)}function l(d,p,g,b,m,f){const x=o(d,p,g,b,m,f);g.transmission>0?i.unshift(x):g.transparent===!0?r.unshift(x):t.unshift(x)}function u(d,p){t.length>1&&t.sort(d||_b),i.length>1&&i.sort(p||Mu),r.length>1&&r.sort(p||Mu)}function h(){for(let d=e,p=n.length;d<p;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function vb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Su,n.set(i,[a])):r>=s.length?(a=new Su,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ye};break;case"SpotLight":t={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function yb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Mb=0;function Sb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wb(n){const e=new bb,t=yb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,s=new bt,a=new bt;function o(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,x=0,M=0,S=0,R=0,T=0,A=0;l.sort(Sb);for(let w=0,z=l.length;w<z;w++){const C=l[w],U=C.color,B=C.intensity,W=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===hs?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=U.r*B,h+=U.g*B,d+=U.b*B;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],B);A++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=C.shadow.matrix,x++}i.directional[p]=H,p++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[b]=H;const O=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,O.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[b]=O.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.spotShadow[b]=Z,i.spotShadowMap[b]=k,S++}b++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(U).multiplyScalar(B),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const O=C.shadow,Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=C.shadow.matrix,M++}i.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(B),H.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==p||v.pointLength!==g||v.spotLength!==b||v.rectAreaLength!==m||v.hemiLength!==f||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==S||v.numSpotMaps!==R||v.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,v.directionalLength=p,v.pointLength=g,v.spotLength=b,v.rectAreaLength=m,v.hemiLength=f,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=S,v.numSpotMaps=R,v.numLightProbes=A,i.version=Mb++)}function c(l,u){let h=0,d=0,p=0,g=0,b=0;const m=u.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const M=l[f];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(M.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:i}}function wu(n){const e=new wb(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Eb(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wu(n),e.set(r,[o])):s>=a.length?(o=new wu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rb=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Cb=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Eu=new bt,Hs=new F,Gc=new F;function Ib(n,e,t){let i=new Id;const r=new je,s=new je,a=new Ft,o=new Hg,c=new Wg,l={},u=t.maxTextureSize,h={[Ji]:Mn,[Mn]:Ji,[si]:si},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Ab,fragmentShader:Tb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let f=this.type;this.render=function(T,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Dm&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zs);const w=n.getRenderTarget(),z=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=f!==this.type;B&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(k=>k.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,k=T.length;W<k;W++){const H=T[W],O=H.shadow;if(O===void 0){Pe("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Z=O.getFrameExtents();r.multiply(Z),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,O.mapSize.y=s.y));const J=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=J,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===$s){if(H.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ci(r.x,r.y,{format:hs,type:Ri,minFilter:un,magFilter:un,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new oa(r.x,r.y,qn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=Ci,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an}else H.isPointLight?(O.map=new sp(r.x),O.map.depthTexture=new kg(r.x,di)):(O.map=new ci(r.x,r.y),O.map.depthTexture=new oa(r.x,r.y,di)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=Ci,this.type===Zs?(O.map.depthTexture.compareFunction=J?Td:Ad,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an);O.camera.updateProjectionMatrix()}const de=O.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<de;ge++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(O.map),n.clear());const ue=O.getViewport(ge);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),U.viewport(a)}if(H.isPointLight){const ue=O.camera,ke=O.matrix,At=H.distance||ue.far;At!==ue.far&&(ue.far=At,ue.updateProjectionMatrix()),Hs.setFromMatrixPosition(H.matrixWorld),ue.position.copy(Hs),Gc.copy(ue.position),Gc.add(Rb[ge]),ue.up.copy(Cb[ge]),ue.lookAt(Gc),ue.updateMatrixWorld(),ke.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Eu.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Eu,ue.coordinateSystem,ue.reversedDepth)}else O.updateMatrices(H);i=O.getFrustum(),S(A,v,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===$s&&x(O,v),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,z,C)};function x(T,A){const v=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(r.x,r.y,{format:hs,type:Ri})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,v,d,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,v,p,b,null)}function M(T,A,v,w){let z=null;const C=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)z=C;else if(z=v.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=z.uuid,B=A.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let k=W[B];k===void 0&&(k=z.clone(),W[B]=k,A.addEventListener("dispose",R)),z=k}if(z.visible=A.visible,z.wireframe=A.wireframe,w===$s?z.side=A.shadowSide!==null?A.shadowSide:A.side:z.side=A.shadowSide!==null?A.shadowSide:h[A.side],z.alphaMap=A.alphaMap,z.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,z.map=A.map,z.clipShadows=A.clipShadows,z.clippingPlanes=A.clippingPlanes,z.clipIntersection=A.clipIntersection,z.displacementMap=A.displacementMap,z.displacementScale=A.displacementScale,z.displacementBias=A.displacementBias,z.wireframeLinewidth=A.wireframeLinewidth,z.linewidth=A.linewidth,v.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const U=n.properties.get(z);U.light=v}return z}function S(T,A,v,w,z){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===$s)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const B=e.update(T),W=T.material;if(Array.isArray(W)){const k=B.groups;for(let H=0,O=k.length;H<O;H++){const Z=k[H],J=W[Z.materialIndex];if(J&&J.visible){const de=M(T,J,w,z);T.onBeforeShadow(n,T,A,v,B,de,Z),n.renderBufferDirect(v,null,B,de,T,Z),T.onAfterShadow(n,T,A,v,B,de,Z)}}}else if(W.visible){const k=M(T,W,w,z);T.onBeforeShadow(n,T,A,v,B,k,null),n.renderBufferDirect(v,null,B,k,T,null),T.onAfterShadow(n,T,A,v,B,k,null)}}const U=T.children;for(let B=0,W=U.length;B<W;B++)S(U[B],A,v,w,z)}function R(T){T.target.removeEventListener("dispose",R);for(const v in l){const w=l[v],z=T.target.uuid;z in w&&(w[z].dispose(),delete w[z])}}}function Pb(n,e){function t(){let L=!1;const se=new Ft;let ne=null;const me=new Ft(0,0,0,0);return{setMask:function(ee){ne!==ee&&!L&&(n.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){L=ee},setClear:function(ee,$,ve,Le,Mt){Mt===!0&&(ee*=Le,$*=Le,ve*=Le),se.set(ee,$,ve,Le),me.equals(se)===!1&&(n.clearColor(ee,$,ve,Le),me.copy(se))},reset:function(){L=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,ne=null,me=null,ee=null;return{setReversed:function($){if(se!==$){const ve=e.get("EXT_clip_control");$?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),se=$;const Le=ee;ee=null,this.setClear(Le)}},getReversed:function(){return se},setTest:function($){$?ie(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function($){ne!==$&&!L&&(n.depthMask($),ne=$)},setFunc:function($){if(se&&($=ug[$]),me!==$){switch($){case xl:n.depthFunc(n.NEVER);break;case _l:n.depthFunc(n.ALWAYS);break;case vl:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case bl:n.depthFunc(n.EQUAL);break;case yl:n.depthFunc(n.GEQUAL);break;case Ml:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=$}},setLocked:function($){L=$},setClear:function($){ee!==$&&(ee=$,se&&($=1-$),n.clearDepth($))},reset:function(){L=!1,ne=null,me=null,ee=null,se=!1}}}function r(){let L=!1,se=null,ne=null,me=null,ee=null,$=null,ve=null,Le=null,Mt=null;return{setTest:function(ct){L||(ct?ie(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ct){se!==ct&&!L&&(n.stencilMask(ct),se=ct)},setFunc:function(ct,pi,mi){(ne!==ct||me!==pi||ee!==mi)&&(n.stencilFunc(ct,pi,mi),ne=ct,me=pi,ee=mi)},setOp:function(ct,pi,mi){($!==ct||ve!==pi||Le!==mi)&&(n.stencilOp(ct,pi,mi),$=ct,ve=pi,Le=mi)},setLocked:function(ct){L=ct},setClear:function(ct){Mt!==ct&&(n.clearStencil(ct),Mt=ct)},reset:function(){L=!1,se=null,ne=null,me=null,ee=null,$=null,ve=null,Le=null,Mt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,x=null,M=null,S=null,R=null,T=null,A=new Ye(0,0,0),v=0,w=!1,z=null,C=null,U=null,B=null,W=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=O>=2);let J=null,de={};const ge=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),ke=new Ft().fromArray(ge),At=new Ft().fromArray(ue);function St(L,se,ne,me){const ee=new Uint8Array(4),$=n.createTexture();n.bindTexture(L,$),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<ne;ve++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(se+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return $}const j={};j[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(ls),ze(!1),kt(wh),ie(n.CULL_FACE),ot(Ai);function ie(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ae(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ue(L,se){return h[L]!==se?(n.bindFramebuffer(L,se),h[L]=se,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(L,se){let ne=p,me=!1;if(L){ne=d.get(se),ne===void 0&&(ne=[],d.set(se,ne));const ee=L.textures;if(ne.length!==ee.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let $=0,ve=ee.length;$<ve;$++)ne[$]=n.COLOR_ATTACHMENT0+$;ne.length=ee.length,me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,me=!0);me&&n.drawBuffers(ne)}function Ie(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const qt={[fr]:n.FUNC_ADD,[Um]:n.FUNC_SUBTRACT,[Fm]:n.FUNC_REVERSE_SUBTRACT};qt[km]=n.MIN,qt[Om]=n.MAX;const Ke={[Bm]:n.ZERO,[zm]:n.ONE,[Gm]:n.SRC_COLOR,[ml]:n.SRC_ALPHA,[Ym]:n.SRC_ALPHA_SATURATE,[Xm]:n.DST_COLOR,[Hm]:n.DST_ALPHA,[Vm]:n.ONE_MINUS_SRC_COLOR,[gl]:n.ONE_MINUS_SRC_ALPHA,[$m]:n.ONE_MINUS_DST_COLOR,[Wm]:n.ONE_MINUS_DST_ALPHA,[qm]:n.CONSTANT_COLOR,[jm]:n.ONE_MINUS_CONSTANT_COLOR,[Km]:n.CONSTANT_ALPHA,[Jm]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(L,se,ne,me,ee,$,ve,Le,Mt,ct){if(L===Ai){b===!0&&(ae(n.BLEND),b=!1);return}if(b===!1&&(ie(n.BLEND),b=!0),L!==Nm){if(L!==m||ct!==w){if((f!==fr||S!==fr)&&(n.blendEquation(n.FUNC_ADD),f=fr,S=fr),ct)switch(L){case as:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eh:n.blendFunc(n.ONE,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",L);break}else switch(L){case as:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ah:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",L);break}x=null,M=null,R=null,T=null,A.set(0,0,0),v=0,m=L,w=ct}return}ee=ee||se,$=$||ne,ve=ve||me,(se!==f||ee!==S)&&(n.blendEquationSeparate(qt[se],qt[ee]),f=se,S=ee),(ne!==x||me!==M||$!==R||ve!==T)&&(n.blendFuncSeparate(Ke[ne],Ke[me],Ke[$],Ke[ve]),x=ne,M=me,R=$,T=ve),(Le.equals(A)===!1||Mt!==v)&&(n.blendColor(Le.r,Le.g,Le.b,Mt),A.copy(Le),v=Mt),m=L,w=!1}function gt(L,se){L.side===si?ae(n.CULL_FACE):ie(n.CULL_FACE);let ne=L.side===Mn;se&&(ne=!ne),ze(ne),L.blending===as&&L.transparent===!1?ot(Ai):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){z!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),z=L)}function kt(L){L!==Pm?(ie(n.CULL_FACE),L!==C&&(L===wh?n.cullFace(n.BACK):L===Lm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),C=L}function P(L){L!==U&&(H&&n.lineWidth(L),U=L)}function Ht(L,se,ne){L?(ie(n.POLYGON_OFFSET_FILL),(B!==se||W!==ne)&&(B=se,W=ne,a.getReversed()&&(se=-se),n.polygonOffset(se,ne))):ae(n.POLYGON_OFFSET_FILL)}function st(L){L?ie(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function yt(L){L===void 0&&(L=n.TEXTURE0+k-1),J!==L&&(n.activeTexture(L),J=L)}function Me(L,se,ne){ne===void 0&&(J===null?ne=n.TEXTURE0+k-1:ne=J);let me=de[ne];me===void 0&&(me={type:void 0,texture:void 0},de[ne]=me),(me.type!==L||me.texture!==se)&&(J!==ne&&(n.activeTexture(ne),J=ne),n.bindTexture(L,se||j[L]),me.type=L,me.texture=se)}function E(){const L=de[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function q(){try{n.texSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function K(){try{n.texSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function Te(){try{n.texStorage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function Ce(){try{n.texImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function te(L){ke.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function _e(L){At.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),At.copy(L))}function be(L,se){let ne=l.get(se);ne===void 0&&(ne=new WeakMap,l.set(se,ne));let me=ne.get(L);me===void 0&&(me=n.getUniformBlockIndex(se,L.name),ne.set(L,me))}function he(L,se){const me=l.get(se).get(L);c.get(se)!==me&&(n.uniformBlockBinding(se,me,L.__bindingPointIndex),c.set(se,me))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,de={},h={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,x=null,M=null,S=null,R=null,T=null,A=new Ye(0,0,0),v=0,w=!1,z=null,C=null,U=null,B=null,W=null,ke.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Ie,setBlending:ot,setMaterial:gt,setFlipSided:ze,setCullFace:kt,setLineWidth:P,setPolygonOffset:Ht,setScissorTest:st,activeTexture:yt,bindTexture:Me,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ce,texImage3D:Q,updateUBOMapping:be,uniformBlockBinding:he,texStorage2D:re,texStorage3D:Te,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:xe,scissor:te,viewport:_e,reset:Ge}}function Lb(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):_o("canvas")}function b(E,_,D){let q=1;const K=Me(E);if((K.width>D||K.height>D)&&(q=D/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(q*K.width),xe=Math.floor(q*K.height);h===void 0&&(h=g(Y,xe));const re=_?g(Y,xe):h;return re.width=Y,re.height=xe,re.getContext("2d").drawImage(E,0,0,Y,xe),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+xe+")."),re}else return"data"in E&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,_,D,q,K=!1){if(E!==null){if(n[E]!==void 0)return n[E];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=_;if(_===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),_===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const xe=K?xo:Je.getTransfer(q);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=xe===lt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(E,_){let D;return E?_===null||_===di||_===sa?D=n.DEPTH24_STENCIL8:_===qn?D=n.DEPTH32F_STENCIL8:_===ra&&(D=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===sa?D=n.DEPTH_COMPONENT24:_===qn?D=n.DEPTH_COMPONENT32F:_===ra&&(D=n.DEPTH_COMPONENT16),D}function R(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==an&&E.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){const _=E.target;_.removeEventListener("dispose",T),v(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),z(_)}function v(E){const _=i.get(E);if(_.__webglInit===void 0)return;const D=E.source,q=d.get(D);if(q){const K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(E),Object.keys(q).length===0&&d.delete(D)}i.remove(E)}function w(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const D=E.source,q=d.get(D);delete q[_.__cacheKey],a.memory.textures--}function z(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[q][K]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=E.textures;for(let q=0,K=D.length;q<K;q++){const Y=i.get(D[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[q])}i.remove(E)}let C=0;function U(){C=0}function B(){const E=C;return E>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),C+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function k(E,_){const D=i.get(E);if(E.isVideoTexture&&st(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&D.__version!==E.version){const q=E.image;if(q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{j(D,E,_);return}}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function H(E,_){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){j(D,E,_);return}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function O(E,_){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){j(D,E,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function Z(E,_){const D=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&D.__version!==E.version){ie(D,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const J={[wl]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[El]:n.MIRRORED_REPEAT},de={[an]:n.NEAREST,[eg]:n.NEAREST_MIPMAP_NEAREST,[Aa]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[lc]:n.LINEAR_MIPMAP_NEAREST,[gr]:n.LINEAR_MIPMAP_LINEAR},ge={[ig]:n.NEVER,[cg]:n.ALWAYS,[rg]:n.LESS,[Ad]:n.LEQUAL,[sg]:n.EQUAL,[Td]:n.GEQUAL,[ag]:n.GREATER,[og]:n.NOTEQUAL};function ue(E,_){if(_.type===qn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===un||_.magFilter===lc||_.magFilter===Aa||_.magFilter===gr||_.minFilter===un||_.minFilter===lc||_.minFilter===Aa||_.minFilter===gr)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,J[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,J[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,J[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==Aa&&_.minFilter!==gr||_.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ke(E,_){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));const q=_.source;let K=d.get(q);K===void 0&&(K={},d.set(q,K));const Y=W(_);if(Y!==E.__cacheKey){K[Y]===void 0&&(K[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[Y].usedTimes++;const xe=K[E.__cacheKey];xe!==void 0&&(K[E.__cacheKey].usedTimes--,xe.usedTimes===0&&w(_)),E.__cacheKey=Y,E.__webglTexture=K[Y].texture}return D}function At(E,_,D){return Math.floor(Math.floor(E/D)/_)}function St(E,_,D,q){const Y=E.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,D,q,_.data);else{Y.sort((Q,te)=>Q.start-te.start);let xe=0;for(let Q=1;Q<Y.length;Q++){const te=Y[xe],_e=Y[Q],be=te.start+te.count,he=At(_e.start,_.width,4),Ge=At(te.start,_.width,4);_e.start<=be+1&&he===Ge&&At(_e.start+_e.count-1,_.width,4)===he?te.count=Math.max(te.count,_e.start+_e.count-te.start):(++xe,Y[xe]=_e)}Y.length=xe+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Q=0,te=Y.length;Q<te;Q++){const _e=Y[Q],be=Math.floor(_e.start/4),he=Math.ceil(_e.count/4),Ge=be%_.width,L=Math.floor(be/_.width),se=he,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ge,L,se,ne,D,q,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function j(E,_,D){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const K=ke(E,_),Y=_.source;t.bindTexture(q,E.__webglTexture,n.TEXTURE0+D);const xe=i.get(Y);if(Y.version!==xe.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const re=Je.getPrimaries(Je.workingColorSpace),Te=_.colorSpace===Vi?null:Je.getPrimaries(_.colorSpace),Ce=_.colorSpace===Vi||re===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Q=b(_.image,!1,r.maxTextureSize);Q=yt(_,Q);const te=s.convert(_.format,_.colorSpace),_e=s.convert(_.type);let be=M(_.internalFormat,te,_e,_.colorSpace,_.isVideoTexture);ue(q,_);let he;const Ge=_.mipmaps,L=_.isVideoTexture!==!0,se=xe.__version===void 0||K===!0,ne=Y.dataReady,me=R(_,Q);if(_.isDepthTexture)be=S(_.format===xr,_.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,be,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,te,_e,null));else if(_.isDataTexture)if(Ge.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,me,be,Ge[0].width,Ge[0].height);for(let ee=0,$=Ge.length;ee<$;ee++)he=Ge[ee],L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,_e,he.data):t.texImage2D(n.TEXTURE_2D,ee,be,he.width,he.height,0,te,_e,he.data);_.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,me,be,Q.width,Q.height),ne&&St(_,Q,te,_e)):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,te,_e,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,be,Ge[0].width,Ge[0].height,Q.depth);for(let ee=0,$=Ge.length;ee<$;ee++)if(he=Ge[ee],_.format!==jn)if(te!==null)if(L){if(ne)if(_.layerUpdates.size>0){const ve=nu(he.width,he.height,_.format,_.type);for(const Le of _.layerUpdates){const Mt=he.data.subarray(Le*ve/he.data.BYTES_PER_ELEMENT,(Le+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Le,he.width,he.height,1,te,Mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,Q.depth,te,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,be,he.width,he.height,Q.depth,0,he.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,Q.depth,te,_e,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,be,he.width,he.height,Q.depth,0,te,_e,he.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,me,be,Ge[0].width,Ge[0].height);for(let ee=0,$=Ge.length;ee<$;ee++)he=Ge[ee],_.format!==jn?te!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,be,he.width,he.height,0,he.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,_e,he.data):t.texImage2D(n.TEXTURE_2D,ee,be,he.width,he.height,0,te,_e,he.data)}else if(_.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,be,Q.width,Q.height,Q.depth),ne)if(_.layerUpdates.size>0){const ee=nu(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const ve=Q.data.subarray($*ee/Q.data.BYTES_PER_ELEMENT,($+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,te,_e,ve)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,te,_e,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Q.width,Q.height,Q.depth,0,te,_e,Q.data);else if(_.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,me,be,Q.width,Q.height,Q.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,te,_e,Q.data)):t.texImage3D(n.TEXTURE_3D,0,be,Q.width,Q.height,Q.depth,0,te,_e,Q.data);else if(_.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,me,be,Q.width,Q.height);else{let ee=Q.width,$=Q.height;for(let ve=0;ve<me;ve++)t.texImage2D(n.TEXTURE_2D,ve,be,ee,$,0,te,_e,null),ee>>=1,$>>=1}}else if(Ge.length>0){if(L&&se){const ee=Me(Ge[0]);t.texStorage2D(n.TEXTURE_2D,me,be,ee.width,ee.height)}for(let ee=0,$=Ge.length;ee<$;ee++)he=Ge[ee],L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,te,_e,he):t.texImage2D(n.TEXTURE_2D,ee,be,te,_e,he);_.generateMipmaps=!1}else if(L){if(se){const ee=Me(Q);t.texStorage2D(n.TEXTURE_2D,me,be,ee.width,ee.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,_e,Q)}else t.texImage2D(n.TEXTURE_2D,0,be,te,_e,Q);m(_)&&f(q),xe.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ie(E,_,D){if(_.image.length!==6)return;const q=ke(E,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+D);const Y=i.get(K);if(K.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+D);const xe=Je.getPrimaries(Je.workingColorSpace),re=_.colorSpace===Vi?null:Je.getPrimaries(_.colorSpace),Te=_.colorSpace===Vi||xe===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,te=[];for(let $=0;$<6;$++)!Ce&&!Q?te[$]=b(_.image[$],!0,r.maxCubemapSize):te[$]=Q?_.image[$].image:_.image[$],te[$]=yt(_,te[$]);const _e=te[0],be=s.convert(_.format,_.colorSpace),he=s.convert(_.type),Ge=M(_.internalFormat,be,he,_.colorSpace),L=_.isVideoTexture!==!0,se=Y.__version===void 0||q===!0,ne=K.dataReady;let me=R(_,_e);ue(n.TEXTURE_CUBE_MAP,_);let ee;if(Ce){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ge,_e.width,_e.height);for(let $=0;$<6;$++){ee=te[$].mipmaps;for(let ve=0;ve<ee.length;ve++){const Le=ee[ve];_.format!==jn?be!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Le.width,Le.height,be,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ge,Le.width,Le.height,0,Le.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Le.width,Le.height,be,he,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ge,Le.width,Le.height,0,be,he,Le.data)}}}else{if(ee=_.mipmaps,L&&se){ee.length>0&&me++;const $=Me(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(Q){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,te[$].width,te[$].height,be,he,te[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,te[$].width,te[$].height,0,be,he,te[$].data);for(let ve=0;ve<ee.length;ve++){const Mt=ee[ve].image[$].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,Mt.width,Mt.height,be,he,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ge,Mt.width,Mt.height,0,be,he,Mt.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,he,te[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,be,he,te[$]);for(let ve=0;ve<ee.length;ve++){const Le=ee[ve];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,be,he,Le.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ge,be,he,Le.image[$])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),Y.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ae(E,_,D,q,K,Y){const xe=s.convert(D.format,D.colorSpace),re=s.convert(D.type),Te=M(D.internalFormat,xe,re,D.colorSpace),Ce=i.get(_),Q=i.get(D);if(Q.__renderTarget=_,!Ce.__hasExternalTextures){const te=Math.max(1,_.width>>Y),_e=Math.max(1,_.height>>Y);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,Te,te,_e,_.depth,0,xe,re,null):t.texImage2D(K,Y,Te,te,_e,0,xe,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ht(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,Q.__webglTexture,0,P(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,Q.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(E,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,Y=S(_.stencilBuffer,K),xe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ht(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Y,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,E)}else{const q=_.textures;for(let K=0;K<q.length;K++){const Y=q[K],xe=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),Te=M(Y.internalFormat,xe,re,Y.colorSpace);Ht(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Te,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Te,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(E,_,D){const q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ce=s.convert(_.depthTexture.format),Q=s.convert(_.depthTexture.type);let te;_.depthTexture.format===Ci?te=n.DEPTH_COMPONENT24:_.depthTexture.format===xr&&(te=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,te,_.width,_.height,0,Ce,Q,null)}}else k(_.depthTexture,0);const Y=K.__webglTexture,xe=P(_),re=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Te=_.depthTexture.format===xr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ci)Ht(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,re,Y,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,Te,re,Y,0);else if(_.depthTexture.format===xr)Ht(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,re,Y,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,Te,re,Y,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const _=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)Re(_.__webglFramebuffer[q],E,q);else{const q=E.texture.mipmaps;q&&q.length>0?Re(_.__webglFramebuffer[0],E,0):Re(_.__webglFramebuffer,E,0)}else if(D){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[q],E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Y)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(E,_,D){const q=i.get(E);_!==void 0&&ae(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ie(E)}function Ke(E){const _=E.texture,D=i.get(E),q=i.get(_);E.addEventListener("dispose",A);const K=E.textures,Y=E.isWebGLCubeRenderTarget===!0,xe=K.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let Te=0;Te<_.mipmaps.length;Te++)D.__webglFramebuffer[re][Te]=n.createFramebuffer()}else D.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)D.__webglFramebuffer[re]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(xe)for(let re=0,Te=K.length;re<Te;re++){const Ce=i.get(K[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ht(E)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const Te=K[re];D.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Ce=s.convert(Te.format,Te.colorSpace),Q=s.convert(Te.type),te=M(Te.internalFormat,Ce,Q,Te.colorSpace,E.isXRRenderTarget===!0),_e=P(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,te,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,D.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)ae(D.__webglFramebuffer[re][Te],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te);else ae(D.__webglFramebuffer[re],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let re=0,Te=K.length;re<Te;re++){const Ce=K[re],Q=i.get(Ce);let te=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,Q.__webglTexture),ue(te,Ce),ae(D.__webglFramebuffer,E,Ce,n.COLOR_ATTACHMENT0+re,te,0),m(Ce)&&f(te)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),ue(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)ae(D.__webglFramebuffer[Te],E,_,n.COLOR_ATTACHMENT0,re,Te);else ae(D.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,re,0);m(_)&&f(re),t.unbindTexture()}E.depthBuffer&&Ie(E)}function ot(E){const _=E.textures;for(let D=0,q=_.length;D<q;D++){const K=_[D];if(m(K)){const Y=x(E),xe=i.get(K).__webglTexture;t.bindTexture(Y,xe),f(Y),t.unbindTexture()}}}const gt=[],ze=[];function kt(E){if(E.samples>0){if(Ht(E)===!1){const _=E.textures,D=E.width,q=E.height;let K=n.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(E),re=_.length>1;if(re)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Te=E.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ce]);const Q=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,D,q,0,0,D,q,K,n.NEAREST),c===!0&&(gt.length=0,ze.length=0,gt.push(n.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(gt.push(Y),ze.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ce]);const Q=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(E){return Math.min(r.maxSamples,E.samples)}function Ht(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function st(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function yt(E,_){const D=E.colorSpace,q=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==us&&D!==Vi&&(Je.getTransfer(D)===lt?(q!==jn||K!==Pn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",D)),_}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=qt,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Db(n,e){function t(i,r=Vi){let s;const a=Je.getTransfer(r);if(i===Pn)return n.UNSIGNED_BYTE;if(i===bd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Of)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uf)return n.BYTE;if(i===Ff)return n.SHORT;if(i===ra)return n.UNSIGNED_SHORT;if(i===vd)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===Bf)return n.ALPHA;if(i===zf)return n.RGB;if(i===jn)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===xr)return n.DEPTH_STENCIL;if(i===Md)return n.RED;if(i===Sd)return n.RED_INTEGER;if(i===hs)return n.RG;if(i===wd)return n.RG_INTEGER;if(i===Ed)return n.RGBA_INTEGER;if(i===io||i===ro||i===so||i===ao)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Al||i===Tl||i===Rl||i===Cl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Pl||i===Ll||i===Dl||i===Nl||i===Ul||i===Fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Il||i===Pl)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ll)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dl)return s.COMPRESSED_R11_EAC;if(i===Nl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ul)return s.COMPRESSED_RG11_EAC;if(i===Fl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kl||i===Ol||i===Bl||i===zl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===$l||i===Yl||i===ql||i===jl||i===Kl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ol)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===Zl||i===Ql)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jl)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ed||i===td||i===nd||i===id)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ed)return s.COMPRESSED_RED_RGTC1_EXT;if(i===td)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===id)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ub=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Zf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ui({vertexShader:Nb,fragmentShader:Ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kb extends ws{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const b=typeof XRWebGLBinding<"u",m=new Fb,f={},x=t.getContextAttributes();let M=null,S=null;const R=[],T=[],A=new je;let v=null;const w=new Xn;w.viewport=new Ft;const z=new Xn;z.viewport=new Ft;const C=[w,z],U=new jg;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=R[j];return ie===void 0&&(ie=new xc,R[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=R[j];return ie===void 0&&(ie=new xc,R[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=R[j];return ie===void 0&&(ie=new xc,R[j]=ie),ie.getHandSpace()};function k(j){const ie=T.indexOf(j.inputSource);if(ie===-1)return;const ae=R[ie];ae!==void 0&&(ae.update(j.inputSource,j.frame,l||a),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",O);for(let j=0;j<R.length;j++){const ie=T[j];ie!==null&&(T[j]=null,R[j].disconnect(ie))}B=null,W=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(M),p=null,d=null,h=null,r=null,S=null,St.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",H),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ue=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?xr:Ci,Ue=x.stencil?sa:di);const Ie={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ci(d.textureWidth,d.textureHeight,{format:jn,type:Pn,depthTexture:new oa(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ci(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),St.setContext(r),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(j){for(let ie=0;ie<j.removed.length;ie++){const ae=j.removed[ie],Ue=T.indexOf(ae);Ue>=0&&(T[Ue]=null,R[Ue].disconnect(ae))}for(let ie=0;ie<j.added.length;ie++){const ae=j.added[ie];let Ue=T.indexOf(ae);if(Ue===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=T.length){T.push(ae),Ue=Ie;break}else if(T[Ie]===null){T[Ie]=ae,Ue=Ie;break}if(Ue===-1)break}const Re=R[Ue];Re&&Re.connect(ae)}}const Z=new F,J=new F;function de(j,ie,ae){Z.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(ae.matrixWorld);const Ue=Z.distanceTo(J),Re=ie.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,qt=Re[14]/(Re[10]-1),Ke=Re[14]/(Re[10]+1),ot=(Re[9]+1)/Re[5],gt=(Re[9]-1)/Re[5],ze=(Re[8]-1)/Re[0],kt=(Ie[8]+1)/Ie[0],P=qt*ze,Ht=qt*kt,st=Ue/(-ze+kt),yt=st*-ze;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(yt),j.translateZ(st),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=qt+st,E=Ke+st,_=P-yt,D=Ht+(Ue-yt),q=ot*Ke/E*Me,K=gt*Ke/E*Me;j.projectionMatrix.makePerspective(_,D,q,K,Me,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ge(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,ae=j.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),U.near=z.near=w.near=ie,U.far=z.far=w.far=ae,(B!==U.near||W!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,W=U.far),U.layers.mask=j.layers.mask|6,w.layers.mask=U.layers.mask&-5,z.layers.mask=U.layers.mask&-3;const Ue=j.parent,Re=U.cameras;ge(U,Ue);for(let Ie=0;Ie<Re.length;Ie++)ge(Re[Ie],Ue);Re.length===2?de(U,w,z):U.projectionMatrix.copy(w.projectionMatrix),ue(j,U,Ue)};function ue(j,ie,ae){ae===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=rd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return f[j]};let ke=null;function At(j,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ue=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,Ue=!0);for(let Ke=0;Ke<ae.length;Ke++){const ot=ae[Ke];let gt=null;if(p!==null)gt=p.getViewport(ot);else{const kt=h.getViewSubImage(d,ot);gt=kt.viewport,Ke===0&&(e.setRenderTargetTextures(S,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(S))}let ze=C[Ke];ze===void 0&&(ze=new Xn,ze.layers.enable(Ke),ze.viewport=new Ft,C[Ke]=ze),ze.matrix.fromArray(ot.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ot.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(gt.x,gt.y,gt.width,gt.height),Ke===0&&(U.matrix.copy(ze.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ue===!0&&U.cameras.push(ze)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){h=i.getBinding();const Ke=h.getDepthInformation(ae[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,r.renderState)}if(Re&&Re.includes("camera-access")&&b){e.state.unbindTexture(),h=i.getBinding();for(let Ke=0;Ke<ae.length;Ke++){const ot=ae[Ke].camera;if(ot){let gt=f[ot];gt||(gt=new Zf,f[ot]=gt);const ze=h.getCameraImage(ot);gt.sourceTexture=ze}}}}for(let ae=0;ae<R.length;ae++){const Ue=T[ae],Re=R[ae];Ue!==null&&Re!==void 0&&Re.update(Ue,ie,l||a)}ke&&ke(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const St=new rp;St.setAnimationLoop(At),this.setAnimationLoop=function(j){ke=j},this.dispose=function(){}}}const dr=new hi,Ob=new bt;function Bb(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Qf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,M,S){f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),b(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),M=x.envMap,S=x.envMapRotation;M&&(m.envMap.value=M,dr.copy(S),dr.x*=-1,dr.y*=-1,dr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(dr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zb(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const S=M.program;i.uniformBlockBinding(x,S)}function l(x,M){let S=r[x.id];S===void 0&&(g(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(x,R);const T=e.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function u(x){const M=h();x.__bindingPointIndex=M;const S=n.createBuffer(),R=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],S=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,A=S.length;T<A;T++){const v=Array.isArray(S[T])?S[T]:[S[T]];for(let w=0,z=v.length;w<z;w++){const C=v[w];if(p(C,T,w,R)===!0){const U=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let k=0;k<B.length;k++){const H=B[k],O=b(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+W,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,S,R){const T=x.value,A=M+"_"+S;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const v=R[A];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return R[A]=T,!0}else if(v.equals(T)===!1)return v.copy(T),!0}return!1}function g(x){const M=x.uniforms;let S=0;const R=16;for(let A=0,v=M.length;A<v;A++){const w=Array.isArray(M[A])?M[A]:[M[A]];for(let z=0,C=w.length;z<C;z++){const U=w[z],B=Array.isArray(U.value)?U.value:[U.value];for(let W=0,k=B.length;W<k;W++){const H=B[W],O=b(H),Z=S%R,J=Z%O.boundary,de=Z+J;S+=J,de!==0&&R-de<O.storage&&(S+=R-de),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=O.storage}}}const T=S%R;return T>0&&(S+=R-T),x.__size=S,x.__cache={},this}function b(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const Gb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function Vb(){return ti===null&&(ti=new Kf(Gb,16,16,hs,Ri),ti.name="DFG_LUT",ti.minFilter=un,ti.magFilter=un,ti.wrapS=wi,ti.wrapT=wi,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Hb{constructor(e={}){const{canvas:t=dg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const b=p,m=new Set([Ed,wd,Sd]),f=new Set([Pn,di,ra,sa,bd,yd]),x=new Uint32Array(4),M=new Int32Array(4);let S=null,R=null;const T=[],A=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let z=!1;this._outputColorSpace=Rn;let C=0,U=0,B=null,W=-1,k=null;const H=new Ft,O=new Ft;let Z=null;const J=new Ye(0);let de=0,ge=t.width,ue=t.height,ke=1,At=null,St=null;const j=new Ft(0,0,ge,ue),ie=new Ft(0,0,ge,ue);let ae=!1;const Ue=new Id;let Re=!1,Ie=!1;const qt=new bt,Ke=new F,ot=new Ft,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function kt(){return B===null?ke:1}let P=i;function Ht(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_d}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),P===null){const N="webgl2";if(P=Ht(N,y),P===null)throw Ht(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw tt("WebGLRenderer: "+y.message),y}let st,yt,Me,E,_,D,q,K,Y,xe,re,Te,Ce,Q,te,_e,be,he,Ge,L,se,ne,me;function ee(){st=new H_(P),st.init(),se=new Db(P,st),yt=new U_(P,st,e,se),Me=new Pb(P,st),yt.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),E=new $_(P),_=new xb,D=new Lb(P,st,Me,_,yt,se,E),q=new V_(w),K=new Jg(P),ne=new D_(P,K),Y=new W_(P,K,E,ne),xe=new q_(P,Y,K,ne,E),he=new Y_(P,yt,D),te=new F_(_),re=new gb(w,q,st,yt,ne,te),Te=new Bb(w,_),Ce=new vb,Q=new Eb(st),be=new L_(w,q,Me,xe,g,c),_e=new Ib(w,xe,yt),me=new zb(P,E,yt,Me),Ge=new N_(P,st,E),L=new X_(P,st,E),E.programs=re.programs,w.capabilities=yt,w.extensions=st,w.properties=_,w.renderLists=Ce,w.shadowMap=_e,w.state=Me,w.info=E}ee(),b!==Pn&&(v=new K_(b,t.width,t.height,r,s));const $=new kb(w,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(y){y!==void 0&&(ke=y,this.setSize(ge,ue,!1))},this.getSize=function(y){return y.set(ge,ue)},this.setSize=function(y,N,X=!0){if($.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=y,ue=N,t.width=Math.floor(y*ke),t.height=Math.floor(N*ke),X===!0&&(t.style.width=y+"px",t.style.height=N+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(ge*ke,ue*ke).floor()},this.setDrawingBufferSize=function(y,N,X){ge=y,ue=N,ke=X,t.width=Math.floor(y*X),t.height=Math.floor(N*X),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(b===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(H)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,N,X,V){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,N,X,V),Me.viewport(H.copy(j).multiplyScalar(ke).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,N,X,V){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,N,X,V),Me.scissor(O.copy(ie).multiplyScalar(ke).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){Me.setScissorTest(ae=y)},this.setOpaqueSort=function(y){At=y},this.setTransparentSort=function(y){St=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,X=!0){let V=0;if(y){let G=!1;if(B!==null){const ce=B.texture.format;G=m.has(ce)}if(G){const ce=B.texture.type,fe=f.has(ce),le=be.getClearColor(),ye=be.getClearAlpha(),we=le.r,Ne=le.g,Ve=le.b;fe?(x[0]=we,x[1]=Ne,x[2]=Ve,x[3]=ye,P.clearBufferuiv(P.COLOR,0,x)):(M[0]=we,M[1]=Ne,M[2]=Ve,M[3]=ye,P.clearBufferiv(P.COLOR,0,M))}else V|=P.COLOR_BUFFER_BIT}N&&(V|=P.DEPTH_BUFFER_BIT),X&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),be.dispose(),Ce.dispose(),Q.dispose(),_.dispose(),q.dispose(),xe.dispose(),ne.dispose(),me.dispose(),re.dispose(),$.dispose(),$.removeEventListener("sessionstart",gh),$.removeEventListener("sessionend",xh),ir.stop()};function ve(y){y.preventDefault(),Dh("WebGLRenderer: Context Lost."),z=!0}function Le(){Dh("WebGLRenderer: Context Restored."),z=!1;const y=E.autoReset,N=_e.enabled,X=_e.autoUpdate,V=_e.needsUpdate,G=_e.type;ee(),E.autoReset=y,_e.enabled=N,_e.autoUpdate=X,_e.needsUpdate=V,_e.type=G}function Mt(y){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ct(y){const N=y.target;N.removeEventListener("dispose",ct),pi(N)}function pi(y){mi(y),_.remove(y)}function mi(y){const N=_.get(y).programs;N!==void 0&&(N.forEach(function(X){re.releaseProgram(X)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,X,V,G,ce){N===null&&(N=gt);const fe=G.isMesh&&G.matrixWorld.determinant()<0,le=Em(y,N,X,V,G);Me.setMaterial(V,fe);let ye=X.index,we=1;if(V.wireframe===!0){if(ye=Y.getWireframeAttribute(X),ye===void 0)return;we=2}const Ne=X.drawRange,Ve=X.attributes.position;let Ae=Ne.start*we,dt=(Ne.start+Ne.count)*we;ce!==null&&(Ae=Math.max(Ae,ce.start*we),dt=Math.min(dt,(ce.start+ce.count)*we)),ye!==null?(Ae=Math.max(Ae,0),dt=Math.min(dt,ye.count)):Ve!=null&&(Ae=Math.max(Ae,0),dt=Math.min(dt,Ve.count));const Ot=dt-Ae;if(Ot<0||Ot===1/0)return;ne.setup(G,V,le,X,ye);let Dt,ht=Ge;if(ye!==null&&(Dt=K.get(ye),ht=L,ht.setIndex(Dt)),G.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*kt()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(G.isLine){let on=V.linewidth;on===void 0&&(on=1),Me.setLineWidth(on*kt()),G.isLineSegments?ht.setMode(P.LINES):G.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else G.isPoints?ht.setMode(P.POINTS):G.isSprite&&ht.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const on=G._multiDrawStarts,Se=G._multiDrawCounts,Sn=G._multiDrawCount,et=ye?K.get(ye).bytesPerElement:1,zn=_.get(V).currentProgram.getUniforms();for(let Qn=0;Qn<Sn;Qn++)zn.setValue(P,"_gl_DrawID",Qn),ht.render(on[Qn]/et,Se[Qn])}else if(G.isInstancedMesh)ht.renderInstances(Ae,Ot,G.count);else if(X.isInstancedBufferGeometry){const on=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Se=Math.min(X.instanceCount,on);ht.renderInstances(Ae,Ot,Se)}else ht.render(Ae,Ot)};function mh(y,N,X){y.transparent===!0&&y.side===si&&y.forceSinglePass===!1?(y.side=Mn,y.needsUpdate=!0,Ea(y,N,X),y.side=Ji,y.needsUpdate=!0,Ea(y,N,X),y.side=si):Ea(y,N,X)}this.compile=function(y,N,X=null){X===null&&(X=y),R=Q.get(X),R.init(N),A.push(R),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),y!==X&&y.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),R.setupLights();const V=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ce=G.material;if(ce)if(Array.isArray(ce))for(let fe=0;fe<ce.length;fe++){const le=ce[fe];mh(le,X,G),V.add(le)}else mh(ce,X,G),V.add(ce)}),R=A.pop(),V},this.compileAsync=function(y,N,X=null){const V=this.compile(y,N,X);return new Promise(G=>{function ce(){if(V.forEach(function(fe){_.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){G(y);return}setTimeout(ce,10)}st.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let sc=null;function wm(y){sc&&sc(y)}function gh(){ir.stop()}function xh(){ir.start()}const ir=new rp;ir.setAnimationLoop(wm),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(y){sc=y,$.setAnimationLoop(y),y===null?ir.stop():ir.start()},$.addEventListener("sessionstart",gh),$.addEventListener("sessionend",xh),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const X=$.enabled===!0&&$.isPresenting===!0,V=v!==null&&(B===null||X)&&v.begin(w,B);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,N,B),R=Q.get(y,A.length),R.init(N),A.push(R),qt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(qt,ai,N.reversedDepth),Ie=this.localClippingEnabled,Re=te.init(this.clippingPlanes,Ie),S=Ce.get(y,T.length),S.init(),T.push(S),$.enabled===!0&&$.isPresenting===!0){const fe=w.xr.getDepthSensingMesh();fe!==null&&ac(fe,N,-1/0,w.sortObjects)}ac(y,N,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(At,St),ze=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ze&&be.addToRenderList(S,y),this.info.render.frame++,Re===!0&&te.beginShadows();const G=R.state.shadowsArray;if(_e.render(G,y,N),Re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&v.hasRenderPass())===!1){const fe=S.opaque,le=S.transmissive;if(R.setupLights(),N.isArrayCamera){const ye=N.cameras;if(le.length>0)for(let we=0,Ne=ye.length;we<Ne;we++){const Ve=ye[we];vh(fe,le,y,Ve)}ze&&be.render(y);for(let we=0,Ne=ye.length;we<Ne;we++){const Ve=ye[we];_h(S,y,Ve,Ve.viewport)}}else le.length>0&&vh(fe,le,y,N),ze&&be.render(y),_h(S,y,N)}B!==null&&U===0&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),V&&v.end(w),y.isScene===!0&&y.onAfterRender(w,y,N),ne.resetDefaultState(),W=-1,k=null,A.pop(),A.length>0?(R=A[A.length-1],Re===!0&&te.setGlobalState(w.clippingPlanes,R.state.camera)):R=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function ac(y,N,X,V){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)R.pushLight(y),y.castShadow&&R.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ue.intersectsSprite(y)){V&&ot.setFromMatrixPosition(y.matrixWorld).applyMatrix4(qt);const fe=xe.update(y),le=y.material;le.visible&&S.push(y,fe,le,X,ot.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ue.intersectsObject(y))){const fe=xe.update(y),le=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ot.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ot.copy(fe.boundingSphere.center)),ot.applyMatrix4(y.matrixWorld).applyMatrix4(qt)),Array.isArray(le)){const ye=fe.groups;for(let we=0,Ne=ye.length;we<Ne;we++){const Ve=ye[we],Ae=le[Ve.materialIndex];Ae&&Ae.visible&&S.push(y,fe,Ae,X,ot.z,Ve)}}else le.visible&&S.push(y,fe,le,X,ot.z,null)}}const ce=y.children;for(let fe=0,le=ce.length;fe<le;fe++)ac(ce[fe],N,X,V)}function _h(y,N,X,V){const{opaque:G,transmissive:ce,transparent:fe}=y;R.setupLightsView(X),Re===!0&&te.setGlobalState(w.clippingPlanes,X),V&&Me.viewport(H.copy(V)),G.length>0&&wa(G,N,X),ce.length>0&&wa(ce,N,X),fe.length>0&&wa(fe,N,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function vh(y,N,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[V.id]===void 0){const Ae=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[V.id]=new ci(1,1,{generateMipmaps:!0,type:Ae?Ri:Pn,minFilter:gr,samples:Math.max(4,yt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const ce=R.state.transmissionRenderTarget[V.id],fe=V.viewport||H;ce.setSize(fe.z*w.transmissionResolutionScale,fe.w*w.transmissionResolutionScale);const le=w.getRenderTarget(),ye=w.getActiveCubeFace(),we=w.getActiveMipmapLevel();w.setRenderTarget(ce),w.getClearColor(J),de=w.getClearAlpha(),de<1&&w.setClearColor(16777215,.5),w.clear(),ze&&be.render(X);const Ne=w.toneMapping;w.toneMapping=oi;const Ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),R.setupLightsView(V),Re===!0&&te.setGlobalState(w.clippingPlanes,V),wa(y,X,V),D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let dt=0,Ot=N.length;dt<Ot;dt++){const Dt=N[dt],{object:ht,geometry:on,material:Se,group:Sn}=Dt;if(Se.side===si&&ht.layers.test(V.layers)){const et=Se.side;Se.side=Mn,Se.needsUpdate=!0,bh(ht,X,V,on,Se,Sn),Se.side=et,Se.needsUpdate=!0,Ae=!0}}Ae===!0&&(D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce))}w.setRenderTarget(le,ye,we),w.setClearColor(J,de),Ve!==void 0&&(V.viewport=Ve),w.toneMapping=Ne}function wa(y,N,X){const V=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ce=y.length;G<ce;G++){const fe=y[G],{object:le,geometry:ye,group:we}=fe;let Ne=fe.material;Ne.allowOverride===!0&&V!==null&&(Ne=V),le.layers.test(X.layers)&&bh(le,N,X,ye,Ne,we)}}function bh(y,N,X,V,G,ce){y.onBeforeRender(w,N,X,V,G,ce),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(w,N,X,V,y,ce),G.transparent===!0&&G.side===si&&G.forceSinglePass===!1?(G.side=Mn,G.needsUpdate=!0,w.renderBufferDirect(X,N,V,G,y,ce),G.side=Ji,G.needsUpdate=!0,w.renderBufferDirect(X,N,V,G,y,ce),G.side=si):w.renderBufferDirect(X,N,V,G,y,ce),y.onAfterRender(w,N,X,V,G,ce)}function Ea(y,N,X){N.isScene!==!0&&(N=gt);const V=_.get(y),G=R.state.lights,ce=R.state.shadowsArray,fe=G.state.version,le=re.getParameters(y,G.state,ce,N,X),ye=re.getProgramCacheKey(le);let we=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=q.get(y.envMap||V.environment,Ne),V.envMapRotation=V.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",ct),we=new Map,V.programs=we);let Ve=we.get(ye);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===fe)return Mh(y,le),Ve}else le.uniforms=re.getUniforms(y),y.onBeforeCompile(le,w),Ve=re.acquireProgram(le,ye),we.set(ye,Ve),V.uniforms=le.uniforms;const Ae=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=te.uniform),Mh(y,le),V.needsLights=Tm(y),V.lightsStateVersion=fe,V.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function yh(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=co.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Mh(y,N){const X=_.get(y);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Em(y,N,X,V,G){N.isScene!==!0&&(N=gt),D.resetTextureUnits();const ce=N.fog,fe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,le=B===null?w.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:us,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,we=q.get(V.envMap||fe,ye),Ne=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!X.morphAttributes.position,dt=!!X.morphAttributes.normal,Ot=!!X.morphAttributes.color;let Dt=oi;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Dt=w.toneMapping);const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,on=ht!==void 0?ht.length:0,Se=_.get(V),Sn=R.state.lights;if(Re===!0&&(Ie===!0||y!==k)){const jt=y===k&&V.id===W;te.setState(V,y,jt)}let et=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Sn.state.version||Se.outputColorSpace!==le||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==we||V.fog===!0&&Se.fog!==ce||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==Ne||Se.vertexTangents!==Ve||Se.morphTargets!==Ae||Se.morphNormals!==dt||Se.morphColors!==Ot||Se.toneMapping!==Dt||Se.morphTargetsCount!==on)&&(et=!0):(et=!0,Se.__version=V.version);let zn=Se.currentProgram;et===!0&&(zn=Ea(V,N,G));let Qn=!1,rr=!1,Nr=!1;const xt=zn.getUniforms(),tn=Se.uniforms;if(Me.useProgram(zn.program)&&(Qn=!0,rr=!0,Nr=!0),V.id!==W&&(W=V.id,rr=!0),Qn||k!==y){Me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xt.setValue(P,"projectionMatrix",y.projectionMatrix),xt.setValue(P,"viewMatrix",y.matrixWorldInverse);const Di=xt.map.cameraPosition;Di!==void 0&&Di.setValue(P,Ke.setFromMatrixPosition(y.matrixWorld)),yt.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,rr=!0,Nr=!0)}if(Se.needsLights&&(Sn.state.directionalShadowMap.length>0&&xt.setValue(P,"directionalShadowMap",Sn.state.directionalShadowMap,D),Sn.state.spotShadowMap.length>0&&xt.setValue(P,"spotShadowMap",Sn.state.spotShadowMap,D),Sn.state.pointShadowMap.length>0&&xt.setValue(P,"pointShadowMap",Sn.state.pointShadowMap,D)),G.isSkinnedMesh){xt.setOptional(P,G,"bindMatrix"),xt.setOptional(P,G,"bindMatrixInverse");const jt=G.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),xt.setValue(P,"boneTexture",jt.boneTexture,D))}G.isBatchedMesh&&(xt.setOptional(P,G,"batchingTexture"),xt.setValue(P,"batchingTexture",G._matricesTexture,D),xt.setOptional(P,G,"batchingIdTexture"),xt.setValue(P,"batchingIdTexture",G._indirectTexture,D),xt.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&xt.setValue(P,"batchingColorTexture",G._colorsTexture,D));const Li=X.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&he.update(G,X,zn),(rr||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,xt.setValue(P,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(tn.envMapIntensity.value=N.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=Vb()),rr&&(xt.setValue(P,"toneMappingExposure",w.toneMappingExposure),Se.needsLights&&Am(tn,Nr),ce&&V.fog===!0&&Te.refreshFogUniforms(tn,ce),Te.refreshMaterialUniforms(tn,V,ke,ue,R.state.transmissionRenderTarget[y.id]),co.upload(P,yh(Se),tn,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(co.upload(P,yh(Se),tn,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue(P,"center",G.center),xt.setValue(P,"modelViewMatrix",G.modelViewMatrix),xt.setValue(P,"normalMatrix",G.normalMatrix),xt.setValue(P,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const jt=V.uniformsGroups;for(let Di=0,Ur=jt.length;Di<Ur;Di++){const Sh=jt[Di];me.update(Sh,zn),me.bind(Sh,zn)}}return zn}function Am(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Tm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,N,X){const V=_.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(y.texture).__webglTexture=N,_.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const X=_.get(y);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Rm=P.createFramebuffer();this.setRenderTarget=function(y,N=0,X=0){B=y,C=N,U=X;let V=null,G=!1,ce=!1;if(y){const le=_.get(y);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),H.copy(y.viewport),O.copy(y.scissor),Z=y.scissorTest,Me.viewport(H),Me.scissor(O),Me.setScissorTest(Z),W=-1;return}else if(le.__webglFramebuffer===void 0)D.setupRenderTarget(y);else if(le.__hasExternalTextures)D.rebindTextures(y,_.get(y.texture).__webglTexture,_.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ne=y.depthTexture;if(le.__boundDepthTexture!==Ne){if(Ne!==null&&_.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(y)}}const ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ce=!0);const we=_.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[N])?V=we[N][X]:V=we[N],G=!0):y.samples>0&&D.useMultisampledRTT(y)===!1?V=_.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[X]:V=we,H.copy(y.viewport),O.copy(y.scissor),Z=y.scissorTest}else H.copy(j).multiplyScalar(ke).floor(),O.copy(ie).multiplyScalar(ke).floor(),Z=ae;if(X!==0&&(V=Rm),Me.bindFramebuffer(P.FRAMEBUFFER,V)&&Me.drawBuffers(y,V),Me.viewport(H),Me.scissor(O),Me.setScissorTest(Z),G){const le=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,le.__webglTexture,X)}else if(ce){const le=N;for(let ye=0;ye<y.textures.length;ye++){const we=_.get(y.textures[ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ye,we.__webglTexture,X,le)}}else if(y!==null&&X!==0){const le=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,X)}W=-1},this.readRenderTargetPixels=function(y,N,X,V,G,ce,fe,le=0){if(!(y&&y.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){Me.bindFramebuffer(P.FRAMEBUFFER,ye);try{const we=y.textures[le],Ne=we.format,Ve=we.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!yt.textureFormatReadable(Ne)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ve)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-V&&X>=0&&X<=y.height-G&&P.readPixels(N,X,V,G,se.convert(Ne),se.convert(Ve),ce)}finally{const we=B!==null?_.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,N,X,V,G,ce,fe,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye)if(N>=0&&N<=y.width-V&&X>=0&&X<=y.height-G){Me.bindFramebuffer(P.FRAMEBUFFER,ye);const we=y.textures[le],Ne=we.format,Ve=we.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!yt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(N,X,V,G,se.convert(Ne),se.convert(Ve),0);const dt=B!==null?_.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,dt);const Ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await hg(P,Ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(Ae),P.deleteSync(Ot),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,X=0){const V=Math.pow(2,-X),G=Math.floor(y.image.width*V),ce=Math.floor(y.image.height*V),fe=N!==null?N.x:0,le=N!==null?N.y:0;D.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,fe,le,G,ce),Me.unbindTexture()};const Cm=P.createFramebuffer(),Im=P.createFramebuffer();this.copyTextureToTexture=function(y,N,X=null,V=null,G=0,ce=0){let fe,le,ye,we,Ne,Ve,Ae,dt,Ot;const Dt=y.isCompressedTexture?y.mipmaps[ce]:y.image;if(X!==null)fe=X.max.x-X.min.x,le=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Ne=X.min.y,Ve=X.isBox3?X.min.z:0;else{const tn=Math.pow(2,-G);fe=Math.floor(Dt.width*tn),le=Math.floor(Dt.height*tn),y.isDataArrayTexture?ye=Dt.depth:y.isData3DTexture?ye=Math.floor(Dt.depth*tn):ye=1,we=0,Ne=0,Ve=0}V!==null?(Ae=V.x,dt=V.y,Ot=V.z):(Ae=0,dt=0,Ot=0);const ht=se.convert(N.format),on=se.convert(N.type);let Se;N.isData3DTexture?(D.setTexture3D(N,0),Se=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),Se=P.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Sn=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),zn=P.getParameter(P.UNPACK_SKIP_PIXELS),Qn=P.getParameter(P.UNPACK_SKIP_ROWS),rr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve);const Nr=y.isDataArrayTexture||y.isData3DTexture,xt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const tn=_.get(y),Li=_.get(N),jt=_.get(tn.__renderTarget),Di=_.get(Li.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,jt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ur=0;Ur<ye;Ur++)Nr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(y).__webglTexture,G,Ve+Ur),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(N).__webglTexture,ce,Ot+Ur)),P.blitFramebuffer(we,Ne,fe,le,Ae,dt,fe,le,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||_.has(y)){const tn=_.get(y),Li=_.get(N);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Cm),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Im);for(let jt=0;jt<ye;jt++)Nr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,G,Ve+jt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,G),xt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Li.__webglTexture,ce,Ot+jt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Li.__webglTexture,ce),G!==0?P.blitFramebuffer(we,Ne,fe,le,Ae,dt,fe,le,P.COLOR_BUFFER_BIT,P.NEAREST):xt?P.copyTexSubImage3D(Se,ce,Ae,dt,Ot+jt,we,Ne,fe,le):P.copyTexSubImage2D(Se,ce,Ae,dt,we,Ne,fe,le);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Se,ce,Ae,dt,Ot,fe,le,ye,ht,on,Dt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,ce,Ae,dt,Ot,fe,le,ye,ht,Dt.data):P.texSubImage3D(Se,ce,Ae,dt,Ot,fe,le,ye,ht,on,Dt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ce,Ae,dt,fe,le,ht,on,Dt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ce,Ae,dt,Dt.width,Dt.height,ht,Dt.data):P.texSubImage2D(P.TEXTURE_2D,ce,Ae,dt,fe,le,ht,on,Dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Sn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,rr),ce===0&&N.generateMipmaps&&P.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(y){_.get(y).__webglFramebuffer===void 0&&D.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?D.setTextureCube(y,0):y.isData3DTexture?D.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?D.setTexture2DArray(y,0):D.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){C=0,U=0,B=null,Me.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const en=Object.freeze({gravity:18,minSpeed:13,extraSpeed:15,minPull:.08,minAngle:5,maxAngle:80,maxFlight:5}),ms=n=>n.gravity??en.gravity,Zi=Object.freeze({x:-6.8,y:2.85}),Xt=Object.freeze({minX:8,maxX:8.62,minY:.6,maxY:5.8}),Wb=Object.freeze({x:Xt.minX,y:(Xt.minY+Xt.maxY)/2}),wr=(n,e,t)=>Math.min(t,Math.max(e,n));function qi(...n){if(!n.every(Number.isFinite))throw new RangeError("Shot math requires finite numbers.")}function Ho(n){qi(n.origin.x,n.origin.y,n.velocity.x,n.velocity.y),n.gravity!==void 0&&qi(n.gravity),n.wind!==void 0&&qi(n.wind)}function Dd(n,e,t,i){const r=Math.min(t,i)*.34;if(![n,e,t,i,r].every(Number.isFinite)||t<=0||i<=0)return null;const s=Math.hypot(n,e)/r;return s<en.minPull||n>=0?null:{angle:wr(Math.atan2(e,-n)*180/Math.PI,en.minAngle,en.maxAngle),power:wr(s,0,1)}}function Wo(n,e=en){qi(n.angle,n.power);const t=wr(n.angle,en.minAngle,en.maxAngle)*Math.PI/180,i=e.minSpeed+e.extraSpeed*wr(n.power,0,1);return{origin:{...Zi},velocity:{x:Math.cos(t)*i,y:Math.sin(t)*i}}}function Jt(n,e){Ho(n),qi(e);const t=n.origin.y+n.velocity.y*e-.5*ms(n)*e*e;return n.wind?{x:n.origin.x+n.velocity.x*e+.5*n.wind*e*e,y:t}:{x:n.origin.x+n.velocity.x*e,y:t}}function Mo(n,e){return Ho(n),qi(e),n.wind?{x:n.velocity.x+n.wind*e,y:n.velocity.y-ms(n)*e}:{x:n.velocity.x,y:n.velocity.y-ms(n)*e}}function dp(n,e){const t=n.wind/2,i=n.velocity.x,r=n.origin.x-e;if(t===0)return i===0?r===0?[0]:[]:[-r/i];const s=i*i-4*t*r;if(s<0)return[];const a=-(i+(i<0?-1:1)*Math.sqrt(s))/2;return a===0?[0]:[a/t,r/a]}function hp(n,e,t,i){if(Ho(n),qi(e.minX,e.maxX,e.minY,e.maxY,t,i),e.minX>e.maxX||e.minY>e.maxY)throw new RangeError("Bounds must be ordered.");if(i<t||t<0)return null;const r=[t,i];if(n.wind){r.push(-n.velocity.x/n.wind);for(const s of[e.minX,e.maxX])r.push(...dp(n,s))}else if(n.velocity.x!==0)for(const s of[e.minX,e.maxX])r.push((s-n.origin.x)/n.velocity.x);for(const s of[e.minY,e.maxY]){const a=ms(n),o=n.velocity.y**2+2*a*(n.origin.y-s);if(o>=0){const c=Math.sqrt(o);r.push((n.velocity.y-c)/a,(n.velocity.y+c)/a)}}for(const s of r.filter(a=>a>=t-1e-9&&a<=i+1e-9).sort((a,o)=>a-o)){const a=Jt(n,s);if(a.x>=e.minX-1e-8&&a.x<=e.maxX+1e-8&&a.y>=e.minY-1e-8&&a.y<=e.maxY+1e-8)return wr(s,t,i)}return null}function up(n,e=.24){if(Ho(n),qi(e),n.origin.y<e)return 0;const t=ms(n);return(n.velocity.y+Math.sqrt(n.velocity.y**2+2*t*(n.origin.y-e)))/t}const Xb=[[-1,0],[1,0],[0,-1],[0,1]];function fp(n,e,t=32){return[...new Set(n.map(i=>`${Math.floor(i%e/t)}:${Math.floor(Math.floor(i/e)/t)}`))]}function pp(n,e,t){const i=new Set(n);for(const r of n){const[s,a]=r.split(":").map(Number);for(const[o,c]of Xb)s+o>=0&&a+c>=0&&s+o<e&&a+c<t&&i.add(`${s+o}:${a+c}`)}return[...i]}function $b(n,e,t,i,r){return Dd(n*r,e,t,i)}function Yb(n,e,t,i){if(n===0)return null;const r=n<0?1:-1,s=Dd(n*r,e,t,i);return s?{...s,facing:r}:null}function qb(n,e,t){if(t<e||!n.length)return null;const i=(t-e)/1e3,r=n.find(o=>o.time>=i)??n.at(-1),s=n[Math.max(0,n.indexOf(r)-1)],a=r.time===s.time?1:Math.min(1,Math.max(0,(i-s.time)/(r.time-s.time)));return r.poses.map(o=>{const c=s.poses.find(l=>l.actorId===o.actorId)?.feet??o.feet;return{actorId:o.actorId,feet:{x:c.x+(o.feet.x-c.x)*a,y:c.y+(o.feet.y-c.y)*a,z:0}}})}function jb(n,e){if(!n)return"";if(n.state==="finished")return n.draw?"Both archers draw.":n.winner===e?"You are the last archer standing.":"Your opponent is the last archer standing.";if(n.state==="aborted")return"The service ended this duel safely.";if(n.state!=="active"||n.phase!=="planning"||!n.lastEvent?.teleport)return"";const t=n.lastEvent.teleport;if(t.ok)return"Teleport landed on a clear supported surface.";const i={"not-upward":"the arrow did not land on an upward-facing surface","no-support":"there was no supporting surface","occupied-or-blocked":"the arrival space was occupied or blocked"};return`Teleport failed: ${t.reason?i[t.reason]:"there was no legal arrival"}. The action was consumed.`}const Yn=n=>n.version==="volley-1";function Kb(n){return JSON.stringify(Yn(n)?[n.id,n.version,n.seat.lifeId,n.epoch,n.roundId]:[n.id,n.version,n.seat.lifeId,n.activeSeat,n.planningStartedAt])}function Jb(n,e){return Yn(n)?n.locks.find(t=>t.actorId===e)?.plan??null:null}function Zb(n){if(!n.seats.every(t=>t.ready))return!1;if(!Yn(n))return n.seats.length===2;if(n.mode==="royale")return n.seats.length>=2&&n.seats.length<=8;const e=new Map;for(const t of n.seats){if(t.teamId===null)return!1;e.set(t.teamId,(e.get(t.teamId)??0)+1)}return n.seats.length===4&&e.size===2&&[...e.values()].every(t=>t===2)}function mp(n,e){const t=Yn(n),i=n.seats.find(d=>d.actorId===e);let r=jb(n,e);if(t&&n.state==="finished"&&(r=n.draw?"Match complete · draw.":n.winningTeam!==null?i&&"teamId"in i&&i.teamId===n.winningTeam?"Your team won.":"The other team won.":n.winner===e?"You are the last archer standing.":"Another archer is the last one standing."),t&&n.state==="aborted"&&(r="The service ended this match safely."),!t)return{preset:"Duel · alternate turns",turn:n.state==="waiting"?"Both archers must ready before the host starts.":n.state==="active"?n.phase==="planning"?n.seat.canAct?"Your turn. Choose an arrow and draw.":"Opponent’s turn. Watch the arena.":"Arrow resolving. Waiting for settlement.":n.state==="finished"?n.draw?"Duel complete · draw.":n.winner===e?"Duel complete · you won.":"Duel complete · opponent won.":"This duel was aborted. Leave to create a new room.",result:r,priority:[],locks:[],pressure:""};const s=n.locks.find(d=>d.actorId===e),a=n.actors.filter(d=>!d.eliminated).length,o=n.seat.canAct?"Choose an arrow and draw to lock.":s?.locked?s.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":n.priority.includes(e)?"Watch the arena.":"You are eliminated. Watch the remaining archers.",c=n.preset==="teams-1"?"Teams 2v2 · shared 20-second planning":n.preset==="royale-fixed-1"?"Royale · fixed arena · 30 rounds / 15 minutes · 20-second planning":"Royale · shrinking safe area · 20-second planning",l=n.state==="waiting"?n.mode==="teams"?"Four archers, two per team, must ready before the host starts.":"Two to eight archers must all ready before the host starts.":n.state==="active"?`Round ${n.round} · ${a} alive · ${n.phase==="planning"?o:"Arrows resolve in published priority order."}`:r,u=n.preset!=="royale-shrink-1"?"":`Safe area (solid) ${n.pressure.minX.toFixed(1)} to ${n.pressure.maxX.toFixed(1)}${n.pressure.warning?` · dashed bounds after round ${n.pressure.warning.afterRound} to ${n.pressure.warning.minX.toFixed(1)}–${n.pressure.warning.maxX.toFixed(1)} · outside feet take 25 damage`:""}`,h=n.locks.map(d=>{const p=d.plan;return{actorId:d.actorId,text:d.locked?p?p.kind==="pass"?"Pass locked":`${p.aim.arrow} locked · ${Math.round(p.aim.angle)}° · ${Math.round(p.aim.power*100)}% · ${p.aim.facing===1?"right":"left"}`:"Locked":"Planning"}});return{preset:c,turn:l,result:r,priority:n.priority,locks:h,pressure:u}}function gp(n,e){return n.state!=="finished"&&n.state!=="aborted"?{kind:"none",label:""}:e?e.joined?{kind:"enter",label:"Enter rematch lobby"}:{kind:"join",label:"Join rematch"}:{kind:"request",label:"Rematch"}}function Qb(n,e,t,i){const r=mp(n,e).locks;return n.seats.map((s,a)=>{const o=n.actors.find(d=>d.id===s.actorId),c=t.find(d=>d.actorId===s.actorId),l=o?.health??100,u=c?.reservedUntil?` · reserved ${Math.max(0,Math.ceil((c.reservedUntil-i())/1e3))}s`:"",h=n.state==="active"?r.find(d=>d.actorId===s.actorId):void 0;return{actorId:s.actorId,text:`${c?.label??`Archer ${a+1}`}${s.actorId===e?" · you":""} · ${l} health${o?.eliminated?" · eliminated":""} · ${n.state==="waiting"?s.ready?"ready":"not ready":c?.status??"disconnected"}${c?.status==="disconnected"?u:""}`,health:l,healthLabel:`Archer ${a+1} health`,team:"teamId"in s&&s.teamId?String(s.teamId):null,lockText:h?.text??null}})}const Xo="combat-protocol-1",Cs="combat-4",ey="The combat rules version has changed. Reload the page to continue.",Nd="skirmish-protocol-1",Ud=Cs,ty="This public arena has been updated. Reload the page to continue.",Fd=Object.freeze({maxRooms:128,maxSockets:128,maxSocketsPerMember:4,maxDebtPerArena:1024,maxDebt:8192,maxMemberships:16384,maxControls:4096,controlsPerMember:2,controlRetryMs:3e5,maxRateBuckets:1024,commandBurst:30,commandWindowMs:1e4,commandBodyBytes:8192,socketFrameBytes:2048,maxSnapshotBytes:4*1024*1024,slowClientBytes:4*1024*1024,authenticationTimeoutMs:5e3,maxUnauthenticatedSockets:16}),ri="combat-protocol-2";function Au(n,e=!1){if(typeof n!="string"||n.length>320)throw new Error("Invalid service origin.");const t=/^(https?):\/\/([A-Za-z0-9.-]+)(?::([1-9][0-9]{0,4}))?$/.exec(n);if(!t||t[0]!==n||!e&&t[1]!=="https")throw new Error("Invalid service origin.");const i=t[2].toLowerCase(),r=i.split(".");if(i.length>253||r.some(c=>!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(c)))throw new Error("Invalid service host.");const s=i==="127.0.0.1";if(!/[a-z]/.test(r.at(-1))&&!(e&&s))throw new Error("DNS service host required.");if(new URL(`${t[1]}://${i}`).hostname!==i)throw new Error("Ambiguous service host.");const a=t[3]===void 0?void 0:Number(t[3]);if(a!==void 0&&a>65535)throw new Error("Invalid service port.");const o=a===(t[1]==="https"?443:80)?void 0:a;return`${t[1]}://${i}${o===void 0?"":`:${o}`}`}function cd(n,e){if(n==="")return null;const t=Au(e,!0),i=n==="/api",r=i?t:Au(n.endsWith("/api")?n.slice(0,-4):n);if(!i&&!n.endsWith("/api"))throw new Error("Service endpoint must end in /api.");const s=`${r}/api`,a=s.replace(/^http/,"ws");return Object.freeze({mode:i?"same-origin":"https",requestBase:i?"/api":s,serviceId:s,boardSocket:`${a}/events`,combatSocket:`${a}/combat/events`})}function ny(n,e){if(n.length!==1)return null;try{return cd(n[0],e)}catch{return null}}function xp(n){if(n.mode==="same-origin")return Object.freeze({identity:"archery.challenge.identity.v1",room:"archery.combat.room.v1",legacy:!0});const e=encodeURIComponent(n.serviceId);return Object.freeze({identity:`archery.service.identity.v2:${e}`,room:`archery.service.room.v2:${e}`,legacy:!1})}function Tu(n){if(typeof n=="string"){if(n!=="/api")throw new Error("Use a parsed endpoint or same-origin /api.");return cd("/api",typeof location>"u"?"http://localhost":location.origin)}const e=n.serviceId.slice(0,-4),t=cd(n.mode==="same-origin"?"/api":n.serviceId,e);if(!t||Object.keys(t).some(i=>t[i]!==n[i]))throw new Error("Invalid shared service context.");return t}const lo=n=>!!n&&typeof n=="object"&&!Array.isArray(n);class li extends Error{status;code;retryAfterMs;transient;constructor(e,t,i,r){super(e),this.name="GuestRequestError",this.status=t,this.code=i,this.retryAfterMs=r,this.transient=r!==null}}function iy(n,e){let t=NaN;return n!==null&&/^[0-9]+$/.test(n)?t=Number(n)*1e3:n!==null&&/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), [0-9]{2} [A-Z][a-z]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT$/.test(n)&&(t=Math.max(0,Date.parse(n)-e)),Number.isSafeInteger(t)&&t>=0&&Number.isSafeInteger(e+t)?Math.max(1e3,t):1e3}function Ru(n){if(!lo(n)||Object.keys(n).length!==2||typeof n.guestId!="string"||!n.guestId||typeof n.token!="string"||!n.token)throw new Error("Invalid guest identity.");return{guestId:n.guestId,token:n.token}}class $o{selectedEndpoint;selectedKeys;fetcher;storage;current=null;generation=0;identityError=null;creating=null;admission=null;constructor(e,t=fetch,i){this.selectedEndpoint=Tu(e),this.selectedKeys=xp(this.selectedEndpoint),this.fetcher=t,this.storage=i;let r;try{r=i?.getItem(this.storageKeys.identity)??null}catch{return}if(r!==null)try{this.current=Object.freeze({...Ru(JSON.parse(r)),revision:this.generation})}catch{this.identityError=new Error("Saved guest identity is unreadable or unsupported. Existing data is preserved; forget it explicitly before creating another guest.")}}get revision(){return this.generation}get guestId(){return this.current?.guestId??null}get endpoint(){return this.selectedEndpoint}get serviceId(){return this.endpoint.serviceId}get storageKeys(){return this.selectedKeys}credentials(){return this.current}assertContext(e,t,i){if(!(typeof e=="string"?e==="/api"&&this.endpoint.mode==="same-origin":(()=>{const s=Tu(e);return s.mode===this.endpoint.mode&&s.serviceId===this.serviceId})())||t!==this.fetcher||i!==this.storage)throw new Error("Shared guest session context must match service, fetcher and storage.")}assertRevision(e){if(e!==this.generation)throw new Error("Guest identity changed. Start again with the current guest.")}ensure(){if(this.identityError)return Promise.reject(this.identityError);if(this.current)return Promise.resolve(this.current);if(this.creating)return this.creating;const e=this.generation,t=this.create(e).finally(()=>{this.creating===t&&(this.creating=null)});return this.creating=t,t}async create(e){const t=Ru(await this.request("/guests",{}));this.assertRevision(e),this.current=Object.freeze({...t,revision:++this.generation});try{this.storage?.setItem(this.storageKeys.identity,JSON.stringify(t))}catch{}return this.current}request(e,t){return this.requestJson(e,t)}readReadiness(){return this.requestJson("/readiness",void 0,!0)}async requestJson(e,t,i=!1){if(this.identityError)throw this.identityError;if(!e.startsWith("/")||e.startsWith("//")||e.includes("\\"))throw new Error("Invalid shared service path.");if(this.admission&&Date.now()<this.admission.notBefore)throw this.admission.error;const r=this.generation,s=await this.fetcher.call(globalThis,this.endpoint.requestBase+e,{signal:AbortSignal.timeout(i?3e3:15e3),method:t===void 0?"GET":"POST",credentials:"omit",redirect:"error",...i?{}:{headers:{"Content-Type":"application/json",...this.current?{Authorization:`Bearer ${this.current.token}`}:{}}},...t===void 0?{}:{body:JSON.stringify(t)}});this.assertRevision(r);let a;try{a=await s.json()}catch(o){if(s.ok)throw o;a=null}if(this.assertRevision(r),!s.ok){const o=lo(a)&&lo(a.error)?a.error:null,c=o&&typeof o.code=="string"?o.code:null,l=c!==null&&["room_capacity","guest_room_capacity","command_capacity","socket_capacity","challenge_capacity","guest_capacity"].includes(c),u=Date.now(),h=s.status===429&&!l?iy(s.headers.get("Retry-After"),u):null,d=new li(o&&typeof o.message=="string"?o.message:h!==null?"The shared service is busy. Wait a moment, then retry.":"Shared service unavailable. Retry or start a new local challenge.",s.status,c,h);throw h!==null&&(!this.admission||u+h>this.admission.notBefore)&&(this.admission={notBefore:u+h,error:d}),d}if(i&&(s.status!==200||s.headers.get("Content-Type")?.split(";",1)[0].trim().toLowerCase()!=="application/json"))throw new Error("Invalid shared service readiness.");if(!lo(a))throw new Error("Invalid shared service response.");return a}forget(){this.generation++,this.current=null,this.identityError=null,this.creating=null;try{this.storage?.removeItem(this.storageKeys.identity)}catch{}}}const ur={rulesVersion:Cs,code:"rules_version",reload:ey},ni={rulesVersion:Ud,code:"protocol_version",reload:ty};function Wi(n,e){return n instanceof li&&n.status===409&&n.code===e.code}function ld(n){return new li(n.reload,409,n.code,null)}const _p=["combat-1","combat-2","combat-3"];function Cu(n,e){return Array.isArray(n)&&n.length===e.length&&e.every((t,i)=>n[i]===t)}async function Iu(n,e){n.assertRevision(e);let t;try{t=await n.readReadiness()}catch{}if(n.assertRevision(e),!t)return!1;const{ready:i,apiVersion:r,rulesVersion:s,combatRulesVersion:a,protocols:o,roomKinds:c,presets:l,publicProfile:u}=t;return i===!0&&r==="shared-api-1"&&s==="challenge-v1"&&_p.includes(a)&&Object.keys(t).length===(u===void 0?7:8)&&(u===void 0||u==="public-admission-v1")&&Cu(o,[Xo,ri,Nd])&&Cu(c,["duel","teams","royale","skirmish"])&&Array.isArray(l)&&l.length===1&&(l[0]==="skirmish-1"||l[0]==="skirmish-2"||l[0]==="skirmish-3")}function ry(n,e,t){return n instanceof TypeError?!0:n instanceof li?n.status===400&&n.code==="path"&&n.message==="Invalid service query."||t===ni&&e!=="/skirmish/rules"&&n.status===404&&n.code==="not_found"&&n.message==="Public arena not found.":!1}async function ns(n,e,t){const i=n.revision;let r;try{r=await n.request(e+"?rulesVersion="+encodeURIComponent(t.rulesVersion))}catch(s){throw ry(s,e,t)&&await Iu(n,i)?ld(t):s}if(_p.includes(r.rulesVersion)&&await Iu(n,i))throw ld(t);return r}const ya=Object.freeze({shotGravity:Object.freeze({min:8,max:30}),shotMinSpeed:Object.freeze({min:8,max:20}),shotExtraSpeed:Object.freeze({min:5,max:24}),actorGravity:Object.freeze({min:8,max:40}),airDrag:Object.freeze({min:0,max:2}),groundFriction:Object.freeze({min:2,max:30}),restitution:Object.freeze({min:0,max:.6}),impactThreshold:Object.freeze({min:2,max:20}),impactMultiplier:Object.freeze({min:0,max:10}),physicsDamageCap:Object.freeze({min:0,max:100,integer:!0}),health:Object.freeze({min:25,max:100,integer:!0}),directBodyDamage:Object.freeze({min:1,max:100,integer:!0}),directHeadDamage:Object.freeze({min:1,max:100,integer:!0}),blastNearDamage:Object.freeze({min:0,max:100,integer:!0}),blastMidDamage:Object.freeze({min:0,max:100,integer:!0}),blastFarDamage:Object.freeze({min:0,max:100,integer:!0}),bombRadius:Object.freeze({min:1,max:3}),bombImpulseFloor:Object.freeze({min:0,max:1}),bombHorizontalImpulse:Object.freeze({min:0,max:20}),bombUpImpulse:Object.freeze({min:0,max:25}),craterRadius:Object.freeze({min:1,max:3}),chipRadius:Object.freeze({min:.25,max:3}),directKnockbackHorizontal:Object.freeze({min:0,max:12}),directKnockbackUp:Object.freeze({min:0,max:12}),planningMs:Object.freeze({min:5e3,max:6e4,integer:!0})}),vp=Object.freeze({min:0,max:6}),Pu=40,vr=Object.keys(ya),Qi=n=>n.windMax??0,sy=/^[a-z0-9][a-z0-9._-]{0,31}$/;function Yo(n){return Object.freeze(n)}const Ln=Yo({id:"base-1",shotGravity:18,shotMinSpeed:13,shotExtraSpeed:15,actorGravity:18,airDrag:.15,groundFriction:14,restitution:0,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,health:100,directBodyDamage:50,directHeadDamage:100,blastNearDamage:25,blastMidDamage:10,blastFarDamage:5,bombRadius:3,bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,craterRadius:3,chipRadius:.5,directKnockbackHorizontal:0,directKnockbackUp:0,planningMs:2e4}),dd=Yo({...Ln,id:"playtest-1",chipRadius:1.25,directKnockbackHorizontal:4,directKnockbackUp:5,bombUpImpulse:14,bombHorizontalImpulse:11,restitution:.4,groundFriction:8,impactThreshold:8}),Lu=Yo({...dd,id:"playtest-2",windMax:3}),Jn=Object.freeze({[Ln.id]:Ln,[dd.id]:dd,[Lu.id]:Lu});function zi(n){throw new RangeError(`Invalid tuning profile: ${n}`)}function ay(n,e){return vr.every(t=>n[t]===e[t])&&Qi(n)===Qi(e)}function qo(n){(!n||typeof n!="object"||Array.isArray(n))&&zi("an object is required.");const e=n,t=Object.keys(e);(!Object.hasOwn(e,"id")||vr.some(s=>!Object.hasOwn(e,s))||t.some(s=>s!=="id"&&!vr.includes(s)&&s!=="windMax"))&&zi("fields differ from the tuning schema."),(typeof e.id!="string"||!sy.test(e.id))&&zi("id must be 1..32 lowercase letters, digits, dot, underscore or hyphen.");const i=vr.map(s=>[s,ya[s]]);Object.hasOwn(e,"windMax")&&i.push(["windMax",vp]);for(const[s,a]of i){const o=e[s];(typeof o!="number"||!Number.isFinite(o))&&zi(`${s} must be a finite number.`),(o<a.min||o>a.max||a.integer&&!Number.isInteger(o))&&zi(`${s} must be ${a.integer?"an integer ":""}between ${a.min} and ${a.max}.`)}const r=e;r.shotMinSpeed+r.shotExtraSpeed>Pu&&zi(`shotMinSpeed + shotExtraSpeed must not exceed ${Pu}.`),(r.blastNearDamage<r.blastMidDamage||r.blastMidDamage<r.blastFarDamage)&&zi("blast damage must not increase with distance.")}function oy(n){qo(n);const e=So(n.id);e&&!ay(n,e)&&zi(`id ${n.id} is reserved for its preset values.`)}function So(n){return typeof n=="string"&&Object.hasOwn(Jn,n)?Jn[n]:void 0}function cy(n){return JSON.stringify([n.id,...vr.map(e=>n[e]),...Qi(n)===0?[]:[Qi(n)]])}function ly(n){let e=0xcbf29ce484222325n;for(const t of new TextEncoder().encode(n))e=BigInt.asUintN(64,(e^BigInt(t))*0x100000001b3n);return e}function wo(n){return`fnv64-${ly(cy(n)).toString(16).padStart(16,"0")}`}function Du(n){oy(n);const e={id:n.id};for(const t of vr)e[t]=n[t];return Qi(n)!==0&&(e.windMax=n.windMax),Yo(e)}function jo(n){return Object.hasOwn(n,"tuning")&&n.tuning?n.tuning:Ln}const Is=Object.freeze([...vr,"windMax"]);function kd(n,e){const t=So(n);if(!t)throw new RangeError(`Unknown tuning preset. Known presets: ${Object.keys(Jn).join(", ")}.`);if(!e||typeof e!="object"||Array.isArray(e))throw new RangeError("Tuning overrides must be an object.");const i=Object.entries(e);for(const[s,a]of i){if(!Is.includes(s))throw new RangeError(`Unknown tuning field "${s.slice(0,40)}".`);if(typeof a!="number"||!Number.isFinite(a))throw new RangeError(`${s} must be a finite number.`)}if(i.length===0)return t;const r=bp(JSON.stringify({base:t.id,...Object.fromEntries(i)}));return wo({...r,id:t.id})===wo(t)?t:r}function bp(n){if(n===void 0||n.trim()==="")return Ln;const e=n.trim();if(!e.startsWith("{")){const s=So(e);if(!s)throw new RangeError(`Unknown tuning preset "${e.slice(0,40)}". Known presets: ${Object.keys(Jn).join(", ")}.`);return s}if(e.length>4096)throw new RangeError("Tuning JSON is too large.");let t;try{t=JSON.parse(e)}catch{throw new RangeError("Tuning JSON is not valid JSON.")}if(!t||typeof t!="object"||Array.isArray(t))throw new RangeError("Tuning JSON must be an object.");let i=t;if(Object.hasOwn(i,"base")){const{base:s,...a}=i,o=So(s);if(!o)throw new RangeError(`Unknown tuning base preset. Known presets: ${Object.keys(Jn).join(", ")}.`);const{id:c,...l}=o;i={...l,...a}}if(Object.hasOwn(i,"id"))return Du(i);const r={...i,id:"custom"};return Du({...r,id:`custom-${wo(r).slice(-8)}`})}const yn=Object.freeze({nock:Object.freeze({x:.92,y:2.77,z:0}),halfWidth:.86,height:3.055,head:Object.freeze({minX:-.325,maxX:.325,minY:2.255,maxY:2.905}),body:Object.freeze({minX:-.86,maxX:.86,minY:0,maxY:2.255})}),yp=Object.freeze({version:"combat-1",cell:.125,gravity:18,step:1/120,maxSteps:3600,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,bombRadius:3,craterRadius:3,chipRadius:.5,maxDeltaCells:2048,activeTerrainRules:"current",bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,groundFriction:14,airDrag:.15,restitution:0,matchMs:9e5,planningMs:2e4,launchDelayMs:100,maxActors:8});function Ko(...n){if(!n.every(Number.isFinite))throw new RangeError("Finite combat coordinates required.")}function Eo(n){if(!n||typeof n!="object")throw new RangeError("Planar position required.");if(Ko(n.x,n.y,n.z),n.z!==0)throw new RangeError("Combat uses world z=0.")}function dy(n){if(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))throw new RangeError("Identifier must be a 1..128 character ASCII token.")}function Mp(n){if(!n||typeof n!="object")throw new RangeError("Aim required.");if(Ko(n.angle,n.power),n.angle<5||n.angle>80||n.power<.08||n.power>1||n.facing!==1&&n.facing!==-1)throw new RangeError("Aim outside combat limits.");if("arrow"in n&&!["normal","bomb","teleport"].includes(n.arrow))throw new RangeError("Unknown arrow.")}function Od(n){if(!Array.isArray(n)||n.length>yp.maxActors)throw new RangeError("At most eight actors.");const e=new Set;for(const t of n){if(dy(t.id),Eo(t.feet),Eo(t.velocity),Ko(t.health),!Number.isInteger(t.health)||t.health<0||t.health>100||Math.abs(t.feet.x)>1024||Math.abs(t.feet.y)>1024||Math.abs(t.velocity.x)>1e3||Math.abs(t.velocity.y)>1e3||e.has(t.id)||t.facing!==1&&t.facing!==-1||typeof t.eliminated!="boolean")throw new RangeError("Invalid actor.");e.add(t.id)}}function Nu(n,e){return{minX:n.x+e.minX,maxX:n.x+e.maxX,minY:n.y+e.minY,maxY:n.y+e.maxY}}function hy(n){return[{kind:"head",bounds:Nu(n.feet,yn.head)},{kind:"body",bounds:Nu(n.feet,yn.body)}]}function uy(n,e=n.facing){return{x:n.feet.x+yn.nock.x*e,y:n.feet.y+yn.nock.y,z:0}}function Vc(n,e,t=Ln,i=0){Od([n]),Mp(e);const r=Wo(e,{minSpeed:t.shotMinSpeed,extraSpeed:t.shotExtraSpeed}),s=uy(n,e.facing);return{origin:{x:s.x,y:s.y},velocity:{x:r.velocity.x*e.facing,y:r.velocity.y},...t.shotGravity===Ln.shotGravity?{}:{gravity:t.shotGravity},...i===0?{}:{wind:i}}}function Sp(n,e,t,i,r=!1){const l=t*i,u=Math.ceil(t/32),h=Math.ceil(i/32);return Object.freeze({version:n,cell:.125,minX:e,minY:-8,width:t,height:i,bedrockY:-6,bounds:Object.freeze({minX:e,maxX:e+t*.125,minY:-8,maxY:-8+i*.125}),cellCount:l,maxCellIndex:l-1,maskHexLength:l/4,chunkSize:32,chunkColumns:u,chunkRows:h,maxChunks:u*h,protectPads:r})}const wp=Sp("arena-1",-32,512,288),Ep=Sp("arena-2",-40,640,352,!0);function In(n){if(n==="arena-1")return wp;if(n==="arena-2")return Ep;throw new RangeError("Unsupported terrain profile.")}function Bd(n){if(n==="skirmish-1")return wp;if(n==="skirmish-2"||n==="skirmish-3")return Ep;throw new RangeError("Unsupported public arena version.")}function zd(n,e){const t=e===void 0?void 0:In(e);if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid terrain metadata.");const i=n,r=In(i.version);if(t&&r!==t)throw new RangeError("Terrain differs from the expected profile.");for(const s of["cell","minX","minY","width","height","bedrockY"])if(i[s]!==r[s])throw new RangeError("Invalid terrain profile geometry.");if(!Number.isSafeInteger(i.revision)||i.revision<0||!Array.isArray(i.spawnPads)||i.spawnPads.length!==8)throw new RangeError("Invalid terrain metadata.");for(const s of i.spawnPads){if(Array.isArray(s))throw new RangeError("Planar spawn pad required.");Eo(s)}if(r.protectPads)for(const s of i.spawnPads)py(r,s),my(r,s);return r}const fy=Object.freeze([[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]]),Ao=1.5,Ap=.5;function py(n,e){const{cell:t,minX:i,minY:r,width:s,height:a}=n,o={col0:Math.round((e.x-Ao-i)/t),col1:Math.round((e.x+Ao-i)/t),row0:Math.round((e.y-Ap-r)/t),row1:Math.round((e.y-r)/t)};if(!Number.isFinite(o.col0+o.row0)||o.col0<0||o.col1>s||o.row0<0||o.row1>a)throw new RangeError("Spawn pad protection outside the terrain grid.");return o}function my(n,e){const{cell:t,minX:i,minY:r,width:s,height:a}=n,o=t/2;if(!(Number.isInteger((e.x-i)/o)&&Number.isInteger((e.y-r)/o))||e.x-Ao<i||e.x+Ao>i+s*t||e.y-Ap<r||e.y+yn.height>r+a*t)throw new RangeError("Spawn pad protection outside the terrain grid.")}Object.freeze(fy.map(([n,e])=>Object.freeze({x:n,y:e})));const gy="tgen-1",Tp=/^[a-z0-9][a-z0-9._-]{0,31}@[1-9][0-9]{0,5}$/;function xy(n){if(typeof n!="string"||!Tp.test(n))return null;const e=n.indexOf("@");return{id:n.slice(0,e),version:Number(n.slice(e+1))}}const _y=Object.freeze({version:"skirmish-1",slots:8,minimumParticipants:4,planningMs:2e4,resetAfter:20,idleAfter:3,receiptLimit:16}),Rp=_y,Cp=Object.freeze({...Rp,version:"skirmish-2",spawnPolicy:"separated"}),vy=Object.freeze({...Cp,version:"skirmish-3",terrain:Object.freeze({generator:gy,pool:"public"})});function Jo(n){if(Bd(n),n==="skirmish-1")return Rp;if(n==="skirmish-2")return Cp;if(n==="skirmish-3")return vy;throw new RangeError("Unsupported public rules version.")}const Gd="skirmish-3";Jo(Gd);const nt=()=>{throw new Error("The public arena service returned an unsupported response.")},Vd=n=>{(!n||typeof n!="object"||Array.isArray(n))&&nt()},Tt=n=>{(!Number.isSafeInteger(n)||n<0)&&nt()},gs=n=>{Number.isFinite(n)||nt()},Ze=n=>{(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))&&nt()},_n=n=>{typeof n!="boolean"&&nt()},He=(...n)=>e=>{n.includes(e)||nt()},Er=n=>e=>{Tt(e),e>n&&nt()},Gt=n=>e=>{e!==null&&n(e)},vt=(n,e={})=>t=>{Vd(t),(Object.keys(n).some(i=>!Object.hasOwn(t,i))||Object.keys(t).some(i=>!Object.hasOwn(n,i)&&!Object.hasOwn(e,i)))&&nt();for(const[i,r]of Object.entries(n))r(t[i]);for(const[i,r]of Object.entries(e))Object.hasOwn(t,i)&&r(t[i])},Fn=(n,e)=>t=>{(!Array.isArray(t)||t.length>e)&&nt();for(const i of t)n(i)},Uu=n=>{Fn(Ze,8)(n),new Set(n).size!==n.length&&nt()},Ar=n=>{vt({x:gs,y:gs,z:He(0)})(n),Eo(n)},Hd={protocolVersion:He(Nd),rulesVersion:He(Ud)},by=n=>{vt({arrow:He("normal","bomb","teleport"),angle:gs,power:gs,facing:He(-1,1)})(n),Mp(n)},To=n=>{vt({id:Ze,actorId:Ze,lifeId:Ze,epoch:Tt,roundId:Ze,kind:He("shot","pass"),aim:Gt(by)})(n),n.kind==="shot"!=(n.aim!==null)&&nt()},yy=n=>{vt({id:Ze,feet:Ar,velocity:Ar,facing:He(-1,1),health:Er(100),eliminated:_n})(n)},My=vt({memberId:Ze,actorId:Ze,lifeId:Ze,slotId:He("s0","s1","s2","s3","s4","s5","s6","s7"),kind:He("human","npc"),present:_n,leaving:_n,idle:_n,missedWindows:Er(3),spawnPending:_n,bombReady:_n}),Ip=vt({memberId:Ze,actorId:Ze,lifeId:Ze,slotId:He("s0","s1","s2","s3","s4","s5","s6","s7"),kind:He("human","npc")}),Pp=n=>vt({fromRevision:Tt,toRevision:Tt,removed:Fn(Er(n.maxCellIndex),yp.maxDeltaCells)}),Lp=n=>vt({kind:He("terrain","head","body","bounds","timeout"),time:gs,point:Ar,normal:Ar},{actorId:Ze,cell:Er(n.maxCellIndex)}),Sy=Fn(vt({time:gs,poses:Fn(vt({actorId:Ze,feet:Ar}),8)}),902),wy=vt({ok:_n},{reason:He("not-upward","no-support","occupied-or-blocked"),feet:Ar}),Ey=n=>vt({action:To,roster:Fn(Ip,8),contact:Lp(n),delta:Pp(n),motion:Sy,startedAt:Gt(Tt),endsAt:Gt(Tt)}),Ay=n=>vt({action:To,roster:Fn(Ip,8),contact:Lp(n),damage:Fn(vt({actorId:Ze,amount:Er(100),cause:He("direct","blast","physics")}),408),delta:Pp(n),teleport:Gt(wy)}),Ty=n=>{try{qo(n)}catch{nt()}},Ry=vt({template:n=>{(typeof n!="string"||!Tp.test(n))&&nt()}}),Cy=n=>{Vd(n);let e;try{e=Bd(n.version)}catch{return nt()}const t=i=>{vt({version:He(e.version),revision:Tt,cell:He(e.cell),minX:He(e.minX),minY:He(e.minY),width:He(e.width),height:He(e.height),bedrockY:He(e.bedrockY),spawnPads:Fn(Ar,8),maskHex:r=>{(typeof r!="string"||r.length!==e.maskHexLength||!/^[0-9a-f]+$/.test(r))&&nt()}})(i);try{zd(i,e.version)}catch{nt()}};vt({version:He("skirmish-1","skirmish-2","skirmish-3"),id:Ze,epoch:Tt,revision:Tt,state:He("active","suspended","aborted"),phase:He("planning","resolving","settling"),terrain:t,actors:Fn(yy,8),members:Fn(My,8),roundSerial:Tt,roundId:Ze,completedRounds:Er(20),resetIn:Gt(Er(2)),slotOrder:Uu,priority:Uu,drainThenBoundary:_n,planningStartedAt:Gt(Tt),deadlineAt:Gt(Tt),launchAt:Gt(Tt),contactAt:Gt(Tt),resolutionEndsAt:Gt(Tt),locks:Fn(vt({actorId:Ze,locked:_n,plan:Gt(To)}),8),action:Gt(To),effect:Gt(Ey(e)),lastEvent:Gt(Ay(e)),self:vt({memberId:Gt(Ze),actorId:Gt(Ze),lifeId:Gt(Ze),pending:_n,canAct:_n,bombReady:_n,opportunities:Tt,bombReadyAt:Tt}),abortReason:Gt(He("settling-exhausted"))},{tuning:Ty,layout:Ry,wind:i=>{(typeof i!="number"||!Number.isFinite(i)||i===0)&&nt()}})(n),Object.hasOwn(n,"layout")!==!!Jo(n.version).terrain&&nt(),Object.hasOwn(n,"wind")&&!(Math.abs(n.wind)<=(n.tuning?.windMax??0))&&nt()};function Dp(n){new TextEncoder().encode(JSON.stringify(n)).byteLength>Fd.maxSnapshotBytes&&nt()}function Np(n){Dp(n),vt({...Hd,roomKind:He("skirmish"),arenaId:Ze,serverNow:Tt,snapshotRevision:Tt,retryHorizonMs:Tt,membership:vt({memberId:Ze,actorId:Ze,lifeId:Gt(Ze),status:He("pending","active","idle","left","suspended","respawn","aborted"),canAct:_n,bombReady:_n}),connections:Fn(vt({actorId:Ze,label:i=>{(typeof i!="string"||i.length>80)&&nt()},kind:He("human","npc"),connected:_n}),8),state:Cy})(n);const e=n,t=e.state;return Od(t.actors),(t.id!==e.arenaId||e.retryHorizonMs<1||e.retryHorizonMs>Fd.controlRetryMs||t.self.lifeId!==e.membership.lifeId||t.self.canAct!==e.membership.canAct||t.self.bombReady!==e.membership.bombReady||t.self.actorId!==null&&t.self.actorId!==e.membership.actorId)&&nt(),(t.slotOrder.length!==8||t.slotOrder.some(i=>!/^s[0-7]$/.test(i))||new Set(t.members.map(i=>i.actorId)).size!==t.members.length||new Set(t.members.map(i=>i.memberId)).size!==t.members.length||new Set(t.members.map(i=>i.slotId)).size!==t.members.length)&&nt(),(t.state==="active"&&t.priority.some(i=>!t.members.some(r=>r.actorId===i))||t.actors.some(i=>!t.members.some(r=>r.actorId===i.id))||t.locks.some(i=>!t.priority.includes(i.actorId)||i.plan!==null&&(!i.locked||i.plan.actorId!==i.actorId||i.plan.epoch!==t.epoch||i.plan.roundId!==t.roundId||!t.members.some(r=>r.actorId===i.actorId&&r.lifeId===i.plan.lifeId)||t.phase==="planning"&&i.actorId!==e.membership.actorId)))&&nt(),t.state!=="active"&&(t.self.canAct||t.action!==null||t.effect!==null||t.locks.some(i=>i.locked||i.plan!==null)||[t.deadlineAt,t.launchAt,t.contactAt,t.resolutionEndsAt].some(i=>i!==null))&&nt(),t.state==="suspended"&&(t.phase!=="planning"||t.planningStartedAt!==null)&&nt(),(t.action&&(t.action.kind!=="shot"||t.action.epoch!==t.epoch)||t.effect&&(t.phase!=="settling"||t.effect.action.epoch!==t.epoch||t.effect.startedAt===null||t.effect.endsAt===null||t.effect.startedAt>t.effect.endsAt||t.effect.startedAt>e.serverNow))&&nt(),e.membership.canAct&&(e.membership.status!=="active"||t.state!=="active"||t.phase!=="planning"||t.deadlineAt===null||!t.priority.includes(e.membership.actorId))&&nt(),e}function Iy(n){Dp(n),vt({ack:vt({...Hd,arenaId:Ze,memberId:Ze,actionId:Ze,kind:He("join","leave","rejoin","shot","pass"),epoch:Tt,roundId:Gt(Ze),lifeId:Gt(Ze),acceptedRevision:Tt,outcome:He("accepted","existing-membership")}),current:vt({type:He("current"),envelope:t=>{Np(t)}})},{reassignedFrom:vt({arenaId:Ze,memberId:Ze})})(n);const e=n;return(e.ack.outcome==="existing-membership"&&e.ack.kind!=="join"||e.reassignedFrom&&e.ack.kind!=="rejoin"||["shot","pass"].includes(e.ack.kind)&&(e.ack.lifeId===null||e.ack.roundId===null))&&nt(),e}function Fu(n){Vd(n);let e;try{e=Jo(n.preset)}catch{return nt()}return vt({...Hd,roomKind:He("skirmish"),serverNow:Tt,preset:He(e.version),planningMs:He(e.planningMs),slots:He(e.slots),minimumParticipants:He(e.minimumParticipants),resetAfter:He(e.resetAfter),idleAfter:He(e.idleAfter),retryHorizonMs:t=>{Tt(t),(t<1||t>Fd.controlRetryMs)&&nt()}})(n),n}const Ja={protocolVersion:Nd,rulesVersion:Ud},Hc=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function Py(n){return`${xp(n).identity}:skirmish-locator-v1:${encodeURIComponent(`${n.mode}:${n.serviceId}`)}`}const Ly={404:"not_found",403:"membership",410:"expired"};function ku(n){return n instanceof li&&n.code!==null&&Ly[n.status]===n.code?"gone":"unknown"}const Dy=new Set(["validation","membership","wrong_epoch","wrong_life","wrong_round","retry_retired","stale_revision","conflict","inactive","cooldown","wrong_actor","deadline","wrong_phase","not_found","room_capacity","socket_capacity","debt_capacity","control_capacity","membership_capacity","rate_capacity","protocol_version"]);class Ny{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};session;storage;locatorKey;factory;socket=null;poll=null;recovery=null;generation=0;socketGeneration=0;stopped=!1;observedServerTime=0;observedAt=0;hasClock=!1;rejected=null;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new $o(e,t,i),this.storage=i,this.locatorKey=Py(this.session.endpoint),this.factory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>this.hasClock?this.observedServerTime+Math.max(0,performance.now()-this.observedAt):0;get savedArena(){try{const e=JSON.parse(this.storage?.getItem(this.locatorKey)??"null");return Hc(e)&&Object.keys(e).sort().join(",")==="arenaId,guestId,memberId"&&e.guestId===this.session.guestId&&typeof e.arenaId=="string"&&typeof e.memberId=="string"?{arenaId:e.arenaId,memberId:e.memberId}:null}catch{return null}}get lockAgain(){return!!this.room&&this.room.membership.canAct&&this.rejected===this.opportunity(this.room)}opportunity(e){return JSON.stringify([e.arenaId,e.membership.memberId,e.membership.actorId,e.membership.lifeId,e.state.epoch,e.state.roundId])}scope(){return this.room?{arenaId:this.room.arenaId,memberId:this.room.membership.memberId}:{}}check(e,t){if(this.session.assertRevision(t),this.generation!==e)throw Error("The public arena context changed while this request was pending.")}emit(){this.onChange()}install(e,t,i=!1){const r=Np(e);if(!i&&(t.arenaId&&t.arenaId!==r.arenaId||t.memberId&&t.memberId!==r.membership.memberId))throw Error("The public response belongs to a different membership.");if(this.room&&r.arenaId===this.room.arenaId&&r.membership.memberId===this.room.membership.memberId){if(r.snapshotRevision<this.room.snapshotRevision)return;if(r.state.epoch<this.room.state.epoch||r.state.epoch===this.room.state.epoch&&r.state.revision<this.room.state.revision)throw Error("The public response would reverse the confirmed world.");if(r.snapshotRevision===this.room.snapshotRevision&&(r.state.epoch!==this.room.state.epoch||r.membership.actorId!==this.room.membership.actorId||r.membership.lifeId!==this.room.membership.lifeId))throw Error("A public identity transition needs a newer snapshot.");if(r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return}else if(this.room&&!i)throw Error("The public response changed membership without an explicit rejoin.");i&&this.disconnect(),this.room=r,this.observedServerTime=this.hasClock?Math.max(this.now(),r.serverNow):r.serverNow,this.observedAt=performance.now(),this.hasClock=!0;try{this.storage?.setItem(this.locatorKey,JSON.stringify({arenaId:r.arenaId,memberId:r.membership.memberId,guestId:this.session.guestId}))}catch{}this.emit()}applyReply(e,t){const i=Iy(e),r=i.ack,s=t.body;if(r.kind!==s.kind||r.actionId!==s.actionId)throw Error("The public acknowledgement does not match the pending action.");if(r.outcome==="existing-membership"&&(s.kind!=="join"||r.acceptedRevision!==i.current.envelope.state.revision||r.arenaId!==i.current.envelope.arenaId||r.memberId!==i.current.envelope.membership.memberId||r.epoch!==i.current.envelope.state.epoch))throw Error("Invalid current-membership acknowledgement.");if((s.kind==="shot"||s.kind==="pass")&&(r.arenaId!==t.scope.arenaId||r.memberId!==s.memberId||r.lifeId!==s.lifeId||r.roundId!==s.roundId||r.epoch!==s.epoch))throw Error("The public acknowledgement changed action scope.");const a=i.reassignedFrom,o=!!a;if(a&&(s.kind!=="rejoin"||a.arenaId!==t.scope.arenaId||a.memberId!==t.scope.memberId))throw Error("The public reassignment does not match this explicit rejoin.");if(!a&&s.kind!=="join"&&(r.arenaId!==t.scope.arenaId||r.memberId!==t.scope.memberId))throw Error("The public acknowledgement changed membership.");return this.install(i.current.envelope,s.kind==="join"&&!this.room?{}:t.scope,o),o}async join(){if(this.busy||this.pending)throw Error("Finish the pending public action first.");const e=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const t=await this.session.ensure();this.check(e,t.revision);const i=Fu(await ns(this.session,"/skirmish/rules",ni));this.check(e,t.revision),this.pending={path:"/skirmish/join",body:Object.freeze({...Ja,kind:"join",actionId:crypto.randomUUID(),issuedAt:i.serverNow}),revision:t.revision,scope:this.scope()}}finally{e===this.generation&&(this.busy=!1,this.emit())}return this.retry()}async control(e,t=!1){if(!this.room||this.pending||this.busy)throw Error("Reconnect or finish the pending public action first.");const i=this.session.credentials();if(!i)throw Error("The original guest identity is required.");const r=this.generation,s=this.scope();this.busy=!0,this.stopped=!1,this.emit();try{await this.refresh(s.arenaId,s.memberId),this.check(r,i.revision);const a=Fu(await ns(this.session,"/skirmish/rules",ni));this.check(r,i.revision);const o=this.room;if(!o||o.arenaId!==s.arenaId||o.membership.memberId!==s.memberId)throw Error("Public membership changed.");this.pending={path:`/skirmish/${encodeURIComponent(o.arenaId)}/commands`,body:Object.freeze({...Ja,kind:e,actionId:crypto.randomUUID(),issuedAt:a.serverNow,memberId:o.membership.memberId,epoch:o.state.epoch,expectedRevision:o.state.revision}),revision:i.revision,scope:this.scope()}}finally{r===this.generation&&(this.busy=!1,this.emit())}try{return await this.retry()}catch(a){if(t||r!==this.generation||!(a instanceof li)||a.code!=="stale_revision")throw a;const o=this.room,c=o?.membership.status;if(!o||o.arenaId!==s.arenaId||o.membership.memberId!==s.memberId||this.pending||!c||(e==="rejoin"?!["idle","left","aborted"].includes(c):["left","idle"].includes(c)))throw a;return this.control(e,!0)}}async command(e){const t=this.room,i=this.session.credentials();if(!t||!i||this.busy||this.pending||!t.membership.canAct||!t.membership.lifeId)throw Error("This public planning opportunity is unavailable.");return this.rejected=null,this.pending={path:`/skirmish/${encodeURIComponent(t.arenaId)}/commands`,body:Object.freeze({...Ja,...e,...e.kind==="shot"?{aim:Object.freeze({...e.aim})}:{},actionId:crypto.randomUUID(),memberId:t.membership.memberId,lifeId:t.membership.lifeId,epoch:t.state.epoch,roundId:t.state.roundId,expectedRevision:t.state.revision}),revision:i.revision,scope:this.scope()},this.retry()}async retry(){const e=this.pending;if(!e||this.busy)throw Error("No public action is ready to retry.");if(this.session.assertRevision(e.revision),e.unadmitted&&e.scope.arenaId){const i=this.room,r=e.body;if(!i||i.arenaId!==e.scope.arenaId||i.membership.memberId!==e.scope.memberId||r.epoch!==void 0&&i.state.epoch!==r.epoch||r.lifeId!==void 0&&(i.membership.lifeId!==r.lifeId||i.state.roundId!==r.roundId))throw this.pending=null,this.emit(),Error("The public opportunity changed. Choose a new action explicitly.")}let t=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const i=await this.session.request(e.path,e.body);if(this.check(t,e.revision),this.pending!==e)throw Error("The pending public action changed.");const r=this.applyReply(i,e);return this.check(t,e.revision),this.pending=null,r&&(t=++this.generation),e.body.kind==="leave"?this.disconnect():this.openSocket(),this.room}catch(i){if(t!==this.generation)throw i;if(this.session.revision!==e.revision)this.forgetArena();else if(i instanceof li&&i.transient)["admission_rate","command_rate"].includes(i.code??"")||(e.uncertain=!0),e.unadmitted=!e.uncertain;else if(Wi(i,ni))this.pending=null,this.rejected=null;else if(i instanceof li&&Dy.has(i.code??"")){if(this.pending=null,e.body.kind==="shot"&&this.room&&this.room.state.epoch===e.body.epoch&&this.room.state.roundId===e.body.roundId&&this.room.membership.lifeId===e.body.lifeId&&(this.rejected=this.opportunity(this.room)),this.room)try{await this.refresh()}catch(r){if(Wi(r,ni))throw r}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(r){if(Wi(r,ni))throw r}throw i}finally{t===this.generation&&(this.busy=!1,this.emit())}}async refresh(e=this.room?.arenaId??this.savedArena?.arenaId,t=this.room?.membership.memberId??this.savedArena?.memberId){if(!e||!t)return;const i=this.session.credentials();if(!i)throw Error("The original guest identity is required to reconnect.");const r=this.generation;try{const s=await ns(this.session,`/skirmish/${encodeURIComponent(e)}`,ni);this.check(r,i.revision),this.install(s,{arenaId:e,memberId:t})}catch(s){throw this.check(r,i.revision),Wi(s,ni)&&this.room?.arenaId===e&&this.room.membership.memberId===t&&(this.pending?.scope.arenaId===e&&this.pending.scope.memberId===t&&this.pending.revision===i.revision&&(this.pending=null),this.rejected=null,this.emit()),ku(s)==="gone"?(this.forgetArena(),Error("This public membership is no longer available. Join explicitly with the same guest.")):s}}async probeSavedArena(){const e=this.savedArena,t=this.session.credentials();if(!e||!t||this.room||this.pending||this.busy)return"unknown";const i=this.generation,r=()=>this.generation===i&&this.session.revision===t.revision&&!this.room&&!this.pending&&!this.busy&&this.savedArena?.arenaId===e.arenaId&&this.savedArena.memberId===e.memberId;let s;try{await ns(this.session,`/skirmish/${encodeURIComponent(e.arenaId)}`,ni),s="exists"}catch(a){s=ku(a)}return r()?(s==="gone"&&this.forgetArena(),s):"unknown"}async reconnect(){if(this.pending||this.busy)throw Error("Retry the pending public action first.");if(!this.room&&!this.savedArena)throw Error("No saved public membership is available.");this.stopped=!1;const e=this.generation;if(await this.refresh(),e!==this.generation)throw Error("The public context changed.");this.openSocket()}receive(e){if(!(!this.session.credentials()||!this.room||this.stopped||!Hc(e)||e.type!=="skirmish")){if(Object.keys(e).sort().join(",")!=="envelope,type")throw Error("Unsupported public event.");this.install(e.envelope,this.scope())}}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e||!this.factory)return;const t=this.generation,i=++this.socketGeneration,r=this.scope(),s=this.factory(`${this.session.serviceId.replace(/^http/,"ws")}/skirmish/events`);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===i&&this.generation===t&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={...Ja,type:"authenticate",token:e.token,arenaId:r.arenaId,memberId:r.memberId,lastRevision:this.room?.snapshotRevision??0};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));if(!Hc(c)||c.type!=="skirmish")throw Error("Unsupported public stream message.");if(this.receive(c),!a())return;this.connected=!0,this.emit()}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),(a()||this.generation===t&&this.session.revision===e.revision&&!this.stopped)&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.poll||this.stopped)return;const e=this.generation;this.poll=setTimeout(async()=>{if(this.poll=null,!(this.stopped||e!==this.generation)){try{await this.refresh()}catch(t){e===this.generation&&this.onError(t)}e===this.generation&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.recovery||this.stopped)return;const e=this.generation;this.recovery=setTimeout(async()=>{if(this.recovery=null,!(this.stopped||e!==this.generation))try{await this.refresh(),e===this.generation&&this.openSocket()}catch(t){e===this.generation&&(this.onError(t),this.scheduleRecovery())}},1500)}disconnect(){this.socketGeneration++;const e=this.socket;this.socket=null,e?.close(),this.connected=!1,this.poll&&clearTimeout(this.poll),this.recovery&&clearTimeout(this.recovery),this.poll=null,this.recovery=null}close(){this.stopped=!0,this.generation++,this.disconnect(),this.busy=!1,this.emit()}forgetArena(){this.close(),this.room=null,this.pending=null,this.rejected=null,this.hasClock=!1;try{this.storage?.removeItem(this.locatorKey)}catch{}this.emit()}}function Uy(n){const e=n.state,t=e.locks.find(a=>a.actorId===n.membership.actorId),i=n.membership.status,s=["idle","left"].includes(i)&&e.state==="suspended"?"Paused — no active players. Rejoin when ready to play.":i==="pending"?"Your place is reserved. You enter at the next planning window.":i==="idle"?"Spectating. Inactive after three missed windows; Rejoin when ready to play.":i==="left"?"Spectating. You left public play; Rejoin when ready to play.":i==="aborted"?"This arena stopped safely. Rejoin to start a fresh arena.":i==="respawn"?"Waiting for a clear place to respawn.":i==="suspended"?"The empty arena is suspended. Reconnect to return.":e.phase!=="planning"?"Arrows resolve in the published priority order.":n.membership.canAct?"Choose an arrow or pass. Locks are final.":t?.locked?t.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":"You will respawn at the next planning window.";return{phase:i==="active"?e.phase.toUpperCase():i.toUpperCase(),turn:s,warning:e.resetIn!==null?`Fresh terrain in ${e.resetIn} completed round${e.resetIn===1?"":"s"}.`:"",priority:e.priority,locks:e.locks.map(a=>({actorId:a.actorId,text:a.locked?"Locked":"Planning"})),canRejoin:["idle","left","aborted"].includes(i),canLeave:!["left","idle"].includes(i)}}function Wd(n){return n.state.members.map((e,t)=>{const i=n.state.actors.find(s=>s.id===e.actorId),r=n.connections.find(s=>s.actorId===e.actorId)?.label??`Archer ${t+1}`;return{actorId:e.actorId,kind:e.kind,label:r,health:i?.health??0,text:`${r}${e.actorId===n.membership.actorId?" · you":""} · ${e.spawnPending||!i?"waiting to respawn":i.eliminated?"respawning next round":`${i.health} health`}${n.state.locks.find(s=>s.actorId===e.actorId)?.locked?" · locked":""}`}})}function Fy(n=Gd){const e=Jo(n),t=e.minimumParticipants===4?"four":String(e.minimumParticipants);return`Shared ${e.planningMs/1e3}-second planning · at least ${t} archers · respawn next round · fresh terrain every ${e.resetAfter} completed rounds.`}const ky=["s0","s1","s2","s3","s4","s5","s6","s7"],Oy=Object.freeze({s0:{slotId:"s0",name:"amber",hex:"#e69f00",symbol:"A"},s1:{slotId:"s1",name:"sky",hex:"#56b4e9",symbol:"B"},s2:{slotId:"s2",name:"emerald",hex:"#009e73",symbol:"C"},s3:{slotId:"s3",name:"lemon",hex:"#f0e442",symbol:"D"},s4:{slotId:"s4",name:"cobalt",hex:"#0072b2",symbol:"E"},s5:{slotId:"s5",name:"vermilion",hex:"#d55e00",symbol:"F"},s6:{slotId:"s6",name:"rose",hex:"#cc79a7",symbol:"G"},s7:{slotId:"s7",name:"violet",hex:"#8b5fd0",symbol:"H"}});function By(n){return typeof n=="string"&&ky.includes(n)}const zy=Object.freeze({slotId:"s0",name:"grey",hex:"#8a8f87",symbol:"?"});function ho(n){return By(n)?Oy[n]:zy}function Gy(n){const e=parseInt(n.slice(1),16),t=r=>{const s=r/255;return s<=.03928?s/12.92:((s+.055)/1.055)**2.4};return .2126*t(e>>16&255)+.7152*t(e>>8&255)+.0722*t(e&255)>.3?"#141c18":"#ffffff"}function Up(n,e,t){const i=ho(e.slotId);return{actorId:e.actorId,slotId:e.slotId,color:i.hex,ink:Gy(i.hex),symbol:i.symbol,colorName:i.name,label:t,own:e.actorId===n.membership.actorId,npc:e.kind==="npc"}}const Fp=n=>`${n.label}${n.own?", you":""}${n.npc?", NPC":""}, ${n.colorName} ${n.symbol}`;function Vy(n){const e=n.state,t=Wd(n),i=e.phase==="resolving"&&e.state==="active"?e.action?.actorId??null:null,r=[];for(const s of e.priority){const a=e.members.findIndex(u=>u.actorId===s);if(a<0)continue;const o=Up(n,e.members[a],t[a].label),c=r.length+1,l=i===s;r.push({...o,position:c,current:l,ariaLabel:`Priority ${c}: ${Fp(o)}${l?", resolving now":""}`})}return r}function Hy(n){const e=Wd(n),t=n.state.slotOrder,i=r=>{const s=t.indexOf(r);return s<0?99:s};return n.state.members.map((r,s)=>{const a=n.state.actors.find(h=>h.id===r.actorId),o=Up(n,r,e[s].label),c=r.spawnPending||!a?"pending":a.eliminated?"respawning":"alive",l=c==="pending"?"Waiting":c==="respawning"?"Respawning":`${a.health}`,u=r.idle||r.leaving||!r.present;return{row:{...o,health:c==="alive"?a.health:0,status:c,valueText:l,inactive:u,locked:n.state.locks.find(h=>h.actorId===r.actorId)?.locked??!1,ariaLabel:`${Fp(o)}: ${c==="alive"?`${l} health`:l.toLowerCase()}${u?", inactive":""}`},rank:i(r.slotId)}}).sort((r,s)=>r.rank-s.rank).slice(0,8).map(r=>r.row)}const Ou={kind:"none",text:"",stateText:"",remainingMs:null,expired:!1,label:""};function kp(n,e){if(!n||!Number.isFinite(e))return Ou;if(n.state==="suspended")return{kind:"paused",text:"Paused",stateText:"No active players",remainingMs:null,expired:!1,label:"Arena paused, no active players"};if(n.state==="aborted")return{kind:"stopped",text:"Stopped",stateText:"Arena stopped",remainingMs:null,expired:!1,label:"Arena stopped"};if(n.state!=="active")return Ou;if(n.phase!=="planning"||n.deadlineAt===null)return{kind:"resolving",text:"Resolving",stateText:"Arrows in flight",remainingMs:null,expired:!1,label:"Arrows are resolving"};const t=Math.max(0,n.deadlineAt-e),i=Math.ceil(t/1e3),r=t===0;return{kind:"planning",text:`${i}s`,stateText:r?"Locking":"Planning",remainingMs:t,expired:r,label:r?"Planning time is up, waiting for the server":`${i} second${i===1?"":"s"} of planning remaining`}}class Wy{seen=null;observe(e,t){const i=kp(e,t);if(i.kind!=="planning"||i.remainingMs===null||this.seen===`${e.id}:${e.epoch}:${e.roundId}`)return null;this.seen=`${e.id}:${e.epoch}:${e.roundId}`;const r=e.planningStartedAt!==null&&e.deadlineAt!==null?e.deadlineAt-e.planningStartedAt:null;return{roundId:e.roundId,nativeMs:r,firstRemainingMs:i.remainingMs,marginMs:r===null?null:r-i.remainingMs}}}const Xd=Object.freeze({mode:"inline",controlsVisible:!1}),er=(n,e={})=>({state:n,cancelHeld:!0,requestNative:!1,exitNative:!1,...e}),Pr=n=>({state:n,cancelHeld:!1,requestNative:!1,exitNative:!1}),_r=n=>n.mode!=="inline";function Xy(n,e){return n.mode!=="inline"?Pr(n):e?er({mode:"requesting",controlsVisible:!1},{requestNative:!0}):er({mode:"fallback",controlsVisible:!1})}function $y(n){return n.mode==="requesting"?er({...n,mode:"native"}):Pr(n)}function Bu(n){return n.mode==="requesting"?er({...n,mode:"fallback"}):Pr(n)}function Yy(n){return n.mode==="native"||n.mode==="requesting"?er(Xd):Pr(n)}function qy(n){return n.mode==="inline"?Pr(n):er(Xd,{exitNative:n.mode==="native"||n.mode==="requesting"})}function jy(n,e){return _r(n)&&n.controlsVisible!==e?er({...n,controlsVisible:e}):Pr(n)}function Ky(n){return _r(n)?er(n):Pr(n)}class Jy{state=Xd;available=!1;d;constructor(e){this.d=e,e.expand.addEventListener("click",()=>this.expand()),e.exit.addEventListener("click",()=>this.exit()),e.controlsToggle.addEventListener("click",()=>this.apply(jy(this.state,!this.state.controlsVisible)));for(const t of["fullscreenchange","webkitfullscreenchange"])e.doc.addEventListener(t,()=>this.fullscreenChanged());e.doc.addEventListener("keydown",t=>{t.code==="Escape"&&this.state.mode==="fallback"&&!t.defaultPrevented&&!this.d.isDrawing()&&this.exit()}),e.win.addEventListener("pagehide",()=>this.exit());for(const t of["resize","orientationchange"])e.win.addEventListener(t,()=>this.apply(Ky(this.state)));this.render()}nativeSupported(){const e=this.d;return!!(e.doc.fullscreenEnabled??e.doc.webkitFullscreenEnabled)&&!!(e.shell.requestFullscreen??e.shell.webkitRequestFullscreen)}nativeElement(){return this.d.doc.fullscreenElement??this.d.doc.webkitFullscreenElement??null}setAvailable(e){this.available=e,e||this.exit(),this.render()}expand(){this.available&&this.d.canExpand()&&this.apply(Xy(this.state,this.nativeSupported()))}exit(){this.apply(qy(this.state))}fullscreenChanged(){if(this.nativeElement()===this.d.shell&&this.state.mode==="inline"){this.leaveNative();return}this.apply(this.nativeElement()===this.d.shell?$y(this.state):Yy(this.state))}apply(e){const t=this.state;e.cancelHeld&&this.d.cancelInput(),this.state=e.state,e.requestNative&&this.requestNative(),e.exitNative&&this.nativeElement()===this.d.shell&&this.leaveNative(),this.render(),t.mode==="inline"&&_r(this.state)?this.d.exit.focus():_r(t)&&!_r(this.state)&&(this.d.expand.hidden?this.d.focusFallback?.():this.d.expand.focus())}leaveNative(){try{Promise.resolve((this.d.doc.exitFullscreen??this.d.doc.webkitExitFullscreen)?.call(this.d.doc)).catch(()=>{})}catch{}}requestNative(){const e=this.d.shell;try{const t=(e.requestFullscreen??e.webkitRequestFullscreen).call(e);Promise.resolve(t).catch(()=>this.apply(Bu(this.state)))}catch{this.apply(Bu(this.state))}}render(){const e=this.state,t=_r(e),i=this.d;i.shell.classList.toggle("is-expanded",t),i.shell.classList.toggle("controls-open",t&&e.controlsVisible),i.doc.body.classList.toggle("arena-expanded",t),i.setModal?.(t),i.exit.hidden=!t,i.controlsToggle.hidden=!t,i.expand.hidden=t||!this.available,i.controlsToggle.setAttribute("aria-expanded",String(e.controlsVisible)),i.controlsToggle.textContent=e.controlsVisible?"Hide controls":"Show controls",i.exit.textContent=e.mode==="fallback"?"Exit expanded view":"Exit full screen",i.onChange?.(e)}}function zu(n,e,t,i,r){const s=Math.max(0,i.x0),a=Math.min(e,i.x1),o=Math.max(0,i.y0),c=Math.min(t,i.y1);if(!(a<=s))for(let l=o;l<c;l++)n.fill(r,l*e+s,l*e+a)}function Zy(n,e,t){const i=new Array(n*e).fill(0);for(const r of t)r.op==="add"&&zu(i,n,e,r,1);for(const r of t)r.op==="clear"&&zu(i,n,e,r,0);return i}function Qy(n,e){const t=r=>{const s=(r-n.minX)/n.cell;if(!Number.isInteger(s))throw new RangeError("Template bound is not cell-aligned.");return s},i=r=>{const s=(r-n.minY)/n.cell;if(!Number.isInteger(s))throw new RangeError("Template bound is not cell-aligned.");return s};return{x0:t(e.x0),x1:t(e.x1),y0:i(e.y0),y1:i(e.y1)}}function eM(n){if(n.mode!=="fixed"||!n.fixed)throw new RangeError("A fixed template is required.");const e=In(n.profile),{cell:t,width:i,height:r,minX:s,minY:a,bedrockY:o}=e,c=n.fixed.parts.map(h=>({op:h.op,...Qy(e,h)})),l=Zy(i,r,c),u=n.fixed.pads.map(([h,d])=>({x:h,y:d,z:0}));return{version:e.version,revision:0,cell:t,minX:s,minY:a,width:i,height:r,bedrockY:o,cells:l,spawnPads:u}}const Op={kind:"terrain-template",id:"arena-2",version:1,weight:0,tags:["authored","fallback"],profile:"arena-2",mode:"fixed",fixed:{parts:[{op:"add",x0:-39,x1:-32,y0:-8,y1:0},{op:"add",x0:-28,x1:-21,y0:4.5,y1:6},{op:"add",x0:-18.5,x1:-12,y0:10.5,y1:12},{op:"add",x0:-8,x1:-1,y0:-8,y1:3},{op:"add",x0:2,x1:8.5,y0:7.5,y1:9},{op:"add",x0:12,x1:19,y0:-8,y1:0},{op:"add",x0:22,x1:28.5,y0:13.5,y1:15},{op:"add",x0:32,x1:39,y0:4.5,y1:6},{op:"add",x0:-24,x1:-20,y0:16,y1:17},{op:"add",x0:-5.5,x1:-2,y0:16,y1:17},{op:"add",x0:7.5,x1:11,y0:20,y1:21},{op:"add",x0:27.5,x1:31.5,y0:24.5,y1:25.5},{op:"add",x0:-28,x1:-27.25,y0:6,y1:9.5},{op:"add",x0:-2,x1:-1,y0:3,y1:6.5},{op:"add",x0:17.5,x1:18.5,y0:0,y1:3.5},{op:"add",x0:32,x1:32.75,y0:6,y1:9.25}],pads:[[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]]},voids:{count:{min:2,max:4},width:{min:2,max:40}},lanes:{padHeadroom:4.5,launchReach:2,skyBandMinY:22,skyMaxFill:.05}};In("arena-1").bounds;function Wc(n="arena-1"){if(n==="arena-2")return eM(Op);const e=In(n),{cell:t,width:i,height:r,minX:s,minY:a,bedrockY:o}=e,c=new Array(e.cellCount).fill(0);for(let u=0;u<r;u++)for(let h=0;h<i;h++){const d=s+(h+.5)*t,p=a+(u+.5)*t;(p<0||(d<-25||d>25)&&p>=5&&p<6||Math.abs(d)>10&&Math.abs(d)<13&&p>=11&&p<12)&&(c[u*i+h]=1)}const l=[-28,-20,-16,-8,8,16,20,28].map(u=>({x:u,y:0,z:0}));return{version:e.version,revision:0,cell:t,minX:s,minY:a,width:i,height:r,bedrockY:o,cells:c,spawnPads:l}}function Bp(n){if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid arena snapshot.");const e=In(n.version);if(n.cell!==e.cell||n.width!==e.width||n.height!==e.height||n.minX!==e.minX||n.minY!==e.minY||n.bedrockY!==e.bedrockY||!Number.isSafeInteger(n.revision)||n.revision<0||!Array.isArray(n.cells)||n.cells.length!==e.cellCount||!Array.isArray(n.spawnPads)||n.spawnPads.length!==8)throw new RangeError("Invalid arena snapshot.");return e}function tM(n){return Bp(n).bounds}function zp(n){if(Bp(n),zd(n),!n.cells.every(e=>e===0||e===1))throw new RangeError("Invalid occupancy mask.")}function nM(n,e){const t=Math.floor(e/n.width),i=e%n.width;return{minX:n.minX+i*n.cell,maxX:n.minX+(i+1)*n.cell,minY:n.minY+t*n.cell,maxY:n.minY+(t+1)*n.cell}}const Gu=1e3,iM=6,hd=1e-9,Vu={terrain:0,head:1,body:2,bounds:3,timeout:4};function rM(n,e){if(n.time<e.time-hd)return!0;if(Math.abs(n.time-e.time)>hd)return!1;const t=Vu[n.kind]-Vu[e.kind];if(t!==0)return t<0;const i=n.actorId??"",r=e.actorId??"";return i!==r?i<r:(n.cell??0)<(e.cell??0)}function sM(n,e,t){const i=Jt(n,t),r=Mo(n,t),s=1e-6,a=i.x>=e.minX-s&&i.x<=e.maxX+s,o=i.y>=e.minY-s&&i.y<=e.maxY+s,c=[{d:Math.abs(i.y-e.maxY),x:0,y:1,incoming:-r.y,on:a},{d:Math.abs(i.y-e.minY),x:0,y:-1,incoming:r.y,on:a},{d:Math.abs(i.x-e.minX),x:-1,y:0,incoming:r.x,on:o},{d:Math.abs(i.x-e.maxX),x:1,y:0,incoming:-r.x,on:o}].filter(p=>p.on&&p.d<=s);if(!c.length)return null;const l=Math.min(...c.map(p=>p.d)),u=c.filter(p=>p.d<=l+1e-9),h=u.filter(p=>p.incoming>0),d=h.length?h:u;return d.sort((p,g)=>p.d-g.d||g.y-p.y),{x:d[0].x,y:d[0].y,z:0}}function aM(n,e,t){if(n.wind){const o=sM(n,e,t);if(o)return o}const i=Jt(n,t),r=Mo(n,t),s=[{d:Math.abs(i.y-e.maxY),x:0,y:1,incoming:-r.y},{d:Math.abs(i.y-e.minY),x:0,y:-1,incoming:r.y},{d:Math.abs(i.x-e.minX),x:-1,y:0,incoming:r.x},{d:Math.abs(i.x-e.maxX),x:1,y:0,incoming:-r.x}].filter(o=>o.incoming>0);s.sort((o,c)=>o.d-c.d||c.y-o.y);const a=s[0];return a?{x:a.x,y:a.y,z:0}:{x:0,y:0,z:0}}function oM(n,e,t,i){if(zp(n),Od(e),Ko(i.origin.x,i.origin.y,i.velocity.x,i.velocity.y),i.wind!==void 0&&!(Math.abs(i.wind)<=iM))throw new RangeError("Shot outside bounded simulation.");if(Math.abs(i.velocity.x)>Gu||Math.abs(i.velocity.y)>Gu||Math.abs(i.origin.x)>1e3||Math.abs(i.origin.y)>1e3)throw new RangeError("Shot outside bounded simulation.");const r=m=>({...Jt(i,m),z:0});let s={kind:"timeout",time:en.maxFlight,point:r(en.maxFlight),normal:{x:0,y:0,z:0}};const a=(m,f,x,M,S={})=>{const R=hp(i,f,x,Math.min(M,s.time));if(R!==null){const T={kind:m,time:R,point:r(R),normal:aM(i,f,R),...S};rM(T,s)&&(s=T)}},o=tM(n);if(i.origin.x<o.minX||i.origin.x>o.maxX||i.origin.y<o.minY||i.origin.y>o.maxY)return{kind:"bounds",time:0,point:r(0),normal:{x:0,y:0,z:0}};for(const m of[{minX:o.minX,maxX:o.minX,minY:o.minY,maxY:o.maxY},{minX:o.maxX,maxX:o.maxX,minY:o.minY,maxY:o.maxY},{minX:o.minX,maxX:o.maxX,minY:o.minY,maxY:o.minY},{minX:o.minX,maxX:o.maxX,minY:o.maxY,maxY:o.maxY}])a("bounds",m,0,s.time);for(const m of e)if(m.id!==t&&!m.eliminated&&m.health>0)for(const f of hy(m))a(f.kind,f.bounds,0,s.time,{actorId:m.id});const c=Jt(i,s.time);let l=Math.min(i.origin.x,c.x),u=Math.max(i.origin.x,c.x);if(i.wind){const m=-i.velocity.x/i.wind;if(m>0&&m<s.time){const f=Jt(i,m).x;l=Math.min(l,f),u=Math.max(u,f)}}const h=i.wind?1:0,d=Math.max(0,Math.floor((l-n.minX)/n.cell)-h),p=Math.min(n.width-1,Math.floor((u-n.minX)/n.cell)+h),g=Array.from({length:Math.max(0,p-d+1)},(m,f)=>i.velocity.x<0?p-f:d+f),b=new Map;if(i.wind){const m=s.time,f=-i.velocity.x/i.wind;for(const x of g){const M=n.minX+x*n.cell,S=M+n.cell,R=[0,m];f>0&&f<m&&R.push(f);for(const A of[M,S])R.push(...dp(i,A));const T=R.filter(A=>A>=0&&A<=m&&Jt(i,A).x>=M-1e-7&&Jt(i,A).x<=S+1e-7);T.length&&b.set(x,[Math.min(...T),Math.max(...T)])}g.length=0,g.push(...[...b.keys()].sort((x,M)=>b.get(x)[0]-b.get(M)[0]||x-M))}for(const m of g){const f=n.minX+m*n.cell,x=f+n.cell;let M=0,S=s.time;if(i.wind)[M,S]=b.get(m),S=Math.min(S,s.time);else if(i.velocity.x!==0){const w=(f-i.origin.x)/i.velocity.x,z=(x-i.origin.x)/i.velocity.x;M=Math.max(0,Math.min(w,z)),S=Math.min(s.time,Math.max(w,z))}if(M>S+hd)continue;const R=[Jt(i,M).y,Jt(i,S).y],T=i.velocity.y/ms(i);T>M&&T<S&&R.push(Jt(i,T).y);const A=Math.max(0,Math.floor((Math.min(...R)-n.minY)/n.cell)-1),v=Math.min(n.height-1,Math.floor((Math.max(...R)-n.minY)/n.cell)+1);for(let w=A;w<=v;w++){const z=w*n.width+m;n.cells[z]&&a("terrain",nM(n,z),M,S,{cell:z})}}return s}function Gp(n,e){if(!n||typeof n!="object"||Array.isArray(n)||"cells"in n)throw new RangeError("Invalid compact terrain mask.");const t=zd(n,e);if(typeof n.maskHex!="string"||n.maskHex.length!==t.maskHexLength||!/^[0-9a-f]+$/.test(n.maskHex))throw new RangeError("Invalid compact terrain mask.");const{maskHex:i,...r}=n,s=new Array(t.cellCount);for(let o=0;o<i.length;o++){const c=Number.parseInt(i[o],16);for(let l=0;l<4;l++)s[o*4+l]=c>>l&1}const a={...r,cells:s};return zp(a),a}const Hu={protocolVersion:Xo,rulesVersion:Cs},Xc={protocolVersion:ri,rulesVersion:Cs},Nn=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function cM(n){if(!Nn(n)||![Xo,ri].includes(n.protocolVersion)||n.rulesVersion!==Cs||typeof n.roomId!="string"||!n.roomId||typeof n.code!="string"||!Number.isFinite(n.serverNow)||!Number.isSafeInteger(n.snapshotRevision)||Number(n.snapshotRevision)<0||!Nn(n.membership)||typeof n.membership.actorId!="string"||typeof n.membership.lifeId!="string"||typeof n.membership.canStart!="boolean"||!Array.isArray(n.connections)||!Nn(n.state)||!Number.isSafeInteger(n.state.revision)||Number(n.state.revision)<0||n.state.id!==n.roomId||!Array.isArray(n.state.actors)||!Array.isArray(n.state.seats)||!Nn(n.state.seat)||!["waiting","active","finished","aborted"].includes(String(n.state.state))||!["planning","resolving","settling"].includes(String(n.state.phase))||!(n.currentTurnId===null||typeof n.currentTurnId=="string"))throw new Error("The combat service returned an unsupported room.");if(n.protocolVersion===ri?n.roomKind!=="volley"||n.state.version!=="volley-1"||n.currentTurnId!==null||!Number.isSafeInteger(n.state.epoch)||typeof n.state.roundId!="string"||!Array.isArray(n.state.locks)||!Array.isArray(n.state.priority):n.state.version!=="duel-1"||"roomKind"in n)throw new Error("The combat service returned an unsupported room kind or version.");const e=n;if("tuning"in e.state)try{qo(e.state.tuning)}catch{throw new Error("The combat service returned an unsupported tuning profile.")}if("wind"in e.state){const t=e.state.wind;if(typeof t!="number"||!Number.isFinite(t)||t===0||!(Math.abs(t)<=Qi(jo(e.state))))throw new Error("The combat service returned an unsupported wind.")}if("successor"in e&&e.successor!==void 0){const t=e.successor;if(!Nn(t)||typeof t.roomId!="string"||!t.roomId||typeof t.code!="string"||!/^[A-Z2-9]{6}$/.test(t.code)||typeof t.joined!="boolean")throw new Error("The combat service returned an unsupported rematch lobby.")}return Gp(e.state.terrain,"arena-1"),e}class lM{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};rejectedLock=null;get lockAgain(){const e=this.room,t=e?.state,i=this.rejectedLock;return!!(i&&e&&t&&e.protocolVersion===ri&&i.roomId===e.roomId&&i.lifeId===e.membership.lifeId&&i.epoch===e.state.epoch&&i.roundId===e.state.roundId&&t.seat.canAct)}session;socketFactory;socket=null;reconnectTimer=null;pollTimer=null;stopped=!1;socketGeneration=0;roomGeneration=0;clockOffset=0;hasClock=!1;storage;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new $o(e,t,i),this.storage=i,this.socketFactory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>Date.now()+this.clockOffset;get savedRoom(){try{const e=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");return Nn(e)&&e.guestId===this.session.guestId&&typeof e.roomId=="string"?e.roomId:null}catch{return null}}emit(){this.onChange()}context(e=this.room?.roomId){const t=this.room?.roomId===e?this.room?.membership:void 0;return{generation:this.roomGeneration,roomId:e,...this.room&&this.room.roomId===e?{protocolVersion:this.room.protocolVersion}:{},...t?{membership:{actorId:t.actorId,lifeId:t.lifeId}}:{}}}assertContext(e){if(e.generation!==this.roomGeneration||e.roomId&&this.room&&e.roomId!==this.room.roomId)throw new Error("The combat room context changed while this request was pending.")}validateResponse(e,t,i){this.session.assertRevision(t),this.assertContext(i);const r=cM(e);if(i.protocolVersion&&r.protocolVersion!==i.protocolVersion)throw new Error("The combat response changed the confirmed room kind or protocol version.");if(i.roomId&&r.roomId!==i.roomId)throw new Error("The combat response belongs to a different room.");if(i.membership&&(r.membership.actorId!==i.membership.actorId||r.membership.lifeId!==i.membership.lifeId))throw new Error("The combat response belongs to a different membership identity.");return r}apply(e,t,i){const r=this.validateResponse(e,t,i);if(this.room&&this.room.roomId===r.roomId){if(r.snapshotRevision<this.room.snapshotRevision||r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return;if(r.state.revision<this.room.state.revision)throw new Error("The combat response would reverse the confirmed room state.")}this.room=r;const s=r.serverNow-Date.now();this.clockOffset=this.hasClock?Math.max(this.clockOffset,s):s,this.hasClock=!0;try{this.storage?.setItem(this.session.storageKeys.room,JSON.stringify({roomId:r.roomId,guestId:this.session.guestId}))}catch{}this.emit()}async create(e){return this.begin("/rooms",e?{...Xc,...e}:Hu,e?ri:Xo)}async join(e){return this.begin("/rooms/join",{...Xc,code:e.trim().toUpperCase()})}async begin(e,t,i){if(this.busy||this.pending||this.room)throw new Error("Leave the current room or finish the pending action first.");this.roomGeneration++;const r={...this.context(),...i?{protocolVersion:i}:{}};this.stopped=!1,this.busy=!0,this.emit();try{const s=await this.session.ensure();this.session.assertRevision(s.revision),this.assertContext(r),this.pending={path:e,body:{actionId:crypto.randomUUID(),...t},revision:s.revision,context:r}}finally{r.generation===this.roomGeneration&&(this.busy=!1)}return this.retry()}async command(e){if(this.busy||this.pending||!this.room)throw new Error("Finish the pending action first.");const t=this.room,i=this.session.credentials();if(!i)throw new Error("Reconnect with the existing guest first.");const r=t.protocolVersion===ri;if(r&&e.kind==="cancel")throw new Error("Volley locks are immutable and cannot be cancelled.");const s=e.kind==="shot"||e.kind==="pass";if(r&&s&&(!t.state.seat.canAct||t.state.state!=="active"||t.state.phase!=="planning"))throw new Error("This planning opportunity is no longer available.");const a=!r&&["shot","pass","cancel"].includes(e.kind)?{turnId:t.currentTurnId}:{};if("turnId"in a&&!a.turnId)throw new Error("This turn is no longer available.");const o=r?{...Xc,epoch:t.state.epoch,...s?{roundId:t.state.roundId}:{}}:{...Hu,...a};this.rejectedLock=null;const c={actionId:crypto.randomUUID(),expectedRevision:t.state.revision,lifeId:t.membership.lifeId,...o,...e};return this.pending={path:`/rooms/${encodeURIComponent(t.roomId)}/commands`,body:c,revision:i.revision,context:this.context()},this.retry()}async followRematch(){const e=this.room?.successor;if(!e||this.busy||this.pending)throw new Error("No rematch lobby is available yet.");const t=this.room.roomId;this.forgetRoom();try{if(e.joined)return await this.reconnect(e.roomId);try{return await this.join(e.code)}catch(i){if(Nn(i)&&i.code==="already_joined")return await this.reconnect(e.roomId);throw i}}catch(i){try{this.pending?await this.refresh(t):await this.reconnect(t)}catch{}throw i}}async retry(){if(!this.pending||this.busy)throw new Error("No pending action is ready to retry.");const e=this.pending;if(this.session.assertRevision(e.revision),this.assertContext(e.context),e.unadmitted&&e.context.roomId){const t=this.room,i=e.body;if(!t||t.roomId!==e.context.roomId||t.membership.lifeId!==i.lifeId||i.protocolVersion===ri&&(t.protocolVersion!==ri||t.state.epoch!==i.epoch||"roundId"in i&&t.state.roundId!==i.roundId)||"turnId"in i&&t.currentTurnId!==i.turnId)throw this.pending=null,this.emit(),new Error("The room opportunity changed. Choose an action for the current room.")}this.busy=!0,this.emit();try{const t=await this.session.request(e.path,e.body);if(this.session.assertRevision(e.revision),this.assertContext(e.context),this.pending!==e)throw new Error("The pending combat action changed.");return e.body.kind==="leave"?(this.validateResponse(t,e.revision,e.context),this.pending=null,this.clearRoom()):(this.apply(t,e.revision,e.context),this.pending=null,this.openSocket()),this.room}catch(t){if(e.context.generation!==this.roomGeneration)throw t;if(this.session.revision!==e.revision)this.pending=null,this.clearRoom();else if(t instanceof li&&t.transient)t.code!=="admission_rate"&&t.code!=="command_rate"&&(e.uncertain=!0),e.unadmitted=!e.uncertain;else{if(Wi(t,ur))throw this.pending=null,this.rejectedLock=null,ld(ur);if(Nn(t)&&typeof t.status=="number"&&t.status>=400&&t.status<500){if(this.pending=null,t.status===409&&e.body.kind==="shot"&&e.body.protocolVersion===ri&&e.context.roomId&&(this.rejectedLock={roomId:e.context.roomId,lifeId:String(e.body.lifeId),epoch:e.body.epoch,roundId:e.body.roundId}),this.room)try{await this.refresh()}catch(i){if(Wi(i,ur))throw i}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(i){if(Wi(i,ur))throw i}}throw t}finally{e.context.generation===this.roomGeneration&&(this.busy=!1,this.emit())}}async reconnect(e=this.room?.roomId??this.savedRoom){if(this.pending)throw new Error("Retry the pending action first.");if(!e)throw new Error("No saved room is available.");if(!this.session.credentials())throw new Error("The original guest identity is required to reconnect.");const t=this.context(e);this.stopped=!1,await this.refresh(e),this.assertContext(t),this.openSocket()}async refresh(e=this.room?.roomId){if(!e)return;const t=this.session.credentials();if(!t)throw new Error("The original guest identity is required.");const i=this.context(e);try{const r=await ns(this.session,`/rooms/${encodeURIComponent(e)}`,ur);this.apply(r,t.revision,i)}catch(r){if(this.session.assertRevision(t.revision),this.assertContext(i),Wi(r,ur)&&(this.pending?.context.roomId===e&&this.pending.revision===t.revision&&(this.pending=null),this.room?.roomId===e&&(this.rejectedLock=null),this.emit()),Nn(r)&&typeof r.status=="number"&&[403,404,410].includes(r.status)){this.pending=null,this.clearRoom(e);const s=Object.assign(new Error("This room is no longer available. Create or join another room with the same guest."),{status:r.status});throw this.onError(s),s}throw r}}receive(e){const t=this.session.credentials();!t||!this.room||this.stopped||!Nn(e)||e.type!=="room"||e.roomId===this.room.roomId&&this.apply(e,t.revision,this.context())}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e)return;if(this.connected=!1,!this.socketFactory){this.connected=!0,this.emit();return}const t=++this.socketGeneration,i=this.context(),r=this.room.roomId,s=this.socketFactory(this.session.endpoint.combatSocket);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===t&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={type:"authenticate",token:e.token,roomId:r,lastRevision:this.room?.snapshotRevision??0,protocolVersion:this.room.protocolVersion,rulesVersion:Cs};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));Nn(c)&&c.type==="room"&&(this.apply(c,e.revision,i),this.connected=!0,this.emit())}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),!this.stopped&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.pollTimer||this.stopped)return;const e=this.context();this.pollTimer=setTimeout(async()=>{if(this.pollTimer=null,!(!this.room||this.stopped||e.generation!==this.roomGeneration)){try{await this.refresh()}catch(t){e.generation===this.roomGeneration&&this.onError(t)}e.generation===this.roomGeneration&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.reconnectTimer||this.stopped)return;const e=this.context();this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,!(this.stopped||e.generation!==this.roomGeneration))try{await this.refresh(),this.assertContext(e),this.openSocket()}catch(t){e.generation===this.roomGeneration&&(this.onError(t),this.scheduleRecovery())}},1500)}clearRoom(e=this.room?.roomId??this.savedRoom??void 0){this.close(),this.room=null,this.rejectedLock=null,this.hasClock=!1;try{const t=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");Nn(t)&&t.roomId===e&&(!this.session.guestId||t.guestId===this.session.guestId)&&this.storage?.removeItem(this.session.storageKeys.room)}catch{}this.emit()}forgetRoom(){this.pending=null,this.clearRoom()}close(){this.stopped=!0,this.socketGeneration++,this.roomGeneration++,this.busy=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.pollTimer&&clearTimeout(this.pollTimer),this.reconnectTimer=null,this.pollTimer=null;const e=this.socket;this.socket=null,e?.close(),this.connected=!1}}function dM(n,e){return n.kills===e.kills&&n.damageDealt===e.damageDealt&&la(n)===la(e)&&n.shots===e.shots}function hM(n,e){return e.kills-n.kills||e.damageDealt-n.damageDealt||la(e)-la(n)||n.shots-e.shots||(n.actorId<e.actorId?-1:n.actorId>e.actorId?1:0)}function la(n){return n.shots?n.hits/n.shots:0}const Wu=["shots","hits","headshots","damageDealt","damageTaken","kills","longestHit","terrainDestroyed"];function uM(n){const e=n?.rows;if(!Array.isArray(e)||e.length>64)throw new Error("The service returned an unsupported session board.");return e.map(t=>{const i=t;if(!i||typeof i.actorId!="string"||Wu.some(r=>typeof i[r]!="number"||!Number.isFinite(i[r])||i[r]<0))throw new Error("The service returned an unsupported session board.");return Object.fromEntries(["actorId",...Wu].map(r=>[r,i[r]]))})}function Vp(n,e,t,i){const r=new Map(n.map(c=>[c.actorId,c])),s=e.map(c=>({label:c.label,stat:r.get(c.actorId)??{actorId:c.actorId,shots:0,hits:0,headshots:0,damageDealt:0,damageTaken:0,kills:0,longestHit:0,terrainDestroyed:0}}));s.sort((c,l)=>hM(c.stat,l.stat));const a=s.some(c=>c.stat.shots>0),o=s.map((c,l)=>({actorId:c.stat.actorId,label:c.label,shots:c.stat.shots,accuracy:c.stat.shots?`${Math.round(la(c.stat)*100)}%`:"–",damage:Math.round(c.stat.damageDealt),kills:c.stat.kills,own:c.stat.actorId===t,leader:i&&a&&l===0&&!(s[1]&&dM(c.stat,s[1].stat))}));return{title:i?"Final standings":"Session board",rows:o,visible:o.length>0&&a}}function Hp(n){return n.state==="active"&&n.phase!=="planning"?null:`${n.state}:${n.revision}`}function fM(n,e){return n?.state==="finished"&&e!==null&&e.startsWith("finished:")}class Wp{stats=[];onChange=()=>{};get loadedKey(){return this.loaded}scope=null;wanted=null;loaded=null;busy=!1;token=0;failed=null;session;kind;constructor(e,t){this.session=e,this.kind=t}want(e,t,i){this.scope!==e&&(this.scope=e,this.stats=[],this.loaded=null),!(this.loaded===t||this.wanted?.key===t||this.failed?.key===t&&Date.now()<this.failed.until)&&(this.wanted={scope:e,key:t,path:i},this.pump())}hold(e){this.token++,this.wanted=null,this.scope!==e&&(this.scope=e,this.stats=[],this.loaded=null)}clear(){this.token++,this.scope=null,this.wanted=null,this.loaded=null,this.stats.length&&(this.stats=[],this.onChange())}async pump(){if(!this.busy){this.busy=!0;try{for(;this.wanted;){const e=this.wanted,t=this.session.revision,i=this.token;try{const r=uM(await ns(this.session,e.path,this.kind==="private"?ur:ni));this.session.assertRevision(t),this.scope===e.scope&&i===this.token&&(this.stats=r,this.loaded=e.key,this.failed=null,this.onChange())}catch{this.failed={key:e.key,until:Date.now()+3e3}}this.wanted===e&&(this.wanted=null)}}finally{this.busy=!1}}}}function Xp(n,e,t){const i=1-Math.exp(-18*Math.max(0,t));return{angle:n.angle+(e.angle-n.angle)*i,pull:n.pull+(e.pull-n.pull)*i}}function Ro(n,e=0){const t=n.angle*Math.PI/180,i=Math.cos(t),r=Math.sin(t),s={x:-7.7+i*(1.3-.37),y:2.3+r*(1.3-.37)},a={x:s.x-i*n.pull,y:s.y-r*n.pull},o={x:a.x-i*.16*e,y:a.y-r*.16*e+.04*e},c=n.pull+(.08-n.pull)*e,l={x:s.x-i*c,y:s.y-r*c},u=-7.95,h=2.3,d=o.x-u,p=o.y-h,g=Math.hypot(d,p),b=(.65**2-.9**2+g**2)/(2*g),m=Math.sqrt(Math.max(0,.65**2-b**2)),f={x:u+d/g*b-p/g*m,y:h+p/g*b+d/g*m};return{bow:s,hand:o,nock:l,elbow:f}}const Xu=.16;function Qs(n,e,t){if(e>=Xu){const M=Mo(n,e);return{position:Jt(n,e),angle:Math.atan2(M.y,M.x)}}const i=Xu,r=Math.max(0,e)/i,s=Jt(n,i),a=Mo(n,i),o=Math.hypot(n.velocity.x,n.velocity.y),c={x:Math.cos(t.angle)*o,y:Math.sin(t.angle)*o},l=2*r**3-3*r*r+1,u=r**3-2*r*r+r,h=-2*r**3+3*r*r,d=r**3-r*r,p=(6*r*r-6*r)/i,g=3*r*r-4*r+1,b=(-6*r*r+6*r)/i,m=3*r*r-2*r,f={x:l*t.tip.x+u*i*c.x+h*s.x+d*i*a.x,y:l*t.tip.y+u*i*c.y+h*s.y+d*i*a.y},x={x:p*t.tip.x+g*c.x+b*s.x+m*a.x,y:p*t.tip.y+g*c.y+b*s.y+m*a.y};return{position:f,angle:Math.atan2(x.y,x.x)}}const An=Object.freeze({count:7,start:.055,duration:.228,radiusPx:3.5,outlinePx:1.75});function Co(n){if(!Number.isInteger(n.count)||n.count<1||n.count>32||![n.start,n.duration].every(Number.isFinite)||n.start<0||n.duration<0||n.start+n.duration>.35)throw new RangeError("Short opening guide settings required.");return Array.from({length:n.count},(e,t)=>n.start+(n.count===1?0:t/(n.count-1)*n.duration))}const Io=Object.freeze({minAngle:en.minAngle,maxAngle:en.maxAngle,minPower:.08,maxPower:1}),$p=(n,e,t)=>Math.min(t,Math.max(e,n)),Yp=n=>$p(Math.round(n*10)/10,Io.minAngle,Io.maxAngle),qp=n=>$p(Math.round(n*1e3)/1e3,Io.minPower,Io.maxPower),Za=n=>({...n,angle:Yp(n.angle),power:qp(n.power)}),jp=n=>`${n.toFixed(1)}°`,Kp=n=>`${(n*100).toFixed(1)}%`,pM=n=>n.toFixed(1),mM=n=>(n*100).toFixed(1),gM=n=>`Last: ${jp(n.angle)} · ${Kp(n.power)}`,$u=Object.freeze([{id:"combat-angle-minus-large",field:"angle",delta:-1},{id:"combat-angle-minus-fine",field:"angle",delta:-.1},{id:"combat-angle-plus-fine",field:"angle",delta:.1},{id:"combat-angle-plus-large",field:"angle",delta:1},{id:"combat-power-minus-large",field:"power",delta:-5},{id:"combat-power-minus-fine",field:"power",delta:-.5},{id:"combat-power-plus-fine",field:"power",delta:.5},{id:"combat-power-plus-large",field:"power",delta:5}]);function $c(n,e,t){return e==="angle"?{...n,angle:Yp((Math.round(n.angle*10)+Math.round(t*10))/10)}:{...n,power:qp((Math.round(n.power*1e3)+Math.round(t*10))/1e3)}}class xM{scope=null;locked=null;shot=null;noteLocked(e,t){if(!e)return;const i=this.locked?.aim;i&&i.arrow===e.arrow&&i.angle===e.angle&&i.power===e.power&&i.facing===e.facing||(this.locked={aim:{...e},at:t})}postdatesLock(e){return!!this.locked&&e.startedAt!==null&&e.startedAt>=this.locked.at}fallback(e){if(!this.postdatesLock(e))return null;const t=this.locked.aim;return this.locked=null,t}observe(e,t,i){if(e!==this.scope&&(this.scope=e,this.shot=null,this.locked=null),!i||!t||i.actorId!==t||!i.point)return;if(this.shot?.actionId===i.actionId){const s=this.shot.aim??i.aim??this.fallback(i);i.aim&&this.postdatesLock(i)&&(this.locked=null),this.shot={...this.shot,aim:s?{...s}:null,at:this.shot.at??i.startedAt};return}const r=i.aim??this.fallback(i);i.aim&&this.postdatesLock(i)&&(this.locked=null),this.shot={actionId:i.actionId,aim:r?{...r}:null,impact:{...i.point},at:i.startedAt}}clear(){this.scope=null,this.shot=null,this.locked=null}markerVisible(e){return!!this.shot&&this.shot.at!==null&&e>=this.shot.at}}function _M(n){let e=3735928559,t=1103547991;const i=r=>{e=Math.imul(e^r,2654435761),t=Math.imul(t^r,1597334677)};for(const r of`${n.version}:${n.revision}:${n.cells.length}:`)i(r.charCodeAt(0));for(let r=0;r<n.cells.length;r+=4)i((n.cells[r]?1:0)|(n.cells[r+1]?2:0)|(n.cells[r+2]?4:0)|(n.cells[r+3]?8:0));return e=Math.imul(e^e>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),t=Math.imul(t^t>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),(4294967296*(2097151&t)+(e>>>0)).toString(16).padStart(14,"0")}function vM(n){if(!Number.isFinite(n))return"Wind calm";const e=Math.abs(n).toFixed(1);return e==="0.0"?"Wind calm":`Wind ${n<0?"←":"→"} ${e}`}const bM="position:absolute;top:10px;left:50%;transform:translateX(-50%);z-index:3;padding:4px 10px;border-radius:999px;font:600 12px/1.2 system-ui,sans-serif;letter-spacing:.3px;background:rgba(16,24,40,.72);color:#fff;pointer-events:none;white-space:nowrap";class yM{element=null;parent;constructor(e){this.parent=e}ensure(){if(this.element)return this.element;const e=this.parent();if(!e)return null;const t=document.createElement("div");return t.id="combat-wind",t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.style.cssText=bM,t.hidden=!0,e.appendChild(t),this.element=t}update(e,t){if(!(t>0)){this.hide();return}const i=this.ensure();if(!i)return;i.hidden=!1;const r=vM(e);i.textContent!==r&&(i.textContent=r),i.dataset.wind=String(e)}hide(){this.element&&(this.element.hidden=!0)}}function Po(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Yu=(n,e,t)=>Math.imul(Math.round(n*64)|0,73856093)^Math.imul(Math.round(e*64)|0,19349663)^Math.imul(t|0,83492791);function MM(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^e>>>16)>>>0}const SM=n=>MM(JSON.stringify(n)),Ii=(n,e,t)=>Math.min(t,Math.max(e,n)),wM=800,$d=64,EM=12,AM=[.49,.58,.38],TM=[.6,.46,.31],RM=[.36,.29,.24],CM=[.22,.22,.26],Yc=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,Yd=n=>[Yc(n[0]),Yc(n[1]),Yc(n[2])],qu=.5,IM=.75,PM={surface:AM,soil:TM,deep:RM,bedrock:CM};function ju(n,e,t=0,i=PM){const r=t-n,s=Math.max(1e-6,t-e);return r<=qu?i.surface:n-e<IM?i.bedrock:i.detail&&r<=qu+i.detail.depth?i.detail.color:r/s<.55?i.soil:i.deep}function LM(n){return[Ii(n[0]*.62+.2,0,1),n[1]*.5+.07,n[2]*.42+.02]}const DM=[[-1,0],[1,0],[0,-1],[0,1]];function NM(n,e,t,i,r){if(!r.size)return!1;for(const[s,a]of DM){const o=n+s,c=e+a;if(o>=0&&c>=0&&o<t&&c<i&&r.has(c*t+o))return!0}return!1}const Ku=6e3,UM=(n,e,t,i,r)=>n.size?pp(fp([...n],e,t),i,r):[];class FM{keys=null;until=0;release(){const e=this.keys??[];return this.keys=null,e}set(e,t){this.keys=e.length?e:null,this.until=t}due(e){return this.keys===null||e<this.until?null:this.release()}clear(){this.keys=null}}function kM(n,e,t=wM){return n!==null&&e>=n&&e-n<=t}function OM(n,e){if(!n.length)return null;let t=0,i=0;for(const s of n)t+=s%e.width,i+=Math.floor(s/e.width);const r=n.length;return{x:e.minX+(t/r+.5)*e.cell,y:e.minY+(i/r+.5)*e.cell,extent:Math.sqrt(r)*e.cell,count:r}}const Jp=n=>n.extent>=1.5,qd=.35;function BM(n,e,t,i){return i||!Jp(n)||t<=0?0:Ii(n.extent*.1,0,.6)*Ii(1-e/(t*1.5),0,1)}const zM=(n,e=qd)=>n<0||n>=e?0:(1-n/e)**2;function GM(n,e,t=qd){const i=e*zM(n,t);return i===0?{x:0,y:0}:{x:i*Math.sin(n*71),y:i*Math.sin(n*93+1.3)}}function VM(n,e,t,i){if(t<e||n.length<2)return null;const r=(t-e)/1e3,s=n.findIndex(h=>h.time>=r);if(s<=0)return{vx:0,vy:0};const a=n[s-1],o=n[s],c=a.poses.find(h=>h.actorId===i)?.feet,l=o.poses.find(h=>h.actorId===i)?.feet,u=o.time-a.time;return!c||!l||u<=1e-9?{vx:0,vy:0}:{vx:(l.x-c.x)/u,vy:(l.y-c.y)/u}}const HM=.4,Ju=.5;function WM(n,e){return Math.hypot(n,e)<HM?0:Ii(-n*.04,-Ju,Ju)}const XM=(n,e,t)=>n+(e-n)*(1-Math.exp(-10*Math.max(0,t)));function $M(n,e){return n!==null&&n<=-2&&e>-.5?-n:0}const YM=.22;function qM(n,e,t=YM){return n<0||n>=t||e<=0?{sy:1}:{sy:1-Ii(e*.015,0,.3)*(1-n/t)}}const jM=.08,Zu=.22,KM=n=>n>=0&&n<jM;function JM(n,e,t=!1){return t||n<0||n>=Zu?0:-e*.22*(1-n/Zu)**2}function ZM(n,e){return e.filter(t=>n.has(t.id)&&t.health<n.get(t.id)).map(t=>t.id)}class QM{items=[];capacity;constructor(e=$d){this.capacity=e}emit(e){this.items.length>=this.capacity&&this.items.shift(),this.items.push(e)}step(e){const t=this.items;let i=0;for(let r=0;r<t.length;r++){const s=t[r];s.age+=e,s.x+=s.vx*e,s.y+=s.vy*e,s.kind==="debris"?s.vy-=18*e:(s.vx*=Math.exp(-3*e),s.vy=s.vy*Math.exp(-3*e)+.6*e),s.age<s.life&&(t[i++]=s)}t.length=i}clear(){this.items.length=0}}function eS(n){const e=Ii(n.age/n.life,0,1);return n.kind==="dust"?n.size*(1+e)*(1-e*e):n.size*(1-e)}function tS(n,e){const t=Ii(Math.round(4+n*6),4,20),i=Ii(Math.round(3+n*3),3,12);return e?{debris:Math.min(4,t),dust:Math.min(2,i)}:{debris:t,dust:i}}function nS(n,e,t,i,r){const{debris:s,dust:a}=tS(e.extent,i),o=Math.min(1.2,e.extent*.5),c=3+Math.min(6,e.extent*2);for(let l=0;l<s;l++){const u=Math.PI*(.1+.8*t()),h=c*(.5+t()),d=e.y+(t()-.5)*o;n.emit({kind:"debris",x:e.x+(t()-.5)*o,y:d,vx:Math.cos(u)*h*(t()<.5?-1:1),vy:Math.sin(u)*h,age:0,life:.5+t()*.4,size:.08+t()*.1,color:r(d)})}for(let l=0;l<a;l++)n.emit({kind:"dust",x:e.x+(t()-.5)*o*1.5,y:e.y+(t()-.3)*o,vx:(t()-.5)*3,vy:t()*1.5,age:0,life:.5+t()*.3,size:.3+t()*.3,color:[.78,.74,.66]})}function iS(n,e,t,i,r,s){const a=s?1:Ii(Math.round(i*.5),2,6);for(let o=0;o<a;o++)n.emit({kind:"dust",x:e+(r()-.5)*.8,y:t+.05,vx:(o%2?1:-1)*(.6+r()*1.2),vy:.3+r()*.5,age:0,life:.35+r()*.2,size:.25+r()*.2,color:[.78,.74,.66]})}const xs=(...n)=>n.every(Number.isFinite);function Zp(n){return xs(n.minX,n.maxX,n.minY,n.maxY)&&n.minX<n.maxX&&n.minY<n.maxY}function rS(n,e,t){return e+(n.shotMinSpeed+n.shotExtraSpeed)*(t.start+t.duration)+1}const sS=4;function aS(n,e,t,i){if(!Zp(n)||!xs(i,t.halfWidth,t.height)||i<0)throw new RangeError("Ordered finite profile bounds and margin required.");let r=n.minX+t.halfWidth-i,s=n.maxX-t.halfWidth+i,a=n.minY,o=n.maxY;for(const c of e){if(!xs(c.x,c.y))throw new RangeError("Finite actor positions required.");const l=Math.max(i,t.halfWidth);r=Math.min(r,c.x-l),s=Math.max(s,c.x+l),a=Math.min(a,c.y-2),o=Math.max(o,c.y+t.height+sS)}return{minX:Math.min(r,n.minX),maxX:Math.max(s,n.maxX),minY:a,maxY:o}}const oS=Object.freeze({inline:Object.freeze({side:12,top:68,bottom:56}),expanded:Object.freeze({side:12,top:108,bottom:12})}),qc=.2;function Qp(n,e,t="inline"){if(!xs(n,e)||n<=0||e<=0)throw new RangeError("Positive finite viewport required.");const i=oS[t];if(!i)throw new RangeError("Unknown HUD mode.");const r=Math.min(i.side,n*qc);return{left:r,right:r,top:Math.min(i.top,e*qc),bottom:Math.min(i.bottom,e*qc)}}function cS(n,e,t,i=Qp(e,t)){if(!Zp(n))throw new RangeError("Ordered finite bounds required.");if(!xs(e,t)||e<=0||t<=0)throw new RangeError("Positive finite viewport required.");const r=e-i.left-i.right,s=t-i.top-i.bottom;if(!xs(i.left,i.right,i.top,i.bottom)||i.left<0||i.right<0||i.top<0||i.bottom<0||r<=0||s<=0)throw new RangeError("Insets must leave a positive area.");const a=Math.min(r/(n.maxX-n.minX),s/(n.maxY-n.minY)),o=(n.minX+n.maxX)/2,c=(n.minY+n.maxY)/2,l=o-(i.left-i.right)/2/a,u=c+(i.top+s/2-t/2)/a;return{centerX:l,centerY:u,halfWidth:e/(2*a),halfHeight:t/(2*a),scale:a}}function lS(n,e){return!n||n.worldKey!==e.worldKey||n.profile!==e.profile||n.epoch!==e.epoch||n.width!==e.width||n.height!==e.height||n.mode!==e.mode}const dS=new Rr;class hS{mesh;capacity;geometry=new Ts(1,1);material;alpha;matrix=new bt;position=new F;scale=new F;color=new Ye;constructor(e=$d){this.capacity=e,this.material=new Yi({color:"#ffffff",transparent:!0,depthWrite:!1}),this.material.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vInstanceAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vInstanceAlpha = instanceAlpha;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vInstanceAlpha;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vInstanceAlpha;`)},this.mesh=new Dg(this.geometry,this.material,e),this.mesh.instanceMatrix.setUsage(Ih),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.visible=!1,this.alpha=new sd(new Float32Array(e),1),this.alpha.setUsage(Ih),this.geometry.setAttribute("instanceAlpha",this.alpha),this.mesh.setColorAt(0,this.color)}update(e){const t=Math.min(e.length,this.capacity);for(let i=0;i<t;i++){const r=e[i],s=Math.max(.001,eS(r)),a=Yd(r.color);this.position.set(r.x,r.y,.6),this.scale.set(s,s,s),this.mesh.setMatrixAt(i,this.matrix.compose(this.position,dS,this.scale)),this.mesh.setColorAt(i,this.color.setRGB(a[0],a[1],a[2])),this.alpha.setX(i,r.kind==="dust"?.55*(1-r.age/r.life):.95)}this.mesh.count=t,this.mesh.visible=t>0,t>0&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.alpha.needsUpdate=!0)}clear(){this.mesh.count=0,this.mesh.visible=!1}dispose(){this.geometry.dispose(),this.material.dispose(),this.mesh.dispose()}}class xn extends RangeError{path;constructor(e,t){super(t),this.name="DefinitionError",this.path=e}}const fn=(n,e)=>{throw new xn(n,n?`${n} ${e}`:e)},Lr=n=>n,uS=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),uo=(n,e)=>typeof e=="number"?`${n}[${e}]`:n?`${n}.${e}`:e,_s=n=>{try{const e=JSON.stringify(n);return e===void 0?String(n):e.length>40?`${e.slice(0,37)}...`:e}catch{return String(n)}},ji=(n={})=>Lr((e,t)=>{if(typeof e!="string")return fn(t,`must be a string (got ${_s(e)})`);n.min!==void 0&&e.length<n.min&&fn(t,`must have at least ${n.min} characters`),n.max!==void 0&&e.length>n.max&&fn(t,`must have at most ${n.max} characters`),n.pattern&&!n.pattern.test(e)&&fn(t,`must be ${n.what??`a match for ${n.pattern}`} (got ${_s(e)})`)}),mn=()=>ji({pattern:/^#[0-9a-fA-F]{6}$/,what:"#rrggbb"}),qe=(n={})=>Lr((e,t)=>{if(typeof e!="number"||!Number.isFinite(e))return fn(t,`must be a finite number (got ${_s(e)})`);n.int&&!Number.isInteger(e)&&fn(t,`must be an integer (got ${e})`),n.min!==void 0&&e<n.min&&fn(t,`must be at least ${n.min} (got ${e})`),n.max!==void 0&&e>n.max&&fn(t,`must be at most ${n.max} (got ${e})`)}),br=n=>Lr((e,t)=>{n.includes(e)||fn(t,`must be one of ${n.map(i=>JSON.stringify(i)).join(", ")} (got ${_s(e)})`)}),Cn=(n,e={})=>Lr((t,i)=>{if(!Array.isArray(t))return fn(i,`must be a list (got ${_s(t)})`);e.min!==void 0&&t.length<e.min&&fn(i,`must have at least ${e.min} entries (has ${t.length})`),e.max!==void 0&&t.length>e.max&&fn(i,`must have at most ${e.max} entries (has ${t.length})`),t.forEach((r,s)=>n(r,uo(i,s)))}),pt=n=>Object.assign(Lr((e,t)=>{e!==void 0&&n(e,t)}),{optional:!0}),_t=n=>Lr((e,t)=>{if(!uS(e))return fn(t,`must be an object (got ${_s(e)})`);for(const i of Object.keys(n)){const r=n[i];e[i]===void 0?r.optional||fn(uo(t,i),"is required"):r(e[i],uo(t,i))}for(const i of Object.keys(e))i in n||fn(uo(t,i),`is not a known field (allowed: ${Object.keys(n).join(", ")})`)}),nr=(n,e)=>Lr((t,i)=>{n(t,i);const r=e(t);r&&fn(i,r)}),jd=/^[a-z0-9][a-z0-9._-]{0,31}$/,fS=65536,Kd={kind:ji({min:1,max:32}),id:ji({pattern:jd,what:"an id (a-z, 0-9, . _ -; max 32)"}),version:qe({min:1,int:!0}),weight:qe({min:0,max:fS,int:!0}),tags:Cn(ji({pattern:/^[a-z0-9][a-z0-9._-]{0,31}$/,what:"a tag"}),{max:16})},Qu=1<<20;function em(n){if(typeof n=="object"&&n!==null&&!Object.isFrozen(n)){Object.freeze(n);for(const e of Object.values(n))em(e)}return n}function ud(n,e,t){const i=new Map,r=(h,d)=>`${h}@${d}`,s=(h,d)=>h.id<d.id?-1:h.id>d.id?1:h.version-d.version,a=h=>[...i.values()].sort(s).filter(d=>!h||h(d)),o=h=>i.get(r(h.id,h.version)),c=h=>{if(!jd.test(h))return;let d;for(const p of i.values())p.id===h&&(!d||p.version>d.version)&&(d=p);return d},l=h=>{const d=h,p=`${n} ${typeof d?.id=="string"?d.id:"?"}@${typeof d?.version=="number"?d.version:"?"}: `;try{if(e(h,""),h.kind!==n)throw new xn("kind",`kind must be ${JSON.stringify(n)} (got ${JSON.stringify(h.kind)})`);t?.(h,u)}catch(g){throw g instanceof xn?new xn(g.path,p+g.message):g}},u={kind:n,register(h){l(h);const d=h,p=r(d.id,d.version);if(i.has(p))throw new xn("",`${n} ${p}: is already registered`);const g=em(structuredClone(d));return i.set(p,g),g},check(h){try{return l(h),null}catch(d){if(d instanceof xn)return d.message;throw d}},find:o,findLatest:c,has:h=>o(h)!==void 0,get(h){const d=o(h);if(!d)throw new xn("ref",`${n} ${r(String(h?.id),h?.version)}: ref is not registered`);return d},latest(h){const d=c(h);if(!d)throw new xn("id",`${n} ${JSON.stringify(h)}: id is not registered`);return d},list:a,pick(h,d){const p=a(d).filter(m=>m.weight>0);if(!p.length)throw new RangeError(`No selectable ${n} definition (nothing eligible has weight above 0)`);const g=p.reduce((m,f)=>m+f.weight,0);if(g>Qu)throw new RangeError(`${n} selectable weight total ${g} exceeds ${Qu}`);let b=(h>>>0)%g;for(const m of p){if(b<m.weight)return m;b-=m.weight}return p[p.length-1]}};return u}const Un=n=>{const e=parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]},Jd=n=>`#${n.map(e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,"0")).join("")}`,pS=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],mS={kind:"theme",id:"classic",version:1,weight:0,tags:["default"],name:"Classic",sky:{stops:[{at:0,color:"#dce8df"},{at:1,color:"#dce8df"}],darkStops:[{at:0,color:"#202f36"},{at:1,color:"#202f36"}]},light:{hemiSky:"#fff4d8",hemiGround:"#62765d",hemiIntensity:2.6,sun:"#fff4d8",sunIntensity:3},terrain:{surface:"#7d9461",soil:"#99754f",deep:"#5c4a3d",bedrock:"#383842"},parallax:[]},gS={kind:"theme",id:"meadow",version:2,weight:1,tags:["temperate","green"],name:"Meadow",sky:{stops:[{at:0,color:"#86bde8"},{at:1,color:"#e6f2dc"}]},light:{hemiSky:"#fff4d8",hemiGround:"#62765d",hemiIntensity:2.6,sun:"#fff4d8",sunIntensity:3},haze:{color:"#e6f2dc",strength:.35},terrain:{surface:"#669641",soil:"#8c6a46",deep:"#574330",bedrock:"#35363f",detail:{color:"#a6c46a",depth:.25}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#ffffff",opacity:.85,baseY:14,amplitude:6,frequency:5,size:9,seed:11,drift:.5},{id:"far-hills",shape:"hills",depth:.35,color:"#9dbfb0",opacity:1,baseY:3,amplitude:9,frequency:3,seed:21},{id:"near-hills",shape:"hills",depth:.6,color:"#103a25",opacity:1,baseY:-1,amplitude:6,frequency:4,seed:22}]},xS={kind:"theme",id:"canyon",version:2,weight:1,tags:["arid","warm"],name:"Canyon",sky:{stops:[{at:0,color:"#f0b57d"},{at:1,color:"#fbe6c0"}]},light:{hemiSky:"#ffe6c0",hemiGround:"#8a5a3c",hemiIntensity:2.7,sun:"#ffe0b0",sunIntensity:3.2},haze:{color:"#fbe6c0",strength:.4},terrain:{surface:"#c98450",soil:"#a85d38",deep:"#6f3f2b",bedrock:"#3a2a28",detail:{color:"#e5bd8a",depth:.3}},parallax:[{id:"sun-haze",shape:"band",depth:0,color:"#ffd9a0",opacity:.35,baseY:2,amplitude:0,frequency:1,seed:1,floorY:-10},{id:"far-mesas",shape:"ridge",depth:.3,color:"#d89a6a",opacity:1,baseY:2,amplitude:11,frequency:4,seed:31},{id:"near-mesas",shape:"ridge",depth:.55,color:"#4a2616",opacity:1,baseY:-2,amplitude:8,frequency:5,seed:32}]},_S={kind:"theme",id:"dusk",version:1,weight:1,tags:["night","warm"],name:"Dusk",sky:{stops:[{at:0,color:"#2c2766"},{at:.55,color:"#c9657a"},{at:1,color:"#f6c38b"}]},light:{hemiSky:"#ffc9a0",hemiGround:"#4a3a6a",hemiIntensity:2.2,sun:"#ffb27a",sunIntensity:2.6},haze:{color:"#f2a58a",strength:.3},terrain:{surface:"#6b8a5c",soil:"#6a4a52",deep:"#43333f",bedrock:"#241d2f",detail:{color:"#8aa66c",depth:.2}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#f4a183",opacity:.55,baseY:12,amplitude:5,frequency:4,size:12,seed:41,drift:.35},{id:"far-ridge",shape:"ridge",depth:.3,color:"#5a4a86",opacity:1,baseY:1,amplitude:12,frequency:4,seed:42},{id:"near-ridge",shape:"hills",depth:.55,color:"#34295a",opacity:1,baseY:-2,amplitude:7,frequency:3,seed:43}],ui:{labelInk:"#f6e9d8",labelBg:"#2b2347",guideFill:"#fff2b5",guideStroke:"#1a1730"}},vS={kind:"theme",id:"snow",version:3,weight:1,tags:["cold","bright"],name:"Snow",sky:{stops:[{at:0,color:"#7aa5cf"},{at:1,color:"#a8c4de"}],darkStops:[{at:0,color:"#0b1530"},{at:1,color:"#1d2c4a"}]},light:{hemiSky:"#eaf3ff",hemiGround:"#8a96a8",hemiIntensity:2.8,sun:"#f4f8ff",sunIntensity:2.8},haze:{color:"#eef5fb",strength:.45},terrain:{surface:"#eef3f8",soil:"#737b88",deep:"#5a6270",bedrock:"#2e323c",detail:{color:"#b9dcee",depth:.35}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#ffffff",opacity:.8,baseY:15,amplitude:5,frequency:4,size:10,seed:51,drift:.4},{id:"far-peaks",shape:"ridge",depth:.25,color:"#c5d4e5",opacity:1,baseY:1,amplitude:14,frequency:3,seed:52},{id:"near-peaks",shape:"ridge",depth:.5,color:"#8aa0ba",opacity:1,baseY:-2,amplitude:9,frequency:5,seed:53}]},bS=[mS,gS,xS,_S,vS],yS=["hills","ridge","clouds","band"],ef=nr(Cn(_t({at:qe({min:0,max:1}),color:mn()}),{min:2,max:8}),n=>n[0].at!==0?"first stop must be at 0":n[n.length-1].at!==1?"last stop must be at 1":n.some((e,t)=>t&&e.at<=n[t-1].at)?"stops must be in strictly increasing order":null),MS=_t({id:ji({pattern:/^[a-z][a-z0-9-]{0,29}$/,what:"a lowercase slug"}),shape:br(yS),depth:qe({min:0,max:1}),color:mn(),opacity:qe({min:0,max:1}),baseY:qe({min:-40,max:80}),amplitude:qe({min:0,max:40}),frequency:qe({min:1,max:24,int:!0}),seed:qe({int:!0,min:0,max:4294967295}),drift:pt(qe({min:-8,max:8})),size:pt(qe({min:1,max:60})),floorY:pt(qe({min:-120,max:80})),period:pt(qe({min:20,max:160}))}),SS=nr(_t({...Kd,name:ji({min:1,max:40}),sky:_t({stops:ef,darkStops:pt(ef)}),light:_t({hemiSky:mn(),hemiGround:mn(),hemiIntensity:qe({min:0,max:8}),sun:mn(),sunIntensity:qe({min:0,max:8})}),haze:pt(_t({color:mn(),strength:qe({min:0,max:1})})),terrain:_t({surface:mn(),soil:mn(),deep:mn(),bedrock:mn(),detail:pt(_t({color:mn(),depth:qe({min:.05,max:1.5})}))}),parallax:Cn(MS,{max:8}),ui:pt(_t({labelInk:pt(mn()),labelBg:pt(mn()),guideFill:pt(mn()),guideStroke:pt(mn())}))}),n=>{const e=n,t=e.parallax.map(r=>r.id),i=t.find((r,s)=>t.indexOf(r)!==s);return i?`parallax layer id ${JSON.stringify(i)} is used twice`:!!e.ui?.labelInk!=!!e.ui?.labelBg?"ui.labelInk and ui.labelBg must be set together":!!e.ui?.guideFill!=!!e.ui?.guideStroke?"ui.guideFill and ui.guideStroke must be set together":null}),wS="classic",ES="theme",Ei=ud("theme",SS);for(const n of bS)Ei.register(n);const tf=()=>Ei.latest(wS);function AS(n,e={}){const t=e.pin?Ei.findLatest(e.pin):void 0;if(t)return t;const i=SM(["theme-1",n]),r=e.preferred?.length?new Set(e.preferred):null;return r&&Ei.list(s=>r.has(s.id)&&s.weight>0).length?Ei.pick(i,s=>r.has(s.id)):Ei.pick(i)}function TS(n){if(!n)return null;let e=null;try{e=new URLSearchParams(n).get(ES)}catch{return null}return e&&Ei.findLatest(e)?e:null}const nf=new WeakMap;function rf(n){let e=nf.get(n);if(!e){const t=n.terrain;e={surface:Un(t.surface),soil:Un(t.soil),deep:Un(t.deep),bedrock:Un(t.bedrock),detail:t.detail?{color:Un(t.detail.color),depth:t.detail.depth}:void 0},nf.set(n,e)}return e}const Qa=Object.freeze({solidCells:34e3,chunks:80,rowRuns:840,protectedCells:768}),da=In("arena-2"),sf=da.cell,vs=(n,e)=>{throw new xn(n,`${n} ${e}`)},Zn=(n,e,t)=>{n(e,t)},Ps=n=>n,Zd=ji({pattern:/^[a-z][a-z0-9]{0,15}$/,what:"a parameter name"}),Jr=(n,e)=>typeof n=="number"?n:(n.add??0)+n.terms.reduce((t,[i,r])=>t+r*e[i],0),Qd=qe({int:!0,min:-4096,max:4096}),RS=Ps((n,e)=>{(!Array.isArray(n)||n.length!==2)&&vs(e,"must be a [param, coefficient] pair"),Zn(Zd,n[0],`${e}[0]`),Zn(qe({int:!0,min:-8,max:8}),n[1],`${e}[1]`)}),CS=_t({terms:Cn(RS,{min:1,max:4}),add:pt(Qd)}),is=Ps((n,e)=>{Zn(typeof n=="number"?Qd:CS,n,e)}),af={x0:is,x1:is,y0:is,y1:is},IS=nr(_t({min:qe({int:!0,min:-4096,max:4096}),max:qe({int:!0,min:-4096,max:4096}),step:qe({int:!0,min:1,max:4096})}),n=>n.min>n.max?"min must not exceed max":(n.max-n.min)%n.step!==0?"max - min must be a multiple of step":null);function Zr(n){return typeof n=="number"?[]:n.terms.map(e=>e[0])}function PS(n){return Object.keys(n).sort().reduce((t,i)=>t.flatMap(r=>[{...r,[i]:n[i].min},{...r,[i]:n[i].max}]),[{}])}const LS=nr(_t({...Kd,params:Ps((n,e)=>{(typeof n!="object"||n===null||Array.isArray(n))&&vs(e,"must be an object of parameter ranges");const t=Object.keys(n);t.length>4&&vs(e,`must have at most 4 parameters (has ${t.length})`);for(const i of t)Zn(Zd,i,`${e}.${i}`),Zn(IS,n[i],`${e}.${i}`)}),parts:Cn(_t({op:br(["add","clear"]),...af}),{min:1,max:16}),surface:pt(_t({x0:is,x1:is})),requiresClear:pt(Cn(_t(af),{max:8}))}),n=>{const e=n,t=[];e.parts.forEach((s,a)=>t.push([`parts[${a}]`,s.x0,s.x1,s.y0,s.y1])),(e.requiresClear??[]).forEach((s,a)=>t.push([`requiresClear[${a}]`,s.x0,s.x1,s.y0,s.y1]));const i=new Set(Object.keys(e.params)),r=PS(e.params);for(const[s,a,o,c,l]of t){for(const u of[...Zr(a),...Zr(o),...Zr(c),...Zr(l)])if(!i.has(u))return`${s} uses unknown parameter ${JSON.stringify(u)}`;if(r.some(u=>Jr(o,u)<=Jr(a,u)||Jr(l,u)<=Jr(c,u)))return`${s} must have a positive extent for every parameter value`}if(e.surface){for(const s of[...Zr(e.surface.x0),...Zr(e.surface.x1)])if(!i.has(s))return`surface uses unknown parameter ${JSON.stringify(s)}`;if(r.some(s=>Jr(e.surface.x1,s)<=Jr(e.surface.x0,s)))return"surface must have a positive width for every parameter value"}return null}),sn=(n={})=>{const e=qe({min:n.min,max:n.max});return Ps((t,i)=>{Zn(e,t,i),Number.isInteger(t/sf)||vs(i,`must be a whole number of cells (${sf} units); got ${t}`)})},ha={min:da.bounds.minX,max:da.bounds.maxX},Tr={min:da.bounds.minY,max:da.bounds.maxY},DS=nr(_t({x0:sn(ha),x1:sn(ha),y0:sn(Tr),y1:sn(Tr)}),n=>n.x1<=n.x0||n.y1<=n.y0?"must have a positive extent":null),NS=nr(_t({op:br(["add","clear"]),x0:sn(ha),x1:sn(ha),y0:sn(Tr),y1:sn(Tr)}),n=>n.x1<=n.x0||n.y1<=n.y0?"must have a positive extent":null),US=sn(ha),FS=sn(Tr),kS=Ps((n,e)=>{(!Array.isArray(n)||n.length!==2)&&vs(e,"must be an [x, y] pair"),Zn(US,n[0],`${e}[0]`),Zn(FS,n[1],`${e}[1]`)}),of=br(["mirror","balanced"]),jc=_t({id:ji({pattern:jd,what:"an id"}),version:qe({int:!0,min:1})}),ea=n=>nr(_t({min:n,max:n}),e=>e.min>e.max?"min must not exceed max":null),OS=ea(qe({int:!0,min:0,max:16})),BS=ea(Qd),cf=Ps((n,e)=>{(typeof n!="object"||n===null||Array.isArray(n))&&vs(e,"must be an object of parameter overrides");for(const t of Object.keys(n))Zn(Zd,t,`${e}.${t}`),Zn(BS,n[t],`${e}.${t}`)}),zS=_t({solidCells:pt(qe({int:!0,min:1,max:Qa.solidCells})),chunks:pt(qe({int:!0,min:1,max:Qa.chunks})),rowRuns:pt(qe({int:!0,min:1,max:Qa.rowRuns})),protectedCells:pt(qe({int:!0,min:0,max:Qa.protectedCells}))}),GS=nr(_t({...Kd,profile:br(["arena-2"]),mode:br(["fixed","procedural"]),fixed:pt(_t({parts:Cn(NS,{min:1,max:64}),pads:Cn(kS,{min:8,max:8}),requiresClear:pt(Cn(DS,{max:16})),symmetry:pt(of)})),pads:pt(_t({levels:Cn(sn(Tr),{min:3,max:16}),offset:ea(sn({min:-.5,max:.5})),symmetry:of,maxAdjacentStep:sn({min:0}),minDistinctLevels:qe({int:!0,min:3,max:8}),support:Cn(_t({block:jc,weight:qe({int:!0,min:1,max:1e3}),params:pt(cf)}),{min:1,max:8})})),features:pt(Cn(_t({block:jc,zone:br(["gap","upper","lower","sky"]),count:OS,weight:qe({int:!0,min:1,max:1e3}),params:pt(cf)}),{max:16})),voids:_t({count:ea(qe({int:!0,min:0,max:8})),width:ea(sn({min:2,max:80}))}),lanes:_t({padHeadroom:sn({min:3,max:20}),launchReach:sn({min:1,max:10}),skyBandMinY:sn(Tr),skyMaxFill:qe({min:0,max:1})}),limits:pt(zS),preferredThemes:pt(Cn(jc,{max:16}))}),n=>{const e=n;if(e.mode==="fixed"){if(!e.fixed)return"a fixed template requires `fixed`";if(e.pads||e.features)return"a fixed template must not carry `pads` or `features`"}else{if(!e.pads)return"a procedural template requires `pads`";if(e.fixed)return"a procedural template must not carry `fixed`";if(new Set(e.pads.levels).size!==e.pads.levels.length)return"pads.levels must be distinct";if(e.pads.levels.length<e.pads.minDistinctLevels)return"pads.levels must offer at least minDistinctLevels levels"}return null}),Qr=n=>`${n.id}@${n.version}`;function VS(n){const e=ud("terrain-block",LS),t=(r,s,a,o)=>{const c=e.find(r);if(!c)throw new xn(`${a}.block`,`${a}.block ${Qr(r)} is not a registered terrain-block`);if(o&&!c.surface)throw new xn(`${a}.block`,`${a}.block ${Qr(r)} has no surface to carry a pad`);for(const[l,u]of Object.entries(s??{})){const h=c.params[l];if(!h)throw new xn(`${a}.params.${l}`,`${a}.params.${l} is not a parameter of ${Qr(r)}`);if(u.min<h.min||u.max>h.max)throw new xn(`${a}.params.${l}`,`${a}.params.${l} must narrow ${Qr(r)} (${h.min}..${h.max}), not widen it`);if((u.min-h.min)%h.step!==0||(u.max-h.min)%h.step!==0)throw new xn(`${a}.params.${l}`,`${a}.params.${l} must stay on the step ${h.step} of ${Qr(r)}`)}},i=ud("terrain-template",GS,r=>{r.pads?.support.forEach((s,a)=>t(s.block,s.params,`pads.support[${a}]`,!0)),r.features?.forEach((s,a)=>t(s.block,s.params,`features[${a}]`,!1)),r.preferredThemes?.forEach((s,a)=>{if(!n(s))throw new xn(`preferredThemes[${a}]`,`preferredThemes[${a}] ${Qr(s)} is not a registered theme`)})});return{blocks:e,templates:i}}const HS={kind:"terrain-block",id:"arch",version:1,weight:1,tags:["gate","cover"],params:{hw:{min:24,max:40,step:4},ph:{min:20,max:32,step:4}},parts:[{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",-1]],add:8},y0:-8,y1:{terms:[["ph",1]]}},{op:"add",x0:{terms:[["hw",1]],add:-8},x1:{terms:[["hw",1]]},y0:-8,y1:{terms:[["ph",1]]}},{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:{terms:[["ph",1]]},y1:{terms:[["ph",1]],add:8}}],requiresClear:[{x0:{terms:[["hw",-1]],add:8},x1:{terms:[["hw",1]],add:-8},y0:0,y1:{terms:[["ph",1]]}}]},WS={kind:"terrain-block",id:"island",version:1,weight:1,tags:["floating"],params:{h:{min:16,max:48,step:2}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:-8,y1:0},{op:"add",x0:{terms:[["h",-1]],add:8},x1:{terms:[["h",1]],add:-8},y0:-16,y1:-8}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},XS={kind:"terrain-block",id:"ledge",version:1,weight:1,tags:["slab","thin"],params:{h:{min:16,max:40,step:2}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:-4,y1:0}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},$S={kind:"terrain-block",id:"pillar",version:1,weight:1,tags:["obstruction"],params:{hw:{min:3,max:8,step:1},ht:{min:16,max:48,step:4}},parts:[{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:-8,y1:{terms:[["ht",1]]}}]},YS={kind:"terrain-block",id:"terrace",version:1,weight:1,tags:["slab","ground"],params:{h:{min:16,max:64,step:2},t:{min:8,max:400,step:4}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:{terms:[["t",-1]]},y1:0}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},qS={kind:"terrain-block",id:"void",version:1,weight:1,tags:["gap"],params:{hw:{min:12,max:48,step:1}},parts:[{op:"clear",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:0,y1:96}]},jS={kind:"terrain-template",id:"cascade",version:1,weight:3,tags:["mirror","terraces"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"mirror",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"ledge",version:1},weight:3,params:{h:{min:20,max:28}}},{block:{id:"terrace",version:1},weight:2,params:{h:{min:24,max:28},t:{min:8,max:16}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:24},t:{min:200,max:400}}},{block:{id:"ledge",version:1},zone:"upper",count:{min:3,max:3},weight:6,params:{h:{min:16,max:24}}},{block:{id:"arch",version:1},zone:"gap",count:{min:0,max:1},weight:4},{block:{id:"pillar",version:1},zone:"gap",count:{min:0,max:1},weight:3}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"meadow",version:2},{id:"snow",version:3}]},KS={kind:"terrain-template",id:"isles",version:1,weight:2,tags:["mirror","floating"],profile:"arena-2",mode:"procedural",pads:{levels:[1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"mirror",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"island",version:1},weight:4,params:{h:{min:20,max:28}}},{block:{id:"ledge",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:22},t:{min:200,max:400}}},{block:{id:"island",version:1},zone:"upper",count:{min:3,max:3},weight:6,params:{h:{min:16,max:18}}},{block:{id:"island",version:1},zone:"sky",count:{min:0,max:1},weight:4,params:{h:{min:16,max:24}}}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"dusk",version:1},{id:"snow",version:3}]},JS={kind:"terrain-template",id:"mesas",version:1,weight:3,tags:["balanced","mesa"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"balanced",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"terrace",version:1},weight:3,params:{h:{min:24,max:28},t:{min:8,max:16}}},{block:{id:"ledge",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:24},t:{min:200,max:400}}},{block:{id:"terrace",version:1},zone:"upper",count:{min:2,max:2},weight:6,params:{h:{min:16,max:24},t:{min:8,max:12}}},{block:{id:"pillar",version:1},zone:"gap",count:{min:1,max:1},weight:4},{block:{id:"ledge",version:1},zone:"upper",count:{min:1,max:1},weight:3,params:{h:{min:16,max:24}}}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"canyon",version:2}]},ZS={kind:"terrain-template",id:"ridge",version:1,weight:2,tags:["balanced","ledges"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"balanced",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"ledge",version:1},weight:3,params:{h:{min:20,max:28}}},{block:{id:"island",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:22},t:{min:200,max:400}}},{block:{id:"arch",version:1},zone:"gap",count:{min:1,max:1},weight:5},{block:{id:"ledge",version:1},zone:"upper",count:{min:3,max:3},weight:4,params:{h:{min:16,max:24}}},{block:{id:"pillar",version:1},zone:"lower",count:{min:0,max:1},weight:2}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"dusk",version:1},{id:"meadow",version:2}]},tm=VS(n=>Ei.has(n)),QS=tm.blocks,nm=tm.templates,ew=[YS,XS,WS,$S,HS,qS],tw=[Op,jS,KS,JS,ZS];for(const n of ew)QS.register(n);for(const n of tw)nm.register(n);function nw(n){const e=xy(n),t=e&&nm.find(e);return t?.preferredThemes?.length?t.preferredThemes.map(i=>i.id):null}const Kc=.55,iw="#8c8c8c",im=n=>[n[0]*Kc,n[1]*Kc,n[2]*Kc],eo=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,Jc=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055;function lf(n,e,t){let i=Un(n.color);return e&&(i=pS(i,Un(e.color),e.strength*(1-n.depth))),Jd(t?im(i):i)}function rw(n,e){if(e==="light")return n;const t=eo(Un(iw)[0]),i=Un(n);return Jd([Jc(eo(i[0])*t),Jc(eo(i[1])*t),Jc(eo(i[2])*t)])}const Zo=80,Lo=3,sw=48,aw=-80,ow=n=>-20-(1-n)*30;function df(n,e,t){const i=e&&t?t:n,r=[],s=[],a=[];i.forEach((c,l)=>{const u=Yd(e&&!t?im(Un(c.color)):Un(c.color));if(r.push(-.5,.5-c.at,0,.5,.5-c.at,0),s.push(...u,...u),l){const h=(l-1)*2;a.push(h,h+2,h+1,h+1,h+2,h+3)}});const o=new Vt;return o.setAttribute("position",new Ct(r,3)),o.setAttribute("color",new Ct(s,3)),o.setIndex(a),o}function Zc(n,e){const t=n.period??Zo,i=t*Lo,r=sw*Lo*2,s=n.floorY??n.baseY-60,a=new Float32Array((r+1)*6),o=[];for(let l=0;l<=r;l++){const u=-i+l/r*2*i;if(a.set([u,s,0,u,Math.max(s,n.baseY+e(u)),0],l*6),l){const h=(l-1)*2;o.push(h,h+1,h+2,h+1,h+3,h+2)}}const c=new Vt;return c.setAttribute("position",new kn(a,3)),c.setIndex(o),c}function cw(n){const e=n.period??Zo,t=Po(n.seed),i=n.size??8,r=[],s=[],a=Array.from({length:n.frequency},(l,u)=>({x:(u+t()*.6+.2)/n.frequency*e,y:n.baseY+t()*n.amplitude,w:i*(.7+t()*.6)})),o=(l,u,h,d)=>{const p=r.length/3;r.push(l,u,0);for(let g=0;g<10;g++){const b=g/10*Math.PI*2;r.push(l+Math.cos(b)*h,u+Math.sin(b)*d,0)}for(let g=0;g<10;g++)s.push(p,p+1+g,p+1+(g+1)%10)};for(let l=-Lo;l<Lo;l++)for(const u of a){const h=u.x+l*e;o(h,u.y,u.w/2,u.w*.17),o(h-u.w*.27,u.y-u.w*.04,u.w*.26,u.w*.12),o(h+u.w*.25,u.y-u.w*.03,u.w*.3,u.w*.13)}const c=new Vt;return c.setAttribute("position",new Ct(r,3)),c.setIndex(s),c}function lw(n){const e=n.period??Zo;if(n.shape==="clouds")return cw(n);if(n.shape==="band")return Zc(n,()=>0);const t=Po(n.seed);if(n.shape==="hills"){const r=[t(),t(),t()],s=[.6,.3,.1];return Zc(n,a=>{let o=0;for(let c=0;c<3;c++)o+=s[c]*Math.sin(2*Math.PI*((c+1)*n.frequency*a/e+r[c]));return n.amplitude*(.5+.5*o)})}const i=Array.from({length:n.frequency*3},()=>.2+t()*.8);return Zc(n,r=>{const s=(r/e%1+1)%1*i.length,a=Math.floor(s),o=s-a;return n.amplitude*(i[a%i.length]*(1-o)+i[(a+1)%i.length]*o)})}class dw{group=new Zt;sky;layers=[];ax=0;ay=0;dark;theme;constructor(e,t=!1){this.dark=t,this.theme=e,this.sky=new ft(df(e.sky.stops,t,e.sky.darkStops),new Yi({vertexColors:!0,depthWrite:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.position.z=aw,this.group.add(this.sky);for(const i of e.parallax){const r=i.opacity>=1,s=new Yi({color:lf(i,e.haze,t),transparent:!r,opacity:i.opacity,depthWrite:r,side:si}),a=new ft(lw(i),s);a.frustumCulled=!1,a.position.z=ow(i.depth),a.renderOrder=-5+Math.round(i.depth*4),this.group.add(a),this.layers.push({mesh:a,def:i,k:1-i.depth,period:i.period??Zo})}}get layerCount(){return this.layers.length}get meshes(){return[this.sky,...this.layers.map(e=>e.mesh)]}setDark(e){if(e!==this.dark){this.dark=e,this.sky.geometry.dispose(),this.sky.geometry=df(this.theme.sky.stops,e,this.theme.sky.darkStops);for(const t of this.layers)t.mesh.material.color.set(lf(t.def,this.theme.haze,e))}}anchor(e){this.ax=e.position.x,this.ay=e.position.y}update(e,t,i){const r=e.position.x,s=e.position.y,a=r-this.ax,o=s-this.ay;this.sky.position.x=r,this.sky.position.y=s,this.sky.scale.x=(e.right-e.left)*1.05,this.sky.scale.y=(e.top-e.bottom)*1.05;for(let c=0;c<this.layers.length;c++){const l=this.layers[c],u=i?0:l.def.drift??0,h=u?(t*u%l.period+l.period)%l.period:0;l.mesh.position.x=a*l.k+h,l.mesh.position.y=o*l.k}}dispose(){this.group.removeFromParent();for(const e of this.meshes)e.geometry.dispose(),e.material.dispose();this.layers.length=0,this.group.clear()}}const hf=1e3,hw=400,uw=-.1,Qc=.15;function fw(n,e=0){return{left:e-hf,right:e+hf,top:n,bottom:n-hw}}const el=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,tl=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055;function pw(n,e){const t=Un(rw(n.terrain.bedrock,e));return Jd([tl(el(t[0])*Qc),tl(el(t[1])*Qc),tl(el(t[2])*Qc)])}function mw(n,e,t){return e>=t?t/2:Math.min(Math.max(n,e/2),t-e/2)}function gw(n,e){const t=Math.max(1,e.maxTiers??4)-1;return n.y===void 0||e.minTop===void 0||!e.tierPx?t:Math.max(0,Math.min(t,Math.floor((n.y-(n.height??0)-e.minTop)/e.tierPx)))}const xw=(n,e,t)=>Math.abs(n.x-e.x)<(n.width+e.width)/2+t;function _w(n,e,t){const i=t.gap??2,r=t.hysteresis??6,s=Math.max(1,t.maxTiers??4),a=[],o=new Map;for(const c of n){const l={x:mw(c.x,c.width,t.viewWidth),width:c.width,y:c.y,height:c.height},u=t.tierPx,h=(f,x)=>{const M=f.y-x*u;return[M-(f.height??u),M]},d=(f,x,M)=>{if(!xw(l,f,M))return!1;if(l.y===void 0||f.y===void 0||!u)return f.tier===x;const[S,R]=h(l,x),[T,A]=h(f,f.tier);return S<A&&T<R},p=gw(c,{...t,maxTiers:s}),g=(f,x)=>!a.some(M=>d(M,f,x)),b=e.get(c.id);let m=-1;for(let f=0;f<=p;f++)if(g(f,i)){m=f;break}if(b!==void 0&&b<=p&&b!==m&&g(b,i-r)&&(m<0||b<m||!g(m,i+r))&&(m=b),m<0){let f=1/0;for(let x=0;x<=p;x++){const M=a.filter(S=>d(S,x,i)).length;M<f&&(f=M,m=x)}}a.push({...l,tier:m}),o.set(c.id,{x:l.x,tier:m})}return o}function vw(n){return n.version==="skirmish-1"||n.version==="skirmish-2"||n.version==="skirmish-3"}function bw(n,e){const t=vw(n),i=!t&&Yn(n)?n:null,r=t?"skirmish":i?"volley":"duel",s=t?n.epoch:i?.epoch??0,a=t?n.self:n.seat,o=JSON.stringify(n.version==="skirmish-2"||n.version==="skirmish-3"?[r,n.id,s,n.version,Bd(n.version).version]:[r,n.id,s]),c=t?n.members.map((h,d)=>({actorId:h.actorId,lifeId:h.lifeId,teamId:null,label:h.kind==="npc"?`NPC ${d+1}`:null,slotId:h.slotId})):n.seats.map(h=>({actorId:h.actorId,lifeId:"lifeId"in h?h.lifeId:h.actorId===e?a.lifeId:null,teamId:"teamId"in h?h.teamId:null,label:null,slotId:null})),l=t?n.action?.aim?{...n.action.aim,id:n.action.id,actorId:n.action.actorId,lifeId:n.action.lifeId,epoch:n.action.epoch,roundId:n.action.roundId}:null:n.action;let u=null;if(t){const h=n.effect;h&&(u={identity:JSON.stringify([o,h.action.actorId,h.action.lifeId,h.action.roundId,h.action.id]),actionId:h.action.id,actorId:h.action.actorId,aim:h.action.aim?{...h.action.aim}:null,point:h.contact?.point?{x:h.contact.point.x,y:h.contact.point.y}:null,delta:h.delta,motion:h.motion,startedAt:h.startedAt,endsAt:h.endsAt})}else{const h=n.effect;h&&(u={identity:JSON.stringify([o,h.actorId,h.lifeId,"roundId"in h?h.roundId:null,h.actionId]),actionId:h.actionId,actorId:h.actorId,aim:n.action&&n.action.id===h.actionId?{arrow:n.action.arrow,angle:n.action.angle,power:n.action.power,facing:n.action.facing}:null,point:h.contact?.point?{x:h.contact.point.x,y:h.contact.point.y}:null,delta:h.delta,motion:h.motion,startedAt:h.startedAt,endsAt:h.endsAt})}return{format:r,id:n.id,revision:n.revision,epoch:s,worldKey:o,scopeKey:JSON.stringify([o,e,a.lifeId]),planningKey:t?JSON.stringify([o,e,a.lifeId,n.roundId]):Kb(n),sharedPlanning:t||!!i,state:n.state,phase:n.phase,terrain:n.terrain,actors:n.actors,seats:c,seat:{canAct:a.canAct,bombReady:a.bombReady,lifeId:a.lifeId},deadlineAt:n.deadlineAt,launchAt:n.launchAt,contactAt:n.contactAt,action:l,effect:u,pressure:i?.preset==="royale-shrink-1"?i.pressure:null,lockedPlan:t?n.locks.find(h=>h.actorId===e)?.plan??null:Jb(n,e),tuning:jo(n),wind:n.wind??0,layoutTemplate:t?n.layout?.template??null:null}}function yw(n,e){return!!n&&n.planningKey===e.planningKey&&e.state==="active"&&e.phase==="planning"&&e.seat.canAct}function Mw(n,e){return JSON.stringify([n.worldKey,e.actorId,e.lifeId,e.epoch,e.roundId,e.id,n.launchAt])}const to=16,Sw=2,uf=new Set,nl=$d,Bt=n=>document.getElementById(n),zt=(n,e,t=0)=>new F(n,e,t);class ww{constructor(e){this.canvas=e,this.belowWorld.frustumCulled=!1,this.scene.add(this.belowWorld),this.scene.add(this.terrainGroup,this.pressureGroup,this.fxGroup),this.motionQuery=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.reducedMotion=!!this.motionQuery?.matches,this.motionQuery?.addEventListener?.("change",this.onMotionChange),this.flash.visible=!1,this.flash.position.z=.9,this.fxGroup.add(this.flash),this.lastMarker.add(new ft(new Ld(.4,.62,28),new Yi({color:"#ff7a45",transparent:!0,opacity:.95,depthTest:!1})),new ft(new ca(.13,12),new Yi({color:"#ff7a45",depthTest:!1}))),this.lastMarker.visible=!1,this.lastMarker.renderOrder=5,this.scene.add(this.lastMarker),this.fxGroup.add(this.particleBatch.mesh),this.scene.add(this.hemi),this.sun.position.set(-8,20,12),this.scene.add(this.sun),this.applyBiome(this.basicBiome()),this.camera.position.set(0,8,55),this.camera.lookAt(0,8,0),this.rebuildTerrain(this.terrain);for(const t of["normal","bomb","teleport"])Bt(`combat-arrow-${t}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.arrow=t,this.updateControls())});for(const t of[-1,1])Bt(`combat-face-${t===1?"right":"left"}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim.facing=t,this.updateControls())});for(const t of["angle","power"])Bt(`combat-${t}`).addEventListener("input",()=>{!this.canAim()||this.draw||(this.aim=Za({...this.aim,angle:Number(Bt("combat-angle").value),power:Number(Bt("combat-power").value)/100}),this.updateControls())});for(const t of $u)Bt(t.id).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim=$c(this.aim,t.field,t.delta),this.updateControls())});Bt("combat-fire").addEventListener("click",()=>this.fire()),Bt("combat-overview").addEventListener("click",()=>{!this.draw&&this.state?.phase==="planning"&&this.frame(!0)}),this.canvas.addEventListener("pointerdown",t=>this.pointerDown(t)),this.canvas.addEventListener("pointermove",t=>this.pointerMove(t)),this.canvas.addEventListener("pointerup",t=>{if(!this.active||this.draw?.id!==t.pointerId)return;this.pointerMove(t);const i=this.draw?.valid;this.endDraw(!i),i&&this.fire()});for(const t of["pointercancel","lostpointercapture"])this.canvas.addEventListener(t,i=>{this.active&&this.draw?.id===i.pointerId&&this.cancelInput()})}canvas;scene=new $f;camera=new ba(-24,24,18,-10,.1,150);materials=new Map;terrainGroup=new Zt;belowWorld=new ft(new Ts(1,1),new oo({roughness:1,flatShading:!0}));chunks=new Map;terrain=Wc();terrainKey="";terrainWorld="";terrainMaterial=new oo({color:"#ffffff",roughness:1,flatShading:!0,vertexColors:!0});reducedMotion=!1;motionQuery=null;onMotionChange=e=>{this.reducedMotion=e.matches,e.matches&&(this.shake=null)};fxGroup=new Zt;particles=new QM(nl);particleBatch=new hS(nl);tint=new FM;homeCamera=new F;installedDigest="";arenaFrame=null;frameBoundary=null;hudMode="inline";flash=new ft(new ca(1,24),new Yi({color:"#fff2c4",transparent:!0,opacity:0,depthWrite:!1}));flashAge=1;shake=null;fxIdentity="";lastHealth=new Map;resync=!1;lastShot=new xM;lastMarker=new Zt;pressureGroup=new Zt;pressureKey="";actorLabels=new Map;labelKeys=new Map;labelWidths=new Map;labelTiers=new Map;labelHeights=new Map;labelTierPx=to;labelTierDirty=!1;hudBand={key:"",top:0};labels=document.getElementById("combat-actor-labels");lockAgain=!1;rigs=new Map;state=null;get tuning(){return this.state?.tuning??Ln}get wind(){return this.state?.wind??0}windIndicator=new yM(()=>document.getElementById("scene")?.parentElement);ownId=null;active=!1;draw=null;width=1;height=1;theme="light";biome=tf();palette=rf(this.biome);parallax=null;hemi=new tp("#fff4d8","#62765d",2.6);sun=new ip("#fff4d8",3);biomePin=TS(typeof location>"u"?"":location.search);aim={angle:29,power:.62,facing:1};arrow="normal";busy=!1;online=!1;serverNow=()=>Date.now();guide=document.getElementById("combat-guide");dots=Co(An).map(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","circle");return e.setAttribute("r",String(An.radiusPx)),e.setAttribute("stroke-width",String(An.outlinePx)),this.guide.append(e),e});onShot=()=>{};onDrawing=()=>{};material(e){let t=this.materials.get(e);return t||(t=new oo({color:e,roughness:1,flatShading:!0}),this.materials.set(e,t)),t}box(e,t,i,r,s,a,o,c){const l=new ft(new Ir(s,a,o),this.material(c));return l.position.set(t,i,r),e.add(l),l}beam(e,t,i,r,s){const a=this.box(e,0,0,0,r,1,r,s);return this.updateBeam(a,t,i),a}updateBeam(e,t,i){e.position.copy(t).add(i).multiplyScalar(.5),e.scale.y=t.distanceTo(i),e.quaternion.setFromUnitVectors(zt(0,1),i.clone().sub(t).normalize())}makeArrow(e){const t=new Zt;this.box(t,-.6,0,0,1.2,.045,.045,"#f3dfaa"),this.box(t,-1.08,0,0,.22,.17,.04,"#e9e6c8");const i=new ft(new va(.085,.24,4),this.material("#58685d"));return i.rotation.z=-Math.PI/2,i.position.x=-.12,t.add(i),e.add(t),t}makeRig(e){const t=new Zt;this.scene.add(t);const i=this.state?.format==="volley"?this.state.seats.find(d=>d.actorId===this.ownId)?.teamId:null,r=this.state?.format==="volley"?this.state.seats.find(d=>d.actorId===e.id)?.teamId:null,s=this.state?.format==="skirmish"?this.state.seats.find(d=>d.actorId===e.id)?.slotId:null,a=s?ho(s).hex:e.id===this.ownId?"#d19b58":i&&i===r?"#78ad75":"#6e98a0";for(const d of[-.3,.4])this.box(t,d,.47,0,.36,.8,.4,"#38473f");for(const d of[-.36,.46])this.box(t,d,.12,.12,.64,.24,.55,"#4c4938");this.box(t,0,1.53,0,.85,1.5,.6,a),this.box(t,0,1.07,.32,.95,.18,.12,"#6b6845"),this.box(t,0,(yn.head.minY+yn.head.maxY)/2,0,.65,yn.head.maxY-yn.head.minY,.6,"#eac795"),this.box(t,-.13,2.92,-.04,.95,.27,.76,"#4d6e57"),this.box(t,-.26,2.64,-.02,.23,.45,.65,"#4d6e57"),this.box(t,.32,2.65,.32,.08,.08,.07,"#34483c");const o=new Zt;t.add(o);const c=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let d=1;d<c.length;d++)this.beam(o,zt(...c[d-1]),zt(...c[d]),.075,"#78523c");const l=new Vt().setFromPoints([zt(0,-.92),zt(-.3,0),zt(0,.92)]);o.add(new ts(l,new fs({color:"#f1e7bf"})));const u=[this.beam(t,zt(0,2),zt(1,2),.23,"#eac795"),this.beam(t,zt(0,2),zt(1,2),.22,a),this.beam(t,zt(0,2),zt(1,2),.18,"#eac795")],h=this.box(t,0,0,.12,.19,.19,.19,"#eac795");return{root:t,bow:o,string:l,arms:u,hand:h,arrow:this.makeArrow(t),pose:{angle:29,pull:.51},release:0,fx:{lean:0,prevVy:null,landAge:9,landSpeed:0,hitAge:9,feet:null}}}disposeRig(e){this.scene.remove(e.root),e.root.traverse(t=>{if(t instanceof ft&&t.geometry.dispose(),t instanceof ts){t.geometry.dispose();const i=t.material;Array.isArray(i)||i.dispose()}})}placeBelowWorld(e){const t=fw(e.minY,e.minX+e.width*e.cell/2);this.belowWorld.position.set((t.left+t.right)/2,(t.top+t.bottom)/2,uw),this.belowWorld.scale.set(t.right-t.left,t.top-t.bottom,1)}recolorBelowWorld(){this.belowWorld.material.color.set(pw(this.biome,this.theme))}rebuildTerrain(e,t,i=uf){const r=In(e.version),s=r.chunkSize;if(!t){for(const o of this.chunks.values())this.terrainGroup.remove(o),o.geometry.dispose();this.chunks.clear(),this.placeBelowWorld(e)}const a=t??Array.from({length:r.maxChunks},(o,c)=>`${c%r.chunkColumns}:${Math.floor(c/r.chunkColumns)}`);for(const o of a){const c=this.chunks.get(o);c&&(this.terrainGroup.remove(c),c.geometry.dispose(),this.chunks.delete(o));const[l,u]=o.split(":").map(Number),h=[],d=[];let p=[1,1,1];const g=(m,f,x,M)=>{h.push(...m,...f,...x,...m,...x,...M);for(let S=0;S<6;S++)d.push(...p)},b=(m,f)=>m>=0&&f>=0&&m<e.width&&f<e.height&&e.cells[f*e.width+m]===1;for(let m=u*s;m<Math.min((u+1)*s,e.height);m++){const f=e.minY+m*e.cell,x=e.cell;for(let M=l*s;M<Math.min((l+1)*s,e.width);M++)if(b(M,m)){const S=z=>NM(z,m,e.width,e.height,i),R=ju(f+x/2,e.bedrockY,0,this.palette),T=M,A=S(M);for(;M+1<Math.min((l+1)*s,e.width)&&b(M+1,m)&&S(M+1)===A;)M++;p=Yd(A?LM(R):R);const v=e.minX+T*x,w=e.minX+(M+1)*x;g([v,f,.18],[w,f,.18],[w,f+x,.18],[v,f+x,.18]),g([w,f,-.8],[v,f,-.8],[v,f+x,-.8],[w,f+x,-.8]);for(let z=T;z<=M;z++){const C=e.minX+z*x;b(z,m+1)||g([C,f+x,.18],[C+x,f+x,.18],[C+x,f+x,-.8],[C,f+x,-.8]),b(z,m-1)||g([C,f,-.8],[C+x,f,-.8],[C+x,f,.18],[C,f,.18])}b(T-1,m)||g([v,f,-.8],[v,f,.18],[v,f+x,.18],[v,f+x,-.8]),b(M+1,m)||g([w,f,.18],[w,f,-.8],[w,f+x,-.8],[w,f+x,.18])}}if(h.length){const m=new Vt;m.setAttribute("position",new Ct(h,3)),m.setAttribute("color",new Ct(d,3)),m.computeVertexNormals();const f=new ft(m,this.terrainMaterial);this.chunks.set(o,f),this.terrainGroup.add(f)}}}setSnapshot(e,t,i){const r=bw(e,t),s=this.state;this.state=r,this.ownId=t,this.serverNow=i,this.draw&&(!this.canAim()||!yw(s,r))&&this.cancelInput(),(!s||s.scopeKey!==r.scopeKey)&&(this.lastHealth.clear(),this.cancelInput(),this.aim={angle:29,power:.62,facing:r.actors.find(c=>c.id===t)?.facing??1});const a=r.lockedPlan;a?.kind==="shot"&&a.aim&&(this.aim=Za({angle:a.aim.angle,power:a.aim.power,facing:a.aim.facing}),this.arrow=a.aim.arrow),this.syncBiome(r),this.syncTerrain(),this.syncPressure(),this.syncWind(),this.lastShot.noteLocked(a?.kind==="shot"?a.aim:null,this.serverNow()),this.lastShot.observe(r.scopeKey,t,r.effect??this.ownPendingShot(r,t)),s&&s.worldKey!==r.worldKey&&this.clearFx(),this.noteHealth(r);for(const[c,l]of this.rigs)(s?.worldKey!==r.worldKey||s?.seats.find(u=>u.actorId===c)?.lifeId!==r.seats.find(u=>u.actorId===c)?.lifeId)&&(this.disposeRig(l),this.rigs.delete(c));for(const c of r.actors)this.rigs.has(c.id)||this.rigs.set(c.id,this.makeRig(c));for(const[c,l]of this.rigs)r.actors.some(u=>u.id===c)||(this.disposeRig(l),this.rigs.delete(c));const o=!s||s.worldKey!==r.worldKey;this.publicV2()?lS(this.frameBoundary,this.boundaryOf(r))&&this.frame(!1,o):(o||r.phase==="planning"&&(s.planningKey!==r.planningKey||s.phase!=="planning"||s.actors.length!==r.actors.length))&&this.frame(!1,o),this.updateControls()}ownPendingShot(e,t){const i=e.action,r=e.actors.find(o=>o.id===t);if(e.format==="duel"||!i||i.actorId!==t||!r||e.contactAt===null)return null;const s={arrow:i.arrow,angle:i.angle,power:i.power,facing:i.facing},a=e.contactAt;try{const o=oM(this.terrain,e.actors,t,Vc(r,s,this.tuning,this.wind));return{actionId:i.id,actorId:t,aim:s,point:{x:o.point.x,y:o.point.y},startedAt:a}}catch{return null}}syncPressure(){const e=this.state,t=e?.pressure??null,i=JSON.stringify(t);if(i===this.pressureKey)return;this.pressureKey=i;for(const s of[...this.pressureGroup.children])this.pressureGroup.remove(s),s instanceof ts&&(s.geometry.dispose(),s.material.dispose());if(!t)return;const r=(s,a,o)=>{for(const c of[s,a]){const l=new Vt().setFromPoints([zt(c,-8,.5),zt(c,18,.5)]),u=o?new Xg({color:"#f3b747",dashSize:.5,gapSize:.35}):new fs({color:"#70bb9d"}),h=new ts(l,u);h.computeLineDistances(),this.pressureGroup.add(h)}};r(t.minX,t.maxX,!1),t.warning&&r(t.warning.minX,t.warning.maxX,!0)}clearFx(){this.particles.clear(),this.shake=null,this.flashAge=1,this.flash.visible=!1,this.fxIdentity="",this.lastHealth.clear(),this.particleBatch.clear(),this.tint.clear()}dispose(){this.clearFx(),this.lastMarker.traverse(e=>{e instanceof ft&&(e.geometry.dispose(),e.material.dispose())}),this.motionQuery?.removeEventListener?.("change",this.onMotionChange),this.particleBatch.dispose(),this.flash.geometry.dispose(),this.flash.material.dispose();for(const e of this.chunks.values())e.geometry.dispose();this.chunks.clear(),this.terrainMaterial.dispose(),this.scene.remove(this.belowWorld),this.belowWorld.geometry.dispose(),this.belowWorld.material.dispose();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.parallax?.dispose(),this.parallax=null}colorAt=e=>ju(e,this.terrain.bedrockY,0,this.palette);spawnImpact(e){if(this.particles.capacity=this.reducedMotion?EM:nl,nS(this.particles,e,Po(Yu(e.x,e.y,e.count)),this.reducedMotion,this.colorAt),!Jp(e))return;this.flash.position.set(e.x,e.y,.9),this.flash.scale.setScalar(e.extent*.6),this.flashAge=0;const t=this.camera.position.x,i=(this.camera.right-this.camera.left)/2,r=BM(e,Math.abs(e.x-t),i,this.reducedMotion);r>0&&(this.shake={age:0,amplitude:r})}updateFx(e,t,i){const r=e?.effect;if(r&&r.startedAt!==null&&t>=r.startedAt&&r.identity!==this.fxIdentity&&(this.fxIdentity=r.identity,kM(r.startedAt,t))){const a=OM(r.delta.removed,this.terrain);a&&this.spawnImpact(a)}const s=this.tint.due(t);if(s&&this.rebuildTerrain(this.terrain,s),this.particles.step(i),this.particleBatch.update(this.particles.items),this.flashAge<1){this.flashAge+=i/.18;const a=this.flash.material;this.flash.visible=this.flashAge<1,a.opacity=Math.max(0,.85*(1-this.flashAge))}this.shake&&(this.shake.age+=i,this.shake.age>=qd&&(this.shake=null))}noteHealth(e){if(this.online&&!this.resync)for(const t of ZM(this.lastHealth,e.actors)){const i=this.rigs.get(t);i&&(i.fx.hitAge=0)}this.online&&(this.resync=!1),this.lastHealth=new Map(e.actors.map(t=>[t.id,t.health]))}actorFx(e,t,i,r,s,a,o){const c=e.fx;c.hitAge+=s,c.landAge+=s,KM(c.hitAge)&&c.feet&&!o?i=c.feet:c.feet={x:i.x,y:i.y};const l=r?.vy??0,u=r?$M(c.prevVy,l):0;u>0&&!this.reducedMotion&&(c.landAge=0,c.landSpeed=u),u>0&&iS(this.particles,i.x,i.y,u,Po(Yu(i.x,i.y,Math.round(u*10))),this.reducedMotion),c.prevVy=r?l:null,c.lean=XM(c.lean,r?WM(r.vx,l):0,s);const h=this.reducedMotion||o,d=h?0:c.lean+JM(c.hitAge,a,!1);return e.root.rotation.z=Math.abs(d)<1e-4?0:d,e.root.scale.y=h?1:qM(c.landAge,c.landSpeed).sy,{feet:i}}setLockAgain(e){this.lockAgain=e,this.updateControls()}syncTerrain(){if(!this.state)return;const e=this.state,t=e.effect;let i=`${e.worldKey}:${e.terrain.version}:${e.terrain.revision}`;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt&&(i+=`:${t.identity}`),i===this.terrainKey)return;let s=Gp(e.terrain),a=uf;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt){s={...s,cells:s.cells.slice()};for(const c of t.delta.removed)s.cells[c]=0;this.serverNow()-t.startedAt<Ku&&(a=new Set(t.delta.removed))}if(this.terrainWorld!==e.worldKey||this.terrain.version!==s.version)this.rebuildTerrain(s,void 0,a);else{const c=In(s.version),l=[];for(let h=0;h<s.cells.length;h++)s.cells[h]!==this.terrain.cells[h]&&l.push(h);const u=fp(l,s.width,c.chunkSize);this.rebuildTerrain(s,pp([...u,...this.tint.release()],c.chunkColumns,c.chunkRows),a)}{const c=In(s.version);this.tint.set(UM(a,s.width,c.chunkSize,c.chunkColumns,c.chunkRows),t&&t.startedAt!==null?t.startedAt+Ku:0)}this.terrain=s,this.terrainKey=i,this.terrainWorld=e.worldKey,this.installedDigest=_M(s)}clearSnapshot(){this.cancelInput(),this.lastShot.clear(),this.lastMarker.visible=!1,this.state=null,this.windIndicator.hide(),this.ownId=null,this.lockAgain=!1,this.labels.replaceChildren(),this.actorLabels.clear(),this.labelKeys.clear(),this.labelWidths.clear(),this.labelHeights.clear(),this.labelTiers.clear(),this.labelTierPx=to,this.labelTierDirty=!1,this.syncPressure();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.terrainKey="",this.terrainWorld="",this.installedDigest="",this.arenaFrame=null,this.frameBoundary=null,this.clearFx(),this.applyBiome(this.basicBiome()),this.rebuildTerrain(Wc()),this.terrain=Wc(),this.frame(),this.updateControls()}setTransport(e,t){e||(this.lastHealth.clear(),this.resync=!0),this.online=e,this.busy=t,this.canAim()||this.cancelInput(),this.updateControls()}syncWind(){if(!this.active||!this.state){this.windIndicator.hide();return}this.windIndicator.update(this.state.wind,Qi(this.state.tuning))}activate(){this.active=!0,this.syncWind(),this.updateControls(),this.frame()}deactivate(){this.cancelInput(),this.active=!1,this.windIndicator.hide(),this.guide.style.visibility="hidden",this.labels.replaceChildren(),this.actorLabels.clear(),this.labelKeys.clear(),this.labelWidths.clear(),this.labelHeights.clear(),this.labelTiers.clear(),this.labelTierPx=to,this.labelTierDirty=!1}setTheme(e){this.theme=e,this.terrainMaterial.color.set(e==="dark"?"#8c8c8c":"#ffffff"),this.recolorBelowWorld(),this.parallax?.setDark(e==="dark")}basicBiome(){return this.biomePin?Ei.latest(this.biomePin):tf()}syncBiome(e){const t=e.format==="skirmish"&&In(e.terrain.version).version==="arena-2";this.applyBiome(t?AS(e.worldKey,{pin:this.biomePin,preferred:nw(e.layoutTemplate)}):this.basicBiome())&&(this.terrainWorld="")}applyBiome(e){if(e===this.biome&&this.parallax)return!1;this.biome=e,this.palette=rf(e),this.recolorBelowWorld(),this.parallax?.dispose(),this.parallax=new dw(e,this.theme==="dark"),this.scene.add(this.parallax.group),this.parallax.anchor(this.camera);const t=e.light;this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.sun.color.set(t.sun),this.sun.intensity=t.sunIntensity;const i=e.ui??{},r=(s,a,o)=>{o?s.style.setProperty?.(a,o):s.style.removeProperty?.(a)};return r(this.labels,"--label-ink",i.labelInk),r(this.labels,"--label-bg",i.labelBg),r(this.guide,"--guide-fill",i.guideFill),r(this.guide,"--guide-stroke",i.guideStroke),!0}resize(e,t){this.cancelInput(),this.width=e,this.height=t,this.guide.setAttribute("viewBox",`0 0 ${e} ${t}`),this.frame()}setHudMode(e){e!==this.hudMode&&(this.hudMode=e,this.state&&this.publicV2()&&this.frame())}publicV2(){return this.state?.format==="skirmish"&&In(this.terrain.version).version==="arena-2"}boundaryOf(e){return{worldKey:e.worldKey,profile:this.terrain.version,epoch:e.epoch,width:this.width,height:this.height,mode:this.hudMode}}frameArena(e){const t=In(this.terrain.version);(!this.arenaFrame||this.arenaFrame.worldKey!==e.worldKey)&&(this.arenaFrame={worldKey:e.worldKey,bounds:aS(t.bounds,e.actors.filter(r=>!r.eliminated).map(r=>({x:r.feet.x,y:r.feet.y})),yn,rS(this.tuning,yn.nock.x,An))});const i=cS(this.arenaFrame.bounds,this.width,this.height,Qp(this.width,this.height,this.hudMode));Object.assign(this.camera,{left:-i.halfWidth,right:i.halfWidth,top:i.halfHeight,bottom:-i.halfHeight}),this.camera.position.set(i.centerX,i.centerY,55),this.camera.lookAt(i.centerX,i.centerY,0),this.camera.updateProjectionMatrix(),this.parallax?.anchor(this.camera),this.frameBoundary=this.boundaryOf(e)}frame(e=!1,t=!1){if(this.draw)return;if(this.state&&this.publicV2()){this.frameArena(this.state);return}if(this.arenaFrame=null,this.frameBoundary=null,!t&&this.state&&this.state.phase!=="planning"&&this.state.state==="active")return;const i=this.state?.actors??[],r=yn.nock.x+(this.tuning.shotMinSpeed+this.tuning.shotExtraSpeed)*(An.start+An.duration)+1,s=e||!i.length?-32:Math.min(...i.map(b=>b.feet.x))-r,a=e||!i.length?32:Math.max(...i.map(b=>b.feet.x))+r,o=e?-8:Math.min(0,...i.map(b=>b.feet.y))-2,c=e?18:Math.max(9,...i.map(b=>b.feet.y+yn.height+4)),l=this.state?.sharedPlanning?Math.min(.25,2*(An.radiusPx+An.outlinePx)/this.width):0,u=this.width/this.height,h=Math.max(a-s,(c-o)*u)/(1-l),d=h/u,p=(s+a)/2,g=(o+c)/2;Object.assign(this.camera,{left:-h/2,right:h/2,top:d/2,bottom:-d/2}),this.camera.position.set(p,g,55),this.camera.lookAt(p,g,0),this.camera.updateProjectionMatrix(),this.parallax?.anchor(this.camera)}canAim(){return this.active&&this.online&&!this.busy&&!!this.state?.seat.canAct&&this.state.deadlineAt!==null&&this.serverNow()<this.state.deadlineAt}get hasRoom(){return this.state!==null}get drawing(){return!!this.draw}cancelInput(){this.endDraw(!0)}endDraw(e){if(!this.draw)return;const t=this.draw;this.draw=null,e&&(this.aim=t.previous),this.canvas.hasPointerCapture(t.id)&&this.canvas.releasePointerCapture(t.id),Bt("combat-drag-marker").hidden=!0,this.onDrawing(!1),this.updateControls()}pointerDown(e){if(!this.active)return;if(this.draw){e.pointerId!==this.draw.id&&this.cancelInput();return}if(!this.canAim()||!e.isPrimary||e.button!==0)return;e.preventDefault();const t=this.canvas.getBoundingClientRect();this.draw={id:e.pointerId,x:e.clientX,y:e.clientY,width:t.width,height:t.height,previous:{...this.aim},valid:!1},this.canvas.setPointerCapture(e.pointerId),this.canvas.focus({preventScroll:!0});const i=Bt("combat-drag-marker");i.style.left=`${e.clientX-t.left}px`,i.style.top=`${e.clientY-t.top}px`,i.hidden=!1,this.onDrawing(!0),this.updateControls()}pointerMove(e){if(!this.active||this.draw?.id!==e.pointerId)return;const{x:t,y:i,width:r,height:s}=this.draw,a=e.clientX-t,o=e.clientY-i,c=this.state?.format==="skirmish"?Yb(a,o,r,s):$b(a,o,r,s,this.aim.facing);this.draw.valid=!!c,c&&(this.aim=Za({facing:this.aim.facing,...c})),this.updateControls()}keydown(e){if(this.active){if(e.code==="Escape"){this.cancelInput();return}!this.canAim()||this.draw||(e.code==="Space"?(e.preventDefault(),e.repeat||this.fire()):["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.aim=$c($c(this.aim,"angle",e.code==="ArrowLeft"?-1:e.code==="ArrowRight"?1:0),"power",e.code==="ArrowUp"?2:e.code==="ArrowDown"?-2:0),this.updateControls()))}}fire(){if(!this.canAim()||this.draw||this.arrow==="bomb"&&!this.state?.seat.bombReady)return;const e=Za(this.aim);this.onShot(this.arrow,e)}updateControls(){Bt("combat-fire").textContent=this.state?.sharedPlanning?this.lockAgain?"Lock again":"Lock arrow":"Fire arrow";const e=!this.canAim()||!!this.draw;for(const r of["fire","angle","power","face-left","face-right","arrow-normal","arrow-bomb","arrow-teleport",...$u.map(s=>s.id.slice(7))])Bt(`combat-${r}`).disabled=e||r==="arrow-bomb"&&!this.state?.seat.bombReady;for(const r of["normal","bomb","teleport"])Bt(`combat-arrow-${r}`).setAttribute("aria-pressed",String(this.arrow===r));for(const r of[-1,1])Bt(`combat-face-${r===1?"right":"left"}`).setAttribute("aria-pressed",String(this.aim.facing===r));Bt("combat-angle").value=pM(this.aim.angle),Bt("combat-power").value=mM(this.aim.power),Bt("combat-angle-value").textContent=jp(this.aim.angle),Bt("combat-power-value").textContent=Kp(this.aim.power);const t=this.lastShot.shot?.aim,i=Bt("combat-last-shot");i.hidden=!t,i.textContent=t?gM(t):"",Bt("combat-bomb-status").textContent=this.state?.seat.bombReady?"Bomb ready":"Bomb reloads after your next personal opportunity.",Bt("combat-overview").disabled=!!this.draw||this.state?.phase!=="planning"}hudBottom(){const e=document.getElementById("arena-hud");if(!e||e.hidden||typeof this.labels.getBoundingClientRect!="function")return 0;const t=["arena-priority","arena-clock"].map(r=>document.getElementById(r)),i=`${this.width}x${this.height}|${t.map(r=>r?.childElementCount??0).join()}`;if(this.hudBand.key!==i){const r=this.labels.getBoundingClientRect().top;let s=0;for(const a of t){if(!a||a.hidden||typeof a.getBoundingClientRect!="function")continue;const o=a.getBoundingClientRect();o.height>0&&(s=Math.max(s,o.bottom-r))}this.hudBand={key:i,top:s}}return this.hudBand.top}render(e,t){if(!this.active)return;const i=this.state,r=this.serverNow();this.syncTerrain(),this.updateFx(i,r,t);let s;const a=i?.effect&&i.effect.startedAt!==null?qb(i.effect.motion,i.effect.startedAt,r):null;for(const x of i?.actors??[]){const M=this.rigs.get(x.id),S=a?.find(W=>W.actorId===x.id)?.feet??x.feet,R=i?.action?.actorId===x.id?i.action:null,T=x.id===this.ownId&&!R,A=R??(T?this.aim:{angle:29,power:.62,facing:x.facing}),v=this.actorFx(M,x,S,i?.effect&&i.effect.startedAt!==null?VM(i.effect.motion,i.effect.startedAt,r,x.id):null,t,A.facing,!!R);M.root.position.set(v.feet.x,v.feet.y,0),M.root.scale.x=A.facing,M.root.visible=!x.eliminated,T&&(s=x),M.pose=Xp(M.pose,{angle:A.angle,pull:.2+A.power*.5},t),M.release+=((R?1:0)-M.release)*(1-Math.exp(-18*t));const w=Ro(M.pose,M.release),z=(W,k=.12)=>zt(W.x+7.72,W.y-.08,k),C=M.pose.angle*Math.PI/180;M.bow.position.copy(z(w.bow)),M.bow.rotation.z=C;const U=M.string.attributes.position;U.setXYZ(1,(w.nock.x-w.bow.x)*Math.cos(C)+(w.nock.y-w.bow.y)*Math.sin(C),0,0),U.needsUpdate=!0,this.updateBeam(M.arms[0],zt(.02,2.22,.42),z({x:w.bow.x+Math.cos(C)*.37,y:w.bow.y+Math.sin(C)*.37})),this.updateBeam(M.arms[1],zt(-.23,2.22,.45),z(w.elbow,.28)),this.updateBeam(M.arms[2],z(w.elbow,.28),z(w.hand)),M.hand.position.copy(z(w.hand));const B=z({x:w.nock.x+Math.cos(C)*1.2,y:w.nock.y+Math.sin(C)*1.2});if(M.arrow.position.copy(B),M.arrow.rotation.z=C,M.arrow.visible=!0,R&&i?.launchAt!==null&&i?.launchAt!==void 0&&r>=i.launchAt){const W=Vc(x,A,this.tuning,this.wind),k=Math.max(0,(Math.min(r,i.contactAt??1/0)-i.launchAt)/1e3),H={tip:{x:x.feet.x+B.x*A.facing,y:x.feet.y+B.y},angle:A.facing===1?C:Math.PI-C},O=Mw(i,R);M.flightId!==O&&(M.flightId=O,M.held=H);const Z=Qs(W,k,M.held??H);M.arrow.position.set((Z.position.x-S.x)*A.facing,Z.position.y-S.y,.12),M.arrow.rotation.z=A.facing===1?Z.angle:Math.PI-Z.angle,M.arrow.visible=i.phase!=="settling"}}if(this.guide.style.visibility=s&&this.canAim()&&(!this.draw||this.draw.valid)?"visible":"hidden",s){const x=this.rigs.get(s.id),M=Vc(s,this.aim,this.tuning,this.wind),S=x.pose.angle*Math.PI/180,R=Ro(x.pose),T={tip:{x:s.feet.x+(R.nock.x+7.72+Math.cos(S)*1.2)*this.aim.facing,y:s.feet.y+R.nock.y-.08+Math.sin(S)*1.2},angle:this.aim.facing===1?S:Math.PI-S};Co(An).forEach((A,v)=>{const w=Qs(M,A,T).position,z=zt(w.x,w.y,.1).project(this.camera);this.dots[v].setAttribute("cx",String((z.x+1)*this.width/2)),this.dots[v].setAttribute("cy",String((1-z.y)*this.height/2))})}for(const[x,M]of this.actorLabels)i?.actors.some(S=>S.id===x)||(M.remove(),this.actorLabels.delete(x),this.labelKeys.delete(x),this.labelWidths.delete(x),this.labelHeights.delete(x),this.labelTiers.delete(x),this.labelTierDirty=!0);const o=this.width<640,c=i?.sharedPlanning?[...new Set(i.seats.map(x=>x.teamId).filter(x=>x!==null))]:[],l=[];if((i?.actors??[]).forEach((x,M)=>{let S=this.actorLabels.get(x.id);S||(S=document.createElement("span"),this.actorLabels.set(x.id,S),this.labels.append(S));const R=a?.find(k=>k.actorId===x.id)?.feet??x.feet,T=zt(R.x,R.y+yn.height+.4,.2).project(this.camera),A=i.seats.find(k=>k.actorId===x.id),v=A&&"teamId"in A&&typeof A.teamId=="string"?` · ${String.fromCharCode(65+c.indexOf(A.teamId))}`:"",w=x.id===this.ownId,z=A?.slotId?ho(A.slotId).symbol:"",C=`${w?"You":A?.label??`#${M+1}`}${v}${o?"":` · ${x.eliminated?"out":x.health}`}`,U=`${w}|${z}|${C}`;if(this.labelKeys.get(x.id)!==U){S.className="combat-actor-label",S.dataset.actorId=x.id,S.dataset.own=String(w),S.style.zIndex=w?"1":"",A?.slotId?(S.style.borderLeft=`5px solid ${ho(A.slotId).hex}`,S.dataset.slot=A.slotId,S.dataset.symbol=z):(S.style.borderLeft="",delete S.dataset.slot,delete S.dataset.symbol),S.textContent=C;const k=S.offsetWidth;this.labelWidths.set(x.id,k),this.labelHeights.set(x.id,S.offsetHeight),this.labelTierDirty=!0,k>0&&this.labelKeys.set(x.id,U)}const B=(1-T.y)*this.height/2,W={id:x.id,x:(T.x+1)*this.width/2,width:this.labelWidths.get(x.id)??0,y:B,height:this.labelHeights.get(x.id)??0};(w?l.unshift.bind(l):l.push.bind(l))({id:x.id,label:S,y:B,box:W})}),this.labelTierDirty){const x=Math.max(0,...this.labelHeights.values());this.labelTierPx=x>0?x+Sw:to,this.labelTierDirty=!1}const u=this.labelTierPx,h=_w(l.map(x=>x.box),this.labelTiers,{viewWidth:this.width,tierPx:u,minTop:this.hudBottom()});this.labelTiers=new Map([...h].map(([x,M])=>[x,M.tier]));for(const x of l){const M=h.get(x.id);x.label.style.left=`${M.x}px`,x.label.style.top=`${x.y-M.tier*u}px`}const d=this.lastShot.shot;this.lastMarker.visible=!!d&&this.lastShot.markerVisible(r),d&&this.lastMarker.position.set(d.impact.x,d.impact.y,.7),e.setClearColor(this.theme==="dark"?"#202f36":"#dce8df");const p=this.shake?GM(this.shake.age,this.shake.amplitude):null,g=this.homeCamera.copy(this.camera.position);p&&this.camera.position.set(g.x+p.x,g.y+p.y,g.z),this.parallax?.update(this.camera,performance.now()/1e3,this.reducedMotion),e.render(this.scene,this.camera),this.camera.position.copy(g);const b=this.ownId?this.rigs.get(this.ownId):null,m=i?.format==="skirmish"&&i.action?.actorId===this.ownId?i.action:null,f=b?{actorId:this.ownId,lifeId:i?.seat.lifeId,mirror:b.root.scale.x,bow:b.bow.getWorldPosition(zt(0,0)),arrow:{...b.arrow.getWorldPosition(zt(0,0)),visible:b.root.visible&&b.arrow.visible},action:m?{id:m.id,actorId:m.actorId,lifeId:m.lifeId,epoch:m.epoch,roundId:m.roundId,at:r,launchAt:i?.launchAt,contactAt:i?.contactAt}:null}:null;this.canvas.dataset.combat=JSON.stringify({revision:i?.revision,format:i?.format,epoch:i?.epoch,worldKey:i?.worldKey,state:i?.state,phase:i?.phase,actors:i?.actors,terrainRevision:i?.terrain.revision,terrainDigest:this.installedDigest,ownId:this.ownId,aim:this.aim,drawing:!!this.draw,view:[this.camera.left,this.camera.right,this.camera.top,this.camera.bottom],chunks:this.chunks.size,renderedOwn:f})}}const il=Object.freeze({commentChars:500,maxRound:1e5,idChars:80}),ua=Object.freeze([{id:"arrowDamage",label:"Arrow damage"},{id:"bombDamage",label:"Bomb damage and reach"},{id:"speedOfDeath",label:"How fast you died"},{id:"knockback",label:"Knockback"},{id:"groundDestruction",label:"Ground destruction"},{id:"aimingDifficulty",label:"Aiming difficulty"}]),ff=Object.freeze(["too-little","just-right","too-much"]),Ew=Object.freeze({"too-little":"Too little","just-right":"Just right","too-much":"Too much"});function rm(n){const e=Object.fromEntries(ua.map(t=>[t.id,{tooLittle:0,justRight:0,tooMuch:0}]));for(const t of n)for(const i of ua){const r=t[i.id];r==="too-little"?e[i.id].tooLittle++:r==="just-right"?e[i.id].justRight++:r==="too-much"&&e[i.id].tooMuch++}return e}const Aw=Object.freeze({arrowDamage:{tooMuch:[{field:"directBodyDamage",delta:-10},{field:"directHeadDamage",delta:-10}],tooLittle:[{field:"directBodyDamage",delta:10},{field:"directHeadDamage",delta:10}]},bombDamage:{tooMuch:[{field:"blastMidDamage",delta:-2},{field:"blastFarDamage",delta:-1},{field:"bombRadius",delta:-.25}],tooLittle:[{field:"blastMidDamage",delta:2},{field:"blastFarDamage",delta:1},{field:"bombRadius",delta:.25}]},speedOfDeath:{tooMuch:[{field:"blastNearDamage",delta:-5},{field:"impactThreshold",delta:1}],tooLittle:[{field:"blastNearDamage",delta:5},{field:"impactThreshold",delta:-1}]},knockback:{tooMuch:[{field:"directKnockbackHorizontal",delta:-1},{field:"directKnockbackUp",delta:-1},{field:"bombHorizontalImpulse",delta:-1},{field:"bombUpImpulse",delta:-1}],tooLittle:[{field:"directKnockbackHorizontal",delta:1},{field:"directKnockbackUp",delta:1},{field:"bombHorizontalImpulse",delta:1},{field:"bombUpImpulse",delta:1}]},groundDestruction:{tooMuch:[{field:"chipRadius",delta:-.25},{field:"craterRadius",delta:-.25}],tooLittle:[{field:"chipRadius",delta:.25},{field:"craterRadius",delta:.25}]},aimingDifficulty:{tooMuch:[{field:"shotGravity",delta:-1}],tooLittle:[{field:"shotGravity",delta:1}]}}),qs=Object.keys(ya),Tw=(n,e)=>qs.every(t=>n[t]===e[t]),Rw=n=>Math.round(n*1e4)/1e4;function Cw(n,e){const t=ya[n],i=Math.min(t.max,Math.max(t.min,Rw(e)));return t.integer?Math.round(i):i}function Iw(n){const e=Object.hasOwn(Jn,n.id)?Jn[n.id]:void 0;return e&&Tw(e,n)?e:Ln}const Pw=3;function Lw(n,e,t){const i=rm(e),r=Object.fromEntries(qs.map(p=>[p,n[p]])),s=[],a=new Map;for(const p of ua){const g=i[p.id],b=g.tooLittle+g.justRight+g.tooMuch,m=g.tooMuch-g.tooLittle;if(m===0||Math.abs(m)*2<b||t!==void 0&&t>=Pw&&b<2)continue;const f=m>0?"too-much":"too-little";s.push({question:p.id,direction:f});for(const x of Aw[p.id][m>0?"tooMuch":"tooLittle"])r[x.field]=Cw(x.field,r[x.field]+x.delta),a.has(x.field)||a.set(x.field,p.id)}r.blastMidDamage=Math.min(r.blastMidDamage,r.blastNearDamage),r.blastFarDamage=Math.min(r.blastFarDamage,r.blastMidDamage),r.shotMinSpeed+r.shotExtraSpeed>40&&(r.shotExtraSpeed=40-r.shotMinSpeed);const o={...r,id:"suggested"},c=qs.filter(p=>o[p]!==n[p]).map(p=>({field:p,from:n[p],to:o[p],question:a.get(p)}));if(!c.length)return{reasons:s,changes:c,override:null,profile:n};qo(o);const l=Iw(n),u={base:l.id};for(const p of qs)o[p]!==l[p]&&(u[p]=o[p]);const h=JSON.stringify(u),d=bp(h);if(!qs.every(p=>d[p]===o[p]))throw new RangeError("Suggested tuning did not round-trip.");return{reasons:s,changes:c,override:h,profile:d}}const Do=n=>n.replace(/([A-Z])/g," $1").toLowerCase().replace(/^./,e=>e.toUpperCase()),eh=n=>({key:n,label:Do(n),bound:n==="windMax"?vp:ya[n]}),Dw=Object.freeze(["chipRadius","windMax"].map(eh)),Nw=Object.freeze(Is.filter(n=>n!=="chipRadius"&&n!=="windMax").map(eh)),sm=Object.freeze(Object.keys(Jn)),Kn=(n,e)=>e==="windMax"?Qi(n):n[e];function Uw(n){let e=Ln.id,t=1/0,i=1/0;for(const r of sm){const s=Jn[r];let a=0,o=0;for(const c of Is){const l=Math.abs(Kn(s,c)-Kn(n,c));if(l===0)continue;const{min:u,max:h}=eh(c).bound;a++,o+=h>u?l/(h-u):0}(a<t||a===t&&o<i)&&(e=r,t=a,i=o)}return e}function am(n){const e=Object.hasOwn(Jn,n)?Jn[n]:Ln;return Object.fromEntries(Is.map(t=>[t,Kn(e,t)]))}function Fw(n,e){const t=am(n),i={};for(const r of Is){const s=(e[r]??"").trim();if(s==="")throw new Error(`Enter a value for ${Do(r).toLowerCase()}.`);const a=Number(s);if(!Number.isFinite(a))throw new Error(`${Do(r)} must be a number.`);a!==t[r]&&(i[r]=a)}try{kd(n,i)}catch(r){throw new Error(r instanceof RangeError?r.message.replace(/^Invalid tuning profile: /,""):"Those settings are not valid.")}return{kind:"tuning",preset:n,overrides:i}}function kw(n){return`${n.id.startsWith("custom-")?"Custom settings":`Preset ${n.id}`} · chip radius ${Kn(n,"chipRadius")} · wind ${Kn(n,"windMax")===0?"calm":`up to ${Kn(n,"windMax")}`}`}const pf=n=>wo(jo(n));let om=null;const cm="archery.suggestedTuning";function Ow(n,e){om=n;try{e?.setItem(cm,n??"")}catch{}}function mf(n){let e=om;if(e===null)try{e=n?.getItem(cm)??null}catch{e=null}if(!e)return null;try{const t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t))return null;const{base:i,...r}=t;return typeof i!="string"?null:(kd(i,r),{kind:"tuning",preset:i,overrides:r})}catch{return null}}function Bw(n,e,t){return n!==null&&n.roomId===e.roomId&&n.digest!==e.digest}function gf(n,e,t,i){return i?t?e:null:n}function xf(n,e,t){return n==="skip"?"Finishing the last action…":n==="error"?"":e!==null&&e===t?"No changes":"Saved"}function zw(n,e){let t;try{t=kd(n.preset,n.overrides)}catch{return null}const i=Is.filter(s=>Kn(t,s)!==Kn(e,s));return i.length?`Apply suggestion: ${i.slice(0,3).map(s=>s==="windMax"?`wind up to ${Kn(t,s)}`:`${Do(s).toLowerCase()} ${Kn(t,s)}`).join(", ")}${i.length>3?` +${i.length-3} more`:""}`:null}const Gw=1e4,Vw=30,Hw=8e3,Ww=1500,_f="archery.feedback.v1.",De=n=>document.getElementById(n),yi=(n,e="",t="")=>{const i=document.createElement(n);return e&&(i.textContent=e),t&&(i.className=t),i};function Xw(){try{return sessionStorage}catch{return null}}class $w{guest;store;roomId=null;finished=null;tuning=Ln;answers={};rating=null;sent=!1;lastPrivateId=null;pollTimer=null;polls=0;seenRounds=new Map;roundTimer=null;roundTarget=null;buttons=new Map;override=null;constructor(e,t=Xw()){this.guest=e,this.store=t,this.buildQuestions(),De("feedback-form").addEventListener("submit",r=>{r.preventDefault(),this.sendSurvey()}),De("feedback-skip").addEventListener("click",()=>this.closeSheet(!0)),De("feedback-close").addEventListener("click",()=>this.closeSheet(!0)),De("feedback-reopen").addEventListener("click",()=>{this.finished&&this.openSheet(this.finished,!0)}),De("feedback-copy").addEventListener("click",()=>{this.copyOverride()});const i=De("feedback-comment");i.maxLength=il.commentChars,i.addEventListener("input",()=>{De("feedback-count").textContent=`${i.value.length}/${il.commentChars}`});for(const r of["up","down"])De(`feedback-round-${r}`).addEventListener("click",()=>{this.sendRound(r)});De("feedback-round-dismiss").addEventListener("click",()=>this.hideRound())}recorded(e){try{return this.store?.getItem(_f+e)??null}catch{return null}}record(e,t){try{(t==="sent"||this.recorded(e)!=="sent")&&this.store?.setItem(_f+e,t)}catch{}}buildQuestions(){const e=De("feedback-questions");for(const i of ua){const r=yi("div","","feedback-question");r.setAttribute("role","group"),r.setAttribute("aria-label",i.label),r.append(yi("p",i.label,"feedback-label"));const s=yi("div","","feedback-choices");for(const a of ff){const o=yi("button",Ew[a]);o.type="button",o.setAttribute("aria-pressed","false"),o.dataset.question=i.id,o.dataset.answer=a,o.addEventListener("click",()=>this.choose(i.id,a)),this.buttons.set(`${i.id}:${a}`,o),s.append(o)}r.append(s),e.append(r)}const t=De("feedback-rating");for(let i=1;i<=5;i++){const r=yi("button",String(i));r.type="button",r.setAttribute("aria-pressed","false"),r.setAttribute("aria-label",`${i} out of 5`),r.addEventListener("click",()=>{this.rating=this.rating===i?null:i;for(const[s,a]of[...t.children].entries())a.setAttribute("aria-pressed",String(this.rating===s+1))}),t.append(r)}}choose(e,t){this.answers[e]===t?delete this.answers[e]:this.answers[e]=t;for(const i of ff)this.buttons.get(`${e}:${i}`).setAttribute("aria-pressed",String(this.answers[e]===i))}syncPrivate(e){const t=e?.roomId??null;if(t!==this.lastPrivateId){for(const i of[...this.seenRounds.keys()])i.startsWith("private:")&&this.seenRounds.delete(i);this.lastPrivateId=t}!e||e.state.state!=="finished"?(this.roomId!==null&&this.closeSheet(!1),this.finished=null,this.updateReopen()):this.finished?.roomId!==e.roomId?(this.finished=e,this.recorded(e.roomId)===null?this.openSheet(e,!1):this.updateReopen()):this.finished=e,e&&e.state.state==="active"&&this.observeRounds(`private:${e.roomId}:${e.state.epoch??0}`,{type:"private",roomId:e.roomId},e.state.epoch??0,e.state.completedRounds)}syncPublic(e){if(!e){for(const t of[...this.seenRounds.keys()])t.startsWith("public:")&&this.seenRounds.delete(t);return}this.observeRounds(`public:${e.arenaId}:${e.epoch}`,{type:"public",arenaId:e.arenaId,memberId:e.memberId},e.epoch,e.completedRounds)}observeRounds(e,t,i,r){if(r===void 0||!Number.isSafeInteger(r))return;const s=this.seenRounds.get(e);this.seenRounds.set(e,r),s!==void 0&&r>s&&r>0&&this.offerRound(t,i,r),this.seenRounds.size>16&&this.seenRounds.delete(this.seenRounds.keys().next().value)}updateReopen(){De("feedback-reopen").hidden=this.finished===null||this.roomId!==null}openSheet(e,t){this.roomId=e.roomId,this.tuning=e.state.tuning??Ln,this.answers={},this.rating=null,this.sent=this.recorded(e.roomId)==="sent";for(const r of this.buttons.values())r.setAttribute("aria-pressed","false");for(const r of De("feedback-rating").children)r.setAttribute("aria-pressed","false");De("feedback-comment").value="",De("feedback-count").textContent=`0/${il.commentChars}`,De("feedback-status").textContent="";const i=t||this.sent;De("feedback-form").hidden=i,De("feedback-skip").hidden=i,De("feedback-sheet").hidden=!1,De("feedback-summary").hidden=!1,this.renderSummary([],0),this.updateReopen(),this.stopPolling(),this.polls=0,this.refresh(),this.pollTimer=setInterval(()=>{++this.polls>Vw?this.stopPolling():this.refresh()},Gw)}closeSheet(e){e&&this.roomId&&this.record(this.roomId,this.sent?"sent":"dismissed"),this.stopPolling(),this.roomId=null,De("feedback-sheet").hidden=!0,this.updateReopen()}stopPolling(){this.pollTimer!==null&&clearInterval(this.pollTimer),this.pollTimer=null}async sendSurvey(){const e=this.roomId;if(!e||this.sent)return;const t=De("feedback-comment").value.trim(),i=De("feedback-status");if(!Object.keys(this.answers).length&&this.rating===null&&!t){i.textContent="Pick an answer, a rating or write a note, or skip.";return}const r={kind:"survey",room:{type:"private",roomId:e},answers:this.answers,...this.rating===null?{}:{rating:this.rating},...t?{comment:t}:{}};De("feedback-send").disabled=!0,i.textContent="Sending…";try{const s=await this.guest.request("/feedback",r);if(this.record(e,"sent"),this.roomId!==e)return;this.sent=!0,i.textContent=s.duplicate===!0?"Your answers were already recorded.":"Thanks. Your answers are saved.",De("feedback-form").hidden=!0,De("feedback-skip").hidden=!0,await this.refresh()}catch(s){this.roomId===e&&(i.textContent=s instanceof Error?s.message:"Feedback could not be sent. You can skip.")}finally{De("feedback-send").disabled=!1}}async refresh(){const e=this.roomId;if(e)try{const t=await this.guest.request(`/feedback/rooms/${encodeURIComponent(e)}`);if(this.roomId!==e||!Array.isArray(t.surveys))return;const i=[];for(const r of t.surveys)r&&typeof r=="object"&&"answers"in r&&r.answers&&typeof r.answers=="object"&&i.push(r.answers);this.renderSummary(i,typeof t.members=="number"&&Number.isSafeInteger(t.members)?t.members:i.length)}catch{}}renderSummary(e,t){const i=rm(e),r=De("feedback-tally");De("feedback-summary-title").textContent=e.length?`Room feedback · based on ${e.length} of ${Math.max(t,e.length)} players`:"Room feedback · no answers yet",r.replaceChildren(...ua.map(a=>{const o=i[a.id],c=yi("li");return c.append(yi("span",a.label,"feedback-tally-label"),yi("span",`${o.tooLittle} too little · ${o.justRight} just right · ${o.tooMuch} too much`,"feedback-tally-counts")),c}));let s;try{s=Lw(this.tuning,e,t)}catch{s=null}this.override=s?.override??null,Ow(this.override,this.store??void 0),De("feedback-changes").replaceChildren(...(s?.changes??[]).map(a=>yi("li",`${a.field}: ${a.from} → ${a.to}`))),De("feedback-suggestion-note").textContent=this.override?"Suggested tuning. The host can apply it from the settings of the next lobby (use Rematch), or an operator can set ARCHERY_TUNING and redeploy.":e.length?"No tuning change suggested from these answers.":"A tuning suggestion appears once answers arrive.",De("feedback-override").textContent=this.override?`ARCHERY_TUNING='${this.override}'`:"",De("feedback-override-box").hidden=!this.override}async copyOverride(){if(this.override){try{await navigator.clipboard.writeText(`ARCHERY_TUNING='${this.override}'`),De("feedback-copy").textContent="Copied"}catch{De("feedback-copy").textContent="Select the text to copy"}setTimeout(()=>{De("feedback-copy").textContent="Copy"},2e3)}}offerRound(e,t,i){this.roundTarget={target:e,epoch:t,round:i},De("feedback-round-text").textContent="How was that round?";for(const r of["up","down"])De(`feedback-round-${r}`).disabled=!1;De("feedback-round").hidden=!1,this.roundTimer!==null&&clearTimeout(this.roundTimer),this.roundTimer=setTimeout(()=>this.hideRound(),Hw)}hideRound(){this.roundTimer!==null&&clearTimeout(this.roundTimer),this.roundTimer=null,this.roundTarget=null,De("feedback-round").hidden=!0}async sendRound(e){const t=this.roundTarget;if(!t)return;this.roundTimer!==null&&clearTimeout(this.roundTimer);for(const r of["up","down"])De(`feedback-round-${r}`).disabled=!0;De("feedback-round-text").textContent="Sending…";let i="Thanks.";try{await this.guest.request("/feedback",{kind:"round",room:t.target,epoch:t.epoch,round:t.round,vote:e})}catch{i="Could not send that vote."}this.roundTarget===t&&(De("feedback-round-text").textContent=i,this.roundTimer=setTimeout(()=>this.hideRound(),Ww))}}const nn=n=>document.getElementById(n);function vf(){try{return sessionStorage}catch{return}}class Yw{constructor(e){this.send=e;const t=nn("combat-settings-preset");t.replaceChildren(...sm.map(r=>{const s=document.createElement("option");return s.value=r,s.textContent=r,s}));const i=(r,s)=>{const a=document.createElement("label"),o=document.createElement("input"),c=`combat-settings-${s.key}`;a.append(`${s.label} `,o),o.id=c,o.type="number",o.step=s.bound.integer?"1":"any",o.min=String(s.bound.min),o.max=String(s.bound.max),o.inputMode=s.bound.integer?"numeric":"decimal",o.dataset.knob=s.key,this.inputs.set(s.key,o),r.append(a)};for(const r of Dw)i(nn("combat-settings-primary"),r);for(const r of Nw)i(nn("combat-settings-more"),r);t.addEventListener("change",()=>this.fill(am(t.value))),nn("combat-settings-save").addEventListener("click",()=>{try{this.submit(Fw(t.value,Object.fromEntries([...this.inputs].map(([r,s])=>[r,s.value]))))}catch(r){nn("combat-settings-status").textContent=r instanceof Error?r.message:"Those settings are not valid."}}),nn("combat-settings-suggest").addEventListener("click",()=>{const r=mf(vf());r&&this.submit(r)})}send;synced="";last=null;changedNotice=!1;sending=!1;inputs=new Map;async submit(e){if(!this.sending){this.sending=!0;try{const t=this.last?.digest??null,i=await this.send(e);nn("combat-settings-status").textContent=xf(i,t,this.last?.digest??null)}finally{this.sending=!1}}}fill(e){for(const[t,i]of this.inputs)i.value=String(e[t])}fillFrom(e){nn("combat-settings-preset").value=Uw(e),this.fill(Object.fromEntries([...this.inputs.keys()].map(t=>[t,Kn(e,t)])))}render(e,t){const i=!!e&&e.state.state==="waiting";if(nn("combat-settings").hidden=!i,!e||!i){this.last=gf(this.last,null,!1,!!e),e&&(this.synced="",this.changedNotice=!1,nn("combat-settings-status").textContent="");return}const r=jo(e.state),s=e.membership.canStart,a={roomId:e.roomId,digest:pf(e.state)};this.last&&this.last.roomId!==a.roomId&&(this.changedNotice=!1);const o=Bw(this.last,a);if(o&&(this.changedNotice=!0),(o||this.last&&this.last.roomId!==a.roomId)&&!this.sending&&(nn("combat-settings-status").textContent=""),this.last=gf(this.last,a,!0,!0),!t&&nn("combat-settings-status").textContent===xf("skip",null,null)&&(nn("combat-settings-status").textContent=""),e.state.seats.find(d=>d.actorId===e.membership.actorId)?.ready&&(this.changedNotice=!1),nn("combat-settings-summary").textContent=kw(r)+(s?"":" · set by the host")+(this.changedNotice?" · Settings changed — ready up again":""),nn("combat-settings-editor").hidden=!s,!s)return;const c=e.roomId+pf(e.state);c!==this.synced&&(this.synced=c,this.fillFrom(r));const l=mf(vf()),u=l?zw(l,r):null,h=nn("combat-settings-suggest");h.hidden=u===null,u&&(h.textContent=u,h.title=u);for(const d of["save","suggest"])nn(`combat-settings-${d}`).disabled=t}}const fa="challenge-v1";function No(n){if(n!=="course"&&n!=="endless")throw new RangeError("Unknown challenge format.")}function qw(n){if(!Number.isFinite(n.angle)||!Number.isFinite(n.power)||n.angle<en.minAngle||n.angle>en.maxAngle||n.power<0||n.power>1)throw new RangeError("Challenge aim must have an angle from 5 to 80 and power from 0 to 1.")}const rl=(...n)=>32*Number.EPSILON*Math.max(1,...n.map(Math.abs));function lm(n,e){if(No(n),!Number.isSafeInteger(e)||e<0||n==="course"&&e>=12)throw new RangeError("Challenge shot index is out of range.");const t=Math.floor(e/3),i=n==="course"?[12,18,24,30][t]:Math.min(30,12+2*t),r=n==="course"?2.6:Math.max(.8,2.6-.1*t);return Object.freeze({distance:i,centerY:3.2,radius:r,faceX:Zi.x+i})}function jw(n,e){if(qw(n),![e.distance,e.centerY,e.radius,e.faceX].every(Number.isFinite)||e.distance<=0||e.radius<=0||Math.abs(e.faceX-(Zi.x+e.distance))>rl(e.faceX,e.distance))throw new RangeError("Challenge target must have finite, consistent geometry and positive distance and radius.");const t=Wo(n),i=(e.faceX-t.origin.x)/t.velocity.x,r=Math.min(up(t),en.maxFlight);if(i>=r-rl(i,r))return Object.freeze({score:0,innerBullseye:!1,impact:null,at:r,hit:!1});const s=Object.freeze({x:e.faceX,y:Jt(t,i).y}),a=Math.abs(s.y-e.centerY),o=rl(a,s.y,e.centerY,e.radius);let c=0;for(let l=1;l<=10;l++)if(a<=e.radius*l/10+o){c=11-l;break}return Object.freeze({score:c,innerBullseye:a<=e.radius/20+o,impact:s,at:i,hit:c>0})}function dm(n,e=fa){if(No(n),typeof e!="string"||e.trim().length===0)throw new RangeError("A challenge requires a rules version.");return Object.freeze({format:n,rulesVersion:e,status:"active",revision:0,shots:Object.freeze([]),total:0,hits:0,innerBullseyes:0,tens:0,misses:0})}function th(n){if(n.status!=="active")throw new Error("The challenge has already ended.")}function nh(n,e){th(n);const t=lm(n.format,n.shots.length),i=jw(e,t),r=Object.freeze({aim:Object.freeze({angle:e.angle,power:e.power}),target:t,outcome:i}),s=Object.freeze([...n.shots,r]),a=n.misses+ +!i.hit,o=n.format==="course"?s.length===12:a===3;return Object.freeze({...n,status:o?"completed":"active",revision:n.revision+1,shots:s,total:n.total+i.score,hits:n.hits+Number(i.hit),innerBullseyes:n.innerBullseyes+Number(i.innerBullseye),tens:n.tens+ +(i.score===10),misses:a})}function ih(n){if(th(n),n.format!=="endless"||n.shots.length===0)throw new Error("Only a nonempty endless challenge can be banked.");return Object.freeze({...n,status:"completed",revision:n.revision+1})}function Kw(n){return th(n),Object.freeze({...n,status:"abandoned",revision:n.revision+1})}function sl(n,e){if(No(n.format),No(e.format),n.format!==e.format)throw new RangeError("Challenge results must use the same format.");const t=n.format==="course"?["total","innerBullseyes","tens"]:["total","hits","innerBullseyes","tens"];for(const i of t)if(n[i]!==e[i])return e[i]-n[i];return 0}const bf="archery.challenge.results.v1",yf="archery.challenge.initials.v1",es=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function fd(n){if(!es(n)||!["course","endless"].includes(String(n.format))||n.rulesVersion!==fa||!Array.isArray(n.shots))throw new Error("Unsupported challenge data.");let e=dm(n.format);for(const i of n.shots){if(!es(i)||!es(i.aim)||typeof i.aim.angle!="number"||typeof i.aim.power!="number")throw new Error("Invalid challenge shot.");e=nh(e,{angle:i.aim.angle,power:i.aim.power})}n.status==="completed"&&e.status==="active"&&(e=ih(e)),n.status==="abandoned"&&e.status==="active"&&(e=Kw(e));function t(i,r){return Array.isArray(i)&&Array.isArray(r)?i.length===r.length&&i.every((s,a)=>t(s,r[a])):es(i)&&es(r)?Object.keys(i).length===Object.keys(r).length&&Object.keys(i).every(s=>s in r&&t(i[s],r[s])):i===r}if(!t(e,n))throw new Error("Challenge data failed verification.");return e}class Jw{message="Results stay on this browser.";storage;constructor(e){this.storage=e}readResults(){let e;try{if(!this.storage)throw new Error;e=this.storage.getItem(bf)}catch{return this.message="Result not saved: browser storage unavailable. You can still play.",null}if(e===null)return[];try{const t=JSON.parse(e);if(!Array.isArray(t))throw new Error;return t.map(i=>{const r=fd(i);if(r.status!=="completed")throw new Error;return r})}catch{return this.message="Local results are unreadable or use another rules version. Existing data is preserved; new results cannot be saved.",null}}results(e){return(this.readResults()??[]).filter(t=>t.format===e).sort(sl).slice(0,100)}save(e){if(e.status!=="completed")return!1;const t=this.readResults();if(t===null)return!1;try{const i=[fd(e),...t.filter(s=>s.format===e.format)].sort(sl).slice(0,100),r=t.filter(s=>s.format!==e.format).sort(sl).slice(0,100);return this.storage.setItem(bf,JSON.stringify([...i,...r])),this.message="Best 100 results per format stay on this browser.",!0}catch{return this.message="Result not saved: browser storage unavailable.",!1}}initials(){try{return this.storage?.getItem(yf)??""}catch{return""}}saveInitials(e){try{this.storage?.setItem(yf,e)}catch{}}}function Mf(n){if(!Array.isArray(n))throw new Error("Invalid leaderboard.");return n.map(e=>{if(!es(e)||!["rank","total","hits","innerBullseyes","tens","misses"].every(t=>Number.isSafeInteger(e[t])&&Number(e[t])>=0)||typeof e.guestId!="string"||typeof e.initials!="string"||!/^[a-z]{3}$/.test(e.initials)||typeof e.own!="boolean"||typeof e.publishedAt!="string")throw new Error("Invalid leaderboard entry.");return e})}class Zw{attempt=null;pending=null;busy=!1;session;attemptRevision=null;pendingRevision=null;constructor(e,t=fetch,i,r){r?.assertContext(e,t,i),this.session=r??new $o(e,t,i)}checkAttemptRevision(){const e=this.attemptRevision??this.session.revision;return this.session.assertRevision(e),this.attemptRevision=e,e}checkPending(e,t,i){if(this.session.assertRevision(i),this.pending!==e||this.attempt!==t)throw new Error("Challenge changed while the action was pending.")}decodeAttempt(e){if(typeof e.id!="string"||!e.id)throw new Error("Invalid attempt response.");return{id:e.id,state:fd(e.state)}}async start(e){if(this.busy||this.pending)throw new Error("Finish the pending action first.");this.busy=!0;try{const t=await this.session.ensure();this.session.assertRevision(t.revision);const i=this.decodeAttempt(await this.session.request("/attempts",{format:e,rulesVersion:fa}));return this.session.assertRevision(t.revision),this.attempt=i,this.attemptRevision=t.revision,i}finally{this.busy=!1}}async shot(e){return this.action("shot",{aim:{...e}})}async bank(){return this.action("bank",{})}async action(e,t){if(!this.attempt||this.pending||this.busy)throw new Error("Finish the pending action first.");return this.pendingRevision=this.checkAttemptRevision(),this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/actions`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,kind:e,...t},kind:"action"},this.retry()}async retry(){if(!this.pending||this.pending.kind!=="action"||!this.attempt||this.busy)throw new Error("No retryable action.");const e=this.pending,t=this.attempt,i=this.pendingRevision??this.checkAttemptRevision();this.checkPending(e,t,i),this.busy=!0;try{const r=this.decodeAttempt(await this.session.request(e.url,e.body));this.checkPending(e,t,i);const s=e.body.kind==="shot"?nh(t.state,e.body.aim):ih(t.state);if(r.id!==t.id||JSON.stringify(r.state)!==JSON.stringify(s))throw new Error("Shared response does not match the pending action.");return this.attempt=r,this.pending=null,this.pendingRevision=null,r}catch(r){throw r instanceof li&&r.code==="challenge_capacity"&&e.body.kind==="shot"&&this.pending===e&&this.attempt===t&&this.session.revision===i&&(this.pending=null,this.pendingRevision=null),r}finally{this.busy=!1}}async publish(e){if(!this.attempt||this.attempt.state.status!=="completed"||this.busy||this.pending?.kind==="action")throw new Error("Finish the pending shot first.");if(e=e.trim().toLowerCase(),!/^[a-z]{3}$/.test(e))throw new Error("Use exactly three letters A–Z.");const t=this.checkAttemptRevision();this.pending||(this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/publish`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,initials:e},kind:"publish"},this.pendingRevision=t);const i=this.pending,r=this.attempt;this.checkPending(i,r,this.pendingRevision??t),this.busy=!0;try{const s=await this.session.request(i.url,i.body);this.checkPending(i,r,t);const a=Mf(s.entries);return this.pending=null,this.pendingRevision=null,a}catch(s){throw s instanceof Error&&"status"in s&&s.status===400&&this.pending===i&&this.attempt===r&&this.session.revision===t&&(this.pending=null,this.pendingRevision=null),s}finally{this.busy=!1}}async boards(e){const t=this.session.revision,i=await this.session.request(`/leaderboards/${e}?rulesVersion=${encodeURIComponent(fa)}`);return this.session.assertRevision(t),Mf(i.entries)}forget(){this.session.forget(),this.attempt=null,this.pending=null,this.attemptRevision=null,this.pendingRevision=null}}const Qw="Finish or abandon the course to switch modes.",eE="Finish or abandon the endless run to switch modes.";function tE(n,e,t=!1){return n&&n.status==="active"&&n.shots.length===0&&e===n.format&&!t?{action:"noop"}:!n||n.status!=="active"||n.shots.length===0?{action:"switch"}:{action:"confirm",declineMessage:n.format==="endless"?eE:Qw}}function nE(n){try{return n()===!0}catch{return!1}}function Sf(n,e,t=Xt){if(!Number.isFinite(e)||e<=0)throw new RangeError("Positive finite aspect required.");if(![t.minX,t.maxX,t.minY,t.maxY].every(Number.isFinite)||t.minX>t.maxX||t.minY>t.maxY)throw new RangeError("Ordered finite target required.");n.updateMatrixWorld(!0);let i=-11.4,r=11.4,s=-11.4/e,a=11.4/e;const o=(d,p,g)=>{const b=new F(d,p,g).applyMatrix4(n.matrixWorldInverse),m=1.1;i=Math.min(i,b.x-m),r=Math.max(r,b.x+m),s=Math.min(s,b.y-m),a=Math.max(a,b.y+m)};for(const d of[-8.5,8.62])for(const p of[0,6])o(d,p,.12);for(const d of[t.minX,t.maxX])for(const p of[t.minY,t.maxY])for(const g of[-.9,.12])o(d,p,g);const c=(i+r)/2,l=(s+a)/2,u=Math.max((a-s)/2,(r-i)/(2*e)),h=u*e;n.left=c-h,n.right=c+h,n.bottom=l-u,n.top=l+u,n.updateProjectionMatrix()}function iE(n,e,t){if(![n.origin.x,n.origin.y,n.velocity.x,n.velocity.y,e.x,e.y,t].every(Number.isFinite)||t<0||t>en.maxFlight)throw new RangeError("Finite shot and a bounded resolved interval required.");const i=n.origin.x-e.x,r=n.origin.y-e.y,s=n.velocity.x,a=n.velocity.y,o=en.gravity,c=.5*o*o,l=-1.5*o*a,u=s*s+a*a-o*r,h=s*i+a*r;if(![c,l,u,h].every(Number.isFinite))throw new RangeError("Shot exceeds supported numeric range.");const d=f=>((c*f+l)*f+u)*f+h,p=[0,t],g=4*l*l-12*c*u;if(g>=0)for(const f of[(-2*l-Math.sqrt(g))/(6*c),(-2*l+Math.sqrt(g))/(6*c)])f>0&&f<t&&p.push(f);p.sort((f,x)=>f-x);const b=[...p];for(let f=1;f<p.length;f++){let x=p[f-1],M=p[f],S=d(x),R=d(M);if(!(S===0||R===0||S<0==R<0)){for(let T=0;T<64;T++){const A=(x+M)/2,v=d(A);S<0==v<0?(x=A,S=v):M=A}b.push((x+M)/2)}}const m=Math.min(...b.map(f=>{const x=Jt(n,f);return Math.hypot(x.x-e.x,x.y-e.y)}));if(!Number.isFinite(m))throw new RangeError("Shot exceeds supported numeric range.");return m}function yr(){return{completed:0,hits:0,best:null,mean:null,last:null,lastShotId:0,m2:0,currentStreak:0,bestStreak:0,recent:[]}}function rh(n,e,t,i,r={angle:29,power:.62}){if(!Number.isSafeInteger(e)||e<0||!Number.isFinite(i)||i<0||typeof t!="boolean"||!Number.isFinite(r.angle)||r.angle<5||r.angle>80||!Number.isFinite(r.power)||r.power<.08||r.power>1)throw new RangeError("Valid completion identity, aim and distance required.");if(e<=n.lastShotId)return n;const s=n.completed+1,a=i-(n.mean??0),o=(n.mean??0)+a/s,c=t?n.currentStreak+1:0,l={completed:s,hits:n.hits+Number(t),best:Math.min(n.best??1/0,i),mean:o,last:i,lastShotId:e,m2:Math.max(0,n.m2+a*(i-o)),currentStreak:c,bestStreak:Math.max(n.bestStreak,c),recent:[{hit:t,distance:i,...r},...n.recent].slice(0,10)};if(!Number.isSafeInteger(s)||!Number.isFinite(l.m2)||!Number.isFinite(o))throw new RangeError("Practice exceeds supported numeric range.");return l}const rE="archery-practice",al="progress",ol="practice";function sE(n){return{version:1,stats:n}}function aE(n){if(n===void 0)return yr();const e=()=>{throw new Error("Saved practice is incompatible or damaged. Clear it to start again.")};if(!n||typeof n!="object"||n.version!==1)return e();const t=(a,o)=>Object.keys(a).sort().join(",")===o.sort().join(",");if(!t(n,["version","stats"]))return e();const i=n.stats;if(!i||typeof i!="object"||!t(i,Object.keys(yr())))return e();const r=a=>Number.isSafeInteger(a)&&a>=0,s=a=>typeof a=="number"&&Number.isFinite(a)&&a>=0;if(![i.completed,i.hits,i.lastShotId,i.currentStreak,i.bestStreak].every(r)||i.hits>i.completed||i.lastShotId<i.completed||i.currentStreak>i.bestStreak||i.bestStreak>i.hits||i.hits>0&&i.bestStreak===0||!s(i.m2)||!Array.isArray(i.recent)||i.recent.length!==Math.min(i.completed,10))return e();if(i.completed){if(!s(i.best)||!s(i.mean)||!s(i.last)||i.best>i.mean||i.best>i.last||i.completed===1&&(i.m2!==0||i.mean!==i.last||i.best!==i.last)||i.hits===0&&i.bestStreak!==0||i.hits===i.completed&&(i.currentStreak!==i.completed||i.bestStreak!==i.completed))return e()}else if(i.hits||i.lastShotId||i.currentStreak||i.bestStreak||i.m2||i.best!==null||i.mean!==null||i.last!==null)return e();for(const a of i.recent)if(!a||!t(a,["hit","distance","angle","power"])||typeof a.hit!="boolean"||!s(a.distance)||!Number.isFinite(a.angle)||a.angle<5||a.angle>80||!Number.isFinite(a.power)||a.power<.08||a.power>1||i.best>a.distance)return e();if(i.completed){if(i.last!==i.recent[0].distance)return e();let a=0;for(const p of i.recent){if(!p.hit)break;a++}if(a<i.recent.length?i.currentStreak!==a:i.currentStreak<a)return e();let o=0,c=0;for(const p of[...i.recent].reverse())o=p.hit?o+1:0,c=Math.max(c,o);const l=i.recent.reduce((p,g)=>p+(g.distance-i.mean)**2,0);if(c>i.bestStreak||l>i.m2+1e-9*Math.max(1,i.m2))return e();const u=i.best+i.recent.reduce((p,g)=>p+(g.distance-i.best)/i.completed,0),h=Math.sqrt(i.completed-1)*(i.mean-i.best);if(u>i.mean+1e-10*Math.max(1,i.mean)||Math.sqrt(i.m2/i.completed)>h+1e-10*Math.max(1,h))return e();const d=i.recent.filter(p=>p.hit).length;if(d>i.hits||i.recent.length-d>i.completed-i.hits)return e();if(i.completed>10){const p=i.completed-i.recent.length,g=p-(i.hits-d),b=i.hits-d,m=i.mean-i.best;let f=p*m-i.recent.reduce((v,w)=>v+(w.distance-i.mean),0);const x=1e-9*Math.max(1,p*m,...i.recent.map(v=>Math.abs(v.distance-i.mean)));if(f<-x)return e();f=Math.max(0,f);const M=!i.recent.some(v=>v.distance===i.best);if(M&&p===1&&f>x)return e();const S=p*(f/p-m)**2,R=l+S+(M&&p>1?f/p*(f/(p-1)):0),T=l+S+f/p*f*(p-1);if(!Number.isFinite(R)||i.m2<R-1e-9*Math.max(1,i.m2,R)||i.m2>T+1e-9*Math.max(1,i.m2,T))return e();let A=0;for(const v of[...i.recent].reverse()){if(!v.hit)break;A++}if(A===i.recent.length){const v=i.currentStreak-A,w=b-v;if(v>b||v<0||g===0&&v!==p||w>g*i.bestStreak||i.bestStreak<v+A||i.bestStreak>Math.max(c,v+A,w))return e()}else if(b>(g+1)*i.bestStreak-A||i.bestStreak>Math.max(c,b+A))return e()}if(i.completed<=10){let p=yr();for(const b of[...i.recent].reverse())p=rh(p,p.lastShotId+1,b.hit,b.distance,b);const g=(b,m)=>Math.abs(b-m)<=1e-10*Math.max(1,Math.abs(b),Math.abs(m));if(!g(p.mean,i.mean)||!g(p.m2,i.m2)||p.best!==i.best||p.bestStreak!==i.bestStreak)return e()}}return structuredClone(i)}class oE{db=null;queue;unavailable=!1;view={stats:yr(),state:"loading",message:"Loading saved practice…"};notify;constructor(e,t=()=>indexedDB){this.notify=e,this.notify(this.view),this.queue=new Promise(i=>{let r;try{r=t().open(rE,1)}catch{this.fail(),i();return}r.onupgradeneeded=()=>{r.result.createObjectStore(al)},r.onblocked=()=>{this.fail("Saved practice is blocked by another tab."),i()},r.onerror=()=>{this.fail(),i()},r.onsuccess=()=>{if(this.unavailable){r.result.close(),i();return}const s=r.result;this.db=s,s.onversionchange=()=>{this.db===s&&(this.db=null,s.close(),this.fail("Saved practice changed in another tab. Reload to reconnect."))},this.transaction().then(i,()=>{this.db&&this.fail(),i()})}})}fail(e="Saved practice unavailable. This visit still counts."){this.unavailable=!0,this.view={...this.view,state:"unavailable",message:e},this.notify(this.view)}transaction(e,t=!1){return new Promise((i,r)=>{const s=this.db;if(!s){r(new Error("Storage unavailable"));return}let a=yr(),o;try{o=s.transaction(al,e||t?"readwrite":"readonly");const c=o.objectStore(al);if(t)c.delete(ol);else{const l=c.get(ol);l.onsuccess=()=>{try{a=aE(l.result),e&&(a=rh(a,a.lastShotId+1,e.hit,e.distance,e),c.put(sE(a),ol))}catch(u){o.abort(),r(u)}}}o.oncomplete=()=>{this.db!==s?this.view={...this.view,stats:a}:(this.unavailable=!1,this.view={stats:a,state:"saved",message:`Saved on this browser only · ${a.completed} ${a.completed===1?"shot":"shots"}`}),this.notify(this.view),i()},o.onabort=o.onerror=()=>r(new Error("Storage transaction failed"))}catch(c){r(c)}})}enqueue(e,t=!1){return this.queue=this.queue.then(async()=>{if(!(!this.db||this.unavailable&&!t)){this.view={...this.view,state:e||t?"saving":"loading",message:t?"Clearing saved practice…":e?"Saving practice…":"Loading saved practice…"},this.notify(this.view);try{await this.transaction(e,t)}catch{this.db&&this.fail()}}}),this.queue}append(e){return this.enqueue(e)}clear(){return this.enqueue(void 0,!0)}refresh(){return this.enqueue()}}const hm="archery-theme";function cE(n,e){try{const t=n.getItem(hm);return t==="light"||t==="dark"?t:e}catch{return e}}function lE(n,e){try{n.setItem(hm,e)}catch{}}const I=n=>document.getElementById(n),mt=I("scene");let Et="range",Be,Xe=null,js="",um=null,ut=null,pa="";const dE=new Wy;let cl="",ll=[];function hE(n){for(const e of ll)e.removeAttribute("inert");if(ll=[],!!n)for(let e=I("arena-shell");e&&e!==document.body;e=e.parentElement)for(const t of Array.from(e.parentElement?.children??[]))t!==e&&!t.hasAttribute("inert")&&t.tagName!=="SCRIPT"&&(t.setAttribute("inert",""),ll.push(t))}function uE(){for(const n of["skirmish-title","mode-combat"]){const e=document.getElementById(n);if(e&&!e.hidden&&e.offsetParent!==null){e.focus();return}}}let wt="private",Nt=!1,Ki=!1;const fm=I("status"),pm=I("phase"),ta=I("retry"),Qo=I("fire"),Uo=I("pause"),ma=I("angle"),ga=I("power"),na=I("drag-marker"),fE=I("gesture-hint"),cs=I("theme"),ec=document.getElementById("guide"),wf=Co(An).map(()=>{const n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("r",String(An.radiusPx)),n.setAttribute("stroke-width",String(An.outlinePx)),ec.append(n),n}),Ws=I("arrow-cue");let Ks=yr(),mm=yr(),gm=0,fo="visit",Gi={angle:29,pull:.2+.62*.5},Js=0,pd={tip:{...Zi},angle:29*Math.PI/180},dn="light";try{dn=cE(localStorage,matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}let Ee="ready",Pt={angle:29,power:.62},it=null,Lt=!1,Ut=null,Tn=0,sh=0,Fo=performance.now(),ko=0,Ef="",Pi;try{Pi=new Hb({canvas:mt,antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{throw fm.textContent="This clearing needs WebGL. Please try a browser with graphics enabled.",pm.textContent="GRAPHICS UNAVAILABLE",mt.hidden=!0,Qo.disabled=!0,Uo.disabled=!0,new Error("WebGL unavailable")}Pi.setClearColor("#dce8df");Pi.shadowMap.enabled=!0;Pi.shadowMap.type=Zs;Pi.outputColorSpace=Rn;const rt=new $f;rt.fog=new Cd("#dce8df",38,80);const Wn=new ba(-11,11,10,-10,.1,100);Wn.position.set(0,9,30);Wn.lookAt(0,3.7,0);const md=new tp("#fff7d7","#6a8161",2.6);rt.add(md);const Dr=new ip("#fff4d6",3);Dr.position.set(-8,16,10);Dr.castShadow=!0;Dr.shadow.mapSize.set(1024,1024);Object.assign(Dr.shadow.camera,{left:-16,right:16,top:15,bottom:-12,near:.5,far:60});Dr.shadow.bias=-.002;rt.add(Dr);const po=new Map;function Ma(n){return po.has(n)||po.set(n,new oo({color:n,roughness:1,metalness:0,flatShading:!0})),po.get(n)}function Qe(n,e,t,i,r,s,a,o){const c=new ft(new Ir(r,s,a),Ma(o));return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Sa(n,e,t,i,r){const s=Qe(n,0,0,0,i,e.distanceTo(t),i,r);return s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new F(0,1,0),t.clone().sub(e).normalize()),s}const It=(n,e,t=0)=>new F(n,e,t),bs={x:(Xt.minX+Xt.maxX)/2,y:(Xt.minY+Xt.maxY)/2},Oo=Qe(rt,(Xt.minX+Xt.maxX)/2,(Xt.minY+Xt.maxY)/2,-.45,Xt.maxX-Xt.minX,Xt.maxY-Xt.minY,.9,"#cc684a");Qe(rt,bs.x,bs.y,.015,.61,.12,.025,"#f4ddb3");Qe(rt,bs.x,bs.y,.035,.14,.32,.025,"#4b3c31");Qe(rt,8.31,.3,-.45,1.35,.6,1.5,"#66734a");Qe(rt,0,-.25,-2,27,.9,14,"#7d9461");Qe(rt,0,-.9,-2,27,.4,14,"#8d7653");Qe(rt,0,-1.65,-2,26.2,1.1,13.4,"#b1a17b");for(let n=0;n<7;n++){const e=-16+n*5.5,t=new ft(new va(6+n%3,9+n%4,4),Ma(n%2?"#afc5ae":"#c2d1bb"));t.position.set(e,3,-18-n%2*3),t.rotation.y=Math.PI/4,rt.add(t)}function tc(n,e,t){Qe(rt,n,1*t,e,.3*t,2*t,.3*t,"#7c7853"),Qe(rt,n,3*t,e,1.8*t,2.2*t,1.7*t,"#718d65"),Qe(rt,n-.3*t,4.1*t,e,1.3*t,1.2*t,1.25*t,"#89a176")}tc(-11.3,-3.8,1.2);tc(-3.2,-6.5,.8);tc(5.8,-7,1.05);tc(11.8,-4.5,1.4);for(let n=0;n<34;n++){const e=Math.sin(n*73.3)*12,t=-2-Math.cos(n*29.1)*3;Qe(rt,e,.25,t,.16,.2+n%3*.08,.17,n%6===0?"#e5d0a1":"#96ab6f")}for(const[n,e,t]of[[-4,-1,.5],[4,-2,.7],[10,1,.5]])Qe(rt,n,.3,e,t,t*.65,t,"#a7ae94");const Bn=new Zt;rt.add(Bn);Qe(Bn,-8.02,.55,0,.36,.8,.4,"#38473f");Qe(Bn,-7.32,.55,0,.36,.8,.4,"#38473f");Qe(Bn,-8.08,.2,.12,.64,.24,.55,"#4c4938");Qe(Bn,-7.26,.2,.12,.64,.24,.55,"#4c4938");Qe(Bn,-7.72,1.61,0,.85,1.5,.6,"#d19b58");Qe(Bn,-7.72,1.15,.32,.95,.18,.12,"#6b6845");Qe(Bn,-7.72,2.66,0,.65,.65,.6,"#eac795");Qe(Bn,-7.85,3,-.04,.95,.27,.76,"#4d6e57");Qe(Bn,-7.98,2.72,-.02,.23,.45,.65,"#4d6e57");Qe(Bn,-7.4,2.73,.32,.08,.08,.07,"#34483c");Sa(Bn,It(-8.14,1.6,-.38),It(-8.36,2.8,-.38),.28,"#786244");const ys=new Zt;ys.position.set(Zi.x,Zi.y,.12);rt.add(ys);const dl=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let n=1;n<dl.length;n++)Sa(ys,It(...dl[n-1]),It(...dl[n]),.075,"#78523c");const xm=new Vt().setFromPoints([It(0,-.92),It(-.3,0),It(0,.92)]),pE=new ts(xm,new fs({color:"#f1e7bf"}));ys.add(pE);const mE=Sa(rt,It(-7.7,2.3,.42),It(Zi.x,Zi.y,.42),.23,"#eac795"),gE=Sa(rt,It(-7.95,2.3,.45),It(-7.8,2.7,.3),.22,"#d19b58"),xE=Sa(rt,It(-7.8,2.7,.3),It(-7.3,2.7,.12),.18,"#eac795"),_E=Qe(rt,-7.3,2.7,.12,.19,.19,.19,"#eac795");function hl(n,e,t){const i=n.geometry.parameters.height;n.scale.y=e.distanceTo(t)/i,n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(It(0,1,0),t.clone().sub(e).normalize())}function vE(){const n=new Zt;Qe(n,-.6,0,0,1.2,.045,.045,"#f3dfaa");const e=new ft(new va(.085,.24,4),Ma("#58685d"));return e.rotation.z=-Math.PI/2,e.position.x=-.12,n.add(e),Qe(n,-1.08,0,0,.22,.17,.04,"#e9e6c8"),rt.add(n),n}const Mi=vE(),gd=new Vt,nc=new ts(gd,new fs({color:"#f6edcf",transparent:!0,opacity:.55}));rt.add(nc);const Ms=Array.from({length:9},(n,e)=>{const t=Qe(rt,0,0,0,.08+e%2*.05,.08,.08,"#ffedb7");return t.visible=!1,t});let pe=null,rn=null,tr=!1,at=!1,ah=!1,Ss;try{Ss=localStorage}catch{}const Mr=new Jw(Ss),Bo=ny(Array.from(document.querySelectorAll('meta[name="archery-api"]'),n=>n.content),location.origin),hn=Bo?new $o(Bo,fetch,Ss):null,mo=hn?new $w(hn):null,We=hn?new Zw(hn.endpoint,fetch,Ss,hn):null,mr=hn?new Wp(hn,"private"):null,rs=hn?new Wp(hn,"public"):null;function _m(n,e){const t=I(n);t.hidden=!e.visible,t.caption.textContent=e.title,t.tBodies[0].replaceChildren(...e.rows.map(i=>{const r=document.createElement("tr");return r.dataset.actorId=i.actorId,r.dataset.own=String(i.own),r.dataset.leader=String(i.leader),[i.own?`${i.label} · you`:i.label,String(i.shots),i.accuracy,String(i.damage),String(i.kills)].forEach((s,a)=>{const o=document.createElement("td");o.textContent=s,a===0&&(o.title=s),r.append(o)}),r}))}const oh=new Zt;for(const n of[Oo,...rt.children.filter(e=>e instanceof ft&&e!==Oo&&(e.position.x===bs.x&&e.position.y===bs.y||e.position.x===8.31&&e.position.y===.3))])oh.add(n);rt.add(oh);const Si=new Zt;rt.add(Si);Si.visible=!1;const Ls=new Zt;rt.add(Ls);Ls.visible=!1;Qe(Ls,13,-.25,-2,25,.9,14,"#7d9461");Qe(Ls,13,-.9,-2,25,.4,14,"#8d7653");Qe(Ls,13,-1.65,-2,25,1.1,13.4,"#b1a17b");const no=["#f5f1df","#f5f1df","#222d2a","#222d2a","#59a6c5","#59a6c5","#d96350","#d96350","#efc655","#efc655"];function ch(){const n=pe.shots.length;return lm(pe.format,Math.max(0,rn||pe.status!=="active"?n-1:n))}function lh(){if(Et==="range")if(pe){const n=ch();Sf(Wn,Xi/$i,{minX:n.faceX-.1,maxX:n.faceX+.1,minY:n.centerY-n.radius,maxY:n.centerY+n.radius})}else Sf(Wn,Xi/$i)}function dh(){oh.visible=!pe,Si.visible=!!pe,Ls.visible=!!pe,I("face-inset").hidden=!pe;for(const n of[...Si.children])Si.remove(n),n instanceof ft&&n.geometry.dispose();if(I("face-rings").replaceChildren(),I("face-impact").setAttribute("hidden",""),pe){const n=ch();for(let e=0;e<10;e++){const t=n.radius*(10-e)/10,i=new ft(new ca(t,48),Ma(no[e]));i.rotation.y=-Math.PI/2,i.position.set(n.faceX-e*.001,n.centerY,0),Si.add(i),Qe(Si,n.faceX-.035,n.centerY+t-n.radius/20,0,.09,n.radius/10,.07,no[e]),Qe(Si,n.faceX-.035,n.centerY-t+n.radius/20,0,.09,n.radius/10,.07,no[e]);const r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("r",String((10-e)/10)),r.setAttribute("fill",no[e]),r.setAttribute("stroke",e<4?"#a8ada0":"#384d46"),r.setAttribute("stroke-width",".01"),I("face-rings").append(r)}Qe(Si,n.faceX,.5,-.12,.18,1,.18,"#786244")}lh()}function bE(){const n=Lt||at||!!We?.pending||Ee==="flying"||Ee==="aiming";for(const e of["practice","course","endless"]){const t=I(`mode-${e}`);t.disabled=n,t.setAttribute("aria-pressed",String(e===(pe?.format??"practice")))}pe?.status!=="active"&&(I("mode-note").textContent=""),I("challenge-panel").hidden=!pe,I("practice-stats").hidden=!!pe;for(const e of["challenge-restart","challenge-leave","challenge-bank","clear-identity"])I(e).disabled=n||Lt;if(I("online-mode").disabled=n||!!pe,pe){const e=ch(),t=pe.status!=="active";I("challenge-name").textContent=`${pe.format==="course"?"12-arrow course":"Endless"} · ${tr?"shared scoring":"local"}`,I("challenge-total").textContent=`${pe.total}${pe.format==="course"?" / 120":""} points`,I("challenge-progress").textContent=`${t?"Completed":`Arrow ${pe.shots.length+1}${pe.format==="course"?" of 12":""}`} · ${e.distance} units · ${pe.misses} ${pe.format==="endless"?"/ 3 ":""}misses · ${pe.innerBullseyes} inner bullseyes`,I("challenge-rules").textContent=pe.format==="course"?"3 arrows each at 12, 18, 24 and 30 units. Ten rings, 10 points at center.":"Three misses ends the run. Every 3 arrows: +2 units (max 30), radius −0.1 (min 0.8). End & bank between shots.",I("challenge-bank").hidden=pe.format!=="endless"||t||!pe.shots.length,ta.hidden=t||!["hit","miss"].includes(Ee),ta.textContent="Next arrow ↗",Qo.disabled||=t||Ee==="hit"||Ee==="miss"||at||!!We?.pending,ma.disabled||=t||Ee==="hit"||Ee==="miss"||at||!!We?.pending,ga.disabled||=t||Ee==="hit"||Ee==="miss"||at||!!We?.pending,I("gesture-hint").hidden||=t||at||!!We?.pending,I("publish-form").hidden=!(t&&tr&&!ah),I("initials").disabled=at||We?.pending?.kind==="publish",I("publish").disabled=at||!!We?.pending&&We.pending.kind==="action"}else ta.innerHTML="Try again <span>↗</span>",I("publish-form").hidden=!0;mt.dataset.format=pe?.format??"practice"}let go=0;async function ss(n=""){const e=++go,t=I("board-format").value;I("board-rules").textContent=`Rules ${fa} · ties share a rank · score, ${t==="endless"?"hits, ":""}inner bullseyes, tens`;const i=Mr.results(t);if(I("local-empty").hidden=i.length>0,I("local-board").replaceChildren(...i.slice(0,10).map(r=>{const s=document.createElement("li");return s.textContent=`${r.total} points · ${r.hits} hits · ${r.shots.length} arrows`,s})),I("challenge-storage").textContent=Mr.message,!!We){I("shared-board").replaceChildren(),I("shared-status").textContent=n||"Loading shared board…";try{const r=await We.boards(t);if(e!==go)return;yE(r),I("shared-status").textContent=n||"Shared boards available. Choose shared scoring before starting a challenge."}catch(r){if(e!==go)return;I("shared-status").textContent=`${n?n+" ":""}Shared boards unavailable. ${r instanceof Error?r.message:"Try later."} Local challenges are playable.`,I("shared-board").replaceChildren()}}}function yE(n){I("shared-board").replaceChildren(...n.map(e=>{const t=document.createElement("li");return t.value=e.rank,t.dataset.own=String(e.own),t.textContent=`${e.initials}${e.own?" · you":""} — ${e.total} points · ${e.hits} hits`,t}))}function ia(n){I("network-recovery").hidden=!1,I("network-message").textContent=`${n instanceof Error?n.message:"Connection interrupted."} No result has been promoted to the shared board.`,I("network-retry").hidden=!We?.pending,On("Shared action needs attention below the clearing.","CHALLENGE WAITING"),Rt()}function xd(){if(pe?.status!=="completed")return!1;const n=tr||Mr.save(pe);return ss(),n}async function Xs(n,e=!1){if(Et==="combat"&&(ym("range"),(pe?.format??"practice")===n)||at||Ee==="flying"||it||Lt)return;const t=tE(pe,n,e);if(t.action!=="noop"&&!(We?.pending&&!e)){if(t.action==="confirm"&&!nE(()=>confirm("Abandon this challenge? Its unfinished score will not be banked."))){I("mode-note").textContent=t.declineMessage;return}I("mode-note").textContent="",e&&(We.pending=null),at=!0,Rt();try{const i=n!=="practice"&&!e&&!!We&&I("online-mode").checked;let r=null;n!=="practice"&&(r=i?(await We.start(n)).state:dm(n)),pe=r,tr=i,rn=null,ah=!1,I("network-recovery").hidden=!0,I("publish-form").hidden=!0,I("board-format").value=n==="practice"?"course":n,Ee="ready",Ut=null,Tn=0,nc.visible=!1,I("shot-result").hidden=!0;for(const s of Ms)s.visible=!1;dh(),On("Pull back. Breathe. Release.",pe?"CHALLENGE READY":"YOUR NEXT SHOT"),ss()}catch(i){ia(i)}finally{at=!1,Rt()}}}async function ME(n){at=!0,Rt();try{pe=tr?(await We.shot(n)).state:nh(pe,n),rn=pe.shots.at(-1).outcome,fh(n)}catch(e){Ee="ready",ia(e)}finally{at=!1,Rt()}}function SE(){if(!pe||!rn||!Ut)return;Ee=rn.hit?"hit":"miss",Tn=rn.at,sh=ko,I("shot-result-caption").textContent="Actual impact · ten-ring scoring",I("shot-result-value").textContent=rn.hit?`${rn.score} points${rn.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",I("shot-result").hidden=!1;const n=rn.impact;if(n){const t=pe.shots.at(-1).target,i=I("face-impact");i.setAttribute("cx","0"),i.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-t.centerY)/t.radius)))),i.removeAttribute("hidden")}const e=xd();On(pe.status==="completed"?`${pe.total} points. ${tr?"Publish with your initials below.":e?"Saved to this browser’s local board.":Mr.message}`:rn.hit?"On the face. Take your next arrow when ready.":"Outside the face. Take your next arrow when ready.",pe.status==="completed"?"CHALLENGE COMPLETE":rn.hit?"SCORED":"MISS"),Rt()}function wE(){for(const n of["practice","course","endless"])I(`mode-${n}`).addEventListener("click",()=>{Xs(n)});if(I("challenge-restart").addEventListener("click",()=>{Xs(pe.format)}),I("challenge-leave").addEventListener("click",()=>{Xs("practice")}),I("challenge-bank").addEventListener("click",async()=>{if(!(!pe||at||Lt||it||Ee==="flying"||We?.pending)){at=!0,Rt();try{pe=tr?(await We.bank()).state:ih(pe);const n=xd();On(`${pe.total} points banked.${n?"":" "+Mr.message}`,"CHALLENGE COMPLETE")}catch(n){ia(n)}finally{at=!1,Rt()}}}),I("board-format").addEventListener("change",()=>{ss()}),I("network-local").addEventListener("click",()=>{Xs(pe?.format??"course",!0)}),I("network-retry").addEventListener("click",async()=>{if(!(at||!We?.pending)){if(We.pending.kind==="publish"){I("publish-form").requestSubmit();return}at=!0,Rt();try{const n=We.pending.body.kind;if(pe=(await We.retry()).state,I("network-recovery").hidden=!0,n==="shot"){const e=pe.shots.at(-1);rn=e.outcome,fh(e.aim)}else xd(),On(`${pe.total} points banked.`,"CHALLENGE COMPLETE")}catch(n){ia(n)}finally{at=!1,Rt()}}}),I("publish-form").addEventListener("submit",async n=>{if(n.preventDefault(),at||!We)return;const e=I("initials").value.trim().toLowerCase();at=!0,++go,Rt();try{await We.publish(e),Mr.saveInitials(e),ah=!0,I("network-recovery").hidden=!0,I("publish-form").hidden=!0;const t="Published. The shared board keeps your strongest result for this format and rules version.";I("shared-status").textContent=t,await ss(t)}catch(t){ia(t)}finally{at=!1,Rt()}}),I("clear-identity").addEventListener("click",()=>{at||Ee==="flying"||it||We?.pending||confirm("Forget this browser’s shared guest identity? Any unfinished challenge is abandoned. Published scores remain, and this browser will no longer own them. Local results and saved practice stay.")&&(We?.forget(),Xe?.forgetRoom(),ut?.forgetArena(),Be.clearSnapshot(),pe=null,rn=null,tr=!1,I("online-mode").checked=!1,Xs("practice",!0))}),I("initials").value=Mr.initials(),I("online-choice").hidden=!We,I("clear-identity").hidden=!We,ss(),We){const n=new WebSocket(hn.endpoint.boardSocket);n.addEventListener("message",e=>{try{const t=JSON.parse(String(e.data));typeof t=="object"&&t!==null&&"type"in t&&t.type==="board-changed"&&ss()}catch{}}),window.addEventListener("pagehide",()=>n.close(),{once:!0})}}const EE={"#cc684a":"#cf785c","#7d9461":"#445c48","#8d7653":"#645b47","#b1a17b":"#7d765f","#afc5ae":"#3b5150","#c2d1bb":"#465e5b","#718d65":"#405d4d","#89a176":"#58735a","#96ab6f":"#64794d","#a7ae94":"#737f6e","#66734a":"#556343"};function hh(){Be?.setTheme(dn),document.documentElement.dataset.theme=dn,cs.setAttribute("aria-pressed",String(dn==="dark")),cs.setAttribute("aria-label",dn==="dark"?"Switch to light theme":"Switch to dark theme"),cs.textContent=dn==="dark"?"☀ Light":"☾ Dark";const n=dn==="dark"?"#202f36":"#dce8df";Pi.setClearColor(n),rt.fog.color.set(n),md.color.set(dn==="dark"?"#c6d7e8":"#fff7d7"),md.groundColor.set(dn==="dark"?"#435b4b":"#6a8161"),Dr.color.set(dn==="dark"?"#d7def1":"#fff4d6");for(const[e,t]of po)t.color.set(dn==="dark"?EE[e]??e:e);document.querySelector('meta[name="theme-color"]')?.setAttribute("content",dn==="dark"?"#18231f":"#eef2de")}function ic(){const n=fo==="visit"?Ks:mm;I("shots-value").textContent=String(n.completed),I("hit-count-value").textContent=String(n.hits),I("hits-value").textContent=n.completed?`${Math.round(n.hits/n.completed*100)}%`:"0%",I("best-value").textContent=n.best===null?"—":`${n.best.toFixed(2)} units`,I("mean-value").textContent=n.mean===null?"—":`${n.mean.toFixed(2)} units`,I("streak-value").textContent=String(n.currentStreak),I("best-streak-value").textContent=String(n.bestStreak),I("spread-value").textContent=n.completed?`${Math.sqrt(n.m2/n.completed).toFixed(2)} units`:"—",I("recent-shots").replaceChildren(...n.recent.map(e=>{const t=document.createElement("li");return t.textContent=`${e.hit?"Hit":"Miss"} · ${e.distance.toFixed(2)} units · ${e.angle.toFixed(1)}° · ${(e.power*100).toFixed(1)}% power`,t})),I("recent-empty").hidden=n.completed>0,I("visit-stats").setAttribute("aria-pressed",String(fo==="visit")),I("saved-stats").setAttribute("aria-pressed",String(fo==="saved"))}const rc=new oE(n=>{mm=n.stats,I("save-status").textContent=n.message,I("save-status").dataset.state=n.state,ic()});for(const[n,e]of[["visit-stats","visit"],["saved-stats","saved"]])I(n).addEventListener("click",()=>{it||(fo=e,ic(),e==="saved"&&rc.refresh())});document.querySelector(".recent-details summary")?.addEventListener("click",n=>{it&&n.preventDefault()});I("clear-practice").addEventListener("click",()=>{it||(I("clear-confirmation").hidden=!1)});I("cancel-clear").addEventListener("click",()=>{it||(I("clear-confirmation").hidden=!0)});I("confirm-clear").addEventListener("click",()=>{it||(I("clear-confirmation").hidden=!0,rc.clear())});window.addEventListener("focus",()=>{Et==="range"&&rc.refresh()});function On(n,e){fm.textContent=n,pm.textContent=e}function Rt(){if(Et!=="range")return;I("angle-value").textContent=`${Math.round(Pt.angle)}°`,I("power-value").textContent=`${Math.round(Pt.power*100)}%`,I("angle-meter").style.width=`${Pt.angle/80*100}%`,I("power-meter").style.width=`${Pt.power*100}%`,ma.value=String(Math.round(Pt.angle)),ga.value=String(Math.round(Pt.power*100));const n=Lt||Ee==="aiming"||Ee==="flying"||at||!!We?.pending;cs.disabled=Ee==="aiming",I("mode-combat").disabled=Ee==="aiming"||at||!!We?.pending;for(const e of["visit-stats","saved-stats","clear-practice","confirm-clear","cancel-clear"])I(e).disabled=Ee==="aiming";Qo.disabled=n,ma.disabled=n,ga.disabled=n,ta.hidden=Ee!=="hit"&&Ee!=="miss",fE.hidden=Ee!=="ready"||Lt,mt.dataset.state=Ee,mt.dataset.paused=String(Lt),bE()}function xa(){if(!(Ee==="flying"||Lt||at||We?.pending||pe&&pe.status!=="active")){pe&&(rn=null,dh()),Ee="ready",Ut=null,Tn=0,nc.visible=!1,I("shot-result").hidden=!0;for(const n of Ms)n.visible=!1;On("Pull back. Breathe. Release.","YOUR NEXT SHOT"),Rt()}}function uh(){if(Et==="range"&&!(Lt||Ee==="flying"||at||We?.pending)){if(pe){if(pe.status!=="active"||Ee!=="ready"&&Ee!=="aiming")return;ME({...Pt});return}fh(Pt)}}function fh(n){Pt={...n};const e=Ro(Gi,Js),t=Gi.angle*Math.PI/180;pd={tip:{x:e.nock.x+Math.cos(t)*1.2,y:e.nock.y+Math.sin(t)*1.2},angle:t},Ut=Wo(Pt),mt.dataset.shot=JSON.stringify(Ut),gm++,Tn=0,Ee="flying",nc.visible=!0,I("shot-result").hidden=!0;for(const i of Ms)i.visible=!1;On("Let it fly…","ARROW IN FLIGHT"),Rt()}function ul(n,e){if(Ee!=="flying"||!Ut)return;Ee=n?"hit":"miss",Tn=e,sh=ko,I("shot-result-caption").textContent="Closest approach · this shot";const t=iE(Ut,Wb,e),i=Ks;Ks=rh(Ks,gm,n,t,Pt),ic(),Ks!==i&&rc.append({hit:n,distance:t,...Pt}),I("shot-result-value").textContent=`${t.toFixed(2)} units from center`,I("shot-result").hidden=!1;const r=Jt(Ut,e),s=(Xt.minX-Ut.origin.x)/Ut.velocity.x,a=Jt(Ut,s);Ef=a.y>Xt.maxY?"A little high. Try less angle or draw.":a.y<Xt.minY?"A little low. Try more draw or angle.":"Just short. Give it a little more draw.",On(n?"A lovely shot.":Ef,n?"TARGET HIT":"ANOTHER TRY");for(const o of Ms)o.position.set(r.x,r.y,.2);Rt()}function fi(n=!0){if(!it)return;const e=it;it=null,mt.hasPointerCapture(e.id)&&mt.releasePointerCapture(e.id),Pt=e.previous,na.hidden=!0,Ee="ready",n&&On("Draw cancelled. Take your time.","YOUR NEXT SHOT"),Rt()}function Ds(n){fi(!1),Lt=n,Fo=performance.now(),I("paused").hidden=!Lt,Uo.textContent=Lt?"▶":"Ⅱ",Uo.setAttribute("aria-label",Lt?"Resume game":"Pause game"),Rt()}mt.addEventListener("pointerdown",n=>{if(Et!=="range"||Lt||Ee==="flying"||at||We?.pending||pe&&(pe.status!=="active"||Ee==="hit"||Ee==="miss")||it||!n.isPrimary||n.button!==0)return;n.preventDefault(),(Ee==="hit"||Ee==="miss")&&xa();const e=mt.getBoundingClientRect();it={id:n.pointerId,x:n.clientX,y:n.clientY,width:e.width,height:e.height,previous:{...Pt},valid:!1},mt.setPointerCapture(n.pointerId),mt.focus({preventScroll:!0}),na.style.left=`${n.clientX-e.left}px`,na.style.top=`${n.clientY-e.top}px`,na.hidden=!1,Ee="aiming",On("Pull left and down. Release to shoot.","FIND YOUR ARC"),Rt()});function vm(n){if(Et!=="range"||!it||n.pointerId!==it.id)return;const e=Dd(n.clientX-it.x,n.clientY-it.y,it.width,it.height);it.valid=e!==null,e&&(Pt=e),On(e?"Release when it feels right.":"Pull left and down to draw the bow.","FIND YOUR ARC"),Rt()}mt.addEventListener("pointermove",vm);mt.addEventListener("pointerup",n=>{if(Et!=="range"||!it||n.pointerId!==it.id)return;if(vm(n),!it?.valid){fi();return}const e=it.id;it=null,na.hidden=!0,mt.hasPointerCapture(e)&&mt.releasePointerCapture(e),uh()});mt.addEventListener("pointercancel",n=>{it?.id===n.pointerId&&fi()});mt.addEventListener("lostpointercapture",n=>{it?.id===n.pointerId&&fi()});mt.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("resize",()=>{Et==="range"?fi():Be.cancelInput()});window.addEventListener("blur",()=>{Et==="range"?Ds(!0):Be.cancelInput()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Et==="range"?Ds(!0):Be.cancelInput())});Uo.addEventListener("click",()=>Ds(!Lt));cs.addEventListener("click",()=>{if(!it){dn=dn==="dark"?"light":"dark",hh();try{lE(localStorage,dn)}catch{}}});I("resume").addEventListener("click",()=>{Ds(!1),mt.focus({preventScroll:!0})});ta.addEventListener("click",()=>{xa(),mt.focus({preventScroll:!0})});Qo.addEventListener("click",()=>{fi(!1),uh()});for(const n of[ma,ga])n.addEventListener("input",()=>{if(Ee==="flying"||Lt||at||We?.pending||pe&&(pe.status!=="active"||Ee==="hit"||Ee==="miss")){Rt();return}const e={angle:Number(ma.value),power:Number(ga.value)/100};fi(!1),(Ee==="hit"||Ee==="miss")&&xa(),Pt=e,Rt()});window.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLButtonElement||n.target instanceof HTMLElement&&["SUMMARY","SELECT","TEXTAREA"].includes(n.target.tagName)||n.target instanceof HTMLElement&&n.target.isContentEditable)){if(Et==="combat"){Be.keydown(n);return}if(n.code==="KeyP"){n.preventDefault(),n.repeat||Ds(!Lt);return}if(n.code==="Escape"){fi();return}if(!(Lt||it||at||We?.pending||pe&&pe.status!=="active")){if(n.code==="Space"){if(n.preventDefault(),n.repeat)return;Ee==="hit"||Ee==="miss"?xa():uh()}else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.code)&&Ee!=="flying"){if(n.preventDefault(),Ee==="hit"||Ee==="miss"){if(pe)return;xa()}Pt.angle=wr(Pt.angle+(n.code==="ArrowLeft"?-1:n.code==="ArrowRight"?1:0),5,80),Pt.power=wr(Pt.power+(n.code==="ArrowDown"?-.02:n.code==="ArrowUp"?.02:0),.08,1),Rt()}}}});let Xi=1,$i=1;const AE=new ResizeObserver(()=>{Et==="range"?fi():Be.cancelInput();const{width:n,height:e}=mt.getBoundingClientRect();n<=0||e<=0||(Pi.setSize(Math.round(n*.85),Math.round(e*.85),!1),Xi=n,$i=e,ec.setAttribute("viewBox",`0 0 ${n} ${e}`),Et==="range"?lh():Be.resize(n,e))});AE.observe(mt);mt.addEventListener("webglcontextlost",n=>{if(n.preventDefault(),Et==="combat"){Be.cancelInput(),I("combat-message").textContent="Graphics interrupted. Reload to reconnect with the same guest.";return}Ds(!0),On("Graphics interrupted. Reload to return to the clearing.","GRAPHICS PAUSED")});function bm(n){requestAnimationFrame(bm);const e=Math.max(0,(n-Fo)/1e3);if(Fo=n,Et==="combat"){Be.render(Pi,e),Mm();return}if(!Lt&&(ko+=e,Ee==="flying"&&Ut)){const c=Math.min(Tn+e,en.maxFlight);if(pe&&rn)c>=rn.at?SE():Tn=c;else{const l=hp(Ut,Xt,Tn,c),u=up(Ut);l!==null&&l<=u?ul(!0,l):c>=u?ul(!1,u):c>=en.maxFlight?ul(!1,c):Tn=c}}const t={angle:Pt.angle,pull:.2+Pt.power*.5};Lt||(Gi=Xp(Gi,t,e),Js+=((Ut?1:0)-Js)*(1-Math.exp(-18*e)));const i=Gi.angle*Math.PI/180,r=Ro(Gi,Js);ys.rotation.z=i,ys.position.set(r.bow.x,r.bow.y,.12);const s=xm.attributes.position;if(s.setXYZ(1,(r.nock.x-r.bow.x)*Math.cos(i)+(r.nock.y-r.bow.y)*Math.sin(i),0,0),s.needsUpdate=!0,hl(mE,It(-7.7,2.3,.42),It(r.bow.x+Math.cos(i)*.37,r.bow.y+Math.sin(i)*.37,.12)),hl(gE,It(-7.95,2.3,.45),It(r.elbow.x,r.elbow.y,.28)),hl(xE,It(r.elbow.x,r.elbow.y,.28),It(r.hand.x,r.hand.y,.12)),_E.position.set(r.hand.x,r.hand.y,.12),Ut){const c=Qs(Ut,Tn,pd);Mi.position.set(c.position.x,c.position.y,.12),Mi.rotation.z=c.angle;const l=Array.from({length:16},(u,h)=>{const d=Math.max(0,Tn-.23+h/15*.23),p=Qs(Ut,d,pd).position;return It(p.x,p.y,.04)});gd.setFromPoints(l)}else Mi.position.set(r.nock.x+Math.cos(i)*1.2,r.nock.y+Math.sin(i)*1.2,.12),Mi.rotation.z=i;const a=Wo(Pt);if(ec.style.visibility=!Ut&&!Lt&&(Ee!=="aiming"||it?.valid)?"visible":"hidden",Co(An).forEach((c,l)=>{const u={x:r.nock.x+Math.cos(i)*1.2,y:r.nock.y+Math.sin(i)*1.2},h=Qs(a,c,{tip:u,angle:i}).position,d=It(h.x,h.y,.06).project(Wn);wf[l].setAttribute("cx",String((d.x+1)*Xi/2)),wf[l].setAttribute("cy",String((1-d.y)*$i/2))}),Ws.hidden=!0,Ut&&Ee==="flying"&&!Lt){const c=It(Mi.position.x,Mi.position.y,.12).project(Wn);if(Math.abs(c.x)>1||Math.abs(c.y)>1){const l=c.x*Xi/2,u=-c.y*$i/2,h=Math.min((Xi/2-20)/Math.abs(l),($i/2-20)/Math.abs(u));Ws.style.left=`${Xi/2+l*h}px`,Ws.style.top=`${$i/2+u*h}px`,Ws.style.setProperty("--cue-angle",`${Math.atan2(u,l)+Math.PI/2}rad`),Ws.hidden=!1}}const o=ko-sh;Ms.forEach((c,l)=>{if(c.visible=Ee==="hit"&&o<.65,c.visible&&Ut){const u=Jt(Ut,Tn),h=l/Ms.length*Math.PI*2;c.position.set(u.x+Math.cos(h)*o*2,u.y+Math.sin(h)*o*2-o*o*2,.25)}}),Oo.material=Ma(Ee==="hit"&&o<.2?"#edbc7e":"#cc684a"),Oo.material.color.set(Ee==="hit"&&o<.2?"#edbc7e":dn==="dark"?"#cf785c":"#cc684a"),mt.dataset.pose=JSON.stringify({angle:Gi.angle,pull:Gi.pull,release:Js,...r,arrow:{x:Mi.position.x,y:Mi.position.y,angle:Mi.rotation.z},trail:Array.from(gd.getAttribute("position")?.array??[]),flightTime:Tn}),mt.dataset.view=JSON.stringify([Wn.left,Wn.right,Wn.top,Wn.bottom]),Pi.render(rt,Wn)}Be=new ww(mt);const TE=new Jy({shell:I("arena-shell"),expand:I("arena-expand"),exit:I("arena-exit"),controlsToggle:I("arena-controls-toggle"),doc:document,win:window,cancelInput:()=>Be.cancelInput(),isDrawing:()=>Be.drawing,canExpand:()=>Et==="combat"&&wt==="public"&&Nt,setModal:hE,focusFallback:uE,onChange:n=>Be.setHudMode(_r(n)?"expanded":"inline")});RE();hh();ic();wE();Rt();requestAnimationFrame(bm);function ym(n){if(n!==Et){n==="combat"?(I("mode-note").textContent="",fi(!1),Et=n,Be.activate()):(Be.deactivate(),Et=n,wt==="public"&&(Nt=!1,ut?.close())),Fo=performance.now(),document.body.dataset.view=n;for(const e of[".controls",".boards"]){const t=document.querySelector(e);t&&(t.hidden=n==="combat")}for(const e of["combat-panel","combat-controls","combat-scene-label"])I(e).hidden=n!=="combat";for(const e of["pause","guide","gesture-hint","arrow-cue","shot-result","face-inset","paused"])I(e).hidden=n==="combat";I("challenge-panel").hidden=n==="combat"||!pe,I("mode-combat").setAttribute("aria-pressed",String(n==="combat"));for(const e of["practice","course","endless"]){const t=I(`mode-${e}`);t.disabled=!1,n==="combat"&&t.setAttribute("aria-pressed","false")}mt.dataset.viewMode=n,ph(),document.querySelector(".play-area").hidden=!1,n==="combat"?(ec.style.visibility="hidden",Be.resize(Xi,$i)):(lh(),hh(),dh(),I("paused").hidden=!Lt,I("shot-result").hidden=Ee!=="hit"&&Ee!=="miss",Rt())}}function RE(){Xe=hn?new lM(hn.endpoint,fetch,Ss,hn):null,ut=hn?new Ny(hn.endpoint,fetch,Ss,hn):null,I("mode-combat").addEventListener("click",()=>{at||We?.pending||it||(ym("combat"),gn(),wt==="public"&&I("skirmish-title").focus())});const n=async e=>{js="";try{await e()}catch(t){js=t instanceof Error?t.message:"The combat service is unavailable. Reconnect or retry the pending action."}gn()};I("combat-create").addEventListener("click",()=>{Xe&&n(()=>{const e=I("combat-preset").value,t=e==="teams-1"?{mode:"teams",preset:"teams-1"}:e==="royale-shrink-1"||e==="royale-fixed-1"?{mode:"royale",preset:e}:void 0;return Xe.create(t)})}),I("combat-join-form").addEventListener("submit",e=>{e.preventDefault(),Xe&&n(()=>Xe.join(I("combat-join-code").value))}),um=new Yw(async e=>{const t=Xe;return!t||Be.drawing||t.busy||t.pending||!t.room?"skip":(await n(()=>t.command(e)),js?"error":"done")}),I("combat-ready").addEventListener("click",()=>{const e=Xe;e?.room&&n(()=>e.command({kind:"ready",ready:!e.room.state.seats.find(t=>t.actorId===e.room.membership.actorId)?.ready}))}),I("combat-start").addEventListener("click",()=>{Xe&&n(()=>Xe.command({kind:"start"}))}),I("combat-pass").addEventListener("click",()=>{wt==="public"?ut&&fl(()=>ut.command({kind:"pass"})):Xe&&n(()=>Xe.command({kind:"pass"}))}),I("combat-cancel").addEventListener("click",()=>{const e=Xe?.room?.state.action;Xe&&e&&n(()=>Xe.command({kind:"cancel",cancelActionId:e.id}))}),I("combat-rematch").addEventListener("click",()=>{const e=Xe;if(!e?.room||Be.drawing)return;const t=gp(e.room.state,e.room.successor);t.kind!=="none"&&n(async()=>{t.kind==="request"&&await e.command({kind:"rematch"}),await e.followRematch()})}),I("combat-leave").addEventListener("click",()=>{Xe&&!Be.drawing&&n(()=>Xe.command({kind:"leave"}))}),I("combat-resign").addEventListener("click",()=>{Xe&&!Be.drawing&&confirm(Xe.room&&Yn(Xe.room.state)?"Resign this match? Your archer will leave the competition.":"Resign this duel? Your opponent wins.")&&n(()=>Xe.command({kind:"resign"}))}),I("combat-retry").addEventListener("click",()=>{Xe&&n(()=>Xe.retry())}),I("combat-reconnect").addEventListener("click",()=>{Xe&&n(()=>Xe.reconnect())}),Be.onShot=(e,t)=>{wt==="public"?ut&&fl(()=>ut.command({kind:"shot",arrow:e,aim:t})):Xe&&n(()=>Xe.command({kind:"shot",arrow:e,aim:t}))},Be.onDrawing=e=>{cs.disabled=e;for(const t of["practice","course","endless","combat"])I(`mode-${t}`).disabled=e;gn()},Xe&&(Xe.onChange=()=>{wt==="private"&&gn()},Xe.onError=e=>{js=e instanceof Error?e.message:"Connection interrupted. Reconnecting with the same guest.",gn()}),window.addEventListener("pagehide",()=>{Xe?.close(),ut?.close()});for(const e of["private","public"])I(`combat-mode-${e}`).addEventListener("click",()=>{Be.drawing||e===wt||(Nt=!1,wt=e,e==="private"&&ut?.close(),Be.clearSnapshot(),gn(),e==="public"&&(I("skirmish-title").focus(),CE()))});for(const[e,t]of[["join",()=>ut.join()],["reconnect",()=>ut.reconnect()],["rejoin",()=>ut.control("rejoin")],["leave",()=>ut.control("leave")],["retry",()=>ut.retry()]])I(`skirmish-${e}`).addEventListener("click",()=>{if(ut&&!Be.drawing){const i=e==="retry"?ut.pending?.body.kind:e;fl(t,i==="leave"?"leave":e==="retry"||["join","rejoin","reconnect"].includes(i??"")?"enter":"stay")}});I("skirmish-back").addEventListener("click",()=>{Ki||ut?.busy||ut?.pending||Be.drawing||(Nt=!1,ut?.close(),gn(),I("skirmish-title").focus())}),mr&&(mr.onChange=()=>{wt==="private"&&gn()}),rs&&(rs.onChange=()=>{wt==="public"&&gn()}),ut&&(ut.onChange=()=>{wt==="public"&&gn()},ut.onError=e=>{pa=e instanceof Error?e.message:"Connection interrupted. Reconnect with the same guest.",wt==="public"&&gn()}),gn()}function gn(){const n=Et==="combat"&&wt==="public"&&!Nt;wt!=="public"&&ph(),document.querySelector(".play-area").hidden=n,I("combat-controls").hidden=Et!=="combat"||n,I("combat-scene-label").hidden=Et!=="combat"||n;for(const d of["combat-mode-picker","combat-preset-choice","combat-preset-label","combat-rules"])I(d).hidden=!Bo;I("combat-private-title").textContent=Bo?"Private match":"Private duel",I("combat-private-panel").hidden=wt!=="private",I("skirmish-panel").hidden=wt!=="public";for(const d of["private","public"])I(`combat-mode-${d}`).setAttribute("aria-pressed",String(wt===d)),I(`combat-mode-${d}`).disabled=Be.drawing;if(I("combat-drag-help").textContent=wt==="public"?"Pull left to aim right or right to aim left, and pull down to raise the arc. Release to lock. Facing buttons also work before drawing. The short seven-dot guide shows only the opening arc.":"Pull backward and down from anywhere in the arena. Change facing before drawing. The short seven-dot guide shows only the opening arc.",wt==="public"){mo?.syncPrivate(null),IE();return}const e=Xe,t=e?.room,i=t?.state,r=Be.drawing,s=!!e?.busy||!!e?.pending;Be.setTransport(!!e?.connected,s),Be.setLockAgain(!!e?.lockAgain),t?Be.setSnapshot(t.state,t.membership.actorId,e.now):Be.hasRoom&&Be.clearSnapshot(),I("combat-lobby").hidden=!!t,I("combat-code").textContent=t?t.code:"",I("combat-message").textContent=e?js||(t?e.connected?"Connected to the private room. Share its code with a friend.":"Connecting to the private room. Server clocks continue.":"Create a room or enter a friend’s invitation code."):"Private duel is unavailable here. Practice and local Challenges are available.";for(const d of["create","join","join-code"])I(`combat-${d}`).disabled=!e||s||r||!!t;I("combat-roster").replaceChildren(...(t?Qb(t.state,t.membership.actorId,t.connections,e.now):[]).map(d=>{const p=document.createElement("li");p.dataset.actorId=d.actorId,p.textContent=d.text;const g=document.createElement("progress");if(g.max=100,g.value=d.health,g.setAttribute("aria-label",d.healthLabel),p.append(g),d.team!==null){const b=document.createElement("strong");b.className="combat-team",b.textContent=d.team,p.prepend(b)}if(d.lockText!==null){const b=document.createElement("div");b.textContent=d.lockText,p.append(b)}return p}));const a=i&&t?mp(i,t.membership.actorId):null,o=d=>{const p=i?.seats.findIndex(g=>g.actorId===d)??-1;return t?.connections.find(g=>g.actorId===d)?.label??`Archer ${p+1}`},c=i?Hp(i):null;t&&i?c?mr?.want(t.roomId,c,`/rooms/${encodeURIComponent(t.roomId)}/stats`):mr?.hold(t.roomId):mr?.clear(),_m("combat-board",Vp(mr?.stats??[],(i?.seats??[]).map(d=>({actorId:d.actorId,label:o(d.actorId)})),t?.membership.actorId??null,fM(i??null,mr?.loadedKey??null))),I("combat-rules").textContent=i?Yn(i)?"Lock one arrow or pass during shared 20-second planning. Locks are final. Server time continues in the background.":"Two archers · 100 health · alternating 20-second turns. Server time continues in the background.":"Duel alternates turns; Teams and Royale share a planning deadline. Server time continues in the background.",I("combat-key-help").textContent=`← → elevation · ↓ ↑ draw · Space ${i&&Yn(i)?"lock":"fire"} · Escape cancel draw. Combat has no local pause.`,I("combat-preset-label").textContent=a?.preset??"",um?.render(t,r||s),I("combat-priority").textContent=a?.priority.length?`Priority: ${a.priority.map(o).join(" → ")}`:"",I("combat-pressure").textContent=a?.pressure??"",I("combat-scene-label").textContent=i&&Yn(i)?`${i.mode==="teams"?"TEAMS 2v2":"ROYALE"} · SIDE VIEW`:"PRIVATE DUEL · SIDE VIEW",I("combat-preset").disabled=!e||s||r||!!t;const l=i?.seats.find(d=>d.actorId===t?.membership.actorId);I("combat-ready").hidden=i?.state!=="waiting",I("combat-ready").textContent=l?.ready?"Not ready":"Ready",I("combat-start").hidden=i?.state!=="waiting"||!t?.membership.canStart;const u=i&&t?gp(i,t.successor):{kind:"none",label:""};I("combat-rematch").hidden=u.kind==="none",I("combat-rematch").textContent=u.label,I("combat-leave").hidden=!t||i?.state==="active",I("combat-resign").hidden=i?.state!=="active",I("combat-reconnect").hidden=!e||!t&&!e.savedRoom||!!e.connected,I("combat-retry").hidden=!e?.pending;for(const d of["ready","start","rematch","leave","resign","reconnect","retry"])I(`combat-${d}`).disabled=r||!!e?.busy||d!=="retry"&&!!e?.pending;I("combat-start").disabled||=!i||!Zb(i)||!e?.connected,I("combat-pass").disabled=r||s||!e?.connected||!i?.seat.canAct,I("combat-pass").textContent=i&&Yn(i)?"Lock pass":"Pass turn",I("combat-cancel").hidden=!!i&&Yn(i)||i?.phase!=="resolving"||i.action?.actorId!==t?.membership.actorId||i.launchAt===null||e.now()>=i.launchAt,I("combat-cancel").disabled=r||s||!e?.connected;const h=a?.result??"";I("combat-result").hidden=!h,I("combat-result").textContent=h,I("combat-phase").textContent=i?i.state==="active"?i.phase.toUpperCase():i.state.toUpperCase():"WAITING FOR A ROOM",I("combat-turn").textContent=a?.turn??"Invite a friend to the arena.",mo?.syncPrivate(t&&i?{roomId:t.roomId,state:i}:null),mo?.syncPublic(null),Mm()}function Mm(){if(wt==="public"){Sm();return}const n=Xe?.room,e=n?.state;if(!e){I("combat-clock").textContent="";return}const t=Xe.now();I("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.state==="active"&&e.deadlineAt!==null&&t>=e.deadlineAt&&(I("combat-fire").disabled=!0,I("combat-pass").disabled=!0)}async function fl(n,e="stay"){if(Ki)return;Ki=!0,pa="",wt==="public"&&gn();let t=!1;try{await n(),wt==="public"&&Et==="combat"&&(e==="leave"&&ut?.room?.membership.status==="left"?(Nt=!1,t=!0):e==="enter"&&ut?.room&&(Nt=!0,t=!0))}catch(i){pa=i instanceof Error?i.message:"Public play is unavailable. Reconnect or retry the pending action."}finally{Ki=!1,wt==="public"&&(gn(),t&&I("skirmish-title").focus())}}const pl=new Set;async function CE(){const n=ut,e=n?.savedArena;if(!n||!e||n.room||n.pending||n.busy||Ki)return;const t=`${n.locatorKey}|${e.arenaId}|${e.memberId}`;if(pl.has(t))return;pl.add(t);let i="unknown";try{i=await n.probeSavedArena()}catch{}i==="unknown"&&pl.delete(t),i==="gone"&&(pa="Your last arena ended. Join a new one."),wt==="public"&&gn()}function IE(){const n=ut,e=n?.room,t=e?.state,i=Be.drawing,r=Ki||!!n?.busy||!!n?.pending,s=e?Uy(e):null;mo?.syncPublic(e&&t&&Nt?{arenaId:e.arenaId,memberId:e.membership.memberId,epoch:t.epoch,completedRounds:t.completedRounds}:null),I("skirmish-rules-note").textContent=Fy(t?.version??Gd),Be.setTransport(Nt&&!!n?.connected,r),Be.setLockAgain(!!n?.lockAgain),e&&Nt?Be.setSnapshot(e.state,e.membership.actorId,n.now):Be.hasRoom&&Be.clearSnapshot(),I("skirmish-entry").hidden=Nt,I("skirmish-roster").hidden=!Nt,I("skirmish-message").textContent=n?pa||(Ki?"Contacting the arena…":Nt?e?n.connected?s.turn:"Connection interrupted. Reconnect to observe or return to this arena.":"Join an arena. NPC archers fill the open places.":n.pending?"An action is awaiting acknowledgement. Retry the original action before continuing.":e?.membership.status==="left"?"You left public play. Rejoin when ready, or return to watch.":e||n.savedArena?"Your arena is saved. Return to play or watch with the same guest.":"Join when ready. NPC archers fill the open places."):"Public play is unavailable here. Practice and local Challenges are available.",I("skirmish-join").hidden=!!e||!!n?.savedArena||!!n?.pending,I("skirmish-rejoin").hidden=!s?.canRejoin,I("skirmish-leave").hidden=!Nt||!s?.canLeave,I("skirmish-reconnect").hidden=!n||!e&&!n.savedArena||Nt&&!!n.connected,I("skirmish-retry").hidden=!n?.pending,I("skirmish-reconnect").textContent=e&&["idle","left","aborted"].includes(e.membership.status)?"Watch arena":Nt?"Reconnect":"Return to arena",I("skirmish-back").hidden=!Nt||!e||!["idle","left","aborted"].includes(e.membership.status),I("skirmish-back").disabled=i||r;for(const o of["join","reconnect","rejoin","leave","retry"])I(`skirmish-${o}`).disabled=!n||i||Ki||!!n.busy||o!=="retry"&&!!n.pending;{const o=I("arena-status"),c=I("skirmish-message").textContent??"";o.textContent!==c&&(o.textContent=c)}ph();const a=t?Hp(t):null;e&&t&&Nt?a?rs?.want(`${e.arenaId}:${t.epoch}`,a,`/skirmish/${encodeURIComponent(e.arenaId)}/stats`):rs?.hold(`${e.arenaId}:${t.epoch}`):rs?.clear(),_m("skirmish-board",Vp(rs?.stats??[],e&&Nt?Wd(e):[],e?.membership.actorId??null,!1)),I("combat-preset-label").textContent="",I("combat-scene-label").textContent="PUBLIC ARENA · SIDE VIEW",I("combat-phase").textContent=s?.phase??"JOIN A PUBLIC ARENA",I("combat-turn").textContent=s?.turn??"Continuous play with human and NPC archers.",I("combat-priority").textContent=t?.priority.length?`Priority: ${t.priority.map(o=>e.connections.find(c=>c.actorId===o)?.label??"Archer").join(" → ")}`:"",I("combat-pressure").textContent=s?.warning??"",I("combat-result").hidden=!0,I("combat-result").textContent="",I("combat-key-help").textContent="← → elevation · ↓ ↑ draw · Space lock · Escape cancel draw. Public play follows server time.",I("combat-cancel").hidden=!0,I("combat-pass").textContent="Lock pass",I("combat-pass").disabled=!Nt||i||r||!n?.connected||!e?.membership.canAct,Sm()}function Sm(){const n=ut,e=n?.room?.state,t=n?.now()??0,i=kp(e,t);I("combat-clock").textContent="";const r=I("arena-clock");r.dataset.kind!==i.kind&&(r.dataset.kind=i.kind);const s=I("arena-clock-value"),a=I("arena-clock-state");s.textContent!==i.text&&(s.textContent=i.text),a.textContent!==i.stateText&&(a.textContent=i.stateText),r.getAttribute("aria-label")!==i.label&&r.setAttribute("aria-label",i.label);const o=e&&Nt?dE.observe(e,t):null;o&&(r.dataset.nativeMs=String(o.nativeMs),r.dataset.firstRemainingMs=String(Math.round(o.firstRemainingMs)),r.dataset.firstMarginMs=String(o.marginMs===null?"":Math.round(o.marginMs))),e&&e.deadlineAt!==null&&t>=e.deadlineAt&&(I("combat-fire").disabled=!0,I("combat-pass").disabled=!0)}function ph(){const n=ut?.room,e=Et==="combat"&&wt==="public"&&Nt&&!!n;if(I("arena-hud").hidden=!e,I("skirmish-roster").hidden=!e,TE.setAvailable(e),!e||!n){cl="";return}const t=`${n.arenaId}:${n.state.epoch}:${n.state.revision}:${n.snapshotRevision}:${n.membership.actorId}:${n.membership.status}`;t!==cl&&(cl=t,I("arena-priority").replaceChildren(...Vy(n).map(i=>{const r=document.createElement("li");r.className="arena-icon",r.dataset.actorId=i.actorId,r.dataset.slot=i.slotId,r.dataset.own=String(i.own),r.dataset.npc=String(i.npc),r.style.setProperty("--slot",i.color),r.style.setProperty("--slot-ink",i.ink),r.setAttribute("aria-label",i.ariaLabel),i.current&&r.setAttribute("aria-current","true");const s=document.createElement("span");return s.setAttribute("aria-hidden","true"),s.textContent=i.symbol,r.append(s),r})),I("skirmish-roster").replaceChildren(...Hy(n).map(i=>{const r=document.createElement("li");r.dataset.actorId=i.actorId,r.dataset.kind=i.npc?"npc":"human",r.dataset.slot=i.slotId,r.dataset.status=i.status,r.dataset.own=String(i.own),r.style.setProperty("--slot",i.color),r.style.setProperty("--slot-ink",i.ink);const s=document.createElement("span");s.className="arena-swatch",s.setAttribute("aria-hidden","true"),s.textContent=i.symbol;const a=document.createElement("span");a.className="arena-health-name",a.textContent=`${i.label}${i.own?" · you":i.npc?" · NPC":""}${i.locked?" · locked":""}`;const o=document.createElement("span");o.className="arena-health-value",o.textContent=i.valueText;const c=document.createElement("progress");return c.max=100,c.value=i.health,c.setAttribute("aria-label",i.ariaLabel),r.append(s,a,o,c),r})))}
