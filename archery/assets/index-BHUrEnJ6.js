(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Bh="183",Cx=0,lf=1,Ix=2,za=1,Px=2,Na=3,ws=0,On=1,Si=2,ji=0,$r=1,df=2,hf=3,uf=4,Lx=5,Gs=100,Dx=101,Nx=102,Ux=103,kx=104,Ox=200,Fx=201,Bx=202,zx=203,Ad=204,Rd=205,Hx=206,Gx=207,Vx=208,Wx=209,Xx=210,$x=211,Yx=212,jx=213,qx=214,Cd=0,Id=1,Pd=2,Jr=3,Ld=4,Dd=5,Nd=6,Ud=7,Um=0,Kx=1,Jx=2,Ai=0,km=1,Om=2,Fm=3,Bm=4,zm=5,Hm=6,Gm=7,Vm=300,sr=301,Zr=302,xl=303,_l=304,$c=306,kd=1e3,Vi=1001,Od=1002,_n=1003,Zx=1004,Mo=1005,wn=1006,yl=1007,Xs=1008,$n=1009,Wm=1010,Xm=1011,Ya=1012,zh=1013,Ci=1014,li=1015,Zi=1016,Hh=1017,Gh=1018,ja=1020,$m=35902,Ym=35899,jm=1021,qm=1022,di=1023,Qi=1026,$s=1027,Vh=1028,Wh=1029,Qr=1030,Xh=1031,$h=1033,tc=33776,nc=33777,ic=33778,sc=33779,Fd=35840,Bd=35841,zd=35842,Hd=35843,Gd=36196,Vd=37492,Wd=37496,Xd=37488,$d=37489,Yd=37490,jd=37491,qd=37808,Kd=37809,Jd=37810,Zd=37811,Qd=37812,eh=37813,th=37814,nh=37815,ih=37816,sh=37817,rh=37818,ah=37819,oh=37820,ch=37821,lh=36492,dh=36494,hh=36495,uh=36283,fh=36284,ph=36285,mh=36286,Qx=3200,Km=0,e_=1,ps="",Wn="srgb",ea="srgb-linear",xc="linear",mt="srgb",br=7680,ff=519,t_=512,n_=513,i_=514,Yh=515,s_=516,r_=517,jh=518,a_=519,pf=35044,mf=35048,gf="300 es",wi=2e3,qa=2001;function o_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _c(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function c_(){const n=_c("canvas");return n.style.display="block",n}const xf={};function _f(...n){const e="THREE."+n.shift();console.log(e,...n)}function Jm(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=Jm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=Jm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function yc(...n){const e=n.join(" ");e in xf||(xf[e]=!0,Le(...n))}function l_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const d_={[Cd]:Id,[Pd]:Nd,[Ld]:Ud,[Jr]:Dd,[Id]:Cd,[Nd]:Pd,[Ud]:Ld,[Dd]:Jr};class fa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=Math.PI/180,gh=180/Math.PI;function lo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function h_(n,e){return(n%e+e)%e}function bl(n,e,t){return(1-t)*n+t*e}function Ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ur{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+d*y;m<0&&(h=-h,p=-p,g=-g,y=-y,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);f=Math.sin(f*v)/b,o=Math.sin(o*v)/b,c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+y*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+y*o;const v=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=v,l*=v,u*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-o*p,e[t+2]=l*g+u*p+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),h=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new F,yf=new ur;class Fe{constructor(e,t,i,s,r,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],v=s[1],b=s[4],M=s[7],T=s[2],R=s[5],I=s[8];return r[0]=a*y+o*v+c*T,r[3]=a*m+o*b+c*R,r[6]=a*f+o*M+c*I,r[1]=l*y+u*v+d*T,r[4]=l*m+u*b+d*R,r[7]=l*f+u*M+d*I,r[2]=h*y+p*v+g*T,r[5]=h*m+p*b+g*R,r[8]=h*f+p*M+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*r,p=l*r-a*c,g=t*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(s*l-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sl.makeScale(e,t)),this}rotate(e){return this.premultiply(Sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sl=new Fe,vf=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bf=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u_(){const n={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ps?xc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ea]:{primaries:e,whitePoint:i,transfer:xc,toXYZ:vf,fromXYZ:bf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:vf,fromXYZ:bf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),n}const at=u_();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mr;class f_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mr===void 0&&(Mr=_c("canvas")),Mr.width=e.width,Mr.height=e.height;const s=Mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p_=0;class qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wl(s[a].image)):r.push(wl(s[a]))}else r=wl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function wl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?f_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let m_=0;const El=new F;class Pn extends fa{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=Vi,s=Vi,r=wn,a=Xs,o=di,c=$n,l=Pn.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=lo(),this.name="",this.source=new qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Vm;Pn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(p+1)/2,T=(f+1)/2,R=(u+h)/4,I=(d+y)/4,x=(g+m)/4;return b>M&&b>T?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=I/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=I/r,s=x/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(h-u)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g_ extends fa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Pn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends g_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zm extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x_ extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tt{constructor(e,t,i,s,r,a,o,c,l,u,d,h,p,g,y,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,d,h,p,g,y,m)}set(e,t,i,s,r,a,o,c,l,u,d,h,p,g,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,g=o*u,y=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-y*l,t[9]=-o*c,t[2]=y-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,y=l*d;t[0]=h+y*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=y+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,y=l*d;t[0]=h-y*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*d,g=o*u,y=o*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-y*d}else if(e.order==="XZY"){const h=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(__,e,y_)}lookAt(e,t,i){const s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),as.crossVectors(i,Hn),as.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),as.crossVectors(i,Hn)),as.normalize(),So.crossVectors(Hn,as),s[0]=as.x,s[4]=So.x,s[8]=Hn.x,s[1]=as.y,s[5]=So.y,s[9]=Hn.y,s[2]=as.z,s[6]=So.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],v=i[3],b=i[7],M=i[11],T=i[15],R=s[0],I=s[4],x=s[8],E=s[12],k=s[1],C=s[5],U=s[9],z=s[13],W=s[2],B=s[6],G=s[10],O=s[14],Z=s[3],K=s[7],he=s[11],xe=s[15];return r[0]=a*R+o*k+c*W+l*Z,r[4]=a*I+o*C+c*B+l*K,r[8]=a*x+o*U+c*G+l*he,r[12]=a*E+o*z+c*O+l*xe,r[1]=u*R+d*k+h*W+p*Z,r[5]=u*I+d*C+h*B+p*K,r[9]=u*x+d*U+h*G+p*he,r[13]=u*E+d*z+h*O+p*xe,r[2]=g*R+y*k+m*W+f*Z,r[6]=g*I+y*C+m*B+f*K,r[10]=g*x+y*U+m*G+f*he,r[14]=g*E+y*z+m*O+f*xe,r[3]=v*R+b*k+M*W+T*Z,r[7]=v*I+b*C+M*B+T*K,r[11]=v*x+b*U+M*G+T*he,r[15]=v*E+b*z+M*O+T*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15],v=c*p-l*h,b=o*p-l*d,M=o*h-c*d,T=a*p-l*u,R=a*h-c*u,I=a*d-o*u;return t*(y*v-m*b+f*M)-i*(g*v-m*T+f*R)+s*(g*b-y*T+f*I)-r*(g*M-y*R+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],v=t*o-i*a,b=t*c-s*a,M=t*l-r*a,T=i*c-s*o,R=i*l-r*o,I=s*l-r*c,x=u*y-d*g,E=u*m-h*g,k=u*f-p*g,C=d*m-h*y,U=d*f-p*y,z=h*f-p*m,W=v*z-b*U+M*C+T*k-R*E+I*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/W;return e[0]=(o*z-c*U+l*C)*B,e[1]=(s*U-i*z-r*C)*B,e[2]=(y*I-m*R+f*T)*B,e[3]=(h*R-d*I-p*T)*B,e[4]=(c*k-a*z-l*E)*B,e[5]=(t*z-s*k+r*E)*B,e[6]=(m*M-g*I-f*b)*B,e[7]=(u*I-h*M+p*b)*B,e[8]=(a*U-o*k+l*x)*B,e[9]=(i*k-t*U-r*x)*B,e[10]=(g*R-y*M+f*v)*B,e[11]=(d*M-u*R-p*v)*B,e[12]=(o*E-a*C-c*x)*B,e[13]=(t*C-i*E+s*x)*B,e[14]=(y*b-g*T-m*v)*B,e[15]=(u*T-d*b+h*v)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,h=r*l,p=r*u,g=r*d,y=a*u,m=a*d,f=o*d,v=c*l,b=c*u,M=c*d,T=i.x,R=i.y,I=i.z;return s[0]=(1-(y+f))*T,s[1]=(p+M)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(p-M)*R,s[5]=(1-(h+f))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+b)*I,s[9]=(m-v)*I,s[10]=(1-(h+y))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Sr.set(s[0],s[1],s[2]).length();const o=Sr.set(s[4],s[5],s[6]).length(),c=Sr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ni.copy(this);const l=1/a,u=1/o,d=1/c;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=wi,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===wi)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===qa)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=wi,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===wi)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===qa)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Sr=new F,ni=new Tt,__=new F(0,0,0),y_=new F(1,1,1),as=new F,So=new F,Hn=new F,Mf=new Tt,Sf=new ur;class Ii{constructor(e=0,t=0,i=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Qm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v_=0;const wf=new F,wr=new ur,Ui=new Tt,wo=new F,Sa=new F,b_=new F,M_=new ur,Ef=new F(1,0,0),Tf=new F(0,1,0),Af=new F(0,0,1),Rf={type:"added"},S_={type:"removed"},Er={type:"childadded",child:null},Tl={type:"childremoved",child:null};class pn extends fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new F,t=new Ii,i=new ur,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Fe}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return wf.copy(e).applyQuaternion(this.quaternion),this.position.add(wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wo.copy(e):wo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Sa,wo,this.up):Ui.lookAt(wo,Sa,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(Ui),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rf),Er.child=e,this.dispatchEvent(Er),Er.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S_),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rf),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,b_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pn.DEFAULT_UP=new F(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kt extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=h_(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Rl(a,r,e+1/3),this.g=Rl(a,r,e),this.b=Rl(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Wn){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=eg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return at.workingToColorSpace(bn.copy(this),e),Math.round(Ze(bn.r*255,0,255))*65536+Math.round(Ze(bn.g*255,0,255))*256+Math.round(Ze(bn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,r=bn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Wn){at.workingToColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,s=bn.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Eo);const i=bl(os.h,Eo.h,t),s=bl(os.s,Eo.s,t),r=bl(os.l,Eo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Qe;Qe.NAMES=eg;class Kh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=i}clone(){return new Kh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tg extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ii=new F,ki=new F,Cl=new F,Oi=new F,Tr=new F,Ar=new F,Cf=new F,Il=new F,Pl=new F,Ll=new F,Dl=new Wt,Nl=new Wt,Ul=new Wt;class ai{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ii.subVectors(e,t),s.cross(ii);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ii.subVectors(s,t),ki.subVectors(i,t),Cl.subVectors(e,t);const a=ii.dot(ii),o=ii.dot(ki),c=ii.dot(Cl),l=ki.dot(ki),u=ki.dot(Cl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Oi.x),c.addScaledVector(a,Oi.y),c.addScaledVector(o,Oi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Dl.setScalar(0),Nl.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,i),Ul.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dl,r.x),a.addScaledVector(Nl,r.y),a.addScaledVector(Ul,r.z),a}static isFrontFacing(e,t,i,s){return ii.subVectors(i,t),ki.subVectors(e,t),ii.cross(ki).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ii.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ai.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Tr.subVectors(s,i),Ar.subVectors(r,i),Il.subVectors(e,i);const c=Tr.dot(Il),l=Ar.dot(Il);if(c<=0&&l<=0)return t.copy(i);Pl.subVectors(e,s);const u=Tr.dot(Pl),d=Ar.dot(Pl);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Tr,a);Ll.subVectors(e,r);const p=Tr.dot(Ll),g=Ar.dot(Ll);if(g>=0&&p<=g)return t.copy(r);const y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ar,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Cf.subVectors(r,s),o=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(Cf,o);const f=1/(m+y+h);return a=y*f,o=h*f,t.copy(i).addScaledVector(Tr,a).addScaledVector(Ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Ao.subVectors(this.max,wa),Rr.subVectors(e.a,wa),Cr.subVectors(e.b,wa),Ir.subVectors(e.c,wa),cs.subVectors(Cr,Rr),ls.subVectors(Ir,Cr),Ns.subVectors(Rr,Ir);let t=[0,-cs.z,cs.y,0,-ls.z,ls.y,0,-Ns.z,Ns.y,cs.z,0,-cs.x,ls.z,0,-ls.x,Ns.z,0,-Ns.x,-cs.y,cs.x,0,-ls.y,ls.x,0,-Ns.y,Ns.x,0];return!kl(t,Rr,Cr,Ir,Ao)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,Rr,Cr,Ir,Ao))?!1:(Ro.crossVectors(cs,ls),t=[Ro.x,Ro.y,Ro.z],kl(t,Rr,Cr,Ir,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new F,new F,new F,new F,new F,new F,new F,new F],si=new F,To=new fr,Rr=new F,Cr=new F,Ir=new F,cs=new F,ls=new F,Ns=new F,wa=new F,Ao=new F,Ro=new F,Us=new F;function kl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Us.fromArray(n,r);const o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),c=e.dot(Us),l=t.dot(Us),u=i.dot(Us);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const en=new F,Co=new nt;let E_=0;class Qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pf,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ma(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),i=Dn(i,this.array),s=Dn(s,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pf&&(e.usage=this.usage),e}}class ng extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ig extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const T_=new fr,Ea=new F,Ol=new F;class pa{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):T_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const t=Ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(Ol)),this.expandByPoint(Ea.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let A_=0;const Yn=new Tt,Fl=new pn,Pr=new F,Gn=new fr,Ta=new fr,hn=new F;class Xt extends fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o_(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return Fl.lookAt(e),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Gn.min,Ta.min),Gn.expandByPoint(hn),hn.addVectors(Gn.max,Ta.max),Gn.expandByPoint(hn)):(Gn.expandByPoint(Ta.min),Gn.expandByPoint(Ta.max))}Gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)hn.fromBufferAttribute(o,l),c&&(Pr.fromBufferAttribute(e,l),hn.add(Pr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new F,c[x]=new F;const l=new F,u=new F,d=new F,h=new nt,p=new nt,g=new nt,y=new F,m=new F;function f(x,E,k){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,k),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,k),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[x].add(y),o[E].add(y),o[k].add(y),c[x].add(m),c[E].add(m),c[k].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,E=v.length;x<E;++x){const k=v[x],C=k.start,U=k.count;for(let z=C,W=C+U;z<W;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new F,M=new F,T=new F,R=new F;function I(x){T.fromBufferAttribute(s,x),R.copy(T);const E=o[x];b.copy(E),b.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(R,E);const C=M.dot(c[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,C)}for(let x=0,E=v.length;x<E;++x){const k=v[x],C=k.start,U=k.count;for(let z=C,W=C+U;z<W;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Qn(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let R_=0;class ma extends fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=$r,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==ws&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ff&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new F,Bl=new F,Io=new F,ds=new F,zl=new F,Po=new F,Hl=new F;class sg{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bl.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Bl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Io),o=ds.dot(this.direction),c=-ds.dot(Io),l=ds.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const y=1/u;d*=y,h*=y,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bl).addScaledVector(Io,h),p}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),s=Bi.dot(Bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,s,r){zl.subVectors(t,e),Po.subVectors(i,e),Hl.crossVectors(zl,Po);let a=this.direction.dot(Hl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ds.subVectors(this.origin,e);const c=o*this.direction.dot(Po.crossVectors(ds,Po));if(c<0)return null;const l=o*this.direction.dot(zl.cross(ds));if(l<0||c+l>a)return null;const u=-o*ds.dot(Hl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const If=new Tt,ks=new sg,Lo=new pa,Pf=new F,Do=new F,No=new F,Uo=new F,Gl=new F,ko=new F,Lf=new F,Oo=new F;class Ke extends pn{constructor(e=new Xt,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(Gl.fromBufferAttribute(d,e),a?ko.addScaledVector(Gl,u):ko.addScaledVector(Gl.sub(t),u))}t.add(ko)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(Lo.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Lo,Pf)===null||ks.origin.distanceToSquared(Pf)>(e.far-e.near)**2))&&(If.copy(r).invert(),ks.copy(e.ray).applyMatrix4(If),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,T=b;M<T;M+=3){const R=o.getX(M),I=o.getX(M+1),x=o.getX(M+2);s=Fo(this,f,e,i,l,u,d,R,I,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=Fo(this,a,e,i,l,u,d,v,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,T=b;M<T;M+=3){const R=M,I=M+1,x=M+2;s=Fo(this,f,e,i,l,u,d,R,I,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=m,b=m+1,M=m+2;s=Fo(this,a,e,i,l,u,d,v,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function C_(n,e,t,i,s,r,a,o){let c;if(e.side===On?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ws,o),c===null)return null;Oo.copy(o),Oo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Oo);return l<t.near||l>t.far?null:{distance:l,point:Oo.clone(),object:n}}function Fo(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Do),n.getVertexPosition(c,No),n.getVertexPosition(l,Uo);const u=C_(n,e,t,i,Do,No,Uo,Lf);if(u){const d=new F;ai.getBarycoord(Lf,Do,No,Uo,d),s&&(u.uv=ai.getInterpolatedAttribute(s,o,c,l,d,new nt)),r&&(u.uv1=ai.getInterpolatedAttribute(r,o,c,l,d,new nt)),a&&(u.normal=ai.getInterpolatedAttribute(a,o,c,l,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new F,materialIndex:0};ai.getNormal(Do,No,Uo,h.normal),u.face=h,u.barycoord=d}return u}class rg extends Pn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=_n,u=_n,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xh extends Qn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lr=new Tt,Df=new Tt,Bo=[],Nf=new fr,I_=new Tt,Aa=new Ke,Ra=new pa;class P_ extends Ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,I_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),Nf.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(Nf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lr),Ra.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(i),e.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Lr),Df.multiplyMatrices(i,Lr),Aa.matrixWorld=Df,Aa.raycast(e,Bo);for(let a=0,o=Bo.length;a<o;a++){const c=Bo[a];c.instanceId=r,c.object=this,t.push(c)}Bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rg(new Float32Array(s*this.count),s,this.count,Vh,li));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vl=new F,L_=new F,D_=new Fe;class zs{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vl.subVectors(i,t).cross(L_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||D_.getNormalMatrix(e),s=this.coplanarPoint(Vl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new pa,N_=new nt(.5,.5),zo=new F;class Jh{constructor(e=new zs,t=new zs,i=new zs,s=new zs,r=new zs,a=new zs){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],v=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(l-a,p-u,f-g,T-v).normalize(),s[1].setComponents(l+a,p+u,f+g,T+v).normalize(),s[2].setComponents(l+o,p+d,f+y,T+b).normalize(),s[3].setComponents(l-o,p-d,f-y,T-b).normalize(),i)s[4].setComponents(c,h,m,M).normalize(),s[5].setComponents(l-c,p-h,f-m,T-M).normalize();else if(s[4].setComponents(l-c,p-h,f-m,T-M).normalize(),t===wi)s[5].setComponents(l+c,p+h,f+m,T+M).normalize();else if(t===qa)s[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const t=N_.distanceTo(e.center);return Os.radius=.7071067811865476+t,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ta extends ma{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new F,bc=new F,Uf=new Tt,Ca=new sg,Ho=new pa,Wl=new F,kf=new F;class ms extends pn{constructor(e=new Xt,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)vc.fromBufferAttribute(t,s-1),bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=vc.distanceTo(bc);e.setAttribute("lineDistance",new Ot(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Uf.copy(s).invert(),Ca.copy(e.ray).applyMatrix4(Uf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=l){const f=u.getX(y),v=u.getX(y+1),b=Go(this,e,Ca,c,f,v,y);b&&t.push(b)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(p),f=Go(this,e,Ca,c,y,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=l){const f=Go(this,e,Ca,c,y,y+1,y);f&&t.push(f)}if(this.isLineLoop){const y=Go(this,e,Ca,c,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Go(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(vc.fromBufferAttribute(o,s),bc.fromBufferAttribute(o,r),t.distanceSqToSegment(vc,bc,Wl,kf)>i)return;Wl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wl);if(!(l<e.near||l>e.far))return{distance:l,point:kf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class ag extends Pn{constructor(e=[],t=sr,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ka extends Pn{constructor(e,t,i=Ci,s,r,a,o=_n,c=_n,l,u=Qi,d=1){if(u!==Qi&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class U_ extends Ka{constructor(e,t=Ci,i=sr,s,r,a=_n,o=_n,c,l=Qi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class og extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pr extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(d,2));function g(y,m,f,v,b,M,T,R,I,x,E){const k=M/I,C=T/x,U=M/2,z=T/2,W=R/2,B=I+1,G=x+1;let O=0,Z=0;const K=new F;for(let he=0;he<G;he++){const xe=he*C-z;for(let pe=0;pe<B;pe++){const He=pe*k-U;K[y]=He*v,K[m]=xe*b,K[f]=W,l.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[f]=R>0?1:-1,u.push(K.x,K.y,K.z),d.push(pe/I),d.push(1-he/x),O+=1}}for(let he=0;he<x;he++)for(let xe=0;xe<I;xe++){const pe=h+xe+B*he,He=h+xe+B*(he+1),Lt=h+(xe+1)+B*(he+1),Pt=h+(xe+1)+B*he;c.push(pe,He,Pt),c.push(He,Lt,Pt),Z+=6}o.addGroup(p,Z,E),p+=Z,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Es extends Xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new F,u=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(o,3)),this.setAttribute("uv",new Ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zh extends Xt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const y=[],m=i/2;let f=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(p,2));function v(){const M=new F,T=new F;let R=0;const I=(t-e)/i;for(let x=0;x<=r;x++){const E=[],k=x/r,C=k*(t-e)+e;for(let U=0;U<=s;U++){const z=U/s,W=z*c+o,B=Math.sin(W),G=Math.cos(W);T.x=C*B,T.y=-k*i+m,T.z=C*G,d.push(T.x,T.y,T.z),M.set(B,I,G).normalize(),h.push(M.x,M.y,M.z),p.push(z,1-k),E.push(g++)}y.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const k=y[E][x],C=y[E+1][x],U=y[E+1][x+1],z=y[E][x+1];(e>0||E!==0)&&(u.push(k,C,z),R+=3),(t>0||E!==r-1)&&(u.push(C,U,z),R+=3)}l.addGroup(f,R,0),f+=R}function b(M){const T=g,R=new nt,I=new F;let x=0;const E=M===!0?e:t,k=M===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*k,0),h.push(0,k,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const W=U/s*c+o,B=Math.cos(W),G=Math.sin(W);I.x=E*G,I.y=m*k,I.z=E*B,d.push(I.x,I.y,I.z),h.push(0,k,0),R.x=B*.5+.5,R.y=G*.5*k+.5,p.push(R.x,R.y),g++}for(let U=0;U<s;U++){const z=T+U,W=C+U;M===!0?u.push(W,W+1,z):u.push(W+1,W,z),x+=3}l.addGroup(f,x,M===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ho extends Zh{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ho(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class es extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){const v=f*h-a;for(let b=0;b<l;b++){const M=b*d-r;g.push(M,-v,0),y.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){const b=v+l*f,M=v+l*(f+1),T=v+1+l*(f+1),R=v+1+l*f;p.push(b,M,R),p.push(M,T,R)}this.setIndex(p),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qh extends Xt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/s,p=new F,g=new nt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let y=0;y<s;y++){const m=y*(i+1);for(let f=0;f<i;f++){const v=f+m,b=v,M=v+i+1,T=v+i+2,R=v+1;o.push(b,M,R),o.push(M,T,R)}}this.setIndex(o),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function na(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Tn(n){const e={};for(let t=0;t<n.length;t++){const i=na(n[t]);for(const s in i)e[s]=i[s]}return e}function k_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const O_={clone:na,merge:Tn};var F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=k_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class z_ extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rc extends ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Km,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class H_ extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G_ extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lg extends ta{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class dg extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class hg extends dg{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Xl=new Tt,Of=new F,Ff=new F;class V_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jh,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Of.setFromMatrixPosition(e.matrixWorld),t.position.copy(Of),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new F,Wo=new ur,_i=new F;class ug extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Wo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vo,Wo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hs=new F,Bf=new nt,zf=new nt;class ri extends ug{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gh*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,Bf,zf),t.subVectors(zf,Bf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class uo extends ug{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class W_ extends V_{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends dg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new W_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Dr=-90,Nr=1;class X_ extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ri(Dr,Nr,e,t);s.layers=this.layers,this.add(s);const r=new ri(Dr,Nr,e,t);r.layers=this.layers,this.add(r);const a=new ri(Dr,Nr,e,t);a.layers=this.layers,this.add(a);const o=new ri(Dr,Nr,e,t);o.layers=this.layers,this.add(o);const c=new ri(Dr,Nr,e,t);c.layers=this.layers,this.add(c);const l=new ri(Dr,Nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $_ extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Hf(n,e,t,i){const s=Y_(i);switch(t){case jm:return n*e;case Vh:return n*e/s.components*s.byteLength;case Wh:return n*e/s.components*s.byteLength;case Qr:return n*e*2/s.components*s.byteLength;case Xh:return n*e*2/s.components*s.byteLength;case qm:return n*e*3/s.components*s.byteLength;case di:return n*e*4/s.components*s.byteLength;case $h:return n*e*4/s.components*s.byteLength;case tc:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ic:case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Hd:return Math.max(n,16)*Math.max(e,8)/4;case Fd:case zd:return Math.max(n,8)*Math.max(e,8)/2;case Gd:case Vd:case Xd:case $d:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wd:case Yd:case jd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lh:case dh:case hh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uh:case fh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ph:case mh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y_(n){switch(n){case $n:case Wm:return{byteLength:1,components:1};case Ya:case Xm:case Zi:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case Ci:case zh:case li:return{byteLength:4,components:1};case $m:case Ym:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function pg(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function j_(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ty=`#ifdef USE_AOMAP
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
#endif`,ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iy=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_y=`#define PI 3.141592653589793
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
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vy=`vec3 transformedNormal = objectNormal;
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
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
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
}`,Oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
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
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
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
#endif`,Yy=`uniform sampler2D dfgLUT;
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
}`,jy=`
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sv=`#if defined( USE_POINTS_UV )
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
#endif`,rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
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
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xv=`#ifdef USE_NORMALMAP
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
#endif`,_v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dv=`float getShadowMask() {
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
}`,Nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gv=`#ifdef USE_TRANSMISSION
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
#endif`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qv=`uniform sampler2D t2D;
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`#include <common>
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
}`,tb=`#if DEPTH_PACKING == 3200
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
}`,nb=`#define DISTANCE
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
}`,ib=`#define DISTANCE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
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
}`,ob=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,lb=`uniform vec3 diffuse;
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
}`,db=`#define LAMBERT
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
}`,hb=`#define LAMBERT
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
}`,ub=`#define MATCAP
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
}`,fb=`#define MATCAP
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
}`,pb=`#define NORMAL
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
}`,mb=`#define NORMAL
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
}`,gb=`#define PHONG
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
}`,xb=`#define PHONG
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
}`,_b=`#define STANDARD
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
}`,yb=`#define STANDARD
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
}`,vb=`#define TOON
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
}`,bb=`#define TOON
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
}`,Mb=`uniform float size;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Eb=`uniform vec3 color;
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
}`,Tb=`uniform float rotation;
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
}`,Ab=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:q_,alphahash_pars_fragment:K_,alphamap_fragment:J_,alphamap_pars_fragment:Z_,alphatest_fragment:Q_,alphatest_pars_fragment:ey,aomap_fragment:ty,aomap_pars_fragment:ny,batching_pars_vertex:iy,batching_vertex:sy,begin_vertex:ry,beginnormal_vertex:ay,bsdfs:oy,iridescence_fragment:cy,bumpmap_pars_fragment:ly,clipping_planes_fragment:dy,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:uy,clipping_planes_vertex:fy,color_fragment:py,color_pars_fragment:my,color_pars_vertex:gy,color_vertex:xy,common:_y,cube_uv_reflection_fragment:yy,defaultnormal_vertex:vy,displacementmap_pars_vertex:by,displacementmap_vertex:My,emissivemap_fragment:Sy,emissivemap_pars_fragment:wy,colorspace_fragment:Ey,colorspace_pars_fragment:Ty,envmap_fragment:Ay,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Cy,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Hy,envmap_vertex:Py,fog_vertex:Ly,fog_pars_vertex:Dy,fog_fragment:Ny,fog_pars_fragment:Uy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Oy,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:By,lights_pars_begin:zy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Vy,lights_phong_fragment:Wy,lights_phong_pars_fragment:Xy,lights_physical_fragment:$y,lights_physical_pars_fragment:Yy,lights_fragment_begin:jy,lights_fragment_maps:qy,lights_fragment_end:Ky,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:ev,map_fragment:tv,map_pars_fragment:nv,map_particle_fragment:iv,map_particle_pars_fragment:sv,metalnessmap_fragment:rv,metalnessmap_pars_fragment:av,morphinstance_vertex:ov,morphcolor_vertex:cv,morphnormal_vertex:lv,morphtarget_pars_vertex:dv,morphtarget_vertex:hv,normal_fragment_begin:uv,normal_fragment_maps:fv,normal_pars_fragment:pv,normal_pars_vertex:mv,normal_vertex:gv,normalmap_pars_fragment:xv,clearcoat_normal_fragment_begin:_v,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:vv,iridescence_pars_fragment:bv,opaque_fragment:Mv,packing:Sv,premultiplied_alpha_fragment:wv,project_vertex:Ev,dithering_fragment:Tv,dithering_pars_fragment:Av,roughnessmap_fragment:Rv,roughnessmap_pars_fragment:Cv,shadowmap_pars_fragment:Iv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Dv,skinbase_vertex:Nv,skinning_pars_vertex:Uv,skinning_vertex:kv,skinnormal_vertex:Ov,specularmap_fragment:Fv,specularmap_pars_fragment:Bv,tonemapping_fragment:zv,tonemapping_pars_fragment:Hv,transmission_fragment:Gv,transmission_pars_fragment:Vv,uv_pars_fragment:Wv,uv_pars_vertex:Xv,uv_vertex:$v,worldpos_vertex:Yv,background_vert:jv,background_frag:qv,backgroundCube_vert:Kv,backgroundCube_frag:Jv,cube_vert:Zv,cube_frag:Qv,depth_vert:eb,depth_frag:tb,distance_vert:nb,distance_frag:ib,equirect_vert:sb,equirect_frag:rb,linedashed_vert:ab,linedashed_frag:ob,meshbasic_vert:cb,meshbasic_frag:lb,meshlambert_vert:db,meshlambert_frag:hb,meshmatcap_vert:ub,meshmatcap_frag:fb,meshnormal_vert:pb,meshnormal_frag:mb,meshphong_vert:gb,meshphong_frag:xb,meshphysical_vert:_b,meshphysical_frag:yb,meshtoon_vert:vb,meshtoon_frag:bb,points_vert:Mb,points_frag:Sb,shadow_vert:wb,shadow_frag:Eb,sprite_vert:Tb,sprite_frag:Ab},ce={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},bi={basic:{uniforms:Tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Tn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Tn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Tn([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Tn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Tn([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Tn([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Tn([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Tn([ce.lights,ce.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};bi.physical={uniforms:Tn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Xo={r:0,b:0,g:0},Fs=new Ii,Rb=new Tt;function Cb(n,e,t,i,s,r){const a=new Qe(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function p(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const M=v.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(v){let b=!1;const M=p(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,b){const M=p(b);M&&(M.isCubeTexture||M.mapping===$c)?(l===void 0&&(l=new Ke(new pr(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:na(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Fs.copy(b.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(Fs)),l.material.toneMapped=at.getTransfer(M.colorSpace)!==mt,(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ke(new es(2,2),new Pi({name:"BackgroundMaterial",uniforms:na(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(Xo,cg(n)),t.buffers.color.setClear(Xo.r,Xo.g,Xo.b,b,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:y,dispose:f}}function Ib(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(C,U,z,W,B){let G=!1;const O=d(C,W,z,U);r!==O&&(r=O,l(r.object)),G=p(C,W,z,B),G&&g(C,W,z,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(C,U,z,W),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,U,z,W){const B=W.wireframe===!0;let G=i[U.id];G===void 0&&(G={},i[U.id]=G);const O=C.isInstancedMesh===!0?C.id:0;let Z=G[O];Z===void 0&&(Z={},G[O]=Z);let K=Z[z.id];K===void 0&&(K={},Z[z.id]=K);let he=K[B];return he===void 0&&(he=h(c()),K[B]=he),he}function h(C){const U=[],z=[],W=[];for(let B=0;B<t;B++)U[B]=0,z[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:W,object:C,attributes:{},index:null}}function p(C,U,z,W){const B=r.attributes,G=U.attributes;let O=0;const Z=z.getAttributes();for(const K in Z)if(Z[K].location>=0){const xe=B[K];let pe=G[K];if(pe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),xe===void 0||xe.attribute!==pe||pe&&xe.data!==pe.data)return!0;O++}return r.attributesNum!==O||r.index!==W}function g(C,U,z,W){const B={},G=U.attributes;let O=0;const Z=z.getAttributes();for(const K in Z)if(Z[K].location>=0){let xe=G[K];xe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const pe={};pe.attribute=xe,xe&&xe.data&&(pe.data=xe.data),B[K]=pe,O++}r.attributes=B,r.attributesNum=O,r.index=W}function y(){const C=r.newAttributes;for(let U=0,z=C.length;U<z;U++)C[U]=0}function m(C){f(C,0)}function f(C,U){const z=r.newAttributes,W=r.enabledAttributes,B=r.attributeDivisors;z[C]=1,W[C]===0&&(n.enableVertexAttribArray(C),W[C]=1),B[C]!==U&&(n.vertexAttribDivisor(C,U),B[C]=U)}function v(){const C=r.newAttributes,U=r.enabledAttributes;for(let z=0,W=U.length;z<W;z++)U[z]!==C[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function b(C,U,z,W,B,G,O){O===!0?n.vertexAttribIPointer(C,U,z,B,G):n.vertexAttribPointer(C,U,z,W,B,G)}function M(C,U,z,W){y();const B=W.attributes,G=z.getAttributes(),O=U.defaultAttributeValues;for(const Z in G){const K=G[Z];if(K.location>=0){let he=B[Z];if(he===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const xe=he.normalized,pe=he.itemSize,He=e.get(he);if(He===void 0)continue;const Lt=He.buffer,Pt=He.type,q=He.bytesPerElement,ie=Pt===n.INT||Pt===n.UNSIGNED_INT||he.gpuType===zh;if(he.isInterleavedBufferAttribute){const ae=he.data,Oe=ae.stride,Re=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<K.locationSize;Pe++)f(K.location+Pe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<K.locationSize;Pe++)m(K.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let Pe=0;Pe<K.locationSize;Pe++)b(K.location+Pe,pe/K.locationSize,Pt,xe,Oe*q,(Re+pe/K.locationSize*Pe)*q,ie)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)f(K.location+ae,he.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let ae=0;ae<K.locationSize;ae++)b(K.location+ae,pe/K.locationSize,Pt,xe,pe*q,pe/K.locationSize*ae*q,ie)}}else if(O!==void 0){const xe=O[Z];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(K.location,xe);break;case 3:n.vertexAttrib3fv(K.location,xe);break;case 4:n.vertexAttrib4fv(K.location,xe);break;default:n.vertexAttrib1fv(K.location,xe)}}}}v()}function T(){E();for(const C in i){const U=i[C];for(const z in U){const W=U[z];for(const B in W){const G=W[B];for(const O in G)u(G[O].object),delete G[O];delete W[B]}}delete i[C]}}function R(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const z in U){const W=U[z];for(const B in W){const G=W[B];for(const O in G)u(G[O].object),delete G[O];delete W[B]}}delete i[C.id]}function I(C){for(const U in i){const z=i[U];for(const W in z){const B=z[W];if(B[C.id]===void 0)continue;const G=B[C.id];for(const O in G)u(G[O].object),delete G[O];delete B[C.id]}}}function x(C){for(const U in i){const z=i[U],W=C.isInstancedMesh===!0?C.id:0,B=z[W];if(B!==void 0){for(const G in B){const O=B[G];for(const Z in O)u(O[Z].object),delete O[Z];delete B[G]}delete z[W],Object.keys(z).length===0&&delete i[U]}}}function E(){k(),a=!0,r!==s&&(r=s,l(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Pb(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*h[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Lb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==di&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==$n&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==li&&!x)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:R}}function Db(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new zs,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,b=v*4;let M=f.clippingState||null;c.value=M,M=u(g,h,b,p);for(let T=0;T!==b;++T)M[T]=t[T];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const f=p+y*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=p;b!==y;++b,M+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const gs=4,Gf=[.125,.215,.35,.446,.526,.582],Vs=20,Nb=256,Ia=new uo,Vf=new Qe;let $l=null,Yl=0,jl=0,ql=!1;const Ub=new F;class Wf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Ub}=r;$l=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Yl,jl),this._renderer.xr.enabled=ql,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Zi,format:di,colorSpace:ea,depthBuffer:!1},s=Xf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kb(r)),this._blurMaterial=Fb(r,e,t),this._ggxMaterial=Ob(r,e,t)}return s}_compileMaterial(e){const t=new Ke(new Xt,e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,i,s,r){const c=new ri(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Vf),d.toneMapping=Ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new pr,new ui({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(Vf),f=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const T=this._cubeSize;Ur(s,M*T,b>2?T:0,T,T),d.setRenderTarget(s),f&&d.render(y,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===sr||e.mapping===Zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ur(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ia)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,p=d*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-gs?i-g+gs:0),f=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Ur(r,m,f,3*y,2*y),s.setRenderTarget(r),s.render(o,Ia),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Ur(e,m,f,3*y,2*y),s.setRenderTarget(e),s.render(o,Ia)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vs-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):Vs;m>Vs&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);const f=[];let v=0;for(let I=0;I<Vs;++I){const x=I/y,E=Math.exp(-x*x/2);f.push(E),I===0?v+=E:I<m&&(v+=2*E)}for(let I=0;I<f.length;I++)f[I]=f[I]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const M=this._sizeLods[s],T=3*M*(s>b-gs?s-b+gs:0),R=4*(this._cubeSize-M);Ur(t,T,R,3*M,2*M),c.setRenderTarget(t),c.render(d,Ia)}}function kb(n){const e=[],t=[],i=[];let s=n;const r=n-gs+1+Gf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-gs?c=Gf[a-n+gs-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,m=2,f=1,v=new Float32Array(y*g*p),b=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,x=R>2?0:-1,E=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];v.set(E,y*g*R),b.set(h,m*g*R);const k=[R,R,R,R,R,R];M.set(k,f*g*R)}const T=new Xt;T.setAttribute("position",new Qn(v,y)),T.setAttribute("uv",new Qn(b,m)),T.setAttribute("faceIndex",new Qn(M,f)),i.push(new Ke(T,null)),s>gs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Xf(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ob(n,e,t){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Fb(n,e,t){const i=new Float32Array(Vs),s=new F(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function $f(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Yf(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}class mg extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ag(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pr(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:ji});r.uniforms.tEquirect.value=t;const a=new Ke(s,r),o=t.minFilter;return t.minFilter===Xs&&(t.minFilter=wn),new X_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Bb(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===xl||p===_l)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new mg(g.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===xl||p===_l,y=p===sr||p===Zr;if(g||y){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Wf(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||y&&v&&c(v)?(i===null&&(i=new Wf(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===xl?h.mapping=sr:p===_l&&(h.mapping=Zr),h}function c(h){let p=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function zb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&yc("WebGLRenderer: "+i+" extension not supported."),s}}}function Hb(n,e,t,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const v=p.array;y=p.version;for(let b=0,M=v.length;b<M;b+=3){const T=v[b+0],R=v[b+1],I=v[b+2];h.push(T,R,R,I,I,T)}}else{const v=g.array;y=g.version;for(let b=0,M=v.length/3-1;b<M;b+=3){const T=b+0,R=b+1,I=b+2;h.push(T,R,R,I,I,T)}}const m=new(g.count>=65535?ig:ng)(h,1);m.version=y;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Gb(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,p){n.drawElements(i,p,r,h*a),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,h*a,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(h,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,y,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*y[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Wb(n,e,t){const i=new WeakMap,s=new Wt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let k=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",k)};var p=k;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*R*4*d),x=new Zm(I,T,R,d);x.type=li,x.needsUpdate=!0;const E=M*4;for(let C=0;C<d;C++){const U=f[C],z=v[C],W=b[C],B=T*R*4*C;for(let G=0;G<U.count;G++){const O=G*E;g===!0&&(s.fromBufferAttribute(U,G),I[B+O+0]=s.x,I[B+O+1]=s.y,I[B+O+2]=s.z,I[B+O+3]=0),y===!0&&(s.fromBufferAttribute(z,G),I[B+O+4]=s.x,I[B+O+5]=s.y,I[B+O+6]=s.z,I[B+O+7]=0),m===!0&&(s.fromBufferAttribute(W,G),I[B+O+8]=s.x,I[B+O+9]=s.y,I[B+O+10]=s.z,I[B+O+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new nt(T,R)},i.set(o,h),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Xb(n,e,t,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const $b={[km]:"LINEAR_TONE_MAPPING",[Om]:"REINHARD_TONE_MAPPING",[Fm]:"CINEON_TONE_MAPPING",[Bm]:"ACES_FILMIC_TONE_MAPPING",[Hm]:"AGX_TONE_MAPPING",[Gm]:"NEUTRAL_TONE_MAPPING",[zm]:"CUSTOM_TONE_MAPPING"};function Yb(n,e,t,i,s){const r=new Ri(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),a=new Ri(e,t,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),o=new Xt;o.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const c=new z_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ke(o,c),u=new uo(-1,1,1,-1,0,1);let d=null,h=null,p=!1,g,y=null,m=[],f=!1;this.setSize=function(v,b){r.setSize(v,b),a.setSize(v,b);for(let M=0;M<m.length;M++){const T=m[M];T.setSize&&T.setSize(v,b)}},this.setEffects=function(v){m=v,f=m.length>0&&m[0].isRenderPass===!0;const b=r.width,M=r.height;for(let T=0;T<m.length;T++){const R=m[T];R.setSize&&R.setSize(b,M)}},this.begin=function(v,b){if(p||v.toneMapping===Ai&&m.length===0)return!1;if(y=b,b!==null){const M=b.width,T=b.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return f===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=Ai,!0},this.hasRenderPass=function(){return f},this.end=function(v,b){v.toneMapping=g,p=!0;let M=r,T=a;for(let R=0;R<m.length;R++){const I=m[R];if(I.enabled!==!1&&(I.render(v,T,M,b),I.needsSwap!==!1)){const x=M;M=T,T=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,c.defines={},at.getTransfer(d)===mt&&(c.defines.SRGB_TRANSFER="");const R=$b[h];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(y),v.render(l,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const gg=new Pn,_h=new Ka(1,1),xg=new Zm,_g=new x_,yg=new ag,jf=[],qf=[],Kf=new Float32Array(16),Jf=new Float32Array(9),Zf=new Float32Array(4);function ga(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=jf[s];if(r===void 0&&(r=new Float32Array(s),jf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jc(n,e){let t=qf[e];t===void 0&&(t=new Int32Array(e),qf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function Jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function Zb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(on(t,i))return;Zf.set(i),n.uniformMatrix2fv(this.addr,!1,Zf),cn(t,i)}}function Qb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(on(t,i))return;Jf.set(i),n.uniformMatrix3fv(this.addr,!1,Jf),cn(t,i)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(on(t,i))return;Kf.set(i),n.uniformMatrix4fv(this.addr,!1,Kf),cn(t,i)}}function tM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function rM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function lM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_h.compareFunction=t.isReversedDepthBuffer()?jh:Yh,r=_h):r=gg,t.setTexture2D(e||r,s)}function dM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_g,s)}function hM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||yg,s)}function uM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xg,s)}function fM(n){switch(n){case 5126:return jb;case 35664:return qb;case 35665:return Kb;case 35666:return Jb;case 35674:return Zb;case 35675:return Qb;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return sM;case 5125:return rM;case 36294:return aM;case 36295:return oM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}function pM(n,e){n.uniform1fv(this.addr,e)}function mM(n,e){const t=ga(e,this.size,2);n.uniform2fv(this.addr,t)}function gM(n,e){const t=ga(e,this.size,3);n.uniform3fv(this.addr,t)}function xM(n,e){const t=ga(e,this.size,4);n.uniform4fv(this.addr,t)}function _M(n,e){const t=ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yM(n,e){const t=ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vM(n,e){const t=ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bM(n,e){n.uniform1iv(this.addr,e)}function MM(n,e){n.uniform2iv(this.addr,e)}function SM(n,e){n.uniform3iv(this.addr,e)}function wM(n,e){n.uniform4iv(this.addr,e)}function EM(n,e){n.uniform1uiv(this.addr,e)}function TM(n,e){n.uniform2uiv(this.addr,e)}function AM(n,e){n.uniform3uiv(this.addr,e)}function RM(n,e){n.uniform4uiv(this.addr,e)}function CM(n,e,t){const i=this.cache,s=e.length,r=jc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=_h:a=gg;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function IM(n,e,t){const i=this.cache,s=e.length,r=jc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_g,r[a])}function PM(n,e,t){const i=this.cache,s=e.length,r=jc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||yg,r[a])}function LM(n,e,t){const i=this.cache,s=e.length,r=jc(t,s);on(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xg,r[a])}function DM(n){switch(n){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return xM;case 35674:return _M;case 35675:return yM;case 35676:return vM;case 5124:case 35670:return bM;case 35667:case 35671:return MM;case 35668:case 35672:return SM;case 35669:case 35673:return wM;case 5125:return EM;case 36294:return TM;case 36295:return AM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return LM}}class NM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fM(t.type)}}class UM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DM(t.type)}}class kM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function Qf(n,e){n.seq.push(e),n.map[e.id]=e}function OM(n,e,t){const i=n.name,s=i.length;for(Kl.lastIndex=0;;){const r=Kl.exec(i),a=Kl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Qf(t,l===void 0?new NM(o,n,e):new UM(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new kM(o),Qf(t,d)),t=d}}}class ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);OM(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ep(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const FM=37297;let BM=0;function zM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const tp=new Fe;function HM(n){at._getMatrix(tp,at.workingColorSpace,n);const e=`mat3( ${tp.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case xc:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function np(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+zM(n.getShaderSource(e),o)}else return r}function GM(n,e){const t=HM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const VM={[km]:"Linear",[Om]:"Reinhard",[Fm]:"Cineon",[Bm]:"ACESFilmic",[Hm]:"AgX",[Gm]:"Neutral",[zm]:"Custom"};function WM(n,e){const t=VM[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $o=new F;function XM(){at.getLuminanceCoefficients($o);const n=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function YM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ua(n){return n!==""}function ip(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(n){return n.replace(qM,JM)}const KM=new Map;function JM(n,e){let t=Ge[e];if(t===void 0){const i=KM.get(e);if(i!==void 0)t=Ge[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yh(t)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(n){return n.replace(ZM,QM)}function QM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ap(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const eS={[za]:"SHADOWMAP_TYPE_PCF",[Na]:"SHADOWMAP_TYPE_VSM"};function tS(n){return eS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nS={[sr]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function iS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":nS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const sS={[Zr]:"ENVMAP_MODE_REFRACTION"};function rS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aS={[Um]:"ENVMAP_BLENDING_MULTIPLY",[Kx]:"ENVMAP_BLENDING_MIX",[Jx]:"ENVMAP_BLENDING_ADD"};function oS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":aS[n.combine]||"ENVMAP_BLENDING_NONE"}function cS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=tS(t),l=iS(t),u=rS(t),d=oS(t),h=cS(t),p=$M(t),g=YM(r),y=s.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ua).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ua).join(`
`),f.length>0&&(f+=`
`)):(m=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),f=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ai?WM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),a=yh(a),a=ip(a,t),a=sp(a,t),o=yh(o),o=ip(o,t),o=sp(o,t),a=rp(a),o=rp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=v+m+a,M=v+f+o,T=ep(s,s.VERTEX_SHADER,b),R=ep(s,s.FRAGMENT_SHADER,M);s.attachShader(y,T),s.attachShader(y,R),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(C){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(T)||"",W=s.getShaderInfoLog(R)||"",B=U.trim(),G=z.trim(),O=W.trim();let Z=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,R);else{const he=np(s,T,"vertex"),xe=np(s,R,"fragment");lt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+he+`
`+xe)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(G===""||O==="")&&(K=!1);K&&(C.diagnostics={runnable:Z,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:f}})}s.deleteShader(T),s.deleteShader(R),x=new ac(s,y),E=jM(s,y)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(y,FM)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=R,this}let dS=0;class hS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new uS(e),t.set(e,i)),i}}class uS{constructor(e){this.id=dS++,this.code=e,this.usedTimes=0}}function fS(n,e,t,i,s,r){const a=new Qm,o=new hS,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,E,k,C,U){const z=C.fog,W=U.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||B,G),Z=O&&O.mapping===$c?O.image.height:null,K=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=he!==void 0?he.length:0;let pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let He,Lt,Pt,q;if(K){const pt=bi[K];He=pt.vertexShader,Lt=pt.fragmentShader}else He=x.vertexShader,Lt=x.fragmentShader,o.update(x),Pt=o.getVertexShaderID(x),q=o.getFragmentShaderID(x);const ie=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,Pe=!!x.map,ln=!!x.matcap,rt=!!O,ft=!!x.aoMap,Mt=!!x.lightMap,Ve=!!x.bumpMap,$t=!!x.normalMap,P=!!x.displacementMap,Qt=!!x.emissiveMap,ut=!!x.metalnessMap,At=!!x.roughnessMap,Se=x.anisotropy>0,A=x.clearcoat>0,_=x.dispersion>0,D=x.iridescence>0,j=x.sheen>0,J=x.transmission>0,Y=Se&&!!x.anisotropyMap,_e=A&&!!x.clearcoatMap,se=A&&!!x.clearcoatNormalMap,Ae=A&&!!x.clearcoatRoughnessMap,Ie=D&&!!x.iridescenceMap,Q=D&&!!x.iridescenceThicknessMap,te=j&&!!x.sheenColorMap,ye=j&&!!x.sheenRoughnessMap,be=!!x.specularMap,fe=!!x.specularColorMap,We=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,re=J&&!!x.thicknessMap,ne=!!x.gradientMap,ge=!!x.alphaMap,ee=x.alphaTest>0,$=!!x.alphaHash,ve=!!x.extensions;let De=Ai;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(De=n.toneMapping);const Rt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:Lt,defines:x.defines,customVertexShaderID:Pt,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ea,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:ln,envMap:rt,envMapMode:rt&&O.mapping,envMapCubeUVHeight:Z,aoMap:ft,lightMap:Mt,bumpMap:Ve,normalMap:$t,displacementMap:P,emissiveMap:Qt,normalMapObjectSpace:$t&&x.normalMapType===e_,normalMapTangentSpace:$t&&x.normalMapType===Km,metalnessMap:ut,roughnessMap:At,anisotropy:Se,anisotropyMap:Y,clearcoat:A,clearcoatMap:_e,clearcoatNormalMap:se,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:D,iridescenceMap:Ie,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:te,sheenRoughnessMap:ye,specularMap:be,specularColorMap:fe,specularIntensityMap:We,transmission:J,transmissionMap:L,thicknessMap:re,gradientMap:ne,opaque:x.transparent===!1&&x.blending===$r&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:$,combine:x.combine,mapUv:Pe&&g(x.map.channel),aoMapUv:ft&&g(x.aoMap.channel),lightMapUv:Mt&&g(x.lightMap.channel),bumpMapUv:Ve&&g(x.bumpMap.channel),normalMapUv:$t&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:Qt&&g(x.emissiveMap.channel),metalnessMapUv:ut&&g(x.metalnessMap.channel),roughnessMapUv:At&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:fe&&g(x.specularColorMap.channel),specularIntensityMapUv:We&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:re&&g(x.thicknessMap.channel),alphaMapUv:ge&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&($t||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Pe||ge),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&$t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Qt&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Si,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)E.push(k),E.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(f(E,x),v(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const E=p[x.type];let k;if(E){const C=bi[E];k=O_.clone(C.uniforms)}else k=x.uniforms;return k}function M(x,E){let k=u.get(E);return k!==void 0?++k.usedTimes:(k=new lS(n,E,x,s),l.push(k),u.set(E,k)),k}function T(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:T,releaseShaderCache:R,programs:l,dispose:I}}function pS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function mS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function op(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cp(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,y,m,f){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},n[e]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=y,v.renderOrder=h.renderOrder,v.z=m,v.group=f),e++,v}function c(h,p,g,y,m,f){const v=o(h,p,g,y,m,f);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):t.push(v)}function l(h,p,g,y,m,f){const v=o(h,p,g,y,m,f);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,p){t.length>1&&t.sort(h||mS),i.length>1&&i.sort(p||op),s.length>1&&s.sort(p||op)}function d(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function gS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new cp,n.set(i,[a])):s>=r.length?(a=new cp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Qe};break;case"SpotLight":t={position:new F,direction:new F,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function _S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yS=0;function vS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bS(n){const e=new xS,t=_S(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const s=new F,r=new Tt,a=new Tt;function o(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,v=0,b=0,M=0,T=0,R=0,I=0;l.sort(vS);for(let E=0,k=l.length;E<k;E++){const C=l[E],U=C.color,z=C.intensity,W=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Qr?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=U.r*z,d+=U.g*z,h+=U.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],z);I++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[y]=G;const O=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,O.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[y]=O.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.spotShadow[y]=Z,i.spotShadowMap[y]=B,M++}y++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const O=C.shadow,Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,x.directionalLength=p,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=I,i.version=yS++)}function c(l,u){let d=0,h=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const b=l[f];if(b.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:i}}function lp(n){const e=new bS(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function MS(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new lp(n),e.set(s,[o])):r>=a.length?(o=new lp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const SS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
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
}`,ES=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],TS=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],dp=new Tt,Pa=new F,Jl=new F;function AS(n,e,t){let i=new Jh;const s=new nt,r=new nt,a=new Wt,o=new H_,c=new G_,l={},u=t.maxTextureSize,d={[ws]:On,[On]:ws,[Si]:Si},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:SS,fragmentShader:wS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ke(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let f=this.type;this.render=function(R,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Px&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=za);const E=n.getRenderTarget(),k=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ji),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=f!==this.type;z&&I.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=R.length;W<B;W++){const G=R[W],O=G.shadow;if(O===void 0){Le("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Z=O.getFrameExtents();s.multiply(Z),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,O.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=K,O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Na){if(G.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ri(s.x,s.y,{format:Qr,type:Zi,minFilter:wn,magFilter:wn,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new Ka(s.x,s.y,li),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=Qi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=_n,O.map.depthTexture.magFilter=_n}else G.isPointLight?(O.map=new mg(s.x),O.map.depthTexture=new U_(s.x,Ci)):(O.map=new Ri(s.x,s.y),O.map.depthTexture=new Ka(s.x,s.y,Ci)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=Qi,this.type===za?(O.map.depthTexture.compareFunction=K?jh:Yh,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=_n,O.map.depthTexture.magFilter=_n);O.camera.updateProjectionMatrix()}const he=O.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<he;xe++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,xe),n.clear();else{xe===0&&(n.setRenderTarget(O.map),n.clear());const pe=O.getViewport(xe);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),U.viewport(a)}if(G.isPointLight){const pe=O.camera,He=O.matrix,Lt=G.distance||pe.far;Lt!==pe.far&&(pe.far=Lt,pe.updateProjectionMatrix()),Pa.setFromMatrixPosition(G.matrixWorld),pe.position.copy(Pa),Jl.copy(pe.position),Jl.add(ES[xe]),pe.up.copy(TS[xe]),pe.lookAt(Jl),pe.updateMatrixWorld(),He.makeTranslation(-Pa.x,-Pa.y,-Pa.z),dp.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(dp,pe.coordinateSystem,pe.reversedDepth)}else O.updateMatrices(G);i=O.getFrustum(),M(I,x,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===Na&&v(O,x),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,k,C)};function v(R,I){const x=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(s.x,s.y,{format:Qr,type:Zi})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,x,h,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,x,p,y,null)}function b(R,I,x,E){let k=null;const C=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)k=C;else if(k=x.isPointLight===!0?c:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const U=k.uuid,z=I.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let B=W[z];B===void 0&&(B=k.clone(),W[z]=B,I.addEventListener("dispose",T)),k=B}if(k.visible=I.visible,k.wireframe=I.wireframe,E===Na?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:d[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,x.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const U=n.properties.get(k);U.light=x}return k}function M(R,I,x,E,k){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===Na)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);const z=e.update(R),W=R.material;if(Array.isArray(W)){const B=z.groups;for(let G=0,O=B.length;G<O;G++){const Z=B[G],K=W[Z.materialIndex];if(K&&K.visible){const he=b(R,K,E,k);R.onBeforeShadow(n,R,I,x,z,he,Z),n.renderBufferDirect(x,null,z,he,R,Z),R.onAfterShadow(n,R,I,x,z,he,Z)}}}else if(W.visible){const B=b(R,W,E,k);R.onBeforeShadow(n,R,I,x,z,B,null),n.renderBufferDirect(x,null,z,B,R,null),R.onAfterShadow(n,R,I,x,z,B,null)}}const U=R.children;for(let z=0,W=U.length;z<W;z++)M(U[z],I,x,E,k)}function T(R){R.target.removeEventListener("dispose",T);for(const x in l){const E=l[x],k=R.target.uuid;k in E&&(E[k].dispose(),delete E[k])}}}function RS(n,e){function t(){let L=!1;const re=new Wt;let ne=null;const ge=new Wt(0,0,0,0);return{setMask:function(ee){ne!==ee&&!L&&(n.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){L=ee},setClear:function(ee,$,ve,De,Rt){Rt===!0&&(ee*=De,$*=De,ve*=De),re.set(ee,$,ve,De),ge.equals(re)===!1&&(n.clearColor(ee,$,ve,De),ge.copy(re))},reset:function(){L=!1,ne=null,ge.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,ne=null,ge=null,ee=null;return{setReversed:function($){if(re!==$){const ve=e.get("EXT_clip_control");$?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),re=$;const De=ee;ee=null,this.setClear(De)}},getReversed:function(){return re},setTest:function($){$?ie(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function($){ne!==$&&!L&&(n.depthMask($),ne=$)},setFunc:function($){if(re&&($=d_[$]),ge!==$){switch($){case Cd:n.depthFunc(n.NEVER);break;case Id:n.depthFunc(n.ALWAYS);break;case Pd:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case Ld:n.depthFunc(n.EQUAL);break;case Dd:n.depthFunc(n.GEQUAL);break;case Nd:n.depthFunc(n.GREATER);break;case Ud:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=$}},setLocked:function($){L=$},setClear:function($){ee!==$&&(ee=$,re&&($=1-$),n.clearDepth($))},reset:function(){L=!1,ne=null,ge=null,ee=null,re=!1}}}function s(){let L=!1,re=null,ne=null,ge=null,ee=null,$=null,ve=null,De=null,Rt=null;return{setTest:function(pt){L||(pt?ie(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(pt){re!==pt&&!L&&(n.stencilMask(pt),re=pt)},setFunc:function(pt,Di,Ni){(ne!==pt||ge!==Di||ee!==Ni)&&(n.stencilFunc(pt,Di,Ni),ne=pt,ge=Di,ee=Ni)},setOp:function(pt,Di,Ni){($!==pt||ve!==Di||De!==Ni)&&(n.stencilOp(pt,Di,Ni),$=pt,ve=Di,De=Ni)},setLocked:function(pt){L=pt},setClear:function(pt){Rt!==pt&&(n.clearStencil(pt),Rt=pt)},reset:function(){L=!1,re=null,ne=null,ge=null,ee=null,$=null,ve=null,De=null,Rt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,y=!1,m=null,f=null,v=null,b=null,M=null,T=null,R=null,I=new Qe(0,0,0),x=0,E=!1,k=null,C=null,U=null,z=null,W=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=O>=2);let K=null,he={};const xe=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),He=new Wt().fromArray(xe),Lt=new Wt().fromArray(pe);function Pt(L,re,ne,ge){const ee=new Uint8Array(4),$=n.createTexture();n.bindTexture(L,$),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<ne;ve++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(re+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return $}const q={};q[n.TEXTURE_2D]=Pt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Jr),Ve(!1),$t(lf),ie(n.CULL_FACE),ft(ji);function ie(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ae(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Oe(L,re){return d[L]!==re?(n.bindFramebuffer(L,re),d[L]=re,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Re(L,re){let ne=p,ge=!1;if(L){ne=h.get(re),ne===void 0&&(ne=[],h.set(re,ne));const ee=L.textures;if(ne.length!==ee.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let $=0,ve=ee.length;$<ve;$++)ne[$]=n.COLOR_ATTACHMENT0+$;ne.length=ee.length,ge=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ne)}function Pe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const ln={[Gs]:n.FUNC_ADD,[Dx]:n.FUNC_SUBTRACT,[Nx]:n.FUNC_REVERSE_SUBTRACT};ln[Ux]=n.MIN,ln[kx]=n.MAX;const rt={[Ox]:n.ZERO,[Fx]:n.ONE,[Bx]:n.SRC_COLOR,[Ad]:n.SRC_ALPHA,[Xx]:n.SRC_ALPHA_SATURATE,[Vx]:n.DST_COLOR,[Hx]:n.DST_ALPHA,[zx]:n.ONE_MINUS_SRC_COLOR,[Rd]:n.ONE_MINUS_SRC_ALPHA,[Wx]:n.ONE_MINUS_DST_COLOR,[Gx]:n.ONE_MINUS_DST_ALPHA,[$x]:n.CONSTANT_COLOR,[Yx]:n.ONE_MINUS_CONSTANT_COLOR,[jx]:n.CONSTANT_ALPHA,[qx]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(L,re,ne,ge,ee,$,ve,De,Rt,pt){if(L===ji){y===!0&&(ae(n.BLEND),y=!1);return}if(y===!1&&(ie(n.BLEND),y=!0),L!==Lx){if(L!==m||pt!==E){if((f!==Gs||M!==Gs)&&(n.blendEquation(n.FUNC_ADD),f=Gs,M=Gs),pt)switch(L){case $r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case df:n.blendFunc(n.ONE,n.ONE);break;case hf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",L);break}else switch(L){case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case df:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hf:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uf:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",L);break}v=null,b=null,T=null,R=null,I.set(0,0,0),x=0,m=L,E=pt}return}ee=ee||re,$=$||ne,ve=ve||ge,(re!==f||ee!==M)&&(n.blendEquationSeparate(ln[re],ln[ee]),f=re,M=ee),(ne!==v||ge!==b||$!==T||ve!==R)&&(n.blendFuncSeparate(rt[ne],rt[ge],rt[$],rt[ve]),v=ne,b=ge,T=$,R=ve),(De.equals(I)===!1||Rt!==x)&&(n.blendColor(De.r,De.g,De.b,Rt),I.copy(De),x=Rt),m=L,E=!1}function Mt(L,re){L.side===Si?ae(n.CULL_FACE):ie(n.CULL_FACE);let ne=L.side===On;re&&(ne=!ne),Ve(ne),L.blending===$r&&L.transparent===!1?ft(ji):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Qt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){k!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),k=L)}function $t(L){L!==Cx?(ie(n.CULL_FACE),L!==C&&(L===lf?n.cullFace(n.BACK):L===Ix?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),C=L}function P(L){L!==U&&(G&&n.lineWidth(L),U=L)}function Qt(L,re,ne){L?(ie(n.POLYGON_OFFSET_FILL),(z!==re||W!==ne)&&(z=re,W=ne,a.getReversed()&&(re=-re),n.polygonOffset(re,ne))):ae(n.POLYGON_OFFSET_FILL)}function ut(L){L?ie(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function At(L){L===void 0&&(L=n.TEXTURE0+B-1),K!==L&&(n.activeTexture(L),K=L)}function Se(L,re,ne){ne===void 0&&(K===null?ne=n.TEXTURE0+B-1:ne=K);let ge=he[ne];ge===void 0&&(ge={type:void 0,texture:void 0},he[ne]=ge),(ge.type!==L||ge.texture!==re)&&(K!==ne&&(n.activeTexture(ne),K=ne),n.bindTexture(L,re||q[L]),ge.type=L,ge.texture=re)}function A(){const L=he[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function J(){try{n.texSubImage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function Ae(){try{n.texStorage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function Ie(){try{n.texImage2D(...arguments)}catch(L){lt("WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){lt("WebGLState:",L)}}function te(L){He.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),He.copy(L))}function ye(L){Lt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Lt.copy(L))}function be(L,re){let ne=l.get(re);ne===void 0&&(ne=new WeakMap,l.set(re,ne));let ge=ne.get(L);ge===void 0&&(ge=n.getUniformBlockIndex(re,L.name),ne.set(L,ge))}function fe(L,re){const ge=l.get(re).get(L);c.get(re)!==ge&&(n.uniformBlockBinding(re,ge,L.__bindingPointIndex),c.set(re,ge))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,he={},d={},h=new WeakMap,p=[],g=null,y=!1,m=null,f=null,v=null,b=null,M=null,T=null,R=null,I=new Qe(0,0,0),x=0,E=!1,k=null,C=null,U=null,z=null,W=null,He.set(0,0,n.canvas.width,n.canvas.height),Lt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Oe,drawBuffers:Re,useProgram:Pe,setBlending:ft,setMaterial:Mt,setFlipSided:Ve,setCullFace:$t,setLineWidth:P,setPolygonOffset:Qt,setScissorTest:ut,activeTexture:At,bindTexture:Se,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ie,texImage3D:Q,updateUBOMapping:be,uniformBlockBinding:fe,texStorage2D:se,texStorage3D:Ae,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:te,viewport:ye,reset:We}}function CS(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):_c("canvas")}function y(A,_,D){let j=1;const J=Se(A);if((J.width>D||J.height>D)&&(j=D/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(j*J.width),_e=Math.floor(j*J.height);d===void 0&&(d=g(Y,_e));const se=_?g(Y,_e):d;return se.width=Y,se.height=_e,se.getContext("2d").drawImage(A,0,0,Y,_e),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+_e+")."),se}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,_,D,j,J=!1){if(A!==null){if(n[A]!==void 0)return n[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=_;if(_===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),_===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const _e=J?xc:at.getTransfer(j);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=_e===mt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(A,_){let D;return A?_===null||_===Ci||_===ja?D=n.DEPTH24_STENCIL8:_===li?D=n.DEPTH32F_STENCIL8:_===Ya&&(D=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ci||_===ja?D=n.DEPTH_COMPONENT24:_===li?D=n.DEPTH_COMPONENT32F:_===Ya&&(D=n.DEPTH_COMPONENT16),D}function T(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==_n&&A.minFilter!==wn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),x(_),_.isVideoTexture&&u.delete(_)}function I(A){const _=A.target;_.removeEventListener("dispose",I),k(_)}function x(A){const _=i.get(A);if(_.__webglInit===void 0)return;const D=A.source,j=h.get(D);if(j){const J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(A),Object.keys(j).length===0&&h.delete(D)}i.remove(A)}function E(A){const _=i.get(A);n.deleteTexture(_.__webglTexture);const D=A.source,j=h.get(D);delete j[_.__cacheKey],a.memory.textures--}function k(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let J=0;J<_.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[j][J]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=A.textures;for(let j=0,J=D.length;j<J;j++){const Y=i.get(D[j]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[j])}i.remove(A)}let C=0;function U(){C=0}function z(){const A=C;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function W(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function B(A,_){const D=i.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&D.__version!==A.version){const j=A.image;if(j===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,A,_);return}}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function G(A,_){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){q(D,A,_);return}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function O(A,_){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){q(D,A,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function Z(A,_){const D=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&D.__version!==A.version){ie(D,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const K={[kd]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Od]:n.MIRRORED_REPEAT},he={[_n]:n.NEAREST,[Zx]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[Xs]:n.LINEAR_MIPMAP_LINEAR},xe={[t_]:n.NEVER,[a_]:n.ALWAYS,[n_]:n.LESS,[Yh]:n.LEQUAL,[i_]:n.EQUAL,[jh]:n.GEQUAL,[s_]:n.GREATER,[r_]:n.NOTEQUAL};function pe(A,_){if(_.type===li&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wn||_.magFilter===yl||_.magFilter===Mo||_.magFilter===Xs||_.minFilter===wn||_.minFilter===yl||_.minFilter===Mo||_.minFilter===Xs)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,K[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,K[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,K[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,he[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_n||_.minFilter!==Mo&&_.minFilter!==Xs||_.type===li&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function He(A,_){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const j=_.source;let J=h.get(j);J===void 0&&(J={},h.set(j,J));const Y=W(_);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[Y].usedTimes++;const _e=J[A.__cacheKey];_e!==void 0&&(J[A.__cacheKey].usedTimes--,_e.usedTimes===0&&E(_)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return D}function Lt(A,_,D){return Math.floor(Math.floor(A/D)/_)}function Pt(A,_,D,j){const Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,D,j,_.data);else{Y.sort((Q,te)=>Q.start-te.start);let _e=0;for(let Q=1;Q<Y.length;Q++){const te=Y[_e],ye=Y[Q],be=te.start+te.count,fe=Lt(ye.start,_.width,4),We=Lt(te.start,_.width,4);ye.start<=be+1&&fe===We&&Lt(ye.start+ye.count-1,_.width,4)===fe?te.count=Math.max(te.count,ye.start+ye.count-te.start):(++_e,Y[_e]=ye)}Y.length=_e+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Q=0,te=Y.length;Q<te;Q++){const ye=Y[Q],be=Math.floor(ye.start/4),fe=Math.ceil(ye.count/4),We=be%_.width,L=Math.floor(be/_.width),re=fe,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,We,L,re,ne,D,j,_.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function q(A,_,D){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const J=He(A,_),Y=_.source;t.bindTexture(j,A.__webglTexture,n.TEXTURE0+D);const _e=i.get(Y);if(Y.version!==_e.__version||J===!0){t.activeTexture(n.TEXTURE0+D);const se=at.getPrimaries(at.workingColorSpace),Ae=_.colorSpace===ps?null:at.getPrimaries(_.colorSpace),Ie=_.colorSpace===ps||se===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Q=y(_.image,!1,s.maxTextureSize);Q=At(_,Q);const te=r.convert(_.format,_.colorSpace),ye=r.convert(_.type);let be=b(_.internalFormat,te,ye,_.colorSpace,_.isVideoTexture);pe(j,_);let fe;const We=_.mipmaps,L=_.isVideoTexture!==!0,re=_e.__version===void 0||J===!0,ne=Y.dataReady,ge=T(_,Q);if(_.isDepthTexture)be=M(_.format===$s,_.type),re&&(L?t.texStorage2D(n.TEXTURE_2D,1,be,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,te,ye,null));else if(_.isDataTexture)if(We.length>0){L&&re&&t.texStorage2D(n.TEXTURE_2D,ge,be,We[0].width,We[0].height);for(let ee=0,$=We.length;ee<$;ee++)fe=We[ee],L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,fe.width,fe.height,te,ye,fe.data):t.texImage2D(n.TEXTURE_2D,ee,be,fe.width,fe.height,0,te,ye,fe.data);_.generateMipmaps=!1}else L?(re&&t.texStorage2D(n.TEXTURE_2D,ge,be,Q.width,Q.height),ne&&Pt(_,Q,te,ye)):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,te,ye,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,be,We[0].width,We[0].height,Q.depth);for(let ee=0,$=We.length;ee<$;ee++)if(fe=We[ee],_.format!==di)if(te!==null)if(L){if(ne)if(_.layerUpdates.size>0){const ve=Hf(fe.width,fe.height,_.format,_.type);for(const De of _.layerUpdates){const Rt=fe.data.subarray(De*ve/fe.data.BYTES_PER_ELEMENT,(De+1)*ve/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,De,fe.width,fe.height,1,te,Rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,Q.depth,te,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,be,fe.width,fe.height,Q.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,Q.depth,te,ye,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,be,fe.width,fe.height,Q.depth,0,te,ye,fe.data)}else{L&&re&&t.texStorage2D(n.TEXTURE_2D,ge,be,We[0].width,We[0].height);for(let ee=0,$=We.length;ee<$;ee++)fe=We[ee],_.format!==di?te!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,fe.width,fe.height,te,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,be,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,fe.width,fe.height,te,ye,fe.data):t.texImage2D(n.TEXTURE_2D,ee,be,fe.width,fe.height,0,te,ye,fe.data)}else if(_.isDataArrayTexture)if(L){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,be,Q.width,Q.height,Q.depth),ne)if(_.layerUpdates.size>0){const ee=Hf(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const ve=Q.data.subarray($*ee/Q.data.BYTES_PER_ELEMENT,($+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,te,ye,ve)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,te,ye,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Q.width,Q.height,Q.depth,0,te,ye,Q.data);else if(_.isData3DTexture)L?(re&&t.texStorage3D(n.TEXTURE_3D,ge,be,Q.width,Q.height,Q.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,te,ye,Q.data)):t.texImage3D(n.TEXTURE_3D,0,be,Q.width,Q.height,Q.depth,0,te,ye,Q.data);else if(_.isFramebufferTexture){if(re)if(L)t.texStorage2D(n.TEXTURE_2D,ge,be,Q.width,Q.height);else{let ee=Q.width,$=Q.height;for(let ve=0;ve<ge;ve++)t.texImage2D(n.TEXTURE_2D,ve,be,ee,$,0,te,ye,null),ee>>=1,$>>=1}}else if(We.length>0){if(L&&re){const ee=Se(We[0]);t.texStorage2D(n.TEXTURE_2D,ge,be,ee.width,ee.height)}for(let ee=0,$=We.length;ee<$;ee++)fe=We[ee],L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,te,ye,fe):t.texImage2D(n.TEXTURE_2D,ee,be,te,ye,fe);_.generateMipmaps=!1}else if(L){if(re){const ee=Se(Q);t.texStorage2D(n.TEXTURE_2D,ge,be,ee.width,ee.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,ye,Q)}else t.texImage2D(n.TEXTURE_2D,0,be,te,ye,Q);m(_)&&f(j),_e.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ie(A,_,D){if(_.image.length!==6)return;const j=He(A,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+D);const Y=i.get(J);if(J.version!==Y.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const _e=at.getPrimaries(at.workingColorSpace),se=_.colorSpace===ps?null:at.getPrimaries(_.colorSpace),Ae=_.colorSpace===ps||_e===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,te=[];for(let $=0;$<6;$++)!Ie&&!Q?te[$]=y(_.image[$],!0,s.maxCubemapSize):te[$]=Q?_.image[$].image:_.image[$],te[$]=At(_,te[$]);const ye=te[0],be=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),We=b(_.internalFormat,be,fe,_.colorSpace),L=_.isVideoTexture!==!0,re=Y.__version===void 0||j===!0,ne=J.dataReady;let ge=T(_,ye);pe(n.TEXTURE_CUBE_MAP,_);let ee;if(Ie){L&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,We,ye.width,ye.height);for(let $=0;$<6;$++){ee=te[$].mipmaps;for(let ve=0;ve<ee.length;ve++){const De=ee[ve];_.format!==di?be!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,We,De.width,De.height,0,De.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,De.width,De.height,be,fe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,We,De.width,De.height,0,be,fe,De.data)}}}else{if(ee=_.mipmaps,L&&re){ee.length>0&&ge++;const $=Se(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,We,$.width,$.height)}for(let $=0;$<6;$++)if(Q){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,te[$].width,te[$].height,be,fe,te[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,te[$].width,te[$].height,0,be,fe,te[$].data);for(let ve=0;ve<ee.length;ve++){const Rt=ee[ve].image[$].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,Rt.width,Rt.height,be,fe,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,We,Rt.width,Rt.height,0,be,fe,Rt.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,fe,te[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,be,fe,te[$]);for(let ve=0;ve<ee.length;ve++){const De=ee[ve];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,be,fe,De.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,We,be,fe,De.image[$])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),Y.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ae(A,_,D,j,J,Y){const _e=r.convert(D.format,D.colorSpace),se=r.convert(D.type),Ae=b(D.internalFormat,_e,se,D.colorSpace),Ie=i.get(_),Q=i.get(D);if(Q.__renderTarget=_,!Ie.__hasExternalTextures){const te=Math.max(1,_.width>>Y),ye=Math.max(1,_.height>>Y);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,Ae,te,ye,_.depth,0,_e,se,null):t.texImage2D(J,Y,Ae,te,ye,0,_e,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Qt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,Q.__webglTexture,0,P(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,Q.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(A,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){const j=_.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=M(_.stencilBuffer,J),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Y,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,A)}else{const j=_.textures;for(let J=0;J<j.length;J++){const Y=j[J],_e=r.convert(Y.format,Y.colorSpace),se=r.convert(Y.type),Ae=b(Y.internalFormat,_e,se,Y.colorSpace);Qt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Ae,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(A,_,D){const j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),pe(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ie=r.convert(_.depthTexture.format),Q=r.convert(_.depthTexture.type);let te;_.depthTexture.format===Qi?te=n.DEPTH_COMPONENT24:_.depthTexture.format===$s&&(te=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,te,_.width,_.height,0,Ie,Q,null)}}else B(_.depthTexture,0);const Y=J.__webglTexture,_e=P(_),se=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Ae=_.depthTexture.format===$s?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Qi)Qt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,se,Y,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,se,Y,0);else if(_.depthTexture.format===$s)Qt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,se,Y,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,se,Y,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const _=i.get(A),D=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=j}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)Re(_.__webglFramebuffer[j],A,j);else{const j=A.texture.mipmaps;j&&j.length>0?Re(_.__webglFramebuffer[0],A,0):Re(_.__webglFramebuffer,A,0)}else if(D){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Oe(_.__webglDepthbuffer[j],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Oe(_.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ln(A,_,D){const j=i.get(A);_!==void 0&&ae(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Pe(A)}function rt(A){const _=A.texture,D=i.get(A),j=i.get(_);A.addEventListener("dispose",I);const J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)D.__webglFramebuffer[se][Ae]=n.createFramebuffer()}else D.__webglFramebuffer[se]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)D.__webglFramebuffer[se]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(_e)for(let se=0,Ae=J.length;se<Ae;se++){const Ie=i.get(J[se]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Qt(A)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const Ae=J[se];D.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[se]);const Ie=r.convert(Ae.format,Ae.colorSpace),Q=r.convert(Ae.type),te=b(Ae.internalFormat,Ie,Q,Ae.colorSpace,A.isXRRenderTarget===!0),ye=P(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,te,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,D.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(D.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),pe(n.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(D.__webglFramebuffer[se][Ae],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae);else ae(D.__webglFramebuffer[se],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let se=0,Ae=J.length;se<Ae;se++){const Ie=J[se],Q=i.get(Ie);let te=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,Q.__webglTexture),pe(te,Ie),ae(D.__webglFramebuffer,A,Ie,n.COLOR_ATTACHMENT0+se,te,0),m(Ie)&&f(te)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),pe(se,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(D.__webglFramebuffer[Ae],A,_,n.COLOR_ATTACHMENT0,se,Ae);else ae(D.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,se,0);m(_)&&f(se),t.unbindTexture()}A.depthBuffer&&Pe(A)}function ft(A){const _=A.textures;for(let D=0,j=_.length;D<j;D++){const J=_[D];if(m(J)){const Y=v(A),_e=i.get(J).__webglTexture;t.bindTexture(Y,_e),f(Y),t.unbindTexture()}}}const Mt=[],Ve=[];function $t(A){if(A.samples>0){if(Qt(A)===!1){const _=A.textures,D=A.width,j=A.height;let J=n.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(A),se=_.length>1;if(se)for(let Ie=0;Ie<_.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<_.length;Ie++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const Q=i.get(_[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,D,j,0,0,D,j,J,n.NEAREST),c===!0&&(Mt.length=0,Ve.length=0,Mt.push(n.COLOR_ATTACHMENT0+Ie),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Mt.push(Y),Ve.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Ie=0;Ie<_.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const Q=i.get(_[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(A){return Math.min(s.maxSamples,A.samples)}function Qt(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ut(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function At(A,_){const D=A.colorSpace,j=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==ea&&D!==ps&&(at.getTransfer(D)===mt?(j!==di||J!==$n)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",D)),_}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=ln,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IS(n,e){function t(i,s=ps){let r;const a=at.getTransfer(s);if(i===$n)return n.UNSIGNED_BYTE;if(i===Hh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$m)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ym)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wm)return n.BYTE;if(i===Xm)return n.SHORT;if(i===Ya)return n.UNSIGNED_SHORT;if(i===zh)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Zi)return n.HALF_FLOAT;if(i===jm)return n.ALPHA;if(i===qm)return n.RGB;if(i===di)return n.RGBA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===$s)return n.DEPTH_STENCIL;if(i===Vh)return n.RED;if(i===Wh)return n.RED_INTEGER;if(i===Qr)return n.RG;if(i===Xh)return n.RG_INTEGER;if(i===$h)return n.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===sc)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===tc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fd||i===Bd||i===zd||i===Hd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===Vd||i===Wd||i===Xd||i===$d||i===Yd||i===jd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gd||i===Vd)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wd)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return r.COMPRESSED_R11_EAC;if(i===$d)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yd)return r.COMPRESSED_RG11_EAC;if(i===jd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qd||i===Kd||i===Jd||i===Zd||i===Qd||i===eh||i===th||i===nh||i===ih||i===sh||i===rh||i===ah||i===oh||i===ch)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qd)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jd)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zd)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ah)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ch)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lh||i===dh||i===hh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lh)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uh||i===fh||i===ph||i===mh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ph)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const PS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
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

}`;class DS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new og(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pi({vertexShader:PS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NS extends fa{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",m=new DS,f={},v=t.getContextAttributes();let b=null,M=null;const T=[],R=[],I=new nt;let x=null;const E=new ri;E.viewport=new Wt;const k=new ri;k.viewport=new Wt;const C=[E,k],U=new $_;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=T[q];return ie===void 0&&(ie=new Al,T[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=T[q];return ie===void 0&&(ie=new Al,T[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=T[q];return ie===void 0&&(ie=new Al,T[q]=ie),ie.getHandSpace()};function B(q){const ie=R.indexOf(q.inputSource);if(ie===-1)return;const ae=T[ie];ae!==void 0&&(ae.update(q.inputSource,q.frame,l||a),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",O);for(let q=0;q<T.length;q++){const ie=R[q];ie!==null&&(R[q]=null,T[q].disconnect(ie))}z=null,W=null,m.reset();for(const q in f)delete f[q];e.setRenderTarget(b),p=null,h=null,d=null,s=null,M=null,Pt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Oe=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?$s:Qi,Oe=v.stencil?ja:Ci);const Pe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Ri(h.textureWidth,h.textureHeight,{format:di,type:$n,depthTexture:new Ka(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ri(p.framebufferWidth,p.framebufferHeight,{format:di,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(q){for(let ie=0;ie<q.removed.length;ie++){const ae=q.removed[ie],Oe=R.indexOf(ae);Oe>=0&&(R[Oe]=null,T[Oe].disconnect(ae))}for(let ie=0;ie<q.added.length;ie++){const ae=q.added[ie];let Oe=R.indexOf(ae);if(Oe===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=R.length){R.push(ae),Oe=Pe;break}else if(R[Pe]===null){R[Pe]=ae,Oe=Pe;break}if(Oe===-1)break}const Re=T[Oe];Re&&Re.connect(ae)}}const Z=new F,K=new F;function he(q,ie,ae){Z.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const Oe=Z.distanceTo(K),Re=ie.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,ln=Re[14]/(Re[10]-1),rt=Re[14]/(Re[10]+1),ft=(Re[9]+1)/Re[5],Mt=(Re[9]-1)/Re[5],Ve=(Re[8]-1)/Re[0],$t=(Pe[8]+1)/Pe[0],P=ln*Ve,Qt=ln*$t,ut=Oe/(-Ve+$t),At=ut*-Ve;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(At),q.translateZ(ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Se=ln+ut,A=rt+ut,_=P-At,D=Qt+(Oe-At),j=ft*rt/A*Se,J=Mt*rt/A*Se;q.projectionMatrix.makePerspective(_,D,j,J,Se,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function xe(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,ae=q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),U.near=k.near=E.near=ie,U.far=k.far=E.far=ae,(z!==U.near||W!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,W=U.far),U.layers.mask=q.layers.mask|6,E.layers.mask=U.layers.mask&-5,k.layers.mask=U.layers.mask&-3;const Oe=q.parent,Re=U.cameras;xe(U,Oe);for(let Pe=0;Pe<Re.length;Pe++)xe(Re[Pe],Oe);Re.length===2?he(U,E,k):U.projectionMatrix.copy(E.projectionMatrix),pe(q,U,Oe)};function pe(q,ie,ae){ae===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=gh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return f[q]};let He=null;function Lt(q,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Oe=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,Oe=!0);for(let rt=0;rt<ae.length;rt++){const ft=ae[rt];let Mt=null;if(p!==null)Mt=p.getViewport(ft);else{const $t=d.getViewSubImage(h,ft);Mt=$t.viewport,rt===0&&(e.setRenderTargetTextures(M,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(M))}let Ve=C[rt];Ve===void 0&&(Ve=new ri,Ve.layers.enable(rt),Ve.viewport=new Wt,C[rt]=Ve),Ve.matrix.fromArray(ft.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ft.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),rt===0&&(U.matrix.copy(Ve.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Oe===!0&&U.cameras.push(Ve)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const rt=d.getDepthInformation(ae[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(Re&&Re.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let rt=0;rt<ae.length;rt++){const ft=ae[rt].camera;if(ft){let Mt=f[ft];Mt||(Mt=new og,f[ft]=Mt);const Ve=d.getCameraImage(ft);Mt.sourceTexture=Ve}}}}for(let ae=0;ae<T.length;ae++){const Oe=R[ae],Re=T[ae];Oe!==null&&Re!==void 0&&Re.update(Oe,ie,l||a)}He&&He(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Pt=new pg;Pt.setAnimationLoop(Lt),this.setAnimationLoop=function(q){He=q},this.dispose=function(){}}}const Bs=new Ii,US=new Tt;function kS(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,cg(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,b,M){f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,v,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===On&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===On&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),b=v.envMap,M=v.envMapRotation;b&&(m.envMap.value=b,Bs.copy(M),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(US.makeRotationFromEuler(Bs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===On&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OS(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const M=b.program;i.uniformBlockBinding(v,M)}function l(v,b){let M=s[v.id];M===void 0&&(g(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",m));const T=b.program;i.updateUBOMapping(v,T);const R=e.render.frame;r[v.id]!==R&&(h(v),r[v.id]=R)}function u(v){const b=d();v.__bindingPointIndex=b;const M=n.createBuffer(),T=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=s[v.id],M=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,I=M.length;R<I;R++){const x=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,k=x.length;E<k;E++){const C=x[E];if(p(C,R,E,T)===!0){const U=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let B=0;B<z.length;B++){const G=z[B],O=y(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,M,T){const R=v.value,I=b+"_"+M;if(T[I]===void 0)return typeof R=="number"||typeof R=="boolean"?T[I]=R:T[I]=R.clone(),!0;{const x=T[I];if(typeof R=="number"||typeof R=="boolean"){if(x!==R)return T[I]=R,!0}else if(x.equals(R)===!1)return x.copy(R),!0}return!1}function g(v){const b=v.uniforms;let M=0;const T=16;for(let I=0,x=b.length;I<x;I++){const E=Array.isArray(b[I])?b[I]:[b[I]];for(let k=0,C=E.length;k<C;k++){const U=E[k],z=Array.isArray(U.value)?U.value:[U.value];for(let W=0,B=z.length;W<B;W++){const G=z[W],O=y(G),Z=M%T,K=Z%O.boundary,he=Z+K;M+=K,he!==0&&T-he<O.storage&&(M+=T-he),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=O.storage}}}const R=M%T;return R>0&&(M+=T-R),v.__size=M,v.__cache={},this}function y(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}const FS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function BS(){return yi===null&&(yi=new rg(FS,16,16,Qr,Zi),yi.name="DFG_LUT",yi.minFilter=wn,yi.magFilter=wn,yi.wrapS=Vi,yi.wrapT=Vi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class zS{constructor(e={}){const{canvas:t=c_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=$n}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=p,m=new Set([$h,Xh,Wh]),f=new Set([$n,Ci,Ya,ja,Hh,Gh]),v=new Uint32Array(4),b=new Int32Array(4);let M=null,T=null;const R=[],I=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let k=!1;this._outputColorSpace=Wn;let C=0,U=0,z=null,W=-1,B=null;const G=new Wt,O=new Wt;let Z=null;const K=new Qe(0);let he=0,xe=t.width,pe=t.height,He=1,Lt=null,Pt=null;const q=new Wt(0,0,xe,pe),ie=new Wt(0,0,xe,pe);let ae=!1;const Oe=new Jh;let Re=!1,Pe=!1;const ln=new Tt,rt=new F,ft=new Wt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function $t(){return z===null?He:1}let P=i;function Qt(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bh}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),P===null){const N="webgl2";if(P=Qt(N,S),P===null)throw Qt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw lt("WebGLRenderer: "+S.message),S}let ut,At,Se,A,_,D,j,J,Y,_e,se,Ae,Ie,Q,te,ye,be,fe,We,L,re,ne,ge;function ee(){ut=new zb(P),ut.init(),re=new IS(P,ut),At=new Lb(P,ut,e,re),Se=new RS(P,ut),At.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),A=new Vb(P),_=new pS,D=new CS(P,ut,Se,_,At,re,A),j=new Bb(E),J=new j_(P),ne=new Ib(P,J),Y=new Hb(P,J,A,ne),_e=new Xb(P,Y,J,ne,A),fe=new Wb(P,At,D),te=new Db(_),se=new fS(E,j,ut,At,ne,te),Ae=new kS(E,_),Ie=new gS,Q=new MS(ut),be=new Cb(E,j,Se,_e,g,c),ye=new AS(E,_e,At),ge=new OS(P,A,At,Se),We=new Pb(P,ut,A),L=new Gb(P,ut,A),A.programs=se.programs,E.capabilities=At,E.extensions=ut,E.properties=_,E.renderLists=Ie,E.shadowMap=ye,E.state=Se,E.info=A}ee(),y!==$n&&(x=new Yb(y,t.width,t.height,s,r));const $=new NS(E,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(S){S!==void 0&&(He=S,this.setSize(xe,pe,!1))},this.getSize=function(S){return S.set(xe,pe)},this.setSize=function(S,N,X=!0){if($.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=S,pe=N,t.width=Math.floor(S*He),t.height=Math.floor(N*He),X===!0&&(t.style.width=S+"px",t.style.height=N+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(xe*He,pe*He).floor()},this.setDrawingBufferSize=function(S,N,X){xe=S,pe=N,He=X,t.width=Math.floor(S*X),t.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(y===$n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,N,X,V){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,N,X,V),Se.viewport(G.copy(q).multiplyScalar(He).round())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,N,X,V){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,N,X,V),Se.scissor(O.copy(ie).multiplyScalar(He).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){Se.setScissorTest(ae=S)},this.setOpaqueSort=function(S){Lt=S},this.setTransparentSort=function(S){Pt=S},this.getClearColor=function(S){return S.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let V=0;if(S){let H=!1;if(z!==null){const le=z.texture.format;H=m.has(le)}if(H){const le=z.texture.type,me=f.has(le),de=be.getClearColor(),Me=be.getClearAlpha(),Ee=de.r,ke=de.g,Xe=de.b;me?(v[0]=Ee,v[1]=ke,v[2]=Xe,v[3]=Me,P.clearBufferuiv(P.COLOR,0,v)):(b[0]=Ee,b[1]=ke,b[2]=Xe,b[3]=Me,P.clearBufferiv(P.COLOR,0,b))}else V|=P.COLOR_BUFFER_BIT}N&&(V|=P.DEPTH_BUFFER_BIT),X&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),be.dispose(),Ie.dispose(),Q.dispose(),_.dispose(),j.dispose(),_e.dispose(),ne.dispose(),ge.dispose(),se.dispose(),$.dispose(),$.removeEventListener("sessionstart",ef),$.removeEventListener("sessionend",tf),Ls.stop()};function ve(S){S.preventDefault(),_f("WebGLRenderer: Context Lost."),k=!0}function De(){_f("WebGLRenderer: Context Restored."),k=!1;const S=A.autoReset,N=ye.enabled,X=ye.autoUpdate,V=ye.needsUpdate,H=ye.type;ee(),A.autoReset=S,ye.enabled=N,ye.autoUpdate=X,ye.needsUpdate=V,ye.type=H}function Rt(S){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pt(S){const N=S.target;N.removeEventListener("dispose",pt),Di(N)}function Di(S){Ni(S),_.remove(S)}function Ni(S){const N=_.get(S).programs;N!==void 0&&(N.forEach(function(X){se.releaseProgram(X)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,V,H,le){N===null&&(N=Mt);const me=H.isMesh&&H.matrixWorld.determinant()<0,de=Sx(S,N,X,V,H);Se.setMaterial(V,me);let Me=X.index,Ee=1;if(V.wireframe===!0){if(Me=Y.getWireframeAttribute(X),Me===void 0)return;Ee=2}const ke=X.drawRange,Xe=X.attributes.position;let Te=ke.start*Ee,xt=(ke.start+ke.count)*Ee;le!==null&&(Te=Math.max(Te,le.start*Ee),xt=Math.min(xt,(le.start+le.count)*Ee)),Me!==null?(Te=Math.max(Te,0),xt=Math.min(xt,Me.count)):Xe!=null&&(Te=Math.max(Te,0),xt=Math.min(xt,Xe.count));const Yt=xt-Te;if(Yt<0||Yt===1/0)return;ne.setup(H,V,de,X,Me);let zt,_t=We;if(Me!==null&&(zt=J.get(Me),_t=L,_t.setIndex(zt)),H.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*$t()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(H.isLine){let yn=V.linewidth;yn===void 0&&(yn=1),Se.setLineWidth(yn*$t()),H.isLineSegments?_t.setMode(P.LINES):H.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else H.isPoints?_t.setMode(P.POINTS):H.isSprite&&_t.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)yc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const yn=H._multiDrawStarts,we=H._multiDrawCounts,zn=H._multiDrawCount,ct=Me?J.get(Me).bytesPerElement:1,ti=_.get(V).currentProgram.getUniforms();for(let xi=0;xi<zn;xi++)ti.setValue(P,"_gl_DrawID",xi),_t.render(yn[xi]/ct,we[xi])}else if(H.isInstancedMesh)_t.renderInstances(Te,Yt,H.count);else if(X.isInstancedBufferGeometry){const yn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,we=Math.min(X.instanceCount,yn);_t.renderInstances(Te,Yt,we)}else _t.render(Te,Yt)};function Qu(S,N,X){S.transparent===!0&&S.side===Si&&S.forceSinglePass===!1?(S.side=On,S.needsUpdate=!0,bo(S,N,X),S.side=ws,S.needsUpdate=!0,bo(S,N,X),S.side=Si):bo(S,N,X)}this.compile=function(S,N,X=null){X===null&&(X=S),T=Q.get(X),T.init(N),I.push(T),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const de=le[me];Qu(de,X,H),V.add(de)}else Qu(le,X,H),V.add(le)}),T=I.pop(),V},this.compileAsync=function(S,N,X=null){const V=this.compile(S,N,X);return new Promise(H=>{function le(){if(V.forEach(function(me){_.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){H(S);return}setTimeout(le,10)}ut.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ml=null;function Mx(S){ml&&ml(S)}function ef(){Ls.stop()}function tf(){Ls.start()}const Ls=new pg;Ls.setAnimationLoop(Mx),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(S){ml=S,$.setAnimationLoop(S),S===null?Ls.stop():Ls.start()},$.addEventListener("sessionstart",ef),$.addEventListener("sessionend",tf),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const X=$.enabled===!0&&$.isPresenting===!0,V=x!==null&&(z===null||X)&&x.begin(E,z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,N,z),T=Q.get(S,I.length),T.init(N),I.push(T),ln.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Oe.setFromProjectionMatrix(ln,wi,N.reversedDepth),Pe=this.localClippingEnabled,Re=te.init(this.clippingPlanes,Pe),M=Ie.get(S,R.length),M.init(),R.push(M),$.enabled===!0&&$.isPresenting===!0){const me=E.xr.getDepthSensingMesh();me!==null&&gl(me,N,-1/0,E.sortObjects)}gl(S,N,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(Lt,Pt),Ve=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ve&&be.addToRenderList(M,S),this.info.render.frame++,Re===!0&&te.beginShadows();const H=T.state.shadowsArray;if(ye.render(H,S,N),Re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&x.hasRenderPass())===!1){const me=M.opaque,de=M.transmissive;if(T.setupLights(),N.isArrayCamera){const Me=N.cameras;if(de.length>0)for(let Ee=0,ke=Me.length;Ee<ke;Ee++){const Xe=Me[Ee];sf(me,de,S,Xe)}Ve&&be.render(S);for(let Ee=0,ke=Me.length;Ee<ke;Ee++){const Xe=Me[Ee];nf(M,S,Xe,Xe.viewport)}}else de.length>0&&sf(me,de,S,N),Ve&&be.render(S),nf(M,S,N)}z!==null&&U===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),V&&x.end(E),S.isScene===!0&&S.onAfterRender(E,S,N),ne.resetDefaultState(),W=-1,B=null,I.pop(),I.length>0?(T=I[I.length-1],Re===!0&&te.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function gl(S,N,X,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Oe.intersectsSprite(S)){V&&ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ln);const me=_e.update(S),de=S.material;de.visible&&M.push(S,me,de,X,ft.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Oe.intersectsObject(S))){const me=_e.update(S),de=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ft.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ft.copy(me.boundingSphere.center)),ft.applyMatrix4(S.matrixWorld).applyMatrix4(ln)),Array.isArray(de)){const Me=me.groups;for(let Ee=0,ke=Me.length;Ee<ke;Ee++){const Xe=Me[Ee],Te=de[Xe.materialIndex];Te&&Te.visible&&M.push(S,me,Te,X,ft.z,Xe)}}else de.visible&&M.push(S,me,de,X,ft.z,null)}}const le=S.children;for(let me=0,de=le.length;me<de;me++)gl(le[me],N,X,V)}function nf(S,N,X,V){const{opaque:H,transmissive:le,transparent:me}=S;T.setupLightsView(X),Re===!0&&te.setGlobalState(E.clippingPlanes,X),V&&Se.viewport(G.copy(V)),H.length>0&&vo(H,N,X),le.length>0&&vo(le,N,X),me.length>0&&vo(me,N,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function sf(S,N,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Te=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Ri(1,1,{generateMipmaps:!0,type:Te?Zi:$n,minFilter:Xs,samples:Math.max(4,At.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const le=T.state.transmissionRenderTarget[V.id],me=V.viewport||G;le.setSize(me.z*E.transmissionResolutionScale,me.w*E.transmissionResolutionScale);const de=E.getRenderTarget(),Me=E.getActiveCubeFace(),Ee=E.getActiveMipmapLevel();E.setRenderTarget(le),E.getClearColor(K),he=E.getClearAlpha(),he<1&&E.setClearColor(16777215,.5),E.clear(),Ve&&be.render(X);const ke=E.toneMapping;E.toneMapping=Ai;const Xe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Re===!0&&te.setGlobalState(E.clippingPlanes,V),vo(S,X,V),D.updateMultisampleRenderTarget(le),D.updateRenderTargetMipmap(le),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let xt=0,Yt=N.length;xt<Yt;xt++){const zt=N[xt],{object:_t,geometry:yn,material:we,group:zn}=zt;if(we.side===Si&&_t.layers.test(V.layers)){const ct=we.side;we.side=On,we.needsUpdate=!0,rf(_t,X,V,yn,we,zn),we.side=ct,we.needsUpdate=!0,Te=!0}}Te===!0&&(D.updateMultisampleRenderTarget(le),D.updateRenderTargetMipmap(le))}E.setRenderTarget(de,Me,Ee),E.setClearColor(K,he),Xe!==void 0&&(V.viewport=Xe),E.toneMapping=ke}function vo(S,N,X){const V=N.isScene===!0?N.overrideMaterial:null;for(let H=0,le=S.length;H<le;H++){const me=S[H],{object:de,geometry:Me,group:Ee}=me;let ke=me.material;ke.allowOverride===!0&&V!==null&&(ke=V),de.layers.test(X.layers)&&rf(de,N,X,Me,ke,Ee)}}function rf(S,N,X,V,H,le){S.onBeforeRender(E,N,X,V,H,le),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(E,N,X,V,S,le),H.transparent===!0&&H.side===Si&&H.forceSinglePass===!1?(H.side=On,H.needsUpdate=!0,E.renderBufferDirect(X,N,V,H,S,le),H.side=ws,H.needsUpdate=!0,E.renderBufferDirect(X,N,V,H,S,le),H.side=Si):E.renderBufferDirect(X,N,V,H,S,le),S.onAfterRender(E,N,X,V,H,le)}function bo(S,N,X){N.isScene!==!0&&(N=Mt);const V=_.get(S),H=T.state.lights,le=T.state.shadowsArray,me=H.state.version,de=se.getParameters(S,H.state,le,N,X),Me=se.getProgramCacheKey(de);let Ee=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=j.get(S.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",pt),Ee=new Map,V.programs=Ee);let Xe=Ee.get(Me);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===me)return of(S,de),Xe}else de.uniforms=se.getUniforms(S),S.onBeforeCompile(de,E),Xe=se.acquireProgram(de,Me),Ee.set(Me,Xe),V.uniforms=de.uniforms;const Te=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=te.uniform),of(S,de),V.needsLights=Ex(S),V.lightsStateVersion=me,V.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Xe,V.uniformsList=null,Xe}function af(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=ac.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function of(S,N){const X=_.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Sx(S,N,X,V,H){N.isScene!==!0&&(N=Mt),D.resetTextureUnits();const le=N.fog,me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,de=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ea,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ee=j.get(V.envMap||me,Me),ke=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!X.morphAttributes.position,xt=!!X.morphAttributes.normal,Yt=!!X.morphAttributes.color;let zt=Ai;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(zt=E.toneMapping);const _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yn=_t!==void 0?_t.length:0,we=_.get(V),zn=T.state.lights;if(Re===!0&&(Pe===!0||S!==B)){const dn=S===B&&V.id===W;te.setState(V,S,dn)}let ct=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==zn.state.version||we.outputColorSpace!==de||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Ee||V.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==Xe||we.morphTargets!==Te||we.morphNormals!==xt||we.morphColors!==Yt||we.toneMapping!==zt||we.morphTargetsCount!==yn)&&(ct=!0):(ct=!0,we.__version=V.version);let ti=we.currentProgram;ct===!0&&(ti=bo(V,N,H));let xi=!1,Ds=!1,yr=!1;const St=ti.getUniforms(),mn=we.uniforms;if(Se.useProgram(ti.program)&&(xi=!0,Ds=!0,yr=!0),V.id!==W&&(W=V.id,Ds=!0),xi||B!==S){Se.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),St.setValue(P,"projectionMatrix",S.projectionMatrix),St.setValue(P,"viewMatrix",S.matrixWorldInverse);const rs=St.map.cameraPosition;rs!==void 0&&rs.setValue(P,rt.setFromMatrixPosition(S.matrixWorld)),At.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,Ds=!0,yr=!0)}if(we.needsLights&&(zn.state.directionalShadowMap.length>0&&St.setValue(P,"directionalShadowMap",zn.state.directionalShadowMap,D),zn.state.spotShadowMap.length>0&&St.setValue(P,"spotShadowMap",zn.state.spotShadowMap,D),zn.state.pointShadowMap.length>0&&St.setValue(P,"pointShadowMap",zn.state.pointShadowMap,D)),H.isSkinnedMesh){St.setOptional(P,H,"bindMatrix"),St.setOptional(P,H,"bindMatrixInverse");const dn=H.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),St.setValue(P,"boneTexture",dn.boneTexture,D))}H.isBatchedMesh&&(St.setOptional(P,H,"batchingTexture"),St.setValue(P,"batchingTexture",H._matricesTexture,D),St.setOptional(P,H,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",H._indirectTexture,D),St.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",H._colorsTexture,D));const ss=X.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&fe.update(H,X,ti),(Ds||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,St.setValue(P,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(mn.envMapIntensity.value=N.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=BS()),Ds&&(St.setValue(P,"toneMappingExposure",E.toneMappingExposure),we.needsLights&&wx(mn,yr),le&&V.fog===!0&&Ae.refreshFogUniforms(mn,le),Ae.refreshMaterialUniforms(mn,V,He,pe,T.state.transmissionRenderTarget[S.id]),ac.upload(P,af(we),mn,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ac.upload(P,af(we),mn,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(P,"center",H.center),St.setValue(P,"modelViewMatrix",H.modelViewMatrix),St.setValue(P,"normalMatrix",H.normalMatrix),St.setValue(P,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const dn=V.uniformsGroups;for(let rs=0,vr=dn.length;rs<vr;rs++){const cf=dn[rs];ge.update(cf,ti),ge.bind(cf,ti)}}return ti}function wx(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ex(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,N,X){const V=_.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=N,_.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const X=_.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Tx=P.createFramebuffer();this.setRenderTarget=function(S,N=0,X=0){z=S,C=N,U=X;let V=null,H=!1,le=!1;if(S){const de=_.get(S);if(de.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),G.copy(S.viewport),O.copy(S.scissor),Z=S.scissorTest,Se.viewport(G),Se.scissor(O),Se.setScissorTest(Z),W=-1;return}else if(de.__webglFramebuffer===void 0)D.setupRenderTarget(S);else if(de.__hasExternalTextures)D.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ke=S.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&_.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(le=!0);const Ee=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?V=Ee[N][X]:V=Ee[N],H=!0):S.samples>0&&D.useMultisampledRTT(S)===!1?V=_.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[X]:V=Ee,G.copy(S.viewport),O.copy(S.scissor),Z=S.scissorTest}else G.copy(q).multiplyScalar(He).floor(),O.copy(ie).multiplyScalar(He).floor(),Z=ae;if(X!==0&&(V=Tx),Se.bindFramebuffer(P.FRAMEBUFFER,V)&&Se.drawBuffers(S,V),Se.viewport(G),Se.scissor(O),Se.setScissorTest(Z),H){const de=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,X)}else if(le){const de=N;for(let Me=0;Me<S.textures.length;Me++){const Ee=_.get(S.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,X,de)}}else if(S!==null&&X!==0){const de=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,X)}W=-1},this.readRenderTargetPixels=function(S,N,X,V,H,le,me,de=0){if(!(S&&S.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Se.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Ee=S.textures[de],ke=Ee.format,Xe=Ee.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!At.textureFormatReadable(ke)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Xe)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&X>=0&&X<=S.height-H&&P.readPixels(N,X,V,H,re.convert(ke),re.convert(Xe),le)}finally{const Ee=z!==null?_.get(z).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,V,H,le,me,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(N>=0&&N<=S.width-V&&X>=0&&X<=S.height-H){Se.bindFramebuffer(P.FRAMEBUFFER,Me);const Ee=S.textures[de],ke=Ee.format,Xe=Ee.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!At.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),P.readPixels(N,X,V,H,re.convert(ke),re.convert(Xe),0);const xt=z!==null?_.get(z).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,xt);const Yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await l_(P,Yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(Te),P.deleteSync(Yt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){const V=Math.pow(2,-X),H=Math.floor(S.image.width*V),le=Math.floor(S.image.height*V),me=N!==null?N.x:0,de=N!==null?N.y:0;D.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,me,de,H,le),Se.unbindTexture()};const Ax=P.createFramebuffer(),Rx=P.createFramebuffer();this.copyTextureToTexture=function(S,N,X=null,V=null,H=0,le=0){let me,de,Me,Ee,ke,Xe,Te,xt,Yt;const zt=S.isCompressedTexture?S.mipmaps[le]:S.image;if(X!==null)me=X.max.x-X.min.x,de=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,ke=X.min.y,Xe=X.isBox3?X.min.z:0;else{const mn=Math.pow(2,-H);me=Math.floor(zt.width*mn),de=Math.floor(zt.height*mn),S.isDataArrayTexture?Me=zt.depth:S.isData3DTexture?Me=Math.floor(zt.depth*mn):Me=1,Ee=0,ke=0,Xe=0}V!==null?(Te=V.x,xt=V.y,Yt=V.z):(Te=0,xt=0,Yt=0);const _t=re.convert(N.format),yn=re.convert(N.type);let we;N.isData3DTexture?(D.setTexture3D(N,0),we=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),we=P.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),we=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const zn=P.getParameter(P.UNPACK_ROW_LENGTH),ct=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ti=P.getParameter(P.UNPACK_SKIP_PIXELS),xi=P.getParameter(P.UNPACK_SKIP_ROWS),Ds=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,zt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe);const yr=S.isDataArrayTexture||S.isData3DTexture,St=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const mn=_.get(S),ss=_.get(N),dn=_.get(mn.__renderTarget),rs=_.get(ss.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,dn.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let vr=0;vr<Me;vr++)yr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(S).__webglTexture,H,Xe+vr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(N).__webglTexture,le,Yt+vr)),P.blitFramebuffer(Ee,ke,me,de,Te,xt,me,de,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||_.has(S)){const mn=_.get(S),ss=_.get(N);Se.bindFramebuffer(P.READ_FRAMEBUFFER,Ax),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Rx);for(let dn=0;dn<Me;dn++)yr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mn.__webglTexture,H,Xe+dn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mn.__webglTexture,H),St?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ss.__webglTexture,le,Yt+dn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ss.__webglTexture,le),H!==0?P.blitFramebuffer(Ee,ke,me,de,Te,xt,me,de,P.COLOR_BUFFER_BIT,P.NEAREST):St?P.copyTexSubImage3D(we,le,Te,xt,Yt+dn,Ee,ke,me,de):P.copyTexSubImage2D(we,le,Te,xt,Ee,ke,me,de);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else St?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(we,le,Te,xt,Yt,me,de,Me,_t,yn,zt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(we,le,Te,xt,Yt,me,de,Me,_t,zt.data):P.texSubImage3D(we,le,Te,xt,Yt,me,de,Me,_t,yn,zt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,Te,xt,me,de,_t,yn,zt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,Te,xt,zt.width,zt.height,_t,zt.data):P.texSubImage2D(P.TEXTURE_2D,le,Te,xt,me,de,_t,yn,zt);P.pixelStorei(P.UNPACK_ROW_LENGTH,zn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ti),P.pixelStorei(P.UNPACK_SKIP_ROWS,xi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ds),le===0&&N.generateMipmaps&&P.generateMipmap(we),Se.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&D.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?D.setTextureCube(S,0):S.isData3DTexture?D.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?D.setTexture2DArray(S,0):D.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){C=0,U=0,z=null,Se.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Bt=Object.freeze({gravity:18,minSpeed:13,extraSpeed:15,minPull:.08,minAngle:5,maxAngle:80,maxFlight:5}),ia=n=>n.gravity??Bt.gravity,Zt=Object.freeze({x:-6.8,y:2.85}),tn=Object.freeze({minX:8,maxX:8.62,minY:.6,maxY:5.8}),HS=Object.freeze({x:tn.minX,y:(tn.minY+tn.maxY)/2}),rr=(n,e,t)=>Math.min(t,Math.max(e,n));function Ki(...n){if(!n.every(Number.isFinite))throw new RangeError("Shot math requires finite numbers.")}function fo(n){Ki(n.origin.x,n.origin.y,n.velocity.x,n.velocity.y),n.gravity!==void 0&&Ki(n.gravity),n.wind!==void 0&&Ki(n.wind)}function eu(n,e,t,i){const s=Math.min(t,i)*.34;if(![n,e,t,i,s].every(Number.isFinite)||t<=0||i<=0)return null;const r=Math.hypot(n,e)/s;return r<Bt.minPull||n>=0?null:{angle:rr(Math.atan2(e,-n)*180/Math.PI,Bt.minAngle,Bt.maxAngle),power:rr(r,0,1)}}function qc(n,e=Bt){Ki(n.angle,n.power);const t=rr(n.angle,Bt.minAngle,Bt.maxAngle)*Math.PI/180,i=e.minSpeed+e.extraSpeed*rr(n.power,0,1);return{origin:{...Zt},velocity:{x:Math.cos(t)*i,y:Math.sin(t)*i}}}function nn(n,e){fo(n),Ki(e);const t=n.origin.y+n.velocity.y*e-.5*ia(n)*e*e;return n.wind?{x:n.origin.x+n.velocity.x*e+.5*n.wind*e*e,y:t}:{x:n.origin.x+n.velocity.x*e,y:t}}function Mc(n,e){return fo(n),Ki(e),n.wind?{x:n.velocity.x+n.wind*e,y:n.velocity.y-ia(n)*e}:{x:n.velocity.x,y:n.velocity.y-ia(n)*e}}function tu(n,e){const t=n.wind/2,i=n.velocity.x,s=n.origin.x-e;if(t===0)return i===0?s===0?[0]:[]:[-s/i];const r=i*i-4*t*s;if(r<0)return[];const a=-(i+(i<0?-1:1)*Math.sqrt(r))/2;return a===0?[0]:[a/t,s/a]}function nu(n,e,t,i){if(fo(n),Ki(e.minX,e.maxX,e.minY,e.maxY,t,i),e.minX>e.maxX||e.minY>e.maxY)throw new RangeError("Bounds must be ordered.");if(i<t||t<0)return null;const s=[t,i];if(n.wind){s.push(-n.velocity.x/n.wind);for(const r of[e.minX,e.maxX])s.push(...tu(n,r))}else if(n.velocity.x!==0)for(const r of[e.minX,e.maxX])s.push((r-n.origin.x)/n.velocity.x);for(const r of[e.minY,e.maxY]){const a=ia(n),o=n.velocity.y**2+2*a*(n.origin.y-r);if(o>=0){const c=Math.sqrt(o);s.push((n.velocity.y-c)/a,(n.velocity.y+c)/a)}}for(const r of s.filter(a=>a>=t-1e-9&&a<=i+1e-9).sort((a,o)=>a-o)){const a=nn(n,r);if(a.x>=e.minX-1e-8&&a.x<=e.maxX+1e-8&&a.y>=e.minY-1e-8&&a.y<=e.maxY+1e-8)return rr(r,t,i)}return null}function iu(n,e=.24){if(fo(n),Ki(e),n.origin.y<e)return 0;const t=ia(n);return(n.velocity.y+Math.sqrt(n.velocity.y**2+2*t*(n.origin.y-e)))/t}function vg(n,e){if(fo(n),Ki(e),!n.wind)return n.velocity.x===0?null:(e-n.origin.x)/n.velocity.x;const t=tu(n,e).filter(i=>i>=0).sort((i,s)=>i-s);return t.length?t[0]:null}const GS=[[-1,0],[1,0],[0,-1],[0,1]];function bg(n,e,t=32){return[...new Set(n.map(i=>`${Math.floor(i%e/t)}:${Math.floor(Math.floor(i/e)/t)}`))]}function Mg(n,e,t){const i=new Set(n);for(const s of n){const[r,a]=s.split(":").map(Number);for(const[o,c]of GS)r+o>=0&&a+c>=0&&r+o<e&&a+c<t&&i.add(`${r+o}:${a+c}`)}return[...i]}function VS(n,e,t,i,s){return eu(n*s,e,t,i)}function WS(n,e,t,i){if(n===0)return null;const s=n<0?1:-1,r=eu(n*s,e,t,i);return r?{...r,facing:s}:null}function XS(n,e,t){if(t<e||!n.length)return null;const i=(t-e)/1e3,s=n.find(o=>o.time>=i)??n.at(-1),r=n[Math.max(0,n.indexOf(s)-1)],a=s.time===r.time?1:Math.min(1,Math.max(0,(i-r.time)/(s.time-r.time)));return s.poses.map(o=>{const c=r.poses.find(l=>l.actorId===o.actorId)?.feet??o.feet;return{actorId:o.actorId,feet:{x:c.x+(o.feet.x-c.x)*a,y:c.y+(o.feet.y-c.y)*a,z:0}}})}function $S(n,e){if(!n)return"";if(n.state==="finished")return n.draw?"Both archers draw.":n.winner===e?"You are the last archer standing.":"Your opponent is the last archer standing.";if(n.state==="aborted")return"The service ended this duel safely.";if(n.state!=="active"||n.phase!=="planning"||!n.lastEvent?.teleport)return"";const t=n.lastEvent.teleport;if(t.ok)return"Teleport landed on a clear supported surface.";const i={"not-upward":"the arrow did not land on an upward-facing surface","no-support":"there was no supporting surface","occupied-or-blocked":"the arrival space was occupied or blocked"};return`Teleport failed: ${t.reason?i[t.reason]:"there was no legal arrival"}. The action was consumed.`}const oi=n=>n.version==="volley-1";function YS(n){return JSON.stringify(oi(n)?[n.id,n.version,n.seat.lifeId,n.epoch,n.roundId]:[n.id,n.version,n.seat.lifeId,n.activeSeat,n.planningStartedAt])}function jS(n,e){return oi(n)?n.locks.find(t=>t.actorId===e)?.plan??null:null}function qS(n){if(!n.seats.every(t=>t.ready))return!1;if(!oi(n))return n.seats.length===2;if(n.mode==="royale")return n.seats.length>=2&&n.seats.length<=8;const e=new Map;for(const t of n.seats){if(t.teamId===null)return!1;e.set(t.teamId,(e.get(t.teamId)??0)+1)}return n.seats.length===4&&e.size===2&&[...e.values()].every(t=>t===2)}function Sg(n,e){const t=oi(n),i=n.seats.find(h=>h.actorId===e);let s=$S(n,e);if(t&&n.state==="finished"&&(s=n.draw?"Match complete · draw.":n.winningTeam!==null?i&&"teamId"in i&&i.teamId===n.winningTeam?"Your team won.":"The other team won.":n.winner===e?"You are the last archer standing.":"Another archer is the last one standing."),t&&n.state==="aborted"&&(s="The service ended this match safely."),!t)return{preset:"Duel · alternate turns",turn:n.state==="waiting"?"Both archers must ready before the host starts.":n.state==="active"?n.phase==="planning"?n.seat.canAct?"Your turn. Choose an arrow and draw.":"Opponent’s turn. Watch the arena.":"Arrow resolving. Waiting for settlement.":n.state==="finished"?n.draw?"Duel complete · draw.":n.winner===e?"Duel complete · you won.":"Duel complete · opponent won.":"This duel was aborted. Leave to create a new room.",result:s,priority:[],locks:[],pressure:""};const r=n.locks.find(h=>h.actorId===e),a=n.actors.filter(h=>!h.eliminated).length,o=n.seat.canAct?"Choose an arrow and draw to lock.":r?.locked?r.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":n.priority.includes(e)?"Watch the arena.":"You are eliminated. Watch the remaining archers.",c=n.preset==="teams-1"?"Teams 2v2 · shared 20-second planning":n.preset==="royale-fixed-1"?"Royale · fixed arena · 30 rounds / 15 minutes · 20-second planning":"Royale · shrinking safe area · 20-second planning",l=n.state==="waiting"?n.mode==="teams"?"Four archers, two per team, must ready before the host starts.":"Two to eight archers must all ready before the host starts.":n.state==="active"?`Round ${n.round} · ${a} alive · ${n.phase==="planning"?o:"Arrows resolve in published priority order."}`:s,u=n.preset!=="royale-shrink-1"?"":`Safe area (solid) ${n.pressure.minX.toFixed(1)} to ${n.pressure.maxX.toFixed(1)}${n.pressure.warning?` · dashed bounds after round ${n.pressure.warning.afterRound} to ${n.pressure.warning.minX.toFixed(1)}–${n.pressure.warning.maxX.toFixed(1)} · outside feet take 25 damage`:""}`,d=n.locks.map(h=>{const p=h.plan;return{actorId:h.actorId,text:h.locked?p?p.kind==="pass"?"Pass locked":`${p.aim.arrow} locked · ${Math.round(p.aim.angle)}° · ${Math.round(p.aim.power*100)}% · ${p.aim.facing===1?"right":"left"}`:"Locked":"Planning"}});return{preset:c,turn:l,result:s,priority:n.priority,locks:d,pressure:u}}function wg(n,e){return n.state!=="finished"&&n.state!=="aborted"?{kind:"none",label:""}:e?e.joined?{kind:"enter",label:"Enter rematch lobby"}:{kind:"join",label:"Join rematch"}:{kind:"request",label:"Rematch"}}function KS(n){const e=/^team[-_ ]?([A-Za-z0-9]+)$/i.exec(n);return e?`Team ${e[1].toUpperCase()}`:n}function JS(n,e,t,i){const s=Sg(n,e).locks;return n.seats.map((r,a)=>{const o=n.actors.find(h=>h.id===r.actorId),c=t.find(h=>h.actorId===r.actorId),l=o?.health??100,u=c?.reservedUntil?` · reserved ${Math.max(0,Math.ceil((c.reservedUntil-i())/1e3))}s`:"",d=n.state==="active"?s.find(h=>h.actorId===r.actorId):void 0;return{actorId:r.actorId,text:`${c?.label??`Archer ${a+1}`}${r.actorId===e?" · you":""} · ${l} health${o?.eliminated?" · eliminated":""} · ${n.state==="waiting"?r.ready?"ready":"not ready":c?.status??"disconnected"}${c?.status==="disconnected"?u:""}`,health:l,healthLabel:`Archer ${a+1} health`,team:"teamId"in r&&r.teamId?String(r.teamId):null,lockText:d?.text??null}})}const Kc="combat-protocol-1",xa="combat-4",ZS="The combat rules version has changed. Reload the page to continue.",su="skirmish-protocol-1",ru=xa,QS="This public arena has been updated. Reload the page to continue.",au=Object.freeze({maxRooms:128,maxSockets:128,maxSocketsPerMember:4,maxDebtPerArena:1024,maxDebt:8192,maxMemberships:16384,maxControls:4096,controlsPerMember:2,controlRetryMs:3e5,maxRateBuckets:1024,commandBurst:30,commandWindowMs:1e4,commandBodyBytes:8192,socketFrameBytes:2048,maxSnapshotBytes:4*1024*1024,slowClientBytes:4*1024*1024,authenticationTimeoutMs:5e3,maxUnauthenticatedSockets:16}),Mi="combat-protocol-2";function hp(n,e=!1){if(typeof n!="string"||n.length>320)throw new Error("Invalid service origin.");const t=/^(https?):\/\/([A-Za-z0-9.-]+)(?::([1-9][0-9]{0,4}))?$/.exec(n);if(!t||t[0]!==n||!e&&t[1]!=="https")throw new Error("Invalid service origin.");const i=t[2].toLowerCase(),s=i.split(".");if(i.length>253||s.some(c=>!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(c)))throw new Error("Invalid service host.");const r=i==="127.0.0.1";if(!/[a-z]/.test(s.at(-1))&&!(e&&r))throw new Error("DNS service host required.");if(new URL(`${t[1]}://${i}`).hostname!==i)throw new Error("Ambiguous service host.");const a=t[3]===void 0?void 0:Number(t[3]);if(a!==void 0&&a>65535)throw new Error("Invalid service port.");const o=a===(t[1]==="https"?443:80)?void 0:a;return`${t[1]}://${i}${o===void 0?"":`:${o}`}`}function vh(n,e){if(n==="")return null;const t=hp(e,!0),i=n==="/api",s=i?t:hp(n.endsWith("/api")?n.slice(0,-4):n);if(!i&&!n.endsWith("/api"))throw new Error("Service endpoint must end in /api.");const r=`${s}/api`,a=r.replace(/^http/,"ws");return Object.freeze({mode:i?"same-origin":"https",requestBase:i?"/api":r,serviceId:r,boardSocket:`${a}/events`,combatSocket:`${a}/combat/events`})}function ew(n,e){if(n.length!==1)return null;try{return vh(n[0],e)}catch{return null}}function Eg(n){if(n.mode==="same-origin")return Object.freeze({identity:"archery.challenge.identity.v1",room:"archery.combat.room.v1",legacy:!0});const e=encodeURIComponent(n.serviceId);return Object.freeze({identity:`archery.service.identity.v2:${e}`,room:`archery.service.room.v2:${e}`,legacy:!1})}function up(n){if(typeof n=="string"){if(n!=="/api")throw new Error("Use a parsed endpoint or same-origin /api.");return vh("/api",typeof location>"u"?"http://localhost":location.origin)}const e=n.serviceId.slice(0,-4),t=vh(n.mode==="same-origin"?"/api":n.serviceId,e);if(!t||Object.keys(t).some(i=>t[i]!==n[i]))throw new Error("Invalid shared service context.");return t}const oc=n=>!!n&&typeof n=="object"&&!Array.isArray(n);class Fn extends Error{status;code;retryAfterMs;transient;constructor(e,t,i,s){super(e),this.name="GuestRequestError",this.status=t,this.code=i,this.retryAfterMs=s,this.transient=s!==null}}function tw(n,e){let t=NaN;return n!==null&&/^[0-9]+$/.test(n)?t=Number(n)*1e3:n!==null&&/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), [0-9]{2} [A-Z][a-z]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT$/.test(n)&&(t=Math.max(0,Date.parse(n)-e)),Number.isSafeInteger(t)&&t>=0&&Number.isSafeInteger(e+t)?Math.max(1e3,t):1e3}function fp(n){if(!oc(n)||Object.keys(n).length!==2||typeof n.guestId!="string"||!n.guestId||typeof n.token!="string"||!n.token)throw new Error("Invalid guest identity.");return{guestId:n.guestId,token:n.token}}class Jc{selectedEndpoint;selectedKeys;fetcher;storage;current=null;generation=0;identityError=null;creating=null;admission=null;constructor(e,t=fetch,i){this.selectedEndpoint=up(e),this.selectedKeys=Eg(this.selectedEndpoint),this.fetcher=t,this.storage=i;let s;try{s=i?.getItem(this.storageKeys.identity)??null}catch{return}if(s!==null)try{this.current=Object.freeze({...fp(JSON.parse(s)),revision:this.generation})}catch{this.identityError=new Error("Saved guest identity is unreadable or unsupported. Existing data is preserved; forget it explicitly before creating another guest.")}}get revision(){return this.generation}get guestId(){return this.current?.guestId??null}get endpoint(){return this.selectedEndpoint}get serviceId(){return this.endpoint.serviceId}get storageKeys(){return this.selectedKeys}credentials(){return this.current}assertContext(e,t,i){if(!(typeof e=="string"?e==="/api"&&this.endpoint.mode==="same-origin":(()=>{const r=up(e);return r.mode===this.endpoint.mode&&r.serviceId===this.serviceId})())||t!==this.fetcher||i!==this.storage)throw new Error("Shared guest session context must match service, fetcher and storage.")}assertRevision(e){if(e!==this.generation)throw new Error("Guest identity changed. Start again with the current guest.")}ensure(){if(this.identityError)return Promise.reject(this.identityError);if(this.current)return Promise.resolve(this.current);if(this.creating)return this.creating;const e=this.generation,t=this.create(e).finally(()=>{this.creating===t&&(this.creating=null)});return this.creating=t,t}async create(e){const t=fp(await this.request("/guests",{}));this.assertRevision(e),this.current=Object.freeze({...t,revision:++this.generation});try{this.storage?.setItem(this.storageKeys.identity,JSON.stringify(t))}catch{}return this.current}request(e,t){return this.requestJson(e,t)}readReadiness(){return this.requestJson("/readiness",void 0,!0)}readRules(){return this.requestJson("/rules",void 0,!0)}async requestJson(e,t,i=!1){if(this.identityError)throw this.identityError;if(!e.startsWith("/")||e.startsWith("//")||e.includes("\\"))throw new Error("Invalid shared service path.");if(this.admission&&Date.now()<this.admission.notBefore)throw this.admission.error;const s=this.generation,r=await this.fetcher.call(globalThis,this.endpoint.requestBase+e,{signal:AbortSignal.timeout(i?3e3:15e3),method:t===void 0?"GET":"POST",credentials:"omit",redirect:"error",...i?{}:{headers:{"Content-Type":"application/json",...this.current?{Authorization:`Bearer ${this.current.token}`}:{}}},...t===void 0?{}:{body:JSON.stringify(t)}});this.assertRevision(s);let a;try{a=await r.json()}catch(o){if(r.ok)throw o;a=null}if(this.assertRevision(s),!r.ok){const o=oc(a)&&oc(a.error)?a.error:null,c=o&&typeof o.code=="string"?o.code:null,l=c!==null&&["room_capacity","guest_room_capacity","command_capacity","socket_capacity","challenge_capacity","guest_capacity"].includes(c),u=Date.now(),d=r.status===429&&!l?tw(r.headers.get("Retry-After"),u):null,h=new Fn(o&&typeof o.message=="string"?o.message:d!==null?"The shared service is busy. Wait a moment, then retry.":"Shared service unavailable. Retry or start a new local challenge.",r.status,c,d);throw d!==null&&(!this.admission||u+d>this.admission.notBefore)&&(this.admission={notBefore:u+d,error:h}),h}if(i&&(r.status!==200||r.headers.get("Content-Type")?.split(";",1)[0].trim().toLowerCase()!=="application/json"))throw new Error("Invalid shared service readiness.");if(!oc(a))throw new Error("Invalid shared service response.");return a}forget(){this.generation++,this.current=null,this.identityError=null,this.creating=null;try{this.storage?.removeItem(this.storageKeys.identity)}catch{}}}const Hs={rulesVersion:xa,code:"rules_version",reload:ZS},vi={rulesVersion:ru,code:"protocol_version",reload:QS};function xs(n,e){return n instanceof Fn&&n.status===409&&n.code===e.code}function bh(n){return new Fn(n.reload,409,n.code,null)}const Tg=["combat-1","combat-2","combat-3"];function pp(n,e){return Array.isArray(n)&&n.length===e.length&&e.every((t,i)=>n[i]===t)}async function mp(n,e){n.assertRevision(e);let t;try{t=await n.readReadiness()}catch{}if(n.assertRevision(e),!t)return!1;const{ready:i,apiVersion:s,rulesVersion:r,combatRulesVersion:a,protocols:o,roomKinds:c,presets:l,publicProfile:u}=t;return i===!0&&s==="shared-api-1"&&r==="challenge-v1"&&Tg.includes(a)&&Object.keys(t).length===(u===void 0?7:8)&&(u===void 0||u==="public-admission-v1")&&pp(o,[Kc,Mi,su])&&pp(c,["duel","teams","royale","skirmish"])&&Array.isArray(l)&&l.length===1&&(l[0]==="skirmish-1"||l[0]==="skirmish-2"||l[0]==="skirmish-3")}function nw(n,e,t){return n instanceof TypeError?!0:n instanceof Fn?n.status===400&&n.code==="path"&&n.message==="Invalid service query."||t===vi&&e!=="/skirmish/rules"&&n.status===404&&n.code==="not_found"&&n.message==="Public arena not found.":!1}async function Hr(n,e,t){const i=n.revision;let s;try{s=await n.request(e+"?rulesVersion="+encodeURIComponent(t.rulesVersion))}catch(r){throw nw(r,e,t)&&await mp(n,i)?bh(t):r}if(Tg.includes(s.rulesVersion)&&await mp(n,i))throw bh(t);return s}const po=Object.freeze({shotGravity:Object.freeze({min:8,max:30}),shotMinSpeed:Object.freeze({min:8,max:20}),shotExtraSpeed:Object.freeze({min:5,max:24}),actorGravity:Object.freeze({min:8,max:40}),airDrag:Object.freeze({min:0,max:2}),groundFriction:Object.freeze({min:2,max:30}),restitution:Object.freeze({min:0,max:.6}),impactThreshold:Object.freeze({min:2,max:20}),impactMultiplier:Object.freeze({min:0,max:10}),physicsDamageCap:Object.freeze({min:0,max:100,integer:!0}),health:Object.freeze({min:25,max:100,integer:!0}),directBodyDamage:Object.freeze({min:1,max:100,integer:!0}),directHeadDamage:Object.freeze({min:1,max:100,integer:!0}),blastNearDamage:Object.freeze({min:0,max:100,integer:!0}),blastMidDamage:Object.freeze({min:0,max:100,integer:!0}),blastFarDamage:Object.freeze({min:0,max:100,integer:!0}),bombRadius:Object.freeze({min:1,max:3}),bombImpulseFloor:Object.freeze({min:0,max:1}),bombHorizontalImpulse:Object.freeze({min:0,max:20}),bombUpImpulse:Object.freeze({min:0,max:25}),craterRadius:Object.freeze({min:1,max:3}),chipRadius:Object.freeze({min:.25,max:3}),directKnockbackHorizontal:Object.freeze({min:0,max:12}),directKnockbackUp:Object.freeze({min:0,max:12}),planningMs:Object.freeze({min:5e3,max:6e4,integer:!0})}),Ag=Object.freeze({min:0,max:6}),gp=40,Ks=Object.keys(po),Ts=n=>n.windMax??0,iw=/^[a-z0-9][a-z0-9._-]{0,31}$/;function Zc(n){return Object.freeze(n)}const Bn=Zc({id:"base-1",shotGravity:18,shotMinSpeed:13,shotExtraSpeed:15,actorGravity:18,airDrag:.15,groundFriction:14,restitution:0,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,health:100,directBodyDamage:50,directHeadDamage:100,blastNearDamage:25,blastMidDamage:10,blastFarDamage:5,bombRadius:3,bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,craterRadius:3,chipRadius:.5,directKnockbackHorizontal:0,directKnockbackUp:0,planningMs:2e4}),Mh=Zc({...Bn,id:"playtest-1",chipRadius:1.25,directKnockbackHorizontal:4,directKnockbackUp:5,bombUpImpulse:14,bombHorizontalImpulse:11,restitution:.4,groundFriction:8,impactThreshold:8}),xp=Zc({...Mh,id:"playtest-2",windMax:3}),pi=Object.freeze({[Bn.id]:Bn,[Mh.id]:Mh,[xp.id]:xp});function us(n){throw new RangeError(`Invalid tuning profile: ${n}`)}function sw(n,e){return Ks.every(t=>n[t]===e[t])&&Ts(n)===Ts(e)}function Qc(n){(!n||typeof n!="object"||Array.isArray(n))&&us("an object is required.");const e=n,t=Object.keys(e);(!Object.hasOwn(e,"id")||Ks.some(r=>!Object.hasOwn(e,r))||t.some(r=>r!=="id"&&!Ks.includes(r)&&r!=="windMax"))&&us("fields differ from the tuning schema."),(typeof e.id!="string"||!iw.test(e.id))&&us("id must be 1..32 lowercase letters, digits, dot, underscore or hyphen.");const i=Ks.map(r=>[r,po[r]]);Object.hasOwn(e,"windMax")&&i.push(["windMax",Ag]);for(const[r,a]of i){const o=e[r];(typeof o!="number"||!Number.isFinite(o))&&us(`${r} must be a finite number.`),(o<a.min||o>a.max||a.integer&&!Number.isInteger(o))&&us(`${r} must be ${a.integer?"an integer ":""}between ${a.min} and ${a.max}.`)}const s=e;s.shotMinSpeed+s.shotExtraSpeed>gp&&us(`shotMinSpeed + shotExtraSpeed must not exceed ${gp}.`),(s.blastNearDamage<s.blastMidDamage||s.blastMidDamage<s.blastFarDamage)&&us("blast damage must not increase with distance.")}function rw(n){Qc(n);const e=Sc(n.id);e&&!sw(n,e)&&us(`id ${n.id} is reserved for its preset values.`)}function Sc(n){return typeof n=="string"&&Object.hasOwn(pi,n)?pi[n]:void 0}function aw(n){return JSON.stringify([n.id,...Ks.map(e=>n[e]),...Ts(n)===0?[]:[Ts(n)]])}function Rg(n){let e=0xcbf29ce484222325n;for(const t of new TextEncoder().encode(n))e=BigInt.asUintN(64,(e^BigInt(t))*0x100000001b3n);return e}function wc(n){return`fnv64-${Rg(aw(n)).toString(16).padStart(16,"0")}`}function _p(n){rw(n);const e={id:n.id};for(const t of Ks)e[t]=n[t];return Ts(n)!==0&&(e.windMax=n.windMax),Zc(e)}function el(n){return Object.hasOwn(n,"tuning")&&n.tuning?n.tuning:Bn}const _a=Object.freeze([...Ks,"windMax"]);function ou(n,e){const t=Sc(n);if(!t)throw new RangeError(`Unknown tuning preset. Known presets: ${Object.keys(pi).join(", ")}.`);if(!e||typeof e!="object"||Array.isArray(e))throw new RangeError("Tuning overrides must be an object.");const i=Object.entries(e);for(const[r,a]of i){if(!_a.includes(r))throw new RangeError(`Unknown tuning field "${r.slice(0,40)}".`);if(typeof a!="number"||!Number.isFinite(a))throw new RangeError(`${r} must be a finite number.`)}if(i.length===0)return t;const s=Cg(JSON.stringify({base:t.id,...Object.fromEntries(i)}));return wc({...s,id:t.id})===wc(t)?t:s}function Cg(n){if(n===void 0||n.trim()==="")return Bn;const e=n.trim();if(!e.startsWith("{")){const r=Sc(e);if(!r)throw new RangeError(`Unknown tuning preset "${e.slice(0,40)}". Known presets: ${Object.keys(pi).join(", ")}.`);return r}if(e.length>4096)throw new RangeError("Tuning JSON is too large.");let t;try{t=JSON.parse(e)}catch{throw new RangeError("Tuning JSON is not valid JSON.")}if(!t||typeof t!="object"||Array.isArray(t))throw new RangeError("Tuning JSON must be an object.");let i=t;if(Object.hasOwn(i,"base")){const{base:r,...a}=i,o=Sc(r);if(!o)throw new RangeError(`Unknown tuning base preset. Known presets: ${Object.keys(pi).join(", ")}.`);const{id:c,...l}=o;i={...l,...a}}if(Object.hasOwn(i,"id"))return _p(i);const s={...i,id:"custom"};return _p({...s,id:`custom-${wc(s).slice(-8)}`})}const rn=Object.freeze({nock:Object.freeze({x:.92,y:2.77,z:0}),halfWidth:.86,height:3.055,head:Object.freeze({minX:-.325,maxX:.325,minY:2.255,maxY:2.905}),body:Object.freeze({minX:-.86,maxX:.86,minY:0,maxY:2.255})}),Ig=Object.freeze({version:"combat-1",cell:.125,gravity:18,step:1/120,maxSteps:3600,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,bombRadius:3,craterRadius:3,chipRadius:.5,maxDeltaCells:2048,activeTerrainRules:"current",bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,groundFriction:14,airDrag:.15,restitution:0,matchMs:9e5,planningMs:2e4,launchDelayMs:100,maxActors:8});function tl(...n){if(!n.every(Number.isFinite))throw new RangeError("Finite combat coordinates required.")}function Ec(n){if(!n||typeof n!="object")throw new RangeError("Planar position required.");if(tl(n.x,n.y,n.z),n.z!==0)throw new RangeError("Combat uses world z=0.")}function ow(n){if(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))throw new RangeError("Identifier must be a 1..128 character ASCII token.")}function Pg(n){if(!n||typeof n!="object")throw new RangeError("Aim required.");if(tl(n.angle,n.power),n.angle<5||n.angle>80||n.power<.08||n.power>1||n.facing!==1&&n.facing!==-1)throw new RangeError("Aim outside combat limits.");if("arrow"in n&&!["normal","bomb","teleport"].includes(n.arrow))throw new RangeError("Unknown arrow.")}function cu(n){if(!Array.isArray(n)||n.length>Ig.maxActors)throw new RangeError("At most eight actors.");const e=new Set;for(const t of n){if(ow(t.id),Ec(t.feet),Ec(t.velocity),tl(t.health),!Number.isInteger(t.health)||t.health<0||t.health>100||Math.abs(t.feet.x)>1024||Math.abs(t.feet.y)>1024||Math.abs(t.velocity.x)>1e3||Math.abs(t.velocity.y)>1e3||e.has(t.id)||t.facing!==1&&t.facing!==-1||typeof t.eliminated!="boolean")throw new RangeError("Invalid actor.");e.add(t.id)}}function yp(n,e){return{minX:n.x+e.minX,maxX:n.x+e.maxX,minY:n.y+e.minY,maxY:n.y+e.maxY}}function cw(n){return[{kind:"head",bounds:yp(n.feet,rn.head)},{kind:"body",bounds:yp(n.feet,rn.body)}]}function lw(n,e=n.facing){return{x:n.feet.x+rn.nock.x*e,y:n.feet.y+rn.nock.y,z:0}}function Zl(n,e,t=Bn,i=0){cu([n]),Pg(e);const s=qc(e,{minSpeed:t.shotMinSpeed,extraSpeed:t.shotExtraSpeed}),r=lw(n,e.facing);return{origin:{x:r.x,y:r.y},velocity:{x:s.velocity.x*e.facing,y:s.velocity.y},...t.shotGravity===Bn.shotGravity?{}:{gravity:t.shotGravity},...i===0?{}:{wind:i}}}function Lg(n,e,t,i,s=!1){const l=t*i,u=Math.ceil(t/32),d=Math.ceil(i/32);return Object.freeze({version:n,cell:.125,minX:e,minY:-8,width:t,height:i,bedrockY:-6,bounds:Object.freeze({minX:e,maxX:e+t*.125,minY:-8,maxY:-8+i*.125}),cellCount:l,maxCellIndex:l-1,maskHexLength:l/4,chunkSize:32,chunkColumns:u,chunkRows:d,maxChunks:u*d,protectPads:s})}const Dg=Lg("arena-1",-32,512,288),Ng=Lg("arena-2",-40,640,352,!0);function Un(n){if(n==="arena-1")return Dg;if(n==="arena-2")return Ng;throw new RangeError("Unsupported terrain profile.")}function lu(n){if(n==="skirmish-1")return Dg;if(n==="skirmish-2"||n==="skirmish-3")return Ng;throw new RangeError("Unsupported public arena version.")}function du(n,e){const t=e===void 0?void 0:Un(e);if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid terrain metadata.");const i=n,s=Un(i.version);if(t&&s!==t)throw new RangeError("Terrain differs from the expected profile.");for(const r of["cell","minX","minY","width","height","bedrockY"])if(i[r]!==s[r])throw new RangeError("Invalid terrain profile geometry.");if(!Number.isSafeInteger(i.revision)||i.revision<0||!Array.isArray(i.spawnPads)||i.spawnPads.length!==8)throw new RangeError("Invalid terrain metadata.");for(const r of i.spawnPads){if(Array.isArray(r))throw new RangeError("Planar spawn pad required.");Ec(r)}if(s.protectPads)for(const r of i.spawnPads)hw(s,r),uw(s,r);return s}const dw=Object.freeze([[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]]),Tc=1.5,Ug=.5;function hw(n,e){const{cell:t,minX:i,minY:s,width:r,height:a}=n,o={col0:Math.round((e.x-Tc-i)/t),col1:Math.round((e.x+Tc-i)/t),row0:Math.round((e.y-Ug-s)/t),row1:Math.round((e.y-s)/t)};if(!Number.isFinite(o.col0+o.row0)||o.col0<0||o.col1>r||o.row0<0||o.row1>a)throw new RangeError("Spawn pad protection outside the terrain grid.");return o}function uw(n,e){const{cell:t,minX:i,minY:s,width:r,height:a}=n,o=t/2;if(!(Number.isInteger((e.x-i)/o)&&Number.isInteger((e.y-s)/o))||e.x-Tc<i||e.x+Tc>i+r*t||e.y-Ug<s||e.y+rn.height>s+a*t)throw new RangeError("Spawn pad protection outside the terrain grid.")}Object.freeze(dw.map(([n,e])=>Object.freeze({x:n,y:e})));const fw="tgen-1",kg=/^[a-z0-9][a-z0-9._-]{0,31}@[1-9][0-9]{0,5}$/;function pw(n){if(typeof n!="string"||!kg.test(n))return null;const e=n.indexOf("@");return{id:n.slice(0,e),version:Number(n.slice(e+1))}}const mw=Object.freeze({version:"skirmish-1",slots:8,minimumParticipants:4,planningMs:2e4,resetAfter:20,idleAfter:3,receiptLimit:16}),Og=mw,Fg=Object.freeze({...Og,version:"skirmish-2",spawnPolicy:"separated"}),gw=Object.freeze({...Fg,version:"skirmish-3",terrain:Object.freeze({generator:fw,pool:"public"})});function nl(n){if(lu(n),n==="skirmish-1")return Og;if(n==="skirmish-2")return Fg;if(n==="skirmish-3")return gw;throw new RangeError("Unsupported public rules version.")}const hu="skirmish-3";nl(hu);const dt=()=>{throw new Error("The public arena service returned an unsupported response.")},uu=n=>{(!n||typeof n!="object"||Array.isArray(n))&&dt()},Dt=n=>{(!Number.isSafeInteger(n)||n<0)&&dt()},sa=n=>{Number.isFinite(n)||dt()},ot=n=>{(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))&&dt()},In=n=>{typeof n!="boolean"&&dt()},je=(...n)=>e=>{n.includes(e)||dt()},ar=n=>e=>{Dt(e),e>n&&dt()},qt=n=>e=>{e!==null&&n(e)},Et=(n,e={})=>t=>{uu(t),(Object.keys(n).some(i=>!Object.hasOwn(t,i))||Object.keys(t).some(i=>!Object.hasOwn(n,i)&&!Object.hasOwn(e,i)))&&dt();for(const[i,s]of Object.entries(n))s(t[i]);for(const[i,s]of Object.entries(e))Object.hasOwn(t,i)&&s(t[i])},Zn=(n,e)=>t=>{(!Array.isArray(t)||t.length>e)&&dt();for(const i of t)n(i)},vp=n=>{Zn(ot,8)(n),new Set(n).size!==n.length&&dt()},or=n=>{Et({x:sa,y:sa,z:je(0)})(n),Ec(n)},fu={protocolVersion:je(su),rulesVersion:je(ru)},xw=n=>{Et({arrow:je("normal","bomb","teleport"),angle:sa,power:sa,facing:je(-1,1)})(n),Pg(n)},Ac=n=>{Et({id:ot,actorId:ot,lifeId:ot,epoch:Dt,roundId:ot,kind:je("shot","pass"),aim:qt(xw)})(n),n.kind==="shot"!=(n.aim!==null)&&dt()},_w=n=>{Et({id:ot,feet:or,velocity:or,facing:je(-1,1),health:ar(100),eliminated:In})(n)},yw=Et({memberId:ot,actorId:ot,lifeId:ot,slotId:je("s0","s1","s2","s3","s4","s5","s6","s7"),kind:je("human","npc"),present:In,leaving:In,idle:In,missedWindows:ar(3),spawnPending:In,bombReady:In}),Bg=Et({memberId:ot,actorId:ot,lifeId:ot,slotId:je("s0","s1","s2","s3","s4","s5","s6","s7"),kind:je("human","npc")}),zg=n=>Et({fromRevision:Dt,toRevision:Dt,removed:Zn(ar(n.maxCellIndex),Ig.maxDeltaCells)}),Hg=n=>Et({kind:je("terrain","head","body","bounds","timeout"),time:sa,point:or,normal:or},{actorId:ot,cell:ar(n.maxCellIndex)}),vw=Zn(Et({time:sa,poses:Zn(Et({actorId:ot,feet:or}),8)}),902),bw=Et({ok:In},{reason:je("not-upward","no-support","occupied-or-blocked"),feet:or}),Mw=n=>Et({action:Ac,roster:Zn(Bg,8),contact:Hg(n),delta:zg(n),motion:vw,startedAt:qt(Dt),endsAt:qt(Dt)}),Sw=n=>Et({action:Ac,roster:Zn(Bg,8),contact:Hg(n),damage:Zn(Et({actorId:ot,amount:ar(100),cause:je("direct","blast","physics")}),408),delta:zg(n),teleport:qt(bw)}),ww=n=>{try{Qc(n)}catch{dt()}},Ew=Et({template:n=>{(typeof n!="string"||!kg.test(n))&&dt()}}),Tw=n=>{uu(n);let e;try{e=lu(n.version)}catch{return dt()}const t=i=>{Et({version:je(e.version),revision:Dt,cell:je(e.cell),minX:je(e.minX),minY:je(e.minY),width:je(e.width),height:je(e.height),bedrockY:je(e.bedrockY),spawnPads:Zn(or,8),maskHex:s=>{(typeof s!="string"||s.length!==e.maskHexLength||!/^[0-9a-f]+$/.test(s))&&dt()}})(i);try{du(i,e.version)}catch{dt()}};Et({version:je("skirmish-1","skirmish-2","skirmish-3"),id:ot,epoch:Dt,revision:Dt,state:je("active","suspended","aborted"),phase:je("planning","resolving","settling"),terrain:t,actors:Zn(_w,8),members:Zn(yw,8),roundSerial:Dt,roundId:ot,completedRounds:ar(20),resetIn:qt(ar(2)),slotOrder:vp,priority:vp,drainThenBoundary:In,planningStartedAt:qt(Dt),deadlineAt:qt(Dt),launchAt:qt(Dt),contactAt:qt(Dt),resolutionEndsAt:qt(Dt),locks:Zn(Et({actorId:ot,locked:In,plan:qt(Ac)}),8),action:qt(Ac),effect:qt(Mw(e)),lastEvent:qt(Sw(e)),self:Et({memberId:qt(ot),actorId:qt(ot),lifeId:qt(ot),pending:In,canAct:In,bombReady:In,opportunities:Dt,bombReadyAt:Dt}),abortReason:qt(je("settling-exhausted"))},{tuning:ww,layout:Ew,wind:i=>{(typeof i!="number"||!Number.isFinite(i)||i===0)&&dt()}})(n),Object.hasOwn(n,"layout")!==!!nl(n.version).terrain&&dt(),Object.hasOwn(n,"wind")&&!(Math.abs(n.wind)<=(n.tuning?.windMax??0))&&dt()};function Gg(n){new TextEncoder().encode(JSON.stringify(n)).byteLength>au.maxSnapshotBytes&&dt()}function Vg(n){Gg(n),Et({...fu,roomKind:je("skirmish"),arenaId:ot,serverNow:Dt,snapshotRevision:Dt,retryHorizonMs:Dt,membership:Et({memberId:ot,actorId:ot,lifeId:qt(ot),status:je("pending","active","idle","left","suspended","respawn","aborted"),canAct:In,bombReady:In}),connections:Zn(Et({actorId:ot,label:i=>{(typeof i!="string"||i.length>80)&&dt()},kind:je("human","npc"),connected:In}),8),state:Tw})(n);const e=n,t=e.state;return cu(t.actors),(t.id!==e.arenaId||e.retryHorizonMs<1||e.retryHorizonMs>au.controlRetryMs||t.self.lifeId!==e.membership.lifeId||t.self.canAct!==e.membership.canAct||t.self.bombReady!==e.membership.bombReady||t.self.actorId!==null&&t.self.actorId!==e.membership.actorId)&&dt(),(t.slotOrder.length!==8||t.slotOrder.some(i=>!/^s[0-7]$/.test(i))||new Set(t.members.map(i=>i.actorId)).size!==t.members.length||new Set(t.members.map(i=>i.memberId)).size!==t.members.length||new Set(t.members.map(i=>i.slotId)).size!==t.members.length)&&dt(),(t.state==="active"&&t.priority.some(i=>!t.members.some(s=>s.actorId===i))||t.actors.some(i=>!t.members.some(s=>s.actorId===i.id))||t.locks.some(i=>!t.priority.includes(i.actorId)||i.plan!==null&&(!i.locked||i.plan.actorId!==i.actorId||i.plan.epoch!==t.epoch||i.plan.roundId!==t.roundId||!t.members.some(s=>s.actorId===i.actorId&&s.lifeId===i.plan.lifeId)||t.phase==="planning"&&i.actorId!==e.membership.actorId)))&&dt(),t.state!=="active"&&(t.self.canAct||t.action!==null||t.effect!==null||t.locks.some(i=>i.locked||i.plan!==null)||[t.deadlineAt,t.launchAt,t.contactAt,t.resolutionEndsAt].some(i=>i!==null))&&dt(),t.state==="suspended"&&(t.phase!=="planning"||t.planningStartedAt!==null)&&dt(),(t.action&&(t.action.kind!=="shot"||t.action.epoch!==t.epoch)||t.effect&&(t.phase!=="settling"||t.effect.action.epoch!==t.epoch||t.effect.startedAt===null||t.effect.endsAt===null||t.effect.startedAt>t.effect.endsAt||t.effect.startedAt>e.serverNow))&&dt(),e.membership.canAct&&(e.membership.status!=="active"||t.state!=="active"||t.phase!=="planning"||t.deadlineAt===null||!t.priority.includes(e.membership.actorId))&&dt(),e}function Aw(n){Gg(n),Et({ack:Et({...fu,arenaId:ot,memberId:ot,actionId:ot,kind:je("join","leave","rejoin","shot","pass"),epoch:Dt,roundId:qt(ot),lifeId:qt(ot),acceptedRevision:Dt,outcome:je("accepted","existing-membership")}),current:Et({type:je("current"),envelope:t=>{Vg(t)}})},{reassignedFrom:Et({arenaId:ot,memberId:ot})})(n);const e=n;return(e.ack.outcome==="existing-membership"&&e.ack.kind!=="join"||e.reassignedFrom&&e.ack.kind!=="rejoin"||["shot","pass"].includes(e.ack.kind)&&(e.ack.lifeId===null||e.ack.roundId===null))&&dt(),e}function bp(n){uu(n);let e;try{e=nl(n.preset)}catch{return dt()}return Et({...fu,roomKind:je("skirmish"),serverNow:Dt,preset:je(e.version),planningMs:je(e.planningMs),slots:je(e.slots),minimumParticipants:je(e.minimumParticipants),resetAfter:je(e.resetAfter),idleAfter:je(e.idleAfter),retryHorizonMs:t=>{Dt(t),(t<1||t>au.controlRetryMs)&&dt()}})(n),n}const Yo={protocolVersion:su,rulesVersion:ru},Ql=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function Rw(n){return`${Eg(n).identity}:skirmish-locator-v1:${encodeURIComponent(`${n.mode}:${n.serviceId}`)}`}const Cw={404:"not_found",403:"membership",410:"expired"};function Mp(n){return n instanceof Fn&&n.code!==null&&Cw[n.status]===n.code?"gone":"unknown"}const Iw=new Set(["validation","membership","wrong_epoch","wrong_life","wrong_round","retry_retired","stale_revision","conflict","inactive","cooldown","wrong_actor","deadline","wrong_phase","not_found","room_capacity","socket_capacity","debt_capacity","control_capacity","membership_capacity","rate_capacity","protocol_version"]);class Pw{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};session;storage;locatorKey;factory;socket=null;poll=null;recovery=null;generation=0;socketGeneration=0;stopped=!1;observedServerTime=0;observedAt=0;hasClock=!1;rejected=null;constructor(e,t=fetch,i,s,r={}){s?.assertContext(e,t,i),this.session=s??new Jc(e,t,i),this.storage=i,this.locatorKey=Rw(this.session.endpoint),this.factory=r.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):r.socket}now=()=>this.hasClock?this.observedServerTime+Math.max(0,performance.now()-this.observedAt):0;get savedArena(){try{const e=JSON.parse(this.storage?.getItem(this.locatorKey)??"null");return Ql(e)&&Object.keys(e).sort().join(",")==="arenaId,guestId,memberId"&&e.guestId===this.session.guestId&&typeof e.arenaId=="string"&&typeof e.memberId=="string"?{arenaId:e.arenaId,memberId:e.memberId}:null}catch{return null}}get lockAgain(){return!!this.room&&this.room.membership.canAct&&this.rejected===this.opportunity(this.room)}opportunity(e){return JSON.stringify([e.arenaId,e.membership.memberId,e.membership.actorId,e.membership.lifeId,e.state.epoch,e.state.roundId])}scope(){return this.room?{arenaId:this.room.arenaId,memberId:this.room.membership.memberId}:{}}check(e,t){if(this.session.assertRevision(t),this.generation!==e)throw Error("The public arena context changed while this request was pending.")}emit(){this.onChange()}install(e,t,i=!1){const s=Vg(e);if(!i&&(t.arenaId&&t.arenaId!==s.arenaId||t.memberId&&t.memberId!==s.membership.memberId))throw Error("The public response belongs to a different membership.");if(this.room&&s.arenaId===this.room.arenaId&&s.membership.memberId===this.room.membership.memberId){if(s.snapshotRevision<this.room.snapshotRevision)return;if(s.state.epoch<this.room.state.epoch||s.state.epoch===this.room.state.epoch&&s.state.revision<this.room.state.revision)throw Error("The public response would reverse the confirmed world.");if(s.snapshotRevision===this.room.snapshotRevision&&(s.state.epoch!==this.room.state.epoch||s.membership.actorId!==this.room.membership.actorId||s.membership.lifeId!==this.room.membership.lifeId))throw Error("A public identity transition needs a newer snapshot.");if(s.snapshotRevision===this.room.snapshotRevision&&s.serverNow<=this.room.serverNow)return}else if(this.room&&!i)throw Error("The public response changed membership without an explicit rejoin.");i&&this.disconnect(),this.room=s,this.observedServerTime=this.hasClock?Math.max(this.now(),s.serverNow):s.serverNow,this.observedAt=performance.now(),this.hasClock=!0;try{this.storage?.setItem(this.locatorKey,JSON.stringify({arenaId:s.arenaId,memberId:s.membership.memberId,guestId:this.session.guestId}))}catch{}this.emit()}applyReply(e,t){const i=Aw(e),s=i.ack,r=t.body;if(s.kind!==r.kind||s.actionId!==r.actionId)throw Error("The public acknowledgement does not match the pending action.");if(s.outcome==="existing-membership"&&(r.kind!=="join"||s.acceptedRevision!==i.current.envelope.state.revision||s.arenaId!==i.current.envelope.arenaId||s.memberId!==i.current.envelope.membership.memberId||s.epoch!==i.current.envelope.state.epoch))throw Error("Invalid current-membership acknowledgement.");if((r.kind==="shot"||r.kind==="pass")&&(s.arenaId!==t.scope.arenaId||s.memberId!==r.memberId||s.lifeId!==r.lifeId||s.roundId!==r.roundId||s.epoch!==r.epoch))throw Error("The public acknowledgement changed action scope.");const a=i.reassignedFrom,o=!!a;if(a&&(r.kind!=="rejoin"||a.arenaId!==t.scope.arenaId||a.memberId!==t.scope.memberId))throw Error("The public reassignment does not match this explicit rejoin.");if(!a&&r.kind!=="join"&&(s.arenaId!==t.scope.arenaId||s.memberId!==t.scope.memberId))throw Error("The public acknowledgement changed membership.");return this.install(i.current.envelope,r.kind==="join"&&!this.room?{}:t.scope,o),o}async join(){if(this.busy||this.pending)throw Error("Finish the pending public action first.");const e=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const t=await this.session.ensure();this.check(e,t.revision);const i=bp(await Hr(this.session,"/skirmish/rules",vi));this.check(e,t.revision),this.pending={path:"/skirmish/join",body:Object.freeze({...Yo,kind:"join",actionId:crypto.randomUUID(),issuedAt:i.serverNow}),revision:t.revision,scope:this.scope()}}finally{e===this.generation&&(this.busy=!1,this.emit())}return this.retry()}async control(e,t=!1){if(!this.room||this.pending||this.busy)throw Error("Reconnect or finish the pending public action first.");const i=this.session.credentials();if(!i)throw Error("The original guest identity is required.");const s=this.generation,r=this.scope();this.busy=!0,this.stopped=!1,this.emit();try{await this.refresh(r.arenaId,r.memberId),this.check(s,i.revision);const a=bp(await Hr(this.session,"/skirmish/rules",vi));this.check(s,i.revision);const o=this.room;if(!o||o.arenaId!==r.arenaId||o.membership.memberId!==r.memberId)throw Error("Public membership changed.");this.pending={path:`/skirmish/${encodeURIComponent(o.arenaId)}/commands`,body:Object.freeze({...Yo,kind:e,actionId:crypto.randomUUID(),issuedAt:a.serverNow,memberId:o.membership.memberId,epoch:o.state.epoch,expectedRevision:o.state.revision}),revision:i.revision,scope:this.scope()}}finally{s===this.generation&&(this.busy=!1,this.emit())}try{return await this.retry()}catch(a){if(t||s!==this.generation||!(a instanceof Fn)||a.code!=="stale_revision")throw a;const o=this.room,c=o?.membership.status;if(!o||o.arenaId!==r.arenaId||o.membership.memberId!==r.memberId||this.pending||!c||(e==="rejoin"?!["idle","left","aborted"].includes(c):["left","idle"].includes(c)))throw a;return this.control(e,!0)}}async command(e){const t=this.room,i=this.session.credentials();if(!t||!i||this.busy||this.pending||!t.membership.canAct||!t.membership.lifeId)throw Error("This public planning opportunity is unavailable.");return this.rejected=null,this.pending={path:`/skirmish/${encodeURIComponent(t.arenaId)}/commands`,body:Object.freeze({...Yo,...e,...e.kind==="shot"?{aim:Object.freeze({...e.aim})}:{},actionId:crypto.randomUUID(),memberId:t.membership.memberId,lifeId:t.membership.lifeId,epoch:t.state.epoch,roundId:t.state.roundId,expectedRevision:t.state.revision}),revision:i.revision,scope:this.scope()},this.retry()}async retry(){const e=this.pending;if(!e||this.busy)throw Error("No public action is ready to retry.");if(this.session.assertRevision(e.revision),e.unadmitted&&e.scope.arenaId){const i=this.room,s=e.body;if(!i||i.arenaId!==e.scope.arenaId||i.membership.memberId!==e.scope.memberId||s.epoch!==void 0&&i.state.epoch!==s.epoch||s.lifeId!==void 0&&(i.membership.lifeId!==s.lifeId||i.state.roundId!==s.roundId))throw this.pending=null,this.emit(),Error("The public opportunity changed. Choose a new action explicitly.")}let t=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const i=await this.session.request(e.path,e.body);if(this.check(t,e.revision),this.pending!==e)throw Error("The pending public action changed.");const s=this.applyReply(i,e);return this.check(t,e.revision),this.pending=null,s&&(t=++this.generation),e.body.kind==="leave"?this.disconnect():this.openSocket(),this.room}catch(i){if(t!==this.generation)throw i;if(this.session.revision!==e.revision)this.forgetArena();else if(i instanceof Fn&&i.transient)["admission_rate","command_rate"].includes(i.code??"")||(e.uncertain=!0),e.unadmitted=!e.uncertain;else if(xs(i,vi))this.pending=null,this.rejected=null;else if(i instanceof Fn&&Iw.has(i.code??"")){if(this.pending=null,e.body.kind==="shot"&&this.room&&this.room.state.epoch===e.body.epoch&&this.room.state.roundId===e.body.roundId&&this.room.membership.lifeId===e.body.lifeId&&(this.rejected=this.opportunity(this.room)),this.room)try{await this.refresh()}catch(s){if(xs(s,vi))throw s}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(s){if(xs(s,vi))throw s}throw i}finally{t===this.generation&&(this.busy=!1,this.emit())}}async refresh(e=this.room?.arenaId??this.savedArena?.arenaId,t=this.room?.membership.memberId??this.savedArena?.memberId){if(!e||!t)return;const i=this.session.credentials();if(!i)throw Error("The original guest identity is required to reconnect.");const s=this.generation;try{const r=await Hr(this.session,`/skirmish/${encodeURIComponent(e)}`,vi);this.check(s,i.revision),this.install(r,{arenaId:e,memberId:t})}catch(r){throw this.check(s,i.revision),xs(r,vi)&&this.room?.arenaId===e&&this.room.membership.memberId===t&&(this.pending?.scope.arenaId===e&&this.pending.scope.memberId===t&&this.pending.revision===i.revision&&(this.pending=null),this.rejected=null,this.emit()),Mp(r)==="gone"?(this.forgetArena(),Error("This public membership is no longer available. Join explicitly with the same guest.")):r}}async probeSavedArena(){const e=this.savedArena,t=this.session.credentials();if(!e||!t||this.room||this.pending||this.busy)return"unknown";const i=this.generation,s=()=>this.generation===i&&this.session.revision===t.revision&&!this.room&&!this.pending&&!this.busy&&this.savedArena?.arenaId===e.arenaId&&this.savedArena.memberId===e.memberId;let r;try{await Hr(this.session,`/skirmish/${encodeURIComponent(e.arenaId)}`,vi),r="exists"}catch(a){r=Mp(a)}return s()?(r==="gone"&&this.forgetArena(),r):"unknown"}async reconnect(){if(this.pending||this.busy)throw Error("Retry the pending public action first.");if(!this.room&&!this.savedArena)throw Error("No saved public membership is available.");this.stopped=!1;const e=this.generation;if(await this.refresh(),e!==this.generation)throw Error("The public context changed.");this.openSocket()}receive(e){if(!(!this.session.credentials()||!this.room||this.stopped||!Ql(e)||e.type!=="skirmish")){if(Object.keys(e).sort().join(",")!=="envelope,type")throw Error("Unsupported public event.");this.install(e.envelope,this.scope())}}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e||!this.factory)return;const t=this.generation,i=++this.socketGeneration,s=this.scope(),r=this.factory(`${this.session.serviceId.replace(/^http/,"ws")}/skirmish/events`);this.socket=r;const a=()=>this.socket===r&&this.socketGeneration===i&&this.generation===t&&this.session.revision===e.revision&&!this.stopped;r.addEventListener("open",()=>{if(!a()){r.close();return}const o={...Yo,type:"authenticate",token:e.token,arenaId:s.arenaId,memberId:s.memberId,lastRevision:this.room?.snapshotRevision??0};r.send(JSON.stringify(o))}),r.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));if(!Ql(c)||c.type!=="skirmish")throw Error("Unsupported public stream message.");if(this.receive(c),!a())return;this.connected=!0,this.emit()}catch(c){this.onError(c),r.close()}}),r.addEventListener("close",()=>{this.socket===r&&(this.socket=null,this.connected=!1,this.emit(),(a()||this.generation===t&&this.session.revision===e.revision&&!this.stopped)&&this.scheduleRecovery())}),r.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.poll||this.stopped)return;const e=this.generation;this.poll=setTimeout(async()=>{if(this.poll=null,!(this.stopped||e!==this.generation)){try{await this.refresh()}catch(t){e===this.generation&&this.onError(t)}e===this.generation&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.recovery||this.stopped)return;const e=this.generation;this.recovery=setTimeout(async()=>{if(this.recovery=null,!(this.stopped||e!==this.generation))try{await this.refresh(),e===this.generation&&this.openSocket()}catch(t){e===this.generation&&(this.onError(t),this.scheduleRecovery())}},1500)}disconnect(){this.socketGeneration++;const e=this.socket;this.socket=null,e?.close(),this.connected=!1,this.poll&&clearTimeout(this.poll),this.recovery&&clearTimeout(this.recovery),this.poll=null,this.recovery=null}close(){this.stopped=!0,this.generation++,this.disconnect(),this.busy=!1,this.emit()}forgetArena(){this.close(),this.room=null,this.pending=null,this.rejected=null,this.hasClock=!1;try{this.storage?.removeItem(this.locatorKey)}catch{}this.emit()}}function Lw(n){const e=n.state,t=e.locks.find(a=>a.actorId===n.membership.actorId),i=n.membership.status,r=["idle","left"].includes(i)&&e.state==="suspended"?"Paused — no active players. Rejoin when ready to play.":i==="pending"?"Your place is reserved. You enter at the next planning window.":i==="idle"?"Spectating. Inactive after three missed windows; Rejoin when ready to play.":i==="left"?"Spectating. You left public play; Rejoin when ready to play.":i==="aborted"?"This arena stopped safely. Rejoin to start a fresh arena.":i==="respawn"?"Waiting for a clear place to respawn.":i==="suspended"?"The empty arena is suspended. Reconnect to return.":e.phase!=="planning"?"Arrows resolve in the published priority order.":n.membership.canAct?"Choose an arrow or pass. Locks are final.":t?.locked?t.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":"You will respawn at the next planning window.";return{phase:i==="active"?e.phase.toUpperCase():i.toUpperCase(),turn:r,warning:e.resetIn!==null?`Fresh terrain in ${e.resetIn} completed round${e.resetIn===1?"":"s"}.`:"",priority:e.priority,locks:e.locks.map(a=>({actorId:a.actorId,text:a.locked?"Locked":"Planning"})),canRejoin:["idle","left","aborted"].includes(i),canLeave:!["left","idle"].includes(i)}}function pu(n){return n.state.members.map((e,t)=>{const i=n.state.actors.find(r=>r.id===e.actorId),s=n.connections.find(r=>r.actorId===e.actorId)?.label??`Archer ${t+1}`;return{actorId:e.actorId,kind:e.kind,label:s,health:i?.health??0,text:`${s}${e.actorId===n.membership.actorId?" · you":""} · ${e.spawnPending||!i?"waiting to respawn":i.eliminated?"respawning next round":`${i.health} health`}${n.state.locks.find(r=>r.actorId===e.actorId)?.locked?" · locked":""}`}})}function Dw(n=hu){const e=nl(n),t=e.minimumParticipants===4?"four":String(e.minimumParticipants);return`Shared ${e.planningMs/1e3}-second planning · at least ${t} archers · respawn next round · fresh terrain every ${e.resetAfter} completed rounds.`}const Nw=["s0","s1","s2","s3","s4","s5","s6","s7"],Uw=Object.freeze({s0:{slotId:"s0",name:"amber",hex:"#e69f00",symbol:"A"},s1:{slotId:"s1",name:"sky",hex:"#56b4e9",symbol:"B"},s2:{slotId:"s2",name:"emerald",hex:"#009e73",symbol:"C"},s3:{slotId:"s3",name:"lemon",hex:"#f0e442",symbol:"D"},s4:{slotId:"s4",name:"cobalt",hex:"#0072b2",symbol:"E"},s5:{slotId:"s5",name:"vermilion",hex:"#d55e00",symbol:"F"},s6:{slotId:"s6",name:"rose",hex:"#cc79a7",symbol:"G"},s7:{slotId:"s7",name:"violet",hex:"#8b5fd0",symbol:"H"}});function kw(n){return typeof n=="string"&&Nw.includes(n)}const Ow=Object.freeze({slotId:"s0",name:"grey",hex:"#8a8f87",symbol:"?"});function cc(n){return kw(n)?Uw[n]:Ow}function Fw(n){const e=parseInt(n.slice(1),16),t=s=>{const r=s/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*t(e>>16&255)+.7152*t(e>>8&255)+.0722*t(e&255)>.3?"#141c18":"#ffffff"}function Wg(n,e,t){const i=cc(e.slotId);return{actorId:e.actorId,slotId:e.slotId,color:i.hex,ink:Fw(i.hex),symbol:i.symbol,colorName:i.name,label:t,own:e.actorId===n.membership.actorId,npc:e.kind==="npc"}}const Xg=n=>`${n.label}${n.own?", you":""}${n.npc?", NPC":""}, ${n.colorName} ${n.symbol}`;function Bw(n){const e=n.state,t=pu(n),i=e.phase==="resolving"&&e.state==="active"?e.action?.actorId??null:null,s=[];for(const r of e.priority){const a=e.members.findIndex(u=>u.actorId===r);if(a<0)continue;const o=Wg(n,e.members[a],t[a].label),c=s.length+1,l=i===r;s.push({...o,position:c,current:l,ariaLabel:`Priority ${c}: ${Xg(o)}${l?", resolving now":""}`})}return s}function zw(n){const e=pu(n),t=n.state.slotOrder,i=s=>{const r=t.indexOf(s);return r<0?99:r};return n.state.members.map((s,r)=>{const a=n.state.actors.find(d=>d.id===s.actorId),o=Wg(n,s,e[r].label),c=s.spawnPending||!a?"pending":a.eliminated?"respawning":"alive",l=c==="pending"?"Waiting":c==="respawning"?"Respawning":`${a.health}`,u=s.idle||s.leaving||!s.present;return{row:{...o,health:c==="alive"?a.health:0,status:c,valueText:l,inactive:u,locked:n.state.locks.find(d=>d.actorId===s.actorId)?.locked??!1,ariaLabel:`${Xg(o)}: ${c==="alive"?`${l} health`:l.toLowerCase()}${u?", inactive":""}`},rank:i(s.slotId)}}).sort((s,r)=>s.rank-r.rank).slice(0,8).map(s=>s.row)}const Sp={kind:"none",text:"",stateText:"",remainingMs:null,expired:!1,label:""};function $g(n,e){if(!n||!Number.isFinite(e))return Sp;if(n.state==="suspended")return{kind:"paused",text:"Paused",stateText:"No active players",remainingMs:null,expired:!1,label:"Arena paused, no active players"};if(n.state==="aborted")return{kind:"stopped",text:"Stopped",stateText:"Arena stopped",remainingMs:null,expired:!1,label:"Arena stopped"};if(n.state!=="active")return Sp;if(n.phase!=="planning"||n.deadlineAt===null)return{kind:"resolving",text:"Resolving",stateText:"Arrows in flight",remainingMs:null,expired:!1,label:"Arrows are resolving"};const t=Math.max(0,n.deadlineAt-e),i=Math.ceil(t/1e3),s=t===0;return{kind:"planning",text:`${i}s`,stateText:s?"Locking":"Planning",remainingMs:t,expired:s,label:s?"Planning time is up, waiting for the server":`${i} second${i===1?"":"s"} of planning remaining`}}class Hw{seen=null;observe(e,t){const i=$g(e,t);if(i.kind!=="planning"||i.remainingMs===null||this.seen===`${e.id}:${e.epoch}:${e.roundId}`)return null;this.seen=`${e.id}:${e.epoch}:${e.roundId}`;const s=e.planningStartedAt!==null&&e.deadlineAt!==null?e.deadlineAt-e.planningStartedAt:null;return{roundId:e.roundId,nativeMs:s,firstRemainingMs:i.remainingMs,marginMs:s===null?null:s-i.remainingMs}}}const mu=Object.freeze({mode:"inline",controlsVisible:!1}),As=(n,e={})=>({state:n,cancelHeld:!0,requestNative:!1,exitNative:!1,...e}),mr=n=>({state:n,cancelHeld:!1,requestNative:!1,exitNative:!1}),Ys=n=>n.mode!=="inline";function Gw(n,e){return n.mode!=="inline"?mr(n):e?As({mode:"requesting",controlsVisible:!1},{requestNative:!0}):As({mode:"fallback",controlsVisible:!1})}function Vw(n){return n.mode==="requesting"?As({...n,mode:"native"}):mr(n)}function wp(n){return n.mode==="requesting"?As({...n,mode:"fallback"}):mr(n)}function Ww(n){return n.mode==="native"||n.mode==="requesting"?As(mu):mr(n)}function Xw(n){return n.mode==="inline"?mr(n):As(mu,{exitNative:n.mode==="native"||n.mode==="requesting"})}function $w(n,e){return Ys(n)&&n.controlsVisible!==e?As({...n,controlsVisible:e}):mr(n)}function Yw(n){return Ys(n)?As(n):mr(n)}class jw{state=mu;available=!1;d;constructor(e){this.d=e,e.expand.addEventListener("click",()=>this.expand()),e.exit.addEventListener("click",()=>this.exit()),e.controlsToggle.addEventListener("click",()=>this.apply($w(this.state,!this.state.controlsVisible)));for(const t of["fullscreenchange","webkitfullscreenchange"])e.doc.addEventListener(t,()=>this.fullscreenChanged());e.doc.addEventListener("keydown",t=>{t.code==="Escape"&&this.state.mode==="fallback"&&!t.defaultPrevented&&!this.d.isDrawing()&&this.exit()}),e.win.addEventListener("pagehide",()=>this.exit());for(const t of["resize","orientationchange"])e.win.addEventListener(t,()=>this.apply(Yw(this.state)));this.render()}nativeSupported(){const e=this.d;return!!(e.doc.fullscreenEnabled??e.doc.webkitFullscreenEnabled)&&!!(e.shell.requestFullscreen??e.shell.webkitRequestFullscreen)}nativeElement(){return this.d.doc.fullscreenElement??this.d.doc.webkitFullscreenElement??null}setAvailable(e){this.available=e,e||this.exit(),this.render()}expand(){this.available&&this.d.canExpand()&&this.apply(Gw(this.state,this.nativeSupported()))}exit(){this.apply(Xw(this.state))}fullscreenChanged(){if(this.nativeElement()===this.d.shell&&this.state.mode==="inline"){this.leaveNative();return}this.apply(this.nativeElement()===this.d.shell?Vw(this.state):Ww(this.state))}apply(e){const t=this.state;e.cancelHeld&&this.d.cancelInput(),this.state=e.state,e.requestNative&&this.requestNative(),e.exitNative&&this.nativeElement()===this.d.shell&&this.leaveNative(),this.render(),t.mode==="inline"&&Ys(this.state)?this.d.exit.focus():Ys(t)&&!Ys(this.state)&&(this.d.expand.hidden?this.d.focusFallback?.():this.d.expand.focus())}leaveNative(){try{Promise.resolve((this.d.doc.exitFullscreen??this.d.doc.webkitExitFullscreen)?.call(this.d.doc)).catch(()=>{})}catch{}}requestNative(){const e=this.d.shell;try{const t=(e.requestFullscreen??e.webkitRequestFullscreen).call(e);Promise.resolve(t).catch(()=>this.apply(wp(this.state)))}catch{this.apply(wp(this.state))}}render(){const e=this.state,t=Ys(e),i=this.d;i.shell.classList.toggle("is-expanded",t),i.shell.classList.toggle("controls-open",t&&e.controlsVisible),i.doc.body.classList.toggle("arena-expanded",t),i.setModal?.(t),i.exit.hidden=!t,i.controlsToggle.hidden=!t,i.expand.hidden=t||!this.available,i.controlsToggle.setAttribute("aria-expanded",String(e.controlsVisible)),i.controlsToggle.textContent=e.controlsVisible?"Hide controls":"Show controls",i.exit.textContent=e.mode==="fallback"?"Exit expanded view":"Exit full screen",i.onChange?.(e)}}function Ep(n,e,t,i,s){const r=Math.max(0,i.x0),a=Math.min(e,i.x1),o=Math.max(0,i.y0),c=Math.min(t,i.y1);if(!(a<=r))for(let l=o;l<c;l++)n.fill(s,l*e+r,l*e+a)}function qw(n,e,t){const i=new Array(n*e).fill(0);for(const s of t)s.op==="add"&&Ep(i,n,e,s,1);for(const s of t)s.op==="clear"&&Ep(i,n,e,s,0);return i}function Kw(n,e){const t=s=>{const r=(s-n.minX)/n.cell;if(!Number.isInteger(r))throw new RangeError("Template bound is not cell-aligned.");return r},i=s=>{const r=(s-n.minY)/n.cell;if(!Number.isInteger(r))throw new RangeError("Template bound is not cell-aligned.");return r};return{x0:t(e.x0),x1:t(e.x1),y0:i(e.y0),y1:i(e.y1)}}function Jw(n){if(n.mode!=="fixed"||!n.fixed)throw new RangeError("A fixed template is required.");const e=Un(n.profile),{cell:t,width:i,height:s,minX:r,minY:a,bedrockY:o}=e,c=n.fixed.parts.map(d=>({op:d.op,...Kw(e,d)})),l=qw(i,s,c),u=n.fixed.pads.map(([d,h])=>({x:d,y:h,z:0}));return{version:e.version,revision:0,cell:t,minX:r,minY:a,width:i,height:s,bedrockY:o,cells:l,spawnPads:u}}const Yg={kind:"terrain-template",id:"arena-2",version:1,weight:0,tags:["authored","fallback"],profile:"arena-2",mode:"fixed",fixed:{parts:[{op:"add",x0:-39,x1:-32,y0:-8,y1:0},{op:"add",x0:-28,x1:-21,y0:4.5,y1:6},{op:"add",x0:-18.5,x1:-12,y0:10.5,y1:12},{op:"add",x0:-8,x1:-1,y0:-8,y1:3},{op:"add",x0:2,x1:8.5,y0:7.5,y1:9},{op:"add",x0:12,x1:19,y0:-8,y1:0},{op:"add",x0:22,x1:28.5,y0:13.5,y1:15},{op:"add",x0:32,x1:39,y0:4.5,y1:6},{op:"add",x0:-24,x1:-20,y0:16,y1:17},{op:"add",x0:-5.5,x1:-2,y0:16,y1:17},{op:"add",x0:7.5,x1:11,y0:20,y1:21},{op:"add",x0:27.5,x1:31.5,y0:24.5,y1:25.5},{op:"add",x0:-28,x1:-27.25,y0:6,y1:9.5},{op:"add",x0:-2,x1:-1,y0:3,y1:6.5},{op:"add",x0:17.5,x1:18.5,y0:0,y1:3.5},{op:"add",x0:32,x1:32.75,y0:6,y1:9.25}],pads:[[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]]},voids:{count:{min:2,max:4},width:{min:2,max:40}},lanes:{padHeadroom:4.5,launchReach:2,skyBandMinY:22,skyMaxFill:.05}};Un("arena-1").bounds;function ed(n="arena-1"){if(n==="arena-2")return Jw(Yg);const e=Un(n),{cell:t,width:i,height:s,minX:r,minY:a,bedrockY:o}=e,c=new Array(e.cellCount).fill(0);for(let u=0;u<s;u++)for(let d=0;d<i;d++){const h=r+(d+.5)*t,p=a+(u+.5)*t;(p<0||(h<-25||h>25)&&p>=5&&p<6||Math.abs(h)>10&&Math.abs(h)<13&&p>=11&&p<12)&&(c[u*i+d]=1)}const l=[-28,-20,-16,-8,8,16,20,28].map(u=>({x:u,y:0,z:0}));return{version:e.version,revision:0,cell:t,minX:r,minY:a,width:i,height:s,bedrockY:o,cells:c,spawnPads:l}}function jg(n){if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid arena snapshot.");const e=Un(n.version);if(n.cell!==e.cell||n.width!==e.width||n.height!==e.height||n.minX!==e.minX||n.minY!==e.minY||n.bedrockY!==e.bedrockY||!Number.isSafeInteger(n.revision)||n.revision<0||!Array.isArray(n.cells)||n.cells.length!==e.cellCount||!Array.isArray(n.spawnPads)||n.spawnPads.length!==8)throw new RangeError("Invalid arena snapshot.");return e}function Zw(n){return jg(n).bounds}function qg(n){if(jg(n),du(n),!n.cells.every(e=>e===0||e===1))throw new RangeError("Invalid occupancy mask.")}function Qw(n,e){const t=Math.floor(e/n.width),i=e%n.width;return{minX:n.minX+i*n.cell,maxX:n.minX+(i+1)*n.cell,minY:n.minY+t*n.cell,maxY:n.minY+(t+1)*n.cell}}const Tp=1e3,e1=6,Sh=1e-9,Ap={terrain:0,head:1,body:2,bounds:3,timeout:4};function t1(n,e){if(n.time<e.time-Sh)return!0;if(Math.abs(n.time-e.time)>Sh)return!1;const t=Ap[n.kind]-Ap[e.kind];if(t!==0)return t<0;const i=n.actorId??"",s=e.actorId??"";return i!==s?i<s:(n.cell??0)<(e.cell??0)}function n1(n,e,t){const i=nn(n,t),s=Mc(n,t),r=1e-6,a=i.x>=e.minX-r&&i.x<=e.maxX+r,o=i.y>=e.minY-r&&i.y<=e.maxY+r,c=[{d:Math.abs(i.y-e.maxY),x:0,y:1,incoming:-s.y,on:a},{d:Math.abs(i.y-e.minY),x:0,y:-1,incoming:s.y,on:a},{d:Math.abs(i.x-e.minX),x:-1,y:0,incoming:s.x,on:o},{d:Math.abs(i.x-e.maxX),x:1,y:0,incoming:-s.x,on:o}].filter(p=>p.on&&p.d<=r);if(!c.length)return null;const l=Math.min(...c.map(p=>p.d)),u=c.filter(p=>p.d<=l+1e-9),d=u.filter(p=>p.incoming>0),h=d.length?d:u;return h.sort((p,g)=>p.d-g.d||g.y-p.y),{x:h[0].x,y:h[0].y,z:0}}function i1(n,e,t){if(n.wind){const o=n1(n,e,t);if(o)return o}const i=nn(n,t),s=Mc(n,t),r=[{d:Math.abs(i.y-e.maxY),x:0,y:1,incoming:-s.y},{d:Math.abs(i.y-e.minY),x:0,y:-1,incoming:s.y},{d:Math.abs(i.x-e.minX),x:-1,y:0,incoming:s.x},{d:Math.abs(i.x-e.maxX),x:1,y:0,incoming:-s.x}].filter(o=>o.incoming>0);r.sort((o,c)=>o.d-c.d||c.y-o.y);const a=r[0];return a?{x:a.x,y:a.y,z:0}:{x:0,y:0,z:0}}function s1(n,e,t,i){if(qg(n),cu(e),tl(i.origin.x,i.origin.y,i.velocity.x,i.velocity.y),i.wind!==void 0&&!(Math.abs(i.wind)<=e1))throw new RangeError("Shot outside bounded simulation.");if(Math.abs(i.velocity.x)>Tp||Math.abs(i.velocity.y)>Tp||Math.abs(i.origin.x)>1e3||Math.abs(i.origin.y)>1e3)throw new RangeError("Shot outside bounded simulation.");const s=m=>({...nn(i,m),z:0});let r={kind:"timeout",time:Bt.maxFlight,point:s(Bt.maxFlight),normal:{x:0,y:0,z:0}};const a=(m,f,v,b,M={})=>{const T=nu(i,f,v,Math.min(b,r.time));if(T!==null){const R={kind:m,time:T,point:s(T),normal:i1(i,f,T),...M};t1(R,r)&&(r=R)}},o=Zw(n);if(i.origin.x<o.minX||i.origin.x>o.maxX||i.origin.y<o.minY||i.origin.y>o.maxY)return{kind:"bounds",time:0,point:s(0),normal:{x:0,y:0,z:0}};for(const m of[{minX:o.minX,maxX:o.minX,minY:o.minY,maxY:o.maxY},{minX:o.maxX,maxX:o.maxX,minY:o.minY,maxY:o.maxY},{minX:o.minX,maxX:o.maxX,minY:o.minY,maxY:o.minY},{minX:o.minX,maxX:o.maxX,minY:o.maxY,maxY:o.maxY}])a("bounds",m,0,r.time);for(const m of e)if(m.id!==t&&!m.eliminated&&m.health>0)for(const f of cw(m))a(f.kind,f.bounds,0,r.time,{actorId:m.id});const c=nn(i,r.time);let l=Math.min(i.origin.x,c.x),u=Math.max(i.origin.x,c.x);if(i.wind){const m=-i.velocity.x/i.wind;if(m>0&&m<r.time){const f=nn(i,m).x;l=Math.min(l,f),u=Math.max(u,f)}}const d=i.wind?1:0,h=Math.max(0,Math.floor((l-n.minX)/n.cell)-d),p=Math.min(n.width-1,Math.floor((u-n.minX)/n.cell)+d),g=Array.from({length:Math.max(0,p-h+1)},(m,f)=>i.velocity.x<0?p-f:h+f),y=new Map;if(i.wind){const m=r.time,f=-i.velocity.x/i.wind;for(const v of g){const b=n.minX+v*n.cell,M=b+n.cell,T=[0,m];f>0&&f<m&&T.push(f);for(const I of[b,M])T.push(...tu(i,I));const R=T.filter(I=>I>=0&&I<=m&&nn(i,I).x>=b-1e-7&&nn(i,I).x<=M+1e-7);R.length&&y.set(v,[Math.min(...R),Math.max(...R)])}g.length=0,g.push(...[...y.keys()].sort((v,b)=>y.get(v)[0]-y.get(b)[0]||v-b))}for(const m of g){const f=n.minX+m*n.cell,v=f+n.cell;let b=0,M=r.time;if(i.wind)[b,M]=y.get(m),M=Math.min(M,r.time);else if(i.velocity.x!==0){const E=(f-i.origin.x)/i.velocity.x,k=(v-i.origin.x)/i.velocity.x;b=Math.max(0,Math.min(E,k)),M=Math.min(r.time,Math.max(E,k))}if(b>M+Sh)continue;const T=[nn(i,b).y,nn(i,M).y],R=i.velocity.y/ia(i);R>b&&R<M&&T.push(nn(i,R).y);const I=Math.max(0,Math.floor((Math.min(...T)-n.minY)/n.cell)-1),x=Math.min(n.height-1,Math.floor((Math.max(...T)-n.minY)/n.cell)+1);for(let E=I;E<=x;E++){const k=E*n.width+m;n.cells[k]&&a("terrain",Qw(n,k),b,M,{cell:k})}}return r}function Kg(n,e){if(!n||typeof n!="object"||Array.isArray(n)||"cells"in n)throw new RangeError("Invalid compact terrain mask.");const t=du(n,e);if(typeof n.maskHex!="string"||n.maskHex.length!==t.maskHexLength||!/^[0-9a-f]+$/.test(n.maskHex))throw new RangeError("Invalid compact terrain mask.");const{maskHex:i,...s}=n,r=new Array(t.cellCount);for(let o=0;o<i.length;o++){const c=Number.parseInt(i[o],16);for(let l=0;l<4;l++)r[o*4+l]=c>>l&1}const a={...s,cells:r};return qg(a),a}const Rp=10;function r1(n){let e=n;return e^=e>>33n,e=BigInt.asUintN(64,e*0xff51afd7ed558ccdn),e^=e>>33n,e=BigInt.asUintN(64,e*0xc4ceb9fe1a85ec53n),e^e>>33n}function a1(n,e){if(n===0)return 0;const t=Number(r1(Rg(e))>>11n)/2**53,i=Math.round(n*(2*t-1)*Rp)/Rp;return Math.max(-n,Math.min(n,i))+0}const Cp={protocolVersion:Kc,rulesVersion:xa},td={protocolVersion:Mi,rulesVersion:xa},qn=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function o1(n){if(!qn(n)||![Kc,Mi].includes(n.protocolVersion)||n.rulesVersion!==xa||typeof n.roomId!="string"||!n.roomId||typeof n.code!="string"||!Number.isFinite(n.serverNow)||!Number.isSafeInteger(n.snapshotRevision)||Number(n.snapshotRevision)<0||!qn(n.membership)||typeof n.membership.actorId!="string"||typeof n.membership.lifeId!="string"||typeof n.membership.canStart!="boolean"||!Array.isArray(n.connections)||!qn(n.state)||!Number.isSafeInteger(n.state.revision)||Number(n.state.revision)<0||n.state.id!==n.roomId||!Array.isArray(n.state.actors)||!Array.isArray(n.state.seats)||!qn(n.state.seat)||!["waiting","active","finished","aborted"].includes(String(n.state.state))||!["planning","resolving","settling"].includes(String(n.state.phase))||!(n.currentTurnId===null||typeof n.currentTurnId=="string"))throw new Error("The combat service returned an unsupported room.");if(n.protocolVersion===Mi?n.roomKind!=="volley"||n.state.version!=="volley-1"||n.currentTurnId!==null||!Number.isSafeInteger(n.state.epoch)||typeof n.state.roundId!="string"||!Array.isArray(n.state.locks)||!Array.isArray(n.state.priority):n.state.version!=="duel-1"||"roomKind"in n)throw new Error("The combat service returned an unsupported room kind or version.");const e=n;if("tuning"in e.state)try{Qc(e.state.tuning)}catch{throw new Error("The combat service returned an unsupported tuning profile.")}if("wind"in e.state){const t=e.state.wind;if(typeof t!="number"||!Number.isFinite(t)||t===0||!(Math.abs(t)<=Ts(el(e.state))))throw new Error("The combat service returned an unsupported wind.")}if("successor"in e&&e.successor!==void 0){const t=e.successor;if(!qn(t)||typeof t.roomId!="string"||!t.roomId||typeof t.code!="string"||!/^[A-Z2-9]{6}$/.test(t.code)||typeof t.joined!="boolean")throw new Error("The combat service returned an unsupported rematch lobby.")}return Kg(e.state.terrain,"arena-1"),e}class c1{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};rejectedLock=null;get lockAgain(){const e=this.room,t=e?.state,i=this.rejectedLock;return!!(i&&e&&t&&e.protocolVersion===Mi&&i.roomId===e.roomId&&i.lifeId===e.membership.lifeId&&i.epoch===e.state.epoch&&i.roundId===e.state.roundId&&t.seat.canAct)}session;socketFactory;socket=null;reconnectTimer=null;pollTimer=null;stopped=!1;socketGeneration=0;roomGeneration=0;clockOffset=0;hasClock=!1;storage;constructor(e,t=fetch,i,s,r={}){s?.assertContext(e,t,i),this.session=s??new Jc(e,t,i),this.storage=i,this.socketFactory=r.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):r.socket}now=()=>Date.now()+this.clockOffset;get savedRoom(){try{const e=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");return qn(e)&&e.guestId===this.session.guestId&&typeof e.roomId=="string"?e.roomId:null}catch{return null}}emit(){this.onChange()}context(e=this.room?.roomId){const t=this.room?.roomId===e?this.room?.membership:void 0;return{generation:this.roomGeneration,roomId:e,...this.room&&this.room.roomId===e?{protocolVersion:this.room.protocolVersion}:{},...t?{membership:{actorId:t.actorId,lifeId:t.lifeId}}:{}}}assertContext(e){if(e.generation!==this.roomGeneration||e.roomId&&this.room&&e.roomId!==this.room.roomId)throw new Error("The combat room context changed while this request was pending.")}validateResponse(e,t,i){this.session.assertRevision(t),this.assertContext(i);const s=o1(e);if(i.protocolVersion&&s.protocolVersion!==i.protocolVersion)throw new Error("The combat response changed the confirmed room kind or protocol version.");if(i.roomId&&s.roomId!==i.roomId)throw new Error("The combat response belongs to a different room.");if(i.membership&&(s.membership.actorId!==i.membership.actorId||s.membership.lifeId!==i.membership.lifeId))throw new Error("The combat response belongs to a different membership identity.");return s}apply(e,t,i){const s=this.validateResponse(e,t,i);if(this.room&&this.room.roomId===s.roomId){if(s.snapshotRevision<this.room.snapshotRevision||s.snapshotRevision===this.room.snapshotRevision&&s.serverNow<=this.room.serverNow)return;if(s.state.revision<this.room.state.revision)throw new Error("The combat response would reverse the confirmed room state.")}this.room=s;const r=s.serverNow-Date.now();this.clockOffset=this.hasClock?Math.max(this.clockOffset,r):r,this.hasClock=!0;try{this.storage?.setItem(this.session.storageKeys.room,JSON.stringify({roomId:s.roomId,guestId:this.session.guestId}))}catch{}this.emit()}async create(e){return this.begin("/rooms",e?{...td,...e}:Cp,e?Mi:Kc)}async join(e){return this.begin("/rooms/join",{...td,code:e.trim().toUpperCase()})}async begin(e,t,i){if(this.busy||this.pending||this.room)throw new Error("Leave the current room or finish the pending action first.");this.roomGeneration++;const s={...this.context(),...i?{protocolVersion:i}:{}};this.stopped=!1,this.busy=!0,this.emit();try{const r=await this.session.ensure();this.session.assertRevision(r.revision),this.assertContext(s),this.pending={path:e,body:{actionId:crypto.randomUUID(),...t},revision:r.revision,context:s}}finally{s.generation===this.roomGeneration&&(this.busy=!1)}return this.retry()}async command(e){if(this.busy||this.pending||!this.room)throw new Error("Finish the pending action first.");const t=this.room,i=this.session.credentials();if(!i)throw new Error("Reconnect with the existing guest first.");const s=t.protocolVersion===Mi;if(s&&e.kind==="cancel")throw new Error("Volley locks are immutable and cannot be cancelled.");const r=e.kind==="shot"||e.kind==="pass";if(s&&r&&(!t.state.seat.canAct||t.state.state!=="active"||t.state.phase!=="planning"))throw new Error("This planning opportunity is no longer available.");const a=!s&&["shot","pass","cancel"].includes(e.kind)?{turnId:t.currentTurnId}:{};if("turnId"in a&&!a.turnId)throw new Error("This turn is no longer available.");const o=s?{...td,epoch:t.state.epoch,...r?{roundId:t.state.roundId}:{}}:{...Cp,...a};this.rejectedLock=null;const c={actionId:crypto.randomUUID(),expectedRevision:t.state.revision,lifeId:t.membership.lifeId,...o,...e};return this.pending={path:`/rooms/${encodeURIComponent(t.roomId)}/commands`,body:c,revision:i.revision,context:this.context()},this.retry()}async followRematch(){const e=this.room?.successor;if(!e||this.busy||this.pending)throw new Error("No rematch lobby is available yet.");const t=this.room.roomId;this.forgetRoom();try{if(e.joined)return await this.reconnect(e.roomId);try{return await this.join(e.code)}catch(i){if(qn(i)&&i.code==="already_joined")return await this.reconnect(e.roomId);throw i}}catch(i){try{this.pending?await this.refresh(t):await this.reconnect(t)}catch{}throw i}}async retry(){if(!this.pending||this.busy)throw new Error("No pending action is ready to retry.");const e=this.pending;if(this.session.assertRevision(e.revision),this.assertContext(e.context),e.unadmitted&&e.context.roomId){const t=this.room,i=e.body;if(!t||t.roomId!==e.context.roomId||t.membership.lifeId!==i.lifeId||i.protocolVersion===Mi&&(t.protocolVersion!==Mi||t.state.epoch!==i.epoch||"roundId"in i&&t.state.roundId!==i.roundId)||"turnId"in i&&t.currentTurnId!==i.turnId)throw this.pending=null,this.emit(),new Error("The room opportunity changed. Choose an action for the current room.")}this.busy=!0,this.emit();try{const t=await this.session.request(e.path,e.body);if(this.session.assertRevision(e.revision),this.assertContext(e.context),this.pending!==e)throw new Error("The pending combat action changed.");return e.body.kind==="leave"?(this.validateResponse(t,e.revision,e.context),this.pending=null,this.clearRoom()):(this.apply(t,e.revision,e.context),this.pending=null,this.openSocket()),this.room}catch(t){if(e.context.generation!==this.roomGeneration)throw t;if(this.session.revision!==e.revision)this.pending=null,this.clearRoom();else if(t instanceof Fn&&t.transient)t.code!=="admission_rate"&&t.code!=="command_rate"&&(e.uncertain=!0),e.unadmitted=!e.uncertain;else{if(xs(t,Hs))throw this.pending=null,this.rejectedLock=null,bh(Hs);if(qn(t)&&typeof t.status=="number"&&t.status>=400&&t.status<500){if(this.pending=null,t.status===409&&e.body.kind==="shot"&&e.body.protocolVersion===Mi&&e.context.roomId&&(this.rejectedLock={roomId:e.context.roomId,lifeId:String(e.body.lifeId),epoch:e.body.epoch,roundId:e.body.roundId}),this.room)try{await this.refresh()}catch(i){if(xs(i,Hs))throw i}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(i){if(xs(i,Hs))throw i}}throw t}finally{e.context.generation===this.roomGeneration&&(this.busy=!1,this.emit())}}async reconnect(e=this.room?.roomId??this.savedRoom){if(this.pending)throw new Error("Retry the pending action first.");if(!e)throw new Error("No saved room is available.");if(!this.session.credentials())throw new Error("The original guest identity is required to reconnect.");const t=this.context(e);this.stopped=!1,await this.refresh(e),this.assertContext(t),this.openSocket()}async refresh(e=this.room?.roomId){if(!e)return;const t=this.session.credentials();if(!t)throw new Error("The original guest identity is required.");const i=this.context(e);try{const s=await Hr(this.session,`/rooms/${encodeURIComponent(e)}`,Hs);this.apply(s,t.revision,i)}catch(s){if(this.session.assertRevision(t.revision),this.assertContext(i),xs(s,Hs)&&(this.pending?.context.roomId===e&&this.pending.revision===t.revision&&(this.pending=null),this.room?.roomId===e&&(this.rejectedLock=null),this.emit()),qn(s)&&typeof s.status=="number"&&[403,404,410].includes(s.status)){this.pending=null,this.clearRoom(e);const r=Object.assign(new Error("This room is no longer available. Create or join another room with the same guest."),{status:s.status});throw this.onError(r),r}throw s}}receive(e){const t=this.session.credentials();!t||!this.room||this.stopped||!qn(e)||e.type!=="room"||e.roomId===this.room.roomId&&this.apply(e,t.revision,this.context())}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e)return;if(this.connected=!1,!this.socketFactory){this.connected=!0,this.emit();return}const t=++this.socketGeneration,i=this.context(),s=this.room.roomId,r=this.socketFactory(this.session.endpoint.combatSocket);this.socket=r;const a=()=>this.socket===r&&this.socketGeneration===t&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&!this.stopped;r.addEventListener("open",()=>{if(!a()){r.close();return}const o={type:"authenticate",token:e.token,roomId:s,lastRevision:this.room?.snapshotRevision??0,protocolVersion:this.room.protocolVersion,rulesVersion:xa};r.send(JSON.stringify(o))}),r.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));qn(c)&&c.type==="room"&&(this.apply(c,e.revision,i),this.connected=!0,this.emit())}catch(c){this.onError(c),r.close()}}),r.addEventListener("close",()=>{this.socket===r&&(this.socket=null,this.connected=!1,this.emit(),!this.stopped&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&this.scheduleRecovery())}),r.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.pollTimer||this.stopped)return;const e=this.context();this.pollTimer=setTimeout(async()=>{if(this.pollTimer=null,!(!this.room||this.stopped||e.generation!==this.roomGeneration)){try{await this.refresh()}catch(t){e.generation===this.roomGeneration&&this.onError(t)}e.generation===this.roomGeneration&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.reconnectTimer||this.stopped)return;const e=this.context();this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,!(this.stopped||e.generation!==this.roomGeneration))try{await this.refresh(),this.assertContext(e),this.openSocket()}catch(t){e.generation===this.roomGeneration&&(this.onError(t),this.scheduleRecovery())}},1500)}clearRoom(e=this.room?.roomId??this.savedRoom??void 0){this.close(),this.room=null,this.rejectedLock=null,this.hasClock=!1;try{const t=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");qn(t)&&t.roomId===e&&(!this.session.guestId||t.guestId===this.session.guestId)&&this.storage?.removeItem(this.session.storageKeys.room)}catch{}this.emit()}forgetRoom(){this.pending=null,this.clearRoom()}close(){this.stopped=!0,this.socketGeneration++,this.roomGeneration++,this.busy=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.pollTimer&&clearTimeout(this.pollTimer),this.reconnectTimer=null,this.pollTimer=null;const e=this.socket;this.socket=null,e?.close(),this.connected=!1}}const l1=/^[A-Z2-9]{6}$/,Rc="room",wh="Copied",d1="Select and copy the code";function h1(n){if(typeof n!="string")return null;const e=n.trim().toUpperCase();return l1.test(e)?e:null}function u1(n,e){const t=new URLSearchParams(n.search);return t.set(Rc,e),`${n.origin}${n.pathname}?${t.toString()}`}function f1(n){return h1(new URLSearchParams(n).get(Rc))}function p1(n){const e=new URLSearchParams(n.search);if(!e.has(Rc))return null;e.delete(Rc);const t=e.toString();return`${n.pathname}${t?`?${t}`:""}${n.hash??""}`}function m1(n,e){return`Join my private archery match with room code ${n}: ${e}`}function g1(n){return`Join my private archery match with room code ${n}.`}const x1=n=>!!n&&typeof n=="object"&&["AbortError","InvalidStateError"].includes(n.name??"");async function _1(n,e,t){const i=m1(e,t);if(n&&typeof n.share=="function")try{return await n.share({title:"Archery private match",text:g1(e),url:t}),"shared"}catch(s){if(x1(s))return"cancelled"}if(n?.clipboard&&typeof n.clipboard.writeText=="function")try{return await n.clipboard.writeText(i),"copied"}catch{}return"manual"}function y1(n,e){return n.kills===e.kills&&n.damageDealt===e.damageDealt&&Ja(n)===Ja(e)&&n.shots===e.shots}function v1(n,e){return e.kills-n.kills||e.damageDealt-n.damageDealt||Ja(e)-Ja(n)||n.shots-e.shots||(n.actorId<e.actorId?-1:n.actorId>e.actorId?1:0)}function Ja(n){return n.shots?n.hits/n.shots:0}const Ip=["shots","hits","headshots","damageDealt","damageTaken","kills","longestHit","terrainDestroyed"];function b1(n){const e=n?.rows;if(!Array.isArray(e)||e.length>64)throw new Error("The service returned an unsupported session board.");return e.map(t=>{const i=t;if(!i||typeof i.actorId!="string"||Ip.some(s=>typeof i[s]!="number"||!Number.isFinite(i[s])||i[s]<0))throw new Error("The service returned an unsupported session board.");return Object.fromEntries(["actorId",...Ip].map(s=>[s,i[s]]))})}function Jg(n,e,t,i){const s=new Map(n.map(c=>[c.actorId,c])),r=e.map(c=>({label:c.label,stat:s.get(c.actorId)??{actorId:c.actorId,shots:0,hits:0,headshots:0,damageDealt:0,damageTaken:0,kills:0,longestHit:0,terrainDestroyed:0}}));r.sort((c,l)=>v1(c.stat,l.stat));const a=r.some(c=>c.stat.shots>0),o=r.map((c,l)=>({actorId:c.stat.actorId,label:c.label,shots:c.stat.shots,accuracy:c.stat.shots?`${Math.round(Ja(c.stat)*100)}%`:"–",damage:Math.round(c.stat.damageDealt),kills:c.stat.kills,own:c.stat.actorId===t,leader:i&&a&&l===0&&!(r[1]&&y1(c.stat,r[1].stat))}));return{title:i?"Final standings":"Session board",rows:o,visible:o.length>0&&a}}function Zg(n){return n.state==="active"&&n.phase!=="planning"?null:`${n.state}:${n.revision}`}function M1(n,e){return n?.state==="finished"&&e!==null&&e.startsWith("finished:")}class Qg{stats=[];onChange=()=>{};get loadedKey(){return this.loaded}scope=null;wanted=null;loaded=null;busy=!1;token=0;failed=null;session;kind;constructor(e,t){this.session=e,this.kind=t}want(e,t,i){this.scope!==e&&(this.scope=e,this.stats=[],this.loaded=null),!(this.loaded===t||this.wanted?.key===t||this.failed?.key===t&&Date.now()<this.failed.until)&&(this.wanted={scope:e,key:t,path:i},this.pump())}hold(e){this.token++,this.wanted=null,this.scope!==e&&(this.scope=e,this.stats=[],this.loaded=null)}clear(){this.token++,this.scope=null,this.wanted=null,this.loaded=null,this.stats.length&&(this.stats=[],this.onChange())}async pump(){if(!this.busy){this.busy=!0;try{for(;this.wanted;){const e=this.wanted,t=this.session.revision,i=this.token;try{const s=b1(await Hr(this.session,e.path,this.kind==="private"?Hs:vi));this.session.assertRevision(t),this.scope===e.scope&&i===this.token&&(this.stats=s,this.loaded=e.key,this.failed=null,this.onChange())}catch{this.failed={key:e.key,until:Date.now()+3e3}}this.wanted===e&&(this.wanted=null)}}finally{this.busy=!1}}}}function e0(n,e,t){const i=1-Math.exp(-18*Math.max(0,t));return{angle:n.angle+(e.angle-n.angle)*i,pull:n.pull+(e.pull-n.pull)*i}}function Cc(n,e=0){const t=n.angle*Math.PI/180,i=Math.cos(t),s=Math.sin(t),r={x:-7.7+i*(1.3-.37),y:2.3+s*(1.3-.37)},a={x:r.x-i*n.pull,y:r.y-s*n.pull},o={x:a.x-i*.16*e,y:a.y-s*.16*e+.04*e},c=n.pull+(.08-n.pull)*e,l={x:r.x-i*c,y:r.y-s*c},u=-7.95,d=2.3,h=o.x-u,p=o.y-d,g=Math.hypot(h,p),y=(.65**2-.9**2+g**2)/(2*g),m=Math.sqrt(Math.max(0,.65**2-y**2)),f={x:u+h/g*y-p/g*m,y:d+p/g*y+h/g*m};return{bow:r,hand:o,nock:l,elbow:f}}const Pp=.16;function jr(n,e,t){if(e>=Pp){const b=Mc(n,e);return{position:nn(n,e),angle:Math.atan2(b.y,b.x)}}const i=Pp,s=Math.max(0,e)/i,r=nn(n,i),a=Mc(n,i),o=Math.hypot(n.velocity.x,n.velocity.y),c={x:Math.cos(t.angle)*o,y:Math.sin(t.angle)*o},l=2*s**3-3*s*s+1,u=s**3-2*s*s+s,d=-2*s**3+3*s*s,h=s**3-s*s,p=(6*s*s-6*s)/i,g=3*s*s-4*s+1,y=(-6*s*s+6*s)/i,m=3*s*s-2*s,f={x:l*t.tip.x+u*i*c.x+d*r.x+h*i*a.x,y:l*t.tip.y+u*i*c.y+d*r.y+h*i*a.y},v={x:p*t.tip.x+g*c.x+y*r.x+m*a.x,y:p*t.tip.y+g*c.y+y*r.y+m*a.y};return{position:f,angle:Math.atan2(v.y,v.x)}}const Nn=Object.freeze({count:7,start:.055,duration:.228,radiusPx:3.5,outlinePx:1.75});function Ic(n){if(!Number.isInteger(n.count)||n.count<1||n.count>32||![n.start,n.duration].every(Number.isFinite)||n.start<0||n.duration<0||n.start+n.duration>.35)throw new RangeError("Short opening guide settings required.");return Array.from({length:n.count},(e,t)=>n.start+(n.count===1?0:t/(n.count-1)*n.duration))}const Pc=Object.freeze({minAngle:Bt.minAngle,maxAngle:Bt.maxAngle,minPower:.08,maxPower:1}),t0=(n,e,t)=>Math.min(t,Math.max(e,n)),n0=n=>t0(Math.round(n*10)/10,Pc.minAngle,Pc.maxAngle),i0=n=>t0(Math.round(n*1e3)/1e3,Pc.minPower,Pc.maxPower),jo=n=>({...n,angle:n0(n.angle),power:i0(n.power)}),s0=n=>`${n.toFixed(1)}°`,r0=n=>`${(n*100).toFixed(1)}%`,S1=n=>n.toFixed(1),w1=n=>(n*100).toFixed(1),E1=n=>`Last: ${s0(n.angle)} · ${r0(n.power)}`,Lp=Object.freeze([{id:"combat-angle-minus-large",field:"angle",delta:-1},{id:"combat-angle-minus-fine",field:"angle",delta:-.1},{id:"combat-angle-plus-fine",field:"angle",delta:.1},{id:"combat-angle-plus-large",field:"angle",delta:1},{id:"combat-power-minus-large",field:"power",delta:-5},{id:"combat-power-minus-fine",field:"power",delta:-.5},{id:"combat-power-plus-fine",field:"power",delta:.5},{id:"combat-power-plus-large",field:"power",delta:5}]);function nd(n,e,t){return e==="angle"?{...n,angle:n0((Math.round(n.angle*10)+Math.round(t*10))/10)}:{...n,power:i0((Math.round(n.power*1e3)+Math.round(t*10))/1e3)}}class T1{scope=null;locked=null;shot=null;noteLocked(e,t){if(!e)return;const i=this.locked?.aim;i&&i.arrow===e.arrow&&i.angle===e.angle&&i.power===e.power&&i.facing===e.facing||(this.locked={aim:{...e},at:t})}postdatesLock(e){return!!this.locked&&e.startedAt!==null&&e.startedAt>=this.locked.at}fallback(e){if(!this.postdatesLock(e))return null;const t=this.locked.aim;return this.locked=null,t}observe(e,t,i){if(e!==this.scope&&(this.scope=e,this.shot=null,this.locked=null),!i||!t||i.actorId!==t||!i.point)return;if(this.shot?.actionId===i.actionId){const r=this.shot.aim??i.aim??this.fallback(i);i.aim&&this.postdatesLock(i)&&(this.locked=null),this.shot={...this.shot,aim:r?{...r}:null,at:this.shot.at??i.startedAt};return}const s=i.aim??this.fallback(i);i.aim&&this.postdatesLock(i)&&(this.locked=null),this.shot={actionId:i.actionId,aim:s?{...s}:null,impact:{...i.point},at:i.startedAt}}clear(){this.scope=null,this.shot=null,this.locked=null}markerVisible(e){return!!this.shot&&this.shot.at!==null&&e>=this.shot.at}}function A1(n){let e=3735928559,t=1103547991;const i=s=>{e=Math.imul(e^s,2654435761),t=Math.imul(t^s,1597334677)};for(const s of`${n.version}:${n.revision}:${n.cells.length}:`)i(s.charCodeAt(0));for(let s=0;s<n.cells.length;s+=4)i((n.cells[s]?1:0)|(n.cells[s+1]?2:0)|(n.cells[s+2]?4:0)|(n.cells[s+3]?8:0));return e=Math.imul(e^e>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),t=Math.imul(t^t>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),(4294967296*(2097151&t)+(e>>>0)).toString(16).padStart(14,"0")}function Eh(n){if(!Number.isFinite(n))return"Wind calm";const e=Math.abs(n).toFixed(1);return e==="0.0"?"Wind calm":`Wind ${n<0?"←":"→"} ${e}`}const R1="position:absolute;top:10px;left:50%;transform:translateX(-50%);z-index:3;padding:4px 10px;border-radius:999px;font:600 12px/1.2 system-ui,sans-serif;letter-spacing:.3px;background:rgba(16,24,40,.72);color:#fff;pointer-events:none;white-space:nowrap";class a0{element=null;parent;id;constructor(e,t="combat-wind"){this.parent=e,this.id=t}ensure(){if(this.element)return this.element;const e=this.parent();if(!e)return null;const t=document.createElement("div");return t.id=this.id,t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.style.cssText=R1,t.hidden=!0,e.appendChild(t),this.element=t}update(e,t){if(!(t>0)){this.hide();return}const i=this.ensure();if(!i)return;i.hidden=!1;const s=Eh(e);i.textContent!==s&&(i.textContent=s),i.dataset.wind=String(e)}hide(){this.element&&(this.element.hidden=!0)}}function Lc(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Dp=(n,e,t)=>Math.imul(Math.round(n*64)|0,73856093)^Math.imul(Math.round(e*64)|0,19349663)^Math.imul(t|0,83492791);function C1(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^e>>>16)>>>0}const il=n=>C1(JSON.stringify(n)),ts=(n,e,t)=>Math.min(t,Math.max(e,n)),I1=800,gu=64,P1=12,L1=[.49,.58,.38],D1=[.6,.46,.31],N1=[.36,.29,.24],U1=[.22,.22,.26],id=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,xu=n=>[id(n[0]),id(n[1]),id(n[2])],Np=.5,k1=.75,O1={surface:L1,soil:D1,deep:N1,bedrock:U1};function Up(n,e,t=0,i=O1){const s=t-n,r=Math.max(1e-6,t-e);return s<=Np?i.surface:n-e<k1?i.bedrock:i.detail&&s<=Np+i.detail.depth?i.detail.color:s/r<.55?i.soil:i.deep}function F1(n){return[ts(n[0]*.62+.2,0,1),n[1]*.5+.07,n[2]*.42+.02]}const B1=[[-1,0],[1,0],[0,-1],[0,1]];function z1(n,e,t,i,s){if(!s.size)return!1;for(const[r,a]of B1){const o=n+r,c=e+a;if(o>=0&&c>=0&&o<t&&c<i&&s.has(c*t+o))return!0}return!1}const kp=6e3,H1=(n,e,t,i,s)=>n.size?Mg(bg([...n],e,t),i,s):[];class G1{keys=null;until=0;release(){const e=this.keys??[];return this.keys=null,e}set(e,t){this.keys=e.length?e:null,this.until=t}due(e){return this.keys===null||e<this.until?null:this.release()}clear(){this.keys=null}}function V1(n,e,t=I1){return n!==null&&e>=n&&e-n<=t}function W1(n,e){if(!n.length)return null;let t=0,i=0;for(const r of n)t+=r%e.width,i+=Math.floor(r/e.width);const s=n.length;return{x:e.minX+(t/s+.5)*e.cell,y:e.minY+(i/s+.5)*e.cell,extent:Math.sqrt(s)*e.cell,count:s}}const o0=n=>n.extent>=1.5,_u=.35;function X1(n,e,t,i){return i||!o0(n)||t<=0?0:ts(n.extent*.1,0,.6)*ts(1-e/(t*1.5),0,1)}const $1=(n,e=_u)=>n<0||n>=e?0:(1-n/e)**2;function Y1(n,e,t=_u){const i=e*$1(n,t);return i===0?{x:0,y:0}:{x:i*Math.sin(n*71),y:i*Math.sin(n*93+1.3)}}function j1(n,e,t,i){if(t<e||n.length<2)return null;const s=(t-e)/1e3,r=n.findIndex(d=>d.time>=s);if(r<=0)return{vx:0,vy:0};const a=n[r-1],o=n[r],c=a.poses.find(d=>d.actorId===i)?.feet,l=o.poses.find(d=>d.actorId===i)?.feet,u=o.time-a.time;return!c||!l||u<=1e-9?{vx:0,vy:0}:{vx:(l.x-c.x)/u,vy:(l.y-c.y)/u}}const q1=.4,Op=.5;function K1(n,e){return Math.hypot(n,e)<q1?0:ts(-n*.04,-Op,Op)}const J1=(n,e,t)=>n+(e-n)*(1-Math.exp(-10*Math.max(0,t)));function Z1(n,e){return n!==null&&n<=-2&&e>-.5?-n:0}const Q1=.22;function eE(n,e,t=Q1){return n<0||n>=t||e<=0?{sy:1}:{sy:1-ts(e*.015,0,.3)*(1-n/t)}}const tE=.08,Fp=.22,nE=n=>n>=0&&n<tE;function iE(n,e,t=!1){return t||n<0||n>=Fp?0:-e*.22*(1-n/Fp)**2}function sE(n,e){return e.filter(t=>n.has(t.id)&&t.health<n.get(t.id)).map(t=>t.id)}class rE{items=[];capacity;constructor(e=gu){this.capacity=e}emit(e){this.items.length>=this.capacity&&this.items.shift(),this.items.push(e)}step(e){const t=this.items;let i=0;for(let s=0;s<t.length;s++){const r=t[s];r.age+=e,r.x+=r.vx*e,r.y+=r.vy*e,r.kind==="debris"?r.vy-=18*e:(r.vx*=Math.exp(-3*e),r.vy=r.vy*Math.exp(-3*e)+.6*e),r.age<r.life&&(t[i++]=r)}t.length=i}clear(){this.items.length=0}}function aE(n){const e=ts(n.age/n.life,0,1);return n.kind==="dust"?n.size*(1+e)*(1-e*e):n.size*(1-e)}function oE(n,e){const t=ts(Math.round(4+n*6),4,20),i=ts(Math.round(3+n*3),3,12);return e?{debris:Math.min(4,t),dust:Math.min(2,i)}:{debris:t,dust:i}}function cE(n,e,t,i,s){const{debris:r,dust:a}=oE(e.extent,i),o=Math.min(1.2,e.extent*.5),c=3+Math.min(6,e.extent*2);for(let l=0;l<r;l++){const u=Math.PI*(.1+.8*t()),d=c*(.5+t()),h=e.y+(t()-.5)*o;n.emit({kind:"debris",x:e.x+(t()-.5)*o,y:h,vx:Math.cos(u)*d*(t()<.5?-1:1),vy:Math.sin(u)*d,age:0,life:.5+t()*.4,size:.08+t()*.1,color:s(h)})}for(let l=0;l<a;l++)n.emit({kind:"dust",x:e.x+(t()-.5)*o*1.5,y:e.y+(t()-.3)*o,vx:(t()-.5)*3,vy:t()*1.5,age:0,life:.5+t()*.3,size:.3+t()*.3,color:[.78,.74,.66]})}function lE(n,e,t,i,s,r){const a=r?1:ts(Math.round(i*.5),2,6);for(let o=0;o<a;o++)n.emit({kind:"dust",x:e+(s()-.5)*.8,y:t+.05,vx:(o%2?1:-1)*(.6+s()*1.2),vy:.3+s()*.5,age:0,life:.35+s()*.2,size:.25+s()*.2,color:[.78,.74,.66]})}const cr=(...n)=>n.every(Number.isFinite);function yu(n){return cr(n.minX,n.maxX,n.minY,n.maxY)&&n.minX<n.maxX&&n.minY<n.maxY}function Bp(n,e,t){return e+(n.shotMinSpeed+n.shotExtraSpeed)*(t.start+t.duration)+1}const c0=4;function dE(n,e,t,i){if(!yu(n)||!cr(i,t.halfWidth,t.height)||i<0)throw new RangeError("Ordered finite profile bounds and margin required.");let s=n.minX+t.halfWidth-i,r=n.maxX-t.halfWidth+i,a=n.minY,o=n.maxY;for(const c of e){if(!cr(c.x,c.y))throw new RangeError("Finite actor positions required.");const l=Math.max(i,t.halfWidth);s=Math.min(s,c.x-l),r=Math.max(r,c.x+l),a=Math.min(a,c.y-2),o=Math.max(o,c.y+t.height+c0)}return{minX:Math.min(s,n.minX),maxX:Math.max(r,n.maxX),minY:a,maxY:o}}const hE=Object.freeze({inline:Object.freeze({side:12,top:68,bottom:56}),expanded:Object.freeze({side:12,top:108,bottom:12})}),sd=.2;function js(n,e,t="inline"){if(!cr(n,e)||n<=0||e<=0)throw new RangeError("Positive finite viewport required.");const i=hE[t];if(!i)throw new RangeError("Unknown HUD mode.");const s=Math.min(i.side,n*sd);return{left:s,right:s,top:Math.min(i.top,e*sd),bottom:Math.min(i.bottom,e*sd)}}function l0(n,e,t,i=js(e,t)){if(!yu(n))throw new RangeError("Ordered finite bounds required.");if(!cr(e,t)||e<=0||t<=0)throw new RangeError("Positive finite viewport required.");uE(e,t,i);const s=e-i.left-i.right,r=t-i.top-i.bottom,a=Math.min(s/(n.maxX-n.minX),r/(n.maxY-n.minY));return d0((n.minX+n.maxX)/2,(n.minY+n.maxY)/2,a,e,t,i)}function d0(n,e,t,i,s,r){const a=s-r.top-r.bottom;return{centerX:n-(r.left-r.right)/2/t,centerY:e+(r.top+a/2-s/2)/t,halfWidth:i/(2*t),halfHeight:s/(2*t),scale:t}}function uE(n,e,t){const i=n-t.left-t.right,s=e-t.top-t.bottom;if(!cr(t.left,t.right,t.top,t.bottom)||t.left<0||t.right<0||t.top<0||t.bottom<0||i<=0||s<=0)throw new RangeError("Insets must leave a positive area.")}const vu=20,zp=Object.freeze({minPx:300,maxPx:520}),h0=1e-9,qo=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function fE(n,e,t,i){const s=a=>({x:a.x,y:a.y,reach:t.halfWidth+2});if(n){const a=[{x:n.x,y:n.y,reach:Math.max(i,t.halfWidth)}];let o=null;for(const c of e)(!o||qo(n,c)<qo(n,o))&&(o=c);return o?[...a,s(o)]:a}if(e.length<2)return e.map(s);let r=[e[0],e[1]];for(let a=0;a<e.length;a++)for(let o=a+1;o<e.length;o++)qo(e[a],e[o])<qo(r[0],r[1])&&(r=[e[a],e[o]]);return r.map(s)}function u0(n,e){return{minX:Math.min(...n.map(t=>t.x-t.reach)),maxX:Math.max(...n.map(t=>t.x+t.reach)),minY:Math.min(...n.map(t=>t.y-2)),maxY:Math.max(...n.map(t=>t.y+e.height+c0))}}function pE(n,e,t,i,s=[]){if(!yu(n))throw new RangeError("Ordered finite bounds required.");if(!cr(e)||e<=0)throw new RangeError("Positive finite width required.");const r=js(e,1e3,t).left,a=e-2*r,o=vu/i.height,c=s.length?u0(s,i):null,l=Math.max(a/(n.maxX-n.minX),c?Math.min(o,a/(c.maxX-c.minX)):o),u=(n.maxY-n.minY)*l;let d=u;for(let h=0;h<6;h++){const p=js(e,Math.max(d,1),t);d=u+p.top+p.bottom}return Math.min(zp.maxPx,Math.max(zp.minPx,Math.ceil(d)))}const Th=(n,e,t,i)=>t>=e-n?(n+e)/2:Math.min(Math.max(i,n+t/2),e-t/2);function mE(n,e,t,i,s,r,a=!1){const o=l0(n,e,t,i),c=vu/s.height;if(a||o.scale>=c-h0)return{...o,windowed:!1};const l=e-i.left-i.right,u=t-i.top-i.bottom,d=Math.min(c,u/(n.maxY-n.minY)),h=r.length?u0(r,s):null,p=h?Math.min(l/(h.maxX-h.minX),u/(h.maxY-h.minY)):1/0,g=Math.max(o.scale,Math.min(d,p)),y=h?(h.minX+h.maxX)/2:(n.minX+n.maxX)/2,m=h?(h.minY+h.maxY)/2:(n.minY+n.maxY)/2;return{...d0(Th(n.minX,n.maxX,l/g,y),Th(n.minY,n.maxY,u/g,m),g,e,t,i),windowed:!0}}function gE(n,e,t,i,s){return l0(n,e,t,i).scale*s.height<vu-h0}function xE(n,e){return!n||n.worldKey!==e.worldKey||n.profile!==e.profile||n.epoch!==e.epoch||n.width!==e.width||n.height!==e.height||n.mode!==e.mode||(n.focus??"")!==(e.focus??"")}const _E=new ur;class yE{mesh;capacity;geometry=new es(1,1);material;alpha;matrix=new Tt;position=new F;scale=new F;color=new Qe;constructor(e=gu){this.capacity=e,this.material=new ui({color:"#ffffff",transparent:!0,depthWrite:!1}),this.material.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vInstanceAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vInstanceAlpha = instanceAlpha;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vInstanceAlpha;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vInstanceAlpha;`)},this.mesh=new P_(this.geometry,this.material,e),this.mesh.instanceMatrix.setUsage(mf),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.visible=!1,this.alpha=new xh(new Float32Array(e),1),this.alpha.setUsage(mf),this.geometry.setAttribute("instanceAlpha",this.alpha),this.mesh.setColorAt(0,this.color)}update(e){const t=Math.min(e.length,this.capacity);for(let i=0;i<t;i++){const s=e[i],r=Math.max(.001,aE(s)),a=xu(s.color);this.position.set(s.x,s.y,.6),this.scale.set(r,r,r),this.mesh.setMatrixAt(i,this.matrix.compose(this.position,_E,this.scale)),this.mesh.setColorAt(i,this.color.setRGB(a[0],a[1],a[2])),this.alpha.setX(i,s.kind==="dust"?.55*(1-s.age/s.life):.95)}this.mesh.count=t,this.mesh.visible=t>0,t>0&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.alpha.needsUpdate=!0)}clear(){this.mesh.count=0,this.mesh.visible=!1}dispose(){this.geometry.dispose(),this.material.dispose(),this.mesh.dispose()}}class Cn extends RangeError{path;constructor(e,t){super(t),this.name="DefinitionError",this.path=e}}const En=(n,e)=>{throw new Cn(n,n?`${n} ${e}`:e)},gr=n=>n,vE=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),lc=(n,e)=>typeof e=="number"?`${n}[${e}]`:n?`${n}.${e}`:e,ra=n=>{try{const e=JSON.stringify(n);return e===void 0?String(n):e.length>40?`${e.slice(0,37)}...`:e}catch{return String(n)}},vs=(n={})=>gr((e,t)=>{if(typeof e!="string")return En(t,`must be a string (got ${ra(e)})`);n.min!==void 0&&e.length<n.min&&En(t,`must have at least ${n.min} characters`),n.max!==void 0&&e.length>n.max&&En(t,`must have at most ${n.max} characters`),n.pattern&&!n.pattern.test(e)&&En(t,`must be ${n.what??`a match for ${n.pattern}`} (got ${ra(e)})`)}),An=()=>vs({pattern:/^#[0-9a-fA-F]{6}$/,what:"#rrggbb"}),tt=(n={})=>gr((e,t)=>{if(typeof e!="number"||!Number.isFinite(e))return En(t,`must be a finite number (got ${ra(e)})`);n.int&&!Number.isInteger(e)&&En(t,`must be an integer (got ${e})`),n.min!==void 0&&e<n.min&&En(t,`must be at least ${n.min} (got ${e})`),n.max!==void 0&&e>n.max&&En(t,`must be at most ${n.max} (got ${e})`)}),Js=n=>gr((e,t)=>{n.includes(e)||En(t,`must be one of ${n.map(i=>JSON.stringify(i)).join(", ")} (got ${ra(e)})`)}),Xn=(n,e={})=>gr((t,i)=>{if(!Array.isArray(t))return En(i,`must be a list (got ${ra(t)})`);e.min!==void 0&&t.length<e.min&&En(i,`must have at least ${e.min} entries (has ${t.length})`),e.max!==void 0&&t.length>e.max&&En(i,`must have at most ${e.max} entries (has ${t.length})`),t.forEach((s,r)=>n(s,lc(i,r)))}),vt=n=>Object.assign(gr((e,t)=>{e!==void 0&&n(e,t)}),{optional:!0}),wt=n=>gr((e,t)=>{if(!vE(e))return En(t,`must be an object (got ${ra(e)})`);for(const i of Object.keys(n)){const s=n[i];e[i]===void 0?s.optional||En(lc(t,i),"is required"):s(e[i],lc(t,i))}for(const i of Object.keys(e))i in n||En(lc(t,i),`is not a known field (allowed: ${Object.keys(n).join(", ")})`)}),Ps=(n,e)=>gr((t,i)=>{n(t,i);const s=e(t);s&&En(i,s)}),bu=/^[a-z0-9][a-z0-9._-]{0,31}$/,bE=65536,Mu={kind:vs({min:1,max:32}),id:vs({pattern:bu,what:"an id (a-z, 0-9, . _ -; max 32)"}),version:tt({min:1,int:!0}),weight:tt({min:0,max:bE,int:!0}),tags:Xn(vs({pattern:/^[a-z0-9][a-z0-9._-]{0,31}$/,what:"a tag"}),{max:16})},Hp=1<<20;function f0(n){if(typeof n=="object"&&n!==null&&!Object.isFrozen(n)){Object.freeze(n);for(const e of Object.values(n))f0(e)}return n}function Ah(n,e,t){const i=new Map,s=(d,h)=>`${d}@${h}`,r=(d,h)=>d.id<h.id?-1:d.id>h.id?1:d.version-h.version,a=d=>[...i.values()].sort(r).filter(h=>!d||d(h)),o=d=>i.get(s(d.id,d.version)),c=d=>{if(!bu.test(d))return;let h;for(const p of i.values())p.id===d&&(!h||p.version>h.version)&&(h=p);return h},l=d=>{const h=d,p=`${n} ${typeof h?.id=="string"?h.id:"?"}@${typeof h?.version=="number"?h.version:"?"}: `;try{if(e(d,""),d.kind!==n)throw new Cn("kind",`kind must be ${JSON.stringify(n)} (got ${JSON.stringify(d.kind)})`);t?.(d,u)}catch(g){throw g instanceof Cn?new Cn(g.path,p+g.message):g}},u={kind:n,register(d){l(d);const h=d,p=s(h.id,h.version);if(i.has(p))throw new Cn("",`${n} ${p}: is already registered`);const g=f0(structuredClone(h));return i.set(p,g),g},check(d){try{return l(d),null}catch(h){if(h instanceof Cn)return h.message;throw h}},find:o,findLatest:c,has:d=>o(d)!==void 0,get(d){const h=o(d);if(!h)throw new Cn("ref",`${n} ${s(String(d?.id),d?.version)}: ref is not registered`);return h},latest(d){const h=c(d);if(!h)throw new Cn("id",`${n} ${JSON.stringify(d)}: id is not registered`);return h},list:a,pick(d,h){const p=a(h).filter(m=>m.weight>0);if(!p.length)throw new RangeError(`No selectable ${n} definition (nothing eligible has weight above 0)`);const g=p.reduce((m,f)=>m+f.weight,0);if(g>Hp)throw new RangeError(`${n} selectable weight total ${g} exceeds ${Hp}`);let y=(d>>>0)%g;for(const m of p){if(y<m.weight)return m;y-=m.weight}return p[p.length-1]}};return u}const Jn=n=>{const e=parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]},Su=n=>`#${n.map(e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,"0")).join("")}`,ME=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],SE={kind:"theme",id:"classic",version:1,weight:0,tags:["default"],name:"Classic",sky:{stops:[{at:0,color:"#dce8df"},{at:1,color:"#dce8df"}],darkStops:[{at:0,color:"#202f36"},{at:1,color:"#202f36"}]},light:{hemiSky:"#fff4d8",hemiGround:"#62765d",hemiIntensity:2.6,sun:"#fff4d8",sunIntensity:3},terrain:{surface:"#7d9461",soil:"#99754f",deep:"#5c4a3d",bedrock:"#383842"},parallax:[]},wE={kind:"theme",id:"meadow",version:2,weight:1,tags:["temperate","green"],name:"Meadow",sky:{stops:[{at:0,color:"#86bde8"},{at:1,color:"#e6f2dc"}]},light:{hemiSky:"#fff4d8",hemiGround:"#62765d",hemiIntensity:2.6,sun:"#fff4d8",sunIntensity:3},haze:{color:"#e6f2dc",strength:.35},terrain:{surface:"#669641",soil:"#8c6a46",deep:"#574330",bedrock:"#35363f",detail:{color:"#a6c46a",depth:.25}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#ffffff",opacity:.85,baseY:14,amplitude:6,frequency:5,size:9,seed:11,drift:.5},{id:"far-hills",shape:"hills",depth:.35,color:"#9dbfb0",opacity:1,baseY:3,amplitude:9,frequency:3,seed:21},{id:"near-hills",shape:"hills",depth:.6,color:"#103a25",opacity:1,baseY:-1,amplitude:6,frequency:4,seed:22}]},EE={kind:"theme",id:"canyon",version:2,weight:1,tags:["arid","warm"],name:"Canyon",sky:{stops:[{at:0,color:"#f0b57d"},{at:1,color:"#fbe6c0"}]},light:{hemiSky:"#ffe6c0",hemiGround:"#8a5a3c",hemiIntensity:2.7,sun:"#ffe0b0",sunIntensity:3.2},haze:{color:"#fbe6c0",strength:.4},terrain:{surface:"#c98450",soil:"#a85d38",deep:"#6f3f2b",bedrock:"#3a2a28",detail:{color:"#e5bd8a",depth:.3}},parallax:[{id:"sun-haze",shape:"band",depth:0,color:"#ffd9a0",opacity:.35,baseY:2,amplitude:0,frequency:1,seed:1,floorY:-10},{id:"far-mesas",shape:"ridge",depth:.3,color:"#d89a6a",opacity:1,baseY:2,amplitude:11,frequency:4,seed:31},{id:"near-mesas",shape:"ridge",depth:.55,color:"#4a2616",opacity:1,baseY:-2,amplitude:8,frequency:5,seed:32}]},TE={kind:"theme",id:"dusk",version:1,weight:1,tags:["night","warm"],name:"Dusk",sky:{stops:[{at:0,color:"#2c2766"},{at:.55,color:"#c9657a"},{at:1,color:"#f6c38b"}]},light:{hemiSky:"#ffc9a0",hemiGround:"#4a3a6a",hemiIntensity:2.2,sun:"#ffb27a",sunIntensity:2.6},haze:{color:"#f2a58a",strength:.3},terrain:{surface:"#6b8a5c",soil:"#6a4a52",deep:"#43333f",bedrock:"#241d2f",detail:{color:"#8aa66c",depth:.2}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#f4a183",opacity:.55,baseY:12,amplitude:5,frequency:4,size:12,seed:41,drift:.35},{id:"far-ridge",shape:"ridge",depth:.3,color:"#5a4a86",opacity:1,baseY:1,amplitude:12,frequency:4,seed:42},{id:"near-ridge",shape:"hills",depth:.55,color:"#34295a",opacity:1,baseY:-2,amplitude:7,frequency:3,seed:43}],ui:{labelInk:"#f6e9d8",labelBg:"#2b2347",guideFill:"#fff2b5",guideStroke:"#1a1730"}},AE={kind:"theme",id:"snow",version:3,weight:1,tags:["cold","bright"],name:"Snow",sky:{stops:[{at:0,color:"#7aa5cf"},{at:1,color:"#a8c4de"}],darkStops:[{at:0,color:"#0b1530"},{at:1,color:"#1d2c4a"}]},light:{hemiSky:"#eaf3ff",hemiGround:"#8a96a8",hemiIntensity:2.8,sun:"#f4f8ff",sunIntensity:2.8},haze:{color:"#eef5fb",strength:.45},terrain:{surface:"#eef3f8",soil:"#737b88",deep:"#5a6270",bedrock:"#2e323c",detail:{color:"#b9dcee",depth:.35}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#ffffff",opacity:.8,baseY:15,amplitude:5,frequency:4,size:10,seed:51,drift:.4},{id:"far-peaks",shape:"ridge",depth:.25,color:"#c5d4e5",opacity:1,baseY:1,amplitude:14,frequency:3,seed:52},{id:"near-peaks",shape:"ridge",depth:.5,color:"#8aa0ba",opacity:1,baseY:-2,amplitude:9,frequency:5,seed:53}]},RE=[SE,wE,EE,TE,AE],CE=["hills","ridge","clouds","band"],Gp=Ps(Xn(wt({at:tt({min:0,max:1}),color:An()}),{min:2,max:8}),n=>n[0].at!==0?"first stop must be at 0":n[n.length-1].at!==1?"last stop must be at 1":n.some((e,t)=>t&&e.at<=n[t-1].at)?"stops must be in strictly increasing order":null),IE=wt({id:vs({pattern:/^[a-z][a-z0-9-]{0,29}$/,what:"a lowercase slug"}),shape:Js(CE),depth:tt({min:0,max:1}),color:An(),opacity:tt({min:0,max:1}),baseY:tt({min:-40,max:80}),amplitude:tt({min:0,max:40}),frequency:tt({min:1,max:24,int:!0}),seed:tt({int:!0,min:0,max:4294967295}),drift:vt(tt({min:-8,max:8})),size:vt(tt({min:1,max:60})),floorY:vt(tt({min:-120,max:80})),period:vt(tt({min:20,max:160}))}),PE=Ps(wt({...Mu,name:vs({min:1,max:40}),sky:wt({stops:Gp,darkStops:vt(Gp)}),light:wt({hemiSky:An(),hemiGround:An(),hemiIntensity:tt({min:0,max:8}),sun:An(),sunIntensity:tt({min:0,max:8})}),haze:vt(wt({color:An(),strength:tt({min:0,max:1})})),terrain:wt({surface:An(),soil:An(),deep:An(),bedrock:An(),detail:vt(wt({color:An(),depth:tt({min:.05,max:1.5})}))}),parallax:Xn(IE,{max:8}),ui:vt(wt({labelInk:vt(An()),labelBg:vt(An()),guideFill:vt(An()),guideStroke:vt(An())}))}),n=>{const e=n,t=e.parallax.map(s=>s.id),i=t.find((s,r)=>t.indexOf(s)!==r);return i?`parallax layer id ${JSON.stringify(i)} is used twice`:!!e.ui?.labelInk!=!!e.ui?.labelBg?"ui.labelInk and ui.labelBg must be set together":!!e.ui?.guideFill!=!!e.ui?.guideStroke?"ui.guideFill and ui.guideStroke must be set together":null}),LE="classic",DE="theme",Wi=Ah("theme",PE);for(const n of RE)Wi.register(n);const Vp=()=>Wi.latest(LE);function NE(n,e={}){const t=e.pin?Wi.findLatest(e.pin):void 0;if(t)return t;const i=il(["theme-1",n]),s=e.preferred?.length?new Set(e.preferred):null;return s&&Wi.list(r=>s.has(r.id)&&r.weight>0).length?Wi.pick(i,r=>s.has(r.id)):Wi.pick(i)}function UE(n){if(!n)return null;let e=null;try{e=new URLSearchParams(n).get(DE)}catch{return null}return e&&Wi.findLatest(e)?e:null}const Wp=new WeakMap;function Xp(n){let e=Wp.get(n);if(!e){const t=n.terrain;e={surface:Jn(t.surface),soil:Jn(t.soil),deep:Jn(t.deep),bedrock:Jn(t.bedrock),detail:t.detail?{color:Jn(t.detail.color),depth:t.detail.depth}:void 0},Wp.set(n,e)}return e}const Ko=Object.freeze({solidCells:34e3,chunks:80,rowRuns:840,protectedCells:768}),Za=Un("arena-2"),$p=Za.cell,aa=(n,e)=>{throw new Cn(n,`${n} ${e}`)},mi=(n,e,t)=>{n(e,t)},ya=n=>n,wu=vs({pattern:/^[a-z][a-z0-9]{0,15}$/,what:"a parameter name"}),kr=(n,e)=>typeof n=="number"?n:(n.add??0)+n.terms.reduce((t,[i,s])=>t+s*e[i],0),Eu=tt({int:!0,min:-4096,max:4096}),kE=ya((n,e)=>{(!Array.isArray(n)||n.length!==2)&&aa(e,"must be a [param, coefficient] pair"),mi(wu,n[0],`${e}[0]`),mi(tt({int:!0,min:-8,max:8}),n[1],`${e}[1]`)}),OE=wt({terms:Xn(kE,{min:1,max:4}),add:vt(Eu)}),Gr=ya((n,e)=>{mi(typeof n=="number"?Eu:OE,n,e)}),Yp={x0:Gr,x1:Gr,y0:Gr,y1:Gr},FE=Ps(wt({min:tt({int:!0,min:-4096,max:4096}),max:tt({int:!0,min:-4096,max:4096}),step:tt({int:!0,min:1,max:4096})}),n=>n.min>n.max?"min must not exceed max":(n.max-n.min)%n.step!==0?"max - min must be a multiple of step":null);function Or(n){return typeof n=="number"?[]:n.terms.map(e=>e[0])}function BE(n){return Object.keys(n).sort().reduce((t,i)=>t.flatMap(s=>[{...s,[i]:n[i].min},{...s,[i]:n[i].max}]),[{}])}const zE=Ps(wt({...Mu,params:ya((n,e)=>{(typeof n!="object"||n===null||Array.isArray(n))&&aa(e,"must be an object of parameter ranges");const t=Object.keys(n);t.length>4&&aa(e,`must have at most 4 parameters (has ${t.length})`);for(const i of t)mi(wu,i,`${e}.${i}`),mi(FE,n[i],`${e}.${i}`)}),parts:Xn(wt({op:Js(["add","clear"]),...Yp}),{min:1,max:16}),surface:vt(wt({x0:Gr,x1:Gr})),requiresClear:vt(Xn(wt(Yp),{max:8}))}),n=>{const e=n,t=[];e.parts.forEach((r,a)=>t.push([`parts[${a}]`,r.x0,r.x1,r.y0,r.y1])),(e.requiresClear??[]).forEach((r,a)=>t.push([`requiresClear[${a}]`,r.x0,r.x1,r.y0,r.y1]));const i=new Set(Object.keys(e.params)),s=BE(e.params);for(const[r,a,o,c,l]of t){for(const u of[...Or(a),...Or(o),...Or(c),...Or(l)])if(!i.has(u))return`${r} uses unknown parameter ${JSON.stringify(u)}`;if(s.some(u=>kr(o,u)<=kr(a,u)||kr(l,u)<=kr(c,u)))return`${r} must have a positive extent for every parameter value`}if(e.surface){for(const r of[...Or(e.surface.x0),...Or(e.surface.x1)])if(!i.has(r))return`surface uses unknown parameter ${JSON.stringify(r)}`;if(s.some(r=>kr(e.surface.x1,r)<=kr(e.surface.x0,r)))return"surface must have a positive width for every parameter value"}return null}),xn=(n={})=>{const e=tt({min:n.min,max:n.max});return ya((t,i)=>{mi(e,t,i),Number.isInteger(t/$p)||aa(i,`must be a whole number of cells (${$p} units); got ${t}`)})},Qa={min:Za.bounds.minX,max:Za.bounds.maxX},lr={min:Za.bounds.minY,max:Za.bounds.maxY},HE=Ps(wt({x0:xn(Qa),x1:xn(Qa),y0:xn(lr),y1:xn(lr)}),n=>n.x1<=n.x0||n.y1<=n.y0?"must have a positive extent":null),GE=Ps(wt({op:Js(["add","clear"]),x0:xn(Qa),x1:xn(Qa),y0:xn(lr),y1:xn(lr)}),n=>n.x1<=n.x0||n.y1<=n.y0?"must have a positive extent":null),VE=xn(Qa),WE=xn(lr),XE=ya((n,e)=>{(!Array.isArray(n)||n.length!==2)&&aa(e,"must be an [x, y] pair"),mi(VE,n[0],`${e}[0]`),mi(WE,n[1],`${e}[1]`)}),jp=Js(["mirror","balanced"]),rd=wt({id:vs({pattern:bu,what:"an id"}),version:tt({int:!0,min:1})}),Ha=n=>Ps(wt({min:n,max:n}),e=>e.min>e.max?"min must not exceed max":null),$E=Ha(tt({int:!0,min:0,max:16})),YE=Ha(Eu),qp=ya((n,e)=>{(typeof n!="object"||n===null||Array.isArray(n))&&aa(e,"must be an object of parameter overrides");for(const t of Object.keys(n))mi(wu,t,`${e}.${t}`),mi(YE,n[t],`${e}.${t}`)}),jE=wt({solidCells:vt(tt({int:!0,min:1,max:Ko.solidCells})),chunks:vt(tt({int:!0,min:1,max:Ko.chunks})),rowRuns:vt(tt({int:!0,min:1,max:Ko.rowRuns})),protectedCells:vt(tt({int:!0,min:0,max:Ko.protectedCells}))}),qE=Ps(wt({...Mu,profile:Js(["arena-2"]),mode:Js(["fixed","procedural"]),fixed:vt(wt({parts:Xn(GE,{min:1,max:64}),pads:Xn(XE,{min:8,max:8}),requiresClear:vt(Xn(HE,{max:16})),symmetry:vt(jp)})),pads:vt(wt({levels:Xn(xn(lr),{min:3,max:16}),offset:Ha(xn({min:-.5,max:.5})),symmetry:jp,maxAdjacentStep:xn({min:0}),minDistinctLevels:tt({int:!0,min:3,max:8}),support:Xn(wt({block:rd,weight:tt({int:!0,min:1,max:1e3}),params:vt(qp)}),{min:1,max:8})})),features:vt(Xn(wt({block:rd,zone:Js(["gap","upper","lower","sky"]),count:$E,weight:tt({int:!0,min:1,max:1e3}),params:vt(qp)}),{max:16})),voids:wt({count:Ha(tt({int:!0,min:0,max:8})),width:Ha(xn({min:2,max:80}))}),lanes:wt({padHeadroom:xn({min:3,max:20}),launchReach:xn({min:1,max:10}),skyBandMinY:xn(lr),skyMaxFill:tt({min:0,max:1})}),limits:vt(jE),preferredThemes:vt(Xn(rd,{max:16}))}),n=>{const e=n;if(e.mode==="fixed"){if(!e.fixed)return"a fixed template requires `fixed`";if(e.pads||e.features)return"a fixed template must not carry `pads` or `features`"}else{if(!e.pads)return"a procedural template requires `pads`";if(e.fixed)return"a procedural template must not carry `fixed`";if(new Set(e.pads.levels).size!==e.pads.levels.length)return"pads.levels must be distinct";if(e.pads.levels.length<e.pads.minDistinctLevels)return"pads.levels must offer at least minDistinctLevels levels"}return null}),Fr=n=>`${n.id}@${n.version}`;function KE(n){const e=Ah("terrain-block",zE),t=(s,r,a,o)=>{const c=e.find(s);if(!c)throw new Cn(`${a}.block`,`${a}.block ${Fr(s)} is not a registered terrain-block`);if(o&&!c.surface)throw new Cn(`${a}.block`,`${a}.block ${Fr(s)} has no surface to carry a pad`);for(const[l,u]of Object.entries(r??{})){const d=c.params[l];if(!d)throw new Cn(`${a}.params.${l}`,`${a}.params.${l} is not a parameter of ${Fr(s)}`);if(u.min<d.min||u.max>d.max)throw new Cn(`${a}.params.${l}`,`${a}.params.${l} must narrow ${Fr(s)} (${d.min}..${d.max}), not widen it`);if((u.min-d.min)%d.step!==0||(u.max-d.min)%d.step!==0)throw new Cn(`${a}.params.${l}`,`${a}.params.${l} must stay on the step ${d.step} of ${Fr(s)}`)}},i=Ah("terrain-template",qE,s=>{s.pads?.support.forEach((r,a)=>t(r.block,r.params,`pads.support[${a}]`,!0)),s.features?.forEach((r,a)=>t(r.block,r.params,`features[${a}]`,!1)),s.preferredThemes?.forEach((r,a)=>{if(!n(r))throw new Cn(`preferredThemes[${a}]`,`preferredThemes[${a}] ${Fr(r)} is not a registered theme`)})});return{blocks:e,templates:i}}const JE={kind:"terrain-block",id:"arch",version:1,weight:1,tags:["gate","cover"],params:{hw:{min:24,max:40,step:4},ph:{min:20,max:32,step:4}},parts:[{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",-1]],add:8},y0:-8,y1:{terms:[["ph",1]]}},{op:"add",x0:{terms:[["hw",1]],add:-8},x1:{terms:[["hw",1]]},y0:-8,y1:{terms:[["ph",1]]}},{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:{terms:[["ph",1]]},y1:{terms:[["ph",1]],add:8}}],requiresClear:[{x0:{terms:[["hw",-1]],add:8},x1:{terms:[["hw",1]],add:-8},y0:0,y1:{terms:[["ph",1]]}}]},ZE={kind:"terrain-block",id:"island",version:1,weight:1,tags:["floating"],params:{h:{min:16,max:48,step:2}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:-8,y1:0},{op:"add",x0:{terms:[["h",-1]],add:8},x1:{terms:[["h",1]],add:-8},y0:-16,y1:-8}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},QE={kind:"terrain-block",id:"ledge",version:1,weight:1,tags:["slab","thin"],params:{h:{min:16,max:40,step:2}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:-4,y1:0}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},eT={kind:"terrain-block",id:"pillar",version:1,weight:1,tags:["obstruction"],params:{hw:{min:3,max:8,step:1},ht:{min:16,max:48,step:4}},parts:[{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:-8,y1:{terms:[["ht",1]]}}]},tT={kind:"terrain-block",id:"terrace",version:1,weight:1,tags:["slab","ground"],params:{h:{min:16,max:64,step:2},t:{min:8,max:400,step:4}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:{terms:[["t",-1]]},y1:0}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},nT={kind:"terrain-block",id:"void",version:1,weight:1,tags:["gap"],params:{hw:{min:12,max:48,step:1}},parts:[{op:"clear",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:0,y1:96}]},iT={kind:"terrain-template",id:"cascade",version:1,weight:3,tags:["mirror","terraces"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"mirror",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"ledge",version:1},weight:3,params:{h:{min:20,max:28}}},{block:{id:"terrace",version:1},weight:2,params:{h:{min:24,max:28},t:{min:8,max:16}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:24},t:{min:200,max:400}}},{block:{id:"ledge",version:1},zone:"upper",count:{min:3,max:3},weight:6,params:{h:{min:16,max:24}}},{block:{id:"arch",version:1},zone:"gap",count:{min:0,max:1},weight:4},{block:{id:"pillar",version:1},zone:"gap",count:{min:0,max:1},weight:3}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"meadow",version:2},{id:"snow",version:3}]},sT={kind:"terrain-template",id:"isles",version:1,weight:2,tags:["mirror","floating"],profile:"arena-2",mode:"procedural",pads:{levels:[1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"mirror",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"island",version:1},weight:4,params:{h:{min:20,max:28}}},{block:{id:"ledge",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:22},t:{min:200,max:400}}},{block:{id:"island",version:1},zone:"upper",count:{min:3,max:3},weight:6,params:{h:{min:16,max:18}}},{block:{id:"island",version:1},zone:"sky",count:{min:0,max:1},weight:4,params:{h:{min:16,max:24}}}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"dusk",version:1},{id:"snow",version:3}]},rT={kind:"terrain-template",id:"mesas",version:1,weight:3,tags:["balanced","mesa"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"balanced",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"terrace",version:1},weight:3,params:{h:{min:24,max:28},t:{min:8,max:16}}},{block:{id:"ledge",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:24},t:{min:200,max:400}}},{block:{id:"terrace",version:1},zone:"upper",count:{min:2,max:2},weight:6,params:{h:{min:16,max:24},t:{min:8,max:12}}},{block:{id:"pillar",version:1},zone:"gap",count:{min:1,max:1},weight:4},{block:{id:"ledge",version:1},zone:"upper",count:{min:1,max:1},weight:3,params:{h:{min:16,max:24}}}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"canyon",version:2}]},aT={kind:"terrain-template",id:"ridge",version:1,weight:2,tags:["balanced","ledges"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"balanced",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"ledge",version:1},weight:3,params:{h:{min:20,max:28}}},{block:{id:"island",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:22},t:{min:200,max:400}}},{block:{id:"arch",version:1},zone:"gap",count:{min:1,max:1},weight:5},{block:{id:"ledge",version:1},zone:"upper",count:{min:3,max:3},weight:4,params:{h:{min:16,max:24}}},{block:{id:"pillar",version:1},zone:"lower",count:{min:0,max:1},weight:2}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"dusk",version:1},{id:"meadow",version:2}]},p0=KE(n=>Wi.has(n)),oT=p0.blocks,m0=p0.templates,cT=[tT,QE,ZE,eT,JE,nT],lT=[Yg,iT,sT,rT,aT];for(const n of cT)oT.register(n);for(const n of lT)m0.register(n);function dT(n){const e=pw(n),t=e&&m0.find(e);return t?.preferredThemes?.length?t.preferredThemes.map(i=>i.id):null}const ad=.55,hT="#8c8c8c",g0=n=>[n[0]*ad,n[1]*ad,n[2]*ad],Jo=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,od=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055;function Kp(n,e,t){let i=Jn(n.color);return e&&(i=ME(i,Jn(e.color),e.strength*(1-n.depth))),Su(t?g0(i):i)}function uT(n,e){if(e==="light")return n;const t=Jo(Jn(hT)[0]),i=Jn(n);return Su([od(Jo(i[0])*t),od(Jo(i[1])*t),od(Jo(i[2])*t)])}const sl=80,Dc=3,fT=48,pT=-80,mT=n=>-20-(1-n)*30;function Jp(n,e,t){const i=e&&t?t:n,s=[],r=[],a=[];i.forEach((c,l)=>{const u=xu(e&&!t?g0(Jn(c.color)):Jn(c.color));if(s.push(-.5,.5-c.at,0,.5,.5-c.at,0),r.push(...u,...u),l){const d=(l-1)*2;a.push(d,d+2,d+1,d+1,d+2,d+3)}});const o=new Xt;return o.setAttribute("position",new Ot(s,3)),o.setAttribute("color",new Ot(r,3)),o.setIndex(a),o}function cd(n,e){const t=n.period??sl,i=t*Dc,s=fT*Dc*2,r=n.floorY??n.baseY-60,a=new Float32Array((s+1)*6),o=[];for(let l=0;l<=s;l++){const u=-i+l/s*2*i;if(a.set([u,r,0,u,Math.max(r,n.baseY+e(u)),0],l*6),l){const d=(l-1)*2;o.push(d,d+1,d+2,d+1,d+3,d+2)}}const c=new Xt;return c.setAttribute("position",new Qn(a,3)),c.setIndex(o),c}function gT(n){const e=n.period??sl,t=Lc(n.seed),i=n.size??8,s=[],r=[],a=Array.from({length:n.frequency},(l,u)=>({x:(u+t()*.6+.2)/n.frequency*e,y:n.baseY+t()*n.amplitude,w:i*(.7+t()*.6)})),o=(l,u,d,h)=>{const p=s.length/3;s.push(l,u,0);for(let g=0;g<10;g++){const y=g/10*Math.PI*2;s.push(l+Math.cos(y)*d,u+Math.sin(y)*h,0)}for(let g=0;g<10;g++)r.push(p,p+1+g,p+1+(g+1)%10)};for(let l=-Dc;l<Dc;l++)for(const u of a){const d=u.x+l*e;o(d,u.y,u.w/2,u.w*.17),o(d-u.w*.27,u.y-u.w*.04,u.w*.26,u.w*.12),o(d+u.w*.25,u.y-u.w*.03,u.w*.3,u.w*.13)}const c=new Xt;return c.setAttribute("position",new Ot(s,3)),c.setIndex(r),c}function xT(n){const e=n.period??sl;if(n.shape==="clouds")return gT(n);if(n.shape==="band")return cd(n,()=>0);const t=Lc(n.seed);if(n.shape==="hills"){const s=[t(),t(),t()],r=[.6,.3,.1];return cd(n,a=>{let o=0;for(let c=0;c<3;c++)o+=r[c]*Math.sin(2*Math.PI*((c+1)*n.frequency*a/e+s[c]));return n.amplitude*(.5+.5*o)})}const i=Array.from({length:n.frequency*3},()=>.2+t()*.8);return cd(n,s=>{const r=(s/e%1+1)%1*i.length,a=Math.floor(r),o=r-a;return n.amplitude*(i[a%i.length]*(1-o)+i[(a+1)%i.length]*o)})}class _T{group=new Kt;sky;layers=[];ax=0;ay=0;dark;theme;constructor(e,t=!1){this.dark=t,this.theme=e,this.sky=new Ke(Jp(e.sky.stops,t,e.sky.darkStops),new ui({vertexColors:!0,depthWrite:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.position.z=pT,this.group.add(this.sky);for(const i of e.parallax){const s=i.opacity>=1,r=new ui({color:Kp(i,e.haze,t),transparent:!s,opacity:i.opacity,depthWrite:s,side:Si}),a=new Ke(xT(i),r);a.frustumCulled=!1,a.position.z=mT(i.depth),a.renderOrder=-5+Math.round(i.depth*4),this.group.add(a),this.layers.push({mesh:a,def:i,k:1-i.depth,period:i.period??sl})}}get layerCount(){return this.layers.length}get meshes(){return[this.sky,...this.layers.map(e=>e.mesh)]}setDark(e){if(e!==this.dark){this.dark=e,this.sky.geometry.dispose(),this.sky.geometry=Jp(this.theme.sky.stops,e,this.theme.sky.darkStops);for(const t of this.layers)t.mesh.material.color.set(Kp(t.def,this.theme.haze,e))}}anchor(e){this.ax=e.position.x,this.ay=e.position.y}update(e,t,i){const s=e.position.x,r=e.position.y,a=s-this.ax,o=r-this.ay;this.sky.position.x=s,this.sky.position.y=r,this.sky.scale.x=(e.right-e.left)*1.05,this.sky.scale.y=(e.top-e.bottom)*1.05;for(let c=0;c<this.layers.length;c++){const l=this.layers[c],u=i?0:l.def.drift??0,d=u?(t*u%l.period+l.period)%l.period:0;l.mesh.position.x=a*l.k+d,l.mesh.position.y=o*l.k}}dispose(){this.group.removeFromParent();for(const e of this.meshes)e.geometry.dispose(),e.material.dispose();this.layers.length=0,this.group.clear()}}const Zp=1e3,yT=400,vT=-.1,ld=.15;function bT(n,e=0){return{left:e-Zp,right:e+Zp,top:n,bottom:n-yT}}const dd=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,hd=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055;function MT(n,e){const t=Jn(uT(n.terrain.bedrock,e));return Su([hd(dd(t[0])*ld),hd(dd(t[1])*ld),hd(dd(t[2])*ld)])}function ST(n,e,t){return e>=t?t/2:Math.min(Math.max(n,e/2),t-e/2)}function wT(n,e){const t=Math.max(1,e.maxTiers??4)-1;return n.stack==="down"?n.y===void 0||e.maxBottom===void 0||!e.tierPx?t:Math.max(0,Math.min(t,Math.floor((e.maxBottom-n.y)/e.tierPx))):n.y===void 0||e.minTop===void 0||!e.tierPx?t:Math.max(0,Math.min(t,Math.floor((n.y-(n.height??0)-e.minTop)/e.tierPx)))}const ET=(n,e,t)=>Math.abs(n.x-e.x)<(n.width+e.width)/2+t;function TT(n,e,t){const i=t.gap??2,s=t.hysteresis??6,r=Math.max(1,t.maxTiers??4),a=[],o=new Map;for(const c of n){const l={x:ST(c.x,c.width,t.viewWidth),width:c.width,y:c.y,height:c.height,sg:c.stack==="down"?-1:1},u=t.tierPx,d=(f,v)=>{const b=f.y-f.sg*v*u;return[b-(f.height??u),b]},h=(f,v,b)=>{if(!ET(l,f,b))return!1;if(l.y===void 0||f.y===void 0||!u)return f.tier===v;const[M,T]=d(l,v),[R,I]=d(f,f.tier);return M<I&&R<T},p=wT(c,{...t,maxTiers:r}),g=(f,v)=>!a.some(b=>h(b,f,v)),y=e.get(c.id);let m=-1;for(let f=0;f<=p;f++)if(g(f,i)){m=f;break}if(y!==void 0&&y<=p&&y!==m&&g(y,i-s)&&(m<0||y<m||!g(m,i+s))&&(m=y),m<0){let f=1/0;for(let v=0;v<=p;v++){const b=a.filter(M=>h(M,v,i)).length;b<f&&(f=b,m=v)}}a.push({...l,tier:m}),o.set(c.id,{x:l.x,tier:m})}return o}function AT(n,e){const t=[n==="left"?"to the left":n==="right"?"to the right":"",e==="up"?"above":e==="down"?"below":""].filter(Boolean);return t.length?`, off screen ${t.join(" and ")}`:""}function Qp(n,e,t,i){const s=n<0?"left":n>i.width?"right":null,r=Math.min(i.maxBottom??i.height,i.height),a=Math.min((i.minTop??0)+t,r),o=e<0?"up":e>i.height?"down":null,c=o==="up"?a:o==="down"?r:s?Math.min(Math.max(e,a),r):e,l=(s==="left"?"‹":s==="right"?"›":"")+(o==="up"?"↑":o==="down"?"↓":"");return{edge:s,vert:o,mark:l,y:c,pin:o==="up"||s&&e<a?"top":null,hint:AT(s,o)}}function RT(n){return n.version==="skirmish-1"||n.version==="skirmish-2"||n.version==="skirmish-3"}function CT(n,e){const t=RT(n),i=!t&&oi(n)?n:null,s=t?"skirmish":i?"volley":"duel",r=t?n.epoch:i?.epoch??0,a=t?n.self:n.seat,o=JSON.stringify(n.version==="skirmish-2"||n.version==="skirmish-3"?[s,n.id,r,n.version,lu(n.version).version]:[s,n.id,r]),c=t?n.members.map((d,h)=>({actorId:d.actorId,lifeId:d.lifeId,teamId:null,label:d.kind==="npc"?`NPC ${h+1}`:null,slotId:d.slotId})):n.seats.map(d=>({actorId:d.actorId,lifeId:"lifeId"in d?d.lifeId:d.actorId===e?a.lifeId:null,teamId:"teamId"in d?d.teamId:null,label:null,slotId:null})),l=t?n.action?.aim?{...n.action.aim,id:n.action.id,actorId:n.action.actorId,lifeId:n.action.lifeId,epoch:n.action.epoch,roundId:n.action.roundId}:null:n.action;let u=null;if(t){const d=n.effect;d&&(u={identity:JSON.stringify([o,d.action.actorId,d.action.lifeId,d.action.roundId,d.action.id]),actionId:d.action.id,actorId:d.action.actorId,aim:d.action.aim?{...d.action.aim}:null,point:d.contact?.point?{x:d.contact.point.x,y:d.contact.point.y}:null,delta:d.delta,motion:d.motion,startedAt:d.startedAt,endsAt:d.endsAt})}else{const d=n.effect;d&&(u={identity:JSON.stringify([o,d.actorId,d.lifeId,"roundId"in d?d.roundId:null,d.actionId]),actionId:d.actionId,actorId:d.actorId,aim:n.action&&n.action.id===d.actionId?{arrow:n.action.arrow,angle:n.action.angle,power:n.action.power,facing:n.action.facing}:null,point:d.contact?.point?{x:d.contact.point.x,y:d.contact.point.y}:null,delta:d.delta,motion:d.motion,startedAt:d.startedAt,endsAt:d.endsAt})}return{format:s,id:n.id,revision:n.revision,epoch:r,worldKey:o,scopeKey:JSON.stringify([o,e,a.lifeId]),planningKey:t?JSON.stringify([o,e,a.lifeId,n.roundId]):YS(n),sharedPlanning:t||!!i,state:n.state,phase:n.phase,terrain:n.terrain,actors:n.actors,seats:c,seat:{canAct:a.canAct,bombReady:a.bombReady,lifeId:a.lifeId},deadlineAt:n.deadlineAt,launchAt:n.launchAt,contactAt:n.contactAt,action:l,effect:u,pressure:i?.preset==="royale-shrink-1"?i.pressure:null,lockedPlan:t?n.locks.find(d=>d.actorId===e)?.plan??null:jS(n,e),tuning:el(n),wind:n.wind??0,layoutTemplate:t?n.layout?.template??null:null}}function IT(n,e){return!!n&&n.planningKey===e.planningKey&&e.state==="active"&&e.phase==="planning"&&e.seat.canAct}function PT(n,e){return JSON.stringify([n.worldKey,e.actorId,e.lifeId,e.epoch,e.roundId,e.id,n.launchAt])}const Zo=16,LT=2,em=new Set,ud=gu,Ht=n=>document.getElementById(n),jt=(n,e,t=0)=>new F(n,e,t);class DT{constructor(e){this.canvas=e,this.belowWorld.frustumCulled=!1,this.scene.add(this.belowWorld),this.scene.add(this.terrainGroup,this.pressureGroup,this.fxGroup),this.motionQuery=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.reducedMotion=!!this.motionQuery?.matches,this.motionQuery?.addEventListener?.("change",this.onMotionChange),this.flash.visible=!1,this.flash.position.z=.9,this.fxGroup.add(this.flash),this.lastMarker.add(new Ke(new Qh(.4,.62,28),new ui({color:"#ff7a45",transparent:!0,opacity:.95,depthTest:!1})),new Ke(new Es(.13,12),new ui({color:"#ff7a45",depthTest:!1}))),this.lastMarker.visible=!1,this.lastMarker.renderOrder=5,this.scene.add(this.lastMarker),this.fxGroup.add(this.particleBatch.mesh),this.scene.add(this.hemi),this.sun.position.set(-8,20,12),this.scene.add(this.sun),this.applyBiome(this.basicBiome()),this.camera.position.set(0,8,55),this.camera.lookAt(0,8,0),this.rebuildTerrain(this.terrain);for(const t of["normal","bomb","teleport"])Ht(`combat-arrow-${t}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.arrow=t,this.updateControls())});for(const t of[-1,1])Ht(`combat-face-${t===1?"right":"left"}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim.facing=t,this.updateControls())});for(const t of["angle","power"])Ht(`combat-${t}`).addEventListener("input",()=>{!this.canAim()||this.draw||(this.aim=jo({...this.aim,angle:Number(Ht("combat-angle").value),power:Number(Ht("combat-power").value)/100}),this.updateControls())});for(const t of Lp)Ht(t.id).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim=nd(this.aim,t.field,t.delta),this.updateControls())});Ht("combat-fire").addEventListener("click",()=>this.fire()),Ht("combat-overview").addEventListener("click",()=>{if(!(this.draw||this.state?.phase!=="planning")){if(!this.publicV2()){this.frame(!0);return}this.overview=!this.overview,this.updateControls(),this.frame(!0)}}),this.canvas.addEventListener("pointerdown",t=>this.pointerDown(t)),this.canvas.addEventListener("pointermove",t=>this.pointerMove(t)),this.canvas.addEventListener("pointerup",t=>{if(!this.active||this.draw?.id!==t.pointerId)return;this.pointerMove(t);const i=this.draw?.valid;this.endDraw(!i),i&&this.fire()});for(const t of["pointercancel","lostpointercapture"])this.canvas.addEventListener(t,i=>{this.active&&this.draw?.id===i.pointerId&&this.cancelInput()})}canvas;scene=new tg;camera=new uo(-24,24,18,-10,.1,150);materials=new Map;terrainGroup=new Kt;belowWorld=new Ke(new es(1,1),new rc({roughness:1,flatShading:!0}));chunks=new Map;terrain=ed();terrainKey="";terrainWorld="";terrainMaterial=new rc({color:"#ffffff",roughness:1,flatShading:!0,vertexColors:!0});reducedMotion=!1;motionQuery=null;onMotionChange=e=>{this.reducedMotion=e.matches,e.matches&&(this.shake=null)};fxGroup=new Kt;particles=new rE(ud);particleBatch=new yE(ud);tint=new G1;homeCamera=new F;installedDigest="";arenaFrame=null;frameBoundary=null;hudMode="inline";overview=!1;frameTargets=null;stageHeight="";flash=new Ke(new Es(1,24),new ui({color:"#fff2c4",transparent:!0,opacity:0,depthWrite:!1}));flashAge=1;shake=null;fxIdentity="";lastHealth=new Map;resync=!1;lastShot=new T1;lastMarker=new Kt;pressureGroup=new Kt;pressureKey="";actorLabels=new Map;labelKeys=new Map;labelWidths=new Map;labelTiers=new Map;labelHeights=new Map;labelTierPx=Zo;labelTierDirty=!1;hudBand={key:"",top:0};labels=document.getElementById("combat-actor-labels");lockAgain=!1;rigs=new Map;state=null;get tuning(){return this.state?.tuning??Bn}get wind(){return this.state?.wind??0}windIndicator=new a0(()=>document.getElementById("scene")?.parentElement);ownId=null;active=!1;draw=null;width=1;height=1;theme="light";biome=Vp();palette=Xp(this.biome);parallax=null;hemi=new hg("#fff4d8","#62765d",2.6);sun=new fg("#fff4d8",3);biomePin=UE(typeof location>"u"?"":location.search);aim={angle:29,power:.62,facing:1};arrow="normal";busy=!1;online=!1;serverNow=()=>Date.now();guide=document.getElementById("combat-guide");dots=Ic(Nn).map(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","circle");return e.setAttribute("r",String(Nn.radiusPx)),e.setAttribute("stroke-width",String(Nn.outlinePx)),this.guide.append(e),e});onShot=()=>{};onDrawing=()=>{};material(e){let t=this.materials.get(e);return t||(t=new rc({color:e,roughness:1,flatShading:!0}),this.materials.set(e,t)),t}box(e,t,i,s,r,a,o,c){const l=new Ke(new pr(r,a,o),this.material(c));return l.position.set(t,i,s),e.add(l),l}beam(e,t,i,s,r){const a=this.box(e,0,0,0,s,1,s,r);return this.updateBeam(a,t,i),a}updateBeam(e,t,i){e.position.copy(t).add(i).multiplyScalar(.5),e.scale.y=t.distanceTo(i),e.quaternion.setFromUnitVectors(jt(0,1),i.clone().sub(t).normalize())}makeArrow(e){const t=new Kt;this.box(t,-.6,0,0,1.2,.045,.045,"#f3dfaa"),this.box(t,-1.08,0,0,.22,.17,.04,"#e9e6c8");const i=new Ke(new ho(.085,.24,4),this.material("#58685d"));return i.rotation.z=-Math.PI/2,i.position.x=-.12,t.add(i),e.add(t),t}makeRig(e){const t=new Kt;this.scene.add(t);const i=this.state?.format==="volley"?this.state.seats.find(h=>h.actorId===this.ownId)?.teamId:null,s=this.state?.format==="volley"?this.state.seats.find(h=>h.actorId===e.id)?.teamId:null,r=this.state?.format==="skirmish"?this.state.seats.find(h=>h.actorId===e.id)?.slotId:null,a=r?cc(r).hex:e.id===this.ownId?"#d19b58":i&&i===s?"#78ad75":"#6e98a0";for(const h of[-.3,.4])this.box(t,h,.47,0,.36,.8,.4,"#38473f");for(const h of[-.36,.46])this.box(t,h,.12,.12,.64,.24,.55,"#4c4938");this.box(t,0,1.53,0,.85,1.5,.6,a),this.box(t,0,1.07,.32,.95,.18,.12,"#6b6845"),this.box(t,0,(rn.head.minY+rn.head.maxY)/2,0,.65,rn.head.maxY-rn.head.minY,.6,"#eac795"),this.box(t,-.13,2.92,-.04,.95,.27,.76,"#4d6e57"),this.box(t,-.26,2.64,-.02,.23,.45,.65,"#4d6e57"),this.box(t,.32,2.65,.32,.08,.08,.07,"#34483c");const o=new Kt;t.add(o);const c=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let h=1;h<c.length;h++)this.beam(o,jt(...c[h-1]),jt(...c[h]),.075,"#78523c");const l=new Xt().setFromPoints([jt(0,-.92),jt(-.3,0),jt(0,.92)]);o.add(new ms(l,new ta({color:"#f1e7bf"})));const u=[this.beam(t,jt(0,2),jt(1,2),.23,"#eac795"),this.beam(t,jt(0,2),jt(1,2),.22,a),this.beam(t,jt(0,2),jt(1,2),.18,"#eac795")],d=this.box(t,0,0,.12,.19,.19,.19,"#eac795");return{root:t,bow:o,string:l,arms:u,hand:d,arrow:this.makeArrow(t),pose:{angle:29,pull:.51},release:0,fx:{lean:0,prevVy:null,landAge:9,landSpeed:0,hitAge:9,feet:null}}}disposeRig(e){this.scene.remove(e.root),e.root.traverse(t=>{if(t instanceof Ke&&t.geometry.dispose(),t instanceof ms){t.geometry.dispose();const i=t.material;Array.isArray(i)||i.dispose()}})}placeBelowWorld(e){const t=bT(e.minY,e.minX+e.width*e.cell/2);this.belowWorld.position.set((t.left+t.right)/2,(t.top+t.bottom)/2,vT),this.belowWorld.scale.set(t.right-t.left,t.top-t.bottom,1)}recolorBelowWorld(){this.belowWorld.material.color.set(MT(this.biome,this.theme))}rebuildTerrain(e,t,i=em){const s=Un(e.version),r=s.chunkSize;if(!t){for(const o of this.chunks.values())this.terrainGroup.remove(o),o.geometry.dispose();this.chunks.clear(),this.placeBelowWorld(e)}const a=t??Array.from({length:s.maxChunks},(o,c)=>`${c%s.chunkColumns}:${Math.floor(c/s.chunkColumns)}`);for(const o of a){const c=this.chunks.get(o);c&&(this.terrainGroup.remove(c),c.geometry.dispose(),this.chunks.delete(o));const[l,u]=o.split(":").map(Number),d=[],h=[];let p=[1,1,1];const g=(m,f,v,b)=>{d.push(...m,...f,...v,...m,...v,...b);for(let M=0;M<6;M++)h.push(...p)},y=(m,f)=>m>=0&&f>=0&&m<e.width&&f<e.height&&e.cells[f*e.width+m]===1;for(let m=u*r;m<Math.min((u+1)*r,e.height);m++){const f=e.minY+m*e.cell,v=e.cell;for(let b=l*r;b<Math.min((l+1)*r,e.width);b++)if(y(b,m)){const M=k=>z1(k,m,e.width,e.height,i),T=Up(f+v/2,e.bedrockY,0,this.palette),R=b,I=M(b);for(;b+1<Math.min((l+1)*r,e.width)&&y(b+1,m)&&M(b+1)===I;)b++;p=xu(I?F1(T):T);const x=e.minX+R*v,E=e.minX+(b+1)*v;g([x,f,.18],[E,f,.18],[E,f+v,.18],[x,f+v,.18]),g([E,f,-.8],[x,f,-.8],[x,f+v,-.8],[E,f+v,-.8]);for(let k=R;k<=b;k++){const C=e.minX+k*v;y(k,m+1)||g([C,f+v,.18],[C+v,f+v,.18],[C+v,f+v,-.8],[C,f+v,-.8]),y(k,m-1)||g([C,f,-.8],[C+v,f,-.8],[C+v,f,.18],[C,f,.18])}y(R-1,m)||g([x,f,-.8],[x,f,.18],[x,f+v,.18],[x,f+v,-.8]),y(b+1,m)||g([E,f,.18],[E,f,-.8],[E,f+v,-.8],[E,f+v,.18])}}if(d.length){const m=new Xt;m.setAttribute("position",new Ot(d,3)),m.setAttribute("color",new Ot(h,3)),m.computeVertexNormals();const f=new Ke(m,this.terrainMaterial);this.chunks.set(o,f),this.terrainGroup.add(f)}}}setSnapshot(e,t,i){const s=CT(e,t),r=this.state;this.state=s,this.ownId=t,this.serverNow=i,this.draw&&(!this.canAim()||!IT(r,s))&&this.cancelInput(),(!r||r.scopeKey!==s.scopeKey)&&(this.lastHealth.clear(),this.cancelInput(),this.aim={angle:29,power:.62,facing:s.actors.find(c=>c.id===t)?.facing??1});const a=s.lockedPlan;a?.kind==="shot"&&a.aim&&(this.aim=jo({angle:a.aim.angle,power:a.aim.power,facing:a.aim.facing}),this.arrow=a.aim.arrow),this.syncBiome(s),this.syncTerrain(),this.syncPressure(),this.syncWind(),this.lastShot.noteLocked(a?.kind==="shot"?a.aim:null,this.serverNow()),this.lastShot.observe(s.scopeKey,t,s.effect??this.ownPendingShot(s,t)),r&&r.worldKey!==s.worldKey&&this.clearFx(),this.noteHealth(s);for(const[c,l]of this.rigs)(r?.worldKey!==s.worldKey||r?.seats.find(u=>u.actorId===c)?.lifeId!==s.seats.find(u=>u.actorId===c)?.lifeId)&&(this.disposeRig(l),this.rigs.delete(c));for(const c of s.actors)this.rigs.has(c.id)||this.rigs.set(c.id,this.makeRig(c));for(const[c,l]of this.rigs)s.actors.some(u=>u.id===c)||(this.disposeRig(l),this.rigs.delete(c));const o=!r||r.worldKey!==s.worldKey;this.publicV2()?xE(this.frameBoundary,this.boundaryOf(s))&&this.frame(!1,o):(o||s.phase==="planning"&&(r.planningKey!==s.planningKey||r.phase!=="planning"||r.actors.length!==s.actors.length))&&this.frame(!1,o),this.updateControls()}ownPendingShot(e,t){const i=e.action,s=e.actors.find(o=>o.id===t);if(e.format==="duel"||!i||i.actorId!==t||!s||e.contactAt===null)return null;const r={arrow:i.arrow,angle:i.angle,power:i.power,facing:i.facing},a=e.contactAt;try{const o=s1(this.terrain,e.actors,t,Zl(s,r,this.tuning,this.wind));return{actionId:i.id,actorId:t,aim:r,point:{x:o.point.x,y:o.point.y},startedAt:a}}catch{return null}}syncPressure(){const e=this.state,t=e?.pressure??null,i=JSON.stringify(t);if(i===this.pressureKey)return;this.pressureKey=i;for(const r of[...this.pressureGroup.children])this.pressureGroup.remove(r),r instanceof ms&&(r.geometry.dispose(),r.material.dispose());if(!t)return;const s=(r,a,o)=>{for(const c of[r,a]){const l=new Xt().setFromPoints([jt(c,-8,.5),jt(c,18,.5)]),u=o?new lg({color:"#f3b747",dashSize:.5,gapSize:.35}):new ta({color:"#70bb9d"}),d=new ms(l,u);d.computeLineDistances(),this.pressureGroup.add(d)}};s(t.minX,t.maxX,!1),t.warning&&s(t.warning.minX,t.warning.maxX,!0)}clearFx(){this.particles.clear(),this.shake=null,this.flashAge=1,this.flash.visible=!1,this.fxIdentity="",this.lastHealth.clear(),this.particleBatch.clear(),this.tint.clear()}dispose(){this.clearFx(),this.lastMarker.traverse(e=>{e instanceof Ke&&(e.geometry.dispose(),e.material.dispose())}),this.motionQuery?.removeEventListener?.("change",this.onMotionChange),this.particleBatch.dispose(),this.flash.geometry.dispose(),this.flash.material.dispose();for(const e of this.chunks.values())e.geometry.dispose();this.chunks.clear(),this.terrainMaterial.dispose(),this.scene.remove(this.belowWorld),this.belowWorld.geometry.dispose(),this.belowWorld.material.dispose();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.parallax?.dispose(),this.parallax=null}colorAt=e=>Up(e,this.terrain.bedrockY,0,this.palette);spawnImpact(e){if(this.particles.capacity=this.reducedMotion?P1:ud,cE(this.particles,e,Lc(Dp(e.x,e.y,e.count)),this.reducedMotion,this.colorAt),!o0(e))return;this.flash.position.set(e.x,e.y,.9),this.flash.scale.setScalar(e.extent*.6),this.flashAge=0;const t=this.camera.position.x,i=(this.camera.right-this.camera.left)/2,s=X1(e,Math.abs(e.x-t),i,this.reducedMotion);s>0&&(this.shake={age:0,amplitude:s})}updateFx(e,t,i){const s=e?.effect;if(s&&s.startedAt!==null&&t>=s.startedAt&&s.identity!==this.fxIdentity&&(this.fxIdentity=s.identity,V1(s.startedAt,t))){const a=W1(s.delta.removed,this.terrain);a&&this.spawnImpact(a)}const r=this.tint.due(t);if(r&&this.rebuildTerrain(this.terrain,r),this.particles.step(i),this.particleBatch.update(this.particles.items),this.flashAge<1){this.flashAge+=i/.18;const a=this.flash.material;this.flash.visible=this.flashAge<1,a.opacity=Math.max(0,.85*(1-this.flashAge))}this.shake&&(this.shake.age+=i,this.shake.age>=_u&&(this.shake=null))}noteHealth(e){if(this.online&&!this.resync)for(const t of sE(this.lastHealth,e.actors)){const i=this.rigs.get(t);i&&(i.fx.hitAge=0)}this.online&&(this.resync=!1),this.lastHealth=new Map(e.actors.map(t=>[t.id,t.health]))}actorFx(e,t,i,s,r,a,o){const c=e.fx;c.hitAge+=r,c.landAge+=r,nE(c.hitAge)&&c.feet&&!o?i=c.feet:c.feet={x:i.x,y:i.y};const l=s?.vy??0,u=s?Z1(c.prevVy,l):0;u>0&&!this.reducedMotion&&(c.landAge=0,c.landSpeed=u),u>0&&lE(this.particles,i.x,i.y,u,Lc(Dp(i.x,i.y,Math.round(u*10))),this.reducedMotion),c.prevVy=s?l:null,c.lean=J1(c.lean,s?K1(s.vx,l):0,r);const d=this.reducedMotion||o,h=d?0:c.lean+iE(c.hitAge,a,!1);return e.root.rotation.z=Math.abs(h)<1e-4?0:h,e.root.scale.y=d?1:eE(c.landAge,c.landSpeed).sy,{feet:i}}setLockAgain(e){this.lockAgain=e,this.updateControls()}syncTerrain(){if(!this.state)return;const e=this.state,t=e.effect;let i=`${e.worldKey}:${e.terrain.version}:${e.terrain.revision}`;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt&&(i+=`:${t.identity}`),i===this.terrainKey)return;let r=Kg(e.terrain),a=em;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt){r={...r,cells:r.cells.slice()};for(const c of t.delta.removed)r.cells[c]=0;this.serverNow()-t.startedAt<kp&&(a=new Set(t.delta.removed))}if(this.terrainWorld!==e.worldKey||this.terrain.version!==r.version)this.rebuildTerrain(r,void 0,a);else{const c=Un(r.version),l=[];for(let d=0;d<r.cells.length;d++)r.cells[d]!==this.terrain.cells[d]&&l.push(d);const u=bg(l,r.width,c.chunkSize);this.rebuildTerrain(r,Mg([...u,...this.tint.release()],c.chunkColumns,c.chunkRows),a)}{const c=Un(r.version);this.tint.set(H1(a,r.width,c.chunkSize,c.chunkColumns,c.chunkRows),t&&t.startedAt!==null?t.startedAt+kp:0)}this.terrain=r,this.terrainKey=i,this.terrainWorld=e.worldKey,this.installedDigest=A1(r)}clearSnapshot(){this.cancelInput(),this.lastShot.clear(),this.lastMarker.visible=!1,this.state=null,this.windIndicator.hide(),this.ownId=null,this.lockAgain=!1,this.labels.replaceChildren(),this.actorLabels.clear(),this.labelKeys.clear(),this.labelWidths.clear(),this.labelHeights.clear(),this.labelTiers.clear(),this.labelTierPx=Zo,this.labelTierDirty=!1,this.syncPressure();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.terrainKey="",this.terrainWorld="",this.installedDigest="",this.arenaFrame=null,this.frameBoundary=null,this.frameTargets=null,this.overview=!1,this.setStageHeight(null),this.clearFx(),this.applyBiome(this.basicBiome()),this.rebuildTerrain(ed()),this.terrain=ed(),this.frame(),this.updateControls()}setTransport(e,t){e||(this.lastHealth.clear(),this.resync=!0),this.online=e,this.busy=t,this.canAim()||this.cancelInput(),this.updateControls()}syncWind(){if(!this.active||!this.state){this.windIndicator.hide();return}this.windIndicator.update(this.state.wind,Ts(this.state.tuning))}activate(){this.active=!0,this.syncWind(),this.updateControls(),this.frame()}deactivate(){this.cancelInput(),this.active=!1,this.setStageHeight(null),this.windIndicator.hide(),this.guide.style.visibility="hidden",this.labels.replaceChildren(),this.actorLabels.clear(),this.labelKeys.clear(),this.labelWidths.clear(),this.labelHeights.clear(),this.labelTiers.clear(),this.labelTierPx=Zo,this.labelTierDirty=!1}setTheme(e){this.theme=e,this.terrainMaterial.color.set(e==="dark"?"#8c8c8c":"#ffffff"),this.recolorBelowWorld(),this.parallax?.setDark(e==="dark")}basicBiome(){return this.biomePin?Wi.latest(this.biomePin):Vp()}syncBiome(e){const t=e.format==="skirmish"&&Un(e.terrain.version).version==="arena-2";this.applyBiome(t?NE(e.worldKey,{pin:this.biomePin,preferred:dT(e.layoutTemplate)}):this.basicBiome())&&(this.terrainWorld="")}applyBiome(e){if(e===this.biome&&this.parallax)return!1;this.biome=e,this.palette=Xp(e),this.recolorBelowWorld(),this.parallax?.dispose(),this.parallax=new _T(e,this.theme==="dark"),this.scene.add(this.parallax.group),this.parallax.anchor(this.camera);const t=e.light;this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.sun.color.set(t.sun),this.sun.intensity=t.sunIntensity;const i=e.ui??{},s=(r,a,o)=>{o?r.style.setProperty?.(a,o):r.style.removeProperty?.(a)};return s(this.labels,"--label-ink",i.labelInk),s(this.labels,"--label-bg",i.labelBg),s(this.guide,"--guide-fill",i.guideFill),s(this.guide,"--guide-stroke",i.guideStroke),!0}resize(e,t){this.cancelInput(),this.width=e,this.height=t,this.guide.setAttribute("viewBox",`0 0 ${e} ${t}`),this.frame()}setHudMode(e){e!==this.hudMode&&(this.hudMode=e,this.state&&this.publicV2()&&this.frame())}publicV2(){return this.state?.format==="skirmish"&&Un(this.terrain.version).version==="arena-2"}boundaryOf(e){const i=gE(this.publicBounds(e),this.width,this.height,js(this.width,this.height,this.hudMode),rn)?e.phase==="planning"||!this.frameBoundary?.focus?e.planningKey:this.frameBoundary.focus:"";return{worldKey:e.worldKey,profile:this.terrain.version,epoch:e.epoch,width:this.width,height:this.height,mode:this.hudMode,focus:i}}publicBounds(e){return(!this.arenaFrame||this.arenaFrame.worldKey!==e.worldKey)&&(this.arenaFrame={worldKey:e.worldKey,bounds:dE(Un(this.terrain.version).bounds,e.actors.filter(t=>!t.eliminated).map(t=>({x:t.feet.x,y:t.feet.y})),rn,Bp(this.tuning,rn.nock.x,Nn))}),this.arenaFrame.bounds}setStageHeight(e){const t=e===null?"":`${e}px`;if(t===this.stageHeight)return;this.stageHeight=t;const i=this.canvas.parentElement?.style;i&&(t?i.setProperty?.("--public-stage-h",t):i.removeProperty?.("--public-stage-h"))}frameArena(e){const t=this.publicBounds(e),i=js(this.width,this.height,this.hudMode),s=this.boundaryOf(e).focus??"";if(!s)this.frameTargets=null;else if(this.frameTargets?.key!==s){const o=e.actors.filter(u=>!u.eliminated),c=o.find(u=>u.id===this.ownId),l=u=>({x:u.feet.x,y:u.feet.y});this.frameTargets={key:s,targets:fE(c?l(c):null,o.filter(u=>u!==c).map(l),rn,Bp(this.tuning,rn.nock.x,Nn))}}const r=this.frameTargets?.targets??[],a=mE(t,this.width,this.height,i,rn,r,this.overview);this.setStageHeight(this.hudMode==="inline"?pE(t,this.width,this.hudMode,rn,r):null),Object.assign(this.camera,{left:-a.halfWidth,right:a.halfWidth,top:a.halfHeight,bottom:-a.halfHeight}),this.camera.position.set(a.centerX,a.centerY,55),this.camera.lookAt(a.centerX,a.centerY,0),this.camera.updateProjectionMatrix(),this.parallax?.anchor(this.camera),this.frameBoundary=this.boundaryOf(e)}frame(e=!1,t=!1){if(this.draw)return;if(this.state&&this.publicV2()){this.frameArena(this.state);return}if(this.arenaFrame=null,this.frameBoundary=null,this.frameTargets=null,this.setStageHeight(null),!t&&this.state&&this.state.phase!=="planning"&&this.state.state==="active")return;const i=this.state?.actors??[],s=rn.nock.x+(this.tuning.shotMinSpeed+this.tuning.shotExtraSpeed)*(Nn.start+Nn.duration)+1,r=e||!i.length?-32:Math.min(...i.map(m=>m.feet.x))-s,a=e||!i.length?32:Math.max(...i.map(m=>m.feet.x))+s,o=e?-8:Math.min(0,...i.map(m=>m.feet.y))-2,c=e?18:Math.max(9,...i.map(m=>m.feet.y+rn.height+4)),l=this.state?.sharedPlanning?Math.min(.25,2*(Nn.radiusPx+Nn.outlinePx)/this.width):0,u=this.width/this.height,d=Math.max(a-r,(c-o)*u)/(1-l),h=d/u,p=Un(this.terrain.version).bounds,g=Th(p.minX,p.maxX,d,(r+a)/2),y=(o+c)/2;Object.assign(this.camera,{left:-d/2,right:d/2,top:h/2,bottom:-h/2}),this.camera.position.set(g,y,55),this.camera.lookAt(g,y,0),this.camera.updateProjectionMatrix(),this.parallax?.anchor(this.camera)}canAim(){return this.active&&this.online&&!this.busy&&!!this.state?.seat.canAct&&this.state.deadlineAt!==null&&this.serverNow()<this.state.deadlineAt}get hasRoom(){return this.state!==null}get drawing(){return!!this.draw}cancelInput(){this.endDraw(!0)}endDraw(e){if(!this.draw)return;const t=this.draw;this.draw=null,e&&(this.aim=t.previous),this.canvas.hasPointerCapture(t.id)&&this.canvas.releasePointerCapture(t.id),Ht("combat-drag-marker").hidden=!0,this.onDrawing(!1),this.updateControls()}pointerDown(e){if(!this.active)return;if(this.draw){e.pointerId!==this.draw.id&&this.cancelInput();return}if(!this.canAim()||!e.isPrimary||e.button!==0)return;e.preventDefault();const t=this.canvas.getBoundingClientRect();this.draw={id:e.pointerId,x:e.clientX,y:e.clientY,width:t.width,height:t.height,previous:{...this.aim},valid:!1},this.canvas.setPointerCapture(e.pointerId),this.canvas.focus({preventScroll:!0});const i=Ht("combat-drag-marker");i.style.left=`${e.clientX-t.left}px`,i.style.top=`${e.clientY-t.top}px`,i.hidden=!1,this.onDrawing(!0),this.updateControls()}pointerMove(e){if(!this.active||this.draw?.id!==e.pointerId)return;const{x:t,y:i,width:s,height:r}=this.draw,a=e.clientX-t,o=e.clientY-i,c=this.state?.format==="skirmish"?WS(a,o,s,r):VS(a,o,s,r,this.aim.facing);this.draw.valid=!!c,c&&(this.aim=jo({facing:this.aim.facing,...c})),this.updateControls()}keydown(e){if(this.active){if(e.code==="Escape"){this.cancelInput();return}!this.canAim()||this.draw||(e.code==="Space"?(e.preventDefault(),e.repeat||this.fire()):["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.aim=nd(nd(this.aim,"angle",e.code==="ArrowLeft"?-1:e.code==="ArrowRight"?1:0),"power",e.code==="ArrowUp"?2:e.code==="ArrowDown"?-2:0),this.updateControls()))}}fire(){if(!this.canAim()||this.draw||this.arrow==="bomb"&&!this.state?.seat.bombReady)return;const e=jo(this.aim);this.onShot(this.arrow,e)}updateControls(){Ht("combat-fire").textContent=this.state?.sharedPlanning?this.lockAgain?"Lock again":"Lock arrow":"Fire arrow";const e=!this.canAim()||!!this.draw;for(const s of["fire","angle","power","face-left","face-right","arrow-normal","arrow-bomb","arrow-teleport",...Lp.map(r=>r.id.slice(7))])Ht(`combat-${s}`).disabled=e||s==="arrow-bomb"&&!this.state?.seat.bombReady;for(const s of["normal","bomb","teleport"])Ht(`combat-arrow-${s}`).setAttribute("aria-pressed",String(this.arrow===s));for(const s of[-1,1])Ht(`combat-face-${s===1?"right":"left"}`).setAttribute("aria-pressed",String(this.aim.facing===s));Ht("combat-angle").value=S1(this.aim.angle),Ht("combat-power").value=w1(this.aim.power),Ht("combat-angle-value").textContent=s0(this.aim.angle),Ht("combat-power-value").textContent=r0(this.aim.power);const t=this.lastShot.shot?.aim,i=Ht("combat-last-shot");i.hidden=!t,i.textContent=t?E1(t):"",Ht("combat-bomb-status").textContent=this.state?.seat.bombReady?"Bomb ready":"Bomb reloads after your next personal opportunity.",Ht("combat-overview").disabled=!!this.draw||this.state?.phase!=="planning",this.syncOverviewPressed()}syncOverviewPressed(){const e=Ht("combat-overview");this.publicV2()?e.setAttribute("aria-pressed",String(this.overview)):e.removeAttribute("aria-pressed")}labelView(){return!this.publicV2()||!(this.width>0)||!(this.height>0)?null:{width:this.width,height:this.height,minTop:this.labelMinTop(),maxBottom:this.height-js(this.width,this.height,this.hudMode).bottom}}labelMinTop(){const e=this.hudBottom();return this.hudMode==="expanded"&&this.width>0&&this.height>0?Math.max(e,js(this.width,this.height,"expanded").top):e}hudBottom(){const e=document.getElementById("arena-hud");if(!e||e.hidden||typeof this.labels.getBoundingClientRect!="function")return 0;const t=["arena-priority","arena-clock"].map(s=>document.getElementById(s)),i=`${this.width}x${this.height}|${t.map(s=>s?.childElementCount??0).join()}`;if(this.hudBand.key!==i){const s=this.labels.getBoundingClientRect().top;let r=0;for(const a of t){if(!a||a.hidden||typeof a.getBoundingClientRect!="function")continue;const o=a.getBoundingClientRect();o.height>0&&(r=Math.max(r,o.bottom-s))}this.hudBand={key:i,top:r}}return this.hudBand.top}render(e,t){if(!this.active)return;const i=this.state,s=this.serverNow();this.syncTerrain(),this.updateFx(i,s,t);let r;const a=i?.effect&&i.effect.startedAt!==null?XS(i.effect.motion,i.effect.startedAt,s):null;for(const b of i?.actors??[]){const M=this.rigs.get(b.id),T=a?.find(B=>B.actorId===b.id)?.feet??b.feet,R=i?.action?.actorId===b.id?i.action:null,I=b.id===this.ownId&&!R,x=R??(I?this.aim:{angle:29,power:.62,facing:b.facing}),E=this.actorFx(M,b,T,i?.effect&&i.effect.startedAt!==null?j1(i.effect.motion,i.effect.startedAt,s,b.id):null,t,x.facing,!!R);M.root.position.set(E.feet.x,E.feet.y,0),M.root.scale.x=x.facing,M.root.visible=!b.eliminated,I&&(r=b),M.pose=e0(M.pose,{angle:x.angle,pull:.2+x.power*.5},t),M.release+=((R?1:0)-M.release)*(1-Math.exp(-18*t));const k=Cc(M.pose,M.release),C=(B,G=.12)=>jt(B.x+7.72,B.y-.08,G),U=M.pose.angle*Math.PI/180;M.bow.position.copy(C(k.bow)),M.bow.rotation.z=U;const z=M.string.attributes.position;z.setXYZ(1,(k.nock.x-k.bow.x)*Math.cos(U)+(k.nock.y-k.bow.y)*Math.sin(U),0,0),z.needsUpdate=!0,this.updateBeam(M.arms[0],jt(.02,2.22,.42),C({x:k.bow.x+Math.cos(U)*.37,y:k.bow.y+Math.sin(U)*.37})),this.updateBeam(M.arms[1],jt(-.23,2.22,.45),C(k.elbow,.28)),this.updateBeam(M.arms[2],C(k.elbow,.28),C(k.hand)),M.hand.position.copy(C(k.hand));const W=C({x:k.nock.x+Math.cos(U)*1.2,y:k.nock.y+Math.sin(U)*1.2});if(M.arrow.position.copy(W),M.arrow.rotation.z=U,M.arrow.visible=!0,R&&i?.launchAt!==null&&i?.launchAt!==void 0&&s>=i.launchAt){const B=Zl(b,x,this.tuning,this.wind),G=Math.max(0,(Math.min(s,i.contactAt??1/0)-i.launchAt)/1e3),O={tip:{x:b.feet.x+W.x*x.facing,y:b.feet.y+W.y},angle:x.facing===1?U:Math.PI-U},Z=PT(i,R);M.flightId!==Z&&(M.flightId=Z,M.held=O);const K=jr(B,G,M.held??O);M.arrow.position.set((K.position.x-T.x)*x.facing,K.position.y-T.y,.12),M.arrow.rotation.z=x.facing===1?K.angle:Math.PI-K.angle,M.arrow.visible=i.phase!=="settling"}}if(this.guide.style.visibility=r&&this.canAim()&&(!this.draw||this.draw.valid)?"visible":"hidden",r){const b=this.rigs.get(r.id),M=Zl(r,this.aim,this.tuning,this.wind),T=b.pose.angle*Math.PI/180,R=Cc(b.pose),I={tip:{x:r.feet.x+(R.nock.x+7.72+Math.cos(T)*1.2)*this.aim.facing,y:r.feet.y+R.nock.y-.08+Math.sin(T)*1.2},angle:this.aim.facing===1?T:Math.PI-T};Ic(Nn).forEach((x,E)=>{const k=jr(M,x,I).position,C=jt(k.x,k.y,.1).project(this.camera);this.dots[E].setAttribute("cx",String((C.x+1)*this.width/2)),this.dots[E].setAttribute("cy",String((1-C.y)*this.height/2))})}for(const[b,M]of this.actorLabels)i?.actors.some(T=>T.id===b)||(M.remove(),this.actorLabels.delete(b),this.labelKeys.delete(b),this.labelWidths.delete(b),this.labelHeights.delete(b),this.labelTiers.delete(b),this.labelTierDirty=!0);const o=this.width<640,c=i?.sharedPlanning?[...new Set(i.seats.map(b=>b.teamId).filter(b=>b!==null))]:[],l=[],u=this.labelView();if((i?.actors??[]).forEach((b,M)=>{let T=this.actorLabels.get(b.id);T||(T=document.createElement("span"),this.actorLabels.set(b.id,T),this.labels.append(T));const R=a?.find(K=>K.actorId===b.id)?.feet??b.feet,I=jt(R.x,R.y+rn.height+.4,.2).project(this.camera),x=i.seats.find(K=>K.actorId===b.id),E=x&&"teamId"in x&&typeof x.teamId=="string"?` · ${String.fromCharCode(65+c.indexOf(x.teamId))}`:"",k=b.id===this.ownId,C=x?.slotId?cc(x.slotId).symbol:"",U=`${k?"You":x?.label??`#${M+1}`}${E}${o?"":` · ${b.eliminated?"out":b.health}`}`,z=(1-I.y)*this.height/2,W=u?Qp((I.x+1)*this.width/2,z,0,u).hint:"",B=`${k}|${C}|${U}|${W}`;if(this.labelKeys.get(b.id)!==B){if(T.className="combat-actor-label",T.dataset.actorId=b.id,T.dataset.own=String(k),T.style.zIndex=k?"1":"",x?.slotId?(T.style.borderLeft=`5px solid ${cc(x.slotId).hex}`,T.dataset.slot=x.slotId,T.dataset.symbol=C):(T.style.borderLeft="",delete T.dataset.slot,delete T.dataset.symbol),W){const he=document.createElement("span");he.className="combat-label-hint",he.textContent=W,T.replaceChildren(U,he)}else T.textContent=U;delete T.dataset.mark,T.dataset.offscreen="false";const K=T.offsetWidth;this.labelWidths.set(b.id,K),this.labelHeights.set(b.id,T.offsetHeight),this.labelTierDirty=!0,K>0&&this.labelKeys.set(b.id,B)}const G=u?Qp((I.x+1)*this.width/2,z,this.labelHeights.get(b.id)??0,u):null,O=G?.y??z;G?.mark?(T.dataset.mark=G.mark,T.dataset.edge=G.edge??"",T.dataset.offscreen="true"):(delete T.dataset.mark,delete T.dataset.edge,T.dataset.offscreen="false");const Z={id:b.id,x:(I.x+1)*this.width/2,width:this.labelWidths.get(b.id)??0,y:O,height:this.labelHeights.get(b.id)??0,stack:G?.pin==="top"?"down":"up"};(k?l.unshift.bind(l):l.push.bind(l))({id:b.id,label:T,y:O,box:Z})}),this.labelTierDirty){const b=Math.max(0,...this.labelHeights.values());this.labelTierPx=b>0?b+LT:Zo,this.labelTierDirty=!1}const d=this.labelTierPx,h=TT(l.map(b=>b.box),this.labelTiers,{viewWidth:this.width,tierPx:d,minTop:u?.minTop??this.hudBottom(),maxBottom:u?.maxBottom});this.labelTiers=new Map([...h].map(([b,M])=>[b,M.tier]));for(const b of l){const M=h.get(b.id);b.label.style.left=`${M.x}px`,b.label.style.top=`${b.y+(b.box.stack==="down"?1:-1)*M.tier*d}px`}const p=this.lastShot.shot;this.lastMarker.visible=!!p&&this.lastShot.markerVisible(s),p&&this.lastMarker.position.set(p.impact.x,p.impact.y,.7),e.setClearColor(this.theme==="dark"?"#202f36":"#dce8df");const g=this.shake?Y1(this.shake.age,this.shake.amplitude):null,y=this.homeCamera.copy(this.camera.position);g&&this.camera.position.set(y.x+g.x,y.y+g.y,y.z),this.parallax?.update(this.camera,performance.now()/1e3,this.reducedMotion),e.render(this.scene,this.camera),this.camera.position.copy(y);const m=this.ownId?this.rigs.get(this.ownId):null,f=i?.format==="skirmish"&&i.action?.actorId===this.ownId?i.action:null,v=m?{actorId:this.ownId,lifeId:i?.seat.lifeId,mirror:m.root.scale.x,bow:m.bow.getWorldPosition(jt(0,0)),arrow:{...m.arrow.getWorldPosition(jt(0,0)),visible:m.root.visible&&m.arrow.visible},action:f?{id:f.id,actorId:f.actorId,lifeId:f.lifeId,epoch:f.epoch,roundId:f.roundId,at:s,launchAt:i?.launchAt,contactAt:i?.contactAt}:null}:null;this.canvas.dataset.combat=JSON.stringify({revision:i?.revision,format:i?.format,epoch:i?.epoch,worldKey:i?.worldKey,state:i?.state,phase:i?.phase,actors:i?.actors,terrainRevision:i?.terrain.revision,terrainDigest:this.installedDigest,ownId:this.ownId,aim:this.aim,drawing:!!this.draw,view:[this.camera.left,this.camera.right,this.camera.top,this.camera.bottom],chunks:this.chunks.size,renderedOwn:v})}}const fd=Object.freeze({commentChars:500,maxRound:1e5,idChars:80}),eo=Object.freeze([{id:"arrowDamage",label:"Arrow damage"},{id:"bombDamage",label:"Bomb damage and reach"},{id:"speedOfDeath",label:"How fast you died"},{id:"knockback",label:"Knockback"},{id:"groundDestruction",label:"Ground destruction"},{id:"aimingDifficulty",label:"Aiming difficulty"}]),tm=Object.freeze(["too-little","just-right","too-much"]),NT=Object.freeze({"too-little":"Too little","just-right":"Just right","too-much":"Too much"});function x0(n){const e=Object.fromEntries(eo.map(t=>[t.id,{tooLittle:0,justRight:0,tooMuch:0}]));for(const t of n)for(const i of eo){const s=t[i.id];s==="too-little"?e[i.id].tooLittle++:s==="just-right"?e[i.id].justRight++:s==="too-much"&&e[i.id].tooMuch++}return e}const UT=Object.freeze({arrowDamage:{tooMuch:[{field:"directBodyDamage",delta:-10},{field:"directHeadDamage",delta:-10}],tooLittle:[{field:"directBodyDamage",delta:10},{field:"directHeadDamage",delta:10}]},bombDamage:{tooMuch:[{field:"blastMidDamage",delta:-2},{field:"blastFarDamage",delta:-1},{field:"bombRadius",delta:-.25}],tooLittle:[{field:"blastMidDamage",delta:2},{field:"blastFarDamage",delta:1},{field:"bombRadius",delta:.25}]},speedOfDeath:{tooMuch:[{field:"blastNearDamage",delta:-5},{field:"impactThreshold",delta:1}],tooLittle:[{field:"blastNearDamage",delta:5},{field:"impactThreshold",delta:-1}]},knockback:{tooMuch:[{field:"directKnockbackHorizontal",delta:-1},{field:"directKnockbackUp",delta:-1},{field:"bombHorizontalImpulse",delta:-1},{field:"bombUpImpulse",delta:-1}],tooLittle:[{field:"directKnockbackHorizontal",delta:1},{field:"directKnockbackUp",delta:1},{field:"bombHorizontalImpulse",delta:1},{field:"bombUpImpulse",delta:1}]},groundDestruction:{tooMuch:[{field:"chipRadius",delta:-.25},{field:"craterRadius",delta:-.25}],tooLittle:[{field:"chipRadius",delta:.25},{field:"craterRadius",delta:.25}]},aimingDifficulty:{tooMuch:[{field:"shotGravity",delta:-1}],tooLittle:[{field:"shotGravity",delta:1}]}}),ka=Object.keys(po),kT=(n,e)=>ka.every(t=>n[t]===e[t]),OT=n=>Math.round(n*1e4)/1e4;function FT(n,e){const t=po[n],i=Math.min(t.max,Math.max(t.min,OT(e)));return t.integer?Math.round(i):i}function BT(n){const e=Object.hasOwn(pi,n.id)?pi[n.id]:void 0;return e&&kT(e,n)?e:Bn}const zT=3;function HT(n,e,t){const i=x0(e),s=Object.fromEntries(ka.map(p=>[p,n[p]])),r=[],a=new Map;for(const p of eo){const g=i[p.id],y=g.tooLittle+g.justRight+g.tooMuch,m=g.tooMuch-g.tooLittle;if(m===0||Math.abs(m)*2<y||t!==void 0&&t>=zT&&y<2)continue;const f=m>0?"too-much":"too-little";r.push({question:p.id,direction:f});for(const v of UT[p.id][m>0?"tooMuch":"tooLittle"])s[v.field]=FT(v.field,s[v.field]+v.delta),a.has(v.field)||a.set(v.field,p.id)}s.blastMidDamage=Math.min(s.blastMidDamage,s.blastNearDamage),s.blastFarDamage=Math.min(s.blastFarDamage,s.blastMidDamage),s.shotMinSpeed+s.shotExtraSpeed>40&&(s.shotExtraSpeed=40-s.shotMinSpeed);const o={...s,id:"suggested"},c=ka.filter(p=>o[p]!==n[p]).map(p=>({field:p,from:n[p],to:o[p],question:a.get(p)}));if(!c.length)return{reasons:r,changes:c,override:null,profile:n};Qc(o);const l=BT(n),u={base:l.id};for(const p of ka)o[p]!==l[p]&&(u[p]=o[p]);const d=JSON.stringify(u),h=Cg(d);if(!ka.every(p=>h[p]===o[p]))throw new RangeError("Suggested tuning did not round-trip.");return{reasons:r,changes:c,override:d,profile:h}}const Nc=n=>n.replace(/([A-Z])/g," $1").toLowerCase().replace(/^./,e=>e.toUpperCase()),Tu=n=>({key:n,label:Nc(n),bound:n==="windMax"?Ag:po[n]}),GT=Object.freeze(["chipRadius","windMax"].map(Tu)),VT=Object.freeze(_a.filter(n=>n!=="chipRadius"&&n!=="windMax").map(Tu)),_0=Object.freeze(Object.keys(pi)),hi=(n,e)=>e==="windMax"?Ts(n):n[e];function WT(n){let e=Bn.id,t=1/0,i=1/0;for(const s of _0){const r=pi[s];let a=0,o=0;for(const c of _a){const l=Math.abs(hi(r,c)-hi(n,c));if(l===0)continue;const{min:u,max:d}=Tu(c).bound;a++,o+=d>u?l/(d-u):0}(a<t||a===t&&o<i)&&(e=s,t=a,i=o)}return e}function y0(n){const e=Object.hasOwn(pi,n)?pi[n]:Bn;return Object.fromEntries(_a.map(t=>[t,hi(e,t)]))}function XT(n,e){const t=y0(n),i={};for(const s of _a){const r=(e[s]??"").trim();if(r==="")throw new Error(`Enter a value for ${Nc(s).toLowerCase()}.`);const a=Number(r);if(!Number.isFinite(a))throw new Error(`${Nc(s)} must be a number.`);a!==t[s]&&(i[s]=a)}try{ou(n,i)}catch(s){throw new Error(s instanceof RangeError?s.message.replace(/^Invalid tuning profile: /,""):"Those settings are not valid.")}return{kind:"tuning",preset:n,overrides:i}}function $T(n){return`${n.id.startsWith("custom-")?"Custom settings":`Preset ${n.id}`} · chip radius ${hi(n,"chipRadius")} · wind ${hi(n,"windMax")===0?"calm":`up to ${hi(n,"windMax")}`}`}const nm=n=>wc(el(n));let v0=null;const b0="archery.suggestedTuning";function YT(n,e){v0=n;try{e?.setItem(b0,n??"")}catch{}}function im(n){let e=v0;if(e===null)try{e=n?.getItem(b0)??null}catch{e=null}if(!e)return null;try{const t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t))return null;const{base:i,...s}=t;return typeof i!="string"?null:(ou(i,s),{kind:"tuning",preset:i,overrides:s})}catch{return null}}function jT(n,e,t){return n!==null&&n.roomId===e.roomId&&n.digest!==e.digest}function sm(n,e,t,i){return i?t?e:null:n}function rm(n,e,t){return n==="skip"?"Finishing the last action…":n==="error"?"":e!==null&&e===t?"No changes":"Saved"}function qT(n,e){let t;try{t=ou(n.preset,n.overrides)}catch{return null}const i=_a.filter(r=>hi(t,r)!==hi(e,r));return i.length?`Apply suggestion: ${i.slice(0,3).map(r=>r==="windMax"?`wind up to ${hi(t,r)}`:`${Nc(r).toLowerCase()} ${hi(t,r)}`).join(", ")}${i.length>3?` +${i.length-3} more`:""}`:null}const KT=1e4,JT=30,ZT=8e3,QT=1500,am="archery.feedback.v1.",Ce=n=>document.getElementById(n),zi=(n,e="",t="")=>{const i=document.createElement(n);return e&&(i.textContent=e),t&&(i.className=t),i};function eA(){try{return sessionStorage}catch{return null}}class Vr{guest;store;target=null;arena=null;finished=null;tuning=Bn;answers={};rating=null;sent=!1;lastPrivateId=null;pollTimer=null;polls=0;seenRounds=new Map;roundTimer=null;roundTarget=null;buttons=new Map;override=null;constructor(e,t=eA()){this.guest=e,this.store=t,this.buildQuestions(),Ce("feedback-form").addEventListener("submit",s=>{s.preventDefault(),this.sendSurvey()}),Ce("feedback-skip").addEventListener("click",()=>this.closeSheet(!0)),Ce("feedback-close").addEventListener("click",()=>this.closeSheet(this.target?.type!=="public")),Ce("feedback-reopen").addEventListener("click",()=>{this.finished&&this.openSheet(this.finished,!0)}),Ce("feedback-copy").addEventListener("click",()=>{this.copyOverride()}),Ce("skirmish-feedback").addEventListener("click",()=>{this.arena&&this.openPublic(this.arena,!0)});const i=Ce("feedback-comment");i.maxLength=fd.commentChars,i.addEventListener("input",()=>{Ce("feedback-count").textContent=`${i.value.length}/${fd.commentChars}`});for(const s of["up","down"])Ce(`feedback-round-${s}`).addEventListener("click",()=>{this.sendRound(s)});Ce("feedback-round-dismiss").addEventListener("click",()=>this.hideRound())}static key(e){return e.type==="private"?e.roomId:`public:${e.arenaId}`}recorded(e){try{return this.store?.getItem(am+e)??null}catch{return null}}record(e,t){try{(t==="sent"||this.recorded(e)!=="sent")&&this.store?.setItem(am+e,t)}catch{}}buildQuestions(){const e=Ce("feedback-questions");for(const i of eo){const s=zi("div","","feedback-question");s.setAttribute("role","group"),s.setAttribute("aria-label",i.label),s.append(zi("p",i.label,"feedback-label"));const r=zi("div","","feedback-choices");for(const a of tm){const o=zi("button",NT[a]);o.type="button",o.setAttribute("aria-pressed","false"),o.dataset.question=i.id,o.dataset.answer=a,o.addEventListener("click",()=>this.choose(i.id,a)),this.buttons.set(`${i.id}:${a}`,o),r.append(o)}s.append(r),e.append(s)}const t=Ce("feedback-rating");for(let i=1;i<=5;i++){const s=zi("button",String(i));s.type="button",s.setAttribute("aria-pressed","false"),s.setAttribute("aria-label",`${i} out of 5`),s.addEventListener("click",()=>{this.rating=this.rating===i?null:i;for(const[r,a]of[...t.children].entries())a.setAttribute("aria-pressed",String(this.rating===r+1))}),t.append(s)}}choose(e,t){this.answers[e]===t?delete this.answers[e]:this.answers[e]=t;for(const i of tm)this.buttons.get(`${e}:${i}`).setAttribute("aria-pressed",String(this.answers[e]===i))}syncPrivate(e){const t=e?.roomId??null;if(t!==this.lastPrivateId){for(const i of[...this.seenRounds.keys()])i.startsWith("private:")&&this.seenRounds.delete(i);this.lastPrivateId=t}!e||e.state.state!=="finished"?(this.target?.type==="private"&&this.closeSheet(!1),this.finished=null,this.updateReopen()):this.finished?.roomId!==e.roomId?(this.finished=e,this.recorded(e.roomId)===null?this.openSheet(e,!1):this.updateReopen()):this.finished=e,e&&e.state.state==="active"&&this.observeRounds(`private:${e.roomId}:${e.state.epoch??0}`,{type:"private",roomId:e.roomId},e.state.epoch??0,e.state.completedRounds)}syncPublic(e){if(!e){for(const i of[...this.seenRounds.keys()])i.startsWith("public:")&&this.seenRounds.delete(i);this.arena=null,this.target?.type==="public"&&this.closeSheet(!1),this.updatePublicButton();return}!(this.arena?.arenaId===e.arenaId&&this.arena.memberId===e.memberId)&&this.target?.type==="public"&&this.closeSheet(!1),this.arena={type:"public",arenaId:e.arenaId,memberId:e.memberId},this.updatePublicButton(),this.observeRounds(`public:${e.arenaId}:${e.epoch}`,{type:"public",arenaId:e.arenaId,memberId:e.memberId},e.epoch,e.completedRounds)}observeRounds(e,t,i,s){if(s===void 0||!Number.isSafeInteger(s))return;const r=this.seenRounds.get(e);this.seenRounds.set(e,s),r!==void 0&&s>r&&s>0&&this.offerRound(t,i,s),this.seenRounds.size>16&&this.seenRounds.delete(this.seenRounds.keys().next().value)}updateReopen(){Ce("feedback-reopen").hidden=this.finished===null||this.target!==null}updatePublicButton(){Ce("skirmish-feedback").hidden=!this.arena||this.target!==null||this.recorded(Vr.key(this.arena))!==null}openPublic(e,t){this.resetSheet(e,Bn,!1),Ce("feedback-title").textContent="How is the arena playing?",Ce("feedback-summary").hidden=!0,Ce("feedback-override-box").hidden=!0,this.override=null,this.stopPolling(),this.updateReopen(),this.updatePublicButton(),t&&this.buttons.values().next().value?.focus?.()}openSheet(e,t){this.resetSheet({type:"private",roomId:e.roomId},e.state.tuning??Bn,t),Ce("feedback-title").textContent="How did that match feel?",Ce("feedback-summary").hidden=!1,this.renderSummary([],0),this.updateReopen(),this.updatePublicButton(),this.stopPolling(),this.polls=0,this.refresh(),this.pollTimer=setInterval(()=>{++this.polls>JT?this.stopPolling():this.refresh()},KT)}resetSheet(e,t,i){this.target=e,this.tuning=t,this.answers={},this.rating=null,this.sent=this.recorded(Vr.key(e))==="sent";for(const r of this.buttons.values())r.setAttribute("aria-pressed","false");for(const r of Ce("feedback-rating").children)r.setAttribute("aria-pressed","false");Ce("feedback-comment").value="",Ce("feedback-count").textContent=`0/${fd.commentChars}`,Ce("feedback-status").textContent="";const s=i||this.sent;Ce("feedback-form").hidden=s,Ce("feedback-skip").hidden=s,Ce("feedback-sheet").hidden=!1}closeSheet(e){e&&this.target&&this.record(Vr.key(this.target),this.sent?"sent":"dismissed"),this.stopPolling(),this.target=null,Ce("feedback-sheet").hidden=!0,this.updateReopen(),this.updatePublicButton()}stopPolling(){this.pollTimer!==null&&clearInterval(this.pollTimer),this.pollTimer=null}async sendSurvey(){const e=this.target;if(!e||this.sent)return;const t=Vr.key(e),i=Ce("feedback-comment").value.trim(),s=Ce("feedback-status");if(!Object.keys(this.answers).length&&this.rating===null&&!i){s.textContent="Pick an answer, a rating or write a note, or skip.";return}const r={kind:"survey",room:e,answers:this.answers,...this.rating===null?{}:{rating:this.rating},...i?{comment:i}:{}};Ce("feedback-send").disabled=!0,s.textContent="Sending…";try{const a=await this.guest.request("/feedback",r);if(this.record(t,"sent"),this.updatePublicButton(),this.target!==e)return;this.sent=!0,s.textContent=a.duplicate===!0?"Your answers were already recorded.":"Thanks. Your answers are saved.",Ce("feedback-form").hidden=!0,Ce("feedback-skip").hidden=!0,await this.refresh()}catch(a){this.target===e&&(s.textContent=a instanceof Error?a.message:"Feedback could not be sent. You can skip.")}finally{Ce("feedback-send").disabled=!1}}async refresh(){const e=this.target;if(e?.type!=="private")return;const t=e.roomId;try{const i=await this.guest.request(`/feedback/rooms/${encodeURIComponent(t)}`);if(this.target!==e||!Array.isArray(i.surveys))return;const s=[];for(const r of i.surveys)r&&typeof r=="object"&&"answers"in r&&r.answers&&typeof r.answers=="object"&&s.push(r.answers);this.renderSummary(s,typeof i.members=="number"&&Number.isSafeInteger(i.members)?i.members:s.length)}catch{}}renderSummary(e,t){const i=x0(e),s=Ce("feedback-tally");Ce("feedback-summary-title").textContent=e.length?`Room feedback · based on ${e.length} of ${Math.max(t,e.length)} players`:"Room feedback · no answers yet",s.replaceChildren(...eo.map(a=>{const o=i[a.id],c=zi("li");return c.append(zi("span",a.label,"feedback-tally-label"),zi("span",`${o.tooLittle} too little · ${o.justRight} just right · ${o.tooMuch} too much`,"feedback-tally-counts")),c}));let r;try{r=HT(this.tuning,e,t)}catch{r=null}this.override=r?.override??null,YT(this.override,this.store??void 0),Ce("feedback-changes").replaceChildren(...(r?.changes??[]).map(a=>zi("li",`${a.field}: ${a.from} → ${a.to}`))),Ce("feedback-suggestion-note").textContent=this.override?"Suggested tuning. The host can apply it from the settings of the next lobby (use Rematch), or an operator can set ARCHERY_TUNING and redeploy.":e.length?"No tuning change suggested from these answers.":"A tuning suggestion appears once answers arrive.",Ce("feedback-override").textContent=this.override?`ARCHERY_TUNING='${this.override}'`:"",Ce("feedback-override-box").hidden=!this.override}async copyOverride(){if(this.override){try{await navigator.clipboard.writeText(`ARCHERY_TUNING='${this.override}'`),Ce("feedback-copy").textContent="Copied"}catch{Ce("feedback-copy").textContent="Select the text to copy"}setTimeout(()=>{Ce("feedback-copy").textContent="Copy"},2e3)}}offerRound(e,t,i){this.roundTarget={target:e,epoch:t,round:i},Ce("feedback-round-text").textContent="How was that round?";for(const s of["up","down"])Ce(`feedback-round-${s}`).disabled=!1;Ce("feedback-round").hidden=!1,this.roundTimer!==null&&clearTimeout(this.roundTimer),this.roundTimer=setTimeout(()=>this.hideRound(),ZT)}hideRound(){this.roundTimer!==null&&clearTimeout(this.roundTimer),this.roundTimer=null,this.roundTarget=null,Ce("feedback-round").hidden=!0}async sendRound(e){const t=this.roundTarget;if(!t)return;this.roundTimer!==null&&clearTimeout(this.roundTimer);for(const s of["up","down"])Ce(`feedback-round-${s}`).disabled=!0;Ce("feedback-round-text").textContent="Sending…";let i="Thanks.";try{await this.guest.request("/feedback",{kind:"round",room:t.target,epoch:t.epoch,round:t.round,vote:e})}catch{i="Could not send that vote."}this.roundTarget===t&&(Ce("feedback-round-text").textContent=i,this.roundTimer=setTimeout(()=>this.hideRound(),QT))}}const gn=n=>document.getElementById(n);function om(){try{return sessionStorage}catch{return}}class tA{constructor(e){this.send=e;const t=gn("combat-settings-preset");t.replaceChildren(..._0.map(s=>{const r=document.createElement("option");return r.value=s,r.textContent=s,r}));const i=(s,r)=>{const a=document.createElement("label"),o=document.createElement("input"),c=`combat-settings-${r.key}`;a.append(`${r.label} `,o),o.id=c,o.type="number",o.step=r.bound.integer?"1":"any",o.min=String(r.bound.min),o.max=String(r.bound.max),o.inputMode=r.bound.integer?"numeric":"decimal",o.dataset.knob=r.key,this.inputs.set(r.key,o),s.append(a)};for(const s of GT)i(gn("combat-settings-primary"),s);for(const s of VT)i(gn("combat-settings-more"),s);t.addEventListener("change",()=>this.fill(y0(t.value))),gn("combat-settings-save").addEventListener("click",()=>{try{this.submit(XT(t.value,Object.fromEntries([...this.inputs].map(([s,r])=>[s,r.value]))))}catch(s){gn("combat-settings-status").textContent=s instanceof Error?s.message:"Those settings are not valid."}}),gn("combat-settings-suggest").addEventListener("click",()=>{const s=im(om());s&&this.submit(s)})}send;synced="";last=null;changedNotice=!1;sending=!1;inputs=new Map;async submit(e){if(!this.sending){this.sending=!0;try{const t=this.last?.digest??null,i=await this.send(e);gn("combat-settings-status").textContent=rm(i,t,this.last?.digest??null)}finally{this.sending=!1}}}fill(e){for(const[t,i]of this.inputs)i.value=String(e[t])}fillFrom(e){gn("combat-settings-preset").value=WT(e),this.fill(Object.fromEntries([...this.inputs.keys()].map(t=>[t,hi(e,t)])))}render(e,t){const i=!!e&&e.state.state==="waiting";if(gn("combat-settings").hidden=!i,!e||!i){this.last=sm(this.last,null,!1,!!e),e&&(this.synced="",this.changedNotice=!1,gn("combat-settings-status").textContent="");return}const s=el(e.state),r=e.membership.canStart,a={roomId:e.roomId,digest:nm(e.state)};this.last&&this.last.roomId!==a.roomId&&(this.changedNotice=!1);const o=jT(this.last,a);if(o&&(this.changedNotice=!0),(o||this.last&&this.last.roomId!==a.roomId)&&!this.sending&&(gn("combat-settings-status").textContent=""),this.last=sm(this.last,a,!0,!0),!t&&gn("combat-settings-status").textContent===rm("skip",null,null)&&(gn("combat-settings-status").textContent=""),e.state.seats.find(h=>h.actorId===e.membership.actorId)?.ready&&(this.changedNotice=!1),gn("combat-settings-summary").textContent=$T(s)+(r?"":" · set by the host")+(this.changedNotice?" · Settings changed — ready up again":""),gn("combat-settings-editor").hidden=!r,!r)return;const c=e.roomId+nm(e.state);c!==this.synced&&(this.synced=c,this.fillFrom(s));const l=im(om()),u=l?qT(l,s):null,d=gn("combat-settings-suggest");d.hidden=u===null,u&&(d.textContent=u,d.title=u);for(const h of["save","suggest"])gn(`combat-settings-${h}`).disabled=t}}const nA=" · tap the stage to peek";function Rh(n,e="arrow"){return n?`Next ${e}`:"Try again"}function iA(n,e,t="below",i="arrow"){const s=t==="below"?" below":"";return n==="ready"?{icon:"↙",text:"Drag back on the stage to aim and draw"}:(n==="hit"||n==="miss")&&i==="level"&&t==="below"?null:n==="hit"||n==="miss"?{icon:"↓",text:e?(i==="level"?`Tap Next level${s} to continue`:`Tap Next arrow${s} for another shot`)+nA:`Drag again, or tap Try again${s}`}:null}const sA=.35;function rA(n,e){return Math.hypot(Math.max(e.x0-n.x,0,n.x-e.x1),Math.max(e.y0-n.y,0,n.y-e.y1))}function aA(n,e,t=sA){let i=null,s=1/0;for(const r of n){const a=rA(e,r);a<s&&(i=r,s=a)}return i&&s<=t?i:null}function oA(n,e=48){const t=Math.max(2,Math.floor(e));return Array.from({length:t},(i,s)=>Math.max(0,n)*s/(t-1))}function cA(n,e,t,i=10,s=600){return Math.hypot(n,e)<=i&&t>=0&&t<=s}const lA="dashed line = distance to the face";function dA(n,e){return e?n:`${n} · ${lA}`}const to="challenge-v1";function Uc(n){if(n!=="course"&&n!=="endless")throw new RangeError("Unknown challenge format.")}function hA(n){if(!Number.isFinite(n.angle)||!Number.isFinite(n.power)||n.angle<Bt.minAngle||n.angle>Bt.maxAngle||n.power<0||n.power>1)throw new RangeError("Challenge aim must have an angle from 5 to 80 and power from 0 to 1.")}const Au=(...n)=>32*Number.EPSILON*Math.max(1,...n.map(Math.abs));function Ru(n,e){if(Uc(n),!Number.isSafeInteger(e)||e<0||n==="course"&&e>=12)throw new RangeError("Challenge shot index is out of range.");const t=Math.floor(e/3),i=n==="course"?[12,18,24,30][t]:Math.min(30,12+2*t),s=n==="course"?2.6:Math.max(.8,2.6-.1*t);return Object.freeze({distance:i,centerY:3.2,radius:s,faceX:Zt.x+i})}function uA(n,e){if(hA(n),![e.distance,e.centerY,e.radius,e.faceX].every(Number.isFinite)||e.distance<=0||e.radius<=0||Math.abs(e.faceX-(Zt.x+e.distance))>Au(e.faceX,e.distance))throw new RangeError("Challenge target must have finite, consistent geometry and positive distance and radius.");const t=qc(n);return Cu(t,e,Math.min(iu(t),Bt.maxFlight))}function fA(n,e){const t=Math.abs(n-e.centerY),i=Au(t,n,e.centerY,e.radius);let s=0;for(let r=1;r<=10;r++)if(t<=e.radius*r/10+i){s=11-r;break}return{score:s,innerBullseye:t<=e.radius/20+i}}function Cu(n,e,t){const i=vg(n,e.faceX);if(i===null||i>=t-Au(i,t))return Object.freeze({score:0,innerBullseye:!1,impact:null,at:t,hit:!1});const s=Object.freeze({x:e.faceX,y:nn(n,i).y}),{score:r,innerBullseye:a}=fA(s.y,e);return Object.freeze({score:r,innerBullseye:a,impact:s,at:i,hit:r>0})}function M0(n,e=to){if(Uc(n),typeof e!="string"||e.trim().length===0)throw new RangeError("A challenge requires a rules version.");return Object.freeze({format:n,rulesVersion:e,status:"active",revision:0,shots:Object.freeze([]),total:0,hits:0,innerBullseyes:0,tens:0,misses:0})}function Iu(n){if(n.status!=="active")throw new Error("The challenge has already ended.")}function Pu(n,e){Iu(n);const t=Ru(n.format,n.shots.length),i=uA(e,t),s=Object.freeze({aim:Object.freeze({angle:e.angle,power:e.power}),target:t,outcome:i}),r=Object.freeze([...n.shots,s]),a=n.misses+ +!i.hit,o=n.format==="course"?r.length===12:a===3;return Object.freeze({...n,status:o?"completed":"active",revision:n.revision+1,shots:r,total:n.total+i.score,hits:n.hits+Number(i.hit),innerBullseyes:n.innerBullseyes+Number(i.innerBullseye),tens:n.tens+ +(i.score===10),misses:a})}function Lu(n){if(Iu(n),n.format!=="endless"||n.shots.length===0)throw new Error("Only a nonempty endless challenge can be banked.");return Object.freeze({...n,status:"completed",revision:n.revision+1})}function pA(n){return Iu(n),Object.freeze({...n,status:"abandoned",revision:n.revision+1})}function pd(n,e){if(Uc(n.format),Uc(e.format),n.format!==e.format)throw new RangeError("Challenge results must use the same format.");const t=n.format==="course"?["total","innerBullseyes","tens"]:["total","hits","innerBullseyes","tens"];for(const i of t)if(n[i]!==e[i])return e[i]-n[i];return 0}const dr=.24,S0=-1;function mA(n){const{step:e,scale:t,heights:i}=n.ground,s=[];for(let r=0;r<i.length;){const a=i[r];let o=r+1;for(;o<i.length&&i[o]===a;)o++;a>0&&s.push({minX:Zt.x+r*e,maxX:Zt.x+o*e,minY:S0,maxY:dr+a*t}),r=o}for(const r of n.obstacles)s.push({minX:Zt.x+r.x,maxX:Zt.x+r.x+r.width,minY:r.y0,maxY:r.y1});return s}function oa(n){const{distance:e,centerY:t,radius:i}=n.target,s=Object.freeze({distance:e,centerY:t,radius:i,faceX:Zt.x+e});return Object.freeze({level:n,target:s,blockers:mA(n).filter(r=>r.minX<=s.faceX)})}function Du(n,e){const t=qc(e);return n.wind?{...t,wind:n.wind}:t}function w0(n,e){const t=Du(n.level,e),i=iu(t,dr);let s=Math.min(i,Bt.maxFlight),r=i<Bt.maxFlight?"ground":"timeout";for(const a of n.blockers){const o=nu(t,a,0,s);o!==null&&o<s&&(s=o,r=a.minY===S0?"ground":"obstacle")}return{shot:t,stop:s,cause:r}}function Ch(n,e){const{shot:t,stop:i}=w0(n,e);return Cu(t,n.target,i)}function gA(n){const{step:e,scale:t,heights:i}=n.ground,s=n.target.distance/e,r=Number.isInteger(s)?[s-1,s]:[Math.floor(s)];return Math.max(dr,...r.filter(a=>a>=0&&a<i.length).map(a=>dr+i[a]*t))}function xA(n){const{distance:e,centerY:t,radius:i}=n.target,s=t-i,r=t+i,a=[];return s>gA(n)||a.push("face-buried"),n.obstacles.some(o=>o.x<=e&&e<=o.x+o.width&&o.y0<=s&&o.y1>=r)&&a.push("face-covered"),a}function _A(n){const e=n.target.faceX-Zt.x,t=n.target.centerY-Zt.y;return n.blockers.some(i=>{let s=0,r=1;for(const[a,o,c,l]of[[e,Zt.x,i.minX,i.maxX],[t,Zt.y,i.minY,i.maxY]]){if(a===0){if(o<c||o>l)return!1;continue}const u=(c-o)/a,d=(l-o)/a;s=Math.max(s,Math.min(u,d)),r=Math.min(r,Math.max(u,d))}return s<=r})}const ca="one-shot-v1",sn=12,Nu=10,Zs=Nu*10,cm=5,yA=30,Br=n=>Math.floor(n*10+.5);function vA(n){if(!Number.isSafeInteger(n)||n<0)throw new RangeError(`isqrt needs a non-negative safe integer, got ${String(n)}`);let e=Math.floor(Math.sqrt(n));for(;e*e>n;)e--;for(;(e+1)*(e+1)<=n;)e++;return e}function bA(n){let e=0;for(let t=1;t<=cm;t++)n>=(yA*t)**2&&e++;return cm-e}function MA(n,e){const t=Math.abs(Br(e.faceX)-Br(n.x)),i=Math.max(0,Br(e.centerY-e.radius)-Br(n.y),Br(n.y)-Br(e.centerY+e.radius));return t*t+i*i}function E0(n,e){const{shot:t,stop:i,cause:s}=w0(n,e),r=Cu(t,n.target,i);if(r.impact)return{x:r.impact.x,y:r.impact.y,onFace:r.hit,ring:r.score,innerBullseye:r.innerBullseye,cause:"face"};const a=nn(t,r.at);return{x:a.x,y:a.y,onFace:!1,ring:0,innerBullseye:!1,cause:s}}function SA(n,e){if(e.onFace)return{points:Nu*e.ring,landing:e,d2:0,distanceTenths:0};const t=MA(e,n.target);return{points:bA(t),landing:e,d2:t,distanceTenths:vA(t)}}function wA(n,e){return SA(n,E0(n,e))}function EA(n){return`${Math.floor(n/10)}.${n%10}`}function T0(){return Object.freeze({status:"active",shots:Object.freeze([]),total:0,tens:0,inner:0})}function A0(n,e){if(n.status!=="active"||n.shots.length>=sn)throw new Error("The one-shot run has already ended.");const{points:t,landing:i}=e;if(!Number.isInteger(t)||t<0||t>Zs)throw new RangeError("One-shot points must be an integer from 0 to 100.");if(typeof i?.innerBullseye!="boolean"||i.innerBullseye&&t!==Zs)throw new RangeError("The inner bullseye flag must be a boolean and agree with the points.");const s=Object.freeze([...n.shots,Object.freeze({points:t,innerBullseye:i.innerBullseye})]);return Object.freeze({status:s.length===sn?"completed":"active",shots:s,total:n.total+t,tens:n.tens+ +(t===Zs),inner:n.inner+Number(i.innerBullseye)})}const TA=n=>n>=Zs?"bullseye":n>=Nu?"ring":n>0?"near":"far",AA={face:"Passed the face",ground:"Landed on the ground",obstacle:"Stopped by an obstacle",timeout:"Ran out of flight"};function RA(n,e){const{points:t,landing:i}=n,s=i.onFace?`${i.ring===10?"Bullseye":`Ring ${i.ring}`} · +${t}`:t>0?`${EA(n.distanceTenths)} off · +${t}`:"Too far · +0",r=Eh(e)==="Wind calm"?"":` · ${Eh(e)}`,a=i.onFace?i.innerBullseye?"Inner bullseye":"On the face":AA[i.cause];return Object.freeze({points:t,tier:TA(t),value:s,caption:`${a}${r}`})}function R0(n){if(!Number.isInteger(n)||n<0||n>4294967295)throw new RangeError("A one-shot seed must be a uint32.");return Object.freeze({seed:n,run:T0(),reports:Object.freeze([])})}function C0(n,e,t){const i=A0(n.run,e);return Object.freeze({seed:n.seed,run:i,reports:Object.freeze([...n.reports,RA(e,t)])})}function CA(n){const e=new Uint32Array(1);return n(e),e[0]}const Uu=n=>n.run.shots.length;function lm(n,e){const t=n.run.shots.length;return`Level ${Math.min(sn,e?t:t+1)} / ${sn} · ${n.run.total} pts`}function IA(n){return Array.from({length:sn},(e,t)=>{const i=n.reports[t];return i?{index:t,state:"done",points:i.points,tier:i.tier,label:String(i.points)}:{index:t,state:t===n.run.shots.length&&n.run.status==="active"?"current":"todo",points:null,tier:null,label:""}})}const ku=n=>`${n.run.total} / ${sn*Zs} points`,PA="Finish or abandon the one-shot run to switch modes.";function LA(n,e){if(!n)return{action:"switch"};const t=n.run.status==="active"&&n.run.shots.length===0;return t&&e==="oneshot"?{action:"noop"}:t||n.run.status!=="active"?{action:"switch"}:{action:"confirm",declineMessage:PA}}const DA="(orientation:landscape) and (max-height:540px) and (pointer:coarse)",NA="(orientation:portrait) and (max-width:640px) and (pointer:coarse)",I0="archery-rotate-hint-dismissed";function UA(n){return n.view==="range"&&n.portraitPhone&&!n.dismissed}function kA(n){try{return n.getItem(I0)==="1"}catch{return!1}}function OA(n){try{n.setItem(I0,"1")}catch{}}function P0(n,e,t=2){return Math.abs(e.width-n.width)>t||Math.abs(e.height-n.height)>t}function FA(n){return n.landscapePhone&&n.view==="range"&&n.outcome!=="unchanged"}function BA(n,e,t){const i=Math.max(1,t?e:e+1);return{arrow:i,distance:Ru(n,n==="course"?Math.min(i,12)-1:i-1).distance}}function L0(n){return!!n&&n.status==="completed"}function D0(n,e,t){return L0(n)&&e&&!t}const zA="Leave without posting your score?";function HA(n,e,t){return!n||e?"none":t?"initials":"result"}const dm="archery.challenge.results.v1",hm="archery.challenge.initials.v1",zr=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function Ih(n){if(!zr(n)||!["course","endless"].includes(String(n.format))||n.rulesVersion!==to||!Array.isArray(n.shots))throw new Error("Unsupported challenge data.");let e=M0(n.format);for(const i of n.shots){if(!zr(i)||!zr(i.aim)||typeof i.aim.angle!="number"||typeof i.aim.power!="number")throw new Error("Invalid challenge shot.");e=Pu(e,{angle:i.aim.angle,power:i.aim.power})}n.status==="completed"&&e.status==="active"&&(e=Lu(e)),n.status==="abandoned"&&e.status==="active"&&(e=pA(e));function t(i,s){return Array.isArray(i)&&Array.isArray(s)?i.length===s.length&&i.every((r,a)=>t(r,s[a])):zr(i)&&zr(s)?Object.keys(i).length===Object.keys(s).length&&Object.keys(i).every(r=>r in s&&t(i[r],s[r])):i===s}if(!t(e,n))throw new Error("Challenge data failed verification.");return e}class GA{message="Results stay on this browser.";storage;constructor(e){this.storage=e}readResults(){let e;try{if(!this.storage)throw new Error;e=this.storage.getItem(dm)}catch{return this.message="Result not saved: browser storage unavailable. You can still play.",null}if(e===null)return[];try{const t=JSON.parse(e);if(!Array.isArray(t))throw new Error;return t.map(i=>{const s=Ih(i);if(s.status!=="completed")throw new Error;return s})}catch{return this.message="Local results are unreadable or use another rules version. Existing data is preserved; new results cannot be saved.",null}}results(e){return(this.readResults()??[]).filter(t=>t.format===e).sort(pd).slice(0,100)}save(e){if(e.status!=="completed")return!1;const t=this.readResults();if(t===null)return!1;try{const i=[Ih(e),...t.filter(r=>r.format===e.format)].sort(pd).slice(0,100),s=t.filter(r=>r.format!==e.format).sort(pd).slice(0,100);return this.storage.setItem(dm,JSON.stringify([...i,...s])),this.message="Best 100 results per format stay on this browser.",!0}catch{return this.message="Result not saved: browser storage unavailable.",!1}}initials(){try{return this.storage?.getItem(hm)??""}catch{return""}}saveInitials(e){try{this.storage?.setItem(hm,e)}catch{}}}function um(n){if(!Array.isArray(n))throw new Error("Invalid leaderboard.");return n.map(e=>{if(!zr(e)||!["rank","total","hits","innerBullseyes","tens","misses"].every(t=>Number.isSafeInteger(e[t])&&Number(e[t])>=0)||typeof e.guestId!="string"||typeof e.initials!="string"||!/^[a-z]{3}$/.test(e.initials)||typeof e.own!="boolean"||typeof e.publishedAt!="string")throw new Error("Invalid leaderboard entry.");return e})}class VA{attempt=null;pending=null;busy=!1;session;attemptRevision=null;pendingRevision=null;constructor(e,t=fetch,i,s){s?.assertContext(e,t,i),this.session=s??new Jc(e,t,i)}checkAttemptRevision(){const e=this.attemptRevision??this.session.revision;return this.session.assertRevision(e),this.attemptRevision=e,e}checkPending(e,t,i){if(this.session.assertRevision(i),this.pending!==e||this.attempt!==t)throw new Error("Challenge changed while the action was pending.")}decodeAttempt(e){if(typeof e.id!="string"||!e.id)throw new Error("Invalid attempt response.");return{id:e.id,state:Ih(e.state)}}async start(e){if(this.busy||this.pending)throw new Error("Finish the pending action first.");this.busy=!0;try{const t=await this.session.ensure();this.session.assertRevision(t.revision);const i=this.decodeAttempt(await this.session.request("/attempts",{format:e,rulesVersion:to}));return this.session.assertRevision(t.revision),this.attempt=i,this.attemptRevision=t.revision,i}finally{this.busy=!1}}async shot(e){return this.action("shot",{aim:{...e}})}async bank(){return this.action("bank",{})}async action(e,t){if(!this.attempt||this.pending||this.busy)throw new Error("Finish the pending action first.");return this.pendingRevision=this.checkAttemptRevision(),this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/actions`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,kind:e,...t},kind:"action"},this.retry()}async retry(){if(!this.pending||this.pending.kind!=="action"||!this.attempt||this.busy)throw new Error("No retryable action.");const e=this.pending,t=this.attempt,i=this.pendingRevision??this.checkAttemptRevision();this.checkPending(e,t,i),this.busy=!0;try{const s=this.decodeAttempt(await this.session.request(e.url,e.body));this.checkPending(e,t,i);const r=e.body.kind==="shot"?Pu(t.state,e.body.aim):Lu(t.state);if(s.id!==t.id||JSON.stringify(s.state)!==JSON.stringify(r))throw new Error("Shared response does not match the pending action.");return this.attempt=s,this.pending=null,this.pendingRevision=null,s}catch(s){throw s instanceof Fn&&s.code==="challenge_capacity"&&e.body.kind==="shot"&&this.pending===e&&this.attempt===t&&this.session.revision===i&&(this.pending=null,this.pendingRevision=null),s}finally{this.busy=!1}}async publish(e){if(!this.attempt||this.attempt.state.status!=="completed"||this.busy||this.pending?.kind==="action")throw new Error("Finish the pending shot first.");if(e=e.trim().toLowerCase(),!/^[a-z]{3}$/.test(e))throw new Error("Use exactly three letters A–Z.");const t=this.checkAttemptRevision();this.pending||(this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/publish`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,initials:e},kind:"publish"},this.pendingRevision=t);const i=this.pending,s=this.attempt;this.checkPending(i,s,this.pendingRevision??t),this.busy=!0;try{const r=await this.session.request(i.url,i.body);this.checkPending(i,s,t);const a=um(r.entries);return this.pending=null,this.pendingRevision=null,a}catch(r){throw r instanceof Error&&"status"in r&&r.status===400&&this.pending===i&&this.attempt===s&&this.session.revision===t&&(this.pending=null,this.pendingRevision=null),r}finally{this.busy=!1}}async boards(e){const t=this.session.revision,i=await this.session.request(`/leaderboards/${e}?rulesVersion=${encodeURIComponent(to)}`);return this.session.assertRevision(t),um(i.entries)}forget(){this.session.forget(),this.attempt=null,this.pending=null,this.attemptRevision=null,this.pendingRevision=null}}const WA="Finish or abandon the course to switch modes.",XA="Finish or abandon the endless run to switch modes.";function $A(n,e,t=!1){return n&&n.status==="active"&&n.shots.length===0&&e===n.format&&!t?{action:"noop"}:!n||n.status!=="active"||n.shots.length===0?{action:"switch"}:{action:"confirm",declineMessage:n.format==="endless"?XA:WA}}function N0(n){try{return n()===!0}catch{return!1}}function YA(n){return n.busy||n.pending||n.state==="flying"||n.state==="aiming"}function md(n,e,t=tn){if(!Number.isFinite(e)||e<=0)throw new RangeError("Positive finite aspect required.");if(![t.minX,t.maxX,t.minY,t.maxY].every(Number.isFinite)||t.minX>t.maxX||t.minY>t.maxY)throw new RangeError("Ordered finite target required.");n.updateMatrixWorld(!0);let i=-11.4,s=11.4,r=-11.4/e,a=11.4/e;const o=(h,p,g)=>{const y=new F(h,p,g).applyMatrix4(n.matrixWorldInverse),m=1.1;i=Math.min(i,y.x-m),s=Math.max(s,y.x+m),r=Math.min(r,y.y-m),a=Math.max(a,y.y+m)};for(const h of[-8.5,8.62])for(const p of[0,6])o(h,p,.12);for(const h of[t.minX,t.maxX])for(const p of[t.minY,t.maxY])for(const g of[-.9,.12])o(h,p,g);const c=(i+s)/2,l=(r+a)/2,u=Math.max((a-r)/2,(s-i)/(2*e)),d=u*e;n.left=c-d,n.right=c+d,n.bottom=l-u,n.top=l+u,n.updateProjectionMatrix()}function jA(n,e,t){if(![n.origin.x,n.origin.y,n.velocity.x,n.velocity.y,e.x,e.y,t].every(Number.isFinite)||t<0||t>Bt.maxFlight)throw new RangeError("Finite shot and a bounded resolved interval required.");const i=n.origin.x-e.x,s=n.origin.y-e.y,r=n.velocity.x,a=n.velocity.y,o=Bt.gravity,c=.5*o*o,l=-1.5*o*a,u=r*r+a*a-o*s,d=r*i+a*s;if(![c,l,u,d].every(Number.isFinite))throw new RangeError("Shot exceeds supported numeric range.");const h=f=>((c*f+l)*f+u)*f+d,p=[0,t],g=4*l*l-12*c*u;if(g>=0)for(const f of[(-2*l-Math.sqrt(g))/(6*c),(-2*l+Math.sqrt(g))/(6*c)])f>0&&f<t&&p.push(f);p.sort((f,v)=>f-v);const y=[...p];for(let f=1;f<p.length;f++){let v=p[f-1],b=p[f],M=h(v),T=h(b);if(!(M===0||T===0||M<0==T<0)){for(let R=0;R<64;R++){const I=(v+b)/2,x=h(I);M<0==x<0?(v=I,M=x):b=I}y.push((v+b)/2)}}const m=Math.min(...y.map(f=>{const v=nn(n,f);return Math.hypot(v.x-e.x,v.y-e.y)}));if(!Number.isFinite(m))throw new RangeError("Shot exceeds supported numeric range.");return m}function Qs(){return{completed:0,hits:0,best:null,mean:null,last:null,lastShotId:0,m2:0,currentStreak:0,bestStreak:0,recent:[]}}function Ou(n,e,t,i,s={angle:29,power:.62}){if(!Number.isSafeInteger(e)||e<0||!Number.isFinite(i)||i<0||typeof t!="boolean"||!Number.isFinite(s.angle)||s.angle<5||s.angle>80||!Number.isFinite(s.power)||s.power<.08||s.power>1)throw new RangeError("Valid completion identity, aim and distance required.");if(e<=n.lastShotId)return n;const r=n.completed+1,a=i-(n.mean??0),o=(n.mean??0)+a/r,c=t?n.currentStreak+1:0,l={completed:r,hits:n.hits+Number(t),best:Math.min(n.best??1/0,i),mean:o,last:i,lastShotId:e,m2:Math.max(0,n.m2+a*(i-o)),currentStreak:c,bestStreak:Math.max(n.bestStreak,c),recent:[{hit:t,distance:i,...s},...n.recent].slice(0,10)};if(!Number.isSafeInteger(r)||!Number.isFinite(l.m2)||!Number.isFinite(o))throw new RangeError("Practice exceeds supported numeric range.");return l}const qA="archery-practice",gd="progress",xd="practice";function KA(n){return{version:1,stats:n}}function JA(n){if(n===void 0)return Qs();const e=()=>{throw new Error("Saved practice is incompatible or damaged. Clear it to start again.")};if(!n||typeof n!="object"||n.version!==1)return e();const t=(a,o)=>Object.keys(a).sort().join(",")===o.sort().join(",");if(!t(n,["version","stats"]))return e();const i=n.stats;if(!i||typeof i!="object"||!t(i,Object.keys(Qs())))return e();const s=a=>Number.isSafeInteger(a)&&a>=0,r=a=>typeof a=="number"&&Number.isFinite(a)&&a>=0;if(![i.completed,i.hits,i.lastShotId,i.currentStreak,i.bestStreak].every(s)||i.hits>i.completed||i.lastShotId<i.completed||i.currentStreak>i.bestStreak||i.bestStreak>i.hits||i.hits>0&&i.bestStreak===0||!r(i.m2)||!Array.isArray(i.recent)||i.recent.length!==Math.min(i.completed,10))return e();if(i.completed){if(!r(i.best)||!r(i.mean)||!r(i.last)||i.best>i.mean||i.best>i.last||i.completed===1&&(i.m2!==0||i.mean!==i.last||i.best!==i.last)||i.hits===0&&i.bestStreak!==0||i.hits===i.completed&&(i.currentStreak!==i.completed||i.bestStreak!==i.completed))return e()}else if(i.hits||i.lastShotId||i.currentStreak||i.bestStreak||i.m2||i.best!==null||i.mean!==null||i.last!==null)return e();for(const a of i.recent)if(!a||!t(a,["hit","distance","angle","power"])||typeof a.hit!="boolean"||!r(a.distance)||!Number.isFinite(a.angle)||a.angle<5||a.angle>80||!Number.isFinite(a.power)||a.power<.08||a.power>1||i.best>a.distance)return e();if(i.completed){if(i.last!==i.recent[0].distance)return e();let a=0;for(const p of i.recent){if(!p.hit)break;a++}if(a<i.recent.length?i.currentStreak!==a:i.currentStreak<a)return e();let o=0,c=0;for(const p of[...i.recent].reverse())o=p.hit?o+1:0,c=Math.max(c,o);const l=i.recent.reduce((p,g)=>p+(g.distance-i.mean)**2,0);if(c>i.bestStreak||l>i.m2+1e-9*Math.max(1,i.m2))return e();const u=i.best+i.recent.reduce((p,g)=>p+(g.distance-i.best)/i.completed,0),d=Math.sqrt(i.completed-1)*(i.mean-i.best);if(u>i.mean+1e-10*Math.max(1,i.mean)||Math.sqrt(i.m2/i.completed)>d+1e-10*Math.max(1,d))return e();const h=i.recent.filter(p=>p.hit).length;if(h>i.hits||i.recent.length-h>i.completed-i.hits)return e();if(i.completed>10){const p=i.completed-i.recent.length,g=p-(i.hits-h),y=i.hits-h,m=i.mean-i.best;let f=p*m-i.recent.reduce((x,E)=>x+(E.distance-i.mean),0);const v=1e-9*Math.max(1,p*m,...i.recent.map(x=>Math.abs(x.distance-i.mean)));if(f<-v)return e();f=Math.max(0,f);const b=!i.recent.some(x=>x.distance===i.best);if(b&&p===1&&f>v)return e();const M=p*(f/p-m)**2,T=l+M+(b&&p>1?f/p*(f/(p-1)):0),R=l+M+f/p*f*(p-1);if(!Number.isFinite(T)||i.m2<T-1e-9*Math.max(1,i.m2,T)||i.m2>R+1e-9*Math.max(1,i.m2,R))return e();let I=0;for(const x of[...i.recent].reverse()){if(!x.hit)break;I++}if(I===i.recent.length){const x=i.currentStreak-I,E=y-x;if(x>y||x<0||g===0&&x!==p||E>g*i.bestStreak||i.bestStreak<x+I||i.bestStreak>Math.max(c,x+I,E))return e()}else if(y>(g+1)*i.bestStreak-I||i.bestStreak>Math.max(c,y+I))return e()}if(i.completed<=10){let p=Qs();for(const y of[...i.recent].reverse())p=Ou(p,p.lastShotId+1,y.hit,y.distance,y);const g=(y,m)=>Math.abs(y-m)<=1e-10*Math.max(1,Math.abs(y),Math.abs(m));if(!g(p.mean,i.mean)||!g(p.m2,i.m2)||p.best!==i.best||p.bestStreak!==i.bestStreak)return e()}}return structuredClone(i)}class ZA{db=null;queue;unavailable=!1;view={stats:Qs(),state:"loading",message:"Loading saved practice…"};notify;constructor(e,t=()=>indexedDB){this.notify=e,this.notify(this.view),this.queue=new Promise(i=>{let s;try{s=t().open(qA,1)}catch{this.fail(),i();return}s.onupgradeneeded=()=>{s.result.createObjectStore(gd)},s.onblocked=()=>{this.fail("Saved practice is blocked by another tab."),i()},s.onerror=()=>{this.fail(),i()},s.onsuccess=()=>{if(this.unavailable){s.result.close(),i();return}const r=s.result;this.db=r,r.onversionchange=()=>{this.db===r&&(this.db=null,r.close(),this.fail("Saved practice changed in another tab. Reload to reconnect."))},this.transaction().then(i,()=>{this.db&&this.fail(),i()})}})}fail(e="Saved practice unavailable. This visit still counts."){this.unavailable=!0,this.view={...this.view,state:"unavailable",message:e},this.notify(this.view)}transaction(e,t=!1){return new Promise((i,s)=>{const r=this.db;if(!r){s(new Error("Storage unavailable"));return}let a=Qs(),o;try{o=r.transaction(gd,e||t?"readwrite":"readonly");const c=o.objectStore(gd);if(t)c.delete(xd);else{const l=c.get(xd);l.onsuccess=()=>{try{a=JA(l.result),e&&(a=Ou(a,a.lastShotId+1,e.hit,e.distance,e),c.put(KA(a),xd))}catch(u){o.abort(),s(u)}}}o.oncomplete=()=>{this.db!==r?this.view={...this.view,stats:a}:(this.unavailable=!1,this.view={stats:a,state:"saved",message:`Saved on this browser only · ${a.completed} ${a.completed===1?"shot":"shots"}`}),this.notify(this.view),i()},o.onabort=o.onerror=()=>s(new Error("Storage transaction failed"))}catch(c){s(c)}})}enqueue(e,t=!1){return this.queue=this.queue.then(async()=>{if(!(!this.db||this.unavailable&&!t)){this.view={...this.view,state:e||t?"saving":"loading",message:t?"Clearing saved practice…":e?"Saving practice…":"Loading saved practice…"},this.notify(this.view);try{await this.transaction(e,t)}catch{this.db&&this.fail()}}}),this.queue}append(e){return this.enqueue(e)}clear(){return this.enqueue(void 0,!0)}refresh(){return this.enqueue()}}const QA={course:"finish a course",endless:"finish an endless run"},eR="Nobody has published a daily result yet. Finish the daily shot and post the first.";function tR(n){switch(n.phase){case"off":return{kind:"off",emptyText:"Shared scoring is not available here."};case"loading":return{kind:"loading",emptyText:"Loading shared board…"};case"error":return{kind:"error",emptyText:"Shared board could not be loaded."};case"loaded":return(n.entryCount??0)>0?{kind:"entries",emptyText:""}:{kind:"empty",emptyText:n.format==="one-shot"?eR:`No shared results yet. Turn on shared scoring and ${QA[n.format]} to post one.`}}}const U0="archery-theme";function nR(n,e){try{const t=n.getItem(U0);return t==="light"||t==="dark"?t:e}catch{return e}}function iR(n,e){try{n.setItem(U0,e)}catch{}}const Fu="lgen-1",k0="levels-v1",is="levels-v1-wind",O0=.5,F0=.1,sR=2,rR=4294967295;function aR(n){if(!Number.isInteger(n)||n<0||n>rR)throw new RangeError(`level seed must be a uint32, got ${String(n)}`)}function oR(n){if(!Number.isSafeInteger(n)||n<0)throw new RangeError(`level index must be a non-negative safe integer, got ${String(n)}`)}function cR(n,e){return aR(n),oR(e),il([Fu,n,e])}function B0(n,e,...t){return il([n,e,...t])>>>0}const no=n=>{if(n&&typeof n=="object"){for(const e of Object.values(n))no(e);Object.freeze(n)}return n},lR="level";function dR(n){const e=new URLSearchParams(n).get(lR);if(e===null)return null;const t=/^(\d{1,10}):(\d{1,9})(?::(wind))?$/.exec(e);if(!t)return null;const i=Number(t[1]),s=Number(t[2]);return i>4294967295?null:Object.freeze({seed:i,index:s,windOn:t[3]==="wind"})}const hR=dr-.04;function rl(n){const{step:e,scale:t,heights:i}=n.ground,s=[];for(let l=0;l<i.length;){const u=i[l];let d=l+1;for(;d<i.length&&i[d]===u;)d++;u>0&&s.push({x0:Zt.x+l*e,x1:Zt.x+d*e,y0:hR,y1:dr+u*t}),l=d}const r=n.obstacles.map(l=>({x0:Zt.x+l.x,x1:Zt.x+l.x+l.width,y0:l.y0,y1:l.y1})),{faceX:a,centerY:o,radius:c}=oa(n).target;return Object.freeze({target:{faceX:a,centerY:o,radius:c},ground:s,obstacles:r,wind:n.wind,windRules:n.rules===is})}function uR(n){const e=rl(n),{faceX:t,centerY:i,radius:s}=e.target,r=[{x0:t-.1,x1:t+.1,y0:i-s,y1:i+s}];for(const a of[...e.obstacles,...e.ground])a.x0<=t&&r.push(a);return{minX:Math.min(...r.map(a=>a.x0)),maxX:Math.max(...r.map(a=>a.x1)),minY:Math.min(...r.map(a=>a.y0)),maxY:Math.max(...r.map(a=>a.y1))}}const fR="level-theme-1",fm=Object.freeze([Object.freeze({name:"meadow",ground:"#8f9a5a",obstacle:"#9a8b78",cap:"#b7a88f",style:"wall"}),Object.freeze({name:"quarry",ground:"#a08c68",obstacle:"#7d8590",cap:"#a0a8b2",style:"pillar"}),Object.freeze({name:"orchard",ground:"#7c9a5c",obstacle:"#8a6a4a",cap:"#a98763",style:"pillar"})]);function kc(n,e){return fm[il([fR,n,e])%fm.length]}const Ph=1.4,pm=-Ph/2;function pR(n,e,t,i){for(const a of[...n.children])n.remove(a),a instanceof Ke&&a.geometry.dispose();const s=rl(e),r=(a,o,c)=>{const l=i(n,(o.x0+o.x1)/2,(o.y0+o.y1)/2,pm,o.x1-o.x0,o.y1-o.y0,Ph,c);return l.userData.kind=a,l};for(const a of s.ground)r("ground",a,t.ground);for(const a of s.obstacles)r("obstacle",a,t.obstacle),t.style==="pillar"&&i(n,(a.x0+a.x1)/2,a.y1-.08,pm,a.x1-a.x0,.16,Ph+.1,t.cap)}const mm=n=>{const{width:e,height:t}=n.geometry.parameters,i=e*n.scale.x,s=t*n.scale.y;return{x0:n.position.x-i/2,x1:n.position.x+i/2,y0:n.position.y-s/2,y1:n.position.y+s/2}};function mR(n){const e=n.children.filter(t=>t instanceof Ke);return{ground:e.filter(t=>t.userData.kind==="ground").map(mm),obstacles:e.filter(t=>t.userData.kind==="obstacle").map(mm)}}function gR(n){const e=n.children.filter(i=>i instanceof Ke&&i.geometry instanceof Es),t=e[0];return t?{faceX:t.position.x,centerY:t.position.y,radius:t.geometry.parameters.radius,rings:e.length}:null}const xR=no([[{distance:12,centerY:2.8,radius:2.3,difficulty:1},{distance:12.5,centerY:3.6,radius:2.5,difficulty:1},{distance:14,centerY:2.8,radius:2.5,difficulty:1},{distance:15.5,centerY:3.2,radius:2.5,difficulty:1},{distance:16.5,centerY:3.4,radius:2.3,difficulty:1},{distance:18,centerY:4,radius:2.3,difficulty:1},{distance:19.5,centerY:2.5,radius:2.2,difficulty:1},{distance:20,centerY:4.5,radius:2.5,difficulty:1}],[{distance:12,centerY:5.4,radius:1.5,difficulty:2,bumps:[0,0,1,1,2,3,5,7,9,7,5,3,1],obstacles:[{x:8,width:.6,y0:.54,y1:6.54}]},{distance:17,centerY:4.5,radius:1.5,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,8,7,7,7,7,7,8,9,10,10,10,10,10,10,10],obstacles:[{x:6,width:.7,y0:.64,y1:6.64}]},{distance:19,centerY:4.5,radius:2.5,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,4,3,1,0,2,4,6,8,7,6,5,5,3,2,1,0,2,4,6,8,6,4,2,1,0,0,0,0,2,5],obstacles:[{x:11.5,width:1.4,y0:1.94,y1:6.8}]},{distance:21,centerY:5.5,radius:2.2,difficulty:2,bumps:[0,1,3,4,6,6,6,6,7,5,4,3,2,1,1,0,0,0,1,2,3,4,6,8,10,10,10,10,10,9,8,7,7,7,8,9,10,8,7,5,4,5,6,7,8,7,7],obstacles:[{x:8,width:.9,y0:1.14,y1:7.14}]},{distance:23.5,centerY:4.8,radius:2.4,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,9,9],obstacles:[{x:6,width:1.5,y0:.94,y1:6.94}]},{distance:12,centerY:3.9,radius:2.3,difficulty:3,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,7,8,9,10,8,6,4,2,3,5,7,9,8,7,6,6],obstacles:[{x:7.5,width:.6,y0:1.64,y1:6.3}]},{distance:20.5,centerY:5.9,radius:2,difficulty:3,bumps:[0,0,1,1,2,1,1,0,0,1,2,3,5,3,2,1,0,2,5,7,10,8,7,6,5,6,7,8,10,7,5,3,1,2,4,6,8,8,9,9,10,10,10,10,10,10],obstacles:[{x:10,width:.9,y0:2.64,y1:8.64}]},{distance:22.5,centerY:5.3,radius:2.5,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,5,5,4,4,3,2,1,0,0,0,0,0,1,2,3,4,3,2,1,0,1,2,3,5,3,2,1,0,2,5,7,10,10,10,10,10,10],obstacles:[{x:6,width:1.4,y0:2.54,y1:7.9}]}],[{distance:12,centerY:5.5,radius:1.2,difficulty:3,bumps:[0,0,0,0,0,0,0,0,0,1,2,3,4,3,2,1,0,0,0,0,0,1,3,5,7,5,3,1],obstacles:[{x:7.5,width:1.1,y0:.84,y1:6.84}]},{distance:16.5,centerY:6.2,radius:2,difficulty:3,bumps:[0,1,3,5,7,5,3,1,0,0,1,2,3,2,1,0,0,0,0,0,0,1,2,3,5,6,7,8,10,11,12,13,15,14,13,12,11,11],obstacles:[{x:5.5,width:1,y0:1.14,y1:7.14}]},{distance:12.5,centerY:6.9,radius:1.4,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,2,4,6,8,9,11,13,15,16,17,18,19,18,18,18,18,18,18,18,19,18],obstacles:[{x:4.5,width:.7,y0:1.14,y1:7.14}]},{distance:17.5,centerY:6.8,radius:2.4,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,1,3,5,7,5,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,5,5,5,6,4,3,1],obstacles:[{x:4,width:.6,y0:.84,y1:6.84}]},{distance:20,centerY:6.6,radius:2.3,difficulty:5,bumps:[0,0,0,0,0,1,3,4,6,4,3,1,0,1,3,5,7,7,8,8,9,7,6,5,4,4,4,4,5,3,2,1,0,0,0,0,0,2,4,6,9,9,10,10,11],obstacles:[{x:7,width:1.4,y0:3.14,y1:9.14}]},{distance:19.5,centerY:3.5,radius:1.8,difficulty:6,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,5,7,8,10,12,14,13,12,11,10,11,13,14,16,13,11,9,7,5,4,3,2,1,1,1,1],obstacles:[{x:6,width:.7,y0:2.94,y1:7.8}]},{distance:16,centerY:3.4,radius:2.4,difficulty:7,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,7,10,8,6,4,3,2,1],obstacles:[{x:6,width:1.1,y0:2.74,y1:7.9}]},{distance:21.5,centerY:6.1,radius:1.9,difficulty:7,bumps:[0,0,0,0,0,0,1,2,3,2,2,2,2,1,1,1,1,2,3,4,6,6,7,7,8,6,5,3,2,4,6,8,11,10,9,8,7,7,7,7,8,9,11,13,15,14,14,13],obstacles:[{x:5.5,width:.6,y0:2.64,y1:8.64}]}],[{distance:11,centerY:6.6,radius:2.4,difficulty:5,bumps:[0,1,2,3,5,4,4,4,4,3,2,1,0,1,3,5,7,5,4,3,2,1,1,0,0,2,4],obstacles:[{x:6.5,width:1,y0:2.44,y1:8.44}]},{distance:10.5,centerY:3.9,radius:2.5,difficulty:6,bumps:[0,0,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,4,6,7],obstacles:[{x:5,width:1.2,y0:.84,y1:6.84}]},{distance:19.5,centerY:3.7,radius:1.9,difficulty:6,bumps:[0,0,0,0,0,0,0,0,0,1,2,3,4,6,8,10,12,12,12,12,12,11,10,9,8,8,8,8,8,6,4,2,0,2,5,7,10,8,7,5,4,3,2,1],obstacles:[{x:8,width:1,y0:2.64,y1:8.64}]},{distance:15.5,centerY:7.4,radius:2.6,difficulty:7,bumps:[0,1,2,3,4,3,2,1,0,2,5,7,10,10,10,10,10,9,9,9,9,11,14,16,19,21,23,25,27,27,28,29,30,30,30,30],obstacles:[{x:6,width:1,y0:3.54,y1:9.54},{x:6.5,width:1.5,y0:2.74,y1:8.74}]},{distance:10.5,centerY:4.2,radius:2.6,difficulty:8,bumps:[0,2,5,7,10,10,11,11,12,11,10,9,9,11,14,16,19,17,15,13,12,13,15,16,18,16],obstacles:[{x:4,width:.7,y0:2.14,y1:7.7},{x:5.5,width:1.2,y0:1.94,y1:7.94}]},{distance:15.5,centerY:6.9,radius:2.4,difficulty:8,bumps:[0,0,0,0,0,2,4,6,8,6,4,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,6,7,9,11,14,16],obstacles:[{x:4,width:.7,y0:2.34,y1:8.34}]},{distance:11.5,centerY:4.5,radius:2.2,difficulty:9,bumps:[0,0,0,0,0,1,2,3,5,3,2,1,0,1,3,5,7,8,10,12,14,14,14,14,14,13,12,11],obstacles:[{x:4,width:1.4,y0:3.44,y1:7.9},{x:7,width:.7,y0:1.44,y1:7.44}]},{distance:19,centerY:4.4,radius:2,difficulty:9,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,3,4,5,6,5,4,3,2,4,6,8,10,10,10,10,10,8,7,6,5,5,6],obstacles:[{x:5.5,width:1,y0:2.94,y1:8.94}]}]]),z0=1,_R=Bt.minAngle,yR=Bt.maxAngle,H0=Bt.minPull,G0=1,vR=76,bR=48,gm=24,xm=11,MR=1.5,Lh=Object.freeze({width:0,lo:0,hi:0}),_m=n=>n.score===10,ym=n=>n.hit,vm=(n,e,t)=>Array.from({length:t},(i,s)=>n+(e-n)*s/(t-1));function bm(n,e,t,i){const s=a=>Ch(n,{angle:a,power:e}),r=i.map(s);return t.map(a=>{const o=[];i.forEach((u,d)=>{o.push({a:u,ok:a(r[d])});const h=r[d],p=r[d+1];if(!o[o.length-1].ok&&p&&!a(p)&&h.impact&&p.impact&&(h.impact.y-n.target.centerY)*(p.impact.y-n.target.centerY)<0){let g=u,y=i[d+1],m=h.impact.y-n.target.centerY,f=!1;for(let b=0;b<gm&&!f;b++){const M=(g+y)/2,T=s(M);if(!T.impact){f=!0;break}(T.impact.y-n.target.centerY)*m>0?g=M:y=M}const v=(g+y)/2;!f&&a(s(v))&&o.push({a:v,ok:!0})}});const c=(u,d)=>{for(let h=0;h<gm;h++){const p=(u+d)/2;a(s(p))?u=p:d=p}return u};let l=Lh;for(let u=0;u<o.length;u++){if(!o[u].ok)continue;let d=u;for(;d+1<o.length&&o[d+1].ok;)d++;const h=u===0?o[0].a:c(o[u].a,o[u-1].a),p=d===o.length-1?o[d].a:c(o[d].a,o[d+1].a);p-h>l.width&&(l={width:p-h,lo:h,hi:p}),u=d}return l})}function SR(n,e,t){const i={w1:{power:e[0],win:Lh},w10:{power:e[0],win:Lh}},s=a=>{const[o,c]=bm(n,a,[ym,_m],t);o.width>i.w1.win.width&&(i.w1={power:a,win:o}),c.width>i.w10.win.width&&(i.w10={power:a,win:c})};e.forEach(s);const r=e[1]-e[0];for(const a of["w1","w10"]){if(!i[a].win.width)continue;let o=i[a].power,c=r;for(let l=0;l<3;l++,c/=3){for(let u=-3;u<=3;u++){if(u===0)continue;const d=Math.min(G0,Math.max(H0,o+c*u/3)),h=bm(n,d,[a==="w1"?ym:_m],t)[0];h.width>i[a].win.width&&(i[a]={power:d,win:h})}o=i[a].power}}return i}function wR(n,e,t,i){const s=o=>{const c=Du({...n,wind:o},{angle:t,power:i}),l=vg(c,e.target.faceX);return l===null?null:nn(c,l).y},r=s(n.wind),a=s(n.wind+1);return r===null||a===null?null:Math.abs(a-r)}const V0=n=>Math.min(2,Math.round(Math.abs(n)/MR));function ER(n,e,t){const i=Math.min(1,Math.max(0,Math.log(xm/n)/Math.log(xm/z0))),s=(e?1:0)+V0(t);return Math.min(10,Math.max(1,Math.round(1+7*i)+s))}function TR(n,e={}){const t=oa(n),i=vm(_R,yR,e.angles??vR),s=SR(t,vm(H0,G0,e.powers??bR),i),r=s.w1.win.width,a=s.w10.win.width,o=_A(t),c=a>0,l=(s.w10.win.lo+s.w10.win.hi)/2;return Object.freeze({solvable:r>0,window:r,window10:a,power10:c?s.w10.power:null,obstructed:o,windSensitivity:c?wR(n,t,l,s.w10.power):null,difficulty:c?ER(a,o,n.wind):null})}function AR(n,e={}){const t=xA(n);if(t.length)return Object.freeze({admitted:!1,reasons:Object.freeze(t),measure:null});const i=TR(n,e);return i.window10>=z0||t.push("window-below-min"),Object.freeze({admitted:t.length===0,reasons:Object.freeze(t),measure:i})}const Mm=6,RR=5,CR=3,IR=15;function PR(n){return n<Mm?0:Math.min(IR,RR+CR*(n-Mm))/10}const LR=(n,e)=>JSON.stringify(["level",is,n,e]),DR=(n,e)=>a1(PR(e),LR(n,e)),Sm=4,La=4,wm=10,NR=4,UR=10,kR=3,Em=[10,60],Bu=no([{from:0,dLo:1,dHi:2,d2:[24,40],r:[22,26],cyHi:45,amp:0,obstacles:[0,0],over:[0,0],gap:[0,0],x:[4,4]},{from:3,dLo:2,dHi:4,d2:[24,50],r:[14,26],cyHi:60,amp:10,obstacles:[1,1],over:[20,40],gap:[0,20],x:[8,24]},{from:6,dLo:3,dHi:7,d2:[24,44],r:[12,24],cyHi:70,amp:20,obstacles:[1,1],over:[20,45],gap:[0,30],x:[8,16]},{from:10,dLo:5,dHi:9,d2:[20,40],r:[9,26],cyHi:75,amp:30,obstacles:[1,2],over:[30,60],gap:[0,30],x:[8,16]}]);function OR(n,e=Bu){let t=0;for(let i=0;i<e.length;i++)n>=e[i].from&&(t=i);return t}const FR=n=>Math.floor((435*n+999)/1e3),BR=Math.round(dr*100),W0=n=>n+2*sR+1;function zR(n,e,t,i=null){const s=(f,v,b,...M)=>f+B0(n,b,e,...M)%(v-f+1),r=s(t.d2[0],t.d2[1],"distance"),a=FR(r),o=Math.max(t.r[0],a),c=s(o,Math.max(t.r[1],o),"radius"),l=W0(r),u=[0];for(let f=1;f<=Math.floor((l-1)/La)+1;f++){const v=s(-wm,wm,"knot",f);u.push(Math.min(t.amp,Math.max(0,u[f-1]+v)))}const d=Array.from({length:l},(f,v)=>{const b=Math.floor(v/La),M=v%La;return Math.floor((u[b]*(La-M)+u[b+1]*M)/La)}),h=Math.max(d[r-1],d[r]),p=Math.max(10,c+h+kR),g=s(p,Math.max(t.cyHi,p),"centerY"),y=s(t.obstacles[0],t.obstacles[1],"obstacle-count"),m=[];for(let f=0;f<y;f++){const v=s(6,15,"obstacle-width",f),b=s(t.over[0],t.over[1],"obstacle-over",f),M=Math.floor((r*5-UR-v)/5),T=Math.min(M,Math.max(NR,t.x[0])),R=s(T,Math.max(T,Math.min(M,t.x[1])),"obstacle-x",f),I=R,x=Math.ceil((R*5+v)/5)-1;let E=0;for(let W=I;W<=x;W++)E=Math.max(E,d[W]);const k=s(t.gap[0],t.gap[1],"obstacle-gap",f),C=BR+10*(E+k),U=10*(g+b),z=Math.min(C+10*Em[1],Math.max(C+10*Em[0],U));m.push({x:R/2,width:v/10,y0:C/100,y1:z/100})}return m.sort((f,v)=>f.x-v.x||f.y0-v.y0||f.y1-v.y1||f.width-v.width),{generator:Fu,rules:i===null?k0:is,target:{distance:r/2,centerY:g/10,radius:c/10},ground:{step:O0,scale:F0,heights:d},obstacles:m,wind:i??0}}function HR(n,e,t){const i=xR[e];if(!i||i.length===0)throw new RangeError(`no fallback pool for band ${e}`);const s=i[B0(n,"fallback")%i.length],r=W0(s.distance*2),a=Array.from({length:r},(o,c)=>s.bumps?.[c]??0);return{generator:Fu,rules:t,target:{distance:s.distance,centerY:s.centerY,radius:s.radius},ground:{step:O0,scale:F0,heights:a},obstacles:(s.obstacles??[]).map(o=>({...o})),wind:0,difficulty:s.difficulty,fallback:!0}}function GR(n,e,t=Bu,i=!1){const s=cR(n,e),r=i?DR(n,e):null,a=OR(e,t),o=t[a];let c=!1;for(let l=0;l<Sm;l++){const u=zR(s,l,o,r),d=AR(u);if(!d.admitted)continue;c=!0;const h=d.measure?.difficulty??0,p=h-V0(u.wind);if(p>=o.dLo&&p<=o.dHi)return{level:no({...u,difficulty:h,fallback:!1}),attempts:l+1,fallback:null,window10:d.measure?.window10??null}}return{level:no(HR(s,a,r===null?k0:is)),attempts:Sm,fallback:c?"out-of-band":"never-admissible",window10:null}}const X0=(n,e,t=!1)=>GR(n,e,Bu,t).level,Ga=5,zu=n=>!!n&&typeof n=="object"&&!Array.isArray(n),Oa=(n,e,t)=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=e&&n<=t,VR=/^\d{4}-\d{2}-\d{2}$/;class $0 extends Error{constructor(){super("The shared board response was not understood."),this.name="BoardProtocolError"}}const ci=()=>{throw new $0};function Tm(n){return!zu(n)||Object.keys(n).length!==6||!Oa(n.rank,1,1e6)||typeof n.initials!="string"||!/^[a-z]{3}$/.test(n.initials)||typeof n.own!="boolean"||!Oa(n.total,0,Zs*sn)||!Oa(n.tens,0,sn)||!Oa(n.inner,0,sn)?ci():Object.freeze({rank:n.rank,initials:n.initials,total:n.total,tens:n.tens,inner:n.inner,own:n.own})}function Dh(n){if(!zu(n)||n.rulesVersion!==ca||n.levelRules!==is||typeof n.day!="string"||!VR.test(n.day)||typeof n.published!="boolean"||!Array.isArray(n.entries)||n.entries.length>Ga)return ci();const e=n.entries.map(Tm),t=n.own===null?null:Tm(n.own);return e.some((i,s)=>s>0&&i.rank<e[s-1].rank)||e.some(i=>i.rank>Ga)||t&&(!t.own||!n.published||e.length<Ga||t.rank<e[e.length-1].rank)||e.filter(i=>i.own).length>1||e.some(i=>i.own)&&(t||!n.published)||n.published&&!t&&!e.some(i=>i.own)?ci():Object.freeze({day:n.day,published:n.published,entries:Object.freeze(e),own:t})}function WR(n,e){const t=Dh(n),i=n;return i.published!==!0||!t.published||i.attemptId!==e.attemptId||t.day!==e.day||typeof i.initials!="string"||!/^[a-z]{3}$/.test(i.initials)||i.total!==e.total||i.tens!==e.tens||i.inner!==e.inner||!Oa(i.revision,e.revision+1,e.revision+1)?ci():Object.freeze({...t,initials:i.initials,total:e.total,tens:e.tens,inner:e.inner,revision:i.revision,attemptId:e.attemptId})}function XR(n){return`${n.initials}${n.own?" · you":""} — ${n.total} pts${n.tens?` · ${n.tens} perfect`:""}`}function $R(n){return[...n.entries.map(e=>({entry:e,outside:!1})),...n.own?[{entry:n.own,outside:!0}]:[]]}function YR(n,e){return n?.status==="finished"&&!e}function Am(n,e){return`${e?"Daily shot":"Today's daily shot"} · top ${Ga}${n?` · ${n}`:""}`}function jR(n,e){return!zu(n)||n.type!=="board-changed"?!1:n.format==="one-shot"==(e==="one-shot")}function qR(n){return{hidden:!n,disabled:!n}}function KR(n){switch(n){case"initials":case"input":return"focus-initials";case"published":return"mark-published";case"expired":return"expired";case"changed":return"reload";default:return"show-retry"}}const JR=1500,Xi=n=>!!n&&typeof n=="object"&&!Array.isArray(n),qr=(n,e,t)=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=e&&n<=t,Rn=n=>typeof n=="number"&&Number.isFinite(n),ZR=["face","ground","obstacle","timeout"],QR=/^\d{4}-\d{2}-\d{2}$/;class Wr extends Error{constructor(e="The shared response was not understood."){super(e),this.name="DailyProtocolError"}}class dc extends Error{constructor(e){super(e),this.name="DailyInputError"}}class hc extends Error{constructor(e){super(e),this.name="DailyUnavailableError"}}const Sn=()=>{throw new Wr};function eC(n){if(!Xi(n)||typeof n.generator!="string"||n.rules!==is||!Rn(n.wind))return Sn();const{target:e,ground:t,obstacles:i}=n;return!Xi(e)||!Rn(e.distance)||!Rn(e.centerY)||!Rn(e.radius)||e.radius<=0||!Xi(t)||!Rn(t.step)||t.step<=0||!Rn(t.scale)||!Array.isArray(t.heights)||!t.heights.every(Rn)||!Array.isArray(i)||!i.every(s=>Xi(s)&&Rn(s.x)&&Rn(s.width)&&Rn(s.y0)&&Rn(s.y1))?Sn():n}function Y0(n){return!Xi(n)||!Xi(n.aim)||!Rn(n.aim.angle)||!Rn(n.aim.power)||!qr(n.points,0,Zs)||typeof n.innerBullseye!="boolean"||typeof n.onFace!="boolean"||!qr(n.ring,0,10)||typeof n.cause!="string"||!ZR.includes(n.cause)||!Rn(n.x)||!Rn(n.y)||!qr(n.distanceTenths,0,1e6)?Sn():Object.freeze({aim:{angle:n.aim.angle,power:n.aim.power},points:n.points,innerBullseye:n.innerBullseye,onFace:n.onFace,ring:n.ring,cause:n.cause,x:n.x,y:n.y,distanceTenths:n.distanceTenths})}function j0(n){if(!Xi(n)||typeof n.attemptId!="string"||!n.attemptId||n.rulesVersion!==ca||n.levelRules!==is||n.length!==sn||typeof n.day!="string"||!QR.test(n.day)||!qr(n.next,0,sn)||!qr(n.revision,0,1e6))return Sn();const e=n.status;if(e!=="active"&&e!=="finished"&&e!=="expired"||!Array.isArray(n.shots)||n.shots.length!==n.next)return Sn();const t=n.shots.map(Y0);let i=T0();try{for(const r of t)i=A0(i,{points:r.points,landing:{innerBullseye:r.innerBullseye}})}catch{return Sn()}if(n.total!==i.total||n.tens!==i.tens||n.inner!==i.inner||e==="finished"!=(n.next===sn))return Sn();const s=e==="active"?eC(n.level):n.level===void 0?null:Sn();return Object.freeze({attemptId:n.attemptId,day:n.day,next:n.next,revision:n.revision,status:e,shots:Object.freeze(t),total:i.total,tens:i.tens,inner:i.inner,level:s})}function tC(n){const e=j0(n),t=n;return!qr(t.index,0,sn-1)||t.index!==e.next-1?Sn():Object.freeze({...e,index:t.index,outcome:Y0(t.outcome)})}const q0=n=>({points:n.points,distanceTenths:n.distanceTenths,landing:{x:n.x,y:n.y,onFace:n.onFace,ring:n.ring,innerBullseye:n.innerBullseye,cause:n.cause}});function nC(n){if(!Xi(n)||!Array.isArray(n.formats)||!n.formats.includes("one-shot")||!Xi(n.oneShot))return!1;const e=n.oneShot;return e.rulesVersion===ca&&e.levelRules===is&&e.length===sn}function K0(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e>>>0}const iC=n=>new Date(n).toISOString().slice(0,10);function sC(n,e,t=!1){return n.status==="finished"?t||n.day>=e?{text:"Come back tomorrow for the next daily shot.",startToday:!1}:{text:`This run belongs to ${n.day}. The next daily is ready.`,startToday:!0}:n.status==="expired"?{text:"This run expired before it was finished, so it was not scored. Start today's run.",startToday:!0}:null}function rC(n){return n==="sending"?" · scoring…":n==="failed"?" · not saved, retry":""}const aC="The shared service is busy. Wait a moment, then retry.",oC="The daily shot needs a connection. Try again, or practice with One shot, which works offline.",Rm="The daily shot needs browser storage to keep your run. Practice with One shot, which works without it.";function al(n,e="shot"){if(n instanceof Fn){const t=n.code;return e==="publish"&&t==="initials"?{kind:"initials",message:"Choose another three-letter name."}:e==="publish"&&t==="already_published"?{kind:"published",message:"This run is already on the board."}:t==="levels_unavailable"?{kind:"unavailable",message:"The daily shot is unavailable right now. Try again later."}:n.status===429||t==="level_busy"||t==="level_capacity"?{kind:"busy",message:aC}:n.status===410||t==="run_expired"?{kind:"expired",message:"This run has expired. Start today's run."}:t==="rules_version"?{kind:"unavailable",message:"This version of the daily shot is no longer available. Reload the page."}:n.status===409||n.status===404?{kind:"changed",message:"This run changed on another screen. Reloading it."}:e==="publish"&&n.status>=400&&n.status<500?{kind:"changed",message:"The shared service did not accept this result. Reloading the run."}:e==="shot"&&n.status>=400&&n.status<500?{kind:"changed",message:"The shared service did not accept this shot. Reloading the run."}:{kind:"error",message:e==="start"?"The daily shot is unavailable right now. Try again later.":e==="publish"?"The shared service could not publish the result. Retry.":"The shared service could not save the shot. Retry."}}return n instanceof dc?{kind:"input",message:n.message}:n instanceof hc?{kind:"unavailable",message:n.message}:n instanceof $0?{kind:"error",message:`${n.message} Retry.`}:n instanceof Wr?{kind:"error",message:`${n.message} Retry.`}:n instanceof Error&&n.message.startsWith("Guest identity changed")?{kind:"error",message:n.message}:{kind:"offline",message:e==="start"?oC:`No connection to the shared service. Check your network, then retry; ${e==="publish"?"your result is":"the shot is"} not lost.`}}function Cm(n){return n instanceof Fn?n.status===429||n.status>=500:!0}const cC=100;function lC(n){return!n.current||!n.wanted?"stop":n.blocked?n.waits>=cC?"give-up":"wait":"go"}function dC(n){return n>=5?null:Math.min(3e4,2e3*2**n)}function hC(n,e,t=!1){return n?.status==="active"&&e==="daily"&&!t?{action:"noop"}:{action:"switch"}}class uC{run=null;pending=null;publishing=null;busy=!1;revision=null;session;makeId;constructor(e,t=()=>crypto.randomUUID()){this.session=e,this.makeId=t}check(){const e=this.revision??this.session.revision;return this.session.assertRevision(e),this.revision=e,e}adopt(e,t){return this.session.assertRevision(t),this.run=e,this.pending=null,e}async available(){try{return nC(await this.session.readRules())}catch{return null}}async start(){if(this.busy)throw new Error("Finish the pending request first.");this.pending=null,this.publishing=null,this.busy=!0;try{const e=await this.session.ensure(),t=j0(await this.session.request("/one-shot/runs",{rulesVersion:ca}));return this.revision=e.revision,this.adopt(t,e.revision)}finally{this.busy=!1}}async shot(e){if(!this.run||this.run.status!=="active"||this.pending||this.busy)throw new Error("Finish the pending shot first.");return this.check(),this.pending={url:`/one-shot/runs/${encodeURIComponent(this.run.attemptId)}/shots`,index:this.run.next,body:{actionId:this.makeId(),expectedRevision:this.run.revision,aim:{angle:e.angle,power:e.power}}},this.retry()}async retry(){const e=this.pending,t=this.run;if(!e||!t||this.busy)throw new Error("No retryable shot.");const i=this.check();this.busy=!0;try{const s=tC(await this.session.request(e.url,e.body));if(this.pending!==e||this.run!==t)throw new Wr("The run changed while the shot was pending.");if(s.attemptId!==t.attemptId||s.index!==e.index||s.revision!==t.revision+1||s.day!==t.day)throw new Wr("The shared response does not match the pending shot.");return this.adopt(s,i),s}catch(s){throw s instanceof Fn&&s.status===410&&this.pending===e&&this.run===t?(this.pending=null,this.run=Object.freeze({...t,status:"expired",level:null})):!Cm(s)&&this.pending===e&&(this.pending=null),s}finally{this.busy=!1}}async todayBoard(){const e=this.session.revision,t=Dh(await this.session.request(`/leaderboards/one-shot?rulesVersion=${encodeURIComponent(ca)}`));return this.session.assertRevision(e),t}async board(){const e=this.run;if(!e||e.status!=="finished")throw new dc("Finish the run first.");const t=this.check(),i=Dh(await this.session.request(`/one-shot/runs/${encodeURIComponent(e.attemptId)}/board`));if(this.session.assertRevision(t),i.day!==e.day)throw new Wr("The board is for another day.");return i}async publish(e){const t=this.run;if(!t||t.status!=="finished"||this.pending||this.busy)throw new dc("Finish the run first.");const i=this.check();if(!this.publishing){const r=e.trim().toLowerCase();if(!/^[a-z]{3}$/.test(r))throw new dc("Use exactly three letters A–Z.");this.publishing={url:`/one-shot/runs/${encodeURIComponent(t.attemptId)}/publish`,body:{actionId:this.makeId(),expectedRevision:t.revision,initials:r},revision:i}}const s=this.publishing;this.busy=!0;try{const r=WR(await this.session.request(s.url,s.body),{attemptId:t.attemptId,day:t.day,total:t.total,tens:t.tens,inner:t.inner,revision:s.body.expectedRevision});if(this.session.assertRevision(s.revision),this.publishing!==s||this.run!==t)throw new Wr("The run changed while the publish was pending.");return this.publishing=null,this.run=Object.freeze({...t,revision:r.revision}),r}catch(r){throw!Cm(r)&&this.publishing===s&&(this.publishing=null),r instanceof Fn&&r.status===410&&this.run===t&&(this.run=Object.freeze({...t,status:"expired"})),r}finally{this.busy=!1}}forget(){this.run=null,this.pending=null,this.publishing=null,this.revision=null}}const w=n=>document.getElementById(n),ze=w("scene");let ht="range",Be,Ye=null,jn="",qs=0,J0=null,yt=null,io="";const fC=new Hw;let _d="",yd=[];function pC(n){for(const e of yd)e.removeAttribute("inert");if(yd=[],!!n)for(let e=w("arena-shell");e&&e!==document.body;e=e.parentElement)for(const t of Array.from(e.parentElement?.children??[]))t!==e&&!t.hasAttribute("inert")&&t.tagName!=="SCRIPT"&&(t.setAttribute("inert",""),yd.push(t))}function mC(){for(const n of["skirmish-title","mode-combat"]){const e=document.getElementById(n);if(e&&!e.hidden&&e.offsetParent!==null){e.focus();return}}}let Ct="private",Gt=!1,bs=!1;const Z0=w("status"),Q0=w("phase"),fi=w("retry"),mo=w("fire"),Oc=w("pause"),la=w("angle"),da=w("power"),Va=w("drag-marker"),gC=w("gesture-hint"),xC=w("gesture-icon"),_C=w("gesture-text"),Hu=matchMedia(DA),ex=matchMedia(NA);let Gu=!1;try{Gu=kA(localStorage)}catch{}const yC=w("rotate-hint"),uc=w("stage-retry");function ol(){yC.hidden=!UA({portraitPhone:ex.matches,dismissed:Gu,view:ht})}function vC(){uc.hidden=fi.hidden,uc.disabled=fi.disabled,uc.textContent=fi.textContent}const Kr=w("theme"),cl=document.getElementById("guide"),Im=Ic(Nn).map(()=>{const n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("r",String(Nn.radiusPx)),n.setAttribute("stroke-width",String(Nn.outlinePx)),cl.append(n),n}),Da=w("arrow-cue");let Fa=Qs(),tx=Qs(),nx=0,fc="visit",fs={angle:29,pull:.2+.62*.5},Ba=0,Fc={tip:{...Zt},angle:29*Math.PI/180},Mn="light";try{Mn=nR(localStorage,matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}let oe="ready",bt={angle:29,power:.62},qe=null,It=!1,gt=null,un=0,ll=0,Bc=performance.now(),so=0,Pm="",ns;try{ns=new zS({canvas:ze,antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{throw Z0.textContent="This clearing needs WebGL. Please try a browser with graphics enabled.",Q0.textContent="GRAPHICS UNAVAILABLE",ze.hidden=!0,mo.disabled=!0,Oc.disabled=!0,new Error("WebGL unavailable")}ns.setClearColor("#dce8df");ns.shadowMap.enabled=!0;ns.shadowMap.type=za;ns.outputColorSpace=Wn;const it=new tg;it.fog=new Kh("#dce8df",38,80);const Kn=new uo(-11,11,10,-10,.1,100);Kn.position.set(0,9,30);Kn.lookAt(0,3.7,0);const Nh=new hg("#fff7d7","#6a8161",2.6);it.add(Nh);const xr=new fg("#fff4d6",3);xr.position.set(-8,16,10);xr.castShadow=!0;xr.shadow.mapSize.set(1024,1024);Object.assign(xr.shadow.camera,{left:-16,right:16,top:15,bottom:-12,near:.5,far:60});xr.shadow.bias=-.002;it.add(xr);const pc=new Map;function go(n){return pc.has(n)||pc.set(n,new rc({color:n,roughness:1,metalness:0,flatShading:!0})),pc.get(n)}function st(n,e,t,i,s,r,a,o){const c=new Ke(new pr(s,r,a),go(o));return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function xo(n,e,t,i,s){const r=st(n,0,0,0,i,e.distanceTo(t),i,s);return r.position.copy(e).add(t).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new F(0,1,0),t.clone().sub(e).normalize()),r}const Nt=(n,e,t=0)=>new F(n,e,t),ha={x:(tn.minX+tn.maxX)/2,y:(tn.minY+tn.maxY)/2},zc=st(it,(tn.minX+tn.maxX)/2,(tn.minY+tn.maxY)/2,-.45,tn.maxX-tn.minX,tn.maxY-tn.minY,.9,"#cc684a");st(it,ha.x,ha.y,.015,.61,.12,.025,"#f4ddb3");st(it,ha.x,ha.y,.035,.14,.32,.025,"#4b3c31");st(it,8.31,.3,-.45,1.35,.6,1.5,"#66734a");st(it,0,-.25,-2,27,.9,14,"#7d9461");st(it,0,-.9,-2,27,.4,14,"#8d7653");st(it,0,-1.65,-2,26.2,1.1,13.4,"#b1a17b");for(let n=0;n<7;n++){const e=-16+n*5.5,t=new Ke(new ho(6+n%3,9+n%4,4),go(n%2?"#afc5ae":"#c2d1bb"));t.position.set(e,3,-18-n%2*3),t.rotation.y=Math.PI/4,it.add(t)}function dl(n,e,t){st(it,n,1*t,e,.3*t,2*t,.3*t,"#7c7853"),st(it,n,3*t,e,1.8*t,2.2*t,1.7*t,"#718d65"),st(it,n-.3*t,4.1*t,e,1.3*t,1.2*t,1.25*t,"#89a176")}dl(-11.3,-3.8,1.2);dl(-3.2,-6.5,.8);dl(5.8,-7,1.05);dl(11.8,-4.5,1.4);for(let n=0;n<34;n++){const e=Math.sin(n*73.3)*12,t=-2-Math.cos(n*29.1)*3;st(it,e,.25,t,.16,.2+n%3*.08,.17,n%6===0?"#e5d0a1":"#96ab6f")}for(const[n,e,t]of[[-4,-1,.5],[4,-2,.7],[10,1,.5]])st(it,n,.3,e,t,t*.65,t,"#a7ae94");const ei=new Kt;it.add(ei);st(ei,-8.02,.55,0,.36,.8,.4,"#38473f");st(ei,-7.32,.55,0,.36,.8,.4,"#38473f");st(ei,-8.08,.2,.12,.64,.24,.55,"#4c4938");st(ei,-7.26,.2,.12,.64,.24,.55,"#4c4938");st(ei,-7.72,1.61,0,.85,1.5,.6,"#d19b58");st(ei,-7.72,1.15,.32,.95,.18,.12,"#6b6845");st(ei,-7.72,2.66,0,.65,.65,.6,"#eac795");st(ei,-7.85,3,-.04,.95,.27,.76,"#4d6e57");st(ei,-7.98,2.72,-.02,.23,.45,.65,"#4d6e57");st(ei,-7.4,2.73,.32,.08,.08,.07,"#34483c");xo(ei,Nt(-8.14,1.6,-.38),Nt(-8.36,2.8,-.38),.28,"#786244");const ua=new Kt;ua.position.set(Zt.x,Zt.y,.12);it.add(ua);const vd=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let n=1;n<vd.length;n++)xo(ua,Nt(...vd[n-1]),Nt(...vd[n]),.075,"#78523c");const ix=new Xt().setFromPoints([Nt(0,-.92),Nt(-.3,0),Nt(0,.92)]),bC=new ms(ix,new ta({color:"#f1e7bf"}));ua.add(bC);const MC=xo(it,Nt(-7.7,2.3,.42),Nt(Zt.x,Zt.y,.42),.23,"#eac795"),SC=xo(it,Nt(-7.95,2.3,.45),Nt(-7.8,2.7,.3),.22,"#d19b58"),wC=xo(it,Nt(-7.8,2.7,.3),Nt(-7.3,2.7,.12),.18,"#eac795"),EC=st(it,-7.3,2.7,.12,.19,.19,.19,"#eac795");function bd(n,e,t){const i=n.geometry.parameters.height;n.scale.y=e.distanceTo(t)/i,n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(Nt(0,1,0),t.clone().sub(e).normalize())}function TC(){const n=new Kt;st(n,-.6,0,0,1.2,.045,.045,"#f3dfaa");const e=new Ke(new ho(.085,.24,4),go("#58685d"));return e.rotation.z=-Math.PI/2,e.position.x=-.12,n.add(e),st(n,-1.08,0,0,.22,.17,.04,"#e9e6c8"),it.add(n),n}const Hi=TC(),Uh=new Xt,va=new ms(Uh,new ta({color:"#f6edcf",transparent:!0,opacity:.55}));it.add(va);const Rs=Array.from({length:9},(n,e)=>{const t=st(it,0,0,0,.08+e%2*.05,.08,.08,"#ffedb7");return t.visible=!1,t});let ue=null,fn=null,Li=!1,Ue=!1,_o=!1,Cs;try{Cs=localStorage}catch{}const Ms=new GA(Cs),Hc=ew(Array.from(document.querySelectorAll('meta[name="archery-api"]'),n=>n.content),location.origin),Jt=Hc?new Jc(Hc,fetch,Cs):null,mc=Jt?new Vr(Jt):null,$e=Jt?new VA(Jt.endpoint,fetch,Cs,Jt):null,kt=Jt?new uC(Jt):null,Ws=Jt?new Qg(Jt,"private"):null,Xr=Jt?new Qg(Jt,"public"):null;function sx(n,e){const t=w(n);t.hidden=!e.visible,t.caption.textContent=e.title,t.tBodies[0].replaceChildren(...e.rows.map(i=>{const s=document.createElement("tr");return s.dataset.actorId=i.actorId,s.dataset.own=String(i.own),s.dataset.leader=String(i.leader),[i.own?`${i.label} · you`:i.label,String(i.shots),i.accuracy,String(i.damage),String(i.kills)].forEach((r,a)=>{const o=document.createElement("td");o.textContent=r,a===0&&(o.title=r),s.append(o)}),s}))}const Vu=new Kt;for(const n of[zc,...it.children.filter(e=>e instanceof Ke&&e!==zc&&(e.position.x===ha.x&&e.position.y===ha.y||e.position.x===8.31&&e.position.y===.3))])Vu.add(n);it.add(Vu);const Ei=new Kt;it.add(Ei);Ei.visible=!1;const ba=new Kt;it.add(ba);ba.visible=!1;st(ba,13,-.25,-2,25,.9,14,"#7d9461");st(ba,13,-.9,-2,25,.4,14,"#8d7653");st(ba,13,-1.65,-2,25,1.1,13.4,"#b1a17b");let Ut=null,Ln=null,Ji=null,Vt=null;const ro=new Kt;it.add(ro);ro.visible=!1;const kh=new a0(()=>ze.parentElement,"level-wind"),hl=["practice","course","endless","daily","oneshot"];let Ne=null,hr=null,Ti=!1,Md="",er=null;const rx=[];let Wu="",ao=!1,tr=!1,Sd=0,ax=!1,Wa="",et=!1,nr="idle",Ss=null;const Gc=[];let gc=null;const kn=new Kt;it.add(kn);const oo=()=>ue?.format??(et?"daily":Ne?"oneshot":"practice"),Vc=()=>!!ue&&(ue.status!=="active"||oe==="hit"||oe==="miss")||!!Ne&&(Ne.run.status!=="active"||kt?.run?.status==="expired"&&et||oe==="hit"||oe==="miss");function ox(){kn.userData={};for(const n of[...kn.children])kn.remove(n),n instanceof Ke&&(n.geometry.dispose(),n.material.dispose())}function cx(n,e){ox();const t=Math.max(e.centerY-e.radius,Math.min(e.centerY+e.radius,n.y)),i=e.faceX-n.x,s=t-n.y,r=Math.hypot(i,s),a=Math.atan2(s,i),o=.22,c=.14,l=h=>new ui({color:h});for(let h=0;h<r-1e-6&&r>.05;h+=o+c){const p=Math.min(o,r-h),g=h+p/2,y=new Ke(new es(p,.07),l("#fff4d6"));y.position.set(n.x+Math.cos(a)*g,n.y+Math.sin(a)*g,.3),y.rotation.z=a,kn.add(y)}const u=new Ke(new Es(.24,24),l("#fff4d6"));u.position.set(n.x,n.y,.29),kn.add(u);const d=new Ke(new Es(.16,24),l("#d9402b"));d.position.set(n.x,n.y,.31),kn.add(d),kn.userData={x:n.x,y:n.y,toY:t},lx(n)}function lx(n){if(n.cause!=="obstacle"||!Ut)return;const e=aA(rl(Ut).obstacles,n);if(!e)return;const t=e.x1-e.x0,i=e.y1-e.y0,s=(e.x0+e.x1)/2,r=(e.y0+e.y1)/2,a=.07,o=new Ke(new es(t,i),new ui({color:"#d9402b",transparent:!0,opacity:.28,depthTest:!1}));o.position.set(s,r,.27),o.renderOrder=5,kn.add(o);for(const[c,l,u,d]of[[t+a,a,s,e.y1],[t+a,a,s,e.y0],[a,i+a,e.x0,r],[a,i+a,e.x1,r]]){const h=new Ke(new es(c,l),new ui({color:"#fff4d6",depthTest:!1}));h.position.set(u,d,.28),h.renderOrder=6,kn.add(h)}kn.userData={...kn.userData,obstacle:{x0:e.x0,x1:e.x1,y0:e.y0,y1:e.y1}}}const Wc=new Kt;it.add(Wc);function Xu(){delete ze.dataset.arc;for(const n of[...Wc.children])Wc.remove(n),n instanceof ms&&(n.geometry.dispose(),n.material.dispose())}function $u(){if(Xu(),!gt)return;const n=new ms(new Xt().setFromPoints(oA(un,48).map(e=>{const t=jr(gt,e,Fc).position;return Nt(t.x,t.y,.05)})),new lg({color:"#fff4d6",transparent:!0,opacity:.55,dashSize:.14,gapSize:.12}));n.computeLineDistances(),Wc.add(n),ze.dataset.arc=String(n.geometry.getAttribute("position").count)}let Xa=!1;const dx=()=>{Xa&&!(ht==="range"&&!It&&Vc()&&(oe==="hit"||oe==="miss"))&&(Xa=!1),document.body.toggleAttribute("data-peek",Xa)};let _s=null;const Is=()=>!!Ut&&!ue,hx=n=>Is()?Du(Ut,n):qc(n),Qo=["#f5f1df","#f5f1df","#222d2a","#222d2a","#59a6c5","#59a6c5","#d96350","#d96350","#efc655","#efc655"];function Yu(){const n=ue.shots.length;return Ru(ue.format,Math.max(0,fn||ue.status!=="active"?n-1:n))}function ju(){if(ht==="range")if(ue){const n=Yu();md(Kn,$i/Yi,{minX:n.faceX-.1,maxX:n.faceX+.1,minY:n.centerY-n.radius,maxY:n.centerY+n.radius})}else Is()?md(Kn,$i/Yi,uR(Ut)):md(Kn,$i/Yi)}function Lm(n,e){for(let t=0;t<10;t++){const i=n.radius*(10-t)/10,s=new Ke(new Es(i,48),go(Qo[t]));s.rotation.y=-Math.PI/2,s.position.set(n.faceX-t*.001,n.centerY,0),Ei.add(s),st(Ei,n.faceX-.035,n.centerY+i-n.radius/20,0,.09,n.radius/10,.07,Qo[t]),st(Ei,n.faceX-.035,n.centerY-i+n.radius/20,0,.09,n.radius/10,.07,Qo[t]);const r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("r",String((10-t)/10)),r.setAttribute("fill",Qo[t]),r.setAttribute("stroke",t<4?"#a8ada0":"#384d46"),r.setAttribute("stroke-width",".01"),w("face-rings").append(r)}st(Ei,n.faceX,e.y,-.12,.18,e.height,.18,"#786244")}function yo(){const n=Is();Vu.visible=!ue&&!n,Ei.visible=!!ue||n,ba.visible=!!ue||n,ro.visible=n,w("face-inset").hidden=!ue&&!n||!!Ne;for(const e of[...Ei.children])Ei.remove(e),e instanceof Ke&&e.geometry.dispose();if(w("face-rings").replaceChildren(),w("face-impact").setAttribute("hidden",""),ox(),Xu(),ue)Lm(Yu(),{y:.5,height:1});else if(n){const e=Ln.target,t=e.centerY-e.radius;Lm(e,{y:(.24+Math.max(.24,t))/2,height:Math.max(.2,t-.24)})}n&&Ut&&Ji?(pR(ro,Ut,Ji,st),ul(),kh.update(Ut.wind,Ut.rules===is?1:0)):kh.hide(),Ne&&Ti&&er&&Ln&&cx(er,Ln.target),AC(),ju()}function AC(){if(Vt||delete ze.dataset.levelOutcome,!Is()||!Ut){delete ze.dataset.levelStage;return}const n=document.getElementById("level-wind");ze.dataset.levelStage=JSON.stringify({theme:Ji?.name,face:gR(Ei),...mR(ro),wind:{value:n?.dataset.wind===void 0?null:Number(n.dataset.wind),text:n&&!n.hidden?n.textContent:null}})}function RC(){const n=It||Ue||!!$e?.pending||oe==="flying"||oe==="aiming";for(const e of hl){const t=w(`mode-${e}`);t.disabled=YA({busy:Ue,pending:!!$e?.pending,state:oe}),t.setAttribute("aria-pressed",String(e===oo()))}ue?.status!=="active"&&(w("mode-note").textContent=Wa),w("challenge-panel").hidden=!ue&&!Ne,w("practice-stats").hidden=!!ue||!!Ne;for(const e of["challenge-restart","challenge-leave","challenge-bank","clear-identity"])w(e).disabled=n||It;if(w("online-mode").disabled=n||!!ue,ue){const e=Yu(),t=ue.status!=="active";w("challenge-name").textContent=`${ue.format==="course"?"12-arrow course":"Endless"} · ${Li?"shared scoring":"local"}`,w("challenge-total").textContent=`${ue.total}${ue.format==="course"?" / 120":""} points`;const i=BA(ue.format,ue.shots.length,!!fn);w("challenge-progress").textContent=`${t?"Completed":`Arrow ${i.arrow}${ue.format==="course"?" of 12":""}`} · ${t?e.distance:i.distance} units · ${ue.misses} ${ue.format==="endless"?"/ 3 ":""}misses · ${ue.innerBullseyes} inner bullseyes`,w("challenge-rules").textContent=ue.format==="course"?"3 arrows each at 12, 18, 24 and 30 units. Ten rings, 10 points at center.":"Three misses ends the run. Every 3 arrows: +2 units (max 30), radius −0.1 (min 0.8). End & bank between shots.",w("challenge-bank").hidden=ue.format!=="endless"||t||!ue.shots.length,w("result-actions").hidden=!L0(ue);for(const s of["result-again","result-practice"])w(s).disabled=n;fi.hidden=t||!["hit","miss"].includes(oe),fi.textContent=`${Rh(!0)} ↗`,mo.disabled||=t||oe==="hit"||oe==="miss"||Ue||!!$e?.pending,la.disabled||=t||oe==="hit"||oe==="miss"||Ue||!!$e?.pending,da.disabled||=t||oe==="hit"||oe==="miss"||Ue||!!$e?.pending,w("gesture-hint").hidden||=t||Ue||!!$e?.pending,w("publish-form").hidden=!(t&&Li&&!_o),w("initials").disabled=Ue||$e?.pending?.kind==="publish",w("publish").disabled=Ue||!!$e?.pending&&$e.pending.kind==="action"}else fi.innerHTML=`${Rh(!1)} <span>↗</span>`,w("publish-form").hidden=!0,w("result-actions").hidden=!0;ze.dataset.format=oo(),CC()}function CC(){const n=!!Ne;if(w("oneshot-strip").hidden=!n,w("result-new").hidden=!n,w("result-again").textContent=n?"Replay these levels":"Play again",w("daily-note").hidden=!0,w("challenge-restart").hidden=!1,w("challenge-leave").textContent="Abandon to practice",!n){Md="",delete ze.dataset.oneShot,w("oneshot-strip").replaceChildren();return}const e=Ne,t=e.run.status==="completed",i=It||oe==="flying"||oe==="aiming"||Ue,s=et?kt?.run??null:null,r=s?.status==="expired",a=t||r,o=s&&a?sC(s,iC(Date.now()),ax):null;w("challenge-name").textContent=et?`Daily shot · ${s?.day??""} · scored online`:"One shot · local, unscored",w("challenge-total").textContent=t?ku(e):`${e.run.total} points`,w("challenge-progress").textContent=et?t?`Run complete · ${sn} levels`:r?`Run expired · ${e.run.shots.length} of ${sn} levels played`:`${lm(e,Ti)}${rC(nr)}`:`${t?`Run complete · ${sn} levels`:lm(e,Ti)} · seed ${e.seed}`,w("challenge-rules").textContent=et?`${sn} levels, one arrow each, one scored run a day (UTC). The server scores every arrow and keeps your place: reload to pick up where you left off.`:`${sn} levels, one arrow each. Landing close to the face still scores; wind starts at level 7. Nothing is saved or sent: this run stays on this device.`,w("daily-note").hidden=!o,w("daily-note").textContent=o?.text??"",w("challenge-bank").hidden=!0,w("challenge-restart").hidden=et,w("challenge-leave").textContent=et?"Back to practice":"Abandon to practice",w("result-actions").hidden=!a,w("publish-form").hidden=!(et&&YR(s,ao)),w("initials").disabled=Ue,w("publish").disabled=Ue,w("result-again").textContent=et?"Practice with One shot":"Replay these levels",w("result-new").hidden=et?!o?.startToday:!1,w("result-new").textContent=et?"Start today's run":"New run";for(const d of["result-again","result-new","result-practice"])w(d).disabled=i;fi.hidden=a||!["hit","miss"].includes(oe)||et&&!Ti,fi.textContent=`${Rh(!0,"level")} ↗`;const c=a||oe==="hit"||oe==="miss";mo.disabled||=c,la.disabled||=c,da.disabled||=c,w("gesture-hint").hidden||=t,w("face-inset").hidden=!0;const l=IA(e),u=JSON.stringify(l);u!==Md&&(Md=u,w("oneshot-strip").replaceChildren(...l.map(d=>{const h=document.createElement("li");return h.dataset.state=d.state,h.dataset.index=String(d.index),d.tier&&(h.dataset.tier=d.tier,h.dataset.points=String(d.points)),h.textContent=d.label,h.setAttribute("aria-label",d.tier?`Level ${d.index+1}: ${d.points} points`:d.state==="current"?`Level ${d.index+1}: next`:`Level ${d.index+1}: not played`),h}))),ze.dataset.oneShot=JSON.stringify({seed:e.seed,level:Uu(e),resolved:Ti,status:e.run.status,total:e.run.total,shots:e.reports.map(d=>({points:d.points,tier:d.tier,value:d.value,caption:d.caption})),landing:kn.children.length?kn.userData:null})}let ir=0;async function Gi(n=""){const e=++ir,t=w("board-format").value;if(t==="one-shot"){await IC(e,n);return}const i=t;w("local-column").hidden=!1,w("shared-board-title").textContent="Shared · best per guest",w("board-rules").textContent=`Rules ${to} · ties share a rank · score, ${i==="endless"?"hits, ":""}inner bullseyes, tens`;const s=Ms.results(i);if(w("local-empty").hidden=s.length>0,w("local-board").replaceChildren(...s.slice(0,10).map(r=>{const a=document.createElement("li");return a.textContent=`${r.total} points · ${r.hits} hits · ${r.shots.length} arrows`,a})),w("challenge-storage").textContent=Ms.message,!$e){ys({phase:"off",format:i});return}w("shared-board").replaceChildren(),ys({phase:"loading",format:i}),w("shared-status").textContent=n||"Loading shared board…";try{const r=await $e.boards(i);if(e!==ir)return;DC(r),ys({phase:"loaded",entryCount:r.length,format:i}),w("shared-status").textContent=n||"Shared boards available. Choose shared scoring before starting a challenge."}catch(r){if(e!==ir)return;w("shared-status").textContent=`${n?n+" ":""}Shared boards unavailable. ${r instanceof Error?r.message:"Try later."} Local challenges are playable.`,w("shared-board").replaceChildren(),ys({phase:"error",format:i})}}async function IC(n,e){const t=et?kt?.run??null:null,i=t?.status==="finished";if(w("board-rules").textContent=`Rules ${ca} · one scored run a UTC day · ties share a rank · total, then 100-point shots, then inner bullseyes`,w("local-column").hidden=!0,w("shared-board-title").textContent=Am(i?t.day:null,i),w("shared-board").replaceChildren(),!kt){ys({phase:"off",format:"one-shot"});return}ys({phase:"loading",format:"one-shot"}),w("shared-status").textContent=e||"Loading the daily board…";try{const s=i?await kt.board():await kt.todayBoard();if(n!==ir)return;PC(s),w("shared-board-title").textContent=Am(s.day,i),i&&(ao=s.published,Je()),ys({phase:"loaded",entryCount:s.entries.length,format:"one-shot"}),w("shared-status").textContent=e||i&&s.published&&Wu||(i&&!s.published?"Publish your initials to put this run on the board.":s.entries.length?`Top ${Ga} for ${s.day}.`:"")}catch(s){if(n!==ir)return;w("shared-board").replaceChildren(),ys({phase:"error",format:"one-shot"}),w("shared-status").textContent=`${e?e+" ":""}The daily board could not be loaded. ${al(s).message}`}}function PC(n){w("shared-board").replaceChildren(...$R(n).map(({entry:e,outside:t})=>{const i=document.createElement("li");return i.value=e.rank,i.dataset.own=String(e.own),t&&(i.dataset.outside="true"),i.textContent=XR(e),i}))}function LC(){w("board-format").value="one-shot",Gi()}async function Dm(){if(Ue||!kt)return;const n=w("initials").value;Ue=!0,++ir,Je();let e="";try{const t=await kt.publish(n);Ms.saveInitials(t.initials),ao=!0,w("network-recovery").hidden=!0,w("publish-form").hidden=!0,e=Wu=`Published as ${t.initials.toUpperCase()}. Your run is on the board for ${t.day}.`}catch(t){const i=al(t,"publish");switch(KR(i.kind)){case"focus-initials":w("shared-status").textContent=i.message,w("initials").focus();break;case"mark-published":ao=!0,w("publish-form").hidden=!0,e=i.message;break;case"expired":Ft(i.message,"RUN EXPIRED");break;case"reload":Ft(i.message,"RUN CHANGED"),qu();break;case"show-retry":w("network-recovery").hidden=!1,w("network-message").textContent=i.message;{const s=w("network-retry");s.hidden=!kt.publishing,s.textContent="Retry publishing"}w("network-local").textContent="Practice with One shot";break}}finally{Ue=!1,Je()}e&&(w("shared-status").textContent=e,await Gi(e))}function ys(n){const e=tR(n),t=w("shared-empty");t.textContent=e.emptyText,t.hidden=!e.emptyText}function DC(n){w("shared-board").replaceChildren(...n.map(e=>{const t=document.createElement("li");return t.value=e.rank,t.dataset.own=String(e.own),t.textContent=`${e.initials}${e.own?" · you":""} — ${e.total} points · ${e.hits} hits`,t}))}function $a(n){w("network-retry").textContent="Retry pending action",w("network-local").textContent="Start a new local challenge",w("network-recovery").hidden=!1,w("network-message").textContent=`${n instanceof Error?n.message:"Connection interrupted."} No result has been promoted to the shared board.`,w("network-retry").hidden=!$e?.pending,Ft("Shared action needs attention. Retry it or start a new local challenge.","CHALLENGE WAITING"),Je()}function Oh(){if(ue?.status!=="completed")return!1;const n=Li||Ms.save(ue);return Gi(),n}function NC(n){FA({landscapePhone:Hu.matches,view:ht,outcome:n})&&scrollTo({top:w("arena-shell").getBoundingClientRect().top+scrollY,behavior:"instant"})}async function Vn(n,e=!1,t,i=!1){const s=ht==="combat";if(s&&(Ju("range"),oo()===n))return"switched";if(Ue||oe==="flying"||qe)return s?"switched":"unchanged";const r=i?{action:"switch"}:et?hC(kt?.run??null,n,tr):Ne?LA(Ne,n):$A(ue,n,e);if(r.action==="noop"||$e?.pending&&!e)return s?"switched":"unchanged";if(r.action==="confirm"&&!N0(()=>confirm(Ne?"Abandon this one-shot run? Nothing from it is saved.":"Abandon this challenge? Its unfinished score will not be banked.")))return w("mode-note").textContent=r.declineMessage,s?"switched":"unchanged";w("mode-note").textContent="",Wa="",It&&_r(!1),e&&($e.pending=null),Ue=!0,Je();let a="switched";try{const o=n==="oneshot",c=n==="daily",l=!o&&!c&&n!=="practice"&&!e&&!!$e&&w("online-mode").checked;let u=null,d=null;c&&(d=await kC(),tr=!1,ax=d.status==="finished"),!o&&!c&&n!=="practice"&&(u=l?(await $e.start(n)).state:M0(n)),ue=u,Li=l,fn=null,Vt=null,_o=!1,ao=!1,Wu="",et=c,c||(tr=!1),nr="idle",Ss=null,Gc.length=0,c||kt?.forget(),d?(Ne=UC(d),d.level&&(Gc[d.next]=d.level)):Ne=o?R0(t??CA(h=>crypto.getRandomValues(h))):null,hr=null,Ti=!1,er=null,rx.length=0,Ne&&(!et||d.status==="active")?gx():Ne?(Ut=null,Ln=null,Ji=null):gc?(Ut=gc.level,Ln=oa(Ut),Ji=gc.theme):(Ut=null,Ln=null,Ji=null),w("network-recovery").hidden=!0,w("publish-form").hidden=!0,w("board-format").value=d?.status==="finished"?"one-shot":n==="practice"||o||c?"course":n,oe="ready",gt=null,un=0,va.visible=!1,w("shot-result").hidden=!0;for(const h of Rs)h.visible=!1;yo(),d?.status==="finished"?Ft(`Run complete: ${ku(Ne)}.`,"RUN COMPLETE"):d?.status==="expired"?Ft("This run expired before it was finished, so it was not scored.","RUN EXPIRED"):Ft(d&&d.next>0?`Welcome back. Level ${d.next+1} is next.`:"Pull back. Breathe. Release.",o||c?"LEVEL READY":ue?"CHALLENGE READY":"YOUR NEXT SHOT"),(!o&&!c||d?.status==="finished")&&Gi()}catch(o){a="failed",n==="daily"?(Wa=al(o,"start").message,w("mode-note").textContent=Wa):$a(o)}finally{Ue=!1,Je()}return a}function UC(n){let e=R0(K0(n.day));for(const t of n.shots)e=C0(e,q0(t),0);return e}async function kC(){if(!kt||!Jt)throw new hc("The daily shot is unavailable right now. Try again later.");if(!Cs)throw new hc(Rm);await Jt.ensure();let n=null;try{n=Cs.getItem(Jt.storageKeys.identity)}catch{}if(n===null)throw new hc(Rm);return kt.start()}async function ux(n,e=!1){nr="sending",Ss=null,Ue=!0,w("network-recovery").hidden=!0,Je();try{Ss=e?await kt.retry():await kt.shot(n),nr="idle"}catch(t){nr="failed",OC(t)}finally{Ue=!1}Ss?fx():Je()}function OC(n){const e=al(n);if(e.kind==="expired"){nr="idle",Ft(e.message,"RUN EXPIRED");return}if(e.kind==="changed"&&!kt?.pending){Ft(e.message,"RUN CHANGED"),qu();return}w("network-recovery").hidden=!1,w("network-message").textContent=e.message;const t=w("network-retry");t.hidden=!kt?.pending,t.textContent="Retry saving shot",w("network-local").textContent="Practice with One shot",Ft("Saving shot… Retry when you are ready. The shot is not lost.","SAVING SHOT")}function qu(){tr=!0;const n=++Sd;let e=0;const t=s=>{w("network-recovery").hidden=!1,w("network-message").textContent=`${s} Your shots are saved on the server.`;const r=w("network-retry");r.hidden=!1,r.textContent="Reload the run",w("network-local").textContent="Practice with One shot"},i=async()=>{const s=lC({current:n===Sd,wanted:et&&tr,blocked:oe==="flying"||Ue||!!qe||!!$e?.pending,waits:e});if(s==="stop")return;if(s==="wait"){e++,setTimeout(i,100);return}if(s==="give-up"){t("Could not reload the run yet.");return}const r=await Vn("daily",!1,void 0,!0);if(!(n!==Sd||!et||!tr)){if(r==="unchanged"){e++,setTimeout(i,200);return}t(r==="failed"?Wa||"Could not reload the run.":"Reload the run to continue.")}};setTimeout(i,0)}function fx(){if(!et||!Ss||oe!=="hit"&&oe!=="miss"||!gt)return;const n=Ss;Ss=null,hr=q0(n.outcome),n.level&&(Gc[n.next]=n.level),px()}async function FC(n){Ue=!0,Je();try{ue=Li?(await $e.shot(n)).state:Pu(ue,n),fn=ue.shots.at(-1).outcome,Xc(n)}catch(e){oe="ready",$a(e)}finally{Ue=!1,Je()}}function BC(){if(!ue||!fn||!gt)return;oe=fn.hit?"hit":"miss",un=fn.at,ll=so,$u(),w("shot-result-caption").textContent="Actual impact · ten-ring scoring",w("shot-result-value").textContent=fn.hit?`${fn.score} points${fn.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",w("shot-result").hidden=!1;const n=fn.impact;if(n){const t=ue.shots.at(-1).target,i=w("face-impact");i.setAttribute("cx","0"),i.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-t.centerY)/t.radius)))),i.removeAttribute("hidden")}const e=Oh();Ft(ue.status==="completed"?`${ue.total} points. ${Li?"Publish with your initials below.":e?"Saved to this browser’s local board.":Ms.message}`:fn.hit?"On the face. Take your next arrow when ready.":"Outside the face. Take your next arrow when ready.",ue.status==="completed"?"CHALLENGE COMPLETE":fn.hit?"SCORED":"MISS"),Je(),Fh()}function zC(){if(!Vt||!gt)return;if(oe=Vt.hit?"hit":"miss",un=Vt.at,ll=so,$u(),et){(nr==="sending"||Ss)&&Ft("Scoring…","SCORING"),fx(),Je();return}if(Ne&&hr){px();return}w("shot-result-caption").textContent="Level shot · ten-ring face · local, not scored",w("shot-result-value").textContent=Vt.hit?`${Vt.score} points${Vt.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",w("shot-result").hidden=!1;const n=Vt.impact,e=Ln.target;if(!Vt.hit&&!n&&lx(E0(Ln,bt)),n){const t=w("face-impact");t.setAttribute("cx","0"),t.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-e.centerY)/e.radius)))),t.removeAttribute("hidden")}Ft(Vt.hit?"On the face.":"Stopped short or off the face. Try again.",Vt.hit?"TARGET HIT":"ANOTHER TRY"),Je()}function px(){const n=hr,e=Ln.target;hr=null,Ne=C0(Ne,n,Ut.wind),Ti=!0;const t=Ne.reports.at(-1),i=Ne.run.status==="completed",s=Ne.run.shots.length;w("shot-result-value").textContent=t.value,w("shot-result-caption").textContent=dA(`Level ${s} of ${sn} · ${t.caption}`,n.landing.onFace),w("shot-result").hidden=!1;const r=et?n.landing.onFace?{y:n.landing.y}:null:Vt.impact;if(r){const a=w("face-impact");a.setAttribute("cx","0"),a.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(r.y-e.centerY)/e.radius)))),a.removeAttribute("hidden")}er=n.landing.onFace?null:n.landing,er&&cx(er,e),Ft(i?`Run complete: ${ku(Ne)}.`:`${t.value}. Tap Next level when you are ready.`,i?"RUN COMPLETE":"LEVEL SCORED"),Je(),i&&et&&LC(),!i&&!et&&setTimeout(()=>{Ne&&mx(Uu(Ne))},0)}const mx=n=>rx[n]??=X0(Ne.seed,n,!0);function gx(){const n=Uu(Ne);if(et){Ut=Gc[n]??null,Ln=Ut?oa(Ut):null,Ji=Ut?kc(K0(kt.run.day),n):null;return}Ut=mx(n),Ln=oa(Ut),Ji=kc(Ne.seed,n)}function HC(){if(!(!Ne||!Ti||Ne.run.status!=="active")){Ti=!1,hr=null,er=null,Vt=null,gx(),oe="ready",gt=null,un=0,va.visible=!1,w("shot-result").hidden=!0;for(const n of Rs)n.visible=!1;yo(),Ft("Pull back. Breathe. Release.","LEVEL READY"),Je()}}function Fh(){if(oe==="flying")return;const n=HA(ue?.status==="completed",window.matchMedia("(pointer: coarse)").matches,D0(ue,Li,_o)),e=n==="initials"?w("initials"):n==="result"?w("status"):null;e&&!e.disabled&&e.offsetParent!==null&&e.focus({preventScroll:!0})}function ec(){return!D0(ue,Li,_o)||N0(()=>confirm(zA))}function GC(){for(const i of hl)w(`mode-${i}`).addEventListener("click",()=>{Vn(i).then(NC)});w("challenge-restart").addEventListener("click",()=>{ec()&&Vn(oo())}),w("challenge-leave").addEventListener("click",()=>{ec()&&Vn("practice")}),w("result-again").addEventListener("click",()=>{ec()&&(et?Vn("oneshot"):Ne?Vn("oneshot",!1,Ne.seed):Vn(ue.format))}),w("result-new").addEventListener("click",()=>{et?Vn("daily"):Ne&&Vn("oneshot")}),w("result-practice").addEventListener("click",()=>{ec()&&Vn("practice")}),w("challenge-bank").addEventListener("click",async()=>{if(!(!ue||Ue||It||qe||oe==="flying"||$e?.pending)){Ue=!0,Je();try{ue=Li?(await $e.bank()).state:Lu(ue);const i=Oh();Ft(`${ue.total} points banked.${i?"":" "+Ms.message}`,"CHALLENGE COMPLETE")}catch(i){$a(i)}finally{Ue=!1,Je(),Fh()}}}),w("board-format").addEventListener("change",()=>{Gi()}),w("network-local").addEventListener("click",()=>{et?Vn("oneshot"):Vn(ue?.format??"course",!0)}),w("network-retry").addEventListener("click",async()=>{if(et&&tr){Ue||qu();return}if(et&&kt?.publishing){Ue||Dm();return}if(et&&kt?.pending){Ue||ux(kt.pending.body.aim,!0);return}if(!(Ue||!$e?.pending)){if($e.pending.kind==="publish"){w("publish-form").requestSubmit();return}Ue=!0,Je();try{const i=$e.pending.body.kind;if(ue=(await $e.retry()).state,w("network-recovery").hidden=!0,i==="shot"){const s=ue.shots.at(-1);fn=s.outcome,Xc(s.aim)}else Oh(),Ft(`${ue.total} points banked.`,"CHALLENGE COMPLETE")}catch(i){$a(i)}finally{Ue=!1,Je(),Fh()}}}),w("publish-form").addEventListener("submit",async i=>{if(i.preventDefault(),et){Dm();return}if(Ue||!$e)return;const s=w("initials").value.trim().toLowerCase();Ue=!0,++ir,Je();try{await $e.publish(s),Ms.saveInitials(s),_o=!0,w("network-recovery").hidden=!0,w("publish-form").hidden=!0;const r="Published. The shared board keeps your strongest result for this format and rules version.";w("shared-status").textContent=r,await Gi(r)}catch(r){$a(r)}finally{Ue=!1,Je()}}),w("clear-identity").addEventListener("click",()=>{Ue||oe==="flying"||qe||$e?.pending||confirm("Forget this browser’s shared guest identity? Any unfinished challenge is abandoned. Published scores remain, and this browser will no longer own them. Local results and saved practice stay.")&&($e?.forget(),Ye?.forgetRoom(),yt?.forgetArena(),Be.clearSnapshot(),ue=null,fn=null,Li=!1,w("online-mode").checked=!1,Vn("practice",!0))});let n=0,e;const t=()=>{kt&&(clearTimeout(e),kt.available().then(i=>{if(i===null){const r=dC(n++);r!==null&&(e=setTimeout(t,r));return}n=0,w("mode-daily").hidden=!i&&oo()!=="daily";const s=w("board-format").querySelector('option[value="one-shot"]');Object.assign(s,qR(i)),!i&&w("board-format").value==="one-shot"&&!et&&(w("board-format").value="course",Gi())}))};if(t(),window.addEventListener("online",()=>{n=0,t()}),w("initials").value=Ms.initials(),w("online-choice").hidden=!$e,w("clear-identity").hidden=!$e,Gi(),$e){const i=new WebSocket(Jt.endpoint.boardSocket);let s;i.addEventListener("message",r=>{try{const a=JSON.parse(String(r.data));jR(a,w("board-format").value)&&(clearTimeout(s),s=setTimeout(()=>{Gi()},JR))}catch{}}),window.addEventListener("pagehide",()=>i.close(),{once:!0})}}const VC={"#cc684a":"#cf785c","#7d9461":"#445c48","#8d7653":"#645b47","#b1a17b":"#7d765f","#afc5ae":"#3b5150","#c2d1bb":"#465e5b","#718d65":"#405d4d","#89a176":"#58735a","#96ab6f":"#64794d","#a7ae94":"#737f6e","#66734a":"#556343","#8f9a5a":"#596238","#a08c68":"#6c5f47","#7c9a5c":"#4a6238","#9a8b78":"#665c4f","#7d8590":"#515962","#8a6a4a":"#5b4630","#b7a88f":"#7a7060","#a0a8b2":"#6c737c","#a98763":"#725a41"};function ul(){Be?.setTheme(Mn),document.documentElement.dataset.theme=Mn,Kr.setAttribute("aria-pressed",String(Mn==="dark")),Kr.setAttribute("aria-label",Mn==="dark"?"Switch to light theme":"Switch to dark theme"),Kr.textContent=Mn==="dark"?"☀ Light":"☾ Dark";const n=Mn==="dark"?"#202f36":"#dce8df";ns.setClearColor(n),it.fog.color.set(n),Nh.color.set(Mn==="dark"?"#c6d7e8":"#fff7d7"),Nh.groundColor.set(Mn==="dark"?"#435b4b":"#6a8161"),xr.color.set(Mn==="dark"?"#d7def1":"#fff4d6");for(const[e,t]of pc)t.color.set(Mn==="dark"?VC[e]??e:e);document.querySelector('meta[name="theme-color"]')?.setAttribute("content",Mn==="dark"?"#18231f":"#eef2de")}function fl(){const n=fc==="visit"?Fa:tx;w("shots-value").textContent=String(n.completed),w("hit-count-value").textContent=String(n.hits),w("hits-value").textContent=n.completed?`${Math.round(n.hits/n.completed*100)}%`:"0%",w("best-value").textContent=n.best===null?"—":`${n.best.toFixed(2)} units`,w("mean-value").textContent=n.mean===null?"—":`${n.mean.toFixed(2)} units`,w("streak-value").textContent=String(n.currentStreak),w("best-streak-value").textContent=String(n.bestStreak),w("spread-value").textContent=n.completed?`${Math.sqrt(n.m2/n.completed).toFixed(2)} units`:"—",w("recent-shots").replaceChildren(...n.recent.map(e=>{const t=document.createElement("li");return t.textContent=`${e.hit?"Hit":"Miss"} · ${e.distance.toFixed(2)} units · ${e.angle.toFixed(1)}° · ${(e.power*100).toFixed(1)}% power`,t})),w("recent-empty").hidden=n.completed>0,w("visit-stats").setAttribute("aria-pressed",String(fc==="visit")),w("saved-stats").setAttribute("aria-pressed",String(fc==="saved"))}const pl=new ZA(n=>{tx=n.stats,w("save-status").textContent=n.message,w("save-status").dataset.state=n.state,fl()});for(const[n,e]of[["visit-stats","visit"],["saved-stats","saved"]])w(n).addEventListener("click",()=>{qe||(fc=e,fl(),e==="saved"&&pl.refresh())});document.querySelector(".recent-details summary")?.addEventListener("click",n=>{qe&&n.preventDefault()});w("clear-practice").addEventListener("click",()=>{qe||(w("clear-confirmation").hidden=!1)});w("cancel-clear").addEventListener("click",()=>{qe||(w("clear-confirmation").hidden=!0)});w("confirm-clear").addEventListener("click",()=>{qe||(w("clear-confirmation").hidden=!0,pl.clear())});window.addEventListener("focus",()=>{ht==="range"&&pl.refresh()});function Ft(n,e){Z0.textContent=n,Q0.textContent=e}function Je(){if(document.body.toggleAttribute("data-aiming",ht==="range"&&oe==="aiming"),dx(),ht!=="range")return;w("angle-value").textContent=`${Math.round(bt.angle)}°`,w("power-value").textContent=`${Math.round(bt.power*100)}%`,w("angle-meter").style.width=`${bt.angle/80*100}%`,w("power-meter").style.width=`${bt.power*100}%`,la.value=String(Math.round(bt.angle)),da.value=String(Math.round(bt.power*100));const n=It||oe==="aiming"||oe==="flying"||Ue||!!$e?.pending;Kr.disabled=oe==="aiming",w("mode-combat").disabled=oe==="aiming"||Ue||!!$e?.pending;for(const t of["visit-stats","saved-stats","clear-practice","confirm-clear","cancel-clear"])w(t).disabled=oe==="aiming";mo.disabled=n,la.disabled=n,da.disabled=n,fi.hidden=oe!=="hit"&&oe!=="miss";const e=iA(oe,!!ue||!!Ne,Hu.matches?"on-stage":"below",Ne?"level":"arrow");gC.hidden=!e||It,e&&(xC.textContent=e.icon,_C.textContent=e.text),ze.dataset.state=oe,ze.dataset.paused=String(It),RC(),vC()}function co(){if(!(oe==="flying"||It||Ue||$e?.pending||ue&&ue.status!=="active")){if(Ne){HC();return}(ue||Is())&&(fn=null,Vt=null,yo()),oe="ready",gt=null,un=0,va.visible=!1,w("shot-result").hidden=!0;for(const n of Rs)n.visible=!1;Ft("Pull back. Breathe. Release.","YOUR NEXT SHOT"),Je()}}function Ku(){if(ht==="range"&&!(It||oe==="flying"||Ue||$e?.pending)){if(ue){if(ue.status!=="active"||oe!=="ready"&&oe!=="aiming")return;FC({...bt});return}if(!(Ne&&(Ne.run.status!=="active"||Ti||oe!=="ready"&&oe!=="aiming"))){if(et){if(!Is()||kt?.run?.status!=="active")return;Vt=Ch(Ln,bt),ze.dataset.levelOutcome=JSON.stringify(Vt);const n={...bt};Xc(n),ux(n);return}Is()&&(Vt=Ch(Ln,bt),ze.dataset.levelOutcome=JSON.stringify(Vt),Ne&&(hr=wA(Ln,bt))),Xc(bt)}}}function Xc(n){bt={...n};const e=Cc(fs,Ba),t=fs.angle*Math.PI/180;Fc={tip:{x:e.nock.x+Math.cos(t)*1.2,y:e.nock.y+Math.sin(t)*1.2},angle:t},gt=hx(bt),ze.dataset.shot=JSON.stringify(gt),nx++,un=0,oe="flying",va.visible=!0,Xu(),w("shot-result").hidden=!0;for(const i of Rs)i.visible=!1;Ft("Let it fly…","ARROW IN FLIGHT"),Je()}function wd(n,e){if(oe!=="flying"||!gt)return;oe=n?"hit":"miss",un=e,ll=so,w("shot-result-caption").textContent="Closest approach · this shot";const t=jA(gt,HS,e),i=Fa;Fa=Ou(Fa,nx,n,t,bt),fl(),Fa!==i&&pl.append({hit:n,distance:t,...bt}),w("shot-result-value").textContent=`${t.toFixed(2)} units from center`,w("shot-result").hidden=!1;const s=nn(gt,e),r=(tn.minX-gt.origin.x)/gt.velocity.x,a=nn(gt,r);Pm=a.y>tn.maxY?"A little high. Try less angle or draw.":a.y<tn.minY?"A little low. Try more draw or angle.":"Just short. Give it a little more draw.",Ft(n?"A lovely shot.":Pm,n?"TARGET HIT":"ANOTHER TRY");for(const o of Rs)o.position.set(s.x,s.y,.2);Je()}function gi(n=!0){if(!qe)return;const e=qe;qe=null,ze.hasPointerCapture(e.id)&&ze.releasePointerCapture(e.id),bt=e.previous,Va.hidden=!0,oe="ready",n&&Ft("Draw cancelled. Take your time.","YOUR NEXT SHOT"),Je()}function _r(n){gi(!1),It=n,Bc=performance.now(),w("paused").hidden=!It,Oc.textContent=It?"▶":"Ⅱ",Oc.setAttribute("aria-label",It?"Resume game":"Pause game"),Je()}ze.addEventListener("pointerdown",n=>{if(ht!=="range")return;if(!It&&Vc()&&(oe==="hit"||oe==="miss")&&n.isPrimary&&n.button===0){_s={id:n.pointerId,x:n.clientX,y:n.clientY,at:n.timeStamp},ze.setPointerCapture(n.pointerId);return}if(_s=null,It||oe==="flying"||Ue||$e?.pending||Vc()||qe||!n.isPrimary||n.button!==0)return;n.preventDefault(),(oe==="hit"||oe==="miss")&&co();const e=ze.getBoundingClientRect();qe={id:n.pointerId,x:n.clientX,y:n.clientY,width:e.width,height:e.height,vw:innerWidth,vh:innerHeight,previous:{...bt},valid:!1},ze.setPointerCapture(n.pointerId),ze.focus({preventScroll:!0}),Va.style.left=`${n.clientX-e.left}px`,Va.style.top=`${n.clientY-e.top}px`,Va.hidden=!1,oe="aiming",Ft("Pull left and down. Release to shoot.","FIND YOUR ARC"),Je()});function xx(n){if(ht!=="range"||!qe||n.pointerId!==qe.id)return;const e=eu(n.clientX-qe.x,n.clientY-qe.y,qe.width,qe.height);qe.valid=e!==null,e&&(bt=e),Ft(e?"Release when it feels right.":"Pull left and down to draw the bow.","FIND YOUR ARC"),Je()}ze.addEventListener("pointermove",xx);ze.addEventListener("pointerup",n=>{if(ht!=="range")return;if(_s&&n.pointerId===_s.id){const t=_s;_s=null,cA(n.clientX-t.x,n.clientY-t.y,n.timeStamp-t.at)&&(Xa=!Xa,Je());return}if(!qe||n.pointerId!==qe.id)return;if(xx(n),!qe?.valid){gi();return}const e=qe.id;qe=null,Va.hidden=!0,ze.hasPointerCapture(e)&&ze.releasePointerCapture(e),Ku()});ze.addEventListener("pointercancel",n=>{_s?.id===n.pointerId&&(_s=null),qe?.id===n.pointerId&&gi()});ze.addEventListener("lostpointercapture",n=>{qe?.id===n.pointerId&&gi()});ze.addEventListener("contextmenu",n=>n.preventDefault());function WC(){return!qe||P0(qe,ze.getBoundingClientRect())}function XC(){return!qe||P0({width:qe.vw,height:qe.vh},{width:innerWidth,height:innerHeight})}window.addEventListener("resize",()=>{ht==="range"?XC()&&gi():Be.cancelInput()});window.addEventListener("orientationchange",()=>{ht==="range"?gi():Be.cancelInput()});for(const n of[Hu,ex])n.addEventListener("change",()=>{ol(),Je()});w("rotate-hint-dismiss").addEventListener("click",()=>{Gu=!0;try{OA(localStorage)}catch{}ol(),ze.focus({preventScroll:!0})});uc.addEventListener("click",()=>fi.click());ol();window.addEventListener("blur",()=>{ht==="range"?_r(!0):Be.cancelInput()});document.addEventListener("visibilitychange",()=>{document.hidden&&(ht==="range"?_r(!0):Be.cancelInput())});Oc.addEventListener("click",()=>_r(!It));Kr.addEventListener("click",()=>{if(!qe){Mn=Mn==="dark"?"light":"dark",ul();try{iR(localStorage,Mn)}catch{}}});w("resume").addEventListener("click",()=>{_r(!1),ze.focus({preventScroll:!0})});fi.addEventListener("click",()=>{co(),ze.focus({preventScroll:!0})});mo.addEventListener("click",()=>{gi(!1),Ku()});for(const n of[la,da])n.addEventListener("input",()=>{if(oe==="flying"||It||Ue||$e?.pending||Vc()){Je();return}const e={angle:Number(la.value),power:Number(da.value)/100};gi(!1),(oe==="hit"||oe==="miss")&&co(),bt=e,Je()});window.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLButtonElement||n.target instanceof HTMLElement&&["SUMMARY","SELECT","TEXTAREA"].includes(n.target.tagName)||n.target instanceof HTMLElement&&n.target.isContentEditable)){if(ht==="combat"){Be.keydown(n);return}if(n.code==="KeyP"){n.preventDefault(),n.repeat||_r(!It);return}if(n.code==="Escape"){gi();return}if(!(It||qe||Ue||$e?.pending||ue&&ue.status!=="active"||Ne?.run.status==="completed")){if(n.code==="Space"){if(n.preventDefault(),n.repeat)return;oe==="hit"||oe==="miss"?co():Ku()}else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.code)&&oe!=="flying"){if(n.preventDefault(),oe==="hit"||oe==="miss"){if(ue||Ne)return;co()}bt.angle=rr(bt.angle+(n.code==="ArrowLeft"?-1:n.code==="ArrowRight"?1:0),5,80),bt.power=rr(bt.power+(n.code==="ArrowDown"?-.02:n.code==="ArrowUp"?.02:0),.08,1),Je()}}}});let $i=1,Yi=1;const $C=new ResizeObserver(()=>{ht==="range"?WC()&&gi():Be.cancelInput();const{width:n,height:e}=ze.getBoundingClientRect();n<=0||e<=0||(ns.setSize(Math.round(n*.85),Math.round(e*.85),!1),$i=n,Yi=e,cl.setAttribute("viewBox",`0 0 ${n} ${e}`),ht==="range"?ju():Be.resize(n,e))});$C.observe(ze);ze.addEventListener("webglcontextlost",n=>{if(n.preventDefault(),ht==="combat"){Be.cancelInput(),w("combat-message").textContent="Graphics interrupted. Reload to reconnect with the same guest.";return}_r(!0),Ft("Graphics interrupted. Reload to return to the clearing.","GRAPHICS PAUSED")});function _x(n){requestAnimationFrame(_x);const e=Math.max(0,(n-Bc)/1e3);if(Bc=n,ht==="combat"){Be.render(ns,e),yx();return}if(!It&&(so+=e,oe==="flying"&&gt)){const c=Math.min(un+e,Bt.maxFlight);if(ue&&fn)c>=fn.at?BC():un=c;else if(Is()&&Vt)c>=Vt.at?zC():un=c;else{const l=nu(gt,tn,un,c),u=iu(gt);l!==null&&l<=u?wd(!0,l):c>=u?wd(!1,u):c>=Bt.maxFlight?wd(!1,c):un=c}}const t={angle:bt.angle,pull:.2+bt.power*.5};It||(fs=e0(fs,t,e),Ba+=((gt?1:0)-Ba)*(1-Math.exp(-18*e)));const i=fs.angle*Math.PI/180,s=Cc(fs,Ba);ua.rotation.z=i,ua.position.set(s.bow.x,s.bow.y,.12);const r=ix.attributes.position;if(r.setXYZ(1,(s.nock.x-s.bow.x)*Math.cos(i)+(s.nock.y-s.bow.y)*Math.sin(i),0,0),r.needsUpdate=!0,bd(MC,Nt(-7.7,2.3,.42),Nt(s.bow.x+Math.cos(i)*.37,s.bow.y+Math.sin(i)*.37,.12)),bd(SC,Nt(-7.95,2.3,.45),Nt(s.elbow.x,s.elbow.y,.28)),bd(wC,Nt(s.elbow.x,s.elbow.y,.28),Nt(s.hand.x,s.hand.y,.12)),EC.position.set(s.hand.x,s.hand.y,.12),gt){const c=jr(gt,un,Fc);Hi.position.set(c.position.x,c.position.y,.12),Hi.rotation.z=c.angle;const l=Array.from({length:16},(u,d)=>{const h=Math.max(0,un-.23+d/15*.23),p=jr(gt,h,Fc).position;return Nt(p.x,p.y,.04)});Uh.setFromPoints(l)}else Hi.position.set(s.nock.x+Math.cos(i)*1.2,s.nock.y+Math.sin(i)*1.2,.12),Hi.rotation.z=i;const a=hx(bt);if(cl.style.visibility=!gt&&!It&&(oe!=="aiming"||qe?.valid)?"visible":"hidden",Ic(Nn).forEach((c,l)=>{const u={x:s.nock.x+Math.cos(i)*1.2,y:s.nock.y+Math.sin(i)*1.2},d=jr(a,c,{tip:u,angle:i}).position,h=Nt(d.x,d.y,.06).project(Kn);Im[l].setAttribute("cx",String((h.x+1)*$i/2)),Im[l].setAttribute("cy",String((1-h.y)*Yi/2))}),Da.hidden=!0,gt&&oe==="flying"&&!It){const c=Nt(Hi.position.x,Hi.position.y,.12).project(Kn);if(Math.abs(c.x)>1||Math.abs(c.y)>1){const l=c.x*$i/2,u=-c.y*Yi/2,d=Math.min(($i/2-20)/Math.abs(l),(Yi/2-20)/Math.abs(u));Da.style.left=`${$i/2+l*d}px`,Da.style.top=`${Yi/2+u*d}px`,Da.style.setProperty("--cue-angle",`${Math.atan2(u,l)+Math.PI/2}rad`),Da.hidden=!1}}const o=so-ll;Rs.forEach((c,l)=>{if(c.visible=oe==="hit"&&o<.65,c.visible&&gt){const u=nn(gt,un),d=l/Rs.length*Math.PI*2;c.position.set(u.x+Math.cos(d)*o*2,u.y+Math.sin(d)*o*2-o*o*2,.25)}}),zc.material=go(oe==="hit"&&o<.2?"#edbc7e":"#cc684a"),zc.material.color.set(oe==="hit"&&o<.2?"#edbc7e":Mn==="dark"?"#cf785c":"#cc684a"),ze.dataset.pose=JSON.stringify({angle:fs.angle,pull:fs.pull,release:Ba,...s,arrow:{x:Hi.position.x,y:Hi.position.y,angle:Hi.rotation.z},trail:Array.from(Uh.getAttribute("position")?.array??[]),flightTime:un}),ze.dataset.view=JSON.stringify([Kn.left,Kn.right,Kn.top,Kn.bottom]),ns.render(it,Kn)}Be=new DT(ze);const YC=new jw({shell:w("arena-shell"),expand:w("arena-expand"),exit:w("arena-exit"),controlsToggle:w("arena-controls-toggle"),doc:document,win:window,cancelInput:()=>Be.cancelInput(),isDrawing:()=>Be.drawing,canExpand:()=>ht==="combat"&&Ct==="public"&&Gt,setModal:pC,focusFallback:mC,onChange:n=>Be.setHudMode(Ys(n)?"expanded":"inline")});KC();qC();ul();fl();GC();Je();jC();requestAnimationFrame(_x);function Nm(n,e){if(gc={level:n,theme:e},!Ne&&(Ut=n,Ln=oa(n),Ji=e,Vt=null,!(ht!=="range"||oe==="flying"||qe))){oe="ready",gt=null,un=0,va.visible=!1,w("shot-result").hidden=!0;for(const t of Rs)t.visible=!1;yo(),Ft("Pull back. Breathe. Release.","LEVEL READY"),Je()}}function jC(){const n=dR(location.search);if(n){try{Nm(X0(n.seed,n.index,n.windOn),kc(n.seed,n.index))}catch{return}window.archeryLevelDebug={set:(e,t=0,i=0)=>Nm(e,kc(t,i)),geometry:()=>Ut?rl(Ut):null}}}function Ju(n){if(n!==ht){n==="combat"?(w("mode-note").textContent="",gi(!1),ht=n,Be.activate()):(Be.deactivate(),ht=n,Ct==="public"&&(Gt=!1,yt?.close())),Bc=performance.now(),document.body.dataset.view=n,dx(),ol();for(const e of[".controls",".boards"]){const t=document.querySelector(e);t&&(t.hidden=n==="combat")}for(const e of["combat-panel","combat-controls","combat-scene-label"])w(e).hidden=n!=="combat";for(const e of["pause","guide","gesture-hint","arrow-cue","shot-result","face-inset","paused"])w(e).hidden=n==="combat";n==="combat"&&kh.hide(),w("challenge-panel").hidden=n==="combat"||!ue&&!Ne,w("mode-combat").setAttribute("aria-pressed",String(n==="combat"));for(const e of hl){const t=w(`mode-${e}`);t.disabled=!1,n==="combat"&&t.setAttribute("aria-pressed","false")}ze.dataset.viewMode=n,Zu(),document.querySelector(".play-area").hidden=!1,n==="combat"?(cl.style.visibility="hidden",Be.resize($i,Yi)):(ju(),ul(),yo(),gt&&(oe==="hit"||oe==="miss")&&$u(),w("paused").hidden=!It,w("shot-result").hidden=oe!=="hit"&&oe!=="miss",Je())}}function qC(){const n=f1(location.search),e=p1(location);if(e!==null)try{history.replaceState(history.state,"",e)}catch{}if(!n||!Ye)return;Ct="private",Ju("combat"),an();const t=w("combat-join-code");!t.disabled&&!Ye.room&&(t.value=n,jn="Invitation code filled in. Tap Join room to enter.",an(),window.matchMedia("(pointer: coarse)").matches||w("combat-join").focus())}function KC(){Ye=Jt?new c1(Jt.endpoint,fetch,Cs,Jt):null,yt=Jt?new Pw(Jt.endpoint,fetch,Cs,Jt):null,w("mode-combat").addEventListener("click",()=>{Ue||$e?.pending||qe||(Ju("combat"),an(),Ct==="public"&&w("skirmish-title").focus())});let n=!1;w("combat-share").addEventListener("click",async()=>{const t=Ye?.room?.code;if(!t||n)return;n=!0;let i;try{i=await _1(navigator,t,u1(location,t))}finally{n=!1}if(!(i==="cancelled"||i==="shared")){if(i==="copied")jn=wh,qs&&clearTimeout(qs),qs=window.setTimeout(()=>{qs=0,jn===wh&&(jn="",an())},4e3);else{jn=d1;const s=w("combat-code"),r=window.getSelection();if(r){const a=document.createRange();a.selectNodeContents(s),r.removeAllRanges(),r.addRange(a)}}an()}});const e=async t=>{jn="";try{await t()}catch(i){jn=i instanceof Error?i.message:"The combat service is unavailable. Reconnect or retry the pending action."}an()};w("combat-create").addEventListener("click",()=>{Ye&&e(()=>{const t=w("combat-preset").value,i=t==="teams-1"?{mode:"teams",preset:"teams-1"}:t==="royale-shrink-1"||t==="royale-fixed-1"?{mode:"royale",preset:t}:void 0;return Ye.create(i)})}),w("combat-join-form").addEventListener("submit",t=>{t.preventDefault(),Ye&&e(()=>Ye.join(w("combat-join-code").value))}),J0=new tA(async t=>{const i=Ye;return!i||Be.drawing||i.busy||i.pending||!i.room?"skip":(await e(()=>i.command(t)),jn?"error":"done")}),w("combat-ready").addEventListener("click",()=>{const t=Ye;t?.room&&e(()=>t.command({kind:"ready",ready:!t.room.state.seats.find(i=>i.actorId===t.room.membership.actorId)?.ready}))}),w("combat-start").addEventListener("click",()=>{Ye&&e(()=>Ye.command({kind:"start"}))}),w("combat-pass").addEventListener("click",()=>{Ct==="public"?yt&&Ed(()=>yt.command({kind:"pass"})):Ye&&e(()=>Ye.command({kind:"pass"}))}),w("combat-cancel").addEventListener("click",()=>{const t=Ye?.room?.state.action;Ye&&t&&e(()=>Ye.command({kind:"cancel",cancelActionId:t.id}))}),w("combat-rematch").addEventListener("click",()=>{const t=Ye;if(!t?.room||Be.drawing)return;const i=wg(t.room.state,t.room.successor);i.kind!=="none"&&e(async()=>{i.kind==="request"&&await t.command({kind:"rematch"}),await t.followRematch()})}),w("combat-leave").addEventListener("click",()=>{Ye&&!Be.drawing&&e(()=>Ye.command({kind:"leave"}))}),w("combat-resign").addEventListener("click",()=>{Ye&&!Be.drawing&&confirm(Ye.room&&oi(Ye.room.state)?"Resign this match? Your archer will leave the competition.":"Resign this duel? Your opponent wins.")&&e(()=>Ye.command({kind:"resign"}))}),w("combat-retry").addEventListener("click",()=>{Ye&&e(()=>Ye.retry())}),w("combat-reconnect").addEventListener("click",()=>{Ye&&e(()=>Ye.reconnect())}),Be.onShot=(t,i)=>{Ct==="public"?yt&&Ed(()=>yt.command({kind:"shot",arrow:t,aim:i})):Ye&&e(()=>Ye.command({kind:"shot",arrow:t,aim:i}))},Be.onDrawing=t=>{Kr.disabled=t;for(const i of[...hl,"combat"])w(`mode-${i}`).disabled=t;an()},Ye&&(Ye.onChange=()=>{Ct==="private"&&an()},Ye.onError=t=>{jn=t instanceof Error?t.message:"Connection interrupted. Reconnecting with the same guest.",an()}),window.addEventListener("pagehide",()=>{Ye?.close(),yt?.close()});for(const t of["private","public"])w(`combat-mode-${t}`).addEventListener("click",()=>{Be.drawing||t===Ct||(Gt=!1,Ct=t,t==="private"&&yt?.close(),Be.clearSnapshot(),an(),t==="public"&&(w("skirmish-title").focus(),JC()))});for(const[t,i]of[["join",()=>yt.join()],["reconnect",()=>yt.reconnect()],["rejoin",()=>yt.control("rejoin")],["leave",()=>yt.control("leave")],["retry",()=>yt.retry()]])w(`skirmish-${t}`).addEventListener("click",()=>{if(yt&&!Be.drawing){const s=t==="retry"?yt.pending?.body.kind:t;Ed(i,s==="leave"?"leave":t==="retry"||["join","rejoin","reconnect"].includes(s??"")?"enter":"stay")}});w("skirmish-back").addEventListener("click",()=>{bs||yt?.busy||yt?.pending||Be.drawing||(Gt=!1,yt?.close(),an(),w("skirmish-title").focus())}),Ws&&(Ws.onChange=()=>{Ct==="private"&&an()}),Xr&&(Xr.onChange=()=>{Ct==="public"&&an()}),yt&&(yt.onChange=()=>{Ct==="public"&&an()},yt.onError=t=>{io=t instanceof Error?t.message:"Connection interrupted. Reconnect with the same guest.",Ct==="public"&&an()}),an()}function an(){const n=ht==="combat"&&Ct==="public"&&!Gt;Ct!=="public"&&Zu(),document.querySelector(".play-area").hidden=n,w("combat-controls").hidden=ht!=="combat"||n,w("combat-scene-label").hidden=ht!=="combat"||n;for(const h of["combat-mode-picker","combat-preset-choice","combat-preset-label","combat-rules"])w(h).hidden=!Hc;w("combat-private-title").textContent=Hc?"Private match":"Private duel",w("combat-private-panel").hidden=Ct!=="private",w("skirmish-panel").hidden=Ct!=="public";for(const h of["private","public"])w(`combat-mode-${h}`).setAttribute("aria-pressed",String(Ct===h)),w(`combat-mode-${h}`).disabled=Be.drawing;if(w("combat-drag-help").textContent=Ct==="public"?"Pull left to aim right or right to aim left, and pull down to raise the arc. Release to lock. Facing buttons also work before drawing. The short seven-dot guide shows only the opening arc.":"Pull backward and down from anywhere in the arena. Change facing before drawing. The short seven-dot guide shows only the opening arc.",Ct==="public"){mc?.syncPrivate(null),ZC();return}const e=Ye,t=e?.room,i=t?.state,s=Be.drawing,r=!!e?.busy||!!e?.pending;Be.setTransport(!!e?.connected,r),Be.setLockAgain(!!e?.lockAgain),t?Be.setSnapshot(t.state,t.membership.actorId,e.now):Be.hasRoom&&Be.clearSnapshot(),w("combat-lobby").hidden=!!t;{const h=w("combat-code"),p=t?t.code:"";h.textContent!==p&&(h.textContent=p);const g=w("combat-share");g.hidden=!p,!p&&qs&&(clearTimeout(qs),qs=0,jn===wh&&(jn="")),p?g.setAttribute("aria-label",`Share room code ${p}`):g.removeAttribute("aria-label")}w("combat-message").textContent=e?jn||(t?e.connected?"Connected to the private room. Share its code with a friend.":"Connecting to the private room. Server clocks continue.":"Create a room or enter a friend’s invitation code."):"Private duel is unavailable here. Practice and local Challenges are available.";for(const h of["create","join","join-code"])w(`combat-${h}`).disabled=!e||r||s||!!t;w("combat-roster").replaceChildren(...(t?JS(t.state,t.membership.actorId,t.connections,e.now):[]).map(h=>{const p=document.createElement("li");p.dataset.actorId=h.actorId,p.textContent=h.text;const g=document.createElement("progress");if(g.max=100,g.value=h.health,g.setAttribute("aria-label",h.healthLabel),p.append(g),h.team!==null){const y=document.createElement("strong");y.className="combat-team",y.textContent=KS(h.team),p.prepend(y)}if(h.lockText!==null){const y=document.createElement("div");y.textContent=h.lockText,p.append(y)}return p}));const a=i&&t?Sg(i,t.membership.actorId):null,o=h=>{const p=i?.seats.findIndex(g=>g.actorId===h)??-1;return t?.connections.find(g=>g.actorId===h)?.label??`Archer ${p+1}`},c=i?Zg(i):null;t&&i?c?Ws?.want(t.roomId,c,`/rooms/${encodeURIComponent(t.roomId)}/stats`):Ws?.hold(t.roomId):Ws?.clear(),sx("combat-board",Jg(Ws?.stats??[],(i?.seats??[]).map(h=>({actorId:h.actorId,label:o(h.actorId)})),t?.membership.actorId??null,M1(i??null,Ws?.loadedKey??null))),w("combat-rules").textContent=i?oi(i)?"Lock one arrow or pass during shared 20-second planning. Locks are final. Server time continues in the background.":"Two archers · 100 health · alternating 20-second turns. Server time continues in the background.":"Duel alternates turns; Teams and Royale share a planning deadline. Server time continues in the background.",w("combat-key-help").textContent=`← → elevation · ↓ ↑ draw · Space ${i&&oi(i)?"lock":"fire"} · Escape cancel draw. Combat has no local pause.`,w("combat-preset-label").textContent=a?.preset??"",J0?.render(t,s||r),w("combat-priority").textContent=a?.priority.length?`Priority: ${a.priority.map(o).join(" → ")}`:"",w("combat-pressure").textContent=a?.pressure??"",vx(w("combat-scene-label"),i&&oi(i)?i.mode==="teams"?"TEAMS 2v2":"ROYALE":"PRIVATE DUEL"),w("combat-preset").disabled=!e||r||s||!!t;const l=i?.seats.find(h=>h.actorId===t?.membership.actorId);w("combat-ready").hidden=i?.state!=="waiting",w("combat-ready").textContent=l?.ready?"Not ready":"Ready",w("combat-start").hidden=i?.state!=="waiting"||!t?.membership.canStart;const u=i&&t?wg(i,t.successor):{kind:"none",label:""};w("combat-rematch").hidden=u.kind==="none",w("combat-rematch").textContent=u.label,w("combat-leave").hidden=!t||i?.state==="active",w("combat-resign").hidden=i?.state!=="active",w("combat-reconnect").hidden=!e||!t&&!e.savedRoom||!!e.connected,w("combat-retry").hidden=!e?.pending;for(const h of["ready","start","rematch","leave","resign","reconnect","retry"])w(`combat-${h}`).disabled=s||!!e?.busy||h!=="retry"&&!!e?.pending;w("combat-start").disabled||=!i||!qS(i)||!e?.connected,w("combat-pass").disabled=s||r||!e?.connected||!i?.seat.canAct,w("combat-pass").textContent=i&&oi(i)?"Lock pass":"Pass turn",w("combat-cancel").hidden=!!i&&oi(i)||i?.phase!=="resolving"||i.action?.actorId!==t?.membership.actorId||i.launchAt===null||e.now()>=i.launchAt,w("combat-cancel").disabled=s||r||!e?.connected;const d=a?.result??"";w("combat-result").hidden=!d,w("combat-result").textContent=d,w("combat-phase").textContent=i?i.state==="active"?i.phase.toUpperCase():i.state.toUpperCase():"WAITING FOR A ROOM",w("combat-turn").textContent=a?.turn??"Invite a friend to the arena.",mc?.syncPrivate(t&&i?{roomId:t.roomId,state:i}:null),mc?.syncPublic(null),yx()}function yx(){if(Ct==="public"){bx();return}const n=Ye?.room,e=n?.state;if(!e){w("combat-clock").textContent="";return}const t=Ye.now();w("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.state==="active"&&e.deadlineAt!==null&&t>=e.deadlineAt&&(w("combat-fire").disabled=!0,w("combat-pass").disabled=!0)}async function Ed(n,e="stay"){if(bs)return;bs=!0,io="",Ct==="public"&&an();let t=!1;try{await n(),Ct==="public"&&ht==="combat"&&(e==="leave"&&yt?.room?.membership.status==="left"?(Gt=!1,t=!0):e==="enter"&&yt?.room&&(Gt=!0,t=!0))}catch(i){io=i instanceof Error?i.message:"Public play is unavailable. Reconnect or retry the pending action."}finally{bs=!1,Ct==="public"&&(an(),t&&w("skirmish-title").focus())}}const Td=new Set;async function JC(){const n=yt,e=n?.savedArena;if(!n||!e||n.room||n.pending||n.busy||bs)return;const t=`${n.locatorKey}|${e.arenaId}|${e.memberId}`;if(Td.has(t))return;Td.add(t);let i="unknown";try{i=await n.probeSavedArena()}catch{}i==="unknown"&&Td.delete(t),i==="gone"&&(io="Your last arena ended. Join a new one."),Ct==="public"&&an()}function ZC(){const n=yt,e=n?.room,t=e?.state,i=Be.drawing,s=bs||!!n?.busy||!!n?.pending,r=e?Lw(e):null;mc?.syncPublic(e&&t&&Gt?{arenaId:e.arenaId,memberId:e.membership.memberId,epoch:t.epoch,completedRounds:t.completedRounds}:null),w("skirmish-rules-note").textContent=Dw(t?.version??hu),Be.setTransport(Gt&&!!n?.connected,s),Be.setLockAgain(!!n?.lockAgain),e&&Gt?Be.setSnapshot(e.state,e.membership.actorId,n.now):Be.hasRoom&&Be.clearSnapshot(),w("skirmish-entry").hidden=Gt,w("skirmish-roster").hidden=!Gt,w("skirmish-message").textContent=n?io||(bs?"Contacting the arena…":Gt?e?n.connected?r.turn:"Connection interrupted. Reconnect to observe or return to this arena.":"Join an arena. NPC archers fill the open places.":n.pending?"An action is awaiting acknowledgement. Retry the original action before continuing.":e?.membership.status==="left"?"You left public play. Rejoin when ready, or return to watch.":e||n.savedArena?"Your arena is saved. Return to play or watch with the same guest.":"Join when ready. NPC archers fill the open places."):"Public play is unavailable here. Practice and local Challenges are available.",w("skirmish-join").hidden=!!e||!!n?.savedArena||!!n?.pending,w("skirmish-rejoin").hidden=!r?.canRejoin,w("skirmish-leave").hidden=!Gt||!r?.canLeave,w("skirmish-reconnect").hidden=!n||!e&&!n.savedArena||Gt&&!!n.connected,w("skirmish-retry").hidden=!n?.pending,w("skirmish-reconnect").textContent=e&&["idle","left","aborted"].includes(e.membership.status)?"Watch arena":Gt?"Reconnect":"Return to arena",w("skirmish-back").hidden=!Gt||!e||!["idle","left","aborted"].includes(e.membership.status),w("skirmish-back").disabled=i||s;for(const o of["join","reconnect","rejoin","leave","retry"])w(`skirmish-${o}`).disabled=!n||i||bs||!!n.busy||o!=="retry"&&!!n.pending;{const o=w("arena-status"),c=w("skirmish-message").textContent??"";o.textContent!==c&&(o.textContent=c)}Zu();const a=t?Zg(t):null;e&&t&&Gt?a?Xr?.want(`${e.arenaId}:${t.epoch}`,a,`/skirmish/${encodeURIComponent(e.arenaId)}/stats`):Xr?.hold(`${e.arenaId}:${t.epoch}`):Xr?.clear(),sx("skirmish-board",Jg(Xr?.stats??[],e&&Gt?pu(e):[],e?.membership.actorId??null,!1)),w("combat-preset-label").textContent="",vx(w("combat-scene-label"),"PUBLIC ARENA"),w("combat-phase").textContent=r?.phase??"JOIN A PUBLIC ARENA",w("combat-turn").textContent=r?.turn??"Continuous play with human and NPC archers.",w("combat-priority").textContent=t?.priority.length?`Priority: ${t.priority.map(o=>e.connections.find(c=>c.actorId===o)?.label??"Archer").join(" → ")}`:"",w("combat-pressure").textContent=r?.warning??"",w("combat-result").hidden=!0,w("combat-result").textContent="",w("combat-key-help").textContent="← → elevation · ↓ ↑ draw · Space lock · Escape cancel draw. Public play follows server time.",w("combat-cancel").hidden=!0,w("combat-pass").textContent="Lock pass",w("combat-pass").disabled=!Gt||i||s||!n?.connected||!e?.membership.canAct,bx()}function vx(n,e,t=" · SIDE VIEW"){if(n.textContent===e+t&&n.querySelector(".scene-label-extra"))return;const i=document.createElement("span");i.className="scene-label-extra",i.textContent=t,n.replaceChildren(e,i)}function bx(){const n=yt,e=n?.room?.state,t=n?.now()??0,i=$g(e,t);w("combat-clock").textContent="";const s=w("arena-clock");s.dataset.kind!==i.kind&&(s.dataset.kind=i.kind);const r=w("arena-clock-value"),a=w("arena-clock-state");r.textContent!==i.text&&(r.textContent=i.text),a.textContent!==i.stateText&&(a.textContent=i.stateText),s.getAttribute("aria-label")!==i.label&&s.setAttribute("aria-label",i.label);const o=e&&Gt?fC.observe(e,t):null;o&&(s.dataset.nativeMs=String(o.nativeMs),s.dataset.firstRemainingMs=String(Math.round(o.firstRemainingMs)),s.dataset.firstMarginMs=String(o.marginMs===null?"":Math.round(o.marginMs))),e&&e.deadlineAt!==null&&t>=e.deadlineAt&&(w("combat-fire").disabled=!0,w("combat-pass").disabled=!0)}function Zu(){const n=yt?.room,e=ht==="combat"&&Ct==="public"&&Gt&&!!n;if(w("arena-hud").hidden=!e,w("skirmish-roster").hidden=!e,YC.setAvailable(e),!e||!n){_d="";return}const t=`${n.arenaId}:${n.state.epoch}:${n.state.revision}:${n.snapshotRevision}:${n.membership.actorId}:${n.membership.status}`;t!==_d&&(_d=t,w("arena-priority").replaceChildren(...Bw(n).map(i=>{const s=document.createElement("li");s.className="arena-icon",s.dataset.actorId=i.actorId,s.dataset.slot=i.slotId,s.dataset.own=String(i.own),s.dataset.npc=String(i.npc),s.style.setProperty("--slot",i.color),s.style.setProperty("--slot-ink",i.ink),s.setAttribute("aria-label",i.ariaLabel),i.current&&s.setAttribute("aria-current","true");const r=document.createElement("span");return r.setAttribute("aria-hidden","true"),r.textContent=i.symbol,s.append(r),s})),w("skirmish-roster").replaceChildren(...zw(n).map(i=>{const s=document.createElement("li");s.dataset.actorId=i.actorId,s.dataset.kind=i.npc?"npc":"human",s.dataset.slot=i.slotId,s.dataset.status=i.status,s.dataset.own=String(i.own),s.style.setProperty("--slot",i.color),s.style.setProperty("--slot-ink",i.ink);const r=document.createElement("span");r.className="arena-swatch",r.setAttribute("aria-hidden","true"),r.textContent=i.symbol;const a=document.createElement("span");a.className="arena-health-name",a.textContent=`${i.label}${i.own?" · you":i.npc?" · NPC":""}${i.locked?" · locked":""}`;const o=document.createElement("span");o.className="arena-health-value",o.textContent=i.valueText;const c=document.createElement("progress");return c.max=100,c.value=i.health,c.setAttribute("aria-label",i.ariaLabel),s.append(r,a,o,c),s})))}
