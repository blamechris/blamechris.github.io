(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const bc="183",Wd=0,dl=1,Xd=2,Kr=1,qd=2,qr=3,Ei=0,ln=1,ii=2,si=0,pr=1,ul=2,fl=3,pl=4,Yd=5,Oi=100,$d=101,jd=102,Kd=103,Zd=104,Jd=200,Qd=201,eu=202,tu=203,wo=204,To=205,nu=206,iu=207,ru=208,su=209,au=210,ou=211,cu=212,lu=213,hu=214,Ao=0,Ro=1,Co=2,xr=3,Io=4,Po=5,Lo=6,Do=7,wh=0,du=1,uu=2,kn=0,Th=1,Ah=2,Rh=3,Ch=4,Ih=5,Ph=6,Lh=7,Dh=300,Wi=301,vr=302,La=303,Da=304,ma=306,Uo=1e3,ri=1001,No=1002,$t=1003,fu=1004,_s=1005,nn=1006,Ua=1007,ki=1008,mn=1009,Uh=1010,Nh=1011,ts=1012,Ec=1013,Vn=1014,On=1015,oi=1016,wc=1017,Tc=1018,ns=1020,Fh=35902,Oh=35899,Bh=1021,kh=1022,In=1023,ci=1026,zi=1027,zh=1028,Ac=1029,yr=1030,Rc=1031,Cc=1033,Hs=33776,Ws=33777,Xs=33778,qs=33779,Fo=35840,Oo=35841,Bo=35842,ko=35843,zo=36196,Go=37492,Vo=37496,Ho=37488,Wo=37489,Xo=37490,qo=37491,Yo=37808,$o=37809,jo=37810,Ko=37811,Zo=37812,Jo=37813,Qo=37814,ec=37815,tc=37816,nc=37817,ic=37818,rc=37819,sc=37820,ac=37821,oc=36492,cc=36494,lc=36495,hc=36283,dc=36284,uc=36285,fc=36286,pu=3200,Gh=0,mu=1,yi="",pn="srgb",Sr="srgb-linear",Qs="linear",at="srgb",Zi=7680,ml=519,gu=512,_u=513,xu=514,Ic=515,vu=516,yu=517,Pc=518,Su=519,gl=35044,_l="300 es",Bn=2e3,is=2001;function Mu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bu(){const n=ea("canvas");return n.style.display="block",n}const xl={};function vl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Vh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=Vh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=Vh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ta(...n){const e=n.join(" ");e in xl||(xl[e]=!0,Pe(...n))}function Eu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const wu={[Ao]:Ro,[Co]:Lo,[Io]:Do,[xr]:Po,[Ro]:Ao,[Lo]:Co,[Do]:Io,[Po]:xr};class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=Math.PI/180,pc=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function Tu(n,e){return(n%e+e)%e}function Fa(n,e,t){return(1-t)*n+t*e}function Fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],p=i[r+3],h=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(p!==v||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+p*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);f=Math.sin(f*S)/w,o=Math.sin(o*S)/w,c=c*f+h*o,l=l*f+d*o,u=u*f+g*o,p=p*f+v*o}else{c=c*f+h*o,l=l*f+d*o,u=u*f+g*o,p=p*f+v*o;const S=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=S,l*=S,u*=S,p*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],p=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*p+c*d-l*h,e[t+1]=c*g+u*h+l*p-o*d,e[t+2]=l*g+u*d+o*h-c*p,e[t+3]=u*g-o*p-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),p=o(s/2),h=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"YXZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"ZXY":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"ZYX":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"YZX":this._x=h*u*p+l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p-h*d*g;break;case"XZY":this._x=h*u*p-l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p+h*d*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],h=i+o+p;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+c*l+a*p-o*u,this.y=i+c*u+o*l-s*p,this.z=r+c*p+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new N,yl=new Ir;class Ne{constructor(e,t,i,r,s,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],p=i[7],h=i[2],d=i[5],g=i[8],v=r[0],m=r[3],f=r[6],S=r[1],w=r[4],M=r[7],C=r[2],T=r[5],A=r[8];return s[0]=a*v+o*S+c*C,s[3]=a*m+o*w+c*T,s[6]=a*f+o*M+c*A,s[1]=l*v+u*S+p*C,s[4]=l*m+u*w+p*T,s[7]=l*f+u*M+p*A,s[2]=h*v+d*S+g*C,s[5]=h*m+d*w+g*T,s[8]=h*f+d*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*a-o*l,h=o*c-u*s,d=l*s-a*c,g=t*p+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Ne,Sl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){const n={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?Qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sr]:{primaries:e,whitePoint:i,transfer:Qs,toXYZ:Sl,fromXYZ:Ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Sl,fromXYZ:Ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const $e=Au();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ji;class Ru{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ji===void 0&&(Ji=ea("canvas")),Ji.width=e.width,Ji.height=e.height;const r=Ji.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ji}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cu=0;class Lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ka(r[a].image)):s.push(ka(r[a]))}else s=ka(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ru.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Iu=0;const za=new N;class on extends Cr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=ri,r=ri,s=nn,a=ki,o=In,c=mn,l=on.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=ls(),this.name="",this.source=new Lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uo:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uo:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Dh;on.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],p=c[8],h=c[1],d=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,M=(d+1)/2,C=(f+1)/2,T=(u+h)/4,A=(p+v)/4,x=(g+m)/4;return w>M&&w>C?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=x/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(p-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pu extends Cr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new on(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Lc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Pu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hh extends on{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lu extends on{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wt{constructor(e,t,i,r,s,a,o,c,l,u,p,h,d,g,v,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,p,h,d,g,v,m)}set(e,t,i,r,s,a,o,c,l,u,p,h,d,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*p,g=o*u,v=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=d+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*p,g=l*u,v=l*p;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*p,g=l*u,v=l*p;t[0]=h-v*o,t[4]=-a*p,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*p,g=o*u,v=o*p;t[0]=c*u,t[4]=g*l-d,t[8]=h*l+v,t[1]=c*p,t[5]=v*l+h,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*p,t[8]=g*p+d,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*p+g,t[10]=h-v*p}else if(e.order==="XZY"){const h=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=h*p+v,t[5]=a*u,t[9]=d*p-g,t[2]=g*p-d,t[6]=o*u,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Du,e,Uu)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),fi.crossVectors(i,dn),fi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),fi.crossVectors(i,dn)),fi.normalize(),xs.crossVectors(dn,fi),r[0]=fi.x,r[4]=xs.x,r[8]=dn.x,r[1]=fi.y,r[5]=xs.y,r[9]=dn.y,r[2]=fi.z,r[6]=xs.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],p=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],w=i[7],M=i[11],C=i[15],T=r[0],A=r[4],x=r[8],b=r[12],X=r[1],R=r[5],F=r[9],G=r[13],W=r[2],k=r[6],V=r[10],O=r[14],ee=r[3],Z=r[7],he=r[11],ge=r[15];return s[0]=a*T+o*X+c*W+l*ee,s[4]=a*A+o*R+c*k+l*Z,s[8]=a*x+o*F+c*V+l*he,s[12]=a*b+o*G+c*O+l*ge,s[1]=u*T+p*X+h*W+d*ee,s[5]=u*A+p*R+h*k+d*Z,s[9]=u*x+p*F+h*V+d*he,s[13]=u*b+p*G+h*O+d*ge,s[2]=g*T+v*X+m*W+f*ee,s[6]=g*A+v*R+m*k+f*Z,s[10]=g*x+v*F+m*V+f*he,s[14]=g*b+v*G+m*O+f*ge,s[3]=S*T+w*X+M*W+C*ee,s[7]=S*A+w*R+M*k+C*Z,s[11]=S*x+w*F+M*V+C*he,s[15]=S*b+w*G+M*O+C*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15],S=c*d-l*h,w=o*d-l*p,M=o*h-c*p,C=a*d-l*u,T=a*h-c*u,A=a*p-o*u;return t*(v*S-m*w+f*M)-i*(g*S-m*C+f*T)+r*(g*w-v*C+f*A)-s*(g*M-v*T+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=t*o-i*a,w=t*c-r*a,M=t*l-s*a,C=i*c-r*o,T=i*l-s*o,A=r*l-s*c,x=u*v-p*g,b=u*m-h*g,X=u*f-d*g,R=p*m-h*v,F=p*f-d*v,G=h*f-d*m,W=S*G-w*F+M*R+C*X-T*b+A*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/W;return e[0]=(o*G-c*F+l*R)*k,e[1]=(r*F-i*G-s*R)*k,e[2]=(v*A-m*T+f*C)*k,e[3]=(h*T-p*A-d*C)*k,e[4]=(c*X-a*G-l*b)*k,e[5]=(t*G-r*X+s*b)*k,e[6]=(m*M-g*A-f*w)*k,e[7]=(u*A-h*M+d*w)*k,e[8]=(a*F-o*X+l*x)*k,e[9]=(i*X-t*F-s*x)*k,e[10]=(g*T-v*M+f*S)*k,e[11]=(p*M-u*T-d*S)*k,e[12]=(o*b-a*R-c*x)*k,e[13]=(t*R-i*b+r*x)*k,e[14]=(v*w-g*C-m*S)*k,e[15]=(u*C-p*w+h*S)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,p=o+o,h=s*l,d=s*u,g=s*p,v=a*u,m=a*p,f=o*p,S=c*l,w=c*u,M=c*p,C=i.x,T=i.y,A=i.z;return r[0]=(1-(v+f))*C,r[1]=(d+M)*C,r[2]=(g-w)*C,r[3]=0,r[4]=(d-M)*T,r[5]=(1-(h+f))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+w)*A,r[9]=(m-S)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),c=Qi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),bn.copy(this);const l=1/a,u=1/o,p=1/c;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=p,bn.elements[9]*=p,bn.elements[10]*=p,t.setFromRotationMatrix(bn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=Bn,c=!1){const l=this.elements,u=2*s/(t-e),p=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===Bn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===is)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Bn,c=!1){const l=this.elements,u=2/(t-e),p=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===Bn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===is)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new N,bn=new wt,Du=new N(0,0,0),Uu=new N(1,1,1),fi=new N,xs=new N,dn=new N,bl=new wt,El=new Ir;class Hn{constructor(e=0,t=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],p=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nu=0;const wl=new N,er=new Ir,$n=new wt,vs=new N,Or=new N,Fu=new N,Ou=new Ir,Tl=new N(1,0,0),Al=new N(0,1,0),Rl=new N(0,0,1),Cl={type:"added"},Bu={type:"removed"},tr={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Xt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new N,t=new Hn,i=new Ir,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ne}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vs.copy(e):vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Or,vs,this.up):$n.lookAt(vs,Or,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),er.setFromRotationMatrix($n),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cl),tr.child=e,this.dispatchEvent(tr),tr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bu),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cl),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new N(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sn extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ku={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Ha(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Tu(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ha(a,s,e+1/3),this.g=Ha(a,s,e),this.b=Ha(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=Xh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return $e.workingToColorSpace(Qt.copy(this),e),Math.round(He(Qt.r*255,0,255))*65536+Math.round(He(Qt.g*255,0,255))*256+Math.round(He(Qt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=pn){$e.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(ys);const i=Fa(pi.h,ys.h,t),r=Fa(pi.s,ys.s,t),s=Fa(pi.l,ys.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Xe;Xe.NAMES=Xh;class Dc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qh extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const En=new N,jn=new N,Wa=new N,Kn=new N,nr=new N,ir=new N,Il=new N,Xa=new N,qa=new N,Ya=new N,$a=new Ct,ja=new Ct,Ka=new Ct;class Rn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),jn.subVectors(i,t),Wa.subVectors(e,t);const a=En.dot(En),o=En.dot(jn),c=En.dot(Wa),l=jn.dot(jn),u=jn.dot(Wa),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return $a.setScalar(0),ja.setScalar(0),Ka.setScalar(0),$a.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,i),Ka.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($a,s.x),a.addScaledVector(ja,s.y),a.addScaledVector(Ka,s.z),a}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),jn.subVectors(e,t),En.cross(jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),En.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;nr.subVectors(r,i),ir.subVectors(s,i),Xa.subVectors(e,i);const c=nr.dot(Xa),l=ir.dot(Xa);if(c<=0&&l<=0)return t.copy(i);qa.subVectors(e,r);const u=nr.dot(qa),p=ir.dot(qa);if(u>=0&&p<=u)return t.copy(r);const h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(nr,a);Ya.subVectors(e,s);const d=nr.dot(Ya),g=ir.dot(Ya);if(g>=0&&d<=g)return t.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(ir,o);const m=u*g-d*p;if(m<=0&&p-u>=0&&d-g>=0)return Il.subVectors(s,r),o=(p-u)/(p-u+(d-g)),t.copy(r).addScaledVector(Il,o);const f=1/(m+v+h);return a=v*f,o=h*f,t.copy(i).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hs{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ss.copy(i.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Ms.subVectors(this.max,Br),rr.subVectors(e.a,Br),sr.subVectors(e.b,Br),ar.subVectors(e.c,Br),mi.subVectors(sr,rr),gi.subVectors(ar,sr),Ii.subVectors(rr,ar);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ii.z,Ii.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ii.z,0,-Ii.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ii.y,Ii.x,0];return!Za(t,rr,sr,ar,Ms)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,rr,sr,ar,Ms))?!1:(bs.crossVectors(mi,gi),t=[bs.x,bs.y,bs.z],Za(t,rr,sr,ar,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new N,new N,new N,new N,new N,new N,new N,new N],wn=new N,Ss=new hs,rr=new N,sr=new N,ar=new N,mi=new N,gi=new N,Ii=new N,Br=new N,Ms=new N,bs=new N,Pi=new N;function Za(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Pi.fromArray(n,s);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Nt=new N,Es=new Ke;let zu=0;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gl,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}}class Yh extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $h extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Gu=new hs,kr=new N,Ja=new N;class ga{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ja)),this.expandByPoint(kr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vu=0;const gn=new wt,Qa=new Xt,or=new N,un=new hs,zr=new hs,Wt=new N;class Kt extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?$h:Yh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(un.min,zr.min),un.expandByPoint(Wt),Wt.addVectors(un.max,zr.max),un.expandByPoint(Wt)):(un.expandByPoint(zr.min),un.expandByPoint(zr.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Wt.fromBufferAttribute(o,l),c&&(or.fromBufferAttribute(e,l),Wt.add(or)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new N,c[x]=new N;const l=new N,u=new N,p=new N,h=new Ke,d=new Ke,g=new Ke,v=new N,m=new N;function f(x,b,X){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),p.fromBufferAttribute(i,X),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,X),u.sub(l),p.sub(l),d.sub(h),g.sub(h);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(R),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),o[x].add(v),o[b].add(v),o[X].add(v),c[x].add(m),c[b].add(m),c[X].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,b=S.length;x<b;++x){const X=S[x],R=X.start,F=X.count;for(let G=R,W=R+F;G<W;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new N,M=new N,C=new N,T=new N;function A(x){C.fromBufferAttribute(r,x),T.copy(C);const b=o[x];w.copy(b),w.sub(C.multiplyScalar(C.dot(b))).normalize(),M.crossVectors(T,b);const R=M.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,R)}for(let x=0,b=S.length;x<b;++x){const X=S[x],R=X.start,F=X.count;for(let G=R,W=R+F;G<W;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,p=new N;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,p=o.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[d++]}return new Gn(h,u,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,p=l.length;u<p;u++){const h=l[u],d=e(h,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){const d=l[p];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],p=s[l];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Hu=0;class Pr extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=pr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=To,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jn=new N,eo=new N,ws=new N,_i=new N,to=new N,Ts=new N,no=new N;class jh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){eo.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(eo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ws),o=_i.dot(this.direction),c=-_i.dot(ws),l=_i.lengthSq(),u=Math.abs(1-a*a);let p,h,d,g;if(u>0)if(p=a*c-o,h=a*o-c,g=s*u,p>=0)if(h>=-g)if(h<=g){const v=1/u;p*=v,h*=v,d=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=s,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;else h=-s,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;else h<=-g?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-c),s),d=-p*p+h*(h+2*c)+l):h<=g?(p=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-c),s),d=-p*p+h*(h+2*c)+l);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(eo).addScaledVector(ws,h),d}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){to.subVectors(t,e),Ts.subVectors(i,e),no.crossVectors(to,Ts);let a=this.direction.dot(no),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const c=o*this.direction.dot(Ts.crossVectors(_i,Ts));if(c<0)return null;const l=o*this.direction.dot(to.cross(_i));if(l<0||c+l>a)return null;const u=-o*_i.dot(no);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kh extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pl=new wt,Li=new jh,As=new ga,Ll=new N,Rs=new N,Cs=new N,Is=new N,io=new N,Ps=new N,Dl=new N,Ls=new N;class kt extends Xt{constructor(e=new Kt,t=new Kh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],p=s[c];u!==0&&(io.fromBufferAttribute(p,e),a?Ps.addScaledVector(io,u):Ps.addScaledVector(io.sub(t),u))}t.add(Ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(As.containsPoint(Li.origin)===!1&&(Li.intersectSphere(As,Ll)===null||Li.origin.distanceToSquared(Ll)>(e.far-e.near)**2))&&(Pl.copy(s).invert(),Li.copy(e.ray).applyMatrix4(Pl),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,C=w;M<C;M+=3){const T=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);r=Ds(this,f,e,i,l,u,p,T,A,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const S=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);r=Ds(this,a,e,i,l,u,p,S,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,C=w;M<C;M+=3){const T=M,A=M+1,x=M+2;r=Ds(this,f,e,i,l,u,p,T,A,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const S=m,w=m+1,M=m+2;r=Ds(this,a,e,i,l,u,p,S,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Wu(n,e,t,i,r,s,a,o){let c;if(e.side===ln?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ei,o),c===null)return null;Ls.copy(o),Ls.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ls);return l<t.near||l>t.far?null:{distance:l,point:Ls.clone(),object:n}}function Ds(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Rs),n.getVertexPosition(c,Cs),n.getVertexPosition(l,Is);const u=Wu(n,e,t,i,Rs,Cs,Is,Dl);if(u){const p=new N;Rn.getBarycoord(Dl,Rs,Cs,Is,p),r&&(u.uv=Rn.getInterpolatedAttribute(r,o,c,l,p,new Ke)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,o,c,l,p,new Ke)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,c,l,p,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new N,materialIndex:0};Rn.getNormal(Rs,Cs,Is,h.normal),u.face=h,u.barycoord=p}return u}class Xu extends on{constructor(e=null,t=1,i=1,r,s,a,o,c,l=$t,u=$t,p,h){super(null,a,o,c,l,u,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ro=new N,qu=new N,Yu=new Ne;class Fi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ro.subVectors(i,t).cross(qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yu.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new ga,$u=new Ke(.5,.5),Us=new N;class Uc{constructor(e=new Fi,t=new Fi,i=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],p=s[5],h=s[6],d=s[7],g=s[8],v=s[9],m=s[10],f=s[11],S=s[12],w=s[13],M=s[14],C=s[15];if(r[0].setComponents(l-a,d-u,f-g,C-S).normalize(),r[1].setComponents(l+a,d+u,f+g,C+S).normalize(),r[2].setComponents(l+o,d+p,f+v,C+w).normalize(),r[3].setComponents(l-o,d-p,f-v,C-w).normalize(),i)r[4].setComponents(c,h,m,M).normalize(),r[5].setComponents(l-c,d-h,f-m,C-M).normalize();else if(r[4].setComponents(l-c,d-h,f-m,C-M).normalize(),t===Bn)r[5].setComponents(l+c,d+h,f+m,C+M).normalize();else if(t===is)r[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=$u.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Us.x=r.normal.x>0?e.max.x:e.min.x,Us.y=r.normal.y>0?e.max.y:e.min.y,Us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mr extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new N,ia=new N,Ul=new wt,Gr=new jh,Ns=new ga,so=new N,Nl=new N;class ur extends Xt{constructor(e=new Kt,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)na.fromBufferAttribute(t,r-1),ia.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=na.distanceTo(ia);e.setAttribute("lineDistance",new jt(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;Ul.copy(r).invert(),Gr.copy(e.ray).applyMatrix4(Ul);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){const f=u.getX(v),S=u.getX(v+1),w=Fs(this,e,Gr,c,f,S,v);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),f=Fs(this,e,Gr,c,v,m,g-1);f&&t.push(f)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){const f=Fs(this,e,Gr,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Fs(this,e,Gr,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fs(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(na.fromBufferAttribute(o,r),ia.fromBufferAttribute(o,s),t.distanceSqToSegment(na,ia,so,Nl)>i)return;so.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(so);if(!(l<e.near||l>e.far))return{distance:l,point:Nl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Zh extends on{constructor(e=[],t=Wi,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rs extends on{constructor(e,t,i=Vn,r,s,a,o=$t,c=$t,l,u=ci,p=1){if(u!==ci&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ju extends rs{constructor(e,t=Vn,i=Wi,r,s,a=$t,o=$t,c,l=ci){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jh extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yi extends Kt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],p=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(p,2));function g(v,m,f,S,w,M,C,T,A,x,b){const X=M/A,R=C/x,F=M/2,G=C/2,W=T/2,k=A+1,V=x+1;let O=0,ee=0;const Z=new N;for(let he=0;he<V;he++){const ge=he*R-G;for(let ue=0;ue<k;ue++){const Fe=ue*X-F;Z[v]=Fe*S,Z[m]=ge*w,Z[f]=W,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[f]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),p.push(ue/A),p.push(1-he/x),O+=1}}for(let he=0;he<x;he++)for(let ge=0;ge<A;ge++){const ue=h+ge+k*he,Fe=h+ge+k*(he+1),_t=h+(ge+1)+k*(he+1),gt=h+(ge+1)+k*he;c.push(ue,Fe,gt),c.push(Fe,_t,gt),ee+=6}o.addGroup(d,ee,b),d+=ee,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nc extends Kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new N,u=new Ke;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const d=i+p/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fc extends Kt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],h=[],d=[];let g=0;const v=[],m=i/2;let f=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function S(){const M=new N,C=new N;let T=0;const A=(t-e)/i;for(let x=0;x<=s;x++){const b=[],X=x/s,R=X*(t-e)+e;for(let F=0;F<=r;F++){const G=F/r,W=G*c+o,k=Math.sin(W),V=Math.cos(W);C.x=R*k,C.y=-X*i+m,C.z=R*V,p.push(C.x,C.y,C.z),M.set(k,A,V).normalize(),h.push(M.x,M.y,M.z),d.push(G,1-X),b.push(g++)}v.push(b)}for(let x=0;x<r;x++)for(let b=0;b<s;b++){const X=v[b][x],R=v[b+1][x],F=v[b+1][x+1],G=v[b][x+1];(e>0||b!==0)&&(u.push(X,R,G),T+=3),(t>0||b!==s-1)&&(u.push(R,F,G),T+=3)}l.addGroup(f,T,0),f+=T}function w(M){const C=g,T=new Ke,A=new N;let x=0;const b=M===!0?e:t,X=M===!0?1:-1;for(let F=1;F<=r;F++)p.push(0,m*X,0),h.push(0,X,0),d.push(.5,.5),g++;const R=g;for(let F=0;F<=r;F++){const W=F/r*c+o,k=Math.cos(W),V=Math.sin(W);A.x=b*V,A.y=m*X,A.z=b*k,p.push(A.x,A.y,A.z),h.push(0,X,0),T.x=k*.5+.5,T.y=V*.5*X+.5,d.push(T.x,T.y),g++}for(let F=0;F<r;F++){const G=C+F,W=R+F;M===!0?u.push(W,W+1,G):u.push(W+1,W,G),x+=3}l.addGroup(f,x,M===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ds extends Fc{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ds(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _a extends Kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,p=e/o,h=t/c,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const S=f*h-a;for(let w=0;w<l;w++){const M=w*p-s;g.push(M,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const w=S+l*f,M=S+l*(f+1),C=S+1+l*(f+1),T=S+1+l*f;d.push(w,M,T),d.push(M,C,T)}this.setIndex(d),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}function br(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=br(n[t]);for(const r in i)e[r]=i[r]}return e}function Ku(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Zu={clone:br,merge:rn};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=Ku(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ef extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ed extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tf extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nf extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rf extends Mr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class td extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class nd extends td{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ao=new wt,Fl=new N,Ol=new N;class sf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ol),t.updateMatrixWorld(),ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===is||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Os=new N,Bs=new Ir,Ln=new N;class id extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Os,Bs,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Os,Bs,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new N,Bl=new Ke,kl=new Ke;class An extends id{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Bl,kl),t.subVectors(kl,Bl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class us extends id{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class af extends sf{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rd extends td{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new af}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const cr=-90,lr=1;class of extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(cr,lr,e,t);r.layers=this.layers,this.add(r);const s=new An(cr,lr,e,t);s.layers=this.layers,this.add(s);const a=new An(cr,lr,e,t);a.layers=this.layers,this.add(a);const o=new An(cr,lr,e,t);o.layers=this.layers,this.add(o);const c=new An(cr,lr,e,t);c.layers=this.layers,this.add(c);const l=new An(cr,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===is)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cf extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function zl(n,e,t,i){const r=lf(i);switch(t){case Bh:return n*e;case zh:return n*e/r.components*r.byteLength;case Ac:return n*e/r.components*r.byteLength;case yr:return n*e*2/r.components*r.byteLength;case Rc:return n*e*2/r.components*r.byteLength;case kh:return n*e*3/r.components*r.byteLength;case In:return n*e*4/r.components*r.byteLength;case Cc:return n*e*4/r.components*r.byteLength;case Hs:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xs:case qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oo:case ko:return Math.max(n,16)*Math.max(e,8)/4;case Fo:case Bo:return Math.max(n,8)*Math.max(e,8)/2;case zo:case Go:case Ho:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case oc:case cc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lf(n){switch(n){case mn:case Uh:return{byteLength:1,components:1};case ts:case Nh:case oi:return{byteLength:2,components:1};case wc:case Tc:return{byteLength:2,components:4};case Vn:case Ec:case On:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);function sd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hf(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,p=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,l){const u=c.array,p=c.updateRanges;if(n.bindBuffer(l,o),p.length===0)n.bufferSubData(l,0,u);else{p.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<p.length;d++){const g=p[h],v=p[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,p[h]=v)}p.length=h+1;for(let d=0,g=p.length;d<g;d++){const v=p[d];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,wf=`#ifdef USE_BUMPMAP
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,lp=`uniform sampler2D dfgLUT;
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
}`,hp=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,wm=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Om=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:df,alphahash_pars_fragment:uf,alphamap_fragment:ff,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:xf,batching_pars_vertex:vf,batching_vertex:yf,begin_vertex:Sf,beginnormal_vertex:Mf,bsdfs:bf,iridescence_fragment:Ef,bumpmap_pars_fragment:wf,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:If,color_pars_fragment:Pf,color_pars_vertex:Lf,color_vertex:Df,common:Uf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:kf,emissivemap_pars_fragment:zf,colorspace_fragment:Gf,colorspace_pars_fragment:Vf,envmap_fragment:Hf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:ip,envmap_vertex:Yf,fog_vertex:$f,fog_pars_vertex:jf,fog_fragment:Kf,fog_pars_fragment:Zf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:Qf,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:sp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:cp,lights_physical_pars_fragment:lp,lights_fragment_begin:hp,lights_fragment_maps:dp,lights_fragment_end:up,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:xp,map_particle_fragment:vp,map_particle_pars_fragment:yp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:bp,morphcolor_vertex:Ep,morphnormal_vertex:wp,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Ip,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:kp,premultiplied_alpha_fragment:zp,project_vertex:Gp,dithering_fragment:Vp,dithering_pars_fragment:Hp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:$p,shadowmask_pars_fragment:jp,skinbase_vertex:Kp,skinning_pars_vertex:Zp,skinning_vertex:Jp,skinnormal_vertex:Qp,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:rm,transmission_pars_fragment:sm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:cm,worldpos_vertex:lm,background_vert:hm,background_frag:dm,backgroundCube_vert:um,backgroundCube_frag:fm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distance_vert:xm,distance_frag:vm,equirect_vert:ym,equirect_frag:Sm,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:Em,meshbasic_frag:wm,meshlambert_vert:Tm,meshlambert_frag:Am,meshmatcap_vert:Rm,meshmatcap_frag:Cm,meshnormal_vert:Im,meshnormal_frag:Pm,meshphong_vert:Lm,meshphong_frag:Dm,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Fm,meshtoon_frag:Om,points_vert:Bm,points_frag:km,shadow_vert:zm,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Hm},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Un={basic:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:rn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:rn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:rn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:rn([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:rn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:rn([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:rn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:rn([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:rn([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:rn([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Un.physical={uniforms:rn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ks={r:0,b:0,g:0},Ui=new Hn,Wm=new wt;function Xm(n,e,t,i,r,s){const a=new Xe(0);let o=r===!0?0:1,c,l,u=null,p=0,h=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const M=S.backgroundBlurriness>0;w=e.get(w,M)}return w}function g(S){let w=!1;const M=d(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,w){const M=d(w);M&&(M.isCubeTexture||M.mapping===ma)?(l===void 0&&(l=new kt(new Yi(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:br(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ui.copy(w.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(Ui)),l.material.toneMapped=$e.getTransfer(M.colorSpace)!==at,(u!==M||p!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new kt(new _a(2,2),new Wn({name:"BackgroundMaterial",uniforms:br(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=$e.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,p=M.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,w){S.getRGB(ks,Qh(n)),t.buffers.color.setClear(ks.r,ks.g,ks.b,w,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:f}}function qm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(R,F,G,W,k){let V=!1;const O=p(R,W,G,F);s!==O&&(s=O,l(s.object)),V=d(R,W,G,k),V&&g(R,W,G,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(R,F,G,W),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function p(R,F,G,W){const k=W.wireframe===!0;let V=i[F.id];V===void 0&&(V={},i[F.id]=V);const O=R.isInstancedMesh===!0?R.id:0;let ee=V[O];ee===void 0&&(ee={},V[O]=ee);let Z=ee[G.id];Z===void 0&&(Z={},ee[G.id]=Z);let he=Z[k];return he===void 0&&(he=h(c()),Z[k]=he),he}function h(R){const F=[],G=[],W=[];for(let k=0;k<t;k++)F[k]=0,G[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:W,object:R,attributes:{},index:null}}function d(R,F,G,W){const k=s.attributes,V=F.attributes;let O=0;const ee=G.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const ge=k[Z];let ue=V[Z];if(ue===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ge===void 0||ge.attribute!==ue||ue&&ge.data!==ue.data)return!0;O++}return s.attributesNum!==O||s.index!==W}function g(R,F,G,W){const k={},V=F.attributes;let O=0;const ee=G.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let ge=V[Z];ge===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor));const ue={};ue.attribute=ge,ge&&ge.data&&(ue.data=ge.data),k[Z]=ue,O++}s.attributes=k,s.attributesNum=O,s.index=W}function v(){const R=s.newAttributes;for(let F=0,G=R.length;F<G;F++)R[F]=0}function m(R){f(R,0)}function f(R,F){const G=s.newAttributes,W=s.enabledAttributes,k=s.attributeDivisors;G[R]=1,W[R]===0&&(n.enableVertexAttribArray(R),W[R]=1),k[R]!==F&&(n.vertexAttribDivisor(R,F),k[R]=F)}function S(){const R=s.newAttributes,F=s.enabledAttributes;for(let G=0,W=F.length;G<W;G++)F[G]!==R[G]&&(n.disableVertexAttribArray(G),F[G]=0)}function w(R,F,G,W,k,V,O){O===!0?n.vertexAttribIPointer(R,F,G,k,V):n.vertexAttribPointer(R,F,G,W,k,V)}function M(R,F,G,W){v();const k=W.attributes,V=G.getAttributes(),O=F.defaultAttributeValues;for(const ee in V){const Z=V[ee];if(Z.location>=0){let he=k[ee];if(he===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const ge=he.normalized,ue=he.itemSize,Fe=e.get(he);if(Fe===void 0)continue;const _t=Fe.buffer,gt=Fe.type,j=Fe.bytesPerElement,ie=gt===n.INT||gt===n.UNSIGNED_INT||he.gpuType===Ec;if(he.isInterleavedBufferAttribute){const ae=he.data,Ue=ae.stride,Re=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Z.locationSize;Ie++)f(Z.location+Ie,ae.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<Z.locationSize;Ie++)m(Z.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Ie=0;Ie<Z.locationSize;Ie++)w(Z.location+Ie,ue/Z.locationSize,gt,ge,Ue*j,(Re+ue/Z.locationSize*Ie)*j,ie)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)f(Z.location+ae,he.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<Z.locationSize;ae++)m(Z.location+ae);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let ae=0;ae<Z.locationSize;ae++)w(Z.location+ae,ue/Z.locationSize,gt,ge,ue*j,ue/Z.locationSize*ae*j,ie)}}else if(O!==void 0){const ge=O[ee];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Z.location,ge);break;case 3:n.vertexAttrib3fv(Z.location,ge);break;case 4:n.vertexAttrib4fv(Z.location,ge);break;default:n.vertexAttrib1fv(Z.location,ge)}}}}S()}function C(){b();for(const R in i){const F=i[R];for(const G in F){const W=F[G];for(const k in W){const V=W[k];for(const O in V)u(V[O].object),delete V[O];delete W[k]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const F=i[R.id];for(const G in F){const W=F[G];for(const k in W){const V=W[k];for(const O in V)u(V[O].object),delete V[O];delete W[k]}}delete i[R.id]}function A(R){for(const F in i){const G=i[F];for(const W in G){const k=G[W];if(k[R.id]===void 0)continue;const V=k[R.id];for(const O in V)u(V[O].object),delete V[O];delete k[R.id]}}}function x(R){for(const F in i){const G=i[F],W=R.isInstancedMesh===!0?R.id:0,k=G[W];if(k!==void 0){for(const V in k){const O=k[V];for(const ee in O)u(O[ee].object),delete O[ee];delete k[V]}delete G[W],Object.keys(G).length===0&&delete i[F]}}}function b(){X(),a=!0,s!==r&&(s=r,l(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:X,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Ym(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,p){p!==0&&(n.drawArraysInstanced(i,l,u,p),t.update(u,i,p))}function o(l,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,p);let d=0;for(let g=0;g<p;g++)d+=u[g];t.update(d,i,1)}function c(l,u,p,h){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $m(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==In&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!x)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Pe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,maxSamples:C,samples:T}}function jm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Fi,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const d=p.length!==0||h||i!==0||r;return r=h,i=p.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,d){const g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,f=n.get(p);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:i,w=S*4;let M=f.clippingState||null;c.value=M,M=u(g,h,w,d);for(let C=0;C!==w;++C)M[C]=t[C];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,d,g){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=d+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,M=d;w!==v;++w,M+=4)a.copy(p[w]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Si=4,Gl=[.125,.215,.35,.446,.526,.582],Bi=20,Km=256,Vr=new us,Vl=new Xe;let oo=null,co=0,lo=0,ho=!1;const Zm=new N;class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Zm}=s;oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oo,co,lo),this._renderer.xr.enabled=ho,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:oi,format:In,colorSpace:Sr,depthBuffer:!1},r=Wl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jm(s)),this._blurMaterial=eg(s,e,t),this._ggxMaterial=Qm(s,e,t)}return r}_compileMaterial(e){const t=new kt(new Kt,e);this._renderer.compile(t,Vr)}_sceneToCubeUV(e,t,i,r,s){const c=new An(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,d=p.toneMapping;p.getClearColor(Vl),p.toneMapping=kn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new Yi,new Kh({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(Vl),f=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):M===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const C=this._cubeSize;hr(r,M*C,w>2?C:0,C,C),p.setRenderTarget(r),f&&p.render(v,c),p.render(e,c)}p.toneMapping=d,p.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Wi||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;hr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Vr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),h=0+l*1.25,d=p*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Si?i-g+Si:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,hr(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Vr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,hr(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Vr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,p=this._lodMeshes[r];p.material=l;const h=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Bi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Bi;m>Bi&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const f=[];let S=0;for(let A=0;A<Bi;++A){const x=A/v,b=Math.exp(-x*x/2);f.push(b),A===0?S+=b:A<m&&(S+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const M=this._sizeLods[r],C=3*M*(r>w-Si?r-w+Si:0),T=4*(this._cubeSize-M);hr(t,C,T,3*M,2*M),c.setRenderTarget(t),c.render(p,Vr)}}function Jm(n){const e=[],t=[],i=[];let r=n;const s=n-Si+1+Gl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Si?c=Gl[a-n+Si-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,p=1+l,h=[u,u,p,u,p,p,u,u,p,p,u,p],d=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*d),w=new Float32Array(m*g*d),M=new Float32Array(f*g*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,x=T>2?0:-1,b=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];S.set(b,v*g*T),w.set(h,m*g*T);const X=[T,T,T,T,T,T];M.set(X,f*g*T)}const C=new Kt;C.setAttribute("position",new Gn(S,v)),C.setAttribute("uv",new Gn(w,m)),C.setAttribute("faceIndex",new Gn(M,f)),i.push(new kt(C,null)),r>Si&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Wl(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Qm(n,e,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Km,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function eg(n,e,t){const i=new Float32Array(Bi),r=new N(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xa(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xl(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function ql(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}class ad extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:si});s.uniforms.tEquirect.value=t;const a=new kt(r,s),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=nn),new of(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function tg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===La||d===Da)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new ad(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===La||d===Da,v=d===Wi||d===vr;if(g||v){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Hl(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||v&&S&&c(S)?(i===null&&(i=new Hl(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===La?h.mapping=Wi:d===Da&&(h.mapping=vr),h}function c(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function ng(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ta("WebGLRenderer: "+i+" extension not supported."),r}}}function ig(n,e,t,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function l(p){const h=[],d=p.index,g=p.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const S=d.array;v=d.version;for(let w=0,M=S.length;w<M;w+=3){const C=S[w+0],T=S[w+1],A=S[w+2];h.push(C,T,T,A,A,C)}}else{const S=g.array;v=g.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const C=w+0,T=w+1,A=w+2;h.push(C,T,T,A,A,C)}}const m=new(g.count>=65535?$h:Yh)(h,1);m.version=v;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function u(p){const h=s.get(p);if(h){const d=p.index;d!==null&&h.version<d.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function rg(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function l(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*a,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,i,1)}function p(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/a,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=d[S]*v[S];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function sg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ag(n,e,t){const i=new WeakMap,r=new Ct;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let X=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",X)};var d=X;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let C=o.attributes.position.count*M,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*p),x=new Hh(A,C,T,p);x.type=On,x.needsUpdate=!0;const b=M*4;for(let R=0;R<p;R++){const F=f[R],G=S[R],W=w[R],k=C*T*4*R;for(let V=0;V<F.count;V++){const O=V*b;g===!0&&(r.fromBufferAttribute(F,V),A[k+O+0]=r.x,A[k+O+1]=r.y,A[k+O+2]=r.z,A[k+O+3]=0),v===!0&&(r.fromBufferAttribute(G,V),A[k+O+4]=r.x,A[k+O+5]=r.y,A[k+O+6]=r.z,A[k+O+7]=0),m===!0&&(r.fromBufferAttribute(W,V),A[k+O+8]=r.x,A[k+O+9]=r.y,A[k+O+10]=r.z,A[k+O+11]=W.itemSize===4?r.w:1)}}h={count:p,texture:x,size:new Ke(C,T)},i.set(o,h),o.addEventListener("dispose",X)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function og(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,p=l.geometry,h=e.get(l,p);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const cg={[Th]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Rh]:"CINEON_TONE_MAPPING",[Ch]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ih]:"CUSTOM_TONE_MAPPING"};function lg(n,e,t,i,r){const s=new zn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new zn(e,t,{type:oi,depthBuffer:!1,stencilBuffer:!1}),o=new Kt;o.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new jt([0,2,0,0,2,0],2));const c=new ef({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new kt(o,c),u=new us(-1,1,1,-1,0,1);let p=null,h=null,d=!1,g,v=null,m=[],f=!1;this.setSize=function(S,w){s.setSize(S,w),a.setSize(S,w);for(let M=0;M<m.length;M++){const C=m[M];C.setSize&&C.setSize(S,w)}},this.setEffects=function(S){m=S,f=m.length>0&&m[0].isRenderPass===!0;const w=s.width,M=s.height;for(let C=0;C<m.length;C++){const T=m[C];T.setSize&&T.setSize(w,M)}},this.begin=function(S,w){if(d||S.toneMapping===kn&&m.length===0)return!1;if(v=w,w!==null){const M=w.width,C=w.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return f===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=kn,!0},this.hasRenderPass=function(){return f},this.end=function(S,w){S.toneMapping=g,d=!0;let M=s,C=a;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(S,C,M,w),A.needsSwap!==!1)){const x=M;M=C,C=x}}if(p!==S.outputColorSpace||h!==S.toneMapping){p=S.outputColorSpace,h=S.toneMapping,c.defines={},$e.getTransfer(p)===at&&(c.defines.SRGB_TRANSFER="");const T=cg[h];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(v),S.render(l,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const od=new on,mc=new rs(1,1),cd=new Hh,ld=new Lu,hd=new Zh,Yl=[],$l=[],jl=new Float32Array(16),Kl=new Float32Array(9),Zl=new Float32Array(4);function Lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yl[r];if(s===void 0&&(s=new Float32Array(r),Yl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function va(n,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;Zl.set(i),n.uniformMatrix2fv(this.addr,!1,Zl),Gt(t,i)}}function mg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),Gt(t,i)}}function gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;jl.set(i),n.uniformMatrix4fv(this.addr,!1,jl),Gt(t,i)}}function _g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function Sg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function wg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mc.compareFunction=t.isReversedDepthBuffer()?Pc:Ic,s=mc):s=od,t.setTexture2D(e||s,r)}function Tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ld,r)}function Ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hd,r)}function Rg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cd,r)}function Cg(n){switch(n){case 5126:return hg;case 35664:return dg;case 35665:return ug;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Sg;case 36294:return Mg;case 36295:return bg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Ig(n,e){n.uniform1fv(this.addr,e)}function Pg(n,e){const t=Lr(e,this.size,2);n.uniform2fv(this.addr,t)}function Lg(n,e){const t=Lr(e,this.size,3);n.uniform3fv(this.addr,t)}function Dg(n,e){const t=Lr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ug(n,e){const t=Lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ng(n,e){const t=Lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fg(n,e){const t=Lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Og(n,e){n.uniform1iv(this.addr,e)}function Bg(n,e){n.uniform2iv(this.addr,e)}function kg(n,e){n.uniform3iv(this.addr,e)}function zg(n,e){n.uniform4iv(this.addr,e)}function Gg(n,e){n.uniform1uiv(this.addr,e)}function Vg(n,e){n.uniform2uiv(this.addr,e)}function Hg(n,e){n.uniform3uiv(this.addr,e)}function Wg(n,e){n.uniform4uiv(this.addr,e)}function Xg(n,e,t){const i=this.cache,r=e.length,s=va(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=mc:a=od;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function qg(n,e,t){const i=this.cache,r=e.length,s=va(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ld,s[a])}function Yg(n,e,t){const i=this.cache,r=e.length,s=va(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||hd,s[a])}function $g(n,e,t){const i=this.cache,r=e.length,s=va(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cd,s[a])}function jg(n){switch(n){case 5126:return Ig;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Gg;case 36294:return Vg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return $g}}class Kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cg(t.type)}}class Zg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jg(t.type)}}class Jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Jl(n,e){n.seq.push(e),n.map[e.id]=e}function Qg(n,e,t){const i=n.name,r=i.length;for(uo.lastIndex=0;;){const s=uo.exec(i),a=uo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Jl(t,l===void 0?new Kg(o,n,e):new Zg(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new Jg(o),Jl(t,p)),t=p}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Qg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ql(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const e0=37297;let t0=0;function n0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const eh=new Ne;function i0(n){$e._getMatrix(eh,$e.workingColorSpace,n);const e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Qs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function th(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+n0(n.getShaderSource(e),o)}else return s}function r0(n,e){const t=i0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const s0={[Th]:"Linear",[Ah]:"Reinhard",[Rh]:"Cineon",[Ch]:"ACESFilmic",[Ph]:"AgX",[Lh]:"Neutral",[Ih]:"Custom"};function a0(n,e){const t=s0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zs=new N;function o0(){$e.getLuminanceCoefficients(zs);const n=zs.x.toFixed(4),e=zs.y.toFixed(4),t=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function l0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Yr(n){return n!==""}function nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(d0,f0)}const u0=new Map;function f0(n,e){let t=Oe[e];if(t===void 0){const i=u0.get(e);if(i!==void 0)t=Oe[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(n){return n.replace(p0,m0)}function m0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const g0={[Kr]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function _0(n){return g0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const x0={[Wi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function v0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":x0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const y0={[vr]:"ENVMAP_MODE_REFRACTION"};function S0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":y0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M0={[wh]:"ENVMAP_BLENDING_MULTIPLY",[du]:"ENVMAP_BLENDING_MIX",[uu]:"ENVMAP_BLENDING_ADD"};function b0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":M0[n.combine]||"ENVMAP_BLENDING_NONE"}function E0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function w0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=_0(t),l=v0(t),u=S0(t),p=b0(t),h=E0(t),d=c0(t),g=l0(s),v=r.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),f.length>0&&(f+=`
`)):(m=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),f=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==kn?a0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,r0("linearToOutputTexel",t.outputColorSpace),o0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=gc(a),a=nh(a,t),a=ih(a,t),o=gc(o),o=nh(o,t),o=ih(o,t),a=rh(a),o=rh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=S+m+a,M=S+f+o,C=Ql(r,r.VERTEX_SHADER,w),T=Ql(r,r.FRAGMENT_SHADER,M);r.attachShader(v,C),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(R){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(C)||"",W=r.getShaderInfoLog(T)||"",k=F.trim(),V=G.trim(),O=W.trim();let ee=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,T);else{const he=th(r,C,"vertex"),ge=th(r,T,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+he+`
`+ge)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(V===""||O==="")&&(Z=!1);Z&&(R.diagnostics={runnable:ee,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(C),r.deleteShader(T),x=new Ys(r,v),b=h0(r,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(v,e0)),X},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let T0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new R0(e),t.set(e,i)),i}}class R0{constructor(e){this.id=T0++,this.code=e,this.usedTimes=0}}function C0(n,e,t,i,r,s){const a=new Wh,o=new A0,c=new Set,l=[],u=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,b,X,R,F){const G=R.fog,W=F.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||k,V),ee=O&&O.mapping===ma?O.image.height:null,Z=d[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=he!==void 0?he.length:0;let ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let Fe,_t,gt,j;if(Z){const st=Un[Z];Fe=st.vertexShader,_t=st.fragmentShader}else Fe=x.vertexShader,_t=x.fragmentShader,o.update(x),gt=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const ie=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,Ie=!!x.map,Vt=!!x.matcap,qe=!!O,rt=!!x.aoMap,ht=!!x.lightMap,Be=!!x.bumpMap,It=!!x.normalMap,P=!!x.displacementMap,Ut=!!x.emissiveMap,nt=!!x.metalnessMap,ut=!!x.roughnessMap,Me=x.anisotropy>0,E=x.clearcoat>0,_=x.dispersion>0,D=x.iridescence>0,$=x.sheen>0,K=x.transmission>0,Y=Me&&!!x.anisotropyMap,_e=E&&!!x.clearcoatMap,re=E&&!!x.clearcoatNormalMap,Ae=E&&!!x.clearcoatRoughnessMap,Ce=D&&!!x.iridescenceMap,J=D&&!!x.iridescenceThicknessMap,te=$&&!!x.sheenColorMap,xe=$&&!!x.sheenRoughnessMap,ye=!!x.specularMap,de=!!x.specularColorMap,ke=!!x.specularIntensityMap,L=K&&!!x.transmissionMap,se=K&&!!x.thicknessMap,ne=!!x.gradientMap,pe=!!x.alphaMap,Q=x.alphaTest>0,q=!!x.alphaHash,ve=!!x.extensions;let Le=kn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=n.toneMapping);const ft={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:_t,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Sr,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:Vt,envMap:qe,envMapMode:qe&&O.mapping,envMapCubeUVHeight:ee,aoMap:rt,lightMap:ht,bumpMap:Be,normalMap:It,displacementMap:P,emissiveMap:Ut,normalMapObjectSpace:It&&x.normalMapType===mu,normalMapTangentSpace:It&&x.normalMapType===Gh,metalnessMap:nt,roughnessMap:ut,anisotropy:Me,anisotropyMap:Y,clearcoat:E,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:D,iridescenceMap:Ce,iridescenceThicknessMap:J,sheen:$,sheenColorMap:te,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:de,specularIntensityMap:ke,transmission:K,transmissionMap:L,thicknessMap:se,gradientMap:ne,opaque:x.transparent===!1&&x.blending===pr&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:q,combine:x.combine,mapUv:Ie&&g(x.map.channel),aoMapUv:rt&&g(x.aoMap.channel),lightMapUv:ht&&g(x.lightMap.channel),bumpMapUv:Be&&g(x.bumpMap.channel),normalMapUv:It&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:Ut&&g(x.emissiveMap.channel),metalnessMapUv:nt&&g(x.metalnessMap.channel),roughnessMapUv:ut&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(x.sheenRoughnessMap.channel),specularMapUv:ye&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:ke&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:se&&g(x.thicknessMap.channel),alphaMapUv:pe&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(It||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ie||pe),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&It===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ae,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:Ut&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)b.push(X),b.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(f(b,x),S(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function f(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),x.push(a.mask)}function w(x){const b=d[x.type];let X;if(b){const R=Un[b];X=Zu.clone(R.uniforms)}else X=x.uniforms;return X}function M(x,b){let X=u.get(b);return X!==void 0?++X.usedTimes:(X=new w0(n,b,x,r),l.push(X),u.set(b,X)),X}function C(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:C,releaseShaderCache:T,programs:l,dispose:A}}function I0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function P0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ah(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function oh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,m,f){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},n[e]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=m,S.group=f),e++,S}function c(h,d,g,v,m,f){const S=o(h,d,g,v,m,f);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):t.push(S)}function l(h,d,g,v,m,f){const S=o(h,d,g,v,m,f);g.transmission>0?i.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function u(h,d){t.length>1&&t.sort(h||P0),i.length>1&&i.sort(d||ah),r.length>1&&r.sort(d||ah)}function p(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:p,sort:u}}function L0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new oh,n.set(i,[a])):r>=s.length?(a=new oh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function D0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Xe};break;case"SpotLight":t={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function U0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let N0=0;function F0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O0(n){const e=new D0,t=U0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new wt,a=new wt;function o(l){let u=0,p=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,S=0,w=0,M=0,C=0,T=0,A=0;l.sort(F0);for(let b=0,X=l.length;b<X;b++){const R=l[b],F=R.color,G=R.intensity,W=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===yr?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=F.r*G,p+=F.g*G,h+=F.b*G;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],G);A++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,ee=t.get(R);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,i.directionalShadow[d]=ee,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=R.shadow.matrix,S++}i.directional[d]=V,d++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(F).multiplyScalar(G),V.distance=W,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[v]=V;const O=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,O.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[v]=O.matrix,R.castShadow){const ee=t.get(R);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=k,M++}v++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(F).multiplyScalar(G),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const O=R.shadow,ee=t.get(R);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,ee.shadowCameraNear=O.camera.near,ee.shadowCameraFar=O.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(G),V.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==S||x.numPointShadows!==w||x.numSpotShadows!==M||x.numSpotMaps!==C||x.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,x.directionalLength=d,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=S,x.numPointShadows=w,x.numSpotShadows=M,x.numSpotMaps=C,x.numLightProbes=A,i.version=N0++)}function c(l,u){let p=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const w=l[f];if(w.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(w.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function ch(n){const e=new O0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function B0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ch(n),e.set(r,[o])):s>=a.length?(o=new ch(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`,G0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],V0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],lh=new wt,Hr=new N,fo=new N;function H0(n,e,t){let i=new Uc;const r=new Ke,s=new Ke,a=new Ct,o=new tf,c=new nf,l={},u=t.maxTextureSize,p={[Ei]:ln,[ln]:Ei,[ii]:ii},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:k0,fragmentShader:z0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let f=this.type;this.render=function(T,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===qd&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kr);const b=n.getRenderTarget(),X=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(si),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=f!==this.type;G&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(k=>k.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,k=T.length;W<k;W++){const V=T[W],O=V.shadow;if(O===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ee=O.getFrameExtents();r.multiply(ee),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,O.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Z,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===qr){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new zn(r.x,r.y,{format:yr,type:oi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new rs(r.x,r.y,On),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=ci,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t}else V.isPointLight?(O.map=new ad(r.x),O.map.depthTexture=new ju(r.x,Vn)):(O.map=new zn(r.x,r.y),O.map.depthTexture=new rs(r.x,r.y,Vn)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=ci,this.type===Kr?(O.map.depthTexture.compareFunction=Z?Pc:Ic,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t);O.camera.updateProjectionMatrix()}const he=O.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<he;ge++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(O.map),n.clear());const ue=O.getViewport(ge);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),F.viewport(a)}if(V.isPointLight){const ue=O.camera,Fe=O.matrix,_t=V.distance||ue.far;_t!==ue.far&&(ue.far=_t,ue.updateProjectionMatrix()),Hr.setFromMatrixPosition(V.matrixWorld),ue.position.copy(Hr),fo.copy(ue.position),fo.add(G0[ge]),ue.up.copy(V0[ge]),ue.lookAt(fo),ue.updateMatrixWorld(),Fe.makeTranslation(-Hr.x,-Hr.y,-Hr.z),lh.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(lh,ue.coordinateSystem,ue.reversedDepth)}else O.updateMatrices(V);i=O.getFrustum(),M(A,x,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===qr&&S(O,x),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,X,R)};function S(T,A){const x=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zn(r.x,r.y,{format:yr,type:oi})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,x,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,x,d,v,null)}function w(T,A,x,b){let X=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)X=R;else if(X=x.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=X.uuid,G=A.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let k=W[G];k===void 0&&(k=X.clone(),W[G]=k,A.addEventListener("dispose",C)),X=k}if(X.visible=A.visible,X.wireframe=A.wireframe,b===qr?X.side=A.shadowSide!==null?A.shadowSide:A.side:X.side=A.shadowSide!==null?A.shadowSide:p[A.side],X.alphaMap=A.alphaMap,X.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,X.map=A.map,X.clipShadows=A.clipShadows,X.clippingPlanes=A.clippingPlanes,X.clipIntersection=A.clipIntersection,X.displacementMap=A.displacementMap,X.displacementScale=A.displacementScale,X.displacementBias=A.displacementBias,X.wireframeLinewidth=A.wireframeLinewidth,X.linewidth=A.linewidth,x.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const F=n.properties.get(X);F.light=x}return X}function M(T,A,x,b,X){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&X===qr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const G=e.update(T),W=T.material;if(Array.isArray(W)){const k=G.groups;for(let V=0,O=k.length;V<O;V++){const ee=k[V],Z=W[ee.materialIndex];if(Z&&Z.visible){const he=w(T,Z,b,X);T.onBeforeShadow(n,T,A,x,G,he,ee),n.renderBufferDirect(x,null,G,he,T,ee),T.onAfterShadow(n,T,A,x,G,he,ee)}}}else if(W.visible){const k=w(T,W,b,X);T.onBeforeShadow(n,T,A,x,G,k,null),n.renderBufferDirect(x,null,G,k,T,null),T.onAfterShadow(n,T,A,x,G,k,null)}}const F=T.children;for(let G=0,W=F.length;G<W;G++)M(F[G],A,x,b,X)}function C(T){T.target.removeEventListener("dispose",C);for(const x in l){const b=l[x],X=T.target.uuid;X in b&&(b[X].dispose(),delete b[X])}}}function W0(n,e){function t(){let L=!1;const se=new Ct;let ne=null;const pe=new Ct(0,0,0,0);return{setMask:function(Q){ne!==Q&&!L&&(n.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){L=Q},setClear:function(Q,q,ve,Le,ft){ft===!0&&(Q*=Le,q*=Le,ve*=Le),se.set(Q,q,ve,Le),pe.equals(se)===!1&&(n.clearColor(Q,q,ve,Le),pe.copy(se))},reset:function(){L=!1,ne=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,ne=null,pe=null,Q=null;return{setReversed:function(q){if(se!==q){const ve=e.get("EXT_clip_control");q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),se=q;const Le=Q;Q=null,this.setClear(Le)}},getReversed:function(){return se},setTest:function(q){q?ie(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(q){ne!==q&&!L&&(n.depthMask(q),ne=q)},setFunc:function(q){if(se&&(q=wu[q]),pe!==q){switch(q){case Ao:n.depthFunc(n.NEVER);break;case Ro:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case Io:n.depthFunc(n.EQUAL);break;case Po:n.depthFunc(n.GEQUAL);break;case Lo:n.depthFunc(n.GREATER);break;case Do:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=q}},setLocked:function(q){L=q},setClear:function(q){Q!==q&&(Q=q,se&&(q=1-q),n.clearDepth(q))},reset:function(){L=!1,ne=null,pe=null,Q=null,se=!1}}}function r(){let L=!1,se=null,ne=null,pe=null,Q=null,q=null,ve=null,Le=null,ft=null;return{setTest:function(st){L||(st?ie(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(st){se!==st&&!L&&(n.stencilMask(st),se=st)},setFunc:function(st,qn,Yn){(ne!==st||pe!==qn||Q!==Yn)&&(n.stencilFunc(st,qn,Yn),ne=st,pe=qn,Q=Yn)},setOp:function(st,qn,Yn){(q!==st||ve!==qn||Le!==Yn)&&(n.stencilOp(st,qn,Yn),q=st,ve=qn,Le=Yn)},setLocked:function(st){L=st},setClear:function(st){ft!==st&&(n.clearStencil(st),ft=st)},reset:function(){L=!1,se=null,ne=null,pe=null,Q=null,q=null,ve=null,Le=null,ft=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},p={},h=new WeakMap,d=[],g=null,v=!1,m=null,f=null,S=null,w=null,M=null,C=null,T=null,A=new Xe(0,0,0),x=0,b=!1,X=null,R=null,F=null,G=null,W=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ee)[1]),V=O>=1):ee.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),V=O>=2);let Z=null,he={};const ge=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Fe=new Ct().fromArray(ge),_t=new Ct().fromArray(ue);function gt(L,se,ne,pe){const Q=new Uint8Array(4),q=n.createTexture();n.bindTexture(L,q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<ne;ve++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(se+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return q}const j={};j[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(xr),Be(!1),It(dl),ie(n.CULL_FACE),rt(si);function ie(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ae(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ue(L,se){return p[L]!==se?(n.bindFramebuffer(L,se),p[L]=se,L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(L,se){let ne=d,pe=!1;if(L){ne=h.get(se),ne===void 0&&(ne=[],h.set(se,ne));const Q=L.textures;if(ne.length!==Q.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let q=0,ve=Q.length;q<ve;q++)ne[q]=n.COLOR_ATTACHMENT0+q;ne.length=Q.length,pe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ne)}function Ie(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Vt={[Oi]:n.FUNC_ADD,[$d]:n.FUNC_SUBTRACT,[jd]:n.FUNC_REVERSE_SUBTRACT};Vt[Kd]=n.MIN,Vt[Zd]=n.MAX;const qe={[Jd]:n.ZERO,[Qd]:n.ONE,[eu]:n.SRC_COLOR,[wo]:n.SRC_ALPHA,[au]:n.SRC_ALPHA_SATURATE,[ru]:n.DST_COLOR,[nu]:n.DST_ALPHA,[tu]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[su]:n.ONE_MINUS_DST_COLOR,[iu]:n.ONE_MINUS_DST_ALPHA,[ou]:n.CONSTANT_COLOR,[cu]:n.ONE_MINUS_CONSTANT_COLOR,[lu]:n.CONSTANT_ALPHA,[hu]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(L,se,ne,pe,Q,q,ve,Le,ft,st){if(L===si){v===!0&&(ae(n.BLEND),v=!1);return}if(v===!1&&(ie(n.BLEND),v=!0),L!==Yd){if(L!==m||st!==b){if((f!==Oi||M!==Oi)&&(n.blendEquation(n.FUNC_ADD),f=Oi,M=Oi),st)switch(L){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFunc(n.ONE,n.ONE);break;case fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",L);break}else switch(L){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fl:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",L);break}S=null,w=null,C=null,T=null,A.set(0,0,0),x=0,m=L,b=st}return}Q=Q||se,q=q||ne,ve=ve||pe,(se!==f||Q!==M)&&(n.blendEquationSeparate(Vt[se],Vt[Q]),f=se,M=Q),(ne!==S||pe!==w||q!==C||ve!==T)&&(n.blendFuncSeparate(qe[ne],qe[pe],qe[q],qe[ve]),S=ne,w=pe,C=q,T=ve),(Le.equals(A)===!1||ft!==x)&&(n.blendColor(Le.r,Le.g,Le.b,ft),A.copy(Le),x=ft),m=L,b=!1}function ht(L,se){L.side===ii?ae(n.CULL_FACE):ie(n.CULL_FACE);let ne=L.side===ln;se&&(ne=!ne),Be(ne),L.blending===pr&&L.transparent===!1?rt(si):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){X!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),X=L)}function It(L){L!==Wd?(ie(n.CULL_FACE),L!==R&&(L===dl?n.cullFace(n.BACK):L===Xd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),R=L}function P(L){L!==F&&(V&&n.lineWidth(L),F=L)}function Ut(L,se,ne){L?(ie(n.POLYGON_OFFSET_FILL),(G!==se||W!==ne)&&(G=se,W=ne,a.getReversed()&&(se=-se),n.polygonOffset(se,ne))):ae(n.POLYGON_OFFSET_FILL)}function nt(L){L?ie(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function ut(L){L===void 0&&(L=n.TEXTURE0+k-1),Z!==L&&(n.activeTexture(L),Z=L)}function Me(L,se,ne){ne===void 0&&(Z===null?ne=n.TEXTURE0+k-1:ne=Z);let pe=he[ne];pe===void 0&&(pe={type:void 0,texture:void 0},he[ne]=pe),(pe.type!==L||pe.texture!==se)&&(Z!==ne&&(n.activeTexture(ne),Z=ne),n.bindTexture(L,se||j[L]),pe.type=L,pe.texture=se)}function E(){const L=he[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function $(){try{n.texSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function K(){try{n.texSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Ae(){try{n.texStorage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Ce(){try{n.texImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function J(){try{n.texImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function te(L){Fe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function xe(L){_t.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),_t.copy(L))}function ye(L,se){let ne=l.get(se);ne===void 0&&(ne=new WeakMap,l.set(se,ne));let pe=ne.get(L);pe===void 0&&(pe=n.getUniformBlockIndex(se,L.name),ne.set(L,pe))}function de(L,se){const pe=l.get(se).get(L);c.get(se)!==pe&&(n.uniformBlockBinding(se,pe,L.__bindingPointIndex),c.set(se,pe))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,he={},p={},h=new WeakMap,d=[],g=null,v=!1,m=null,f=null,S=null,w=null,M=null,C=null,T=null,A=new Xe(0,0,0),x=0,b=!1,X=null,R=null,F=null,G=null,W=null,Fe.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Ie,setBlending:rt,setMaterial:ht,setFlipSided:Be,setCullFace:It,setLineWidth:P,setPolygonOffset:Ut,setScissorTest:nt,activeTexture:ut,bindTexture:Me,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ce,texImage3D:J,updateUBOMapping:ye,uniformBlockBinding:de,texStorage2D:re,texStorage3D:Ae,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:te,viewport:xe,reset:ke}}function X0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let p;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return d?new OffscreenCanvas(E,_):ea("canvas")}function v(E,_,D){let $=1;const K=Me(E);if((K.width>D||K.height>D)&&($=D/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor($*K.width),_e=Math.floor($*K.height);p===void 0&&(p=g(Y,_e));const re=_?g(Y,_e):p;return re.width=Y,re.height=_e,re.getContext("2d").drawImage(E,0,0,Y,_e),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+_e+")."),re}else return"data"in E&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,_,D,$,K=!1){if(E!==null){if(n[E]!==void 0)return n[E];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=_;if(_===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),_===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const _e=K?Qs:$e.getTransfer($);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=_e===at?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(E,_){let D;return E?_===null||_===Vn||_===ns?D=n.DEPTH24_STENCIL8:_===On?D=n.DEPTH32F_STENCIL8:_===ts&&(D=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===ns?D=n.DEPTH_COMPONENT24:_===On?D=n.DEPTH_COMPONENT32F:_===ts&&(D=n.DEPTH_COMPONENT16),D}function C(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==$t&&E.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){const _=E.target;_.removeEventListener("dispose",T),x(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),X(_)}function x(E){const _=i.get(E);if(_.__webglInit===void 0)return;const D=E.source,$=h.get(D);if($){const K=$[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(E),Object.keys($).length===0&&h.delete(D)}i.remove(E)}function b(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const D=E.source,$=h.get(D);delete $[_.__cacheKey],a.memory.textures--}function X(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let K=0;K<_.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[$][K]);else n.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)n.deleteFramebuffer(_.__webglFramebuffer[$]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=E.textures;for(let $=0,K=D.length;$<K;$++){const Y=i.get(D[$]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[$])}i.remove(E)}let R=0;function F(){R=0}function G(){const E=R;return E>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function k(E,_){const D=i.get(E);if(E.isVideoTexture&&nt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&D.__version!==E.version){const $=E.image;if($===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{j(D,E,_);return}}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function V(E,_){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){j(D,E,_);return}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function O(E,_){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){j(D,E,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function ee(E,_){const D=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&D.__version!==E.version){ie(D,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const Z={[Uo]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[No]:n.MIRRORED_REPEAT},he={[$t]:n.NEAREST,[fu]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},ge={[gu]:n.NEVER,[Su]:n.ALWAYS,[_u]:n.LESS,[Ic]:n.LEQUAL,[xu]:n.EQUAL,[Pc]:n.GEQUAL,[vu]:n.GREATER,[yu]:n.NOTEQUAL};function ue(E,_){if(_.type===On&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Ua||_.magFilter===_s||_.magFilter===ki||_.minFilter===nn||_.minFilter===Ua||_.minFilter===_s||_.minFilter===ki)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Z[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Z[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Z[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,he[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==_s&&_.minFilter!==ki||_.type===On&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(E,_){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));const $=_.source;let K=h.get($);K===void 0&&(K={},h.set($,K));const Y=W(_);if(Y!==E.__cacheKey){K[Y]===void 0&&(K[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[Y].usedTimes++;const _e=K[E.__cacheKey];_e!==void 0&&(K[E.__cacheKey].usedTimes--,_e.usedTimes===0&&b(_)),E.__cacheKey=Y,E.__webglTexture=K[Y].texture}return D}function _t(E,_,D){return Math.floor(Math.floor(E/D)/_)}function gt(E,_,D,$){const Y=E.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,D,$,_.data);else{Y.sort((J,te)=>J.start-te.start);let _e=0;for(let J=1;J<Y.length;J++){const te=Y[_e],xe=Y[J],ye=te.start+te.count,de=_t(xe.start,_.width,4),ke=_t(te.start,_.width,4);xe.start<=ye+1&&de===ke&&_t(xe.start+xe.count-1,_.width,4)===de?te.count=Math.max(te.count,xe.start+xe.count-te.start):(++_e,Y[_e]=xe)}Y.length=_e+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let J=0,te=Y.length;J<te;J++){const xe=Y[J],ye=Math.floor(xe.start/4),de=Math.ceil(xe.count/4),ke=ye%_.width,L=Math.floor(ye/_.width),se=de,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ke,L,se,ne,D,$,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function j(E,_,D){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);const K=Fe(E,_),Y=_.source;t.bindTexture($,E.__webglTexture,n.TEXTURE0+D);const _e=i.get(Y);if(Y.version!==_e.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const re=$e.getPrimaries($e.workingColorSpace),Ae=_.colorSpace===yi?null:$e.getPrimaries(_.colorSpace),Ce=_.colorSpace===yi||re===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let J=v(_.image,!1,r.maxTextureSize);J=ut(_,J);const te=s.convert(_.format,_.colorSpace),xe=s.convert(_.type);let ye=w(_.internalFormat,te,xe,_.colorSpace,_.isVideoTexture);ue($,_);let de;const ke=_.mipmaps,L=_.isVideoTexture!==!0,se=_e.__version===void 0||K===!0,ne=Y.dataReady,pe=C(_,J);if(_.isDepthTexture)ye=M(_.format===zi,_.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,te,xe,null));else if(_.isDataTexture)if(ke.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,pe,ye,ke[0].width,ke[0].height);for(let Q=0,q=ke.length;Q<q;Q++)de=ke[Q],L?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,xe,de.data):t.texImage2D(n.TEXTURE_2D,Q,ye,de.width,de.height,0,te,xe,de.data);_.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,pe,ye,J.width,J.height),ne&&gt(_,J,te,xe)):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,te,xe,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ye,ke[0].width,ke[0].height,J.depth);for(let Q=0,q=ke.length;Q<q;Q++)if(de=ke[Q],_.format!==In)if(te!==null)if(L){if(ne)if(_.layerUpdates.size>0){const ve=zl(de.width,de.height,_.format,_.type);for(const Le of _.layerUpdates){const ft=de.data.subarray(Le*ve/de.data.BYTES_PER_ELEMENT,(Le+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Le,de.width,de.height,1,te,ft)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,te,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ye,de.width,de.height,J.depth,0,de.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,te,xe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,ye,de.width,de.height,J.depth,0,te,xe,de.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,pe,ye,ke[0].width,ke[0].height);for(let Q=0,q=ke.length;Q<q;Q++)de=ke[Q],_.format!==In?te!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,ye,de.width,de.height,0,de.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,xe,de.data):t.texImage2D(n.TEXTURE_2D,Q,ye,de.width,de.height,0,te,xe,de.data)}else if(_.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ye,J.width,J.height,J.depth),ne)if(_.layerUpdates.size>0){const Q=zl(J.width,J.height,_.format,_.type);for(const q of _.layerUpdates){const ve=J.data.subarray(q*Q/J.data.BYTES_PER_ELEMENT,(q+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,te,xe,ve)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,xe,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,te,xe,J.data);else if(_.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,pe,ye,J.width,J.height,J.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,xe,J.data)):t.texImage3D(n.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,te,xe,J.data);else if(_.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,pe,ye,J.width,J.height);else{let Q=J.width,q=J.height;for(let ve=0;ve<pe;ve++)t.texImage2D(n.TEXTURE_2D,ve,ye,Q,q,0,te,xe,null),Q>>=1,q>>=1}}else if(ke.length>0){if(L&&se){const Q=Me(ke[0]);t.texStorage2D(n.TEXTURE_2D,pe,ye,Q.width,Q.height)}for(let Q=0,q=ke.length;Q<q;Q++)de=ke[Q],L?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,te,xe,de):t.texImage2D(n.TEXTURE_2D,Q,ye,te,xe,de);_.generateMipmaps=!1}else if(L){if(se){const Q=Me(J);t.texStorage2D(n.TEXTURE_2D,pe,ye,Q.width,Q.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,xe,J)}else t.texImage2D(n.TEXTURE_2D,0,ye,te,xe,J);m(_)&&f($),_e.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ie(E,_,D){if(_.image.length!==6)return;const $=Fe(E,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+D);const Y=i.get(K);if(K.version!==Y.__version||$===!0){t.activeTexture(n.TEXTURE0+D);const _e=$e.getPrimaries($e.workingColorSpace),re=_.colorSpace===yi?null:$e.getPrimaries(_.colorSpace),Ae=_.colorSpace===yi||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,te=[];for(let q=0;q<6;q++)!Ce&&!J?te[q]=v(_.image[q],!0,r.maxCubemapSize):te[q]=J?_.image[q].image:_.image[q],te[q]=ut(_,te[q]);const xe=te[0],ye=s.convert(_.format,_.colorSpace),de=s.convert(_.type),ke=w(_.internalFormat,ye,de,_.colorSpace),L=_.isVideoTexture!==!0,se=Y.__version===void 0||$===!0,ne=K.dataReady;let pe=C(_,xe);ue(n.TEXTURE_CUBE_MAP,_);let Q;if(Ce){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ke,xe.width,xe.height);for(let q=0;q<6;q++){Q=te[q].mipmaps;for(let ve=0;ve<Q.length;ve++){const Le=Q[ve];_.format!==In?ye!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,Le.width,Le.height,ye,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,ke,Le.width,Le.height,0,Le.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,Le.width,Le.height,ye,de,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,ke,Le.width,Le.height,0,ye,de,Le.data)}}}else{if(Q=_.mipmaps,L&&se){Q.length>0&&pe++;const q=Me(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ke,q.width,q.height)}for(let q=0;q<6;q++)if(J){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,te[q].width,te[q].height,ye,de,te[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,te[q].width,te[q].height,0,ye,de,te[q].data);for(let ve=0;ve<Q.length;ve++){const ft=Q[ve].image[q].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,ft.width,ft.height,ye,de,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,ke,ft.width,ft.height,0,ye,de,ft.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ye,de,te[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,ye,de,te[q]);for(let ve=0;ve<Q.length;ve++){const Le=Q[ve];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,ye,de,Le.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,ke,ye,de,Le.image[q])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),Y.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ae(E,_,D,$,K,Y){const _e=s.convert(D.format,D.colorSpace),re=s.convert(D.type),Ae=w(D.internalFormat,_e,re,D.colorSpace),Ce=i.get(_),J=i.get(D);if(J.__renderTarget=_,!Ce.__hasExternalTextures){const te=Math.max(1,_.width>>Y),xe=Math.max(1,_.height>>Y);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,Ae,te,xe,_.depth,0,_e,re,null):t.texImage2D(K,Y,Ae,te,xe,0,_e,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ut(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,J.__webglTexture,0,P(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,J.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(E,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,K=$&&$.isDepthTexture?$.type:null,Y=M(_.stencilBuffer,K),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ut(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Y,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{const $=_.textures;for(let K=0;K<$.length;K++){const Y=$[K],_e=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),Ae=w(Y.internalFormat,_e,re,Y.colorSpace);Ut(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Ae,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(E,_,D){const $=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ce=s.convert(_.depthTexture.format),J=s.convert(_.depthTexture.type);let te;_.depthTexture.format===ci?te=n.DEPTH_COMPONENT24:_.depthTexture.format===zi&&(te=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,te,_.width,_.height,0,Ce,J,null)}}else k(_.depthTexture,0);const Y=K.__webglTexture,_e=P(_),re=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Ae=_.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===ci)Ut(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,re,Y,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,re,Y,0);else if(_.depthTexture.format===zi)Ut(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,re,Y,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,re,Y,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const _=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let $=0;$<6;$++)Re(_.__webglFramebuffer[$],E,$);else{const $=E.texture.mipmaps;$&&$.length>0?Re(_.__webglFramebuffer[0],E,0):Re(_.__webglFramebuffer,E,0)}else if(D){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[$],E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Y)}}else{const $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(E,_,D){const $=i.get(E);_!==void 0&&ae($.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ie(E)}function qe(E){const _=E.texture,D=i.get(E),$=i.get(_);E.addEventListener("dispose",A);const K=E.textures,Y=E.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)D.__webglFramebuffer[re][Ae]=n.createFramebuffer()}else D.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)D.__webglFramebuffer[re]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(_e)for(let re=0,Ae=K.length;re<Ae;re++){const Ce=i.get(K[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ut(E)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const Ae=K[re];D.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Ce=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),te=w(Ae.internalFormat,Ce,J,Ae.colorSpace,E.isXRRenderTarget===!0),xe=P(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,te,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,D.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(D.__webglFramebuffer[re][Ae],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae);else ae(D.__webglFramebuffer[re],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,Ae=K.length;re<Ae;re++){const Ce=K[re],J=i.get(Ce);let te=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),ue(te,Ce),ae(D.__webglFramebuffer,E,Ce,n.COLOR_ATTACHMENT0+re,te,0),m(Ce)&&f(te)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),ue(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(D.__webglFramebuffer[Ae],E,_,n.COLOR_ATTACHMENT0,re,Ae);else ae(D.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,re,0);m(_)&&f(re),t.unbindTexture()}E.depthBuffer&&Ie(E)}function rt(E){const _=E.textures;for(let D=0,$=_.length;D<$;D++){const K=_[D];if(m(K)){const Y=S(E),_e=i.get(K).__webglTexture;t.bindTexture(Y,_e),f(Y),t.unbindTexture()}}}const ht=[],Be=[];function It(E){if(E.samples>0){if(Ut(E)===!1){const _=E.textures,D=E.width,$=E.height;let K=n.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),re=_.length>1;if(re)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ae=E.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);const J=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,D,$,0,0,D,$,K,n.NEAREST),c===!0&&(ht.length=0,Be.length=0,ht.push(n.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ht.push(Y),Be.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);const J=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(E){return Math.min(r.maxSamples,E.samples)}function Ut(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function nt(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function ut(E,_){const D=E.colorSpace,$=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==Sr&&D!==yi&&($e.getTransfer(D)===at?($!==In||K!==mn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",D)),_}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=ee,this.rebindTextures=Vt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function q0(n,e){function t(i,r=yi){let s;const a=$e.getTransfer(r);if(i===mn)return n.UNSIGNED_BYTE;if(i===wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Oh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uh)return n.BYTE;if(i===Nh)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===Bh)return n.ALPHA;if(i===kh)return n.RGB;if(i===In)return n.RGBA;if(i===ci)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===zh)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===yr)return n.RG;if(i===Rc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===Hs||i===Ws||i===Xs||i===qs)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fo||i===Oo||i===Bo||i===ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zo||i===Go||i===Vo||i===Ho||i===Wo||i===Xo||i===qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zo||i===Go)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ho)return s.COMPRESSED_R11_EAC;if(i===Wo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xo)return s.COMPRESSED_RG11_EAC;if(i===qo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yo||i===$o||i===jo||i===Ko||i===Zo||i===Jo||i===Qo||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$o)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ko)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ec)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oc||i===cc||i===lc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oc)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===dc||i===uc||i===fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Jh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:Y0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new _a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K0 extends Cr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new j0,f={},S=t.getContextAttributes();let w=null,M=null;const C=[],T=[],A=new Ke;let x=null;const b=new An;b.viewport=new Ct;const X=new An;X.viewport=new Ct;const R=[b,X],F=new cf;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=C[j];return ie===void 0&&(ie=new Va,C[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=C[j];return ie===void 0&&(ie=new Va,C[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=C[j];return ie===void 0&&(ie=new Va,C[j]=ie),ie.getHandSpace()};function k(j){const ie=T.indexOf(j.inputSource);if(ie===-1)return;const ae=C[ie];ae!==void 0&&(ae.update(j.inputSource,j.frame,l||a),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",O);for(let j=0;j<C.length;j++){const ie=T[j];ie!==null&&(T[j]=null,C[j].disconnect(ie))}G=null,W=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(w),d=null,h=null,p=null,r=null,M=null,gt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",V),r.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ue=null,Re=null;S.depth&&(Re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=S.stencil?zi:ci,Ue=S.stencil?ns:Vn);const Ie={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new zn(h.textureWidth,h.textureHeight,{format:In,type:mn,depthTexture:new rs(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new zn(d.framebufferWidth,d.framebufferHeight,{format:In,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),gt.setContext(r),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(j){for(let ie=0;ie<j.removed.length;ie++){const ae=j.removed[ie],Ue=T.indexOf(ae);Ue>=0&&(T[Ue]=null,C[Ue].disconnect(ae))}for(let ie=0;ie<j.added.length;ie++){const ae=j.added[ie];let Ue=T.indexOf(ae);if(Ue===-1){for(let Ie=0;Ie<C.length;Ie++)if(Ie>=T.length){T.push(ae),Ue=Ie;break}else if(T[Ie]===null){T[Ie]=ae,Ue=Ie;break}if(Ue===-1)break}const Re=C[Ue];Re&&Re.connect(ae)}}const ee=new N,Z=new N;function he(j,ie,ae){ee.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const Ue=ee.distanceTo(Z),Re=ie.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,Vt=Re[14]/(Re[10]-1),qe=Re[14]/(Re[10]+1),rt=(Re[9]+1)/Re[5],ht=(Re[9]-1)/Re[5],Be=(Re[8]-1)/Re[0],It=(Ie[8]+1)/Ie[0],P=Vt*Be,Ut=Vt*It,nt=Ue/(-Be+It),ut=nt*-Be;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ut),j.translateZ(nt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=Vt+nt,E=qe+nt,_=P-ut,D=Ut+(Ue-ut),$=rt*qe/E*Me,K=ht*qe/E*Me;j.projectionMatrix.makePerspective(_,D,$,K,Me,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ge(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,ae=j.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),F.near=X.near=b.near=ie,F.far=X.far=b.far=ae,(G!==F.near||W!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,W=F.far),F.layers.mask=j.layers.mask|6,b.layers.mask=F.layers.mask&-5,X.layers.mask=F.layers.mask&-3;const Ue=j.parent,Re=F.cameras;ge(F,Ue);for(let Ie=0;Ie<Re.length;Ie++)ge(Re[Ie],Ue);Re.length===2?he(F,b,X):F.projectionMatrix.copy(b.projectionMatrix),ue(j,F,Ue)};function ue(j,ie,ae){ae===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=pc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return f[j]};let Fe=null;function _t(j,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ue=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let qe=0;qe<ae.length;qe++){const rt=ae[qe];let ht=null;if(d!==null)ht=d.getViewport(rt);else{const It=p.getViewSubImage(h,rt);ht=It.viewport,qe===0&&(e.setRenderTargetTextures(M,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(M))}let Be=R[qe];Be===void 0&&(Be=new An,Be.layers.enable(qe),Be.viewport=new Ct,R[qe]=Be),Be.matrix.fromArray(rt.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(rt.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(ht.x,ht.y,ht.width,ht.height),qe===0&&(F.matrix.copy(Be.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Be)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){p=i.getBinding();const qe=p.getDepthInformation(ae[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),p=i.getBinding();for(let qe=0;qe<ae.length;qe++){const rt=ae[qe].camera;if(rt){let ht=f[rt];ht||(ht=new Jh,f[rt]=ht);const Be=p.getCameraImage(rt);ht.sourceTexture=Be}}}}for(let ae=0;ae<C.length;ae++){const Ue=T[ae],Re=C[ae];Ue!==null&&Re!==void 0&&Re.update(Ue,ie,l||a)}Fe&&Fe(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const gt=new sd;gt.setAnimationLoop(_t),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const Ni=new Hn,Z0=new wt;function J0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Qh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,S,w,M){f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),w=S.envMap,M=S.envMapRotation;w&&(m.envMap.value=w,Ni.copy(M),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(Ni)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Q0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const M=w.program;i.uniformBlockBinding(S,M)}function l(S,w){let M=r[S.id];M===void 0&&(g(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",m));const C=w.program;i.updateUBOMapping(S,C);const T=e.render.frame;s[S.id]!==T&&(h(S),s[S.id]=T)}function u(S){const w=p();S.__bindingPointIndex=w;const M=n.createBuffer(),C=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const w=r[S.id],M=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,A=M.length;T<A;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,X=x.length;b<X;b++){const R=x[b];if(d(R,T,b,C)===!0){const F=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let k=0;k<G.length;k++){const V=G[k],O=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+W,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,w,M,C){const T=S.value,A=w+"_"+M;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const x=C[A];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return C[A]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function g(S){const w=S.uniforms;let M=0;const C=16;for(let A=0,x=w.length;A<x;A++){const b=Array.isArray(w[A])?w[A]:[w[A]];for(let X=0,R=b.length;X<R;X++){const F=b[X],G=Array.isArray(F.value)?F.value:[F.value];for(let W=0,k=G.length;W<k;W++){const V=G[W],O=v(V),ee=M%C,Z=ee%O.boundary,he=ee+Z;M+=Z,he!==0&&C-he<O.storage&&(M+=C-he),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=O.storage}}}const T=M%C;return T>0&&(M+=C-T),S.__size=M,S.__cache={},this}function v(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const e_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function t_(){return Dn===null&&(Dn=new Xu(e_,16,16,yr,oi),Dn.name="DFG_LUT",Dn.minFilter=nn,Dn.magFilter=nn,Dn.wrapS=ri,Dn.wrapT=ri,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class n_{constructor(e={}){const{canvas:t=bu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:d=mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=d,m=new Set([Cc,Rc,Ac]),f=new Set([mn,Vn,ts,ns,wc,Tc]),S=new Uint32Array(4),w=new Int32Array(4);let M=null,C=null;const T=[],A=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let X=!1;this._outputColorSpace=pn;let R=0,F=0,G=null,W=-1,k=null;const V=new Ct,O=new Ct;let ee=null;const Z=new Xe(0);let he=0,ge=t.width,ue=t.height,Fe=1,_t=null,gt=null;const j=new Ct(0,0,ge,ue),ie=new Ct(0,0,ge,ue);let ae=!1;const Ue=new Uc;let Re=!1,Ie=!1;const Vt=new wt,qe=new N,rt=new Ct,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function It(){return G===null?Fe:1}let P=i;function Ut(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ft,!1),P===null){const U="webgl2";if(P=Ut(U,y),P===null)throw Ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Qe("WebGLRenderer: "+y.message),y}let nt,ut,Me,E,_,D,$,K,Y,_e,re,Ae,Ce,J,te,xe,ye,de,ke,L,se,ne,pe;function Q(){nt=new ng(P),nt.init(),se=new q0(P,nt),ut=new $m(P,nt,e,se),Me=new W0(P,nt),ut.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),E=new sg(P),_=new I0,D=new X0(P,nt,Me,_,ut,se,E),$=new tg(b),K=new hf(P),ne=new qm(P,K),Y=new ig(P,K,E,ne),_e=new og(P,Y,K,ne,E),de=new ag(P,ut,D),te=new jm(_),re=new C0(b,$,nt,ut,ne,te),Ae=new J0(b,_),Ce=new L0,J=new B0(nt),ye=new Xm(b,$,Me,_e,g,c),xe=new H0(b,_e,ut),pe=new Q0(P,E,ut,Me),ke=new Ym(P,nt,E),L=new rg(P,nt,E),E.programs=re.programs,b.capabilities=ut,b.extensions=nt,b.properties=_,b.renderLists=Ce,b.shadowMap=xe,b.state=Me,b.info=E}Q(),v!==mn&&(x=new lg(v,t.width,t.height,r,s));const q=new K0(b,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(y){y!==void 0&&(Fe=y,this.setSize(ge,ue,!1))},this.getSize=function(y){return y.set(ge,ue)},this.setSize=function(y,U,H=!0){if(q.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=y,ue=U,t.width=Math.floor(y*Fe),t.height=Math.floor(U*Fe),H===!0&&(t.style.width=y+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(ge*Fe,ue*Fe).floor()},this.setDrawingBufferSize=function(y,U,H){ge=y,ue=U,Fe=H,t.width=Math.floor(y*H),t.height=Math.floor(U*H),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(v===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,U,H,z){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,U,H,z),Me.viewport(V.copy(j).multiplyScalar(Fe).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,U,H,z){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,U,H,z),Me.scissor(O.copy(ie).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){Me.setScissorTest(ae=y)},this.setOpaqueSort=function(y){_t=y},this.setTransparentSort=function(y){gt=y},this.getClearColor=function(y){return y.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,H=!0){let z=0;if(y){let B=!1;if(G!==null){const ce=G.texture.format;B=m.has(ce)}if(B){const ce=G.texture.type,fe=f.has(ce),le=ye.getClearColor(),Se=ye.getClearAlpha(),Ee=le.r,De=le.g,ze=le.b;fe?(S[0]=Ee,S[1]=De,S[2]=ze,S[3]=Se,P.clearBufferuiv(P.COLOR,0,S)):(w[0]=Ee,w[1]=De,w[2]=ze,w[3]=Se,P.clearBufferiv(P.COLOR,0,w))}else z|=P.COLOR_BUFFER_BIT}U&&(z|=P.DEPTH_BUFFER_BIT),H&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),ye.dispose(),Ce.dispose(),J.dispose(),_.dispose(),$.dispose(),_e.dispose(),ne.dispose(),pe.dispose(),re.dispose(),q.dispose(),q.removeEventListener("sessionstart",il),q.removeEventListener("sessionend",rl),Ri.stop()};function ve(y){y.preventDefault(),vl("WebGLRenderer: Context Lost."),X=!0}function Le(){vl("WebGLRenderer: Context Restored."),X=!1;const y=E.autoReset,U=xe.enabled,H=xe.autoUpdate,z=xe.needsUpdate,B=xe.type;Q(),E.autoReset=y,xe.enabled=U,xe.autoUpdate=H,xe.needsUpdate=z,xe.type=B}function ft(y){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function st(y){const U=y.target;U.removeEventListener("dispose",st),qn(U)}function qn(y){Yn(y),_.remove(y)}function Yn(y){const U=_.get(y).programs;U!==void 0&&(U.forEach(function(H){re.releaseProgram(H)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,H,z,B,ce){U===null&&(U=ht);const fe=B.isMesh&&B.matrixWorld.determinant()<0,le=Bd(y,U,H,z,B);Me.setMaterial(z,fe);let Se=H.index,Ee=1;if(z.wireframe===!0){if(Se=Y.getWireframeAttribute(H),Se===void 0)return;Ee=2}const De=H.drawRange,ze=H.attributes.position;let Te=De.start*Ee,ot=(De.start+De.count)*Ee;ce!==null&&(Te=Math.max(Te,ce.start*Ee),ot=Math.min(ot,(ce.start+ce.count)*Ee)),Se!==null?(Te=Math.max(Te,0),ot=Math.min(ot,Se.count)):ze!=null&&(Te=Math.max(Te,0),ot=Math.min(ot,ze.count));const Pt=ot-Te;if(Pt<0||Pt===1/0)return;ne.setup(B,z,le,H,Se);let At,ct=ke;if(Se!==null&&(At=K.get(Se),ct=L,ct.setIndex(At)),B.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*It()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(B.isLine){let Zt=z.linewidth;Zt===void 0&&(Zt=1),Me.setLineWidth(Zt*It()),B.isLineSegments?ct.setMode(P.LINES):B.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else B.isPoints?ct.setMode(P.POINTS):B.isSprite&&ct.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ta("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ct.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Zt=B._multiDrawStarts,be=B._multiDrawCounts,hn=B._multiDrawCount,Je=Se?K.get(Se).bytesPerElement:1,Mn=_.get(z).currentProgram.getUniforms();for(let Pn=0;Pn<hn;Pn++)Mn.setValue(P,"_gl_DrawID",Pn),ct.render(Zt[Pn]/Je,be[Pn])}else if(B.isInstancedMesh)ct.renderInstances(Te,Pt,B.count);else if(H.isInstancedBufferGeometry){const Zt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,be=Math.min(H.instanceCount,Zt);ct.renderInstances(Te,Pt,be)}else ct.render(Te,Pt)};function nl(y,U,H){y.transparent===!0&&y.side===ii&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,gs(y,U,H),y.side=Ei,y.needsUpdate=!0,gs(y,U,H),y.side=ii):gs(y,U,H)}this.compile=function(y,U,H=null){H===null&&(H=y),C=J.get(H),C.init(U),A.push(C),H.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(C.pushLight(B),B.castShadow&&C.pushShadow(B))}),y!==H&&y.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(C.pushLight(B),B.castShadow&&C.pushShadow(B))}),C.setupLights();const z=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let fe=0;fe<ce.length;fe++){const le=ce[fe];nl(le,H,B),z.add(le)}else nl(ce,H,B),z.add(ce)}),C=A.pop(),z},this.compileAsync=function(y,U,H=null){const z=this.compile(y,U,H);return new Promise(B=>{function ce(){if(z.forEach(function(fe){_.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){B(y);return}setTimeout(ce,10)}nt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ia=null;function Od(y){Ia&&Ia(y)}function il(){Ri.stop()}function rl(){Ri.start()}const Ri=new sd;Ri.setAnimationLoop(Od),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(y){Ia=y,q.setAnimationLoop(y),y===null?Ri.stop():Ri.start()},q.addEventListener("sessionstart",il),q.addEventListener("sessionend",rl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;const H=q.enabled===!0&&q.isPresenting===!0,z=x!==null&&(G===null||H)&&x.begin(b,G);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,U,G),C=J.get(y,A.length),C.init(U),A.push(C),Vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(Vt,Bn,U.reversedDepth),Ie=this.localClippingEnabled,Re=te.init(this.clippingPlanes,Ie),M=Ce.get(y,T.length),M.init(),T.push(M),q.enabled===!0&&q.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&Pa(fe,U,-1/0,b.sortObjects)}Pa(y,U,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(_t,gt),Be=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Be&&ye.addToRenderList(M,y),this.info.render.frame++,Re===!0&&te.beginShadows();const B=C.state.shadowsArray;if(xe.render(B,y,U),Re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&x.hasRenderPass())===!1){const fe=M.opaque,le=M.transmissive;if(C.setupLights(),U.isArrayCamera){const Se=U.cameras;if(le.length>0)for(let Ee=0,De=Se.length;Ee<De;Ee++){const ze=Se[Ee];al(fe,le,y,ze)}Be&&ye.render(y);for(let Ee=0,De=Se.length;Ee<De;Ee++){const ze=Se[Ee];sl(M,y,ze,ze.viewport)}}else le.length>0&&al(fe,le,y,U),Be&&ye.render(y),sl(M,y,U)}G!==null&&F===0&&(D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G)),z&&x.end(b),y.isScene===!0&&y.onAfterRender(b,y,U),ne.resetDefaultState(),W=-1,k=null,A.pop(),A.length>0?(C=A[A.length-1],Re===!0&&te.setGlobalState(b.clippingPlanes,C.state.camera)):C=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function Pa(y,U,H,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)C.pushLight(y),y.castShadow&&C.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ue.intersectsSprite(y)){z&&rt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Vt);const fe=_e.update(y),le=y.material;le.visible&&M.push(y,fe,le,H,rt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ue.intersectsObject(y))){const fe=_e.update(y),le=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),rt.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),rt.copy(fe.boundingSphere.center)),rt.applyMatrix4(y.matrixWorld).applyMatrix4(Vt)),Array.isArray(le)){const Se=fe.groups;for(let Ee=0,De=Se.length;Ee<De;Ee++){const ze=Se[Ee],Te=le[ze.materialIndex];Te&&Te.visible&&M.push(y,fe,Te,H,rt.z,ze)}}else le.visible&&M.push(y,fe,le,H,rt.z,null)}}const ce=y.children;for(let fe=0,le=ce.length;fe<le;fe++)Pa(ce[fe],U,H,z)}function sl(y,U,H,z){const{opaque:B,transmissive:ce,transparent:fe}=y;C.setupLightsView(H),Re===!0&&te.setGlobalState(b.clippingPlanes,H),z&&Me.viewport(V.copy(z)),B.length>0&&ms(B,U,H),ce.length>0&&ms(ce,U,H),fe.length>0&&ms(fe,U,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function al(y,U,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[z.id]===void 0){const Te=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[z.id]=new zn(1,1,{generateMipmaps:!0,type:Te?oi:mn,minFilter:ki,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ce=C.state.transmissionRenderTarget[z.id],fe=z.viewport||V;ce.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);const le=b.getRenderTarget(),Se=b.getActiveCubeFace(),Ee=b.getActiveMipmapLevel();b.setRenderTarget(ce),b.getClearColor(Z),he=b.getClearAlpha(),he<1&&b.setClearColor(16777215,.5),b.clear(),Be&&ye.render(H);const De=b.toneMapping;b.toneMapping=kn;const ze=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),C.setupLightsView(z),Re===!0&&te.setGlobalState(b.clippingPlanes,z),ms(y,H,z),D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ot=0,Pt=U.length;ot<Pt;ot++){const At=U[ot],{object:ct,geometry:Zt,material:be,group:hn}=At;if(be.side===ii&&ct.layers.test(z.layers)){const Je=be.side;be.side=ln,be.needsUpdate=!0,ol(ct,H,z,Zt,be,hn),be.side=Je,be.needsUpdate=!0,Te=!0}}Te===!0&&(D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce))}b.setRenderTarget(le,Se,Ee),b.setClearColor(Z,he),ze!==void 0&&(z.viewport=ze),b.toneMapping=De}function ms(y,U,H){const z=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ce=y.length;B<ce;B++){const fe=y[B],{object:le,geometry:Se,group:Ee}=fe;let De=fe.material;De.allowOverride===!0&&z!==null&&(De=z),le.layers.test(H.layers)&&ol(le,U,H,Se,De,Ee)}}function ol(y,U,H,z,B,ce){y.onBeforeRender(b,U,H,z,B,ce),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(b,U,H,z,y,ce),B.transparent===!0&&B.side===ii&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,b.renderBufferDirect(H,U,z,B,y,ce),B.side=Ei,B.needsUpdate=!0,b.renderBufferDirect(H,U,z,B,y,ce),B.side=ii):b.renderBufferDirect(H,U,z,B,y,ce),y.onAfterRender(b,U,H,z,B,ce)}function gs(y,U,H){U.isScene!==!0&&(U=ht);const z=_.get(y),B=C.state.lights,ce=C.state.shadowsArray,fe=B.state.version,le=re.getParameters(y,B.state,ce,U,H),Se=re.getProgramCacheKey(le);let Ee=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const De=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=$.get(y.envMap||z.environment,De),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ee===void 0&&(y.addEventListener("dispose",st),Ee=new Map,z.programs=Ee);let ze=Ee.get(Se);if(ze!==void 0){if(z.currentProgram===ze&&z.lightsStateVersion===fe)return ll(y,le),ze}else le.uniforms=re.getUniforms(y),y.onBeforeCompile(le,b),ze=re.acquireProgram(le,Se),Ee.set(Se,ze),z.uniforms=le.uniforms;const Te=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=te.uniform),ll(y,le),z.needsLights=zd(y),z.lightsStateVersion=fe,z.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),z.currentProgram=ze,z.uniformsList=null,ze}function cl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ys.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ll(y,U){const H=_.get(y);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Bd(y,U,H,z,B){U.isScene!==!0&&(U=ht),D.resetTextureUnits();const ce=U.fog,fe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,le=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Sr,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ee=$.get(z.envMap||fe,Se),De=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!H.morphAttributes.position,ot=!!H.morphAttributes.normal,Pt=!!H.morphAttributes.color;let At=kn;z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(At=b.toneMapping);const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Zt=ct!==void 0?ct.length:0,be=_.get(z),hn=C.state.lights;if(Re===!0&&(Ie===!0||y!==k)){const Ht=y===k&&z.id===W;te.setState(z,y,Ht)}let Je=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==hn.state.version||be.outputColorSpace!==le||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==Ee||z.fog===!0&&be.fog!==ce||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==te.numPlanes||be.numIntersection!==te.numIntersection)||be.vertexAlphas!==De||be.vertexTangents!==ze||be.morphTargets!==Te||be.morphNormals!==ot||be.morphColors!==Pt||be.toneMapping!==At||be.morphTargetsCount!==Zt)&&(Je=!0):(Je=!0,be.__version=z.version);let Mn=be.currentProgram;Je===!0&&(Mn=gs(z,U,B));let Pn=!1,Ci=!1,ji=!1;const dt=Mn.getUniforms(),qt=be.uniforms;if(Me.useProgram(Mn.program)&&(Pn=!0,Ci=!0,ji=!0),z.id!==W&&(W=z.id,Ci=!0),Pn||k!==y){Me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),dt.setValue(P,"projectionMatrix",y.projectionMatrix),dt.setValue(P,"viewMatrix",y.matrixWorldInverse);const ui=dt.map.cameraPosition;ui!==void 0&&ui.setValue(P,qe.setFromMatrixPosition(y.matrixWorld)),ut.logarithmicDepthBuffer&&dt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,Ci=!0,ji=!0)}if(be.needsLights&&(hn.state.directionalShadowMap.length>0&&dt.setValue(P,"directionalShadowMap",hn.state.directionalShadowMap,D),hn.state.spotShadowMap.length>0&&dt.setValue(P,"spotShadowMap",hn.state.spotShadowMap,D),hn.state.pointShadowMap.length>0&&dt.setValue(P,"pointShadowMap",hn.state.pointShadowMap,D)),B.isSkinnedMesh){dt.setOptional(P,B,"bindMatrix"),dt.setOptional(P,B,"bindMatrixInverse");const Ht=B.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),dt.setValue(P,"boneTexture",Ht.boneTexture,D))}B.isBatchedMesh&&(dt.setOptional(P,B,"batchingTexture"),dt.setValue(P,"batchingTexture",B._matricesTexture,D),dt.setOptional(P,B,"batchingIdTexture"),dt.setValue(P,"batchingIdTexture",B._indirectTexture,D),dt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(P,"batchingColorTexture",B._colorsTexture,D));const di=H.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&de.update(B,H,Mn),(Ci||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,dt.setValue(P,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(qt.envMapIntensity.value=U.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=t_()),Ci&&(dt.setValue(P,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&kd(qt,ji),ce&&z.fog===!0&&Ae.refreshFogUniforms(qt,ce),Ae.refreshMaterialUniforms(qt,z,Fe,ue,C.state.transmissionRenderTarget[y.id]),Ys.upload(P,cl(be),qt,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ys.upload(P,cl(be),qt,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(P,"center",B.center),dt.setValue(P,"modelViewMatrix",B.modelViewMatrix),dt.setValue(P,"normalMatrix",B.normalMatrix),dt.setValue(P,"modelMatrix",B.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ht=z.uniformsGroups;for(let ui=0,Ki=Ht.length;ui<Ki;ui++){const hl=Ht[ui];pe.update(hl,Mn),pe.bind(hl,Mn)}}return Mn}function kd(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function zd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(y,U,H){const z=_.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_.get(y.texture).__webglTexture=U,_.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const H=_.get(y);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Gd=P.createFramebuffer();this.setRenderTarget=function(y,U=0,H=0){G=y,R=U,F=H;let z=null,B=!1,ce=!1;if(y){const le=_.get(y);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),V.copy(y.viewport),O.copy(y.scissor),ee=y.scissorTest,Me.viewport(V),Me.scissor(O),Me.setScissorTest(ee),W=-1;return}else if(le.__webglFramebuffer===void 0)D.setupRenderTarget(y);else if(le.__hasExternalTextures)D.rebindTextures(y,_.get(y.texture).__webglTexture,_.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const De=y.depthTexture;if(le.__boundDepthTexture!==De){if(De!==null&&_.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(y)}}const Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ce=!0);const Ee=_.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?z=Ee[U][H]:z=Ee[U],B=!0):y.samples>0&&D.useMultisampledRTT(y)===!1?z=_.get(y).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[H]:z=Ee,V.copy(y.viewport),O.copy(y.scissor),ee=y.scissorTest}else V.copy(j).multiplyScalar(Fe).floor(),O.copy(ie).multiplyScalar(Fe).floor(),ee=ae;if(H!==0&&(z=Gd),Me.bindFramebuffer(P.FRAMEBUFFER,z)&&Me.drawBuffers(y,z),Me.viewport(V),Me.scissor(O),Me.setScissorTest(ee),B){const le=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,le.__webglTexture,H)}else if(ce){const le=U;for(let Se=0;Se<y.textures.length;Se++){const Ee=_.get(y.textures[Se]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Se,Ee.__webglTexture,H,le)}}else if(y!==null&&H!==0){const le=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,H)}W=-1},this.readRenderTargetPixels=function(y,U,H,z,B,ce,fe,le=0){if(!(y&&y.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){Me.bindFramebuffer(P.FRAMEBUFFER,Se);try{const Ee=y.textures[le],De=Ee.format,ze=Ee.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!ut.textureFormatReadable(De)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(ze)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&H>=0&&H<=y.height-B&&P.readPixels(U,H,z,B,se.convert(De),se.convert(ze),ce)}finally{const Ee=G!==null?_.get(G).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,U,H,z,B,ce,fe,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se)if(U>=0&&U<=y.width-z&&H>=0&&H<=y.height-B){Me.bindFramebuffer(P.FRAMEBUFFER,Se);const Ee=y.textures[le],De=Ee.format,ze=Ee.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!ut.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(U,H,z,B,se.convert(De),se.convert(ze),0);const ot=G!==null?_.get(G).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,ot);const Pt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Eu(P,Pt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(Te),P.deleteSync(Pt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,H=0){const z=Math.pow(2,-H),B=Math.floor(y.image.width*z),ce=Math.floor(y.image.height*z),fe=U!==null?U.x:0,le=U!==null?U.y:0;D.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,fe,le,B,ce),Me.unbindTexture()};const Vd=P.createFramebuffer(),Hd=P.createFramebuffer();this.copyTextureToTexture=function(y,U,H=null,z=null,B=0,ce=0){let fe,le,Se,Ee,De,ze,Te,ot,Pt;const At=y.isCompressedTexture?y.mipmaps[ce]:y.image;if(H!==null)fe=H.max.x-H.min.x,le=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,De=H.min.y,ze=H.isBox3?H.min.z:0;else{const qt=Math.pow(2,-B);fe=Math.floor(At.width*qt),le=Math.floor(At.height*qt),y.isDataArrayTexture?Se=At.depth:y.isData3DTexture?Se=Math.floor(At.depth*qt):Se=1,Ee=0,De=0,ze=0}z!==null?(Te=z.x,ot=z.y,Pt=z.z):(Te=0,ot=0,Pt=0);const ct=se.convert(U.format),Zt=se.convert(U.type);let be;U.isData3DTexture?(D.setTexture3D(U,0),be=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(D.setTexture2DArray(U,0),be=P.TEXTURE_2D_ARRAY):(D.setTexture2D(U,0),be=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const hn=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Pn=P.getParameter(P.UNPACK_SKIP_ROWS),Ci=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,At.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const ji=y.isDataArrayTexture||y.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const qt=_.get(y),di=_.get(U),Ht=_.get(qt.__renderTarget),ui=_.get(di.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ki=0;Ki<Se;Ki++)ji&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(y).__webglTexture,B,ze+Ki),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(U).__webglTexture,ce,Pt+Ki)),P.blitFramebuffer(Ee,De,fe,le,Te,ot,fe,le,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||_.has(y)){const qt=_.get(y),di=_.get(U);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Vd),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hd);for(let Ht=0;Ht<Se;Ht++)ji?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,B,ze+Ht):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,B),dt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,di.__webglTexture,ce,Pt+Ht):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,di.__webglTexture,ce),B!==0?P.blitFramebuffer(Ee,De,fe,le,Te,ot,fe,le,P.COLOR_BUFFER_BIT,P.NEAREST):dt?P.copyTexSubImage3D(be,ce,Te,ot,Pt+Ht,Ee,De,fe,le):P.copyTexSubImage2D(be,ce,Te,ot,Ee,De,fe,le);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else dt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(be,ce,Te,ot,Pt,fe,le,Se,ct,Zt,At.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(be,ce,Te,ot,Pt,fe,le,Se,ct,At.data):P.texSubImage3D(be,ce,Te,ot,Pt,fe,le,Se,ct,Zt,At):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ce,Te,ot,fe,le,ct,Zt,At.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ce,Te,ot,At.width,At.height,ct,At.data):P.texSubImage2D(P.TEXTURE_2D,ce,Te,ot,fe,le,ct,Zt,At);P.pixelStorei(P.UNPACK_ROW_LENGTH,hn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ci),ce===0&&U.generateMipmaps&&P.generateMipmap(be),Me.unbindTexture()},this.initRenderTarget=function(y){_.get(y).__webglFramebuffer===void 0&&D.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?D.setTextureCube(y,0):y.isData3DTexture?D.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?D.setTexture2DArray(y,0):D.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){R=0,F=0,G=null,Me.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const bt=Object.freeze({gravity:18,minSpeed:13,extraSpeed:15,minPull:.08,minAngle:5,maxAngle:80,maxFlight:5}),wi=Object.freeze({x:-6.8,y:2.85}),Ft=Object.freeze({minX:8,maxX:8.62,minY:.6,maxY:5.8}),i_=Object.freeze({x:Ft.minX,y:(Ft.minY+Ft.maxY)/2}),li=(n,e,t)=>Math.min(t,Math.max(e,n));function Dr(...n){if(!n.every(Number.isFinite))throw new RangeError("Shot math requires finite numbers.")}function ya(n){Dr(n.origin.x,n.origin.y,n.velocity.x,n.velocity.y)}function Oc(n,e,t,i){const r=Math.min(t,i)*.34;if(![n,e,t,i,r].every(Number.isFinite)||t<=0||i<=0)return null;const s=Math.hypot(n,e)/r;return s<bt.minPull||n>=0?null:{angle:li(Math.atan2(e,-n)*180/Math.PI,bt.minAngle,bt.maxAngle),power:li(s,0,1)}}function Sa(n){Dr(n.angle,n.power);const e=li(n.angle,bt.minAngle,bt.maxAngle)*Math.PI/180,t=bt.minSpeed+bt.extraSpeed*li(n.power,0,1);return{origin:{...wi},velocity:{x:Math.cos(e)*t,y:Math.sin(e)*t}}}function Ti(n,e){return ya(n),Dr(e),{x:n.origin.x+n.velocity.x*e,y:n.origin.y+n.velocity.y*e-.5*bt.gravity*e*e}}function hh(n,e){return ya(n),Dr(e),{x:n.velocity.x,y:n.velocity.y-bt.gravity*e}}function r_(n,e,t,i){if(ya(n),Dr(e.minX,e.maxX,e.minY,e.maxY,t,i),e.minX>e.maxX||e.minY>e.maxY)throw new RangeError("Bounds must be ordered.");if(i<t||t<0)return null;const r=[t,i];if(n.velocity.x!==0)for(const s of[e.minX,e.maxX])r.push((s-n.origin.x)/n.velocity.x);for(const s of[e.minY,e.maxY]){const a=n.velocity.y**2+2*bt.gravity*(n.origin.y-s);if(a>=0){const o=Math.sqrt(a);r.push((n.velocity.y-o)/bt.gravity,(n.velocity.y+o)/bt.gravity)}}for(const s of r.filter(a=>a>=t-1e-9&&a<=i+1e-9).sort((a,o)=>a-o)){const a=Ti(n,s);if(a.x>=e.minX-1e-8&&a.x<=e.maxX+1e-8&&a.y>=e.minY-1e-8&&a.y<=e.maxY+1e-8)return li(s,t,i)}return null}function dd(n,e=.24){return ya(n),Dr(e),n.origin.y<e?0:(n.velocity.y+Math.sqrt(n.velocity.y**2+2*bt.gravity*(n.origin.y-e)))/bt.gravity}function s_(n,e,t,i,r){return Oc(n*r,e,t,i)}function a_(n,e,t,i){if(n===0)return null;const r=n<0?1:-1,s=Oc(n*r,e,t,i);return s?{...s,facing:r}:null}function o_(n,e,t){if(t<e||!n.length)return null;const i=(t-e)/1e3,r=n.find(o=>o.time>=i)??n.at(-1),s=n[Math.max(0,n.indexOf(r)-1)],a=r.time===s.time?1:Math.min(1,Math.max(0,(i-s.time)/(r.time-s.time)));return r.poses.map(o=>{const c=s.poses.find(l=>l.actorId===o.actorId)?.feet??o.feet;return{actorId:o.actorId,feet:{x:c.x+(o.feet.x-c.x)*a,y:c.y+(o.feet.y-c.y)*a,z:0}}})}function c_(n,e,t=32){return[...new Set(n.map(i=>`${Math.floor(i%e/t)}:${Math.floor(Math.floor(i/e)/t)}`))]}function l_(n,e){if(!n)return"";if(n.state==="finished")return n.draw?"Both archers draw.":n.winner===e?"You are the last archer standing.":"Your opponent is the last archer standing.";if(n.state==="aborted")return"The service ended this duel safely.";if(n.state!=="active"||n.phase!=="planning"||!n.lastEvent?.teleport)return"";const t=n.lastEvent.teleport;if(t.ok)return"Teleport landed on a clear supported surface.";const i={"not-upward":"the arrow did not land on an upward-facing surface","no-support":"there was no supporting surface","occupied-or-blocked":"the arrival space was occupied or blocked"};return`Teleport failed: ${t.reason?i[t.reason]:"there was no legal arrival"}. The action was consumed.`}const Cn=n=>n.version==="volley-1";function h_(n){return JSON.stringify(Cn(n)?[n.id,n.version,n.seat.lifeId,n.epoch,n.roundId]:[n.id,n.version,n.seat.lifeId,n.activeSeat,n.planningStartedAt])}function d_(n,e){return Cn(n)?n.locks.find(t=>t.actorId===e)?.plan??null:null}function u_(n){if(!n.seats.every(t=>t.ready))return!1;if(!Cn(n))return n.seats.length===2;if(n.mode==="royale")return n.seats.length>=2&&n.seats.length<=8;const e=new Map;for(const t of n.seats){if(t.teamId===null)return!1;e.set(t.teamId,(e.get(t.teamId)??0)+1)}return n.seats.length===4&&e.size===2&&[...e.values()].every(t=>t===2)}function f_(n,e){const t=Cn(n),i=n.seats.find(h=>h.actorId===e);let r=l_(n,e);if(t&&n.state==="finished"&&(r=n.draw?"Match complete · draw.":n.winningTeam!==null?i&&"teamId"in i&&i.teamId===n.winningTeam?"Your team won.":"The other team won.":n.winner===e?"You are the last archer standing.":"Another archer is the last one standing."),t&&n.state==="aborted"&&(r="The service ended this match safely."),!t)return{preset:"Duel · alternate turns",turn:n.state==="waiting"?"Both archers must ready before the host starts.":n.state==="active"?n.phase==="planning"?n.seat.canAct?"Your turn. Choose an arrow and draw.":"Opponent’s turn. Watch the arena.":"Arrow resolving. Waiting for settlement.":n.state==="finished"?n.draw?"Duel complete · draw.":n.winner===e?"Duel complete · you won.":"Duel complete · opponent won.":"This duel was aborted. Leave to create a new room.",result:r,priority:[],locks:[],pressure:""};const s=n.locks.find(h=>h.actorId===e),a=n.actors.filter(h=>!h.eliminated).length,o=n.seat.canAct?"Choose an arrow and draw to lock.":s?.locked?s.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":n.priority.includes(e)?"Watch the arena.":"You are eliminated. Watch the remaining archers.",c=n.preset==="teams-1"?"Teams 2v2 · shared 20-second planning":n.preset==="royale-fixed-1"?"Royale · fixed arena · 30 rounds / 15 minutes · 20-second planning":"Royale · shrinking safe area · 20-second planning",l=n.state==="waiting"?n.mode==="teams"?"Four archers, two per team, must ready before the host starts.":"Two to eight archers must all ready before the host starts.":n.state==="active"?`Round ${n.round} · ${a} alive · ${n.phase==="planning"?o:"Arrows resolve in published priority order."}`:r,u=n.preset!=="royale-shrink-1"?"":`Safe area (solid) ${n.pressure.minX.toFixed(1)} to ${n.pressure.maxX.toFixed(1)}${n.pressure.warning?` · dashed bounds after round ${n.pressure.warning.afterRound} to ${n.pressure.warning.minX.toFixed(1)}–${n.pressure.warning.maxX.toFixed(1)} · outside feet take 25 damage`:""}`,p=n.locks.map(h=>{const d=h.plan;return{actorId:h.actorId,text:h.locked?d?d.kind==="pass"?"Pass locked":`${d.aim.arrow} locked · ${Math.round(d.aim.angle)}° · ${Math.round(d.aim.power*100)}% · ${d.aim.facing===1?"right":"left"}`:"Locked":"Planning"}});return{preset:c,turn:l,result:r,priority:n.priority,locks:p,pressure:u}}function dh(n,e=!1){if(typeof n!="string"||n.length>320)throw new Error("Invalid service origin.");const t=/^(https?):\/\/([A-Za-z0-9.-]+)(?::([1-9][0-9]{0,4}))?$/.exec(n);if(!t||t[0]!==n||!e&&t[1]!=="https")throw new Error("Invalid service origin.");const i=t[2].toLowerCase(),r=i.split(".");if(i.length>253||r.some(c=>!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(c)))throw new Error("Invalid service host.");const s=i==="127.0.0.1";if(!/[a-z]/.test(r.at(-1))&&!(e&&s))throw new Error("DNS service host required.");if(new URL(`${t[1]}://${i}`).hostname!==i)throw new Error("Ambiguous service host.");const a=t[3]===void 0?void 0:Number(t[3]);if(a!==void 0&&a>65535)throw new Error("Invalid service port.");const o=a===(t[1]==="https"?443:80)?void 0:a;return`${t[1]}://${i}${o===void 0?"":`:${o}`}`}function _c(n,e){if(n==="")return null;const t=dh(e,!0),i=n==="/api",r=i?t:dh(n.endsWith("/api")?n.slice(0,-4):n);if(!i&&!n.endsWith("/api"))throw new Error("Service endpoint must end in /api.");const s=`${r}/api`,a=s.replace(/^http/,"ws");return Object.freeze({mode:i?"same-origin":"https",requestBase:i?"/api":s,serviceId:s,boardSocket:`${a}/events`,combatSocket:`${a}/combat/events`})}function p_(n,e){if(n.length!==1)return null;try{return _c(n[0],e)}catch{return null}}function ud(n){if(n.mode==="same-origin")return Object.freeze({identity:"archery.challenge.identity.v1",room:"archery.combat.room.v1",legacy:!0});const e=encodeURIComponent(n.serviceId);return Object.freeze({identity:`archery.service.identity.v2:${e}`,room:`archery.service.room.v2:${e}`,legacy:!1})}function uh(n){if(typeof n=="string"){if(n!=="/api")throw new Error("Use a parsed endpoint or same-origin /api.");return _c("/api",typeof location>"u"?"http://localhost":location.origin)}const e=n.serviceId.slice(0,-4),t=_c(n.mode==="same-origin"?"/api":n.serviceId,e);if(!t||Object.keys(t).some(i=>t[i]!==n[i]))throw new Error("Invalid shared service context.");return t}const $s=n=>!!n&&typeof n=="object"&&!Array.isArray(n);class gr extends Error{status;code;retryAfterMs;transient;constructor(e,t,i,r){super(e),this.name="GuestRequestError",this.status=t,this.code=i,this.retryAfterMs=r,this.transient=r!==null}}function m_(n,e){let t=NaN;return n!==null&&/^[0-9]+$/.test(n)?t=Number(n)*1e3:n!==null&&/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), [0-9]{2} [A-Z][a-z]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT$/.test(n)&&(t=Math.max(0,Date.parse(n)-e)),Number.isSafeInteger(t)&&t>=0&&Number.isSafeInteger(e+t)?Math.max(1e3,t):1e3}function fh(n){if(!$s(n)||Object.keys(n).length!==2||typeof n.guestId!="string"||!n.guestId||typeof n.token!="string"||!n.token)throw new Error("Invalid guest identity.");return{guestId:n.guestId,token:n.token}}class Ma{selectedEndpoint;selectedKeys;fetcher;storage;current=null;generation=0;identityError=null;creating=null;admission=null;constructor(e,t=fetch,i){this.selectedEndpoint=uh(e),this.selectedKeys=ud(this.selectedEndpoint),this.fetcher=t,this.storage=i;let r;try{r=i?.getItem(this.storageKeys.identity)??null}catch{return}if(r!==null)try{this.current=Object.freeze({...fh(JSON.parse(r)),revision:this.generation})}catch{this.identityError=new Error("Saved guest identity is unreadable or unsupported. Existing data is preserved; forget it explicitly before creating another guest.")}}get revision(){return this.generation}get guestId(){return this.current?.guestId??null}get endpoint(){return this.selectedEndpoint}get serviceId(){return this.endpoint.serviceId}get storageKeys(){return this.selectedKeys}credentials(){return this.current}assertContext(e,t,i){if(!(typeof e=="string"?e==="/api"&&this.endpoint.mode==="same-origin":(()=>{const s=uh(e);return s.mode===this.endpoint.mode&&s.serviceId===this.serviceId})())||t!==this.fetcher||i!==this.storage)throw new Error("Shared guest session context must match service, fetcher and storage.")}assertRevision(e){if(e!==this.generation)throw new Error("Guest identity changed. Start again with the current guest.")}ensure(){if(this.identityError)return Promise.reject(this.identityError);if(this.current)return Promise.resolve(this.current);if(this.creating)return this.creating;const e=this.generation,t=this.create(e).finally(()=>{this.creating===t&&(this.creating=null)});return this.creating=t,t}async create(e){const t=fh(await this.request("/guests",{}));this.assertRevision(e),this.current=Object.freeze({...t,revision:++this.generation});try{this.storage?.setItem(this.storageKeys.identity,JSON.stringify(t))}catch{}return this.current}async request(e,t){if(this.identityError)throw this.identityError;if(!e.startsWith("/")||e.startsWith("//")||e.includes("\\"))throw new Error("Invalid shared service path.");if(this.admission&&Date.now()<this.admission.notBefore)throw this.admission.error;const i=this.generation,r=await this.fetcher.call(globalThis,this.endpoint.requestBase+e,{signal:AbortSignal.timeout(15e3),method:t===void 0?"GET":"POST",credentials:"omit",redirect:"error",headers:{"Content-Type":"application/json",...this.current?{Authorization:`Bearer ${this.current.token}`}:{}},...t===void 0?{}:{body:JSON.stringify(t)}});this.assertRevision(i);let s;try{s=await r.json()}catch(a){if(r.ok)throw a;s=null}if(this.assertRevision(i),!r.ok){const a=$s(s)&&$s(s.error)?s.error:null,o=a&&typeof a.code=="string"?a.code:null,c=o!==null&&["room_capacity","guest_room_capacity","command_capacity","socket_capacity","challenge_capacity","guest_capacity"].includes(o),l=Date.now(),u=r.status===429&&!c?m_(r.headers.get("Retry-After"),l):null,p=new gr(a&&typeof a.message=="string"?a.message:u!==null?"The shared service is busy. Wait a moment, then retry.":"Shared service unavailable. Retry or start a new local challenge.",r.status,o,u);throw u!==null&&(!this.admission||l+u>this.admission.notBefore)&&(this.admission={notBefore:l+u,error:p}),p}if(!$s(s))throw new Error("Invalid shared service response.");return s}forget(){this.generation++,this.current=null,this.identityError=null,this.creating=null;try{this.storage?.removeItem(this.storageKeys.identity)}catch{}}}const fd="skirmish-protocol-1",pd="combat-1",Bc=Object.freeze({maxRooms:128,maxSockets:128,maxSocketsPerMember:4,maxDebtPerArena:1024,maxDebt:8192,maxMemberships:16384,maxControls:4096,controlsPerMember:2,controlRetryMs:3e5,maxRateBuckets:1024,commandBurst:30,commandWindowMs:1e4,commandBodyBytes:8192,socketFrameBytes:2048,maxSnapshotBytes:4*1024*1024,slowClientBytes:4*1024*1024,authenticationTimeoutMs:5e3,maxUnauthenticatedSockets:16}),ei=Object.freeze({nock:Object.freeze({x:.92,y:2.77,z:0}),halfWidth:.86,height:3.055,head:Object.freeze({minX:-.325,maxX:.325,minY:2.255,maxY:2.905}),body:Object.freeze({minX:-.86,maxX:.86,minY:0,maxY:2.255})}),md=Object.freeze({version:"combat-1",cell:.125,gravity:18,step:1/120,maxSteps:3600,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,bombRadius:3,craterRadius:2,bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,groundFriction:14,airDrag:.15,restitution:0,matchMs:9e5,planningMs:2e4,launchDelayMs:100,maxActors:8});function kc(...n){if(!n.every(Number.isFinite))throw new RangeError("Finite combat coordinates required.")}function ra(n){if(!n||typeof n!="object")throw new RangeError("Planar position required.");if(kc(n.x,n.y,n.z),n.z!==0)throw new RangeError("Combat uses world z=0.")}function g_(n){if(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))throw new RangeError("Identifier must be a 1..128 character ASCII token.")}function gd(n){if(!n||typeof n!="object")throw new RangeError("Aim required.");if(kc(n.angle,n.power),n.angle<5||n.angle>80||n.power<.08||n.power>1||n.facing!==1&&n.facing!==-1)throw new RangeError("Aim outside combat limits.");if("arrow"in n&&!["normal","bomb","teleport"].includes(n.arrow))throw new RangeError("Unknown arrow.")}function _d(n){if(!Array.isArray(n)||n.length>md.maxActors)throw new RangeError("At most eight actors.");const e=new Set;for(const t of n){if(g_(t.id),ra(t.feet),ra(t.velocity),kc(t.health),!Number.isInteger(t.health)||t.health<0||t.health>100||Math.abs(t.feet.x)>1024||Math.abs(t.feet.y)>1024||Math.abs(t.velocity.x)>1e3||Math.abs(t.velocity.y)>1e3||e.has(t.id)||t.facing!==1&&t.facing!==-1||typeof t.eliminated!="boolean")throw new RangeError("Invalid actor.");e.add(t.id)}}function __(n,e=n.facing){return{x:n.feet.x+ei.nock.x*e,y:n.feet.y+ei.nock.y,z:0}}function ph(n,e){_d([n]),gd(e);const t=Sa(e),i=__(n,e.facing);return{origin:{x:i.x,y:i.y},velocity:{x:t.velocity.x*e.facing,y:t.velocity.y}}}function po(){const n=md.cell,e=512,t=288,i=-32,r=-8,s=new Array(e*t).fill(0);for(let a=0;a<t;a++)for(let o=0;o<e;o++){const c=i+(o+.5)*n,l=r+(a+.5)*n;(l<0||(c<-25||c>25)&&l>=5&&l<6||Math.abs(c)>10&&Math.abs(c)<13&&l>=11&&l<12)&&(s[a*e+o]=1)}return{version:"arena-1",revision:0,cell:n,minX:i,minY:r,width:e,height:t,bedrockY:-6,cells:s,spawnPads:[-28,-20,-16,-8,8,16,20,28].map(a=>({x:a,y:0,z:0}))}}function x_(n){if(!n||n.version!=="arena-1"||n.cell!==.125||n.width!==512||n.height!==288||n.minX!==-32||n.minY!==-8||n.bedrockY!==-6||!Number.isSafeInteger(n.revision)||n.revision<0||!Array.isArray(n.cells)||n.cells.length!==n.width*n.height||!Array.isArray(n.spawnPads)||n.spawnPads.length!==8)throw new RangeError("Invalid arena snapshot.")}function v_(n){if(x_(n),!n.cells.every(e=>e===0||e===1))throw new RangeError("Invalid occupancy mask.");for(const e of n.spawnPads)ra(e)}function zc(n){if(!n||typeof n!="object"||"cells"in n||typeof n.maskHex!="string"||n.maskHex.length!==36864||!/^[0-9a-f]+$/.test(n.maskHex))throw new RangeError("Invalid compact terrain mask.");const{maskHex:e,...t}=n,i=new Array(147456);for(let s=0;s<e.length;s++){const a=Number.parseInt(e[s],16);for(let o=0;o<4;o++)i[s*4+o]=a>>o&1}const r={...t,cells:i};return v_(r),r}const St=()=>{throw new Error("The public arena service returned an unsupported response.")},y_=n=>{(!n||typeof n!="object"||Array.isArray(n))&&St()},xt=n=>{(!Number.isSafeInteger(n)||n<0)&&St()},Er=n=>{Number.isFinite(n)||St()},je=n=>{(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))&&St()},an=n=>{typeof n!="boolean"&&St()},Ge=(...n)=>e=>{n.includes(e)||St()},Xi=n=>e=>{xt(e),e>n&&St()},Dt=n=>e=>{e!==null&&n(e)},mt=(n,e={})=>t=>{y_(t),(Object.keys(n).some(i=>!Object.hasOwn(t,i))||Object.keys(t).some(i=>!Object.hasOwn(n,i)&&!Object.hasOwn(e,i)))&&St();for(const[i,r]of Object.entries(n))r(t[i]);for(const[i,r]of Object.entries(e))Object.hasOwn(t,i)&&r(t[i])},vn=(n,e)=>t=>{(!Array.isArray(t)||t.length>e)&&St();for(const i of t)n(i)},mh=n=>{vn(je,8)(n),new Set(n).size!==n.length&&St()},qi=n=>{mt({x:Er,y:Er,z:Ge(0)})(n),ra(n)},Gc={protocolVersion:Ge(fd),rulesVersion:Ge(pd)},S_=n=>{mt({arrow:Ge("normal","bomb","teleport"),angle:Er,power:Er,facing:Ge(-1,1)})(n),gd(n)},sa=n=>{mt({id:je,actorId:je,lifeId:je,epoch:xt,roundId:je,kind:Ge("shot","pass"),aim:Dt(S_)})(n),n.kind==="shot"!=(n.aim!==null)&&St()},M_=n=>{mt({id:je,feet:qi,velocity:qi,facing:Ge(-1,1),health:Xi(100),eliminated:an})(n)},b_=mt({memberId:je,actorId:je,lifeId:je,slotId:Ge("s0","s1","s2","s3","s4","s5","s6","s7"),kind:Ge("human","npc"),present:an,leaving:an,idle:an,missedWindows:Xi(3),spawnPending:an,bombReady:an}),xd=mt({memberId:je,actorId:je,lifeId:je,slotId:Ge("s0","s1","s2","s3","s4","s5","s6","s7"),kind:Ge("human","npc")}),vd=mt({fromRevision:xt,toRevision:xt,removed:vn(Xi(147455),1156)}),yd=mt({kind:Ge("terrain","head","body","bounds","timeout"),time:Er,point:qi,normal:qi},{actorId:je,cell:Xi(147455)}),E_=vn(mt({time:Er,poses:vn(mt({actorId:je,feet:qi}),8)}),902),w_=mt({ok:an},{reason:Ge("not-upward","no-support","occupied-or-blocked"),feet:qi}),T_=mt({action:sa,roster:vn(xd,8),contact:yd,delta:vd,motion:E_,startedAt:Dt(xt),endsAt:Dt(xt)}),A_=mt({action:sa,roster:vn(xd,8),contact:yd,damage:vn(mt({actorId:je,amount:Xi(100),cause:Ge("direct","blast","physics")}),408),delta:vd,teleport:Dt(w_)}),R_=mt({version:Ge("skirmish-1"),id:je,epoch:xt,revision:xt,state:Ge("active","suspended","aborted"),phase:Ge("planning","resolving","settling"),terrain:n=>{mt({version:Ge("arena-1"),revision:xt,cell:Ge(.125),minX:Ge(-32),minY:Ge(-8),width:Ge(512),height:Ge(288),bedrockY:Ge(-6),spawnPads:vn(qi,8),maskHex:e=>{(typeof e!="string"||e.length!==36864||!/^[0-9a-f]+$/.test(e))&&St()}})(n),zc(n)},actors:vn(M_,8),members:vn(b_,8),roundSerial:xt,roundId:je,completedRounds:Xi(20),resetIn:Dt(Xi(2)),slotOrder:mh,priority:mh,drainThenBoundary:an,planningStartedAt:Dt(xt),deadlineAt:Dt(xt),launchAt:Dt(xt),contactAt:Dt(xt),resolutionEndsAt:Dt(xt),locks:vn(mt({actorId:je,locked:an,plan:Dt(sa)}),8),action:Dt(sa),effect:Dt(T_),lastEvent:Dt(A_),self:mt({memberId:Dt(je),actorId:Dt(je),lifeId:Dt(je),pending:an,canAct:an,bombReady:an,opportunities:xt,bombReadyAt:xt}),abortReason:Dt(Ge("settling-exhausted"))});function Sd(n){new TextEncoder().encode(JSON.stringify(n)).byteLength>Bc.maxSnapshotBytes&&St()}function Md(n){Sd(n),mt({...Gc,roomKind:Ge("skirmish"),arenaId:je,serverNow:xt,snapshotRevision:xt,retryHorizonMs:xt,membership:mt({memberId:je,actorId:je,lifeId:Dt(je),status:Ge("pending","active","idle","left","suspended","respawn","aborted"),canAct:an,bombReady:an}),connections:vn(mt({actorId:je,label:i=>{(typeof i!="string"||i.length>80)&&St()},kind:Ge("human","npc"),connected:an}),8),state:R_})(n);const e=n,t=e.state;return _d(t.actors),(t.id!==e.arenaId||e.retryHorizonMs<1||e.retryHorizonMs>Bc.controlRetryMs||t.self.lifeId!==e.membership.lifeId||t.self.canAct!==e.membership.canAct||t.self.bombReady!==e.membership.bombReady||t.self.actorId!==null&&t.self.actorId!==e.membership.actorId)&&St(),(t.slotOrder.length!==8||t.slotOrder.some(i=>!/^s[0-7]$/.test(i))||new Set(t.members.map(i=>i.actorId)).size!==t.members.length||new Set(t.members.map(i=>i.memberId)).size!==t.members.length||new Set(t.members.map(i=>i.slotId)).size!==t.members.length)&&St(),(t.state==="active"&&t.priority.some(i=>!t.members.some(r=>r.actorId===i))||t.actors.some(i=>!t.members.some(r=>r.actorId===i.id))||t.locks.some(i=>!t.priority.includes(i.actorId)||i.plan!==null&&(!i.locked||i.plan.actorId!==i.actorId||i.plan.epoch!==t.epoch||i.plan.roundId!==t.roundId||!t.members.some(r=>r.actorId===i.actorId&&r.lifeId===i.plan.lifeId)||t.phase==="planning"&&i.actorId!==e.membership.actorId)))&&St(),t.state!=="active"&&(t.self.canAct||t.action!==null||t.effect!==null||t.locks.some(i=>i.locked||i.plan!==null)||[t.deadlineAt,t.launchAt,t.contactAt,t.resolutionEndsAt].some(i=>i!==null))&&St(),t.state==="suspended"&&(t.phase!=="planning"||t.planningStartedAt!==null)&&St(),(t.action&&(t.action.kind!=="shot"||t.action.epoch!==t.epoch)||t.effect&&(t.phase!=="settling"||t.effect.action.epoch!==t.epoch||t.effect.startedAt===null||t.effect.endsAt===null||t.effect.startedAt>t.effect.endsAt||t.effect.startedAt>e.serverNow))&&St(),e.membership.canAct&&(e.membership.status!=="active"||t.state!=="active"||t.phase!=="planning"||t.deadlineAt===null||!t.priority.includes(e.membership.actorId))&&St(),e}function C_(n){Sd(n),mt({ack:mt({...Gc,arenaId:je,memberId:je,actionId:je,kind:Ge("join","leave","rejoin","shot","pass"),epoch:xt,roundId:Dt(je),lifeId:Dt(je),acceptedRevision:xt,outcome:Ge("accepted","existing-membership")}),current:mt({type:Ge("current"),envelope:t=>{Md(t)}})},{reassignedFrom:mt({arenaId:je,memberId:je})})(n);const e=n;return(e.ack.outcome==="existing-membership"&&e.ack.kind!=="join"||e.reassignedFrom&&e.ack.kind!=="rejoin"||["shot","pass"].includes(e.ack.kind)&&(e.ack.lifeId===null||e.ack.roundId===null))&&St(),e}function gh(n){return mt({...Gc,roomKind:Ge("skirmish"),serverNow:xt,preset:Ge("skirmish-1"),planningMs:Ge(2e4),slots:Ge(8),minimumParticipants:Ge(4),resetAfter:Ge(20),idleAfter:Ge(3),retryHorizonMs:e=>{xt(e),(e<1||e>Bc.controlRetryMs)&&St()}})(n),n}const Gs={protocolVersion:fd,rulesVersion:pd},mo=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function I_(n){return`${ud(n).identity}:skirmish-locator-v1:${encodeURIComponent(`${n.mode}:${n.serviceId}`)}`}const P_=new Set(["validation","membership","wrong_epoch","wrong_life","wrong_round","retry_retired","stale_revision","conflict","inactive","cooldown","wrong_actor","deadline","wrong_phase","not_found","room_capacity","socket_capacity","debt_capacity","control_capacity","membership_capacity","rate_capacity"]);class L_{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};session;storage;locatorKey;factory;socket=null;poll=null;recovery=null;generation=0;socketGeneration=0;stopped=!1;observedServerTime=0;observedAt=0;hasClock=!1;rejected=null;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new Ma(e,t,i),this.storage=i,this.locatorKey=I_(this.session.endpoint),this.factory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>this.hasClock?this.observedServerTime+Math.max(0,performance.now()-this.observedAt):0;get savedArena(){try{const e=JSON.parse(this.storage?.getItem(this.locatorKey)??"null");return mo(e)&&Object.keys(e).sort().join(",")==="arenaId,guestId,memberId"&&e.guestId===this.session.guestId&&typeof e.arenaId=="string"&&typeof e.memberId=="string"?{arenaId:e.arenaId,memberId:e.memberId}:null}catch{return null}}get lockAgain(){return!!this.room&&this.room.membership.canAct&&this.rejected===this.opportunity(this.room)}opportunity(e){return JSON.stringify([e.arenaId,e.membership.memberId,e.membership.actorId,e.membership.lifeId,e.state.epoch,e.state.roundId])}scope(){return this.room?{arenaId:this.room.arenaId,memberId:this.room.membership.memberId}:{}}check(e,t){if(this.session.assertRevision(t),this.generation!==e)throw Error("The public arena context changed while this request was pending.")}emit(){this.onChange()}install(e,t,i=!1){const r=Md(e);if(!i&&(t.arenaId&&t.arenaId!==r.arenaId||t.memberId&&t.memberId!==r.membership.memberId))throw Error("The public response belongs to a different membership.");if(this.room&&r.arenaId===this.room.arenaId&&r.membership.memberId===this.room.membership.memberId){if(r.snapshotRevision<this.room.snapshotRevision)return;if(r.state.epoch<this.room.state.epoch||r.state.epoch===this.room.state.epoch&&r.state.revision<this.room.state.revision)throw Error("The public response would reverse the confirmed world.");if(r.snapshotRevision===this.room.snapshotRevision&&(r.state.epoch!==this.room.state.epoch||r.membership.actorId!==this.room.membership.actorId||r.membership.lifeId!==this.room.membership.lifeId))throw Error("A public identity transition needs a newer snapshot.");if(r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return}else if(this.room&&!i)throw Error("The public response changed membership without an explicit rejoin.");i&&this.disconnect(),this.room=r,this.observedServerTime=this.hasClock?Math.max(this.now(),r.serverNow):r.serverNow,this.observedAt=performance.now(),this.hasClock=!0;try{this.storage?.setItem(this.locatorKey,JSON.stringify({arenaId:r.arenaId,memberId:r.membership.memberId,guestId:this.session.guestId}))}catch{}this.emit()}applyReply(e,t){const i=C_(e),r=i.ack,s=t.body;if(r.kind!==s.kind||r.actionId!==s.actionId)throw Error("The public acknowledgement does not match the pending action.");if(r.outcome==="existing-membership"&&(s.kind!=="join"||r.acceptedRevision!==i.current.envelope.state.revision||r.arenaId!==i.current.envelope.arenaId||r.memberId!==i.current.envelope.membership.memberId||r.epoch!==i.current.envelope.state.epoch))throw Error("Invalid current-membership acknowledgement.");if((s.kind==="shot"||s.kind==="pass")&&(r.arenaId!==t.scope.arenaId||r.memberId!==s.memberId||r.lifeId!==s.lifeId||r.roundId!==s.roundId||r.epoch!==s.epoch))throw Error("The public acknowledgement changed action scope.");const a=i.reassignedFrom,o=!!a;if(a&&(s.kind!=="rejoin"||a.arenaId!==t.scope.arenaId||a.memberId!==t.scope.memberId))throw Error("The public reassignment does not match this explicit rejoin.");if(!a&&s.kind!=="join"&&(r.arenaId!==t.scope.arenaId||r.memberId!==t.scope.memberId))throw Error("The public acknowledgement changed membership.");this.install(i.current.envelope,s.kind==="join"&&!this.room?{}:t.scope,o)}async join(){if(this.busy||this.pending)throw Error("Finish the pending public action first.");const e=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const t=await this.session.ensure();this.check(e,t.revision);const i=gh(await this.session.request("/skirmish/rules"));this.check(e,t.revision),this.pending={path:"/skirmish/join",body:Object.freeze({...Gs,kind:"join",actionId:crypto.randomUUID(),issuedAt:i.serverNow}),revision:t.revision,scope:this.scope()}}finally{e===this.generation&&(this.busy=!1,this.emit())}return this.retry()}async control(e){if(!this.room||this.pending||this.busy)throw Error("Reconnect or finish the pending public action first.");const t=this.session.credentials();if(!t)throw Error("The original guest identity is required.");const i=this.generation,r=this.scope();this.busy=!0,this.stopped=!1,this.emit();try{await this.refresh(r.arenaId,r.memberId),this.check(i,t.revision);const s=gh(await this.session.request("/skirmish/rules"));this.check(i,t.revision);const a=this.room;if(!a||a.arenaId!==r.arenaId||a.membership.memberId!==r.memberId)throw Error("Public membership changed.");this.pending={path:`/skirmish/${encodeURIComponent(a.arenaId)}/commands`,body:Object.freeze({...Gs,kind:e,actionId:crypto.randomUUID(),issuedAt:s.serverNow,memberId:a.membership.memberId,epoch:a.state.epoch,expectedRevision:a.state.revision}),revision:t.revision,scope:this.scope()}}finally{i===this.generation&&(this.busy=!1,this.emit())}return this.retry()}async command(e){const t=this.room,i=this.session.credentials();if(!t||!i||this.busy||this.pending||!t.membership.canAct||!t.membership.lifeId)throw Error("This public planning opportunity is unavailable.");return this.rejected=null,this.pending={path:`/skirmish/${encodeURIComponent(t.arenaId)}/commands`,body:Object.freeze({...Gs,...e,...e.kind==="shot"?{aim:Object.freeze({...e.aim})}:{},actionId:crypto.randomUUID(),memberId:t.membership.memberId,lifeId:t.membership.lifeId,epoch:t.state.epoch,roundId:t.state.roundId,expectedRevision:t.state.revision}),revision:i.revision,scope:this.scope()},this.retry()}async retry(){const e=this.pending;if(!e||this.busy)throw Error("No public action is ready to retry.");if(this.session.assertRevision(e.revision),e.unadmitted&&e.scope.arenaId){const i=this.room,r=e.body;if(!i||i.arenaId!==e.scope.arenaId||i.membership.memberId!==e.scope.memberId||r.epoch!==void 0&&i.state.epoch!==r.epoch||r.lifeId!==void 0&&(i.membership.lifeId!==r.lifeId||i.state.roundId!==r.roundId))throw this.pending=null,this.emit(),Error("The public opportunity changed. Choose a new action explicitly.")}const t=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const i=await this.session.request(e.path,e.body);if(this.check(t,e.revision),this.pending!==e)throw Error("The pending public action changed.");return this.applyReply(i,e),this.check(t,e.revision),this.pending=null,e.body.kind==="leave"?this.disconnect():this.openSocket(),this.room}catch(i){if(t!==this.generation)throw i;if(this.session.revision!==e.revision)this.forgetArena();else if(i instanceof gr&&i.transient)["admission_rate","command_rate"].includes(i.code??"")||(e.uncertain=!0),e.unadmitted=!e.uncertain;else if(i instanceof gr&&P_.has(i.code??"")){if(this.pending=null,e.body.kind==="shot"&&this.room&&this.room.state.epoch===e.body.epoch&&this.room.state.roundId===e.body.roundId&&this.room.membership.lifeId===e.body.lifeId&&(this.rejected=this.opportunity(this.room)),this.room)try{await this.refresh()}catch{}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch{}throw i}finally{t===this.generation&&(this.busy=!1,this.emit())}}async refresh(e=this.room?.arenaId??this.savedArena?.arenaId,t=this.room?.membership.memberId??this.savedArena?.memberId){if(!e||!t)return;const i=this.session.credentials();if(!i)throw Error("The original guest identity is required to reconnect.");const r=this.generation;try{const s=await this.session.request(`/skirmish/${encodeURIComponent(e)}`);this.check(r,i.revision),this.install(s,{arenaId:e,memberId:t})}catch(s){throw this.check(r,i.revision),s instanceof gr&&[403,404,410].includes(s.status)?(this.forgetArena(),Error("This public membership is no longer available. Join explicitly with the same guest.")):s}}async reconnect(){if(this.pending||this.busy)throw Error("Retry the pending public action first.");if(!this.room&&!this.savedArena)throw Error("No saved public membership is available.");this.stopped=!1;const e=this.generation;if(await this.refresh(),e!==this.generation)throw Error("The public context changed.");this.openSocket()}receive(e){if(!(!this.session.credentials()||!this.room||this.stopped||!mo(e)||e.type!=="skirmish")){if(Object.keys(e).sort().join(",")!=="envelope,type")throw Error("Unsupported public event.");this.install(e.envelope,this.scope())}}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e||!this.factory)return;const t=this.generation,i=++this.socketGeneration,r=this.scope(),s=this.factory(`${this.session.serviceId.replace(/^http/,"ws")}/skirmish/events`);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===i&&this.generation===t&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={...Gs,type:"authenticate",token:e.token,arenaId:r.arenaId,memberId:r.memberId,lastRevision:this.room?.snapshotRevision??0};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));if(!mo(c)||c.type!=="skirmish")throw Error("Unsupported public stream message.");if(this.receive(c),!a())return;this.connected=!0,this.emit()}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),(a()||this.generation===t&&this.session.revision===e.revision&&!this.stopped)&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.poll||this.stopped)return;const e=this.generation;this.poll=setTimeout(async()=>{if(this.poll=null,!(this.stopped||e!==this.generation)){try{await this.refresh()}catch(t){e===this.generation&&this.onError(t)}e===this.generation&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.recovery||this.stopped)return;const e=this.generation;this.recovery=setTimeout(async()=>{if(this.recovery=null,!(this.stopped||e!==this.generation))try{await this.refresh(),e===this.generation&&this.openSocket()}catch(t){e===this.generation&&(this.onError(t),this.scheduleRecovery())}},1500)}disconnect(){this.socketGeneration++;const e=this.socket;this.socket=null,e?.close(),this.connected=!1,this.poll&&clearTimeout(this.poll),this.recovery&&clearTimeout(this.recovery),this.poll=null,this.recovery=null}close(){this.stopped=!0,this.generation++,this.disconnect(),this.busy=!1,this.emit()}forgetArena(){this.close(),this.room=null,this.pending=null,this.rejected=null,this.hasClock=!1;try{this.storage?.removeItem(this.locatorKey)}catch{}this.emit()}}function D_(n){const e=n.state,t=e.locks.find(a=>a.actorId===n.membership.actorId),i=n.membership.status,s=["idle","left"].includes(i)&&e.state==="suspended"?"Paused — no active players. Rejoin when ready to play.":i==="pending"?"Your place is reserved. You enter at the next planning window.":i==="idle"?"Spectating. Inactive after three missed windows; Rejoin when ready to play.":i==="left"?"Spectating. You left public play; Rejoin when ready to play.":i==="aborted"?"This arena stopped safely. Rejoin to start a fresh arena.":i==="respawn"?"Waiting for a clear place to respawn.":i==="suspended"?"The empty arena is suspended. Reconnect to return.":e.phase!=="planning"?"Arrows resolve in the published priority order.":n.membership.canAct?"Choose an arrow or pass. Locks are final.":t?.locked?t.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":"You will respawn at the next planning window.";return{phase:i==="active"?e.phase.toUpperCase():i.toUpperCase(),turn:s,warning:e.resetIn!==null?`Fresh terrain in ${e.resetIn} completed round${e.resetIn===1?"":"s"}.`:"",priority:e.priority,locks:e.locks.map(a=>({actorId:a.actorId,text:a.locked?"Locked":"Planning"})),canRejoin:["idle","left","aborted"].includes(i),canLeave:!["left","idle"].includes(i)}}function U_(n){return n.state.members.map((e,t)=>{const i=n.state.actors.find(s=>s.id===e.actorId),r=n.connections.find(s=>s.actorId===e.actorId)?.label??`Archer ${t+1}`;return{actorId:e.actorId,kind:e.kind,label:r,health:i?.health??0,text:`${r}${e.actorId===n.membership.actorId?" · you":""} · ${e.spawnPending||!i?"waiting to respawn":i.eliminated?"respawning next round":`${i.health} health`}${n.state.locks.find(s=>s.actorId===e.actorId)?.locked?" · locked":""}`}})}const Vc="combat-protocol-1",ba="combat-1",ni="combat-protocol-2",_h={protocolVersion:Vc,rulesVersion:ba},go={protocolVersion:ni,rulesVersion:ba},Nn=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function N_(n){if(!Nn(n)||![Vc,ni].includes(n.protocolVersion)||n.rulesVersion!==ba||typeof n.roomId!="string"||!n.roomId||typeof n.code!="string"||!Number.isFinite(n.serverNow)||!Number.isSafeInteger(n.snapshotRevision)||Number(n.snapshotRevision)<0||!Nn(n.membership)||typeof n.membership.actorId!="string"||typeof n.membership.lifeId!="string"||typeof n.membership.canStart!="boolean"||!Array.isArray(n.connections)||!Nn(n.state)||!Number.isSafeInteger(n.state.revision)||Number(n.state.revision)<0||n.state.id!==n.roomId||!Array.isArray(n.state.actors)||!Array.isArray(n.state.seats)||!Nn(n.state.seat)||!["waiting","active","finished","aborted"].includes(String(n.state.state))||!["planning","resolving","settling"].includes(String(n.state.phase))||!(n.currentTurnId===null||typeof n.currentTurnId=="string"))throw new Error("The combat service returned an unsupported room.");if(n.protocolVersion===ni?n.roomKind!=="volley"||n.state.version!=="volley-1"||n.currentTurnId!==null||!Number.isSafeInteger(n.state.epoch)||typeof n.state.roundId!="string"||!Array.isArray(n.state.locks)||!Array.isArray(n.state.priority):n.state.version!=="duel-1"||"roomKind"in n)throw new Error("The combat service returned an unsupported room kind or version.");const e=n;return zc(e.state.terrain),e}class F_{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};rejectedLock=null;get lockAgain(){const e=this.room,t=e?.state,i=this.rejectedLock;return!!(i&&e&&t&&e.protocolVersion===ni&&i.roomId===e.roomId&&i.lifeId===e.membership.lifeId&&i.epoch===e.state.epoch&&i.roundId===e.state.roundId&&t.seat.canAct)}session;socketFactory;socket=null;reconnectTimer=null;pollTimer=null;stopped=!1;socketGeneration=0;roomGeneration=0;clockOffset=0;hasClock=!1;storage;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new Ma(e,t,i),this.storage=i,this.socketFactory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>Date.now()+this.clockOffset;get savedRoom(){try{const e=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");return Nn(e)&&e.guestId===this.session.guestId&&typeof e.roomId=="string"?e.roomId:null}catch{return null}}emit(){this.onChange()}context(e=this.room?.roomId){const t=this.room?.roomId===e?this.room?.membership:void 0;return{generation:this.roomGeneration,roomId:e,...this.room&&this.room.roomId===e?{protocolVersion:this.room.protocolVersion}:{},...t?{membership:{actorId:t.actorId,lifeId:t.lifeId}}:{}}}assertContext(e){if(e.generation!==this.roomGeneration||e.roomId&&this.room&&e.roomId!==this.room.roomId)throw new Error("The combat room context changed while this request was pending.")}validateResponse(e,t,i){this.session.assertRevision(t),this.assertContext(i);const r=N_(e);if(i.protocolVersion&&r.protocolVersion!==i.protocolVersion)throw new Error("The combat response changed the confirmed room kind or protocol version.");if(i.roomId&&r.roomId!==i.roomId)throw new Error("The combat response belongs to a different room.");if(i.membership&&(r.membership.actorId!==i.membership.actorId||r.membership.lifeId!==i.membership.lifeId))throw new Error("The combat response belongs to a different membership identity.");return r}apply(e,t,i){const r=this.validateResponse(e,t,i);if(this.room&&this.room.roomId===r.roomId){if(r.snapshotRevision<this.room.snapshotRevision||r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return;if(r.state.revision<this.room.state.revision)throw new Error("The combat response would reverse the confirmed room state.")}this.room=r;const s=r.serverNow-Date.now();this.clockOffset=this.hasClock?Math.max(this.clockOffset,s):s,this.hasClock=!0;try{this.storage?.setItem(this.session.storageKeys.room,JSON.stringify({roomId:r.roomId,guestId:this.session.guestId}))}catch{}this.emit()}async create(e){return this.begin("/rooms",e?{...go,...e}:_h,e?ni:Vc)}async join(e){return this.begin("/rooms/join",{...go,code:e.trim().toUpperCase()})}async begin(e,t,i){if(this.busy||this.pending||this.room)throw new Error("Leave the current room or finish the pending action first.");this.roomGeneration++;const r={...this.context(),...i?{protocolVersion:i}:{}};this.stopped=!1,this.busy=!0,this.emit();try{const s=await this.session.ensure();this.session.assertRevision(s.revision),this.assertContext(r),this.pending={path:e,body:{actionId:crypto.randomUUID(),...t},revision:s.revision,context:r}}finally{r.generation===this.roomGeneration&&(this.busy=!1)}return this.retry()}async command(e){if(this.busy||this.pending||!this.room)throw new Error("Finish the pending action first.");const t=this.room,i=this.session.credentials();if(!i)throw new Error("Reconnect with the existing guest first.");const r=t.protocolVersion===ni;if(r&&e.kind==="cancel")throw new Error("Volley locks are immutable and cannot be cancelled.");const s=e.kind==="shot"||e.kind==="pass";if(r&&s&&(!t.state.seat.canAct||t.state.state!=="active"||t.state.phase!=="planning"))throw new Error("This planning opportunity is no longer available.");const a=!r&&["shot","pass","cancel"].includes(e.kind)?{turnId:t.currentTurnId}:{};if("turnId"in a&&!a.turnId)throw new Error("This turn is no longer available.");const o=r?{...go,epoch:t.state.epoch,...s?{roundId:t.state.roundId}:{}}:{..._h,...a};this.rejectedLock=null;const c={actionId:crypto.randomUUID(),expectedRevision:t.state.revision,lifeId:t.membership.lifeId,...o,...e};return this.pending={path:`/rooms/${encodeURIComponent(t.roomId)}/commands`,body:c,revision:i.revision,context:this.context()},this.retry()}async retry(){if(!this.pending||this.busy)throw new Error("No pending action is ready to retry.");const e=this.pending;if(this.session.assertRevision(e.revision),this.assertContext(e.context),e.unadmitted&&e.context.roomId){const t=this.room,i=e.body;if(!t||t.roomId!==e.context.roomId||t.membership.lifeId!==i.lifeId||i.protocolVersion===ni&&(t.protocolVersion!==ni||t.state.epoch!==i.epoch||"roundId"in i&&t.state.roundId!==i.roundId)||"turnId"in i&&t.currentTurnId!==i.turnId)throw this.pending=null,this.emit(),new Error("The room opportunity changed. Choose an action for the current room.")}this.busy=!0,this.emit();try{const t=await this.session.request(e.path,e.body);if(this.session.assertRevision(e.revision),this.assertContext(e.context),this.pending!==e)throw new Error("The pending combat action changed.");return e.body.kind==="leave"?(this.validateResponse(t,e.revision,e.context),this.pending=null,this.clearRoom()):(this.apply(t,e.revision,e.context),this.pending=null,this.openSocket()),this.room}catch(t){if(e.context.generation!==this.roomGeneration)throw t;if(this.session.revision!==e.revision)this.pending=null,this.clearRoom();else if(t instanceof gr&&t.transient)t.code!=="admission_rate"&&t.code!=="command_rate"&&(e.uncertain=!0),e.unadmitted=!e.uncertain;else if(Nn(t)&&typeof t.status=="number"&&t.status>=400&&t.status<500){if(this.pending=null,t.status===409&&e.body.kind==="shot"&&e.body.protocolVersion===ni&&e.context.roomId&&(this.rejectedLock={roomId:e.context.roomId,lifeId:String(e.body.lifeId),epoch:e.body.epoch,roundId:e.body.roundId}),this.room)try{await this.refresh()}catch{}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch{}throw t}finally{e.context.generation===this.roomGeneration&&(this.busy=!1,this.emit())}}async reconnect(e=this.room?.roomId??this.savedRoom){if(this.pending)throw new Error("Retry the pending action first.");if(!e)throw new Error("No saved room is available.");if(!this.session.credentials())throw new Error("The original guest identity is required to reconnect.");const t=this.context(e);this.stopped=!1,await this.refresh(e),this.assertContext(t),this.openSocket()}async refresh(e=this.room?.roomId){if(!e)return;const t=this.session.credentials();if(!t)throw new Error("The original guest identity is required.");const i=this.context(e);try{const r=await this.session.request(`/rooms/${encodeURIComponent(e)}`);this.apply(r,t.revision,i)}catch(r){if(this.session.assertRevision(t.revision),this.assertContext(i),Nn(r)&&typeof r.status=="number"&&[403,404,410].includes(r.status)){this.pending=null,this.clearRoom(e);const s=Object.assign(new Error("This room is no longer available. Create or join another room with the same guest."),{status:r.status});throw this.onError(s),s}throw r}}receive(e){const t=this.session.credentials();!t||!this.room||this.stopped||!Nn(e)||e.type!=="room"||e.roomId===this.room.roomId&&this.apply(e,t.revision,this.context())}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e)return;if(this.connected=!1,!this.socketFactory){this.connected=!0,this.emit();return}const t=++this.socketGeneration,i=this.context(),r=this.room.roomId,s=this.socketFactory(this.session.endpoint.combatSocket);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===t&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={type:"authenticate",token:e.token,roomId:r,lastRevision:this.room?.snapshotRevision??0,protocolVersion:this.room.protocolVersion,rulesVersion:ba};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));Nn(c)&&c.type==="room"&&(this.apply(c,e.revision,i),this.connected=!0,this.emit())}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),!this.stopped&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.pollTimer||this.stopped)return;const e=this.context();this.pollTimer=setTimeout(async()=>{if(this.pollTimer=null,!(!this.room||this.stopped||e.generation!==this.roomGeneration)){try{await this.refresh()}catch(t){e.generation===this.roomGeneration&&this.onError(t)}e.generation===this.roomGeneration&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.reconnectTimer||this.stopped)return;const e=this.context();this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,!(this.stopped||e.generation!==this.roomGeneration))try{await this.refresh(),this.assertContext(e),this.openSocket()}catch(t){e.generation===this.roomGeneration&&(this.onError(t),this.scheduleRecovery())}},1500)}clearRoom(e=this.room?.roomId??this.savedRoom??void 0){this.close(),this.room=null,this.rejectedLock=null,this.hasClock=!1;try{const t=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");Nn(t)&&t.roomId===e&&(!this.session.guestId||t.guestId===this.session.guestId)&&this.storage?.removeItem(this.session.storageKeys.room)}catch{}this.emit()}forgetRoom(){this.pending=null,this.clearRoom()}close(){this.stopped=!0,this.socketGeneration++,this.roomGeneration++,this.busy=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.pollTimer&&clearTimeout(this.pollTimer),this.reconnectTimer=null,this.pollTimer=null;const e=this.socket;this.socket=null,e?.close(),this.connected=!1}}function bd(n,e,t){const i=1-Math.exp(-18*Math.max(0,t));return{angle:n.angle+(e.angle-n.angle)*i,pull:n.pull+(e.pull-n.pull)*i}}function aa(n,e=0){const t=n.angle*Math.PI/180,i=Math.cos(t),r=Math.sin(t),s={x:-7.7+i*(1.3-.37),y:2.3+r*(1.3-.37)},a={x:s.x-i*n.pull,y:s.y-r*n.pull},o={x:a.x-i*.16*e,y:a.y-r*.16*e+.04*e},c=n.pull+(.08-n.pull)*e,l={x:s.x-i*c,y:s.y-r*c},u=-7.95,p=2.3,h=o.x-u,d=o.y-p,g=Math.hypot(h,d),v=(.65**2-.9**2+g**2)/(2*g),m=Math.sqrt(Math.max(0,.65**2-v**2)),f={x:u+h/g*v-d/g*m,y:p+d/g*v+h/g*m};return{bow:s,hand:o,nock:l,elbow:f}}const xh=.16;function Zr(n,e,t){if(e>=xh){const w=hh(n,e);return{position:Ti(n,e),angle:Math.atan2(w.y,w.x)}}const i=xh,r=Math.max(0,e)/i,s=Ti(n,i),a=hh(n,i),o=Math.hypot(n.velocity.x,n.velocity.y),c={x:Math.cos(t.angle)*o,y:Math.sin(t.angle)*o},l=2*r**3-3*r*r+1,u=r**3-2*r*r+r,p=-2*r**3+3*r*r,h=r**3-r*r,d=(6*r*r-6*r)/i,g=3*r*r-4*r+1,v=(-6*r*r+6*r)/i,m=3*r*r-2*r,f={x:l*t.tip.x+u*i*c.x+p*s.x+h*i*a.x,y:l*t.tip.y+u*i*c.y+p*s.y+h*i*a.y},S={x:d*t.tip.x+g*c.x+v*s.x+m*a.x,y:d*t.tip.y+g*c.y+v*s.y+m*a.y};return{position:f,angle:Math.atan2(S.y,S.x)}}const xn=Object.freeze({count:7,start:.055,duration:.228,radiusPx:3.5,outlinePx:1.75});function oa(n){if(!Number.isInteger(n.count)||n.count<1||n.count>32||![n.start,n.duration].every(Number.isFinite)||n.start<0||n.duration<0||n.start+n.duration>.35)throw new RangeError("Short opening guide settings required.");return Array.from({length:n.count},(e,t)=>n.start+(n.count===1?0:t/(n.count-1)*n.duration))}function O_(n,e){const t=n.version==="skirmish-1",i=t?null:n,r=i&&Cn(i)?i:null,s=t?"skirmish":r?"volley":"duel",a=t?n.epoch:r?.epoch??0,o=t?n.self:i.seat,c=JSON.stringify([s,n.id,a]),l=t?n.members.map((d,g)=>({actorId:d.actorId,lifeId:d.lifeId,teamId:null,label:d.kind==="npc"?`NPC ${g+1}`:null})):i.seats.map(d=>({actorId:d.actorId,lifeId:"lifeId"in d?d.lifeId:d.actorId===e?o.lifeId:null,teamId:"teamId"in d?d.teamId:null,label:null})),u=n.effect,p=t?n.action?.aim?{...n.action.aim,id:n.action.id,actorId:n.action.actorId,lifeId:n.action.lifeId,epoch:n.action.epoch,roundId:n.action.roundId}:null:n.action,h=u?{identity:JSON.stringify(t?[c,n.effect.action.actorId,n.effect.action.lifeId,n.effect.action.roundId,n.effect.action.id]:[c,i.effect.actorId,i.effect.lifeId,"roundId"in i.effect?i.effect.roundId:null,i.effect.actionId]),delta:u.delta,motion:u.motion,startedAt:u.startedAt,endsAt:u.endsAt}:null;return{format:s,id:n.id,revision:n.revision,epoch:a,worldKey:c,scopeKey:JSON.stringify([c,e,o.lifeId]),planningKey:t?JSON.stringify([c,e,o.lifeId,n.roundId]):h_(i),sharedPlanning:t||!!r,state:n.state,phase:n.phase,terrain:n.terrain,actors:n.actors,seats:l,seat:{canAct:o.canAct,bombReady:o.bombReady,lifeId:o.lifeId},deadlineAt:n.deadlineAt,launchAt:n.launchAt,contactAt:n.contactAt,action:p,effect:h,pressure:r?.preset==="royale-shrink-1"?r.pressure:null,lockedPlan:t?n.locks.find(d=>d.actorId===e)?.plan??null:d_(i,e)}}function B_(n,e){return!!n&&n.planningKey===e.planningKey&&e.state==="active"&&e.phase==="planning"&&e.seat.canAct}function k_(n,e){return JSON.stringify([n.worldKey,e.actorId,e.lifeId,e.epoch,e.roundId,e.id,n.launchAt])}const Ot=n=>document.getElementById(n),Lt=(n,e,t=0)=>new N(n,e,t);class z_{constructor(e){this.canvas=e,this.scene.add(this.terrainGroup,this.pressureGroup),this.scene.add(new nd("#fff4d8","#62765d",2.6));const t=new rd("#fff4d8",3);t.position.set(-8,20,12),this.scene.add(t),this.camera.position.set(0,8,55),this.camera.lookAt(0,8,0),this.rebuildTerrain(this.terrain);for(const i of["normal","bomb","teleport"])Ot(`combat-arrow-${i}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.arrow=i,this.updateControls())});for(const i of[-1,1])Ot(`combat-face-${i===1?"right":"left"}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim.facing=i,this.updateControls())});for(const i of["angle","power"])Ot(`combat-${i}`).addEventListener("input",()=>{!this.canAim()||this.draw||(this.aim.angle=Number(Ot("combat-angle").value),this.aim.power=Number(Ot("combat-power").value)/100,this.updateControls())});Ot("combat-fire").addEventListener("click",()=>this.fire()),Ot("combat-overview").addEventListener("click",()=>{!this.draw&&this.state?.phase==="planning"&&this.frame(!0)}),this.canvas.addEventListener("pointerdown",i=>this.pointerDown(i)),this.canvas.addEventListener("pointermove",i=>this.pointerMove(i)),this.canvas.addEventListener("pointerup",i=>{if(!this.active||this.draw?.id!==i.pointerId)return;this.pointerMove(i);const r=this.draw?.valid;this.endDraw(!r),r&&this.fire()});for(const i of["pointercancel","lostpointercapture"])this.canvas.addEventListener(i,r=>{this.active&&this.draw?.id===r.pointerId&&this.cancelInput()})}canvas;scene=new qh;camera=new us(-24,24,18,-10,.1,150);materials=new Map;terrainGroup=new sn;chunks=new Map;terrain=po();terrainKey="";terrainWorld="";pressureGroup=new sn;pressureKey="";actorLabels=new Map;labels=document.getElementById("combat-actor-labels");lockAgain=!1;rigs=new Map;state=null;ownId=null;active=!1;draw=null;width=1;height=1;theme="light";aim={angle:29,power:.62,facing:1};arrow="normal";busy=!1;online=!1;serverNow=()=>Date.now();guide=document.getElementById("combat-guide");dots=oa(xn).map(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","circle");return e.setAttribute("r",String(xn.radiusPx)),e.setAttribute("stroke-width",String(xn.outlinePx)),this.guide.append(e),e});onShot=()=>{};onDrawing=()=>{};material(e){let t=this.materials.get(e);return t||(t=new ed({color:e,roughness:1,flatShading:!0}),this.materials.set(e,t)),t}box(e,t,i,r,s,a,o,c){const l=new kt(new Yi(s,a,o),this.material(c));return l.position.set(t,i,r),e.add(l),l}beam(e,t,i,r,s){const a=this.box(e,0,0,0,r,1,r,s);return this.updateBeam(a,t,i),a}updateBeam(e,t,i){e.position.copy(t).add(i).multiplyScalar(.5),e.scale.y=t.distanceTo(i),e.quaternion.setFromUnitVectors(Lt(0,1),i.clone().sub(t).normalize())}makeArrow(e){const t=new sn;this.box(t,-.6,0,0,1.2,.045,.045,"#f3dfaa"),this.box(t,-1.08,0,0,.22,.17,.04,"#e9e6c8");const i=new kt(new ds(.085,.24,4),this.material("#58685d"));return i.rotation.z=-Math.PI/2,i.position.x=-.12,t.add(i),e.add(t),t}makeRig(e){const t=new sn;this.scene.add(t);const i=this.state?.format==="volley"?this.state.seats.find(p=>p.actorId===this.ownId)?.teamId:null,r=this.state?.format==="volley"?this.state.seats.find(p=>p.actorId===e.id)?.teamId:null,s=e.id===this.ownId?"#d19b58":i&&i===r?"#78ad75":"#6e98a0";for(const p of[-.3,.4])this.box(t,p,.47,0,.36,.8,.4,"#38473f");for(const p of[-.36,.46])this.box(t,p,.12,.12,.64,.24,.55,"#4c4938");this.box(t,0,1.53,0,.85,1.5,.6,s),this.box(t,0,1.07,.32,.95,.18,.12,"#6b6845"),this.box(t,0,(ei.head.minY+ei.head.maxY)/2,0,.65,ei.head.maxY-ei.head.minY,.6,"#eac795"),this.box(t,-.13,2.92,-.04,.95,.27,.76,"#4d6e57"),this.box(t,-.26,2.64,-.02,.23,.45,.65,"#4d6e57"),this.box(t,.32,2.65,.32,.08,.08,.07,"#34483c");const a=new sn;t.add(a);const o=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let p=1;p<o.length;p++)this.beam(a,Lt(...o[p-1]),Lt(...o[p]),.075,"#78523c");const c=new Kt().setFromPoints([Lt(0,-.92),Lt(-.3,0),Lt(0,.92)]);a.add(new ur(c,new Mr({color:"#f1e7bf"})));const l=[this.beam(t,Lt(0,2),Lt(1,2),.23,"#eac795"),this.beam(t,Lt(0,2),Lt(1,2),.22,s),this.beam(t,Lt(0,2),Lt(1,2),.18,"#eac795")],u=this.box(t,0,0,.12,.19,.19,.19,"#eac795");return{root:t,bow:a,string:c,arms:l,hand:u,arrow:this.makeArrow(t),pose:{angle:29,pull:.51},release:0}}disposeRig(e){this.scene.remove(e.root),e.root.traverse(t=>{if(t instanceof kt&&t.geometry.dispose(),t instanceof ur){t.geometry.dispose();const i=t.material;Array.isArray(i)||i.dispose()}})}rebuildTerrain(e,t){const r=t??Array.from({length:Math.ceil(e.width/32)*Math.ceil(e.height/32)},(s,a)=>`${a%Math.ceil(e.width/32)}:${Math.floor(a/Math.ceil(e.width/32))}`);for(const s of r){const a=this.chunks.get(s);a&&(this.terrainGroup.remove(a),a.geometry.dispose(),this.chunks.delete(s));const[o,c]=s.split(":").map(Number),l=[],u=(h,d,g,v)=>l.push(...h,...d,...g,...h,...g,...v),p=(h,d)=>h>=0&&d>=0&&h<e.width&&d<e.height&&e.cells[d*e.width+h]===1;for(let h=c*32;h<Math.min((c+1)*32,e.height);h++){const d=e.minY+h*e.cell,g=e.cell;for(let v=o*32;v<Math.min((o+1)*32,e.width);v++)if(p(v,h)){const m=v;for(;v+1<Math.min((o+1)*32,e.width)&&p(v+1,h);)v++;const f=e.minX+m*g,S=e.minX+(v+1)*g;u([f,d,.18],[S,d,.18],[S,d+g,.18],[f,d+g,.18]),u([S,d,-.8],[f,d,-.8],[f,d+g,-.8],[S,d+g,-.8]);for(let w=m;w<=v;w++){const M=e.minX+w*g;p(w,h+1)||u([M,d+g,.18],[M+g,d+g,.18],[M+g,d+g,-.8],[M,d+g,-.8]),p(w,h-1)||u([M,d,-.8],[M+g,d,-.8],[M+g,d,.18],[M,d,.18])}p(m-1,h)||u([f,d,-.8],[f,d,.18],[f,d+g,.18],[f,d+g,-.8]),p(v+1,h)||u([S,d,.18],[S,d,-.8],[S,d+g,-.8],[S,d+g,.18])}}if(l.length){const h=new Kt;h.setAttribute("position",new jt(l,3)),h.computeVertexNormals();const d=new kt(h,this.material("#7d9461"));this.chunks.set(s,d),this.terrainGroup.add(d)}}}setSnapshot(e,t,i){const r=O_(e,t),s=this.state;this.state=r,this.ownId=t,this.serverNow=i,this.draw&&(!this.canAim()||!B_(s,r))&&this.cancelInput(),(!s||s.scopeKey!==r.scopeKey)&&(this.cancelInput(),this.aim={angle:29,power:.62,facing:r.actors.find(o=>o.id===t)?.facing??1});const a=r.lockedPlan;a?.kind==="shot"&&a.aim&&(this.aim={angle:a.aim.angle,power:a.aim.power,facing:a.aim.facing},this.arrow=a.aim.arrow),this.syncTerrain(),this.syncPressure();for(const[o,c]of this.rigs)(s?.worldKey!==r.worldKey||s?.seats.find(l=>l.actorId===o)?.lifeId!==r.seats.find(l=>l.actorId===o)?.lifeId)&&(this.disposeRig(c),this.rigs.delete(o));for(const o of r.actors)this.rigs.has(o.id)||this.rigs.set(o.id,this.makeRig(o));for(const[o,c]of this.rigs)r.actors.some(l=>l.id===o)||(this.disposeRig(c),this.rigs.delete(o));(!s||s.id!==r.id||r.phase==="planning"&&(s.planningKey!==r.planningKey||s.phase!=="planning"||s.actors.length!==r.actors.length))&&this.frame(),this.updateControls()}syncPressure(){const e=this.state,t=e?.pressure??null,i=JSON.stringify(t);if(i===this.pressureKey)return;this.pressureKey=i;for(const s of[...this.pressureGroup.children])this.pressureGroup.remove(s),s instanceof ur&&(s.geometry.dispose(),s.material.dispose());if(!t)return;const r=(s,a,o)=>{for(const c of[s,a]){const l=new Kt().setFromPoints([Lt(c,-8,.5),Lt(c,18,.5)]),u=o?new rf({color:"#f3b747",dashSize:.5,gapSize:.35}):new Mr({color:"#70bb9d"}),p=new ur(l,u);p.computeLineDistances(),this.pressureGroup.add(p)}};r(t.minX,t.maxX,!1),t.warning&&r(t.warning.minX,t.warning.maxX,!0)}setLockAgain(e){this.lockAgain=e,this.updateControls()}syncTerrain(){if(!this.state)return;const e=this.state,t=e.effect;let i=`${e.worldKey}:${e.terrain.revision}`;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt&&(i+=`:${t.identity}`),i===this.terrainKey)return;let s=zc(e.terrain);if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt){s={...s,cells:s.cells.slice()};for(const l of t.delta.removed)s.cells[l]=0}if(i===this.terrainKey)return;const a=[];for(let l=0;l<s.cells.length;l++)s.cells[l]!==this.terrain.cells[l]&&a.push(l);const o=c_(a,s.width),c=new Set(o);for(const l of o){const[u,p]=l.split(":").map(Number);for(const[h,d]of[[-1,0],[1,0],[0,-1],[0,1]])u+h>=0&&p+d>=0&&u+h<16&&p+d<9&&c.add(`${u+h}:${p+d}`)}this.rebuildTerrain(s,this.terrainWorld!==e.worldKey?void 0:[...c]),this.terrain=s,this.terrainKey=i,this.terrainWorld=e.worldKey}clearSnapshot(){this.cancelInput(),this.state=null,this.ownId=null,this.lockAgain=!1,this.labels.replaceChildren(),this.actorLabels.clear(),this.syncPressure();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.terrainKey="",this.terrainWorld="",this.rebuildTerrain(po()),this.terrain=po(),this.frame(),this.updateControls()}setTransport(e,t){this.online=e,this.busy=t,this.canAim()||this.cancelInput(),this.updateControls()}activate(){this.active=!0,this.updateControls(),this.frame()}deactivate(){this.cancelInput(),this.active=!1,this.guide.style.visibility="hidden",this.labels.replaceChildren(),this.actorLabels.clear()}setTheme(e){this.theme=e,this.material("#7d9461").color.set(e==="dark"?"#445c48":"#7d9461")}resize(e,t){this.cancelInput(),this.width=e,this.height=t,this.guide.setAttribute("viewBox",`0 0 ${e} ${t}`),this.frame()}frame(e=!1){if(this.draw||this.state&&this.state.phase!=="planning"&&this.state.state==="active")return;const t=this.state?.actors??[],i=ei.nock.x+(bt.minSpeed+bt.extraSpeed)*(xn.start+xn.duration)+1,r=e||!t.length?-32:Math.min(...t.map(g=>g.feet.x))-i,s=e||!t.length?32:Math.max(...t.map(g=>g.feet.x))+i,a=e?-8:Math.min(0,...t.map(g=>g.feet.y))-2,o=e?18:Math.max(9,...t.map(g=>g.feet.y+ei.height+4)),c=this.state?.sharedPlanning?Math.min(.25,2*(xn.radiusPx+xn.outlinePx)/this.width):0,l=this.width/this.height,u=Math.max(s-r,(o-a)*l)/(1-c),p=u/l,h=(r+s)/2,d=(a+o)/2;Object.assign(this.camera,{left:-u/2,right:u/2,top:p/2,bottom:-p/2}),this.camera.position.set(h,d,55),this.camera.lookAt(h,d,0),this.camera.updateProjectionMatrix()}canAim(){return this.active&&this.online&&!this.busy&&!!this.state?.seat.canAct&&this.state.deadlineAt!==null&&this.serverNow()<this.state.deadlineAt}get hasRoom(){return this.state!==null}get drawing(){return!!this.draw}cancelInput(){this.endDraw(!0)}endDraw(e){if(!this.draw)return;const t=this.draw;this.draw=null,e&&(this.aim=t.previous),this.canvas.hasPointerCapture(t.id)&&this.canvas.releasePointerCapture(t.id),Ot("combat-drag-marker").hidden=!0,this.onDrawing(!1),this.updateControls()}pointerDown(e){if(!this.active)return;if(this.draw){e.pointerId!==this.draw.id&&this.cancelInput();return}if(!this.canAim()||!e.isPrimary||e.button!==0)return;e.preventDefault();const t=this.canvas.getBoundingClientRect();this.draw={id:e.pointerId,x:e.clientX,y:e.clientY,width:t.width,height:t.height,previous:{...this.aim},valid:!1},this.canvas.setPointerCapture(e.pointerId),this.canvas.focus({preventScroll:!0});const i=Ot("combat-drag-marker");i.style.left=`${e.clientX-t.left}px`,i.style.top=`${e.clientY-t.top}px`,i.hidden=!1,this.onDrawing(!0),this.updateControls()}pointerMove(e){if(!this.active||this.draw?.id!==e.pointerId)return;const{x:t,y:i,width:r,height:s}=this.draw,a=e.clientX-t,o=e.clientY-i,c=this.state?.format==="skirmish"?a_(a,o,r,s):s_(a,o,r,s,this.aim.facing);this.draw.valid=!!c,c&&(this.aim={facing:this.aim.facing,...c}),this.updateControls()}keydown(e){if(this.active){if(e.code==="Escape"){this.cancelInput();return}!this.canAim()||this.draw||(e.code==="Space"?(e.preventDefault(),e.repeat||this.fire()):["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.aim.angle=li(this.aim.angle+(e.code==="ArrowLeft"?-1:e.code==="ArrowRight"?1:0),5,80),this.aim.power=li(this.aim.power+(e.code==="ArrowUp"?.02:e.code==="ArrowDown"?-.02:0),.08,1),this.updateControls()))}}fire(){!this.canAim()||this.draw||this.arrow==="bomb"&&!this.state?.seat.bombReady||this.onShot(this.arrow,{...this.aim})}updateControls(){Ot("combat-fire").textContent=this.state?.sharedPlanning?this.lockAgain?"Lock again":"Lock arrow":"Fire arrow";const e=!this.canAim()||!!this.draw;for(const t of["fire","angle","power","face-left","face-right","arrow-normal","arrow-bomb","arrow-teleport"])Ot(`combat-${t}`).disabled=e||t==="arrow-bomb"&&!this.state?.seat.bombReady;for(const t of["normal","bomb","teleport"])Ot(`combat-arrow-${t}`).setAttribute("aria-pressed",String(this.arrow===t));for(const t of[-1,1])Ot(`combat-face-${t===1?"right":"left"}`).setAttribute("aria-pressed",String(this.aim.facing===t));Ot("combat-angle").value=String(this.aim.angle),Ot("combat-power").value=String(this.aim.power*100),Ot("combat-angle-value").textContent=`${Math.round(this.aim.angle)}°`,Ot("combat-power-value").textContent=`${Math.round(this.aim.power*100)}%`,Ot("combat-bomb-status").textContent=this.state?.seat.bombReady?"Bomb ready":"Bomb reloads after your next personal opportunity.",Ot("combat-overview").disabled=!!this.draw||this.state?.phase!=="planning"}render(e,t){if(!this.active)return;const i=this.state,r=this.serverNow();this.syncTerrain();let s;const a=i?.effect&&i.effect.startedAt!==null?o_(i.effect.motion,i.effect.startedAt,r):null;for(const h of i?.actors??[]){const d=this.rigs.get(h.id),g=a?.find(A=>A.actorId===h.id)?.feet??h.feet,v=i?.action?.actorId===h.id?i.action:null,m=h.id===this.ownId&&!v,f=v??(m?this.aim:{angle:29,power:.62,facing:h.facing});d.root.position.set(g.x,g.y,0),d.root.scale.x=f.facing,d.root.visible=!h.eliminated,m&&(s=h),d.pose=bd(d.pose,{angle:f.angle,pull:.2+f.power*.5},t),d.release+=((v?1:0)-d.release)*(1-Math.exp(-18*t));const S=aa(d.pose,d.release),w=(A,x=.12)=>Lt(A.x+7.72,A.y-.08,x),M=d.pose.angle*Math.PI/180;d.bow.position.copy(w(S.bow)),d.bow.rotation.z=M;const C=d.string.attributes.position;C.setXYZ(1,(S.nock.x-S.bow.x)*Math.cos(M)+(S.nock.y-S.bow.y)*Math.sin(M),0,0),C.needsUpdate=!0,this.updateBeam(d.arms[0],Lt(.02,2.22,.42),w({x:S.bow.x+Math.cos(M)*.37,y:S.bow.y+Math.sin(M)*.37})),this.updateBeam(d.arms[1],Lt(-.23,2.22,.45),w(S.elbow,.28)),this.updateBeam(d.arms[2],w(S.elbow,.28),w(S.hand)),d.hand.position.copy(w(S.hand));const T=w({x:S.nock.x+Math.cos(M)*1.2,y:S.nock.y+Math.sin(M)*1.2});if(d.arrow.position.copy(T),d.arrow.rotation.z=M,d.arrow.visible=!0,v&&i?.launchAt!==null&&i?.launchAt!==void 0&&r>=i.launchAt){const A=ph(h,f),x=Math.max(0,(Math.min(r,i.contactAt??1/0)-i.launchAt)/1e3),b={tip:{x:h.feet.x+T.x*f.facing,y:h.feet.y+T.y},angle:f.facing===1?M:Math.PI-M},X=k_(i,v);d.flightId!==X&&(d.flightId=X,d.held=b);const R=Zr(A,x,d.held??b);d.arrow.position.set((R.position.x-g.x)*f.facing,R.position.y-g.y,.12),d.arrow.rotation.z=f.facing===1?R.angle:Math.PI-R.angle,d.arrow.visible=i.phase!=="settling"}}if(this.guide.style.visibility=s&&this.canAim()&&(!this.draw||this.draw.valid)?"visible":"hidden",s){const h=this.rigs.get(s.id),d=ph(s,this.aim),g=h.pose.angle*Math.PI/180,v=aa(h.pose),m={tip:{x:s.feet.x+(v.nock.x+7.72+Math.cos(g)*1.2)*this.aim.facing,y:s.feet.y+v.nock.y-.08+Math.sin(g)*1.2},angle:this.aim.facing===1?g:Math.PI-g};oa(xn).forEach((f,S)=>{const w=Zr(d,f,m).position,M=Lt(w.x,w.y,.1).project(this.camera);this.dots[S].setAttribute("cx",String((M.x+1)*this.width/2)),this.dots[S].setAttribute("cy",String((1-M.y)*this.height/2))})}for(const[h,d]of this.actorLabels)i?.actors.some(g=>g.id===h)||(d.remove(),this.actorLabels.delete(h));const o=this.width<640,c=i?.sharedPlanning?[...new Set(i.seats.map(h=>h.teamId).filter(h=>h!==null))]:[];(i?.actors??[]).forEach((h,d)=>{let g=this.actorLabels.get(h.id);g||(g=document.createElement("span"),this.actorLabels.set(h.id,g),this.labels.append(g));const v=a?.find(w=>w.actorId===h.id)?.feet??h.feet,m=Lt(v.x,v.y+ei.height+.4,.2).project(this.camera),f=i.seats.find(w=>w.actorId===h.id),S=f&&"teamId"in f&&typeof f.teamId=="string"?` · ${String.fromCharCode(65+c.indexOf(f.teamId))}`:"";g.className="combat-actor-label",g.dataset.actorId=h.id,g.dataset.own=String(h.id===this.ownId),g.style.left=`${(m.x+1)*this.width/2}px`,g.style.top=`${(1-m.y)*this.height/2-(o&&i.actors.length>4?d%2*16:0)}px`,g.textContent=`${h.id===this.ownId?"You":f?.label??`#${d+1}`}${S}${o?"":` · ${h.eliminated?"out":h.health}`}`}),e.setClearColor(this.theme==="dark"?"#202f36":"#dce8df"),e.render(this.scene,this.camera);const l=this.ownId?this.rigs.get(this.ownId):null,u=i?.format==="skirmish"&&i.action?.actorId===this.ownId?i.action:null,p=l?{actorId:this.ownId,lifeId:i?.seat.lifeId,mirror:l.root.scale.x,bow:l.bow.getWorldPosition(Lt(0,0)),arrow:{...l.arrow.getWorldPosition(Lt(0,0)),visible:l.root.visible&&l.arrow.visible},action:u?{id:u.id,actorId:u.actorId,lifeId:u.lifeId,epoch:u.epoch,roundId:u.roundId,at:r,launchAt:i?.launchAt,contactAt:i?.contactAt}:null}:null;this.canvas.dataset.combat=JSON.stringify({revision:i?.revision,format:i?.format,epoch:i?.epoch,worldKey:i?.worldKey,state:i?.state,phase:i?.phase,actors:i?.actors,terrainRevision:i?.terrain.revision,ownId:this.ownId,aim:this.aim,drawing:!!this.draw,view:[this.camera.left,this.camera.right,this.camera.top,this.camera.bottom],chunks:this.chunks.size,renderedOwn:p})}}const ss="challenge-v1";function ca(n){if(n!=="course"&&n!=="endless")throw new RangeError("Unknown challenge format.")}function G_(n){if(!Number.isFinite(n.angle)||!Number.isFinite(n.power)||n.angle<bt.minAngle||n.angle>bt.maxAngle||n.power<0||n.power>1)throw new RangeError("Challenge aim must have an angle from 5 to 80 and power from 0 to 1.")}const _o=(...n)=>32*Number.EPSILON*Math.max(1,...n.map(Math.abs));function Ed(n,e){if(ca(n),!Number.isSafeInteger(e)||e<0||n==="course"&&e>=12)throw new RangeError("Challenge shot index is out of range.");const t=Math.floor(e/3),i=n==="course"?[12,18,24,30][t]:Math.min(30,12+2*t),r=n==="course"?2.6:Math.max(.8,2.6-.1*t);return Object.freeze({distance:i,centerY:3.2,radius:r,faceX:wi.x+i})}function V_(n,e){if(G_(n),![e.distance,e.centerY,e.radius,e.faceX].every(Number.isFinite)||e.distance<=0||e.radius<=0||Math.abs(e.faceX-(wi.x+e.distance))>_o(e.faceX,e.distance))throw new RangeError("Challenge target must have finite, consistent geometry and positive distance and radius.");const t=Sa(n),i=(e.faceX-t.origin.x)/t.velocity.x,r=Math.min(dd(t),bt.maxFlight);if(i>=r-_o(i,r))return Object.freeze({score:0,innerBullseye:!1,impact:null,at:r,hit:!1});const s=Object.freeze({x:e.faceX,y:Ti(t,i).y}),a=Math.abs(s.y-e.centerY),o=_o(a,s.y,e.centerY,e.radius);let c=0;for(let l=1;l<=10;l++)if(a<=e.radius*l/10+o){c=11-l;break}return Object.freeze({score:c,innerBullseye:a<=e.radius/20+o,impact:s,at:i,hit:c>0})}function wd(n,e=ss){if(ca(n),typeof e!="string"||e.trim().length===0)throw new RangeError("A challenge requires a rules version.");return Object.freeze({format:n,rulesVersion:e,status:"active",revision:0,shots:Object.freeze([]),total:0,hits:0,innerBullseyes:0,tens:0,misses:0})}function Hc(n){if(n.status!=="active")throw new Error("The challenge has already ended.")}function Wc(n,e){Hc(n);const t=Ed(n.format,n.shots.length),i=V_(e,t),r=Object.freeze({aim:Object.freeze({angle:e.angle,power:e.power}),target:t,outcome:i}),s=Object.freeze([...n.shots,r]),a=n.misses+ +!i.hit,o=n.format==="course"?s.length===12:a===3;return Object.freeze({...n,status:o?"completed":"active",revision:n.revision+1,shots:s,total:n.total+i.score,hits:n.hits+Number(i.hit),innerBullseyes:n.innerBullseyes+Number(i.innerBullseye),tens:n.tens+ +(i.score===10),misses:a})}function Xc(n){if(Hc(n),n.format!=="endless"||n.shots.length===0)throw new Error("Only a nonempty endless challenge can be banked.");return Object.freeze({...n,status:"completed",revision:n.revision+1})}function H_(n){return Hc(n),Object.freeze({...n,status:"abandoned",revision:n.revision+1})}function xo(n,e){if(ca(n.format),ca(e.format),n.format!==e.format)throw new RangeError("Challenge results must use the same format.");const t=n.format==="course"?["total","innerBullseyes","tens"]:["total","hits","innerBullseyes","tens"];for(const i of t)if(n[i]!==e[i])return e[i]-n[i];return 0}const vh="archery.challenge.results.v1",yh="archery.challenge.initials.v1",dr=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function xc(n){if(!dr(n)||!["course","endless"].includes(String(n.format))||n.rulesVersion!==ss||!Array.isArray(n.shots))throw new Error("Unsupported challenge data.");let e=wd(n.format);for(const i of n.shots){if(!dr(i)||!dr(i.aim)||typeof i.aim.angle!="number"||typeof i.aim.power!="number")throw new Error("Invalid challenge shot.");e=Wc(e,{angle:i.aim.angle,power:i.aim.power})}n.status==="completed"&&e.status==="active"&&(e=Xc(e)),n.status==="abandoned"&&e.status==="active"&&(e=H_(e));function t(i,r){return Array.isArray(i)&&Array.isArray(r)?i.length===r.length&&i.every((s,a)=>t(s,r[a])):dr(i)&&dr(r)?Object.keys(i).length===Object.keys(r).length&&Object.keys(i).every(s=>s in r&&t(i[s],r[s])):i===r}if(!t(e,n))throw new Error("Challenge data failed verification.");return e}class W_{message="Results stay on this browser.";storage;constructor(e){this.storage=e}readResults(){let e;try{if(!this.storage)throw new Error;e=this.storage.getItem(vh)}catch{return this.message="Result not saved: browser storage unavailable. You can still play.",null}if(e===null)return[];try{const t=JSON.parse(e);if(!Array.isArray(t))throw new Error;return t.map(i=>{const r=xc(i);if(r.status!=="completed")throw new Error;return r})}catch{return this.message="Local results are unreadable or use another rules version. Existing data is preserved; new results cannot be saved.",null}}results(e){return(this.readResults()??[]).filter(t=>t.format===e).sort(xo).slice(0,100)}save(e){if(e.status!=="completed")return!1;const t=this.readResults();if(t===null)return!1;try{const i=[xc(e),...t.filter(s=>s.format===e.format)].sort(xo).slice(0,100),r=t.filter(s=>s.format!==e.format).sort(xo).slice(0,100);return this.storage.setItem(vh,JSON.stringify([...i,...r])),this.message="Best 100 results per format stay on this browser.",!0}catch{return this.message="Result not saved: browser storage unavailable.",!1}}initials(){try{return this.storage?.getItem(yh)??""}catch{return""}}saveInitials(e){try{this.storage?.setItem(yh,e)}catch{}}}function Sh(n){if(!Array.isArray(n))throw new Error("Invalid leaderboard.");return n.map(e=>{if(!dr(e)||!["rank","total","hits","innerBullseyes","tens","misses"].every(t=>Number.isSafeInteger(e[t])&&Number(e[t])>=0)||typeof e.guestId!="string"||typeof e.initials!="string"||!/^[a-z]{3}$/.test(e.initials)||typeof e.own!="boolean"||typeof e.publishedAt!="string")throw new Error("Invalid leaderboard entry.");return e})}class X_{attempt=null;pending=null;busy=!1;session;attemptRevision=null;pendingRevision=null;constructor(e,t=fetch,i,r){r?.assertContext(e,t,i),this.session=r??new Ma(e,t,i)}checkAttemptRevision(){const e=this.attemptRevision??this.session.revision;return this.session.assertRevision(e),this.attemptRevision=e,e}checkPending(e,t,i){if(this.session.assertRevision(i),this.pending!==e||this.attempt!==t)throw new Error("Challenge changed while the action was pending.")}decodeAttempt(e){if(typeof e.id!="string"||!e.id)throw new Error("Invalid attempt response.");return{id:e.id,state:xc(e.state)}}async start(e){if(this.busy||this.pending)throw new Error("Finish the pending action first.");this.busy=!0;try{const t=await this.session.ensure();this.session.assertRevision(t.revision);const i=this.decodeAttempt(await this.session.request("/attempts",{format:e,rulesVersion:ss}));return this.session.assertRevision(t.revision),this.attempt=i,this.attemptRevision=t.revision,i}finally{this.busy=!1}}async shot(e){return this.action("shot",{aim:{...e}})}async bank(){return this.action("bank",{})}async action(e,t){if(!this.attempt||this.pending||this.busy)throw new Error("Finish the pending action first.");return this.pendingRevision=this.checkAttemptRevision(),this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/actions`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,kind:e,...t},kind:"action"},this.retry()}async retry(){if(!this.pending||this.pending.kind!=="action"||!this.attempt||this.busy)throw new Error("No retryable action.");const e=this.pending,t=this.attempt,i=this.pendingRevision??this.checkAttemptRevision();this.checkPending(e,t,i),this.busy=!0;try{const r=this.decodeAttempt(await this.session.request(e.url,e.body));this.checkPending(e,t,i);const s=e.body.kind==="shot"?Wc(t.state,e.body.aim):Xc(t.state);if(r.id!==t.id||JSON.stringify(r.state)!==JSON.stringify(s))throw new Error("Shared response does not match the pending action.");return this.attempt=r,this.pending=null,this.pendingRevision=null,r}catch(r){throw r instanceof gr&&r.code==="challenge_capacity"&&e.body.kind==="shot"&&this.pending===e&&this.attempt===t&&this.session.revision===i&&(this.pending=null,this.pendingRevision=null),r}finally{this.busy=!1}}async publish(e){if(!this.attempt||this.attempt.state.status!=="completed"||this.busy||this.pending?.kind==="action")throw new Error("Finish the pending shot first.");if(e=e.trim().toLowerCase(),!/^[a-z]{3}$/.test(e))throw new Error("Use exactly three letters A–Z.");const t=this.checkAttemptRevision();this.pending||(this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/publish`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,initials:e},kind:"publish"},this.pendingRevision=t);const i=this.pending,r=this.attempt;this.checkPending(i,r,this.pendingRevision??t),this.busy=!0;try{const s=await this.session.request(i.url,i.body);this.checkPending(i,r,t);const a=Sh(s.entries);return this.pending=null,this.pendingRevision=null,a}catch(s){throw s instanceof Error&&"status"in s&&s.status===400&&this.pending===i&&this.attempt===r&&this.session.revision===t&&(this.pending=null,this.pendingRevision=null),s}finally{this.busy=!1}}async boards(e){const t=this.session.revision,i=await this.session.request(`/leaderboards/${e}?rulesVersion=${encodeURIComponent(ss)}`);return this.session.assertRevision(t),Sh(i.entries)}forget(){this.session.forget(),this.attempt=null,this.pending=null,this.attemptRevision=null,this.pendingRevision=null}}function Mh(n,e,t=Ft){if(!Number.isFinite(e)||e<=0)throw new RangeError("Positive finite aspect required.");if(![t.minX,t.maxX,t.minY,t.maxY].every(Number.isFinite)||t.minX>t.maxX||t.minY>t.maxY)throw new RangeError("Ordered finite target required.");n.updateMatrixWorld(!0);let i=-11.4,r=11.4,s=-11.4/e,a=11.4/e;const o=(h,d,g)=>{const v=new N(h,d,g).applyMatrix4(n.matrixWorldInverse),m=1.1;i=Math.min(i,v.x-m),r=Math.max(r,v.x+m),s=Math.min(s,v.y-m),a=Math.max(a,v.y+m)};for(const h of[-8.5,8.62])for(const d of[0,6])o(h,d,.12);for(const h of[t.minX,t.maxX])for(const d of[t.minY,t.maxY])for(const g of[-.9,.12])o(h,d,g);const c=(i+r)/2,l=(s+a)/2,u=Math.max((a-s)/2,(r-i)/(2*e)),p=u*e;n.left=c-p,n.right=c+p,n.bottom=l-u,n.top=l+u,n.updateProjectionMatrix()}function q_(n,e,t){if(![n.origin.x,n.origin.y,n.velocity.x,n.velocity.y,e.x,e.y,t].every(Number.isFinite)||t<0||t>bt.maxFlight)throw new RangeError("Finite shot and a bounded resolved interval required.");const i=n.origin.x-e.x,r=n.origin.y-e.y,s=n.velocity.x,a=n.velocity.y,o=bt.gravity,c=.5*o*o,l=-1.5*o*a,u=s*s+a*a-o*r,p=s*i+a*r;if(![c,l,u,p].every(Number.isFinite))throw new RangeError("Shot exceeds supported numeric range.");const h=f=>((c*f+l)*f+u)*f+p,d=[0,t],g=4*l*l-12*c*u;if(g>=0)for(const f of[(-2*l-Math.sqrt(g))/(6*c),(-2*l+Math.sqrt(g))/(6*c)])f>0&&f<t&&d.push(f);d.sort((f,S)=>f-S);const v=[...d];for(let f=1;f<d.length;f++){let S=d[f-1],w=d[f],M=h(S),C=h(w);if(!(M===0||C===0||M<0==C<0)){for(let T=0;T<64;T++){const A=(S+w)/2,x=h(A);M<0==x<0?(S=A,M=x):w=A}v.push((S+w)/2)}}const m=Math.min(...v.map(f=>{const S=Ti(n,f);return Math.hypot(S.x-e.x,S.y-e.y)}));if(!Number.isFinite(m))throw new RangeError("Shot exceeds supported numeric range.");return m}function Gi(){return{completed:0,hits:0,best:null,mean:null,last:null,lastShotId:0,m2:0,currentStreak:0,bestStreak:0,recent:[]}}function qc(n,e,t,i,r={angle:29,power:.62}){if(!Number.isSafeInteger(e)||e<0||!Number.isFinite(i)||i<0||typeof t!="boolean"||!Number.isFinite(r.angle)||r.angle<5||r.angle>80||!Number.isFinite(r.power)||r.power<.08||r.power>1)throw new RangeError("Valid completion identity, aim and distance required.");if(e<=n.lastShotId)return n;const s=n.completed+1,a=i-(n.mean??0),o=(n.mean??0)+a/s,c=t?n.currentStreak+1:0,l={completed:s,hits:n.hits+Number(t),best:Math.min(n.best??1/0,i),mean:o,last:i,lastShotId:e,m2:Math.max(0,n.m2+a*(i-o)),currentStreak:c,bestStreak:Math.max(n.bestStreak,c),recent:[{hit:t,distance:i,...r},...n.recent].slice(0,10)};if(!Number.isSafeInteger(s)||!Number.isFinite(l.m2)||!Number.isFinite(o))throw new RangeError("Practice exceeds supported numeric range.");return l}const Y_="archery-practice",vo="progress",yo="practice";function $_(n){return{version:1,stats:n}}function j_(n){if(n===void 0)return Gi();const e=()=>{throw new Error("Saved practice is incompatible or damaged. Clear it to start again.")};if(!n||typeof n!="object"||n.version!==1)return e();const t=(a,o)=>Object.keys(a).sort().join(",")===o.sort().join(",");if(!t(n,["version","stats"]))return e();const i=n.stats;if(!i||typeof i!="object"||!t(i,Object.keys(Gi())))return e();const r=a=>Number.isSafeInteger(a)&&a>=0,s=a=>typeof a=="number"&&Number.isFinite(a)&&a>=0;if(![i.completed,i.hits,i.lastShotId,i.currentStreak,i.bestStreak].every(r)||i.hits>i.completed||i.lastShotId<i.completed||i.currentStreak>i.bestStreak||i.bestStreak>i.hits||i.hits>0&&i.bestStreak===0||!s(i.m2)||!Array.isArray(i.recent)||i.recent.length!==Math.min(i.completed,10))return e();if(i.completed){if(!s(i.best)||!s(i.mean)||!s(i.last)||i.best>i.mean||i.best>i.last||i.completed===1&&(i.m2!==0||i.mean!==i.last||i.best!==i.last)||i.hits===0&&i.bestStreak!==0||i.hits===i.completed&&(i.currentStreak!==i.completed||i.bestStreak!==i.completed))return e()}else if(i.hits||i.lastShotId||i.currentStreak||i.bestStreak||i.m2||i.best!==null||i.mean!==null||i.last!==null)return e();for(const a of i.recent)if(!a||!t(a,["hit","distance","angle","power"])||typeof a.hit!="boolean"||!s(a.distance)||!Number.isFinite(a.angle)||a.angle<5||a.angle>80||!Number.isFinite(a.power)||a.power<.08||a.power>1||i.best>a.distance)return e();if(i.completed){if(i.last!==i.recent[0].distance)return e();let a=0;for(const d of i.recent){if(!d.hit)break;a++}if(a<i.recent.length?i.currentStreak!==a:i.currentStreak<a)return e();let o=0,c=0;for(const d of[...i.recent].reverse())o=d.hit?o+1:0,c=Math.max(c,o);const l=i.recent.reduce((d,g)=>d+(g.distance-i.mean)**2,0);if(c>i.bestStreak||l>i.m2+1e-9*Math.max(1,i.m2))return e();const u=i.best+i.recent.reduce((d,g)=>d+(g.distance-i.best)/i.completed,0),p=Math.sqrt(i.completed-1)*(i.mean-i.best);if(u>i.mean+1e-10*Math.max(1,i.mean)||Math.sqrt(i.m2/i.completed)>p+1e-10*Math.max(1,p))return e();const h=i.recent.filter(d=>d.hit).length;if(h>i.hits||i.recent.length-h>i.completed-i.hits)return e();if(i.completed>10){const d=i.completed-i.recent.length,g=d-(i.hits-h),v=i.hits-h,m=i.mean-i.best;let f=d*m-i.recent.reduce((x,b)=>x+(b.distance-i.mean),0);const S=1e-9*Math.max(1,d*m,...i.recent.map(x=>Math.abs(x.distance-i.mean)));if(f<-S)return e();f=Math.max(0,f);const w=!i.recent.some(x=>x.distance===i.best);if(w&&d===1&&f>S)return e();const M=d*(f/d-m)**2,C=l+M+(w&&d>1?f/d*(f/(d-1)):0),T=l+M+f/d*f*(d-1);if(!Number.isFinite(C)||i.m2<C-1e-9*Math.max(1,i.m2,C)||i.m2>T+1e-9*Math.max(1,i.m2,T))return e();let A=0;for(const x of[...i.recent].reverse()){if(!x.hit)break;A++}if(A===i.recent.length){const x=i.currentStreak-A,b=v-x;if(x>v||x<0||g===0&&x!==d||b>g*i.bestStreak||i.bestStreak<x+A||i.bestStreak>Math.max(c,x+A,b))return e()}else if(v>(g+1)*i.bestStreak-A||i.bestStreak>Math.max(c,v+A))return e()}if(i.completed<=10){let d=Gi();for(const v of[...i.recent].reverse())d=qc(d,d.lastShotId+1,v.hit,v.distance,v);const g=(v,m)=>Math.abs(v-m)<=1e-10*Math.max(1,Math.abs(v),Math.abs(m));if(!g(d.mean,i.mean)||!g(d.m2,i.m2)||d.best!==i.best||d.bestStreak!==i.bestStreak)return e()}}return structuredClone(i)}class K_{db=null;queue;unavailable=!1;view={stats:Gi(),state:"loading",message:"Loading saved practice…"};notify;constructor(e,t=()=>indexedDB){this.notify=e,this.notify(this.view),this.queue=new Promise(i=>{let r;try{r=t().open(Y_,1)}catch{this.fail(),i();return}r.onupgradeneeded=()=>{r.result.createObjectStore(vo)},r.onblocked=()=>{this.fail("Saved practice is blocked by another tab."),i()},r.onerror=()=>{this.fail(),i()},r.onsuccess=()=>{if(this.unavailable){r.result.close(),i();return}const s=r.result;this.db=s,s.onversionchange=()=>{this.db===s&&(this.db=null,s.close(),this.fail("Saved practice changed in another tab. Reload to reconnect."))},this.transaction().then(i,()=>{this.db&&this.fail(),i()})}})}fail(e="Saved practice unavailable. This visit still counts."){this.unavailable=!0,this.view={...this.view,state:"unavailable",message:e},this.notify(this.view)}transaction(e,t=!1){return new Promise((i,r)=>{const s=this.db;if(!s){r(new Error("Storage unavailable"));return}let a=Gi(),o;try{o=s.transaction(vo,e||t?"readwrite":"readonly");const c=o.objectStore(vo);if(t)c.delete(yo);else{const l=c.get(yo);l.onsuccess=()=>{try{a=j_(l.result),e&&(a=qc(a,a.lastShotId+1,e.hit,e.distance,e),c.put($_(a),yo))}catch(u){o.abort(),r(u)}}}o.oncomplete=()=>{this.db!==s?this.view={...this.view,stats:a}:(this.unavailable=!1,this.view={stats:a,state:"saved",message:`Saved on this browser only · ${a.completed} ${a.completed===1?"shot":"shots"}`}),this.notify(this.view),i()},o.onabort=o.onerror=()=>r(new Error("Storage transaction failed"))}catch(c){r(c)}})}enqueue(e,t=!1){return this.queue=this.queue.then(async()=>{if(!(!this.db||this.unavailable&&!t)){this.view={...this.view,state:e||t?"saving":"loading",message:t?"Clearing saved practice…":e?"Saving practice…":"Loading saved practice…"},this.notify(this.view);try{await this.transaction(e,t)}catch{this.db&&this.fail()}}}),this.queue}append(e){return this.enqueue(e)}clear(){return this.enqueue(void 0,!0)}refresh(){return this.enqueue()}}const Td="archery-theme";function Z_(n,e){try{const t=n.getItem(Td);return t==="light"||t==="dark"?t:e}catch{return e}}function J_(n,e){try{n.setItem(Td,e)}catch{}}const I=n=>document.getElementById(n),lt=I("scene");let Tt="range",We,Ye=null,js="",pt=null,la="",Bt="private",tn=!1,Vi=!1;const Ad=I("status"),Rd=I("phase"),Jr=I("retry"),Ea=I("fire"),ha=I("pause"),as=I("angle"),os=I("power"),Qr=I("drag-marker"),Q_=I("gesture-hint"),_r=I("theme"),wa=document.getElementById("guide"),bh=oa(xn).map(()=>{const n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("r",String(xn.radiusPx)),n.setAttribute("stroke-width",String(xn.outlinePx)),wa.append(n),n}),Wr=I("arrow-cue");let $r=Gi(),Cd=Gi(),Id=0,Ks="visit",vi={angle:29,pull:.2+.62*.5},jr=0,vc={tip:{...wi},angle:29*Math.PI/180},en="light";try{en=Z_(localStorage,matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}let we="ready",Mt={angle:29,power:.62},et=null,Et=!1,Rt=null,fn=0,Yc=0,da=performance.now(),ua=0,Eh="",hi;try{hi=new n_({canvas:lt,antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{throw Ad.textContent="This clearing needs WebGL. Please try a browser with graphics enabled.",Rd.textContent="GRAPHICS UNAVAILABLE",lt.hidden=!0,Ea.disabled=!0,ha.disabled=!0,new Error("WebGL unavailable")}hi.setClearColor("#dce8df");hi.shadowMap.enabled=!0;hi.shadowMap.type=Kr;hi.outputColorSpace=pn;const tt=new qh;tt.fog=new Dc("#dce8df",38,80);const Tn=new us(-11,11,10,-10,.1,100);Tn.position.set(0,9,30);Tn.lookAt(0,3.7,0);const yc=new nd("#fff7d7","#6a8161",2.6);tt.add(yc);const $i=new rd("#fff4d6",3);$i.position.set(-8,16,10);$i.castShadow=!0;$i.shadow.mapSize.set(1024,1024);Object.assign($i.shadow.camera,{left:-16,right:16,top:15,bottom:-12,near:.5,far:60});$i.shadow.bias=-.002;tt.add($i);const Zs=new Map;function fs(n){return Zs.has(n)||Zs.set(n,new ed({color:n,roughness:1,metalness:0,flatShading:!0})),Zs.get(n)}function Ze(n,e,t,i,r,s,a,o){const c=new kt(new Yi(r,s,a),fs(o));return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function ps(n,e,t,i,r){const s=Ze(n,0,0,0,i,e.distanceTo(t),i,r);return s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new N(0,1,0),t.clone().sub(e).normalize()),s}const yt=(n,e,t=0)=>new N(n,e,t),wr={x:(Ft.minX+Ft.maxX)/2,y:(Ft.minY+Ft.maxY)/2},fa=Ze(tt,(Ft.minX+Ft.maxX)/2,(Ft.minY+Ft.maxY)/2,-.45,Ft.maxX-Ft.minX,Ft.maxY-Ft.minY,.9,"#cc684a");Ze(tt,wr.x,wr.y,.015,.61,.12,.025,"#f4ddb3");Ze(tt,wr.x,wr.y,.035,.14,.32,.025,"#4b3c31");Ze(tt,8.31,.3,-.45,1.35,.6,1.5,"#66734a");Ze(tt,0,-.25,-2,27,.9,14,"#7d9461");Ze(tt,0,-.9,-2,27,.4,14,"#8d7653");Ze(tt,0,-1.65,-2,26.2,1.1,13.4,"#b1a17b");for(let n=0;n<7;n++){const e=-16+n*5.5,t=new kt(new ds(6+n%3,9+n%4,4),fs(n%2?"#afc5ae":"#c2d1bb"));t.position.set(e,3,-18-n%2*3),t.rotation.y=Math.PI/4,tt.add(t)}function Ta(n,e,t){Ze(tt,n,1*t,e,.3*t,2*t,.3*t,"#7c7853"),Ze(tt,n,3*t,e,1.8*t,2.2*t,1.7*t,"#718d65"),Ze(tt,n-.3*t,4.1*t,e,1.3*t,1.2*t,1.25*t,"#89a176")}Ta(-11.3,-3.8,1.2);Ta(-3.2,-6.5,.8);Ta(5.8,-7,1.05);Ta(11.8,-4.5,1.4);for(let n=0;n<34;n++){const e=Math.sin(n*73.3)*12,t=-2-Math.cos(n*29.1)*3;Ze(tt,e,.25,t,.16,.2+n%3*.08,.17,n%6===0?"#e5d0a1":"#96ab6f")}for(const[n,e,t]of[[-4,-1,.5],[4,-2,.7],[10,1,.5]])Ze(tt,n,.3,e,t,t*.65,t,"#a7ae94");const Sn=new sn;tt.add(Sn);Ze(Sn,-8.02,.55,0,.36,.8,.4,"#38473f");Ze(Sn,-7.32,.55,0,.36,.8,.4,"#38473f");Ze(Sn,-8.08,.2,.12,.64,.24,.55,"#4c4938");Ze(Sn,-7.26,.2,.12,.64,.24,.55,"#4c4938");Ze(Sn,-7.72,1.61,0,.85,1.5,.6,"#d19b58");Ze(Sn,-7.72,1.15,.32,.95,.18,.12,"#6b6845");Ze(Sn,-7.72,2.66,0,.65,.65,.6,"#eac795");Ze(Sn,-7.85,3,-.04,.95,.27,.76,"#4d6e57");Ze(Sn,-7.98,2.72,-.02,.23,.45,.65,"#4d6e57");Ze(Sn,-7.4,2.73,.32,.08,.08,.07,"#34483c");ps(Sn,yt(-8.14,1.6,-.38),yt(-8.36,2.8,-.38),.28,"#786244");const Tr=new sn;Tr.position.set(wi.x,wi.y,.12);tt.add(Tr);const So=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let n=1;n<So.length;n++)ps(Tr,yt(...So[n-1]),yt(...So[n]),.075,"#78523c");const Pd=new Kt().setFromPoints([yt(0,-.92),yt(-.3,0),yt(0,.92)]),ex=new ur(Pd,new Mr({color:"#f1e7bf"}));Tr.add(ex);const tx=ps(tt,yt(-7.7,2.3,.42),yt(wi.x,wi.y,.42),.23,"#eac795"),nx=ps(tt,yt(-7.95,2.3,.45),yt(-7.8,2.7,.3),.22,"#d19b58"),ix=ps(tt,yt(-7.8,2.7,.3),yt(-7.3,2.7,.12),.18,"#eac795"),rx=Ze(tt,-7.3,2.7,.12,.19,.19,.19,"#eac795");function Mo(n,e,t){const i=n.geometry.parameters.height;n.scale.y=e.distanceTo(t)/i,n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(yt(0,1,0),t.clone().sub(e).normalize())}function sx(){const n=new sn;Ze(n,-.6,0,0,1.2,.045,.045,"#f3dfaa");const e=new kt(new ds(.085,.24,4),fs("#58685d"));return e.rotation.z=-Math.PI/2,e.position.x=-.12,n.add(e),Ze(n,-1.08,0,0,.22,.17,.04,"#e9e6c8"),tt.add(n),n}const Qn=sx(),Sc=new Kt,Aa=new ur(Sc,new Mr({color:"#f6edcf",transparent:!0,opacity:.55}));tt.add(Aa);const Ar=Array.from({length:9},(n,e)=>{const t=Ze(tt,0,0,0,.08+e%2*.05,.08,.08,"#ffedb7");return t.visible=!1,t});let me=null,Yt=null,Ai=!1,it=!1,$c=!1,Rr;try{Rr=localStorage}catch{}const Hi=new W_(Rr),pa=p_(Array.from(document.querySelectorAll('meta[name="archery-api"]'),n=>n.content),location.origin),Fn=pa?new Ma(pa,fetch,Rr):null,Ve=Fn?new X_(Fn.endpoint,fetch,Rr,Fn):null,jc=new sn;for(const n of[fa,...tt.children.filter(e=>e instanceof kt&&e!==fa&&(e.position.x===wr.x&&e.position.y===wr.y||e.position.x===8.31&&e.position.y===.3))])jc.add(n);tt.add(jc);const ti=new sn;tt.add(ti);ti.visible=!1;const Ur=new sn;tt.add(Ur);Ur.visible=!1;Ze(Ur,13,-.25,-2,25,.9,14,"#7d9461");Ze(Ur,13,-.9,-2,25,.4,14,"#8d7653");Ze(Ur,13,-1.65,-2,25,1.1,13.4,"#b1a17b");const Vs=["#f5f1df","#f5f1df","#222d2a","#222d2a","#59a6c5","#59a6c5","#d96350","#d96350","#efc655","#efc655"];function Kc(){const n=me.shots.length;return Ed(me.format,Math.max(0,Yt||me.status!=="active"?n-1:n))}function Zc(){if(Tt==="range")if(me){const n=Kc();Mh(Tn,Mi/bi,{minX:n.faceX-.1,maxX:n.faceX+.1,minY:n.centerY-n.radius,maxY:n.centerY+n.radius})}else Mh(Tn,Mi/bi)}function Jc(){jc.visible=!me,ti.visible=!!me,Ur.visible=!!me,I("face-inset").hidden=!me;for(const n of[...ti.children])ti.remove(n),n instanceof kt&&n.geometry.dispose();if(I("face-rings").replaceChildren(),I("face-impact").setAttribute("hidden",""),me){const n=Kc();for(let e=0;e<10;e++){const t=n.radius*(10-e)/10,i=new kt(new Nc(t,48),fs(Vs[e]));i.rotation.y=-Math.PI/2,i.position.set(n.faceX-e*.001,n.centerY,0),ti.add(i),Ze(ti,n.faceX-.035,n.centerY+t-n.radius/20,0,.09,n.radius/10,.07,Vs[e]),Ze(ti,n.faceX-.035,n.centerY-t+n.radius/20,0,.09,n.radius/10,.07,Vs[e]);const r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("r",String((10-e)/10)),r.setAttribute("fill",Vs[e]),r.setAttribute("stroke",e<4?"#a8ada0":"#384d46"),r.setAttribute("stroke-width",".01"),I("face-rings").append(r)}Ze(ti,n.faceX,.5,-.12,.18,1,.18,"#786244")}Zc()}function ax(){const n=Et||it||!!Ve?.pending||we==="flying"||we==="aiming";for(const e of["practice","course","endless"]){const t=I(`mode-${e}`);t.disabled=n,t.setAttribute("aria-pressed",String(e===(me?.format??"practice")))}I("challenge-panel").hidden=!me,I("practice-stats").hidden=!!me;for(const e of["challenge-restart","challenge-leave","challenge-bank","clear-identity"])I(e).disabled=n||Et;if(I("online-mode").disabled=n||!!me,me){const e=Kc(),t=me.status!=="active";I("challenge-name").textContent=`${me.format==="course"?"12-arrow course":"Endless"} · ${Ai?"shared scoring":"local"}`,I("challenge-total").textContent=`${me.total}${me.format==="course"?" / 120":""} points`,I("challenge-progress").textContent=`${t?"Completed":`Arrow ${me.shots.length+1}${me.format==="course"?" of 12":""}`} · ${e.distance} units · ${me.misses} ${me.format==="endless"?"/ 3 ":""}misses · ${me.innerBullseyes} inner bullseyes`,I("challenge-rules").textContent=me.format==="course"?"3 arrows each at 12, 18, 24 and 30 units. Ten rings, 10 points at center.":"Three misses ends the run. Every 3 arrows: +2 units (max 30), radius −0.1 (min 0.8). End & bank between shots.",I("challenge-bank").hidden=me.format!=="endless"||t||!me.shots.length,Jr.hidden=t||!["hit","miss"].includes(we),Jr.textContent="Next arrow ↗",Ea.disabled||=t||we==="hit"||we==="miss"||it||!!Ve?.pending,as.disabled||=t||we==="hit"||we==="miss"||it||!!Ve?.pending,os.disabled||=t||we==="hit"||we==="miss"||it||!!Ve?.pending,I("gesture-hint").hidden||=t||it||!!Ve?.pending,I("publish-form").hidden=!(t&&Ai&&!$c),I("initials").disabled=it||Ve?.pending?.kind==="publish",I("publish").disabled=it||!!Ve?.pending&&Ve.pending.kind==="action"}else Jr.innerHTML="Try again <span>↗</span>",I("publish-form").hidden=!0;lt.dataset.format=me?.format??"practice"}let Js=0;async function fr(n=""){const e=++Js,t=I("board-format").value;I("board-rules").textContent=`Rules ${ss} · ties share a rank · score, ${t==="endless"?"hits, ":""}inner bullseyes, tens`;const i=Hi.results(t);if(I("local-empty").hidden=i.length>0,I("local-board").replaceChildren(...i.slice(0,10).map(r=>{const s=document.createElement("li");return s.textContent=`${r.total} points · ${r.hits} hits · ${r.shots.length} arrows`,s})),I("challenge-storage").textContent=Hi.message,!!Ve){I("shared-board").replaceChildren(),I("shared-status").textContent=n||"Loading shared board…";try{const r=await Ve.boards(t);if(e!==Js)return;ox(r),I("shared-status").textContent=n||"Shared boards available. Choose shared scoring before starting a challenge."}catch(r){if(e!==Js)return;I("shared-status").textContent=`${n?n+" ":""}Shared boards unavailable. ${r instanceof Error?r.message:"Try later."} Local challenges are playable.`,I("shared-board").replaceChildren()}}}function ox(n){I("shared-board").replaceChildren(...n.map(e=>{const t=document.createElement("li");return t.value=e.rank,t.dataset.own=String(e.own),t.textContent=`${e.initials}${e.own?" · you":""} — ${e.total} points · ${e.hits} hits`,t}))}function es(n){I("network-recovery").hidden=!1,I("network-message").textContent=`${n instanceof Error?n.message:"Connection interrupted."} No result has been promoted to the shared board.`,I("network-retry").hidden=!Ve?.pending,yn("Shared action needs attention below the clearing.","CHALLENGE WAITING"),vt()}function Mc(){if(me?.status!=="completed")return!1;const n=Ai||Hi.save(me);return fr(),n}async function Xr(n,e=!1){if(!(Tt==="combat"&&(Ud("range"),(me?.format??"practice")===n))&&!(it||we==="flying"||et||Et)&&!(me?.status==="active"&&!confirm("Abandon this challenge? Its unfinished score will not be banked."))&&!(Ve?.pending&&!e)){e&&(Ve.pending=null),it=!0,vt();try{const t=n!=="practice"&&!e&&!!Ve&&I("online-mode").checked;let i=null;n!=="practice"&&(i=t?(await Ve.start(n)).state:wd(n)),me=i,Ai=t,Yt=null,$c=!1,I("network-recovery").hidden=!0,I("publish-form").hidden=!0,I("board-format").value=n==="practice"?"course":n,we="ready",Rt=null,fn=0,Aa.visible=!1,I("shot-result").hidden=!0;for(const r of Ar)r.visible=!1;Jc(),yn("Pull back. Breathe. Release.",me?"CHALLENGE READY":"YOUR NEXT SHOT"),fr()}catch(t){es(t)}finally{it=!1,vt()}}}async function cx(n){it=!0,vt();try{me=Ai?(await Ve.shot(n)).state:Wc(me,n),Yt=me.shots.at(-1).outcome,tl(n)}catch(e){we="ready",es(e)}finally{it=!1,vt()}}function lx(){if(!me||!Yt||!Rt)return;we=Yt.hit?"hit":"miss",fn=Yt.at,Yc=ua,I("shot-result-caption").textContent="Actual impact · ten-ring scoring",I("shot-result-value").textContent=Yt.hit?`${Yt.score} points${Yt.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",I("shot-result").hidden=!1;const n=Yt.impact;if(n){const t=me.shots.at(-1).target,i=I("face-impact");i.setAttribute("cx","0"),i.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-t.centerY)/t.radius)))),i.removeAttribute("hidden")}const e=Mc();yn(me.status==="completed"?`${me.total} points. ${Ai?"Publish with your initials below.":e?"Saved to this browser’s local board.":Hi.message}`:Yt.hit?"On the face. Take your next arrow when ready.":"Outside the face. Take your next arrow when ready.",me.status==="completed"?"CHALLENGE COMPLETE":Yt.hit?"SCORED":"MISS"),vt()}function hx(){for(const n of["practice","course","endless"])I(`mode-${n}`).addEventListener("click",()=>{Xr(n)});if(I("challenge-restart").addEventListener("click",()=>{Xr(me.format)}),I("challenge-leave").addEventListener("click",()=>{Xr("practice")}),I("challenge-bank").addEventListener("click",async()=>{if(!(!me||it||Et||et||we==="flying"||Ve?.pending)){it=!0,vt();try{me=Ai?(await Ve.bank()).state:Xc(me);const n=Mc();yn(`${me.total} points banked.${n?"":" "+Hi.message}`,"CHALLENGE COMPLETE")}catch(n){es(n)}finally{it=!1,vt()}}}),I("board-format").addEventListener("change",()=>{fr()}),I("network-local").addEventListener("click",()=>{Xr(me?.format??"course",!0)}),I("network-retry").addEventListener("click",async()=>{if(!(it||!Ve?.pending)){if(Ve.pending.kind==="publish"){I("publish-form").requestSubmit();return}it=!0,vt();try{const n=Ve.pending.body.kind;if(me=(await Ve.retry()).state,I("network-recovery").hidden=!0,n==="shot"){const e=me.shots.at(-1);Yt=e.outcome,tl(e.aim)}else Mc(),yn(`${me.total} points banked.`,"CHALLENGE COMPLETE")}catch(n){es(n)}finally{it=!1,vt()}}}),I("publish-form").addEventListener("submit",async n=>{if(n.preventDefault(),it||!Ve)return;const e=I("initials").value.trim().toLowerCase();it=!0,++Js,vt();try{await Ve.publish(e),Hi.saveInitials(e),$c=!0,I("network-recovery").hidden=!0,I("publish-form").hidden=!0;const t="Published. The shared board keeps your strongest result for this format and rules version.";I("shared-status").textContent=t,await fr(t)}catch(t){es(t)}finally{it=!1,vt()}}),I("clear-identity").addEventListener("click",()=>{it||we==="flying"||et||Ve?.pending||confirm("Forget this browser’s shared guest identity? Any unfinished challenge is abandoned. Published scores remain, and this browser will no longer own them. Local results and saved practice stay.")&&(Ve?.forget(),Ye?.forgetRoom(),pt?.forgetArena(),We.clearSnapshot(),me=null,Yt=null,Ai=!1,I("online-mode").checked=!1,Xr("practice",!0))}),I("initials").value=Hi.initials(),I("online-choice").hidden=!Ve,I("clear-identity").hidden=!Ve,fr(),Ve){const n=new WebSocket(Fn.endpoint.boardSocket);n.addEventListener("message",e=>{try{const t=JSON.parse(String(e.data));typeof t=="object"&&t!==null&&"type"in t&&t.type==="board-changed"&&fr()}catch{}}),window.addEventListener("pagehide",()=>n.close(),{once:!0})}}const dx={"#cc684a":"#cf785c","#7d9461":"#445c48","#8d7653":"#645b47","#b1a17b":"#7d765f","#afc5ae":"#3b5150","#c2d1bb":"#465e5b","#718d65":"#405d4d","#89a176":"#58735a","#96ab6f":"#64794d","#a7ae94":"#737f6e","#66734a":"#556343"};function Qc(){We?.setTheme(en),document.documentElement.dataset.theme=en,_r.setAttribute("aria-pressed",String(en==="dark")),_r.setAttribute("aria-label",en==="dark"?"Switch to light theme":"Switch to dark theme"),_r.textContent=en==="dark"?"☀ Light":"☾ Dark";const n=en==="dark"?"#202f36":"#dce8df";hi.setClearColor(n),tt.fog.color.set(n),yc.color.set(en==="dark"?"#c6d7e8":"#fff7d7"),yc.groundColor.set(en==="dark"?"#435b4b":"#6a8161"),$i.color.set(en==="dark"?"#d7def1":"#fff4d6");for(const[e,t]of Zs)t.color.set(en==="dark"?dx[e]??e:e);document.querySelector('meta[name="theme-color"]')?.setAttribute("content",en==="dark"?"#18231f":"#eef2de")}function Ra(){const n=Ks==="visit"?$r:Cd;I("shots-value").textContent=String(n.completed),I("hit-count-value").textContent=String(n.hits),I("hits-value").textContent=n.completed?`${Math.round(n.hits/n.completed*100)}%`:"0%",I("best-value").textContent=n.best===null?"—":`${n.best.toFixed(2)} units`,I("mean-value").textContent=n.mean===null?"—":`${n.mean.toFixed(2)} units`,I("streak-value").textContent=String(n.currentStreak),I("best-streak-value").textContent=String(n.bestStreak),I("spread-value").textContent=n.completed?`${Math.sqrt(n.m2/n.completed).toFixed(2)} units`:"—",I("recent-shots").replaceChildren(...n.recent.map(e=>{const t=document.createElement("li");return t.textContent=`${e.hit?"Hit":"Miss"} · ${e.distance.toFixed(2)} units · ${e.angle.toFixed(1)}° · ${(e.power*100).toFixed(1)}% power`,t})),I("recent-empty").hidden=n.completed>0,I("visit-stats").setAttribute("aria-pressed",String(Ks==="visit")),I("saved-stats").setAttribute("aria-pressed",String(Ks==="saved"))}const Ca=new K_(n=>{Cd=n.stats,I("save-status").textContent=n.message,I("save-status").dataset.state=n.state,Ra()});for(const[n,e]of[["visit-stats","visit"],["saved-stats","saved"]])I(n).addEventListener("click",()=>{et||(Ks=e,Ra(),e==="saved"&&Ca.refresh())});document.querySelector(".recent-details summary")?.addEventListener("click",n=>{et&&n.preventDefault()});I("clear-practice").addEventListener("click",()=>{et||(I("clear-confirmation").hidden=!1)});I("cancel-clear").addEventListener("click",()=>{et||(I("clear-confirmation").hidden=!0)});I("confirm-clear").addEventListener("click",()=>{et||(I("clear-confirmation").hidden=!0,Ca.clear())});window.addEventListener("focus",()=>{Tt==="range"&&Ca.refresh()});function yn(n,e){Ad.textContent=n,Rd.textContent=e}function vt(){if(Tt!=="range")return;I("angle-value").textContent=`${Math.round(Mt.angle)}°`,I("power-value").textContent=`${Math.round(Mt.power*100)}%`,I("angle-meter").style.width=`${Mt.angle/80*100}%`,I("power-meter").style.width=`${Mt.power*100}%`,as.value=String(Math.round(Mt.angle)),os.value=String(Math.round(Mt.power*100));const n=Et||we==="aiming"||we==="flying"||it||!!Ve?.pending;_r.disabled=we==="aiming",I("mode-combat").disabled=we==="aiming"||it||!!Ve?.pending;for(const e of["visit-stats","saved-stats","clear-practice","confirm-clear","cancel-clear"])I(e).disabled=we==="aiming";Ea.disabled=n,as.disabled=n,os.disabled=n,Jr.hidden=we!=="hit"&&we!=="miss",Q_.hidden=we!=="ready"||Et,lt.dataset.state=we,lt.dataset.paused=String(Et),ax()}function cs(){if(!(we==="flying"||Et||it||Ve?.pending||me&&me.status!=="active")){me&&(Yt=null,Jc()),we="ready",Rt=null,fn=0,Aa.visible=!1,I("shot-result").hidden=!0;for(const n of Ar)n.visible=!1;yn("Pull back. Breathe. Release.","YOUR NEXT SHOT"),vt()}}function el(){if(Tt==="range"&&!(Et||we==="flying"||it||Ve?.pending)){if(me){if(me.status!=="active"||we!=="ready"&&we!=="aiming")return;cx({...Mt});return}tl(Mt)}}function tl(n){Mt={...n};const e=aa(vi,jr),t=vi.angle*Math.PI/180;vc={tip:{x:e.nock.x+Math.cos(t)*1.2,y:e.nock.y+Math.sin(t)*1.2},angle:t},Rt=Sa(Mt),lt.dataset.shot=JSON.stringify(Rt),Id++,fn=0,we="flying",Aa.visible=!0,I("shot-result").hidden=!0;for(const i of Ar)i.visible=!1;yn("Let it fly…","ARROW IN FLIGHT"),vt()}function bo(n,e){if(we!=="flying"||!Rt)return;we=n?"hit":"miss",fn=e,Yc=ua,I("shot-result-caption").textContent="Closest approach · this shot";const t=q_(Rt,i_,e),i=$r;$r=qc($r,Id,n,t,Mt),Ra(),$r!==i&&Ca.append({hit:n,distance:t,...Mt}),I("shot-result-value").textContent=`${t.toFixed(2)} units from center`,I("shot-result").hidden=!1;const r=Ti(Rt,e),s=(Ft.minX-Rt.origin.x)/Rt.velocity.x,a=Ti(Rt,s);Eh=a.y>Ft.maxY?"A little high. Try less angle or draw.":a.y<Ft.minY?"A little low. Try more draw or angle.":"Just short. Give it a little more draw.",yn(n?"A lovely shot.":Eh,n?"TARGET HIT":"ANOTHER TRY");for(const o of Ar)o.position.set(r.x,r.y,.2);vt()}function Xn(n=!0){if(!et)return;const e=et;et=null,lt.hasPointerCapture(e.id)&&lt.releasePointerCapture(e.id),Mt=e.previous,Qr.hidden=!0,we="ready",n&&yn("Draw cancelled. Take your time.","YOUR NEXT SHOT"),vt()}function Nr(n){Xn(!1),Et=n,da=performance.now(),I("paused").hidden=!Et,ha.textContent=Et?"▶":"Ⅱ",ha.setAttribute("aria-label",Et?"Resume game":"Pause game"),vt()}lt.addEventListener("pointerdown",n=>{if(Tt!=="range"||Et||we==="flying"||it||Ve?.pending||me&&(me.status!=="active"||we==="hit"||we==="miss")||et||!n.isPrimary||n.button!==0)return;n.preventDefault(),(we==="hit"||we==="miss")&&cs();const e=lt.getBoundingClientRect();et={id:n.pointerId,x:n.clientX,y:n.clientY,width:e.width,height:e.height,previous:{...Mt},valid:!1},lt.setPointerCapture(n.pointerId),lt.focus({preventScroll:!0}),Qr.style.left=`${n.clientX-e.left}px`,Qr.style.top=`${n.clientY-e.top}px`,Qr.hidden=!1,we="aiming",yn("Pull left and down. Release to shoot.","FIND YOUR ARC"),vt()});function Ld(n){if(Tt!=="range"||!et||n.pointerId!==et.id)return;const e=Oc(n.clientX-et.x,n.clientY-et.y,et.width,et.height);et.valid=e!==null,e&&(Mt=e),yn(e?"Release when it feels right.":"Pull left and down to draw the bow.","FIND YOUR ARC"),vt()}lt.addEventListener("pointermove",Ld);lt.addEventListener("pointerup",n=>{if(Tt!=="range"||!et||n.pointerId!==et.id)return;if(Ld(n),!et?.valid){Xn();return}const e=et.id;et=null,Qr.hidden=!0,lt.hasPointerCapture(e)&&lt.releasePointerCapture(e),el()});lt.addEventListener("pointercancel",n=>{et?.id===n.pointerId&&Xn()});lt.addEventListener("lostpointercapture",n=>{et?.id===n.pointerId&&Xn()});lt.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("resize",()=>{Tt==="range"?Xn():We.cancelInput()});window.addEventListener("blur",()=>{Tt==="range"?Nr(!0):We.cancelInput()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Tt==="range"?Nr(!0):We.cancelInput())});ha.addEventListener("click",()=>Nr(!Et));_r.addEventListener("click",()=>{if(!et){en=en==="dark"?"light":"dark",Qc();try{J_(localStorage,en)}catch{}}});I("resume").addEventListener("click",()=>{Nr(!1),lt.focus({preventScroll:!0})});Jr.addEventListener("click",()=>{cs(),lt.focus({preventScroll:!0})});Ea.addEventListener("click",()=>{Xn(!1),el()});for(const n of[as,os])n.addEventListener("input",()=>{if(we==="flying"||Et||it||Ve?.pending||me&&(me.status!=="active"||we==="hit"||we==="miss")){vt();return}const e={angle:Number(as.value),power:Number(os.value)/100};Xn(!1),(we==="hit"||we==="miss")&&cs(),Mt=e,vt()});window.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLButtonElement||n.target instanceof HTMLElement&&["SUMMARY","SELECT","TEXTAREA"].includes(n.target.tagName)||n.target instanceof HTMLElement&&n.target.isContentEditable)){if(Tt==="combat"){We.keydown(n);return}if(n.code==="KeyP"){n.preventDefault(),n.repeat||Nr(!Et);return}if(n.code==="Escape"){Xn();return}if(!(Et||et||it||Ve?.pending||me&&me.status!=="active")){if(n.code==="Space"){if(n.preventDefault(),n.repeat)return;we==="hit"||we==="miss"?cs():el()}else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.code)&&we!=="flying"){if(n.preventDefault(),we==="hit"||we==="miss"){if(me)return;cs()}Mt.angle=li(Mt.angle+(n.code==="ArrowLeft"?-1:n.code==="ArrowRight"?1:0),5,80),Mt.power=li(Mt.power+(n.code==="ArrowDown"?-.02:n.code==="ArrowUp"?.02:0),.08,1),vt()}}}});let Mi=1,bi=1;const ux=new ResizeObserver(()=>{Tt==="range"?Xn():We.cancelInput();const{width:n,height:e}=lt.getBoundingClientRect();n<=0||e<=0||(hi.setSize(Math.round(n*.85),Math.round(e*.85),!1),Mi=n,bi=e,wa.setAttribute("viewBox",`0 0 ${n} ${e}`),Tt==="range"?Zc():We.resize(n,e))});ux.observe(lt);lt.addEventListener("webglcontextlost",n=>{if(n.preventDefault(),Tt==="combat"){We.cancelInput(),I("combat-message").textContent="Graphics interrupted. Reload to reconnect with the same guest.";return}Nr(!0),yn("Graphics interrupted. Reload to return to the clearing.","GRAPHICS PAUSED")});function Dd(n){requestAnimationFrame(Dd);const e=Math.max(0,(n-da)/1e3);if(da=n,Tt==="combat"){We.render(hi,e),Nd();return}if(!Et&&(ua+=e,we==="flying"&&Rt)){const c=Math.min(fn+e,bt.maxFlight);if(me&&Yt)c>=Yt.at?lx():fn=c;else{const l=r_(Rt,Ft,fn,c),u=dd(Rt);l!==null&&l<=u?bo(!0,l):c>=u?bo(!1,u):c>=bt.maxFlight?bo(!1,c):fn=c}}const t={angle:Mt.angle,pull:.2+Mt.power*.5};Et||(vi=bd(vi,t,e),jr+=((Rt?1:0)-jr)*(1-Math.exp(-18*e)));const i=vi.angle*Math.PI/180,r=aa(vi,jr);Tr.rotation.z=i,Tr.position.set(r.bow.x,r.bow.y,.12);const s=Pd.attributes.position;if(s.setXYZ(1,(r.nock.x-r.bow.x)*Math.cos(i)+(r.nock.y-r.bow.y)*Math.sin(i),0,0),s.needsUpdate=!0,Mo(tx,yt(-7.7,2.3,.42),yt(r.bow.x+Math.cos(i)*.37,r.bow.y+Math.sin(i)*.37,.12)),Mo(nx,yt(-7.95,2.3,.45),yt(r.elbow.x,r.elbow.y,.28)),Mo(ix,yt(r.elbow.x,r.elbow.y,.28),yt(r.hand.x,r.hand.y,.12)),rx.position.set(r.hand.x,r.hand.y,.12),Rt){const c=Zr(Rt,fn,vc);Qn.position.set(c.position.x,c.position.y,.12),Qn.rotation.z=c.angle;const l=Array.from({length:16},(u,p)=>{const h=Math.max(0,fn-.23+p/15*.23),d=Zr(Rt,h,vc).position;return yt(d.x,d.y,.04)});Sc.setFromPoints(l)}else Qn.position.set(r.nock.x+Math.cos(i)*1.2,r.nock.y+Math.sin(i)*1.2,.12),Qn.rotation.z=i;const a=Sa(Mt);if(wa.style.visibility=!Rt&&!Et&&(we!=="aiming"||et?.valid)?"visible":"hidden",oa(xn).forEach((c,l)=>{const u={x:r.nock.x+Math.cos(i)*1.2,y:r.nock.y+Math.sin(i)*1.2},p=Zr(a,c,{tip:u,angle:i}).position,h=yt(p.x,p.y,.06).project(Tn);bh[l].setAttribute("cx",String((h.x+1)*Mi/2)),bh[l].setAttribute("cy",String((1-h.y)*bi/2))}),Wr.hidden=!0,Rt&&we==="flying"&&!Et){const c=yt(Qn.position.x,Qn.position.y,.12).project(Tn);if(Math.abs(c.x)>1||Math.abs(c.y)>1){const l=c.x*Mi/2,u=-c.y*bi/2,p=Math.min((Mi/2-20)/Math.abs(l),(bi/2-20)/Math.abs(u));Wr.style.left=`${Mi/2+l*p}px`,Wr.style.top=`${bi/2+u*p}px`,Wr.style.setProperty("--cue-angle",`${Math.atan2(u,l)+Math.PI/2}rad`),Wr.hidden=!1}}const o=ua-Yc;Ar.forEach((c,l)=>{if(c.visible=we==="hit"&&o<.65,c.visible&&Rt){const u=Ti(Rt,fn),p=l/Ar.length*Math.PI*2;c.position.set(u.x+Math.cos(p)*o*2,u.y+Math.sin(p)*o*2-o*o*2,.25)}}),fa.material=fs(we==="hit"&&o<.2?"#edbc7e":"#cc684a"),fa.material.color.set(we==="hit"&&o<.2?"#edbc7e":en==="dark"?"#cf785c":"#cc684a"),lt.dataset.pose=JSON.stringify({angle:vi.angle,pull:vi.pull,release:jr,...r,arrow:{x:Qn.position.x,y:Qn.position.y,angle:Qn.rotation.z},trail:Array.from(Sc.getAttribute("position")?.array??[]),flightTime:fn}),lt.dataset.view=JSON.stringify([Tn.left,Tn.right,Tn.top,Tn.bottom]),hi.render(tt,Tn)}We=new z_(lt);fx();Qc();Ra();hx();vt();requestAnimationFrame(Dd);function Ud(n){if(n!==Tt){n==="combat"?(Xn(!1),Tt=n,We.activate()):(We.deactivate(),Tt=n,Bt==="public"&&(tn=!1,pt?.close())),da=performance.now(),document.body.dataset.view=n;for(const e of[".controls",".boards"]){const t=document.querySelector(e);t&&(t.hidden=n==="combat")}for(const e of["combat-panel","combat-controls","combat-scene-label"])I(e).hidden=n!=="combat";for(const e of["pause","guide","gesture-hint","arrow-cue","shot-result","face-inset","paused"])I(e).hidden=n==="combat";I("challenge-panel").hidden=n==="combat"||!me,I("mode-combat").setAttribute("aria-pressed",String(n==="combat"));for(const e of["practice","course","endless"]){const t=I(`mode-${e}`);t.disabled=!1,n==="combat"&&t.setAttribute("aria-pressed","false")}lt.dataset.viewMode=n,document.querySelector(".play-area").hidden=!1,n==="combat"?(wa.style.visibility="hidden",We.resize(Mi,bi)):(Zc(),Qc(),Jc(),I("paused").hidden=!Et,I("shot-result").hidden=we!=="hit"&&we!=="miss",vt())}}function fx(){Ye=Fn?new F_(Fn.endpoint,fetch,Rr,Fn):null,pt=Fn?new L_(Fn.endpoint,fetch,Rr,Fn):null,I("mode-combat").addEventListener("click",()=>{it||Ve?.pending||et||(Ud("combat"),_n(),Bt==="public"&&I("skirmish-title").focus())});const n=async e=>{js="";try{await e()}catch(t){js=t instanceof Error?t.message:"The combat service is unavailable. Reconnect or retry the pending action."}_n()};I("combat-create").addEventListener("click",()=>{Ye&&n(()=>{const e=I("combat-preset").value,t=e==="teams-1"?{mode:"teams",preset:"teams-1"}:e==="royale-shrink-1"||e==="royale-fixed-1"?{mode:"royale",preset:e}:void 0;return Ye.create(t)})}),I("combat-join-form").addEventListener("submit",e=>{e.preventDefault(),Ye&&n(()=>Ye.join(I("combat-join-code").value))}),I("combat-ready").addEventListener("click",()=>{const e=Ye;e?.room&&n(()=>e.command({kind:"ready",ready:!e.room.state.seats.find(t=>t.actorId===e.room.membership.actorId)?.ready}))}),I("combat-start").addEventListener("click",()=>{Ye&&n(()=>Ye.command({kind:"start"}))}),I("combat-pass").addEventListener("click",()=>{Bt==="public"?pt&&Eo(()=>pt.command({kind:"pass"})):Ye&&n(()=>Ye.command({kind:"pass"}))}),I("combat-cancel").addEventListener("click",()=>{const e=Ye?.room?.state.action;Ye&&e&&n(()=>Ye.command({kind:"cancel",cancelActionId:e.id}))}),I("combat-leave").addEventListener("click",()=>{Ye&&!We.drawing&&n(()=>Ye.command({kind:"leave"}))}),I("combat-resign").addEventListener("click",()=>{Ye&&!We.drawing&&confirm(Ye.room&&Cn(Ye.room.state)?"Resign this match? Your archer will leave the competition.":"Resign this duel? Your opponent wins.")&&n(()=>Ye.command({kind:"resign"}))}),I("combat-retry").addEventListener("click",()=>{Ye&&n(()=>Ye.retry())}),I("combat-reconnect").addEventListener("click",()=>{Ye&&n(()=>Ye.reconnect())}),We.onShot=(e,t)=>{Bt==="public"?pt&&Eo(()=>pt.command({kind:"shot",arrow:e,aim:t})):Ye&&n(()=>Ye.command({kind:"shot",arrow:e,aim:t}))},We.onDrawing=e=>{_r.disabled=e;for(const t of["practice","course","endless","combat"])I(`mode-${t}`).disabled=e;_n()},Ye&&(Ye.onChange=()=>{Bt==="private"&&_n()},Ye.onError=e=>{js=e instanceof Error?e.message:"Connection interrupted. Reconnecting with the same guest.",_n()}),window.addEventListener("pagehide",()=>{Ye?.close(),pt?.close()});for(const e of["private","public"])I(`combat-mode-${e}`).addEventListener("click",()=>{We.drawing||e===Bt||(tn=!1,Bt=e,e==="private"&&pt?.close(),We.clearSnapshot(),_n(),e==="public"&&I("skirmish-title").focus())});for(const[e,t]of[["join",()=>pt.join()],["reconnect",()=>pt.reconnect()],["rejoin",()=>pt.control("rejoin")],["leave",()=>pt.control("leave")],["retry",()=>pt.retry()]])I(`skirmish-${e}`).addEventListener("click",()=>{if(pt&&!We.drawing){const i=e==="retry"?pt.pending?.body.kind:e;Eo(t,i==="leave"?"leave":e==="retry"||["join","rejoin","reconnect"].includes(i??"")?"enter":"stay")}});I("skirmish-back").addEventListener("click",()=>{Vi||pt?.busy||pt?.pending||We.drawing||(tn=!1,pt?.close(),_n(),I("skirmish-title").focus())}),pt&&(pt.onChange=()=>{Bt==="public"&&_n()},pt.onError=e=>{la=e instanceof Error?e.message:"Connection interrupted. Reconnect with the same guest.",Bt==="public"&&_n()}),_n()}function _n(){const n=Tt==="combat"&&Bt==="public"&&!tn;document.querySelector(".play-area").hidden=n,I("combat-controls").hidden=Tt!=="combat"||n,I("combat-scene-label").hidden=Tt!=="combat"||n;for(const u of["combat-mode-picker","combat-preset-choice","combat-preset-label","combat-rules"])I(u).hidden=!pa;I("combat-private-title").textContent=pa?"Private match":"Private duel",I("combat-private-panel").hidden=Bt!=="private",I("skirmish-panel").hidden=Bt!=="public";for(const u of["private","public"])I(`combat-mode-${u}`).setAttribute("aria-pressed",String(Bt===u)),I(`combat-mode-${u}`).disabled=We.drawing;if(I("combat-drag-help").textContent=Bt==="public"?"Pull left to aim right or right to aim left, and pull down to raise the arc. Release to lock. Facing buttons also work before drawing. The short seven-dot guide shows only the opening arc.":"Pull backward and down from anywhere in the arena. Change facing before drawing. The short seven-dot guide shows only the opening arc.",Bt==="public"){px();return}const e=Ye,t=e?.room,i=t?.state,r=We.drawing,s=!!e?.busy||!!e?.pending;We.setTransport(!!e?.connected,s),We.setLockAgain(!!e?.lockAgain),t?We.setSnapshot(t.state,t.membership.actorId,e.now):We.hasRoom&&We.clearSnapshot(),I("combat-lobby").hidden=!!t,I("combat-code").textContent=t?t.code:"",I("combat-message").textContent=e?js||(t?e.connected?"Connected to the private room. Share its code with a friend.":"Connecting to the private room. Server clocks continue.":"Create a room or enter a friend’s invitation code."):"Private duel is unavailable here. Practice and local Challenges are available.";for(const u of["create","join","join-code"])I(`combat-${u}`).disabled=!e||s||r||!!t;I("combat-roster").replaceChildren(...(i?.seats??[]).map((u,p)=>{const h=i.actors.find(S=>S.id===u.actorId),d=t.connections.find(S=>S.actorId===u.actorId),g=document.createElement("li"),v=u.actorId===t.membership.actorId;g.dataset.actorId=u.actorId;const m=d?.reservedUntil?` · reserved ${Math.max(0,Math.ceil((d.reservedUntil-e.now())/1e3))}s`:"";g.textContent=`${d?.label??`Archer ${p+1}`}${v?" · you":""} · ${h?.health??100} health${h?.eliminated?" · eliminated":""} · ${i.state==="waiting"?u.ready?"ready":"not ready":d?.status??"disconnected"}${d?.status==="disconnected"?m:""}`;const f=document.createElement("progress");return f.max=100,f.value=h?.health??100,f.setAttribute("aria-label",`Archer ${p+1} health`),g.append(f),g}));const a=i&&t?f_(i,t.membership.actorId):null,o=u=>{const p=i?.seats.findIndex(h=>h.actorId===u)??-1;return t?.connections.find(h=>h.actorId===u)?.label??`Archer ${p+1}`};if(I("combat-rules").textContent=i?Cn(i)?"Lock one arrow or pass during shared 20-second planning. Locks are final. Server time continues in the background.":"Two archers · 100 health · alternating 20-second turns. Server time continues in the background.":"Duel alternates turns; Teams and Royale share a planning deadline. Server time continues in the background.",I("combat-key-help").textContent=`← → elevation · ↓ ↑ draw · Space ${i&&Cn(i)?"lock":"fire"} · Escape cancel draw. Combat has no local pause.`,I("combat-preset-label").textContent=a?.preset??"",I("combat-priority").textContent=a?.priority.length?`Priority: ${a.priority.map(o).join(" → ")}`:"",I("combat-pressure").textContent=a?.pressure??"",I("combat-scene-label").textContent=i&&Cn(i)?`${i.mode==="teams"?"TEAMS 2v2":"ROYALE"} · SIDE VIEW`:"PRIVATE DUEL · SIDE VIEW",I("combat-preset").disabled=!e||s||r||!!t,a)for(const u of I("combat-roster").children){const p=u.dataset.actorId,h=i.seats.find(g=>g.actorId===p),d=a.locks.find(g=>g.actorId===p);if(h&&"teamId"in h&&h.teamId){const g=document.createElement("strong");g.className="combat-team",g.textContent=String(h.teamId),u.prepend(g)}if(d&&i.state==="active"){const g=document.createElement("div");g.textContent=d.text,u.append(g)}}const c=i?.seats.find(u=>u.actorId===t?.membership.actorId);I("combat-ready").hidden=i?.state!=="waiting",I("combat-ready").textContent=c?.ready?"Not ready":"Ready",I("combat-start").hidden=i?.state!=="waiting"||!t?.membership.canStart,I("combat-leave").hidden=!t||i?.state==="active",I("combat-resign").hidden=i?.state!=="active",I("combat-reconnect").hidden=!e||!t&&!e.savedRoom||!!e.connected,I("combat-retry").hidden=!e?.pending;for(const u of["ready","start","leave","resign","reconnect","retry"])I(`combat-${u}`).disabled=r||!!e?.busy||u!=="retry"&&!!e?.pending;I("combat-start").disabled||=!i||!u_(i)||!e?.connected,I("combat-pass").disabled=r||s||!e?.connected||!i?.seat.canAct,I("combat-pass").textContent=i&&Cn(i)?"Lock pass":"Pass turn",I("combat-cancel").hidden=!!i&&Cn(i)||i?.phase!=="resolving"||i.action?.actorId!==t?.membership.actorId||i.launchAt===null||e.now()>=i.launchAt,I("combat-cancel").disabled=r||s||!e?.connected;const l=a?.result??"";I("combat-result").hidden=!l,I("combat-result").textContent=l,I("combat-phase").textContent=i?i.state==="active"?i.phase.toUpperCase():i.state.toUpperCase():"WAITING FOR A ROOM",I("combat-turn").textContent=a?.turn??"Invite a friend to the arena.",Nd()}function Nd(){if(Bt==="public"){Fd();return}const n=Ye?.room,e=n?.state;if(!e){I("combat-clock").textContent="";return}const t=Ye.now();I("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.state==="active"&&e.deadlineAt!==null&&t>=e.deadlineAt&&(I("combat-fire").disabled=!0,I("combat-pass").disabled=!0)}async function Eo(n,e="stay"){if(Vi)return;Vi=!0,la="",Bt==="public"&&_n();let t=!1;try{await n(),Bt==="public"&&Tt==="combat"&&(e==="leave"&&pt?.room?.membership.status==="left"?(tn=!1,t=!0):e==="enter"&&pt?.room&&(tn=!0,t=!0))}catch(i){la=i instanceof Error?i.message:"Public play is unavailable. Reconnect or retry the pending action."}finally{Vi=!1,Bt==="public"&&(_n(),t&&I("skirmish-title").focus())}}function px(){const n=pt,e=n?.room,t=e?.state,i=We.drawing,r=Vi||!!n?.busy||!!n?.pending,s=e?D_(e):null;We.setTransport(tn&&!!n?.connected,r),We.setLockAgain(!!n?.lockAgain),e&&tn?We.setSnapshot(e.state,e.membership.actorId,n.now):We.hasRoom&&We.clearSnapshot(),I("skirmish-entry").hidden=tn,I("skirmish-roster").hidden=!tn,I("skirmish-message").textContent=n?la||(Vi?"Contacting the arena…":tn?e?n.connected?s.turn:"Connection interrupted. Reconnect to observe or return to this arena.":"Join an arena. NPC archers fill the open places.":n.pending?"An action is awaiting acknowledgement. Retry the original action before continuing.":e?.membership.status==="left"?"You left public play. Rejoin when ready, or return to watch.":e||n.savedArena?"Your arena is saved. Return to play or watch with the same guest.":"Join when ready. NPC archers fill the open places."):"Public play is unavailable here. Practice and local Challenges are available.",I("skirmish-join").hidden=!!e||!!n?.savedArena||!!n?.pending,I("skirmish-rejoin").hidden=!s?.canRejoin,I("skirmish-leave").hidden=!tn||!s?.canLeave,I("skirmish-reconnect").hidden=!n||!e&&!n.savedArena||tn&&!!n.connected,I("skirmish-retry").hidden=!n?.pending,I("skirmish-reconnect").textContent=e&&["idle","left","aborted"].includes(e.membership.status)?"Watch arena":tn?"Reconnect":"Return to arena",I("skirmish-back").hidden=!tn||!e||!["idle","left","aborted"].includes(e.membership.status),I("skirmish-back").disabled=i||r;for(const a of["join","reconnect","rejoin","leave","retry"])I(`skirmish-${a}`).disabled=!n||i||Vi||!!n.busy||a!=="retry"&&!!n.pending;I("skirmish-roster").replaceChildren(...(e?U_(e):[]).map(a=>{const o=document.createElement("li");o.dataset.actorId=a.actorId,o.dataset.kind=a.kind,o.textContent=a.text;const c=document.createElement("progress");return c.max=100,c.value=a.health,c.setAttribute("aria-label",`${a.label} health`),o.append(c),o})),I("combat-preset-label").textContent="",I("combat-scene-label").textContent="PUBLIC ARENA · SIDE VIEW",I("combat-phase").textContent=s?.phase??"JOIN A PUBLIC ARENA",I("combat-turn").textContent=s?.turn??"Continuous play with human and NPC archers.",I("combat-priority").textContent=t?.priority.length?`Priority: ${t.priority.map(a=>e.connections.find(o=>o.actorId===a)?.label??"Archer").join(" → ")}`:"",I("combat-pressure").textContent=s?.warning??"",I("combat-result").hidden=!0,I("combat-result").textContent="",I("combat-key-help").textContent="← → elevation · ↓ ↑ draw · Space lock · Escape cancel draw. Public play follows server time.",I("combat-cancel").hidden=!0,I("combat-pass").textContent="Lock pass",I("combat-pass").disabled=!tn||i||r||!n?.connected||!e?.membership.canAct,Fd()}function Fd(){const n=pt,e=n?.room?.state;if(!e){I("combat-clock").textContent="";return}const t=n.now();I("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.deadlineAt!==null&&t>=e.deadlineAt&&(I("combat-fire").disabled=!0,I("combat-pass").disabled=!0)}
