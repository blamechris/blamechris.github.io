(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const jd="183",r0=0,hu=1,s0=2,ca=1,a0=2,ia=3,ir=0,An=1,di=2,Di=0,vs=1,uu=2,fu=3,pu=4,o0=5,_r=100,c0=101,l0=102,d0=103,h0=104,u0=200,f0=201,p0=202,m0=203,Bl=204,zl=205,g0=206,x0=207,_0=208,v0=209,y0=210,b0=211,M0=212,S0=213,w0=214,Hl=0,Gl=1,Vl=2,Ms=3,Wl=4,Xl=5,$l=6,Yl=7,Dp=0,E0=1,T0=2,fi=0,Np=1,Up=2,Fp=3,kp=4,Op=5,Bp=6,zp=7,Hp=300,Ir=301,Ss=302,Pc=303,Lc=304,ac=306,jl=1e3,Ci=1001,ql=1002,ln=1003,A0=1004,Ha=1005,xn=1006,Dc=1007,br=1008,Un=1009,Gp=1010,Vp=1011,fa=1012,qd=1013,gi=1014,Jn=1015,ki=1016,Kd=1017,Jd=1018,pa=1020,Wp=35902,Xp=35899,$p=1021,Yp=1022,Zn=1023,Oi=1026,Mr=1027,Zd=1028,Qd=1029,ws=1030,eh=1031,th=1033,Mo=33776,So=33777,wo=33778,Eo=33779,Kl=35840,Jl=35841,Zl=35842,Ql=35843,ed=36196,td=37492,nd=37496,id=37488,rd=37489,sd=37490,ad=37491,od=37808,cd=37809,ld=37810,dd=37811,hd=37812,ud=37813,fd=37814,pd=37815,md=37816,gd=37817,xd=37818,_d=37819,vd=37820,yd=37821,bd=36492,Md=36494,Sd=36495,wd=36283,Ed=36284,Td=36285,Ad=36286,R0=3200,jp=0,C0=1,Ji="",Dn="srgb",Es="srgb-linear",Fo="linear",ht="srgb",jr=7680,mu=519,I0=512,P0=513,L0=514,nh=515,D0=516,N0=517,ih=518,U0=519,gu=35044,xu=35048,_u="300 es",hi=2e3,ma=2001;function F0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function k0(){const n=ko("canvas");return n.style.display="block",n}const vu={};function yu(...n){const e="THREE."+n.shift();console.log(e,...n)}function qp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=qp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function it(...n){n=qp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Oo(...n){const e=n.join(" ");e in vu||(vu[e]=!0,Le(...n))}function O0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const B0={[Hl]:Gl,[Vl]:$l,[Wl]:Yl,[Ms]:Xl,[Gl]:Hl,[$l]:Vl,[Yl]:Wl,[Xl]:Ms};class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Rd=180/Math.PI;function Ca(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function z0(n,e){return(n%e+e)%e}function Uc(n,e,t){return(1-t)*n+t*e}function Xs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Or{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(d!==v||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+d*v;m<0&&(h=-h,p=-p,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);f=Math.sin(f*y)/b,o=Math.sin(o*y)/b,c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+v*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+v*o;const y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-o*p,e[t+2]=l*g+u*p+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new O,bu=new Or;class Fe{constructor(e,t,i,r,s,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],y=r[1],b=r[4],M=r[7],E=r[2],R=r[5],I=r[8];return s[0]=a*v+o*y+c*E,s[3]=a*m+o*b+c*R,s[6]=a*f+o*M+c*I,s[1]=l*v+u*y+d*E,s[4]=l*m+u*b+d*R,s[7]=l*f+u*M+d*I,s[2]=h*v+p*y+g*E,s[5]=h*m+p*b+g*R,s[8]=h*f+p*M+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,p=l*s-a*c,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new Fe,Mu=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H0(){const n={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=ys(r.r),r.g=ys(r.g),r.b=ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?Fo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Es]:{primaries:e,whitePoint:i,transfer:Fo,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),n}const et=H0();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qr;class G0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=ko("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V0=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oc(r[a].image)):s.push(Oc(r[a]))}else s=Oc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?G0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let W0=0;const Bc=new O;class Sn extends Fs{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,i=Ci,r=Ci,s=xn,a=br,o=Zn,c=Un,l=Sn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ca(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jl:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jl:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Hp;Sn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(p+1)/2,E=(f+1)/2,R=(u+h)/4,I=(d+v)/4,x=(g+m)/4;return b>M&&b>E?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=I/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=x/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=I/s,r=x/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X0 extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Sn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new rh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends X0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kp extends Sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends Sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mt{constructor(e,t,i,r,s,a,o,c,l,u,d,h,p,g,v,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,d,h,p,g,v,m)}set(e,t,i,r,s,a,o,c,l,u,d,h,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,v=l*d;t[0]=h+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,v=l*d;t[0]=h-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,j0)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Vi.crossVectors(i,Pn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Vi.crossVectors(i,Pn)),Vi.normalize(),Ga.crossVectors(Pn,Vi),r[0]=Vi.x,r[4]=Ga.x,r[8]=Pn.x,r[1]=Vi.y,r[5]=Ga.y,r[9]=Pn.y,r[2]=Vi.z,r[6]=Ga.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],y=i[3],b=i[7],M=i[11],E=i[15],R=r[0],I=r[4],x=r[8],w=r[12],F=r[1],C=r[5],U=r[9],z=r[13],W=r[2],B=r[6],G=r[10],k=r[14],Z=r[3],K=r[7],he=r[11],ge=r[15];return s[0]=a*R+o*F+c*W+l*Z,s[4]=a*I+o*C+c*B+l*K,s[8]=a*x+o*U+c*G+l*he,s[12]=a*w+o*z+c*k+l*ge,s[1]=u*R+d*F+h*W+p*Z,s[5]=u*I+d*C+h*B+p*K,s[9]=u*x+d*U+h*G+p*he,s[13]=u*w+d*z+h*k+p*ge,s[2]=g*R+v*F+m*W+f*Z,s[6]=g*I+v*C+m*B+f*K,s[10]=g*x+v*U+m*G+f*he,s[14]=g*w+v*z+m*k+f*ge,s[3]=y*R+b*F+M*W+E*Z,s[7]=y*I+b*C+M*B+E*K,s[11]=y*x+b*U+M*G+E*he,s[15]=y*w+b*z+M*k+E*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15],y=c*p-l*h,b=o*p-l*d,M=o*h-c*d,E=a*p-l*u,R=a*h-c*u,I=a*d-o*u;return t*(v*y-m*b+f*M)-i*(g*y-m*E+f*R)+r*(g*b-v*E+f*I)-s*(g*M-v*R+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=t*o-i*a,b=t*c-r*a,M=t*l-s*a,E=i*c-r*o,R=i*l-s*o,I=r*l-s*c,x=u*v-d*g,w=u*m-h*g,F=u*f-p*g,C=d*m-h*v,U=d*f-p*v,z=h*f-p*m,W=y*z-b*U+M*C+E*F-R*w+I*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/W;return e[0]=(o*z-c*U+l*C)*B,e[1]=(r*U-i*z-s*C)*B,e[2]=(v*I-m*R+f*E)*B,e[3]=(h*R-d*I-p*E)*B,e[4]=(c*F-a*z-l*w)*B,e[5]=(t*z-r*F+s*w)*B,e[6]=(m*M-g*I-f*b)*B,e[7]=(u*I-h*M+p*b)*B,e[8]=(a*U-o*F+l*x)*B,e[9]=(i*F-t*U-s*x)*B,e[10]=(g*R-v*M+f*y)*B,e[11]=(d*M-u*R-p*y)*B,e[12]=(o*w-a*C-c*x)*B,e[13]=(t*C-i*w+r*x)*B,e[14]=(v*b-g*E-m*y)*B,e[15]=(u*E-d*b+h*y)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,p=s*u,g=s*d,v=a*u,m=a*d,f=o*d,y=c*l,b=c*u,M=c*d,E=i.x,R=i.y,I=i.z;return r[0]=(1-(v+f))*E,r[1]=(p+M)*E,r[2]=(g-b)*E,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(h+f))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(g+b)*I,r[9]=(m-y)*I,r[10]=(1-(h+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),c=Kr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xn.copy(this);const l=1/a,u=1/o,d=1/c;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=hi,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===hi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ma)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=hi,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===hi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ma)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Kr=new O,Xn=new Mt,Y0=new O(0,0,0),j0=new O(1,1,1),Vi=new O,Ga=new O,Pn=new O,wu=new Mt,Eu=new Or;class xi{constructor(e=0,t=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Jp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q0=0;const Tu=new O,Jr=new Or,Mi=new Mt,Va=new O,$s=new O,K0=new O,J0=new Or,Au=new O(1,0,0),Ru=new O(0,1,0),Cu=new O(0,0,1),Iu={type:"added"},Z0={type:"removed"},Zr={type:"childadded",child:null},zc={type:"childremoved",child:null};class sn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new O,t=new xi,i=new Or,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Fe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Va.copy(e):Va.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt($s,Va,this.up):Mi.lookAt(Va,$s,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z0),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,K0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,J0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new O(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Gc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=z0(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Gc(a,s,e+1/3),this.g=Gc(a,s,e),this.b=Gc(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=Zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return et.workingToColorSpace(un.copy(this),e),Math.round(Ye(un.r*255,0,255))*65536+Math.round(Ye(un.g*255,0,255))*256+Math.round(Ye(un.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Dn){et.workingToColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Wa);const i=Uc(Wi.h,Wa.h,t),r=Uc(Wi.s,Wa.s,t),s=Uc(Wi.l,Wa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new je;je.NAMES=Zp;class sh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new sh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qp extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $n=new O,Si=new O,Vc=new O,wi=new O,Qr=new O,es=new O,Pu=new O,Wc=new O,Xc=new O,$c=new O,Yc=new kt,jc=new kt,qc=new kt;class qn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),Si.subVectors(i,t),Vc.subVectors(e,t);const a=$n.dot($n),o=$n.dot(Si),c=$n.dot(Vc),l=Si.dot(Si),u=Si.dot(Vc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Yc.setScalar(0),jc.setScalar(0),qc.setScalar(0),Yc.fromBufferAttribute(e,t),jc.fromBufferAttribute(e,i),qc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yc,s.x),a.addScaledVector(jc,s.y),a.addScaledVector(qc,s.z),a}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),Si.subVectors(e,t),$n.cross(Si).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),es.subVectors(s,i),Wc.subVectors(e,i);const c=Qr.dot(Wc),l=es.dot(Wc);if(c<=0&&l<=0)return t.copy(i);Xc.subVectors(e,r);const u=Qr.dot(Xc),d=es.dot(Xc);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Qr,a);$c.subVectors(e,s);const p=Qr.dot($c),g=es.dot($c);if(g>=0&&p<=g)return t.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(es,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Pu.subVectors(s,r),o=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Pu,o);const f=1/(m+v+h);return a=v*f,o=h*f,t.copy(i).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Br{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),$a.subVectors(this.max,Ys),ts.subVectors(e.a,Ys),ns.subVectors(e.b,Ys),is.subVectors(e.c,Ys),Xi.subVectors(ns,ts),$i.subVectors(is,ns),lr.subVectors(ts,is);let t=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-lr.z,lr.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,lr.z,0,-lr.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-lr.y,lr.x,0];return!Kc(t,ts,ns,is,$a)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,ts,ns,is,$a))?!1:(Ya.crossVectors(Xi,$i),t=[Ya.x,Ya.y,Ya.z],Kc(t,ts,ns,is,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new O,new O,new O,new O,new O,new O,new O,new O],Yn=new O,Xa=new Br,ts=new O,ns=new O,is=new O,Xi=new O,$i=new O,lr=new O,Ys=new O,$a=new O,Ya=new O,dr=new O;function Kc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){dr.fromArray(n,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),c=e.dot(dr),l=t.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const $t=new O,ja=new Je;let ex=0;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ex++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gu,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}}class em extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tm extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const tx=new Br,js=new O,Jc=new O;class ks{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Jc)),this.expandByPoint(js.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nx=0;const Fn=new Mt,Zc=new sn,rs=new O,Ln=new Br,qs=new Br,nn=new O;class Wt extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F0(e)?tm:em)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Ln.min,qs.min),Ln.expandByPoint(nn),nn.addVectors(Ln.max,qs.max),Ln.expandByPoint(nn)):(Ln.expandByPoint(qs.min),Ln.expandByPoint(qs.max))}Ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)nn.fromBufferAttribute(o,l),c&&(rs.fromBufferAttribute(e,l),nn.add(rs)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new O,c[x]=new O;const l=new O,u=new O,d=new O,h=new Je,p=new Je,g=new Je,v=new O,m=new O;function f(x,w,F){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,F),h.fromBufferAttribute(s,x),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,F),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[x].add(v),o[w].add(v),o[F].add(v),c[x].add(m),c[w].add(m),c[F].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const F=y[x],C=F.start,U=F.count;for(let z=C,W=C+U;z<W;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new O,M=new O,E=new O,R=new O;function I(x){E.fromBufferAttribute(r,x),R.copy(E);const w=o[x];b.copy(w),b.sub(E.multiplyScalar(E.dot(w))).normalize(),M.crossVectors(R,w);const C=M.dot(c[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,C)}for(let x=0,w=y.length;x<w;++x){const F=y[x],C=F.start,U=F.count;for(let z=C,W=C+U;z<W;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Gn(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ix=0;class Os extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=vs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ti=new O,Qc=new O,qa=new O,Yi=new O,el=new O,Ka=new O,tl=new O;class nm{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Qc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qa),o=Yi.dot(this.direction),c=-Yi.dot(qa),l=Yi.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qc).addScaledVector(qa,h),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,s){el.subVectors(t,e),Ka.subVectors(i,e),tl.crossVectors(el,Ka);let a=this.direction.dot(tl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const c=o*this.direction.dot(Ka.crossVectors(Yi,Ka));if(c<0)return null;const l=o*this.direction.dot(el.cross(Yi));if(l<0||c+l>a)return null;const u=-o*Yi.dot(tl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class er extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lu=new Mt,hr=new nm,Ja=new ks,Du=new O,Za=new O,Qa=new O,eo=new O,nl=new O,to=new O,Nu=new O,no=new O;class at extends sn{constructor(e=new Wt,t=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){to.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(nl.fromBufferAttribute(d,e),a?to.addScaledVector(nl,u):to.addScaledVector(nl.sub(t),u))}t.add(to)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Ja.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Ja,Du)===null||hr.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Lu.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,E=b;M<E;M+=3){const R=o.getX(M),I=o.getX(M+1),x=o.getX(M+2);r=io(this,f,e,i,l,u,d,R,I,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=io(this,a,e,i,l,u,d,y,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,E=b;M<E;M+=3){const R=M,I=M+1,x=M+2;r=io(this,f,e,i,l,u,d,R,I,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=m,b=m+1,M=m+2;r=io(this,a,e,i,l,u,d,y,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function rx(n,e,t,i,r,s,a,o){let c;if(e.side===An?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===ir,o),c===null)return null;no.copy(o),no.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(no);return l<t.near||l>t.far?null:{distance:l,point:no.clone(),object:n}}function io(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Za),n.getVertexPosition(c,Qa),n.getVertexPosition(l,eo);const u=rx(n,e,t,i,Za,Qa,eo,Nu);if(u){const d=new O;qn.getBarycoord(Nu,Za,Qa,eo,d),r&&(u.uv=qn.getInterpolatedAttribute(r,o,c,l,d,new Je)),s&&(u.uv1=qn.getInterpolatedAttribute(s,o,c,l,d,new Je)),a&&(u.normal=qn.getInterpolatedAttribute(a,o,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};qn.getNormal(Za,Qa,eo,h.normal),u.face=h,u.barycoord=d}return u}class im extends Sn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=ln,u=ln,d,h){super(null,a,o,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cd extends Gn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new Mt,Uu=new Mt,ro=[],Fu=new Br,sx=new Mt,Ks=new at,Js=new ks;class ax extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cd(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,sx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),Fu.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(Fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ks),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),Js.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(i),e.ray.intersectsSphere(Js)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ss),Uu.multiplyMatrices(i,ss),Ks.matrixWorld=Uu,Ks.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){const c=ro[a];c.instanceId=s,c.object=this,t.push(c)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new im(new Float32Array(r*this.count),r,this.count,Zd,Jn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const il=new O,ox=new O,cx=new Fe;class gr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=il.subVectors(i,t).cross(ox.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(il),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cx.getNormalMatrix(e),r=this.coplanarPoint(il).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new ks,lx=new Je(.5,.5),so=new O;class ah{constructor(e=new gr,t=new gr,i=new gr,r=new gr,s=new gr,a=new gr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],v=s[9],m=s[10],f=s[11],y=s[12],b=s[13],M=s[14],E=s[15];if(r[0].setComponents(l-a,p-u,f-g,E-y).normalize(),r[1].setComponents(l+a,p+u,f+g,E+y).normalize(),r[2].setComponents(l+o,p+d,f+v,E+b).normalize(),r[3].setComponents(l-o,p-d,f-v,E-b).normalize(),i)r[4].setComponents(c,h,m,M).normalize(),r[5].setComponents(l-c,p-h,f-m,E-M).normalize();else if(r[4].setComponents(l-c,p-h,f-m,E-M).normalize(),t===hi)r[5].setComponents(l+c,p+h,f+m,E+M).normalize();else if(t===ma)r[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);const t=lx.distanceTo(e.center);return ur.radius=.7071067811865476+t,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ts extends Os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new O,zo=new O,ku=new Mt,Zs=new nm,ao=new ks,rl=new O,Ou=new O;class fs extends sn{constructor(e=new Wt,t=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bo.fromBufferAttribute(t,r-1),zo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bo.distanceTo(zo);e.setAttribute("lineDistance",new Pt(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),ao.radius+=s,e.ray.intersectsSphere(ao)===!1)return;ku.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(ku);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const f=u.getX(v),y=u.getX(v+1),b=oo(this,e,Zs,c,f,y,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),f=oo(this,e,Zs,c,v,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const f=oo(this,e,Zs,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=oo(this,e,Zs,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function oo(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Bo.fromBufferAttribute(o,r),zo.fromBufferAttribute(o,s),t.distanceSqToSegment(Bo,zo,rl,Ou)>i)return;rl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(rl);if(!(l<e.near||l>e.far))return{distance:l,point:Ou.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class rm extends Sn{constructor(e=[],t=Ir,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ga extends Sn{constructor(e,t,i=gi,r,s,a,o=ln,c=ln,l,u=Oi,d=1){if(u!==Oi&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dx extends ga{constructor(e,t=gi,i=Ir,r,s,a=ln,o=ln,c,l=Oi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sm extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zr extends Wt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2));function g(v,m,f,y,b,M,E,R,I,x,w){const F=M/I,C=E/x,U=M/2,z=E/2,W=R/2,B=I+1,G=x+1;let k=0,Z=0;const K=new O;for(let he=0;he<G;he++){const ge=he*C-z;for(let fe=0;fe<B;fe++){const Oe=fe*F-U;K[v]=Oe*y,K[m]=ge*b,K[f]=W,l.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[f]=R>0?1:-1,u.push(K.x,K.y,K.z),d.push(fe/I),d.push(1-he/x),k+=1}}for(let he=0;he<x;he++)for(let ge=0;ge<I;ge++){const fe=h+ge+B*he,Oe=h+ge+B*(he+1),At=h+(ge+1)+B*(he+1),Tt=h+(ge+1)+B*he;c.push(fe,Oe,Tt),c.push(Oe,At,Tt),Z+=6}o.addGroup(p,Z,w),p+=Z,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class As extends Wt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new O,u=new Je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(o,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class oh extends Wt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const v=[],m=i/2;let f=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function y(){const M=new O,E=new O;let R=0;const I=(t-e)/i;for(let x=0;x<=s;x++){const w=[],F=x/s,C=F*(t-e)+e;for(let U=0;U<=r;U++){const z=U/r,W=z*c+o,B=Math.sin(W),G=Math.cos(W);E.x=C*B,E.y=-F*i+m,E.z=C*G,d.push(E.x,E.y,E.z),M.set(B,I,G).normalize(),h.push(M.x,M.y,M.z),p.push(z,1-F),w.push(g++)}v.push(w)}for(let x=0;x<r;x++)for(let w=0;w<s;w++){const F=v[w][x],C=v[w+1][x],U=v[w+1][x+1],z=v[w][x+1];(e>0||w!==0)&&(u.push(F,C,z),R+=3),(t>0||w!==s-1)&&(u.push(C,U,z),R+=3)}l.addGroup(f,R,0),f+=R}function b(M){const E=g,R=new Je,I=new O;let x=0;const w=M===!0?e:t,F=M===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,m*F,0),h.push(0,F,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=r;U++){const W=U/r*c+o,B=Math.cos(W),G=Math.sin(W);I.x=w*G,I.y=m*F,I.z=w*B,d.push(I.x,I.y,I.z),h.push(0,F,0),R.x=B*.5+.5,R.y=G*.5*F+.5,p.push(R.x,R.y),g++}for(let U=0;U<r;U++){const z=E+U,W=C+U;M===!0?u.push(W,W+1,z):u.push(W+1,W,z),x+=3}l.addGroup(f,x,M===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends oh{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ia(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bs extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const y=f*h-a;for(let b=0;b<l;b++){const M=b*d-s;g.push(M,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const b=y+l*f,M=y+l*(f+1),E=y+1+l*(f+1),R=y+1+l*f;p.push(b,M,R),p.push(M,E,R)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ch extends Wt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/r,p=new O,g=new Je;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<r;v++){const m=v*(i+1);for(let f=0;f<i;f++){const y=f+m,b=y,M=y+i+1,E=y+i+2,R=y+1;o.push(b,M,R),o.push(M,E,R)}}this.setIndex(o),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Rs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=Rs(n[t]);for(const r in i)e[r]=i[r]}return e}function hx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function am(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ux={clone:Rs,merge:vn};var fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mx extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class To extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gx extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xx extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _x extends Ts{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class om extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cm extends om{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const sl=new Mt,Bu=new O,zu=new O;class vx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ma||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const co=new O,lo=new Or,si=new O;class lm extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(co,lo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,lo,si.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(co,lo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,lo,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new O,Hu=new Je,Gu=new Je;class jn extends lm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Gu),t.subVectors(Gu,Hu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Pa extends lm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yx extends vx{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dm extends om{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new yx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const as=-90,os=1;class bx extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(as,os,e,t);r.layers=this.layers,this.add(r);const s=new jn(as,os,e,t);s.layers=this.layers,this.add(s);const a=new jn(as,os,e,t);a.layers=this.layers,this.add(a);const o=new jn(as,os,e,t);o.layers=this.layers,this.add(o);const c=new jn(as,os,e,t);c.layers=this.layers,this.add(c);const l=new jn(as,os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mx extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Vu(n,e,t,i){const r=Sx(i);switch(t){case $p:return n*e;case Zd:return n*e/r.components*r.byteLength;case Qd:return n*e/r.components*r.byteLength;case ws:return n*e*2/r.components*r.byteLength;case eh:return n*e*2/r.components*r.byteLength;case Yp:return n*e*3/r.components*r.byteLength;case Zn:return n*e*4/r.components*r.byteLength;case th:return n*e*4/r.components*r.byteLength;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:case Ql:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case Zl:return Math.max(n,8)*Math.max(e,8)/2;case ed:case td:case id:case rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nd:case sd:case ad:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bd:case Md:case Sd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wd:case Ed:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Td:case Ad:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sx(n){switch(n){case Un:case Gp:return{byteLength:1,components:1};case fa:case Vp:case ki:return{byteLength:2,components:1};case Kd:case Jd:return{byteLength:2,components:4};case gi:case qd:case Jn:return{byteLength:4,components:1};case Wp:case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);function hm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wx(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tx=`#ifdef USE_ALPHAHASH
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
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
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
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
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
#endif`,Bx=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jx=`#define PI 3.141592653589793
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
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kx=`vec3 transformedNormal = objectNormal;
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
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u_=`#ifdef USE_GRADIENTMAP
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
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
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
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,__=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M_=`PhysicalMaterial material;
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
#endif`,S_=`uniform sampler2D dfgLUT;
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
}`,w_=`
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N_=`#if defined( USE_POINTS_UV )
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
#endif`,U_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
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
#endif`,j_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lv=`float getShadowMask() {
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
}`,dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_v=`#ifdef USE_TRANSMISSION
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
#endif`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ev=`uniform sampler2D t2D;
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
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
}`,Pv=`#if DEPTH_PACKING == 3200
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
}`,Lv=`#define DISTANCE
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
}`,Dv=`#define DISTANCE
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`uniform float scale;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#define LAMBERT
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
}`,Hv=`#define LAMBERT
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
}`,Gv=`#define MATCAP
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
}`,Vv=`#define MATCAP
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define NORMAL
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
}`,$v=`#define PHONG
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
}`,Yv=`#define PHONG
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
}`,jv=`#define STANDARD
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
}`,qv=`#define STANDARD
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
}`,Kv=`#define TOON
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
}`,Jv=`#define TOON
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
}`,Zv=`uniform float size;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ty=`uniform vec3 color;
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
}`,ny=`uniform float rotation;
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
}`,iy=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Ex,alphahash_pars_fragment:Tx,alphamap_fragment:Ax,alphamap_pars_fragment:Rx,alphatest_fragment:Cx,alphatest_pars_fragment:Ix,aomap_fragment:Px,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Nx,begin_vertex:Ux,beginnormal_vertex:Fx,bsdfs:kx,iridescence_fragment:Ox,bumpmap_pars_fragment:Bx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Gx,clipping_planes_vertex:Vx,color_fragment:Wx,color_pars_fragment:Xx,color_pars_vertex:$x,color_vertex:Yx,common:jx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Kx,displacementmap_pars_vertex:Jx,displacementmap_vertex:Zx,emissivemap_fragment:Qx,emissivemap_pars_fragment:e_,colorspace_fragment:t_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:r_,envmap_pars_fragment:s_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:x_,envmap_vertex:o_,fog_vertex:c_,fog_pars_vertex:l_,fog_fragment:d_,fog_pars_fragment:h_,gradientmap_pars_fragment:u_,lightmap_pars_fragment:f_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:__,lights_toon_pars_fragment:v_,lights_phong_fragment:y_,lights_phong_pars_fragment:b_,lights_physical_fragment:M_,lights_physical_pars_fragment:S_,lights_fragment_begin:w_,lights_fragment_maps:E_,lights_fragment_end:T_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:I_,map_fragment:P_,map_pars_fragment:L_,map_particle_fragment:D_,map_particle_pars_fragment:N_,metalnessmap_fragment:U_,metalnessmap_pars_fragment:F_,morphinstance_vertex:k_,morphcolor_vertex:O_,morphnormal_vertex:B_,morphtarget_pars_vertex:z_,morphtarget_vertex:H_,normal_fragment_begin:G_,normal_fragment_maps:V_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:$_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:j_,clearcoat_normal_fragment_maps:q_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:J_,opaque_fragment:Z_,packing:Q_,premultiplied_alpha_fragment:ev,project_vertex:tv,dithering_fragment:nv,dithering_pars_fragment:iv,roughnessmap_fragment:rv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:av,shadowmap_pars_vertex:ov,shadowmap_vertex:cv,shadowmask_pars_fragment:lv,skinbase_vertex:dv,skinning_pars_vertex:hv,skinning_vertex:uv,skinnormal_vertex:fv,specularmap_fragment:pv,specularmap_pars_fragment:mv,tonemapping_fragment:gv,tonemapping_pars_fragment:xv,transmission_fragment:_v,transmission_pars_fragment:vv,uv_pars_fragment:yv,uv_pars_vertex:bv,uv_vertex:Mv,worldpos_vertex:Sv,background_vert:wv,background_frag:Ev,backgroundCube_vert:Tv,backgroundCube_frag:Av,cube_vert:Rv,cube_frag:Cv,depth_vert:Iv,depth_frag:Pv,distance_vert:Lv,distance_frag:Dv,equirect_vert:Nv,equirect_frag:Uv,linedashed_vert:Fv,linedashed_frag:kv,meshbasic_vert:Ov,meshbasic_frag:Bv,meshlambert_vert:zv,meshlambert_frag:Hv,meshmatcap_vert:Gv,meshmatcap_frag:Vv,meshnormal_vert:Wv,meshnormal_frag:Xv,meshphong_vert:$v,meshphong_frag:Yv,meshphysical_vert:jv,meshphysical_frag:qv,meshtoon_vert:Kv,meshtoon_frag:Jv,points_vert:Zv,points_frag:Qv,shadow_vert:ey,shadow_frag:ty,sprite_vert:ny,sprite_frag:iy},oe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ci={basic:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:vn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:vn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:vn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:vn([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:vn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:vn([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:vn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:vn([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:vn([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:vn([oe.lights,oe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ci.physical={uniforms:vn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ho={r:0,b:0,g:0},fr=new xi,ry=new Mt;function sy(n,e,t,i,r,s){const a=new je(0);let o=r===!0?0:1,c,l,u=null,d=0,h=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(y){let b=!1;const M=p(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,b){const M=p(b);M&&(M.isCubeTexture||M.mapping===ac)?(l===void 0&&(l=new at(new zr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Rs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),fr.copy(b.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(fr)),l.material.toneMapped=et.getTransfer(M.colorSpace)!==ht,(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new at(new Bs(2,2),new _i({name:"BackgroundMaterial",uniforms:Rs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(ho,am(n)),t.buffers.color.setClear(ho.r,ho.g,ho.b,b,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:f}}function ay(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(C,U,z,W,B){let G=!1;const k=d(C,W,z,U);s!==k&&(s=k,l(s.object)),G=p(C,W,z,B),G&&g(C,W,z,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(C,U,z,W),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,U,z,W){const B=W.wireframe===!0;let G=i[U.id];G===void 0&&(G={},i[U.id]=G);const k=C.isInstancedMesh===!0?C.id:0;let Z=G[k];Z===void 0&&(Z={},G[k]=Z);let K=Z[z.id];K===void 0&&(K={},Z[z.id]=K);let he=K[B];return he===void 0&&(he=h(c()),K[B]=he),he}function h(C){const U=[],z=[],W=[];for(let B=0;B<t;B++)U[B]=0,z[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:W,object:C,attributes:{},index:null}}function p(C,U,z,W){const B=s.attributes,G=U.attributes;let k=0;const Z=z.getAttributes();for(const K in Z)if(Z[K].location>=0){const ge=B[K];let fe=G[K];if(fe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),ge===void 0||ge.attribute!==fe||fe&&ge.data!==fe.data)return!0;k++}return s.attributesNum!==k||s.index!==W}function g(C,U,z,W){const B={},G=U.attributes;let k=0;const Z=z.getAttributes();for(const K in Z)if(Z[K].location>=0){let ge=G[K];ge===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor));const fe={};fe.attribute=ge,ge&&ge.data&&(fe.data=ge.data),B[K]=fe,k++}s.attributes=B,s.attributesNum=k,s.index=W}function v(){const C=s.newAttributes;for(let U=0,z=C.length;U<z;U++)C[U]=0}function m(C){f(C,0)}function f(C,U){const z=s.newAttributes,W=s.enabledAttributes,B=s.attributeDivisors;z[C]=1,W[C]===0&&(n.enableVertexAttribArray(C),W[C]=1),B[C]!==U&&(n.vertexAttribDivisor(C,U),B[C]=U)}function y(){const C=s.newAttributes,U=s.enabledAttributes;for(let z=0,W=U.length;z<W;z++)U[z]!==C[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function b(C,U,z,W,B,G,k){k===!0?n.vertexAttribIPointer(C,U,z,B,G):n.vertexAttribPointer(C,U,z,W,B,G)}function M(C,U,z,W){v();const B=W.attributes,G=z.getAttributes(),k=U.defaultAttributeValues;for(const Z in G){const K=G[Z];if(K.location>=0){let he=B[Z];if(he===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const ge=he.normalized,fe=he.itemSize,Oe=e.get(he);if(Oe===void 0)continue;const At=Oe.buffer,Tt=Oe.type,q=Oe.bytesPerElement,ie=Tt===n.INT||Tt===n.UNSIGNED_INT||he.gpuType===qd;if(he.isInterleavedBufferAttribute){const ae=he.data,Ue=ae.stride,Re=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<K.locationSize;Pe++)f(K.location+Pe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<K.locationSize;Pe++)m(K.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,At);for(let Pe=0;Pe<K.locationSize;Pe++)b(K.location+Pe,fe/K.locationSize,Tt,ge,Ue*q,(Re+fe/K.locationSize*Pe)*q,ie)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)f(K.location+ae,he.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);n.bindBuffer(n.ARRAY_BUFFER,At);for(let ae=0;ae<K.locationSize;ae++)b(K.location+ae,fe/K.locationSize,Tt,ge,fe*q,fe/K.locationSize*ae*q,ie)}}else if(k!==void 0){const ge=k[Z];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(K.location,ge);break;case 3:n.vertexAttrib3fv(K.location,ge);break;case 4:n.vertexAttrib4fv(K.location,ge);break;default:n.vertexAttrib1fv(K.location,ge)}}}}y()}function E(){w();for(const C in i){const U=i[C];for(const z in U){const W=U[z];for(const B in W){const G=W[B];for(const k in G)u(G[k].object),delete G[k];delete W[B]}}delete i[C]}}function R(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const z in U){const W=U[z];for(const B in W){const G=W[B];for(const k in G)u(G[k].object),delete G[k];delete W[B]}}delete i[C.id]}function I(C){for(const U in i){const z=i[U];for(const W in z){const B=z[W];if(B[C.id]===void 0)continue;const G=B[C.id];for(const k in G)u(G[k].object),delete G[k];delete B[C.id]}}}function x(C){for(const U in i){const z=i[U],W=C.isInstancedMesh===!0?C.id:0,B=z[W];if(B!==void 0){for(const G in B){const k=B[G];for(const Z in k)u(k[Z].object),delete k[Z];delete B[G]}delete z[W],Object.keys(z).length===0&&delete i[U]}}}function w(){F(),a=!0,s!==r&&(s=r,l(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function oy(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function cy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==Zn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Un&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Jn&&!x)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:E,samples:R}}function ly(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new gr,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const y=s?0:i,b=y*4;let M=f.clippingState||null;c.value=M,M=u(g,h,b,p);for(let E=0;E!==b;++E)M[E]=t[E];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=p;b!==v;++b,M+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Zi=4,Wu=[.125,.215,.35,.446,.526,.582],vr=20,dy=256,Qs=new Pa,Xu=new je;let al=null,ol=0,cl=0,ll=!1;const hy=new O;class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=hy}=s;al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ol,cl),this._renderer.xr.enabled=ll,e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:ki,format:Zn,colorSpace:Es,depthBuffer:!1},r=Yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uy(s)),this._blurMaterial=py(s,e,t),this._ggxMaterial=fy(s,e,t)}return r}_compileMaterial(e){const t=new at(new Wt,e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,i,r,s){const c=new jn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Xu),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new zr,new er({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,f=!0):(m.color.copy(Xu),f=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const E=this._cubeSize;cs(r,M*E,b>2?E:0,E,E),d.setRenderTarget(r),f&&d.render(v,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ir||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;cs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,p=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Zi?i-g+Zi:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,cs(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Qs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,cs(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Qs)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=l;const h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):vr;m>vr&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const f=[];let y=0;for(let I=0;I<vr;++I){const x=I/v,w=Math.exp(-x*x/2);f.push(w),I===0?y+=w:I<m&&(y+=2*w)}for(let I=0;I<f.length;I++)f[I]=f[I]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const M=this._sizeLods[r],E=3*M*(r>b-Zi?r-b+Zi:0),R=4*(this._cubeSize-M);cs(t,E,R,3*M,2*M),c.setRenderTarget(t),c.render(d,Qs)}}function uy(n){const e=[],t=[],i=[];let r=n;const s=n-Zi+1+Wu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Zi?c=Wu[a-n+Zi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*p),b=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,x=R>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];y.set(w,v*g*R),b.set(h,m*g*R);const F=[R,R,R,R,R,R];M.set(F,f*g*R)}const E=new Wt;E.setAttribute("position",new Gn(y,v)),E.setAttribute("uv",new Gn(b,m)),E.setAttribute("faceIndex",new Gn(M,f)),i.push(new at(E,null)),r>Zi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Yu(n,e,t){const i=new pi(n,e,t);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fy(n,e,t){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function py(n,e,t){const i=new Float32Array(vr),r=new O(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ju(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function qu(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}class um extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Di});s.uniforms.tEquirect.value=t;const a=new at(r,s),o=t.minFilter;return t.minFilter===br&&(t.minFilter=xn),new bx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function my(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Pc||p===Lc)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new um(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===Pc||p===Lc,v=p===Ir||p===Ss;if(g||v){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new $u(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new $u(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Pc?h.mapping=Ir:p===Lc&&(h.mapping=Ss),h}function c(h){let p=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function gy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Oo("WebGLRenderer: "+i+" extension not supported."),r}}}function xy(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const y=p.array;v=p.version;for(let b=0,M=y.length;b<M;b+=3){const E=y[b+0],R=y[b+1],I=y[b+2];h.push(E,R,R,I,I,E)}}else{const y=g.array;v=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const E=b+0,R=b+1,I=b+2;h.push(E,R,R,I,I,E)}}const m=new(g.count>=65535?tm:em)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function _y(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*a,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(h,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*v[y];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function vy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yy(n,e,t){const i=new WeakMap,r=new kt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let F=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var p=F;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let E=o.attributes.position.count*M,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const I=new Float32Array(E*R*4*d),x=new Kp(I,E,R,d);x.type=Jn,x.needsUpdate=!0;const w=M*4;for(let C=0;C<d;C++){const U=f[C],z=y[C],W=b[C],B=E*R*4*C;for(let G=0;G<U.count;G++){const k=G*w;g===!0&&(r.fromBufferAttribute(U,G),I[B+k+0]=r.x,I[B+k+1]=r.y,I[B+k+2]=r.z,I[B+k+3]=0),v===!0&&(r.fromBufferAttribute(z,G),I[B+k+4]=r.x,I[B+k+5]=r.y,I[B+k+6]=r.z,I[B+k+7]=0),m===!0&&(r.fromBufferAttribute(W,G),I[B+k+8]=r.x,I[B+k+9]=r.y,I[B+k+10]=r.z,I[B+k+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:x,size:new Je(E,R)},i.set(o,h),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function by(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const My={[Np]:"LINEAR_TONE_MAPPING",[Up]:"REINHARD_TONE_MAPPING",[Fp]:"CINEON_TONE_MAPPING",[kp]:"ACES_FILMIC_TONE_MAPPING",[Bp]:"AGX_TONE_MAPPING",[zp]:"NEUTRAL_TONE_MAPPING",[Op]:"CUSTOM_TONE_MAPPING"};function Sy(n,e,t,i,r){const s=new pi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new pi(e,t,{type:ki,depthBuffer:!1,stencilBuffer:!1}),o=new Wt;o.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const c=new mx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new at(o,c),u=new Pa(-1,1,1,-1,0,1);let d=null,h=null,p=!1,g,v=null,m=[],f=!1;this.setSize=function(y,b){s.setSize(y,b),a.setSize(y,b);for(let M=0;M<m.length;M++){const E=m[M];E.setSize&&E.setSize(y,b)}},this.setEffects=function(y){m=y,f=m.length>0&&m[0].isRenderPass===!0;const b=s.width,M=s.height;for(let E=0;E<m.length;E++){const R=m[E];R.setSize&&R.setSize(b,M)}},this.begin=function(y,b){if(p||y.toneMapping===fi&&m.length===0)return!1;if(v=b,b!==null){const M=b.width,E=b.height;(s.width!==M||s.height!==E)&&this.setSize(M,E)}return f===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=fi,!0},this.hasRenderPass=function(){return f},this.end=function(y,b){y.toneMapping=g,p=!0;let M=s,E=a;for(let R=0;R<m.length;R++){const I=m[R];if(I.enabled!==!1&&(I.render(y,E,M,b),I.needsSwap!==!1)){const x=M;M=E,E=x}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,c.defines={},et.getTransfer(d)===ht&&(c.defines.SRGB_TRANSFER="");const R=My[h];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(v),y.render(l,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const fm=new Sn,Id=new ga(1,1),pm=new Kp,mm=new $0,gm=new rm,Ku=[],Ju=[],Zu=new Float32Array(16),Qu=new Float32Array(9),ef=new Float32Array(4);function zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ku[r];if(s===void 0&&(s=new Float32Array(r),Ku[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cc(n,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function Ry(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;ef.set(i),n.uniformMatrix2fv(this.addr,!1,ef),Qt(t,i)}}function Cy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;Qu.set(i),n.uniformMatrix3fv(this.addr,!1,Qu),Qt(t,i)}}function Iy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),Qt(t,i)}}function Py(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function Uy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function By(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Id.compareFunction=t.isReversedDepthBuffer()?ih:nh,s=Id):s=fm,t.setTexture2D(e||s,r)}function zy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||mm,r)}function Hy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||gm,r)}function Gy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pm,r)}function Vy(n){switch(n){case 5126:return wy;case 35664:return Ey;case 35665:return Ty;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Iy;case 5124:case 35670:return Py;case 35667:case 35671:return Ly;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return Fy;case 36295:return ky;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Wy(n,e){n.uniform1fv(this.addr,e)}function Xy(n,e){const t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function $y(n,e){const t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function Yy(n,e){const t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function jy(n,e){const t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qy(n,e){const t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ky(n,e){const t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jy(n,e){n.uniform1iv(this.addr,e)}function Zy(n,e){n.uniform2iv(this.addr,e)}function Qy(n,e){n.uniform3iv(this.addr,e)}function eb(n,e){n.uniform4iv(this.addr,e)}function tb(n,e){n.uniform1uiv(this.addr,e)}function nb(n,e){n.uniform2uiv(this.addr,e)}function ib(n,e){n.uniform3uiv(this.addr,e)}function rb(n,e){n.uniform4uiv(this.addr,e)}function sb(n,e,t){const i=this.cache,r=e.length,s=cc(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Id:a=fm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function ab(n,e,t){const i=this.cache,r=e.length,s=cc(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||mm,s[a])}function ob(n,e,t){const i=this.cache,r=e.length,s=cc(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||gm,s[a])}function cb(n,e,t){const i=this.cache,r=e.length,s=cc(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||pm,s[a])}function lb(n){switch(n){case 5126:return Wy;case 35664:return Xy;case 35665:return $y;case 35666:return Yy;case 35674:return jy;case 35675:return qy;case 35676:return Ky;case 5124:case 35670:return Jy;case 35667:case 35671:return Zy;case 35668:case 35672:return Qy;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return cb}}class db{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vy(t.type)}}class hb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lb(t.type)}}class ub{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function tf(n,e){n.seq.push(e),n.map[e.id]=e}function fb(n,e,t){const i=n.name,r=i.length;for(dl.lastIndex=0;;){const s=dl.exec(i),a=dl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){tf(t,l===void 0?new db(o,n,e):new hb(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new ub(o),tf(t,d)),t=d}}}class Ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);fb(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function nf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pb=37297;let mb=0;function gb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const rf=new Fe;function xb(n){et._getMatrix(rf,et.workingColorSpace,n);const e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Fo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+gb(n.getShaderSource(e),o)}else return s}function _b(n,e){const t=xb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vb={[Np]:"Linear",[Up]:"Reinhard",[Fp]:"Cineon",[kp]:"ACESFilmic",[Bp]:"AgX",[zp]:"Neutral",[Op]:"Custom"};function yb(n,e){const t=vb[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new O;function bb(){et.getLuminanceCoefficients(uo);const n=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function Sb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ra(n){return n!==""}function af(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function of(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(n){return n.replace(Eb,Ab)}const Tb=new Map;function Ab(n,e){let t=Be[e];if(t===void 0){const i=Tb.get(e);if(i!==void 0)t=Be[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}const Rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(Rb,Cb)}function Cb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Ib={[ca]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function Pb(n){return Ib[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lb={[Ir]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function Db(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Lb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Nb={[Ss]:"ENVMAP_MODE_REFRACTION"};function Ub(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Nb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fb={[Dp]:"ENVMAP_BLENDING_MULTIPLY",[E0]:"ENVMAP_BLENDING_MIX",[T0]:"ENVMAP_BLENDING_ADD"};function kb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Fb[n.combine]||"ENVMAP_BLENDING_NONE"}function Ob(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Pb(t),l=Db(t),u=Ub(t),d=kb(t),h=Ob(t),p=Mb(t),g=Sb(s),v=r.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),f.length>0&&(f+=`
`)):(m=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),f=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Be.tonemapping_pars_fragment:"",t.toneMapping!==fi?yb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,_b("linearToOutputTexel",t.outputColorSpace),bb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=Pd(a),a=af(a,t),a=of(a,t),o=Pd(o),o=af(o,t),o=of(o,t),a=cf(a),o=cf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+m+a,M=y+f+o,E=nf(r,r.VERTEX_SHADER,b),R=nf(r,r.FRAGMENT_SHADER,M);r.attachShader(v,E),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(E)||"",W=r.getShaderInfoLog(R)||"",B=U.trim(),G=z.trim(),k=W.trim();let Z=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,E,R);else{const he=sf(r,E,"vertex"),ge=sf(r,R,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+he+`
`+ge)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(G===""||k==="")&&(K=!1);K&&(C.diagnostics={runnable:Z,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(E),r.deleteShader(R),x=new Ao(r,v),w=wb(r,v)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(v,pb)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=R,this}let zb=0;class Hb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Gb(e),t.set(e,i)),i}}class Gb{constructor(e){this.id=zb++,this.code=e,this.usedTimes=0}}function Vb(n,e,t,i,r,s){const a=new Jp,o=new Hb,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,w,F,C,U){const z=C.fog,W=U.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||B,G),Z=k&&k.mapping===ac?k.image.height:null,K=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=he!==void 0?he.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let Oe,At,Tt,q;if(K){const dt=ci[K];Oe=dt.vertexShader,At=dt.fragmentShader}else Oe=x.vertexShader,At=x.fragmentShader,o.update(x),Tt=o.getVertexShaderID(x),q=o.getFragmentShaderID(x);const ie=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,Pe=!!x.map,en=!!x.matcap,Qe=!!k,lt=!!x.aoMap,xt=!!x.lightMap,ze=!!x.bumpMap,Bt=!!x.normalMap,P=!!x.displacementMap,Xt=!!x.emissiveMap,ct=!!x.metalnessMap,St=!!x.roughnessMap,Se=x.anisotropy>0,T=x.clearcoat>0,_=x.dispersion>0,D=x.iridescence>0,j=x.sheen>0,J=x.transmission>0,Y=Se&&!!x.anisotropyMap,_e=T&&!!x.clearcoatMap,re=T&&!!x.clearcoatNormalMap,Ae=T&&!!x.clearcoatRoughnessMap,Ie=D&&!!x.iridescenceMap,Q=D&&!!x.iridescenceThicknessMap,te=j&&!!x.sheenColorMap,ve=j&&!!x.sheenRoughnessMap,be=!!x.specularMap,ue=!!x.specularColorMap,He=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,se=J&&!!x.thicknessMap,ne=!!x.gradientMap,me=!!x.alphaMap,ee=x.alphaTest>0,$=!!x.alphaHash,ye=!!x.extensions;let De=fi;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(De=n.toneMapping);const wt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:At,defines:x.defines,customVertexShaderID:Tt,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Es,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:en,envMap:Qe,envMapMode:Qe&&k.mapping,envMapCubeUVHeight:Z,aoMap:lt,lightMap:xt,bumpMap:ze,normalMap:Bt,displacementMap:P,emissiveMap:Xt,normalMapObjectSpace:Bt&&x.normalMapType===C0,normalMapTangentSpace:Bt&&x.normalMapType===jp,metalnessMap:ct,roughnessMap:St,anisotropy:Se,anisotropyMap:Y,clearcoat:T,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:D,iridescenceMap:Ie,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:te,sheenRoughnessMap:ve,specularMap:be,specularColorMap:ue,specularIntensityMap:He,transmission:J,transmissionMap:L,thicknessMap:se,gradientMap:ne,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:$,combine:x.combine,mapUv:Pe&&g(x.map.channel),aoMapUv:lt&&g(x.aoMap.channel),lightMapUv:xt&&g(x.lightMap.channel),bumpMapUv:ze&&g(x.bumpMap.channel),normalMapUv:Bt&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:Xt&&g(x.emissiveMap.channel),metalnessMapUv:ct&&g(x.metalnessMap.channel),roughnessMapUv:St&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:ue&&g(x.specularColorMap.channel),specularIntensityMapUv:He&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:se&&g(x.thicknessMap.channel),alphaMapUv:me&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Bt||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Pe||me),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&Bt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:Xt&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)w.push(F),w.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(f(w,x),y(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const w=p[x.type];let F;if(w){const C=ci[w];F=ux.clone(C.uniforms)}else F=x.uniforms;return F}function M(x,w){let F=u.get(w);return F!==void 0?++F.usedTimes:(F=new Bb(n,w,x,r),l.push(F),u.set(w,F)),F}function E(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function I(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:E,releaseShaderCache:R,programs:l,dispose:I}}function Wb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Xb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function df(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,v,m,f){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},n[e]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=g,y.materialVariant=a(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=m,y.group=f),e++,y}function c(h,p,g,v,m,f){const y=o(h,p,g,v,m,f);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):t.push(y)}function l(h,p,g,v,m,f){const y=o(h,p,g,v,m,f);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(h,p){t.length>1&&t.sort(h||Xb),i.length>1&&i.sort(p||df),r.length>1&&r.sort(p||df)}function d(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function $b(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new hf,n.set(i,[a])):r>=s.length?(a=new hf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function jb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qb=0;function Kb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jb(n){const e=new Yb,t=jb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new Mt,a=new Mt;function o(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,y=0,b=0,M=0,E=0,R=0,I=0;l.sort(Kb);for(let w=0,F=l.length;w<F;w++){const C=l[w],U=C.color,z=C.intensity,W=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ws?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=U.r*z,d+=U.g*z,h+=U.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],z);I++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,Z=t.get(C);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,y++}i.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[v]=G;const k=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,k.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[v]=k.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=B,M++}v++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const k=C.shadow,Z=t.get(C);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==E||x.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,x.directionalLength=p,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=E,x.numLightProbes=I,i.version=qb++)}function c(l,u){let d=0,h=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const b=l[f];if(b.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function uf(n){const e=new Jb(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Zb(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new uf(n),e.set(r,[o])):s>=a.length?(o=new uf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
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
}`,tM=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],nM=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ff=new Mt,ea=new O,hl=new O;function iM(n,e,t){let i=new ah;const r=new Je,s=new Je,a=new kt,o=new gx,c=new xx,l={},u=t.maxTextureSize,d={[ir]:An,[An]:ir,[di]:di},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Qb,fragmentShader:eM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new at(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ca;let f=this.type;this.render=function(R,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===a0&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ca);const w=n.getRenderTarget(),F=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Di),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=f!==this.type;z&&I.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=R.length;W<B;W++){const G=R[W],k=G.shadow;if(k===void 0){Le("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Z=k.getFrameExtents();r.multiply(Z),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,k.mapSize.y=s.y));const K=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=K,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ia){if(G.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new pi(r.x,r.y,{format:ws,type:ki,minFilter:xn,magFilter:xn,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new ga(r.x,r.y,Jn),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=Oi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln}else G.isPointLight?(k.map=new um(r.x),k.map.depthTexture=new dx(r.x,gi)):(k.map=new pi(r.x,r.y),k.map.depthTexture=new ga(r.x,r.y,gi)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=Oi,this.type===ca?(k.map.depthTexture.compareFunction=K?ih:nh,k.map.depthTexture.minFilter=xn,k.map.depthTexture.magFilter=xn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln);k.camera.updateProjectionMatrix()}const he=k.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<he;ge++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(k.map),n.clear());const fe=k.getViewport(ge);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),U.viewport(a)}if(G.isPointLight){const fe=k.camera,Oe=k.matrix,At=G.distance||fe.far;At!==fe.far&&(fe.far=At,fe.updateProjectionMatrix()),ea.setFromMatrixPosition(G.matrixWorld),fe.position.copy(ea),hl.copy(fe.position),hl.add(tM[ge]),fe.up.copy(nM[ge]),fe.lookAt(hl),fe.updateMatrixWorld(),Oe.makeTranslation(-ea.x,-ea.y,-ea.z),ff.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ff,fe.coordinateSystem,fe.reversedDepth)}else k.updateMatrices(G);i=k.getFrustum(),M(I,x,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===ia&&y(k,x),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,F,C)};function y(R,I){const x=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pi(r.x,r.y,{format:ws,type:ki})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,x,h,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,x,p,v,null)}function b(R,I,x,w){let F=null;const C=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)F=C;else if(F=x.isPointLight===!0?c:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const U=F.uuid,z=I.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let B=W[z];B===void 0&&(B=F.clone(),W[z]=B,I.addEventListener("dispose",E)),F=B}if(F.visible=I.visible,F.wireframe=I.wireframe,w===ia?F.side=I.shadowSide!==null?I.shadowSide:I.side:F.side=I.shadowSide!==null?I.shadowSide:d[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,F.map=I.map,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const U=n.properties.get(F);U.light=x}return F}function M(R,I,x,w,F){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&F===ia)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);const z=e.update(R),W=R.material;if(Array.isArray(W)){const B=z.groups;for(let G=0,k=B.length;G<k;G++){const Z=B[G],K=W[Z.materialIndex];if(K&&K.visible){const he=b(R,K,w,F);R.onBeforeShadow(n,R,I,x,z,he,Z),n.renderBufferDirect(x,null,z,he,R,Z),R.onAfterShadow(n,R,I,x,z,he,Z)}}}else if(W.visible){const B=b(R,W,w,F);R.onBeforeShadow(n,R,I,x,z,B,null),n.renderBufferDirect(x,null,z,B,R,null),R.onAfterShadow(n,R,I,x,z,B,null)}}const U=R.children;for(let z=0,W=U.length;z<W;z++)M(U[z],I,x,w,F)}function E(R){R.target.removeEventListener("dispose",E);for(const x in l){const w=l[x],F=R.target.uuid;F in w&&(w[F].dispose(),delete w[F])}}}function rM(n,e){function t(){let L=!1;const se=new kt;let ne=null;const me=new kt(0,0,0,0);return{setMask:function(ee){ne!==ee&&!L&&(n.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){L=ee},setClear:function(ee,$,ye,De,wt){wt===!0&&(ee*=De,$*=De,ye*=De),se.set(ee,$,ye,De),me.equals(se)===!1&&(n.clearColor(ee,$,ye,De),me.copy(se))},reset:function(){L=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,ne=null,me=null,ee=null;return{setReversed:function($){if(se!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),se=$;const De=ee;ee=null,this.setClear(De)}},getReversed:function(){return se},setTest:function($){$?ie(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function($){ne!==$&&!L&&(n.depthMask($),ne=$)},setFunc:function($){if(se&&($=B0[$]),me!==$){switch($){case Hl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case Xl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=$}},setLocked:function($){L=$},setClear:function($){ee!==$&&(ee=$,se&&($=1-$),n.clearDepth($))},reset:function(){L=!1,ne=null,me=null,ee=null,se=!1}}}function r(){let L=!1,se=null,ne=null,me=null,ee=null,$=null,ye=null,De=null,wt=null;return{setTest:function(dt){L||(dt?ie(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(dt){se!==dt&&!L&&(n.stencilMask(dt),se=dt)},setFunc:function(dt,yi,bi){(ne!==dt||me!==yi||ee!==bi)&&(n.stencilFunc(dt,yi,bi),ne=dt,me=yi,ee=bi)},setOp:function(dt,yi,bi){($!==dt||ye!==yi||De!==bi)&&(n.stencilOp(dt,yi,bi),$=dt,ye=yi,De=bi)},setLocked:function(dt){L=dt},setClear:function(dt){wt!==dt&&(n.clearStencil(dt),wt=dt)},reset:function(){L=!1,se=null,ne=null,me=null,ee=null,$=null,ye=null,De=null,wt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,b=null,M=null,E=null,R=null,I=new je(0,0,0),x=0,w=!1,F=null,C=null,U=null,z=null,W=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=k>=2);let K=null,he={};const ge=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Oe=new kt().fromArray(ge),At=new kt().fromArray(fe);function Tt(L,se,ne,me){const ee=new Uint8Array(4),$=n.createTexture();n.bindTexture(L,$),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<ne;ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(se+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return $}const q={};q[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Ms),ze(!1),Bt(hu),ie(n.CULL_FACE),lt(Di);function ie(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ae(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ue(L,se){return d[L]!==se?(n.bindFramebuffer(L,se),d[L]=se,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(L,se){let ne=p,me=!1;if(L){ne=h.get(se),ne===void 0&&(ne=[],h.set(se,ne));const ee=L.textures;if(ne.length!==ee.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let $=0,ye=ee.length;$<ye;$++)ne[$]=n.COLOR_ATTACHMENT0+$;ne.length=ee.length,me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,me=!0);me&&n.drawBuffers(ne)}function Pe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const en={[_r]:n.FUNC_ADD,[c0]:n.FUNC_SUBTRACT,[l0]:n.FUNC_REVERSE_SUBTRACT};en[d0]=n.MIN,en[h0]=n.MAX;const Qe={[u0]:n.ZERO,[f0]:n.ONE,[p0]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[y0]:n.SRC_ALPHA_SATURATE,[_0]:n.DST_COLOR,[g0]:n.DST_ALPHA,[m0]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[v0]:n.ONE_MINUS_DST_COLOR,[x0]:n.ONE_MINUS_DST_ALPHA,[b0]:n.CONSTANT_COLOR,[M0]:n.ONE_MINUS_CONSTANT_COLOR,[S0]:n.CONSTANT_ALPHA,[w0]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(L,se,ne,me,ee,$,ye,De,wt,dt){if(L===Di){v===!0&&(ae(n.BLEND),v=!1);return}if(v===!1&&(ie(n.BLEND),v=!0),L!==o0){if(L!==m||dt!==w){if((f!==_r||M!==_r)&&(n.blendEquation(n.FUNC_ADD),f=_r,M=_r),dt)switch(L){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFunc(n.ONE,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",L);break}else switch(L){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fu:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",L);break}y=null,b=null,E=null,R=null,I.set(0,0,0),x=0,m=L,w=dt}return}ee=ee||se,$=$||ne,ye=ye||me,(se!==f||ee!==M)&&(n.blendEquationSeparate(en[se],en[ee]),f=se,M=ee),(ne!==y||me!==b||$!==E||ye!==R)&&(n.blendFuncSeparate(Qe[ne],Qe[me],Qe[$],Qe[ye]),y=ne,b=me,E=$,R=ye),(De.equals(I)===!1||wt!==x)&&(n.blendColor(De.r,De.g,De.b,wt),I.copy(De),x=wt),m=L,w=!1}function xt(L,se){L.side===di?ae(n.CULL_FACE):ie(n.CULL_FACE);let ne=L.side===An;se&&(ne=!ne),ze(ne),L.blending===vs&&L.transparent===!1?lt(Di):lt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){F!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),F=L)}function Bt(L){L!==r0?(ie(n.CULL_FACE),L!==C&&(L===hu?n.cullFace(n.BACK):L===s0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),C=L}function P(L){L!==U&&(G&&n.lineWidth(L),U=L)}function Xt(L,se,ne){L?(ie(n.POLYGON_OFFSET_FILL),(z!==se||W!==ne)&&(z=se,W=ne,a.getReversed()&&(se=-se),n.polygonOffset(se,ne))):ae(n.POLYGON_OFFSET_FILL)}function ct(L){L?ie(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function St(L){L===void 0&&(L=n.TEXTURE0+B-1),K!==L&&(n.activeTexture(L),K=L)}function Se(L,se,ne){ne===void 0&&(K===null?ne=n.TEXTURE0+B-1:ne=K);let me=he[ne];me===void 0&&(me={type:void 0,texture:void 0},he[ne]=me),(me.type!==L||me.texture!==se)&&(K!==ne&&(n.activeTexture(ne),K=ne),n.bindTexture(L,se||q[L]),me.type=L,me.texture=se)}function T(){const L=he[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){it("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){it("WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){it("WebGLState:",L)}}function J(){try{n.texSubImage3D(...arguments)}catch(L){it("WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){it("WebGLState:",L)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(L){it("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){it("WebGLState:",L)}}function Ae(){try{n.texStorage3D(...arguments)}catch(L){it("WebGLState:",L)}}function Ie(){try{n.texImage2D(...arguments)}catch(L){it("WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){it("WebGLState:",L)}}function te(L){Oe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Oe.copy(L))}function ve(L){At.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),At.copy(L))}function be(L,se){let ne=l.get(se);ne===void 0&&(ne=new WeakMap,l.set(se,ne));let me=ne.get(L);me===void 0&&(me=n.getUniformBlockIndex(se,L.name),ne.set(L,me))}function ue(L,se){const me=l.get(se).get(L);c.get(se)!==me&&(n.uniformBlockBinding(se,me,L.__bindingPointIndex),c.set(se,me))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,he={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,b=null,M=null,E=null,R=null,I=new je(0,0,0),x=0,w=!1,F=null,C=null,U=null,z=null,W=null,Oe.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Pe,setBlending:lt,setMaterial:xt,setFlipSided:ze,setCullFace:Bt,setLineWidth:P,setPolygonOffset:Xt,setScissorTest:ct,activeTexture:St,bindTexture:Se,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ie,texImage3D:Q,updateUBOMapping:be,uniformBlockBinding:ue,texStorage2D:re,texStorage3D:Ae,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:te,viewport:ve,reset:He}}function sM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):ko("canvas")}function v(T,_,D){let j=1;const J=Se(T);if((J.width>D||J.height>D)&&(j=D/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(j*J.width),_e=Math.floor(j*J.height);d===void 0&&(d=g(Y,_e));const re=_?g(Y,_e):d;return re.width=Y,re.height=_e,re.getContext("2d").drawImage(T,0,0,Y,_e),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+_e+")."),re}else return"data"in T&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,_,D,j,J=!1){if(T!==null){if(n[T]!==void 0)return n[T];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),_===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const _e=J?Fo:et.getTransfer(j);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=_e===ht?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(T,_){let D;return T?_===null||_===gi||_===pa?D=n.DEPTH24_STENCIL8:_===Jn?D=n.DEPTH32F_STENCIL8:_===fa&&(D=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===pa?D=n.DEPTH_COMPONENT24:_===Jn?D=n.DEPTH_COMPONENT32F:_===fa&&(D=n.DEPTH_COMPONENT16),D}function E(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){const _=T.target;_.removeEventListener("dispose",R),x(_),_.isVideoTexture&&u.delete(_)}function I(T){const _=T.target;_.removeEventListener("dispose",I),F(_)}function x(T){const _=i.get(T);if(_.__webglInit===void 0)return;const D=T.source,j=h.get(D);if(j){const J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(T),Object.keys(j).length===0&&h.delete(D)}i.remove(T)}function w(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const D=T.source,j=h.get(D);delete j[_.__cacheKey],a.memory.textures--}function F(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let J=0;J<_.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[j][J]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=T.textures;for(let j=0,J=D.length;j<J;j++){const Y=i.get(D[j]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[j])}i.remove(T)}let C=0;function U(){C=0}function z(){const T=C;return T>=r.maxTextures&&Le("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function W(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function B(T,_){const D=i.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const j=T.image;if(j===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,T,_);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function G(T,_){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){q(D,T,_);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function k(T,_){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){q(D,T,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function Z(T,_){const D=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){ie(D,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const K={[jl]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[ql]:n.MIRRORED_REPEAT},he={[ln]:n.NEAREST,[A0]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Dc]:n.LINEAR_MIPMAP_NEAREST,[br]:n.LINEAR_MIPMAP_LINEAR},ge={[I0]:n.NEVER,[U0]:n.ALWAYS,[P0]:n.LESS,[nh]:n.LEQUAL,[L0]:n.EQUAL,[ih]:n.GEQUAL,[D0]:n.GREATER,[N0]:n.NOTEQUAL};function fe(T,_){if(_.type===Jn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===Dc||_.magFilter===Ha||_.magFilter===br||_.minFilter===xn||_.minFilter===Dc||_.minFilter===Ha||_.minFilter===br)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,K[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,K[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,K[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,he[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==Ha&&_.minFilter!==br||_.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Oe(T,_){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));const j=_.source;let J=h.get(j);J===void 0&&(J={},h.set(j,J));const Y=W(_);if(Y!==T.__cacheKey){J[Y]===void 0&&(J[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[Y].usedTimes++;const _e=J[T.__cacheKey];_e!==void 0&&(J[T.__cacheKey].usedTimes--,_e.usedTimes===0&&w(_)),T.__cacheKey=Y,T.__webglTexture=J[Y].texture}return D}function At(T,_,D){return Math.floor(Math.floor(T/D)/_)}function Tt(T,_,D,j){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,D,j,_.data);else{Y.sort((Q,te)=>Q.start-te.start);let _e=0;for(let Q=1;Q<Y.length;Q++){const te=Y[_e],ve=Y[Q],be=te.start+te.count,ue=At(ve.start,_.width,4),He=At(te.start,_.width,4);ve.start<=be+1&&ue===He&&At(ve.start+ve.count-1,_.width,4)===ue?te.count=Math.max(te.count,ve.start+ve.count-te.start):(++_e,Y[_e]=ve)}Y.length=_e+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Q=0,te=Y.length;Q<te;Q++){const ve=Y[Q],be=Math.floor(ve.start/4),ue=Math.ceil(ve.count/4),He=be%_.width,L=Math.floor(be/_.width),se=ue,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,He,L,se,ne,D,j,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function q(T,_,D){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const J=Oe(T,_),Y=_.source;t.bindTexture(j,T.__webglTexture,n.TEXTURE0+D);const _e=i.get(Y);if(Y.version!==_e.__version||J===!0){t.activeTexture(n.TEXTURE0+D);const re=et.getPrimaries(et.workingColorSpace),Ae=_.colorSpace===Ji?null:et.getPrimaries(_.colorSpace),Ie=_.colorSpace===Ji||re===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Q=v(_.image,!1,r.maxTextureSize);Q=St(_,Q);const te=s.convert(_.format,_.colorSpace),ve=s.convert(_.type);let be=b(_.internalFormat,te,ve,_.colorSpace,_.isVideoTexture);fe(j,_);let ue;const He=_.mipmaps,L=_.isVideoTexture!==!0,se=_e.__version===void 0||J===!0,ne=Y.dataReady,me=E(_,Q);if(_.isDepthTexture)be=M(_.format===Mr,_.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,be,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,te,ve,null));else if(_.isDataTexture)if(He.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,me,be,He[0].width,He[0].height);for(let ee=0,$=He.length;ee<$;ee++)ue=He[ee],L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,te,ve,ue.data):t.texImage2D(n.TEXTURE_2D,ee,be,ue.width,ue.height,0,te,ve,ue.data);_.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,me,be,Q.width,Q.height),ne&&Tt(_,Q,te,ve)):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,te,ve,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,be,He[0].width,He[0].height,Q.depth);for(let ee=0,$=He.length;ee<$;ee++)if(ue=He[ee],_.format!==Zn)if(te!==null)if(L){if(ne)if(_.layerUpdates.size>0){const ye=Vu(ue.width,ue.height,_.format,_.type);for(const De of _.layerUpdates){const wt=ue.data.subarray(De*ye/ue.data.BYTES_PER_ELEMENT,(De+1)*ye/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,De,ue.width,ue.height,1,te,wt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,Q.depth,te,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,be,ue.width,ue.height,Q.depth,0,ue.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,Q.depth,te,ve,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,be,ue.width,ue.height,Q.depth,0,te,ve,ue.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,me,be,He[0].width,He[0].height);for(let ee=0,$=He.length;ee<$;ee++)ue=He[ee],_.format!==Zn?te!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,te,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,be,ue.width,ue.height,0,ue.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,te,ve,ue.data):t.texImage2D(n.TEXTURE_2D,ee,be,ue.width,ue.height,0,te,ve,ue.data)}else if(_.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,be,Q.width,Q.height,Q.depth),ne)if(_.layerUpdates.size>0){const ee=Vu(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const ye=Q.data.subarray($*ee/Q.data.BYTES_PER_ELEMENT,($+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,te,ve,ye)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,te,ve,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Q.width,Q.height,Q.depth,0,te,ve,Q.data);else if(_.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,me,be,Q.width,Q.height,Q.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,te,ve,Q.data)):t.texImage3D(n.TEXTURE_3D,0,be,Q.width,Q.height,Q.depth,0,te,ve,Q.data);else if(_.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,me,be,Q.width,Q.height);else{let ee=Q.width,$=Q.height;for(let ye=0;ye<me;ye++)t.texImage2D(n.TEXTURE_2D,ye,be,ee,$,0,te,ve,null),ee>>=1,$>>=1}}else if(He.length>0){if(L&&se){const ee=Se(He[0]);t.texStorage2D(n.TEXTURE_2D,me,be,ee.width,ee.height)}for(let ee=0,$=He.length;ee<$;ee++)ue=He[ee],L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,te,ve,ue):t.texImage2D(n.TEXTURE_2D,ee,be,te,ve,ue);_.generateMipmaps=!1}else if(L){if(se){const ee=Se(Q);t.texStorage2D(n.TEXTURE_2D,me,be,ee.width,ee.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,ve,Q)}else t.texImage2D(n.TEXTURE_2D,0,be,te,ve,Q);m(_)&&f(j),_e.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ie(T,_,D){if(_.image.length!==6)return;const j=Oe(T,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const Y=i.get(J);if(J.version!==Y.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const _e=et.getPrimaries(et.workingColorSpace),re=_.colorSpace===Ji?null:et.getPrimaries(_.colorSpace),Ae=_.colorSpace===Ji||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,te=[];for(let $=0;$<6;$++)!Ie&&!Q?te[$]=v(_.image[$],!0,r.maxCubemapSize):te[$]=Q?_.image[$].image:_.image[$],te[$]=St(_,te[$]);const ve=te[0],be=s.convert(_.format,_.colorSpace),ue=s.convert(_.type),He=b(_.internalFormat,be,ue,_.colorSpace),L=_.isVideoTexture!==!0,se=Y.__version===void 0||j===!0,ne=J.dataReady;let me=E(_,ve);fe(n.TEXTURE_CUBE_MAP,_);let ee;if(Ie){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,He,ve.width,ve.height);for(let $=0;$<6;$++){ee=te[$].mipmaps;for(let ye=0;ye<ee.length;ye++){const De=ee[ye];_.format!==Zn?be!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,He,De.width,De.height,0,De.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,De.width,De.height,be,ue,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,He,De.width,De.height,0,be,ue,De.data)}}}else{if(ee=_.mipmaps,L&&se){ee.length>0&&me++;const $=Se(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,He,$.width,$.height)}for(let $=0;$<6;$++)if(Q){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,te[$].width,te[$].height,be,ue,te[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,te[$].width,te[$].height,0,be,ue,te[$].data);for(let ye=0;ye<ee.length;ye++){const wt=ee[ye].image[$].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,wt.width,wt.height,be,ue,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,He,wt.width,wt.height,0,be,ue,wt.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,ue,te[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,be,ue,te[$]);for(let ye=0;ye<ee.length;ye++){const De=ee[ye];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,be,ue,De.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,He,be,ue,De.image[$])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),Y.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ae(T,_,D,j,J,Y){const _e=s.convert(D.format,D.colorSpace),re=s.convert(D.type),Ae=b(D.internalFormat,_e,re,D.colorSpace),Ie=i.get(_),Q=i.get(D);if(Q.__renderTarget=_,!Ie.__hasExternalTextures){const te=Math.max(1,_.width>>Y),ve=Math.max(1,_.height>>Y);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,Ae,te,ve,_.depth,0,_e,re,null):t.texImage2D(J,Y,Ae,te,ve,0,_e,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,Q.__webglTexture,0,P(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,Q.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(T,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const j=_.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=M(_.stencilBuffer,J),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Y,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,T)}else{const j=_.textures;for(let J=0;J<j.length;J++){const Y=j[J],_e=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),Ae=b(Y.internalFormat,_e,re,Y.colorSpace);Xt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Ae,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(T,_,D){const j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),fe(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ie=s.convert(_.depthTexture.format),Q=s.convert(_.depthTexture.type);let te;_.depthTexture.format===Oi?te=n.DEPTH_COMPONENT24:_.depthTexture.format===Mr&&(te=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,te,_.width,_.height,0,Ie,Q,null)}}else B(_.depthTexture,0);const Y=J.__webglTexture,_e=P(_),re=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Ae=_.depthTexture.format===Mr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Oi)Xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,re,Y,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,re,Y,0);else if(_.depthTexture.format===Mr)Xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,re,Y,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,re,Y,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const _=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=j}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)Re(_.__webglFramebuffer[j],T,j);else{const j=T.texture.mipmaps;j&&j.length>0?Re(_.__webglFramebuffer[0],T,0):Re(_.__webglFramebuffer,T,0)}else if(D){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[j],T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function en(T,_,D){const j=i.get(T);_!==void 0&&ae(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Pe(T)}function Qe(T){const _=T.texture,D=i.get(T),j=i.get(_);T.addEventListener("dispose",I);const J=T.textures,Y=T.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)D.__webglFramebuffer[re][Ae]=n.createFramebuffer()}else D.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)D.__webglFramebuffer[re]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(_e)for(let re=0,Ae=J.length;re<Ae;re++){const Ie=i.get(J[re]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Xt(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const Ae=J[re];D.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Ie=s.convert(Ae.format,Ae.colorSpace),Q=s.convert(Ae.type),te=b(Ae.internalFormat,Ie,Q,Ae.colorSpace,T.isXRRenderTarget===!0),ve=P(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,te,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,D.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),fe(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(D.__webglFramebuffer[re][Ae],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae);else ae(D.__webglFramebuffer[re],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,Ae=J.length;re<Ae;re++){const Ie=J[re],Q=i.get(Ie);let te=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(te=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,Q.__webglTexture),fe(te,Ie),ae(D.__webglFramebuffer,T,Ie,n.COLOR_ATTACHMENT0+re,te,0),m(Ie)&&f(te)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),fe(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(D.__webglFramebuffer[Ae],T,_,n.COLOR_ATTACHMENT0,re,Ae);else ae(D.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,re,0);m(_)&&f(re),t.unbindTexture()}T.depthBuffer&&Pe(T)}function lt(T){const _=T.textures;for(let D=0,j=_.length;D<j;D++){const J=_[D];if(m(J)){const Y=y(T),_e=i.get(J).__webglTexture;t.bindTexture(Y,_e),f(Y),t.unbindTexture()}}}const xt=[],ze=[];function Bt(T){if(T.samples>0){if(Xt(T)===!1){const _=T.textures,D=T.width,j=T.height;let J=n.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(T),re=_.length>1;if(re)for(let Ie=0;Ie<_.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ae=T.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<_.length;Ie++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const Q=i.get(_[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,D,j,0,0,D,j,J,n.NEAREST),c===!0&&(xt.length=0,ze.length=0,xt.push(n.COLOR_ATTACHMENT0+Ie),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xt.push(Y),ze.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ie=0;Ie<_.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const Q=i.get(_[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(T){return Math.min(r.maxSamples,T.samples)}function Xt(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ct(T){const _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function St(T,_){const D=T.colorSpace,j=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Es&&D!==Ji&&(et.getTransfer(D)===ht?(j!==Zn||J!==Un)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",D)),_}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=en,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function aM(n,e){function t(i,r=Ji){let s;const a=et.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===Kd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gp)return n.BYTE;if(i===Vp)return n.SHORT;if(i===fa)return n.UNSIGNED_SHORT;if(i===qd)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===ki)return n.HALF_FLOAT;if(i===$p)return n.ALPHA;if(i===Yp)return n.RGB;if(i===Zn)return n.RGBA;if(i===Oi)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===Zd)return n.RED;if(i===Qd)return n.RED_INTEGER;if(i===ws)return n.RG;if(i===eh)return n.RG_INTEGER;if(i===th)return n.RGBA_INTEGER;if(i===Mo||i===So||i===wo||i===Eo)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Jl||i===Zl||i===Ql)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===ad)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ed||i===td)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===id)return s.COMPRESSED_R11_EAC;if(i===rd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===sd)return s.COMPRESSED_RG11_EAC;if(i===ad)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===od||i===cd||i===ld||i===dd||i===hd||i===ud||i===fd||i===pd||i===md||i===gd||i===xd||i===_d||i===vd||i===yd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===od)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ld)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ud)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===md)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_d)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bd||i===Md||i===Sd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bd)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Md)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wd||i===Ed||i===Td||i===Ad)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ad)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cM=`
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

}`;class lM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _i({vertexShader:oM,fragmentShader:cM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new Bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dM extends Fs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new lM,f={},y=t.getContextAttributes();let b=null,M=null;const E=[],R=[],I=new Je;let x=null;const w=new jn;w.viewport=new kt;const F=new jn;F.viewport=new kt;const C=[w,F],U=new Mx;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=E[q];return ie===void 0&&(ie=new Hc,E[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=E[q];return ie===void 0&&(ie=new Hc,E[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=E[q];return ie===void 0&&(ie=new Hc,E[q]=ie),ie.getHandSpace()};function B(q){const ie=R.indexOf(q.inputSource);if(ie===-1)return;const ae=E[ie];ae!==void 0&&(ae.update(q.inputSource,q.frame,l||a),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",k);for(let q=0;q<E.length;q++){const ie=R[q];ie!==null&&(R[q]=null,E[q].disconnect(ie))}z=null,W=null,m.reset();for(const q in f)delete f[q];e.setRenderTarget(b),p=null,h=null,d=null,r=null,M=null,Tt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",G),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ue=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?Mr:Oi,Ue=y.stencil?pa:gi);const Pe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new pi(h.textureWidth,h.textureHeight,{format:Zn,type:Un,depthTexture:new ga(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new pi(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Tt.setContext(r),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(q){for(let ie=0;ie<q.removed.length;ie++){const ae=q.removed[ie],Ue=R.indexOf(ae);Ue>=0&&(R[Ue]=null,E[Ue].disconnect(ae))}for(let ie=0;ie<q.added.length;ie++){const ae=q.added[ie];let Ue=R.indexOf(ae);if(Ue===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=R.length){R.push(ae),Ue=Pe;break}else if(R[Pe]===null){R[Pe]=ae,Ue=Pe;break}if(Ue===-1)break}const Re=E[Ue];Re&&Re.connect(ae)}}const Z=new O,K=new O;function he(q,ie,ae){Z.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const Ue=Z.distanceTo(K),Re=ie.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,en=Re[14]/(Re[10]-1),Qe=Re[14]/(Re[10]+1),lt=(Re[9]+1)/Re[5],xt=(Re[9]-1)/Re[5],ze=(Re[8]-1)/Re[0],Bt=(Pe[8]+1)/Pe[0],P=en*ze,Xt=en*Bt,ct=Ue/(-ze+Bt),St=ct*-ze;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(St),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Se=en+ct,T=Qe+ct,_=P-St,D=Xt+(Ue-St),j=lt*Qe/T*Se,J=xt*Qe/T*Se;q.projectionMatrix.makePerspective(_,D,j,J,Se,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ge(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ie=q.near,ae=q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),U.near=F.near=w.near=ie,U.far=F.far=w.far=ae,(z!==U.near||W!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,W=U.far),U.layers.mask=q.layers.mask|6,w.layers.mask=U.layers.mask&-5,F.layers.mask=U.layers.mask&-3;const Ue=q.parent,Re=U.cameras;ge(U,Ue);for(let Pe=0;Pe<Re.length;Pe++)ge(Re[Pe],Ue);Re.length===2?he(U,w,F):U.projectionMatrix.copy(w.projectionMatrix),fe(q,U,Ue)};function fe(q,ie,ae){ae===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Rd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return f[q]};let Oe=null;function At(q,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ue=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,Ue=!0);for(let Qe=0;Qe<ae.length;Qe++){const lt=ae[Qe];let xt=null;if(p!==null)xt=p.getViewport(lt);else{const Bt=d.getViewSubImage(h,lt);xt=Bt.viewport,Qe===0&&(e.setRenderTargetTextures(M,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(M))}let ze=C[Qe];ze===void 0&&(ze=new jn,ze.layers.enable(Qe),ze.viewport=new kt,C[Qe]=ze),ze.matrix.fromArray(lt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(lt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(xt.x,xt.y,xt.width,xt.height),Qe===0&&(U.matrix.copy(ze.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ue===!0&&U.cameras.push(ze)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Qe=d.getDepthInformation(ae[0]);Qe&&Qe.isValid&&Qe.texture&&m.init(Qe,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Qe=0;Qe<ae.length;Qe++){const lt=ae[Qe].camera;if(lt){let xt=f[lt];xt||(xt=new sm,f[lt]=xt);const ze=d.getCameraImage(lt);xt.sourceTexture=ze}}}}for(let ae=0;ae<E.length;ae++){const Ue=R[ae],Re=E[ae];Ue!==null&&Re!==void 0&&Re.update(Ue,ie,l||a)}Oe&&Oe(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Tt=new hm;Tt.setAnimationLoop(At),this.setAnimationLoop=function(q){Oe=q},this.dispose=function(){}}}const pr=new xi,hM=new Mt;function uM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,am(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,b,M){f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===An&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===An&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,pr.copy(M),pr.x*=-1,pr.y*=-1,pr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(hM.makeRotationFromEuler(pr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const M=b.program;i.uniformBlockBinding(y,M)}function l(y,b){let M=r[y.id];M===void 0&&(g(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",m));const E=b.program;i.updateUBOMapping(y,E);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const b=d();y.__bindingPointIndex=b;const M=n.createBuffer(),E=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=r[y.id],M=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,I=M.length;R<I;R++){const x=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,F=x.length;w<F;w++){const C=x[w];if(p(C,R,w,E)===!0){const U=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let B=0;B<z.length;B++){const G=z[B],k=v(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,M,E){const R=y.value,I=b+"_"+M;if(E[I]===void 0)return typeof R=="number"||typeof R=="boolean"?E[I]=R:E[I]=R.clone(),!0;{const x=E[I];if(typeof R=="number"||typeof R=="boolean"){if(x!==R)return E[I]=R,!0}else if(x.equals(R)===!1)return x.copy(R),!0}return!1}function g(y){const b=y.uniforms;let M=0;const E=16;for(let I=0,x=b.length;I<x;I++){const w=Array.isArray(b[I])?b[I]:[b[I]];for(let F=0,C=w.length;F<C;F++){const U=w[F],z=Array.isArray(U.value)?U.value:[U.value];for(let W=0,B=z.length;W<B;W++){const G=z[W],k=v(G),Z=M%E,K=Z%k.boundary,he=Z+K;M+=K,he!==0&&E-he<k.storage&&(M+=E-he),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=k.storage}}}const R=M%E;return R>0&&(M+=E-R),y.__size=M,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const pM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function mM(){return ai===null&&(ai=new im(pM,16,16,ws,ki),ai.name="DFG_LUT",ai.minFilter=xn,ai.magFilter=xn,ai.wrapS=Ci,ai.wrapT=Ci,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class gM{constructor(e={}){const{canvas:t=k0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=p,m=new Set([th,eh,Qd]),f=new Set([Un,gi,fa,pa,Kd,Jd]),y=new Uint32Array(4),b=new Int32Array(4);let M=null,E=null;const R=[],I=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=Dn;let C=0,U=0,z=null,W=-1,B=null;const G=new kt,k=new kt;let Z=null;const K=new je(0);let he=0,ge=t.width,fe=t.height,Oe=1,At=null,Tt=null;const q=new kt(0,0,ge,fe),ie=new kt(0,0,ge,fe);let ae=!1;const Ue=new ah;let Re=!1,Pe=!1;const en=new Mt,Qe=new O,lt=new kt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Bt(){return z===null?Oe:1}let P=i;function Xt(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jd}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",wt,!1),P===null){const N="webgl2";if(P=Xt(N,S),P===null)throw Xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw it("WebGLRenderer: "+S.message),S}let ct,St,Se,T,_,D,j,J,Y,_e,re,Ae,Ie,Q,te,ve,be,ue,He,L,se,ne,me;function ee(){ct=new gy(P),ct.init(),se=new aM(P,ct),St=new cy(P,ct,e,se),Se=new rM(P,ct),St.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),T=new vy(P),_=new Wb,D=new sM(P,ct,Se,_,St,se,T),j=new my(w),J=new wx(P),ne=new ay(P,J),Y=new xy(P,J,T,ne),_e=new by(P,Y,J,ne,T),ue=new yy(P,St,D),te=new ly(_),re=new Vb(w,j,ct,St,ne,te),Ae=new uM(w,_),Ie=new $b,Q=new Zb(ct),be=new sy(w,j,Se,_e,g,c),ve=new iM(w,_e,St),me=new fM(P,T,St,Se),He=new oy(P,ct,T),L=new _y(P,ct,T),T.programs=re.programs,w.capabilities=St,w.extensions=ct,w.properties=_,w.renderLists=Ie,w.shadowMap=ve,w.state=Se,w.info=T}ee(),v!==Un&&(x=new Sy(v,t.width,t.height,r,s));const $=new dM(w,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=ct.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ct.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(S){S!==void 0&&(Oe=S,this.setSize(ge,fe,!1))},this.getSize=function(S){return S.set(ge,fe)},this.setSize=function(S,N,X=!0){if($.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=S,fe=N,t.width=Math.floor(S*Oe),t.height=Math.floor(N*Oe),X===!0&&(t.style.width=S+"px",t.style.height=N+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(ge*Oe,fe*Oe).floor()},this.setDrawingBufferSize=function(S,N,X){ge=S,fe=N,Oe=X,t.width=Math.floor(S*X),t.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(v===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,N,X,V){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,N,X,V),Se.viewport(G.copy(q).multiplyScalar(Oe).round())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,N,X,V){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,N,X,V),Se.scissor(k.copy(ie).multiplyScalar(Oe).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){Se.setScissorTest(ae=S)},this.setOpaqueSort=function(S){At=S},this.setTransparentSort=function(S){Tt=S},this.getClearColor=function(S){return S.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let V=0;if(S){let H=!1;if(z!==null){const le=z.texture.format;H=m.has(le)}if(H){const le=z.texture.type,pe=f.has(le),de=be.getClearColor(),Me=be.getClearAlpha(),Ee=de.r,Ne=de.g,Ge=de.b;pe?(y[0]=Ee,y[1]=Ne,y[2]=Ge,y[3]=Me,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=Ee,b[1]=Ne,b[2]=Ge,b[3]=Me,P.clearBufferiv(P.COLOR,0,b))}else V|=P.COLOR_BUFFER_BIT}N&&(V|=P.DEPTH_BUFFER_BIT),X&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),be.dispose(),Ie.dispose(),Q.dispose(),_.dispose(),j.dispose(),_e.dispose(),ne.dispose(),me.dispose(),re.dispose(),$.dispose(),$.removeEventListener("sessionstart",iu),$.removeEventListener("sessionend",ru),or.stop()};function ye(S){S.preventDefault(),yu("WebGLRenderer: Context Lost."),F=!0}function De(){yu("WebGLRenderer: Context Restored."),F=!1;const S=T.autoReset,N=ve.enabled,X=ve.autoUpdate,V=ve.needsUpdate,H=ve.type;ee(),T.autoReset=S,ve.enabled=N,ve.autoUpdate=X,ve.needsUpdate=V,ve.type=H}function wt(S){it("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function dt(S){const N=S.target;N.removeEventListener("dispose",dt),yi(N)}function yi(S){bi(S),_.remove(S)}function bi(S){const N=_.get(S).programs;N!==void 0&&(N.forEach(function(X){re.releaseProgram(X)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,V,H,le){N===null&&(N=xt);const pe=H.isMesh&&H.matrixWorld.determinant()<0,de=Zg(S,N,X,V,H);Se.setMaterial(V,pe);let Me=X.index,Ee=1;if(V.wireframe===!0){if(Me=Y.getWireframeAttribute(X),Me===void 0)return;Ee=2}const Ne=X.drawRange,Ge=X.attributes.position;let Te=Ne.start*Ee,ft=(Ne.start+Ne.count)*Ee;le!==null&&(Te=Math.max(Te,le.start*Ee),ft=Math.min(ft,(le.start+le.count)*Ee)),Me!==null?(Te=Math.max(Te,0),ft=Math.min(ft,Me.count)):Ge!=null&&(Te=Math.max(Te,0),ft=Math.min(ft,Ge.count));const zt=ft-Te;if(zt<0||zt===1/0)return;ne.setup(H,V,de,X,Me);let Nt,pt=He;if(Me!==null&&(Nt=J.get(Me),pt=L,pt.setIndex(Nt)),H.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*Bt()),pt.setMode(P.LINES)):pt.setMode(P.TRIANGLES);else if(H.isLine){let dn=V.linewidth;dn===void 0&&(dn=1),Se.setLineWidth(dn*Bt()),H.isLineSegments?pt.setMode(P.LINES):H.isLineLoop?pt.setMode(P.LINE_LOOP):pt.setMode(P.LINE_STRIP)}else H.isPoints?pt.setMode(P.POINTS):H.isSprite&&pt.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const dn=H._multiDrawStarts,we=H._multiDrawCounts,In=H._multiDrawCount,nt=Me?J.get(Me).bytesPerElement:1,Wn=_.get(V).currentProgram.getUniforms();for(let ri=0;ri<In;ri++)Wn.setValue(P,"_gl_DrawID",ri),pt.render(dn[ri]/nt,we[ri])}else if(H.isInstancedMesh)pt.renderInstances(Te,zt,H.count);else if(X.isInstancedBufferGeometry){const dn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,we=Math.min(X.instanceCount,dn);pt.renderInstances(Te,zt,we)}else pt.render(Te,zt)};function nu(S,N,X){S.transparent===!0&&S.side===di&&S.forceSinglePass===!1?(S.side=An,S.needsUpdate=!0,za(S,N,X),S.side=ir,S.needsUpdate=!0,za(S,N,X),S.side=di):za(S,N,X)}this.compile=function(S,N,X=null){X===null&&(X=S),E=Q.get(X),E.init(N),I.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const V=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const de=le[pe];nu(de,X,H),V.add(de)}else nu(le,X,H),V.add(le)}),E=I.pop(),V},this.compileAsync=function(S,N,X=null){const V=this.compile(S,N,X);return new Promise(H=>{function le(){if(V.forEach(function(pe){_.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){H(S);return}setTimeout(le,10)}ct.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Cc=null;function Jg(S){Cc&&Cc(S)}function iu(){or.stop()}function ru(){or.start()}const or=new hm;or.setAnimationLoop(Jg),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(S){Cc=S,$.setAnimationLoop(S),S===null?or.stop():or.start()},$.addEventListener("sessionstart",iu),$.addEventListener("sessionend",ru),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const X=$.enabled===!0&&$.isPresenting===!0,V=x!==null&&(z===null||X)&&x.begin(w,z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,N,z),E=Q.get(S,I.length),E.init(N),I.push(E),en.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(en,hi,N.reversedDepth),Pe=this.localClippingEnabled,Re=te.init(this.clippingPlanes,Pe),M=Ie.get(S,R.length),M.init(),R.push(M),$.enabled===!0&&$.isPresenting===!0){const pe=w.xr.getDepthSensingMesh();pe!==null&&Ic(pe,N,-1/0,w.sortObjects)}Ic(S,N,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(At,Tt),ze=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ze&&be.addToRenderList(M,S),this.info.render.frame++,Re===!0&&te.beginShadows();const H=E.state.shadowsArray;if(ve.render(H,S,N),Re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&x.hasRenderPass())===!1){const pe=M.opaque,de=M.transmissive;if(E.setupLights(),N.isArrayCamera){const Me=N.cameras;if(de.length>0)for(let Ee=0,Ne=Me.length;Ee<Ne;Ee++){const Ge=Me[Ee];au(pe,de,S,Ge)}ze&&be.render(S);for(let Ee=0,Ne=Me.length;Ee<Ne;Ee++){const Ge=Me[Ee];su(M,S,Ge,Ge.viewport)}}else de.length>0&&au(pe,de,S,N),ze&&be.render(S),su(M,S,N)}z!==null&&U===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),V&&x.end(w),S.isScene===!0&&S.onAfterRender(w,S,N),ne.resetDefaultState(),W=-1,B=null,I.pop(),I.length>0?(E=I[I.length-1],Re===!0&&te.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Ic(S,N,X,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ue.intersectsSprite(S)){V&&lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(en);const pe=_e.update(S),de=S.material;de.visible&&M.push(S,pe,de,X,lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ue.intersectsObject(S))){const pe=_e.update(S),de=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),lt.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),lt.copy(pe.boundingSphere.center)),lt.applyMatrix4(S.matrixWorld).applyMatrix4(en)),Array.isArray(de)){const Me=pe.groups;for(let Ee=0,Ne=Me.length;Ee<Ne;Ee++){const Ge=Me[Ee],Te=de[Ge.materialIndex];Te&&Te.visible&&M.push(S,pe,Te,X,lt.z,Ge)}}else de.visible&&M.push(S,pe,de,X,lt.z,null)}}const le=S.children;for(let pe=0,de=le.length;pe<de;pe++)Ic(le[pe],N,X,V)}function su(S,N,X,V){const{opaque:H,transmissive:le,transparent:pe}=S;E.setupLightsView(X),Re===!0&&te.setGlobalState(w.clippingPlanes,X),V&&Se.viewport(G.copy(V)),H.length>0&&Ba(H,N,X),le.length>0&&Ba(le,N,X),pe.length>0&&Ba(pe,N,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function au(S,N,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Te=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new pi(1,1,{generateMipmaps:!0,type:Te?ki:Un,minFilter:br,samples:Math.max(4,St.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const le=E.state.transmissionRenderTarget[V.id],pe=V.viewport||G;le.setSize(pe.z*w.transmissionResolutionScale,pe.w*w.transmissionResolutionScale);const de=w.getRenderTarget(),Me=w.getActiveCubeFace(),Ee=w.getActiveMipmapLevel();w.setRenderTarget(le),w.getClearColor(K),he=w.getClearAlpha(),he<1&&w.setClearColor(16777215,.5),w.clear(),ze&&be.render(X);const Ne=w.toneMapping;w.toneMapping=fi;const Ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Re===!0&&te.setGlobalState(w.clippingPlanes,V),Ba(S,X,V),D.updateMultisampleRenderTarget(le),D.updateRenderTargetMipmap(le),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ft=0,zt=N.length;ft<zt;ft++){const Nt=N[ft],{object:pt,geometry:dn,material:we,group:In}=Nt;if(we.side===di&&pt.layers.test(V.layers)){const nt=we.side;we.side=An,we.needsUpdate=!0,ou(pt,X,V,dn,we,In),we.side=nt,we.needsUpdate=!0,Te=!0}}Te===!0&&(D.updateMultisampleRenderTarget(le),D.updateRenderTargetMipmap(le))}w.setRenderTarget(de,Me,Ee),w.setClearColor(K,he),Ge!==void 0&&(V.viewport=Ge),w.toneMapping=Ne}function Ba(S,N,X){const V=N.isScene===!0?N.overrideMaterial:null;for(let H=0,le=S.length;H<le;H++){const pe=S[H],{object:de,geometry:Me,group:Ee}=pe;let Ne=pe.material;Ne.allowOverride===!0&&V!==null&&(Ne=V),de.layers.test(X.layers)&&ou(de,N,X,Me,Ne,Ee)}}function ou(S,N,X,V,H,le){S.onBeforeRender(w,N,X,V,H,le),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(w,N,X,V,S,le),H.transparent===!0&&H.side===di&&H.forceSinglePass===!1?(H.side=An,H.needsUpdate=!0,w.renderBufferDirect(X,N,V,H,S,le),H.side=ir,H.needsUpdate=!0,w.renderBufferDirect(X,N,V,H,S,le),H.side=di):w.renderBufferDirect(X,N,V,H,S,le),S.onAfterRender(w,N,X,V,H,le)}function za(S,N,X){N.isScene!==!0&&(N=xt);const V=_.get(S),H=E.state.lights,le=E.state.shadowsArray,pe=H.state.version,de=re.getParameters(S,H.state,le,N,X),Me=re.getProgramCacheKey(de);let Ee=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const Ne=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=j.get(S.envMap||V.environment,Ne),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",dt),Ee=new Map,V.programs=Ee);let Ge=Ee.get(Me);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===pe)return lu(S,de),Ge}else de.uniforms=re.getUniforms(S),S.onBeforeCompile(de,w),Ge=re.acquireProgram(de,Me),Ee.set(Me,Ge),V.uniforms=de.uniforms;const Te=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=te.uniform),lu(S,de),V.needsLights=e0(S),V.lightsStateVersion=pe,V.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function cu(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Ao.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function lu(S,N){const X=_.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Zg(S,N,X,V,H){N.isScene!==!0&&(N=xt),D.resetTextureUnits();const le=N.fog,pe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,de=z===null?w.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Es,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ee=j.get(V.envMap||pe,Me),Ne=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,zt=!!X.morphAttributes.color;let Nt=fi;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Nt=w.toneMapping);const pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dn=pt!==void 0?pt.length:0,we=_.get(V),In=E.state.lights;if(Re===!0&&(Pe===!0||S!==B)){const tn=S===B&&V.id===W;te.setState(V,S,tn)}let nt=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==In.state.version||we.outputColorSpace!==de||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Ee||V.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Ge||we.morphTargets!==Te||we.morphNormals!==ft||we.morphColors!==zt||we.toneMapping!==Nt||we.morphTargetsCount!==dn)&&(nt=!0):(nt=!0,we.__version=V.version);let Wn=we.currentProgram;nt===!0&&(Wn=za(V,N,H));let ri=!1,cr=!1,$r=!1;const _t=Wn.getUniforms(),an=we.uniforms;if(Se.useProgram(Wn.program)&&(ri=!0,cr=!0,$r=!0),V.id!==W&&(W=V.id,cr=!0),ri||B!==S){Se.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_t.setValue(P,"projectionMatrix",S.projectionMatrix),_t.setValue(P,"viewMatrix",S.matrixWorldInverse);const Gi=_t.map.cameraPosition;Gi!==void 0&&Gi.setValue(P,Qe.setFromMatrixPosition(S.matrixWorld)),St.logarithmicDepthBuffer&&_t.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_t.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,cr=!0,$r=!0)}if(we.needsLights&&(In.state.directionalShadowMap.length>0&&_t.setValue(P,"directionalShadowMap",In.state.directionalShadowMap,D),In.state.spotShadowMap.length>0&&_t.setValue(P,"spotShadowMap",In.state.spotShadowMap,D),In.state.pointShadowMap.length>0&&_t.setValue(P,"pointShadowMap",In.state.pointShadowMap,D)),H.isSkinnedMesh){_t.setOptional(P,H,"bindMatrix"),_t.setOptional(P,H,"bindMatrixInverse");const tn=H.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),_t.setValue(P,"boneTexture",tn.boneTexture,D))}H.isBatchedMesh&&(_t.setOptional(P,H,"batchingTexture"),_t.setValue(P,"batchingTexture",H._matricesTexture,D),_t.setOptional(P,H,"batchingIdTexture"),_t.setValue(P,"batchingIdTexture",H._indirectTexture,D),_t.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&_t.setValue(P,"batchingColorTexture",H._colorsTexture,D));const Hi=X.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&ue.update(H,X,Wn),(cr||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,_t.setValue(P,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(an.envMapIntensity.value=N.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=mM()),cr&&(_t.setValue(P,"toneMappingExposure",w.toneMappingExposure),we.needsLights&&Qg(an,$r),le&&V.fog===!0&&Ae.refreshFogUniforms(an,le),Ae.refreshMaterialUniforms(an,V,Oe,fe,E.state.transmissionRenderTarget[S.id]),Ao.upload(P,cu(we),an,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ao.upload(P,cu(we),an,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_t.setValue(P,"center",H.center),_t.setValue(P,"modelViewMatrix",H.modelViewMatrix),_t.setValue(P,"normalMatrix",H.normalMatrix),_t.setValue(P,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const tn=V.uniformsGroups;for(let Gi=0,Yr=tn.length;Gi<Yr;Gi++){const du=tn[Gi];me.update(du,Wn),me.bind(du,Wn)}}return Wn}function Qg(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function e0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,N,X){const V=_.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=N,_.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const X=_.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const t0=P.createFramebuffer();this.setRenderTarget=function(S,N=0,X=0){z=S,C=N,U=X;let V=null,H=!1,le=!1;if(S){const de=_.get(S);if(de.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),G.copy(S.viewport),k.copy(S.scissor),Z=S.scissorTest,Se.viewport(G),Se.scissor(k),Se.setScissorTest(Z),W=-1;return}else if(de.__webglFramebuffer===void 0)D.setupRenderTarget(S);else if(de.__hasExternalTextures)D.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&_.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(le=!0);const Ee=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?V=Ee[N][X]:V=Ee[N],H=!0):S.samples>0&&D.useMultisampledRTT(S)===!1?V=_.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[X]:V=Ee,G.copy(S.viewport),k.copy(S.scissor),Z=S.scissorTest}else G.copy(q).multiplyScalar(Oe).floor(),k.copy(ie).multiplyScalar(Oe).floor(),Z=ae;if(X!==0&&(V=t0),Se.bindFramebuffer(P.FRAMEBUFFER,V)&&Se.drawBuffers(S,V),Se.viewport(G),Se.scissor(k),Se.setScissorTest(Z),H){const de=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,X)}else if(le){const de=N;for(let Me=0;Me<S.textures.length;Me++){const Ee=_.get(S.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,X,de)}}else if(S!==null&&X!==0){const de=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,X)}W=-1},this.readRenderTargetPixels=function(S,N,X,V,H,le,pe,de=0){if(!(S&&S.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Se.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Ee=S.textures[de],Ne=Ee.format,Ge=Ee.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!St.textureFormatReadable(Ne)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ge)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&X>=0&&X<=S.height-H&&P.readPixels(N,X,V,H,se.convert(Ne),se.convert(Ge),le)}finally{const Ee=z!==null?_.get(z).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,V,H,le,pe,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me)if(N>=0&&N<=S.width-V&&X>=0&&X<=S.height-H){Se.bindFramebuffer(P.FRAMEBUFFER,Me);const Ee=S.textures[de],Ne=Ee.format,Ge=Ee.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!St.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),P.readPixels(N,X,V,H,se.convert(Ne),se.convert(Ge),0);const ft=z!==null?_.get(z).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,ft);const zt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await O0(P,zt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(Te),P.deleteSync(zt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){const V=Math.pow(2,-X),H=Math.floor(S.image.width*V),le=Math.floor(S.image.height*V),pe=N!==null?N.x:0,de=N!==null?N.y:0;D.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,pe,de,H,le),Se.unbindTexture()};const n0=P.createFramebuffer(),i0=P.createFramebuffer();this.copyTextureToTexture=function(S,N,X=null,V=null,H=0,le=0){let pe,de,Me,Ee,Ne,Ge,Te,ft,zt;const Nt=S.isCompressedTexture?S.mipmaps[le]:S.image;if(X!==null)pe=X.max.x-X.min.x,de=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Ne=X.min.y,Ge=X.isBox3?X.min.z:0;else{const an=Math.pow(2,-H);pe=Math.floor(Nt.width*an),de=Math.floor(Nt.height*an),S.isDataArrayTexture?Me=Nt.depth:S.isData3DTexture?Me=Math.floor(Nt.depth*an):Me=1,Ee=0,Ne=0,Ge=0}V!==null?(Te=V.x,ft=V.y,zt=V.z):(Te=0,ft=0,zt=0);const pt=se.convert(N.format),dn=se.convert(N.type);let we;N.isData3DTexture?(D.setTexture3D(N,0),we=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),we=P.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),we=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const In=P.getParameter(P.UNPACK_ROW_LENGTH),nt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Wn=P.getParameter(P.UNPACK_SKIP_PIXELS),ri=P.getParameter(P.UNPACK_SKIP_ROWS),cr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);const $r=S.isDataArrayTexture||S.isData3DTexture,_t=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const an=_.get(S),Hi=_.get(N),tn=_.get(an.__renderTarget),Gi=_.get(Hi.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,tn.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Yr=0;Yr<Me;Yr++)$r&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(S).__webglTexture,H,Ge+Yr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(N).__webglTexture,le,zt+Yr)),P.blitFramebuffer(Ee,Ne,pe,de,Te,ft,pe,de,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||_.has(S)){const an=_.get(S),Hi=_.get(N);Se.bindFramebuffer(P.READ_FRAMEBUFFER,n0),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,i0);for(let tn=0;tn<Me;tn++)$r?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,an.__webglTexture,H,Ge+tn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,an.__webglTexture,H),_t?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Hi.__webglTexture,le,zt+tn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Hi.__webglTexture,le),H!==0?P.blitFramebuffer(Ee,Ne,pe,de,Te,ft,pe,de,P.COLOR_BUFFER_BIT,P.NEAREST):_t?P.copyTexSubImage3D(we,le,Te,ft,zt+tn,Ee,Ne,pe,de):P.copyTexSubImage2D(we,le,Te,ft,Ee,Ne,pe,de);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _t?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(we,le,Te,ft,zt,pe,de,Me,pt,dn,Nt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(we,le,Te,ft,zt,pe,de,Me,pt,Nt.data):P.texSubImage3D(we,le,Te,ft,zt,pe,de,Me,pt,dn,Nt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,Te,ft,pe,de,pt,dn,Nt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,Te,ft,Nt.width,Nt.height,pt,Nt.data):P.texSubImage2D(P.TEXTURE_2D,le,Te,ft,pe,de,pt,dn,Nt);P.pixelStorei(P.UNPACK_ROW_LENGTH,In),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ri),P.pixelStorei(P.UNPACK_SKIP_IMAGES,cr),le===0&&N.generateMipmaps&&P.generateMipmap(we),Se.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&D.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?D.setTextureCube(S,0):S.isData3DTexture?D.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?D.setTexture2DArray(S,0):D.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){C=0,U=0,z=null,Se.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Ot=Object.freeze({gravity:18,minSpeed:13,extraSpeed:15,minPull:.08,minAngle:5,maxAngle:80,maxFlight:5}),Cs=n=>n.gravity??Ot.gravity,Vt=Object.freeze({x:-6.8,y:2.85}),Yt=Object.freeze({minX:8,maxX:8.62,minY:.6,maxY:5.8}),xM=Object.freeze({x:Yt.minX,y:(Yt.minY+Yt.maxY)/2}),Pr=(n,e,t)=>Math.min(t,Math.max(e,n));function Ui(...n){if(!n.every(Number.isFinite))throw new RangeError("Shot math requires finite numbers.")}function La(n){Ui(n.origin.x,n.origin.y,n.velocity.x,n.velocity.y),n.gravity!==void 0&&Ui(n.gravity),n.wind!==void 0&&Ui(n.wind)}function lh(n,e,t,i){const r=Math.min(t,i)*.34;if(![n,e,t,i,r].every(Number.isFinite)||t<=0||i<=0)return null;const s=Math.hypot(n,e)/r;return s<Ot.minPull||n>=0?null:{angle:Pr(Math.atan2(e,-n)*180/Math.PI,Ot.minAngle,Ot.maxAngle),power:Pr(s,0,1)}}function lc(n,e=Ot){Ui(n.angle,n.power);const t=Pr(n.angle,Ot.minAngle,Ot.maxAngle)*Math.PI/180,i=e.minSpeed+e.extraSpeed*Pr(n.power,0,1);return{origin:{...Vt},velocity:{x:Math.cos(t)*i,y:Math.sin(t)*i}}}function Kt(n,e){La(n),Ui(e);const t=n.origin.y+n.velocity.y*e-.5*Cs(n)*e*e;return n.wind?{x:n.origin.x+n.velocity.x*e+.5*n.wind*e*e,y:t}:{x:n.origin.x+n.velocity.x*e,y:t}}function Ho(n,e){return La(n),Ui(e),n.wind?{x:n.velocity.x+n.wind*e,y:n.velocity.y-Cs(n)*e}:{x:n.velocity.x,y:n.velocity.y-Cs(n)*e}}function dh(n,e){const t=n.wind/2,i=n.velocity.x,r=n.origin.x-e;if(t===0)return i===0?r===0?[0]:[]:[-r/i];const s=i*i-4*t*r;if(s<0)return[];const a=-(i+(i<0?-1:1)*Math.sqrt(s))/2;return a===0?[0]:[a/t,r/a]}function hh(n,e,t,i){if(La(n),Ui(e.minX,e.maxX,e.minY,e.maxY,t,i),e.minX>e.maxX||e.minY>e.maxY)throw new RangeError("Bounds must be ordered.");if(i<t||t<0)return null;const r=[t,i];if(n.wind){r.push(-n.velocity.x/n.wind);for(const s of[e.minX,e.maxX])r.push(...dh(n,s))}else if(n.velocity.x!==0)for(const s of[e.minX,e.maxX])r.push((s-n.origin.x)/n.velocity.x);for(const s of[e.minY,e.maxY]){const a=Cs(n),o=n.velocity.y**2+2*a*(n.origin.y-s);if(o>=0){const c=Math.sqrt(o);r.push((n.velocity.y-c)/a,(n.velocity.y+c)/a)}}for(const s of r.filter(a=>a>=t-1e-9&&a<=i+1e-9).sort((a,o)=>a-o)){const a=Kt(n,s);if(a.x>=e.minX-1e-8&&a.x<=e.maxX+1e-8&&a.y>=e.minY-1e-8&&a.y<=e.maxY+1e-8)return Pr(s,t,i)}return null}function uh(n,e=.24){if(La(n),Ui(e),n.origin.y<e)return 0;const t=Cs(n);return(n.velocity.y+Math.sqrt(n.velocity.y**2+2*t*(n.origin.y-e)))/t}function xm(n,e){if(La(n),Ui(e),!n.wind)return n.velocity.x===0?null:(e-n.origin.x)/n.velocity.x;const t=dh(n,e).filter(i=>i>=0).sort((i,r)=>i-r);return t.length?t[0]:null}const _M=[[-1,0],[1,0],[0,-1],[0,1]];function _m(n,e,t=32){return[...new Set(n.map(i=>`${Math.floor(i%e/t)}:${Math.floor(Math.floor(i/e)/t)}`))]}function vm(n,e,t){const i=new Set(n);for(const r of n){const[s,a]=r.split(":").map(Number);for(const[o,c]of _M)s+o>=0&&a+c>=0&&s+o<e&&a+c<t&&i.add(`${s+o}:${a+c}`)}return[...i]}function vM(n,e,t,i,r){return lh(n*r,e,t,i)}function yM(n,e,t,i){if(n===0)return null;const r=n<0?1:-1,s=lh(n*r,e,t,i);return s?{...s,facing:r}:null}function bM(n,e,t){if(t<e||!n.length)return null;const i=(t-e)/1e3,r=n.find(o=>o.time>=i)??n.at(-1),s=n[Math.max(0,n.indexOf(r)-1)],a=r.time===s.time?1:Math.min(1,Math.max(0,(i-s.time)/(r.time-s.time)));return r.poses.map(o=>{const c=s.poses.find(l=>l.actorId===o.actorId)?.feet??o.feet;return{actorId:o.actorId,feet:{x:c.x+(o.feet.x-c.x)*a,y:c.y+(o.feet.y-c.y)*a,z:0}}})}function MM(n,e){if(!n)return"";if(n.state==="finished")return n.draw?"Both archers draw.":n.winner===e?"You are the last archer standing.":"Your opponent is the last archer standing.";if(n.state==="aborted")return"The service ended this duel safely.";if(n.state!=="active"||n.phase!=="planning"||!n.lastEvent?.teleport)return"";const t=n.lastEvent.teleport;if(t.ok)return"Teleport landed on a clear supported surface.";const i={"not-upward":"the arrow did not land on an upward-facing surface","no-support":"there was no supporting surface","occupied-or-blocked":"the arrival space was occupied or blocked"};return`Teleport failed: ${t.reason?i[t.reason]:"there was no legal arrival"}. The action was consumed.`}const Kn=n=>n.version==="volley-1";function SM(n){return JSON.stringify(Kn(n)?[n.id,n.version,n.seat.lifeId,n.epoch,n.roundId]:[n.id,n.version,n.seat.lifeId,n.activeSeat,n.planningStartedAt])}function wM(n,e){return Kn(n)?n.locks.find(t=>t.actorId===e)?.plan??null:null}function EM(n){if(!n.seats.every(t=>t.ready))return!1;if(!Kn(n))return n.seats.length===2;if(n.mode==="royale")return n.seats.length>=2&&n.seats.length<=8;const e=new Map;for(const t of n.seats){if(t.teamId===null)return!1;e.set(t.teamId,(e.get(t.teamId)??0)+1)}return n.seats.length===4&&e.size===2&&[...e.values()].every(t=>t===2)}function ym(n,e){const t=Kn(n),i=n.seats.find(h=>h.actorId===e);let r=MM(n,e);if(t&&n.state==="finished"&&(r=n.draw?"Match complete · draw.":n.winningTeam!==null?i&&"teamId"in i&&i.teamId===n.winningTeam?"Your team won.":"The other team won.":n.winner===e?"You are the last archer standing.":"Another archer is the last one standing."),t&&n.state==="aborted"&&(r="The service ended this match safely."),!t)return{preset:"Duel · alternate turns",turn:n.state==="waiting"?"Both archers must ready before the host starts.":n.state==="active"?n.phase==="planning"?n.seat.canAct?"Your turn. Choose an arrow and draw.":"Opponent’s turn. Watch the arena.":"Arrow resolving. Waiting for settlement.":n.state==="finished"?n.draw?"Duel complete · draw.":n.winner===e?"Duel complete · you won.":"Duel complete · opponent won.":"This duel was aborted. Leave to create a new room.",result:r,priority:[],locks:[],pressure:""};const s=n.locks.find(h=>h.actorId===e),a=n.actors.filter(h=>!h.eliminated).length,o=n.seat.canAct?"Choose an arrow and draw to lock.":s?.locked?s.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":n.priority.includes(e)?"Watch the arena.":"You are eliminated. Watch the remaining archers.",c=n.preset==="teams-1"?"Teams 2v2 · shared 20-second planning":n.preset==="royale-fixed-1"?"Royale · fixed arena · 30 rounds / 15 minutes · 20-second planning":"Royale · shrinking safe area · 20-second planning",l=n.state==="waiting"?n.mode==="teams"?"Four archers, two per team, must ready before the host starts.":"Two to eight archers must all ready before the host starts.":n.state==="active"?`Round ${n.round} · ${a} alive · ${n.phase==="planning"?o:"Arrows resolve in published priority order."}`:r,u=n.preset!=="royale-shrink-1"?"":`Safe area (solid) ${n.pressure.minX.toFixed(1)} to ${n.pressure.maxX.toFixed(1)}${n.pressure.warning?` · dashed bounds after round ${n.pressure.warning.afterRound} to ${n.pressure.warning.minX.toFixed(1)}–${n.pressure.warning.maxX.toFixed(1)} · outside feet take 25 damage`:""}`,d=n.locks.map(h=>{const p=h.plan;return{actorId:h.actorId,text:h.locked?p?p.kind==="pass"?"Pass locked":`${p.aim.arrow} locked · ${Math.round(p.aim.angle)}° · ${Math.round(p.aim.power*100)}% · ${p.aim.facing===1?"right":"left"}`:"Locked":"Planning"}});return{preset:c,turn:l,result:r,priority:n.priority,locks:d,pressure:u}}function bm(n,e){return n.state!=="finished"&&n.state!=="aborted"?{kind:"none",label:""}:e?e.joined?{kind:"enter",label:"Enter rematch lobby"}:{kind:"join",label:"Join rematch"}:{kind:"request",label:"Rematch"}}function TM(n){const e=/^team[-_ ]?([A-Za-z0-9]+)$/i.exec(n);return e?`Team ${e[1].toUpperCase()}`:n}function AM(n,e,t,i){const r=ym(n,e).locks;return n.seats.map((s,a)=>{const o=n.actors.find(h=>h.id===s.actorId),c=t.find(h=>h.actorId===s.actorId),l=o?.health??100,u=c?.reservedUntil?` · reserved ${Math.max(0,Math.ceil((c.reservedUntil-i())/1e3))}s`:"",d=n.state==="active"?r.find(h=>h.actorId===s.actorId):void 0;return{actorId:s.actorId,text:`${c?.label??`Archer ${a+1}`}${s.actorId===e?" · you":""} · ${l} health${o?.eliminated?" · eliminated":""} · ${n.state==="waiting"?s.ready?"ready":"not ready":c?.status??"disconnected"}${c?.status==="disconnected"?u:""}`,health:l,healthLabel:`Archer ${a+1} health`,team:"teamId"in s&&s.teamId?String(s.teamId):null,lockText:d?.text??null}})}const dc="combat-protocol-1",Hs="combat-4",RM="The combat rules version has changed. Reload the page to continue.",fh="skirmish-protocol-1",ph=Hs,CM="This public arena has been updated. Reload the page to continue.",mh=Object.freeze({maxRooms:128,maxSockets:128,maxSocketsPerMember:4,maxDebtPerArena:1024,maxDebt:8192,maxMemberships:16384,maxControls:4096,controlsPerMember:2,controlRetryMs:3e5,maxRateBuckets:1024,commandBurst:30,commandWindowMs:1e4,commandBodyBytes:8192,socketFrameBytes:2048,maxSnapshotBytes:4*1024*1024,slowClientBytes:4*1024*1024,authenticationTimeoutMs:5e3,maxUnauthenticatedSockets:16}),li="combat-protocol-2";function pf(n,e=!1){if(typeof n!="string"||n.length>320)throw new Error("Invalid service origin.");const t=/^(https?):\/\/([A-Za-z0-9.-]+)(?::([1-9][0-9]{0,4}))?$/.exec(n);if(!t||t[0]!==n||!e&&t[1]!=="https")throw new Error("Invalid service origin.");const i=t[2].toLowerCase(),r=i.split(".");if(i.length>253||r.some(c=>!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(c)))throw new Error("Invalid service host.");const s=i==="127.0.0.1";if(!/[a-z]/.test(r.at(-1))&&!(e&&s))throw new Error("DNS service host required.");if(new URL(`${t[1]}://${i}`).hostname!==i)throw new Error("Ambiguous service host.");const a=t[3]===void 0?void 0:Number(t[3]);if(a!==void 0&&a>65535)throw new Error("Invalid service port.");const o=a===(t[1]==="https"?443:80)?void 0:a;return`${t[1]}://${i}${o===void 0?"":`:${o}`}`}function Ld(n,e){if(n==="")return null;const t=pf(e,!0),i=n==="/api",r=i?t:pf(n.endsWith("/api")?n.slice(0,-4):n);if(!i&&!n.endsWith("/api"))throw new Error("Service endpoint must end in /api.");const s=`${r}/api`,a=s.replace(/^http/,"ws");return Object.freeze({mode:i?"same-origin":"https",requestBase:i?"/api":s,serviceId:s,boardSocket:`${a}/events`,combatSocket:`${a}/combat/events`})}function IM(n,e){if(n.length!==1)return null;try{return Ld(n[0],e)}catch{return null}}function Mm(n){if(n.mode==="same-origin")return Object.freeze({identity:"archery.challenge.identity.v1",room:"archery.combat.room.v1",legacy:!0});const e=encodeURIComponent(n.serviceId);return Object.freeze({identity:`archery.service.identity.v2:${e}`,room:`archery.service.room.v2:${e}`,legacy:!1})}function mf(n){if(typeof n=="string"){if(n!=="/api")throw new Error("Use a parsed endpoint or same-origin /api.");return Ld("/api",typeof location>"u"?"http://localhost":location.origin)}const e=n.serviceId.slice(0,-4),t=Ld(n.mode==="same-origin"?"/api":n.serviceId,e);if(!t||Object.keys(t).some(i=>t[i]!==n[i]))throw new Error("Invalid shared service context.");return t}const Ro=n=>!!n&&typeof n=="object"&&!Array.isArray(n);class mi extends Error{status;code;retryAfterMs;transient;constructor(e,t,i,r){super(e),this.name="GuestRequestError",this.status=t,this.code=i,this.retryAfterMs=r,this.transient=r!==null}}function PM(n,e){let t=NaN;return n!==null&&/^[0-9]+$/.test(n)?t=Number(n)*1e3:n!==null&&/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), [0-9]{2} [A-Z][a-z]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT$/.test(n)&&(t=Math.max(0,Date.parse(n)-e)),Number.isSafeInteger(t)&&t>=0&&Number.isSafeInteger(e+t)?Math.max(1e3,t):1e3}function gf(n){if(!Ro(n)||Object.keys(n).length!==2||typeof n.guestId!="string"||!n.guestId||typeof n.token!="string"||!n.token)throw new Error("Invalid guest identity.");return{guestId:n.guestId,token:n.token}}class hc{selectedEndpoint;selectedKeys;fetcher;storage;current=null;generation=0;identityError=null;creating=null;admission=null;constructor(e,t=fetch,i){this.selectedEndpoint=mf(e),this.selectedKeys=Mm(this.selectedEndpoint),this.fetcher=t,this.storage=i;let r;try{r=i?.getItem(this.storageKeys.identity)??null}catch{return}if(r!==null)try{this.current=Object.freeze({...gf(JSON.parse(r)),revision:this.generation})}catch{this.identityError=new Error("Saved guest identity is unreadable or unsupported. Existing data is preserved; forget it explicitly before creating another guest.")}}get revision(){return this.generation}get guestId(){return this.current?.guestId??null}get endpoint(){return this.selectedEndpoint}get serviceId(){return this.endpoint.serviceId}get storageKeys(){return this.selectedKeys}credentials(){return this.current}assertContext(e,t,i){if(!(typeof e=="string"?e==="/api"&&this.endpoint.mode==="same-origin":(()=>{const s=mf(e);return s.mode===this.endpoint.mode&&s.serviceId===this.serviceId})())||t!==this.fetcher||i!==this.storage)throw new Error("Shared guest session context must match service, fetcher and storage.")}assertRevision(e){if(e!==this.generation)throw new Error("Guest identity changed. Start again with the current guest.")}ensure(){if(this.identityError)return Promise.reject(this.identityError);if(this.current)return Promise.resolve(this.current);if(this.creating)return this.creating;const e=this.generation,t=this.create(e).finally(()=>{this.creating===t&&(this.creating=null)});return this.creating=t,t}async create(e){const t=gf(await this.request("/guests",{}));this.assertRevision(e),this.current=Object.freeze({...t,revision:++this.generation});try{this.storage?.setItem(this.storageKeys.identity,JSON.stringify(t))}catch{}return this.current}request(e,t){return this.requestJson(e,t)}readReadiness(){return this.requestJson("/readiness",void 0,!0)}async requestJson(e,t,i=!1){if(this.identityError)throw this.identityError;if(!e.startsWith("/")||e.startsWith("//")||e.includes("\\"))throw new Error("Invalid shared service path.");if(this.admission&&Date.now()<this.admission.notBefore)throw this.admission.error;const r=this.generation,s=await this.fetcher.call(globalThis,this.endpoint.requestBase+e,{signal:AbortSignal.timeout(i?3e3:15e3),method:t===void 0?"GET":"POST",credentials:"omit",redirect:"error",...i?{}:{headers:{"Content-Type":"application/json",...this.current?{Authorization:`Bearer ${this.current.token}`}:{}}},...t===void 0?{}:{body:JSON.stringify(t)}});this.assertRevision(r);let a;try{a=await s.json()}catch(o){if(s.ok)throw o;a=null}if(this.assertRevision(r),!s.ok){const o=Ro(a)&&Ro(a.error)?a.error:null,c=o&&typeof o.code=="string"?o.code:null,l=c!==null&&["room_capacity","guest_room_capacity","command_capacity","socket_capacity","challenge_capacity","guest_capacity"].includes(c),u=Date.now(),d=s.status===429&&!l?PM(s.headers.get("Retry-After"),u):null,h=new mi(o&&typeof o.message=="string"?o.message:d!==null?"The shared service is busy. Wait a moment, then retry.":"Shared service unavailable. Retry or start a new local challenge.",s.status,c,d);throw d!==null&&(!this.admission||u+d>this.admission.notBefore)&&(this.admission={notBefore:u+d,error:h}),h}if(i&&(s.status!==200||s.headers.get("Content-Type")?.split(";",1)[0].trim().toLowerCase()!=="application/json"))throw new Error("Invalid shared service readiness.");if(!Ro(a))throw new Error("Invalid shared service response.");return a}forget(){this.generation++,this.current=null,this.identityError=null,this.creating=null;try{this.storage?.removeItem(this.storageKeys.identity)}catch{}}}const xr={rulesVersion:Hs,code:"rules_version",reload:RM},oi={rulesVersion:ph,code:"protocol_version",reload:CM};function Qi(n,e){return n instanceof mi&&n.status===409&&n.code===e.code}function Dd(n){return new mi(n.reload,409,n.code,null)}const Sm=["combat-1","combat-2","combat-3"];function xf(n,e){return Array.isArray(n)&&n.length===e.length&&e.every((t,i)=>n[i]===t)}async function _f(n,e){n.assertRevision(e);let t;try{t=await n.readReadiness()}catch{}if(n.assertRevision(e),!t)return!1;const{ready:i,apiVersion:r,rulesVersion:s,combatRulesVersion:a,protocols:o,roomKinds:c,presets:l,publicProfile:u}=t;return i===!0&&r==="shared-api-1"&&s==="challenge-v1"&&Sm.includes(a)&&Object.keys(t).length===(u===void 0?7:8)&&(u===void 0||u==="public-admission-v1")&&xf(o,[dc,li,fh])&&xf(c,["duel","teams","royale","skirmish"])&&Array.isArray(l)&&l.length===1&&(l[0]==="skirmish-1"||l[0]==="skirmish-2"||l[0]==="skirmish-3")}function LM(n,e,t){return n instanceof TypeError?!0:n instanceof mi?n.status===400&&n.code==="path"&&n.message==="Invalid service query."||t===oi&&e!=="/skirmish/rules"&&n.status===404&&n.code==="not_found"&&n.message==="Public arena not found.":!1}async function ps(n,e,t){const i=n.revision;let r;try{r=await n.request(e+"?rulesVersion="+encodeURIComponent(t.rulesVersion))}catch(s){throw LM(s,e,t)&&await _f(n,i)?Dd(t):s}if(Sm.includes(r.rulesVersion)&&await _f(n,i))throw Dd(t);return r}const Da=Object.freeze({shotGravity:Object.freeze({min:8,max:30}),shotMinSpeed:Object.freeze({min:8,max:20}),shotExtraSpeed:Object.freeze({min:5,max:24}),actorGravity:Object.freeze({min:8,max:40}),airDrag:Object.freeze({min:0,max:2}),groundFriction:Object.freeze({min:2,max:30}),restitution:Object.freeze({min:0,max:.6}),impactThreshold:Object.freeze({min:2,max:20}),impactMultiplier:Object.freeze({min:0,max:10}),physicsDamageCap:Object.freeze({min:0,max:100,integer:!0}),health:Object.freeze({min:25,max:100,integer:!0}),directBodyDamage:Object.freeze({min:1,max:100,integer:!0}),directHeadDamage:Object.freeze({min:1,max:100,integer:!0}),blastNearDamage:Object.freeze({min:0,max:100,integer:!0}),blastMidDamage:Object.freeze({min:0,max:100,integer:!0}),blastFarDamage:Object.freeze({min:0,max:100,integer:!0}),bombRadius:Object.freeze({min:1,max:3}),bombImpulseFloor:Object.freeze({min:0,max:1}),bombHorizontalImpulse:Object.freeze({min:0,max:20}),bombUpImpulse:Object.freeze({min:0,max:25}),craterRadius:Object.freeze({min:1,max:3}),chipRadius:Object.freeze({min:.25,max:3}),directKnockbackHorizontal:Object.freeze({min:0,max:12}),directKnockbackUp:Object.freeze({min:0,max:12}),planningMs:Object.freeze({min:5e3,max:6e4,integer:!0})}),wm=Object.freeze({min:0,max:6}),vf=40,Tr=Object.keys(Da),rr=n=>n.windMax??0,DM=/^[a-z0-9][a-z0-9._-]{0,31}$/;function uc(n){return Object.freeze(n)}const Rn=uc({id:"base-1",shotGravity:18,shotMinSpeed:13,shotExtraSpeed:15,actorGravity:18,airDrag:.15,groundFriction:14,restitution:0,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,health:100,directBodyDamage:50,directHeadDamage:100,blastNearDamage:25,blastMidDamage:10,blastFarDamage:5,bombRadius:3,bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,craterRadius:3,chipRadius:.5,directKnockbackHorizontal:0,directKnockbackUp:0,planningMs:2e4}),Nd=uc({...Rn,id:"playtest-1",chipRadius:1.25,directKnockbackHorizontal:4,directKnockbackUp:5,bombUpImpulse:14,bombHorizontalImpulse:11,restitution:.4,groundFriction:8,impactThreshold:8}),yf=uc({...Nd,id:"playtest-2",windMax:3}),ti=Object.freeze({[Rn.id]:Rn,[Nd.id]:Nd,[yf.id]:yf});function qi(n){throw new RangeError(`Invalid tuning profile: ${n}`)}function NM(n,e){return Tr.every(t=>n[t]===e[t])&&rr(n)===rr(e)}function fc(n){(!n||typeof n!="object"||Array.isArray(n))&&qi("an object is required.");const e=n,t=Object.keys(e);(!Object.hasOwn(e,"id")||Tr.some(s=>!Object.hasOwn(e,s))||t.some(s=>s!=="id"&&!Tr.includes(s)&&s!=="windMax"))&&qi("fields differ from the tuning schema."),(typeof e.id!="string"||!DM.test(e.id))&&qi("id must be 1..32 lowercase letters, digits, dot, underscore or hyphen.");const i=Tr.map(s=>[s,Da[s]]);Object.hasOwn(e,"windMax")&&i.push(["windMax",wm]);for(const[s,a]of i){const o=e[s];(typeof o!="number"||!Number.isFinite(o))&&qi(`${s} must be a finite number.`),(o<a.min||o>a.max||a.integer&&!Number.isInteger(o))&&qi(`${s} must be ${a.integer?"an integer ":""}between ${a.min} and ${a.max}.`)}const r=e;r.shotMinSpeed+r.shotExtraSpeed>vf&&qi(`shotMinSpeed + shotExtraSpeed must not exceed ${vf}.`),(r.blastNearDamage<r.blastMidDamage||r.blastMidDamage<r.blastFarDamage)&&qi("blast damage must not increase with distance.")}function UM(n){fc(n);const e=Go(n.id);e&&!NM(n,e)&&qi(`id ${n.id} is reserved for its preset values.`)}function Go(n){return typeof n=="string"&&Object.hasOwn(ti,n)?ti[n]:void 0}function FM(n){return JSON.stringify([n.id,...Tr.map(e=>n[e]),...rr(n)===0?[]:[rr(n)]])}function Em(n){let e=0xcbf29ce484222325n;for(const t of new TextEncoder().encode(n))e=BigInt.asUintN(64,(e^BigInt(t))*0x100000001b3n);return e}function Vo(n){return`fnv64-${Em(FM(n)).toString(16).padStart(16,"0")}`}function bf(n){UM(n);const e={id:n.id};for(const t of Tr)e[t]=n[t];return rr(n)!==0&&(e.windMax=n.windMax),uc(e)}function pc(n){return Object.hasOwn(n,"tuning")&&n.tuning?n.tuning:Rn}const Gs=Object.freeze([...Tr,"windMax"]);function gh(n,e){const t=Go(n);if(!t)throw new RangeError(`Unknown tuning preset. Known presets: ${Object.keys(ti).join(", ")}.`);if(!e||typeof e!="object"||Array.isArray(e))throw new RangeError("Tuning overrides must be an object.");const i=Object.entries(e);for(const[s,a]of i){if(!Gs.includes(s))throw new RangeError(`Unknown tuning field "${s.slice(0,40)}".`);if(typeof a!="number"||!Number.isFinite(a))throw new RangeError(`${s} must be a finite number.`)}if(i.length===0)return t;const r=Tm(JSON.stringify({base:t.id,...Object.fromEntries(i)}));return Vo({...r,id:t.id})===Vo(t)?t:r}function Tm(n){if(n===void 0||n.trim()==="")return Rn;const e=n.trim();if(!e.startsWith("{")){const s=Go(e);if(!s)throw new RangeError(`Unknown tuning preset "${e.slice(0,40)}". Known presets: ${Object.keys(ti).join(", ")}.`);return s}if(e.length>4096)throw new RangeError("Tuning JSON is too large.");let t;try{t=JSON.parse(e)}catch{throw new RangeError("Tuning JSON is not valid JSON.")}if(!t||typeof t!="object"||Array.isArray(t))throw new RangeError("Tuning JSON must be an object.");let i=t;if(Object.hasOwn(i,"base")){const{base:s,...a}=i,o=Go(s);if(!o)throw new RangeError(`Unknown tuning base preset. Known presets: ${Object.keys(ti).join(", ")}.`);const{id:c,...l}=o;i={...l,...a}}if(Object.hasOwn(i,"id"))return bf(i);const r={...i,id:"custom"};return bf({...r,id:`custom-${Vo(r).slice(-8)}`})}const jt=Object.freeze({nock:Object.freeze({x:.92,y:2.77,z:0}),halfWidth:.86,height:3.055,head:Object.freeze({minX:-.325,maxX:.325,minY:2.255,maxY:2.905}),body:Object.freeze({minX:-.86,maxX:.86,minY:0,maxY:2.255})}),Am=Object.freeze({version:"combat-1",cell:.125,gravity:18,step:1/120,maxSteps:3600,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,bombRadius:3,craterRadius:3,chipRadius:.5,maxDeltaCells:2048,activeTerrainRules:"current",bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,groundFriction:14,airDrag:.15,restitution:0,matchMs:9e5,planningMs:2e4,launchDelayMs:100,maxActors:8});function mc(...n){if(!n.every(Number.isFinite))throw new RangeError("Finite combat coordinates required.")}function Wo(n){if(!n||typeof n!="object")throw new RangeError("Planar position required.");if(mc(n.x,n.y,n.z),n.z!==0)throw new RangeError("Combat uses world z=0.")}function kM(n){if(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))throw new RangeError("Identifier must be a 1..128 character ASCII token.")}function Rm(n){if(!n||typeof n!="object")throw new RangeError("Aim required.");if(mc(n.angle,n.power),n.angle<5||n.angle>80||n.power<.08||n.power>1||n.facing!==1&&n.facing!==-1)throw new RangeError("Aim outside combat limits.");if("arrow"in n&&!["normal","bomb","teleport"].includes(n.arrow))throw new RangeError("Unknown arrow.")}function xh(n){if(!Array.isArray(n)||n.length>Am.maxActors)throw new RangeError("At most eight actors.");const e=new Set;for(const t of n){if(kM(t.id),Wo(t.feet),Wo(t.velocity),mc(t.health),!Number.isInteger(t.health)||t.health<0||t.health>100||Math.abs(t.feet.x)>1024||Math.abs(t.feet.y)>1024||Math.abs(t.velocity.x)>1e3||Math.abs(t.velocity.y)>1e3||e.has(t.id)||t.facing!==1&&t.facing!==-1||typeof t.eliminated!="boolean")throw new RangeError("Invalid actor.");e.add(t.id)}}function Mf(n,e){return{minX:n.x+e.minX,maxX:n.x+e.maxX,minY:n.y+e.minY,maxY:n.y+e.maxY}}function OM(n){return[{kind:"head",bounds:Mf(n.feet,jt.head)},{kind:"body",bounds:Mf(n.feet,jt.body)}]}function BM(n,e=n.facing){return{x:n.feet.x+jt.nock.x*e,y:n.feet.y+jt.nock.y,z:0}}function ul(n,e,t=Rn,i=0){xh([n]),Rm(e);const r=lc(e,{minSpeed:t.shotMinSpeed,extraSpeed:t.shotExtraSpeed}),s=BM(n,e.facing);return{origin:{x:s.x,y:s.y},velocity:{x:r.velocity.x*e.facing,y:r.velocity.y},...t.shotGravity===Rn.shotGravity?{}:{gravity:t.shotGravity},...i===0?{}:{wind:i}}}function Cm(n,e,t,i,r=!1){const l=t*i,u=Math.ceil(t/32),d=Math.ceil(i/32);return Object.freeze({version:n,cell:.125,minX:e,minY:-8,width:t,height:i,bedrockY:-6,bounds:Object.freeze({minX:e,maxX:e+t*.125,minY:-8,maxY:-8+i*.125}),cellCount:l,maxCellIndex:l-1,maskHexLength:l/4,chunkSize:32,chunkColumns:u,chunkRows:d,maxChunks:u*d,protectPads:r})}const Im=Cm("arena-1",-32,512,288),Pm=Cm("arena-2",-40,640,352,!0);function Tn(n){if(n==="arena-1")return Im;if(n==="arena-2")return Pm;throw new RangeError("Unsupported terrain profile.")}function _h(n){if(n==="skirmish-1")return Im;if(n==="skirmish-2"||n==="skirmish-3")return Pm;throw new RangeError("Unsupported public arena version.")}function vh(n,e){const t=e===void 0?void 0:Tn(e);if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid terrain metadata.");const i=n,r=Tn(i.version);if(t&&r!==t)throw new RangeError("Terrain differs from the expected profile.");for(const s of["cell","minX","minY","width","height","bedrockY"])if(i[s]!==r[s])throw new RangeError("Invalid terrain profile geometry.");if(!Number.isSafeInteger(i.revision)||i.revision<0||!Array.isArray(i.spawnPads)||i.spawnPads.length!==8)throw new RangeError("Invalid terrain metadata.");for(const s of i.spawnPads){if(Array.isArray(s))throw new RangeError("Planar spawn pad required.");Wo(s)}if(r.protectPads)for(const s of i.spawnPads)HM(r,s),GM(r,s);return r}const zM=Object.freeze([[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]]),Xo=1.5,Lm=.5;function HM(n,e){const{cell:t,minX:i,minY:r,width:s,height:a}=n,o={col0:Math.round((e.x-Xo-i)/t),col1:Math.round((e.x+Xo-i)/t),row0:Math.round((e.y-Lm-r)/t),row1:Math.round((e.y-r)/t)};if(!Number.isFinite(o.col0+o.row0)||o.col0<0||o.col1>s||o.row0<0||o.row1>a)throw new RangeError("Spawn pad protection outside the terrain grid.");return o}function GM(n,e){const{cell:t,minX:i,minY:r,width:s,height:a}=n,o=t/2;if(!(Number.isInteger((e.x-i)/o)&&Number.isInteger((e.y-r)/o))||e.x-Xo<i||e.x+Xo>i+s*t||e.y-Lm<r||e.y+jt.height>r+a*t)throw new RangeError("Spawn pad protection outside the terrain grid.")}Object.freeze(zM.map(([n,e])=>Object.freeze({x:n,y:e})));const VM="tgen-1",Dm=/^[a-z0-9][a-z0-9._-]{0,31}@[1-9][0-9]{0,5}$/;function WM(n){if(typeof n!="string"||!Dm.test(n))return null;const e=n.indexOf("@");return{id:n.slice(0,e),version:Number(n.slice(e+1))}}const XM=Object.freeze({version:"skirmish-1",slots:8,minimumParticipants:4,planningMs:2e4,resetAfter:20,idleAfter:3,receiptLimit:16}),Nm=XM,Um=Object.freeze({...Nm,version:"skirmish-2",spawnPolicy:"separated"}),$M=Object.freeze({...Um,version:"skirmish-3",terrain:Object.freeze({generator:VM,pool:"public"})});function gc(n){if(_h(n),n==="skirmish-1")return Nm;if(n==="skirmish-2")return Um;if(n==="skirmish-3")return $M;throw new RangeError("Unsupported public rules version.")}const yh="skirmish-3";gc(yh);const ot=()=>{throw new Error("The public arena service returned an unsupported response.")},bh=n=>{(!n||typeof n!="object"||Array.isArray(n))&&ot()},Rt=n=>{(!Number.isSafeInteger(n)||n<0)&&ot()},Is=n=>{Number.isFinite(n)||ot()},tt=n=>{(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))&&ot()},Mn=n=>{typeof n!="boolean"&&ot()},Xe=(...n)=>e=>{n.includes(e)||ot()},Lr=n=>e=>{Rt(e),e>n&&ot()},Gt=n=>e=>{e!==null&&n(e)},bt=(n,e={})=>t=>{bh(t),(Object.keys(n).some(i=>!Object.hasOwn(t,i))||Object.keys(t).some(i=>!Object.hasOwn(n,i)&&!Object.hasOwn(e,i)))&&ot();for(const[i,r]of Object.entries(n))r(t[i]);for(const[i,r]of Object.entries(e))Object.hasOwn(t,i)&&r(t[i])},Hn=(n,e)=>t=>{(!Array.isArray(t)||t.length>e)&&ot();for(const i of t)n(i)},Sf=n=>{Hn(tt,8)(n),new Set(n).size!==n.length&&ot()},Dr=n=>{bt({x:Is,y:Is,z:Xe(0)})(n),Wo(n)},Mh={protocolVersion:Xe(fh),rulesVersion:Xe(ph)},YM=n=>{bt({arrow:Xe("normal","bomb","teleport"),angle:Is,power:Is,facing:Xe(-1,1)})(n),Rm(n)},$o=n=>{bt({id:tt,actorId:tt,lifeId:tt,epoch:Rt,roundId:tt,kind:Xe("shot","pass"),aim:Gt(YM)})(n),n.kind==="shot"!=(n.aim!==null)&&ot()},jM=n=>{bt({id:tt,feet:Dr,velocity:Dr,facing:Xe(-1,1),health:Lr(100),eliminated:Mn})(n)},qM=bt({memberId:tt,actorId:tt,lifeId:tt,slotId:Xe("s0","s1","s2","s3","s4","s5","s6","s7"),kind:Xe("human","npc"),present:Mn,leaving:Mn,idle:Mn,missedWindows:Lr(3),spawnPending:Mn,bombReady:Mn}),Fm=bt({memberId:tt,actorId:tt,lifeId:tt,slotId:Xe("s0","s1","s2","s3","s4","s5","s6","s7"),kind:Xe("human","npc")}),km=n=>bt({fromRevision:Rt,toRevision:Rt,removed:Hn(Lr(n.maxCellIndex),Am.maxDeltaCells)}),Om=n=>bt({kind:Xe("terrain","head","body","bounds","timeout"),time:Is,point:Dr,normal:Dr},{actorId:tt,cell:Lr(n.maxCellIndex)}),KM=Hn(bt({time:Is,poses:Hn(bt({actorId:tt,feet:Dr}),8)}),902),JM=bt({ok:Mn},{reason:Xe("not-upward","no-support","occupied-or-blocked"),feet:Dr}),ZM=n=>bt({action:$o,roster:Hn(Fm,8),contact:Om(n),delta:km(n),motion:KM,startedAt:Gt(Rt),endsAt:Gt(Rt)}),QM=n=>bt({action:$o,roster:Hn(Fm,8),contact:Om(n),damage:Hn(bt({actorId:tt,amount:Lr(100),cause:Xe("direct","blast","physics")}),408),delta:km(n),teleport:Gt(JM)}),eS=n=>{try{fc(n)}catch{ot()}},tS=bt({template:n=>{(typeof n!="string"||!Dm.test(n))&&ot()}}),nS=n=>{bh(n);let e;try{e=_h(n.version)}catch{return ot()}const t=i=>{bt({version:Xe(e.version),revision:Rt,cell:Xe(e.cell),minX:Xe(e.minX),minY:Xe(e.minY),width:Xe(e.width),height:Xe(e.height),bedrockY:Xe(e.bedrockY),spawnPads:Hn(Dr,8),maskHex:r=>{(typeof r!="string"||r.length!==e.maskHexLength||!/^[0-9a-f]+$/.test(r))&&ot()}})(i);try{vh(i,e.version)}catch{ot()}};bt({version:Xe("skirmish-1","skirmish-2","skirmish-3"),id:tt,epoch:Rt,revision:Rt,state:Xe("active","suspended","aborted"),phase:Xe("planning","resolving","settling"),terrain:t,actors:Hn(jM,8),members:Hn(qM,8),roundSerial:Rt,roundId:tt,completedRounds:Lr(20),resetIn:Gt(Lr(2)),slotOrder:Sf,priority:Sf,drainThenBoundary:Mn,planningStartedAt:Gt(Rt),deadlineAt:Gt(Rt),launchAt:Gt(Rt),contactAt:Gt(Rt),resolutionEndsAt:Gt(Rt),locks:Hn(bt({actorId:tt,locked:Mn,plan:Gt($o)}),8),action:Gt($o),effect:Gt(ZM(e)),lastEvent:Gt(QM(e)),self:bt({memberId:Gt(tt),actorId:Gt(tt),lifeId:Gt(tt),pending:Mn,canAct:Mn,bombReady:Mn,opportunities:Rt,bombReadyAt:Rt}),abortReason:Gt(Xe("settling-exhausted"))},{tuning:eS,layout:tS,wind:i=>{(typeof i!="number"||!Number.isFinite(i)||i===0)&&ot()}})(n),Object.hasOwn(n,"layout")!==!!gc(n.version).terrain&&ot(),Object.hasOwn(n,"wind")&&!(Math.abs(n.wind)<=(n.tuning?.windMax??0))&&ot()};function Bm(n){new TextEncoder().encode(JSON.stringify(n)).byteLength>mh.maxSnapshotBytes&&ot()}function zm(n){Bm(n),bt({...Mh,roomKind:Xe("skirmish"),arenaId:tt,serverNow:Rt,snapshotRevision:Rt,retryHorizonMs:Rt,membership:bt({memberId:tt,actorId:tt,lifeId:Gt(tt),status:Xe("pending","active","idle","left","suspended","respawn","aborted"),canAct:Mn,bombReady:Mn}),connections:Hn(bt({actorId:tt,label:i=>{(typeof i!="string"||i.length>80)&&ot()},kind:Xe("human","npc"),connected:Mn}),8),state:nS})(n);const e=n,t=e.state;return xh(t.actors),(t.id!==e.arenaId||e.retryHorizonMs<1||e.retryHorizonMs>mh.controlRetryMs||t.self.lifeId!==e.membership.lifeId||t.self.canAct!==e.membership.canAct||t.self.bombReady!==e.membership.bombReady||t.self.actorId!==null&&t.self.actorId!==e.membership.actorId)&&ot(),(t.slotOrder.length!==8||t.slotOrder.some(i=>!/^s[0-7]$/.test(i))||new Set(t.members.map(i=>i.actorId)).size!==t.members.length||new Set(t.members.map(i=>i.memberId)).size!==t.members.length||new Set(t.members.map(i=>i.slotId)).size!==t.members.length)&&ot(),(t.state==="active"&&t.priority.some(i=>!t.members.some(r=>r.actorId===i))||t.actors.some(i=>!t.members.some(r=>r.actorId===i.id))||t.locks.some(i=>!t.priority.includes(i.actorId)||i.plan!==null&&(!i.locked||i.plan.actorId!==i.actorId||i.plan.epoch!==t.epoch||i.plan.roundId!==t.roundId||!t.members.some(r=>r.actorId===i.actorId&&r.lifeId===i.plan.lifeId)||t.phase==="planning"&&i.actorId!==e.membership.actorId)))&&ot(),t.state!=="active"&&(t.self.canAct||t.action!==null||t.effect!==null||t.locks.some(i=>i.locked||i.plan!==null)||[t.deadlineAt,t.launchAt,t.contactAt,t.resolutionEndsAt].some(i=>i!==null))&&ot(),t.state==="suspended"&&(t.phase!=="planning"||t.planningStartedAt!==null)&&ot(),(t.action&&(t.action.kind!=="shot"||t.action.epoch!==t.epoch)||t.effect&&(t.phase!=="settling"||t.effect.action.epoch!==t.epoch||t.effect.startedAt===null||t.effect.endsAt===null||t.effect.startedAt>t.effect.endsAt||t.effect.startedAt>e.serverNow))&&ot(),e.membership.canAct&&(e.membership.status!=="active"||t.state!=="active"||t.phase!=="planning"||t.deadlineAt===null||!t.priority.includes(e.membership.actorId))&&ot(),e}function iS(n){Bm(n),bt({ack:bt({...Mh,arenaId:tt,memberId:tt,actionId:tt,kind:Xe("join","leave","rejoin","shot","pass"),epoch:Rt,roundId:Gt(tt),lifeId:Gt(tt),acceptedRevision:Rt,outcome:Xe("accepted","existing-membership")}),current:bt({type:Xe("current"),envelope:t=>{zm(t)}})},{reassignedFrom:bt({arenaId:tt,memberId:tt})})(n);const e=n;return(e.ack.outcome==="existing-membership"&&e.ack.kind!=="join"||e.reassignedFrom&&e.ack.kind!=="rejoin"||["shot","pass"].includes(e.ack.kind)&&(e.ack.lifeId===null||e.ack.roundId===null))&&ot(),e}function wf(n){bh(n);let e;try{e=gc(n.preset)}catch{return ot()}return bt({...Mh,roomKind:Xe("skirmish"),serverNow:Rt,preset:Xe(e.version),planningMs:Xe(e.planningMs),slots:Xe(e.slots),minimumParticipants:Xe(e.minimumParticipants),resetAfter:Xe(e.resetAfter),idleAfter:Xe(e.idleAfter),retryHorizonMs:t=>{Rt(t),(t<1||t>mh.controlRetryMs)&&ot()}})(n),n}const fo={protocolVersion:fh,rulesVersion:ph},fl=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function rS(n){return`${Mm(n).identity}:skirmish-locator-v1:${encodeURIComponent(`${n.mode}:${n.serviceId}`)}`}const sS={404:"not_found",403:"membership",410:"expired"};function Ef(n){return n instanceof mi&&n.code!==null&&sS[n.status]===n.code?"gone":"unknown"}const aS=new Set(["validation","membership","wrong_epoch","wrong_life","wrong_round","retry_retired","stale_revision","conflict","inactive","cooldown","wrong_actor","deadline","wrong_phase","not_found","room_capacity","socket_capacity","debt_capacity","control_capacity","membership_capacity","rate_capacity","protocol_version"]);class oS{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};session;storage;locatorKey;factory;socket=null;poll=null;recovery=null;generation=0;socketGeneration=0;stopped=!1;observedServerTime=0;observedAt=0;hasClock=!1;rejected=null;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new hc(e,t,i),this.storage=i,this.locatorKey=rS(this.session.endpoint),this.factory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>this.hasClock?this.observedServerTime+Math.max(0,performance.now()-this.observedAt):0;get savedArena(){try{const e=JSON.parse(this.storage?.getItem(this.locatorKey)??"null");return fl(e)&&Object.keys(e).sort().join(",")==="arenaId,guestId,memberId"&&e.guestId===this.session.guestId&&typeof e.arenaId=="string"&&typeof e.memberId=="string"?{arenaId:e.arenaId,memberId:e.memberId}:null}catch{return null}}get lockAgain(){return!!this.room&&this.room.membership.canAct&&this.rejected===this.opportunity(this.room)}opportunity(e){return JSON.stringify([e.arenaId,e.membership.memberId,e.membership.actorId,e.membership.lifeId,e.state.epoch,e.state.roundId])}scope(){return this.room?{arenaId:this.room.arenaId,memberId:this.room.membership.memberId}:{}}check(e,t){if(this.session.assertRevision(t),this.generation!==e)throw Error("The public arena context changed while this request was pending.")}emit(){this.onChange()}install(e,t,i=!1){const r=zm(e);if(!i&&(t.arenaId&&t.arenaId!==r.arenaId||t.memberId&&t.memberId!==r.membership.memberId))throw Error("The public response belongs to a different membership.");if(this.room&&r.arenaId===this.room.arenaId&&r.membership.memberId===this.room.membership.memberId){if(r.snapshotRevision<this.room.snapshotRevision)return;if(r.state.epoch<this.room.state.epoch||r.state.epoch===this.room.state.epoch&&r.state.revision<this.room.state.revision)throw Error("The public response would reverse the confirmed world.");if(r.snapshotRevision===this.room.snapshotRevision&&(r.state.epoch!==this.room.state.epoch||r.membership.actorId!==this.room.membership.actorId||r.membership.lifeId!==this.room.membership.lifeId))throw Error("A public identity transition needs a newer snapshot.");if(r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return}else if(this.room&&!i)throw Error("The public response changed membership without an explicit rejoin.");i&&this.disconnect(),this.room=r,this.observedServerTime=this.hasClock?Math.max(this.now(),r.serverNow):r.serverNow,this.observedAt=performance.now(),this.hasClock=!0;try{this.storage?.setItem(this.locatorKey,JSON.stringify({arenaId:r.arenaId,memberId:r.membership.memberId,guestId:this.session.guestId}))}catch{}this.emit()}applyReply(e,t){const i=iS(e),r=i.ack,s=t.body;if(r.kind!==s.kind||r.actionId!==s.actionId)throw Error("The public acknowledgement does not match the pending action.");if(r.outcome==="existing-membership"&&(s.kind!=="join"||r.acceptedRevision!==i.current.envelope.state.revision||r.arenaId!==i.current.envelope.arenaId||r.memberId!==i.current.envelope.membership.memberId||r.epoch!==i.current.envelope.state.epoch))throw Error("Invalid current-membership acknowledgement.");if((s.kind==="shot"||s.kind==="pass")&&(r.arenaId!==t.scope.arenaId||r.memberId!==s.memberId||r.lifeId!==s.lifeId||r.roundId!==s.roundId||r.epoch!==s.epoch))throw Error("The public acknowledgement changed action scope.");const a=i.reassignedFrom,o=!!a;if(a&&(s.kind!=="rejoin"||a.arenaId!==t.scope.arenaId||a.memberId!==t.scope.memberId))throw Error("The public reassignment does not match this explicit rejoin.");if(!a&&s.kind!=="join"&&(r.arenaId!==t.scope.arenaId||r.memberId!==t.scope.memberId))throw Error("The public acknowledgement changed membership.");return this.install(i.current.envelope,s.kind==="join"&&!this.room?{}:t.scope,o),o}async join(){if(this.busy||this.pending)throw Error("Finish the pending public action first.");const e=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const t=await this.session.ensure();this.check(e,t.revision);const i=wf(await ps(this.session,"/skirmish/rules",oi));this.check(e,t.revision),this.pending={path:"/skirmish/join",body:Object.freeze({...fo,kind:"join",actionId:crypto.randomUUID(),issuedAt:i.serverNow}),revision:t.revision,scope:this.scope()}}finally{e===this.generation&&(this.busy=!1,this.emit())}return this.retry()}async control(e,t=!1){if(!this.room||this.pending||this.busy)throw Error("Reconnect or finish the pending public action first.");const i=this.session.credentials();if(!i)throw Error("The original guest identity is required.");const r=this.generation,s=this.scope();this.busy=!0,this.stopped=!1,this.emit();try{await this.refresh(s.arenaId,s.memberId),this.check(r,i.revision);const a=wf(await ps(this.session,"/skirmish/rules",oi));this.check(r,i.revision);const o=this.room;if(!o||o.arenaId!==s.arenaId||o.membership.memberId!==s.memberId)throw Error("Public membership changed.");this.pending={path:`/skirmish/${encodeURIComponent(o.arenaId)}/commands`,body:Object.freeze({...fo,kind:e,actionId:crypto.randomUUID(),issuedAt:a.serverNow,memberId:o.membership.memberId,epoch:o.state.epoch,expectedRevision:o.state.revision}),revision:i.revision,scope:this.scope()}}finally{r===this.generation&&(this.busy=!1,this.emit())}try{return await this.retry()}catch(a){if(t||r!==this.generation||!(a instanceof mi)||a.code!=="stale_revision")throw a;const o=this.room,c=o?.membership.status;if(!o||o.arenaId!==s.arenaId||o.membership.memberId!==s.memberId||this.pending||!c||(e==="rejoin"?!["idle","left","aborted"].includes(c):["left","idle"].includes(c)))throw a;return this.control(e,!0)}}async command(e){const t=this.room,i=this.session.credentials();if(!t||!i||this.busy||this.pending||!t.membership.canAct||!t.membership.lifeId)throw Error("This public planning opportunity is unavailable.");return this.rejected=null,this.pending={path:`/skirmish/${encodeURIComponent(t.arenaId)}/commands`,body:Object.freeze({...fo,...e,...e.kind==="shot"?{aim:Object.freeze({...e.aim})}:{},actionId:crypto.randomUUID(),memberId:t.membership.memberId,lifeId:t.membership.lifeId,epoch:t.state.epoch,roundId:t.state.roundId,expectedRevision:t.state.revision}),revision:i.revision,scope:this.scope()},this.retry()}async retry(){const e=this.pending;if(!e||this.busy)throw Error("No public action is ready to retry.");if(this.session.assertRevision(e.revision),e.unadmitted&&e.scope.arenaId){const i=this.room,r=e.body;if(!i||i.arenaId!==e.scope.arenaId||i.membership.memberId!==e.scope.memberId||r.epoch!==void 0&&i.state.epoch!==r.epoch||r.lifeId!==void 0&&(i.membership.lifeId!==r.lifeId||i.state.roundId!==r.roundId))throw this.pending=null,this.emit(),Error("The public opportunity changed. Choose a new action explicitly.")}let t=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const i=await this.session.request(e.path,e.body);if(this.check(t,e.revision),this.pending!==e)throw Error("The pending public action changed.");const r=this.applyReply(i,e);return this.check(t,e.revision),this.pending=null,r&&(t=++this.generation),e.body.kind==="leave"?this.disconnect():this.openSocket(),this.room}catch(i){if(t!==this.generation)throw i;if(this.session.revision!==e.revision)this.forgetArena();else if(i instanceof mi&&i.transient)["admission_rate","command_rate"].includes(i.code??"")||(e.uncertain=!0),e.unadmitted=!e.uncertain;else if(Qi(i,oi))this.pending=null,this.rejected=null;else if(i instanceof mi&&aS.has(i.code??"")){if(this.pending=null,e.body.kind==="shot"&&this.room&&this.room.state.epoch===e.body.epoch&&this.room.state.roundId===e.body.roundId&&this.room.membership.lifeId===e.body.lifeId&&(this.rejected=this.opportunity(this.room)),this.room)try{await this.refresh()}catch(r){if(Qi(r,oi))throw r}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(r){if(Qi(r,oi))throw r}throw i}finally{t===this.generation&&(this.busy=!1,this.emit())}}async refresh(e=this.room?.arenaId??this.savedArena?.arenaId,t=this.room?.membership.memberId??this.savedArena?.memberId){if(!e||!t)return;const i=this.session.credentials();if(!i)throw Error("The original guest identity is required to reconnect.");const r=this.generation;try{const s=await ps(this.session,`/skirmish/${encodeURIComponent(e)}`,oi);this.check(r,i.revision),this.install(s,{arenaId:e,memberId:t})}catch(s){throw this.check(r,i.revision),Qi(s,oi)&&this.room?.arenaId===e&&this.room.membership.memberId===t&&(this.pending?.scope.arenaId===e&&this.pending.scope.memberId===t&&this.pending.revision===i.revision&&(this.pending=null),this.rejected=null,this.emit()),Ef(s)==="gone"?(this.forgetArena(),Error("This public membership is no longer available. Join explicitly with the same guest.")):s}}async probeSavedArena(){const e=this.savedArena,t=this.session.credentials();if(!e||!t||this.room||this.pending||this.busy)return"unknown";const i=this.generation,r=()=>this.generation===i&&this.session.revision===t.revision&&!this.room&&!this.pending&&!this.busy&&this.savedArena?.arenaId===e.arenaId&&this.savedArena.memberId===e.memberId;let s;try{await ps(this.session,`/skirmish/${encodeURIComponent(e.arenaId)}`,oi),s="exists"}catch(a){s=Ef(a)}return r()?(s==="gone"&&this.forgetArena(),s):"unknown"}async reconnect(){if(this.pending||this.busy)throw Error("Retry the pending public action first.");if(!this.room&&!this.savedArena)throw Error("No saved public membership is available.");this.stopped=!1;const e=this.generation;if(await this.refresh(),e!==this.generation)throw Error("The public context changed.");this.openSocket()}receive(e){if(!(!this.session.credentials()||!this.room||this.stopped||!fl(e)||e.type!=="skirmish")){if(Object.keys(e).sort().join(",")!=="envelope,type")throw Error("Unsupported public event.");this.install(e.envelope,this.scope())}}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e||!this.factory)return;const t=this.generation,i=++this.socketGeneration,r=this.scope(),s=this.factory(`${this.session.serviceId.replace(/^http/,"ws")}/skirmish/events`);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===i&&this.generation===t&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={...fo,type:"authenticate",token:e.token,arenaId:r.arenaId,memberId:r.memberId,lastRevision:this.room?.snapshotRevision??0};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));if(!fl(c)||c.type!=="skirmish")throw Error("Unsupported public stream message.");if(this.receive(c),!a())return;this.connected=!0,this.emit()}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),(a()||this.generation===t&&this.session.revision===e.revision&&!this.stopped)&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.poll||this.stopped)return;const e=this.generation;this.poll=setTimeout(async()=>{if(this.poll=null,!(this.stopped||e!==this.generation)){try{await this.refresh()}catch(t){e===this.generation&&this.onError(t)}e===this.generation&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.recovery||this.stopped)return;const e=this.generation;this.recovery=setTimeout(async()=>{if(this.recovery=null,!(this.stopped||e!==this.generation))try{await this.refresh(),e===this.generation&&this.openSocket()}catch(t){e===this.generation&&(this.onError(t),this.scheduleRecovery())}},1500)}disconnect(){this.socketGeneration++;const e=this.socket;this.socket=null,e?.close(),this.connected=!1,this.poll&&clearTimeout(this.poll),this.recovery&&clearTimeout(this.recovery),this.poll=null,this.recovery=null}close(){this.stopped=!0,this.generation++,this.disconnect(),this.busy=!1,this.emit()}forgetArena(){this.close(),this.room=null,this.pending=null,this.rejected=null,this.hasClock=!1;try{this.storage?.removeItem(this.locatorKey)}catch{}this.emit()}}function cS(n){const e=n.state,t=e.locks.find(a=>a.actorId===n.membership.actorId),i=n.membership.status,s=["idle","left"].includes(i)&&e.state==="suspended"?"Paused — no active players. Rejoin when ready to play.":i==="pending"?"Your place is reserved. You enter at the next planning window.":i==="idle"?"Spectating. Inactive after three missed windows; Rejoin when ready to play.":i==="left"?"Spectating. You left public play; Rejoin when ready to play.":i==="aborted"?"This arena stopped safely. Rejoin to start a fresh arena.":i==="respawn"?"Waiting for a clear place to respawn.":i==="suspended"?"The empty arena is suspended. Reconnect to return.":e.phase!=="planning"?"Arrows resolve in the published priority order.":n.membership.canAct?"Choose an arrow or pass. Locks are final.":t?.locked?t.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":"You will respawn at the next planning window.";return{phase:i==="active"?e.phase.toUpperCase():i.toUpperCase(),turn:s,warning:e.resetIn!==null?`Fresh terrain in ${e.resetIn} completed round${e.resetIn===1?"":"s"}.`:"",priority:e.priority,locks:e.locks.map(a=>({actorId:a.actorId,text:a.locked?"Locked":"Planning"})),canRejoin:["idle","left","aborted"].includes(i),canLeave:!["left","idle"].includes(i)}}function Sh(n){return n.state.members.map((e,t)=>{const i=n.state.actors.find(s=>s.id===e.actorId),r=n.connections.find(s=>s.actorId===e.actorId)?.label??`Archer ${t+1}`;return{actorId:e.actorId,kind:e.kind,label:r,health:i?.health??0,text:`${r}${e.actorId===n.membership.actorId?" · you":""} · ${e.spawnPending||!i?"waiting to respawn":i.eliminated?"respawning next round":`${i.health} health`}${n.state.locks.find(s=>s.actorId===e.actorId)?.locked?" · locked":""}`}})}function lS(n=yh){const e=gc(n),t=e.minimumParticipants===4?"four":String(e.minimumParticipants);return`Shared ${e.planningMs/1e3}-second planning · at least ${t} archers · respawn next round · fresh terrain every ${e.resetAfter} completed rounds.`}const dS=["s0","s1","s2","s3","s4","s5","s6","s7"],hS=Object.freeze({s0:{slotId:"s0",name:"amber",hex:"#e69f00",symbol:"A"},s1:{slotId:"s1",name:"sky",hex:"#56b4e9",symbol:"B"},s2:{slotId:"s2",name:"emerald",hex:"#009e73",symbol:"C"},s3:{slotId:"s3",name:"lemon",hex:"#f0e442",symbol:"D"},s4:{slotId:"s4",name:"cobalt",hex:"#0072b2",symbol:"E"},s5:{slotId:"s5",name:"vermilion",hex:"#d55e00",symbol:"F"},s6:{slotId:"s6",name:"rose",hex:"#cc79a7",symbol:"G"},s7:{slotId:"s7",name:"violet",hex:"#8b5fd0",symbol:"H"}});function uS(n){return typeof n=="string"&&dS.includes(n)}const fS=Object.freeze({slotId:"s0",name:"grey",hex:"#8a8f87",symbol:"?"});function Co(n){return uS(n)?hS[n]:fS}function pS(n){const e=parseInt(n.slice(1),16),t=r=>{const s=r/255;return s<=.03928?s/12.92:((s+.055)/1.055)**2.4};return .2126*t(e>>16&255)+.7152*t(e>>8&255)+.0722*t(e&255)>.3?"#141c18":"#ffffff"}function Hm(n,e,t){const i=Co(e.slotId);return{actorId:e.actorId,slotId:e.slotId,color:i.hex,ink:pS(i.hex),symbol:i.symbol,colorName:i.name,label:t,own:e.actorId===n.membership.actorId,npc:e.kind==="npc"}}const Gm=n=>`${n.label}${n.own?", you":""}${n.npc?", NPC":""}, ${n.colorName} ${n.symbol}`;function mS(n){const e=n.state,t=Sh(n),i=e.phase==="resolving"&&e.state==="active"?e.action?.actorId??null:null,r=[];for(const s of e.priority){const a=e.members.findIndex(u=>u.actorId===s);if(a<0)continue;const o=Hm(n,e.members[a],t[a].label),c=r.length+1,l=i===s;r.push({...o,position:c,current:l,ariaLabel:`Priority ${c}: ${Gm(o)}${l?", resolving now":""}`})}return r}function gS(n){const e=Sh(n),t=n.state.slotOrder,i=r=>{const s=t.indexOf(r);return s<0?99:s};return n.state.members.map((r,s)=>{const a=n.state.actors.find(d=>d.id===r.actorId),o=Hm(n,r,e[s].label),c=r.spawnPending||!a?"pending":a.eliminated?"respawning":"alive",l=c==="pending"?"Waiting":c==="respawning"?"Respawning":`${a.health}`,u=r.idle||r.leaving||!r.present;return{row:{...o,health:c==="alive"?a.health:0,status:c,valueText:l,inactive:u,locked:n.state.locks.find(d=>d.actorId===r.actorId)?.locked??!1,ariaLabel:`${Gm(o)}: ${c==="alive"?`${l} health`:l.toLowerCase()}${u?", inactive":""}`},rank:i(r.slotId)}}).sort((r,s)=>r.rank-s.rank).slice(0,8).map(r=>r.row)}const Tf={kind:"none",text:"",stateText:"",remainingMs:null,expired:!1,label:""};function Vm(n,e){if(!n||!Number.isFinite(e))return Tf;if(n.state==="suspended")return{kind:"paused",text:"Paused",stateText:"No active players",remainingMs:null,expired:!1,label:"Arena paused, no active players"};if(n.state==="aborted")return{kind:"stopped",text:"Stopped",stateText:"Arena stopped",remainingMs:null,expired:!1,label:"Arena stopped"};if(n.state!=="active")return Tf;if(n.phase!=="planning"||n.deadlineAt===null)return{kind:"resolving",text:"Resolving",stateText:"Arrows in flight",remainingMs:null,expired:!1,label:"Arrows are resolving"};const t=Math.max(0,n.deadlineAt-e),i=Math.ceil(t/1e3),r=t===0;return{kind:"planning",text:`${i}s`,stateText:r?"Locking":"Planning",remainingMs:t,expired:r,label:r?"Planning time is up, waiting for the server":`${i} second${i===1?"":"s"} of planning remaining`}}class xS{seen=null;observe(e,t){const i=Vm(e,t);if(i.kind!=="planning"||i.remainingMs===null||this.seen===`${e.id}:${e.epoch}:${e.roundId}`)return null;this.seen=`${e.id}:${e.epoch}:${e.roundId}`;const r=e.planningStartedAt!==null&&e.deadlineAt!==null?e.deadlineAt-e.planningStartedAt:null;return{roundId:e.roundId,nativeMs:r,firstRemainingMs:i.remainingMs,marginMs:r===null?null:r-i.remainingMs}}}const wh=Object.freeze({mode:"inline",controlsVisible:!1}),sr=(n,e={})=>({state:n,cancelHeld:!0,requestNative:!1,exitNative:!1,...e}),Hr=n=>({state:n,cancelHeld:!1,requestNative:!1,exitNative:!1}),Sr=n=>n.mode!=="inline";function _S(n,e){return n.mode!=="inline"?Hr(n):e?sr({mode:"requesting",controlsVisible:!1},{requestNative:!0}):sr({mode:"fallback",controlsVisible:!1})}function vS(n){return n.mode==="requesting"?sr({...n,mode:"native"}):Hr(n)}function Af(n){return n.mode==="requesting"?sr({...n,mode:"fallback"}):Hr(n)}function yS(n){return n.mode==="native"||n.mode==="requesting"?sr(wh):Hr(n)}function bS(n){return n.mode==="inline"?Hr(n):sr(wh,{exitNative:n.mode==="native"||n.mode==="requesting"})}function MS(n,e){return Sr(n)&&n.controlsVisible!==e?sr({...n,controlsVisible:e}):Hr(n)}function SS(n){return Sr(n)?sr(n):Hr(n)}class wS{state=wh;available=!1;d;constructor(e){this.d=e,e.expand.addEventListener("click",()=>this.expand()),e.exit.addEventListener("click",()=>this.exit()),e.controlsToggle.addEventListener("click",()=>this.apply(MS(this.state,!this.state.controlsVisible)));for(const t of["fullscreenchange","webkitfullscreenchange"])e.doc.addEventListener(t,()=>this.fullscreenChanged());e.doc.addEventListener("keydown",t=>{t.code==="Escape"&&this.state.mode==="fallback"&&!t.defaultPrevented&&!this.d.isDrawing()&&this.exit()}),e.win.addEventListener("pagehide",()=>this.exit());for(const t of["resize","orientationchange"])e.win.addEventListener(t,()=>this.apply(SS(this.state)));this.render()}nativeSupported(){const e=this.d;return!!(e.doc.fullscreenEnabled??e.doc.webkitFullscreenEnabled)&&!!(e.shell.requestFullscreen??e.shell.webkitRequestFullscreen)}nativeElement(){return this.d.doc.fullscreenElement??this.d.doc.webkitFullscreenElement??null}setAvailable(e){this.available=e,e||this.exit(),this.render()}expand(){this.available&&this.d.canExpand()&&this.apply(_S(this.state,this.nativeSupported()))}exit(){this.apply(bS(this.state))}fullscreenChanged(){if(this.nativeElement()===this.d.shell&&this.state.mode==="inline"){this.leaveNative();return}this.apply(this.nativeElement()===this.d.shell?vS(this.state):yS(this.state))}apply(e){const t=this.state;e.cancelHeld&&this.d.cancelInput(),this.state=e.state,e.requestNative&&this.requestNative(),e.exitNative&&this.nativeElement()===this.d.shell&&this.leaveNative(),this.render(),t.mode==="inline"&&Sr(this.state)?this.d.exit.focus():Sr(t)&&!Sr(this.state)&&(this.d.expand.hidden?this.d.focusFallback?.():this.d.expand.focus())}leaveNative(){try{Promise.resolve((this.d.doc.exitFullscreen??this.d.doc.webkitExitFullscreen)?.call(this.d.doc)).catch(()=>{})}catch{}}requestNative(){const e=this.d.shell;try{const t=(e.requestFullscreen??e.webkitRequestFullscreen).call(e);Promise.resolve(t).catch(()=>this.apply(Af(this.state)))}catch{this.apply(Af(this.state))}}render(){const e=this.state,t=Sr(e),i=this.d;i.shell.classList.toggle("is-expanded",t),i.shell.classList.toggle("controls-open",t&&e.controlsVisible),i.doc.body.classList.toggle("arena-expanded",t),i.setModal?.(t),i.exit.hidden=!t,i.controlsToggle.hidden=!t,i.expand.hidden=t||!this.available,i.controlsToggle.setAttribute("aria-expanded",String(e.controlsVisible)),i.controlsToggle.textContent=e.controlsVisible?"Hide controls":"Show controls",i.exit.textContent=e.mode==="fallback"?"Exit expanded view":"Exit full screen",i.onChange?.(e)}}function Rf(n,e,t,i,r){const s=Math.max(0,i.x0),a=Math.min(e,i.x1),o=Math.max(0,i.y0),c=Math.min(t,i.y1);if(!(a<=s))for(let l=o;l<c;l++)n.fill(r,l*e+s,l*e+a)}function ES(n,e,t){const i=new Array(n*e).fill(0);for(const r of t)r.op==="add"&&Rf(i,n,e,r,1);for(const r of t)r.op==="clear"&&Rf(i,n,e,r,0);return i}function TS(n,e){const t=r=>{const s=(r-n.minX)/n.cell;if(!Number.isInteger(s))throw new RangeError("Template bound is not cell-aligned.");return s},i=r=>{const s=(r-n.minY)/n.cell;if(!Number.isInteger(s))throw new RangeError("Template bound is not cell-aligned.");return s};return{x0:t(e.x0),x1:t(e.x1),y0:i(e.y0),y1:i(e.y1)}}function AS(n){if(n.mode!=="fixed"||!n.fixed)throw new RangeError("A fixed template is required.");const e=Tn(n.profile),{cell:t,width:i,height:r,minX:s,minY:a,bedrockY:o}=e,c=n.fixed.parts.map(d=>({op:d.op,...TS(e,d)})),l=ES(i,r,c),u=n.fixed.pads.map(([d,h])=>({x:d,y:h,z:0}));return{version:e.version,revision:0,cell:t,minX:s,minY:a,width:i,height:r,bedrockY:o,cells:l,spawnPads:u}}const Wm={kind:"terrain-template",id:"arena-2",version:1,weight:0,tags:["authored","fallback"],profile:"arena-2",mode:"fixed",fixed:{parts:[{op:"add",x0:-39,x1:-32,y0:-8,y1:0},{op:"add",x0:-28,x1:-21,y0:4.5,y1:6},{op:"add",x0:-18.5,x1:-12,y0:10.5,y1:12},{op:"add",x0:-8,x1:-1,y0:-8,y1:3},{op:"add",x0:2,x1:8.5,y0:7.5,y1:9},{op:"add",x0:12,x1:19,y0:-8,y1:0},{op:"add",x0:22,x1:28.5,y0:13.5,y1:15},{op:"add",x0:32,x1:39,y0:4.5,y1:6},{op:"add",x0:-24,x1:-20,y0:16,y1:17},{op:"add",x0:-5.5,x1:-2,y0:16,y1:17},{op:"add",x0:7.5,x1:11,y0:20,y1:21},{op:"add",x0:27.5,x1:31.5,y0:24.5,y1:25.5},{op:"add",x0:-28,x1:-27.25,y0:6,y1:9.5},{op:"add",x0:-2,x1:-1,y0:3,y1:6.5},{op:"add",x0:17.5,x1:18.5,y0:0,y1:3.5},{op:"add",x0:32,x1:32.75,y0:6,y1:9.25}],pads:[[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]]},voids:{count:{min:2,max:4},width:{min:2,max:40}},lanes:{padHeadroom:4.5,launchReach:2,skyBandMinY:22,skyMaxFill:.05}};Tn("arena-1").bounds;function pl(n="arena-1"){if(n==="arena-2")return AS(Wm);const e=Tn(n),{cell:t,width:i,height:r,minX:s,minY:a,bedrockY:o}=e,c=new Array(e.cellCount).fill(0);for(let u=0;u<r;u++)for(let d=0;d<i;d++){const h=s+(d+.5)*t,p=a+(u+.5)*t;(p<0||(h<-25||h>25)&&p>=5&&p<6||Math.abs(h)>10&&Math.abs(h)<13&&p>=11&&p<12)&&(c[u*i+d]=1)}const l=[-28,-20,-16,-8,8,16,20,28].map(u=>({x:u,y:0,z:0}));return{version:e.version,revision:0,cell:t,minX:s,minY:a,width:i,height:r,bedrockY:o,cells:c,spawnPads:l}}function Xm(n){if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid arena snapshot.");const e=Tn(n.version);if(n.cell!==e.cell||n.width!==e.width||n.height!==e.height||n.minX!==e.minX||n.minY!==e.minY||n.bedrockY!==e.bedrockY||!Number.isSafeInteger(n.revision)||n.revision<0||!Array.isArray(n.cells)||n.cells.length!==e.cellCount||!Array.isArray(n.spawnPads)||n.spawnPads.length!==8)throw new RangeError("Invalid arena snapshot.");return e}function RS(n){return Xm(n).bounds}function $m(n){if(Xm(n),vh(n),!n.cells.every(e=>e===0||e===1))throw new RangeError("Invalid occupancy mask.")}function CS(n,e){const t=Math.floor(e/n.width),i=e%n.width;return{minX:n.minX+i*n.cell,maxX:n.minX+(i+1)*n.cell,minY:n.minY+t*n.cell,maxY:n.minY+(t+1)*n.cell}}const Cf=1e3,IS=6,Ud=1e-9,If={terrain:0,head:1,body:2,bounds:3,timeout:4};function PS(n,e){if(n.time<e.time-Ud)return!0;if(Math.abs(n.time-e.time)>Ud)return!1;const t=If[n.kind]-If[e.kind];if(t!==0)return t<0;const i=n.actorId??"",r=e.actorId??"";return i!==r?i<r:(n.cell??0)<(e.cell??0)}function LS(n,e,t){const i=Kt(n,t),r=Ho(n,t),s=1e-6,a=i.x>=e.minX-s&&i.x<=e.maxX+s,o=i.y>=e.minY-s&&i.y<=e.maxY+s,c=[{d:Math.abs(i.y-e.maxY),x:0,y:1,incoming:-r.y,on:a},{d:Math.abs(i.y-e.minY),x:0,y:-1,incoming:r.y,on:a},{d:Math.abs(i.x-e.minX),x:-1,y:0,incoming:r.x,on:o},{d:Math.abs(i.x-e.maxX),x:1,y:0,incoming:-r.x,on:o}].filter(p=>p.on&&p.d<=s);if(!c.length)return null;const l=Math.min(...c.map(p=>p.d)),u=c.filter(p=>p.d<=l+1e-9),d=u.filter(p=>p.incoming>0),h=d.length?d:u;return h.sort((p,g)=>p.d-g.d||g.y-p.y),{x:h[0].x,y:h[0].y,z:0}}function DS(n,e,t){if(n.wind){const o=LS(n,e,t);if(o)return o}const i=Kt(n,t),r=Ho(n,t),s=[{d:Math.abs(i.y-e.maxY),x:0,y:1,incoming:-r.y},{d:Math.abs(i.y-e.minY),x:0,y:-1,incoming:r.y},{d:Math.abs(i.x-e.minX),x:-1,y:0,incoming:r.x},{d:Math.abs(i.x-e.maxX),x:1,y:0,incoming:-r.x}].filter(o=>o.incoming>0);s.sort((o,c)=>o.d-c.d||c.y-o.y);const a=s[0];return a?{x:a.x,y:a.y,z:0}:{x:0,y:0,z:0}}function NS(n,e,t,i){if($m(n),xh(e),mc(i.origin.x,i.origin.y,i.velocity.x,i.velocity.y),i.wind!==void 0&&!(Math.abs(i.wind)<=IS))throw new RangeError("Shot outside bounded simulation.");if(Math.abs(i.velocity.x)>Cf||Math.abs(i.velocity.y)>Cf||Math.abs(i.origin.x)>1e3||Math.abs(i.origin.y)>1e3)throw new RangeError("Shot outside bounded simulation.");const r=m=>({...Kt(i,m),z:0});let s={kind:"timeout",time:Ot.maxFlight,point:r(Ot.maxFlight),normal:{x:0,y:0,z:0}};const a=(m,f,y,b,M={})=>{const E=hh(i,f,y,Math.min(b,s.time));if(E!==null){const R={kind:m,time:E,point:r(E),normal:DS(i,f,E),...M};PS(R,s)&&(s=R)}},o=RS(n);if(i.origin.x<o.minX||i.origin.x>o.maxX||i.origin.y<o.minY||i.origin.y>o.maxY)return{kind:"bounds",time:0,point:r(0),normal:{x:0,y:0,z:0}};for(const m of[{minX:o.minX,maxX:o.minX,minY:o.minY,maxY:o.maxY},{minX:o.maxX,maxX:o.maxX,minY:o.minY,maxY:o.maxY},{minX:o.minX,maxX:o.maxX,minY:o.minY,maxY:o.minY},{minX:o.minX,maxX:o.maxX,minY:o.maxY,maxY:o.maxY}])a("bounds",m,0,s.time);for(const m of e)if(m.id!==t&&!m.eliminated&&m.health>0)for(const f of OM(m))a(f.kind,f.bounds,0,s.time,{actorId:m.id});const c=Kt(i,s.time);let l=Math.min(i.origin.x,c.x),u=Math.max(i.origin.x,c.x);if(i.wind){const m=-i.velocity.x/i.wind;if(m>0&&m<s.time){const f=Kt(i,m).x;l=Math.min(l,f),u=Math.max(u,f)}}const d=i.wind?1:0,h=Math.max(0,Math.floor((l-n.minX)/n.cell)-d),p=Math.min(n.width-1,Math.floor((u-n.minX)/n.cell)+d),g=Array.from({length:Math.max(0,p-h+1)},(m,f)=>i.velocity.x<0?p-f:h+f),v=new Map;if(i.wind){const m=s.time,f=-i.velocity.x/i.wind;for(const y of g){const b=n.minX+y*n.cell,M=b+n.cell,E=[0,m];f>0&&f<m&&E.push(f);for(const I of[b,M])E.push(...dh(i,I));const R=E.filter(I=>I>=0&&I<=m&&Kt(i,I).x>=b-1e-7&&Kt(i,I).x<=M+1e-7);R.length&&v.set(y,[Math.min(...R),Math.max(...R)])}g.length=0,g.push(...[...v.keys()].sort((y,b)=>v.get(y)[0]-v.get(b)[0]||y-b))}for(const m of g){const f=n.minX+m*n.cell,y=f+n.cell;let b=0,M=s.time;if(i.wind)[b,M]=v.get(m),M=Math.min(M,s.time);else if(i.velocity.x!==0){const w=(f-i.origin.x)/i.velocity.x,F=(y-i.origin.x)/i.velocity.x;b=Math.max(0,Math.min(w,F)),M=Math.min(s.time,Math.max(w,F))}if(b>M+Ud)continue;const E=[Kt(i,b).y,Kt(i,M).y],R=i.velocity.y/Cs(i);R>b&&R<M&&E.push(Kt(i,R).y);const I=Math.max(0,Math.floor((Math.min(...E)-n.minY)/n.cell)-1),x=Math.min(n.height-1,Math.floor((Math.max(...E)-n.minY)/n.cell)+1);for(let w=I;w<=x;w++){const F=w*n.width+m;n.cells[F]&&a("terrain",CS(n,F),b,M,{cell:F})}}return s}function Ym(n,e){if(!n||typeof n!="object"||Array.isArray(n)||"cells"in n)throw new RangeError("Invalid compact terrain mask.");const t=vh(n,e);if(typeof n.maskHex!="string"||n.maskHex.length!==t.maskHexLength||!/^[0-9a-f]+$/.test(n.maskHex))throw new RangeError("Invalid compact terrain mask.");const{maskHex:i,...r}=n,s=new Array(t.cellCount);for(let o=0;o<i.length;o++){const c=Number.parseInt(i[o],16);for(let l=0;l<4;l++)s[o*4+l]=c>>l&1}const a={...r,cells:s};return $m(a),a}const Pf=10;function US(n){let e=n;return e^=e>>33n,e=BigInt.asUintN(64,e*0xff51afd7ed558ccdn),e^=e>>33n,e=BigInt.asUintN(64,e*0xc4ceb9fe1a85ec53n),e^e>>33n}function FS(n,e){if(n===0)return 0;const t=Number(US(Em(e))>>11n)/2**53,i=Math.round(n*(2*t-1)*Pf)/Pf;return Math.max(-n,Math.min(n,i))+0}const Lf={protocolVersion:dc,rulesVersion:Hs},ml={protocolVersion:li,rulesVersion:Hs},On=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function kS(n){if(!On(n)||![dc,li].includes(n.protocolVersion)||n.rulesVersion!==Hs||typeof n.roomId!="string"||!n.roomId||typeof n.code!="string"||!Number.isFinite(n.serverNow)||!Number.isSafeInteger(n.snapshotRevision)||Number(n.snapshotRevision)<0||!On(n.membership)||typeof n.membership.actorId!="string"||typeof n.membership.lifeId!="string"||typeof n.membership.canStart!="boolean"||!Array.isArray(n.connections)||!On(n.state)||!Number.isSafeInteger(n.state.revision)||Number(n.state.revision)<0||n.state.id!==n.roomId||!Array.isArray(n.state.actors)||!Array.isArray(n.state.seats)||!On(n.state.seat)||!["waiting","active","finished","aborted"].includes(String(n.state.state))||!["planning","resolving","settling"].includes(String(n.state.phase))||!(n.currentTurnId===null||typeof n.currentTurnId=="string"))throw new Error("The combat service returned an unsupported room.");if(n.protocolVersion===li?n.roomKind!=="volley"||n.state.version!=="volley-1"||n.currentTurnId!==null||!Number.isSafeInteger(n.state.epoch)||typeof n.state.roundId!="string"||!Array.isArray(n.state.locks)||!Array.isArray(n.state.priority):n.state.version!=="duel-1"||"roomKind"in n)throw new Error("The combat service returned an unsupported room kind or version.");const e=n;if("tuning"in e.state)try{fc(e.state.tuning)}catch{throw new Error("The combat service returned an unsupported tuning profile.")}if("wind"in e.state){const t=e.state.wind;if(typeof t!="number"||!Number.isFinite(t)||t===0||!(Math.abs(t)<=rr(pc(e.state))))throw new Error("The combat service returned an unsupported wind.")}if("successor"in e&&e.successor!==void 0){const t=e.successor;if(!On(t)||typeof t.roomId!="string"||!t.roomId||typeof t.code!="string"||!/^[A-Z2-9]{6}$/.test(t.code)||typeof t.joined!="boolean")throw new Error("The combat service returned an unsupported rematch lobby.")}return Ym(e.state.terrain,"arena-1"),e}class OS{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};rejectedLock=null;get lockAgain(){const e=this.room,t=e?.state,i=this.rejectedLock;return!!(i&&e&&t&&e.protocolVersion===li&&i.roomId===e.roomId&&i.lifeId===e.membership.lifeId&&i.epoch===e.state.epoch&&i.roundId===e.state.roundId&&t.seat.canAct)}session;socketFactory;socket=null;reconnectTimer=null;pollTimer=null;stopped=!1;socketGeneration=0;roomGeneration=0;clockOffset=0;hasClock=!1;storage;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new hc(e,t,i),this.storage=i,this.socketFactory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>Date.now()+this.clockOffset;get savedRoom(){try{const e=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");return On(e)&&e.guestId===this.session.guestId&&typeof e.roomId=="string"?e.roomId:null}catch{return null}}emit(){this.onChange()}context(e=this.room?.roomId){const t=this.room?.roomId===e?this.room?.membership:void 0;return{generation:this.roomGeneration,roomId:e,...this.room&&this.room.roomId===e?{protocolVersion:this.room.protocolVersion}:{},...t?{membership:{actorId:t.actorId,lifeId:t.lifeId}}:{}}}assertContext(e){if(e.generation!==this.roomGeneration||e.roomId&&this.room&&e.roomId!==this.room.roomId)throw new Error("The combat room context changed while this request was pending.")}validateResponse(e,t,i){this.session.assertRevision(t),this.assertContext(i);const r=kS(e);if(i.protocolVersion&&r.protocolVersion!==i.protocolVersion)throw new Error("The combat response changed the confirmed room kind or protocol version.");if(i.roomId&&r.roomId!==i.roomId)throw new Error("The combat response belongs to a different room.");if(i.membership&&(r.membership.actorId!==i.membership.actorId||r.membership.lifeId!==i.membership.lifeId))throw new Error("The combat response belongs to a different membership identity.");return r}apply(e,t,i){const r=this.validateResponse(e,t,i);if(this.room&&this.room.roomId===r.roomId){if(r.snapshotRevision<this.room.snapshotRevision||r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return;if(r.state.revision<this.room.state.revision)throw new Error("The combat response would reverse the confirmed room state.")}this.room=r;const s=r.serverNow-Date.now();this.clockOffset=this.hasClock?Math.max(this.clockOffset,s):s,this.hasClock=!0;try{this.storage?.setItem(this.session.storageKeys.room,JSON.stringify({roomId:r.roomId,guestId:this.session.guestId}))}catch{}this.emit()}async create(e){return this.begin("/rooms",e?{...ml,...e}:Lf,e?li:dc)}async join(e){return this.begin("/rooms/join",{...ml,code:e.trim().toUpperCase()})}async begin(e,t,i){if(this.busy||this.pending||this.room)throw new Error("Leave the current room or finish the pending action first.");this.roomGeneration++;const r={...this.context(),...i?{protocolVersion:i}:{}};this.stopped=!1,this.busy=!0,this.emit();try{const s=await this.session.ensure();this.session.assertRevision(s.revision),this.assertContext(r),this.pending={path:e,body:{actionId:crypto.randomUUID(),...t},revision:s.revision,context:r}}finally{r.generation===this.roomGeneration&&(this.busy=!1)}return this.retry()}async command(e){if(this.busy||this.pending||!this.room)throw new Error("Finish the pending action first.");const t=this.room,i=this.session.credentials();if(!i)throw new Error("Reconnect with the existing guest first.");const r=t.protocolVersion===li;if(r&&e.kind==="cancel")throw new Error("Volley locks are immutable and cannot be cancelled.");const s=e.kind==="shot"||e.kind==="pass";if(r&&s&&(!t.state.seat.canAct||t.state.state!=="active"||t.state.phase!=="planning"))throw new Error("This planning opportunity is no longer available.");const a=!r&&["shot","pass","cancel"].includes(e.kind)?{turnId:t.currentTurnId}:{};if("turnId"in a&&!a.turnId)throw new Error("This turn is no longer available.");const o=r?{...ml,epoch:t.state.epoch,...s?{roundId:t.state.roundId}:{}}:{...Lf,...a};this.rejectedLock=null;const c={actionId:crypto.randomUUID(),expectedRevision:t.state.revision,lifeId:t.membership.lifeId,...o,...e};return this.pending={path:`/rooms/${encodeURIComponent(t.roomId)}/commands`,body:c,revision:i.revision,context:this.context()},this.retry()}async followRematch(){const e=this.room?.successor;if(!e||this.busy||this.pending)throw new Error("No rematch lobby is available yet.");const t=this.room.roomId;this.forgetRoom();try{if(e.joined)return await this.reconnect(e.roomId);try{return await this.join(e.code)}catch(i){if(On(i)&&i.code==="already_joined")return await this.reconnect(e.roomId);throw i}}catch(i){try{this.pending?await this.refresh(t):await this.reconnect(t)}catch{}throw i}}async retry(){if(!this.pending||this.busy)throw new Error("No pending action is ready to retry.");const e=this.pending;if(this.session.assertRevision(e.revision),this.assertContext(e.context),e.unadmitted&&e.context.roomId){const t=this.room,i=e.body;if(!t||t.roomId!==e.context.roomId||t.membership.lifeId!==i.lifeId||i.protocolVersion===li&&(t.protocolVersion!==li||t.state.epoch!==i.epoch||"roundId"in i&&t.state.roundId!==i.roundId)||"turnId"in i&&t.currentTurnId!==i.turnId)throw this.pending=null,this.emit(),new Error("The room opportunity changed. Choose an action for the current room.")}this.busy=!0,this.emit();try{const t=await this.session.request(e.path,e.body);if(this.session.assertRevision(e.revision),this.assertContext(e.context),this.pending!==e)throw new Error("The pending combat action changed.");return e.body.kind==="leave"?(this.validateResponse(t,e.revision,e.context),this.pending=null,this.clearRoom()):(this.apply(t,e.revision,e.context),this.pending=null,this.openSocket()),this.room}catch(t){if(e.context.generation!==this.roomGeneration)throw t;if(this.session.revision!==e.revision)this.pending=null,this.clearRoom();else if(t instanceof mi&&t.transient)t.code!=="admission_rate"&&t.code!=="command_rate"&&(e.uncertain=!0),e.unadmitted=!e.uncertain;else{if(Qi(t,xr))throw this.pending=null,this.rejectedLock=null,Dd(xr);if(On(t)&&typeof t.status=="number"&&t.status>=400&&t.status<500){if(this.pending=null,t.status===409&&e.body.kind==="shot"&&e.body.protocolVersion===li&&e.context.roomId&&(this.rejectedLock={roomId:e.context.roomId,lifeId:String(e.body.lifeId),epoch:e.body.epoch,roundId:e.body.roundId}),this.room)try{await this.refresh()}catch(i){if(Qi(i,xr))throw i}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(i){if(Qi(i,xr))throw i}}throw t}finally{e.context.generation===this.roomGeneration&&(this.busy=!1,this.emit())}}async reconnect(e=this.room?.roomId??this.savedRoom){if(this.pending)throw new Error("Retry the pending action first.");if(!e)throw new Error("No saved room is available.");if(!this.session.credentials())throw new Error("The original guest identity is required to reconnect.");const t=this.context(e);this.stopped=!1,await this.refresh(e),this.assertContext(t),this.openSocket()}async refresh(e=this.room?.roomId){if(!e)return;const t=this.session.credentials();if(!t)throw new Error("The original guest identity is required.");const i=this.context(e);try{const r=await ps(this.session,`/rooms/${encodeURIComponent(e)}`,xr);this.apply(r,t.revision,i)}catch(r){if(this.session.assertRevision(t.revision),this.assertContext(i),Qi(r,xr)&&(this.pending?.context.roomId===e&&this.pending.revision===t.revision&&(this.pending=null),this.room?.roomId===e&&(this.rejectedLock=null),this.emit()),On(r)&&typeof r.status=="number"&&[403,404,410].includes(r.status)){this.pending=null,this.clearRoom(e);const s=Object.assign(new Error("This room is no longer available. Create or join another room with the same guest."),{status:r.status});throw this.onError(s),s}throw r}}receive(e){const t=this.session.credentials();!t||!this.room||this.stopped||!On(e)||e.type!=="room"||e.roomId===this.room.roomId&&this.apply(e,t.revision,this.context())}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e)return;if(this.connected=!1,!this.socketFactory){this.connected=!0,this.emit();return}const t=++this.socketGeneration,i=this.context(),r=this.room.roomId,s=this.socketFactory(this.session.endpoint.combatSocket);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===t&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={type:"authenticate",token:e.token,roomId:r,lastRevision:this.room?.snapshotRevision??0,protocolVersion:this.room.protocolVersion,rulesVersion:Hs};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));On(c)&&c.type==="room"&&(this.apply(c,e.revision,i),this.connected=!0,this.emit())}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),!this.stopped&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.pollTimer||this.stopped)return;const e=this.context();this.pollTimer=setTimeout(async()=>{if(this.pollTimer=null,!(!this.room||this.stopped||e.generation!==this.roomGeneration)){try{await this.refresh()}catch(t){e.generation===this.roomGeneration&&this.onError(t)}e.generation===this.roomGeneration&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.reconnectTimer||this.stopped)return;const e=this.context();this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,!(this.stopped||e.generation!==this.roomGeneration))try{await this.refresh(),this.assertContext(e),this.openSocket()}catch(t){e.generation===this.roomGeneration&&(this.onError(t),this.scheduleRecovery())}},1500)}clearRoom(e=this.room?.roomId??this.savedRoom??void 0){this.close(),this.room=null,this.rejectedLock=null,this.hasClock=!1;try{const t=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");On(t)&&t.roomId===e&&(!this.session.guestId||t.guestId===this.session.guestId)&&this.storage?.removeItem(this.session.storageKeys.room)}catch{}this.emit()}forgetRoom(){this.pending=null,this.clearRoom()}close(){this.stopped=!0,this.socketGeneration++,this.roomGeneration++,this.busy=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.pollTimer&&clearTimeout(this.pollTimer),this.reconnectTimer=null,this.pollTimer=null;const e=this.socket;this.socket=null,e?.close(),this.connected=!1}}const BS=/^[A-Z2-9]{6}$/,Yo="room",Fd="Copied",zS="Select and copy the code";function HS(n){if(typeof n!="string")return null;const e=n.trim().toUpperCase();return BS.test(e)?e:null}function GS(n,e){const t=new URLSearchParams(n.search);return t.set(Yo,e),`${n.origin}${n.pathname}?${t.toString()}`}function VS(n){return HS(new URLSearchParams(n).get(Yo))}function WS(n){const e=new URLSearchParams(n.search);if(!e.has(Yo))return null;e.delete(Yo);const t=e.toString();return`${n.pathname}${t?`?${t}`:""}${n.hash??""}`}function XS(n,e){return`Join my private archery match with room code ${n}: ${e}`}function $S(n){return`Join my private archery match with room code ${n}.`}const YS=n=>!!n&&typeof n=="object"&&["AbortError","InvalidStateError"].includes(n.name??"");async function jS(n,e,t){const i=XS(e,t);if(n&&typeof n.share=="function")try{return await n.share({title:"Archery private match",text:$S(e),url:t}),"shared"}catch(r){if(YS(r))return"cancelled"}if(n?.clipboard&&typeof n.clipboard.writeText=="function")try{return await n.clipboard.writeText(i),"copied"}catch{}return"manual"}function qS(n,e){return n.kills===e.kills&&n.damageDealt===e.damageDealt&&xa(n)===xa(e)&&n.shots===e.shots}function KS(n,e){return e.kills-n.kills||e.damageDealt-n.damageDealt||xa(e)-xa(n)||n.shots-e.shots||(n.actorId<e.actorId?-1:n.actorId>e.actorId?1:0)}function xa(n){return n.shots?n.hits/n.shots:0}const Df=["shots","hits","headshots","damageDealt","damageTaken","kills","longestHit","terrainDestroyed"];function JS(n){const e=n?.rows;if(!Array.isArray(e)||e.length>64)throw new Error("The service returned an unsupported session board.");return e.map(t=>{const i=t;if(!i||typeof i.actorId!="string"||Df.some(r=>typeof i[r]!="number"||!Number.isFinite(i[r])||i[r]<0))throw new Error("The service returned an unsupported session board.");return Object.fromEntries(["actorId",...Df].map(r=>[r,i[r]]))})}function jm(n,e,t,i){const r=new Map(n.map(c=>[c.actorId,c])),s=e.map(c=>({label:c.label,stat:r.get(c.actorId)??{actorId:c.actorId,shots:0,hits:0,headshots:0,damageDealt:0,damageTaken:0,kills:0,longestHit:0,terrainDestroyed:0}}));s.sort((c,l)=>KS(c.stat,l.stat));const a=s.some(c=>c.stat.shots>0),o=s.map((c,l)=>({actorId:c.stat.actorId,label:c.label,shots:c.stat.shots,accuracy:c.stat.shots?`${Math.round(xa(c.stat)*100)}%`:"–",damage:Math.round(c.stat.damageDealt),kills:c.stat.kills,own:c.stat.actorId===t,leader:i&&a&&l===0&&!(s[1]&&qS(c.stat,s[1].stat))}));return{title:i?"Final standings":"Session board",rows:o,visible:o.length>0&&a}}function qm(n){return n.state==="active"&&n.phase!=="planning"?null:`${n.state}:${n.revision}`}function ZS(n,e){return n?.state==="finished"&&e!==null&&e.startsWith("finished:")}class Km{stats=[];onChange=()=>{};get loadedKey(){return this.loaded}scope=null;wanted=null;loaded=null;busy=!1;token=0;failed=null;session;kind;constructor(e,t){this.session=e,this.kind=t}want(e,t,i){this.scope!==e&&(this.scope=e,this.stats=[],this.loaded=null),!(this.loaded===t||this.wanted?.key===t||this.failed?.key===t&&Date.now()<this.failed.until)&&(this.wanted={scope:e,key:t,path:i},this.pump())}hold(e){this.token++,this.wanted=null,this.scope!==e&&(this.scope=e,this.stats=[],this.loaded=null)}clear(){this.token++,this.scope=null,this.wanted=null,this.loaded=null,this.stats.length&&(this.stats=[],this.onChange())}async pump(){if(!this.busy){this.busy=!0;try{for(;this.wanted;){const e=this.wanted,t=this.session.revision,i=this.token;try{const r=JS(await ps(this.session,e.path,this.kind==="private"?xr:oi));this.session.assertRevision(t),this.scope===e.scope&&i===this.token&&(this.stats=r,this.loaded=e.key,this.failed=null,this.onChange())}catch{this.failed={key:e.key,until:Date.now()+3e3}}this.wanted===e&&(this.wanted=null)}}finally{this.busy=!1}}}}function Jm(n,e,t){const i=1-Math.exp(-18*Math.max(0,t));return{angle:n.angle+(e.angle-n.angle)*i,pull:n.pull+(e.pull-n.pull)*i}}function jo(n,e=0){const t=n.angle*Math.PI/180,i=Math.cos(t),r=Math.sin(t),s={x:-7.7+i*(1.3-.37),y:2.3+r*(1.3-.37)},a={x:s.x-i*n.pull,y:s.y-r*n.pull},o={x:a.x-i*.16*e,y:a.y-r*.16*e+.04*e},c=n.pull+(.08-n.pull)*e,l={x:s.x-i*c,y:s.y-r*c},u=-7.95,d=2.3,h=o.x-u,p=o.y-d,g=Math.hypot(h,p),v=(.65**2-.9**2+g**2)/(2*g),m=Math.sqrt(Math.max(0,.65**2-v**2)),f={x:u+h/g*v-p/g*m,y:d+p/g*v+h/g*m};return{bow:s,hand:o,nock:l,elbow:f}}const Nf=.16;function la(n,e,t){if(e>=Nf){const b=Ho(n,e);return{position:Kt(n,e),angle:Math.atan2(b.y,b.x)}}const i=Nf,r=Math.max(0,e)/i,s=Kt(n,i),a=Ho(n,i),o=Math.hypot(n.velocity.x,n.velocity.y),c={x:Math.cos(t.angle)*o,y:Math.sin(t.angle)*o},l=2*r**3-3*r*r+1,u=r**3-2*r*r+r,d=-2*r**3+3*r*r,h=r**3-r*r,p=(6*r*r-6*r)/i,g=3*r*r-4*r+1,v=(-6*r*r+6*r)/i,m=3*r*r-2*r,f={x:l*t.tip.x+u*i*c.x+d*s.x+h*i*a.x,y:l*t.tip.y+u*i*c.y+d*s.y+h*i*a.y},y={x:p*t.tip.x+g*c.x+v*s.x+m*a.x,y:p*t.tip.y+g*c.y+v*s.y+m*a.y};return{position:f,angle:Math.atan2(y.y,y.x)}}const En=Object.freeze({count:7,start:.055,duration:.228,radiusPx:3.5,outlinePx:1.75});function qo(n){if(!Number.isInteger(n.count)||n.count<1||n.count>32||![n.start,n.duration].every(Number.isFinite)||n.start<0||n.duration<0||n.start+n.duration>.35)throw new RangeError("Short opening guide settings required.");return Array.from({length:n.count},(e,t)=>n.start+(n.count===1?0:t/(n.count-1)*n.duration))}const Ko=Object.freeze({minAngle:Ot.minAngle,maxAngle:Ot.maxAngle,minPower:.08,maxPower:1}),Zm=(n,e,t)=>Math.min(t,Math.max(e,n)),Qm=n=>Zm(Math.round(n*10)/10,Ko.minAngle,Ko.maxAngle),eg=n=>Zm(Math.round(n*1e3)/1e3,Ko.minPower,Ko.maxPower),po=n=>({...n,angle:Qm(n.angle),power:eg(n.power)}),tg=n=>`${n.toFixed(1)}°`,ng=n=>`${(n*100).toFixed(1)}%`,QS=n=>n.toFixed(1),ew=n=>(n*100).toFixed(1),tw=n=>`Last: ${tg(n.angle)} · ${ng(n.power)}`,Uf=Object.freeze([{id:"combat-angle-minus-large",field:"angle",delta:-1},{id:"combat-angle-minus-fine",field:"angle",delta:-.1},{id:"combat-angle-plus-fine",field:"angle",delta:.1},{id:"combat-angle-plus-large",field:"angle",delta:1},{id:"combat-power-minus-large",field:"power",delta:-5},{id:"combat-power-minus-fine",field:"power",delta:-.5},{id:"combat-power-plus-fine",field:"power",delta:.5},{id:"combat-power-plus-large",field:"power",delta:5}]);function gl(n,e,t){return e==="angle"?{...n,angle:Qm((Math.round(n.angle*10)+Math.round(t*10))/10)}:{...n,power:eg((Math.round(n.power*1e3)+Math.round(t*10))/1e3)}}class nw{scope=null;locked=null;shot=null;noteLocked(e,t){if(!e)return;const i=this.locked?.aim;i&&i.arrow===e.arrow&&i.angle===e.angle&&i.power===e.power&&i.facing===e.facing||(this.locked={aim:{...e},at:t})}postdatesLock(e){return!!this.locked&&e.startedAt!==null&&e.startedAt>=this.locked.at}fallback(e){if(!this.postdatesLock(e))return null;const t=this.locked.aim;return this.locked=null,t}observe(e,t,i){if(e!==this.scope&&(this.scope=e,this.shot=null,this.locked=null),!i||!t||i.actorId!==t||!i.point)return;if(this.shot?.actionId===i.actionId){const s=this.shot.aim??i.aim??this.fallback(i);i.aim&&this.postdatesLock(i)&&(this.locked=null),this.shot={...this.shot,aim:s?{...s}:null,at:this.shot.at??i.startedAt};return}const r=i.aim??this.fallback(i);i.aim&&this.postdatesLock(i)&&(this.locked=null),this.shot={actionId:i.actionId,aim:r?{...r}:null,impact:{...i.point},at:i.startedAt}}clear(){this.scope=null,this.shot=null,this.locked=null}markerVisible(e){return!!this.shot&&this.shot.at!==null&&e>=this.shot.at}}function iw(n){let e=3735928559,t=1103547991;const i=r=>{e=Math.imul(e^r,2654435761),t=Math.imul(t^r,1597334677)};for(const r of`${n.version}:${n.revision}:${n.cells.length}:`)i(r.charCodeAt(0));for(let r=0;r<n.cells.length;r+=4)i((n.cells[r]?1:0)|(n.cells[r+1]?2:0)|(n.cells[r+2]?4:0)|(n.cells[r+3]?8:0));return e=Math.imul(e^e>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),t=Math.imul(t^t>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),(4294967296*(2097151&t)+(e>>>0)).toString(16).padStart(14,"0")}function rw(n){if(!Number.isFinite(n))return"Wind calm";const e=Math.abs(n).toFixed(1);return e==="0.0"?"Wind calm":`Wind ${n<0?"←":"→"} ${e}`}const sw="position:absolute;top:10px;left:50%;transform:translateX(-50%);z-index:3;padding:4px 10px;border-radius:999px;font:600 12px/1.2 system-ui,sans-serif;letter-spacing:.3px;background:rgba(16,24,40,.72);color:#fff;pointer-events:none;white-space:nowrap";class ig{element=null;parent;id;constructor(e,t="combat-wind"){this.parent=e,this.id=t}ensure(){if(this.element)return this.element;const e=this.parent();if(!e)return null;const t=document.createElement("div");return t.id=this.id,t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.style.cssText=sw,t.hidden=!0,e.appendChild(t),this.element=t}update(e,t){if(!(t>0)){this.hide();return}const i=this.ensure();if(!i)return;i.hidden=!1;const r=rw(e);i.textContent!==r&&(i.textContent=r),i.dataset.wind=String(e)}hide(){this.element&&(this.element.hidden=!0)}}function Jo(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Ff=(n,e,t)=>Math.imul(Math.round(n*64)|0,73856093)^Math.imul(Math.round(e*64)|0,19349663)^Math.imul(t|0,83492791);function aw(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^e>>>16)>>>0}const xc=n=>aw(JSON.stringify(n)),Bi=(n,e,t)=>Math.min(t,Math.max(e,n)),ow=800,Eh=64,cw=12,lw=[.49,.58,.38],dw=[.6,.46,.31],hw=[.36,.29,.24],uw=[.22,.22,.26],xl=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,Th=n=>[xl(n[0]),xl(n[1]),xl(n[2])],kf=.5,fw=.75,pw={surface:lw,soil:dw,deep:hw,bedrock:uw};function Of(n,e,t=0,i=pw){const r=t-n,s=Math.max(1e-6,t-e);return r<=kf?i.surface:n-e<fw?i.bedrock:i.detail&&r<=kf+i.detail.depth?i.detail.color:r/s<.55?i.soil:i.deep}function mw(n){return[Bi(n[0]*.62+.2,0,1),n[1]*.5+.07,n[2]*.42+.02]}const gw=[[-1,0],[1,0],[0,-1],[0,1]];function xw(n,e,t,i,r){if(!r.size)return!1;for(const[s,a]of gw){const o=n+s,c=e+a;if(o>=0&&c>=0&&o<t&&c<i&&r.has(c*t+o))return!0}return!1}const Bf=6e3,_w=(n,e,t,i,r)=>n.size?vm(_m([...n],e,t),i,r):[];class vw{keys=null;until=0;release(){const e=this.keys??[];return this.keys=null,e}set(e,t){this.keys=e.length?e:null,this.until=t}due(e){return this.keys===null||e<this.until?null:this.release()}clear(){this.keys=null}}function yw(n,e,t=ow){return n!==null&&e>=n&&e-n<=t}function bw(n,e){if(!n.length)return null;let t=0,i=0;for(const s of n)t+=s%e.width,i+=Math.floor(s/e.width);const r=n.length;return{x:e.minX+(t/r+.5)*e.cell,y:e.minY+(i/r+.5)*e.cell,extent:Math.sqrt(r)*e.cell,count:r}}const rg=n=>n.extent>=1.5,Ah=.35;function Mw(n,e,t,i){return i||!rg(n)||t<=0?0:Bi(n.extent*.1,0,.6)*Bi(1-e/(t*1.5),0,1)}const Sw=(n,e=Ah)=>n<0||n>=e?0:(1-n/e)**2;function ww(n,e,t=Ah){const i=e*Sw(n,t);return i===0?{x:0,y:0}:{x:i*Math.sin(n*71),y:i*Math.sin(n*93+1.3)}}function Ew(n,e,t,i){if(t<e||n.length<2)return null;const r=(t-e)/1e3,s=n.findIndex(d=>d.time>=r);if(s<=0)return{vx:0,vy:0};const a=n[s-1],o=n[s],c=a.poses.find(d=>d.actorId===i)?.feet,l=o.poses.find(d=>d.actorId===i)?.feet,u=o.time-a.time;return!c||!l||u<=1e-9?{vx:0,vy:0}:{vx:(l.x-c.x)/u,vy:(l.y-c.y)/u}}const Tw=.4,zf=.5;function Aw(n,e){return Math.hypot(n,e)<Tw?0:Bi(-n*.04,-zf,zf)}const Rw=(n,e,t)=>n+(e-n)*(1-Math.exp(-10*Math.max(0,t)));function Cw(n,e){return n!==null&&n<=-2&&e>-.5?-n:0}const Iw=.22;function Pw(n,e,t=Iw){return n<0||n>=t||e<=0?{sy:1}:{sy:1-Bi(e*.015,0,.3)*(1-n/t)}}const Lw=.08,Hf=.22,Dw=n=>n>=0&&n<Lw;function Nw(n,e,t=!1){return t||n<0||n>=Hf?0:-e*.22*(1-n/Hf)**2}function Uw(n,e){return e.filter(t=>n.has(t.id)&&t.health<n.get(t.id)).map(t=>t.id)}class Fw{items=[];capacity;constructor(e=Eh){this.capacity=e}emit(e){this.items.length>=this.capacity&&this.items.shift(),this.items.push(e)}step(e){const t=this.items;let i=0;for(let r=0;r<t.length;r++){const s=t[r];s.age+=e,s.x+=s.vx*e,s.y+=s.vy*e,s.kind==="debris"?s.vy-=18*e:(s.vx*=Math.exp(-3*e),s.vy=s.vy*Math.exp(-3*e)+.6*e),s.age<s.life&&(t[i++]=s)}t.length=i}clear(){this.items.length=0}}function kw(n){const e=Bi(n.age/n.life,0,1);return n.kind==="dust"?n.size*(1+e)*(1-e*e):n.size*(1-e)}function Ow(n,e){const t=Bi(Math.round(4+n*6),4,20),i=Bi(Math.round(3+n*3),3,12);return e?{debris:Math.min(4,t),dust:Math.min(2,i)}:{debris:t,dust:i}}function Bw(n,e,t,i,r){const{debris:s,dust:a}=Ow(e.extent,i),o=Math.min(1.2,e.extent*.5),c=3+Math.min(6,e.extent*2);for(let l=0;l<s;l++){const u=Math.PI*(.1+.8*t()),d=c*(.5+t()),h=e.y+(t()-.5)*o;n.emit({kind:"debris",x:e.x+(t()-.5)*o,y:h,vx:Math.cos(u)*d*(t()<.5?-1:1),vy:Math.sin(u)*d,age:0,life:.5+t()*.4,size:.08+t()*.1,color:r(h)})}for(let l=0;l<a;l++)n.emit({kind:"dust",x:e.x+(t()-.5)*o*1.5,y:e.y+(t()-.3)*o,vx:(t()-.5)*3,vy:t()*1.5,age:0,life:.5+t()*.3,size:.3+t()*.3,color:[.78,.74,.66]})}function zw(n,e,t,i,r,s){const a=s?1:Bi(Math.round(i*.5),2,6);for(let o=0;o<a;o++)n.emit({kind:"dust",x:e+(r()-.5)*.8,y:t+.05,vx:(o%2?1:-1)*(.6+r()*1.2),vy:.3+r()*.5,age:0,life:.35+r()*.2,size:.25+r()*.2,color:[.78,.74,.66]})}const Nr=(...n)=>n.every(Number.isFinite);function Rh(n){return Nr(n.minX,n.maxX,n.minY,n.maxY)&&n.minX<n.maxX&&n.minY<n.maxY}function Gf(n,e,t){return e+(n.shotMinSpeed+n.shotExtraSpeed)*(t.start+t.duration)+1}const sg=4;function Hw(n,e,t,i){if(!Rh(n)||!Nr(i,t.halfWidth,t.height)||i<0)throw new RangeError("Ordered finite profile bounds and margin required.");let r=n.minX+t.halfWidth-i,s=n.maxX-t.halfWidth+i,a=n.minY,o=n.maxY;for(const c of e){if(!Nr(c.x,c.y))throw new RangeError("Finite actor positions required.");const l=Math.max(i,t.halfWidth);r=Math.min(r,c.x-l),s=Math.max(s,c.x+l),a=Math.min(a,c.y-2),o=Math.max(o,c.y+t.height+sg)}return{minX:Math.min(r,n.minX),maxX:Math.max(s,n.maxX),minY:a,maxY:o}}const Gw=Object.freeze({inline:Object.freeze({side:12,top:68,bottom:56}),expanded:Object.freeze({side:12,top:108,bottom:12})}),_l=.2;function wr(n,e,t="inline"){if(!Nr(n,e)||n<=0||e<=0)throw new RangeError("Positive finite viewport required.");const i=Gw[t];if(!i)throw new RangeError("Unknown HUD mode.");const r=Math.min(i.side,n*_l);return{left:r,right:r,top:Math.min(i.top,e*_l),bottom:Math.min(i.bottom,e*_l)}}function ag(n,e,t,i=wr(e,t)){if(!Rh(n))throw new RangeError("Ordered finite bounds required.");if(!Nr(e,t)||e<=0||t<=0)throw new RangeError("Positive finite viewport required.");Vw(e,t,i);const r=e-i.left-i.right,s=t-i.top-i.bottom,a=Math.min(r/(n.maxX-n.minX),s/(n.maxY-n.minY));return og((n.minX+n.maxX)/2,(n.minY+n.maxY)/2,a,e,t,i)}function og(n,e,t,i,r,s){const a=r-s.top-s.bottom;return{centerX:n-(s.left-s.right)/2/t,centerY:e+(s.top+a/2-r/2)/t,halfWidth:i/(2*t),halfHeight:r/(2*t),scale:t}}function Vw(n,e,t){const i=n-t.left-t.right,r=e-t.top-t.bottom;if(!Nr(t.left,t.right,t.top,t.bottom)||t.left<0||t.right<0||t.top<0||t.bottom<0||i<=0||r<=0)throw new RangeError("Insets must leave a positive area.")}const Ch=20,Vf=Object.freeze({minPx:300,maxPx:520}),cg=1e-9,mo=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function Ww(n,e,t,i){const r=a=>({x:a.x,y:a.y,reach:t.halfWidth+2});if(n){const a=[{x:n.x,y:n.y,reach:Math.max(i,t.halfWidth)}];let o=null;for(const c of e)(!o||mo(n,c)<mo(n,o))&&(o=c);return o?[...a,r(o)]:a}if(e.length<2)return e.map(r);let s=[e[0],e[1]];for(let a=0;a<e.length;a++)for(let o=a+1;o<e.length;o++)mo(e[a],e[o])<mo(s[0],s[1])&&(s=[e[a],e[o]]);return s.map(r)}function lg(n,e){return{minX:Math.min(...n.map(t=>t.x-t.reach)),maxX:Math.max(...n.map(t=>t.x+t.reach)),minY:Math.min(...n.map(t=>t.y-2)),maxY:Math.max(...n.map(t=>t.y+e.height+sg))}}function Xw(n,e,t,i,r=[]){if(!Rh(n))throw new RangeError("Ordered finite bounds required.");if(!Nr(e)||e<=0)throw new RangeError("Positive finite width required.");const s=wr(e,1e3,t).left,a=e-2*s,o=Ch/i.height,c=r.length?lg(r,i):null,l=Math.max(a/(n.maxX-n.minX),c?Math.min(o,a/(c.maxX-c.minX)):o),u=(n.maxY-n.minY)*l;let d=u;for(let h=0;h<6;h++){const p=wr(e,Math.max(d,1),t);d=u+p.top+p.bottom}return Math.min(Vf.maxPx,Math.max(Vf.minPx,Math.ceil(d)))}const kd=(n,e,t,i)=>t>=e-n?(n+e)/2:Math.min(Math.max(i,n+t/2),e-t/2);function $w(n,e,t,i,r,s,a=!1){const o=ag(n,e,t,i),c=Ch/r.height;if(a||o.scale>=c-cg)return{...o,windowed:!1};const l=e-i.left-i.right,u=t-i.top-i.bottom,d=Math.min(c,u/(n.maxY-n.minY)),h=s.length?lg(s,r):null,p=h?Math.min(l/(h.maxX-h.minX),u/(h.maxY-h.minY)):1/0,g=Math.max(o.scale,Math.min(d,p)),v=h?(h.minX+h.maxX)/2:(n.minX+n.maxX)/2,m=h?(h.minY+h.maxY)/2:(n.minY+n.maxY)/2;return{...og(kd(n.minX,n.maxX,l/g,v),kd(n.minY,n.maxY,u/g,m),g,e,t,i),windowed:!0}}function Yw(n,e,t,i,r){return ag(n,e,t,i).scale*r.height<Ch-cg}function jw(n,e){return!n||n.worldKey!==e.worldKey||n.profile!==e.profile||n.epoch!==e.epoch||n.width!==e.width||n.height!==e.height||n.mode!==e.mode||(n.focus??"")!==(e.focus??"")}const qw=new Or;class Kw{mesh;capacity;geometry=new Bs(1,1);material;alpha;matrix=new Mt;position=new O;scale=new O;color=new je;constructor(e=Eh){this.capacity=e,this.material=new er({color:"#ffffff",transparent:!0,depthWrite:!1}),this.material.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vInstanceAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vInstanceAlpha = instanceAlpha;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vInstanceAlpha;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vInstanceAlpha;`)},this.mesh=new ax(this.geometry,this.material,e),this.mesh.instanceMatrix.setUsage(xu),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.visible=!1,this.alpha=new Cd(new Float32Array(e),1),this.alpha.setUsage(xu),this.geometry.setAttribute("instanceAlpha",this.alpha),this.mesh.setColorAt(0,this.color)}update(e){const t=Math.min(e.length,this.capacity);for(let i=0;i<t;i++){const r=e[i],s=Math.max(.001,kw(r)),a=Th(r.color);this.position.set(r.x,r.y,.6),this.scale.set(s,s,s),this.mesh.setMatrixAt(i,this.matrix.compose(this.position,qw,this.scale)),this.mesh.setColorAt(i,this.color.setRGB(a[0],a[1],a[2])),this.alpha.setX(i,r.kind==="dust"?.55*(1-r.age/r.life):.95)}this.mesh.count=t,this.mesh.visible=t>0,t>0&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.alpha.needsUpdate=!0)}clear(){this.mesh.count=0,this.mesh.visible=!1}dispose(){this.geometry.dispose(),this.material.dispose(),this.mesh.dispose()}}class bn extends RangeError{path;constructor(e,t){super(t),this.name="DefinitionError",this.path=e}}const _n=(n,e)=>{throw new bn(n,n?`${n} ${e}`:e)},Gr=n=>n,Jw=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),Io=(n,e)=>typeof e=="number"?`${n}[${e}]`:n?`${n}.${e}`:e,Ps=n=>{try{const e=JSON.stringify(n);return e===void 0?String(n):e.length>40?`${e.slice(0,37)}...`:e}catch{return String(n)}},tr=(n={})=>Gr((e,t)=>{if(typeof e!="string")return _n(t,`must be a string (got ${Ps(e)})`);n.min!==void 0&&e.length<n.min&&_n(t,`must have at least ${n.min} characters`),n.max!==void 0&&e.length>n.max&&_n(t,`must have at most ${n.max} characters`),n.pattern&&!n.pattern.test(e)&&_n(t,`must be ${n.what??`a match for ${n.pattern}`} (got ${Ps(e)})`)}),yn=()=>tr({pattern:/^#[0-9a-fA-F]{6}$/,what:"#rrggbb"}),qe=(n={})=>Gr((e,t)=>{if(typeof e!="number"||!Number.isFinite(e))return _n(t,`must be a finite number (got ${Ps(e)})`);n.int&&!Number.isInteger(e)&&_n(t,`must be an integer (got ${e})`),n.min!==void 0&&e<n.min&&_n(t,`must be at least ${n.min} (got ${e})`),n.max!==void 0&&e>n.max&&_n(t,`must be at most ${n.max} (got ${e})`)}),Ar=n=>Gr((e,t)=>{n.includes(e)||_n(t,`must be one of ${n.map(i=>JSON.stringify(i)).join(", ")} (got ${Ps(e)})`)}),Nn=(n,e={})=>Gr((t,i)=>{if(!Array.isArray(t))return _n(i,`must be a list (got ${Ps(t)})`);e.min!==void 0&&t.length<e.min&&_n(i,`must have at least ${e.min} entries (has ${t.length})`),e.max!==void 0&&t.length>e.max&&_n(i,`must have at most ${e.max} entries (has ${t.length})`),t.forEach((r,s)=>n(r,Io(i,s)))}),gt=n=>Object.assign(Gr((e,t)=>{e!==void 0&&n(e,t)}),{optional:!0}),vt=n=>Gr((e,t)=>{if(!Jw(e))return _n(t,`must be an object (got ${Ps(e)})`);for(const i of Object.keys(n)){const r=n[i];e[i]===void 0?r.optional||_n(Io(t,i),"is required"):r(e[i],Io(t,i))}for(const i of Object.keys(e))i in n||_n(Io(t,i),`is not a known field (allowed: ${Object.keys(n).join(", ")})`)}),ar=(n,e)=>Gr((t,i)=>{n(t,i);const r=e(t);r&&_n(i,r)}),Ih=/^[a-z0-9][a-z0-9._-]{0,31}$/,Zw=65536,Ph={kind:tr({min:1,max:32}),id:tr({pattern:Ih,what:"an id (a-z, 0-9, . _ -; max 32)"}),version:qe({min:1,int:!0}),weight:qe({min:0,max:Zw,int:!0}),tags:Nn(tr({pattern:/^[a-z0-9][a-z0-9._-]{0,31}$/,what:"a tag"}),{max:16})},Wf=1<<20;function dg(n){if(typeof n=="object"&&n!==null&&!Object.isFrozen(n)){Object.freeze(n);for(const e of Object.values(n))dg(e)}return n}function Od(n,e,t){const i=new Map,r=(d,h)=>`${d}@${h}`,s=(d,h)=>d.id<h.id?-1:d.id>h.id?1:d.version-h.version,a=d=>[...i.values()].sort(s).filter(h=>!d||d(h)),o=d=>i.get(r(d.id,d.version)),c=d=>{if(!Ih.test(d))return;let h;for(const p of i.values())p.id===d&&(!h||p.version>h.version)&&(h=p);return h},l=d=>{const h=d,p=`${n} ${typeof h?.id=="string"?h.id:"?"}@${typeof h?.version=="number"?h.version:"?"}: `;try{if(e(d,""),d.kind!==n)throw new bn("kind",`kind must be ${JSON.stringify(n)} (got ${JSON.stringify(d.kind)})`);t?.(d,u)}catch(g){throw g instanceof bn?new bn(g.path,p+g.message):g}},u={kind:n,register(d){l(d);const h=d,p=r(h.id,h.version);if(i.has(p))throw new bn("",`${n} ${p}: is already registered`);const g=dg(structuredClone(h));return i.set(p,g),g},check(d){try{return l(d),null}catch(h){if(h instanceof bn)return h.message;throw h}},find:o,findLatest:c,has:d=>o(d)!==void 0,get(d){const h=o(d);if(!h)throw new bn("ref",`${n} ${r(String(d?.id),d?.version)}: ref is not registered`);return h},latest(d){const h=c(d);if(!h)throw new bn("id",`${n} ${JSON.stringify(d)}: id is not registered`);return h},list:a,pick(d,h){const p=a(h).filter(m=>m.weight>0);if(!p.length)throw new RangeError(`No selectable ${n} definition (nothing eligible has weight above 0)`);const g=p.reduce((m,f)=>m+f.weight,0);if(g>Wf)throw new RangeError(`${n} selectable weight total ${g} exceeds ${Wf}`);let v=(d>>>0)%g;for(const m of p){if(v<m.weight)return m;v-=m.weight}return p[p.length-1]}};return u}const zn=n=>{const e=parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]},Lh=n=>`#${n.map(e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,"0")).join("")}`,Qw=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],e1={kind:"theme",id:"classic",version:1,weight:0,tags:["default"],name:"Classic",sky:{stops:[{at:0,color:"#dce8df"},{at:1,color:"#dce8df"}],darkStops:[{at:0,color:"#202f36"},{at:1,color:"#202f36"}]},light:{hemiSky:"#fff4d8",hemiGround:"#62765d",hemiIntensity:2.6,sun:"#fff4d8",sunIntensity:3},terrain:{surface:"#7d9461",soil:"#99754f",deep:"#5c4a3d",bedrock:"#383842"},parallax:[]},t1={kind:"theme",id:"meadow",version:2,weight:1,tags:["temperate","green"],name:"Meadow",sky:{stops:[{at:0,color:"#86bde8"},{at:1,color:"#e6f2dc"}]},light:{hemiSky:"#fff4d8",hemiGround:"#62765d",hemiIntensity:2.6,sun:"#fff4d8",sunIntensity:3},haze:{color:"#e6f2dc",strength:.35},terrain:{surface:"#669641",soil:"#8c6a46",deep:"#574330",bedrock:"#35363f",detail:{color:"#a6c46a",depth:.25}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#ffffff",opacity:.85,baseY:14,amplitude:6,frequency:5,size:9,seed:11,drift:.5},{id:"far-hills",shape:"hills",depth:.35,color:"#9dbfb0",opacity:1,baseY:3,amplitude:9,frequency:3,seed:21},{id:"near-hills",shape:"hills",depth:.6,color:"#103a25",opacity:1,baseY:-1,amplitude:6,frequency:4,seed:22}]},n1={kind:"theme",id:"canyon",version:2,weight:1,tags:["arid","warm"],name:"Canyon",sky:{stops:[{at:0,color:"#f0b57d"},{at:1,color:"#fbe6c0"}]},light:{hemiSky:"#ffe6c0",hemiGround:"#8a5a3c",hemiIntensity:2.7,sun:"#ffe0b0",sunIntensity:3.2},haze:{color:"#fbe6c0",strength:.4},terrain:{surface:"#c98450",soil:"#a85d38",deep:"#6f3f2b",bedrock:"#3a2a28",detail:{color:"#e5bd8a",depth:.3}},parallax:[{id:"sun-haze",shape:"band",depth:0,color:"#ffd9a0",opacity:.35,baseY:2,amplitude:0,frequency:1,seed:1,floorY:-10},{id:"far-mesas",shape:"ridge",depth:.3,color:"#d89a6a",opacity:1,baseY:2,amplitude:11,frequency:4,seed:31},{id:"near-mesas",shape:"ridge",depth:.55,color:"#4a2616",opacity:1,baseY:-2,amplitude:8,frequency:5,seed:32}]},i1={kind:"theme",id:"dusk",version:1,weight:1,tags:["night","warm"],name:"Dusk",sky:{stops:[{at:0,color:"#2c2766"},{at:.55,color:"#c9657a"},{at:1,color:"#f6c38b"}]},light:{hemiSky:"#ffc9a0",hemiGround:"#4a3a6a",hemiIntensity:2.2,sun:"#ffb27a",sunIntensity:2.6},haze:{color:"#f2a58a",strength:.3},terrain:{surface:"#6b8a5c",soil:"#6a4a52",deep:"#43333f",bedrock:"#241d2f",detail:{color:"#8aa66c",depth:.2}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#f4a183",opacity:.55,baseY:12,amplitude:5,frequency:4,size:12,seed:41,drift:.35},{id:"far-ridge",shape:"ridge",depth:.3,color:"#5a4a86",opacity:1,baseY:1,amplitude:12,frequency:4,seed:42},{id:"near-ridge",shape:"hills",depth:.55,color:"#34295a",opacity:1,baseY:-2,amplitude:7,frequency:3,seed:43}],ui:{labelInk:"#f6e9d8",labelBg:"#2b2347",guideFill:"#fff2b5",guideStroke:"#1a1730"}},r1={kind:"theme",id:"snow",version:3,weight:1,tags:["cold","bright"],name:"Snow",sky:{stops:[{at:0,color:"#7aa5cf"},{at:1,color:"#a8c4de"}],darkStops:[{at:0,color:"#0b1530"},{at:1,color:"#1d2c4a"}]},light:{hemiSky:"#eaf3ff",hemiGround:"#8a96a8",hemiIntensity:2.8,sun:"#f4f8ff",sunIntensity:2.8},haze:{color:"#eef5fb",strength:.45},terrain:{surface:"#eef3f8",soil:"#737b88",deep:"#5a6270",bedrock:"#2e323c",detail:{color:"#b9dcee",depth:.35}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#ffffff",opacity:.8,baseY:15,amplitude:5,frequency:4,size:10,seed:51,drift:.4},{id:"far-peaks",shape:"ridge",depth:.25,color:"#c5d4e5",opacity:1,baseY:1,amplitude:14,frequency:3,seed:52},{id:"near-peaks",shape:"ridge",depth:.5,color:"#8aa0ba",opacity:1,baseY:-2,amplitude:9,frequency:5,seed:53}]},s1=[e1,t1,n1,i1,r1],a1=["hills","ridge","clouds","band"],Xf=ar(Nn(vt({at:qe({min:0,max:1}),color:yn()}),{min:2,max:8}),n=>n[0].at!==0?"first stop must be at 0":n[n.length-1].at!==1?"last stop must be at 1":n.some((e,t)=>t&&e.at<=n[t-1].at)?"stops must be in strictly increasing order":null),o1=vt({id:tr({pattern:/^[a-z][a-z0-9-]{0,29}$/,what:"a lowercase slug"}),shape:Ar(a1),depth:qe({min:0,max:1}),color:yn(),opacity:qe({min:0,max:1}),baseY:qe({min:-40,max:80}),amplitude:qe({min:0,max:40}),frequency:qe({min:1,max:24,int:!0}),seed:qe({int:!0,min:0,max:4294967295}),drift:gt(qe({min:-8,max:8})),size:gt(qe({min:1,max:60})),floorY:gt(qe({min:-120,max:80})),period:gt(qe({min:20,max:160}))}),c1=ar(vt({...Ph,name:tr({min:1,max:40}),sky:vt({stops:Xf,darkStops:gt(Xf)}),light:vt({hemiSky:yn(),hemiGround:yn(),hemiIntensity:qe({min:0,max:8}),sun:yn(),sunIntensity:qe({min:0,max:8})}),haze:gt(vt({color:yn(),strength:qe({min:0,max:1})})),terrain:vt({surface:yn(),soil:yn(),deep:yn(),bedrock:yn(),detail:gt(vt({color:yn(),depth:qe({min:.05,max:1.5})}))}),parallax:Nn(o1,{max:8}),ui:gt(vt({labelInk:gt(yn()),labelBg:gt(yn()),guideFill:gt(yn()),guideStroke:gt(yn())}))}),n=>{const e=n,t=e.parallax.map(r=>r.id),i=t.find((r,s)=>t.indexOf(r)!==s);return i?`parallax layer id ${JSON.stringify(i)} is used twice`:!!e.ui?.labelInk!=!!e.ui?.labelBg?"ui.labelInk and ui.labelBg must be set together":!!e.ui?.guideFill!=!!e.ui?.guideStroke?"ui.guideFill and ui.guideStroke must be set together":null}),l1="classic",d1="theme",Ii=Od("theme",c1);for(const n of s1)Ii.register(n);const $f=()=>Ii.latest(l1);function h1(n,e={}){const t=e.pin?Ii.findLatest(e.pin):void 0;if(t)return t;const i=xc(["theme-1",n]),r=e.preferred?.length?new Set(e.preferred):null;return r&&Ii.list(s=>r.has(s.id)&&s.weight>0).length?Ii.pick(i,s=>r.has(s.id)):Ii.pick(i)}function u1(n){if(!n)return null;let e=null;try{e=new URLSearchParams(n).get(d1)}catch{return null}return e&&Ii.findLatest(e)?e:null}const Yf=new WeakMap;function jf(n){let e=Yf.get(n);if(!e){const t=n.terrain;e={surface:zn(t.surface),soil:zn(t.soil),deep:zn(t.deep),bedrock:zn(t.bedrock),detail:t.detail?{color:zn(t.detail.color),depth:t.detail.depth}:void 0},Yf.set(n,e)}return e}const go=Object.freeze({solidCells:34e3,chunks:80,rowRuns:840,protectedCells:768}),_a=Tn("arena-2"),qf=_a.cell,Ls=(n,e)=>{throw new bn(n,`${n} ${e}`)},ni=(n,e,t)=>{n(e,t)},Vs=n=>n,Dh=tr({pattern:/^[a-z][a-z0-9]{0,15}$/,what:"a parameter name"}),ls=(n,e)=>typeof n=="number"?n:(n.add??0)+n.terms.reduce((t,[i,r])=>t+r*e[i],0),Nh=qe({int:!0,min:-4096,max:4096}),f1=Vs((n,e)=>{(!Array.isArray(n)||n.length!==2)&&Ls(e,"must be a [param, coefficient] pair"),ni(Dh,n[0],`${e}[0]`),ni(qe({int:!0,min:-8,max:8}),n[1],`${e}[1]`)}),p1=vt({terms:Nn(f1,{min:1,max:4}),add:gt(Nh)}),ms=Vs((n,e)=>{ni(typeof n=="number"?Nh:p1,n,e)}),Kf={x0:ms,x1:ms,y0:ms,y1:ms},m1=ar(vt({min:qe({int:!0,min:-4096,max:4096}),max:qe({int:!0,min:-4096,max:4096}),step:qe({int:!0,min:1,max:4096})}),n=>n.min>n.max?"min must not exceed max":(n.max-n.min)%n.step!==0?"max - min must be a multiple of step":null);function ds(n){return typeof n=="number"?[]:n.terms.map(e=>e[0])}function g1(n){return Object.keys(n).sort().reduce((t,i)=>t.flatMap(r=>[{...r,[i]:n[i].min},{...r,[i]:n[i].max}]),[{}])}const x1=ar(vt({...Ph,params:Vs((n,e)=>{(typeof n!="object"||n===null||Array.isArray(n))&&Ls(e,"must be an object of parameter ranges");const t=Object.keys(n);t.length>4&&Ls(e,`must have at most 4 parameters (has ${t.length})`);for(const i of t)ni(Dh,i,`${e}.${i}`),ni(m1,n[i],`${e}.${i}`)}),parts:Nn(vt({op:Ar(["add","clear"]),...Kf}),{min:1,max:16}),surface:gt(vt({x0:ms,x1:ms})),requiresClear:gt(Nn(vt(Kf),{max:8}))}),n=>{const e=n,t=[];e.parts.forEach((s,a)=>t.push([`parts[${a}]`,s.x0,s.x1,s.y0,s.y1])),(e.requiresClear??[]).forEach((s,a)=>t.push([`requiresClear[${a}]`,s.x0,s.x1,s.y0,s.y1]));const i=new Set(Object.keys(e.params)),r=g1(e.params);for(const[s,a,o,c,l]of t){for(const u of[...ds(a),...ds(o),...ds(c),...ds(l)])if(!i.has(u))return`${s} uses unknown parameter ${JSON.stringify(u)}`;if(r.some(u=>ls(o,u)<=ls(a,u)||ls(l,u)<=ls(c,u)))return`${s} must have a positive extent for every parameter value`}if(e.surface){for(const s of[...ds(e.surface.x0),...ds(e.surface.x1)])if(!i.has(s))return`surface uses unknown parameter ${JSON.stringify(s)}`;if(r.some(s=>ls(e.surface.x1,s)<=ls(e.surface.x0,s)))return"surface must have a positive width for every parameter value"}return null}),cn=(n={})=>{const e=qe({min:n.min,max:n.max});return Vs((t,i)=>{ni(e,t,i),Number.isInteger(t/qf)||Ls(i,`must be a whole number of cells (${qf} units); got ${t}`)})},va={min:_a.bounds.minX,max:_a.bounds.maxX},Ur={min:_a.bounds.minY,max:_a.bounds.maxY},_1=ar(vt({x0:cn(va),x1:cn(va),y0:cn(Ur),y1:cn(Ur)}),n=>n.x1<=n.x0||n.y1<=n.y0?"must have a positive extent":null),v1=ar(vt({op:Ar(["add","clear"]),x0:cn(va),x1:cn(va),y0:cn(Ur),y1:cn(Ur)}),n=>n.x1<=n.x0||n.y1<=n.y0?"must have a positive extent":null),y1=cn(va),b1=cn(Ur),M1=Vs((n,e)=>{(!Array.isArray(n)||n.length!==2)&&Ls(e,"must be an [x, y] pair"),ni(y1,n[0],`${e}[0]`),ni(b1,n[1],`${e}[1]`)}),Jf=Ar(["mirror","balanced"]),vl=vt({id:tr({pattern:Ih,what:"an id"}),version:qe({int:!0,min:1})}),da=n=>ar(vt({min:n,max:n}),e=>e.min>e.max?"min must not exceed max":null),S1=da(qe({int:!0,min:0,max:16})),w1=da(Nh),Zf=Vs((n,e)=>{(typeof n!="object"||n===null||Array.isArray(n))&&Ls(e,"must be an object of parameter overrides");for(const t of Object.keys(n))ni(Dh,t,`${e}.${t}`),ni(w1,n[t],`${e}.${t}`)}),E1=vt({solidCells:gt(qe({int:!0,min:1,max:go.solidCells})),chunks:gt(qe({int:!0,min:1,max:go.chunks})),rowRuns:gt(qe({int:!0,min:1,max:go.rowRuns})),protectedCells:gt(qe({int:!0,min:0,max:go.protectedCells}))}),T1=ar(vt({...Ph,profile:Ar(["arena-2"]),mode:Ar(["fixed","procedural"]),fixed:gt(vt({parts:Nn(v1,{min:1,max:64}),pads:Nn(M1,{min:8,max:8}),requiresClear:gt(Nn(_1,{max:16})),symmetry:gt(Jf)})),pads:gt(vt({levels:Nn(cn(Ur),{min:3,max:16}),offset:da(cn({min:-.5,max:.5})),symmetry:Jf,maxAdjacentStep:cn({min:0}),minDistinctLevels:qe({int:!0,min:3,max:8}),support:Nn(vt({block:vl,weight:qe({int:!0,min:1,max:1e3}),params:gt(Zf)}),{min:1,max:8})})),features:gt(Nn(vt({block:vl,zone:Ar(["gap","upper","lower","sky"]),count:S1,weight:qe({int:!0,min:1,max:1e3}),params:gt(Zf)}),{max:16})),voids:vt({count:da(qe({int:!0,min:0,max:8})),width:da(cn({min:2,max:80}))}),lanes:vt({padHeadroom:cn({min:3,max:20}),launchReach:cn({min:1,max:10}),skyBandMinY:cn(Ur),skyMaxFill:qe({min:0,max:1})}),limits:gt(E1),preferredThemes:gt(Nn(vl,{max:16}))}),n=>{const e=n;if(e.mode==="fixed"){if(!e.fixed)return"a fixed template requires `fixed`";if(e.pads||e.features)return"a fixed template must not carry `pads` or `features`"}else{if(!e.pads)return"a procedural template requires `pads`";if(e.fixed)return"a procedural template must not carry `fixed`";if(new Set(e.pads.levels).size!==e.pads.levels.length)return"pads.levels must be distinct";if(e.pads.levels.length<e.pads.minDistinctLevels)return"pads.levels must offer at least minDistinctLevels levels"}return null}),hs=n=>`${n.id}@${n.version}`;function A1(n){const e=Od("terrain-block",x1),t=(r,s,a,o)=>{const c=e.find(r);if(!c)throw new bn(`${a}.block`,`${a}.block ${hs(r)} is not a registered terrain-block`);if(o&&!c.surface)throw new bn(`${a}.block`,`${a}.block ${hs(r)} has no surface to carry a pad`);for(const[l,u]of Object.entries(s??{})){const d=c.params[l];if(!d)throw new bn(`${a}.params.${l}`,`${a}.params.${l} is not a parameter of ${hs(r)}`);if(u.min<d.min||u.max>d.max)throw new bn(`${a}.params.${l}`,`${a}.params.${l} must narrow ${hs(r)} (${d.min}..${d.max}), not widen it`);if((u.min-d.min)%d.step!==0||(u.max-d.min)%d.step!==0)throw new bn(`${a}.params.${l}`,`${a}.params.${l} must stay on the step ${d.step} of ${hs(r)}`)}},i=Od("terrain-template",T1,r=>{r.pads?.support.forEach((s,a)=>t(s.block,s.params,`pads.support[${a}]`,!0)),r.features?.forEach((s,a)=>t(s.block,s.params,`features[${a}]`,!1)),r.preferredThemes?.forEach((s,a)=>{if(!n(s))throw new bn(`preferredThemes[${a}]`,`preferredThemes[${a}] ${hs(s)} is not a registered theme`)})});return{blocks:e,templates:i}}const R1={kind:"terrain-block",id:"arch",version:1,weight:1,tags:["gate","cover"],params:{hw:{min:24,max:40,step:4},ph:{min:20,max:32,step:4}},parts:[{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",-1]],add:8},y0:-8,y1:{terms:[["ph",1]]}},{op:"add",x0:{terms:[["hw",1]],add:-8},x1:{terms:[["hw",1]]},y0:-8,y1:{terms:[["ph",1]]}},{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:{terms:[["ph",1]]},y1:{terms:[["ph",1]],add:8}}],requiresClear:[{x0:{terms:[["hw",-1]],add:8},x1:{terms:[["hw",1]],add:-8},y0:0,y1:{terms:[["ph",1]]}}]},C1={kind:"terrain-block",id:"island",version:1,weight:1,tags:["floating"],params:{h:{min:16,max:48,step:2}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:-8,y1:0},{op:"add",x0:{terms:[["h",-1]],add:8},x1:{terms:[["h",1]],add:-8},y0:-16,y1:-8}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},I1={kind:"terrain-block",id:"ledge",version:1,weight:1,tags:["slab","thin"],params:{h:{min:16,max:40,step:2}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:-4,y1:0}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},P1={kind:"terrain-block",id:"pillar",version:1,weight:1,tags:["obstruction"],params:{hw:{min:3,max:8,step:1},ht:{min:16,max:48,step:4}},parts:[{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:-8,y1:{terms:[["ht",1]]}}]},L1={kind:"terrain-block",id:"terrace",version:1,weight:1,tags:["slab","ground"],params:{h:{min:16,max:64,step:2},t:{min:8,max:400,step:4}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:{terms:[["t",-1]]},y1:0}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},D1={kind:"terrain-block",id:"void",version:1,weight:1,tags:["gap"],params:{hw:{min:12,max:48,step:1}},parts:[{op:"clear",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:0,y1:96}]},N1={kind:"terrain-template",id:"cascade",version:1,weight:3,tags:["mirror","terraces"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"mirror",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"ledge",version:1},weight:3,params:{h:{min:20,max:28}}},{block:{id:"terrace",version:1},weight:2,params:{h:{min:24,max:28},t:{min:8,max:16}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:24},t:{min:200,max:400}}},{block:{id:"ledge",version:1},zone:"upper",count:{min:3,max:3},weight:6,params:{h:{min:16,max:24}}},{block:{id:"arch",version:1},zone:"gap",count:{min:0,max:1},weight:4},{block:{id:"pillar",version:1},zone:"gap",count:{min:0,max:1},weight:3}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"meadow",version:2},{id:"snow",version:3}]},U1={kind:"terrain-template",id:"isles",version:1,weight:2,tags:["mirror","floating"],profile:"arena-2",mode:"procedural",pads:{levels:[1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"mirror",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"island",version:1},weight:4,params:{h:{min:20,max:28}}},{block:{id:"ledge",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:22},t:{min:200,max:400}}},{block:{id:"island",version:1},zone:"upper",count:{min:3,max:3},weight:6,params:{h:{min:16,max:18}}},{block:{id:"island",version:1},zone:"sky",count:{min:0,max:1},weight:4,params:{h:{min:16,max:24}}}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"dusk",version:1},{id:"snow",version:3}]},F1={kind:"terrain-template",id:"mesas",version:1,weight:3,tags:["balanced","mesa"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"balanced",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"terrace",version:1},weight:3,params:{h:{min:24,max:28},t:{min:8,max:16}}},{block:{id:"ledge",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:24},t:{min:200,max:400}}},{block:{id:"terrace",version:1},zone:"upper",count:{min:2,max:2},weight:6,params:{h:{min:16,max:24},t:{min:8,max:12}}},{block:{id:"pillar",version:1},zone:"gap",count:{min:1,max:1},weight:4},{block:{id:"ledge",version:1},zone:"upper",count:{min:1,max:1},weight:3,params:{h:{min:16,max:24}}}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"canyon",version:2}]},k1={kind:"terrain-template",id:"ridge",version:1,weight:2,tags:["balanced","ledges"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"balanced",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"ledge",version:1},weight:3,params:{h:{min:20,max:28}}},{block:{id:"island",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:22},t:{min:200,max:400}}},{block:{id:"arch",version:1},zone:"gap",count:{min:1,max:1},weight:5},{block:{id:"ledge",version:1},zone:"upper",count:{min:3,max:3},weight:4,params:{h:{min:16,max:24}}},{block:{id:"pillar",version:1},zone:"lower",count:{min:0,max:1},weight:2}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"dusk",version:1},{id:"meadow",version:2}]},hg=A1(n=>Ii.has(n)),O1=hg.blocks,ug=hg.templates,B1=[L1,I1,C1,P1,R1,D1],z1=[Wm,N1,U1,F1,k1];for(const n of B1)O1.register(n);for(const n of z1)ug.register(n);function H1(n){const e=WM(n),t=e&&ug.find(e);return t?.preferredThemes?.length?t.preferredThemes.map(i=>i.id):null}const yl=.55,G1="#8c8c8c",fg=n=>[n[0]*yl,n[1]*yl,n[2]*yl],xo=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,bl=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055;function Qf(n,e,t){let i=zn(n.color);return e&&(i=Qw(i,zn(e.color),e.strength*(1-n.depth))),Lh(t?fg(i):i)}function V1(n,e){if(e==="light")return n;const t=xo(zn(G1)[0]),i=zn(n);return Lh([bl(xo(i[0])*t),bl(xo(i[1])*t),bl(xo(i[2])*t)])}const _c=80,Zo=3,W1=48,X1=-80,$1=n=>-20-(1-n)*30;function ep(n,e,t){const i=e&&t?t:n,r=[],s=[],a=[];i.forEach((c,l)=>{const u=Th(e&&!t?fg(zn(c.color)):zn(c.color));if(r.push(-.5,.5-c.at,0,.5,.5-c.at,0),s.push(...u,...u),l){const d=(l-1)*2;a.push(d,d+2,d+1,d+1,d+2,d+3)}});const o=new Wt;return o.setAttribute("position",new Pt(r,3)),o.setAttribute("color",new Pt(s,3)),o.setIndex(a),o}function Ml(n,e){const t=n.period??_c,i=t*Zo,r=W1*Zo*2,s=n.floorY??n.baseY-60,a=new Float32Array((r+1)*6),o=[];for(let l=0;l<=r;l++){const u=-i+l/r*2*i;if(a.set([u,s,0,u,Math.max(s,n.baseY+e(u)),0],l*6),l){const d=(l-1)*2;o.push(d,d+1,d+2,d+1,d+3,d+2)}}const c=new Wt;return c.setAttribute("position",new Gn(a,3)),c.setIndex(o),c}function Y1(n){const e=n.period??_c,t=Jo(n.seed),i=n.size??8,r=[],s=[],a=Array.from({length:n.frequency},(l,u)=>({x:(u+t()*.6+.2)/n.frequency*e,y:n.baseY+t()*n.amplitude,w:i*(.7+t()*.6)})),o=(l,u,d,h)=>{const p=r.length/3;r.push(l,u,0);for(let g=0;g<10;g++){const v=g/10*Math.PI*2;r.push(l+Math.cos(v)*d,u+Math.sin(v)*h,0)}for(let g=0;g<10;g++)s.push(p,p+1+g,p+1+(g+1)%10)};for(let l=-Zo;l<Zo;l++)for(const u of a){const d=u.x+l*e;o(d,u.y,u.w/2,u.w*.17),o(d-u.w*.27,u.y-u.w*.04,u.w*.26,u.w*.12),o(d+u.w*.25,u.y-u.w*.03,u.w*.3,u.w*.13)}const c=new Wt;return c.setAttribute("position",new Pt(r,3)),c.setIndex(s),c}function j1(n){const e=n.period??_c;if(n.shape==="clouds")return Y1(n);if(n.shape==="band")return Ml(n,()=>0);const t=Jo(n.seed);if(n.shape==="hills"){const r=[t(),t(),t()],s=[.6,.3,.1];return Ml(n,a=>{let o=0;for(let c=0;c<3;c++)o+=s[c]*Math.sin(2*Math.PI*((c+1)*n.frequency*a/e+r[c]));return n.amplitude*(.5+.5*o)})}const i=Array.from({length:n.frequency*3},()=>.2+t()*.8);return Ml(n,r=>{const s=(r/e%1+1)%1*i.length,a=Math.floor(s),o=s-a;return n.amplitude*(i[a%i.length]*(1-o)+i[(a+1)%i.length]*o)})}class q1{group=new Jt;sky;layers=[];ax=0;ay=0;dark;theme;constructor(e,t=!1){this.dark=t,this.theme=e,this.sky=new at(ep(e.sky.stops,t,e.sky.darkStops),new er({vertexColors:!0,depthWrite:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.position.z=X1,this.group.add(this.sky);for(const i of e.parallax){const r=i.opacity>=1,s=new er({color:Qf(i,e.haze,t),transparent:!r,opacity:i.opacity,depthWrite:r,side:di}),a=new at(j1(i),s);a.frustumCulled=!1,a.position.z=$1(i.depth),a.renderOrder=-5+Math.round(i.depth*4),this.group.add(a),this.layers.push({mesh:a,def:i,k:1-i.depth,period:i.period??_c})}}get layerCount(){return this.layers.length}get meshes(){return[this.sky,...this.layers.map(e=>e.mesh)]}setDark(e){if(e!==this.dark){this.dark=e,this.sky.geometry.dispose(),this.sky.geometry=ep(this.theme.sky.stops,e,this.theme.sky.darkStops);for(const t of this.layers)t.mesh.material.color.set(Qf(t.def,this.theme.haze,e))}}anchor(e){this.ax=e.position.x,this.ay=e.position.y}update(e,t,i){const r=e.position.x,s=e.position.y,a=r-this.ax,o=s-this.ay;this.sky.position.x=r,this.sky.position.y=s,this.sky.scale.x=(e.right-e.left)*1.05,this.sky.scale.y=(e.top-e.bottom)*1.05;for(let c=0;c<this.layers.length;c++){const l=this.layers[c],u=i?0:l.def.drift??0,d=u?(t*u%l.period+l.period)%l.period:0;l.mesh.position.x=a*l.k+d,l.mesh.position.y=o*l.k}}dispose(){this.group.removeFromParent();for(const e of this.meshes)e.geometry.dispose(),e.material.dispose();this.layers.length=0,this.group.clear()}}const tp=1e3,K1=400,J1=-.1,Sl=.15;function Z1(n,e=0){return{left:e-tp,right:e+tp,top:n,bottom:n-K1}}const wl=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,El=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055;function Q1(n,e){const t=zn(V1(n.terrain.bedrock,e));return Lh([El(wl(t[0])*Sl),El(wl(t[1])*Sl),El(wl(t[2])*Sl)])}function eE(n,e,t){return e>=t?t/2:Math.min(Math.max(n,e/2),t-e/2)}function tE(n,e){const t=Math.max(1,e.maxTiers??4)-1;return n.stack==="down"?n.y===void 0||e.maxBottom===void 0||!e.tierPx?t:Math.max(0,Math.min(t,Math.floor((e.maxBottom-n.y)/e.tierPx))):n.y===void 0||e.minTop===void 0||!e.tierPx?t:Math.max(0,Math.min(t,Math.floor((n.y-(n.height??0)-e.minTop)/e.tierPx)))}const nE=(n,e,t)=>Math.abs(n.x-e.x)<(n.width+e.width)/2+t;function iE(n,e,t){const i=t.gap??2,r=t.hysteresis??6,s=Math.max(1,t.maxTiers??4),a=[],o=new Map;for(const c of n){const l={x:eE(c.x,c.width,t.viewWidth),width:c.width,y:c.y,height:c.height,sg:c.stack==="down"?-1:1},u=t.tierPx,d=(f,y)=>{const b=f.y-f.sg*y*u;return[b-(f.height??u),b]},h=(f,y,b)=>{if(!nE(l,f,b))return!1;if(l.y===void 0||f.y===void 0||!u)return f.tier===y;const[M,E]=d(l,y),[R,I]=d(f,f.tier);return M<I&&R<E},p=tE(c,{...t,maxTiers:s}),g=(f,y)=>!a.some(b=>h(b,f,y)),v=e.get(c.id);let m=-1;for(let f=0;f<=p;f++)if(g(f,i)){m=f;break}if(v!==void 0&&v<=p&&v!==m&&g(v,i-r)&&(m<0||v<m||!g(m,i+r))&&(m=v),m<0){let f=1/0;for(let y=0;y<=p;y++){const b=a.filter(M=>h(M,y,i)).length;b<f&&(f=b,m=y)}}a.push({...l,tier:m}),o.set(c.id,{x:l.x,tier:m})}return o}function rE(n,e){const t=[n==="left"?"to the left":n==="right"?"to the right":"",e==="up"?"above":e==="down"?"below":""].filter(Boolean);return t.length?`, off screen ${t.join(" and ")}`:""}function np(n,e,t,i){const r=n<0?"left":n>i.width?"right":null,s=Math.min(i.maxBottom??i.height,i.height),a=Math.min((i.minTop??0)+t,s),o=e<0?"up":e>i.height?"down":null,c=o==="up"?a:o==="down"?s:r?Math.min(Math.max(e,a),s):e,l=(r==="left"?"‹":r==="right"?"›":"")+(o==="up"?"↑":o==="down"?"↓":"");return{edge:r,vert:o,mark:l,y:c,pin:o==="up"||r&&e<a?"top":null,hint:rE(r,o)}}function sE(n){return n.version==="skirmish-1"||n.version==="skirmish-2"||n.version==="skirmish-3"}function aE(n,e){const t=sE(n),i=!t&&Kn(n)?n:null,r=t?"skirmish":i?"volley":"duel",s=t?n.epoch:i?.epoch??0,a=t?n.self:n.seat,o=JSON.stringify(n.version==="skirmish-2"||n.version==="skirmish-3"?[r,n.id,s,n.version,_h(n.version).version]:[r,n.id,s]),c=t?n.members.map((d,h)=>({actorId:d.actorId,lifeId:d.lifeId,teamId:null,label:d.kind==="npc"?`NPC ${h+1}`:null,slotId:d.slotId})):n.seats.map(d=>({actorId:d.actorId,lifeId:"lifeId"in d?d.lifeId:d.actorId===e?a.lifeId:null,teamId:"teamId"in d?d.teamId:null,label:null,slotId:null})),l=t?n.action?.aim?{...n.action.aim,id:n.action.id,actorId:n.action.actorId,lifeId:n.action.lifeId,epoch:n.action.epoch,roundId:n.action.roundId}:null:n.action;let u=null;if(t){const d=n.effect;d&&(u={identity:JSON.stringify([o,d.action.actorId,d.action.lifeId,d.action.roundId,d.action.id]),actionId:d.action.id,actorId:d.action.actorId,aim:d.action.aim?{...d.action.aim}:null,point:d.contact?.point?{x:d.contact.point.x,y:d.contact.point.y}:null,delta:d.delta,motion:d.motion,startedAt:d.startedAt,endsAt:d.endsAt})}else{const d=n.effect;d&&(u={identity:JSON.stringify([o,d.actorId,d.lifeId,"roundId"in d?d.roundId:null,d.actionId]),actionId:d.actionId,actorId:d.actorId,aim:n.action&&n.action.id===d.actionId?{arrow:n.action.arrow,angle:n.action.angle,power:n.action.power,facing:n.action.facing}:null,point:d.contact?.point?{x:d.contact.point.x,y:d.contact.point.y}:null,delta:d.delta,motion:d.motion,startedAt:d.startedAt,endsAt:d.endsAt})}return{format:r,id:n.id,revision:n.revision,epoch:s,worldKey:o,scopeKey:JSON.stringify([o,e,a.lifeId]),planningKey:t?JSON.stringify([o,e,a.lifeId,n.roundId]):SM(n),sharedPlanning:t||!!i,state:n.state,phase:n.phase,terrain:n.terrain,actors:n.actors,seats:c,seat:{canAct:a.canAct,bombReady:a.bombReady,lifeId:a.lifeId},deadlineAt:n.deadlineAt,launchAt:n.launchAt,contactAt:n.contactAt,action:l,effect:u,pressure:i?.preset==="royale-shrink-1"?i.pressure:null,lockedPlan:t?n.locks.find(d=>d.actorId===e)?.plan??null:wM(n,e),tuning:pc(n),wind:n.wind??0,layoutTemplate:t?n.layout?.template??null:null}}function oE(n,e){return!!n&&n.planningKey===e.planningKey&&e.state==="active"&&e.phase==="planning"&&e.seat.canAct}function cE(n,e){return JSON.stringify([n.worldKey,e.actorId,e.lifeId,e.epoch,e.roundId,e.id,n.launchAt])}const _o=16,lE=2,ip=new Set,Tl=Eh,Ut=n=>document.getElementById(n),Ht=(n,e,t=0)=>new O(n,e,t);class dE{constructor(e){this.canvas=e,this.belowWorld.frustumCulled=!1,this.scene.add(this.belowWorld),this.scene.add(this.terrainGroup,this.pressureGroup,this.fxGroup),this.motionQuery=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.reducedMotion=!!this.motionQuery?.matches,this.motionQuery?.addEventListener?.("change",this.onMotionChange),this.flash.visible=!1,this.flash.position.z=.9,this.fxGroup.add(this.flash),this.lastMarker.add(new at(new ch(.4,.62,28),new er({color:"#ff7a45",transparent:!0,opacity:.95,depthTest:!1})),new at(new As(.13,12),new er({color:"#ff7a45",depthTest:!1}))),this.lastMarker.visible=!1,this.lastMarker.renderOrder=5,this.scene.add(this.lastMarker),this.fxGroup.add(this.particleBatch.mesh),this.scene.add(this.hemi),this.sun.position.set(-8,20,12),this.scene.add(this.sun),this.applyBiome(this.basicBiome()),this.camera.position.set(0,8,55),this.camera.lookAt(0,8,0),this.rebuildTerrain(this.terrain);for(const t of["normal","bomb","teleport"])Ut(`combat-arrow-${t}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.arrow=t,this.updateControls())});for(const t of[-1,1])Ut(`combat-face-${t===1?"right":"left"}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim.facing=t,this.updateControls())});for(const t of["angle","power"])Ut(`combat-${t}`).addEventListener("input",()=>{!this.canAim()||this.draw||(this.aim=po({...this.aim,angle:Number(Ut("combat-angle").value),power:Number(Ut("combat-power").value)/100}),this.updateControls())});for(const t of Uf)Ut(t.id).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim=gl(this.aim,t.field,t.delta),this.updateControls())});Ut("combat-fire").addEventListener("click",()=>this.fire()),Ut("combat-overview").addEventListener("click",()=>{if(!(this.draw||this.state?.phase!=="planning")){if(!this.publicV2()){this.frame(!0);return}this.overview=!this.overview,this.updateControls(),this.frame(!0)}}),this.canvas.addEventListener("pointerdown",t=>this.pointerDown(t)),this.canvas.addEventListener("pointermove",t=>this.pointerMove(t)),this.canvas.addEventListener("pointerup",t=>{if(!this.active||this.draw?.id!==t.pointerId)return;this.pointerMove(t);const i=this.draw?.valid;this.endDraw(!i),i&&this.fire()});for(const t of["pointercancel","lostpointercapture"])this.canvas.addEventListener(t,i=>{this.active&&this.draw?.id===i.pointerId&&this.cancelInput()})}canvas;scene=new Qp;camera=new Pa(-24,24,18,-10,.1,150);materials=new Map;terrainGroup=new Jt;belowWorld=new at(new Bs(1,1),new To({roughness:1,flatShading:!0}));chunks=new Map;terrain=pl();terrainKey="";terrainWorld="";terrainMaterial=new To({color:"#ffffff",roughness:1,flatShading:!0,vertexColors:!0});reducedMotion=!1;motionQuery=null;onMotionChange=e=>{this.reducedMotion=e.matches,e.matches&&(this.shake=null)};fxGroup=new Jt;particles=new Fw(Tl);particleBatch=new Kw(Tl);tint=new vw;homeCamera=new O;installedDigest="";arenaFrame=null;frameBoundary=null;hudMode="inline";overview=!1;frameTargets=null;stageHeight="";flash=new at(new As(1,24),new er({color:"#fff2c4",transparent:!0,opacity:0,depthWrite:!1}));flashAge=1;shake=null;fxIdentity="";lastHealth=new Map;resync=!1;lastShot=new nw;lastMarker=new Jt;pressureGroup=new Jt;pressureKey="";actorLabels=new Map;labelKeys=new Map;labelWidths=new Map;labelTiers=new Map;labelHeights=new Map;labelTierPx=_o;labelTierDirty=!1;hudBand={key:"",top:0};labels=document.getElementById("combat-actor-labels");lockAgain=!1;rigs=new Map;state=null;get tuning(){return this.state?.tuning??Rn}get wind(){return this.state?.wind??0}windIndicator=new ig(()=>document.getElementById("scene")?.parentElement);ownId=null;active=!1;draw=null;width=1;height=1;theme="light";biome=$f();palette=jf(this.biome);parallax=null;hemi=new cm("#fff4d8","#62765d",2.6);sun=new dm("#fff4d8",3);biomePin=u1(typeof location>"u"?"":location.search);aim={angle:29,power:.62,facing:1};arrow="normal";busy=!1;online=!1;serverNow=()=>Date.now();guide=document.getElementById("combat-guide");dots=qo(En).map(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","circle");return e.setAttribute("r",String(En.radiusPx)),e.setAttribute("stroke-width",String(En.outlinePx)),this.guide.append(e),e});onShot=()=>{};onDrawing=()=>{};material(e){let t=this.materials.get(e);return t||(t=new To({color:e,roughness:1,flatShading:!0}),this.materials.set(e,t)),t}box(e,t,i,r,s,a,o,c){const l=new at(new zr(s,a,o),this.material(c));return l.position.set(t,i,r),e.add(l),l}beam(e,t,i,r,s){const a=this.box(e,0,0,0,r,1,r,s);return this.updateBeam(a,t,i),a}updateBeam(e,t,i){e.position.copy(t).add(i).multiplyScalar(.5),e.scale.y=t.distanceTo(i),e.quaternion.setFromUnitVectors(Ht(0,1),i.clone().sub(t).normalize())}makeArrow(e){const t=new Jt;this.box(t,-.6,0,0,1.2,.045,.045,"#f3dfaa"),this.box(t,-1.08,0,0,.22,.17,.04,"#e9e6c8");const i=new at(new Ia(.085,.24,4),this.material("#58685d"));return i.rotation.z=-Math.PI/2,i.position.x=-.12,t.add(i),e.add(t),t}makeRig(e){const t=new Jt;this.scene.add(t);const i=this.state?.format==="volley"?this.state.seats.find(h=>h.actorId===this.ownId)?.teamId:null,r=this.state?.format==="volley"?this.state.seats.find(h=>h.actorId===e.id)?.teamId:null,s=this.state?.format==="skirmish"?this.state.seats.find(h=>h.actorId===e.id)?.slotId:null,a=s?Co(s).hex:e.id===this.ownId?"#d19b58":i&&i===r?"#78ad75":"#6e98a0";for(const h of[-.3,.4])this.box(t,h,.47,0,.36,.8,.4,"#38473f");for(const h of[-.36,.46])this.box(t,h,.12,.12,.64,.24,.55,"#4c4938");this.box(t,0,1.53,0,.85,1.5,.6,a),this.box(t,0,1.07,.32,.95,.18,.12,"#6b6845"),this.box(t,0,(jt.head.minY+jt.head.maxY)/2,0,.65,jt.head.maxY-jt.head.minY,.6,"#eac795"),this.box(t,-.13,2.92,-.04,.95,.27,.76,"#4d6e57"),this.box(t,-.26,2.64,-.02,.23,.45,.65,"#4d6e57"),this.box(t,.32,2.65,.32,.08,.08,.07,"#34483c");const o=new Jt;t.add(o);const c=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let h=1;h<c.length;h++)this.beam(o,Ht(...c[h-1]),Ht(...c[h]),.075,"#78523c");const l=new Wt().setFromPoints([Ht(0,-.92),Ht(-.3,0),Ht(0,.92)]);o.add(new fs(l,new Ts({color:"#f1e7bf"})));const u=[this.beam(t,Ht(0,2),Ht(1,2),.23,"#eac795"),this.beam(t,Ht(0,2),Ht(1,2),.22,a),this.beam(t,Ht(0,2),Ht(1,2),.18,"#eac795")],d=this.box(t,0,0,.12,.19,.19,.19,"#eac795");return{root:t,bow:o,string:l,arms:u,hand:d,arrow:this.makeArrow(t),pose:{angle:29,pull:.51},release:0,fx:{lean:0,prevVy:null,landAge:9,landSpeed:0,hitAge:9,feet:null}}}disposeRig(e){this.scene.remove(e.root),e.root.traverse(t=>{if(t instanceof at&&t.geometry.dispose(),t instanceof fs){t.geometry.dispose();const i=t.material;Array.isArray(i)||i.dispose()}})}placeBelowWorld(e){const t=Z1(e.minY,e.minX+e.width*e.cell/2);this.belowWorld.position.set((t.left+t.right)/2,(t.top+t.bottom)/2,J1),this.belowWorld.scale.set(t.right-t.left,t.top-t.bottom,1)}recolorBelowWorld(){this.belowWorld.material.color.set(Q1(this.biome,this.theme))}rebuildTerrain(e,t,i=ip){const r=Tn(e.version),s=r.chunkSize;if(!t){for(const o of this.chunks.values())this.terrainGroup.remove(o),o.geometry.dispose();this.chunks.clear(),this.placeBelowWorld(e)}const a=t??Array.from({length:r.maxChunks},(o,c)=>`${c%r.chunkColumns}:${Math.floor(c/r.chunkColumns)}`);for(const o of a){const c=this.chunks.get(o);c&&(this.terrainGroup.remove(c),c.geometry.dispose(),this.chunks.delete(o));const[l,u]=o.split(":").map(Number),d=[],h=[];let p=[1,1,1];const g=(m,f,y,b)=>{d.push(...m,...f,...y,...m,...y,...b);for(let M=0;M<6;M++)h.push(...p)},v=(m,f)=>m>=0&&f>=0&&m<e.width&&f<e.height&&e.cells[f*e.width+m]===1;for(let m=u*s;m<Math.min((u+1)*s,e.height);m++){const f=e.minY+m*e.cell,y=e.cell;for(let b=l*s;b<Math.min((l+1)*s,e.width);b++)if(v(b,m)){const M=F=>xw(F,m,e.width,e.height,i),E=Of(f+y/2,e.bedrockY,0,this.palette),R=b,I=M(b);for(;b+1<Math.min((l+1)*s,e.width)&&v(b+1,m)&&M(b+1)===I;)b++;p=Th(I?mw(E):E);const x=e.minX+R*y,w=e.minX+(b+1)*y;g([x,f,.18],[w,f,.18],[w,f+y,.18],[x,f+y,.18]),g([w,f,-.8],[x,f,-.8],[x,f+y,-.8],[w,f+y,-.8]);for(let F=R;F<=b;F++){const C=e.minX+F*y;v(F,m+1)||g([C,f+y,.18],[C+y,f+y,.18],[C+y,f+y,-.8],[C,f+y,-.8]),v(F,m-1)||g([C,f,-.8],[C+y,f,-.8],[C+y,f,.18],[C,f,.18])}v(R-1,m)||g([x,f,-.8],[x,f,.18],[x,f+y,.18],[x,f+y,-.8]),v(b+1,m)||g([w,f,.18],[w,f,-.8],[w,f+y,-.8],[w,f+y,.18])}}if(d.length){const m=new Wt;m.setAttribute("position",new Pt(d,3)),m.setAttribute("color",new Pt(h,3)),m.computeVertexNormals();const f=new at(m,this.terrainMaterial);this.chunks.set(o,f),this.terrainGroup.add(f)}}}setSnapshot(e,t,i){const r=aE(e,t),s=this.state;this.state=r,this.ownId=t,this.serverNow=i,this.draw&&(!this.canAim()||!oE(s,r))&&this.cancelInput(),(!s||s.scopeKey!==r.scopeKey)&&(this.lastHealth.clear(),this.cancelInput(),this.aim={angle:29,power:.62,facing:r.actors.find(c=>c.id===t)?.facing??1});const a=r.lockedPlan;a?.kind==="shot"&&a.aim&&(this.aim=po({angle:a.aim.angle,power:a.aim.power,facing:a.aim.facing}),this.arrow=a.aim.arrow),this.syncBiome(r),this.syncTerrain(),this.syncPressure(),this.syncWind(),this.lastShot.noteLocked(a?.kind==="shot"?a.aim:null,this.serverNow()),this.lastShot.observe(r.scopeKey,t,r.effect??this.ownPendingShot(r,t)),s&&s.worldKey!==r.worldKey&&this.clearFx(),this.noteHealth(r);for(const[c,l]of this.rigs)(s?.worldKey!==r.worldKey||s?.seats.find(u=>u.actorId===c)?.lifeId!==r.seats.find(u=>u.actorId===c)?.lifeId)&&(this.disposeRig(l),this.rigs.delete(c));for(const c of r.actors)this.rigs.has(c.id)||this.rigs.set(c.id,this.makeRig(c));for(const[c,l]of this.rigs)r.actors.some(u=>u.id===c)||(this.disposeRig(l),this.rigs.delete(c));const o=!s||s.worldKey!==r.worldKey;this.publicV2()?jw(this.frameBoundary,this.boundaryOf(r))&&this.frame(!1,o):(o||r.phase==="planning"&&(s.planningKey!==r.planningKey||s.phase!=="planning"||s.actors.length!==r.actors.length))&&this.frame(!1,o),this.updateControls()}ownPendingShot(e,t){const i=e.action,r=e.actors.find(o=>o.id===t);if(e.format==="duel"||!i||i.actorId!==t||!r||e.contactAt===null)return null;const s={arrow:i.arrow,angle:i.angle,power:i.power,facing:i.facing},a=e.contactAt;try{const o=NS(this.terrain,e.actors,t,ul(r,s,this.tuning,this.wind));return{actionId:i.id,actorId:t,aim:s,point:{x:o.point.x,y:o.point.y},startedAt:a}}catch{return null}}syncPressure(){const e=this.state,t=e?.pressure??null,i=JSON.stringify(t);if(i===this.pressureKey)return;this.pressureKey=i;for(const s of[...this.pressureGroup.children])this.pressureGroup.remove(s),s instanceof fs&&(s.geometry.dispose(),s.material.dispose());if(!t)return;const r=(s,a,o)=>{for(const c of[s,a]){const l=new Wt().setFromPoints([Ht(c,-8,.5),Ht(c,18,.5)]),u=o?new _x({color:"#f3b747",dashSize:.5,gapSize:.35}):new Ts({color:"#70bb9d"}),d=new fs(l,u);d.computeLineDistances(),this.pressureGroup.add(d)}};r(t.minX,t.maxX,!1),t.warning&&r(t.warning.minX,t.warning.maxX,!0)}clearFx(){this.particles.clear(),this.shake=null,this.flashAge=1,this.flash.visible=!1,this.fxIdentity="",this.lastHealth.clear(),this.particleBatch.clear(),this.tint.clear()}dispose(){this.clearFx(),this.lastMarker.traverse(e=>{e instanceof at&&(e.geometry.dispose(),e.material.dispose())}),this.motionQuery?.removeEventListener?.("change",this.onMotionChange),this.particleBatch.dispose(),this.flash.geometry.dispose(),this.flash.material.dispose();for(const e of this.chunks.values())e.geometry.dispose();this.chunks.clear(),this.terrainMaterial.dispose(),this.scene.remove(this.belowWorld),this.belowWorld.geometry.dispose(),this.belowWorld.material.dispose();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.parallax?.dispose(),this.parallax=null}colorAt=e=>Of(e,this.terrain.bedrockY,0,this.palette);spawnImpact(e){if(this.particles.capacity=this.reducedMotion?cw:Tl,Bw(this.particles,e,Jo(Ff(e.x,e.y,e.count)),this.reducedMotion,this.colorAt),!rg(e))return;this.flash.position.set(e.x,e.y,.9),this.flash.scale.setScalar(e.extent*.6),this.flashAge=0;const t=this.camera.position.x,i=(this.camera.right-this.camera.left)/2,r=Mw(e,Math.abs(e.x-t),i,this.reducedMotion);r>0&&(this.shake={age:0,amplitude:r})}updateFx(e,t,i){const r=e?.effect;if(r&&r.startedAt!==null&&t>=r.startedAt&&r.identity!==this.fxIdentity&&(this.fxIdentity=r.identity,yw(r.startedAt,t))){const a=bw(r.delta.removed,this.terrain);a&&this.spawnImpact(a)}const s=this.tint.due(t);if(s&&this.rebuildTerrain(this.terrain,s),this.particles.step(i),this.particleBatch.update(this.particles.items),this.flashAge<1){this.flashAge+=i/.18;const a=this.flash.material;this.flash.visible=this.flashAge<1,a.opacity=Math.max(0,.85*(1-this.flashAge))}this.shake&&(this.shake.age+=i,this.shake.age>=Ah&&(this.shake=null))}noteHealth(e){if(this.online&&!this.resync)for(const t of Uw(this.lastHealth,e.actors)){const i=this.rigs.get(t);i&&(i.fx.hitAge=0)}this.online&&(this.resync=!1),this.lastHealth=new Map(e.actors.map(t=>[t.id,t.health]))}actorFx(e,t,i,r,s,a,o){const c=e.fx;c.hitAge+=s,c.landAge+=s,Dw(c.hitAge)&&c.feet&&!o?i=c.feet:c.feet={x:i.x,y:i.y};const l=r?.vy??0,u=r?Cw(c.prevVy,l):0;u>0&&!this.reducedMotion&&(c.landAge=0,c.landSpeed=u),u>0&&zw(this.particles,i.x,i.y,u,Jo(Ff(i.x,i.y,Math.round(u*10))),this.reducedMotion),c.prevVy=r?l:null,c.lean=Rw(c.lean,r?Aw(r.vx,l):0,s);const d=this.reducedMotion||o,h=d?0:c.lean+Nw(c.hitAge,a,!1);return e.root.rotation.z=Math.abs(h)<1e-4?0:h,e.root.scale.y=d?1:Pw(c.landAge,c.landSpeed).sy,{feet:i}}setLockAgain(e){this.lockAgain=e,this.updateControls()}syncTerrain(){if(!this.state)return;const e=this.state,t=e.effect;let i=`${e.worldKey}:${e.terrain.version}:${e.terrain.revision}`;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt&&(i+=`:${t.identity}`),i===this.terrainKey)return;let s=Ym(e.terrain),a=ip;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt){s={...s,cells:s.cells.slice()};for(const c of t.delta.removed)s.cells[c]=0;this.serverNow()-t.startedAt<Bf&&(a=new Set(t.delta.removed))}if(this.terrainWorld!==e.worldKey||this.terrain.version!==s.version)this.rebuildTerrain(s,void 0,a);else{const c=Tn(s.version),l=[];for(let d=0;d<s.cells.length;d++)s.cells[d]!==this.terrain.cells[d]&&l.push(d);const u=_m(l,s.width,c.chunkSize);this.rebuildTerrain(s,vm([...u,...this.tint.release()],c.chunkColumns,c.chunkRows),a)}{const c=Tn(s.version);this.tint.set(_w(a,s.width,c.chunkSize,c.chunkColumns,c.chunkRows),t&&t.startedAt!==null?t.startedAt+Bf:0)}this.terrain=s,this.terrainKey=i,this.terrainWorld=e.worldKey,this.installedDigest=iw(s)}clearSnapshot(){this.cancelInput(),this.lastShot.clear(),this.lastMarker.visible=!1,this.state=null,this.windIndicator.hide(),this.ownId=null,this.lockAgain=!1,this.labels.replaceChildren(),this.actorLabels.clear(),this.labelKeys.clear(),this.labelWidths.clear(),this.labelHeights.clear(),this.labelTiers.clear(),this.labelTierPx=_o,this.labelTierDirty=!1,this.syncPressure();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.terrainKey="",this.terrainWorld="",this.installedDigest="",this.arenaFrame=null,this.frameBoundary=null,this.frameTargets=null,this.overview=!1,this.setStageHeight(null),this.clearFx(),this.applyBiome(this.basicBiome()),this.rebuildTerrain(pl()),this.terrain=pl(),this.frame(),this.updateControls()}setTransport(e,t){e||(this.lastHealth.clear(),this.resync=!0),this.online=e,this.busy=t,this.canAim()||this.cancelInput(),this.updateControls()}syncWind(){if(!this.active||!this.state){this.windIndicator.hide();return}this.windIndicator.update(this.state.wind,rr(this.state.tuning))}activate(){this.active=!0,this.syncWind(),this.updateControls(),this.frame()}deactivate(){this.cancelInput(),this.active=!1,this.setStageHeight(null),this.windIndicator.hide(),this.guide.style.visibility="hidden",this.labels.replaceChildren(),this.actorLabels.clear(),this.labelKeys.clear(),this.labelWidths.clear(),this.labelHeights.clear(),this.labelTiers.clear(),this.labelTierPx=_o,this.labelTierDirty=!1}setTheme(e){this.theme=e,this.terrainMaterial.color.set(e==="dark"?"#8c8c8c":"#ffffff"),this.recolorBelowWorld(),this.parallax?.setDark(e==="dark")}basicBiome(){return this.biomePin?Ii.latest(this.biomePin):$f()}syncBiome(e){const t=e.format==="skirmish"&&Tn(e.terrain.version).version==="arena-2";this.applyBiome(t?h1(e.worldKey,{pin:this.biomePin,preferred:H1(e.layoutTemplate)}):this.basicBiome())&&(this.terrainWorld="")}applyBiome(e){if(e===this.biome&&this.parallax)return!1;this.biome=e,this.palette=jf(e),this.recolorBelowWorld(),this.parallax?.dispose(),this.parallax=new q1(e,this.theme==="dark"),this.scene.add(this.parallax.group),this.parallax.anchor(this.camera);const t=e.light;this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.sun.color.set(t.sun),this.sun.intensity=t.sunIntensity;const i=e.ui??{},r=(s,a,o)=>{o?s.style.setProperty?.(a,o):s.style.removeProperty?.(a)};return r(this.labels,"--label-ink",i.labelInk),r(this.labels,"--label-bg",i.labelBg),r(this.guide,"--guide-fill",i.guideFill),r(this.guide,"--guide-stroke",i.guideStroke),!0}resize(e,t){this.cancelInput(),this.width=e,this.height=t,this.guide.setAttribute("viewBox",`0 0 ${e} ${t}`),this.frame()}setHudMode(e){e!==this.hudMode&&(this.hudMode=e,this.state&&this.publicV2()&&this.frame())}publicV2(){return this.state?.format==="skirmish"&&Tn(this.terrain.version).version==="arena-2"}boundaryOf(e){const i=Yw(this.publicBounds(e),this.width,this.height,wr(this.width,this.height,this.hudMode),jt)?e.phase==="planning"||!this.frameBoundary?.focus?e.planningKey:this.frameBoundary.focus:"";return{worldKey:e.worldKey,profile:this.terrain.version,epoch:e.epoch,width:this.width,height:this.height,mode:this.hudMode,focus:i}}publicBounds(e){return(!this.arenaFrame||this.arenaFrame.worldKey!==e.worldKey)&&(this.arenaFrame={worldKey:e.worldKey,bounds:Hw(Tn(this.terrain.version).bounds,e.actors.filter(t=>!t.eliminated).map(t=>({x:t.feet.x,y:t.feet.y})),jt,Gf(this.tuning,jt.nock.x,En))}),this.arenaFrame.bounds}setStageHeight(e){const t=e===null?"":`${e}px`;if(t===this.stageHeight)return;this.stageHeight=t;const i=this.canvas.parentElement?.style;i&&(t?i.setProperty?.("--public-stage-h",t):i.removeProperty?.("--public-stage-h"))}frameArena(e){const t=this.publicBounds(e),i=wr(this.width,this.height,this.hudMode),r=this.boundaryOf(e).focus??"";if(!r)this.frameTargets=null;else if(this.frameTargets?.key!==r){const o=e.actors.filter(u=>!u.eliminated),c=o.find(u=>u.id===this.ownId),l=u=>({x:u.feet.x,y:u.feet.y});this.frameTargets={key:r,targets:Ww(c?l(c):null,o.filter(u=>u!==c).map(l),jt,Gf(this.tuning,jt.nock.x,En))}}const s=this.frameTargets?.targets??[],a=$w(t,this.width,this.height,i,jt,s,this.overview);this.setStageHeight(this.hudMode==="inline"?Xw(t,this.width,this.hudMode,jt,s):null),Object.assign(this.camera,{left:-a.halfWidth,right:a.halfWidth,top:a.halfHeight,bottom:-a.halfHeight}),this.camera.position.set(a.centerX,a.centerY,55),this.camera.lookAt(a.centerX,a.centerY,0),this.camera.updateProjectionMatrix(),this.parallax?.anchor(this.camera),this.frameBoundary=this.boundaryOf(e)}frame(e=!1,t=!1){if(this.draw)return;if(this.state&&this.publicV2()){this.frameArena(this.state);return}if(this.arenaFrame=null,this.frameBoundary=null,this.frameTargets=null,this.setStageHeight(null),!t&&this.state&&this.state.phase!=="planning"&&this.state.state==="active")return;const i=this.state?.actors??[],r=jt.nock.x+(this.tuning.shotMinSpeed+this.tuning.shotExtraSpeed)*(En.start+En.duration)+1,s=e||!i.length?-32:Math.min(...i.map(m=>m.feet.x))-r,a=e||!i.length?32:Math.max(...i.map(m=>m.feet.x))+r,o=e?-8:Math.min(0,...i.map(m=>m.feet.y))-2,c=e?18:Math.max(9,...i.map(m=>m.feet.y+jt.height+4)),l=this.state?.sharedPlanning?Math.min(.25,2*(En.radiusPx+En.outlinePx)/this.width):0,u=this.width/this.height,d=Math.max(a-s,(c-o)*u)/(1-l),h=d/u,p=Tn(this.terrain.version).bounds,g=kd(p.minX,p.maxX,d,(s+a)/2),v=(o+c)/2;Object.assign(this.camera,{left:-d/2,right:d/2,top:h/2,bottom:-h/2}),this.camera.position.set(g,v,55),this.camera.lookAt(g,v,0),this.camera.updateProjectionMatrix(),this.parallax?.anchor(this.camera)}canAim(){return this.active&&this.online&&!this.busy&&!!this.state?.seat.canAct&&this.state.deadlineAt!==null&&this.serverNow()<this.state.deadlineAt}get hasRoom(){return this.state!==null}get drawing(){return!!this.draw}cancelInput(){this.endDraw(!0)}endDraw(e){if(!this.draw)return;const t=this.draw;this.draw=null,e&&(this.aim=t.previous),this.canvas.hasPointerCapture(t.id)&&this.canvas.releasePointerCapture(t.id),Ut("combat-drag-marker").hidden=!0,this.onDrawing(!1),this.updateControls()}pointerDown(e){if(!this.active)return;if(this.draw){e.pointerId!==this.draw.id&&this.cancelInput();return}if(!this.canAim()||!e.isPrimary||e.button!==0)return;e.preventDefault();const t=this.canvas.getBoundingClientRect();this.draw={id:e.pointerId,x:e.clientX,y:e.clientY,width:t.width,height:t.height,previous:{...this.aim},valid:!1},this.canvas.setPointerCapture(e.pointerId),this.canvas.focus({preventScroll:!0});const i=Ut("combat-drag-marker");i.style.left=`${e.clientX-t.left}px`,i.style.top=`${e.clientY-t.top}px`,i.hidden=!1,this.onDrawing(!0),this.updateControls()}pointerMove(e){if(!this.active||this.draw?.id!==e.pointerId)return;const{x:t,y:i,width:r,height:s}=this.draw,a=e.clientX-t,o=e.clientY-i,c=this.state?.format==="skirmish"?yM(a,o,r,s):vM(a,o,r,s,this.aim.facing);this.draw.valid=!!c,c&&(this.aim=po({facing:this.aim.facing,...c})),this.updateControls()}keydown(e){if(this.active){if(e.code==="Escape"){this.cancelInput();return}!this.canAim()||this.draw||(e.code==="Space"?(e.preventDefault(),e.repeat||this.fire()):["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.aim=gl(gl(this.aim,"angle",e.code==="ArrowLeft"?-1:e.code==="ArrowRight"?1:0),"power",e.code==="ArrowUp"?2:e.code==="ArrowDown"?-2:0),this.updateControls()))}}fire(){if(!this.canAim()||this.draw||this.arrow==="bomb"&&!this.state?.seat.bombReady)return;const e=po(this.aim);this.onShot(this.arrow,e)}updateControls(){Ut("combat-fire").textContent=this.state?.sharedPlanning?this.lockAgain?"Lock again":"Lock arrow":"Fire arrow";const e=!this.canAim()||!!this.draw;for(const r of["fire","angle","power","face-left","face-right","arrow-normal","arrow-bomb","arrow-teleport",...Uf.map(s=>s.id.slice(7))])Ut(`combat-${r}`).disabled=e||r==="arrow-bomb"&&!this.state?.seat.bombReady;for(const r of["normal","bomb","teleport"])Ut(`combat-arrow-${r}`).setAttribute("aria-pressed",String(this.arrow===r));for(const r of[-1,1])Ut(`combat-face-${r===1?"right":"left"}`).setAttribute("aria-pressed",String(this.aim.facing===r));Ut("combat-angle").value=QS(this.aim.angle),Ut("combat-power").value=ew(this.aim.power),Ut("combat-angle-value").textContent=tg(this.aim.angle),Ut("combat-power-value").textContent=ng(this.aim.power);const t=this.lastShot.shot?.aim,i=Ut("combat-last-shot");i.hidden=!t,i.textContent=t?tw(t):"",Ut("combat-bomb-status").textContent=this.state?.seat.bombReady?"Bomb ready":"Bomb reloads after your next personal opportunity.",Ut("combat-overview").disabled=!!this.draw||this.state?.phase!=="planning",this.syncOverviewPressed()}syncOverviewPressed(){const e=Ut("combat-overview");this.publicV2()?e.setAttribute("aria-pressed",String(this.overview)):e.removeAttribute("aria-pressed")}labelView(){return!this.publicV2()||!(this.width>0)||!(this.height>0)?null:{width:this.width,height:this.height,minTop:this.labelMinTop(),maxBottom:this.height-wr(this.width,this.height,this.hudMode).bottom}}labelMinTop(){const e=this.hudBottom();return this.hudMode==="expanded"&&this.width>0&&this.height>0?Math.max(e,wr(this.width,this.height,"expanded").top):e}hudBottom(){const e=document.getElementById("arena-hud");if(!e||e.hidden||typeof this.labels.getBoundingClientRect!="function")return 0;const t=["arena-priority","arena-clock"].map(r=>document.getElementById(r)),i=`${this.width}x${this.height}|${t.map(r=>r?.childElementCount??0).join()}`;if(this.hudBand.key!==i){const r=this.labels.getBoundingClientRect().top;let s=0;for(const a of t){if(!a||a.hidden||typeof a.getBoundingClientRect!="function")continue;const o=a.getBoundingClientRect();o.height>0&&(s=Math.max(s,o.bottom-r))}this.hudBand={key:i,top:s}}return this.hudBand.top}render(e,t){if(!this.active)return;const i=this.state,r=this.serverNow();this.syncTerrain(),this.updateFx(i,r,t);let s;const a=i?.effect&&i.effect.startedAt!==null?bM(i.effect.motion,i.effect.startedAt,r):null;for(const b of i?.actors??[]){const M=this.rigs.get(b.id),E=a?.find(B=>B.actorId===b.id)?.feet??b.feet,R=i?.action?.actorId===b.id?i.action:null,I=b.id===this.ownId&&!R,x=R??(I?this.aim:{angle:29,power:.62,facing:b.facing}),w=this.actorFx(M,b,E,i?.effect&&i.effect.startedAt!==null?Ew(i.effect.motion,i.effect.startedAt,r,b.id):null,t,x.facing,!!R);M.root.position.set(w.feet.x,w.feet.y,0),M.root.scale.x=x.facing,M.root.visible=!b.eliminated,I&&(s=b),M.pose=Jm(M.pose,{angle:x.angle,pull:.2+x.power*.5},t),M.release+=((R?1:0)-M.release)*(1-Math.exp(-18*t));const F=jo(M.pose,M.release),C=(B,G=.12)=>Ht(B.x+7.72,B.y-.08,G),U=M.pose.angle*Math.PI/180;M.bow.position.copy(C(F.bow)),M.bow.rotation.z=U;const z=M.string.attributes.position;z.setXYZ(1,(F.nock.x-F.bow.x)*Math.cos(U)+(F.nock.y-F.bow.y)*Math.sin(U),0,0),z.needsUpdate=!0,this.updateBeam(M.arms[0],Ht(.02,2.22,.42),C({x:F.bow.x+Math.cos(U)*.37,y:F.bow.y+Math.sin(U)*.37})),this.updateBeam(M.arms[1],Ht(-.23,2.22,.45),C(F.elbow,.28)),this.updateBeam(M.arms[2],C(F.elbow,.28),C(F.hand)),M.hand.position.copy(C(F.hand));const W=C({x:F.nock.x+Math.cos(U)*1.2,y:F.nock.y+Math.sin(U)*1.2});if(M.arrow.position.copy(W),M.arrow.rotation.z=U,M.arrow.visible=!0,R&&i?.launchAt!==null&&i?.launchAt!==void 0&&r>=i.launchAt){const B=ul(b,x,this.tuning,this.wind),G=Math.max(0,(Math.min(r,i.contactAt??1/0)-i.launchAt)/1e3),k={tip:{x:b.feet.x+W.x*x.facing,y:b.feet.y+W.y},angle:x.facing===1?U:Math.PI-U},Z=cE(i,R);M.flightId!==Z&&(M.flightId=Z,M.held=k);const K=la(B,G,M.held??k);M.arrow.position.set((K.position.x-E.x)*x.facing,K.position.y-E.y,.12),M.arrow.rotation.z=x.facing===1?K.angle:Math.PI-K.angle,M.arrow.visible=i.phase!=="settling"}}if(this.guide.style.visibility=s&&this.canAim()&&(!this.draw||this.draw.valid)?"visible":"hidden",s){const b=this.rigs.get(s.id),M=ul(s,this.aim,this.tuning,this.wind),E=b.pose.angle*Math.PI/180,R=jo(b.pose),I={tip:{x:s.feet.x+(R.nock.x+7.72+Math.cos(E)*1.2)*this.aim.facing,y:s.feet.y+R.nock.y-.08+Math.sin(E)*1.2},angle:this.aim.facing===1?E:Math.PI-E};qo(En).forEach((x,w)=>{const F=la(M,x,I).position,C=Ht(F.x,F.y,.1).project(this.camera);this.dots[w].setAttribute("cx",String((C.x+1)*this.width/2)),this.dots[w].setAttribute("cy",String((1-C.y)*this.height/2))})}for(const[b,M]of this.actorLabels)i?.actors.some(E=>E.id===b)||(M.remove(),this.actorLabels.delete(b),this.labelKeys.delete(b),this.labelWidths.delete(b),this.labelHeights.delete(b),this.labelTiers.delete(b),this.labelTierDirty=!0);const o=this.width<640,c=i?.sharedPlanning?[...new Set(i.seats.map(b=>b.teamId).filter(b=>b!==null))]:[],l=[],u=this.labelView();if((i?.actors??[]).forEach((b,M)=>{let E=this.actorLabels.get(b.id);E||(E=document.createElement("span"),this.actorLabels.set(b.id,E),this.labels.append(E));const R=a?.find(K=>K.actorId===b.id)?.feet??b.feet,I=Ht(R.x,R.y+jt.height+.4,.2).project(this.camera),x=i.seats.find(K=>K.actorId===b.id),w=x&&"teamId"in x&&typeof x.teamId=="string"?` · ${String.fromCharCode(65+c.indexOf(x.teamId))}`:"",F=b.id===this.ownId,C=x?.slotId?Co(x.slotId).symbol:"",U=`${F?"You":x?.label??`#${M+1}`}${w}${o?"":` · ${b.eliminated?"out":b.health}`}`,z=(1-I.y)*this.height/2,W=u?np((I.x+1)*this.width/2,z,0,u).hint:"",B=`${F}|${C}|${U}|${W}`;if(this.labelKeys.get(b.id)!==B){if(E.className="combat-actor-label",E.dataset.actorId=b.id,E.dataset.own=String(F),E.style.zIndex=F?"1":"",x?.slotId?(E.style.borderLeft=`5px solid ${Co(x.slotId).hex}`,E.dataset.slot=x.slotId,E.dataset.symbol=C):(E.style.borderLeft="",delete E.dataset.slot,delete E.dataset.symbol),W){const he=document.createElement("span");he.className="combat-label-hint",he.textContent=W,E.replaceChildren(U,he)}else E.textContent=U;delete E.dataset.mark,E.dataset.offscreen="false";const K=E.offsetWidth;this.labelWidths.set(b.id,K),this.labelHeights.set(b.id,E.offsetHeight),this.labelTierDirty=!0,K>0&&this.labelKeys.set(b.id,B)}const G=u?np((I.x+1)*this.width/2,z,this.labelHeights.get(b.id)??0,u):null,k=G?.y??z;G?.mark?(E.dataset.mark=G.mark,E.dataset.edge=G.edge??"",E.dataset.offscreen="true"):(delete E.dataset.mark,delete E.dataset.edge,E.dataset.offscreen="false");const Z={id:b.id,x:(I.x+1)*this.width/2,width:this.labelWidths.get(b.id)??0,y:k,height:this.labelHeights.get(b.id)??0,stack:G?.pin==="top"?"down":"up"};(F?l.unshift.bind(l):l.push.bind(l))({id:b.id,label:E,y:k,box:Z})}),this.labelTierDirty){const b=Math.max(0,...this.labelHeights.values());this.labelTierPx=b>0?b+lE:_o,this.labelTierDirty=!1}const d=this.labelTierPx,h=iE(l.map(b=>b.box),this.labelTiers,{viewWidth:this.width,tierPx:d,minTop:u?.minTop??this.hudBottom(),maxBottom:u?.maxBottom});this.labelTiers=new Map([...h].map(([b,M])=>[b,M.tier]));for(const b of l){const M=h.get(b.id);b.label.style.left=`${M.x}px`,b.label.style.top=`${b.y+(b.box.stack==="down"?1:-1)*M.tier*d}px`}const p=this.lastShot.shot;this.lastMarker.visible=!!p&&this.lastShot.markerVisible(r),p&&this.lastMarker.position.set(p.impact.x,p.impact.y,.7),e.setClearColor(this.theme==="dark"?"#202f36":"#dce8df");const g=this.shake?ww(this.shake.age,this.shake.amplitude):null,v=this.homeCamera.copy(this.camera.position);g&&this.camera.position.set(v.x+g.x,v.y+g.y,v.z),this.parallax?.update(this.camera,performance.now()/1e3,this.reducedMotion),e.render(this.scene,this.camera),this.camera.position.copy(v);const m=this.ownId?this.rigs.get(this.ownId):null,f=i?.format==="skirmish"&&i.action?.actorId===this.ownId?i.action:null,y=m?{actorId:this.ownId,lifeId:i?.seat.lifeId,mirror:m.root.scale.x,bow:m.bow.getWorldPosition(Ht(0,0)),arrow:{...m.arrow.getWorldPosition(Ht(0,0)),visible:m.root.visible&&m.arrow.visible},action:f?{id:f.id,actorId:f.actorId,lifeId:f.lifeId,epoch:f.epoch,roundId:f.roundId,at:r,launchAt:i?.launchAt,contactAt:i?.contactAt}:null}:null;this.canvas.dataset.combat=JSON.stringify({revision:i?.revision,format:i?.format,epoch:i?.epoch,worldKey:i?.worldKey,state:i?.state,phase:i?.phase,actors:i?.actors,terrainRevision:i?.terrain.revision,terrainDigest:this.installedDigest,ownId:this.ownId,aim:this.aim,drawing:!!this.draw,view:[this.camera.left,this.camera.right,this.camera.top,this.camera.bottom],chunks:this.chunks.size,renderedOwn:y})}}const Al=Object.freeze({commentChars:500,maxRound:1e5,idChars:80}),ya=Object.freeze([{id:"arrowDamage",label:"Arrow damage"},{id:"bombDamage",label:"Bomb damage and reach"},{id:"speedOfDeath",label:"How fast you died"},{id:"knockback",label:"Knockback"},{id:"groundDestruction",label:"Ground destruction"},{id:"aimingDifficulty",label:"Aiming difficulty"}]),rp=Object.freeze(["too-little","just-right","too-much"]),hE=Object.freeze({"too-little":"Too little","just-right":"Just right","too-much":"Too much"});function pg(n){const e=Object.fromEntries(ya.map(t=>[t.id,{tooLittle:0,justRight:0,tooMuch:0}]));for(const t of n)for(const i of ya){const r=t[i.id];r==="too-little"?e[i.id].tooLittle++:r==="just-right"?e[i.id].justRight++:r==="too-much"&&e[i.id].tooMuch++}return e}const uE=Object.freeze({arrowDamage:{tooMuch:[{field:"directBodyDamage",delta:-10},{field:"directHeadDamage",delta:-10}],tooLittle:[{field:"directBodyDamage",delta:10},{field:"directHeadDamage",delta:10}]},bombDamage:{tooMuch:[{field:"blastMidDamage",delta:-2},{field:"blastFarDamage",delta:-1},{field:"bombRadius",delta:-.25}],tooLittle:[{field:"blastMidDamage",delta:2},{field:"blastFarDamage",delta:1},{field:"bombRadius",delta:.25}]},speedOfDeath:{tooMuch:[{field:"blastNearDamage",delta:-5},{field:"impactThreshold",delta:1}],tooLittle:[{field:"blastNearDamage",delta:5},{field:"impactThreshold",delta:-1}]},knockback:{tooMuch:[{field:"directKnockbackHorizontal",delta:-1},{field:"directKnockbackUp",delta:-1},{field:"bombHorizontalImpulse",delta:-1},{field:"bombUpImpulse",delta:-1}],tooLittle:[{field:"directKnockbackHorizontal",delta:1},{field:"directKnockbackUp",delta:1},{field:"bombHorizontalImpulse",delta:1},{field:"bombUpImpulse",delta:1}]},groundDestruction:{tooMuch:[{field:"chipRadius",delta:-.25},{field:"craterRadius",delta:-.25}],tooLittle:[{field:"chipRadius",delta:.25},{field:"craterRadius",delta:.25}]},aimingDifficulty:{tooMuch:[{field:"shotGravity",delta:-1}],tooLittle:[{field:"shotGravity",delta:1}]}}),sa=Object.keys(Da),fE=(n,e)=>sa.every(t=>n[t]===e[t]),pE=n=>Math.round(n*1e4)/1e4;function mE(n,e){const t=Da[n],i=Math.min(t.max,Math.max(t.min,pE(e)));return t.integer?Math.round(i):i}function gE(n){const e=Object.hasOwn(ti,n.id)?ti[n.id]:void 0;return e&&fE(e,n)?e:Rn}const xE=3;function _E(n,e,t){const i=pg(e),r=Object.fromEntries(sa.map(p=>[p,n[p]])),s=[],a=new Map;for(const p of ya){const g=i[p.id],v=g.tooLittle+g.justRight+g.tooMuch,m=g.tooMuch-g.tooLittle;if(m===0||Math.abs(m)*2<v||t!==void 0&&t>=xE&&v<2)continue;const f=m>0?"too-much":"too-little";s.push({question:p.id,direction:f});for(const y of uE[p.id][m>0?"tooMuch":"tooLittle"])r[y.field]=mE(y.field,r[y.field]+y.delta),a.has(y.field)||a.set(y.field,p.id)}r.blastMidDamage=Math.min(r.blastMidDamage,r.blastNearDamage),r.blastFarDamage=Math.min(r.blastFarDamage,r.blastMidDamage),r.shotMinSpeed+r.shotExtraSpeed>40&&(r.shotExtraSpeed=40-r.shotMinSpeed);const o={...r,id:"suggested"},c=sa.filter(p=>o[p]!==n[p]).map(p=>({field:p,from:n[p],to:o[p],question:a.get(p)}));if(!c.length)return{reasons:s,changes:c,override:null,profile:n};fc(o);const l=gE(n),u={base:l.id};for(const p of sa)o[p]!==l[p]&&(u[p]=o[p]);const d=JSON.stringify(u),h=Tm(d);if(!sa.every(p=>h[p]===o[p]))throw new RangeError("Suggested tuning did not round-trip.");return{reasons:s,changes:c,override:d,profile:h}}const Qo=n=>n.replace(/([A-Z])/g," $1").toLowerCase().replace(/^./,e=>e.toUpperCase()),Uh=n=>({key:n,label:Qo(n),bound:n==="windMax"?wm:Da[n]}),vE=Object.freeze(["chipRadius","windMax"].map(Uh)),yE=Object.freeze(Gs.filter(n=>n!=="chipRadius"&&n!=="windMax").map(Uh)),mg=Object.freeze(Object.keys(ti)),Qn=(n,e)=>e==="windMax"?rr(n):n[e];function bE(n){let e=Rn.id,t=1/0,i=1/0;for(const r of mg){const s=ti[r];let a=0,o=0;for(const c of Gs){const l=Math.abs(Qn(s,c)-Qn(n,c));if(l===0)continue;const{min:u,max:d}=Uh(c).bound;a++,o+=d>u?l/(d-u):0}(a<t||a===t&&o<i)&&(e=r,t=a,i=o)}return e}function gg(n){const e=Object.hasOwn(ti,n)?ti[n]:Rn;return Object.fromEntries(Gs.map(t=>[t,Qn(e,t)]))}function ME(n,e){const t=gg(n),i={};for(const r of Gs){const s=(e[r]??"").trim();if(s==="")throw new Error(`Enter a value for ${Qo(r).toLowerCase()}.`);const a=Number(s);if(!Number.isFinite(a))throw new Error(`${Qo(r)} must be a number.`);a!==t[r]&&(i[r]=a)}try{gh(n,i)}catch(r){throw new Error(r instanceof RangeError?r.message.replace(/^Invalid tuning profile: /,""):"Those settings are not valid.")}return{kind:"tuning",preset:n,overrides:i}}function SE(n){return`${n.id.startsWith("custom-")?"Custom settings":`Preset ${n.id}`} · chip radius ${Qn(n,"chipRadius")} · wind ${Qn(n,"windMax")===0?"calm":`up to ${Qn(n,"windMax")}`}`}const sp=n=>Vo(pc(n));let xg=null;const _g="archery.suggestedTuning";function wE(n,e){xg=n;try{e?.setItem(_g,n??"")}catch{}}function ap(n){let e=xg;if(e===null)try{e=n?.getItem(_g)??null}catch{e=null}if(!e)return null;try{const t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t))return null;const{base:i,...r}=t;return typeof i!="string"?null:(gh(i,r),{kind:"tuning",preset:i,overrides:r})}catch{return null}}function EE(n,e,t){return n!==null&&n.roomId===e.roomId&&n.digest!==e.digest}function op(n,e,t,i){return i?t?e:null:n}function cp(n,e,t){return n==="skip"?"Finishing the last action…":n==="error"?"":e!==null&&e===t?"No changes":"Saved"}function TE(n,e){let t;try{t=gh(n.preset,n.overrides)}catch{return null}const i=Gs.filter(s=>Qn(t,s)!==Qn(e,s));return i.length?`Apply suggestion: ${i.slice(0,3).map(s=>s==="windMax"?`wind up to ${Qn(t,s)}`:`${Qo(s).toLowerCase()} ${Qn(t,s)}`).join(", ")}${i.length>3?` +${i.length-3} more`:""}`:null}const AE=1e4,RE=30,CE=8e3,IE=1500,lp="archery.feedback.v1.",Ce=n=>document.getElementById(n),Ai=(n,e="",t="")=>{const i=document.createElement(n);return e&&(i.textContent=e),t&&(i.className=t),i};function PE(){try{return sessionStorage}catch{return null}}class gs{guest;store;target=null;arena=null;finished=null;tuning=Rn;answers={};rating=null;sent=!1;lastPrivateId=null;pollTimer=null;polls=0;seenRounds=new Map;roundTimer=null;roundTarget=null;buttons=new Map;override=null;constructor(e,t=PE()){this.guest=e,this.store=t,this.buildQuestions(),Ce("feedback-form").addEventListener("submit",r=>{r.preventDefault(),this.sendSurvey()}),Ce("feedback-skip").addEventListener("click",()=>this.closeSheet(!0)),Ce("feedback-close").addEventListener("click",()=>this.closeSheet(this.target?.type!=="public")),Ce("feedback-reopen").addEventListener("click",()=>{this.finished&&this.openSheet(this.finished,!0)}),Ce("feedback-copy").addEventListener("click",()=>{this.copyOverride()}),Ce("skirmish-feedback").addEventListener("click",()=>{this.arena&&this.openPublic(this.arena,!0)});const i=Ce("feedback-comment");i.maxLength=Al.commentChars,i.addEventListener("input",()=>{Ce("feedback-count").textContent=`${i.value.length}/${Al.commentChars}`});for(const r of["up","down"])Ce(`feedback-round-${r}`).addEventListener("click",()=>{this.sendRound(r)});Ce("feedback-round-dismiss").addEventListener("click",()=>this.hideRound())}static key(e){return e.type==="private"?e.roomId:`public:${e.arenaId}`}recorded(e){try{return this.store?.getItem(lp+e)??null}catch{return null}}record(e,t){try{(t==="sent"||this.recorded(e)!=="sent")&&this.store?.setItem(lp+e,t)}catch{}}buildQuestions(){const e=Ce("feedback-questions");for(const i of ya){const r=Ai("div","","feedback-question");r.setAttribute("role","group"),r.setAttribute("aria-label",i.label),r.append(Ai("p",i.label,"feedback-label"));const s=Ai("div","","feedback-choices");for(const a of rp){const o=Ai("button",hE[a]);o.type="button",o.setAttribute("aria-pressed","false"),o.dataset.question=i.id,o.dataset.answer=a,o.addEventListener("click",()=>this.choose(i.id,a)),this.buttons.set(`${i.id}:${a}`,o),s.append(o)}r.append(s),e.append(r)}const t=Ce("feedback-rating");for(let i=1;i<=5;i++){const r=Ai("button",String(i));r.type="button",r.setAttribute("aria-pressed","false"),r.setAttribute("aria-label",`${i} out of 5`),r.addEventListener("click",()=>{this.rating=this.rating===i?null:i;for(const[s,a]of[...t.children].entries())a.setAttribute("aria-pressed",String(this.rating===s+1))}),t.append(r)}}choose(e,t){this.answers[e]===t?delete this.answers[e]:this.answers[e]=t;for(const i of rp)this.buttons.get(`${e}:${i}`).setAttribute("aria-pressed",String(this.answers[e]===i))}syncPrivate(e){const t=e?.roomId??null;if(t!==this.lastPrivateId){for(const i of[...this.seenRounds.keys()])i.startsWith("private:")&&this.seenRounds.delete(i);this.lastPrivateId=t}!e||e.state.state!=="finished"?(this.target?.type==="private"&&this.closeSheet(!1),this.finished=null,this.updateReopen()):this.finished?.roomId!==e.roomId?(this.finished=e,this.recorded(e.roomId)===null?this.openSheet(e,!1):this.updateReopen()):this.finished=e,e&&e.state.state==="active"&&this.observeRounds(`private:${e.roomId}:${e.state.epoch??0}`,{type:"private",roomId:e.roomId},e.state.epoch??0,e.state.completedRounds)}syncPublic(e){if(!e){for(const i of[...this.seenRounds.keys()])i.startsWith("public:")&&this.seenRounds.delete(i);this.arena=null,this.target?.type==="public"&&this.closeSheet(!1),this.updatePublicButton();return}!(this.arena?.arenaId===e.arenaId&&this.arena.memberId===e.memberId)&&this.target?.type==="public"&&this.closeSheet(!1),this.arena={type:"public",arenaId:e.arenaId,memberId:e.memberId},this.updatePublicButton(),this.observeRounds(`public:${e.arenaId}:${e.epoch}`,{type:"public",arenaId:e.arenaId,memberId:e.memberId},e.epoch,e.completedRounds)}observeRounds(e,t,i,r){if(r===void 0||!Number.isSafeInteger(r))return;const s=this.seenRounds.get(e);this.seenRounds.set(e,r),s!==void 0&&r>s&&r>0&&this.offerRound(t,i,r),this.seenRounds.size>16&&this.seenRounds.delete(this.seenRounds.keys().next().value)}updateReopen(){Ce("feedback-reopen").hidden=this.finished===null||this.target!==null}updatePublicButton(){Ce("skirmish-feedback").hidden=!this.arena||this.target!==null||this.recorded(gs.key(this.arena))!==null}openPublic(e,t){this.resetSheet(e,Rn,!1),Ce("feedback-title").textContent="How is the arena playing?",Ce("feedback-summary").hidden=!0,Ce("feedback-override-box").hidden=!0,this.override=null,this.stopPolling(),this.updateReopen(),this.updatePublicButton(),t&&this.buttons.values().next().value?.focus?.()}openSheet(e,t){this.resetSheet({type:"private",roomId:e.roomId},e.state.tuning??Rn,t),Ce("feedback-title").textContent="How did that match feel?",Ce("feedback-summary").hidden=!1,this.renderSummary([],0),this.updateReopen(),this.updatePublicButton(),this.stopPolling(),this.polls=0,this.refresh(),this.pollTimer=setInterval(()=>{++this.polls>RE?this.stopPolling():this.refresh()},AE)}resetSheet(e,t,i){this.target=e,this.tuning=t,this.answers={},this.rating=null,this.sent=this.recorded(gs.key(e))==="sent";for(const s of this.buttons.values())s.setAttribute("aria-pressed","false");for(const s of Ce("feedback-rating").children)s.setAttribute("aria-pressed","false");Ce("feedback-comment").value="",Ce("feedback-count").textContent=`0/${Al.commentChars}`,Ce("feedback-status").textContent="";const r=i||this.sent;Ce("feedback-form").hidden=r,Ce("feedback-skip").hidden=r,Ce("feedback-sheet").hidden=!1}closeSheet(e){e&&this.target&&this.record(gs.key(this.target),this.sent?"sent":"dismissed"),this.stopPolling(),this.target=null,Ce("feedback-sheet").hidden=!0,this.updateReopen(),this.updatePublicButton()}stopPolling(){this.pollTimer!==null&&clearInterval(this.pollTimer),this.pollTimer=null}async sendSurvey(){const e=this.target;if(!e||this.sent)return;const t=gs.key(e),i=Ce("feedback-comment").value.trim(),r=Ce("feedback-status");if(!Object.keys(this.answers).length&&this.rating===null&&!i){r.textContent="Pick an answer, a rating or write a note, or skip.";return}const s={kind:"survey",room:e,answers:this.answers,...this.rating===null?{}:{rating:this.rating},...i?{comment:i}:{}};Ce("feedback-send").disabled=!0,r.textContent="Sending…";try{const a=await this.guest.request("/feedback",s);if(this.record(t,"sent"),this.updatePublicButton(),this.target!==e)return;this.sent=!0,r.textContent=a.duplicate===!0?"Your answers were already recorded.":"Thanks. Your answers are saved.",Ce("feedback-form").hidden=!0,Ce("feedback-skip").hidden=!0,await this.refresh()}catch(a){this.target===e&&(r.textContent=a instanceof Error?a.message:"Feedback could not be sent. You can skip.")}finally{Ce("feedback-send").disabled=!1}}async refresh(){const e=this.target;if(e?.type!=="private")return;const t=e.roomId;try{const i=await this.guest.request(`/feedback/rooms/${encodeURIComponent(t)}`);if(this.target!==e||!Array.isArray(i.surveys))return;const r=[];for(const s of i.surveys)s&&typeof s=="object"&&"answers"in s&&s.answers&&typeof s.answers=="object"&&r.push(s.answers);this.renderSummary(r,typeof i.members=="number"&&Number.isSafeInteger(i.members)?i.members:r.length)}catch{}}renderSummary(e,t){const i=pg(e),r=Ce("feedback-tally");Ce("feedback-summary-title").textContent=e.length?`Room feedback · based on ${e.length} of ${Math.max(t,e.length)} players`:"Room feedback · no answers yet",r.replaceChildren(...ya.map(a=>{const o=i[a.id],c=Ai("li");return c.append(Ai("span",a.label,"feedback-tally-label"),Ai("span",`${o.tooLittle} too little · ${o.justRight} just right · ${o.tooMuch} too much`,"feedback-tally-counts")),c}));let s;try{s=_E(this.tuning,e,t)}catch{s=null}this.override=s?.override??null,wE(this.override,this.store??void 0),Ce("feedback-changes").replaceChildren(...(s?.changes??[]).map(a=>Ai("li",`${a.field}: ${a.from} → ${a.to}`))),Ce("feedback-suggestion-note").textContent=this.override?"Suggested tuning. The host can apply it from the settings of the next lobby (use Rematch), or an operator can set ARCHERY_TUNING and redeploy.":e.length?"No tuning change suggested from these answers.":"A tuning suggestion appears once answers arrive.",Ce("feedback-override").textContent=this.override?`ARCHERY_TUNING='${this.override}'`:"",Ce("feedback-override-box").hidden=!this.override}async copyOverride(){if(this.override){try{await navigator.clipboard.writeText(`ARCHERY_TUNING='${this.override}'`),Ce("feedback-copy").textContent="Copied"}catch{Ce("feedback-copy").textContent="Select the text to copy"}setTimeout(()=>{Ce("feedback-copy").textContent="Copy"},2e3)}}offerRound(e,t,i){this.roundTarget={target:e,epoch:t,round:i},Ce("feedback-round-text").textContent="How was that round?";for(const r of["up","down"])Ce(`feedback-round-${r}`).disabled=!1;Ce("feedback-round").hidden=!1,this.roundTimer!==null&&clearTimeout(this.roundTimer),this.roundTimer=setTimeout(()=>this.hideRound(),CE)}hideRound(){this.roundTimer!==null&&clearTimeout(this.roundTimer),this.roundTimer=null,this.roundTarget=null,Ce("feedback-round").hidden=!0}async sendRound(e){const t=this.roundTarget;if(!t)return;this.roundTimer!==null&&clearTimeout(this.roundTimer);for(const r of["up","down"])Ce(`feedback-round-${r}`).disabled=!0;Ce("feedback-round-text").textContent="Sending…";let i="Thanks.";try{await this.guest.request("/feedback",{kind:"round",room:t.target,epoch:t.epoch,round:t.round,vote:e})}catch{i="Could not send that vote."}this.roundTarget===t&&(Ce("feedback-round-text").textContent=i,this.roundTimer=setTimeout(()=>this.hideRound(),IE))}}const on=n=>document.getElementById(n);function dp(){try{return sessionStorage}catch{return}}class LE{constructor(e){this.send=e;const t=on("combat-settings-preset");t.replaceChildren(...mg.map(r=>{const s=document.createElement("option");return s.value=r,s.textContent=r,s}));const i=(r,s)=>{const a=document.createElement("label"),o=document.createElement("input"),c=`combat-settings-${s.key}`;a.append(`${s.label} `,o),o.id=c,o.type="number",o.step=s.bound.integer?"1":"any",o.min=String(s.bound.min),o.max=String(s.bound.max),o.inputMode=s.bound.integer?"numeric":"decimal",o.dataset.knob=s.key,this.inputs.set(s.key,o),r.append(a)};for(const r of vE)i(on("combat-settings-primary"),r);for(const r of yE)i(on("combat-settings-more"),r);t.addEventListener("change",()=>this.fill(gg(t.value))),on("combat-settings-save").addEventListener("click",()=>{try{this.submit(ME(t.value,Object.fromEntries([...this.inputs].map(([r,s])=>[r,s.value]))))}catch(r){on("combat-settings-status").textContent=r instanceof Error?r.message:"Those settings are not valid."}}),on("combat-settings-suggest").addEventListener("click",()=>{const r=ap(dp());r&&this.submit(r)})}send;synced="";last=null;changedNotice=!1;sending=!1;inputs=new Map;async submit(e){if(!this.sending){this.sending=!0;try{const t=this.last?.digest??null,i=await this.send(e);on("combat-settings-status").textContent=cp(i,t,this.last?.digest??null)}finally{this.sending=!1}}}fill(e){for(const[t,i]of this.inputs)i.value=String(e[t])}fillFrom(e){on("combat-settings-preset").value=bE(e),this.fill(Object.fromEntries([...this.inputs.keys()].map(t=>[t,Qn(e,t)])))}render(e,t){const i=!!e&&e.state.state==="waiting";if(on("combat-settings").hidden=!i,!e||!i){this.last=op(this.last,null,!1,!!e),e&&(this.synced="",this.changedNotice=!1,on("combat-settings-status").textContent="");return}const r=pc(e.state),s=e.membership.canStart,a={roomId:e.roomId,digest:sp(e.state)};this.last&&this.last.roomId!==a.roomId&&(this.changedNotice=!1);const o=EE(this.last,a);if(o&&(this.changedNotice=!0),(o||this.last&&this.last.roomId!==a.roomId)&&!this.sending&&(on("combat-settings-status").textContent=""),this.last=op(this.last,a,!0,!0),!t&&on("combat-settings-status").textContent===cp("skip",null,null)&&(on("combat-settings-status").textContent=""),e.state.seats.find(h=>h.actorId===e.membership.actorId)?.ready&&(this.changedNotice=!1),on("combat-settings-summary").textContent=SE(r)+(s?"":" · set by the host")+(this.changedNotice?" · Settings changed — ready up again":""),on("combat-settings-editor").hidden=!s,!s)return;const c=e.roomId+sp(e.state);c!==this.synced&&(this.synced=c,this.fillFrom(r));const l=ap(dp()),u=l?TE(l,r):null,d=on("combat-settings-suggest");d.hidden=u===null,u&&(d.textContent=u,d.title=u);for(const h of["save","suggest"])on(`combat-settings-${h}`).disabled=t}}function hp(n){return n?"Next arrow":"Try again"}function DE(n,e,t="below"){const i=t==="below"?" below":"";return n==="ready"?{icon:"↙",text:"Drag back on the stage to aim and draw"}:n==="hit"||n==="miss"?{icon:"↓",text:e?`Tap Next arrow${i} for another shot`:`Drag again, or tap Try again${i}`}:null}const NE="(orientation:landscape) and (max-height:540px) and (pointer:coarse)",UE="(orientation:portrait) and (max-width:640px) and (pointer:coarse)",vg="archery-rotate-hint-dismissed";function FE(n){return n.view==="range"&&n.portraitPhone&&!n.dismissed}function kE(n){try{return n.getItem(vg)==="1"}catch{return!1}}function OE(n){try{n.setItem(vg,"1")}catch{}}function yg(n,e,t=2){return Math.abs(e.width-n.width)>t||Math.abs(e.height-n.height)>t}function BE(n){return n.landscapePhone&&n.view==="range"&&n.outcome!=="unchanged"}const ba="challenge-v1";function ec(n){if(n!=="course"&&n!=="endless")throw new RangeError("Unknown challenge format.")}function zE(n){if(!Number.isFinite(n.angle)||!Number.isFinite(n.power)||n.angle<Ot.minAngle||n.angle>Ot.maxAngle||n.power<0||n.power>1)throw new RangeError("Challenge aim must have an angle from 5 to 80 and power from 0 to 1.")}const Fh=(...n)=>32*Number.EPSILON*Math.max(1,...n.map(Math.abs));function kh(n,e){if(ec(n),!Number.isSafeInteger(e)||e<0||n==="course"&&e>=12)throw new RangeError("Challenge shot index is out of range.");const t=Math.floor(e/3),i=n==="course"?[12,18,24,30][t]:Math.min(30,12+2*t),r=n==="course"?2.6:Math.max(.8,2.6-.1*t);return Object.freeze({distance:i,centerY:3.2,radius:r,faceX:Vt.x+i})}function HE(n,e){if(zE(n),![e.distance,e.centerY,e.radius,e.faceX].every(Number.isFinite)||e.distance<=0||e.radius<=0||Math.abs(e.faceX-(Vt.x+e.distance))>Fh(e.faceX,e.distance))throw new RangeError("Challenge target must have finite, consistent geometry and positive distance and radius.");const t=lc(n);return bg(t,e,Math.min(uh(t),Ot.maxFlight))}function GE(n,e){const t=Math.abs(n-e.centerY),i=Fh(t,n,e.centerY,e.radius);let r=0;for(let s=1;s<=10;s++)if(t<=e.radius*s/10+i){r=11-s;break}return{score:r,innerBullseye:t<=e.radius/20+i}}function bg(n,e,t){const i=xm(n,e.faceX);if(i===null||i>=t-Fh(i,t))return Object.freeze({score:0,innerBullseye:!1,impact:null,at:t,hit:!1});const r=Object.freeze({x:e.faceX,y:Kt(n,i).y}),{score:s,innerBullseye:a}=GE(r.y,e);return Object.freeze({score:s,innerBullseye:a,impact:r,at:i,hit:s>0})}function Mg(n,e=ba){if(ec(n),typeof e!="string"||e.trim().length===0)throw new RangeError("A challenge requires a rules version.");return Object.freeze({format:n,rulesVersion:e,status:"active",revision:0,shots:Object.freeze([]),total:0,hits:0,innerBullseyes:0,tens:0,misses:0})}function Oh(n){if(n.status!=="active")throw new Error("The challenge has already ended.")}function Bh(n,e){Oh(n);const t=kh(n.format,n.shots.length),i=HE(e,t),r=Object.freeze({aim:Object.freeze({angle:e.angle,power:e.power}),target:t,outcome:i}),s=Object.freeze([...n.shots,r]),a=n.misses+ +!i.hit,o=n.format==="course"?s.length===12:a===3;return Object.freeze({...n,status:o?"completed":"active",revision:n.revision+1,shots:s,total:n.total+i.score,hits:n.hits+Number(i.hit),innerBullseyes:n.innerBullseyes+Number(i.innerBullseye),tens:n.tens+ +(i.score===10),misses:a})}function zh(n){if(Oh(n),n.format!=="endless"||n.shots.length===0)throw new Error("Only a nonempty endless challenge can be banked.");return Object.freeze({...n,status:"completed",revision:n.revision+1})}function VE(n){return Oh(n),Object.freeze({...n,status:"abandoned",revision:n.revision+1})}function Rl(n,e){if(ec(n.format),ec(e.format),n.format!==e.format)throw new RangeError("Challenge results must use the same format.");const t=n.format==="course"?["total","innerBullseyes","tens"]:["total","hits","innerBullseyes","tens"];for(const i of t)if(n[i]!==e[i])return e[i]-n[i];return 0}function WE(n,e,t){const i=Math.max(1,t?e:e+1);return{arrow:i,distance:kh(n,n==="course"?Math.min(i,12)-1:i-1).distance}}function Sg(n){return!!n&&n.status==="completed"}function wg(n,e,t){return Sg(n)&&e&&!t}const XE="Leave without posting your score?";function $E(n,e,t){return!n||e?"none":t?"initials":"result"}const up="archery.challenge.results.v1",fp="archery.challenge.initials.v1",us=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function Bd(n){if(!us(n)||!["course","endless"].includes(String(n.format))||n.rulesVersion!==ba||!Array.isArray(n.shots))throw new Error("Unsupported challenge data.");let e=Mg(n.format);for(const i of n.shots){if(!us(i)||!us(i.aim)||typeof i.aim.angle!="number"||typeof i.aim.power!="number")throw new Error("Invalid challenge shot.");e=Bh(e,{angle:i.aim.angle,power:i.aim.power})}n.status==="completed"&&e.status==="active"&&(e=zh(e)),n.status==="abandoned"&&e.status==="active"&&(e=VE(e));function t(i,r){return Array.isArray(i)&&Array.isArray(r)?i.length===r.length&&i.every((s,a)=>t(s,r[a])):us(i)&&us(r)?Object.keys(i).length===Object.keys(r).length&&Object.keys(i).every(s=>s in r&&t(i[s],r[s])):i===r}if(!t(e,n))throw new Error("Challenge data failed verification.");return e}class YE{message="Results stay on this browser.";storage;constructor(e){this.storage=e}readResults(){let e;try{if(!this.storage)throw new Error;e=this.storage.getItem(up)}catch{return this.message="Result not saved: browser storage unavailable. You can still play.",null}if(e===null)return[];try{const t=JSON.parse(e);if(!Array.isArray(t))throw new Error;return t.map(i=>{const r=Bd(i);if(r.status!=="completed")throw new Error;return r})}catch{return this.message="Local results are unreadable or use another rules version. Existing data is preserved; new results cannot be saved.",null}}results(e){return(this.readResults()??[]).filter(t=>t.format===e).sort(Rl).slice(0,100)}save(e){if(e.status!=="completed")return!1;const t=this.readResults();if(t===null)return!1;try{const i=[Bd(e),...t.filter(s=>s.format===e.format)].sort(Rl).slice(0,100),r=t.filter(s=>s.format!==e.format).sort(Rl).slice(0,100);return this.storage.setItem(up,JSON.stringify([...i,...r])),this.message="Best 100 results per format stay on this browser.",!0}catch{return this.message="Result not saved: browser storage unavailable.",!1}}initials(){try{return this.storage?.getItem(fp)??""}catch{return""}}saveInitials(e){try{this.storage?.setItem(fp,e)}catch{}}}function pp(n){if(!Array.isArray(n))throw new Error("Invalid leaderboard.");return n.map(e=>{if(!us(e)||!["rank","total","hits","innerBullseyes","tens","misses"].every(t=>Number.isSafeInteger(e[t])&&Number(e[t])>=0)||typeof e.guestId!="string"||typeof e.initials!="string"||!/^[a-z]{3}$/.test(e.initials)||typeof e.own!="boolean"||typeof e.publishedAt!="string")throw new Error("Invalid leaderboard entry.");return e})}class jE{attempt=null;pending=null;busy=!1;session;attemptRevision=null;pendingRevision=null;constructor(e,t=fetch,i,r){r?.assertContext(e,t,i),this.session=r??new hc(e,t,i)}checkAttemptRevision(){const e=this.attemptRevision??this.session.revision;return this.session.assertRevision(e),this.attemptRevision=e,e}checkPending(e,t,i){if(this.session.assertRevision(i),this.pending!==e||this.attempt!==t)throw new Error("Challenge changed while the action was pending.")}decodeAttempt(e){if(typeof e.id!="string"||!e.id)throw new Error("Invalid attempt response.");return{id:e.id,state:Bd(e.state)}}async start(e){if(this.busy||this.pending)throw new Error("Finish the pending action first.");this.busy=!0;try{const t=await this.session.ensure();this.session.assertRevision(t.revision);const i=this.decodeAttempt(await this.session.request("/attempts",{format:e,rulesVersion:ba}));return this.session.assertRevision(t.revision),this.attempt=i,this.attemptRevision=t.revision,i}finally{this.busy=!1}}async shot(e){return this.action("shot",{aim:{...e}})}async bank(){return this.action("bank",{})}async action(e,t){if(!this.attempt||this.pending||this.busy)throw new Error("Finish the pending action first.");return this.pendingRevision=this.checkAttemptRevision(),this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/actions`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,kind:e,...t},kind:"action"},this.retry()}async retry(){if(!this.pending||this.pending.kind!=="action"||!this.attempt||this.busy)throw new Error("No retryable action.");const e=this.pending,t=this.attempt,i=this.pendingRevision??this.checkAttemptRevision();this.checkPending(e,t,i),this.busy=!0;try{const r=this.decodeAttempt(await this.session.request(e.url,e.body));this.checkPending(e,t,i);const s=e.body.kind==="shot"?Bh(t.state,e.body.aim):zh(t.state);if(r.id!==t.id||JSON.stringify(r.state)!==JSON.stringify(s))throw new Error("Shared response does not match the pending action.");return this.attempt=r,this.pending=null,this.pendingRevision=null,r}catch(r){throw r instanceof mi&&r.code==="challenge_capacity"&&e.body.kind==="shot"&&this.pending===e&&this.attempt===t&&this.session.revision===i&&(this.pending=null,this.pendingRevision=null),r}finally{this.busy=!1}}async publish(e){if(!this.attempt||this.attempt.state.status!=="completed"||this.busy||this.pending?.kind==="action")throw new Error("Finish the pending shot first.");if(e=e.trim().toLowerCase(),!/^[a-z]{3}$/.test(e))throw new Error("Use exactly three letters A–Z.");const t=this.checkAttemptRevision();this.pending||(this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/publish`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,initials:e},kind:"publish"},this.pendingRevision=t);const i=this.pending,r=this.attempt;this.checkPending(i,r,this.pendingRevision??t),this.busy=!0;try{const s=await this.session.request(i.url,i.body);this.checkPending(i,r,t);const a=pp(s.entries);return this.pending=null,this.pendingRevision=null,a}catch(s){throw s instanceof Error&&"status"in s&&s.status===400&&this.pending===i&&this.attempt===r&&this.session.revision===t&&(this.pending=null,this.pendingRevision=null),s}finally{this.busy=!1}}async boards(e){const t=this.session.revision,i=await this.session.request(`/leaderboards/${e}?rulesVersion=${encodeURIComponent(ba)}`);return this.session.assertRevision(t),pp(i.entries)}forget(){this.session.forget(),this.attempt=null,this.pending=null,this.attemptRevision=null,this.pendingRevision=null}}const qE="Finish or abandon the course to switch modes.",KE="Finish or abandon the endless run to switch modes.";function JE(n,e,t=!1){return n&&n.status==="active"&&n.shots.length===0&&e===n.format&&!t?{action:"noop"}:!n||n.status!=="active"||n.shots.length===0?{action:"switch"}:{action:"confirm",declineMessage:n.format==="endless"?KE:qE}}function Eg(n){try{return n()===!0}catch{return!1}}function ZE(n){return n.busy||n.pending||n.state==="flying"||n.state==="aiming"}function Cl(n,e,t=Yt){if(!Number.isFinite(e)||e<=0)throw new RangeError("Positive finite aspect required.");if(![t.minX,t.maxX,t.minY,t.maxY].every(Number.isFinite)||t.minX>t.maxX||t.minY>t.maxY)throw new RangeError("Ordered finite target required.");n.updateMatrixWorld(!0);let i=-11.4,r=11.4,s=-11.4/e,a=11.4/e;const o=(h,p,g)=>{const v=new O(h,p,g).applyMatrix4(n.matrixWorldInverse),m=1.1;i=Math.min(i,v.x-m),r=Math.max(r,v.x+m),s=Math.min(s,v.y-m),a=Math.max(a,v.y+m)};for(const h of[-8.5,8.62])for(const p of[0,6])o(h,p,.12);for(const h of[t.minX,t.maxX])for(const p of[t.minY,t.maxY])for(const g of[-.9,.12])o(h,p,g);const c=(i+r)/2,l=(s+a)/2,u=Math.max((a-s)/2,(r-i)/(2*e)),d=u*e;n.left=c-d,n.right=c+d,n.bottom=l-u,n.top=l+u,n.updateProjectionMatrix()}function QE(n,e,t){if(![n.origin.x,n.origin.y,n.velocity.x,n.velocity.y,e.x,e.y,t].every(Number.isFinite)||t<0||t>Ot.maxFlight)throw new RangeError("Finite shot and a bounded resolved interval required.");const i=n.origin.x-e.x,r=n.origin.y-e.y,s=n.velocity.x,a=n.velocity.y,o=Ot.gravity,c=.5*o*o,l=-1.5*o*a,u=s*s+a*a-o*r,d=s*i+a*r;if(![c,l,u,d].every(Number.isFinite))throw new RangeError("Shot exceeds supported numeric range.");const h=f=>((c*f+l)*f+u)*f+d,p=[0,t],g=4*l*l-12*c*u;if(g>=0)for(const f of[(-2*l-Math.sqrt(g))/(6*c),(-2*l+Math.sqrt(g))/(6*c)])f>0&&f<t&&p.push(f);p.sort((f,y)=>f-y);const v=[...p];for(let f=1;f<p.length;f++){let y=p[f-1],b=p[f],M=h(y),E=h(b);if(!(M===0||E===0||M<0==E<0)){for(let R=0;R<64;R++){const I=(y+b)/2,x=h(I);M<0==x<0?(y=I,M=x):b=I}v.push((y+b)/2)}}const m=Math.min(...v.map(f=>{const y=Kt(n,f);return Math.hypot(y.x-e.x,y.y-e.y)}));if(!Number.isFinite(m))throw new RangeError("Shot exceeds supported numeric range.");return m}function Rr(){return{completed:0,hits:0,best:null,mean:null,last:null,lastShotId:0,m2:0,currentStreak:0,bestStreak:0,recent:[]}}function Hh(n,e,t,i,r={angle:29,power:.62}){if(!Number.isSafeInteger(e)||e<0||!Number.isFinite(i)||i<0||typeof t!="boolean"||!Number.isFinite(r.angle)||r.angle<5||r.angle>80||!Number.isFinite(r.power)||r.power<.08||r.power>1)throw new RangeError("Valid completion identity, aim and distance required.");if(e<=n.lastShotId)return n;const s=n.completed+1,a=i-(n.mean??0),o=(n.mean??0)+a/s,c=t?n.currentStreak+1:0,l={completed:s,hits:n.hits+Number(t),best:Math.min(n.best??1/0,i),mean:o,last:i,lastShotId:e,m2:Math.max(0,n.m2+a*(i-o)),currentStreak:c,bestStreak:Math.max(n.bestStreak,c),recent:[{hit:t,distance:i,...r},...n.recent].slice(0,10)};if(!Number.isSafeInteger(s)||!Number.isFinite(l.m2)||!Number.isFinite(o))throw new RangeError("Practice exceeds supported numeric range.");return l}const eT="archery-practice",Il="progress",Pl="practice";function tT(n){return{version:1,stats:n}}function nT(n){if(n===void 0)return Rr();const e=()=>{throw new Error("Saved practice is incompatible or damaged. Clear it to start again.")};if(!n||typeof n!="object"||n.version!==1)return e();const t=(a,o)=>Object.keys(a).sort().join(",")===o.sort().join(",");if(!t(n,["version","stats"]))return e();const i=n.stats;if(!i||typeof i!="object"||!t(i,Object.keys(Rr())))return e();const r=a=>Number.isSafeInteger(a)&&a>=0,s=a=>typeof a=="number"&&Number.isFinite(a)&&a>=0;if(![i.completed,i.hits,i.lastShotId,i.currentStreak,i.bestStreak].every(r)||i.hits>i.completed||i.lastShotId<i.completed||i.currentStreak>i.bestStreak||i.bestStreak>i.hits||i.hits>0&&i.bestStreak===0||!s(i.m2)||!Array.isArray(i.recent)||i.recent.length!==Math.min(i.completed,10))return e();if(i.completed){if(!s(i.best)||!s(i.mean)||!s(i.last)||i.best>i.mean||i.best>i.last||i.completed===1&&(i.m2!==0||i.mean!==i.last||i.best!==i.last)||i.hits===0&&i.bestStreak!==0||i.hits===i.completed&&(i.currentStreak!==i.completed||i.bestStreak!==i.completed))return e()}else if(i.hits||i.lastShotId||i.currentStreak||i.bestStreak||i.m2||i.best!==null||i.mean!==null||i.last!==null)return e();for(const a of i.recent)if(!a||!t(a,["hit","distance","angle","power"])||typeof a.hit!="boolean"||!s(a.distance)||!Number.isFinite(a.angle)||a.angle<5||a.angle>80||!Number.isFinite(a.power)||a.power<.08||a.power>1||i.best>a.distance)return e();if(i.completed){if(i.last!==i.recent[0].distance)return e();let a=0;for(const p of i.recent){if(!p.hit)break;a++}if(a<i.recent.length?i.currentStreak!==a:i.currentStreak<a)return e();let o=0,c=0;for(const p of[...i.recent].reverse())o=p.hit?o+1:0,c=Math.max(c,o);const l=i.recent.reduce((p,g)=>p+(g.distance-i.mean)**2,0);if(c>i.bestStreak||l>i.m2+1e-9*Math.max(1,i.m2))return e();const u=i.best+i.recent.reduce((p,g)=>p+(g.distance-i.best)/i.completed,0),d=Math.sqrt(i.completed-1)*(i.mean-i.best);if(u>i.mean+1e-10*Math.max(1,i.mean)||Math.sqrt(i.m2/i.completed)>d+1e-10*Math.max(1,d))return e();const h=i.recent.filter(p=>p.hit).length;if(h>i.hits||i.recent.length-h>i.completed-i.hits)return e();if(i.completed>10){const p=i.completed-i.recent.length,g=p-(i.hits-h),v=i.hits-h,m=i.mean-i.best;let f=p*m-i.recent.reduce((x,w)=>x+(w.distance-i.mean),0);const y=1e-9*Math.max(1,p*m,...i.recent.map(x=>Math.abs(x.distance-i.mean)));if(f<-y)return e();f=Math.max(0,f);const b=!i.recent.some(x=>x.distance===i.best);if(b&&p===1&&f>y)return e();const M=p*(f/p-m)**2,E=l+M+(b&&p>1?f/p*(f/(p-1)):0),R=l+M+f/p*f*(p-1);if(!Number.isFinite(E)||i.m2<E-1e-9*Math.max(1,i.m2,E)||i.m2>R+1e-9*Math.max(1,i.m2,R))return e();let I=0;for(const x of[...i.recent].reverse()){if(!x.hit)break;I++}if(I===i.recent.length){const x=i.currentStreak-I,w=v-x;if(x>v||x<0||g===0&&x!==p||w>g*i.bestStreak||i.bestStreak<x+I||i.bestStreak>Math.max(c,x+I,w))return e()}else if(v>(g+1)*i.bestStreak-I||i.bestStreak>Math.max(c,v+I))return e()}if(i.completed<=10){let p=Rr();for(const v of[...i.recent].reverse())p=Hh(p,p.lastShotId+1,v.hit,v.distance,v);const g=(v,m)=>Math.abs(v-m)<=1e-10*Math.max(1,Math.abs(v),Math.abs(m));if(!g(p.mean,i.mean)||!g(p.m2,i.m2)||p.best!==i.best||p.bestStreak!==i.bestStreak)return e()}}return structuredClone(i)}class iT{db=null;queue;unavailable=!1;view={stats:Rr(),state:"loading",message:"Loading saved practice…"};notify;constructor(e,t=()=>indexedDB){this.notify=e,this.notify(this.view),this.queue=new Promise(i=>{let r;try{r=t().open(eT,1)}catch{this.fail(),i();return}r.onupgradeneeded=()=>{r.result.createObjectStore(Il)},r.onblocked=()=>{this.fail("Saved practice is blocked by another tab."),i()},r.onerror=()=>{this.fail(),i()},r.onsuccess=()=>{if(this.unavailable){r.result.close(),i();return}const s=r.result;this.db=s,s.onversionchange=()=>{this.db===s&&(this.db=null,s.close(),this.fail("Saved practice changed in another tab. Reload to reconnect."))},this.transaction().then(i,()=>{this.db&&this.fail(),i()})}})}fail(e="Saved practice unavailable. This visit still counts."){this.unavailable=!0,this.view={...this.view,state:"unavailable",message:e},this.notify(this.view)}transaction(e,t=!1){return new Promise((i,r)=>{const s=this.db;if(!s){r(new Error("Storage unavailable"));return}let a=Rr(),o;try{o=s.transaction(Il,e||t?"readwrite":"readonly");const c=o.objectStore(Il);if(t)c.delete(Pl);else{const l=c.get(Pl);l.onsuccess=()=>{try{a=nT(l.result),e&&(a=Hh(a,a.lastShotId+1,e.hit,e.distance,e),c.put(tT(a),Pl))}catch(u){o.abort(),r(u)}}}o.oncomplete=()=>{this.db!==s?this.view={...this.view,stats:a}:(this.unavailable=!1,this.view={stats:a,state:"saved",message:`Saved on this browser only · ${a.completed} ${a.completed===1?"shot":"shots"}`}),this.notify(this.view),i()},o.onabort=o.onerror=()=>r(new Error("Storage transaction failed"))}catch(c){r(c)}})}enqueue(e,t=!1){return this.queue=this.queue.then(async()=>{if(!(!this.db||this.unavailable&&!t)){this.view={...this.view,state:e||t?"saving":"loading",message:t?"Clearing saved practice…":e?"Saving practice…":"Loading saved practice…"},this.notify(this.view);try{await this.transaction(e,t)}catch{this.db&&this.fail()}}}),this.queue}append(e){return this.enqueue(e)}clear(){return this.enqueue(void 0,!0)}refresh(){return this.enqueue()}}const rT={course:"finish a course",endless:"finish an endless run"};function sT(n){switch(n.phase){case"off":return{kind:"off",emptyText:"Shared scoring is not available here."};case"loading":return{kind:"loading",emptyText:"Loading shared board…"};case"error":return{kind:"error",emptyText:"Shared board could not be loaded."};case"loaded":return(n.entryCount??0)>0?{kind:"entries",emptyText:""}:{kind:"empty",emptyText:`No shared results yet. Turn on shared scoring and ${rT[n.format]} to post one.`}}}const Tg="archery-theme";function aT(n,e){try{const t=n.getItem(Tg);return t==="light"||t==="dark"?t:e}catch{return e}}function oT(n,e){try{n.setItem(Tg,e)}catch{}}const Fr=.24,cT=-1;function lT(n){const{step:e,scale:t,heights:i}=n.ground,r=[];for(let s=0;s<i.length;){const a=i[s];let o=s+1;for(;o<i.length&&i[o]===a;)o++;a>0&&r.push({minX:Vt.x+s*e,maxX:Vt.x+o*e,minY:cT,maxY:Fr+a*t}),s=o}for(const s of n.obstacles)r.push({minX:Vt.x+s.x,maxX:Vt.x+s.x+s.width,minY:s.y0,maxY:s.y1});return r}function Gh(n){const{distance:e,centerY:t,radius:i}=n.target,r=Object.freeze({distance:e,centerY:t,radius:i,faceX:Vt.x+e});return Object.freeze({level:n,target:r,blockers:lT(n).filter(s=>s.minX<=r.faceX)})}function Vh(n,e){const t=lc(e);return n.wind?{...t,wind:n.wind}:t}function Ag(n,e){const t=Vh(n.level,e);let i=Math.min(uh(t,Fr),Ot.maxFlight);for(const r of n.blockers){const s=hh(t,r,0,i);s!==null&&s<i&&(i=s)}return bg(t,n.target,i)}function dT(n){const{step:e,scale:t,heights:i}=n.ground,r=n.target.distance/e,s=Number.isInteger(r)?[r-1,r]:[Math.floor(r)];return Math.max(Fr,...s.filter(a=>a>=0&&a<i.length).map(a=>Fr+i[a]*t))}function hT(n){const{distance:e,centerY:t,radius:i}=n.target,r=t-i,s=t+i,a=[];return r>dT(n)||a.push("face-buried"),n.obstacles.some(o=>o.x<=e&&e<=o.x+o.width&&o.y0<=r&&o.y1>=s)&&a.push("face-covered"),a}function uT(n){const e=n.target.faceX-Vt.x,t=n.target.centerY-Vt.y;return n.blockers.some(i=>{let r=0,s=1;for(const[a,o,c,l]of[[e,Vt.x,i.minX,i.maxX],[t,Vt.y,i.minY,i.maxY]]){if(a===0){if(o<c||o>l)return!1;continue}const u=(c-o)/a,d=(l-o)/a;r=Math.max(r,Math.min(u,d)),s=Math.min(s,Math.max(u,d))}return r<=s})}const Wh="lgen-1",Rg="levels-v1",Na="levels-v1-wind",Cg=.5,Ig=.1,fT=2,pT=4294967295;function mT(n){if(!Number.isInteger(n)||n<0||n>pT)throw new RangeError(`level seed must be a uint32, got ${String(n)}`)}function gT(n){if(!Number.isSafeInteger(n)||n<0)throw new RangeError(`level index must be a non-negative safe integer, got ${String(n)}`)}function xT(n,e){return mT(n),gT(e),xc([Wh,n,e])}function Pg(n,e,...t){return xc([n,e,...t])>>>0}const Ma=n=>{if(n&&typeof n=="object"){for(const e of Object.values(n))Ma(e);Object.freeze(n)}return n},_T="level";function vT(n){const e=new URLSearchParams(n).get(_T);if(e===null)return null;const t=/^(\d{1,10}):(\d{1,9})(?::(wind))?$/.exec(e);if(!t)return null;const i=Number(t[1]),r=Number(t[2]);return i>4294967295?null:Object.freeze({seed:i,index:r,windOn:t[3]==="wind"})}const yT=Fr-.04;function Xh(n){const{step:e,scale:t,heights:i}=n.ground,r=[];for(let l=0;l<i.length;){const u=i[l];let d=l+1;for(;d<i.length&&i[d]===u;)d++;u>0&&r.push({x0:Vt.x+l*e,x1:Vt.x+d*e,y0:yT,y1:Fr+u*t}),l=d}const s=n.obstacles.map(l=>({x0:Vt.x+l.x,x1:Vt.x+l.x+l.width,y0:l.y0,y1:l.y1})),{faceX:a,centerY:o,radius:c}=Gh(n).target;return Object.freeze({target:{faceX:a,centerY:o,radius:c},ground:r,obstacles:s,wind:n.wind,windRules:n.rules===Na})}function bT(n){const e=Xh(n),{faceX:t,centerY:i,radius:r}=e.target,s=[{x0:t-.1,x1:t+.1,y0:i-r,y1:i+r}];for(const a of[...e.obstacles,...e.ground])a.x0<=t&&s.push(a);return{minX:Math.min(...s.map(a=>a.x0)),maxX:Math.max(...s.map(a=>a.x1)),minY:Math.min(...s.map(a=>a.y0)),maxY:Math.max(...s.map(a=>a.y1))}}const MT="level-theme-1",mp=Object.freeze([Object.freeze({name:"meadow",ground:"#8f9a5a",obstacle:"#9a8b78",cap:"#b7a88f",style:"wall"}),Object.freeze({name:"quarry",ground:"#a08c68",obstacle:"#7d8590",cap:"#a0a8b2",style:"pillar"}),Object.freeze({name:"orchard",ground:"#7c9a5c",obstacle:"#8a6a4a",cap:"#a98763",style:"pillar"})]);function gp(n,e){return mp[xc([MT,n,e])%mp.length]}const zd=1.4,xp=-zd/2;function ST(n,e,t,i){for(const a of[...n.children])n.remove(a),a instanceof at&&a.geometry.dispose();const r=Xh(e),s=(a,o,c)=>{const l=i(n,(o.x0+o.x1)/2,(o.y0+o.y1)/2,xp,o.x1-o.x0,o.y1-o.y0,zd,c);return l.userData.kind=a,l};for(const a of r.ground)s("ground",a,t.ground);for(const a of r.obstacles)s("obstacle",a,t.obstacle),t.style==="pillar"&&i(n,(a.x0+a.x1)/2,a.y1+.08,xp,a.x1-a.x0+.24,.16,zd+.1,t.cap)}const _p=n=>{const{width:e,height:t}=n.geometry.parameters,i=e*n.scale.x,r=t*n.scale.y;return{x0:n.position.x-i/2,x1:n.position.x+i/2,y0:n.position.y-r/2,y1:n.position.y+r/2}};function wT(n){const e=n.children.filter(t=>t instanceof at);return{ground:e.filter(t=>t.userData.kind==="ground").map(_p),obstacles:e.filter(t=>t.userData.kind==="obstacle").map(_p)}}function ET(n){const e=n.children.filter(i=>i instanceof at&&i.geometry instanceof As),t=e[0];return t?{faceX:t.position.x,centerY:t.position.y,radius:t.geometry.parameters.radius,rings:e.length}:null}const TT=Ma([[{distance:12,centerY:2.8,radius:2.3,difficulty:1},{distance:12.5,centerY:3.6,radius:2.5,difficulty:1},{distance:14,centerY:2.8,radius:2.5,difficulty:1},{distance:15.5,centerY:3.2,radius:2.5,difficulty:1},{distance:16.5,centerY:3.4,radius:2.3,difficulty:1},{distance:18,centerY:4,radius:2.3,difficulty:1},{distance:19.5,centerY:2.5,radius:2.2,difficulty:1},{distance:20,centerY:4.5,radius:2.5,difficulty:1}],[{distance:12,centerY:5.4,radius:1.5,difficulty:2,bumps:[0,0,1,1,2,3,5,7,9,7,5,3,1],obstacles:[{x:8,width:.6,y0:.54,y1:6.54}]},{distance:17,centerY:4.5,radius:1.5,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,8,7,7,7,7,7,8,9,10,10,10,10,10,10,10],obstacles:[{x:6,width:.7,y0:.64,y1:6.64}]},{distance:19,centerY:4.5,radius:2.5,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,4,3,1,0,2,4,6,8,7,6,5,5,3,2,1,0,2,4,6,8,6,4,2,1,0,0,0,0,2,5],obstacles:[{x:11.5,width:1.4,y0:1.94,y1:6.8}]},{distance:21,centerY:5.5,radius:2.2,difficulty:2,bumps:[0,1,3,4,6,6,6,6,7,5,4,3,2,1,1,0,0,0,1,2,3,4,6,8,10,10,10,10,10,9,8,7,7,7,8,9,10,8,7,5,4,5,6,7,8,7,7],obstacles:[{x:8,width:.9,y0:1.14,y1:7.14}]},{distance:23.5,centerY:4.8,radius:2.4,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,9,9],obstacles:[{x:6,width:1.5,y0:.94,y1:6.94}]},{distance:12,centerY:3.9,radius:2.3,difficulty:3,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,7,8,9,10,8,6,4,2,3,5,7,9,8,7,6,6],obstacles:[{x:7.5,width:.6,y0:1.64,y1:6.3}]},{distance:20.5,centerY:5.9,radius:2,difficulty:3,bumps:[0,0,1,1,2,1,1,0,0,1,2,3,5,3,2,1,0,2,5,7,10,8,7,6,5,6,7,8,10,7,5,3,1,2,4,6,8,8,9,9,10,10,10,10,10,10],obstacles:[{x:10,width:.9,y0:2.64,y1:8.64}]},{distance:22.5,centerY:5.3,radius:2.5,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,5,5,4,4,3,2,1,0,0,0,0,0,1,2,3,4,3,2,1,0,1,2,3,5,3,2,1,0,2,5,7,10,10,10,10,10,10],obstacles:[{x:6,width:1.4,y0:2.54,y1:7.9}]}],[{distance:12,centerY:5.5,radius:1.2,difficulty:3,bumps:[0,0,0,0,0,0,0,0,0,1,2,3,4,3,2,1,0,0,0,0,0,1,3,5,7,5,3,1],obstacles:[{x:7.5,width:1.1,y0:.84,y1:6.84}]},{distance:16.5,centerY:6.2,radius:2,difficulty:3,bumps:[0,1,3,5,7,5,3,1,0,0,1,2,3,2,1,0,0,0,0,0,0,1,2,3,5,6,7,8,10,11,12,13,15,14,13,12,11,11],obstacles:[{x:5.5,width:1,y0:1.14,y1:7.14}]},{distance:12.5,centerY:6.9,radius:1.4,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,2,4,6,8,9,11,13,15,16,17,18,19,18,18,18,18,18,18,18,19,18],obstacles:[{x:4.5,width:.7,y0:1.14,y1:7.14}]},{distance:17.5,centerY:6.8,radius:2.4,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,1,3,5,7,5,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,5,5,5,6,4,3,1],obstacles:[{x:4,width:.6,y0:.84,y1:6.84}]},{distance:20,centerY:6.6,radius:2.3,difficulty:5,bumps:[0,0,0,0,0,1,3,4,6,4,3,1,0,1,3,5,7,7,8,8,9,7,6,5,4,4,4,4,5,3,2,1,0,0,0,0,0,2,4,6,9,9,10,10,11],obstacles:[{x:7,width:1.4,y0:3.14,y1:9.14}]},{distance:19.5,centerY:3.5,radius:1.8,difficulty:6,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,5,7,8,10,12,14,13,12,11,10,11,13,14,16,13,11,9,7,5,4,3,2,1,1,1,1],obstacles:[{x:6,width:.7,y0:2.94,y1:7.8}]},{distance:16,centerY:3.4,radius:2.4,difficulty:7,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,7,10,8,6,4,3,2,1],obstacles:[{x:6,width:1.1,y0:2.74,y1:7.9}]},{distance:21.5,centerY:6.1,radius:1.9,difficulty:7,bumps:[0,0,0,0,0,0,1,2,3,2,2,2,2,1,1,1,1,2,3,4,6,6,7,7,8,6,5,3,2,4,6,8,11,10,9,8,7,7,7,7,8,9,11,13,15,14,14,13],obstacles:[{x:5.5,width:.6,y0:2.64,y1:8.64}]}],[{distance:11,centerY:6.6,radius:2.4,difficulty:5,bumps:[0,1,2,3,5,4,4,4,4,3,2,1,0,1,3,5,7,5,4,3,2,1,1,0,0,2,4],obstacles:[{x:6.5,width:1,y0:2.44,y1:8.44}]},{distance:10.5,centerY:3.9,radius:2.5,difficulty:6,bumps:[0,0,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,4,6,7],obstacles:[{x:5,width:1.2,y0:.84,y1:6.84}]},{distance:19.5,centerY:3.7,radius:1.9,difficulty:6,bumps:[0,0,0,0,0,0,0,0,0,1,2,3,4,6,8,10,12,12,12,12,12,11,10,9,8,8,8,8,8,6,4,2,0,2,5,7,10,8,7,5,4,3,2,1],obstacles:[{x:8,width:1,y0:2.64,y1:8.64}]},{distance:15.5,centerY:7.4,radius:2.6,difficulty:7,bumps:[0,1,2,3,4,3,2,1,0,2,5,7,10,10,10,10,10,9,9,9,9,11,14,16,19,21,23,25,27,27,28,29,30,30,30,30],obstacles:[{x:6,width:1,y0:3.54,y1:9.54},{x:6.5,width:1.5,y0:2.74,y1:8.74}]},{distance:10.5,centerY:4.2,radius:2.6,difficulty:8,bumps:[0,2,5,7,10,10,11,11,12,11,10,9,9,11,14,16,19,17,15,13,12,13,15,16,18,16],obstacles:[{x:4,width:.7,y0:2.14,y1:7.7},{x:5.5,width:1.2,y0:1.94,y1:7.94}]},{distance:15.5,centerY:6.9,radius:2.4,difficulty:8,bumps:[0,0,0,0,0,2,4,6,8,6,4,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,6,7,9,11,14,16],obstacles:[{x:4,width:.7,y0:2.34,y1:8.34}]},{distance:11.5,centerY:4.5,radius:2.2,difficulty:9,bumps:[0,0,0,0,0,1,2,3,5,3,2,1,0,1,3,5,7,8,10,12,14,14,14,14,14,13,12,11],obstacles:[{x:4,width:1.4,y0:3.44,y1:7.9},{x:7,width:.7,y0:1.44,y1:7.44}]},{distance:19,centerY:4.4,radius:2,difficulty:9,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,3,4,5,6,5,4,3,2,4,6,8,10,10,10,10,10,8,7,6,5,5,6],obstacles:[{x:5.5,width:1,y0:2.94,y1:8.94}]}]]),Lg=1,AT=Ot.minAngle,RT=Ot.maxAngle,Dg=Ot.minPull,Ng=1,CT=76,IT=48,vp=24,yp=11,PT=1.5,Hd=Object.freeze({width:0,lo:0,hi:0}),bp=n=>n.score===10,Mp=n=>n.hit,Sp=(n,e,t)=>Array.from({length:t},(i,r)=>n+(e-n)*r/(t-1));function wp(n,e,t,i){const r=a=>Ag(n,{angle:a,power:e}),s=i.map(r);return t.map(a=>{const o=[];i.forEach((u,d)=>{o.push({a:u,ok:a(s[d])});const h=s[d],p=s[d+1];if(!o[o.length-1].ok&&p&&!a(p)&&h.impact&&p.impact&&(h.impact.y-n.target.centerY)*(p.impact.y-n.target.centerY)<0){let g=u,v=i[d+1],m=h.impact.y-n.target.centerY,f=!1;for(let b=0;b<vp&&!f;b++){const M=(g+v)/2,E=r(M);if(!E.impact){f=!0;break}(E.impact.y-n.target.centerY)*m>0?g=M:v=M}const y=(g+v)/2;!f&&a(r(y))&&o.push({a:y,ok:!0})}});const c=(u,d)=>{for(let h=0;h<vp;h++){const p=(u+d)/2;a(r(p))?u=p:d=p}return u};let l=Hd;for(let u=0;u<o.length;u++){if(!o[u].ok)continue;let d=u;for(;d+1<o.length&&o[d+1].ok;)d++;const h=u===0?o[0].a:c(o[u].a,o[u-1].a),p=d===o.length-1?o[d].a:c(o[d].a,o[d+1].a);p-h>l.width&&(l={width:p-h,lo:h,hi:p}),u=d}return l})}function LT(n,e,t){const i={w1:{power:e[0],win:Hd},w10:{power:e[0],win:Hd}},r=a=>{const[o,c]=wp(n,a,[Mp,bp],t);o.width>i.w1.win.width&&(i.w1={power:a,win:o}),c.width>i.w10.win.width&&(i.w10={power:a,win:c})};e.forEach(r);const s=e[1]-e[0];for(const a of["w1","w10"]){if(!i[a].win.width)continue;let o=i[a].power,c=s;for(let l=0;l<3;l++,c/=3){for(let u=-3;u<=3;u++){if(u===0)continue;const d=Math.min(Ng,Math.max(Dg,o+c*u/3)),h=wp(n,d,[a==="w1"?Mp:bp],t)[0];h.width>i[a].win.width&&(i[a]={power:d,win:h})}o=i[a].power}}return i}function DT(n,e,t,i){const r=o=>{const c=Vh({...n,wind:o},{angle:t,power:i}),l=xm(c,e.target.faceX);return l===null?null:Kt(c,l).y},s=r(n.wind),a=r(n.wind+1);return s===null||a===null?null:Math.abs(a-s)}const Ug=n=>Math.min(2,Math.round(Math.abs(n)/PT));function NT(n,e,t){const i=Math.min(1,Math.max(0,Math.log(yp/n)/Math.log(yp/Lg))),r=(e?1:0)+Ug(t);return Math.min(10,Math.max(1,Math.round(1+7*i)+r))}function UT(n,e={}){const t=Gh(n),i=Sp(AT,RT,e.angles??CT),r=LT(t,Sp(Dg,Ng,e.powers??IT),i),s=r.w1.win.width,a=r.w10.win.width,o=uT(t),c=a>0,l=(r.w10.win.lo+r.w10.win.hi)/2;return Object.freeze({solvable:s>0,window:s,window10:a,power10:c?r.w10.power:null,obstructed:o,windSensitivity:c?DT(n,t,l,r.w10.power):null,difficulty:c?NT(a,o,n.wind):null})}function FT(n,e={}){const t=hT(n);if(t.length)return Object.freeze({admitted:!1,reasons:Object.freeze(t),measure:null});const i=UT(n,e);return i.window10>=Lg||t.push("window-below-min"),Object.freeze({admitted:t.length===0,reasons:Object.freeze(t),measure:i})}const Ep=6,kT=5,OT=3,BT=15;function zT(n){return n<Ep?0:Math.min(BT,kT+OT*(n-Ep))/10}const HT=(n,e)=>JSON.stringify(["level",Na,n,e]),GT=(n,e)=>FS(zT(e),HT(n,e)),Tp=4,ta=4,Ap=10,VT=4,WT=10,XT=3,Rp=[10,60],$h=Ma([{from:0,dLo:1,dHi:2,d2:[24,40],r:[22,26],cyHi:45,amp:0,obstacles:[0,0],over:[0,0],gap:[0,0],x:[4,4]},{from:3,dLo:2,dHi:4,d2:[24,50],r:[14,26],cyHi:60,amp:10,obstacles:[1,1],over:[20,40],gap:[0,20],x:[8,24]},{from:6,dLo:3,dHi:7,d2:[24,44],r:[12,24],cyHi:70,amp:20,obstacles:[1,1],over:[20,45],gap:[0,30],x:[8,16]},{from:10,dLo:5,dHi:9,d2:[20,40],r:[9,26],cyHi:75,amp:30,obstacles:[1,2],over:[30,60],gap:[0,30],x:[8,16]}]);function $T(n,e=$h){let t=0;for(let i=0;i<e.length;i++)n>=e[i].from&&(t=i);return t}const YT=n=>Math.floor((435*n+999)/1e3),jT=Math.round(Fr*100),Fg=n=>n+2*fT+1;function qT(n,e,t,i=null){const r=(f,y,b,...M)=>f+Pg(n,b,e,...M)%(y-f+1),s=r(t.d2[0],t.d2[1],"distance"),a=YT(s),o=Math.max(t.r[0],a),c=r(o,Math.max(t.r[1],o),"radius"),l=Fg(s),u=[0];for(let f=1;f<=Math.floor((l-1)/ta)+1;f++){const y=r(-Ap,Ap,"knot",f);u.push(Math.min(t.amp,Math.max(0,u[f-1]+y)))}const d=Array.from({length:l},(f,y)=>{const b=Math.floor(y/ta),M=y%ta;return Math.floor((u[b]*(ta-M)+u[b+1]*M)/ta)}),h=Math.max(d[s-1],d[s]),p=Math.max(10,c+h+XT),g=r(p,Math.max(t.cyHi,p),"centerY"),v=r(t.obstacles[0],t.obstacles[1],"obstacle-count"),m=[];for(let f=0;f<v;f++){const y=r(6,15,"obstacle-width",f),b=r(t.over[0],t.over[1],"obstacle-over",f),M=Math.floor((s*5-WT-y)/5),E=Math.min(M,Math.max(VT,t.x[0])),R=r(E,Math.max(E,Math.min(M,t.x[1])),"obstacle-x",f),I=R,x=Math.ceil((R*5+y)/5)-1;let w=0;for(let W=I;W<=x;W++)w=Math.max(w,d[W]);const F=r(t.gap[0],t.gap[1],"obstacle-gap",f),C=jT+10*(w+F),U=10*(g+b),z=Math.min(C+10*Rp[1],Math.max(C+10*Rp[0],U));m.push({x:R/2,width:y/10,y0:C/100,y1:z/100})}return m.sort((f,y)=>f.x-y.x||f.y0-y.y0||f.y1-y.y1||f.width-y.width),{generator:Wh,rules:i===null?Rg:Na,target:{distance:s/2,centerY:g/10,radius:c/10},ground:{step:Cg,scale:Ig,heights:d},obstacles:m,wind:i??0}}function KT(n,e,t){const i=TT[e];if(!i||i.length===0)throw new RangeError(`no fallback pool for band ${e}`);const r=i[Pg(n,"fallback")%i.length],s=Fg(r.distance*2),a=Array.from({length:s},(o,c)=>r.bumps?.[c]??0);return{generator:Wh,rules:t,target:{distance:r.distance,centerY:r.centerY,radius:r.radius},ground:{step:Cg,scale:Ig,heights:a},obstacles:(r.obstacles??[]).map(o=>({...o})),wind:0,difficulty:r.difficulty,fallback:!0}}function JT(n,e,t=$h,i=!1){const r=xT(n,e),s=i?GT(n,e):null,a=$T(e,t),o=t[a];let c=!1;for(let l=0;l<Tp;l++){const u=qT(r,l,o,s),d=FT(u);if(!d.admitted)continue;c=!0;const h=d.measure?.difficulty??0,p=h-Ug(u.wind);if(p>=o.dLo&&p<=o.dHi)return{level:Ma({...u,difficulty:h,fallback:!1}),attempts:l+1,fallback:null,window10:d.measure?.window10??null}}return{level:Ma(KT(r,a,s===null?Rg:Na)),attempts:Tp,fallback:c?"out-of-band":"never-admissible",window10:null}}const ZT=(n,e,t=!1)=>JT(n,e,$h,t).level,A=n=>document.getElementById(n),Ke=A("scene");let ut="range",ke,Ve=null,kn="",Er=0,kg=null,mt=null,Sa="";const QT=new xS;let Ll="",Dl=[];function eA(n){for(const e of Dl)e.removeAttribute("inert");if(Dl=[],!!n)for(let e=A("arena-shell");e&&e!==document.body;e=e.parentElement)for(const t of Array.from(e.parentElement?.children??[]))t!==e&&!t.hasAttribute("inert")&&t.tagName!=="SCRIPT"&&(t.setAttribute("inert",""),Dl.push(t))}function tA(){for(const n of["skirmish-title","mode-combat"]){const e=document.getElementById(n);if(e&&!e.hidden&&e.offsetParent!==null){e.focus();return}}}let Et="private",Ft=!1,nr=!1;const Og=A("status"),Bg=A("phase"),Fi=A("retry"),vc=A("fire"),tc=A("pause"),wa=A("angle"),Ea=A("power"),ha=A("drag-marker"),nA=A("gesture-hint"),iA=A("gesture-icon"),rA=A("gesture-text"),Yh=matchMedia(NE),zg=matchMedia(UE);let jh=!1;try{jh=kE(localStorage)}catch{}const sA=A("rotate-hint"),Po=A("stage-retry");function yc(){sA.hidden=!FE({portraitPhone:zg.matches,dismissed:jh,view:ut})}function aA(){Po.hidden=Fi.hidden,Po.disabled=Fi.disabled,Po.textContent=Fi.textContent}const bs=A("theme"),bc=document.getElementById("guide"),Cp=qo(En).map(()=>{const n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("r",String(En.radiusPx)),n.setAttribute("stroke-width",String(En.outlinePx)),bc.append(n),n}),na=A("arrow-cue");let aa=Rr(),Hg=Rr(),Gg=0,Lo="visit",Ki={angle:29,pull:.2+.62*.5},oa=0,Gd={tip:{...Vt},angle:29*Math.PI/180},fn="light";try{fn=aT(localStorage,matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}let xe="ready",It={angle:29,power:.62},$e=null,Dt=!1,Ct=null,pn=0,Mc=0,nc=performance.now(),Ta=0,Ip="",zi;try{zi=new gM({canvas:Ke,antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{throw Og.textContent="This clearing needs WebGL. Please try a browser with graphics enabled.",Bg.textContent="GRAPHICS UNAVAILABLE",Ke.hidden=!0,vc.disabled=!0,tc.disabled=!0,new Error("WebGL unavailable")}zi.setClearColor("#dce8df");zi.shadowMap.enabled=!0;zi.shadowMap.type=ca;zi.outputColorSpace=Dn;const rt=new Qp;rt.fog=new sh("#dce8df",38,80);const Bn=new Pa(-11,11,10,-10,.1,100);Bn.position.set(0,9,30);Bn.lookAt(0,3.7,0);const Vd=new cm("#fff7d7","#6a8161",2.6);rt.add(Vd);const Vr=new dm("#fff4d6",3);Vr.position.set(-8,16,10);Vr.castShadow=!0;Vr.shadow.mapSize.set(1024,1024);Object.assign(Vr.shadow.camera,{left:-16,right:16,top:15,bottom:-12,near:.5,far:60});Vr.shadow.bias=-.002;rt.add(Vr);const Do=new Map;function Ua(n){return Do.has(n)||Do.set(n,new To({color:n,roughness:1,metalness:0,flatShading:!0})),Do.get(n)}function Ze(n,e,t,i,r,s,a,o){const c=new at(new zr(r,s,a),Ua(o));return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Fa(n,e,t,i,r){const s=Ze(n,0,0,0,i,e.distanceTo(t),i,r);return s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new O(0,1,0),t.clone().sub(e).normalize()),s}const Lt=(n,e,t=0)=>new O(n,e,t),Ds={x:(Yt.minX+Yt.maxX)/2,y:(Yt.minY+Yt.maxY)/2},ic=Ze(rt,(Yt.minX+Yt.maxX)/2,(Yt.minY+Yt.maxY)/2,-.45,Yt.maxX-Yt.minX,Yt.maxY-Yt.minY,.9,"#cc684a");Ze(rt,Ds.x,Ds.y,.015,.61,.12,.025,"#f4ddb3");Ze(rt,Ds.x,Ds.y,.035,.14,.32,.025,"#4b3c31");Ze(rt,8.31,.3,-.45,1.35,.6,1.5,"#66734a");Ze(rt,0,-.25,-2,27,.9,14,"#7d9461");Ze(rt,0,-.9,-2,27,.4,14,"#8d7653");Ze(rt,0,-1.65,-2,26.2,1.1,13.4,"#b1a17b");for(let n=0;n<7;n++){const e=-16+n*5.5,t=new at(new Ia(6+n%3,9+n%4,4),Ua(n%2?"#afc5ae":"#c2d1bb"));t.position.set(e,3,-18-n%2*3),t.rotation.y=Math.PI/4,rt.add(t)}function Sc(n,e,t){Ze(rt,n,1*t,e,.3*t,2*t,.3*t,"#7c7853"),Ze(rt,n,3*t,e,1.8*t,2.2*t,1.7*t,"#718d65"),Ze(rt,n-.3*t,4.1*t,e,1.3*t,1.2*t,1.25*t,"#89a176")}Sc(-11.3,-3.8,1.2);Sc(-3.2,-6.5,.8);Sc(5.8,-7,1.05);Sc(11.8,-4.5,1.4);for(let n=0;n<34;n++){const e=Math.sin(n*73.3)*12,t=-2-Math.cos(n*29.1)*3;Ze(rt,e,.25,t,.16,.2+n%3*.08,.17,n%6===0?"#e5d0a1":"#96ab6f")}for(const[n,e,t]of[[-4,-1,.5],[4,-2,.7],[10,1,.5]])Ze(rt,n,.3,e,t,t*.65,t,"#a7ae94");const Vn=new Jt;rt.add(Vn);Ze(Vn,-8.02,.55,0,.36,.8,.4,"#38473f");Ze(Vn,-7.32,.55,0,.36,.8,.4,"#38473f");Ze(Vn,-8.08,.2,.12,.64,.24,.55,"#4c4938");Ze(Vn,-7.26,.2,.12,.64,.24,.55,"#4c4938");Ze(Vn,-7.72,1.61,0,.85,1.5,.6,"#d19b58");Ze(Vn,-7.72,1.15,.32,.95,.18,.12,"#6b6845");Ze(Vn,-7.72,2.66,0,.65,.65,.6,"#eac795");Ze(Vn,-7.85,3,-.04,.95,.27,.76,"#4d6e57");Ze(Vn,-7.98,2.72,-.02,.23,.45,.65,"#4d6e57");Ze(Vn,-7.4,2.73,.32,.08,.08,.07,"#34483c");Fa(Vn,Lt(-8.14,1.6,-.38),Lt(-8.36,2.8,-.38),.28,"#786244");const Ns=new Jt;Ns.position.set(Vt.x,Vt.y,.12);rt.add(Ns);const Nl=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let n=1;n<Nl.length;n++)Fa(Ns,Lt(...Nl[n-1]),Lt(...Nl[n]),.075,"#78523c");const Vg=new Wt().setFromPoints([Lt(0,-.92),Lt(-.3,0),Lt(0,.92)]),oA=new fs(Vg,new Ts({color:"#f1e7bf"}));Ns.add(oA);const cA=Fa(rt,Lt(-7.7,2.3,.42),Lt(Vt.x,Vt.y,.42),.23,"#eac795"),lA=Fa(rt,Lt(-7.95,2.3,.45),Lt(-7.8,2.7,.3),.22,"#d19b58"),dA=Fa(rt,Lt(-7.8,2.7,.3),Lt(-7.3,2.7,.12),.18,"#eac795"),hA=Ze(rt,-7.3,2.7,.12,.19,.19,.19,"#eac795");function Ul(n,e,t){const i=n.geometry.parameters.height;n.scale.y=e.distanceTo(t)/i,n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(Lt(0,1,0),t.clone().sub(e).normalize())}function uA(){const n=new Jt;Ze(n,-.6,0,0,1.2,.045,.045,"#f3dfaa");const e=new at(new Ia(.085,.24,4),Ua("#58685d"));return e.rotation.z=-Math.PI/2,e.position.x=-.12,n.add(e),Ze(n,-1.08,0,0,.22,.17,.04,"#e9e6c8"),rt.add(n),n}const Ri=uA(),Wd=new Wt,ka=new fs(Wd,new Ts({color:"#f6edcf",transparent:!0,opacity:.55}));rt.add(ka);const kr=Array.from({length:9},(n,e)=>{const t=Ze(rt,0,0,0,.08+e%2*.05,.08,.08,"#ffedb7");return t.visible=!1,t});let ce=null,rn=null,vi=!1,st=!1,Oa=!1,Us;try{Us=localStorage}catch{}const Cr=new YE(Us),rc=IM(Array.from(document.querySelectorAll('meta[name="archery-api"]'),n=>n.content),location.origin),gn=rc?new hc(rc,fetch,Us):null,No=gn?new gs(gn):null,We=gn?new jE(gn.endpoint,fetch,Us,gn):null,yr=gn?new Km(gn,"private"):null,xs=gn?new Km(gn,"public"):null;function Wg(n,e){const t=A(n);t.hidden=!e.visible,t.caption.textContent=e.title,t.tBodies[0].replaceChildren(...e.rows.map(i=>{const r=document.createElement("tr");return r.dataset.actorId=i.actorId,r.dataset.own=String(i.own),r.dataset.leader=String(i.leader),[i.own?`${i.label} · you`:i.label,String(i.shots),i.accuracy,String(i.damage),String(i.kills)].forEach((s,a)=>{const o=document.createElement("td");o.textContent=s,a===0&&(o.title=s),r.append(o)}),r}))}const qh=new Jt;for(const n of[ic,...rt.children.filter(e=>e instanceof at&&e!==ic&&(e.position.x===Ds.x&&e.position.y===Ds.y||e.position.x===8.31&&e.position.y===.3))])qh.add(n);rt.add(qh);const ui=new Jt;rt.add(ui);ui.visible=!1;const Ws=new Jt;rt.add(Ws);Ws.visible=!1;Ze(Ws,13,-.25,-2,25,.9,14,"#7d9461");Ze(Ws,13,-.9,-2,25,.4,14,"#8d7653");Ze(Ws,13,-1.65,-2,25,1.1,13.4,"#b1a17b");let ei=null,wc=null,sc=null,mn=null;const Aa=new Jt;rt.add(Aa);Aa.visible=!1;const Xd=new ig(()=>Ke.parentElement,"level-wind"),Wr=()=>!!ei&&!ce,Xg=n=>Wr()?Vh(ei,n):lc(n),vo=["#f5f1df","#f5f1df","#222d2a","#222d2a","#59a6c5","#59a6c5","#d96350","#d96350","#efc655","#efc655"];function Kh(){const n=ce.shots.length;return kh(ce.format,Math.max(0,rn||ce.status!=="active"?n-1:n))}function Jh(){if(ut==="range")if(ce){const n=Kh();Cl(Bn,Pi/Li,{minX:n.faceX-.1,maxX:n.faceX+.1,minY:n.centerY-n.radius,maxY:n.centerY+n.radius})}else Wr()?Cl(Bn,Pi/Li,bT(ei)):Cl(Bn,Pi/Li)}function Pp(n,e){for(let t=0;t<10;t++){const i=n.radius*(10-t)/10,r=new at(new As(i,48),Ua(vo[t]));r.rotation.y=-Math.PI/2,r.position.set(n.faceX-t*.001,n.centerY,0),ui.add(r),Ze(ui,n.faceX-.035,n.centerY+i-n.radius/20,0,.09,n.radius/10,.07,vo[t]),Ze(ui,n.faceX-.035,n.centerY-i+n.radius/20,0,.09,n.radius/10,.07,vo[t]);const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("r",String((10-t)/10)),s.setAttribute("fill",vo[t]),s.setAttribute("stroke",t<4?"#a8ada0":"#384d46"),s.setAttribute("stroke-width",".01"),A("face-rings").append(s)}Ze(ui,n.faceX,e.y,-.12,.18,e.height,.18,"#786244")}function Ec(){const n=Wr();qh.visible=!ce&&!n,ui.visible=!!ce||n,Ws.visible=!!ce||n,Aa.visible=n,A("face-inset").hidden=!ce&&!n;for(const e of[...ui.children])ui.remove(e),e instanceof at&&e.geometry.dispose();if(A("face-rings").replaceChildren(),A("face-impact").setAttribute("hidden",""),ce)Pp(Kh(),{y:.5,height:1});else if(n){const e=wc.target,t=e.centerY-e.radius;Pp(e,{y:(.24+Math.max(.24,t))/2,height:Math.max(.2,t-.24)})}n&&ei&&sc?(ST(Aa,ei,sc,Ze),Tc(),Xd.update(ei.wind,ei.rules===Na?1:0)):Xd.hide(),fA(),Jh()}function fA(){if(!Wr()||!ei){delete Ke.dataset.levelStage;return}const n=document.getElementById("level-wind");Ke.dataset.levelStage=JSON.stringify({theme:sc?.name,face:ET(ui),...wT(Aa),wind:{value:n?.dataset.wind===void 0?null:Number(n.dataset.wind),text:n&&!n.hidden?n.textContent:null}})}function pA(){const n=Dt||st||!!We?.pending||xe==="flying"||xe==="aiming";for(const e of["practice","course","endless"]){const t=A(`mode-${e}`);t.disabled=ZE({busy:st,pending:!!We?.pending,state:xe}),t.setAttribute("aria-pressed",String(e===(ce?.format??"practice")))}ce?.status!=="active"&&(A("mode-note").textContent=""),A("challenge-panel").hidden=!ce,A("practice-stats").hidden=!!ce;for(const e of["challenge-restart","challenge-leave","challenge-bank","clear-identity"])A(e).disabled=n||Dt;if(A("online-mode").disabled=n||!!ce,ce){const e=Kh(),t=ce.status!=="active";A("challenge-name").textContent=`${ce.format==="course"?"12-arrow course":"Endless"} · ${vi?"shared scoring":"local"}`,A("challenge-total").textContent=`${ce.total}${ce.format==="course"?" / 120":""} points`;const i=WE(ce.format,ce.shots.length,!!rn);A("challenge-progress").textContent=`${t?"Completed":`Arrow ${i.arrow}${ce.format==="course"?" of 12":""}`} · ${t?e.distance:i.distance} units · ${ce.misses} ${ce.format==="endless"?"/ 3 ":""}misses · ${ce.innerBullseyes} inner bullseyes`,A("challenge-rules").textContent=ce.format==="course"?"3 arrows each at 12, 18, 24 and 30 units. Ten rings, 10 points at center.":"Three misses ends the run. Every 3 arrows: +2 units (max 30), radius −0.1 (min 0.8). End & bank between shots.",A("challenge-bank").hidden=ce.format!=="endless"||t||!ce.shots.length,A("result-actions").hidden=!Sg(ce);for(const r of["result-again","result-practice"])A(r).disabled=n;Fi.hidden=t||!["hit","miss"].includes(xe),Fi.textContent=`${hp(!0)} ↗`,vc.disabled||=t||xe==="hit"||xe==="miss"||st||!!We?.pending,wa.disabled||=t||xe==="hit"||xe==="miss"||st||!!We?.pending,Ea.disabled||=t||xe==="hit"||xe==="miss"||st||!!We?.pending,A("gesture-hint").hidden||=t||st||!!We?.pending,A("publish-form").hidden=!(t&&vi&&!Oa),A("initials").disabled=st||We?.pending?.kind==="publish",A("publish").disabled=st||!!We?.pending&&We.pending.kind==="action"}else Fi.innerHTML=`${hp(!1)} <span>↗</span>`,A("publish-form").hidden=!0,A("result-actions").hidden=!0;Ke.dataset.format=ce?.format??"practice"}let Uo=0;async function _s(n=""){const e=++Uo,t=A("board-format").value;A("board-rules").textContent=`Rules ${ba} · ties share a rank · score, ${t==="endless"?"hits, ":""}inner bullseyes, tens`;const i=Cr.results(t);if(A("local-empty").hidden=i.length>0,A("local-board").replaceChildren(...i.slice(0,10).map(r=>{const s=document.createElement("li");return s.textContent=`${r.total} points · ${r.hits} hits · ${r.shots.length} arrows`,s})),A("challenge-storage").textContent=Cr.message,!We){yo({phase:"off",format:t});return}A("shared-board").replaceChildren(),yo({phase:"loading",format:t}),A("shared-status").textContent=n||"Loading shared board…";try{const r=await We.boards(t);if(e!==Uo)return;mA(r),yo({phase:"loaded",entryCount:r.length,format:t}),A("shared-status").textContent=n||"Shared boards available. Choose shared scoring before starting a challenge."}catch(r){if(e!==Uo)return;A("shared-status").textContent=`${n?n+" ":""}Shared boards unavailable. ${r instanceof Error?r.message:"Try later."} Local challenges are playable.`,A("shared-board").replaceChildren(),yo({phase:"error",format:t})}}function yo(n){const e=sT(n),t=A("shared-empty");t.textContent=e.emptyText,t.hidden=!e.emptyText}function mA(n){A("shared-board").replaceChildren(...n.map(e=>{const t=document.createElement("li");return t.value=e.rank,t.dataset.own=String(e.own),t.textContent=`${e.initials}${e.own?" · you":""} — ${e.total} points · ${e.hits} hits`,t}))}function ua(n){A("network-recovery").hidden=!1,A("network-message").textContent=`${n instanceof Error?n.message:"Connection interrupted."} No result has been promoted to the shared board.`,A("network-retry").hidden=!We?.pending,Cn("Shared action needs attention. Retry it or start a new local challenge.","CHALLENGE WAITING"),yt()}function $d(){if(ce?.status!=="completed")return!1;const n=vi||Cr.save(ce);return _s(),n}function gA(n){BE({landscapePhone:Yh.matches,view:ut,outcome:n})&&scrollTo({top:A("arena-shell").getBoundingClientRect().top+scrollY,behavior:"instant"})}async function mr(n,e=!1){const t=ut==="combat";if(t&&(eu("range"),(ce?.format??"practice")===n))return"switched";if(st||xe==="flying"||$e)return t?"switched":"unchanged";const i=JE(ce,n,e);if(i.action==="noop"||We?.pending&&!e)return t?"switched":"unchanged";if(i.action==="confirm"&&!Eg(()=>confirm("Abandon this challenge? Its unfinished score will not be banked.")))return A("mode-note").textContent=i.declineMessage,t?"switched":"unchanged";A("mode-note").textContent="",Dt&&Xr(!1),e&&(We.pending=null),st=!0,yt();let r="switched";try{const s=n!=="practice"&&!e&&!!We&&A("online-mode").checked;let a=null;n!=="practice"&&(a=s?(await We.start(n)).state:Mg(n)),ce=a,vi=s,rn=null,mn=null,Oa=!1,A("network-recovery").hidden=!0,A("publish-form").hidden=!0,A("board-format").value=n==="practice"?"course":n,xe="ready",Ct=null,pn=0,ka.visible=!1,A("shot-result").hidden=!0;for(const o of kr)o.visible=!1;Ec(),Cn("Pull back. Breathe. Release.",ce?"CHALLENGE READY":"YOUR NEXT SHOT"),_s()}catch(s){r="failed",ua(s)}finally{st=!1,yt()}return r}async function xA(n){st=!0,yt();try{ce=vi?(await We.shot(n)).state:Bh(ce,n),rn=ce.shots.at(-1).outcome,Qh(n)}catch(e){xe="ready",ua(e)}finally{st=!1,yt()}}function _A(){if(!ce||!rn||!Ct)return;xe=rn.hit?"hit":"miss",pn=rn.at,Mc=Ta,A("shot-result-caption").textContent="Actual impact · ten-ring scoring",A("shot-result-value").textContent=rn.hit?`${rn.score} points${rn.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",A("shot-result").hidden=!1;const n=rn.impact;if(n){const t=ce.shots.at(-1).target,i=A("face-impact");i.setAttribute("cx","0"),i.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-t.centerY)/t.radius)))),i.removeAttribute("hidden")}const e=$d();Cn(ce.status==="completed"?`${ce.total} points. ${vi?"Publish with your initials below.":e?"Saved to this browser’s local board.":Cr.message}`:rn.hit?"On the face. Take your next arrow when ready.":"Outside the face. Take your next arrow when ready.",ce.status==="completed"?"CHALLENGE COMPLETE":rn.hit?"SCORED":"MISS"),yt(),Yd()}function vA(){if(!mn||!Ct)return;xe=mn.hit?"hit":"miss",pn=mn.at,Mc=Ta,A("shot-result-caption").textContent="Level shot · ten-ring face · local, not scored",A("shot-result-value").textContent=mn.hit?`${mn.score} points${mn.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",A("shot-result").hidden=!1;const n=mn.impact,e=wc.target;if(n){const t=A("face-impact");t.setAttribute("cx","0"),t.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-e.centerY)/e.radius)))),t.removeAttribute("hidden")}Cn(mn.hit?"On the face.":"Stopped short or off the face. Try again.",mn.hit?"TARGET HIT":"ANOTHER TRY"),yt()}function Yd(){if(xe==="flying")return;const n=$E(ce?.status==="completed",window.matchMedia("(pointer: coarse)").matches,wg(ce,vi,Oa)),e=n==="initials"?A("initials"):n==="result"?A("status"):null;e&&!e.disabled&&e.offsetParent!==null&&e.focus({preventScroll:!0})}function bo(){return!wg(ce,vi,Oa)||Eg(()=>confirm(XE))}function yA(){for(const n of["practice","course","endless"])A(`mode-${n}`).addEventListener("click",()=>{mr(n).then(gA)});if(A("challenge-restart").addEventListener("click",()=>{bo()&&mr(ce.format)}),A("challenge-leave").addEventListener("click",()=>{bo()&&mr("practice")}),A("result-again").addEventListener("click",()=>{bo()&&mr(ce.format)}),A("result-practice").addEventListener("click",()=>{bo()&&mr("practice")}),A("challenge-bank").addEventListener("click",async()=>{if(!(!ce||st||Dt||$e||xe==="flying"||We?.pending)){st=!0,yt();try{ce=vi?(await We.bank()).state:zh(ce);const n=$d();Cn(`${ce.total} points banked.${n?"":" "+Cr.message}`,"CHALLENGE COMPLETE")}catch(n){ua(n)}finally{st=!1,yt(),Yd()}}}),A("board-format").addEventListener("change",()=>{_s()}),A("network-local").addEventListener("click",()=>{mr(ce?.format??"course",!0)}),A("network-retry").addEventListener("click",async()=>{if(!(st||!We?.pending)){if(We.pending.kind==="publish"){A("publish-form").requestSubmit();return}st=!0,yt();try{const n=We.pending.body.kind;if(ce=(await We.retry()).state,A("network-recovery").hidden=!0,n==="shot"){const e=ce.shots.at(-1);rn=e.outcome,Qh(e.aim)}else $d(),Cn(`${ce.total} points banked.`,"CHALLENGE COMPLETE")}catch(n){ua(n)}finally{st=!1,yt(),Yd()}}}),A("publish-form").addEventListener("submit",async n=>{if(n.preventDefault(),st||!We)return;const e=A("initials").value.trim().toLowerCase();st=!0,++Uo,yt();try{await We.publish(e),Cr.saveInitials(e),Oa=!0,A("network-recovery").hidden=!0,A("publish-form").hidden=!0;const t="Published. The shared board keeps your strongest result for this format and rules version.";A("shared-status").textContent=t,await _s(t)}catch(t){ua(t)}finally{st=!1,yt()}}),A("clear-identity").addEventListener("click",()=>{st||xe==="flying"||$e||We?.pending||confirm("Forget this browser’s shared guest identity? Any unfinished challenge is abandoned. Published scores remain, and this browser will no longer own them. Local results and saved practice stay.")&&(We?.forget(),Ve?.forgetRoom(),mt?.forgetArena(),ke.clearSnapshot(),ce=null,rn=null,vi=!1,A("online-mode").checked=!1,mr("practice",!0))}),A("initials").value=Cr.initials(),A("online-choice").hidden=!We,A("clear-identity").hidden=!We,_s(),We){const n=new WebSocket(gn.endpoint.boardSocket);n.addEventListener("message",e=>{try{const t=JSON.parse(String(e.data));typeof t=="object"&&t!==null&&"type"in t&&t.type==="board-changed"&&_s()}catch{}}),window.addEventListener("pagehide",()=>n.close(),{once:!0})}}const bA={"#cc684a":"#cf785c","#7d9461":"#445c48","#8d7653":"#645b47","#b1a17b":"#7d765f","#afc5ae":"#3b5150","#c2d1bb":"#465e5b","#718d65":"#405d4d","#89a176":"#58735a","#96ab6f":"#64794d","#a7ae94":"#737f6e","#66734a":"#556343"};function Tc(){ke?.setTheme(fn),document.documentElement.dataset.theme=fn,bs.setAttribute("aria-pressed",String(fn==="dark")),bs.setAttribute("aria-label",fn==="dark"?"Switch to light theme":"Switch to dark theme"),bs.textContent=fn==="dark"?"☀ Light":"☾ Dark";const n=fn==="dark"?"#202f36":"#dce8df";zi.setClearColor(n),rt.fog.color.set(n),Vd.color.set(fn==="dark"?"#c6d7e8":"#fff7d7"),Vd.groundColor.set(fn==="dark"?"#435b4b":"#6a8161"),Vr.color.set(fn==="dark"?"#d7def1":"#fff4d6");for(const[e,t]of Do)t.color.set(fn==="dark"?bA[e]??e:e);document.querySelector('meta[name="theme-color"]')?.setAttribute("content",fn==="dark"?"#18231f":"#eef2de")}function Ac(){const n=Lo==="visit"?aa:Hg;A("shots-value").textContent=String(n.completed),A("hit-count-value").textContent=String(n.hits),A("hits-value").textContent=n.completed?`${Math.round(n.hits/n.completed*100)}%`:"0%",A("best-value").textContent=n.best===null?"—":`${n.best.toFixed(2)} units`,A("mean-value").textContent=n.mean===null?"—":`${n.mean.toFixed(2)} units`,A("streak-value").textContent=String(n.currentStreak),A("best-streak-value").textContent=String(n.bestStreak),A("spread-value").textContent=n.completed?`${Math.sqrt(n.m2/n.completed).toFixed(2)} units`:"—",A("recent-shots").replaceChildren(...n.recent.map(e=>{const t=document.createElement("li");return t.textContent=`${e.hit?"Hit":"Miss"} · ${e.distance.toFixed(2)} units · ${e.angle.toFixed(1)}° · ${(e.power*100).toFixed(1)}% power`,t})),A("recent-empty").hidden=n.completed>0,A("visit-stats").setAttribute("aria-pressed",String(Lo==="visit")),A("saved-stats").setAttribute("aria-pressed",String(Lo==="saved"))}const Rc=new iT(n=>{Hg=n.stats,A("save-status").textContent=n.message,A("save-status").dataset.state=n.state,Ac()});for(const[n,e]of[["visit-stats","visit"],["saved-stats","saved"]])A(n).addEventListener("click",()=>{$e||(Lo=e,Ac(),e==="saved"&&Rc.refresh())});document.querySelector(".recent-details summary")?.addEventListener("click",n=>{$e&&n.preventDefault()});A("clear-practice").addEventListener("click",()=>{$e||(A("clear-confirmation").hidden=!1)});A("cancel-clear").addEventListener("click",()=>{$e||(A("clear-confirmation").hidden=!0)});A("confirm-clear").addEventListener("click",()=>{$e||(A("clear-confirmation").hidden=!0,Rc.clear())});window.addEventListener("focus",()=>{ut==="range"&&Rc.refresh()});function Cn(n,e){Og.textContent=n,Bg.textContent=e}function yt(){if(ut!=="range")return;A("angle-value").textContent=`${Math.round(It.angle)}°`,A("power-value").textContent=`${Math.round(It.power*100)}%`,A("angle-meter").style.width=`${It.angle/80*100}%`,A("power-meter").style.width=`${It.power*100}%`,wa.value=String(Math.round(It.angle)),Ea.value=String(Math.round(It.power*100));const n=Dt||xe==="aiming"||xe==="flying"||st||!!We?.pending;bs.disabled=xe==="aiming",A("mode-combat").disabled=xe==="aiming"||st||!!We?.pending;for(const t of["visit-stats","saved-stats","clear-practice","confirm-clear","cancel-clear"])A(t).disabled=xe==="aiming";vc.disabled=n,wa.disabled=n,Ea.disabled=n,Fi.hidden=xe!=="hit"&&xe!=="miss";const e=DE(xe,!!ce,Yh.matches?"on-stage":"below");nA.hidden=!e||Dt,e&&(iA.textContent=e.icon,rA.textContent=e.text),Ke.dataset.state=xe,Ke.dataset.paused=String(Dt),pA(),aA()}function Ra(){if(!(xe==="flying"||Dt||st||We?.pending||ce&&ce.status!=="active")){(ce||Wr())&&(rn=null,mn=null,Ec()),xe="ready",Ct=null,pn=0,ka.visible=!1,A("shot-result").hidden=!0;for(const n of kr)n.visible=!1;Cn("Pull back. Breathe. Release.","YOUR NEXT SHOT"),yt()}}function Zh(){if(ut==="range"&&!(Dt||xe==="flying"||st||We?.pending)){if(ce){if(ce.status!=="active"||xe!=="ready"&&xe!=="aiming")return;xA({...It});return}Wr()&&(mn=Ag(wc,It),Ke.dataset.levelOutcome=JSON.stringify(mn)),Qh(It)}}function Qh(n){It={...n};const e=jo(Ki,oa),t=Ki.angle*Math.PI/180;Gd={tip:{x:e.nock.x+Math.cos(t)*1.2,y:e.nock.y+Math.sin(t)*1.2},angle:t},Ct=Xg(It),Ke.dataset.shot=JSON.stringify(Ct),Gg++,pn=0,xe="flying",ka.visible=!0,A("shot-result").hidden=!0;for(const i of kr)i.visible=!1;Cn("Let it fly…","ARROW IN FLIGHT"),yt()}function Fl(n,e){if(xe!=="flying"||!Ct)return;xe=n?"hit":"miss",pn=e,Mc=Ta,A("shot-result-caption").textContent="Closest approach · this shot";const t=QE(Ct,xM,e),i=aa;aa=Hh(aa,Gg,n,t,It),Ac(),aa!==i&&Rc.append({hit:n,distance:t,...It}),A("shot-result-value").textContent=`${t.toFixed(2)} units from center`,A("shot-result").hidden=!1;const r=Kt(Ct,e),s=(Yt.minX-Ct.origin.x)/Ct.velocity.x,a=Kt(Ct,s);Ip=a.y>Yt.maxY?"A little high. Try less angle or draw.":a.y<Yt.minY?"A little low. Try more draw or angle.":"Just short. Give it a little more draw.",Cn(n?"A lovely shot.":Ip,n?"TARGET HIT":"ANOTHER TRY");for(const o of kr)o.position.set(r.x,r.y,.2);yt()}function ii(n=!0){if(!$e)return;const e=$e;$e=null,Ke.hasPointerCapture(e.id)&&Ke.releasePointerCapture(e.id),It=e.previous,ha.hidden=!0,xe="ready",n&&Cn("Draw cancelled. Take your time.","YOUR NEXT SHOT"),yt()}function Xr(n){ii(!1),Dt=n,nc=performance.now(),A("paused").hidden=!Dt,tc.textContent=Dt?"▶":"Ⅱ",tc.setAttribute("aria-label",Dt?"Resume game":"Pause game"),yt()}Ke.addEventListener("pointerdown",n=>{if(ut!=="range"||Dt||xe==="flying"||st||We?.pending||ce&&(ce.status!=="active"||xe==="hit"||xe==="miss")||$e||!n.isPrimary||n.button!==0)return;n.preventDefault(),(xe==="hit"||xe==="miss")&&Ra();const e=Ke.getBoundingClientRect();$e={id:n.pointerId,x:n.clientX,y:n.clientY,width:e.width,height:e.height,vw:innerWidth,vh:innerHeight,previous:{...It},valid:!1},Ke.setPointerCapture(n.pointerId),Ke.focus({preventScroll:!0}),ha.style.left=`${n.clientX-e.left}px`,ha.style.top=`${n.clientY-e.top}px`,ha.hidden=!1,xe="aiming",Cn("Pull left and down. Release to shoot.","FIND YOUR ARC"),yt()});function $g(n){if(ut!=="range"||!$e||n.pointerId!==$e.id)return;const e=lh(n.clientX-$e.x,n.clientY-$e.y,$e.width,$e.height);$e.valid=e!==null,e&&(It=e),Cn(e?"Release when it feels right.":"Pull left and down to draw the bow.","FIND YOUR ARC"),yt()}Ke.addEventListener("pointermove",$g);Ke.addEventListener("pointerup",n=>{if(ut!=="range"||!$e||n.pointerId!==$e.id)return;if($g(n),!$e?.valid){ii();return}const e=$e.id;$e=null,ha.hidden=!0,Ke.hasPointerCapture(e)&&Ke.releasePointerCapture(e),Zh()});Ke.addEventListener("pointercancel",n=>{$e?.id===n.pointerId&&ii()});Ke.addEventListener("lostpointercapture",n=>{$e?.id===n.pointerId&&ii()});Ke.addEventListener("contextmenu",n=>n.preventDefault());function MA(){return!$e||yg($e,Ke.getBoundingClientRect())}function SA(){return!$e||yg({width:$e.vw,height:$e.vh},{width:innerWidth,height:innerHeight})}window.addEventListener("resize",()=>{ut==="range"?SA()&&ii():ke.cancelInput()});window.addEventListener("orientationchange",()=>{ut==="range"?ii():ke.cancelInput()});for(const n of[Yh,zg])n.addEventListener("change",()=>{yc(),yt()});A("rotate-hint-dismiss").addEventListener("click",()=>{jh=!0;try{OE(localStorage)}catch{}yc(),Ke.focus({preventScroll:!0})});Po.addEventListener("click",()=>Fi.click());yc();window.addEventListener("blur",()=>{ut==="range"?Xr(!0):ke.cancelInput()});document.addEventListener("visibilitychange",()=>{document.hidden&&(ut==="range"?Xr(!0):ke.cancelInput())});tc.addEventListener("click",()=>Xr(!Dt));bs.addEventListener("click",()=>{if(!$e){fn=fn==="dark"?"light":"dark",Tc();try{oT(localStorage,fn)}catch{}}});A("resume").addEventListener("click",()=>{Xr(!1),Ke.focus({preventScroll:!0})});Fi.addEventListener("click",()=>{Ra(),Ke.focus({preventScroll:!0})});vc.addEventListener("click",()=>{ii(!1),Zh()});for(const n of[wa,Ea])n.addEventListener("input",()=>{if(xe==="flying"||Dt||st||We?.pending||ce&&(ce.status!=="active"||xe==="hit"||xe==="miss")){yt();return}const e={angle:Number(wa.value),power:Number(Ea.value)/100};ii(!1),(xe==="hit"||xe==="miss")&&Ra(),It=e,yt()});window.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLButtonElement||n.target instanceof HTMLElement&&["SUMMARY","SELECT","TEXTAREA"].includes(n.target.tagName)||n.target instanceof HTMLElement&&n.target.isContentEditable)){if(ut==="combat"){ke.keydown(n);return}if(n.code==="KeyP"){n.preventDefault(),n.repeat||Xr(!Dt);return}if(n.code==="Escape"){ii();return}if(!(Dt||$e||st||We?.pending||ce&&ce.status!=="active")){if(n.code==="Space"){if(n.preventDefault(),n.repeat)return;xe==="hit"||xe==="miss"?Ra():Zh()}else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.code)&&xe!=="flying"){if(n.preventDefault(),xe==="hit"||xe==="miss"){if(ce)return;Ra()}It.angle=Pr(It.angle+(n.code==="ArrowLeft"?-1:n.code==="ArrowRight"?1:0),5,80),It.power=Pr(It.power+(n.code==="ArrowDown"?-.02:n.code==="ArrowUp"?.02:0),.08,1),yt()}}}});let Pi=1,Li=1;const wA=new ResizeObserver(()=>{ut==="range"?MA()&&ii():ke.cancelInput();const{width:n,height:e}=Ke.getBoundingClientRect();n<=0||e<=0||(zi.setSize(Math.round(n*.85),Math.round(e*.85),!1),Pi=n,Li=e,bc.setAttribute("viewBox",`0 0 ${n} ${e}`),ut==="range"?Jh():ke.resize(n,e))});wA.observe(Ke);Ke.addEventListener("webglcontextlost",n=>{if(n.preventDefault(),ut==="combat"){ke.cancelInput(),A("combat-message").textContent="Graphics interrupted. Reload to reconnect with the same guest.";return}Xr(!0),Cn("Graphics interrupted. Reload to return to the clearing.","GRAPHICS PAUSED")});function Yg(n){requestAnimationFrame(Yg);const e=Math.max(0,(n-nc)/1e3);if(nc=n,ut==="combat"){ke.render(zi,e),jg();return}if(!Dt&&(Ta+=e,xe==="flying"&&Ct)){const c=Math.min(pn+e,Ot.maxFlight);if(ce&&rn)c>=rn.at?_A():pn=c;else if(Wr()&&mn)c>=mn.at?vA():pn=c;else{const l=hh(Ct,Yt,pn,c),u=uh(Ct);l!==null&&l<=u?Fl(!0,l):c>=u?Fl(!1,u):c>=Ot.maxFlight?Fl(!1,c):pn=c}}const t={angle:It.angle,pull:.2+It.power*.5};Dt||(Ki=Jm(Ki,t,e),oa+=((Ct?1:0)-oa)*(1-Math.exp(-18*e)));const i=Ki.angle*Math.PI/180,r=jo(Ki,oa);Ns.rotation.z=i,Ns.position.set(r.bow.x,r.bow.y,.12);const s=Vg.attributes.position;if(s.setXYZ(1,(r.nock.x-r.bow.x)*Math.cos(i)+(r.nock.y-r.bow.y)*Math.sin(i),0,0),s.needsUpdate=!0,Ul(cA,Lt(-7.7,2.3,.42),Lt(r.bow.x+Math.cos(i)*.37,r.bow.y+Math.sin(i)*.37,.12)),Ul(lA,Lt(-7.95,2.3,.45),Lt(r.elbow.x,r.elbow.y,.28)),Ul(dA,Lt(r.elbow.x,r.elbow.y,.28),Lt(r.hand.x,r.hand.y,.12)),hA.position.set(r.hand.x,r.hand.y,.12),Ct){const c=la(Ct,pn,Gd);Ri.position.set(c.position.x,c.position.y,.12),Ri.rotation.z=c.angle;const l=Array.from({length:16},(u,d)=>{const h=Math.max(0,pn-.23+d/15*.23),p=la(Ct,h,Gd).position;return Lt(p.x,p.y,.04)});Wd.setFromPoints(l)}else Ri.position.set(r.nock.x+Math.cos(i)*1.2,r.nock.y+Math.sin(i)*1.2,.12),Ri.rotation.z=i;const a=Xg(It);if(bc.style.visibility=!Ct&&!Dt&&(xe!=="aiming"||$e?.valid)?"visible":"hidden",qo(En).forEach((c,l)=>{const u={x:r.nock.x+Math.cos(i)*1.2,y:r.nock.y+Math.sin(i)*1.2},d=la(a,c,{tip:u,angle:i}).position,h=Lt(d.x,d.y,.06).project(Bn);Cp[l].setAttribute("cx",String((h.x+1)*Pi/2)),Cp[l].setAttribute("cy",String((1-h.y)*Li/2))}),na.hidden=!0,Ct&&xe==="flying"&&!Dt){const c=Lt(Ri.position.x,Ri.position.y,.12).project(Bn);if(Math.abs(c.x)>1||Math.abs(c.y)>1){const l=c.x*Pi/2,u=-c.y*Li/2,d=Math.min((Pi/2-20)/Math.abs(l),(Li/2-20)/Math.abs(u));na.style.left=`${Pi/2+l*d}px`,na.style.top=`${Li/2+u*d}px`,na.style.setProperty("--cue-angle",`${Math.atan2(u,l)+Math.PI/2}rad`),na.hidden=!1}}const o=Ta-Mc;kr.forEach((c,l)=>{if(c.visible=xe==="hit"&&o<.65,c.visible&&Ct){const u=Kt(Ct,pn),d=l/kr.length*Math.PI*2;c.position.set(u.x+Math.cos(d)*o*2,u.y+Math.sin(d)*o*2-o*o*2,.25)}}),ic.material=Ua(xe==="hit"&&o<.2?"#edbc7e":"#cc684a"),ic.material.color.set(xe==="hit"&&o<.2?"#edbc7e":fn==="dark"?"#cf785c":"#cc684a"),Ke.dataset.pose=JSON.stringify({angle:Ki.angle,pull:Ki.pull,release:oa,...r,arrow:{x:Ri.position.x,y:Ri.position.y,angle:Ri.rotation.z},trail:Array.from(Wd.getAttribute("position")?.array??[]),flightTime:pn}),Ke.dataset.view=JSON.stringify([Bn.left,Bn.right,Bn.top,Bn.bottom]),zi.render(rt,Bn)}ke=new dE(Ke);const EA=new wS({shell:A("arena-shell"),expand:A("arena-expand"),exit:A("arena-exit"),controlsToggle:A("arena-controls-toggle"),doc:document,win:window,cancelInput:()=>ke.cancelInput(),isDrawing:()=>ke.drawing,canExpand:()=>ut==="combat"&&Et==="public"&&Ft,setModal:eA,focusFallback:tA,onChange:n=>ke.setHudMode(Sr(n)?"expanded":"inline")});RA();AA();Tc();Ac();yA();yt();TA();requestAnimationFrame(Yg);function Lp(n,e){if(ei=n,wc=Gh(n),sc=e,mn=null,!(ut!=="range"||xe==="flying"||$e)){xe="ready",Ct=null,pn=0,ka.visible=!1,A("shot-result").hidden=!0;for(const t of kr)t.visible=!1;Ec(),Cn("Pull back. Breathe. Release.","LEVEL READY"),yt()}}function TA(){const n=vT(location.search);if(n){try{Lp(ZT(n.seed,n.index,n.windOn),gp(n.seed,n.index))}catch{return}window.archeryLevelDebug={set:(e,t=0,i=0)=>Lp(e,gp(t,i)),geometry:()=>ei?Xh(ei):null}}}function eu(n){if(n!==ut){n==="combat"?(A("mode-note").textContent="",ii(!1),ut=n,ke.activate()):(ke.deactivate(),ut=n,Et==="public"&&(Ft=!1,mt?.close())),nc=performance.now(),document.body.dataset.view=n,yc();for(const e of[".controls",".boards"]){const t=document.querySelector(e);t&&(t.hidden=n==="combat")}for(const e of["combat-panel","combat-controls","combat-scene-label"])A(e).hidden=n!=="combat";for(const e of["pause","guide","gesture-hint","arrow-cue","shot-result","face-inset","paused"])A(e).hidden=n==="combat";n==="combat"&&Xd.hide(),A("challenge-panel").hidden=n==="combat"||!ce,A("mode-combat").setAttribute("aria-pressed",String(n==="combat"));for(const e of["practice","course","endless"]){const t=A(`mode-${e}`);t.disabled=!1,n==="combat"&&t.setAttribute("aria-pressed","false")}Ke.dataset.viewMode=n,tu(),document.querySelector(".play-area").hidden=!1,n==="combat"?(bc.style.visibility="hidden",ke.resize(Pi,Li)):(Jh(),Tc(),Ec(),A("paused").hidden=!Dt,A("shot-result").hidden=xe!=="hit"&&xe!=="miss",yt())}}function AA(){const n=VS(location.search),e=WS(location);if(e!==null)try{history.replaceState(history.state,"",e)}catch{}if(!n||!Ve)return;Et="private",eu("combat"),qt();const t=A("combat-join-code");!t.disabled&&!Ve.room&&(t.value=n,kn="Invitation code filled in. Tap Join room to enter.",qt(),window.matchMedia("(pointer: coarse)").matches||A("combat-join").focus())}function RA(){Ve=gn?new OS(gn.endpoint,fetch,Us,gn):null,mt=gn?new oS(gn.endpoint,fetch,Us,gn):null,A("mode-combat").addEventListener("click",()=>{st||We?.pending||$e||(eu("combat"),qt(),Et==="public"&&A("skirmish-title").focus())});let n=!1;A("combat-share").addEventListener("click",async()=>{const t=Ve?.room?.code;if(!t||n)return;n=!0;let i;try{i=await jS(navigator,t,GS(location,t))}finally{n=!1}if(!(i==="cancelled"||i==="shared")){if(i==="copied")kn=Fd,Er&&clearTimeout(Er),Er=window.setTimeout(()=>{Er=0,kn===Fd&&(kn="",qt())},4e3);else{kn=zS;const r=A("combat-code"),s=window.getSelection();if(s){const a=document.createRange();a.selectNodeContents(r),s.removeAllRanges(),s.addRange(a)}}qt()}});const e=async t=>{kn="";try{await t()}catch(i){kn=i instanceof Error?i.message:"The combat service is unavailable. Reconnect or retry the pending action."}qt()};A("combat-create").addEventListener("click",()=>{Ve&&e(()=>{const t=A("combat-preset").value,i=t==="teams-1"?{mode:"teams",preset:"teams-1"}:t==="royale-shrink-1"||t==="royale-fixed-1"?{mode:"royale",preset:t}:void 0;return Ve.create(i)})}),A("combat-join-form").addEventListener("submit",t=>{t.preventDefault(),Ve&&e(()=>Ve.join(A("combat-join-code").value))}),kg=new LE(async t=>{const i=Ve;return!i||ke.drawing||i.busy||i.pending||!i.room?"skip":(await e(()=>i.command(t)),kn?"error":"done")}),A("combat-ready").addEventListener("click",()=>{const t=Ve;t?.room&&e(()=>t.command({kind:"ready",ready:!t.room.state.seats.find(i=>i.actorId===t.room.membership.actorId)?.ready}))}),A("combat-start").addEventListener("click",()=>{Ve&&e(()=>Ve.command({kind:"start"}))}),A("combat-pass").addEventListener("click",()=>{Et==="public"?mt&&kl(()=>mt.command({kind:"pass"})):Ve&&e(()=>Ve.command({kind:"pass"}))}),A("combat-cancel").addEventListener("click",()=>{const t=Ve?.room?.state.action;Ve&&t&&e(()=>Ve.command({kind:"cancel",cancelActionId:t.id}))}),A("combat-rematch").addEventListener("click",()=>{const t=Ve;if(!t?.room||ke.drawing)return;const i=bm(t.room.state,t.room.successor);i.kind!=="none"&&e(async()=>{i.kind==="request"&&await t.command({kind:"rematch"}),await t.followRematch()})}),A("combat-leave").addEventListener("click",()=>{Ve&&!ke.drawing&&e(()=>Ve.command({kind:"leave"}))}),A("combat-resign").addEventListener("click",()=>{Ve&&!ke.drawing&&confirm(Ve.room&&Kn(Ve.room.state)?"Resign this match? Your archer will leave the competition.":"Resign this duel? Your opponent wins.")&&e(()=>Ve.command({kind:"resign"}))}),A("combat-retry").addEventListener("click",()=>{Ve&&e(()=>Ve.retry())}),A("combat-reconnect").addEventListener("click",()=>{Ve&&e(()=>Ve.reconnect())}),ke.onShot=(t,i)=>{Et==="public"?mt&&kl(()=>mt.command({kind:"shot",arrow:t,aim:i})):Ve&&e(()=>Ve.command({kind:"shot",arrow:t,aim:i}))},ke.onDrawing=t=>{bs.disabled=t;for(const i of["practice","course","endless","combat"])A(`mode-${i}`).disabled=t;qt()},Ve&&(Ve.onChange=()=>{Et==="private"&&qt()},Ve.onError=t=>{kn=t instanceof Error?t.message:"Connection interrupted. Reconnecting with the same guest.",qt()}),window.addEventListener("pagehide",()=>{Ve?.close(),mt?.close()});for(const t of["private","public"])A(`combat-mode-${t}`).addEventListener("click",()=>{ke.drawing||t===Et||(Ft=!1,Et=t,t==="private"&&mt?.close(),ke.clearSnapshot(),qt(),t==="public"&&(A("skirmish-title").focus(),CA()))});for(const[t,i]of[["join",()=>mt.join()],["reconnect",()=>mt.reconnect()],["rejoin",()=>mt.control("rejoin")],["leave",()=>mt.control("leave")],["retry",()=>mt.retry()]])A(`skirmish-${t}`).addEventListener("click",()=>{if(mt&&!ke.drawing){const r=t==="retry"?mt.pending?.body.kind:t;kl(i,r==="leave"?"leave":t==="retry"||["join","rejoin","reconnect"].includes(r??"")?"enter":"stay")}});A("skirmish-back").addEventListener("click",()=>{nr||mt?.busy||mt?.pending||ke.drawing||(Ft=!1,mt?.close(),qt(),A("skirmish-title").focus())}),yr&&(yr.onChange=()=>{Et==="private"&&qt()}),xs&&(xs.onChange=()=>{Et==="public"&&qt()}),mt&&(mt.onChange=()=>{Et==="public"&&qt()},mt.onError=t=>{Sa=t instanceof Error?t.message:"Connection interrupted. Reconnect with the same guest.",Et==="public"&&qt()}),qt()}function qt(){const n=ut==="combat"&&Et==="public"&&!Ft;Et!=="public"&&tu(),document.querySelector(".play-area").hidden=n,A("combat-controls").hidden=ut!=="combat"||n,A("combat-scene-label").hidden=ut!=="combat"||n;for(const h of["combat-mode-picker","combat-preset-choice","combat-preset-label","combat-rules"])A(h).hidden=!rc;A("combat-private-title").textContent=rc?"Private match":"Private duel",A("combat-private-panel").hidden=Et!=="private",A("skirmish-panel").hidden=Et!=="public";for(const h of["private","public"])A(`combat-mode-${h}`).setAttribute("aria-pressed",String(Et===h)),A(`combat-mode-${h}`).disabled=ke.drawing;if(A("combat-drag-help").textContent=Et==="public"?"Pull left to aim right or right to aim left, and pull down to raise the arc. Release to lock. Facing buttons also work before drawing. The short seven-dot guide shows only the opening arc.":"Pull backward and down from anywhere in the arena. Change facing before drawing. The short seven-dot guide shows only the opening arc.",Et==="public"){No?.syncPrivate(null),IA();return}const e=Ve,t=e?.room,i=t?.state,r=ke.drawing,s=!!e?.busy||!!e?.pending;ke.setTransport(!!e?.connected,s),ke.setLockAgain(!!e?.lockAgain),t?ke.setSnapshot(t.state,t.membership.actorId,e.now):ke.hasRoom&&ke.clearSnapshot(),A("combat-lobby").hidden=!!t;{const h=A("combat-code"),p=t?t.code:"";h.textContent!==p&&(h.textContent=p);const g=A("combat-share");g.hidden=!p,!p&&Er&&(clearTimeout(Er),Er=0,kn===Fd&&(kn="")),p?g.setAttribute("aria-label",`Share room code ${p}`):g.removeAttribute("aria-label")}A("combat-message").textContent=e?kn||(t?e.connected?"Connected to the private room. Share its code with a friend.":"Connecting to the private room. Server clocks continue.":"Create a room or enter a friend’s invitation code."):"Private duel is unavailable here. Practice and local Challenges are available.";for(const h of["create","join","join-code"])A(`combat-${h}`).disabled=!e||s||r||!!t;A("combat-roster").replaceChildren(...(t?AM(t.state,t.membership.actorId,t.connections,e.now):[]).map(h=>{const p=document.createElement("li");p.dataset.actorId=h.actorId,p.textContent=h.text;const g=document.createElement("progress");if(g.max=100,g.value=h.health,g.setAttribute("aria-label",h.healthLabel),p.append(g),h.team!==null){const v=document.createElement("strong");v.className="combat-team",v.textContent=TM(h.team),p.prepend(v)}if(h.lockText!==null){const v=document.createElement("div");v.textContent=h.lockText,p.append(v)}return p}));const a=i&&t?ym(i,t.membership.actorId):null,o=h=>{const p=i?.seats.findIndex(g=>g.actorId===h)??-1;return t?.connections.find(g=>g.actorId===h)?.label??`Archer ${p+1}`},c=i?qm(i):null;t&&i?c?yr?.want(t.roomId,c,`/rooms/${encodeURIComponent(t.roomId)}/stats`):yr?.hold(t.roomId):yr?.clear(),Wg("combat-board",jm(yr?.stats??[],(i?.seats??[]).map(h=>({actorId:h.actorId,label:o(h.actorId)})),t?.membership.actorId??null,ZS(i??null,yr?.loadedKey??null))),A("combat-rules").textContent=i?Kn(i)?"Lock one arrow or pass during shared 20-second planning. Locks are final. Server time continues in the background.":"Two archers · 100 health · alternating 20-second turns. Server time continues in the background.":"Duel alternates turns; Teams and Royale share a planning deadline. Server time continues in the background.",A("combat-key-help").textContent=`← → elevation · ↓ ↑ draw · Space ${i&&Kn(i)?"lock":"fire"} · Escape cancel draw. Combat has no local pause.`,A("combat-preset-label").textContent=a?.preset??"",kg?.render(t,r||s),A("combat-priority").textContent=a?.priority.length?`Priority: ${a.priority.map(o).join(" → ")}`:"",A("combat-pressure").textContent=a?.pressure??"",qg(A("combat-scene-label"),i&&Kn(i)?i.mode==="teams"?"TEAMS 2v2":"ROYALE":"PRIVATE DUEL"),A("combat-preset").disabled=!e||s||r||!!t;const l=i?.seats.find(h=>h.actorId===t?.membership.actorId);A("combat-ready").hidden=i?.state!=="waiting",A("combat-ready").textContent=l?.ready?"Not ready":"Ready",A("combat-start").hidden=i?.state!=="waiting"||!t?.membership.canStart;const u=i&&t?bm(i,t.successor):{kind:"none",label:""};A("combat-rematch").hidden=u.kind==="none",A("combat-rematch").textContent=u.label,A("combat-leave").hidden=!t||i?.state==="active",A("combat-resign").hidden=i?.state!=="active",A("combat-reconnect").hidden=!e||!t&&!e.savedRoom||!!e.connected,A("combat-retry").hidden=!e?.pending;for(const h of["ready","start","rematch","leave","resign","reconnect","retry"])A(`combat-${h}`).disabled=r||!!e?.busy||h!=="retry"&&!!e?.pending;A("combat-start").disabled||=!i||!EM(i)||!e?.connected,A("combat-pass").disabled=r||s||!e?.connected||!i?.seat.canAct,A("combat-pass").textContent=i&&Kn(i)?"Lock pass":"Pass turn",A("combat-cancel").hidden=!!i&&Kn(i)||i?.phase!=="resolving"||i.action?.actorId!==t?.membership.actorId||i.launchAt===null||e.now()>=i.launchAt,A("combat-cancel").disabled=r||s||!e?.connected;const d=a?.result??"";A("combat-result").hidden=!d,A("combat-result").textContent=d,A("combat-phase").textContent=i?i.state==="active"?i.phase.toUpperCase():i.state.toUpperCase():"WAITING FOR A ROOM",A("combat-turn").textContent=a?.turn??"Invite a friend to the arena.",No?.syncPrivate(t&&i?{roomId:t.roomId,state:i}:null),No?.syncPublic(null),jg()}function jg(){if(Et==="public"){Kg();return}const n=Ve?.room,e=n?.state;if(!e){A("combat-clock").textContent="";return}const t=Ve.now();A("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.state==="active"&&e.deadlineAt!==null&&t>=e.deadlineAt&&(A("combat-fire").disabled=!0,A("combat-pass").disabled=!0)}async function kl(n,e="stay"){if(nr)return;nr=!0,Sa="",Et==="public"&&qt();let t=!1;try{await n(),Et==="public"&&ut==="combat"&&(e==="leave"&&mt?.room?.membership.status==="left"?(Ft=!1,t=!0):e==="enter"&&mt?.room&&(Ft=!0,t=!0))}catch(i){Sa=i instanceof Error?i.message:"Public play is unavailable. Reconnect or retry the pending action."}finally{nr=!1,Et==="public"&&(qt(),t&&A("skirmish-title").focus())}}const Ol=new Set;async function CA(){const n=mt,e=n?.savedArena;if(!n||!e||n.room||n.pending||n.busy||nr)return;const t=`${n.locatorKey}|${e.arenaId}|${e.memberId}`;if(Ol.has(t))return;Ol.add(t);let i="unknown";try{i=await n.probeSavedArena()}catch{}i==="unknown"&&Ol.delete(t),i==="gone"&&(Sa="Your last arena ended. Join a new one."),Et==="public"&&qt()}function IA(){const n=mt,e=n?.room,t=e?.state,i=ke.drawing,r=nr||!!n?.busy||!!n?.pending,s=e?cS(e):null;No?.syncPublic(e&&t&&Ft?{arenaId:e.arenaId,memberId:e.membership.memberId,epoch:t.epoch,completedRounds:t.completedRounds}:null),A("skirmish-rules-note").textContent=lS(t?.version??yh),ke.setTransport(Ft&&!!n?.connected,r),ke.setLockAgain(!!n?.lockAgain),e&&Ft?ke.setSnapshot(e.state,e.membership.actorId,n.now):ke.hasRoom&&ke.clearSnapshot(),A("skirmish-entry").hidden=Ft,A("skirmish-roster").hidden=!Ft,A("skirmish-message").textContent=n?Sa||(nr?"Contacting the arena…":Ft?e?n.connected?s.turn:"Connection interrupted. Reconnect to observe or return to this arena.":"Join an arena. NPC archers fill the open places.":n.pending?"An action is awaiting acknowledgement. Retry the original action before continuing.":e?.membership.status==="left"?"You left public play. Rejoin when ready, or return to watch.":e||n.savedArena?"Your arena is saved. Return to play or watch with the same guest.":"Join when ready. NPC archers fill the open places."):"Public play is unavailable here. Practice and local Challenges are available.",A("skirmish-join").hidden=!!e||!!n?.savedArena||!!n?.pending,A("skirmish-rejoin").hidden=!s?.canRejoin,A("skirmish-leave").hidden=!Ft||!s?.canLeave,A("skirmish-reconnect").hidden=!n||!e&&!n.savedArena||Ft&&!!n.connected,A("skirmish-retry").hidden=!n?.pending,A("skirmish-reconnect").textContent=e&&["idle","left","aborted"].includes(e.membership.status)?"Watch arena":Ft?"Reconnect":"Return to arena",A("skirmish-back").hidden=!Ft||!e||!["idle","left","aborted"].includes(e.membership.status),A("skirmish-back").disabled=i||r;for(const o of["join","reconnect","rejoin","leave","retry"])A(`skirmish-${o}`).disabled=!n||i||nr||!!n.busy||o!=="retry"&&!!n.pending;{const o=A("arena-status"),c=A("skirmish-message").textContent??"";o.textContent!==c&&(o.textContent=c)}tu();const a=t?qm(t):null;e&&t&&Ft?a?xs?.want(`${e.arenaId}:${t.epoch}`,a,`/skirmish/${encodeURIComponent(e.arenaId)}/stats`):xs?.hold(`${e.arenaId}:${t.epoch}`):xs?.clear(),Wg("skirmish-board",jm(xs?.stats??[],e&&Ft?Sh(e):[],e?.membership.actorId??null,!1)),A("combat-preset-label").textContent="",qg(A("combat-scene-label"),"PUBLIC ARENA"),A("combat-phase").textContent=s?.phase??"JOIN A PUBLIC ARENA",A("combat-turn").textContent=s?.turn??"Continuous play with human and NPC archers.",A("combat-priority").textContent=t?.priority.length?`Priority: ${t.priority.map(o=>e.connections.find(c=>c.actorId===o)?.label??"Archer").join(" → ")}`:"",A("combat-pressure").textContent=s?.warning??"",A("combat-result").hidden=!0,A("combat-result").textContent="",A("combat-key-help").textContent="← → elevation · ↓ ↑ draw · Space lock · Escape cancel draw. Public play follows server time.",A("combat-cancel").hidden=!0,A("combat-pass").textContent="Lock pass",A("combat-pass").disabled=!Ft||i||r||!n?.connected||!e?.membership.canAct,Kg()}function qg(n,e,t=" · SIDE VIEW"){if(n.textContent===e+t&&n.querySelector(".scene-label-extra"))return;const i=document.createElement("span");i.className="scene-label-extra",i.textContent=t,n.replaceChildren(e,i)}function Kg(){const n=mt,e=n?.room?.state,t=n?.now()??0,i=Vm(e,t);A("combat-clock").textContent="";const r=A("arena-clock");r.dataset.kind!==i.kind&&(r.dataset.kind=i.kind);const s=A("arena-clock-value"),a=A("arena-clock-state");s.textContent!==i.text&&(s.textContent=i.text),a.textContent!==i.stateText&&(a.textContent=i.stateText),r.getAttribute("aria-label")!==i.label&&r.setAttribute("aria-label",i.label);const o=e&&Ft?QT.observe(e,t):null;o&&(r.dataset.nativeMs=String(o.nativeMs),r.dataset.firstRemainingMs=String(Math.round(o.firstRemainingMs)),r.dataset.firstMarginMs=String(o.marginMs===null?"":Math.round(o.marginMs))),e&&e.deadlineAt!==null&&t>=e.deadlineAt&&(A("combat-fire").disabled=!0,A("combat-pass").disabled=!0)}function tu(){const n=mt?.room,e=ut==="combat"&&Et==="public"&&Ft&&!!n;if(A("arena-hud").hidden=!e,A("skirmish-roster").hidden=!e,EA.setAvailable(e),!e||!n){Ll="";return}const t=`${n.arenaId}:${n.state.epoch}:${n.state.revision}:${n.snapshotRevision}:${n.membership.actorId}:${n.membership.status}`;t!==Ll&&(Ll=t,A("arena-priority").replaceChildren(...mS(n).map(i=>{const r=document.createElement("li");r.className="arena-icon",r.dataset.actorId=i.actorId,r.dataset.slot=i.slotId,r.dataset.own=String(i.own),r.dataset.npc=String(i.npc),r.style.setProperty("--slot",i.color),r.style.setProperty("--slot-ink",i.ink),r.setAttribute("aria-label",i.ariaLabel),i.current&&r.setAttribute("aria-current","true");const s=document.createElement("span");return s.setAttribute("aria-hidden","true"),s.textContent=i.symbol,r.append(s),r})),A("skirmish-roster").replaceChildren(...gS(n).map(i=>{const r=document.createElement("li");r.dataset.actorId=i.actorId,r.dataset.kind=i.npc?"npc":"human",r.dataset.slot=i.slotId,r.dataset.status=i.status,r.dataset.own=String(i.own),r.style.setProperty("--slot",i.color),r.style.setProperty("--slot-ink",i.ink);const s=document.createElement("span");s.className="arena-swatch",s.setAttribute("aria-hidden","true"),s.textContent=i.symbol;const a=document.createElement("span");a.className="arena-health-name",a.textContent=`${i.label}${i.own?" · you":i.npc?" · NPC":""}${i.locked?" · locked":""}`;const o=document.createElement("span");o.className="arena-health-value",o.textContent=i.valueText;const c=document.createElement("progress");return c.max=100,c.value=i.health,c.setAttribute("aria-label",i.ariaLabel),r.append(s,a,o,c),r})))}
