(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Gc="183",Iu=0,Ll=1,Pu=2,rs=1,Lu=2,es=3,Ci=0,cn=1,ii=2,si=0,Sr=1,Dl=2,Ul=3,Nl=4,Du=5,Hi=100,Uu=101,Nu=102,Fu=103,Ou=104,ku=200,Bu=201,zu=202,Gu=203,Go=204,Vo=205,Vu=206,Hu=207,Wu=208,Xu=209,Yu=210,qu=211,$u=212,ju=213,Ku=214,Ho=0,Wo=1,Xo=2,Ar=3,Yo=4,qo=5,$o=6,jo=7,id=0,Zu=1,Ju=2,zn=0,rd=1,sd=2,ad=3,od=4,cd=5,ld=6,hd=7,dd=300,Ki=301,Tr=302,Xa=303,Ya=304,Aa=306,Ko=1e3,ri=1001,Zo=1002,$t=1003,Qu=1004,As=1005,nn=1006,qa=1007,Xi=1008,mn=1009,ud=1010,fd=1011,ls=1012,Vc=1013,Hn=1014,kn=1015,ci=1016,Hc=1017,Wc=1018,hs=1020,pd=35902,md=35899,gd=1021,_d=1022,In=1023,li=1026,Yi=1027,xd=1028,Xc=1029,Rr=1030,Yc=1031,qc=1033,Js=33776,Qs=33777,ea=33778,ta=33779,Jo=35840,Qo=35841,ec=35842,tc=35843,nc=36196,ic=37492,rc=37496,sc=37488,ac=37489,oc=37490,cc=37491,lc=37808,hc=37809,dc=37810,uc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,xc=37817,vc=37818,yc=37819,bc=37820,Mc=37821,Sc=36492,Ec=36494,wc=36495,Ac=36283,Tc=36284,Rc=36285,Cc=36286,ef=3200,vd=0,tf=1,Si="",pn="srgb",Cr="srgb-linear",la="linear",at="srgb",sr=7680,Fl=519,nf=512,rf=513,sf=514,$c=515,af=516,of=517,jc=518,cf=519,Ol=35044,kl="300 es",Bn=2e3,ds=2001;function lf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hf(){const n=ha("canvas");return n.style.display="block",n}const Bl={};function zl(...n){const e="THREE."+n.shift();console.log(e,...n)}function yd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=yd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=yd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function da(...n){const e=n.join(" ");e in Bl||(Bl[e]=!0,Pe(...n))}function df(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const uf={[Ho]:Wo,[Xo]:$o,[Yo]:jo,[Ar]:qo,[Wo]:Ho,[$o]:Xo,[jo]:Yo,[qo]:Ar};class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,Ic=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function ff(n,e){return(n%e+e)%e}function ja(n,e,t){return(1-t)*n+t*e}function Wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3],h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(u!==v||c!==h||l!==m||d!==g){let p=c*h+l*m+d*g+u*v;p<0&&(h=-h,m=-m,g=-g,v=-v,p=-p);let f=1-o;if(p<.9995){const b=Math.acos(p),S=Math.sin(b);f=Math.sin(f*b)/S,o=Math.sin(o*b)/S,c=c*f+h*o,l=l*f+m*o,d=d*f+g*o,u=u*f+v*o}else{c=c*f+h*o,l=l*f+m*o,d=d*f+g*o,u=u*f+v*o;const b=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=b,l*=b,d*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+d*u+c*m-l*h,e[t+1]=c*g+d*h+l*u-o*m,e[t+2]=l*g+d*m+o*h-c*u,e[t+3]=d*g-o*u-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(r/2),u=o(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*d*u+l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u-h*m*g;break;case"YXZ":this._x=h*d*u+l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u+h*m*g;break;case"ZXY":this._x=h*d*u-l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u-h*m*g;break;case"ZYX":this._x=h*d*u-l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u+h*m*g;break;case"YZX":this._x=h*d*u+l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u-h*m*g;break;case"XZY":this._x=h*d*u-l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u+h*m*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-i*l,this._z=s*d+a*l+i*c-r*o,this._w=a*d-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),d=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*d,this.y=i+c*d+o*l-s*u,this.z=r+c*u+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new F,Gl=new kr;class Ne{constructor(e,t,i,r,s,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],m=i[5],g=i[8],v=r[0],p=r[3],f=r[6],b=r[1],S=r[4],E=r[7],A=r[2],T=r[5],R=r[8];return s[0]=a*v+o*b+c*A,s[3]=a*p+o*S+c*T,s[6]=a*f+o*E+c*R,s[1]=l*v+d*b+u*A,s[4]=l*p+d*S+u*T,s[7]=l*f+d*E+u*R,s[2]=h*v+m*b+g*A,s[5]=h*p+m*S+g*T,s[8]=h*f+m*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*s*d+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,h=o*c-d*s,m=l*s-a*c,g=t*u+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*l-d*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(d*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Ne,Vl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){const n={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Si?la:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cr]:{primaries:e,whitePoint:i,transfer:la,toXYZ:Vl,fromXYZ:Hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Vl,fromXYZ:Hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const $e=pf();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ar;class mf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=ha("canvas")),ar.width=e.width,ar.height=e.height;const r=ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gf=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ja(r[a].image)):s.push(Ja(r[a]))}else s=Ja(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let _f=0;const Qa=new F;class an extends Or{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,i=ri,r=ri,s=nn,a=Xi,o=In,c=mn,l=an.DEFAULT_ANISOTROPY,d=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=_s(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qa).x}get height(){return this.source.getSize(Qa).y}get depth(){return this.source.getSize(Qa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ko:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ko:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=dd;an.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,E=(m+1)/2,A=(f+1)/2,T=(d+h)/4,R=(u+v)/4,x=(g+p)/4;return S>E&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=R/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=x/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=x/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-v)/b,this.z=(h-d)/b,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends Or{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new an(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Kc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends xf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bd extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vf extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e,t,i,r,s,a,o,c,l,d,u,h,m,g,v,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,d,u,h,m,g,v,p)}set(e,t,i,r,s,a,o,c,l,d,u,h,m,g,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=u,f[14]=h,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*u,g=o*d,v=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*d,m=c*u,g=l*d,v=l*u;t[0]=h+v*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*d,m=c*u,g=l*d,v=l*u;t[0]=h-v*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*d,m=a*u,g=o*d,v=o*u;t[0]=c*d,t[4]=g*l-m,t[8]=h*l+v,t[1]=c*u,t[5]=v*l+h,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=v-h*u,t[8]=g*u+m,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*u+g,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+v,t[5]=a*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,bf)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),mi.crossVectors(i,dn),mi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),mi.crossVectors(i,dn)),mi.normalize(),Ts.crossVectors(dn,mi),r[0]=mi.x,r[4]=Ts.x,r[8]=dn.x,r[1]=mi.y,r[5]=Ts.y,r[9]=dn.y,r[2]=mi.z,r[6]=Ts.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],b=i[3],S=i[7],E=i[11],A=i[15],T=r[0],R=r[4],x=r[8],M=r[12],H=r[1],C=r[5],N=r[9],B=r[13],X=r[2],z=r[6],V=r[10],O=r[14],ee=r[3],Z=r[7],he=r[11],ge=r[15];return s[0]=a*T+o*H+c*X+l*ee,s[4]=a*R+o*C+c*z+l*Z,s[8]=a*x+o*N+c*V+l*he,s[12]=a*M+o*B+c*O+l*ge,s[1]=d*T+u*H+h*X+m*ee,s[5]=d*R+u*C+h*z+m*Z,s[9]=d*x+u*N+h*V+m*he,s[13]=d*M+u*B+h*O+m*ge,s[2]=g*T+v*H+p*X+f*ee,s[6]=g*R+v*C+p*z+f*Z,s[10]=g*x+v*N+p*V+f*he,s[14]=g*M+v*B+p*O+f*ge,s[3]=b*T+S*H+E*X+A*ee,s[7]=b*R+S*C+E*z+A*Z,s[11]=b*x+S*N+E*V+A*he,s[15]=b*M+S*B+E*O+A*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15],b=c*m-l*h,S=o*m-l*u,E=o*h-c*u,A=a*m-l*d,T=a*h-c*d,R=a*u-o*d;return t*(v*b-p*S+f*E)-i*(g*b-p*A+f*T)+r*(g*S-v*A+f*R)-s*(g*E-v*T+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],b=t*o-i*a,S=t*c-r*a,E=t*l-s*a,A=i*c-r*o,T=i*l-s*o,R=r*l-s*c,x=d*v-u*g,M=d*p-h*g,H=d*f-m*g,C=u*p-h*v,N=u*f-m*v,B=h*f-m*p,X=b*B-S*N+E*C+A*H-T*M+R*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/X;return e[0]=(o*B-c*N+l*C)*z,e[1]=(r*N-i*B-s*C)*z,e[2]=(v*R-p*T+f*A)*z,e[3]=(h*T-u*R-m*A)*z,e[4]=(c*H-a*B-l*M)*z,e[5]=(t*B-r*H+s*M)*z,e[6]=(p*E-g*R-f*S)*z,e[7]=(d*R-h*E+m*S)*z,e[8]=(a*N-o*H+l*x)*z,e[9]=(i*H-t*N-s*x)*z,e[10]=(g*T-v*E+f*b)*z,e[11]=(u*E-d*T-m*b)*z,e[12]=(o*M-a*C-c*x)*z,e[13]=(t*C-i*M+r*x)*z,e[14]=(v*S-g*A-p*b)*z,e[15]=(d*A-u*S+h*b)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+i,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,u=o+o,h=s*l,m=s*d,g=s*u,v=a*d,p=a*u,f=o*u,b=c*l,S=c*d,E=c*u,A=i.x,T=i.y,R=i.z;return r[0]=(1-(v+f))*A,r[1]=(m+E)*A,r[2]=(g-S)*A,r[3]=0,r[4]=(m-E)*T,r[5]=(1-(h+f))*T,r[6]=(p+b)*T,r[7]=0,r[8]=(g+S)*R,r[9]=(p-b)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=or.set(r[0],r[1],r[2]).length();const o=or.set(r[4],r[5],r[6]).length(),c=or.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Sn.copy(this);const l=1/a,d=1/o,u=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=Bn,c=!1){const l=this.elements,d=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===Bn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ds)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Bn,c=!1){const l=this.elements,d=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===Bn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ds)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const or=new F,Sn=new Et,yf=new F(0,0,0),bf=new F(1,1,1),mi=new F,Ts=new F,dn=new F,Wl=new Et,Xl=new kr;class Wn{constructor(e=0,t=0,i=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],u=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mf=0;const Yl=new F,cr=new kr,jn=new Et,Rs=new F,Xr=new F,Sf=new F,Ef=new kr,ql=new F(1,0,0),$l=new F(0,1,0),jl=new F(0,0,1),Kl={type:"added"},wf={type:"removed"},lr={type:"childadded",child:null},eo={type:"childremoved",child:null};class Wt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new F,t=new Wn,i=new kr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ne}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rs.copy(e):Rs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Xr,Rs,this.up):jn.lookAt(Rs,Xr,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(jn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),lr.child=e,this.dispatchEvent(lr),lr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf),eo.child=e,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new F(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tn extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Af={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function no(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=ff(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=no(a,s,e+1/3),this.g=no(a,s,e),this.b=no(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=Sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return $e.workingToColorSpace(Jt.copy(this),e),Math.round(He(Jt.r*255,0,255))*65536+Math.round(He(Jt.g*255,0,255))*256+Math.round(He(Jt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=pn){$e.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Cs);const i=ja(gi.h,Cs.h,t),r=ja(gi.s,Cs.s,t),s=ja(gi.l,Cs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Xe;Xe.NAMES=Sd;class Zc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new Zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ed extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const En=new F,Kn=new F,io=new F,Zn=new F,hr=new F,dr=new F,Zl=new F,ro=new F,so=new F,ao=new F,oo=new Rt,co=new Rt,lo=new Rt;class Rn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),Kn.subVectors(i,t),io.subVectors(e,t);const a=En.dot(En),o=En.dot(Kn),c=En.dot(io),l=Kn.dot(Kn),d=Kn.dot(io),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(l*c-o*d)*h,g=(a*d-o*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return oo.setScalar(0),co.setScalar(0),lo.setScalar(0),oo.fromBufferAttribute(e,t),co.fromBufferAttribute(e,i),lo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(oo,s.x),a.addScaledVector(co,s.y),a.addScaledVector(lo,s.z),a}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),Kn.subVectors(e,t),En.cross(Kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),En.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;hr.subVectors(r,i),dr.subVectors(s,i),ro.subVectors(e,i);const c=hr.dot(ro),l=dr.dot(ro);if(c<=0&&l<=0)return t.copy(i);so.subVectors(e,r);const d=hr.dot(so),u=dr.dot(so);if(d>=0&&u<=d)return t.copy(r);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(hr,a);ao.subVectors(e,s);const m=hr.dot(ao),g=dr.dot(ao);if(g>=0&&m<=g)return t.copy(s);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(dr,o);const p=d*g-m*u;if(p<=0&&u-d>=0&&m-g>=0)return Zl.subVectors(s,r),o=(u-d)/(u-d+(m-g)),t.copy(r).addScaledVector(Zl,o);const f=1/(p+v+h);return a=v*f,o=h*f,t.copy(i).addScaledVector(hr,a).addScaledVector(dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Ps.subVectors(this.max,Yr),ur.subVectors(e.a,Yr),fr.subVectors(e.b,Yr),pr.subVectors(e.c,Yr),_i.subVectors(fr,ur),xi.subVectors(pr,fr),Ni.subVectors(ur,pr);let t=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Ni.z,Ni.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Ni.z,0,-Ni.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Ni.y,Ni.x,0];return!ho(t,ur,fr,pr,Ps)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,ur,fr,pr,Ps))?!1:(Ls.crossVectors(_i,xi),t=[Ls.x,Ls.y,Ls.z],ho(t,ur,fr,pr,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new F,new F,new F,new F,new F,new F,new F,new F],wn=new F,Is=new xs,ur=new F,fr=new F,pr=new F,_i=new F,xi=new F,Ni=new F,Yr=new F,Ps=new F,Ls=new F,Fi=new F;function ho(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Fi.fromArray(n,s);const o=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),d=i.dot(Fi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Nt=new F,Ds=new Ke;let Tf=0;class Vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ol,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}}class wd extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ad extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xt extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Rf=new xs,qr=new F,uo=new F;class Ta{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(uo)),this.expandByPoint(qr.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cf=0;const gn=new Et,fo=new Wt,mr=new F,un=new xs,$r=new xs,Ht=new F;class jt extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?Ad:wd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(un.min,$r.min),un.expandByPoint(Ht),Ht.addVectors(un.max,$r.max),un.expandByPoint(Ht)):(un.expandByPoint($r.min),un.expandByPoint($r.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Ht.fromBufferAttribute(o,l),c&&(mr.fromBufferAttribute(e,l),Ht.add(mr)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new F,c[x]=new F;const l=new F,d=new F,u=new F,h=new Ke,m=new Ke,g=new Ke,v=new F,p=new F;function f(x,M,H){l.fromBufferAttribute(i,x),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,H),h.fromBufferAttribute(s,x),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,H),d.sub(l),u.sub(l),m.sub(h),g.sub(h);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(C),o[x].add(v),o[M].add(v),o[H].add(v),c[x].add(p),c[M].add(p),c[H].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,M=b.length;x<M;++x){const H=b[x],C=H.start,N=H.count;for(let B=C,X=C+N;B<X;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new F,E=new F,A=new F,T=new F;function R(x){A.fromBufferAttribute(r,x),T.copy(A);const M=o[x];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),E.crossVectors(T,M);const C=E.dot(c[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,C)}for(let x=0,M=b.length;x<M;++x){const H=b[x],C=H.start,N=H.count;for(let B=C,X=C+N;B<X;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,d=new F,u=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,h=new l.constructor(c.length*d);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*d;for(let f=0;f<d;f++)h[g++]=l[m++]}return new Vn(h,d,u)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,u=l.length;d<u;d++){const h=l[d],m=e(h,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const m=l[u];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let h=0,m=u.length;h<m;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let If=0;class Br extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Sr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Vo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Go&&(i.blendSrc=this.blendSrc),this.blendDst!==Vo&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qn=new F,po=new F,Us=new F,vi=new F,mo=new F,Ns=new F,go=new F;class Td{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){po.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Us),o=vi.dot(this.direction),c=-vi.dot(Us),l=vi.lengthSq(),d=Math.abs(1-a*a);let u,h,m,g;if(d>0)if(u=a*c-o,h=a*o-c,g=s*d,u>=0)if(h>=-g)if(h<=g){const v=1/d;u*=v,h*=v,m=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(po).addScaledVector(Us,h),m}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,r,s){mo.subVectors(t,e),Ns.subVectors(i,e),go.crossVectors(mo,Ns);let a=this.direction.dot(go),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);const c=o*this.direction.dot(Ns.crossVectors(vi,Ns));if(c<0)return null;const l=o*this.direction.dot(mo.cross(vi));if(l<0||c+l>a)return null;const d=-o*vi.dot(go);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ua extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jl=new Et,Oi=new Td,Fs=new Ta,Ql=new F,Os=new F,ks=new F,Bs=new F,_o=new F,zs=new F,eh=new F,Gs=new F;class Dt extends Wt{constructor(e=new jt,t=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],u=s[c];d!==0&&(_o.fromBufferAttribute(u,e),a?zs.addScaledVector(_o,d):zs.addScaledVector(_o.sub(t),d))}t.add(zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Fs.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Fs,Ql)===null||Oi.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Jl),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,A=S;E<A;E+=3){const T=o.getX(E),R=o.getX(E+1),x=o.getX(E+2);r=Vs(this,f,e,i,l,d,u,T,R,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const b=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);r=Vs(this,a,e,i,l,d,u,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,A=S;E<A;E+=3){const T=E,R=E+1,x=E+2;r=Vs(this,f,e,i,l,d,u,T,R,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const b=p,S=p+1,E=p+2;r=Vs(this,a,e,i,l,d,u,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Pf(n,e,t,i,r,s,a,o){let c;if(e.side===cn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ci,o),c===null)return null;Gs.copy(o),Gs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Gs);return l<t.near||l>t.far?null:{distance:l,point:Gs.clone(),object:n}}function Vs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Os),n.getVertexPosition(c,ks),n.getVertexPosition(l,Bs);const d=Pf(n,e,t,i,Os,ks,Bs,eh);if(d){const u=new F;Rn.getBarycoord(eh,Os,ks,Bs,u),r&&(d.uv=Rn.getInterpolatedAttribute(r,o,c,l,u,new Ke)),s&&(d.uv1=Rn.getInterpolatedAttribute(s,o,c,l,u,new Ke)),a&&(d.normal=Rn.getInterpolatedAttribute(a,o,c,l,u,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new F,materialIndex:0};Rn.getNormal(Os,ks,Bs,h.normal),d.face=h,d.barycoord=u}return d}class Lf extends an{constructor(e=null,t=1,i=1,r,s,a,o,c,l=$t,d=$t,u,h){super(null,a,o,c,l,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xo=new F,Df=new F,Uf=new Ne;class Vi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xo.subVectors(i,t).cross(Df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Uf.getNormalMatrix(e),r=this.coplanarPoint(xo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Ta,Nf=new Ke(.5,.5),Hs=new F;class Jc{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],m=s[7],g=s[8],v=s[9],p=s[10],f=s[11],b=s[12],S=s[13],E=s[14],A=s[15];if(r[0].setComponents(l-a,m-d,f-g,A-b).normalize(),r[1].setComponents(l+a,m+d,f+g,A+b).normalize(),r[2].setComponents(l+o,m+u,f+v,A+S).normalize(),r[3].setComponents(l-o,m-u,f-v,A-S).normalize(),i)r[4].setComponents(c,h,p,E).normalize(),r[5].setComponents(l-c,m-h,f-p,A-E).normalize();else if(r[4].setComponents(l-c,m-h,f-p,A-E).normalize(),t===Bn)r[5].setComponents(l+c,m+h,f+p,A+E).normalize();else if(t===ds)r[5].setComponents(c,h,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=Nf.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hs.x=r.normal.x>0?e.max.x:e.min.x,Hs.y=r.normal.y>0?e.max.y:e.min.y,Hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ir extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fa=new F,pa=new F,th=new Et,jr=new Td,Ws=new Ta,vo=new F,nh=new F;class br extends Wt{constructor(e=new jt,t=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)fa.fromBufferAttribute(t,r-1),pa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=fa.distanceTo(pa);e.setAttribute("lineDistance",new Xt(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;th.copy(r).invert(),jr.copy(e.ray).applyMatrix4(th);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=l){const f=d.getX(v),b=d.getX(v+1),S=Xs(this,e,jr,c,f,b,v);S&&t.push(S)}if(this.isLineLoop){const v=d.getX(g-1),p=d.getX(m),f=Xs(this,e,jr,c,v,p,g-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=l){const f=Xs(this,e,jr,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Xs(this,e,jr,c,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xs(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(fa.fromBufferAttribute(o,r),pa.fromBufferAttribute(o,s),t.distanceSqToSegment(fa,pa,vo,nh)>i)return;vo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(vo);if(!(l<e.near||l>e.far))return{distance:l,point:nh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Rd extends an{constructor(e=[],t=Ki,i,r,s,a,o,c,l,d){super(e,t,i,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class us extends an{constructor(e,t,i=Hn,r,s,a,o=$t,c=$t,l,d=li,u=1){if(d!==li&&d!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ff extends us{constructor(e,t=Hn,i=Ki,r,s,a=$t,o=$t,c,l=li){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cd extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tr extends jt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],u=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(u,2));function g(v,p,f,b,S,E,A,T,R,x,M){const H=E/R,C=A/x,N=E/2,B=A/2,X=T/2,z=R+1,V=x+1;let O=0,ee=0;const Z=new F;for(let he=0;he<V;he++){const ge=he*C-B;for(let ue=0;ue<z;ue++){const Fe=ue*H-N;Z[v]=Fe*b,Z[p]=ge*S,Z[f]=X,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[p]=0,Z[f]=T>0?1:-1,d.push(Z.x,Z.y,Z.z),u.push(ue/R),u.push(1-he/x),O+=1}}for(let he=0;he<x;he++)for(let ge=0;ge<R;ge++){const ue=h+ge+z*he,Fe=h+ge+z*(he+1),xt=h+(ge+1)+z*(he+1),_t=h+(ge+1)+z*he;c.push(ue,Fe,_t),c.push(Fe,xt,_t),ee+=6}o.addGroup(m,ee,M),m+=ee,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ra extends jt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new F,d=new Ke;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const m=i+u/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qc extends jt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],m=[];let g=0;const v=[],p=i/2;let f=0;b(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(m,2));function b(){const E=new F,A=new F;let T=0;const R=(t-e)/i;for(let x=0;x<=s;x++){const M=[],H=x/s,C=H*(t-e)+e;for(let N=0;N<=r;N++){const B=N/r,X=B*c+o,z=Math.sin(X),V=Math.cos(X);A.x=C*z,A.y=-H*i+p,A.z=C*V,u.push(A.x,A.y,A.z),E.set(z,R,V).normalize(),h.push(E.x,E.y,E.z),m.push(B,1-H),M.push(g++)}v.push(M)}for(let x=0;x<r;x++)for(let M=0;M<s;M++){const H=v[M][x],C=v[M+1][x],N=v[M+1][x+1],B=v[M][x+1];(e>0||M!==0)&&(d.push(H,C,B),T+=3),(t>0||M!==s-1)&&(d.push(C,N,B),T+=3)}l.addGroup(f,T,0),f+=T}function S(E){const A=g,T=new Ke,R=new F;let x=0;const M=E===!0?e:t,H=E===!0?1:-1;for(let N=1;N<=r;N++)u.push(0,p*H,0),h.push(0,H,0),m.push(.5,.5),g++;const C=g;for(let N=0;N<=r;N++){const X=N/r*c+o,z=Math.cos(X),V=Math.sin(X);R.x=M*V,R.y=p*H,R.z=M*z,u.push(R.x,R.y,R.z),h.push(0,H,0),T.x=z*.5+.5,T.y=V*.5*H+.5,m.push(T.x,T.y),g++}for(let N=0;N<r;N++){const B=A+N,X=C+N;E===!0?d.push(X,X+1,B):d.push(X+1,X,B),x+=3}l.addGroup(f,x,E===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vs extends Qc{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new vs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ys extends jt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,d=c+1,u=e/o,h=t/c,m=[],g=[],v=[],p=[];for(let f=0;f<d;f++){const b=f*h-a;for(let S=0;S<l;S++){const E=S*u-s;g.push(E,-b,0),v.push(0,0,1),p.push(S/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){const S=b+l*f,E=b+l*(f+1),A=b+1+l*(f+1),T=b+1+l*f;m.push(S,E,T),m.push(E,A,T)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}}function Pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=Pr(n[t]);for(const r in i)e[r]=i[r]}return e}function Of(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Id(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const kf={clone:Pr,merge:rn};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gf extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pc extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vf extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hf extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wf extends Ir{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Pd extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ld extends Pd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const yo=new Et,ih=new F,rh=new F;class Xf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ds||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ys=new F,qs=new kr,Ln=new F;class Dd extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ys,qs,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ys,qs,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ys,qs,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ys,qs,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new F,sh=new Ke,ah=new Ke;class Tn extends Dd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ic*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,sh,ah),t.subVectors(ah,sh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bs extends Dd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yf extends Xf{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ud extends Pd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Yf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const gr=-90,_r=1;class qf extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(gr,_r,e,t);r.layers=this.layers,this.add(r);const s=new Tn(gr,_r,e,t);s.layers=this.layers,this.add(s);const a=new Tn(gr,_r,e,t);a.layers=this.layers,this.add(a);const o=new Tn(gr,_r,e,t);o.layers=this.layers,this.add(o);const c=new Tn(gr,_r,e,t);c.layers=this.layers,this.add(c);const l=new Tn(gr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $f extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function oh(n,e,t,i){const r=jf(i);switch(t){case gd:return n*e;case xd:return n*e/r.components*r.byteLength;case Xc:return n*e/r.components*r.byteLength;case Rr:return n*e*2/r.components*r.byteLength;case Yc:return n*e*2/r.components*r.byteLength;case _d:return n*e*3/r.components*r.byteLength;case In:return n*e*4/r.components*r.byteLength;case qc:return n*e*4/r.components*r.byteLength;case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qo:case tc:return Math.max(n,16)*Math.max(e,8)/4;case Jo:case ec:return Math.max(n,8)*Math.max(e,8)/2;case nc:case ic:case sc:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rc:case oc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sc:case Ec:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ac:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jf(n){switch(n){case mn:case ud:return{byteLength:1,components:1};case ls:case fd:case ci:return{byteLength:2,components:1};case Hc:case Wc:return{byteLength:2,components:4};case Hn:case Vc:case kn:return{byteLength:4,components:1};case pd:case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);function Nd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Kf(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,d);else{u.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<u.length;m++){const g=u[h],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
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
#endif`,jp=`uniform sampler2D dfgLUT;
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
}`,Kp=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,rg=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,dg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:rp,batching_pars_vertex:sp,batching_vertex:ap,begin_vertex:op,beginnormal_vertex:cp,bsdfs:lp,iridescence_fragment:hp,bumpmap_pars_fragment:dp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:xp,color_vertex:vp,common:yp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Ep,emissivemap_fragment:wp,emissivemap_pars_fragment:Ap,colorspace_fragment:Tp,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Pp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Hp,envmap_vertex:Dp,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Fp,fog_pars_fragment:Op,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:Yp,lights_phong_pars_fragment:qp,lights_physical_fragment:$p,lights_physical_pars_fragment:jp,lights_fragment_begin:Kp,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:rm,map_particle_fragment:sm,map_particle_pars_fragment:am,metalnessmap_fragment:om,metalnessmap_pars_fragment:cm,morphinstance_vertex:lm,morphcolor_vertex:hm,morphnormal_vertex:dm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:xm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Sm,opaque_fragment:Em,packing:wm,premultiplied_alpha_fragment:Am,project_vertex:Tm,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:km,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:Gm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Hm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:Ym,uv_pars_vertex:qm,uv_vertex:$m,worldpos_vertex:jm,background_vert:Km,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distance_vert:rg,distance_frag:sg,equirect_vert:ag,equirect_frag:og,linedashed_vert:cg,linedashed_frag:lg,meshbasic_vert:hg,meshbasic_frag:dg,meshlambert_vert:ug,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:vg,meshphysical_vert:yg,meshphysical_frag:bg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:Eg,points_frag:wg,shadow_vert:Ag,shadow_frag:Tg,sprite_vert:Rg,sprite_frag:Cg},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Un={basic:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:rn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:rn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:rn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:rn([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:rn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:rn([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:rn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:rn([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:rn([oe.common,oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:rn([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Un.physical={uniforms:rn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const $s={r:0,b:0,g:0},Bi=new Wn,Ig=new Et;function Pg(n,e,t,i,r,s){const a=new Xe(0);let o=r===!0?0:1,c,l,d=null,u=0,h=null;function m(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){const E=b.backgroundBlurriness>0;S=e.get(S,E)}return S}function g(b){let S=!1;const E=m(b);E===null?p(a,o):E&&E.isColor&&(p(E,1),S=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,S){const E=m(S);E&&(E.isCubeTexture||E.mapping===Aa)?(l===void 0&&(l=new Dt(new tr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Pr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Bi.copy(S.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Bi)),l.material.toneMapped=$e.getTransfer(E.colorSpace)!==at,(d!==E||u!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,u=E.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Dt(new ys(2,2),new Xn({name:"BackgroundMaterial",uniforms:Pr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=$e.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB($s,Id(n)),t.buffers.color.setClear($s.r,$s.g,$s.b,S,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:v,dispose:f}}function Lg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(C,N,B,X,z){let V=!1;const O=u(C,X,B,N);s!==O&&(s=O,l(s.object)),V=m(C,X,B,z),V&&g(C,X,B,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(C,N,B,X),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function u(C,N,B,X){const z=X.wireframe===!0;let V=i[N.id];V===void 0&&(V={},i[N.id]=V);const O=C.isInstancedMesh===!0?C.id:0;let ee=V[O];ee===void 0&&(ee={},V[O]=ee);let Z=ee[B.id];Z===void 0&&(Z={},ee[B.id]=Z);let he=Z[z];return he===void 0&&(he=h(c()),Z[z]=he),he}function h(C){const N=[],B=[],X=[];for(let z=0;z<t;z++)N[z]=0,B[z]=0,X[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:X,object:C,attributes:{},index:null}}function m(C,N,B,X){const z=s.attributes,V=N.attributes;let O=0;const ee=B.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const ge=z[Z];let ue=V[Z];if(ue===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ge===void 0||ge.attribute!==ue||ue&&ge.data!==ue.data)return!0;O++}return s.attributesNum!==O||s.index!==X}function g(C,N,B,X){const z={},V=N.attributes;let O=0;const ee=B.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let ge=V[Z];ge===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor));const ue={};ue.attribute=ge,ge&&ge.data&&(ue.data=ge.data),z[Z]=ue,O++}s.attributes=z,s.attributesNum=O,s.index=X}function v(){const C=s.newAttributes;for(let N=0,B=C.length;N<B;N++)C[N]=0}function p(C){f(C,0)}function f(C,N){const B=s.newAttributes,X=s.enabledAttributes,z=s.attributeDivisors;B[C]=1,X[C]===0&&(n.enableVertexAttribArray(C),X[C]=1),z[C]!==N&&(n.vertexAttribDivisor(C,N),z[C]=N)}function b(){const C=s.newAttributes,N=s.enabledAttributes;for(let B=0,X=N.length;B<X;B++)N[B]!==C[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function S(C,N,B,X,z,V,O){O===!0?n.vertexAttribIPointer(C,N,B,z,V):n.vertexAttribPointer(C,N,B,X,z,V)}function E(C,N,B,X){v();const z=X.attributes,V=B.getAttributes(),O=N.defaultAttributeValues;for(const ee in V){const Z=V[ee];if(Z.location>=0){let he=z[ee];if(he===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const ge=he.normalized,ue=he.itemSize,Fe=e.get(he);if(Fe===void 0)continue;const xt=Fe.buffer,_t=Fe.type,j=Fe.bytesPerElement,ie=_t===n.INT||_t===n.UNSIGNED_INT||he.gpuType===Vc;if(he.isInterleavedBufferAttribute){const ae=he.data,Ue=ae.stride,Re=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Z.locationSize;Ie++)f(Z.location+Ie,ae.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<Z.locationSize;Ie++)p(Z.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Ie=0;Ie<Z.locationSize;Ie++)S(Z.location+Ie,ue/Z.locationSize,_t,ge,Ue*j,(Re+ue/Z.locationSize*Ie)*j,ie)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)f(Z.location+ae,he.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<Z.locationSize;ae++)p(Z.location+ae);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let ae=0;ae<Z.locationSize;ae++)S(Z.location+ae,ue/Z.locationSize,_t,ge,ue*j,ue/Z.locationSize*ae*j,ie)}}else if(O!==void 0){const ge=O[ee];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Z.location,ge);break;case 3:n.vertexAttrib3fv(Z.location,ge);break;case 4:n.vertexAttrib4fv(Z.location,ge);break;default:n.vertexAttrib1fv(Z.location,ge)}}}}b()}function A(){M();for(const C in i){const N=i[C];for(const B in N){const X=N[B];for(const z in X){const V=X[z];for(const O in V)d(V[O].object),delete V[O];delete X[z]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const N=i[C.id];for(const B in N){const X=N[B];for(const z in X){const V=X[z];for(const O in V)d(V[O].object),delete V[O];delete X[z]}}delete i[C.id]}function R(C){for(const N in i){const B=i[N];for(const X in B){const z=B[X];if(z[C.id]===void 0)continue;const V=z[C.id];for(const O in V)d(V[O].object),delete V[O];delete z[C.id]}}}function x(C){for(const N in i){const B=i[N],X=C.isInstancedMesh===!0?C.id:0,z=B[X];if(z!==void 0){for(const V in z){const O=z[V];for(const ee in O)d(O[ee].object),delete O[ee];delete z[V]}delete B[X],Object.keys(B).length===0&&delete i[N]}}}function M(){H(),a=!0,s!==r&&(s=r,l(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function Dg(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function a(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),t.update(d,i,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=d[g];t.update(m,i,1)}function c(l,d,u,h){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],d[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ug(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==In&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!x)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Pe("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:E,maxSamples:A,samples:T}}function Ng(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Vi,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||i!==0||r;return r=h,i=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?d(null):l();else{const b=s?0:i,S=b*4;let E=f.clippingState||null;c.value=E,E=d(g,h,S,m);for(let A=0;A!==S;++A)E[A]=t[A];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const f=m+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,E=m;S!==v;++S,E+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const Ei=4,ch=[.125,.215,.35,.446,.526,.582],Wi=20,Fg=256,Kr=new bs,lh=new Xe;let bo=null,Mo=0,So=0,Eo=!1;const Og=new F;class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Og}=s;bo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,Mo,So),this._renderer.xr.enabled=Eo,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ci,format:In,colorSpace:Cr,depthBuffer:!1},r=dh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kg(s)),this._blurMaterial=zg(s,e,t),this._ggxMaterial=Bg(s,e,t)}return r}_compileMaterial(e){const t=new Dt(new jt,e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,i,r,s){const c=new Tn(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(lh),u.toneMapping=zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new tr,new ua({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let f=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,f=!0):(p.color.copy(lh),f=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[S],s.y,s.z)):E===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[S]));const A=this._cubeSize;xr(r,E*A,S>2?A:0,A,A),u.setRenderTarget(r),f&&u.render(v,c),u.render(e,c)}u.toneMapping=m,u.autoClear=h,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Kr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,m=u*h,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-Ei?i-g+Ei:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,xr(s,p,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Kr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,xr(e,p,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Kr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[r];u.material=l;const h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wi-1),v=s/g,p=isFinite(s)?1+Math.floor(d*v):Wi;p>Wi&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wi}`);const f=[];let b=0;for(let R=0;R<Wi;++R){const x=R/v,M=Math.exp(-x*x/2);f.push(M),R===0?b+=M:R<p&&(b+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const E=this._sizeLods[r],A=3*E*(r>S-Ei?r-S+Ei:0),T=4*(this._cubeSize-E);xr(t,A,T,3*E,2*E),c.setRenderTarget(t),c.render(u,Kr)}}function kg(n){const e=[],t=[],i=[];let r=n;const s=n-Ei+1+ch.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Ei?c=ch[a-n+Ei-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,v=3,p=2,f=1,b=new Float32Array(v*g*m),S=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,x=T>2?0:-1,M=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];b.set(M,v*g*T),S.set(h,p*g*T);const H=[T,T,T,T,T,T];E.set(H,f*g*T)}const A=new jt;A.setAttribute("position",new Vn(b,v)),A.setAttribute("uv",new Vn(S,p)),A.setAttribute("faceIndex",new Vn(E,f)),i.push(new Dt(A,null)),r>Ei&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function dh(n,e,t){const i=new Gn(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bg(n,e,t){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function zg(n,e,t){const i=new Float32Array(Wi),r=new F(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function uh(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function fh(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}class Fd extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tr(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:si});s.uniforms.tEquirect.value=t;const a=new Dt(r,s),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=nn),new qf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Gg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===Xa||m===Ya)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Fd(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,g=m===Xa||m===Ya,v=m===Ki||m===Tr;if(g||v){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new hh(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const b=h.image;return g&&b&&b.height>0||v&&b&&c(b)?(i===null&&(i=new hh(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,m){return m===Xa?h.mapping=Ki:m===Ya&&(h.mapping=Tr),h}function c(h){let m=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&m++;return m===g}function l(h){const m=h.target;m.removeEventListener("dispose",l);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(h){const m=h.target;m.removeEventListener("dispose",d);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function Vg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&da("WebGLRenderer: "+i+" extension not supported."),r}}}function Hg(n,e,t,i){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(u){const h=[],m=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(m!==null){const b=m.array;v=m.version;for(let S=0,E=b.length;S<E;S+=3){const A=b[S+0],T=b[S+1],R=b[S+2];h.push(A,T,T,R,R,A)}}else{const b=g.array;v=g.version;for(let S=0,E=b.length/3-1;S<E;S+=3){const A=S+0,T=S+1,R=S+2;h.push(A,T,T,R,R,A)}}const p=new(g.count>=65535?Ad:wd)(h,1);p.version=v;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function d(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function Wg(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function l(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,h*a,g),t.update(m,i,g))}function d(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function u(h,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)l(h[f]/a,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,g);let f=0;for(let b=0;b<g;b++)f+=m[b]*v[b];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Xg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yg(n,e,t){const i=new WeakMap,r=new Rt;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let H=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",H)};var m=H;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let A=o.attributes.position.count*E,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*T*4*u),x=new bd(R,A,T,u);x.type=kn,x.needsUpdate=!0;const M=E*4;for(let C=0;C<u;C++){const N=f[C],B=b[C],X=S[C],z=A*T*4*C;for(let V=0;V<N.count;V++){const O=V*M;g===!0&&(r.fromBufferAttribute(N,V),R[z+O+0]=r.x,R[z+O+1]=r.y,R[z+O+2]=r.z,R[z+O+3]=0),v===!0&&(r.fromBufferAttribute(B,V),R[z+O+4]=r.x,R[z+O+5]=r.y,R[z+O+6]=r.z,R[z+O+7]=0),p===!0&&(r.fromBufferAttribute(X,V),R[z+O+8]=r.x,R[z+O+9]=r.y,R[z+O+10]=r.z,R[z+O+11]=X.itemSize===4?r.w:1)}}h={count:u,texture:x,size:new Ke(A,T)},i.set(o,h),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function qg(n,e,t,i,r){let s=new WeakMap;function a(l){const d=r.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return h}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const $g={[rd]:"LINEAR_TONE_MAPPING",[sd]:"REINHARD_TONE_MAPPING",[ad]:"CINEON_TONE_MAPPING",[od]:"ACES_FILMIC_TONE_MAPPING",[ld]:"AGX_TONE_MAPPING",[hd]:"NEUTRAL_TONE_MAPPING",[cd]:"CUSTOM_TONE_MAPPING"};function jg(n,e,t,i,r){const s=new Gn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Gn(e,t,{type:ci,depthBuffer:!1,stencilBuffer:!1}),o=new jt;o.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const c=new Gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Dt(o,c),d=new bs(-1,1,1,-1,0,1);let u=null,h=null,m=!1,g,v=null,p=[],f=!1;this.setSize=function(b,S){s.setSize(b,S),a.setSize(b,S);for(let E=0;E<p.length;E++){const A=p[E];A.setSize&&A.setSize(b,S)}},this.setEffects=function(b){p=b,f=p.length>0&&p[0].isRenderPass===!0;const S=s.width,E=s.height;for(let A=0;A<p.length;A++){const T=p[A];T.setSize&&T.setSize(S,E)}},this.begin=function(b,S){if(m||b.toneMapping===zn&&p.length===0)return!1;if(v=S,S!==null){const E=S.width,A=S.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return f===!1&&b.setRenderTarget(s),g=b.toneMapping,b.toneMapping=zn,!0},this.hasRenderPass=function(){return f},this.end=function(b,S){b.toneMapping=g,m=!0;let E=s,A=a;for(let T=0;T<p.length;T++){const R=p[T];if(R.enabled!==!1&&(R.render(b,A,E,S),R.needsSwap!==!1)){const x=E;E=A,A=x}}if(u!==b.outputColorSpace||h!==b.toneMapping){u=b.outputColorSpace,h=b.toneMapping,c.defines={},$e.getTransfer(u)===at&&(c.defines.SRGB_TRANSFER="");const T=$g[h];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(v),b.render(l,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Od=new an,Lc=new us(1,1),kd=new bd,Bd=new vf,zd=new Rd,ph=[],mh=[],gh=new Float32Array(16),_h=new Float32Array(9),xh=new Float32Array(4);function zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ph[r];if(s===void 0&&(s=new Float32Array(r),ph[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=mh[e];t===void 0&&(t=new Int32Array(e),mh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function e0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;xh.set(i),n.uniformMatrix2fv(this.addr,!1,xh),zt(t,i)}}function t0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;_h.set(i),n.uniformMatrix3fv(this.addr,!1,_h),zt(t,i)}}function n0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;gh.set(i),n.uniformMatrix4fv(this.addr,!1,gh),zt(t,i)}}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function o0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function l0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function d0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Lc.compareFunction=t.isReversedDepthBuffer()?jc:$c,s=Lc):s=Od,t.setTexture2D(e||s,r)}function u0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bd,r)}function f0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zd,r)}function p0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kd,r)}function m0(n){switch(n){case 5126:return Kg;case 35664:return Zg;case 35665:return Jg;case 35666:return Qg;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return r0;case 35668:case 35672:return s0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return c0;case 36295:return l0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(n,e){n.uniform1fv(this.addr,e)}function _0(n,e){const t=zr(e,this.size,2);n.uniform2fv(this.addr,t)}function x0(n,e){const t=zr(e,this.size,3);n.uniform3fv(this.addr,t)}function v0(n,e){const t=zr(e,this.size,4);n.uniform4fv(this.addr,t)}function y0(n,e){const t=zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function b0(n,e){const t=zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M0(n,e){const t=zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function S0(n,e){n.uniform1iv(this.addr,e)}function E0(n,e){n.uniform2iv(this.addr,e)}function w0(n,e){n.uniform3iv(this.addr,e)}function A0(n,e){n.uniform4iv(this.addr,e)}function T0(n,e){n.uniform1uiv(this.addr,e)}function R0(n,e){n.uniform2uiv(this.addr,e)}function C0(n,e){n.uniform3uiv(this.addr,e)}function I0(n,e){n.uniform4uiv(this.addr,e)}function P0(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Lc:a=Od;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function L0(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bd,s[a])}function D0(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||zd,s[a])}function U0(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||kd,s[a])}function N0(n){switch(n){case 5126:return g0;case 35664:return _0;case 35665:return x0;case 35666:return v0;case 35674:return y0;case 35675:return b0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return A0;case 5125:return T0;case 36294:return R0;case 36295:return C0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return U0}}class F0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=m0(t.type)}}class O0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}}class k0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function vh(n,e){n.seq.push(e),n.map[e.id]=e}function B0(n,e,t){const i=n.name,r=i.length;for(wo.lastIndex=0;;){const s=wo.exec(i),a=wo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){vh(t,l===void 0?new F0(o,n,e):new O0(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new k0(o),vh(t,u)),t=u}}}class na{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);B0(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function yh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const z0=37297;let G0=0;function V0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const bh=new Ne;function H0(n){$e._getMatrix(bh,$e.workingColorSpace,n);const e=`mat3( ${bh.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+V0(n.getShaderSource(e),o)}else return s}function W0(n,e){const t=H0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const X0={[rd]:"Linear",[sd]:"Reinhard",[ad]:"Cineon",[od]:"ACESFilmic",[ld]:"AgX",[hd]:"Neutral",[cd]:"Custom"};function Y0(n,e){const t=X0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new F;function q0(){$e.getLuminanceCoefficients(js);const n=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function j0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function K0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ts(n){return n!==""}function Sh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(Z0,Q0)}const J0=new Map;function Q0(n,e){let t=Oe[e];if(t===void 0){const i=J0.get(e);if(i!==void 0)t=Oe[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(n){return n.replace(e_,t_)}function t_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ah(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const n_={[rs]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function i_(n){return n_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r_={[Ki]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function s_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":r_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const a_={[Tr]:"ENVMAP_MODE_REFRACTION"};function o_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":a_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c_={[id]:"ENVMAP_BLENDING_MULTIPLY",[Zu]:"ENVMAP_BLENDING_MIX",[Ju]:"ENVMAP_BLENDING_ADD"};function l_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":c_[n.combine]||"ENVMAP_BLENDING_NONE"}function h_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function d_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=i_(t),l=s_(t),d=o_(t),u=l_(t),h=h_(t),m=$0(t),g=j0(s),v=r.createProgram();let p,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ts).join(`
`),f.length>0&&(f+=`
`)):(p=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),f=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==zn?Y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,W0("linearToOutputTexel",t.outputColorSpace),q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),a=Dc(a),a=Sh(a,t),a=Eh(a,t),o=Dc(o),o=Sh(o,t),o=Eh(o,t),a=wh(a),o=wh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+p+a,E=b+f+o,A=yh(r,r.VERTEX_SHADER,S),T=yh(r,r.FRAGMENT_SHADER,E);r.attachShader(v,A),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(C){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(A)||"",X=r.getShaderInfoLog(T)||"",z=N.trim(),V=B.trim(),O=X.trim();let ee=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,T);else{const he=Mh(r,A,"vertex"),ge=Mh(r,T,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+he+`
`+ge)}else z!==""?Pe("WebGLProgram: Program Info Log:",z):(V===""||O==="")&&(Z=!1);Z&&(C.diagnostics={runnable:ee,programLog:z,vertexShader:{log:V,prefix:p},fragmentShader:{log:O,prefix:f}})}r.deleteShader(A),r.deleteShader(T),x=new na(r,v),M=K0(r,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(v,z0)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let u_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new p_(e),t.set(e,i)),i}}class p_{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}}function m_(n,e,t,i,r,s){const a=new Md,o=new f_,c=new Set,l=[],d=new Map,u=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,M,H,C,N){const B=C.fog,X=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||z,V),ee=O&&O.mapping===Aa?O.image.height:null,Z=m[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=he!==void 0?he.length:0;let ue=0;X.morphAttributes.position!==void 0&&(ue=1),X.morphAttributes.normal!==void 0&&(ue=2),X.morphAttributes.color!==void 0&&(ue=3);let Fe,xt,_t,j;if(Z){const st=Un[Z];Fe=st.vertexShader,xt=st.fragmentShader}else Fe=x.vertexShader,xt=x.fragmentShader,o.update(x),_t=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const ie=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Ie=!!x.map,Gt=!!x.matcap,Ye=!!O,rt=!!x.aoMap,ht=!!x.lightMap,ke=!!x.bumpMap,Ct=!!x.normalMap,P=!!x.displacementMap,Ut=!!x.emissiveMap,nt=!!x.metalnessMap,ft=!!x.roughnessMap,Me=x.anisotropy>0,w=x.clearcoat>0,_=x.dispersion>0,D=x.iridescence>0,$=x.sheen>0,K=x.transmission>0,q=Me&&!!x.anisotropyMap,_e=w&&!!x.clearcoatMap,re=w&&!!x.clearcoatNormalMap,Te=w&&!!x.clearcoatRoughnessMap,Ce=D&&!!x.iridescenceMap,J=D&&!!x.iridescenceThicknessMap,te=$&&!!x.sheenColorMap,xe=$&&!!x.sheenRoughnessMap,ye=!!x.specularMap,de=!!x.specularColorMap,Be=!!x.specularIntensityMap,L=K&&!!x.transmissionMap,se=K&&!!x.thicknessMap,ne=!!x.gradientMap,pe=!!x.alphaMap,Q=x.alphaTest>0,Y=!!x.alphaHash,ve=!!x.extensions;let Le=zn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=n.toneMapping);const pt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:xt,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Cr,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:Gt,envMap:Ye,envMapMode:Ye&&O.mapping,envMapCubeUVHeight:ee,aoMap:rt,lightMap:ht,bumpMap:ke,normalMap:Ct,displacementMap:P,emissiveMap:Ut,normalMapObjectSpace:Ct&&x.normalMapType===tf,normalMapTangentSpace:Ct&&x.normalMapType===vd,metalnessMap:nt,roughnessMap:ft,anisotropy:Me,anisotropyMap:q,clearcoat:w,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Te,dispersion:_,iridescence:D,iridescenceMap:Ce,iridescenceThicknessMap:J,sheen:$,sheenColorMap:te,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:de,specularIntensityMap:Be,transmission:K,transmissionMap:L,thicknessMap:se,gradientMap:ne,opaque:x.transparent===!1&&x.blending===Sr&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:Y,combine:x.combine,mapUv:Ie&&g(x.map.channel),aoMapUv:rt&&g(x.aoMap.channel),lightMapUv:ht&&g(x.lightMap.channel),bumpMapUv:ke&&g(x.bumpMap.channel),normalMapUv:Ct&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:Ut&&g(x.emissiveMap.channel),metalnessMapUv:nt&&g(x.metalnessMap.channel),roughnessMapUv:ft&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(x.sheenRoughnessMap.channel),specularMapUv:ye&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:Be&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:se&&g(x.thicknessMap.channel),alphaMapUv:pe&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ct||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(Ie||pe),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&Ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:Ut&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)M.push(H),M.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(f(M,x),b(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function f(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){const M=m[x.type];let H;if(M){const C=Un[M];H=kf.clone(C.uniforms)}else H=x.uniforms;return H}function E(x,M){let H=d.get(M);return H!==void 0?++H.usedTimes:(H=new d_(n,M,x,r),l.push(H),d.set(M,H)),H}function A(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:R}}function g_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function __(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Th(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,g,v,p,f){let b=n[e];return b===void 0?(b={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:f},n[e]=b):(b.id=h.id,b.object=h,b.geometry=m,b.material=g,b.materialVariant=a(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=p,b.group=f),e++,b}function c(h,m,g,v,p,f){const b=o(h,m,g,v,p,f);g.transmission>0?i.push(b):g.transparent===!0?r.push(b):t.push(b)}function l(h,m,g,v,p,f){const b=o(h,m,g,v,p,f);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function d(h,m){t.length>1&&t.sort(h||__),i.length>1&&i.sort(m||Th),r.length>1&&r.sort(m||Th)}function u(){for(let h=e,m=n.length;h<m;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:u,sort:d}}function x_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Rh,n.set(i,[a])):r>=s.length?(a=new Rh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function v_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Xe};break;case"SpotLight":t={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function y_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b_=0;function M_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function S_(n){const e=new v_,t=y_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,s=new Et,a=new Et;function o(l){let d=0,u=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,b=0,S=0,E=0,A=0,T=0,R=0;l.sort(M_);for(let M=0,H=l.length;M<H;M++){const C=l[M],N=C.color,B=C.intensity,X=C.distance;let z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Rr?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=N.r*B,u+=N.g*B,h+=N.b*B;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],B);R++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,ee=t.get(C);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=V,m++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(N).multiplyScalar(B),V.distance=X,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[v]=V;const O=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,O.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=O.matrix,C.castShadow){const ee=t.get(C);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=z,E++}v++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(N).multiplyScalar(B),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=V,p++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const O=C.shadow,ee=t.get(C);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,ee.shadowCameraNear=O.camera.near,ee.shadowCameraFar=O.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=C.shadow.matrix,S++}i.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(B),V.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[f]=V,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==f||x.numDirectionalShadows!==b||x.numPointShadows!==S||x.numSpotShadows!==E||x.numSpotMaps!==A||x.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,x.directionalLength=m,x.pointLength=g,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=f,x.numDirectionalShadows=b,x.numPointShadows=S,x.numSpotShadows=E,x.numSpotMaps=A,x.numLightProbes=R,i.version=b_++)}function c(l,d){let u=0,h=0,m=0,g=0,v=0;const p=d.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const S=l[f];if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(S.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:i}}function Ch(n){const e=new S_(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function E_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ch(n),e.set(r,[o])):s>=a.length?(o=new Ch(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`,T_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],R_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ih=new Et,Zr=new F,Ao=new F;function C_(n,e,t){let i=new Jc;const r=new Ke,s=new Ke,a=new Rt,o=new Vf,c=new Hf,l={},d=t.maxTextureSize,u={[Ci]:cn,[cn]:Ci,[ii]:ii},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:w_,fragmentShader:A_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let f=this.type;this.render=function(T,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Lu&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=rs);const M=n.getRenderTarget(),H=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(si),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==this.type;B&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(z=>z.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,z=T.length;X<z;X++){const V=T[X],O=V.shadow;if(O===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ee=O.getFrameExtents();r.multiply(ee),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ee.x),r.x=s.x*ee.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ee.y),r.y=s.y*ee.y,O.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Z,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===es){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Gn(r.x,r.y,{format:Rr,type:ci,minFilter:nn,magFilter:nn,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new us(r.x,r.y,kn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=li,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t}else V.isPointLight?(O.map=new Fd(r.x),O.map.depthTexture=new Ff(r.x,Hn)):(O.map=new Gn(r.x,r.y),O.map.depthTexture=new us(r.x,r.y,Hn)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=li,this.type===rs?(O.map.depthTexture.compareFunction=Z?jc:$c,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t);O.camera.updateProjectionMatrix()}const he=O.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<he;ge++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(O.map),n.clear());const ue=O.getViewport(ge);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),N.viewport(a)}if(V.isPointLight){const ue=O.camera,Fe=O.matrix,xt=V.distance||ue.far;xt!==ue.far&&(ue.far=xt,ue.updateProjectionMatrix()),Zr.setFromMatrixPosition(V.matrixWorld),ue.position.copy(Zr),Ao.copy(ue.position),Ao.add(T_[ge]),ue.up.copy(R_[ge]),ue.lookAt(Ao),ue.updateMatrixWorld(),Fe.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Ih.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ih,ue.coordinateSystem,ue.reversedDepth)}else O.updateMatrices(V);i=O.getFrustum(),E(R,x,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===es&&b(O,x),O.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(M,H,C)};function b(T,R){const x=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gn(r.x,r.y,{format:Rr,type:ci})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,x,h,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,x,m,v,null)}function S(T,R,x,M){let H=null;const C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)H=C;else if(H=x.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=H.uuid,B=R.uuid;let X=l[N];X===void 0&&(X={},l[N]=X);let z=X[B];z===void 0&&(z=H.clone(),X[B]=z,R.addEventListener("dispose",A)),H=z}if(H.visible=R.visible,H.wireframe=R.wireframe,M===es?H.side=R.shadowSide!==null?R.shadowSide:R.side:H.side=R.shadowSide!==null?R.shadowSide:u[R.side],H.alphaMap=R.alphaMap,H.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,H.map=R.map,H.clipShadows=R.clipShadows,H.clippingPlanes=R.clippingPlanes,H.clipIntersection=R.clipIntersection,H.displacementMap=R.displacementMap,H.displacementScale=R.displacementScale,H.displacementBias=R.displacementBias,H.wireframeLinewidth=R.wireframeLinewidth,H.linewidth=R.linewidth,x.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const N=n.properties.get(H);N.light=x}return H}function E(T,R,x,M,H){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&H===es)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const B=e.update(T),X=T.material;if(Array.isArray(X)){const z=B.groups;for(let V=0,O=z.length;V<O;V++){const ee=z[V],Z=X[ee.materialIndex];if(Z&&Z.visible){const he=S(T,Z,M,H);T.onBeforeShadow(n,T,R,x,B,he,ee),n.renderBufferDirect(x,null,B,he,T,ee),T.onAfterShadow(n,T,R,x,B,he,ee)}}}else if(X.visible){const z=S(T,X,M,H);T.onBeforeShadow(n,T,R,x,B,z,null),n.renderBufferDirect(x,null,B,z,T,null),T.onAfterShadow(n,T,R,x,B,z,null)}}const N=T.children;for(let B=0,X=N.length;B<X;B++)E(N[B],R,x,M,H)}function A(T){T.target.removeEventListener("dispose",A);for(const x in l){const M=l[x],H=T.target.uuid;H in M&&(M[H].dispose(),delete M[H])}}}function I_(n,e){function t(){let L=!1;const se=new Rt;let ne=null;const pe=new Rt(0,0,0,0);return{setMask:function(Q){ne!==Q&&!L&&(n.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){L=Q},setClear:function(Q,Y,ve,Le,pt){pt===!0&&(Q*=Le,Y*=Le,ve*=Le),se.set(Q,Y,ve,Le),pe.equals(se)===!1&&(n.clearColor(Q,Y,ve,Le),pe.copy(se))},reset:function(){L=!1,ne=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,ne=null,pe=null,Q=null;return{setReversed:function(Y){if(se!==Y){const ve=e.get("EXT_clip_control");Y?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),se=Y;const Le=Q;Q=null,this.setClear(Le)}},getReversed:function(){return se},setTest:function(Y){Y?ie(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Y){ne!==Y&&!L&&(n.depthMask(Y),ne=Y)},setFunc:function(Y){if(se&&(Y=uf[Y]),pe!==Y){switch(Y){case Ho:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case Xo:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case Yo:n.depthFunc(n.EQUAL);break;case qo:n.depthFunc(n.GEQUAL);break;case $o:n.depthFunc(n.GREATER);break;case jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Y}},setLocked:function(Y){L=Y},setClear:function(Y){Q!==Y&&(Q=Y,se&&(Y=1-Y),n.clearDepth(Y))},reset:function(){L=!1,ne=null,pe=null,Q=null,se=!1}}}function r(){let L=!1,se=null,ne=null,pe=null,Q=null,Y=null,ve=null,Le=null,pt=null;return{setTest:function(st){L||(st?ie(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(st){se!==st&&!L&&(n.stencilMask(st),se=st)},setFunc:function(st,qn,$n){(ne!==st||pe!==qn||Q!==$n)&&(n.stencilFunc(st,qn,$n),ne=st,pe=qn,Q=$n)},setOp:function(st,qn,$n){(Y!==st||ve!==qn||Le!==$n)&&(n.stencilOp(st,qn,$n),Y=st,ve=qn,Le=$n)},setLocked:function(st){L=st},setClear:function(st){pt!==st&&(n.clearStencil(st),pt=st)},reset:function(){L=!1,se=null,ne=null,pe=null,Q=null,Y=null,ve=null,Le=null,pt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,m=[],g=null,v=!1,p=null,f=null,b=null,S=null,E=null,A=null,T=null,R=new Xe(0,0,0),x=0,M=!1,H=null,C=null,N=null,B=null,X=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ee)[1]),V=O>=1):ee.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),V=O>=2);let Z=null,he={};const ge=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Fe=new Rt().fromArray(ge),xt=new Rt().fromArray(ue);function _t(L,se,ne,pe){const Q=new Uint8Array(4),Y=n.createTexture();n.bindTexture(L,Y),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<ne;ve++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(se+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return Y}const j={};j[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Ar),ke(!1),Ct(Ll),ie(n.CULL_FACE),rt(si);function ie(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function ae(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Ue(L,se){return u[L]!==se?(n.bindFramebuffer(L,se),u[L]=se,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(L,se){let ne=m,pe=!1;if(L){ne=h.get(se),ne===void 0&&(ne=[],h.set(se,ne));const Q=L.textures;if(ne.length!==Q.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,ve=Q.length;Y<ve;Y++)ne[Y]=n.COLOR_ATTACHMENT0+Y;ne.length=Q.length,pe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ne)}function Ie(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Gt={[Hi]:n.FUNC_ADD,[Uu]:n.FUNC_SUBTRACT,[Nu]:n.FUNC_REVERSE_SUBTRACT};Gt[Fu]=n.MIN,Gt[Ou]=n.MAX;const Ye={[ku]:n.ZERO,[Bu]:n.ONE,[zu]:n.SRC_COLOR,[Go]:n.SRC_ALPHA,[Yu]:n.SRC_ALPHA_SATURATE,[Wu]:n.DST_COLOR,[Vu]:n.DST_ALPHA,[Gu]:n.ONE_MINUS_SRC_COLOR,[Vo]:n.ONE_MINUS_SRC_ALPHA,[Xu]:n.ONE_MINUS_DST_COLOR,[Hu]:n.ONE_MINUS_DST_ALPHA,[qu]:n.CONSTANT_COLOR,[$u]:n.ONE_MINUS_CONSTANT_COLOR,[ju]:n.CONSTANT_ALPHA,[Ku]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(L,se,ne,pe,Q,Y,ve,Le,pt,st){if(L===si){v===!0&&(ae(n.BLEND),v=!1);return}if(v===!1&&(ie(n.BLEND),v=!0),L!==Du){if(L!==p||st!==M){if((f!==Hi||E!==Hi)&&(n.blendEquation(n.FUNC_ADD),f=Hi,E=Hi),st)switch(L){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFunc(n.ONE,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",L);break}else switch(L){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ul:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",L);break}b=null,S=null,A=null,T=null,R.set(0,0,0),x=0,p=L,M=st}return}Q=Q||se,Y=Y||ne,ve=ve||pe,(se!==f||Q!==E)&&(n.blendEquationSeparate(Gt[se],Gt[Q]),f=se,E=Q),(ne!==b||pe!==S||Y!==A||ve!==T)&&(n.blendFuncSeparate(Ye[ne],Ye[pe],Ye[Y],Ye[ve]),b=ne,S=pe,A=Y,T=ve),(Le.equals(R)===!1||pt!==x)&&(n.blendColor(Le.r,Le.g,Le.b,pt),R.copy(Le),x=pt),p=L,M=!1}function ht(L,se){L.side===ii?ae(n.CULL_FACE):ie(n.CULL_FACE);let ne=L.side===cn;se&&(ne=!ne),ke(ne),L.blending===Sr&&L.transparent===!1?rt(si):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){H!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),H=L)}function Ct(L){L!==Iu?(ie(n.CULL_FACE),L!==C&&(L===Ll?n.cullFace(n.BACK):L===Pu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),C=L}function P(L){L!==N&&(V&&n.lineWidth(L),N=L)}function Ut(L,se,ne){L?(ie(n.POLYGON_OFFSET_FILL),(B!==se||X!==ne)&&(B=se,X=ne,a.getReversed()&&(se=-se),n.polygonOffset(se,ne))):ae(n.POLYGON_OFFSET_FILL)}function nt(L){L?ie(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function ft(L){L===void 0&&(L=n.TEXTURE0+z-1),Z!==L&&(n.activeTexture(L),Z=L)}function Me(L,se,ne){ne===void 0&&(Z===null?ne=n.TEXTURE0+z-1:ne=Z);let pe=he[ne];pe===void 0&&(pe={type:void 0,texture:void 0},he[ne]=pe),(pe.type!==L||pe.texture!==se)&&(Z!==ne&&(n.activeTexture(ne),Z=ne),n.bindTexture(L,se||j[L]),pe.type=L,pe.texture=se)}function w(){const L=he[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function $(){try{n.texSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function K(){try{n.texSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Te(){try{n.texStorage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Ce(){try{n.texImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function J(){try{n.texImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function te(L){Fe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function xe(L){xt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),xt.copy(L))}function ye(L,se){let ne=l.get(se);ne===void 0&&(ne=new WeakMap,l.set(se,ne));let pe=ne.get(L);pe===void 0&&(pe=n.getUniformBlockIndex(se,L.name),ne.set(L,pe))}function de(L,se){const pe=l.get(se).get(L);c.get(se)!==pe&&(n.uniformBlockBinding(se,pe,L.__bindingPointIndex),c.set(se,pe))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Z=null,he={},u={},h=new WeakMap,m=[],g=null,v=!1,p=null,f=null,b=null,S=null,E=null,A=null,T=null,R=new Xe(0,0,0),x=0,M=!1,H=null,C=null,N=null,B=null,X=null,Fe.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Ie,setBlending:rt,setMaterial:ht,setFlipSided:ke,setCullFace:Ct,setLineWidth:P,setPolygonOffset:Ut,setScissorTest:nt,activeTexture:ft,bindTexture:Me,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ce,texImage3D:J,updateUBOMapping:ye,uniformBlockBinding:de,texStorage2D:re,texStorage3D:Te,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:_e,scissor:te,viewport:xe,reset:Be}}function P_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,d=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return m?new OffscreenCanvas(w,_):ha("canvas")}function v(w,_,D){let $=1;const K=Me(w);if((K.width>D||K.height>D)&&($=D/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor($*K.width),_e=Math.floor($*K.height);u===void 0&&(u=g(q,_e));const re=_?g(q,_e):u;return re.width=q,re.height=_e,re.getContext("2d").drawImage(w,0,0,q,_e),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+_e+")."),re}else return"data"in w&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function p(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(w,_,D,$,K=!1){if(w!==null){if(n[w]!==void 0)return n[w];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=_;if(_===n.RED&&(D===n.FLOAT&&(q=n.R32F),D===n.HALF_FLOAT&&(q=n.R16F),D===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.R8UI),D===n.UNSIGNED_SHORT&&(q=n.R16UI),D===n.UNSIGNED_INT&&(q=n.R32UI),D===n.BYTE&&(q=n.R8I),D===n.SHORT&&(q=n.R16I),D===n.INT&&(q=n.R32I)),_===n.RG&&(D===n.FLOAT&&(q=n.RG32F),D===n.HALF_FLOAT&&(q=n.RG16F),D===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RG8UI),D===n.UNSIGNED_SHORT&&(q=n.RG16UI),D===n.UNSIGNED_INT&&(q=n.RG32UI),D===n.BYTE&&(q=n.RG8I),D===n.SHORT&&(q=n.RG16I),D===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RGB8UI),D===n.UNSIGNED_SHORT&&(q=n.RGB16UI),D===n.UNSIGNED_INT&&(q=n.RGB32UI),D===n.BYTE&&(q=n.RGB8I),D===n.SHORT&&(q=n.RGB16I),D===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),D===n.UNSIGNED_INT&&(q=n.RGBA32UI),D===n.BYTE&&(q=n.RGBA8I),D===n.SHORT&&(q=n.RGBA16I),D===n.INT&&(q=n.RGBA32I)),_===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),_===n.RGBA){const _e=K?la:$e.getTransfer($);D===n.FLOAT&&(q=n.RGBA32F),D===n.HALF_FLOAT&&(q=n.RGBA16F),D===n.UNSIGNED_BYTE&&(q=_e===at?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(w,_){let D;return w?_===null||_===Hn||_===hs?D=n.DEPTH24_STENCIL8:_===kn?D=n.DEPTH32F_STENCIL8:_===ls&&(D=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Hn||_===hs?D=n.DEPTH_COMPONENT24:_===kn?D=n.DEPTH_COMPONENT32F:_===ls&&(D=n.DEPTH_COMPONENT16),D}function A(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==$t&&w.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){const _=w.target;_.removeEventListener("dispose",T),x(_),_.isVideoTexture&&d.delete(_)}function R(w){const _=w.target;_.removeEventListener("dispose",R),H(_)}function x(w){const _=i.get(w);if(_.__webglInit===void 0)return;const D=w.source,$=h.get(D);if($){const K=$[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(w),Object.keys($).length===0&&h.delete(D)}i.remove(w)}function M(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const D=w.source,$=h.get(D);delete $[_.__cacheKey],a.memory.textures--}function H(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let K=0;K<_.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[$][K]);else n.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)n.deleteFramebuffer(_.__webglFramebuffer[$]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=w.textures;for(let $=0,K=D.length;$<K;$++){const q=i.get(D[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(D[$])}i.remove(w)}let C=0;function N(){C=0}function B(){const w=C;return w>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function X(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function z(w,_){const D=i.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&D.__version!==w.version){const $=w.image;if($===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{j(D,w,_);return}}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function V(w,_){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){j(D,w,_);return}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function O(w,_){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){j(D,w,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function ee(w,_){const D=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&D.__version!==w.version){ie(D,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const Z={[Ko]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},he={[$t]:n.NEAREST,[Qu]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},ge={[nf]:n.NEVER,[cf]:n.ALWAYS,[rf]:n.LESS,[$c]:n.LEQUAL,[sf]:n.EQUAL,[jc]:n.GEQUAL,[af]:n.GREATER,[of]:n.NOTEQUAL};function ue(w,_){if(_.type===kn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===qa||_.magFilter===As||_.magFilter===Xi||_.minFilter===nn||_.minFilter===qa||_.minFilter===As||_.minFilter===Xi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Z[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Z[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Z[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,he[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==As&&_.minFilter!==Xi||_.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(w,_){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",T));const $=_.source;let K=h.get($);K===void 0&&(K={},h.set($,K));const q=X(_);if(q!==w.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[q].usedTimes++;const _e=K[w.__cacheKey];_e!==void 0&&(K[w.__cacheKey].usedTimes--,_e.usedTimes===0&&M(_)),w.__cacheKey=q,w.__webglTexture=K[q].texture}return D}function xt(w,_,D){return Math.floor(Math.floor(w/D)/_)}function _t(w,_,D,$){const q=w.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,D,$,_.data);else{q.sort((J,te)=>J.start-te.start);let _e=0;for(let J=1;J<q.length;J++){const te=q[_e],xe=q[J],ye=te.start+te.count,de=xt(xe.start,_.width,4),Be=xt(te.start,_.width,4);xe.start<=ye+1&&de===Be&&xt(xe.start+xe.count-1,_.width,4)===de?te.count=Math.max(te.count,xe.start+xe.count-te.start):(++_e,q[_e]=xe)}q.length=_e+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let J=0,te=q.length;J<te;J++){const xe=q[J],ye=Math.floor(xe.start/4),de=Math.ceil(xe.count/4),Be=ye%_.width,L=Math.floor(ye/_.width),se=de,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Be,L,se,ne,D,$,_.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function j(w,_,D){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);const K=Fe(w,_),q=_.source;t.bindTexture($,w.__webglTexture,n.TEXTURE0+D);const _e=i.get(q);if(q.version!==_e.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const re=$e.getPrimaries($e.workingColorSpace),Te=_.colorSpace===Si?null:$e.getPrimaries(_.colorSpace),Ce=_.colorSpace===Si||re===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let J=v(_.image,!1,r.maxTextureSize);J=ft(_,J);const te=s.convert(_.format,_.colorSpace),xe=s.convert(_.type);let ye=S(_.internalFormat,te,xe,_.colorSpace,_.isVideoTexture);ue($,_);let de;const Be=_.mipmaps,L=_.isVideoTexture!==!0,se=_e.__version===void 0||K===!0,ne=q.dataReady,pe=A(_,J);if(_.isDepthTexture)ye=E(_.format===Yi,_.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,te,xe,null));else if(_.isDataTexture)if(Be.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,pe,ye,Be[0].width,Be[0].height);for(let Q=0,Y=Be.length;Q<Y;Q++)de=Be[Q],L?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,xe,de.data):t.texImage2D(n.TEXTURE_2D,Q,ye,de.width,de.height,0,te,xe,de.data);_.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,pe,ye,J.width,J.height),ne&&_t(_,J,te,xe)):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,te,xe,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ye,Be[0].width,Be[0].height,J.depth);for(let Q=0,Y=Be.length;Q<Y;Q++)if(de=Be[Q],_.format!==In)if(te!==null)if(L){if(ne)if(_.layerUpdates.size>0){const ve=oh(de.width,de.height,_.format,_.type);for(const Le of _.layerUpdates){const pt=de.data.subarray(Le*ve/de.data.BYTES_PER_ELEMENT,(Le+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Le,de.width,de.height,1,te,pt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,te,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ye,de.width,de.height,J.depth,0,de.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,te,xe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,ye,de.width,de.height,J.depth,0,te,xe,de.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,pe,ye,Be[0].width,Be[0].height);for(let Q=0,Y=Be.length;Q<Y;Q++)de=Be[Q],_.format!==In?te!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,ye,de.width,de.height,0,de.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,xe,de.data):t.texImage2D(n.TEXTURE_2D,Q,ye,de.width,de.height,0,te,xe,de.data)}else if(_.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ye,J.width,J.height,J.depth),ne)if(_.layerUpdates.size>0){const Q=oh(J.width,J.height,_.format,_.type);for(const Y of _.layerUpdates){const ve=J.data.subarray(Y*Q/J.data.BYTES_PER_ELEMENT,(Y+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,te,xe,ve)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,xe,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,te,xe,J.data);else if(_.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,pe,ye,J.width,J.height,J.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,xe,J.data)):t.texImage3D(n.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,te,xe,J.data);else if(_.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,pe,ye,J.width,J.height);else{let Q=J.width,Y=J.height;for(let ve=0;ve<pe;ve++)t.texImage2D(n.TEXTURE_2D,ve,ye,Q,Y,0,te,xe,null),Q>>=1,Y>>=1}}else if(Be.length>0){if(L&&se){const Q=Me(Be[0]);t.texStorage2D(n.TEXTURE_2D,pe,ye,Q.width,Q.height)}for(let Q=0,Y=Be.length;Q<Y;Q++)de=Be[Q],L?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,te,xe,de):t.texImage2D(n.TEXTURE_2D,Q,ye,te,xe,de);_.generateMipmaps=!1}else if(L){if(se){const Q=Me(J);t.texStorage2D(n.TEXTURE_2D,pe,ye,Q.width,Q.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,xe,J)}else t.texImage2D(n.TEXTURE_2D,0,ye,te,xe,J);p(_)&&f($),_e.__version=q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ie(w,_,D){if(_.image.length!==6)return;const $=Fe(w,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+D);const q=i.get(K);if(K.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+D);const _e=$e.getPrimaries($e.workingColorSpace),re=_.colorSpace===Si?null:$e.getPrimaries(_.colorSpace),Te=_.colorSpace===Si||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,te=[];for(let Y=0;Y<6;Y++)!Ce&&!J?te[Y]=v(_.image[Y],!0,r.maxCubemapSize):te[Y]=J?_.image[Y].image:_.image[Y],te[Y]=ft(_,te[Y]);const xe=te[0],ye=s.convert(_.format,_.colorSpace),de=s.convert(_.type),Be=S(_.internalFormat,ye,de,_.colorSpace),L=_.isVideoTexture!==!0,se=q.__version===void 0||$===!0,ne=K.dataReady;let pe=A(_,xe);ue(n.TEXTURE_CUBE_MAP,_);let Q;if(Ce){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Be,xe.width,xe.height);for(let Y=0;Y<6;Y++){Q=te[Y].mipmaps;for(let ve=0;ve<Q.length;ve++){const Le=Q[ve];_.format!==In?ye!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,Le.width,Le.height,ye,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Be,Le.width,Le.height,0,Le.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,Le.width,Le.height,ye,de,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Be,Le.width,Le.height,0,ye,de,Le.data)}}}else{if(Q=_.mipmaps,L&&se){Q.length>0&&pe++;const Y=Me(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,te[Y].width,te[Y].height,ye,de,te[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,te[Y].width,te[Y].height,0,ye,de,te[Y].data);for(let ve=0;ve<Q.length;ve++){const pt=Q[ve].image[Y].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,pt.width,pt.height,ye,de,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Be,pt.width,pt.height,0,ye,de,pt.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ye,de,te[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,ye,de,te[Y]);for(let ve=0;ve<Q.length;ve++){const Le=Q[ve];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,ye,de,Le.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Be,ye,de,Le.image[Y])}}}p(_)&&f(n.TEXTURE_CUBE_MAP),q.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ae(w,_,D,$,K,q){const _e=s.convert(D.format,D.colorSpace),re=s.convert(D.type),Te=S(D.internalFormat,_e,re,D.colorSpace),Ce=i.get(_),J=i.get(D);if(J.__renderTarget=_,!Ce.__hasExternalTextures){const te=Math.max(1,_.width>>q),xe=Math.max(1,_.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,q,Te,te,xe,_.depth,0,_e,re,null):t.texImage2D(K,q,Te,te,xe,0,_e,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ut(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,J.__webglTexture,0,P(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,J.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(w,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const $=_.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=E(_.stencilBuffer,K),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ut(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),q,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,w)}else{const $=_.textures;for(let K=0;K<$.length;K++){const q=$[K],_e=s.convert(q.format,q.colorSpace),re=s.convert(q.type),Te=S(q.internalFormat,_e,re,q.colorSpace);Ut(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Te,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Te,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(w,_,D){const $=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ce=s.convert(_.depthTexture.format),J=s.convert(_.depthTexture.type);let te;_.depthTexture.format===li?te=n.DEPTH_COMPONENT24:_.depthTexture.format===Yi&&(te=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,te,_.width,_.height,0,Ce,J,null)}}else z(_.depthTexture,0);const q=K.__webglTexture,_e=P(_),re=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Te=_.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===li)Ut(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,re,q,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Te,re,q,0);else if(_.depthTexture.format===Yi)Ut(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,re,q,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Te,re,q,0);else throw new Error("Unknown depthTexture format")}function Ie(w){const _=i.get(w),D=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=$}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let $=0;$<6;$++)Re(_.__webglFramebuffer[$],w,$);else{const $=w.texture.mipmaps;$&&$.length>0?Re(_.__webglFramebuffer[0],w,0):Re(_.__webglFramebuffer,w,0)}else if(D){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[$],w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else{const $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(w,_,D){const $=i.get(w);_!==void 0&&ae($.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ie(w)}function Ye(w){const _=w.texture,D=i.get(w),$=i.get(_);w.addEventListener("dispose",R);const K=w.textures,q=w.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,a.memory.textures++),q){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let Te=0;Te<_.mipmaps.length;Te++)D.__webglFramebuffer[re][Te]=n.createFramebuffer()}else D.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)D.__webglFramebuffer[re]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(_e)for(let re=0,Te=K.length;re<Te;re++){const Ce=i.get(K[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Ut(w)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const Te=K[re];D.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Ce=s.convert(Te.format,Te.colorSpace),J=s.convert(Te.type),te=S(Te.internalFormat,Ce,J,Te.colorSpace,w.isXRRenderTarget===!0),xe=P(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,te,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,D.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)ae(D.__webglFramebuffer[re][Te],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te);else ae(D.__webglFramebuffer[re],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,Te=K.length;re<Te;re++){const Ce=K[re],J=i.get(Ce);let te=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(te=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),ue(te,Ce),ae(D.__webglFramebuffer,w,Ce,n.COLOR_ATTACHMENT0+re,te,0),p(Ce)&&f(te)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),ue(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)ae(D.__webglFramebuffer[Te],w,_,n.COLOR_ATTACHMENT0,re,Te);else ae(D.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,re,0);p(_)&&f(re),t.unbindTexture()}w.depthBuffer&&Ie(w)}function rt(w){const _=w.textures;for(let D=0,$=_.length;D<$;D++){const K=_[D];if(p(K)){const q=b(w),_e=i.get(K).__webglTexture;t.bindTexture(q,_e),f(q),t.unbindTexture()}}}const ht=[],ke=[];function Ct(w){if(w.samples>0){if(Ut(w)===!1){const _=w.textures,D=w.width,$=w.height;let K=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(w),re=_.length>1;if(re)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Te=w.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);const J=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,D,$,0,0,D,$,K,n.NEAREST),c===!0&&(ht.length=0,ke.length=0,ht.push(n.COLOR_ATTACHMENT0+Ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ht.push(q),ke.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);const J=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(w){return Math.min(r.maxSamples,w.samples)}function Ut(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function nt(w){const _=a.render.frame;d.get(w)!==_&&(d.set(w,_),w.update())}function ft(w,_){const D=w.colorSpace,$=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Cr&&D!==Si&&($e.getTransfer(D)===at?($!==In||K!==mn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",D)),_}function Me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=ee,this.rebindTextures=Gt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function L_(n,e){function t(i,r=Si){let s;const a=$e.getTransfer(r);if(i===mn)return n.UNSIGNED_BYTE;if(i===Hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===md)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ud)return n.BYTE;if(i===fd)return n.SHORT;if(i===ls)return n.UNSIGNED_SHORT;if(i===Vc)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===gd)return n.ALPHA;if(i===_d)return n.RGB;if(i===In)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===xd)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===Rr)return n.RG;if(i===Yc)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===Js||i===Qs||i===ea||i===ta)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jo||i===Qo||i===ec||i===tc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===ic||i===rc||i===sc||i===ac||i===oc||i===cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nc||i===ic)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===sc)return s.COMPRESSED_R11_EAC;if(i===ac)return s.COMPRESSED_SIGNED_R11_EAC;if(i===oc)return s.COMPRESSED_RG11_EAC;if(i===cc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lc||i===hc||i===dc||i===uc||i===fc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc||i===yc||i===bc||i===Mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===Ec||i===wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sc)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ac||i===Tc||i===Rc||i===Cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Cd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xn({vertexShader:D_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F_ extends Or{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,h=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new N_,f={},b=t.getContextAttributes();let S=null,E=null;const A=[],T=[],R=new Ke;let x=null;const M=new Tn;M.viewport=new Rt;const H=new Tn;H.viewport=new Rt;const C=[M,H],N=new $f;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=A[j];return ie===void 0&&(ie=new to,A[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=A[j];return ie===void 0&&(ie=new to,A[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=A[j];return ie===void 0&&(ie=new to,A[j]=ie),ie.getHandSpace()};function z(j){const ie=T.indexOf(j.inputSource);if(ie===-1)return;const ae=A[ie];ae!==void 0&&(ae.update(j.inputSource,j.frame,l||a),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",O);for(let j=0;j<A.length;j++){const ie=T[j];ie!==null&&(T[j]=null,A[j].disconnect(ie))}B=null,X=null,p.reset();for(const j in f)delete f[j];e.setRenderTarget(S),m=null,h=null,u=null,r=null,E=null,_t.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",O),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ue=null,Re=null;b.depth&&(Re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=b.stencil?Yi:li,Ue=b.stencil?hs:Hn);const Ie={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Gn(h.textureWidth,h.textureHeight,{format:In,type:mn,depthTexture:new us(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Gn(m.framebufferWidth,m.framebufferHeight,{format:In,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),_t.setContext(r),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(j){for(let ie=0;ie<j.removed.length;ie++){const ae=j.removed[ie],Ue=T.indexOf(ae);Ue>=0&&(T[Ue]=null,A[Ue].disconnect(ae))}for(let ie=0;ie<j.added.length;ie++){const ae=j.added[ie];let Ue=T.indexOf(ae);if(Ue===-1){for(let Ie=0;Ie<A.length;Ie++)if(Ie>=T.length){T.push(ae),Ue=Ie;break}else if(T[Ie]===null){T[Ie]=ae,Ue=Ie;break}if(Ue===-1)break}const Re=A[Ue];Re&&Re.connect(ae)}}const ee=new F,Z=new F;function he(j,ie,ae){ee.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const Ue=ee.distanceTo(Z),Re=ie.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,Gt=Re[14]/(Re[10]-1),Ye=Re[14]/(Re[10]+1),rt=(Re[9]+1)/Re[5],ht=(Re[9]-1)/Re[5],ke=(Re[8]-1)/Re[0],Ct=(Ie[8]+1)/Ie[0],P=Gt*ke,Ut=Gt*Ct,nt=Ue/(-ke+Ct),ft=nt*-ke;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ft),j.translateZ(nt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=Gt+nt,w=Ye+nt,_=P-ft,D=Ut+(Ue-ft),$=rt*Ye/w*Me,K=ht*Ye/w*Me;j.projectionMatrix.makePerspective(_,D,$,K,Me,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ge(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,ae=j.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ae=p.depthFar)),N.near=H.near=M.near=ie,N.far=H.far=M.far=ae,(B!==N.near||X!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,X=N.far),N.layers.mask=j.layers.mask|6,M.layers.mask=N.layers.mask&-5,H.layers.mask=N.layers.mask&-3;const Ue=j.parent,Re=N.cameras;ge(N,Ue);for(let Ie=0;Ie<Re.length;Ie++)ge(Re[Ie],Ue);Re.length===2?he(N,M,H):N.projectionMatrix.copy(M.projectionMatrix),ue(j,N,Ue)};function ue(j,ie,ae){ae===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ic*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(j){return f[j]};let Fe=null;function xt(j,ie){if(d=ie.getViewerPose(l||a),g=ie,d!==null){const ae=d.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ue=!1;ae.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let Ye=0;Ye<ae.length;Ye++){const rt=ae[Ye];let ht=null;if(m!==null)ht=m.getViewport(rt);else{const Ct=u.getViewSubImage(h,rt);ht=Ct.viewport,Ye===0&&(e.setRenderTargetTextures(E,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(E))}let ke=C[Ye];ke===void 0&&(ke=new Tn,ke.layers.enable(Ye),ke.viewport=new Rt,C[Ye]=ke),ke.matrix.fromArray(rt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(rt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(ht.x,ht.y,ht.width,ht.height),Ye===0&&(N.matrix.copy(ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(ke)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const Ye=u.getDepthInformation(ae[0]);Ye&&Ye.isValid&&Ye.texture&&p.init(Ye,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Ye=0;Ye<ae.length;Ye++){const rt=ae[Ye].camera;if(rt){let ht=f[rt];ht||(ht=new Cd,f[rt]=ht);const ke=u.getCameraImage(rt);ht.sourceTexture=ke}}}}for(let ae=0;ae<A.length;ae++){const Ue=T[ae],Re=A[ae];Ue!==null&&Re!==void 0&&Re.update(Ue,ie,l||a)}Fe&&Fe(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const _t=new Nd;_t.setAnimationLoop(xt),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const zi=new Wn,O_=new Et;function k_(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Id(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,b,S,E){f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),d(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,b,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===cn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===cn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f),S=b.envMap,E=b.envMapRotation;S&&(p.envMap.value=S,zi.copy(E),zi.x*=-1,zi.y*=-1,zi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),p.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(zi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,b,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=S*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function B_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const E=S.program;i.uniformBlockBinding(b,E)}function l(b,S){let E=r[b.id];E===void 0&&(g(b),E=d(b),r[b.id]=E,b.addEventListener("dispose",p));const A=S.program;i.updateUBOMapping(b,A);const T=e.render.frame;s[b.id]!==T&&(h(b),s[b.id]=T)}function d(b){const S=u();b.__bindingPointIndex=S;const E=n.createBuffer(),A=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=r[b.id],E=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,R=E.length;T<R;T++){const x=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,H=x.length;M<H;M++){const C=x[M];if(m(C,T,M,A)===!0){const N=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let z=0;z<B.length;z++){const V=B[z],O=v(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,N+X,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,E,A){const T=b.value,R=S+"_"+E;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const x=A[R];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return A[R]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function g(b){const S=b.uniforms;let E=0;const A=16;for(let R=0,x=S.length;R<x;R++){const M=Array.isArray(S[R])?S[R]:[S[R]];for(let H=0,C=M.length;H<C;H++){const N=M[H],B=Array.isArray(N.value)?N.value:[N.value];for(let X=0,z=B.length;X<z;X++){const V=B[X],O=v(V),ee=E%A,Z=ee%O.boundary,he=ee+Z;E+=Z,he!==0&&A-he<O.storage&&(E+=A-he),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=O.storage}}}const T=E%A;return T>0&&(E+=A-T),b.__size=E,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function G_(){return Dn===null&&(Dn=new Lf(z_,16,16,Rr,ci),Dn.name="DFG_LUT",Dn.minFilter=nn,Dn.magFilter=nn,Dn.wrapS=ri,Dn.wrapT=ri,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class V_{constructor(e={}){const{canvas:t=hf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:m=mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=m,p=new Set([qc,Yc,Xc]),f=new Set([mn,Hn,ls,hs,Hc,Wc]),b=new Uint32Array(4),S=new Int32Array(4);let E=null,A=null;const T=[],R=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let H=!1;this._outputColorSpace=pn;let C=0,N=0,B=null,X=-1,z=null;const V=new Rt,O=new Rt;let ee=null;const Z=new Xe(0);let he=0,ge=t.width,ue=t.height,Fe=1,xt=null,_t=null;const j=new Rt(0,0,ge,ue),ie=new Rt(0,0,ge,ue);let ae=!1;const Ue=new Jc;let Re=!1,Ie=!1;const Gt=new Et,Ye=new F,rt=new Rt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Ct(){return B===null?Fe:1}let P=i;function Ut(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",pt,!1),P===null){const U="webgl2";if(P=Ut(U,y),P===null)throw Ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Qe("WebGLRenderer: "+y.message),y}let nt,ft,Me,w,_,D,$,K,q,_e,re,Te,Ce,J,te,xe,ye,de,Be,L,se,ne,pe;function Q(){nt=new Vg(P),nt.init(),se=new L_(P,nt),ft=new Ug(P,nt,e,se),Me=new I_(P,nt),ft.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),w=new Xg(P),_=new g_,D=new P_(P,nt,Me,_,ft,se,w),$=new Gg(M),K=new Kf(P),ne=new Lg(P,K),q=new Hg(P,K,w,ne),_e=new qg(P,q,K,ne,w),de=new Yg(P,ft,D),te=new Ng(_),re=new m_(M,$,nt,ft,ne,te),Te=new k_(M,_),Ce=new x_,J=new E_(nt),ye=new Pg(M,$,Me,_e,g,c),xe=new C_(M,_e,ft),pe=new B_(P,w,ft,Me),Be=new Dg(P,nt,w),L=new Wg(P,nt,w),w.programs=re.programs,M.capabilities=ft,M.extensions=nt,M.properties=_,M.renderLists=Ce,M.shadowMap=xe,M.state=Me,M.info=w}Q(),v!==mn&&(x=new jg(v,t.width,t.height,r,s));const Y=new F_(M,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(y){y!==void 0&&(Fe=y,this.setSize(ge,ue,!1))},this.getSize=function(y){return y.set(ge,ue)},this.setSize=function(y,U,W=!0){if(Y.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=y,ue=U,t.width=Math.floor(y*Fe),t.height=Math.floor(U*Fe),W===!0&&(t.style.width=y+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(ge*Fe,ue*Fe).floor()},this.setDrawingBufferSize=function(y,U,W){ge=y,ue=U,Fe=W,t.width=Math.floor(y*W),t.height=Math.floor(U*W),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(v===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,U,W,G){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,U,W,G),Me.viewport(V.copy(j).multiplyScalar(Fe).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,U,W,G){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,U,W,G),Me.scissor(O.copy(ie).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){Me.setScissorTest(ae=y)},this.setOpaqueSort=function(y){xt=y},this.setTransparentSort=function(y){_t=y},this.getClearColor=function(y){return y.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,W=!0){let G=0;if(y){let k=!1;if(B!==null){const ce=B.texture.format;k=p.has(ce)}if(k){const ce=B.texture.type,fe=f.has(ce),le=ye.getClearColor(),be=ye.getClearAlpha(),Ee=le.r,De=le.g,ze=le.b;fe?(b[0]=Ee,b[1]=De,b[2]=ze,b[3]=be,P.clearBufferuiv(P.COLOR,0,b)):(S[0]=Ee,S[1]=De,S[2]=ze,S[3]=be,P.clearBufferiv(P.COLOR,0,S))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT),W&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),ye.dispose(),Ce.dispose(),J.dispose(),_.dispose(),$.dispose(),_e.dispose(),ne.dispose(),pe.dispose(),re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",El),Y.removeEventListener("sessionend",wl),Di.stop()};function ve(y){y.preventDefault(),zl("WebGLRenderer: Context Lost."),H=!0}function Le(){zl("WebGLRenderer: Context Restored."),H=!1;const y=w.autoReset,U=xe.enabled,W=xe.autoUpdate,G=xe.needsUpdate,k=xe.type;Q(),w.autoReset=y,xe.enabled=U,xe.autoUpdate=W,xe.needsUpdate=G,xe.type=k}function pt(y){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function st(y){const U=y.target;U.removeEventListener("dispose",st),qn(U)}function qn(y){$n(y),_.remove(y)}function $n(y){const U=_.get(y).programs;U!==void 0&&(U.forEach(function(W){re.releaseProgram(W)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,W,G,k,ce){U===null&&(U=ht);const fe=k.isMesh&&k.matrixWorld.determinant()<0,le=Eu(y,U,W,G,k);Me.setMaterial(G,fe);let be=W.index,Ee=1;if(G.wireframe===!0){if(be=q.getWireframeAttribute(W),be===void 0)return;Ee=2}const De=W.drawRange,ze=W.attributes.position;let Ae=De.start*Ee,ot=(De.start+De.count)*Ee;ce!==null&&(Ae=Math.max(Ae,ce.start*Ee),ot=Math.min(ot,(ce.start+ce.count)*Ee)),be!==null?(Ae=Math.max(Ae,0),ot=Math.min(ot,be.count)):ze!=null&&(Ae=Math.max(Ae,0),ot=Math.min(ot,ze.count));const It=ot-Ae;if(It<0||It===1/0)return;ne.setup(k,G,le,W,be);let At,ct=Be;if(be!==null&&(At=K.get(be),ct=L,ct.setIndex(At)),k.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*Ct()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(k.isLine){let Kt=G.linewidth;Kt===void 0&&(Kt=1),Me.setLineWidth(Kt*Ct()),k.isLineSegments?ct.setMode(P.LINES):k.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else k.isPoints?ct.setMode(P.POINTS):k.isSprite&&ct.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)da("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Kt=k._multiDrawStarts,Se=k._multiDrawCounts,hn=k._multiDrawCount,Je=be?K.get(be).bytesPerElement:1,Mn=_.get(G).currentProgram.getUniforms();for(let Pn=0;Pn<hn;Pn++)Mn.setValue(P,"_gl_DrawID",Pn),ct.render(Kt[Pn]/Je,Se[Pn])}else if(k.isInstancedMesh)ct.renderInstances(Ae,It,k.count);else if(W.isInstancedBufferGeometry){const Kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Kt);ct.renderInstances(Ae,It,Se)}else ct.render(Ae,It)};function Sl(y,U,W){y.transparent===!0&&y.side===ii&&y.forceSinglePass===!1?(y.side=cn,y.needsUpdate=!0,ws(y,U,W),y.side=Ci,y.needsUpdate=!0,ws(y,U,W),y.side=ii):ws(y,U,W)}this.compile=function(y,U,W=null){W===null&&(W=y),A=J.get(W),A.init(U),R.push(A),W.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights();const G=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ce=k.material;if(ce)if(Array.isArray(ce))for(let fe=0;fe<ce.length;fe++){const le=ce[fe];Sl(le,W,k),G.add(le)}else Sl(ce,W,k),G.add(ce)}),A=R.pop(),G},this.compileAsync=function(y,U,W=null){const G=this.compile(y,U,W);return new Promise(k=>{function ce(){if(G.forEach(function(fe){_.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){k(y);return}setTimeout(ce,10)}nt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ha=null;function Su(y){Ha&&Ha(y)}function El(){Di.stop()}function wl(){Di.start()}const Di=new Nd;Di.setAnimationLoop(Su),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(y){Ha=y,Y.setAnimationLoop(y),y===null?Di.stop():Di.start()},Y.addEventListener("sessionstart",El),Y.addEventListener("sessionend",wl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,G=x!==null&&(B===null||W)&&x.begin(M,B);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,U,B),A=J.get(y,R.length),A.init(U),R.push(A),Gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(Gt,Bn,U.reversedDepth),Ie=this.localClippingEnabled,Re=te.init(this.clippingPlanes,Ie),E=Ce.get(y,T.length),E.init(),T.push(E),Y.enabled===!0&&Y.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&Wa(fe,U,-1/0,M.sortObjects)}Wa(y,U,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(xt,_t),ke=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ke&&ye.addToRenderList(E,y),this.info.render.frame++,Re===!0&&te.beginShadows();const k=A.state.shadowsArray;if(xe.render(k,y,U),Re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&x.hasRenderPass())===!1){const fe=E.opaque,le=E.transmissive;if(A.setupLights(),U.isArrayCamera){const be=U.cameras;if(le.length>0)for(let Ee=0,De=be.length;Ee<De;Ee++){const ze=be[Ee];Tl(fe,le,y,ze)}ke&&ye.render(y);for(let Ee=0,De=be.length;Ee<De;Ee++){const ze=be[Ee];Al(E,y,ze,ze.viewport)}}else le.length>0&&Tl(fe,le,y,U),ke&&ye.render(y),Al(E,y,U)}B!==null&&N===0&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),G&&x.end(M),y.isScene===!0&&y.onAfterRender(M,y,U),ne.resetDefaultState(),X=-1,z=null,R.pop(),R.length>0?(A=R[R.length-1],Re===!0&&te.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function Wa(y,U,W,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ue.intersectsSprite(y)){G&&rt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Gt);const fe=_e.update(y),le=y.material;le.visible&&E.push(y,fe,le,W,rt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ue.intersectsObject(y))){const fe=_e.update(y),le=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),rt.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),rt.copy(fe.boundingSphere.center)),rt.applyMatrix4(y.matrixWorld).applyMatrix4(Gt)),Array.isArray(le)){const be=fe.groups;for(let Ee=0,De=be.length;Ee<De;Ee++){const ze=be[Ee],Ae=le[ze.materialIndex];Ae&&Ae.visible&&E.push(y,fe,Ae,W,rt.z,ze)}}else le.visible&&E.push(y,fe,le,W,rt.z,null)}}const ce=y.children;for(let fe=0,le=ce.length;fe<le;fe++)Wa(ce[fe],U,W,G)}function Al(y,U,W,G){const{opaque:k,transmissive:ce,transparent:fe}=y;A.setupLightsView(W),Re===!0&&te.setGlobalState(M.clippingPlanes,W),G&&Me.viewport(V.copy(G)),k.length>0&&Es(k,U,W),ce.length>0&&Es(ce,U,W),fe.length>0&&Es(fe,U,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Tl(y,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const Ae=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new Gn(1,1,{generateMipmaps:!0,type:Ae?ci:mn,minFilter:Xi,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ce=A.state.transmissionRenderTarget[G.id],fe=G.viewport||V;ce.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);const le=M.getRenderTarget(),be=M.getActiveCubeFace(),Ee=M.getActiveMipmapLevel();M.setRenderTarget(ce),M.getClearColor(Z),he=M.getClearAlpha(),he<1&&M.setClearColor(16777215,.5),M.clear(),ke&&ye.render(W);const De=M.toneMapping;M.toneMapping=zn;const ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),Re===!0&&te.setGlobalState(M.clippingPlanes,G),Es(y,W,G),D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ot=0,It=U.length;ot<It;ot++){const At=U[ot],{object:ct,geometry:Kt,material:Se,group:hn}=At;if(Se.side===ii&&ct.layers.test(G.layers)){const Je=Se.side;Se.side=cn,Se.needsUpdate=!0,Rl(ct,W,G,Kt,Se,hn),Se.side=Je,Se.needsUpdate=!0,Ae=!0}}Ae===!0&&(D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce))}M.setRenderTarget(le,be,Ee),M.setClearColor(Z,he),ze!==void 0&&(G.viewport=ze),M.toneMapping=De}function Es(y,U,W){const G=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ce=y.length;k<ce;k++){const fe=y[k],{object:le,geometry:be,group:Ee}=fe;let De=fe.material;De.allowOverride===!0&&G!==null&&(De=G),le.layers.test(W.layers)&&Rl(le,U,W,be,De,Ee)}}function Rl(y,U,W,G,k,ce){y.onBeforeRender(M,U,W,G,k,ce),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(M,U,W,G,y,ce),k.transparent===!0&&k.side===ii&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,M.renderBufferDirect(W,U,G,k,y,ce),k.side=Ci,k.needsUpdate=!0,M.renderBufferDirect(W,U,G,k,y,ce),k.side=ii):M.renderBufferDirect(W,U,G,k,y,ce),y.onAfterRender(M,U,W,G,k,ce)}function ws(y,U,W){U.isScene!==!0&&(U=ht);const G=_.get(y),k=A.state.lights,ce=A.state.shadowsArray,fe=k.state.version,le=re.getParameters(y,k.state,ce,U,W),be=re.getProgramCacheKey(le);let Ee=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const De=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=$.get(y.envMap||G.environment,De),G.envMapRotation=G.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ee===void 0&&(y.addEventListener("dispose",st),Ee=new Map,G.programs=Ee);let ze=Ee.get(be);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===fe)return Il(y,le),ze}else le.uniforms=re.getUniforms(y),y.onBeforeCompile(le,M),ze=re.acquireProgram(le,be),Ee.set(be,ze),G.uniforms=le.uniforms;const Ae=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=te.uniform),Il(y,le),G.needsLights=Au(y),G.lightsStateVersion=fe,G.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Cl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=na.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Il(y,U){const W=_.get(y);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Eu(y,U,W,G,k){U.isScene!==!0&&(U=ht),D.resetTextureUnits();const ce=U.fog,fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,le=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Cr,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ee=$.get(G.envMap||fe,be),De=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,It=!!W.morphAttributes.color;let At=zn;G.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(At=M.toneMapping);const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=ct!==void 0?ct.length:0,Se=_.get(G),hn=A.state.lights;if(Re===!0&&(Ie===!0||y!==z)){const Vt=y===z&&G.id===X;te.setState(G,y,Vt)}let Je=!1;G.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==hn.state.version||Se.outputColorSpace!==le||k.isBatchedMesh&&Se.batching===!1||!k.isBatchedMesh&&Se.batching===!0||k.isBatchedMesh&&Se.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Se.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Se.instancing===!1||!k.isInstancedMesh&&Se.instancing===!0||k.isSkinnedMesh&&Se.skinning===!1||!k.isSkinnedMesh&&Se.skinning===!0||k.isInstancedMesh&&Se.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Se.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Se.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Se.instancingMorph===!1&&k.morphTexture!==null||Se.envMap!==Ee||G.fog===!0&&Se.fog!==ce||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==De||Se.vertexTangents!==ze||Se.morphTargets!==Ae||Se.morphNormals!==ot||Se.morphColors!==It||Se.toneMapping!==At||Se.morphTargetsCount!==Kt)&&(Je=!0):(Je=!0,Se.__version=G.version);let Mn=Se.currentProgram;Je===!0&&(Mn=ws(G,U,k));let Pn=!1,Ui=!1,ir=!1;const dt=Mn.getUniforms(),Yt=Se.uniforms;if(Me.useProgram(Mn.program)&&(Pn=!0,Ui=!0,ir=!0),G.id!==X&&(X=G.id,Ui=!0),Pn||z!==y){Me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),dt.setValue(P,"projectionMatrix",y.projectionMatrix),dt.setValue(P,"viewMatrix",y.matrixWorldInverse);const pi=dt.map.cameraPosition;pi!==void 0&&pi.setValue(P,Ye.setFromMatrixPosition(y.matrixWorld)),ft.logarithmicDepthBuffer&&dt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),z!==y&&(z=y,Ui=!0,ir=!0)}if(Se.needsLights&&(hn.state.directionalShadowMap.length>0&&dt.setValue(P,"directionalShadowMap",hn.state.directionalShadowMap,D),hn.state.spotShadowMap.length>0&&dt.setValue(P,"spotShadowMap",hn.state.spotShadowMap,D),hn.state.pointShadowMap.length>0&&dt.setValue(P,"pointShadowMap",hn.state.pointShadowMap,D)),k.isSkinnedMesh){dt.setOptional(P,k,"bindMatrix"),dt.setOptional(P,k,"bindMatrixInverse");const Vt=k.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),dt.setValue(P,"boneTexture",Vt.boneTexture,D))}k.isBatchedMesh&&(dt.setOptional(P,k,"batchingTexture"),dt.setValue(P,"batchingTexture",k._matricesTexture,D),dt.setOptional(P,k,"batchingIdTexture"),dt.setValue(P,"batchingIdTexture",k._indirectTexture,D),dt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&dt.setValue(P,"batchingColorTexture",k._colorsTexture,D));const fi=W.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&de.update(k,W,Mn),(Ui||Se.receiveShadow!==k.receiveShadow)&&(Se.receiveShadow=k.receiveShadow,dt.setValue(P,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Yt.envMapIntensity.value=U.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=G_()),Ui&&(dt.setValue(P,"toneMappingExposure",M.toneMappingExposure),Se.needsLights&&wu(Yt,ir),ce&&G.fog===!0&&Te.refreshFogUniforms(Yt,ce),Te.refreshMaterialUniforms(Yt,G,Fe,ue,A.state.transmissionRenderTarget[y.id]),na.upload(P,Cl(Se),Yt,D)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(na.upload(P,Cl(Se),Yt,D),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(P,"center",k.center),dt.setValue(P,"modelViewMatrix",k.modelViewMatrix),dt.setValue(P,"normalMatrix",k.normalMatrix),dt.setValue(P,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Vt=G.uniformsGroups;for(let pi=0,rr=Vt.length;pi<rr;pi++){const Pl=Vt[pi];pe.update(Pl,Mn),pe.bind(Pl,Mn)}}return Mn}function wu(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Au(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,U,W){const G=_.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_.get(y.texture).__webglTexture=U,_.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const W=_.get(y);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const Tu=P.createFramebuffer();this.setRenderTarget=function(y,U=0,W=0){B=y,C=U,N=W;let G=null,k=!1,ce=!1;if(y){const le=_.get(y);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),V.copy(y.viewport),O.copy(y.scissor),ee=y.scissorTest,Me.viewport(V),Me.scissor(O),Me.setScissorTest(ee),X=-1;return}else if(le.__webglFramebuffer===void 0)D.setupRenderTarget(y);else if(le.__hasExternalTextures)D.rebindTextures(y,_.get(y.texture).__webglTexture,_.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const De=y.depthTexture;if(le.__boundDepthTexture!==De){if(De!==null&&_.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(y)}}const be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ce=!0);const Ee=_.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?G=Ee[U][W]:G=Ee[U],k=!0):y.samples>0&&D.useMultisampledRTT(y)===!1?G=_.get(y).__webglMultisampledFramebuffer:Array.isArray(Ee)?G=Ee[W]:G=Ee,V.copy(y.viewport),O.copy(y.scissor),ee=y.scissorTest}else V.copy(j).multiplyScalar(Fe).floor(),O.copy(ie).multiplyScalar(Fe).floor(),ee=ae;if(W!==0&&(G=Tu),Me.bindFramebuffer(P.FRAMEBUFFER,G)&&Me.drawBuffers(y,G),Me.viewport(V),Me.scissor(O),Me.setScissorTest(ee),k){const le=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,le.__webglTexture,W)}else if(ce){const le=U;for(let be=0;be<y.textures.length;be++){const Ee=_.get(y.textures[be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+be,Ee.__webglTexture,W,le)}}else if(y!==null&&W!==0){const le=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(y,U,W,G,k,ce,fe,le=0){if(!(y&&y.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){Me.bindFramebuffer(P.FRAMEBUFFER,be);try{const Ee=y.textures[le],De=Ee.format,ze=Ee.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!ft.textureFormatReadable(De)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(ze)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&W>=0&&W<=y.height-k&&P.readPixels(U,W,G,k,se.convert(De),se.convert(ze),ce)}finally{const Ee=B!==null?_.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,U,W,G,k,ce,fe,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be)if(U>=0&&U<=y.width-G&&W>=0&&W<=y.height-k){Me.bindFramebuffer(P.FRAMEBUFFER,be);const Ee=y.textures[le],De=Ee.format,ze=Ee.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!ft.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(U,W,G,k,se.convert(De),se.convert(ze),0);const ot=B!==null?_.get(B).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,ot);const It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await df(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(Ae),P.deleteSync(It),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,W=0){const G=Math.pow(2,-W),k=Math.floor(y.image.width*G),ce=Math.floor(y.image.height*G),fe=U!==null?U.x:0,le=U!==null?U.y:0;D.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,fe,le,k,ce),Me.unbindTexture()};const Ru=P.createFramebuffer(),Cu=P.createFramebuffer();this.copyTextureToTexture=function(y,U,W=null,G=null,k=0,ce=0){let fe,le,be,Ee,De,ze,Ae,ot,It;const At=y.isCompressedTexture?y.mipmaps[ce]:y.image;if(W!==null)fe=W.max.x-W.min.x,le=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Ee=W.min.x,De=W.min.y,ze=W.isBox3?W.min.z:0;else{const Yt=Math.pow(2,-k);fe=Math.floor(At.width*Yt),le=Math.floor(At.height*Yt),y.isDataArrayTexture?be=At.depth:y.isData3DTexture?be=Math.floor(At.depth*Yt):be=1,Ee=0,De=0,ze=0}G!==null?(Ae=G.x,ot=G.y,It=G.z):(Ae=0,ot=0,It=0);const ct=se.convert(U.format),Kt=se.convert(U.type);let Se;U.isData3DTexture?(D.setTexture3D(U,0),Se=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(D.setTexture2DArray(U,0),Se=P.TEXTURE_2D_ARRAY):(D.setTexture2D(U,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const hn=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Pn=P.getParameter(P.UNPACK_SKIP_ROWS),Ui=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,At.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const ir=y.isDataArrayTexture||y.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Yt=_.get(y),fi=_.get(U),Vt=_.get(Yt.__renderTarget),pi=_.get(fi.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let rr=0;rr<be;rr++)ir&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(y).__webglTexture,k,ze+rr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(U).__webglTexture,ce,It+rr)),P.blitFramebuffer(Ee,De,fe,le,Ae,ot,fe,le,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||_.has(y)){const Yt=_.get(y),fi=_.get(U);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Ru),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Cu);for(let Vt=0;Vt<be;Vt++)ir?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.__webglTexture,k,ze+Vt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yt.__webglTexture,k),dt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fi.__webglTexture,ce,It+Vt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fi.__webglTexture,ce),k!==0?P.blitFramebuffer(Ee,De,fe,le,Ae,ot,fe,le,P.COLOR_BUFFER_BIT,P.NEAREST):dt?P.copyTexSubImage3D(Se,ce,Ae,ot,It+Vt,Ee,De,fe,le):P.copyTexSubImage2D(Se,ce,Ae,ot,Ee,De,fe,le);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else dt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Se,ce,Ae,ot,It,fe,le,be,ct,Kt,At.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,ce,Ae,ot,It,fe,le,be,ct,At.data):P.texSubImage3D(Se,ce,Ae,ot,It,fe,le,be,ct,Kt,At):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ce,Ae,ot,fe,le,ct,Kt,At.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ce,Ae,ot,At.width,At.height,ct,At.data):P.texSubImage2D(P.TEXTURE_2D,ce,Ae,ot,fe,le,ct,Kt,At);P.pixelStorei(P.UNPACK_ROW_LENGTH,hn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ui),ce===0&&U.generateMipmaps&&P.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(y){_.get(y).__webglFramebuffer===void 0&&D.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?D.setTextureCube(y,0):y.isData3DTexture?D.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?D.setTexture2DArray(y,0):D.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){C=0,N=0,B=null,Me.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const ln=Object.freeze({gravity:18,minSpeed:13,extraSpeed:15,minPull:.08,minAngle:5,maxAngle:80,maxFlight:5}),Pa=n=>n.gravity??ln.gravity,Ii=Object.freeze({x:-6.8,y:2.85}),Ft=Object.freeze({minX:8,maxX:8.62,minY:.6,maxY:5.8}),H_=Object.freeze({x:Ft.minX,y:(Ft.minY+Ft.maxY)/2}),hi=(n,e,t)=>Math.min(t,Math.max(e,n));function Zi(...n){if(!n.every(Number.isFinite))throw new RangeError("Shot math requires finite numbers.")}function La(n){Zi(n.origin.x,n.origin.y,n.velocity.x,n.velocity.y),n.gravity!==void 0&&Zi(n.gravity)}function el(n,e,t,i){const r=Math.min(t,i)*.34;if(![n,e,t,i,r].every(Number.isFinite)||t<=0||i<=0)return null;const s=Math.hypot(n,e)/r;return s<ln.minPull||n>=0?null:{angle:hi(Math.atan2(e,-n)*180/Math.PI,ln.minAngle,ln.maxAngle),power:hi(s,0,1)}}function Da(n,e=ln){Zi(n.angle,n.power);const t=hi(n.angle,ln.minAngle,ln.maxAngle)*Math.PI/180,i=e.minSpeed+e.extraSpeed*hi(n.power,0,1);return{origin:{...Ii},velocity:{x:Math.cos(t)*i,y:Math.sin(t)*i}}}function Pi(n,e){return La(n),Zi(e),{x:n.origin.x+n.velocity.x*e,y:n.origin.y+n.velocity.y*e-.5*Pa(n)*e*e}}function Ph(n,e){return La(n),Zi(e),{x:n.velocity.x,y:n.velocity.y-Pa(n)*e}}function W_(n,e,t,i){if(La(n),Zi(e.minX,e.maxX,e.minY,e.maxY,t,i),e.minX>e.maxX||e.minY>e.maxY)throw new RangeError("Bounds must be ordered.");if(i<t||t<0)return null;const r=[t,i];if(n.velocity.x!==0)for(const s of[e.minX,e.maxX])r.push((s-n.origin.x)/n.velocity.x);for(const s of[e.minY,e.maxY]){const a=Pa(n),o=n.velocity.y**2+2*a*(n.origin.y-s);if(o>=0){const c=Math.sqrt(o);r.push((n.velocity.y-c)/a,(n.velocity.y+c)/a)}}for(const s of r.filter(a=>a>=t-1e-9&&a<=i+1e-9).sort((a,o)=>a-o)){const a=Pi(n,s);if(a.x>=e.minX-1e-8&&a.x<=e.maxX+1e-8&&a.y>=e.minY-1e-8&&a.y<=e.maxY+1e-8)return hi(s,t,i)}return null}function Gd(n,e=.24){if(La(n),Zi(e),n.origin.y<e)return 0;const t=Pa(n);return(n.velocity.y+Math.sqrt(n.velocity.y**2+2*t*(n.origin.y-e)))/t}function X_(n,e,t,i,r){return el(n*r,e,t,i)}function Y_(n,e,t,i){if(n===0)return null;const r=n<0?1:-1,s=el(n*r,e,t,i);return s?{...s,facing:r}:null}function q_(n,e,t){if(t<e||!n.length)return null;const i=(t-e)/1e3,r=n.find(o=>o.time>=i)??n.at(-1),s=n[Math.max(0,n.indexOf(r)-1)],a=r.time===s.time?1:Math.min(1,Math.max(0,(i-s.time)/(r.time-s.time)));return r.poses.map(o=>{const c=s.poses.find(l=>l.actorId===o.actorId)?.feet??o.feet;return{actorId:o.actorId,feet:{x:c.x+(o.feet.x-c.x)*a,y:c.y+(o.feet.y-c.y)*a,z:0}}})}function $_(n,e,t=32){return[...new Set(n.map(i=>`${Math.floor(i%e/t)}:${Math.floor(Math.floor(i/e)/t)}`))]}function j_(n,e){if(!n)return"";if(n.state==="finished")return n.draw?"Both archers draw.":n.winner===e?"You are the last archer standing.":"Your opponent is the last archer standing.";if(n.state==="aborted")return"The service ended this duel safely.";if(n.state!=="active"||n.phase!=="planning"||!n.lastEvent?.teleport)return"";const t=n.lastEvent.teleport;if(t.ok)return"Teleport landed on a clear supported surface.";const i={"not-upward":"the arrow did not land on an upward-facing surface","no-support":"there was no supporting surface","occupied-or-blocked":"the arrival space was occupied or blocked"};return`Teleport failed: ${t.reason?i[t.reason]:"there was no legal arrival"}. The action was consumed.`}const Cn=n=>n.version==="volley-1";function K_(n){return JSON.stringify(Cn(n)?[n.id,n.version,n.seat.lifeId,n.epoch,n.roundId]:[n.id,n.version,n.seat.lifeId,n.activeSeat,n.planningStartedAt])}function Z_(n,e){return Cn(n)?n.locks.find(t=>t.actorId===e)?.plan??null:null}function J_(n){if(!n.seats.every(t=>t.ready))return!1;if(!Cn(n))return n.seats.length===2;if(n.mode==="royale")return n.seats.length>=2&&n.seats.length<=8;const e=new Map;for(const t of n.seats){if(t.teamId===null)return!1;e.set(t.teamId,(e.get(t.teamId)??0)+1)}return n.seats.length===4&&e.size===2&&[...e.values()].every(t=>t===2)}function Vd(n,e){const t=Cn(n),i=n.seats.find(h=>h.actorId===e);let r=j_(n,e);if(t&&n.state==="finished"&&(r=n.draw?"Match complete · draw.":n.winningTeam!==null?i&&"teamId"in i&&i.teamId===n.winningTeam?"Your team won.":"The other team won.":n.winner===e?"You are the last archer standing.":"Another archer is the last one standing."),t&&n.state==="aborted"&&(r="The service ended this match safely."),!t)return{preset:"Duel · alternate turns",turn:n.state==="waiting"?"Both archers must ready before the host starts.":n.state==="active"?n.phase==="planning"?n.seat.canAct?"Your turn. Choose an arrow and draw.":"Opponent’s turn. Watch the arena.":"Arrow resolving. Waiting for settlement.":n.state==="finished"?n.draw?"Duel complete · draw.":n.winner===e?"Duel complete · you won.":"Duel complete · opponent won.":"This duel was aborted. Leave to create a new room.",result:r,priority:[],locks:[],pressure:""};const s=n.locks.find(h=>h.actorId===e),a=n.actors.filter(h=>!h.eliminated).length,o=n.seat.canAct?"Choose an arrow and draw to lock.":s?.locked?s.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":n.priority.includes(e)?"Watch the arena.":"You are eliminated. Watch the remaining archers.",c=n.preset==="teams-1"?"Teams 2v2 · shared 20-second planning":n.preset==="royale-fixed-1"?"Royale · fixed arena · 30 rounds / 15 minutes · 20-second planning":"Royale · shrinking safe area · 20-second planning",l=n.state==="waiting"?n.mode==="teams"?"Four archers, two per team, must ready before the host starts.":"Two to eight archers must all ready before the host starts.":n.state==="active"?`Round ${n.round} · ${a} alive · ${n.phase==="planning"?o:"Arrows resolve in published priority order."}`:r,d=n.preset!=="royale-shrink-1"?"":`Safe area (solid) ${n.pressure.minX.toFixed(1)} to ${n.pressure.maxX.toFixed(1)}${n.pressure.warning?` · dashed bounds after round ${n.pressure.warning.afterRound} to ${n.pressure.warning.minX.toFixed(1)}–${n.pressure.warning.maxX.toFixed(1)} · outside feet take 25 damage`:""}`,u=n.locks.map(h=>{const m=h.plan;return{actorId:h.actorId,text:h.locked?m?m.kind==="pass"?"Pass locked":`${m.aim.arrow} locked · ${Math.round(m.aim.angle)}° · ${Math.round(m.aim.power*100)}% · ${m.aim.facing===1?"right":"left"}`:"Locked":"Planning"}});return{preset:c,turn:l,result:r,priority:n.priority,locks:u,pressure:d}}function Q_(n,e,t,i){const r=Vd(n,e).locks;return n.seats.map((s,a)=>{const o=n.actors.find(h=>h.id===s.actorId),c=t.find(h=>h.actorId===s.actorId),l=o?.health??100,d=c?.reservedUntil?` · reserved ${Math.max(0,Math.ceil((c.reservedUntil-i())/1e3))}s`:"",u=n.state==="active"?r.find(h=>h.actorId===s.actorId):void 0;return{actorId:s.actorId,text:`${c?.label??`Archer ${a+1}`}${s.actorId===e?" · you":""} · ${l} health${o?.eliminated?" · eliminated":""} · ${n.state==="waiting"?s.ready?"ready":"not ready":c?.status??"disconnected"}${c?.status==="disconnected"?d:""}`,health:l,healthLabel:`Archer ${a+1} health`,team:"teamId"in s&&s.teamId?String(s.teamId):null,lockText:u?.text??null}})}const Ua="combat-protocol-1",Gr="combat-3",ex="The combat rules version has changed. Reload the page to continue.",tl="skirmish-protocol-1",nl=Gr,tx="This public arena has been updated. Reload the page to continue.",il=Object.freeze({maxRooms:128,maxSockets:128,maxSocketsPerMember:4,maxDebtPerArena:1024,maxDebt:8192,maxMemberships:16384,maxControls:4096,controlsPerMember:2,controlRetryMs:3e5,maxRateBuckets:1024,commandBurst:30,commandWindowMs:1e4,commandBodyBytes:8192,socketFrameBytes:2048,maxSnapshotBytes:4*1024*1024,slowClientBytes:4*1024*1024,authenticationTimeoutMs:5e3,maxUnauthenticatedSockets:16}),Nn="combat-protocol-2";function Lh(n,e=!1){if(typeof n!="string"||n.length>320)throw new Error("Invalid service origin.");const t=/^(https?):\/\/([A-Za-z0-9.-]+)(?::([1-9][0-9]{0,4}))?$/.exec(n);if(!t||t[0]!==n||!e&&t[1]!=="https")throw new Error("Invalid service origin.");const i=t[2].toLowerCase(),r=i.split(".");if(i.length>253||r.some(c=>!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(c)))throw new Error("Invalid service host.");const s=i==="127.0.0.1";if(!/[a-z]/.test(r.at(-1))&&!(e&&s))throw new Error("DNS service host required.");if(new URL(`${t[1]}://${i}`).hostname!==i)throw new Error("Ambiguous service host.");const a=t[3]===void 0?void 0:Number(t[3]);if(a!==void 0&&a>65535)throw new Error("Invalid service port.");const o=a===(t[1]==="https"?443:80)?void 0:a;return`${t[1]}://${i}${o===void 0?"":`:${o}`}`}function Uc(n,e){if(n==="")return null;const t=Lh(e,!0),i=n==="/api",r=i?t:Lh(n.endsWith("/api")?n.slice(0,-4):n);if(!i&&!n.endsWith("/api"))throw new Error("Service endpoint must end in /api.");const s=`${r}/api`,a=s.replace(/^http/,"ws");return Object.freeze({mode:i?"same-origin":"https",requestBase:i?"/api":s,serviceId:s,boardSocket:`${a}/events`,combatSocket:`${a}/combat/events`})}function nx(n,e){if(n.length!==1)return null;try{return Uc(n[0],e)}catch{return null}}function Hd(n){if(n.mode==="same-origin")return Object.freeze({identity:"archery.challenge.identity.v1",room:"archery.combat.room.v1",legacy:!0});const e=encodeURIComponent(n.serviceId);return Object.freeze({identity:`archery.service.identity.v2:${e}`,room:`archery.service.room.v2:${e}`,legacy:!1})}function Dh(n){if(typeof n=="string"){if(n!=="/api")throw new Error("Use a parsed endpoint or same-origin /api.");return Uc("/api",typeof location>"u"?"http://localhost":location.origin)}const e=n.serviceId.slice(0,-4),t=Uc(n.mode==="same-origin"?"/api":n.serviceId,e);if(!t||Object.keys(t).some(i=>t[i]!==n[i]))throw new Error("Invalid shared service context.");return t}const ia=n=>!!n&&typeof n=="object"&&!Array.isArray(n);class oi extends Error{status;code;retryAfterMs;transient;constructor(e,t,i,r){super(e),this.name="GuestRequestError",this.status=t,this.code=i,this.retryAfterMs=r,this.transient=r!==null}}function ix(n,e){let t=NaN;return n!==null&&/^[0-9]+$/.test(n)?t=Number(n)*1e3:n!==null&&/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), [0-9]{2} [A-Z][a-z]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT$/.test(n)&&(t=Math.max(0,Date.parse(n)-e)),Number.isSafeInteger(t)&&t>=0&&Number.isSafeInteger(e+t)?Math.max(1e3,t):1e3}function Uh(n){if(!ia(n)||Object.keys(n).length!==2||typeof n.guestId!="string"||!n.guestId||typeof n.token!="string"||!n.token)throw new Error("Invalid guest identity.");return{guestId:n.guestId,token:n.token}}class Na{selectedEndpoint;selectedKeys;fetcher;storage;current=null;generation=0;identityError=null;creating=null;admission=null;constructor(e,t=fetch,i){this.selectedEndpoint=Dh(e),this.selectedKeys=Hd(this.selectedEndpoint),this.fetcher=t,this.storage=i;let r;try{r=i?.getItem(this.storageKeys.identity)??null}catch{return}if(r!==null)try{this.current=Object.freeze({...Uh(JSON.parse(r)),revision:this.generation})}catch{this.identityError=new Error("Saved guest identity is unreadable or unsupported. Existing data is preserved; forget it explicitly before creating another guest.")}}get revision(){return this.generation}get guestId(){return this.current?.guestId??null}get endpoint(){return this.selectedEndpoint}get serviceId(){return this.endpoint.serviceId}get storageKeys(){return this.selectedKeys}credentials(){return this.current}assertContext(e,t,i){if(!(typeof e=="string"?e==="/api"&&this.endpoint.mode==="same-origin":(()=>{const s=Dh(e);return s.mode===this.endpoint.mode&&s.serviceId===this.serviceId})())||t!==this.fetcher||i!==this.storage)throw new Error("Shared guest session context must match service, fetcher and storage.")}assertRevision(e){if(e!==this.generation)throw new Error("Guest identity changed. Start again with the current guest.")}ensure(){if(this.identityError)return Promise.reject(this.identityError);if(this.current)return Promise.resolve(this.current);if(this.creating)return this.creating;const e=this.generation,t=this.create(e).finally(()=>{this.creating===t&&(this.creating=null)});return this.creating=t,t}async create(e){const t=Uh(await this.request("/guests",{}));this.assertRevision(e),this.current=Object.freeze({...t,revision:++this.generation});try{this.storage?.setItem(this.storageKeys.identity,JSON.stringify(t))}catch{}return this.current}request(e,t){return this.requestJson(e,t)}readReadiness(){return this.requestJson("/readiness",void 0,!0)}async requestJson(e,t,i=!1){if(this.identityError)throw this.identityError;if(!e.startsWith("/")||e.startsWith("//")||e.includes("\\"))throw new Error("Invalid shared service path.");if(this.admission&&Date.now()<this.admission.notBefore)throw this.admission.error;const r=this.generation,s=await this.fetcher.call(globalThis,this.endpoint.requestBase+e,{signal:AbortSignal.timeout(i?3e3:15e3),method:t===void 0?"GET":"POST",credentials:"omit",redirect:"error",...i?{}:{headers:{"Content-Type":"application/json",...this.current?{Authorization:`Bearer ${this.current.token}`}:{}}},...t===void 0?{}:{body:JSON.stringify(t)}});this.assertRevision(r);let a;try{a=await s.json()}catch(o){if(s.ok)throw o;a=null}if(this.assertRevision(r),!s.ok){const o=ia(a)&&ia(a.error)?a.error:null,c=o&&typeof o.code=="string"?o.code:null,l=c!==null&&["room_capacity","guest_room_capacity","command_capacity","socket_capacity","challenge_capacity","guest_capacity"].includes(c),d=Date.now(),u=s.status===429&&!l?ix(s.headers.get("Retry-After"),d):null,h=new oi(o&&typeof o.message=="string"?o.message:u!==null?"The shared service is busy. Wait a moment, then retry.":"Shared service unavailable. Retry or start a new local challenge.",s.status,c,u);throw u!==null&&(!this.admission||d+u>this.admission.notBefore)&&(this.admission={notBefore:d+u,error:h}),h}if(i&&(s.status!==200||s.headers.get("Content-Type")?.split(";",1)[0].trim().toLowerCase()!=="application/json"))throw new Error("Invalid shared service readiness.");if(!ia(a))throw new Error("Invalid shared service response.");return a}forget(){this.generation++,this.current=null,this.identityError=null,this.creating=null;try{this.storage?.removeItem(this.storageKeys.identity)}catch{}}}const vr={rulesVersion:Gr,code:"rules_version",reload:ex},bi={rulesVersion:nl,code:"protocol_version",reload:tx};function wi(n,e){return n instanceof oi&&n.status===409&&n.code===e.code}function Nc(n){return new oi(n.reload,409,n.code,null)}const Wd=["combat-1","combat-2"];function Nh(n,e){return Array.isArray(n)&&n.length===e.length&&e.every((t,i)=>n[i]===t)}async function Fh(n,e){n.assertRevision(e);let t;try{t=await n.readReadiness()}catch{}if(n.assertRevision(e),!t)return!1;const{ready:i,apiVersion:r,rulesVersion:s,combatRulesVersion:a,protocols:o,roomKinds:c,presets:l,publicProfile:d}=t;return i===!0&&r==="shared-api-1"&&s==="challenge-v1"&&Wd.includes(a)&&Object.keys(t).length===(d===void 0?7:8)&&(d===void 0||d==="public-admission-v1")&&Nh(o,[Ua,Nn,tl])&&Nh(c,["duel","teams","royale","skirmish"])&&Array.isArray(l)&&l.length===1&&(l[0]==="skirmish-1"||l[0]==="skirmish-2")}function rx(n,e,t){return n instanceof TypeError?!0:n instanceof oi?n.status===400&&n.code==="path"&&n.message==="Invalid service query."||t===bi&&e!=="/skirmish/rules"&&n.status===404&&n.code==="not_found"&&n.message==="Public arena not found.":!1}async function ra(n,e,t){const i=n.revision;let r;try{r=await n.request(e+"?rulesVersion="+encodeURIComponent(t.rulesVersion))}catch(s){throw rx(s,e,t)&&await Fh(n,i)?Nc(t):s}if(Wd.includes(r.rulesVersion)&&await Fh(n,i))throw Nc(t);return r}const Xd=Object.freeze({shotGravity:Object.freeze({min:8,max:30}),shotMinSpeed:Object.freeze({min:8,max:20}),shotExtraSpeed:Object.freeze({min:5,max:24}),actorGravity:Object.freeze({min:8,max:40}),airDrag:Object.freeze({min:0,max:2}),groundFriction:Object.freeze({min:2,max:30}),restitution:Object.freeze({min:0,max:.6}),impactThreshold:Object.freeze({min:2,max:20}),impactMultiplier:Object.freeze({min:0,max:10}),physicsDamageCap:Object.freeze({min:0,max:100,integer:!0}),health:Object.freeze({min:25,max:100,integer:!0}),directBodyDamage:Object.freeze({min:1,max:100,integer:!0}),directHeadDamage:Object.freeze({min:1,max:100,integer:!0}),blastNearDamage:Object.freeze({min:0,max:100,integer:!0}),blastMidDamage:Object.freeze({min:0,max:100,integer:!0}),blastFarDamage:Object.freeze({min:0,max:100,integer:!0}),bombRadius:Object.freeze({min:1,max:3}),bombImpulseFloor:Object.freeze({min:0,max:1}),bombHorizontalImpulse:Object.freeze({min:0,max:20}),bombUpImpulse:Object.freeze({min:0,max:25}),craterRadius:Object.freeze({min:1,max:3}),chipRadius:Object.freeze({min:.25,max:3}),directKnockbackHorizontal:Object.freeze({min:0,max:12}),directKnockbackUp:Object.freeze({min:0,max:12}),planningMs:Object.freeze({min:5e3,max:6e4,integer:!0})}),Oh=40,To=Object.keys(Xd),sx=/^[a-z0-9][a-z0-9._-]{0,31}$/;function Yd(n){return Object.freeze(n)}const Ji=Yd({id:"base-1",shotGravity:18,shotMinSpeed:13,shotExtraSpeed:15,actorGravity:18,airDrag:.15,groundFriction:14,restitution:0,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,health:100,directBodyDamage:50,directHeadDamage:100,blastNearDamage:25,blastMidDamage:10,blastFarDamage:5,bombRadius:3,bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,craterRadius:3,chipRadius:.5,directKnockbackHorizontal:0,directKnockbackUp:0,planningMs:2e4}),kh=Yd({...Ji,id:"playtest-1",chipRadius:1.25,directKnockbackHorizontal:4,directKnockbackUp:5,bombUpImpulse:14,bombHorizontalImpulse:11,restitution:.4,groundFriction:8,impactThreshold:8});Object.freeze({[Ji.id]:Ji,[kh.id]:kh});function Gi(n){throw new RangeError(`Invalid tuning profile: ${n}`)}function qd(n){(!n||typeof n!="object"||Array.isArray(n))&&Gi("an object is required.");const e=n;(Object.keys(e).length!==To.length+1||!Object.hasOwn(e,"id")||To.some(r=>!Object.hasOwn(e,r)))&&Gi("fields differ from the tuning schema."),(typeof e.id!="string"||!sx.test(e.id))&&Gi("id must be 1..32 lowercase letters, digits, dot, underscore or hyphen.");for(const r of To){const s=e[r],a=Xd[r];(typeof s!="number"||!Number.isFinite(s))&&Gi(`${r} must be a finite number.`),(s<a.min||s>a.max||a.integer&&!Number.isInteger(s))&&Gi(`${r} must be ${a.integer?"an integer ":""}between ${a.min} and ${a.max}.`)}const i=e;i.shotMinSpeed+i.shotExtraSpeed>Oh&&Gi(`shotMinSpeed + shotExtraSpeed must not exceed ${Oh}.`),(i.blastNearDamage<i.blastMidDamage||i.blastMidDamage<i.blastFarDamage)&&Gi("blast damage must not increase with distance.")}function ax(n){return Object.hasOwn(n,"tuning")&&n.tuning?n.tuning:Ji}const ti=Object.freeze({nock:Object.freeze({x:.92,y:2.77,z:0}),halfWidth:.86,height:3.055,head:Object.freeze({minX:-.325,maxX:.325,minY:2.255,maxY:2.905}),body:Object.freeze({minX:-.86,maxX:.86,minY:0,maxY:2.255})}),$d=Object.freeze({version:"combat-1",cell:.125,gravity:18,step:1/120,maxSteps:3600,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,bombRadius:3,craterRadius:3,chipRadius:.5,maxDeltaCells:2048,activeTerrainRules:"current",bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,groundFriction:14,airDrag:.15,restitution:0,matchMs:9e5,planningMs:2e4,launchDelayMs:100,maxActors:8});function rl(...n){if(!n.every(Number.isFinite))throw new RangeError("Finite combat coordinates required.")}function ma(n){if(!n||typeof n!="object")throw new RangeError("Planar position required.");if(rl(n.x,n.y,n.z),n.z!==0)throw new RangeError("Combat uses world z=0.")}function ox(n){if(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))throw new RangeError("Identifier must be a 1..128 character ASCII token.")}function jd(n){if(!n||typeof n!="object")throw new RangeError("Aim required.");if(rl(n.angle,n.power),n.angle<5||n.angle>80||n.power<.08||n.power>1||n.facing!==1&&n.facing!==-1)throw new RangeError("Aim outside combat limits.");if("arrow"in n&&!["normal","bomb","teleport"].includes(n.arrow))throw new RangeError("Unknown arrow.")}function Kd(n){if(!Array.isArray(n)||n.length>$d.maxActors)throw new RangeError("At most eight actors.");const e=new Set;for(const t of n){if(ox(t.id),ma(t.feet),ma(t.velocity),rl(t.health),!Number.isInteger(t.health)||t.health<0||t.health>100||Math.abs(t.feet.x)>1024||Math.abs(t.feet.y)>1024||Math.abs(t.velocity.x)>1e3||Math.abs(t.velocity.y)>1e3||e.has(t.id)||t.facing!==1&&t.facing!==-1||typeof t.eliminated!="boolean")throw new RangeError("Invalid actor.");e.add(t.id)}}function cx(n,e=n.facing){return{x:n.feet.x+ti.nock.x*e,y:n.feet.y+ti.nock.y,z:0}}function Bh(n,e,t=Ji){Kd([n]),jd(e);const i=Da(e,{minSpeed:t.shotMinSpeed,extraSpeed:t.shotExtraSpeed}),r=cx(n,e.facing);return{origin:{x:r.x,y:r.y},velocity:{x:i.velocity.x*e.facing,y:i.velocity.y},...t.shotGravity===Ji.shotGravity?{}:{gravity:t.shotGravity}}}function Zd(n,e,t,i){const c=t*i,l=Math.ceil(t/32),d=Math.ceil(i/32);return Object.freeze({version:n,cell:.125,minX:e,minY:-8,width:t,height:i,bedrockY:-6,bounds:Object.freeze({minX:e,maxX:e+t*.125,minY:-8,maxY:-8+i*.125}),cellCount:c,maxCellIndex:c-1,maskHexLength:c/4,chunkSize:32,chunkColumns:l,chunkRows:d,maxChunks:l*d})}const Jd=Zd("arena-1",-32,512,288),Qd=Zd("arena-2",-40,640,352);function Ri(n){if(n==="arena-1")return Jd;if(n==="arena-2")return Qd;throw new RangeError("Unsupported terrain profile.")}function sl(n){if(n==="skirmish-1")return Jd;if(n==="skirmish-2")return Qd;throw new RangeError("Unsupported public arena version.")}function al(n,e){const t=e===void 0?void 0:Ri(e);if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid terrain metadata.");const i=n,r=Ri(i.version);if(t&&r!==t)throw new RangeError("Terrain differs from the expected profile.");for(const s of["cell","minX","minY","width","height","bedrockY"])if(i[s]!==r[s])throw new RangeError("Invalid terrain profile geometry.");if(!Number.isSafeInteger(i.revision)||i.revision<0||!Array.isArray(i.spawnPads)||i.spawnPads.length!==8)throw new RangeError("Invalid terrain metadata.");for(const s of i.spawnPads){if(Array.isArray(s))throw new RangeError("Planar spawn pad required.");ma(s)}return r}const Fa=Object.freeze({version:"skirmish-1",slots:8,minimumParticipants:4,planningMs:2e4,resetAfter:20,idleAfter:3,receiptLimit:16}),lx=Object.freeze({...Fa,version:"skirmish-2"});function eu(n){if(sl(n),n==="skirmish-1")return Fa;if(n==="skirmish-2")return lx;throw new RangeError("Unsupported public rules version.")}const ut=()=>{throw new Error("The public arena service returned an unsupported response.")},ol=n=>{(!n||typeof n!="object"||Array.isArray(n))&&ut()},vt=n=>{(!Number.isSafeInteger(n)||n<0)&&ut()},Lr=n=>{Number.isFinite(n)||ut()},je=n=>{(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))&&ut()},sn=n=>{typeof n!="boolean"&&ut()},Ge=(...n)=>e=>{n.includes(e)||ut()},Qi=n=>e=>{vt(e),e>n&&ut()},Lt=n=>e=>{e!==null&&n(e)},gt=(n,e={})=>t=>{ol(t),(Object.keys(n).some(i=>!Object.hasOwn(t,i))||Object.keys(t).some(i=>!Object.hasOwn(n,i)&&!Object.hasOwn(e,i)))&&ut();for(const[i,r]of Object.entries(n))r(t[i]);for(const[i,r]of Object.entries(e))Object.hasOwn(t,i)&&r(t[i])},vn=(n,e)=>t=>{(!Array.isArray(t)||t.length>e)&&ut();for(const i of t)n(i)},zh=n=>{vn(je,8)(n),new Set(n).size!==n.length&&ut()},er=n=>{gt({x:Lr,y:Lr,z:Ge(0)})(n),ma(n)},cl={protocolVersion:Ge(tl),rulesVersion:Ge(nl)},hx=n=>{gt({arrow:Ge("normal","bomb","teleport"),angle:Lr,power:Lr,facing:Ge(-1,1)})(n),jd(n)},ga=n=>{gt({id:je,actorId:je,lifeId:je,epoch:vt,roundId:je,kind:Ge("shot","pass"),aim:Lt(hx)})(n),n.kind==="shot"!=(n.aim!==null)&&ut()},dx=n=>{gt({id:je,feet:er,velocity:er,facing:Ge(-1,1),health:Qi(100),eliminated:sn})(n)},ux=gt({memberId:je,actorId:je,lifeId:je,slotId:Ge("s0","s1","s2","s3","s4","s5","s6","s7"),kind:Ge("human","npc"),present:sn,leaving:sn,idle:sn,missedWindows:Qi(3),spawnPending:sn,bombReady:sn}),tu=gt({memberId:je,actorId:je,lifeId:je,slotId:Ge("s0","s1","s2","s3","s4","s5","s6","s7"),kind:Ge("human","npc")}),nu=n=>gt({fromRevision:vt,toRevision:vt,removed:vn(Qi(n.maxCellIndex),$d.maxDeltaCells)}),iu=n=>gt({kind:Ge("terrain","head","body","bounds","timeout"),time:Lr,point:er,normal:er},{actorId:je,cell:Qi(n.maxCellIndex)}),fx=vn(gt({time:Lr,poses:vn(gt({actorId:je,feet:er}),8)}),902),px=gt({ok:sn},{reason:Ge("not-upward","no-support","occupied-or-blocked"),feet:er}),mx=n=>gt({action:ga,roster:vn(tu,8),contact:iu(n),delta:nu(n),motion:fx,startedAt:Lt(vt),endsAt:Lt(vt)}),gx=n=>gt({action:ga,roster:vn(tu,8),contact:iu(n),damage:vn(gt({actorId:je,amount:Qi(100),cause:Ge("direct","blast","physics")}),408),delta:nu(n),teleport:Lt(px)}),_x=n=>{try{qd(n)}catch{ut()}},xx=n=>{ol(n);let e;try{e=sl(n.version)}catch{return ut()}const t=i=>{gt({version:Ge(e.version),revision:vt,cell:Ge(e.cell),minX:Ge(e.minX),minY:Ge(e.minY),width:Ge(e.width),height:Ge(e.height),bedrockY:Ge(e.bedrockY),spawnPads:vn(er,8),maskHex:r=>{(typeof r!="string"||r.length!==e.maskHexLength||!/^[0-9a-f]+$/.test(r))&&ut()}})(i);try{al(i,e.version)}catch{ut()}};gt({version:Ge("skirmish-1","skirmish-2"),id:je,epoch:vt,revision:vt,state:Ge("active","suspended","aborted"),phase:Ge("planning","resolving","settling"),terrain:t,actors:vn(dx,8),members:vn(ux,8),roundSerial:vt,roundId:je,completedRounds:Qi(20),resetIn:Lt(Qi(2)),slotOrder:zh,priority:zh,drainThenBoundary:sn,planningStartedAt:Lt(vt),deadlineAt:Lt(vt),launchAt:Lt(vt),contactAt:Lt(vt),resolutionEndsAt:Lt(vt),locks:vn(gt({actorId:je,locked:sn,plan:Lt(ga)}),8),action:Lt(ga),effect:Lt(mx(e)),lastEvent:Lt(gx(e)),self:gt({memberId:Lt(je),actorId:Lt(je),lifeId:Lt(je),pending:sn,canAct:sn,bombReady:sn,opportunities:vt,bombReadyAt:vt}),abortReason:Lt(Ge("settling-exhausted"))},{tuning:_x})(n)};function ru(n){new TextEncoder().encode(JSON.stringify(n)).byteLength>il.maxSnapshotBytes&&ut()}function su(n){ru(n),gt({...cl,roomKind:Ge("skirmish"),arenaId:je,serverNow:vt,snapshotRevision:vt,retryHorizonMs:vt,membership:gt({memberId:je,actorId:je,lifeId:Lt(je),status:Ge("pending","active","idle","left","suspended","respawn","aborted"),canAct:sn,bombReady:sn}),connections:vn(gt({actorId:je,label:i=>{(typeof i!="string"||i.length>80)&&ut()},kind:Ge("human","npc"),connected:sn}),8),state:xx})(n);const e=n,t=e.state;return Kd(t.actors),(t.id!==e.arenaId||e.retryHorizonMs<1||e.retryHorizonMs>il.controlRetryMs||t.self.lifeId!==e.membership.lifeId||t.self.canAct!==e.membership.canAct||t.self.bombReady!==e.membership.bombReady||t.self.actorId!==null&&t.self.actorId!==e.membership.actorId)&&ut(),(t.slotOrder.length!==8||t.slotOrder.some(i=>!/^s[0-7]$/.test(i))||new Set(t.members.map(i=>i.actorId)).size!==t.members.length||new Set(t.members.map(i=>i.memberId)).size!==t.members.length||new Set(t.members.map(i=>i.slotId)).size!==t.members.length)&&ut(),(t.state==="active"&&t.priority.some(i=>!t.members.some(r=>r.actorId===i))||t.actors.some(i=>!t.members.some(r=>r.actorId===i.id))||t.locks.some(i=>!t.priority.includes(i.actorId)||i.plan!==null&&(!i.locked||i.plan.actorId!==i.actorId||i.plan.epoch!==t.epoch||i.plan.roundId!==t.roundId||!t.members.some(r=>r.actorId===i.actorId&&r.lifeId===i.plan.lifeId)||t.phase==="planning"&&i.actorId!==e.membership.actorId)))&&ut(),t.state!=="active"&&(t.self.canAct||t.action!==null||t.effect!==null||t.locks.some(i=>i.locked||i.plan!==null)||[t.deadlineAt,t.launchAt,t.contactAt,t.resolutionEndsAt].some(i=>i!==null))&&ut(),t.state==="suspended"&&(t.phase!=="planning"||t.planningStartedAt!==null)&&ut(),(t.action&&(t.action.kind!=="shot"||t.action.epoch!==t.epoch)||t.effect&&(t.phase!=="settling"||t.effect.action.epoch!==t.epoch||t.effect.startedAt===null||t.effect.endsAt===null||t.effect.startedAt>t.effect.endsAt||t.effect.startedAt>e.serverNow))&&ut(),e.membership.canAct&&(e.membership.status!=="active"||t.state!=="active"||t.phase!=="planning"||t.deadlineAt===null||!t.priority.includes(e.membership.actorId))&&ut(),e}function vx(n){ru(n),gt({ack:gt({...cl,arenaId:je,memberId:je,actionId:je,kind:Ge("join","leave","rejoin","shot","pass"),epoch:vt,roundId:Lt(je),lifeId:Lt(je),acceptedRevision:vt,outcome:Ge("accepted","existing-membership")}),current:gt({type:Ge("current"),envelope:t=>{su(t)}})},{reassignedFrom:gt({arenaId:je,memberId:je})})(n);const e=n;return(e.ack.outcome==="existing-membership"&&e.ack.kind!=="join"||e.reassignedFrom&&e.ack.kind!=="rejoin"||["shot","pass"].includes(e.ack.kind)&&(e.ack.lifeId===null||e.ack.roundId===null))&&ut(),e}function Gh(n){ol(n);let e;try{e=eu(n.preset)}catch{return ut()}return gt({...cl,roomKind:Ge("skirmish"),serverNow:vt,preset:Ge(e.version),planningMs:Ge(e.planningMs),slots:Ge(e.slots),minimumParticipants:Ge(e.minimumParticipants),resetAfter:Ge(e.resetAfter),idleAfter:Ge(e.idleAfter),retryHorizonMs:t=>{vt(t),(t<1||t>il.controlRetryMs)&&ut()}})(n),n}const Ks={protocolVersion:tl,rulesVersion:nl},Ro=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function yx(n){return`${Hd(n).identity}:skirmish-locator-v1:${encodeURIComponent(`${n.mode}:${n.serviceId}`)}`}const bx=new Set(["validation","membership","wrong_epoch","wrong_life","wrong_round","retry_retired","stale_revision","conflict","inactive","cooldown","wrong_actor","deadline","wrong_phase","not_found","room_capacity","socket_capacity","debt_capacity","control_capacity","membership_capacity","rate_capacity","protocol_version"]);class Mx{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};session;storage;locatorKey;factory;socket=null;poll=null;recovery=null;generation=0;socketGeneration=0;stopped=!1;observedServerTime=0;observedAt=0;hasClock=!1;rejected=null;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new Na(e,t,i),this.storage=i,this.locatorKey=yx(this.session.endpoint),this.factory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>this.hasClock?this.observedServerTime+Math.max(0,performance.now()-this.observedAt):0;get savedArena(){try{const e=JSON.parse(this.storage?.getItem(this.locatorKey)??"null");return Ro(e)&&Object.keys(e).sort().join(",")==="arenaId,guestId,memberId"&&e.guestId===this.session.guestId&&typeof e.arenaId=="string"&&typeof e.memberId=="string"?{arenaId:e.arenaId,memberId:e.memberId}:null}catch{return null}}get lockAgain(){return!!this.room&&this.room.membership.canAct&&this.rejected===this.opportunity(this.room)}opportunity(e){return JSON.stringify([e.arenaId,e.membership.memberId,e.membership.actorId,e.membership.lifeId,e.state.epoch,e.state.roundId])}scope(){return this.room?{arenaId:this.room.arenaId,memberId:this.room.membership.memberId}:{}}check(e,t){if(this.session.assertRevision(t),this.generation!==e)throw Error("The public arena context changed while this request was pending.")}emit(){this.onChange()}install(e,t,i=!1){const r=su(e);if(!i&&(t.arenaId&&t.arenaId!==r.arenaId||t.memberId&&t.memberId!==r.membership.memberId))throw Error("The public response belongs to a different membership.");if(this.room&&r.arenaId===this.room.arenaId&&r.membership.memberId===this.room.membership.memberId){if(r.snapshotRevision<this.room.snapshotRevision)return;if(r.state.epoch<this.room.state.epoch||r.state.epoch===this.room.state.epoch&&r.state.revision<this.room.state.revision)throw Error("The public response would reverse the confirmed world.");if(r.snapshotRevision===this.room.snapshotRevision&&(r.state.epoch!==this.room.state.epoch||r.membership.actorId!==this.room.membership.actorId||r.membership.lifeId!==this.room.membership.lifeId))throw Error("A public identity transition needs a newer snapshot.");if(r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return}else if(this.room&&!i)throw Error("The public response changed membership without an explicit rejoin.");i&&this.disconnect(),this.room=r,this.observedServerTime=this.hasClock?Math.max(this.now(),r.serverNow):r.serverNow,this.observedAt=performance.now(),this.hasClock=!0;try{this.storage?.setItem(this.locatorKey,JSON.stringify({arenaId:r.arenaId,memberId:r.membership.memberId,guestId:this.session.guestId}))}catch{}this.emit()}applyReply(e,t){const i=vx(e),r=i.ack,s=t.body;if(r.kind!==s.kind||r.actionId!==s.actionId)throw Error("The public acknowledgement does not match the pending action.");if(r.outcome==="existing-membership"&&(s.kind!=="join"||r.acceptedRevision!==i.current.envelope.state.revision||r.arenaId!==i.current.envelope.arenaId||r.memberId!==i.current.envelope.membership.memberId||r.epoch!==i.current.envelope.state.epoch))throw Error("Invalid current-membership acknowledgement.");if((s.kind==="shot"||s.kind==="pass")&&(r.arenaId!==t.scope.arenaId||r.memberId!==s.memberId||r.lifeId!==s.lifeId||r.roundId!==s.roundId||r.epoch!==s.epoch))throw Error("The public acknowledgement changed action scope.");const a=i.reassignedFrom,o=!!a;if(a&&(s.kind!=="rejoin"||a.arenaId!==t.scope.arenaId||a.memberId!==t.scope.memberId))throw Error("The public reassignment does not match this explicit rejoin.");if(!a&&s.kind!=="join"&&(r.arenaId!==t.scope.arenaId||r.memberId!==t.scope.memberId))throw Error("The public acknowledgement changed membership.");return this.install(i.current.envelope,s.kind==="join"&&!this.room?{}:t.scope,o),o}async join(){if(this.busy||this.pending)throw Error("Finish the pending public action first.");const e=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const t=await this.session.ensure();this.check(e,t.revision);const i=Gh(await ra(this.session,"/skirmish/rules",bi));this.check(e,t.revision),this.pending={path:"/skirmish/join",body:Object.freeze({...Ks,kind:"join",actionId:crypto.randomUUID(),issuedAt:i.serverNow}),revision:t.revision,scope:this.scope()}}finally{e===this.generation&&(this.busy=!1,this.emit())}return this.retry()}async control(e){if(!this.room||this.pending||this.busy)throw Error("Reconnect or finish the pending public action first.");const t=this.session.credentials();if(!t)throw Error("The original guest identity is required.");const i=this.generation,r=this.scope();this.busy=!0,this.stopped=!1,this.emit();try{await this.refresh(r.arenaId,r.memberId),this.check(i,t.revision);const s=Gh(await ra(this.session,"/skirmish/rules",bi));this.check(i,t.revision);const a=this.room;if(!a||a.arenaId!==r.arenaId||a.membership.memberId!==r.memberId)throw Error("Public membership changed.");this.pending={path:`/skirmish/${encodeURIComponent(a.arenaId)}/commands`,body:Object.freeze({...Ks,kind:e,actionId:crypto.randomUUID(),issuedAt:s.serverNow,memberId:a.membership.memberId,epoch:a.state.epoch,expectedRevision:a.state.revision}),revision:t.revision,scope:this.scope()}}finally{i===this.generation&&(this.busy=!1,this.emit())}return this.retry()}async command(e){const t=this.room,i=this.session.credentials();if(!t||!i||this.busy||this.pending||!t.membership.canAct||!t.membership.lifeId)throw Error("This public planning opportunity is unavailable.");return this.rejected=null,this.pending={path:`/skirmish/${encodeURIComponent(t.arenaId)}/commands`,body:Object.freeze({...Ks,...e,...e.kind==="shot"?{aim:Object.freeze({...e.aim})}:{},actionId:crypto.randomUUID(),memberId:t.membership.memberId,lifeId:t.membership.lifeId,epoch:t.state.epoch,roundId:t.state.roundId,expectedRevision:t.state.revision}),revision:i.revision,scope:this.scope()},this.retry()}async retry(){const e=this.pending;if(!e||this.busy)throw Error("No public action is ready to retry.");if(this.session.assertRevision(e.revision),e.unadmitted&&e.scope.arenaId){const i=this.room,r=e.body;if(!i||i.arenaId!==e.scope.arenaId||i.membership.memberId!==e.scope.memberId||r.epoch!==void 0&&i.state.epoch!==r.epoch||r.lifeId!==void 0&&(i.membership.lifeId!==r.lifeId||i.state.roundId!==r.roundId))throw this.pending=null,this.emit(),Error("The public opportunity changed. Choose a new action explicitly.")}let t=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const i=await this.session.request(e.path,e.body);if(this.check(t,e.revision),this.pending!==e)throw Error("The pending public action changed.");const r=this.applyReply(i,e);return this.check(t,e.revision),this.pending=null,r&&(t=++this.generation),e.body.kind==="leave"?this.disconnect():this.openSocket(),this.room}catch(i){if(t!==this.generation)throw i;if(this.session.revision!==e.revision)this.forgetArena();else if(i instanceof oi&&i.transient)["admission_rate","command_rate"].includes(i.code??"")||(e.uncertain=!0),e.unadmitted=!e.uncertain;else if(wi(i,bi))this.pending=null,this.rejected=null;else if(i instanceof oi&&bx.has(i.code??"")){if(this.pending=null,e.body.kind==="shot"&&this.room&&this.room.state.epoch===e.body.epoch&&this.room.state.roundId===e.body.roundId&&this.room.membership.lifeId===e.body.lifeId&&(this.rejected=this.opportunity(this.room)),this.room)try{await this.refresh()}catch(r){if(wi(r,bi))throw r}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(r){if(wi(r,bi))throw r}throw i}finally{t===this.generation&&(this.busy=!1,this.emit())}}async refresh(e=this.room?.arenaId??this.savedArena?.arenaId,t=this.room?.membership.memberId??this.savedArena?.memberId){if(!e||!t)return;const i=this.session.credentials();if(!i)throw Error("The original guest identity is required to reconnect.");const r=this.generation;try{const s=await ra(this.session,`/skirmish/${encodeURIComponent(e)}`,bi);this.check(r,i.revision),this.install(s,{arenaId:e,memberId:t})}catch(s){throw this.check(r,i.revision),wi(s,bi)&&this.room?.arenaId===e&&this.room.membership.memberId===t&&(this.pending?.scope.arenaId===e&&this.pending.scope.memberId===t&&this.pending.revision===i.revision&&(this.pending=null),this.rejected=null,this.emit()),s instanceof oi&&[403,404,410].includes(s.status)?(this.forgetArena(),Error("This public membership is no longer available. Join explicitly with the same guest.")):s}}async reconnect(){if(this.pending||this.busy)throw Error("Retry the pending public action first.");if(!this.room&&!this.savedArena)throw Error("No saved public membership is available.");this.stopped=!1;const e=this.generation;if(await this.refresh(),e!==this.generation)throw Error("The public context changed.");this.openSocket()}receive(e){if(!(!this.session.credentials()||!this.room||this.stopped||!Ro(e)||e.type!=="skirmish")){if(Object.keys(e).sort().join(",")!=="envelope,type")throw Error("Unsupported public event.");this.install(e.envelope,this.scope())}}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e||!this.factory)return;const t=this.generation,i=++this.socketGeneration,r=this.scope(),s=this.factory(`${this.session.serviceId.replace(/^http/,"ws")}/skirmish/events`);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===i&&this.generation===t&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={...Ks,type:"authenticate",token:e.token,arenaId:r.arenaId,memberId:r.memberId,lastRevision:this.room?.snapshotRevision??0};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));if(!Ro(c)||c.type!=="skirmish")throw Error("Unsupported public stream message.");if(this.receive(c),!a())return;this.connected=!0,this.emit()}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),(a()||this.generation===t&&this.session.revision===e.revision&&!this.stopped)&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.poll||this.stopped)return;const e=this.generation;this.poll=setTimeout(async()=>{if(this.poll=null,!(this.stopped||e!==this.generation)){try{await this.refresh()}catch(t){e===this.generation&&this.onError(t)}e===this.generation&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.recovery||this.stopped)return;const e=this.generation;this.recovery=setTimeout(async()=>{if(this.recovery=null,!(this.stopped||e!==this.generation))try{await this.refresh(),e===this.generation&&this.openSocket()}catch(t){e===this.generation&&(this.onError(t),this.scheduleRecovery())}},1500)}disconnect(){this.socketGeneration++;const e=this.socket;this.socket=null,e?.close(),this.connected=!1,this.poll&&clearTimeout(this.poll),this.recovery&&clearTimeout(this.recovery),this.poll=null,this.recovery=null}close(){this.stopped=!0,this.generation++,this.disconnect(),this.busy=!1,this.emit()}forgetArena(){this.close(),this.room=null,this.pending=null,this.rejected=null,this.hasClock=!1;try{this.storage?.removeItem(this.locatorKey)}catch{}this.emit()}}function Sx(n){const e=n.state,t=e.locks.find(a=>a.actorId===n.membership.actorId),i=n.membership.status,s=["idle","left"].includes(i)&&e.state==="suspended"?"Paused — no active players. Rejoin when ready to play.":i==="pending"?"Your place is reserved. You enter at the next planning window.":i==="idle"?"Spectating. Inactive after three missed windows; Rejoin when ready to play.":i==="left"?"Spectating. You left public play; Rejoin when ready to play.":i==="aborted"?"This arena stopped safely. Rejoin to start a fresh arena.":i==="respawn"?"Waiting for a clear place to respawn.":i==="suspended"?"The empty arena is suspended. Reconnect to return.":e.phase!=="planning"?"Arrows resolve in the published priority order.":n.membership.canAct?"Choose an arrow or pass. Locks are final.":t?.locked?t.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":"You will respawn at the next planning window.";return{phase:i==="active"?e.phase.toUpperCase():i.toUpperCase(),turn:s,warning:e.resetIn!==null?`Fresh terrain in ${e.resetIn} completed round${e.resetIn===1?"":"s"}.`:"",priority:e.priority,locks:e.locks.map(a=>({actorId:a.actorId,text:a.locked?"Locked":"Planning"})),canRejoin:["idle","left","aborted"].includes(i),canLeave:!["left","idle"].includes(i)}}function Ex(n){return n.state.members.map((e,t)=>{const i=n.state.actors.find(s=>s.id===e.actorId),r=n.connections.find(s=>s.actorId===e.actorId)?.label??`Archer ${t+1}`;return{actorId:e.actorId,kind:e.kind,label:r,health:i?.health??0,text:`${r}${e.actorId===n.membership.actorId?" · you":""} · ${e.spawnPending||!i?"waiting to respawn":i.eliminated?"respawning next round":`${i.health} health`}${n.state.locks.find(s=>s.actorId===e.actorId)?.locked?" · locked":""}`}})}function wx(n=Fa.version){const e=eu(n),t=e.minimumParticipants===4?"four":String(e.minimumParticipants);return`Shared ${e.planningMs/1e3}-second planning · at least ${t} archers · respawn next round · fresh terrain every ${e.resetAfter} completed rounds.`}Ri("arena-1").bounds;function Co(n="arena-1"){const e=Ri(n),{cell:t,width:i,height:r,minX:s,minY:a,bedrockY:o}=e,c=new Array(e.cellCount).fill(0),l=[[-39,-32,-8,0],[-28,-21,4.5,6],[-18.5,-12,10.5,12],[-8,-1,-8,3],[2,8.5,7.5,9],[12,19,-8,0],[22,28.5,13.5,15],[32,39,4.5,6],[-24,-20,16,17],[-5.5,-2,16,17],[7.5,11,20,21],[27.5,31.5,24.5,25.5],[-28,-27.25,6,9.5],[-2,-1,3,6.5],[17.5,18.5,0,3.5],[32,32.75,6,9.25]];for(let u=0;u<r;u++)for(let h=0;h<i;h++){const m=s+(h+.5)*t,g=a+(u+.5)*t;(n==="arena-2"?l.some(([v,p,f,b])=>m>=v&&m<p&&g>=f&&g<b):g<0||(m<-25||m>25)&&g>=5&&g<6||Math.abs(m)>10&&Math.abs(m)<13&&g>=11&&g<12)&&(c[u*i+h]=1)}const d=n==="arena-2"?[[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]].map(([u,h])=>({x:u,y:h,z:0})):[-28,-20,-16,-8,8,16,20,28].map(u=>({x:u,y:0,z:0}));return{version:e.version,revision:0,cell:t,minX:s,minY:a,width:i,height:r,bedrockY:o,cells:c,spawnPads:d}}function Ax(n){if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid arena snapshot.");const e=Ri(n.version);if(n.cell!==e.cell||n.width!==e.width||n.height!==e.height||n.minX!==e.minX||n.minY!==e.minY||n.bedrockY!==e.bedrockY||!Number.isSafeInteger(n.revision)||n.revision<0||!Array.isArray(n.cells)||n.cells.length!==e.cellCount||!Array.isArray(n.spawnPads)||n.spawnPads.length!==8)throw new RangeError("Invalid arena snapshot.");return e}function Tx(n){if(Ax(n),al(n),!n.cells.every(e=>e===0||e===1))throw new RangeError("Invalid occupancy mask.")}function au(n,e){if(!n||typeof n!="object"||Array.isArray(n)||"cells"in n)throw new RangeError("Invalid compact terrain mask.");const t=al(n,e);if(typeof n.maskHex!="string"||n.maskHex.length!==t.maskHexLength||!/^[0-9a-f]+$/.test(n.maskHex))throw new RangeError("Invalid compact terrain mask.");const{maskHex:i,...r}=n,s=new Array(t.cellCount);for(let o=0;o<i.length;o++){const c=Number.parseInt(i[o],16);for(let l=0;l<4;l++)s[o*4+l]=c>>l&1}const a={...r,cells:s};return Tx(a),a}const Vh={protocolVersion:Ua,rulesVersion:Gr},Io={protocolVersion:Nn,rulesVersion:Gr},Fn=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function Rx(n){if(!Fn(n)||![Ua,Nn].includes(n.protocolVersion)||n.rulesVersion!==Gr||typeof n.roomId!="string"||!n.roomId||typeof n.code!="string"||!Number.isFinite(n.serverNow)||!Number.isSafeInteger(n.snapshotRevision)||Number(n.snapshotRevision)<0||!Fn(n.membership)||typeof n.membership.actorId!="string"||typeof n.membership.lifeId!="string"||typeof n.membership.canStart!="boolean"||!Array.isArray(n.connections)||!Fn(n.state)||!Number.isSafeInteger(n.state.revision)||Number(n.state.revision)<0||n.state.id!==n.roomId||!Array.isArray(n.state.actors)||!Array.isArray(n.state.seats)||!Fn(n.state.seat)||!["waiting","active","finished","aborted"].includes(String(n.state.state))||!["planning","resolving","settling"].includes(String(n.state.phase))||!(n.currentTurnId===null||typeof n.currentTurnId=="string"))throw new Error("The combat service returned an unsupported room.");if(n.protocolVersion===Nn?n.roomKind!=="volley"||n.state.version!=="volley-1"||n.currentTurnId!==null||!Number.isSafeInteger(n.state.epoch)||typeof n.state.roundId!="string"||!Array.isArray(n.state.locks)||!Array.isArray(n.state.priority):n.state.version!=="duel-1"||"roomKind"in n)throw new Error("The combat service returned an unsupported room kind or version.");const e=n;if("tuning"in e.state)try{qd(e.state.tuning)}catch{throw new Error("The combat service returned an unsupported tuning profile.")}return au(e.state.terrain,"arena-1"),e}class Cx{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};rejectedLock=null;get lockAgain(){const e=this.room,t=e?.state,i=this.rejectedLock;return!!(i&&e&&t&&e.protocolVersion===Nn&&i.roomId===e.roomId&&i.lifeId===e.membership.lifeId&&i.epoch===e.state.epoch&&i.roundId===e.state.roundId&&t.seat.canAct)}session;socketFactory;socket=null;reconnectTimer=null;pollTimer=null;stopped=!1;socketGeneration=0;roomGeneration=0;clockOffset=0;hasClock=!1;storage;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new Na(e,t,i),this.storage=i,this.socketFactory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>Date.now()+this.clockOffset;get savedRoom(){try{const e=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");return Fn(e)&&e.guestId===this.session.guestId&&typeof e.roomId=="string"?e.roomId:null}catch{return null}}emit(){this.onChange()}context(e=this.room?.roomId){const t=this.room?.roomId===e?this.room?.membership:void 0;return{generation:this.roomGeneration,roomId:e,...this.room&&this.room.roomId===e?{protocolVersion:this.room.protocolVersion}:{},...t?{membership:{actorId:t.actorId,lifeId:t.lifeId}}:{}}}assertContext(e){if(e.generation!==this.roomGeneration||e.roomId&&this.room&&e.roomId!==this.room.roomId)throw new Error("The combat room context changed while this request was pending.")}validateResponse(e,t,i){this.session.assertRevision(t),this.assertContext(i);const r=Rx(e);if(i.protocolVersion&&r.protocolVersion!==i.protocolVersion)throw new Error("The combat response changed the confirmed room kind or protocol version.");if(i.roomId&&r.roomId!==i.roomId)throw new Error("The combat response belongs to a different room.");if(i.membership&&(r.membership.actorId!==i.membership.actorId||r.membership.lifeId!==i.membership.lifeId))throw new Error("The combat response belongs to a different membership identity.");return r}apply(e,t,i){const r=this.validateResponse(e,t,i);if(this.room&&this.room.roomId===r.roomId){if(r.snapshotRevision<this.room.snapshotRevision||r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return;if(r.state.revision<this.room.state.revision)throw new Error("The combat response would reverse the confirmed room state.")}this.room=r;const s=r.serverNow-Date.now();this.clockOffset=this.hasClock?Math.max(this.clockOffset,s):s,this.hasClock=!0;try{this.storage?.setItem(this.session.storageKeys.room,JSON.stringify({roomId:r.roomId,guestId:this.session.guestId}))}catch{}this.emit()}async create(e){return this.begin("/rooms",e?{...Io,...e}:Vh,e?Nn:Ua)}async join(e){return this.begin("/rooms/join",{...Io,code:e.trim().toUpperCase()})}async begin(e,t,i){if(this.busy||this.pending||this.room)throw new Error("Leave the current room or finish the pending action first.");this.roomGeneration++;const r={...this.context(),...i?{protocolVersion:i}:{}};this.stopped=!1,this.busy=!0,this.emit();try{const s=await this.session.ensure();this.session.assertRevision(s.revision),this.assertContext(r),this.pending={path:e,body:{actionId:crypto.randomUUID(),...t},revision:s.revision,context:r}}finally{r.generation===this.roomGeneration&&(this.busy=!1)}return this.retry()}async command(e){if(this.busy||this.pending||!this.room)throw new Error("Finish the pending action first.");const t=this.room,i=this.session.credentials();if(!i)throw new Error("Reconnect with the existing guest first.");const r=t.protocolVersion===Nn;if(r&&e.kind==="cancel")throw new Error("Volley locks are immutable and cannot be cancelled.");const s=e.kind==="shot"||e.kind==="pass";if(r&&s&&(!t.state.seat.canAct||t.state.state!=="active"||t.state.phase!=="planning"))throw new Error("This planning opportunity is no longer available.");const a=!r&&["shot","pass","cancel"].includes(e.kind)?{turnId:t.currentTurnId}:{};if("turnId"in a&&!a.turnId)throw new Error("This turn is no longer available.");const o=r?{...Io,epoch:t.state.epoch,...s?{roundId:t.state.roundId}:{}}:{...Vh,...a};this.rejectedLock=null;const c={actionId:crypto.randomUUID(),expectedRevision:t.state.revision,lifeId:t.membership.lifeId,...o,...e};return this.pending={path:`/rooms/${encodeURIComponent(t.roomId)}/commands`,body:c,revision:i.revision,context:this.context()},this.retry()}async retry(){if(!this.pending||this.busy)throw new Error("No pending action is ready to retry.");const e=this.pending;if(this.session.assertRevision(e.revision),this.assertContext(e.context),e.unadmitted&&e.context.roomId){const t=this.room,i=e.body;if(!t||t.roomId!==e.context.roomId||t.membership.lifeId!==i.lifeId||i.protocolVersion===Nn&&(t.protocolVersion!==Nn||t.state.epoch!==i.epoch||"roundId"in i&&t.state.roundId!==i.roundId)||"turnId"in i&&t.currentTurnId!==i.turnId)throw this.pending=null,this.emit(),new Error("The room opportunity changed. Choose an action for the current room.")}this.busy=!0,this.emit();try{const t=await this.session.request(e.path,e.body);if(this.session.assertRevision(e.revision),this.assertContext(e.context),this.pending!==e)throw new Error("The pending combat action changed.");return e.body.kind==="leave"?(this.validateResponse(t,e.revision,e.context),this.pending=null,this.clearRoom()):(this.apply(t,e.revision,e.context),this.pending=null,this.openSocket()),this.room}catch(t){if(e.context.generation!==this.roomGeneration)throw t;if(this.session.revision!==e.revision)this.pending=null,this.clearRoom();else if(t instanceof oi&&t.transient)t.code!=="admission_rate"&&t.code!=="command_rate"&&(e.uncertain=!0),e.unadmitted=!e.uncertain;else{if(wi(t,vr))throw this.pending=null,this.rejectedLock=null,Nc(vr);if(Fn(t)&&typeof t.status=="number"&&t.status>=400&&t.status<500){if(this.pending=null,t.status===409&&e.body.kind==="shot"&&e.body.protocolVersion===Nn&&e.context.roomId&&(this.rejectedLock={roomId:e.context.roomId,lifeId:String(e.body.lifeId),epoch:e.body.epoch,roundId:e.body.roundId}),this.room)try{await this.refresh()}catch(i){if(wi(i,vr))throw i}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(i){if(wi(i,vr))throw i}}throw t}finally{e.context.generation===this.roomGeneration&&(this.busy=!1,this.emit())}}async reconnect(e=this.room?.roomId??this.savedRoom){if(this.pending)throw new Error("Retry the pending action first.");if(!e)throw new Error("No saved room is available.");if(!this.session.credentials())throw new Error("The original guest identity is required to reconnect.");const t=this.context(e);this.stopped=!1,await this.refresh(e),this.assertContext(t),this.openSocket()}async refresh(e=this.room?.roomId){if(!e)return;const t=this.session.credentials();if(!t)throw new Error("The original guest identity is required.");const i=this.context(e);try{const r=await ra(this.session,`/rooms/${encodeURIComponent(e)}`,vr);this.apply(r,t.revision,i)}catch(r){if(this.session.assertRevision(t.revision),this.assertContext(i),wi(r,vr)&&(this.pending?.context.roomId===e&&this.pending.revision===t.revision&&(this.pending=null),this.room?.roomId===e&&(this.rejectedLock=null),this.emit()),Fn(r)&&typeof r.status=="number"&&[403,404,410].includes(r.status)){this.pending=null,this.clearRoom(e);const s=Object.assign(new Error("This room is no longer available. Create or join another room with the same guest."),{status:r.status});throw this.onError(s),s}throw r}}receive(e){const t=this.session.credentials();!t||!this.room||this.stopped||!Fn(e)||e.type!=="room"||e.roomId===this.room.roomId&&this.apply(e,t.revision,this.context())}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e)return;if(this.connected=!1,!this.socketFactory){this.connected=!0,this.emit();return}const t=++this.socketGeneration,i=this.context(),r=this.room.roomId,s=this.socketFactory(this.session.endpoint.combatSocket);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===t&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={type:"authenticate",token:e.token,roomId:r,lastRevision:this.room?.snapshotRevision??0,protocolVersion:this.room.protocolVersion,rulesVersion:Gr};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));Fn(c)&&c.type==="room"&&(this.apply(c,e.revision,i),this.connected=!0,this.emit())}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),!this.stopped&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.pollTimer||this.stopped)return;const e=this.context();this.pollTimer=setTimeout(async()=>{if(this.pollTimer=null,!(!this.room||this.stopped||e.generation!==this.roomGeneration)){try{await this.refresh()}catch(t){e.generation===this.roomGeneration&&this.onError(t)}e.generation===this.roomGeneration&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.reconnectTimer||this.stopped)return;const e=this.context();this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,!(this.stopped||e.generation!==this.roomGeneration))try{await this.refresh(),this.assertContext(e),this.openSocket()}catch(t){e.generation===this.roomGeneration&&(this.onError(t),this.scheduleRecovery())}},1500)}clearRoom(e=this.room?.roomId??this.savedRoom??void 0){this.close(),this.room=null,this.rejectedLock=null,this.hasClock=!1;try{const t=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");Fn(t)&&t.roomId===e&&(!this.session.guestId||t.guestId===this.session.guestId)&&this.storage?.removeItem(this.session.storageKeys.room)}catch{}this.emit()}forgetRoom(){this.pending=null,this.clearRoom()}close(){this.stopped=!0,this.socketGeneration++,this.roomGeneration++,this.busy=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.pollTimer&&clearTimeout(this.pollTimer),this.reconnectTimer=null,this.pollTimer=null;const e=this.socket;this.socket=null,e?.close(),this.connected=!1}}function ou(n,e,t){const i=1-Math.exp(-18*Math.max(0,t));return{angle:n.angle+(e.angle-n.angle)*i,pull:n.pull+(e.pull-n.pull)*i}}function _a(n,e=0){const t=n.angle*Math.PI/180,i=Math.cos(t),r=Math.sin(t),s={x:-7.7+i*(1.3-.37),y:2.3+r*(1.3-.37)},a={x:s.x-i*n.pull,y:s.y-r*n.pull},o={x:a.x-i*.16*e,y:a.y-r*.16*e+.04*e},c=n.pull+(.08-n.pull)*e,l={x:s.x-i*c,y:s.y-r*c},d=-7.95,u=2.3,h=o.x-d,m=o.y-u,g=Math.hypot(h,m),v=(.65**2-.9**2+g**2)/(2*g),p=Math.sqrt(Math.max(0,.65**2-v**2)),f={x:d+h/g*v-m/g*p,y:u+m/g*v+h/g*p};return{bow:s,hand:o,nock:l,elbow:f}}const Hh=.16;function ss(n,e,t){if(e>=Hh){const S=Ph(n,e);return{position:Pi(n,e),angle:Math.atan2(S.y,S.x)}}const i=Hh,r=Math.max(0,e)/i,s=Pi(n,i),a=Ph(n,i),o=Math.hypot(n.velocity.x,n.velocity.y),c={x:Math.cos(t.angle)*o,y:Math.sin(t.angle)*o},l=2*r**3-3*r*r+1,d=r**3-2*r*r+r,u=-2*r**3+3*r*r,h=r**3-r*r,m=(6*r*r-6*r)/i,g=3*r*r-4*r+1,v=(-6*r*r+6*r)/i,p=3*r*r-2*r,f={x:l*t.tip.x+d*i*c.x+u*s.x+h*i*a.x,y:l*t.tip.y+d*i*c.y+u*s.y+h*i*a.y},b={x:m*t.tip.x+g*c.x+v*s.x+p*a.x,y:m*t.tip.y+g*c.y+v*s.y+p*a.y};return{position:f,angle:Math.atan2(b.y,b.x)}}const xn=Object.freeze({count:7,start:.055,duration:.228,radiusPx:3.5,outlinePx:1.75});function xa(n){if(!Number.isInteger(n.count)||n.count<1||n.count>32||![n.start,n.duration].every(Number.isFinite)||n.start<0||n.duration<0||n.start+n.duration>.35)throw new RangeError("Short opening guide settings required.");return Array.from({length:n.count},(e,t)=>n.start+(n.count===1?0:t/(n.count-1)*n.duration))}const di=(n,e,t)=>Math.min(t,Math.max(e,n)),Ix=800,cu=64,Px=12,Lx=[.49,.58,.38],Dx=[.6,.46,.31],Ux=[.36,.29,.24],Nx=[.22,.22,.26],Po=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,Wh=n=>[Po(n[0]),Po(n[1]),Po(n[2])],Fx=.5,Ox=.75;function Xh(n,e,t=0){const i=t-n,r=Math.max(1e-6,t-e);return i<=Fx?Lx:n-e<Ox?Nx:i/r<.55?Dx:Ux}function kx(n){return[di(n[0]*.62+.2,0,1),n[1]*.5+.07,n[2]*.42+.02]}function Bx(n,e,t,i,r){if(!r.size)return!1;for(const[s,a]of[[-1,0],[1,0],[0,-1],[0,1]]){const o=n+s,c=e+a;if(o>=0&&c>=0&&o<t&&c<i&&r.has(c*t+o))return!0}return!1}function zx(n,e,t=Ix){return n!==null&&e>=n&&e-n<=t}function Gx(n,e){if(!n.length)return null;let t=0,i=0;for(const s of n)t+=s%e.width,i+=Math.floor(s/e.width);const r=n.length;return{x:e.minX+(t/r+.5)*e.cell,y:e.minY+(i/r+.5)*e.cell,extent:Math.sqrt(r)*e.cell,count:r}}const lu=n=>n.extent>=1.5,ll=.35;function Vx(n,e,t,i){return i||!lu(n)||t<=0?0:di(n.extent*.1,0,.6)*di(1-e/(t*1.5),0,1)}const Hx=(n,e=ll)=>n<0||n>=e?0:(1-n/e)**2;function Wx(n,e,t=ll){const i=e*Hx(n,t);return i===0?{x:0,y:0}:{x:i*Math.sin(n*71),y:i*Math.sin(n*93+1.3)}}function Xx(n,e,t,i){if(t<e||n.length<2)return null;const r=(t-e)/1e3,s=n.findIndex(u=>u.time>=r);if(s<=0)return{vx:0,vy:0};const a=n[s-1],o=n[s],c=a.poses.find(u=>u.actorId===i)?.feet,l=o.poses.find(u=>u.actorId===i)?.feet,d=o.time-a.time;return!c||!l||d<=1e-9?{vx:0,vy:0}:{vx:(l.x-c.x)/d,vy:(l.y-c.y)/d}}const Yx=.4,Yh=.5;function qx(n,e){return Math.hypot(n,e)<Yx?0:di(-n*.04,-Yh,Yh)}const $x=(n,e,t)=>n+(e-n)*(1-Math.exp(-10*Math.max(0,t)));function jx(n,e){return n!==null&&n<=-2&&e>-.5?-n:0}const Kx=.22;function Zx(n,e,t=Kx){return n<0||n>=t||e<=0?{sy:1}:{sy:1-di(e*.015,0,.3)*(1-n/t)}}const Jx=.08,qh=.22,Qx=n=>n>=0&&n<Jx;function ev(n,e,t=!1){return t||n<0||n>=qh?0:-e*.22*(1-n/qh)**2}function tv(n,e){return e.filter(t=>n.has(t.id)&&t.health<n.get(t.id)).map(t=>t.id)}class nv{items=[];capacity;constructor(e=cu){this.capacity=e}emit(e){this.items.length>=this.capacity&&this.items.shift(),this.items.push(e)}step(e){for(const t of this.items)t.age+=e,t.x+=t.vx*e,t.y+=t.vy*e,t.kind==="debris"?t.vy-=18*e:(t.vx*=Math.exp(-3*e),t.vy=t.vy*Math.exp(-3*e)+.6*e);this.items=this.items.filter(t=>t.age<t.life)}clear(){this.items=[]}}function iv(n){const e=di(n.age/n.life,0,1);return n.kind==="dust"?n.size*(1+e)*(1-e*e):n.size*(1-e)}function $h(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const jh=(n,e,t)=>Math.imul(Math.round(n*64)|0,73856093)^Math.imul(Math.round(e*64)|0,19349663)^Math.imul(t|0,83492791);function rv(n,e){const t=di(Math.round(4+n*6),4,20),i=di(Math.round(3+n*3),3,12);return e?{debris:Math.min(4,t),dust:Math.min(2,i)}:{debris:t,dust:i}}function sv(n,e,t,i,r){const{debris:s,dust:a}=rv(e.extent,i),o=Math.min(1.2,e.extent*.5),c=3+Math.min(6,e.extent*2);for(let l=0;l<s;l++){const d=Math.PI*(.1+.8*t()),u=c*(.5+t()),h=e.y+(t()-.5)*o;n.emit({kind:"debris",x:e.x+(t()-.5)*o,y:h,vx:Math.cos(d)*u*(t()<.5?-1:1),vy:Math.sin(d)*u,age:0,life:.5+t()*.4,size:.08+t()*.1,color:r(h)})}for(let l=0;l<a;l++)n.emit({kind:"dust",x:e.x+(t()-.5)*o*1.5,y:e.y+(t()-.3)*o,vx:(t()-.5)*3,vy:t()*1.5,age:0,life:.5+t()*.3,size:.3+t()*.3,color:[.78,.74,.66]})}function av(n,e,t,i,r,s){const a=s?1:di(Math.round(i*.5),2,6);for(let o=0;o<a;o++)n.emit({kind:"dust",x:e+(r()-.5)*.8,y:t+.05,vx:(o%2?1:-1)*(.6+r()*1.2),vy:.3+r()*.5,age:0,life:.35+r()*.2,size:.25+r()*.2,color:[.78,.74,.66]})}function ov(n){return n.version==="skirmish-1"||n.version==="skirmish-2"}function cv(n,e){const t=ov(n),i=!t&&Cn(n)?n:null,r=t?"skirmish":i?"volley":"duel",s=t?n.epoch:i?.epoch??0,a=t?n.self:n.seat,o=JSON.stringify(n.version==="skirmish-2"?[r,n.id,s,n.version,sl(n.version).version]:[r,n.id,s]),c=t?n.members.map((u,h)=>({actorId:u.actorId,lifeId:u.lifeId,teamId:null,label:u.kind==="npc"?`NPC ${h+1}`:null})):n.seats.map(u=>({actorId:u.actorId,lifeId:"lifeId"in u?u.lifeId:u.actorId===e?a.lifeId:null,teamId:"teamId"in u?u.teamId:null,label:null})),l=t?n.action?.aim?{...n.action.aim,id:n.action.id,actorId:n.action.actorId,lifeId:n.action.lifeId,epoch:n.action.epoch,roundId:n.action.roundId}:null:n.action;let d=null;if(t){const u=n.effect;u&&(d={identity:JSON.stringify([o,u.action.actorId,u.action.lifeId,u.action.roundId,u.action.id]),delta:u.delta,motion:u.motion,startedAt:u.startedAt,endsAt:u.endsAt})}else{const u=n.effect;u&&(d={identity:JSON.stringify([o,u.actorId,u.lifeId,"roundId"in u?u.roundId:null,u.actionId]),delta:u.delta,motion:u.motion,startedAt:u.startedAt,endsAt:u.endsAt})}return{format:r,id:n.id,revision:n.revision,epoch:s,worldKey:o,scopeKey:JSON.stringify([o,e,a.lifeId]),planningKey:t?JSON.stringify([o,e,a.lifeId,n.roundId]):K_(n),sharedPlanning:t||!!i,state:n.state,phase:n.phase,terrain:n.terrain,actors:n.actors,seats:c,seat:{canAct:a.canAct,bombReady:a.bombReady,lifeId:a.lifeId},deadlineAt:n.deadlineAt,launchAt:n.launchAt,contactAt:n.contactAt,action:l,effect:d,pressure:i?.preset==="royale-shrink-1"?i.pressure:null,lockedPlan:t?n.locks.find(u=>u.actorId===e)?.plan??null:Z_(n,e),tuning:ax(n)}}function lv(n,e){return!!n&&n.planningKey===e.planningKey&&e.state==="active"&&e.phase==="planning"&&e.seat.canAct}function hv(n,e){return JSON.stringify([n.worldKey,e.actorId,e.lifeId,e.epoch,e.roundId,e.id,n.launchAt])}const Kh=new Set,Lo=cu,Ot=n=>document.getElementById(n),Pt=(n,e,t=0)=>new F(n,e,t);class dv{constructor(e){this.canvas=e,this.scene.add(this.terrainGroup,this.pressureGroup,this.fxGroup),this.motionQuery=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.reducedMotion=!!this.motionQuery?.matches,this.motionQuery?.addEventListener?.("change",this.onMotionChange),this.flash.visible=!1,this.flash.position.z=.9,this.fxGroup.add(this.flash);for(let i=0;i<Lo;i++){const r=new Dt(this.particleGeometry,new ua({color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));r.visible=!1,r.position.z=.6,this.fxGroup.add(r),this.particleMeshes.push(r)}this.scene.add(new Ld("#fff4d8","#62765d",2.6));const t=new Ud("#fff4d8",3);t.position.set(-8,20,12),this.scene.add(t),this.camera.position.set(0,8,55),this.camera.lookAt(0,8,0),this.rebuildTerrain(this.terrain);for(const i of["normal","bomb","teleport"])Ot(`combat-arrow-${i}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.arrow=i,this.updateControls())});for(const i of[-1,1])Ot(`combat-face-${i===1?"right":"left"}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim.facing=i,this.updateControls())});for(const i of["angle","power"])Ot(`combat-${i}`).addEventListener("input",()=>{!this.canAim()||this.draw||(this.aim.angle=Number(Ot("combat-angle").value),this.aim.power=Number(Ot("combat-power").value)/100,this.updateControls())});Ot("combat-fire").addEventListener("click",()=>this.fire()),Ot("combat-overview").addEventListener("click",()=>{!this.draw&&this.state?.phase==="planning"&&this.frame(!0)}),this.canvas.addEventListener("pointerdown",i=>this.pointerDown(i)),this.canvas.addEventListener("pointermove",i=>this.pointerMove(i)),this.canvas.addEventListener("pointerup",i=>{if(!this.active||this.draw?.id!==i.pointerId)return;this.pointerMove(i);const r=this.draw?.valid;this.endDraw(!r),r&&this.fire()});for(const i of["pointercancel","lostpointercapture"])this.canvas.addEventListener(i,r=>{this.active&&this.draw?.id===r.pointerId&&this.cancelInput()})}canvas;scene=new Ed;camera=new bs(-24,24,18,-10,.1,150);materials=new Map;terrainGroup=new tn;chunks=new Map;terrain=Co();terrainKey="";terrainWorld="";terrainMaterial=new Pc({color:"#ffffff",roughness:1,flatShading:!0,vertexColors:!0});reducedMotion=!1;motionQuery=null;onMotionChange=e=>{this.reducedMotion=e.matches,e.matches&&(this.shake=null)};fxGroup=new tn;particles=new nv(Lo);particleMeshes=[];particleGeometry=new ys(1,1);flash=new Dt(new Ra(1,24),new ua({color:"#fff2c4",transparent:!0,opacity:0,depthWrite:!1}));flashAge=1;shake=null;fxIdentity="";lastHealth=new Map;pressureGroup=new tn;pressureKey="";actorLabels=new Map;labels=document.getElementById("combat-actor-labels");lockAgain=!1;rigs=new Map;state=null;get tuning(){return this.state?.tuning??Ji}ownId=null;active=!1;draw=null;width=1;height=1;theme="light";aim={angle:29,power:.62,facing:1};arrow="normal";busy=!1;online=!1;serverNow=()=>Date.now();guide=document.getElementById("combat-guide");dots=xa(xn).map(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","circle");return e.setAttribute("r",String(xn.radiusPx)),e.setAttribute("stroke-width",String(xn.outlinePx)),this.guide.append(e),e});onShot=()=>{};onDrawing=()=>{};material(e){let t=this.materials.get(e);return t||(t=new Pc({color:e,roughness:1,flatShading:!0}),this.materials.set(e,t)),t}box(e,t,i,r,s,a,o,c){const l=new Dt(new tr(s,a,o),this.material(c));return l.position.set(t,i,r),e.add(l),l}beam(e,t,i,r,s){const a=this.box(e,0,0,0,r,1,r,s);return this.updateBeam(a,t,i),a}updateBeam(e,t,i){e.position.copy(t).add(i).multiplyScalar(.5),e.scale.y=t.distanceTo(i),e.quaternion.setFromUnitVectors(Pt(0,1),i.clone().sub(t).normalize())}makeArrow(e){const t=new tn;this.box(t,-.6,0,0,1.2,.045,.045,"#f3dfaa"),this.box(t,-1.08,0,0,.22,.17,.04,"#e9e6c8");const i=new Dt(new vs(.085,.24,4),this.material("#58685d"));return i.rotation.z=-Math.PI/2,i.position.x=-.12,t.add(i),e.add(t),t}makeRig(e){const t=new tn;this.scene.add(t);const i=this.state?.format==="volley"?this.state.seats.find(u=>u.actorId===this.ownId)?.teamId:null,r=this.state?.format==="volley"?this.state.seats.find(u=>u.actorId===e.id)?.teamId:null,s=e.id===this.ownId?"#d19b58":i&&i===r?"#78ad75":"#6e98a0";for(const u of[-.3,.4])this.box(t,u,.47,0,.36,.8,.4,"#38473f");for(const u of[-.36,.46])this.box(t,u,.12,.12,.64,.24,.55,"#4c4938");this.box(t,0,1.53,0,.85,1.5,.6,s),this.box(t,0,1.07,.32,.95,.18,.12,"#6b6845"),this.box(t,0,(ti.head.minY+ti.head.maxY)/2,0,.65,ti.head.maxY-ti.head.minY,.6,"#eac795"),this.box(t,-.13,2.92,-.04,.95,.27,.76,"#4d6e57"),this.box(t,-.26,2.64,-.02,.23,.45,.65,"#4d6e57"),this.box(t,.32,2.65,.32,.08,.08,.07,"#34483c");const a=new tn;t.add(a);const o=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let u=1;u<o.length;u++)this.beam(a,Pt(...o[u-1]),Pt(...o[u]),.075,"#78523c");const c=new jt().setFromPoints([Pt(0,-.92),Pt(-.3,0),Pt(0,.92)]);a.add(new br(c,new Ir({color:"#f1e7bf"})));const l=[this.beam(t,Pt(0,2),Pt(1,2),.23,"#eac795"),this.beam(t,Pt(0,2),Pt(1,2),.22,s),this.beam(t,Pt(0,2),Pt(1,2),.18,"#eac795")],d=this.box(t,0,0,.12,.19,.19,.19,"#eac795");return{root:t,bow:a,string:c,arms:l,hand:d,arrow:this.makeArrow(t),pose:{angle:29,pull:.51},release:0,fx:{lean:0,prevVy:null,landAge:9,landSpeed:0,hitAge:9,feet:null}}}disposeRig(e){this.scene.remove(e.root),e.root.traverse(t=>{if(t instanceof Dt&&t.geometry.dispose(),t instanceof br){t.geometry.dispose();const i=t.material;Array.isArray(i)||i.dispose()}})}rebuildTerrain(e,t,i=Kh){const r=Ri(e.version),s=r.chunkSize;if(!t){for(const o of this.chunks.values())this.terrainGroup.remove(o),o.geometry.dispose();this.chunks.clear()}const a=t??Array.from({length:r.maxChunks},(o,c)=>`${c%r.chunkColumns}:${Math.floor(c/r.chunkColumns)}`);for(const o of a){const c=this.chunks.get(o);c&&(this.terrainGroup.remove(c),c.geometry.dispose(),this.chunks.delete(o));const[l,d]=o.split(":").map(Number),u=[],h=[];let m=[1,1,1];const g=(p,f,b,S)=>{u.push(...p,...f,...b,...p,...b,...S);for(let E=0;E<6;E++)h.push(...m)},v=(p,f)=>p>=0&&f>=0&&p<e.width&&f<e.height&&e.cells[f*e.width+p]===1;for(let p=d*s;p<Math.min((d+1)*s,e.height);p++){const f=e.minY+p*e.cell,b=e.cell;for(let S=l*s;S<Math.min((l+1)*s,e.width);S++)if(v(S,p)){const E=H=>Bx(H,p,e.width,e.height,i),A=Xh(f+b/2,e.bedrockY),T=S,R=E(S);for(;S+1<Math.min((l+1)*s,e.width)&&v(S+1,p)&&E(S+1)===R;)S++;m=Wh(R?kx(A):A);const x=e.minX+T*b,M=e.minX+(S+1)*b;g([x,f,.18],[M,f,.18],[M,f+b,.18],[x,f+b,.18]),g([M,f,-.8],[x,f,-.8],[x,f+b,-.8],[M,f+b,-.8]);for(let H=T;H<=S;H++){const C=e.minX+H*b;v(H,p+1)||g([C,f+b,.18],[C+b,f+b,.18],[C+b,f+b,-.8],[C,f+b,-.8]),v(H,p-1)||g([C,f,-.8],[C+b,f,-.8],[C+b,f,.18],[C,f,.18])}v(T-1,p)||g([x,f,-.8],[x,f,.18],[x,f+b,.18],[x,f+b,-.8]),v(S+1,p)||g([M,f,.18],[M,f,-.8],[M,f+b,-.8],[M,f+b,.18])}}if(u.length){const p=new jt;p.setAttribute("position",new Xt(u,3)),p.setAttribute("color",new Xt(h,3)),p.computeVertexNormals();const f=new Dt(p,this.terrainMaterial);this.chunks.set(o,f),this.terrainGroup.add(f)}}}setSnapshot(e,t,i){const r=cv(e,t),s=this.state;this.state=r,this.ownId=t,this.serverNow=i,this.draw&&(!this.canAim()||!lv(s,r))&&this.cancelInput(),(!s||s.scopeKey!==r.scopeKey)&&(this.lastHealth.clear(),this.cancelInput(),this.aim={angle:29,power:.62,facing:r.actors.find(c=>c.id===t)?.facing??1});const a=r.lockedPlan;a?.kind==="shot"&&a.aim&&(this.aim={angle:a.aim.angle,power:a.aim.power,facing:a.aim.facing},this.arrow=a.aim.arrow),this.syncTerrain(),this.syncPressure(),s&&s.worldKey!==r.worldKey&&this.clearFx(),this.noteHealth(r);for(const[c,l]of this.rigs)(s?.worldKey!==r.worldKey||s?.seats.find(d=>d.actorId===c)?.lifeId!==r.seats.find(d=>d.actorId===c)?.lifeId)&&(this.disposeRig(l),this.rigs.delete(c));for(const c of r.actors)this.rigs.has(c.id)||this.rigs.set(c.id,this.makeRig(c));for(const[c,l]of this.rigs)r.actors.some(d=>d.id===c)||(this.disposeRig(l),this.rigs.delete(c));const o=!s||s.worldKey!==r.worldKey;(o||r.phase==="planning"&&(s.planningKey!==r.planningKey||s.phase!=="planning"||s.actors.length!==r.actors.length))&&this.frame(!1,o),this.updateControls()}syncPressure(){const e=this.state,t=e?.pressure??null,i=JSON.stringify(t);if(i===this.pressureKey)return;this.pressureKey=i;for(const s of[...this.pressureGroup.children])this.pressureGroup.remove(s),s instanceof br&&(s.geometry.dispose(),s.material.dispose());if(!t)return;const r=(s,a,o)=>{for(const c of[s,a]){const l=new jt().setFromPoints([Pt(c,-8,.5),Pt(c,18,.5)]),d=o?new Wf({color:"#f3b747",dashSize:.5,gapSize:.35}):new Ir({color:"#70bb9d"}),u=new br(l,d);u.computeLineDistances(),this.pressureGroup.add(u)}};r(t.minX,t.maxX,!1),t.warning&&r(t.warning.minX,t.warning.maxX,!0)}clearFx(){this.particles.clear(),this.shake=null,this.flashAge=1,this.flash.visible=!1,this.fxIdentity="",this.lastHealth.clear();for(const e of this.particleMeshes)e.visible=!1}dispose(){this.clearFx(),this.motionQuery?.removeEventListener?.("change",this.onMotionChange);for(const e of this.particleMeshes)e.material.dispose();this.particleGeometry.dispose(),this.flash.geometry.dispose(),this.flash.material.dispose();for(const e of this.chunks.values())e.geometry.dispose();this.chunks.clear(),this.terrainMaterial.dispose();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear()}colorAt=e=>Xh(e,this.terrain.bedrockY);spawnImpact(e){if(this.particles.capacity=this.reducedMotion?Px:Lo,sv(this.particles,e,$h(jh(e.x,e.y,e.count)),this.reducedMotion,this.colorAt),!lu(e))return;this.flash.position.set(e.x,e.y,.9),this.flash.scale.setScalar(e.extent*.6),this.flashAge=0;const t=this.camera.position.x,i=(this.camera.right-this.camera.left)/2,r=Vx(e,Math.abs(e.x-t),i,this.reducedMotion);r>0&&(this.shake={age:0,amplitude:r})}updateFx(e,t,i){const r=e?.effect;if(r&&r.startedAt!==null&&t>=r.startedAt&&r.identity!==this.fxIdentity&&(this.fxIdentity=r.identity,zx(r.startedAt,t))){const s=Gx(r.delta.removed,this.terrain);s&&this.spawnImpact(s)}if(this.particles.step(i),this.particleMeshes.forEach((s,a)=>{const o=this.particles.items[a];if(!o){s.visible=!1;return}s.visible=!0,s.position.set(o.x,o.y,.6),s.scale.setScalar(Math.max(.001,iv(o)));const c=s.material,l=Wh(o.color);c.color.setRGB(l[0],l[1],l[2]),c.opacity=o.kind==="dust"?.55*(1-o.age/o.life):.95}),this.flashAge<1){this.flashAge+=i/.18;const s=this.flash.material;this.flash.visible=this.flashAge<1,s.opacity=Math.max(0,.85*(1-this.flashAge))}this.shake&&(this.shake.age+=i,this.shake.age>=ll&&(this.shake=null))}noteHealth(e){for(const t of tv(this.lastHealth,e.actors)){const i=this.rigs.get(t);i&&(i.fx.hitAge=0)}this.lastHealth=new Map(e.actors.map(t=>[t.id,t.health]))}actorFx(e,t,i,r,s,a,o){const c=e.fx;c.hitAge+=s,c.landAge+=s,Qx(c.hitAge)&&c.feet&&!o?i=c.feet:c.feet={x:i.x,y:i.y};const l=r?.vy??0,d=r?jx(c.prevVy,l):0;d>0&&!this.reducedMotion&&(c.landAge=0,c.landSpeed=d),d>0&&av(this.particles,i.x,i.y,d,$h(jh(i.x,i.y,Math.round(d*10))),this.reducedMotion),c.prevVy=r?l:null,c.lean=$x(c.lean,r?qx(r.vx,l):0,s);const u=this.reducedMotion||o,h=u?0:c.lean+ev(c.hitAge,a,!1);return e.root.rotation.z=Math.abs(h)<1e-4?0:h,e.root.scale.y=u?1:Zx(c.landAge,c.landSpeed).sy,{feet:i}}setLockAgain(e){this.lockAgain=e,this.updateControls()}syncTerrain(){if(!this.state)return;const e=this.state,t=e.effect;let i=`${e.worldKey}:${e.terrain.version}:${e.terrain.revision}`;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt&&(i+=`:${t.identity}`),i===this.terrainKey)return;let s=au(e.terrain),a=Kh;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt){s={...s,cells:s.cells.slice()};for(const c of t.delta.removed)s.cells[c]=0;a=new Set(t.delta.removed)}if(this.terrainWorld!==e.worldKey||this.terrain.version!==s.version)this.rebuildTerrain(s,void 0,a);else{const c=Ri(s.version),l=[];for(let h=0;h<s.cells.length;h++)s.cells[h]!==this.terrain.cells[h]&&l.push(h);const d=$_(l,s.width,c.chunkSize),u=new Set(d);for(const h of d){const[m,g]=h.split(":").map(Number);for(const[v,p]of[[-1,0],[1,0],[0,-1],[0,1]])m+v>=0&&g+p>=0&&m+v<c.chunkColumns&&g+p<c.chunkRows&&u.add(`${m+v}:${g+p}`)}this.rebuildTerrain(s,[...u],a)}this.terrain=s,this.terrainKey=i,this.terrainWorld=e.worldKey}clearSnapshot(){this.cancelInput(),this.state=null,this.ownId=null,this.lockAgain=!1,this.labels.replaceChildren(),this.actorLabels.clear(),this.syncPressure();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.terrainKey="",this.terrainWorld="",this.clearFx(),this.rebuildTerrain(Co()),this.terrain=Co(),this.frame(),this.updateControls()}setTransport(e,t){e||this.lastHealth.clear(),this.online=e,this.busy=t,this.canAim()||this.cancelInput(),this.updateControls()}activate(){this.active=!0,this.updateControls(),this.frame()}deactivate(){this.cancelInput(),this.active=!1,this.guide.style.visibility="hidden",this.labels.replaceChildren(),this.actorLabels.clear()}setTheme(e){this.theme=e,this.terrainMaterial.color.set(e==="dark"?"#8c8c8c":"#ffffff")}resize(e,t){this.cancelInput(),this.width=e,this.height=t,this.guide.setAttribute("viewBox",`0 0 ${e} ${t}`),this.frame()}frame(e=!1,t=!1){if(this.draw||!t&&this.state&&this.state.phase!=="planning"&&this.state.state==="active")return;const i=this.state?.actors??[],r=Ri(this.terrain.version),s=this.state?.format==="skirmish"&&r.version==="arena-2"&&(e||!i.length),a=ti.nock.x+(this.tuning.shotMinSpeed+this.tuning.shotExtraSpeed)*(xn.start+xn.duration)+1,o=s?r.bounds.minX:e||!i.length?-32:Math.min(...i.map(f=>f.feet.x))-a,c=s?r.bounds.maxX:e||!i.length?32:Math.max(...i.map(f=>f.feet.x))+a,l=s?r.bounds.minY:e?-8:Math.min(0,...i.map(f=>f.feet.y))-2,d=s?r.bounds.maxY:e?18:Math.max(9,...i.map(f=>f.feet.y+ti.height+4)),u=this.state?.sharedPlanning?Math.min(.25,2*(xn.radiusPx+xn.outlinePx)/this.width):0,h=this.width/this.height,m=Math.max(c-o,(d-l)*h)/(1-u),g=m/h,v=(o+c)/2,p=(l+d)/2;Object.assign(this.camera,{left:-m/2,right:m/2,top:g/2,bottom:-g/2}),this.camera.position.set(v,p,55),this.camera.lookAt(v,p,0),this.camera.updateProjectionMatrix()}canAim(){return this.active&&this.online&&!this.busy&&!!this.state?.seat.canAct&&this.state.deadlineAt!==null&&this.serverNow()<this.state.deadlineAt}get hasRoom(){return this.state!==null}get drawing(){return!!this.draw}cancelInput(){this.endDraw(!0)}endDraw(e){if(!this.draw)return;const t=this.draw;this.draw=null,e&&(this.aim=t.previous),this.canvas.hasPointerCapture(t.id)&&this.canvas.releasePointerCapture(t.id),Ot("combat-drag-marker").hidden=!0,this.onDrawing(!1),this.updateControls()}pointerDown(e){if(!this.active)return;if(this.draw){e.pointerId!==this.draw.id&&this.cancelInput();return}if(!this.canAim()||!e.isPrimary||e.button!==0)return;e.preventDefault();const t=this.canvas.getBoundingClientRect();this.draw={id:e.pointerId,x:e.clientX,y:e.clientY,width:t.width,height:t.height,previous:{...this.aim},valid:!1},this.canvas.setPointerCapture(e.pointerId),this.canvas.focus({preventScroll:!0});const i=Ot("combat-drag-marker");i.style.left=`${e.clientX-t.left}px`,i.style.top=`${e.clientY-t.top}px`,i.hidden=!1,this.onDrawing(!0),this.updateControls()}pointerMove(e){if(!this.active||this.draw?.id!==e.pointerId)return;const{x:t,y:i,width:r,height:s}=this.draw,a=e.clientX-t,o=e.clientY-i,c=this.state?.format==="skirmish"?Y_(a,o,r,s):X_(a,o,r,s,this.aim.facing);this.draw.valid=!!c,c&&(this.aim={facing:this.aim.facing,...c}),this.updateControls()}keydown(e){if(this.active){if(e.code==="Escape"){this.cancelInput();return}!this.canAim()||this.draw||(e.code==="Space"?(e.preventDefault(),e.repeat||this.fire()):["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.aim.angle=hi(this.aim.angle+(e.code==="ArrowLeft"?-1:e.code==="ArrowRight"?1:0),5,80),this.aim.power=hi(this.aim.power+(e.code==="ArrowUp"?.02:e.code==="ArrowDown"?-.02:0),.08,1),this.updateControls()))}}fire(){!this.canAim()||this.draw||this.arrow==="bomb"&&!this.state?.seat.bombReady||this.onShot(this.arrow,{...this.aim})}updateControls(){Ot("combat-fire").textContent=this.state?.sharedPlanning?this.lockAgain?"Lock again":"Lock arrow":"Fire arrow";const e=!this.canAim()||!!this.draw;for(const t of["fire","angle","power","face-left","face-right","arrow-normal","arrow-bomb","arrow-teleport"])Ot(`combat-${t}`).disabled=e||t==="arrow-bomb"&&!this.state?.seat.bombReady;for(const t of["normal","bomb","teleport"])Ot(`combat-arrow-${t}`).setAttribute("aria-pressed",String(this.arrow===t));for(const t of[-1,1])Ot(`combat-face-${t===1?"right":"left"}`).setAttribute("aria-pressed",String(this.aim.facing===t));Ot("combat-angle").value=String(this.aim.angle),Ot("combat-power").value=String(this.aim.power*100),Ot("combat-angle-value").textContent=`${Math.round(this.aim.angle)}°`,Ot("combat-power-value").textContent=`${Math.round(this.aim.power*100)}%`,Ot("combat-bomb-status").textContent=this.state?.seat.bombReady?"Bomb ready":"Bomb reloads after your next personal opportunity.",Ot("combat-overview").disabled=!!this.draw||this.state?.phase!=="planning"}render(e,t){if(!this.active)return;const i=this.state,r=this.serverNow();this.syncTerrain(),this.updateFx(i,r,t);let s;const a=i?.effect&&i.effect.startedAt!==null?q_(i.effect.motion,i.effect.startedAt,r):null;for(const g of i?.actors??[]){const v=this.rigs.get(g.id),p=a?.find(H=>H.actorId===g.id)?.feet??g.feet,f=i?.action?.actorId===g.id?i.action:null,b=g.id===this.ownId&&!f,S=f??(b?this.aim:{angle:29,power:.62,facing:g.facing}),E=this.actorFx(v,g,p,i?.effect&&i.effect.startedAt!==null?Xx(i.effect.motion,i.effect.startedAt,r,g.id):null,t,S.facing,!!f);v.root.position.set(E.feet.x,E.feet.y,0),v.root.scale.x=S.facing,v.root.visible=!g.eliminated,b&&(s=g),v.pose=ou(v.pose,{angle:S.angle,pull:.2+S.power*.5},t),v.release+=((f?1:0)-v.release)*(1-Math.exp(-18*t));const A=_a(v.pose,v.release),T=(H,C=.12)=>Pt(H.x+7.72,H.y-.08,C),R=v.pose.angle*Math.PI/180;v.bow.position.copy(T(A.bow)),v.bow.rotation.z=R;const x=v.string.attributes.position;x.setXYZ(1,(A.nock.x-A.bow.x)*Math.cos(R)+(A.nock.y-A.bow.y)*Math.sin(R),0,0),x.needsUpdate=!0,this.updateBeam(v.arms[0],Pt(.02,2.22,.42),T({x:A.bow.x+Math.cos(R)*.37,y:A.bow.y+Math.sin(R)*.37})),this.updateBeam(v.arms[1],Pt(-.23,2.22,.45),T(A.elbow,.28)),this.updateBeam(v.arms[2],T(A.elbow,.28),T(A.hand)),v.hand.position.copy(T(A.hand));const M=T({x:A.nock.x+Math.cos(R)*1.2,y:A.nock.y+Math.sin(R)*1.2});if(v.arrow.position.copy(M),v.arrow.rotation.z=R,v.arrow.visible=!0,f&&i?.launchAt!==null&&i?.launchAt!==void 0&&r>=i.launchAt){const H=Bh(g,S,this.tuning),C=Math.max(0,(Math.min(r,i.contactAt??1/0)-i.launchAt)/1e3),N={tip:{x:g.feet.x+M.x*S.facing,y:g.feet.y+M.y},angle:S.facing===1?R:Math.PI-R},B=hv(i,f);v.flightId!==B&&(v.flightId=B,v.held=N);const X=ss(H,C,v.held??N);v.arrow.position.set((X.position.x-p.x)*S.facing,X.position.y-p.y,.12),v.arrow.rotation.z=S.facing===1?X.angle:Math.PI-X.angle,v.arrow.visible=i.phase!=="settling"}}if(this.guide.style.visibility=s&&this.canAim()&&(!this.draw||this.draw.valid)?"visible":"hidden",s){const g=this.rigs.get(s.id),v=Bh(s,this.aim,this.tuning),p=g.pose.angle*Math.PI/180,f=_a(g.pose),b={tip:{x:s.feet.x+(f.nock.x+7.72+Math.cos(p)*1.2)*this.aim.facing,y:s.feet.y+f.nock.y-.08+Math.sin(p)*1.2},angle:this.aim.facing===1?p:Math.PI-p};xa(xn).forEach((S,E)=>{const A=ss(v,S,b).position,T=Pt(A.x,A.y,.1).project(this.camera);this.dots[E].setAttribute("cx",String((T.x+1)*this.width/2)),this.dots[E].setAttribute("cy",String((1-T.y)*this.height/2))})}for(const[g,v]of this.actorLabels)i?.actors.some(p=>p.id===g)||(v.remove(),this.actorLabels.delete(g));const o=this.width<640,c=i?.sharedPlanning?[...new Set(i.seats.map(g=>g.teamId).filter(g=>g!==null))]:[];(i?.actors??[]).forEach((g,v)=>{let p=this.actorLabels.get(g.id);p||(p=document.createElement("span"),this.actorLabels.set(g.id,p),this.labels.append(p));const f=a?.find(A=>A.actorId===g.id)?.feet??g.feet,b=Pt(f.x,f.y+ti.height+.4,.2).project(this.camera),S=i.seats.find(A=>A.actorId===g.id),E=S&&"teamId"in S&&typeof S.teamId=="string"?` · ${String.fromCharCode(65+c.indexOf(S.teamId))}`:"";p.className="combat-actor-label",p.dataset.actorId=g.id,p.dataset.own=String(g.id===this.ownId),p.style.left=`${(b.x+1)*this.width/2}px`,p.style.top=`${(1-b.y)*this.height/2-(o&&i.actors.length>4?v%2*16:0)}px`,p.textContent=`${g.id===this.ownId?"You":S?.label??`#${v+1}`}${E}${o?"":` · ${g.eliminated?"out":g.health}`}`}),e.setClearColor(this.theme==="dark"?"#202f36":"#dce8df");const l=this.shake?Wx(this.shake.age,this.shake.amplitude):null,d=this.camera.position.clone();l&&this.camera.position.set(d.x+l.x,d.y+l.y,d.z),e.render(this.scene,this.camera),this.camera.position.copy(d);const u=this.ownId?this.rigs.get(this.ownId):null,h=i?.format==="skirmish"&&i.action?.actorId===this.ownId?i.action:null,m=u?{actorId:this.ownId,lifeId:i?.seat.lifeId,mirror:u.root.scale.x,bow:u.bow.getWorldPosition(Pt(0,0)),arrow:{...u.arrow.getWorldPosition(Pt(0,0)),visible:u.root.visible&&u.arrow.visible},action:h?{id:h.id,actorId:h.actorId,lifeId:h.lifeId,epoch:h.epoch,roundId:h.roundId,at:r,launchAt:i?.launchAt,contactAt:i?.contactAt}:null}:null;this.canvas.dataset.combat=JSON.stringify({revision:i?.revision,format:i?.format,epoch:i?.epoch,worldKey:i?.worldKey,state:i?.state,phase:i?.phase,actors:i?.actors,terrainRevision:i?.terrain.revision,ownId:this.ownId,aim:this.aim,drawing:!!this.draw,view:[this.camera.left,this.camera.right,this.camera.top,this.camera.bottom],chunks:this.chunks.size,renderedOwn:m})}}const fs="challenge-v1";function va(n){if(n!=="course"&&n!=="endless")throw new RangeError("Unknown challenge format.")}function uv(n){if(!Number.isFinite(n.angle)||!Number.isFinite(n.power)||n.angle<ln.minAngle||n.angle>ln.maxAngle||n.power<0||n.power>1)throw new RangeError("Challenge aim must have an angle from 5 to 80 and power from 0 to 1.")}const Do=(...n)=>32*Number.EPSILON*Math.max(1,...n.map(Math.abs));function hu(n,e){if(va(n),!Number.isSafeInteger(e)||e<0||n==="course"&&e>=12)throw new RangeError("Challenge shot index is out of range.");const t=Math.floor(e/3),i=n==="course"?[12,18,24,30][t]:Math.min(30,12+2*t),r=n==="course"?2.6:Math.max(.8,2.6-.1*t);return Object.freeze({distance:i,centerY:3.2,radius:r,faceX:Ii.x+i})}function fv(n,e){if(uv(n),![e.distance,e.centerY,e.radius,e.faceX].every(Number.isFinite)||e.distance<=0||e.radius<=0||Math.abs(e.faceX-(Ii.x+e.distance))>Do(e.faceX,e.distance))throw new RangeError("Challenge target must have finite, consistent geometry and positive distance and radius.");const t=Da(n),i=(e.faceX-t.origin.x)/t.velocity.x,r=Math.min(Gd(t),ln.maxFlight);if(i>=r-Do(i,r))return Object.freeze({score:0,innerBullseye:!1,impact:null,at:r,hit:!1});const s=Object.freeze({x:e.faceX,y:Pi(t,i).y}),a=Math.abs(s.y-e.centerY),o=Do(a,s.y,e.centerY,e.radius);let c=0;for(let l=1;l<=10;l++)if(a<=e.radius*l/10+o){c=11-l;break}return Object.freeze({score:c,innerBullseye:a<=e.radius/20+o,impact:s,at:i,hit:c>0})}function du(n,e=fs){if(va(n),typeof e!="string"||e.trim().length===0)throw new RangeError("A challenge requires a rules version.");return Object.freeze({format:n,rulesVersion:e,status:"active",revision:0,shots:Object.freeze([]),total:0,hits:0,innerBullseyes:0,tens:0,misses:0})}function hl(n){if(n.status!=="active")throw new Error("The challenge has already ended.")}function dl(n,e){hl(n);const t=hu(n.format,n.shots.length),i=fv(e,t),r=Object.freeze({aim:Object.freeze({angle:e.angle,power:e.power}),target:t,outcome:i}),s=Object.freeze([...n.shots,r]),a=n.misses+ +!i.hit,o=n.format==="course"?s.length===12:a===3;return Object.freeze({...n,status:o?"completed":"active",revision:n.revision+1,shots:s,total:n.total+i.score,hits:n.hits+Number(i.hit),innerBullseyes:n.innerBullseyes+Number(i.innerBullseye),tens:n.tens+ +(i.score===10),misses:a})}function ul(n){if(hl(n),n.format!=="endless"||n.shots.length===0)throw new Error("Only a nonempty endless challenge can be banked.");return Object.freeze({...n,status:"completed",revision:n.revision+1})}function pv(n){return hl(n),Object.freeze({...n,status:"abandoned",revision:n.revision+1})}function Uo(n,e){if(va(n.format),va(e.format),n.format!==e.format)throw new RangeError("Challenge results must use the same format.");const t=n.format==="course"?["total","innerBullseyes","tens"]:["total","hits","innerBullseyes","tens"];for(const i of t)if(n[i]!==e[i])return e[i]-n[i];return 0}const Zh="archery.challenge.results.v1",Jh="archery.challenge.initials.v1",yr=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function Fc(n){if(!yr(n)||!["course","endless"].includes(String(n.format))||n.rulesVersion!==fs||!Array.isArray(n.shots))throw new Error("Unsupported challenge data.");let e=du(n.format);for(const i of n.shots){if(!yr(i)||!yr(i.aim)||typeof i.aim.angle!="number"||typeof i.aim.power!="number")throw new Error("Invalid challenge shot.");e=dl(e,{angle:i.aim.angle,power:i.aim.power})}n.status==="completed"&&e.status==="active"&&(e=ul(e)),n.status==="abandoned"&&e.status==="active"&&(e=pv(e));function t(i,r){return Array.isArray(i)&&Array.isArray(r)?i.length===r.length&&i.every((s,a)=>t(s,r[a])):yr(i)&&yr(r)?Object.keys(i).length===Object.keys(r).length&&Object.keys(i).every(s=>s in r&&t(i[s],r[s])):i===r}if(!t(e,n))throw new Error("Challenge data failed verification.");return e}class mv{message="Results stay on this browser.";storage;constructor(e){this.storage=e}readResults(){let e;try{if(!this.storage)throw new Error;e=this.storage.getItem(Zh)}catch{return this.message="Result not saved: browser storage unavailable. You can still play.",null}if(e===null)return[];try{const t=JSON.parse(e);if(!Array.isArray(t))throw new Error;return t.map(i=>{const r=Fc(i);if(r.status!=="completed")throw new Error;return r})}catch{return this.message="Local results are unreadable or use another rules version. Existing data is preserved; new results cannot be saved.",null}}results(e){return(this.readResults()??[]).filter(t=>t.format===e).sort(Uo).slice(0,100)}save(e){if(e.status!=="completed")return!1;const t=this.readResults();if(t===null)return!1;try{const i=[Fc(e),...t.filter(s=>s.format===e.format)].sort(Uo).slice(0,100),r=t.filter(s=>s.format!==e.format).sort(Uo).slice(0,100);return this.storage.setItem(Zh,JSON.stringify([...i,...r])),this.message="Best 100 results per format stay on this browser.",!0}catch{return this.message="Result not saved: browser storage unavailable.",!1}}initials(){try{return this.storage?.getItem(Jh)??""}catch{return""}}saveInitials(e){try{this.storage?.setItem(Jh,e)}catch{}}}function Qh(n){if(!Array.isArray(n))throw new Error("Invalid leaderboard.");return n.map(e=>{if(!yr(e)||!["rank","total","hits","innerBullseyes","tens","misses"].every(t=>Number.isSafeInteger(e[t])&&Number(e[t])>=0)||typeof e.guestId!="string"||typeof e.initials!="string"||!/^[a-z]{3}$/.test(e.initials)||typeof e.own!="boolean"||typeof e.publishedAt!="string")throw new Error("Invalid leaderboard entry.");return e})}class gv{attempt=null;pending=null;busy=!1;session;attemptRevision=null;pendingRevision=null;constructor(e,t=fetch,i,r){r?.assertContext(e,t,i),this.session=r??new Na(e,t,i)}checkAttemptRevision(){const e=this.attemptRevision??this.session.revision;return this.session.assertRevision(e),this.attemptRevision=e,e}checkPending(e,t,i){if(this.session.assertRevision(i),this.pending!==e||this.attempt!==t)throw new Error("Challenge changed while the action was pending.")}decodeAttempt(e){if(typeof e.id!="string"||!e.id)throw new Error("Invalid attempt response.");return{id:e.id,state:Fc(e.state)}}async start(e){if(this.busy||this.pending)throw new Error("Finish the pending action first.");this.busy=!0;try{const t=await this.session.ensure();this.session.assertRevision(t.revision);const i=this.decodeAttempt(await this.session.request("/attempts",{format:e,rulesVersion:fs}));return this.session.assertRevision(t.revision),this.attempt=i,this.attemptRevision=t.revision,i}finally{this.busy=!1}}async shot(e){return this.action("shot",{aim:{...e}})}async bank(){return this.action("bank",{})}async action(e,t){if(!this.attempt||this.pending||this.busy)throw new Error("Finish the pending action first.");return this.pendingRevision=this.checkAttemptRevision(),this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/actions`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,kind:e,...t},kind:"action"},this.retry()}async retry(){if(!this.pending||this.pending.kind!=="action"||!this.attempt||this.busy)throw new Error("No retryable action.");const e=this.pending,t=this.attempt,i=this.pendingRevision??this.checkAttemptRevision();this.checkPending(e,t,i),this.busy=!0;try{const r=this.decodeAttempt(await this.session.request(e.url,e.body));this.checkPending(e,t,i);const s=e.body.kind==="shot"?dl(t.state,e.body.aim):ul(t.state);if(r.id!==t.id||JSON.stringify(r.state)!==JSON.stringify(s))throw new Error("Shared response does not match the pending action.");return this.attempt=r,this.pending=null,this.pendingRevision=null,r}catch(r){throw r instanceof oi&&r.code==="challenge_capacity"&&e.body.kind==="shot"&&this.pending===e&&this.attempt===t&&this.session.revision===i&&(this.pending=null,this.pendingRevision=null),r}finally{this.busy=!1}}async publish(e){if(!this.attempt||this.attempt.state.status!=="completed"||this.busy||this.pending?.kind==="action")throw new Error("Finish the pending shot first.");if(e=e.trim().toLowerCase(),!/^[a-z]{3}$/.test(e))throw new Error("Use exactly three letters A–Z.");const t=this.checkAttemptRevision();this.pending||(this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/publish`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,initials:e},kind:"publish"},this.pendingRevision=t);const i=this.pending,r=this.attempt;this.checkPending(i,r,this.pendingRevision??t),this.busy=!0;try{const s=await this.session.request(i.url,i.body);this.checkPending(i,r,t);const a=Qh(s.entries);return this.pending=null,this.pendingRevision=null,a}catch(s){throw s instanceof Error&&"status"in s&&s.status===400&&this.pending===i&&this.attempt===r&&this.session.revision===t&&(this.pending=null,this.pendingRevision=null),s}finally{this.busy=!1}}async boards(e){const t=this.session.revision,i=await this.session.request(`/leaderboards/${e}?rulesVersion=${encodeURIComponent(fs)}`);return this.session.assertRevision(t),Qh(i.entries)}forget(){this.session.forget(),this.attempt=null,this.pending=null,this.attemptRevision=null,this.pendingRevision=null}}function ed(n,e,t=Ft){if(!Number.isFinite(e)||e<=0)throw new RangeError("Positive finite aspect required.");if(![t.minX,t.maxX,t.minY,t.maxY].every(Number.isFinite)||t.minX>t.maxX||t.minY>t.maxY)throw new RangeError("Ordered finite target required.");n.updateMatrixWorld(!0);let i=-11.4,r=11.4,s=-11.4/e,a=11.4/e;const o=(h,m,g)=>{const v=new F(h,m,g).applyMatrix4(n.matrixWorldInverse),p=1.1;i=Math.min(i,v.x-p),r=Math.max(r,v.x+p),s=Math.min(s,v.y-p),a=Math.max(a,v.y+p)};for(const h of[-8.5,8.62])for(const m of[0,6])o(h,m,.12);for(const h of[t.minX,t.maxX])for(const m of[t.minY,t.maxY])for(const g of[-.9,.12])o(h,m,g);const c=(i+r)/2,l=(s+a)/2,d=Math.max((a-s)/2,(r-i)/(2*e)),u=d*e;n.left=c-u,n.right=c+u,n.bottom=l-d,n.top=l+d,n.updateProjectionMatrix()}function _v(n,e,t){if(![n.origin.x,n.origin.y,n.velocity.x,n.velocity.y,e.x,e.y,t].every(Number.isFinite)||t<0||t>ln.maxFlight)throw new RangeError("Finite shot and a bounded resolved interval required.");const i=n.origin.x-e.x,r=n.origin.y-e.y,s=n.velocity.x,a=n.velocity.y,o=ln.gravity,c=.5*o*o,l=-1.5*o*a,d=s*s+a*a-o*r,u=s*i+a*r;if(![c,l,d,u].every(Number.isFinite))throw new RangeError("Shot exceeds supported numeric range.");const h=f=>((c*f+l)*f+d)*f+u,m=[0,t],g=4*l*l-12*c*d;if(g>=0)for(const f of[(-2*l-Math.sqrt(g))/(6*c),(-2*l+Math.sqrt(g))/(6*c)])f>0&&f<t&&m.push(f);m.sort((f,b)=>f-b);const v=[...m];for(let f=1;f<m.length;f++){let b=m[f-1],S=m[f],E=h(b),A=h(S);if(!(E===0||A===0||E<0==A<0)){for(let T=0;T<64;T++){const R=(b+S)/2,x=h(R);E<0==x<0?(b=R,E=x):S=R}v.push((b+S)/2)}}const p=Math.min(...v.map(f=>{const b=Pi(n,f);return Math.hypot(b.x-e.x,b.y-e.y)}));if(!Number.isFinite(p))throw new RangeError("Shot exceeds supported numeric range.");return p}function qi(){return{completed:0,hits:0,best:null,mean:null,last:null,lastShotId:0,m2:0,currentStreak:0,bestStreak:0,recent:[]}}function fl(n,e,t,i,r={angle:29,power:.62}){if(!Number.isSafeInteger(e)||e<0||!Number.isFinite(i)||i<0||typeof t!="boolean"||!Number.isFinite(r.angle)||r.angle<5||r.angle>80||!Number.isFinite(r.power)||r.power<.08||r.power>1)throw new RangeError("Valid completion identity, aim and distance required.");if(e<=n.lastShotId)return n;const s=n.completed+1,a=i-(n.mean??0),o=(n.mean??0)+a/s,c=t?n.currentStreak+1:0,l={completed:s,hits:n.hits+Number(t),best:Math.min(n.best??1/0,i),mean:o,last:i,lastShotId:e,m2:Math.max(0,n.m2+a*(i-o)),currentStreak:c,bestStreak:Math.max(n.bestStreak,c),recent:[{hit:t,distance:i,...r},...n.recent].slice(0,10)};if(!Number.isSafeInteger(s)||!Number.isFinite(l.m2)||!Number.isFinite(o))throw new RangeError("Practice exceeds supported numeric range.");return l}const xv="archery-practice",No="progress",Fo="practice";function vv(n){return{version:1,stats:n}}function yv(n){if(n===void 0)return qi();const e=()=>{throw new Error("Saved practice is incompatible or damaged. Clear it to start again.")};if(!n||typeof n!="object"||n.version!==1)return e();const t=(a,o)=>Object.keys(a).sort().join(",")===o.sort().join(",");if(!t(n,["version","stats"]))return e();const i=n.stats;if(!i||typeof i!="object"||!t(i,Object.keys(qi())))return e();const r=a=>Number.isSafeInteger(a)&&a>=0,s=a=>typeof a=="number"&&Number.isFinite(a)&&a>=0;if(![i.completed,i.hits,i.lastShotId,i.currentStreak,i.bestStreak].every(r)||i.hits>i.completed||i.lastShotId<i.completed||i.currentStreak>i.bestStreak||i.bestStreak>i.hits||i.hits>0&&i.bestStreak===0||!s(i.m2)||!Array.isArray(i.recent)||i.recent.length!==Math.min(i.completed,10))return e();if(i.completed){if(!s(i.best)||!s(i.mean)||!s(i.last)||i.best>i.mean||i.best>i.last||i.completed===1&&(i.m2!==0||i.mean!==i.last||i.best!==i.last)||i.hits===0&&i.bestStreak!==0||i.hits===i.completed&&(i.currentStreak!==i.completed||i.bestStreak!==i.completed))return e()}else if(i.hits||i.lastShotId||i.currentStreak||i.bestStreak||i.m2||i.best!==null||i.mean!==null||i.last!==null)return e();for(const a of i.recent)if(!a||!t(a,["hit","distance","angle","power"])||typeof a.hit!="boolean"||!s(a.distance)||!Number.isFinite(a.angle)||a.angle<5||a.angle>80||!Number.isFinite(a.power)||a.power<.08||a.power>1||i.best>a.distance)return e();if(i.completed){if(i.last!==i.recent[0].distance)return e();let a=0;for(const m of i.recent){if(!m.hit)break;a++}if(a<i.recent.length?i.currentStreak!==a:i.currentStreak<a)return e();let o=0,c=0;for(const m of[...i.recent].reverse())o=m.hit?o+1:0,c=Math.max(c,o);const l=i.recent.reduce((m,g)=>m+(g.distance-i.mean)**2,0);if(c>i.bestStreak||l>i.m2+1e-9*Math.max(1,i.m2))return e();const d=i.best+i.recent.reduce((m,g)=>m+(g.distance-i.best)/i.completed,0),u=Math.sqrt(i.completed-1)*(i.mean-i.best);if(d>i.mean+1e-10*Math.max(1,i.mean)||Math.sqrt(i.m2/i.completed)>u+1e-10*Math.max(1,u))return e();const h=i.recent.filter(m=>m.hit).length;if(h>i.hits||i.recent.length-h>i.completed-i.hits)return e();if(i.completed>10){const m=i.completed-i.recent.length,g=m-(i.hits-h),v=i.hits-h,p=i.mean-i.best;let f=m*p-i.recent.reduce((x,M)=>x+(M.distance-i.mean),0);const b=1e-9*Math.max(1,m*p,...i.recent.map(x=>Math.abs(x.distance-i.mean)));if(f<-b)return e();f=Math.max(0,f);const S=!i.recent.some(x=>x.distance===i.best);if(S&&m===1&&f>b)return e();const E=m*(f/m-p)**2,A=l+E+(S&&m>1?f/m*(f/(m-1)):0),T=l+E+f/m*f*(m-1);if(!Number.isFinite(A)||i.m2<A-1e-9*Math.max(1,i.m2,A)||i.m2>T+1e-9*Math.max(1,i.m2,T))return e();let R=0;for(const x of[...i.recent].reverse()){if(!x.hit)break;R++}if(R===i.recent.length){const x=i.currentStreak-R,M=v-x;if(x>v||x<0||g===0&&x!==m||M>g*i.bestStreak||i.bestStreak<x+R||i.bestStreak>Math.max(c,x+R,M))return e()}else if(v>(g+1)*i.bestStreak-R||i.bestStreak>Math.max(c,v+R))return e()}if(i.completed<=10){let m=qi();for(const v of[...i.recent].reverse())m=fl(m,m.lastShotId+1,v.hit,v.distance,v);const g=(v,p)=>Math.abs(v-p)<=1e-10*Math.max(1,Math.abs(v),Math.abs(p));if(!g(m.mean,i.mean)||!g(m.m2,i.m2)||m.best!==i.best||m.bestStreak!==i.bestStreak)return e()}}return structuredClone(i)}class bv{db=null;queue;unavailable=!1;view={stats:qi(),state:"loading",message:"Loading saved practice…"};notify;constructor(e,t=()=>indexedDB){this.notify=e,this.notify(this.view),this.queue=new Promise(i=>{let r;try{r=t().open(xv,1)}catch{this.fail(),i();return}r.onupgradeneeded=()=>{r.result.createObjectStore(No)},r.onblocked=()=>{this.fail("Saved practice is blocked by another tab."),i()},r.onerror=()=>{this.fail(),i()},r.onsuccess=()=>{if(this.unavailable){r.result.close(),i();return}const s=r.result;this.db=s,s.onversionchange=()=>{this.db===s&&(this.db=null,s.close(),this.fail("Saved practice changed in another tab. Reload to reconnect."))},this.transaction().then(i,()=>{this.db&&this.fail(),i()})}})}fail(e="Saved practice unavailable. This visit still counts."){this.unavailable=!0,this.view={...this.view,state:"unavailable",message:e},this.notify(this.view)}transaction(e,t=!1){return new Promise((i,r)=>{const s=this.db;if(!s){r(new Error("Storage unavailable"));return}let a=qi(),o;try{o=s.transaction(No,e||t?"readwrite":"readonly");const c=o.objectStore(No);if(t)c.delete(Fo);else{const l=c.get(Fo);l.onsuccess=()=>{try{a=yv(l.result),e&&(a=fl(a,a.lastShotId+1,e.hit,e.distance,e),c.put(vv(a),Fo))}catch(d){o.abort(),r(d)}}}o.oncomplete=()=>{this.db!==s?this.view={...this.view,stats:a}:(this.unavailable=!1,this.view={stats:a,state:"saved",message:`Saved on this browser only · ${a.completed} ${a.completed===1?"shot":"shots"}`}),this.notify(this.view),i()},o.onabort=o.onerror=()=>r(new Error("Storage transaction failed"))}catch(c){r(c)}})}enqueue(e,t=!1){return this.queue=this.queue.then(async()=>{if(!(!this.db||this.unavailable&&!t)){this.view={...this.view,state:e||t?"saving":"loading",message:t?"Clearing saved practice…":e?"Saving practice…":"Loading saved practice…"},this.notify(this.view);try{await this.transaction(e,t)}catch{this.db&&this.fail()}}}),this.queue}append(e){return this.enqueue(e)}clear(){return this.enqueue(void 0,!0)}refresh(){return this.enqueue()}}const uu="archery-theme";function Mv(n,e){try{const t=n.getItem(uu);return t==="light"||t==="dark"?t:e}catch{return e}}function Sv(n,e){try{n.setItem(uu,e)}catch{}}const I=n=>document.getElementById(n),lt=I("scene");let wt="range",We,qe=null,sa="",mt=null,ya="",kt="private",en=!1,$i=!1;const fu=I("status"),pu=I("phase"),as=I("retry"),Oa=I("fire"),ba=I("pause"),ps=I("angle"),ms=I("power"),os=I("drag-marker"),Ev=I("gesture-hint"),wr=I("theme"),ka=document.getElementById("guide"),td=xa(xn).map(()=>{const n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("r",String(xn.radiusPx)),n.setAttribute("stroke-width",String(xn.outlinePx)),ka.append(n),n}),Jr=I("arrow-cue");let ns=qi(),mu=qi(),gu=0,aa="visit",Mi={angle:29,pull:.2+.62*.5},is=0,Oc={tip:{...Ii},angle:29*Math.PI/180},Qt="light";try{Qt=Mv(localStorage,matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}let we="ready",Mt={angle:29,power:.62},et=null,St=!1,Tt=null,fn=0,pl=0,Ma=performance.now(),Sa=0,nd="",ui;try{ui=new V_({canvas:lt,antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{throw fu.textContent="This clearing needs WebGL. Please try a browser with graphics enabled.",pu.textContent="GRAPHICS UNAVAILABLE",lt.hidden=!0,Oa.disabled=!0,ba.disabled=!0,new Error("WebGL unavailable")}ui.setClearColor("#dce8df");ui.shadowMap.enabled=!0;ui.shadowMap.type=rs;ui.outputColorSpace=pn;const tt=new Ed;tt.fog=new Zc("#dce8df",38,80);const An=new bs(-11,11,10,-10,.1,100);An.position.set(0,9,30);An.lookAt(0,3.7,0);const kc=new Ld("#fff7d7","#6a8161",2.6);tt.add(kc);const nr=new Ud("#fff4d6",3);nr.position.set(-8,16,10);nr.castShadow=!0;nr.shadow.mapSize.set(1024,1024);Object.assign(nr.shadow.camera,{left:-16,right:16,top:15,bottom:-12,near:.5,far:60});nr.shadow.bias=-.002;tt.add(nr);const oa=new Map;function Ms(n){return oa.has(n)||oa.set(n,new Pc({color:n,roughness:1,metalness:0,flatShading:!0})),oa.get(n)}function Ze(n,e,t,i,r,s,a,o){const c=new Dt(new tr(r,s,a),Ms(o));return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Ss(n,e,t,i,r){const s=Ze(n,0,0,0,i,e.distanceTo(t),i,r);return s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new F(0,1,0),t.clone().sub(e).normalize()),s}const bt=(n,e,t=0)=>new F(n,e,t),Dr={x:(Ft.minX+Ft.maxX)/2,y:(Ft.minY+Ft.maxY)/2},Ea=Ze(tt,(Ft.minX+Ft.maxX)/2,(Ft.minY+Ft.maxY)/2,-.45,Ft.maxX-Ft.minX,Ft.maxY-Ft.minY,.9,"#cc684a");Ze(tt,Dr.x,Dr.y,.015,.61,.12,.025,"#f4ddb3");Ze(tt,Dr.x,Dr.y,.035,.14,.32,.025,"#4b3c31");Ze(tt,8.31,.3,-.45,1.35,.6,1.5,"#66734a");Ze(tt,0,-.25,-2,27,.9,14,"#7d9461");Ze(tt,0,-.9,-2,27,.4,14,"#8d7653");Ze(tt,0,-1.65,-2,26.2,1.1,13.4,"#b1a17b");for(let n=0;n<7;n++){const e=-16+n*5.5,t=new Dt(new vs(6+n%3,9+n%4,4),Ms(n%2?"#afc5ae":"#c2d1bb"));t.position.set(e,3,-18-n%2*3),t.rotation.y=Math.PI/4,tt.add(t)}function Ba(n,e,t){Ze(tt,n,1*t,e,.3*t,2*t,.3*t,"#7c7853"),Ze(tt,n,3*t,e,1.8*t,2.2*t,1.7*t,"#718d65"),Ze(tt,n-.3*t,4.1*t,e,1.3*t,1.2*t,1.25*t,"#89a176")}Ba(-11.3,-3.8,1.2);Ba(-3.2,-6.5,.8);Ba(5.8,-7,1.05);Ba(11.8,-4.5,1.4);for(let n=0;n<34;n++){const e=Math.sin(n*73.3)*12,t=-2-Math.cos(n*29.1)*3;Ze(tt,e,.25,t,.16,.2+n%3*.08,.17,n%6===0?"#e5d0a1":"#96ab6f")}for(const[n,e,t]of[[-4,-1,.5],[4,-2,.7],[10,1,.5]])Ze(tt,n,.3,e,t,t*.65,t,"#a7ae94");const bn=new tn;tt.add(bn);Ze(bn,-8.02,.55,0,.36,.8,.4,"#38473f");Ze(bn,-7.32,.55,0,.36,.8,.4,"#38473f");Ze(bn,-8.08,.2,.12,.64,.24,.55,"#4c4938");Ze(bn,-7.26,.2,.12,.64,.24,.55,"#4c4938");Ze(bn,-7.72,1.61,0,.85,1.5,.6,"#d19b58");Ze(bn,-7.72,1.15,.32,.95,.18,.12,"#6b6845");Ze(bn,-7.72,2.66,0,.65,.65,.6,"#eac795");Ze(bn,-7.85,3,-.04,.95,.27,.76,"#4d6e57");Ze(bn,-7.98,2.72,-.02,.23,.45,.65,"#4d6e57");Ze(bn,-7.4,2.73,.32,.08,.08,.07,"#34483c");Ss(bn,bt(-8.14,1.6,-.38),bt(-8.36,2.8,-.38),.28,"#786244");const Ur=new tn;Ur.position.set(Ii.x,Ii.y,.12);tt.add(Ur);const Oo=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let n=1;n<Oo.length;n++)Ss(Ur,bt(...Oo[n-1]),bt(...Oo[n]),.075,"#78523c");const _u=new jt().setFromPoints([bt(0,-.92),bt(-.3,0),bt(0,.92)]),wv=new br(_u,new Ir({color:"#f1e7bf"}));Ur.add(wv);const Av=Ss(tt,bt(-7.7,2.3,.42),bt(Ii.x,Ii.y,.42),.23,"#eac795"),Tv=Ss(tt,bt(-7.95,2.3,.45),bt(-7.8,2.7,.3),.22,"#d19b58"),Rv=Ss(tt,bt(-7.8,2.7,.3),bt(-7.3,2.7,.12),.18,"#eac795"),Cv=Ze(tt,-7.3,2.7,.12,.19,.19,.19,"#eac795");function ko(n,e,t){const i=n.geometry.parameters.height;n.scale.y=e.distanceTo(t)/i,n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(bt(0,1,0),t.clone().sub(e).normalize())}function Iv(){const n=new tn;Ze(n,-.6,0,0,1.2,.045,.045,"#f3dfaa");const e=new Dt(new vs(.085,.24,4),Ms("#58685d"));return e.rotation.z=-Math.PI/2,e.position.x=-.12,n.add(e),Ze(n,-1.08,0,0,.22,.17,.04,"#e9e6c8"),tt.add(n),n}const ei=Iv(),Bc=new jt,za=new br(Bc,new Ir({color:"#f6edcf",transparent:!0,opacity:.55}));tt.add(za);const Nr=Array.from({length:9},(n,e)=>{const t=Ze(tt,0,0,0,.08+e%2*.05,.08,.08,"#ffedb7");return t.visible=!1,t});let me=null,qt=null,Li=!1,it=!1,ml=!1,Fr;try{Fr=localStorage}catch{}const ji=new mv(Fr),wa=nx(Array.from(document.querySelectorAll('meta[name="archery-api"]'),n=>n.content),location.origin),On=wa?new Na(wa,fetch,Fr):null,Ve=On?new gv(On.endpoint,fetch,Fr,On):null,gl=new tn;for(const n of[Ea,...tt.children.filter(e=>e instanceof Dt&&e!==Ea&&(e.position.x===Dr.x&&e.position.y===Dr.y||e.position.x===8.31&&e.position.y===.3))])gl.add(n);tt.add(gl);const ni=new tn;tt.add(ni);ni.visible=!1;const Vr=new tn;tt.add(Vr);Vr.visible=!1;Ze(Vr,13,-.25,-2,25,.9,14,"#7d9461");Ze(Vr,13,-.9,-2,25,.4,14,"#8d7653");Ze(Vr,13,-1.65,-2,25,1.1,13.4,"#b1a17b");const Zs=["#f5f1df","#f5f1df","#222d2a","#222d2a","#59a6c5","#59a6c5","#d96350","#d96350","#efc655","#efc655"];function _l(){const n=me.shots.length;return hu(me.format,Math.max(0,qt||me.status!=="active"?n-1:n))}function xl(){if(wt==="range")if(me){const n=_l();ed(An,Ai/Ti,{minX:n.faceX-.1,maxX:n.faceX+.1,minY:n.centerY-n.radius,maxY:n.centerY+n.radius})}else ed(An,Ai/Ti)}function vl(){gl.visible=!me,ni.visible=!!me,Vr.visible=!!me,I("face-inset").hidden=!me;for(const n of[...ni.children])ni.remove(n),n instanceof Dt&&n.geometry.dispose();if(I("face-rings").replaceChildren(),I("face-impact").setAttribute("hidden",""),me){const n=_l();for(let e=0;e<10;e++){const t=n.radius*(10-e)/10,i=new Dt(new Ra(t,48),Ms(Zs[e]));i.rotation.y=-Math.PI/2,i.position.set(n.faceX-e*.001,n.centerY,0),ni.add(i),Ze(ni,n.faceX-.035,n.centerY+t-n.radius/20,0,.09,n.radius/10,.07,Zs[e]),Ze(ni,n.faceX-.035,n.centerY-t+n.radius/20,0,.09,n.radius/10,.07,Zs[e]);const r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("r",String((10-e)/10)),r.setAttribute("fill",Zs[e]),r.setAttribute("stroke",e<4?"#a8ada0":"#384d46"),r.setAttribute("stroke-width",".01"),I("face-rings").append(r)}Ze(ni,n.faceX,.5,-.12,.18,1,.18,"#786244")}xl()}function Pv(){const n=St||it||!!Ve?.pending||we==="flying"||we==="aiming";for(const e of["practice","course","endless"]){const t=I(`mode-${e}`);t.disabled=n,t.setAttribute("aria-pressed",String(e===(me?.format??"practice")))}I("challenge-panel").hidden=!me,I("practice-stats").hidden=!!me;for(const e of["challenge-restart","challenge-leave","challenge-bank","clear-identity"])I(e).disabled=n||St;if(I("online-mode").disabled=n||!!me,me){const e=_l(),t=me.status!=="active";I("challenge-name").textContent=`${me.format==="course"?"12-arrow course":"Endless"} · ${Li?"shared scoring":"local"}`,I("challenge-total").textContent=`${me.total}${me.format==="course"?" / 120":""} points`,I("challenge-progress").textContent=`${t?"Completed":`Arrow ${me.shots.length+1}${me.format==="course"?" of 12":""}`} · ${e.distance} units · ${me.misses} ${me.format==="endless"?"/ 3 ":""}misses · ${me.innerBullseyes} inner bullseyes`,I("challenge-rules").textContent=me.format==="course"?"3 arrows each at 12, 18, 24 and 30 units. Ten rings, 10 points at center.":"Three misses ends the run. Every 3 arrows: +2 units (max 30), radius −0.1 (min 0.8). End & bank between shots.",I("challenge-bank").hidden=me.format!=="endless"||t||!me.shots.length,as.hidden=t||!["hit","miss"].includes(we),as.textContent="Next arrow ↗",Oa.disabled||=t||we==="hit"||we==="miss"||it||!!Ve?.pending,ps.disabled||=t||we==="hit"||we==="miss"||it||!!Ve?.pending,ms.disabled||=t||we==="hit"||we==="miss"||it||!!Ve?.pending,I("gesture-hint").hidden||=t||it||!!Ve?.pending,I("publish-form").hidden=!(t&&Li&&!ml),I("initials").disabled=it||Ve?.pending?.kind==="publish",I("publish").disabled=it||!!Ve?.pending&&Ve.pending.kind==="action"}else as.innerHTML="Try again <span>↗</span>",I("publish-form").hidden=!0;lt.dataset.format=me?.format??"practice"}let ca=0;async function Mr(n=""){const e=++ca,t=I("board-format").value;I("board-rules").textContent=`Rules ${fs} · ties share a rank · score, ${t==="endless"?"hits, ":""}inner bullseyes, tens`;const i=ji.results(t);if(I("local-empty").hidden=i.length>0,I("local-board").replaceChildren(...i.slice(0,10).map(r=>{const s=document.createElement("li");return s.textContent=`${r.total} points · ${r.hits} hits · ${r.shots.length} arrows`,s})),I("challenge-storage").textContent=ji.message,!!Ve){I("shared-board").replaceChildren(),I("shared-status").textContent=n||"Loading shared board…";try{const r=await Ve.boards(t);if(e!==ca)return;Lv(r),I("shared-status").textContent=n||"Shared boards available. Choose shared scoring before starting a challenge."}catch(r){if(e!==ca)return;I("shared-status").textContent=`${n?n+" ":""}Shared boards unavailable. ${r instanceof Error?r.message:"Try later."} Local challenges are playable.`,I("shared-board").replaceChildren()}}}function Lv(n){I("shared-board").replaceChildren(...n.map(e=>{const t=document.createElement("li");return t.value=e.rank,t.dataset.own=String(e.own),t.textContent=`${e.initials}${e.own?" · you":""} — ${e.total} points · ${e.hits} hits`,t}))}function cs(n){I("network-recovery").hidden=!1,I("network-message").textContent=`${n instanceof Error?n.message:"Connection interrupted."} No result has been promoted to the shared board.`,I("network-retry").hidden=!Ve?.pending,yn("Shared action needs attention below the clearing.","CHALLENGE WAITING"),yt()}function zc(){if(me?.status!=="completed")return!1;const n=Li||ji.save(me);return Mr(),n}async function Qr(n,e=!1){if(!(wt==="combat"&&(yu("range"),(me?.format??"practice")===n))&&!(it||we==="flying"||et||St)&&!(me?.status==="active"&&!confirm("Abandon this challenge? Its unfinished score will not be banked."))&&!(Ve?.pending&&!e)){e&&(Ve.pending=null),it=!0,yt();try{const t=n!=="practice"&&!e&&!!Ve&&I("online-mode").checked;let i=null;n!=="practice"&&(i=t?(await Ve.start(n)).state:du(n)),me=i,Li=t,qt=null,ml=!1,I("network-recovery").hidden=!0,I("publish-form").hidden=!0,I("board-format").value=n==="practice"?"course":n,we="ready",Tt=null,fn=0,za.visible=!1,I("shot-result").hidden=!0;for(const r of Nr)r.visible=!1;vl(),yn("Pull back. Breathe. Release.",me?"CHALLENGE READY":"YOUR NEXT SHOT"),Mr()}catch(t){cs(t)}finally{it=!1,yt()}}}async function Dv(n){it=!0,yt();try{me=Li?(await Ve.shot(n)).state:dl(me,n),qt=me.shots.at(-1).outcome,Ml(n)}catch(e){we="ready",cs(e)}finally{it=!1,yt()}}function Uv(){if(!me||!qt||!Tt)return;we=qt.hit?"hit":"miss",fn=qt.at,pl=Sa,I("shot-result-caption").textContent="Actual impact · ten-ring scoring",I("shot-result-value").textContent=qt.hit?`${qt.score} points${qt.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",I("shot-result").hidden=!1;const n=qt.impact;if(n){const t=me.shots.at(-1).target,i=I("face-impact");i.setAttribute("cx","0"),i.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-t.centerY)/t.radius)))),i.removeAttribute("hidden")}const e=zc();yn(me.status==="completed"?`${me.total} points. ${Li?"Publish with your initials below.":e?"Saved to this browser’s local board.":ji.message}`:qt.hit?"On the face. Take your next arrow when ready.":"Outside the face. Take your next arrow when ready.",me.status==="completed"?"CHALLENGE COMPLETE":qt.hit?"SCORED":"MISS"),yt()}function Nv(){for(const n of["practice","course","endless"])I(`mode-${n}`).addEventListener("click",()=>{Qr(n)});if(I("challenge-restart").addEventListener("click",()=>{Qr(me.format)}),I("challenge-leave").addEventListener("click",()=>{Qr("practice")}),I("challenge-bank").addEventListener("click",async()=>{if(!(!me||it||St||et||we==="flying"||Ve?.pending)){it=!0,yt();try{me=Li?(await Ve.bank()).state:ul(me);const n=zc();yn(`${me.total} points banked.${n?"":" "+ji.message}`,"CHALLENGE COMPLETE")}catch(n){cs(n)}finally{it=!1,yt()}}}),I("board-format").addEventListener("change",()=>{Mr()}),I("network-local").addEventListener("click",()=>{Qr(me?.format??"course",!0)}),I("network-retry").addEventListener("click",async()=>{if(!(it||!Ve?.pending)){if(Ve.pending.kind==="publish"){I("publish-form").requestSubmit();return}it=!0,yt();try{const n=Ve.pending.body.kind;if(me=(await Ve.retry()).state,I("network-recovery").hidden=!0,n==="shot"){const e=me.shots.at(-1);qt=e.outcome,Ml(e.aim)}else zc(),yn(`${me.total} points banked.`,"CHALLENGE COMPLETE")}catch(n){cs(n)}finally{it=!1,yt()}}}),I("publish-form").addEventListener("submit",async n=>{if(n.preventDefault(),it||!Ve)return;const e=I("initials").value.trim().toLowerCase();it=!0,++ca,yt();try{await Ve.publish(e),ji.saveInitials(e),ml=!0,I("network-recovery").hidden=!0,I("publish-form").hidden=!0;const t="Published. The shared board keeps your strongest result for this format and rules version.";I("shared-status").textContent=t,await Mr(t)}catch(t){cs(t)}finally{it=!1,yt()}}),I("clear-identity").addEventListener("click",()=>{it||we==="flying"||et||Ve?.pending||confirm("Forget this browser’s shared guest identity? Any unfinished challenge is abandoned. Published scores remain, and this browser will no longer own them. Local results and saved practice stay.")&&(Ve?.forget(),qe?.forgetRoom(),mt?.forgetArena(),We.clearSnapshot(),me=null,qt=null,Li=!1,I("online-mode").checked=!1,Qr("practice",!0))}),I("initials").value=ji.initials(),I("online-choice").hidden=!Ve,I("clear-identity").hidden=!Ve,Mr(),Ve){const n=new WebSocket(On.endpoint.boardSocket);n.addEventListener("message",e=>{try{const t=JSON.parse(String(e.data));typeof t=="object"&&t!==null&&"type"in t&&t.type==="board-changed"&&Mr()}catch{}}),window.addEventListener("pagehide",()=>n.close(),{once:!0})}}const Fv={"#cc684a":"#cf785c","#7d9461":"#445c48","#8d7653":"#645b47","#b1a17b":"#7d765f","#afc5ae":"#3b5150","#c2d1bb":"#465e5b","#718d65":"#405d4d","#89a176":"#58735a","#96ab6f":"#64794d","#a7ae94":"#737f6e","#66734a":"#556343"};function yl(){We?.setTheme(Qt),document.documentElement.dataset.theme=Qt,wr.setAttribute("aria-pressed",String(Qt==="dark")),wr.setAttribute("aria-label",Qt==="dark"?"Switch to light theme":"Switch to dark theme"),wr.textContent=Qt==="dark"?"☀ Light":"☾ Dark";const n=Qt==="dark"?"#202f36":"#dce8df";ui.setClearColor(n),tt.fog.color.set(n),kc.color.set(Qt==="dark"?"#c6d7e8":"#fff7d7"),kc.groundColor.set(Qt==="dark"?"#435b4b":"#6a8161"),nr.color.set(Qt==="dark"?"#d7def1":"#fff4d6");for(const[e,t]of oa)t.color.set(Qt==="dark"?Fv[e]??e:e);document.querySelector('meta[name="theme-color"]')?.setAttribute("content",Qt==="dark"?"#18231f":"#eef2de")}function Ga(){const n=aa==="visit"?ns:mu;I("shots-value").textContent=String(n.completed),I("hit-count-value").textContent=String(n.hits),I("hits-value").textContent=n.completed?`${Math.round(n.hits/n.completed*100)}%`:"0%",I("best-value").textContent=n.best===null?"—":`${n.best.toFixed(2)} units`,I("mean-value").textContent=n.mean===null?"—":`${n.mean.toFixed(2)} units`,I("streak-value").textContent=String(n.currentStreak),I("best-streak-value").textContent=String(n.bestStreak),I("spread-value").textContent=n.completed?`${Math.sqrt(n.m2/n.completed).toFixed(2)} units`:"—",I("recent-shots").replaceChildren(...n.recent.map(e=>{const t=document.createElement("li");return t.textContent=`${e.hit?"Hit":"Miss"} · ${e.distance.toFixed(2)} units · ${e.angle.toFixed(1)}° · ${(e.power*100).toFixed(1)}% power`,t})),I("recent-empty").hidden=n.completed>0,I("visit-stats").setAttribute("aria-pressed",String(aa==="visit")),I("saved-stats").setAttribute("aria-pressed",String(aa==="saved"))}const Va=new bv(n=>{mu=n.stats,I("save-status").textContent=n.message,I("save-status").dataset.state=n.state,Ga()});for(const[n,e]of[["visit-stats","visit"],["saved-stats","saved"]])I(n).addEventListener("click",()=>{et||(aa=e,Ga(),e==="saved"&&Va.refresh())});document.querySelector(".recent-details summary")?.addEventListener("click",n=>{et&&n.preventDefault()});I("clear-practice").addEventListener("click",()=>{et||(I("clear-confirmation").hidden=!1)});I("cancel-clear").addEventListener("click",()=>{et||(I("clear-confirmation").hidden=!0)});I("confirm-clear").addEventListener("click",()=>{et||(I("clear-confirmation").hidden=!0,Va.clear())});window.addEventListener("focus",()=>{wt==="range"&&Va.refresh()});function yn(n,e){fu.textContent=n,pu.textContent=e}function yt(){if(wt!=="range")return;I("angle-value").textContent=`${Math.round(Mt.angle)}°`,I("power-value").textContent=`${Math.round(Mt.power*100)}%`,I("angle-meter").style.width=`${Mt.angle/80*100}%`,I("power-meter").style.width=`${Mt.power*100}%`,ps.value=String(Math.round(Mt.angle)),ms.value=String(Math.round(Mt.power*100));const n=St||we==="aiming"||we==="flying"||it||!!Ve?.pending;wr.disabled=we==="aiming",I("mode-combat").disabled=we==="aiming"||it||!!Ve?.pending;for(const e of["visit-stats","saved-stats","clear-practice","confirm-clear","cancel-clear"])I(e).disabled=we==="aiming";Oa.disabled=n,ps.disabled=n,ms.disabled=n,as.hidden=we!=="hit"&&we!=="miss",Ev.hidden=we!=="ready"||St,lt.dataset.state=we,lt.dataset.paused=String(St),Pv()}function gs(){if(!(we==="flying"||St||it||Ve?.pending||me&&me.status!=="active")){me&&(qt=null,vl()),we="ready",Tt=null,fn=0,za.visible=!1,I("shot-result").hidden=!0;for(const n of Nr)n.visible=!1;yn("Pull back. Breathe. Release.","YOUR NEXT SHOT"),yt()}}function bl(){if(wt==="range"&&!(St||we==="flying"||it||Ve?.pending)){if(me){if(me.status!=="active"||we!=="ready"&&we!=="aiming")return;Dv({...Mt});return}Ml(Mt)}}function Ml(n){Mt={...n};const e=_a(Mi,is),t=Mi.angle*Math.PI/180;Oc={tip:{x:e.nock.x+Math.cos(t)*1.2,y:e.nock.y+Math.sin(t)*1.2},angle:t},Tt=Da(Mt),lt.dataset.shot=JSON.stringify(Tt),gu++,fn=0,we="flying",za.visible=!0,I("shot-result").hidden=!0;for(const i of Nr)i.visible=!1;yn("Let it fly…","ARROW IN FLIGHT"),yt()}function Bo(n,e){if(we!=="flying"||!Tt)return;we=n?"hit":"miss",fn=e,pl=Sa,I("shot-result-caption").textContent="Closest approach · this shot";const t=_v(Tt,H_,e),i=ns;ns=fl(ns,gu,n,t,Mt),Ga(),ns!==i&&Va.append({hit:n,distance:t,...Mt}),I("shot-result-value").textContent=`${t.toFixed(2)} units from center`,I("shot-result").hidden=!1;const r=Pi(Tt,e),s=(Ft.minX-Tt.origin.x)/Tt.velocity.x,a=Pi(Tt,s);nd=a.y>Ft.maxY?"A little high. Try less angle or draw.":a.y<Ft.minY?"A little low. Try more draw or angle.":"Just short. Give it a little more draw.",yn(n?"A lovely shot.":nd,n?"TARGET HIT":"ANOTHER TRY");for(const o of Nr)o.position.set(r.x,r.y,.2);yt()}function Yn(n=!0){if(!et)return;const e=et;et=null,lt.hasPointerCapture(e.id)&&lt.releasePointerCapture(e.id),Mt=e.previous,os.hidden=!0,we="ready",n&&yn("Draw cancelled. Take your time.","YOUR NEXT SHOT"),yt()}function Hr(n){Yn(!1),St=n,Ma=performance.now(),I("paused").hidden=!St,ba.textContent=St?"▶":"Ⅱ",ba.setAttribute("aria-label",St?"Resume game":"Pause game"),yt()}lt.addEventListener("pointerdown",n=>{if(wt!=="range"||St||we==="flying"||it||Ve?.pending||me&&(me.status!=="active"||we==="hit"||we==="miss")||et||!n.isPrimary||n.button!==0)return;n.preventDefault(),(we==="hit"||we==="miss")&&gs();const e=lt.getBoundingClientRect();et={id:n.pointerId,x:n.clientX,y:n.clientY,width:e.width,height:e.height,previous:{...Mt},valid:!1},lt.setPointerCapture(n.pointerId),lt.focus({preventScroll:!0}),os.style.left=`${n.clientX-e.left}px`,os.style.top=`${n.clientY-e.top}px`,os.hidden=!1,we="aiming",yn("Pull left and down. Release to shoot.","FIND YOUR ARC"),yt()});function xu(n){if(wt!=="range"||!et||n.pointerId!==et.id)return;const e=el(n.clientX-et.x,n.clientY-et.y,et.width,et.height);et.valid=e!==null,e&&(Mt=e),yn(e?"Release when it feels right.":"Pull left and down to draw the bow.","FIND YOUR ARC"),yt()}lt.addEventListener("pointermove",xu);lt.addEventListener("pointerup",n=>{if(wt!=="range"||!et||n.pointerId!==et.id)return;if(xu(n),!et?.valid){Yn();return}const e=et.id;et=null,os.hidden=!0,lt.hasPointerCapture(e)&&lt.releasePointerCapture(e),bl()});lt.addEventListener("pointercancel",n=>{et?.id===n.pointerId&&Yn()});lt.addEventListener("lostpointercapture",n=>{et?.id===n.pointerId&&Yn()});lt.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("resize",()=>{wt==="range"?Yn():We.cancelInput()});window.addEventListener("blur",()=>{wt==="range"?Hr(!0):We.cancelInput()});document.addEventListener("visibilitychange",()=>{document.hidden&&(wt==="range"?Hr(!0):We.cancelInput())});ba.addEventListener("click",()=>Hr(!St));wr.addEventListener("click",()=>{if(!et){Qt=Qt==="dark"?"light":"dark",yl();try{Sv(localStorage,Qt)}catch{}}});I("resume").addEventListener("click",()=>{Hr(!1),lt.focus({preventScroll:!0})});as.addEventListener("click",()=>{gs(),lt.focus({preventScroll:!0})});Oa.addEventListener("click",()=>{Yn(!1),bl()});for(const n of[ps,ms])n.addEventListener("input",()=>{if(we==="flying"||St||it||Ve?.pending||me&&(me.status!=="active"||we==="hit"||we==="miss")){yt();return}const e={angle:Number(ps.value),power:Number(ms.value)/100};Yn(!1),(we==="hit"||we==="miss")&&gs(),Mt=e,yt()});window.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLButtonElement||n.target instanceof HTMLElement&&["SUMMARY","SELECT","TEXTAREA"].includes(n.target.tagName)||n.target instanceof HTMLElement&&n.target.isContentEditable)){if(wt==="combat"){We.keydown(n);return}if(n.code==="KeyP"){n.preventDefault(),n.repeat||Hr(!St);return}if(n.code==="Escape"){Yn();return}if(!(St||et||it||Ve?.pending||me&&me.status!=="active")){if(n.code==="Space"){if(n.preventDefault(),n.repeat)return;we==="hit"||we==="miss"?gs():bl()}else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.code)&&we!=="flying"){if(n.preventDefault(),we==="hit"||we==="miss"){if(me)return;gs()}Mt.angle=hi(Mt.angle+(n.code==="ArrowLeft"?-1:n.code==="ArrowRight"?1:0),5,80),Mt.power=hi(Mt.power+(n.code==="ArrowDown"?-.02:n.code==="ArrowUp"?.02:0),.08,1),yt()}}}});let Ai=1,Ti=1;const Ov=new ResizeObserver(()=>{wt==="range"?Yn():We.cancelInput();const{width:n,height:e}=lt.getBoundingClientRect();n<=0||e<=0||(ui.setSize(Math.round(n*.85),Math.round(e*.85),!1),Ai=n,Ti=e,ka.setAttribute("viewBox",`0 0 ${n} ${e}`),wt==="range"?xl():We.resize(n,e))});Ov.observe(lt);lt.addEventListener("webglcontextlost",n=>{if(n.preventDefault(),wt==="combat"){We.cancelInput(),I("combat-message").textContent="Graphics interrupted. Reload to reconnect with the same guest.";return}Hr(!0),yn("Graphics interrupted. Reload to return to the clearing.","GRAPHICS PAUSED")});function vu(n){requestAnimationFrame(vu);const e=Math.max(0,(n-Ma)/1e3);if(Ma=n,wt==="combat"){We.render(ui,e),bu();return}if(!St&&(Sa+=e,we==="flying"&&Tt)){const c=Math.min(fn+e,ln.maxFlight);if(me&&qt)c>=qt.at?Uv():fn=c;else{const l=W_(Tt,Ft,fn,c),d=Gd(Tt);l!==null&&l<=d?Bo(!0,l):c>=d?Bo(!1,d):c>=ln.maxFlight?Bo(!1,c):fn=c}}const t={angle:Mt.angle,pull:.2+Mt.power*.5};St||(Mi=ou(Mi,t,e),is+=((Tt?1:0)-is)*(1-Math.exp(-18*e)));const i=Mi.angle*Math.PI/180,r=_a(Mi,is);Ur.rotation.z=i,Ur.position.set(r.bow.x,r.bow.y,.12);const s=_u.attributes.position;if(s.setXYZ(1,(r.nock.x-r.bow.x)*Math.cos(i)+(r.nock.y-r.bow.y)*Math.sin(i),0,0),s.needsUpdate=!0,ko(Av,bt(-7.7,2.3,.42),bt(r.bow.x+Math.cos(i)*.37,r.bow.y+Math.sin(i)*.37,.12)),ko(Tv,bt(-7.95,2.3,.45),bt(r.elbow.x,r.elbow.y,.28)),ko(Rv,bt(r.elbow.x,r.elbow.y,.28),bt(r.hand.x,r.hand.y,.12)),Cv.position.set(r.hand.x,r.hand.y,.12),Tt){const c=ss(Tt,fn,Oc);ei.position.set(c.position.x,c.position.y,.12),ei.rotation.z=c.angle;const l=Array.from({length:16},(d,u)=>{const h=Math.max(0,fn-.23+u/15*.23),m=ss(Tt,h,Oc).position;return bt(m.x,m.y,.04)});Bc.setFromPoints(l)}else ei.position.set(r.nock.x+Math.cos(i)*1.2,r.nock.y+Math.sin(i)*1.2,.12),ei.rotation.z=i;const a=Da(Mt);if(ka.style.visibility=!Tt&&!St&&(we!=="aiming"||et?.valid)?"visible":"hidden",xa(xn).forEach((c,l)=>{const d={x:r.nock.x+Math.cos(i)*1.2,y:r.nock.y+Math.sin(i)*1.2},u=ss(a,c,{tip:d,angle:i}).position,h=bt(u.x,u.y,.06).project(An);td[l].setAttribute("cx",String((h.x+1)*Ai/2)),td[l].setAttribute("cy",String((1-h.y)*Ti/2))}),Jr.hidden=!0,Tt&&we==="flying"&&!St){const c=bt(ei.position.x,ei.position.y,.12).project(An);if(Math.abs(c.x)>1||Math.abs(c.y)>1){const l=c.x*Ai/2,d=-c.y*Ti/2,u=Math.min((Ai/2-20)/Math.abs(l),(Ti/2-20)/Math.abs(d));Jr.style.left=`${Ai/2+l*u}px`,Jr.style.top=`${Ti/2+d*u}px`,Jr.style.setProperty("--cue-angle",`${Math.atan2(d,l)+Math.PI/2}rad`),Jr.hidden=!1}}const o=Sa-pl;Nr.forEach((c,l)=>{if(c.visible=we==="hit"&&o<.65,c.visible&&Tt){const d=Pi(Tt,fn),u=l/Nr.length*Math.PI*2;c.position.set(d.x+Math.cos(u)*o*2,d.y+Math.sin(u)*o*2-o*o*2,.25)}}),Ea.material=Ms(we==="hit"&&o<.2?"#edbc7e":"#cc684a"),Ea.material.color.set(we==="hit"&&o<.2?"#edbc7e":Qt==="dark"?"#cf785c":"#cc684a"),lt.dataset.pose=JSON.stringify({angle:Mi.angle,pull:Mi.pull,release:is,...r,arrow:{x:ei.position.x,y:ei.position.y,angle:ei.rotation.z},trail:Array.from(Bc.getAttribute("position")?.array??[]),flightTime:fn}),lt.dataset.view=JSON.stringify([An.left,An.right,An.top,An.bottom]),ui.render(tt,An)}We=new dv(lt);kv();yl();Ga();Nv();yt();requestAnimationFrame(vu);function yu(n){if(n!==wt){n==="combat"?(Yn(!1),wt=n,We.activate()):(We.deactivate(),wt=n,kt==="public"&&(en=!1,mt?.close())),Ma=performance.now(),document.body.dataset.view=n;for(const e of[".controls",".boards"]){const t=document.querySelector(e);t&&(t.hidden=n==="combat")}for(const e of["combat-panel","combat-controls","combat-scene-label"])I(e).hidden=n!=="combat";for(const e of["pause","guide","gesture-hint","arrow-cue","shot-result","face-inset","paused"])I(e).hidden=n==="combat";I("challenge-panel").hidden=n==="combat"||!me,I("mode-combat").setAttribute("aria-pressed",String(n==="combat"));for(const e of["practice","course","endless"]){const t=I(`mode-${e}`);t.disabled=!1,n==="combat"&&t.setAttribute("aria-pressed","false")}lt.dataset.viewMode=n,document.querySelector(".play-area").hidden=!1,n==="combat"?(ka.style.visibility="hidden",We.resize(Ai,Ti)):(xl(),yl(),vl(),I("paused").hidden=!St,I("shot-result").hidden=we!=="hit"&&we!=="miss",yt())}}function kv(){qe=On?new Cx(On.endpoint,fetch,Fr,On):null,mt=On?new Mx(On.endpoint,fetch,Fr,On):null,I("mode-combat").addEventListener("click",()=>{it||Ve?.pending||et||(yu("combat"),_n(),kt==="public"&&I("skirmish-title").focus())});const n=async e=>{sa="";try{await e()}catch(t){sa=t instanceof Error?t.message:"The combat service is unavailable. Reconnect or retry the pending action."}_n()};I("combat-create").addEventListener("click",()=>{qe&&n(()=>{const e=I("combat-preset").value,t=e==="teams-1"?{mode:"teams",preset:"teams-1"}:e==="royale-shrink-1"||e==="royale-fixed-1"?{mode:"royale",preset:e}:void 0;return qe.create(t)})}),I("combat-join-form").addEventListener("submit",e=>{e.preventDefault(),qe&&n(()=>qe.join(I("combat-join-code").value))}),I("combat-ready").addEventListener("click",()=>{const e=qe;e?.room&&n(()=>e.command({kind:"ready",ready:!e.room.state.seats.find(t=>t.actorId===e.room.membership.actorId)?.ready}))}),I("combat-start").addEventListener("click",()=>{qe&&n(()=>qe.command({kind:"start"}))}),I("combat-pass").addEventListener("click",()=>{kt==="public"?mt&&zo(()=>mt.command({kind:"pass"})):qe&&n(()=>qe.command({kind:"pass"}))}),I("combat-cancel").addEventListener("click",()=>{const e=qe?.room?.state.action;qe&&e&&n(()=>qe.command({kind:"cancel",cancelActionId:e.id}))}),I("combat-leave").addEventListener("click",()=>{qe&&!We.drawing&&n(()=>qe.command({kind:"leave"}))}),I("combat-resign").addEventListener("click",()=>{qe&&!We.drawing&&confirm(qe.room&&Cn(qe.room.state)?"Resign this match? Your archer will leave the competition.":"Resign this duel? Your opponent wins.")&&n(()=>qe.command({kind:"resign"}))}),I("combat-retry").addEventListener("click",()=>{qe&&n(()=>qe.retry())}),I("combat-reconnect").addEventListener("click",()=>{qe&&n(()=>qe.reconnect())}),We.onShot=(e,t)=>{kt==="public"?mt&&zo(()=>mt.command({kind:"shot",arrow:e,aim:t})):qe&&n(()=>qe.command({kind:"shot",arrow:e,aim:t}))},We.onDrawing=e=>{wr.disabled=e;for(const t of["practice","course","endless","combat"])I(`mode-${t}`).disabled=e;_n()},qe&&(qe.onChange=()=>{kt==="private"&&_n()},qe.onError=e=>{sa=e instanceof Error?e.message:"Connection interrupted. Reconnecting with the same guest.",_n()}),window.addEventListener("pagehide",()=>{qe?.close(),mt?.close()});for(const e of["private","public"])I(`combat-mode-${e}`).addEventListener("click",()=>{We.drawing||e===kt||(en=!1,kt=e,e==="private"&&mt?.close(),We.clearSnapshot(),_n(),e==="public"&&I("skirmish-title").focus())});for(const[e,t]of[["join",()=>mt.join()],["reconnect",()=>mt.reconnect()],["rejoin",()=>mt.control("rejoin")],["leave",()=>mt.control("leave")],["retry",()=>mt.retry()]])I(`skirmish-${e}`).addEventListener("click",()=>{if(mt&&!We.drawing){const i=e==="retry"?mt.pending?.body.kind:e;zo(t,i==="leave"?"leave":e==="retry"||["join","rejoin","reconnect"].includes(i??"")?"enter":"stay")}});I("skirmish-back").addEventListener("click",()=>{$i||mt?.busy||mt?.pending||We.drawing||(en=!1,mt?.close(),_n(),I("skirmish-title").focus())}),mt&&(mt.onChange=()=>{kt==="public"&&_n()},mt.onError=e=>{ya=e instanceof Error?e.message:"Connection interrupted. Reconnect with the same guest.",kt==="public"&&_n()}),_n()}function _n(){const n=wt==="combat"&&kt==="public"&&!en;document.querySelector(".play-area").hidden=n,I("combat-controls").hidden=wt!=="combat"||n,I("combat-scene-label").hidden=wt!=="combat"||n;for(const d of["combat-mode-picker","combat-preset-choice","combat-preset-label","combat-rules"])I(d).hidden=!wa;I("combat-private-title").textContent=wa?"Private match":"Private duel",I("combat-private-panel").hidden=kt!=="private",I("skirmish-panel").hidden=kt!=="public";for(const d of["private","public"])I(`combat-mode-${d}`).setAttribute("aria-pressed",String(kt===d)),I(`combat-mode-${d}`).disabled=We.drawing;if(I("combat-drag-help").textContent=kt==="public"?"Pull left to aim right or right to aim left, and pull down to raise the arc. Release to lock. Facing buttons also work before drawing. The short seven-dot guide shows only the opening arc.":"Pull backward and down from anywhere in the arena. Change facing before drawing. The short seven-dot guide shows only the opening arc.",kt==="public"){Bv();return}const e=qe,t=e?.room,i=t?.state,r=We.drawing,s=!!e?.busy||!!e?.pending;We.setTransport(!!e?.connected,s),We.setLockAgain(!!e?.lockAgain),t?We.setSnapshot(t.state,t.membership.actorId,e.now):We.hasRoom&&We.clearSnapshot(),I("combat-lobby").hidden=!!t,I("combat-code").textContent=t?t.code:"",I("combat-message").textContent=e?sa||(t?e.connected?"Connected to the private room. Share its code with a friend.":"Connecting to the private room. Server clocks continue.":"Create a room or enter a friend’s invitation code."):"Private duel is unavailable here. Practice and local Challenges are available.";for(const d of["create","join","join-code"])I(`combat-${d}`).disabled=!e||s||r||!!t;I("combat-roster").replaceChildren(...(t?Q_(t.state,t.membership.actorId,t.connections,e.now):[]).map(d=>{const u=document.createElement("li");u.dataset.actorId=d.actorId,u.textContent=d.text;const h=document.createElement("progress");if(h.max=100,h.value=d.health,h.setAttribute("aria-label",d.healthLabel),u.append(h),d.team!==null){const m=document.createElement("strong");m.className="combat-team",m.textContent=d.team,u.prepend(m)}if(d.lockText!==null){const m=document.createElement("div");m.textContent=d.lockText,u.append(m)}return u}));const a=i&&t?Vd(i,t.membership.actorId):null,o=d=>{const u=i?.seats.findIndex(h=>h.actorId===d)??-1;return t?.connections.find(h=>h.actorId===d)?.label??`Archer ${u+1}`};I("combat-rules").textContent=i?Cn(i)?"Lock one arrow or pass during shared 20-second planning. Locks are final. Server time continues in the background.":"Two archers · 100 health · alternating 20-second turns. Server time continues in the background.":"Duel alternates turns; Teams and Royale share a planning deadline. Server time continues in the background.",I("combat-key-help").textContent=`← → elevation · ↓ ↑ draw · Space ${i&&Cn(i)?"lock":"fire"} · Escape cancel draw. Combat has no local pause.`,I("combat-preset-label").textContent=a?.preset??"",I("combat-priority").textContent=a?.priority.length?`Priority: ${a.priority.map(o).join(" → ")}`:"",I("combat-pressure").textContent=a?.pressure??"",I("combat-scene-label").textContent=i&&Cn(i)?`${i.mode==="teams"?"TEAMS 2v2":"ROYALE"} · SIDE VIEW`:"PRIVATE DUEL · SIDE VIEW",I("combat-preset").disabled=!e||s||r||!!t;const c=i?.seats.find(d=>d.actorId===t?.membership.actorId);I("combat-ready").hidden=i?.state!=="waiting",I("combat-ready").textContent=c?.ready?"Not ready":"Ready",I("combat-start").hidden=i?.state!=="waiting"||!t?.membership.canStart,I("combat-leave").hidden=!t||i?.state==="active",I("combat-resign").hidden=i?.state!=="active",I("combat-reconnect").hidden=!e||!t&&!e.savedRoom||!!e.connected,I("combat-retry").hidden=!e?.pending;for(const d of["ready","start","leave","resign","reconnect","retry"])I(`combat-${d}`).disabled=r||!!e?.busy||d!=="retry"&&!!e?.pending;I("combat-start").disabled||=!i||!J_(i)||!e?.connected,I("combat-pass").disabled=r||s||!e?.connected||!i?.seat.canAct,I("combat-pass").textContent=i&&Cn(i)?"Lock pass":"Pass turn",I("combat-cancel").hidden=!!i&&Cn(i)||i?.phase!=="resolving"||i.action?.actorId!==t?.membership.actorId||i.launchAt===null||e.now()>=i.launchAt,I("combat-cancel").disabled=r||s||!e?.connected;const l=a?.result??"";I("combat-result").hidden=!l,I("combat-result").textContent=l,I("combat-phase").textContent=i?i.state==="active"?i.phase.toUpperCase():i.state.toUpperCase():"WAITING FOR A ROOM",I("combat-turn").textContent=a?.turn??"Invite a friend to the arena.",bu()}function bu(){if(kt==="public"){Mu();return}const n=qe?.room,e=n?.state;if(!e){I("combat-clock").textContent="";return}const t=qe.now();I("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.state==="active"&&e.deadlineAt!==null&&t>=e.deadlineAt&&(I("combat-fire").disabled=!0,I("combat-pass").disabled=!0)}async function zo(n,e="stay"){if($i)return;$i=!0,ya="",kt==="public"&&_n();let t=!1;try{await n(),kt==="public"&&wt==="combat"&&(e==="leave"&&mt?.room?.membership.status==="left"?(en=!1,t=!0):e==="enter"&&mt?.room&&(en=!0,t=!0))}catch(i){ya=i instanceof Error?i.message:"Public play is unavailable. Reconnect or retry the pending action."}finally{$i=!1,kt==="public"&&(_n(),t&&I("skirmish-title").focus())}}function Bv(){const n=mt,e=n?.room,t=e?.state,i=We.drawing,r=$i||!!n?.busy||!!n?.pending,s=e?Sx(e):null;I("skirmish-rules-note").textContent=wx(t?.version??Fa.version),We.setTransport(en&&!!n?.connected,r),We.setLockAgain(!!n?.lockAgain),e&&en?We.setSnapshot(e.state,e.membership.actorId,n.now):We.hasRoom&&We.clearSnapshot(),I("skirmish-entry").hidden=en,I("skirmish-roster").hidden=!en,I("skirmish-message").textContent=n?ya||($i?"Contacting the arena…":en?e?n.connected?s.turn:"Connection interrupted. Reconnect to observe or return to this arena.":"Join an arena. NPC archers fill the open places.":n.pending?"An action is awaiting acknowledgement. Retry the original action before continuing.":e?.membership.status==="left"?"You left public play. Rejoin when ready, or return to watch.":e||n.savedArena?"Your arena is saved. Return to play or watch with the same guest.":"Join when ready. NPC archers fill the open places."):"Public play is unavailable here. Practice and local Challenges are available.",I("skirmish-join").hidden=!!e||!!n?.savedArena||!!n?.pending,I("skirmish-rejoin").hidden=!s?.canRejoin,I("skirmish-leave").hidden=!en||!s?.canLeave,I("skirmish-reconnect").hidden=!n||!e&&!n.savedArena||en&&!!n.connected,I("skirmish-retry").hidden=!n?.pending,I("skirmish-reconnect").textContent=e&&["idle","left","aborted"].includes(e.membership.status)?"Watch arena":en?"Reconnect":"Return to arena",I("skirmish-back").hidden=!en||!e||!["idle","left","aborted"].includes(e.membership.status),I("skirmish-back").disabled=i||r;for(const a of["join","reconnect","rejoin","leave","retry"])I(`skirmish-${a}`).disabled=!n||i||$i||!!n.busy||a!=="retry"&&!!n.pending;I("skirmish-roster").replaceChildren(...(e?Ex(e):[]).map(a=>{const o=document.createElement("li");o.dataset.actorId=a.actorId,o.dataset.kind=a.kind,o.textContent=a.text;const c=document.createElement("progress");return c.max=100,c.value=a.health,c.setAttribute("aria-label",`${a.label} health`),o.append(c),o})),I("combat-preset-label").textContent="",I("combat-scene-label").textContent="PUBLIC ARENA · SIDE VIEW",I("combat-phase").textContent=s?.phase??"JOIN A PUBLIC ARENA",I("combat-turn").textContent=s?.turn??"Continuous play with human and NPC archers.",I("combat-priority").textContent=t?.priority.length?`Priority: ${t.priority.map(a=>e.connections.find(o=>o.actorId===a)?.label??"Archer").join(" → ")}`:"",I("combat-pressure").textContent=s?.warning??"",I("combat-result").hidden=!0,I("combat-result").textContent="",I("combat-key-help").textContent="← → elevation · ↓ ↑ draw · Space lock · Escape cancel draw. Public play follows server time.",I("combat-cancel").hidden=!0,I("combat-pass").textContent="Lock pass",I("combat-pass").disabled=!en||i||r||!n?.connected||!e?.membership.canAct,Mu()}function Mu(){const n=mt,e=n?.room?.state;if(!e){I("combat-clock").textContent="";return}const t=n.now();I("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.deadlineAt!==null&&t>=e.deadlineAt&&(I("combat-fire").disabled=!0,I("combat-pass").disabled=!0)}
