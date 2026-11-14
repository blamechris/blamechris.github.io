(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const nc="183",ld=0,Gc=1,hd=2,Lr=1,dd=2,Rr=3,hi=0,Qt=1,Hn=2,Xn=0,er=1,Vc=2,Hc=3,Wc=4,ud=5,bi=100,fd=101,pd=102,md=103,gd=104,_d=200,xd=201,vd=202,Md=203,io=204,ro=205,Sd=206,yd=207,bd=208,Ed=209,Td=210,wd=211,Ad=212,Rd=213,Cd=214,so=0,ao=1,oo=2,ir=3,co=4,lo=5,ho=6,uo=7,Ql=0,Pd=1,Id=2,wn=0,eh=1,th=2,nh=3,ih=4,rh=5,sh=6,ah=7,oh=300,Pi=301,rr=302,ua=303,fa=304,Ks=306,fo=1e3,Wn=1001,po=1002,zt=1003,Ld=1004,es=1005,$t=1006,pa=1007,Ti=1008,an=1009,ch=1010,lh=1011,Or=1012,ic=1013,Cn=1014,En=1015,qn=1016,rc=1017,sc=1018,Br=1020,hh=35902,dh=35899,uh=1021,fh=1022,xn=1023,$n=1026,wi=1027,ph=1028,ac=1029,sr=1030,oc=1031,cc=1033,ws=33776,As=33777,Rs=33778,Cs=33779,mo=35840,go=35841,_o=35842,xo=35843,vo=36196,Mo=37492,So=37496,yo=37488,bo=37489,Eo=37490,To=37491,wo=37808,Ao=37809,Ro=37810,Co=37811,Po=37812,Io=37813,Lo=37814,Do=37815,Uo=37816,No=37817,Fo=37818,Oo=37819,Bo=37820,ko=37821,zo=36492,Go=36494,Vo=36495,Ho=36283,Wo=36284,Xo=36285,Yo=36286,Dd=3200,mh=0,Ud=1,ai="",sn="srgb",ar="srgb-linear",Fs="linear",it="srgb",Fi=7680,Xc=519,Nd=512,Fd=513,Od=514,lc=515,Bd=516,kd=517,hc=518,zd=519,Yc=35044,qc="300 es",Tn=2e3,kr=2001;function Gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vd(){const n=Os("canvas");return n.style.display="block",n}const $c={};function jc(...n){const e="THREE."+n.shift();console.log(e,...n)}function gh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=gh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=gh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Bs(...n){const e=n.join(" ");e in $c||($c[e]=!0,Ie(...n))}function Hd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Wd={[so]:ao,[oo]:ho,[co]:uo,[ir]:lo,[ao]:so,[ho]:oo,[uo]:co,[lo]:ir};class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,qo=180/Math.PI;function Xr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function Xd(n,e){return(n%e+e)%e}function ga(n,e,t){return(1-t)*n+t*e}function xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3],h=s[a+0],u=s[a+1],g=s[a+2],v=s[a+3];if(p!==v||l!==h||c!==u||d!==g){let m=l*h+c*u+d*g+p*v;m<0&&(h=-h,u=-u,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),T=Math.sin(S);f=Math.sin(f*S)/T,o=Math.sin(o*S)/T,l=l*f+h*o,c=c*f+u*o,d=d*f+g*o,p=p*f+v*o}else{l=l*f+h*o,c=c*f+u*o,d=d*f+g*o,p=p*f+v*o;const S=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=S,c*=S,d*=S,p*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[a],h=s[a+1],u=s[a+2],g=s[a+3];return e[t]=o*g+d*p+l*u-c*h,e[t+1]=l*g+d*h+c*p-o*u,e[t+2]=c*g+d*u+o*h-l*p,e[t+3]=d*g-o*p-l*h-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),p=o(s/2),h=l(i/2),u=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*d*p+c*u*g,this._y=c*u*p-h*d*g,this._z=c*d*g+h*u*p,this._w=c*d*p-h*u*g;break;case"YXZ":this._x=h*d*p+c*u*g,this._y=c*u*p-h*d*g,this._z=c*d*g-h*u*p,this._w=c*d*p+h*u*g;break;case"ZXY":this._x=h*d*p-c*u*g,this._y=c*u*p+h*d*g,this._z=c*d*g+h*u*p,this._w=c*d*p-h*u*g;break;case"ZYX":this._x=h*d*p-c*u*g,this._y=c*u*p+h*d*g,this._z=c*d*g-h*u*p,this._w=c*d*p+h*u*g;break;case"YZX":this._x=h*d*p+c*u*g,this._y=c*u*p+h*d*g,this._z=c*d*g-h*u*p,this._w=c*d*p-h*u*g;break;case"XZY":this._x=h*d*p-c*u*g,this._y=c*u*p-h*d*g,this._z=c*d*g+h*u*p,this._w=c*d*p+h*u*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],h=i+o+p;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-l)*u,this._y=(s-c)*u,this._z=(a-r)*u}else if(i>o&&i>p){const u=2*Math.sqrt(1+i-o-p);this._w=(d-l)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+c)/u}else if(o>p){const u=2*Math.sqrt(1+o-i-p);this._w=(s-c)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+p-i-o);this._w=(a-r)/u,this._x=(s+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+l*c+a*p-o*d,this.y=i+l*d+o*c-s*p,this.z=r+l*p+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new N,Kc=new ur;class Ne{constructor(e,t,i,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],h=i[2],u=i[5],g=i[8],v=r[0],m=r[3],f=r[6],S=r[1],T=r[4],b=r[7],R=r[2],w=r[5],A=r[8];return s[0]=a*v+o*S+l*R,s[3]=a*m+o*T+l*w,s[6]=a*f+o*b+l*A,s[1]=c*v+d*S+p*R,s[4]=c*m+d*T+p*w,s[7]=c*f+d*b+p*A,s[2]=h*v+u*S+g*R,s[5]=h*m+u*T+g*w,s[8]=h*f+u*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*a-o*c,h=o*l-d*s,u=c*s-a*l,g=t*p+i*h+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(r*c-d*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(d*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=u*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new Ne,Zc=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const n={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Fs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ar]:{primaries:e,whitePoint:i,transfer:Fs,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const Ye=Yd();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Oi===void 0&&(Oi=Os("canvas")),Oi.width=e.width,Oi.height=e.height;const r=Oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Oi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $d=0;class dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(va(r[a].image)):s.push(va(r[a]))}else s=va(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let jd=0;const Ma=new N;class Zt extends dr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=Wn,r=Wn,s=$t,a=Ti,o=xn,l=an,c=Zt.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Xr(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=oh;Zt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],u=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(u+1)/2,R=(f+1)/2,w=(d+h)/4,A=(p+v)/4,x=(g+m)/4;return T>b&&T>R?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=A/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=w/r,s=x/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=x/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(p-v)/S,this.z=(h-d)/S,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kd extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Zt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Kd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _h extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zd extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vt{constructor(e,t,i,r,s,a,o,l,c,d,p,h,u,g,v,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,d,p,h,u,g,v,m)}set(e,t,i,r,s,a,o,l,c,d,p,h,u,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=h,f[3]=u,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*d,u=a*p,g=o*d,v=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=u+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+u*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,u=l*p,g=c*d,v=c*p;t[0]=h+v*o,t[4]=g*o-u,t[8]=a*c,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=u*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,u=l*p,g=c*d,v=c*p;t[0]=h-v*o,t[4]=-a*p,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,u=a*p,g=o*d,v=o*p;t[0]=l*d,t[4]=g*c-u,t[8]=h*c+v,t[1]=l*p,t[5]=v*c+h,t[9]=u*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,u=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-h*p,t[8]=g*p+u,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=u*p+g,t[10]=h-v*p}else if(e.order==="XZY"){const h=a*l,u=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=h*p+v,t[5]=a*d,t[9]=u*p-g,t[2]=g*p-u,t[6]=o*d,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jd,e,Qd)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Qn.crossVectors(i,tn),Qn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Qn.crossVectors(i,tn)),Qn.normalize(),ts.crossVectors(tn,Qn),r[0]=Qn.x,r[4]=ts.x,r[8]=tn.x,r[1]=Qn.y,r[5]=ts.y,r[9]=tn.y,r[2]=Qn.z,r[6]=ts.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],h=i[9],u=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],T=i[7],b=i[11],R=i[15],w=r[0],A=r[4],x=r[8],y=r[12],Y=r[1],C=r[5],F=r[9],G=r[13],W=r[2],k=r[6],V=r[10],O=r[14],ee=r[3],Z=r[7],he=r[11],ge=r[15];return s[0]=a*w+o*Y+l*W+c*ee,s[4]=a*A+o*C+l*k+c*Z,s[8]=a*x+o*F+l*V+c*he,s[12]=a*y+o*G+l*O+c*ge,s[1]=d*w+p*Y+h*W+u*ee,s[5]=d*A+p*C+h*k+u*Z,s[9]=d*x+p*F+h*V+u*he,s[13]=d*y+p*G+h*O+u*ge,s[2]=g*w+v*Y+m*W+f*ee,s[6]=g*A+v*C+m*k+f*Z,s[10]=g*x+v*F+m*V+f*he,s[14]=g*y+v*G+m*O+f*ge,s[3]=S*w+T*Y+b*W+R*ee,s[7]=S*A+T*C+b*k+R*Z,s[11]=S*x+T*F+b*V+R*he,s[15]=S*y+T*G+b*O+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],u=e[14],g=e[3],v=e[7],m=e[11],f=e[15],S=l*u-c*h,T=o*u-c*p,b=o*h-l*p,R=a*u-c*d,w=a*h-l*d,A=a*p-o*d;return t*(v*S-m*T+f*b)-i*(g*S-m*R+f*w)+r*(g*T-v*R+f*A)-s*(g*b-v*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],u=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=t*o-i*a,T=t*l-r*a,b=t*c-s*a,R=i*l-r*o,w=i*c-s*o,A=r*c-s*l,x=d*v-p*g,y=d*m-h*g,Y=d*f-u*g,C=p*m-h*v,F=p*f-u*v,G=h*f-u*m,W=S*G-T*F+b*C+R*Y-w*y+A*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/W;return e[0]=(o*G-l*F+c*C)*k,e[1]=(r*F-i*G-s*C)*k,e[2]=(v*A-m*w+f*R)*k,e[3]=(h*w-p*A-u*R)*k,e[4]=(l*Y-a*G-c*y)*k,e[5]=(t*G-r*Y+s*y)*k,e[6]=(m*b-g*A-f*T)*k,e[7]=(d*A-h*b+u*T)*k,e[8]=(a*F-o*Y+c*x)*k,e[9]=(i*Y-t*F-s*x)*k,e[10]=(g*w-v*b+f*S)*k,e[11]=(p*b-d*w-u*S)*k,e[12]=(o*y-a*C-l*x)*k,e[13]=(t*C-i*y+r*x)*k,e[14]=(v*T-g*R-m*S)*k,e[15]=(d*R-p*T+h*S)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,p=o+o,h=s*c,u=s*d,g=s*p,v=a*d,m=a*p,f=o*p,S=l*c,T=l*d,b=l*p,R=i.x,w=i.y,A=i.z;return r[0]=(1-(v+f))*R,r[1]=(u+b)*R,r[2]=(g-T)*R,r[3]=0,r[4]=(u-b)*w,r[5]=(1-(h+f))*w,r[6]=(m+S)*w,r[7]=0,r[8]=(g+T)*A,r[9]=(m-S)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Bi.set(r[0],r[1],r[2]).length();const o=Bi.set(r[4],r[5],r[6]).length(),l=Bi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),un.copy(this);const c=1/a,d=1/o,p=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=d,un.elements[5]*=d,un.elements[6]*=d,un.elements[8]*=p,un.elements[9]*=p,un.elements[10]*=p,t.setFromRotationMatrix(un),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Tn,l=!1){const c=this.elements,d=2*s/(t-e),p=2*s/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===Tn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===kr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Tn,l=!1){const c=this.elements,d=2/(t-e),p=2/(i-r),h=-(t+e)/(t-e),u=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===Tn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===kr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bi=new N,un=new vt,Jd=new N(0,0,0),Qd=new N(1,1,1),Qn=new N,ts=new N,tn=new N,Qc=new vt,el=new ur;class Pn{constructor(e=0,t=0,i=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],h=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return el.setFromEuler(this),this.setFromQuaternion(el,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eu=0;const tl=new N,ki=new ur,Nn=new vt,ns=new N,vr=new N,tu=new N,nu=new ur,nl=new N(1,0,0),il=new N(0,1,0),rl=new N(0,0,1),sl={type:"added"},iu={type:"removed"},zi={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Ft extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new N,t=new Pn,i=new ur,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ne}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(nl,e)}rotateY(e){return this.rotateOnAxis(il,e)}rotateZ(e){return this.rotateOnAxis(rl,e)}translateOnAxis(e,t){return tl.copy(e).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nl,e)}translateY(e){return this.translateOnAxis(il,e)}translateZ(e){return this.translateOnAxis(rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ns.copy(e):ns.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(vr,ns,this.up):Nn.lookAt(ns,vr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sl),zi.child=e,this.dispatchEvent(zi),zi.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iu),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,nu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),h=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new N(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ru={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&h>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ru)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},is={h:0,s:0,l:0};function ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Xd(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ba(a,s,e+1/3),this.g=ba(a,s,e),this.b=ba(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=sn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Ye.workingToColorSpace(Xt.copy(this),e),Math.round(Ve(Xt.r*255,0,255))*65536+Math.round(Ve(Xt.g*255,0,255))*256+Math.round(Ve(Xt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=sn){Ye.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(is);const i=ga(ei.h,is.h,t),r=ga(ei.s,is.s,t),s=ga(ei.l,is.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new He;He.NAMES=vh;class uc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new uc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mh extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fn=new N,Fn=new N,Ea=new N,On=new N,Gi=new N,Vi=new N,al=new N,Ta=new N,wa=new N,Aa=new N,Ra=new yt,Ca=new yt,Pa=new yt;class _n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Fn.subVectors(i,t),Ea.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Fn),l=fn.dot(Ea),c=Fn.dot(Fn),d=Fn.dot(Ea),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,u=(c*l-o*d)*h,g=(a*d-o*l)*h;return s.set(1-u-g,g,u)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,i),Pa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ra,s.x),a.addScaledVector(Ca,s.y),a.addScaledVector(Pa,s.z),a}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Fn.subVectors(e,t),fn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Gi.subVectors(r,i),Vi.subVectors(s,i),Ta.subVectors(e,i);const l=Gi.dot(Ta),c=Vi.dot(Ta);if(l<=0&&c<=0)return t.copy(i);wa.subVectors(e,r);const d=Gi.dot(wa),p=Vi.dot(wa);if(d>=0&&p<=d)return t.copy(r);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(Gi,a);Aa.subVectors(e,s);const u=Gi.dot(Aa),g=Vi.dot(Aa);if(g>=0&&u<=g)return t.copy(s);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Vi,o);const m=d*g-u*p;if(m<=0&&p-d>=0&&u-g>=0)return al.subVectors(s,r),o=(p-d)/(p-d+(u-g)),t.copy(r).addScaledVector(al,o);const f=1/(m+v+h);return a=v*f,o=h*f,t.copy(i).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rs.copy(i.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),ss.subVectors(this.max,Mr),Hi.subVectors(e.a,Mr),Wi.subVectors(e.b,Mr),Xi.subVectors(e.c,Mr),ti.subVectors(Wi,Hi),ni.subVectors(Xi,Wi),gi.subVectors(Hi,Xi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-gi.z,gi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,gi.z,0,-gi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-gi.y,gi.x,0];return!Ia(t,Hi,Wi,Xi,ss)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Hi,Wi,Xi,ss))?!1:(as.crossVectors(ti,ni),t=[as.x,as.y,as.z],Ia(t,Hi,Wi,Xi,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,rs=new Yr,Hi=new N,Wi=new N,Xi=new N,ti=new N,ni=new N,gi=new N,Mr=new N,ss=new N,as=new N,_i=new N;function Ia(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_i.fromArray(n,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),d=i.dot(_i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const wt=new N,os=new qe;let su=0;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:su++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}}class Sh extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yh extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const au=new Yr,Sr=new N,La=new N;class Zs{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):au.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(La)),this.expandByPoint(Sr.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ou=0;const on=new vt,Da=new Ft,Yi=new N,nn=new Yr,yr=new Yr,Nt=new N;class Vt extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?yh:Sh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(nn.min,yr.min),nn.expandByPoint(Nt),Nt.addVectors(nn.max,yr.max),nn.expandByPoint(Nt)):(nn.expandByPoint(yr.min),nn.expandByPoint(yr.max))}nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Nt.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(e,c),Nt.add(Yi)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new N,l[x]=new N;const c=new N,d=new N,p=new N,h=new qe,u=new qe,g=new qe,v=new N,m=new N;function f(x,y,Y){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,y),p.fromBufferAttribute(i,Y),h.fromBufferAttribute(s,x),u.fromBufferAttribute(s,y),g.fromBufferAttribute(s,Y),d.sub(c),p.sub(c),u.sub(h),g.sub(h);const C=1/(u.x*g.y-g.x*u.y);isFinite(C)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(p,-u.y).multiplyScalar(C),m.copy(p).multiplyScalar(u.x).addScaledVector(d,-g.x).multiplyScalar(C),o[x].add(v),o[y].add(v),o[Y].add(v),l[x].add(m),l[y].add(m),l[Y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,y=S.length;x<y;++x){const Y=S[x],C=Y.start,F=Y.count;for(let G=C,W=C+F;G<W;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new N,b=new N,R=new N,w=new N;function A(x){R.fromBufferAttribute(r,x),w.copy(R);const y=o[x];T.copy(y),T.sub(R.multiplyScalar(R.dot(y))).normalize(),b.crossVectors(w,y);const C=b.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,C)}for(let x=0,y=S.length;x<y;++x){const Y=S[x],C=Y.start,F=Y.count;for(let G=C,W=C+F;G<W;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,u=i.count;h<u;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,d=new N,p=new N;if(e)for(let h=0,u=e.count;h<u;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,u=t.count;h<u;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d);let u=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*d;for(let f=0;f<d;f++)h[g++]=c[u++]}return new Rn(h,d,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const h=c[d],u=e(h,i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const u=c[p];d.push(u.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let h=0,u=p.length;h<u;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cu=0;class fr extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=er,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=ro,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==io&&(i.blendSrc=this.blendSrc),this.blendDst!==ro&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kn=new N,Ua=new N,cs=new N,ii=new N,Na=new N,ls=new N,Fa=new N;class bh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ua.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Ua);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=ii.dot(this.direction),l=-ii.dot(cs),c=ii.lengthSq(),d=Math.abs(1-a*a);let p,h,u,g;if(d>0)if(p=a*l-o,h=a*o-l,g=s*d,p>=0)if(h>=-g)if(h<=g){const v=1/d;p*=v,h*=v,u=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+o)),u=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+o)),u=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),u=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-s,-l),s),u=h*(h+2*l)+c):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),u=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),u=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ua).addScaledVector(cs,h),u}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){Na.subVectors(t,e),ls.subVectors(i,e),Fa.crossVectors(Na,ls);let a=this.direction.dot(Fa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(ls.crossVectors(ii,ls));if(l<0)return null;const c=o*this.direction.dot(Na.cross(ii));if(c<0||l+c>a)return null;const d=-o*ii.dot(Fa);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Eh extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ol=new vt,xi=new bh,hs=new Zs,cl=new N,ds=new N,us=new N,fs=new N,Oa=new N,ps=new N,ll=new N,ms=new N;class Ct extends Ft{constructor(e=new Vt,t=new Eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(Oa.fromBufferAttribute(p,e),a?ps.addScaledVector(Oa,d):ps.addScaledVector(Oa.sub(t),d))}t.add(ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(hs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(hs,cl)===null||xi.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(ol.copy(s).invert(),xi.copy(e.ray).applyMatrix4(ol),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,h=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],S=Math.max(m.start,u.start),T=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let b=S,R=T;b<R;b+=3){const w=o.getX(b),A=o.getX(b+1),x=o.getX(b+2);r=gs(this,f,e,i,c,d,p,w,A,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,f=v;m<f;m+=3){const S=o.getX(m),T=o.getX(m+1),b=o.getX(m+2);r=gs(this,a,e,i,c,d,p,S,T,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],S=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let b=S,R=T;b<R;b+=3){const w=b,A=b+1,x=b+2;r=gs(this,f,e,i,c,d,p,w,A,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,f=v;m<f;m+=3){const S=m,T=m+1,b=m+2;r=gs(this,a,e,i,c,d,p,S,T,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function lu(n,e,t,i,r,s,a,o){let l;if(e.side===Qt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===hi,o),l===null)return null;ms.copy(o),ms.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:n}}function gs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ds),n.getVertexPosition(l,us),n.getVertexPosition(c,fs);const d=lu(n,e,t,i,ds,us,fs,ll);if(d){const p=new N;_n.getBarycoord(ll,ds,us,fs,p),r&&(d.uv=_n.getInterpolatedAttribute(r,o,l,c,p,new qe)),s&&(d.uv1=_n.getInterpolatedAttribute(s,o,l,c,p,new qe)),a&&(d.normal=_n.getInterpolatedAttribute(a,o,l,c,p,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};_n.getNormal(ds,us,fs,h.normal),d.face=h,d.barycoord=p}return d}class hu extends Zt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=zt,d=zt,p,h){super(null,a,o,l,c,d,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ba=new N,du=new N,uu=new Ne;class yi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ba.subVectors(i,t).cross(du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uu.getNormalMatrix(e),r=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Zs,fu=new qe(.5,.5),_s=new N;class fc{constructor(e=new yi,t=new yi,i=new yi,r=new yi,s=new yi,a=new yi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],h=s[6],u=s[7],g=s[8],v=s[9],m=s[10],f=s[11],S=s[12],T=s[13],b=s[14],R=s[15];if(r[0].setComponents(c-a,u-d,f-g,R-S).normalize(),r[1].setComponents(c+a,u+d,f+g,R+S).normalize(),r[2].setComponents(c+o,u+p,f+v,R+T).normalize(),r[3].setComponents(c-o,u-p,f-v,R-T).normalize(),i)r[4].setComponents(l,h,m,b).normalize(),r[5].setComponents(c-l,u-h,f-m,R-b).normalize();else if(r[4].setComponents(c-l,u-h,f-m,R-b).normalize(),t===Tn)r[5].setComponents(c+l,u+h,f+m,R+b).normalize();else if(t===kr)r[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);const t=fu.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_s.x=r.normal.x>0?e.max.x:e.min.x,_s.y=r.normal.y>0?e.max.y:e.min.y,_s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class or extends fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ks=new N,zs=new N,hl=new vt,br=new bh,xs=new Zs,ka=new N,dl=new N;class Ji extends Ft{constructor(e=new Vt,t=new or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ks.fromBufferAttribute(t,r-1),zs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ks.distanceTo(zs);e.setAttribute("lineDistance",new Gt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(r),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;hl.copy(r).invert(),br.copy(e.ray).applyMatrix4(hl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=c){const f=d.getX(v),S=d.getX(v+1),T=vs(this,e,br,l,f,S,v);T&&t.push(T)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(u),f=vs(this,e,br,l,v,m,g-1);f&&t.push(f)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=c){const f=vs(this,e,br,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=vs(this,e,br,l,g-1,u,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vs(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ks.fromBufferAttribute(o,r),zs.fromBufferAttribute(o,s),t.distanceSqToSegment(ks,zs,ka,dl)>i)return;ka.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ka);if(!(c<e.near||c>e.far))return{distance:c,point:dl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Th extends Zt{constructor(e=[],t=Pi,i,r,s,a,o,l,c,d){super(e,t,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zr extends Zt{constructor(e,t,i=Cn,r,s,a,o=zt,l=zt,c,d=$n,p=1){if(d!==$n&&d!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pu extends zr{constructor(e,t=Cn,i=Pi,r,s,a=zt,o=zt,l,c=$n){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wh extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Li extends Vt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],p=[];let h=0,u=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function g(v,m,f,S,T,b,R,w,A,x,y){const Y=b/A,C=R/x,F=b/2,G=R/2,W=w/2,k=A+1,V=x+1;let O=0,ee=0;const Z=new N;for(let he=0;he<V;he++){const ge=he*C-G;for(let ue=0;ue<k;ue++){const Fe=ue*Y-F;Z[v]=Fe*S,Z[m]=ge*T,Z[f]=W,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[f]=w>0?1:-1,d.push(Z.x,Z.y,Z.z),p.push(ue/A),p.push(1-he/x),O+=1}}for(let he=0;he<x;he++)for(let ge=0;ge<A;ge++){const ue=h+ge+k*he,Fe=h+ge+k*(he+1),ut=h+(ge+1)+k*(he+1),dt=h+(ge+1)+k*he;l.push(ue,Fe,dt),l.push(Fe,ut,dt),ee+=6}o.addGroup(u,ee,y),u+=ee,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pc extends Vt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,d=new qe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const u=i+p/t*r;c.x=e*Math.cos(u),c.y=e*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mc extends Vt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],h=[],u=[];let g=0;const v=[],m=i/2;let f=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function S(){const b=new N,R=new N;let w=0;const A=(t-e)/i;for(let x=0;x<=s;x++){const y=[],Y=x/s,C=Y*(t-e)+e;for(let F=0;F<=r;F++){const G=F/r,W=G*l+o,k=Math.sin(W),V=Math.cos(W);R.x=C*k,R.y=-Y*i+m,R.z=C*V,p.push(R.x,R.y,R.z),b.set(k,A,V).normalize(),h.push(b.x,b.y,b.z),u.push(G,1-Y),y.push(g++)}v.push(y)}for(let x=0;x<r;x++)for(let y=0;y<s;y++){const Y=v[y][x],C=v[y+1][x],F=v[y+1][x+1],G=v[y][x+1];(e>0||y!==0)&&(d.push(Y,C,G),w+=3),(t>0||y!==s-1)&&(d.push(C,F,G),w+=3)}c.addGroup(f,w,0),f+=w}function T(b){const R=g,w=new qe,A=new N;let x=0;const y=b===!0?e:t,Y=b===!0?1:-1;for(let F=1;F<=r;F++)p.push(0,m*Y,0),h.push(0,Y,0),u.push(.5,.5),g++;const C=g;for(let F=0;F<=r;F++){const W=F/r*l+o,k=Math.cos(W),V=Math.sin(W);A.x=y*V,A.y=m*Y,A.z=y*k,p.push(A.x,A.y,A.z),h.push(0,Y,0),w.x=k*.5+.5,w.y=V*.5*Y+.5,u.push(w.x,w.y),g++}for(let F=0;F<r;F++){const G=R+F,W=C+F;b===!0?d.push(W,W+1,G):d.push(W+1,W,G),x+=3}c.addGroup(f,x,b===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qr extends mc{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends Vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,p=e/o,h=t/l,u=[],g=[],v=[],m=[];for(let f=0;f<d;f++){const S=f*h-a;for(let T=0;T<c;T++){const b=T*p-s;g.push(b,-S,0),v.push(0,0,1),m.push(T/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const T=S+c*f,b=S+c*(f+1),R=S+1+c*(f+1),w=S+1+c*f;u.push(T,b,w),u.push(b,R,w)}this.setIndex(u),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const r in i)e[r]=i[r]}return e}function mu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ah(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const gu={clone:cr,merge:jt};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vu extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rh extends fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mu extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Su extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yu extends or{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ch extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ph extends Ch{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const za=new vt,ul=new N,fl=new N;class bu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(ul),fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fl),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===kr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ms=new N,Ss=new ur,Mn=new N;class Ih extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ms,Ss,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ss,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ms,Ss,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ss,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new N,pl=new qe,ml=new qe;class gn extends Ih{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,pl,ml),t.subVectors(ml,pl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $r extends Ih{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Eu extends bu{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends Ch{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const qi=-90,$i=1;class Tu extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(qi,$i,e,t);r.layers=this.layers,this.add(r);const s=new gn(qi,$i,e,t);s.layers=this.layers,this.add(s);const a=new gn(qi,$i,e,t);a.layers=this.layers,this.add(a);const o=new gn(qi,$i,e,t);o.layers=this.layers,this.add(o);const l=new gn(qi,$i,e,t);l.layers=this.layers,this.add(l);const c=new gn(qi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,h,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wu extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function gl(n,e,t,i){const r=Au(i);switch(t){case uh:return n*e;case ph:return n*e/r.components*r.byteLength;case ac:return n*e/r.components*r.byteLength;case sr:return n*e*2/r.components*r.byteLength;case oc:return n*e*2/r.components*r.byteLength;case fh:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case cc:return n*e*4/r.components*r.byteLength;case ws:case As:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rs:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:case xo:return Math.max(n,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(n,8)*Math.max(e,8)/2;case vo:case Mo:case yo:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case So:case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zo:case Go:case Vo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ho:case Wo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xo:case Yo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Au(n){switch(n){case an:case ch:return{byteLength:1,components:1};case Or:case lh:case qn:return{byteLength:2,components:1};case rc:case sc:return{byteLength:2,components:4};case Cn:case ic:case En:return{byteLength:4,components:1};case hh:case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function Dh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ru(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,d);else{p.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<p.length;u++){const g=p[h],v=p[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,p[h]=v)}p.length=h+1;for(let u=0,g=p.length;u<g;u++){const v=p[u];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vu=`#ifdef USE_IRIDESCENCE
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
#endif`,Hu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ju=`#define PI 3.141592653589793
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ef=`vec3 transformedNormal = objectNormal;
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
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,af="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
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
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
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
#endif`,Rf=`uniform sampler2D dfgLUT;
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
}`,Cf=`
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jf=`#ifdef USE_NORMALMAP
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
#endif`,Qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pp=`float getShadowMask() {
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
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,Bp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#define LAMBERT
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
}`,Yp=`#define LAMBERT
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
}`,qp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,jp=`#define NORMAL
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
}`,Kp=`#define NORMAL
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
}`,Zp=`#define PHONG
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
}`,Jp=`#define PHONG
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
}`,Qp=`#define STANDARD
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
}`,em=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,nm=`#define TOON
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
}`,im=`uniform float size;
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
}`,rm=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,am=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,cm=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Iu,alphamap_pars_fragment:Lu,alphatest_fragment:Du,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:ku,beginnormal_vertex:zu,bsdfs:Gu,iridescence_fragment:Vu,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:qu,color_fragment:$u,color_pars_fragment:ju,color_pars_vertex:Ku,color_vertex:Zu,common:Ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ef,displacementmap_pars_vertex:tf,displacementmap_vertex:nf,emissivemap_fragment:rf,emissivemap_pars_fragment:sf,colorspace_fragment:af,colorspace_pars_fragment:of,envmap_fragment:cf,envmap_common_pars_fragment:lf,envmap_pars_fragment:hf,envmap_pars_vertex:df,envmap_physical_pars_fragment:yf,envmap_vertex:uf,fog_vertex:ff,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:xf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:Mf,lights_pars_begin:Sf,lights_toon_fragment:bf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Tf,lights_phong_pars_fragment:wf,lights_physical_fragment:Af,lights_physical_pars_fragment:Rf,lights_fragment_begin:Cf,lights_fragment_maps:Pf,lights_fragment_end:If,logdepthbuf_fragment:Lf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Nf,map_fragment:Ff,map_pars_fragment:Of,map_particle_fragment:Bf,map_particle_pars_fragment:kf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Vf,morphcolor_vertex:Hf,morphnormal_vertex:Wf,morphtarget_pars_vertex:Xf,morphtarget_vertex:Yf,normal_fragment_begin:qf,normal_fragment_maps:$f,normal_pars_fragment:jf,normal_pars_vertex:Kf,normal_vertex:Zf,normalmap_pars_fragment:Jf,clearcoat_normal_fragment_begin:Qf,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:tp,iridescence_pars_fragment:np,opaque_fragment:ip,packing:rp,premultiplied_alpha_fragment:sp,project_vertex:ap,dithering_fragment:op,dithering_pars_fragment:cp,roughnessmap_fragment:lp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:up,shadowmap_vertex:fp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:_p,skinnormal_vertex:xp,specularmap_fragment:vp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:yp,transmission_fragment:bp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:wp,uv_vertex:Ap,worldpos_vertex:Rp,background_vert:Cp,background_frag:Pp,backgroundCube_vert:Ip,backgroundCube_frag:Lp,cube_vert:Dp,cube_frag:Up,depth_vert:Np,depth_frag:Fp,distance_vert:Op,distance_frag:Bp,equirect_vert:kp,equirect_frag:zp,linedashed_vert:Gp,linedashed_frag:Vp,meshbasic_vert:Hp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:Yp,meshmatcap_vert:qp,meshmatcap_frag:$p,meshnormal_vert:jp,meshnormal_frag:Kp,meshphong_vert:Zp,meshphong_frag:Jp,meshphysical_vert:Qp,meshphysical_frag:em,meshtoon_vert:tm,meshtoon_frag:nm,points_vert:im,points_frag:rm,shadow_vert:sm,shadow_frag:am,sprite_vert:om,sprite_frag:cm},oe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},yn={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};yn.physical={uniforms:jt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ys={r:0,b:0,g:0},Mi=new Pn,lm=new vt;function hm(n,e,t,i,r,s){const a=new He(0);let o=r===!0?0:1,l,c,d=null,p=0,h=null;function u(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const b=S.backgroundBlurriness>0;T=e.get(T,b)}return T}function g(S){let T=!1;const b=u(S);b===null?m(a,o):b&&b.isColor&&(m(b,1),T=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,T){const b=u(T);b&&(b.isCubeTexture||b.mapping===Ks)?(c===void 0&&(c=new Ct(new Li(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:cr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Mi.copy(T.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(Mi)),c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==it,(d!==b||p!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,p=b.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ct(new Js(2,2),new In({name:"BackgroundMaterial",uniforms:cr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||p!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,p=b.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB(ys,Ah(n)),t.buffers.color.setClear(ys.r,ys.g,ys.b,T,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:f}}function dm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(C,F,G,W,k){let V=!1;const O=p(C,W,G,F);s!==O&&(s=O,c(s.object)),V=u(C,W,G,k),V&&g(C,W,G,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(C,F,G,W),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function p(C,F,G,W){const k=W.wireframe===!0;let V=i[F.id];V===void 0&&(V={},i[F.id]=V);const O=C.isInstancedMesh===!0?C.id:0;let ee=V[O];ee===void 0&&(ee={},V[O]=ee);let Z=ee[G.id];Z===void 0&&(Z={},ee[G.id]=Z);let he=Z[k];return he===void 0&&(he=h(l()),Z[k]=he),he}function h(C){const F=[],G=[],W=[];for(let k=0;k<t;k++)F[k]=0,G[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:W,object:C,attributes:{},index:null}}function u(C,F,G,W){const k=s.attributes,V=F.attributes;let O=0;const ee=G.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const ge=k[Z];let ue=V[Z];if(ue===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ge===void 0||ge.attribute!==ue||ue&&ge.data!==ue.data)return!0;O++}return s.attributesNum!==O||s.index!==W}function g(C,F,G,W){const k={},V=F.attributes;let O=0;const ee=G.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let ge=V[Z];ge===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor));const ue={};ue.attribute=ge,ge&&ge.data&&(ue.data=ge.data),k[Z]=ue,O++}s.attributes=k,s.attributesNum=O,s.index=W}function v(){const C=s.newAttributes;for(let F=0,G=C.length;F<G;F++)C[F]=0}function m(C){f(C,0)}function f(C,F){const G=s.newAttributes,W=s.enabledAttributes,k=s.attributeDivisors;G[C]=1,W[C]===0&&(n.enableVertexAttribArray(C),W[C]=1),k[C]!==F&&(n.vertexAttribDivisor(C,F),k[C]=F)}function S(){const C=s.newAttributes,F=s.enabledAttributes;for(let G=0,W=F.length;G<W;G++)F[G]!==C[G]&&(n.disableVertexAttribArray(G),F[G]=0)}function T(C,F,G,W,k,V,O){O===!0?n.vertexAttribIPointer(C,F,G,k,V):n.vertexAttribPointer(C,F,G,W,k,V)}function b(C,F,G,W){v();const k=W.attributes,V=G.getAttributes(),O=F.defaultAttributeValues;for(const ee in V){const Z=V[ee];if(Z.location>=0){let he=k[ee];if(he===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const ge=he.normalized,ue=he.itemSize,Fe=e.get(he);if(Fe===void 0)continue;const ut=Fe.buffer,dt=Fe.type,j=Fe.bytesPerElement,ie=dt===n.INT||dt===n.UNSIGNED_INT||he.gpuType===ic;if(he.isInterleavedBufferAttribute){const ae=he.data,Ue=ae.stride,Re=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Z.locationSize;Pe++)f(Z.location+Pe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<Z.locationSize;Pe++)m(Z.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let Pe=0;Pe<Z.locationSize;Pe++)T(Z.location+Pe,ue/Z.locationSize,dt,ge,Ue*j,(Re+ue/Z.locationSize*Pe)*j,ie)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)f(Z.location+ae,he.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<Z.locationSize;ae++)m(Z.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let ae=0;ae<Z.locationSize;ae++)T(Z.location+ae,ue/Z.locationSize,dt,ge,ue*j,ue/Z.locationSize*ae*j,ie)}}else if(O!==void 0){const ge=O[ee];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Z.location,ge);break;case 3:n.vertexAttrib3fv(Z.location,ge);break;case 4:n.vertexAttrib4fv(Z.location,ge);break;default:n.vertexAttrib1fv(Z.location,ge)}}}}S()}function R(){y();for(const C in i){const F=i[C];for(const G in F){const W=F[G];for(const k in W){const V=W[k];for(const O in V)d(V[O].object),delete V[O];delete W[k]}}delete i[C]}}function w(C){if(i[C.id]===void 0)return;const F=i[C.id];for(const G in F){const W=F[G];for(const k in W){const V=W[k];for(const O in V)d(V[O].object),delete V[O];delete W[k]}}delete i[C.id]}function A(C){for(const F in i){const G=i[F];for(const W in G){const k=G[W];if(k[C.id]===void 0)continue;const V=k[C.id];for(const O in V)d(V[O].object),delete V[O];delete k[C.id]}}}function x(C){for(const F in i){const G=i[F],W=C.isInstancedMesh===!0?C.id:0,k=G[W];if(k!==void 0){for(const V in k){const O=k[V];for(const ee in O)d(O[ee].object),delete O[ee];delete k[V]}delete G[W],Object.keys(G).length===0&&delete i[F]}}}function y(){Y(),a=!0,s!==r&&(s=r,c(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:Y,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function um(n,e,t){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function a(c,d,p){p!==0&&(n.drawArraysInstanced(i,c,d,p),t.update(d,i,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let u=0;for(let g=0;g<p;g++)u+=d[g];t.update(u,i,1)}function l(c,d,p,h){if(p===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],d[g],h[g]);else{u.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==xn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==an&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==En&&!x)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:b,maxSamples:R,samples:w}}function pm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new yi,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const u=p.length!==0||h||i!==0||r;return r=h,i=p.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,u){const g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,f=n.get(p);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const S=s?0:i,T=S*4;let b=f.clippingState||null;l.value=b,b=d(g,h,T,u);for(let R=0;R!==T;++R)b[R]=t[R];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,u,g){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=u+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,b=u;T!==v;++T,b+=4)a.copy(p[T]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const oi=4,_l=[.125,.215,.35,.446,.526,.582],Ei=20,mm=256,Er=new $r,xl=new He;let Ga=null,Va=0,Ha=0,Wa=!1;const gm=new N;class vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=gm}=s;Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Va,Ha),this._renderer.xr.enabled=Wa,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:qn,format:xn,colorSpace:ar,depthBuffer:!1},r=Ml(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_m(s)),this._blurMaterial=vm(s,e,t),this._ggxMaterial=xm(s,e,t)}return r}_compileMaterial(e){const t=new Ct(new Vt,e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,i,r,s){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,u=p.toneMapping;p.getClearColor(xl),p.toneMapping=wn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new Li,new Eh({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(xl),f=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[T],s.y,s.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[T]));const R=this._cubeSize;ji(r,b*R,T>2?R:0,R,R),p.setRenderTarget(r),f&&p.render(v,l),p.render(e,l)}p.toneMapping=u,p.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pi||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ji(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Er)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),h=0+c*1.25,u=p*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-oi?i-g+oi:0),f=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=g-t,ji(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Er),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ji(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Er)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=c;const h=c.uniforms,u=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Ei-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):Ei;m>Ei&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const f=[];let S=0;for(let A=0;A<Ei;++A){const x=A/v,y=Math.exp(-x*x/2);f.push(y),A===0?S+=y:A<m&&(S+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const b=this._sizeLods[r],R=3*b*(r>T-oi?r-T+oi:0),w=4*(this._cubeSize-b);ji(t,R,w,3*b,2*b),l.setRenderTarget(t),l.render(p,Er)}}function _m(n){const e=[],t=[],i=[];let r=n;const s=n-oi+1+_l.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-oi?l=_l[a-n+oi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],u=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*u),T=new Float32Array(m*g*u),b=new Float32Array(f*g*u);for(let w=0;w<u;w++){const A=w%3*2/3-1,x=w>2?0:-1,y=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];S.set(y,v*g*w),T.set(h,m*g*w);const Y=[w,w,w,w,w,w];b.set(Y,f*g*w)}const R=new Vt;R.setAttribute("position",new Rn(S,v)),R.setAttribute("uv",new Rn(T,m)),R.setAttribute("faceIndex",new Rn(b,f)),i.push(new Ct(R,null)),r>oi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ml(n,e,t){const i=new An(n,e,t);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ji(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xm(n,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qs(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function vm(n,e,t){const i=new Float32Array(Ei),r=new N(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qs(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Sl(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qs(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function yl(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Qs(){return`

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
	`}class Uh extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Th(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Li(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Xn});s.uniforms.tEquirect.value=t;const a=new Ct(r,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=$t),new Tu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Mm(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,u=!1){return h==null?null:u?a(h):s(h)}function s(h){if(h&&h.isTexture){const u=h.mapping;if(u===ua||u===fa)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Uh(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const u=h.mapping,g=u===ua||u===fa,v=u===Pi||u===rr;if(g||v){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new vl(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new vl(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,u){return u===ua?h.mapping=Pi:u===fa&&(h.mapping=rr),h}function l(h){let u=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&u++;return u===g}function c(h){const u=h.target;u.removeEventListener("dispose",c);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function d(h){const u=h.target;u.removeEventListener("dispose",d);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Sm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Bs("WebGLRenderer: "+i+" extension not supported."),r}}}function ym(n,e,t,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const u=s.get(h);u&&(e.remove(u),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const u in h)e.update(h[u],n.ARRAY_BUFFER)}function c(p){const h=[],u=p.index,g=p.attributes.position;let v=0;if(g===void 0)return;if(u!==null){const S=u.array;v=u.version;for(let T=0,b=S.length;T<b;T+=3){const R=S[T+0],w=S[T+1],A=S[T+2];h.push(R,w,w,A,A,R)}}else{const S=g.array;v=g.version;for(let T=0,b=S.length/3-1;T<b;T+=3){const R=T+0,w=T+1,A=T+2;h.push(R,w,w,A,A,R)}}const m=new(g.count>=65535?yh:Sh)(h,1);m.version=v;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function d(p){const h=s.get(p);if(h){const u=p.index;u!==null&&h.version<u.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function bm(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){n.drawElements(i,u,s,h*a),t.update(u,i,1)}function c(h,u,g){g!==0&&(n.drawElementsInstanced(i,u,s,h*a,g),t.update(u,i,g))}function d(h,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=u[f];t.update(m,i,1)}function p(h,u,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,u[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,s,h,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=u[S]*v[S];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Em(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tm(n,e,t){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let Y=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",Y)};var u=Y;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let R=o.attributes.position.count*b,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*w*4*p),x=new _h(A,R,w,p);x.type=En,x.needsUpdate=!0;const y=b*4;for(let C=0;C<p;C++){const F=f[C],G=S[C],W=T[C],k=R*w*4*C;for(let V=0;V<F.count;V++){const O=V*y;g===!0&&(r.fromBufferAttribute(F,V),A[k+O+0]=r.x,A[k+O+1]=r.y,A[k+O+2]=r.z,A[k+O+3]=0),v===!0&&(r.fromBufferAttribute(G,V),A[k+O+4]=r.x,A[k+O+5]=r.y,A[k+O+6]=r.z,A[k+O+7]=0),m===!0&&(r.fromBufferAttribute(W,V),A[k+O+8]=r.x,A[k+O+9]=r.y,A[k+O+10]=r.z,A[k+O+11]=W.itemSize===4?r.w:1)}}h={count:p,texture:x,size:new qe(R,w)},i.set(o,h),o.addEventListener("dispose",Y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function wm(n,e,t,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,p=c.geometry,h=e.get(c,p);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return h}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Am={[eh]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ih]:"ACES_FILMIC_TONE_MAPPING",[sh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function Rm(n,e,t,i,r){const s=new An(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new An(e,t,{type:qn,depthBuffer:!1,stencilBuffer:!1}),o=new Vt;o.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const l=new vu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ct(o,l),d=new $r(-1,1,1,-1,0,1);let p=null,h=null,u=!1,g,v=null,m=[],f=!1;this.setSize=function(S,T){s.setSize(S,T),a.setSize(S,T);for(let b=0;b<m.length;b++){const R=m[b];R.setSize&&R.setSize(S,T)}},this.setEffects=function(S){m=S,f=m.length>0&&m[0].isRenderPass===!0;const T=s.width,b=s.height;for(let R=0;R<m.length;R++){const w=m[R];w.setSize&&w.setSize(T,b)}},this.begin=function(S,T){if(u||S.toneMapping===wn&&m.length===0)return!1;if(v=T,T!==null){const b=T.width,R=T.height;(s.width!==b||s.height!==R)&&this.setSize(b,R)}return f===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=wn,!0},this.hasRenderPass=function(){return f},this.end=function(S,T){S.toneMapping=g,u=!0;let b=s,R=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(S,R,b,T),A.needsSwap!==!1)){const x=b;b=R,R=x}}if(p!==S.outputColorSpace||h!==S.toneMapping){p=S.outputColorSpace,h=S.toneMapping,l.defines={},Ye.getTransfer(p)===it&&(l.defines.SRGB_TRANSFER="");const w=Am[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(v),S.render(c,d),v=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Nh=new Zt,$o=new zr(1,1),Fh=new _h,Oh=new Zd,Bh=new Th,bl=[],El=[],Tl=new Float32Array(16),wl=new Float32Array(9),Al=new Float32Array(4);function pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bl[r];if(s===void 0&&(s=new Float32Array(r),bl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=El[e];t===void 0&&(t=new Int32Array(e),El[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Dm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Al.set(i),n.uniformMatrix2fv(this.addr,!1,Al),Lt(t,i)}}function Um(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;wl.set(i),n.uniformMatrix3fv(this.addr,!1,wl),Lt(t,i)}}function Nm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Tl.set(i),n.uniformMatrix4fv(this.addr,!1,Tl),Lt(t,i)}}function Fm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function zm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Wm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($o.compareFunction=t.isReversedDepthBuffer()?hc:lc,s=$o):s=Nh,t.setTexture2D(e||s,r)}function Xm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Oh,r)}function Ym(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bh,r)}function qm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fh,r)}function $m(n){switch(n){case 5126:return Cm;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Dm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return km;case 5125:return zm;case 36294:return Gm;case 36295:return Vm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return qm}}function jm(n,e){n.uniform1fv(this.addr,e)}function Km(n,e){const t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function Zm(n,e){const t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function Jm(n,e){const t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Qm(n,e){const t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eg(n,e){const t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tg(n,e){const t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ng(n,e){n.uniform1iv(this.addr,e)}function ig(n,e){n.uniform2iv(this.addr,e)}function rg(n,e){n.uniform3iv(this.addr,e)}function sg(n,e){n.uniform4iv(this.addr,e)}function ag(n,e){n.uniform1uiv(this.addr,e)}function og(n,e){n.uniform2uiv(this.addr,e)}function cg(n,e){n.uniform3uiv(this.addr,e)}function lg(n,e){n.uniform4uiv(this.addr,e)}function hg(n,e,t){const i=this.cache,r=e.length,s=ea(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=$o:a=Nh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function dg(n,e,t){const i=this.cache,r=e.length,s=ea(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Oh,s[a])}function ug(n,e,t){const i=this.cache,r=e.length,s=ea(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Bh,s[a])}function fg(n,e,t){const i=this.cache,r=e.length,s=ea(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Fh,s[a])}function pg(n){switch(n){case 5126:return jm;case 35664:return Km;case 35665:return Zm;case 35666:return Jm;case 35674:return Qm;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return rg;case 35669:case 35673:return sg;case 5125:return ag;case 36294:return og;case 36295:return cg;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}class mg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$m(t.type)}}class gg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}}class _g{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Rl(n,e){n.seq.push(e),n.map[e.id]=e}function xg(n,e,t){const i=n.name,r=i.length;for(Xa.lastIndex=0;;){const s=Xa.exec(i),a=Xa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Rl(t,c===void 0?new mg(o,n,e):new gg(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new _g(o),Rl(t,p)),t=p}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);xg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Cl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vg=37297;let Mg=0;function Sg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Pl=new Ne;function yg(n){Ye._getMatrix(Pl,Ye.workingColorSpace,n);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Fs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Il(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Sg(n.getShaderSource(e),o)}else return s}function bg(n,e){const t=yg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Eg={[eh]:"Linear",[th]:"Reinhard",[nh]:"Cineon",[ih]:"ACESFilmic",[sh]:"AgX",[ah]:"Neutral",[rh]:"Custom"};function Tg(n,e){const t=Eg[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new N;function wg(){Ye.getLuminanceCoefficients(bs);const n=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Rg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Cg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Cr(n){return n!==""}function Ll(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(n){return n.replace(Pg,Lg)}const Ig=new Map;function Lg(n,e){let t=Oe[e];if(t===void 0){const i=Ig.get(e);if(i!==void 0)t=Oe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(n){return n.replace(Dg,Ug)}function Ug(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Ng={[Lr]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function Fg(n){return Ng[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Og={[Pi]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE_UV"};function Bg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Og[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const kg={[rr]:"ENVMAP_MODE_REFRACTION"};function zg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":kg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gg={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[Pd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function Vg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Gg[n.combine]||"ENVMAP_BLENDING_NONE"}function Hg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Wg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Fg(t),c=Bg(t),d=zg(t),p=Vg(t),h=Hg(t),u=Ag(t),g=Rg(s),v=r.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),f.length>0&&(f+=`
`)):(m=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),f=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==wn?Tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),wg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=jo(a),a=Ll(a,t),a=Dl(a,t),o=jo(o),o=Ll(o,t),o=Dl(o,t),a=Ul(a),o=Ul(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=S+m+a,b=S+f+o,R=Cl(r,r.VERTEX_SHADER,T),w=Cl(r,r.FRAGMENT_SHADER,b);r.attachShader(v,R),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(C){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(R)||"",W=r.getShaderInfoLog(w)||"",k=F.trim(),V=G.trim(),O=W.trim();let ee=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,w);else{const he=Il(r,R,"vertex"),ge=Il(r,w,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+he+`
`+ge)}else k!==""?Ie("WebGLProgram: Program Info Log:",k):(V===""||O==="")&&(Z=!1);Z&&(C.diagnostics={runnable:ee,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(R),r.deleteShader(w),x=new Ps(r,v),y=Cg(r,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(v,vg)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}let Xg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qg(e),t.set(e,i)),i}}class qg{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}}function $g(n,e,t,i,r,s){const a=new xh,o=new Yg,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,y,Y,C,F){const G=C.fog,W=F.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||k,V),ee=O&&O.mapping===Ks?O.image.height:null,Z=u[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=he!==void 0?he.length:0;let ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let Fe,ut,dt,j;if(Z){const nt=yn[Z];Fe=nt.vertexShader,ut=nt.fragmentShader}else Fe=x.vertexShader,ut=x.fragmentShader,o.update(x),dt=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const ie=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,Pe=!!x.map,Dt=!!x.matcap,We=!!O,tt=!!x.aoMap,ot=!!x.lightMap,Be=!!x.bumpMap,bt=!!x.normalMap,P=!!x.displacementMap,Tt=!!x.emissiveMap,Qe=!!x.metalnessMap,lt=!!x.roughnessMap,ye=x.anisotropy>0,E=x.clearcoat>0,_=x.dispersion>0,L=x.iridescence>0,$=x.sheen>0,K=x.transmission>0,q=ye&&!!x.anisotropyMap,_e=E&&!!x.clearcoatMap,re=E&&!!x.clearcoatNormalMap,Ae=E&&!!x.clearcoatRoughnessMap,Ce=L&&!!x.iridescenceMap,J=L&&!!x.iridescenceThicknessMap,te=$&&!!x.sheenColorMap,xe=$&&!!x.sheenRoughnessMap,Me=!!x.specularMap,de=!!x.specularColorMap,ke=!!x.specularIntensityMap,I=K&&!!x.transmissionMap,se=K&&!!x.thicknessMap,ne=!!x.gradientMap,pe=!!x.alphaMap,Q=x.alphaTest>0,X=!!x.alphaHash,ve=!!x.extensions;let Le=wn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=n.toneMapping);const ht={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:ut,defines:x.defines,customVertexShaderID:dt,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ar,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:Dt,envMap:We,envMapMode:We&&O.mapping,envMapCubeUVHeight:ee,aoMap:tt,lightMap:ot,bumpMap:Be,normalMap:bt,displacementMap:P,emissiveMap:Tt,normalMapObjectSpace:bt&&x.normalMapType===Ud,normalMapTangentSpace:bt&&x.normalMapType===mh,metalnessMap:Qe,roughnessMap:lt,anisotropy:ye,anisotropyMap:q,clearcoat:E,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:L,iridescenceMap:Ce,iridescenceThicknessMap:J,sheen:$,sheenColorMap:te,sheenRoughnessMap:xe,specularMap:Me,specularColorMap:de,specularIntensityMap:ke,transmission:K,transmissionMap:I,thicknessMap:se,gradientMap:ne,opaque:x.transparent===!1&&x.blending===er&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:X,combine:x.combine,mapUv:Pe&&g(x.map.channel),aoMapUv:tt&&g(x.aoMap.channel),lightMapUv:ot&&g(x.lightMap.channel),bumpMapUv:Be&&g(x.bumpMap.channel),normalMapUv:bt&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:Tt&&g(x.emissiveMap.channel),metalnessMapUv:Qe&&g(x.metalnessMap.channel),roughnessMapUv:lt&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:ke&&g(x.specularIntensityMap.channel),transmissionMapUv:I&&g(x.transmissionMap.channel),thicknessMapUv:se&&g(x.thicknessMap.channel),alphaMapUv:pe&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(bt||ye),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Pe||pe),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&bt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ae,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:Tt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Y in x.defines)y.push(Y),y.push(x.defines[Y]);return x.isRawShaderMaterial===!1&&(f(y,x),S(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function f(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function T(x){const y=u[x.type];let Y;if(y){const C=yn[y];Y=gu.clone(C.uniforms)}else Y=x.uniforms;return Y}function b(x,y){let Y=d.get(y);return Y!==void 0?++Y.usedTimes:(Y=new Wg(n,y,x,r),c.push(Y),d.set(y,Y)),Y}function R(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:b,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:A}}function jg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Kg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Fl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ol(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,g,v,m,f){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:u,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},n[e]=S):(S.id=h.id,S.object=h,S.geometry=u,S.material=g,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=m,S.group=f),e++,S}function l(h,u,g,v,m,f){const S=o(h,u,g,v,m,f);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):t.push(S)}function c(h,u,g,v,m,f){const S=o(h,u,g,v,m,f);g.transmission>0?i.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,u){t.length>1&&t.sort(h||Kg),i.length>1&&i.sort(u||Fl),r.length>1&&r.sort(u||Fl)}function p(){for(let h=e,u=n.length;h<u;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:d}}function Zg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ol,n.set(i,[a])):r>=s.length?(a=new Ol,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Jg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new He};break;case"SpotLight":t={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Qg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let e0=0;function t0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function n0(n){const e=new Jg,t=Qg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new vt,a=new vt;function o(c){let d=0,p=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let u=0,g=0,v=0,m=0,f=0,S=0,T=0,b=0,R=0,w=0,A=0;c.sort(t0);for(let y=0,Y=c.length;y<Y;y++){const C=c[y],F=C.color,G=C.intensity,W=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===sr?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=F.r*G,p+=F.g*G,h+=F.b*G;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],G);A++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,ee=t.get(C);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,i.directionalShadow[u]=ee,i.directionalShadowMap[u]=k,i.directionalShadowMatrix[u]=C.shadow.matrix,S++}i.directional[u]=V,u++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(F).multiplyScalar(G),V.distance=W,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[v]=V;const O=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,O.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[v]=O.matrix,C.castShadow){const ee=t.get(C);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=k,b++}v++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(F).multiplyScalar(G),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=V,m++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const O=C.shadow,ee=t.get(C);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,ee.shadowCameraNear=O.camera.near,ee.shadowCameraFar=O.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(G),V.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==u||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==S||x.numPointShadows!==T||x.numSpotShadows!==b||x.numSpotMaps!==R||x.numLightProbes!==A)&&(i.directional.length=u,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,x.directionalLength=u,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=S,x.numPointShadows=T,x.numSpotShadows=b,x.numSpotMaps=R,x.numLightProbes=A,i.version=e0++)}function l(c,d){let p=0,h=0,u=0,g=0,v=0;const m=d.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const T=c[f];if(T.isDirectionalLight){const b=i.directional[p];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(T.isSpotLight){const b=i.spot[u];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(T.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Bl(n){const e=new n0(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function i0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bl(n),e.set(r,[o])):s>=a.length?(o=new Bl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
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
}`,a0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],o0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],kl=new vt,Tr=new N,Ya=new N;function c0(n,e,t){let i=new fc;const r=new qe,s=new qe,a=new yt,o=new Mu,l=new Su,c={},d=t.maxTextureSize,p={[hi]:Qt,[Qt]:hi,[Hn]:Hn},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:r0,fragmentShader:s0}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ct(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let f=this.type;this.render=function(w,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===dd&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lr);const y=n.getRenderTarget(),Y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Xn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=f!==this.type;G&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(k=>k.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,k=w.length;W<k;W++){const V=w[W],O=V.shadow;if(O===void 0){Ie("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ee=O.getFrameExtents();r.multiply(ee),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ee.x),r.x=s.x*ee.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ee.y),r.y=s.y*ee.y,O.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Z,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Rr){if(V.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new An(r.x,r.y,{format:sr,type:qn,minFilter:$t,magFilter:$t,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new zr(r.x,r.y,En),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=$n,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt}else V.isPointLight?(O.map=new Uh(r.x),O.map.depthTexture=new pu(r.x,Cn)):(O.map=new An(r.x,r.y),O.map.depthTexture=new zr(r.x,r.y,Cn)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=$n,this.type===Lr?(O.map.depthTexture.compareFunction=Z?hc:lc,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt);O.camera.updateProjectionMatrix()}const he=O.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<he;ge++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(O.map),n.clear());const ue=O.getViewport(ge);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),F.viewport(a)}if(V.isPointLight){const ue=O.camera,Fe=O.matrix,ut=V.distance||ue.far;ut!==ue.far&&(ue.far=ut,ue.updateProjectionMatrix()),Tr.setFromMatrixPosition(V.matrixWorld),ue.position.copy(Tr),Ya.copy(ue.position),Ya.add(a0[ge]),ue.up.copy(o0[ge]),ue.lookAt(Ya),ue.updateMatrixWorld(),Fe.makeTranslation(-Tr.x,-Tr.y,-Tr.z),kl.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(kl,ue.coordinateSystem,ue.reversedDepth)}else O.updateMatrices(V);i=O.getFrustum(),b(A,x,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===Rr&&S(O,x),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,Y,C)};function S(w,A){const x=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new An(r.x,r.y,{format:sr,type:qn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,x,h,v,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,x,u,v,null)}function T(w,A,x,y){let Y=null;const C=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)Y=C;else if(Y=x.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=Y.uuid,G=A.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let k=W[G];k===void 0&&(k=Y.clone(),W[G]=k,A.addEventListener("dispose",R)),Y=k}if(Y.visible=A.visible,Y.wireframe=A.wireframe,y===Rr?Y.side=A.shadowSide!==null?A.shadowSide:A.side:Y.side=A.shadowSide!==null?A.shadowSide:p[A.side],Y.alphaMap=A.alphaMap,Y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,Y.map=A.map,Y.clipShadows=A.clipShadows,Y.clippingPlanes=A.clippingPlanes,Y.clipIntersection=A.clipIntersection,Y.displacementMap=A.displacementMap,Y.displacementScale=A.displacementScale,Y.displacementBias=A.displacementBias,Y.wireframeLinewidth=A.wireframeLinewidth,Y.linewidth=A.linewidth,x.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const F=n.properties.get(Y);F.light=x}return Y}function b(w,A,x,y,Y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&Y===Rr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const G=e.update(w),W=w.material;if(Array.isArray(W)){const k=G.groups;for(let V=0,O=k.length;V<O;V++){const ee=k[V],Z=W[ee.materialIndex];if(Z&&Z.visible){const he=T(w,Z,y,Y);w.onBeforeShadow(n,w,A,x,G,he,ee),n.renderBufferDirect(x,null,G,he,w,ee),w.onAfterShadow(n,w,A,x,G,he,ee)}}}else if(W.visible){const k=T(w,W,y,Y);w.onBeforeShadow(n,w,A,x,G,k,null),n.renderBufferDirect(x,null,G,k,w,null),w.onAfterShadow(n,w,A,x,G,k,null)}}const F=w.children;for(let G=0,W=F.length;G<W;G++)b(F[G],A,x,y,Y)}function R(w){w.target.removeEventListener("dispose",R);for(const x in c){const y=c[x],Y=w.target.uuid;Y in y&&(y[Y].dispose(),delete y[Y])}}}function l0(n,e){function t(){let I=!1;const se=new yt;let ne=null;const pe=new yt(0,0,0,0);return{setMask:function(Q){ne!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){I=Q},setClear:function(Q,X,ve,Le,ht){ht===!0&&(Q*=Le,X*=Le,ve*=Le),se.set(Q,X,ve,Le),pe.equals(se)===!1&&(n.clearColor(Q,X,ve,Le),pe.copy(se))},reset:function(){I=!1,ne=null,pe.set(-1,0,0,0)}}}function i(){let I=!1,se=!1,ne=null,pe=null,Q=null;return{setReversed:function(X){if(se!==X){const ve=e.get("EXT_clip_control");X?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),se=X;const Le=Q;Q=null,this.setClear(Le)}},getReversed:function(){return se},setTest:function(X){X?ie(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(X){ne!==X&&!I&&(n.depthMask(X),ne=X)},setFunc:function(X){if(se&&(X=Wd[X]),pe!==X){switch(X){case so:n.depthFunc(n.NEVER);break;case ao:n.depthFunc(n.ALWAYS);break;case oo:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case co:n.depthFunc(n.EQUAL);break;case lo:n.depthFunc(n.GEQUAL);break;case ho:n.depthFunc(n.GREATER);break;case uo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=X}},setLocked:function(X){I=X},setClear:function(X){Q!==X&&(Q=X,se&&(X=1-X),n.clearDepth(X))},reset:function(){I=!1,ne=null,pe=null,Q=null,se=!1}}}function r(){let I=!1,se=null,ne=null,pe=null,Q=null,X=null,ve=null,Le=null,ht=null;return{setTest:function(nt){I||(nt?ie(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(nt){se!==nt&&!I&&(n.stencilMask(nt),se=nt)},setFunc:function(nt,Dn,Un){(ne!==nt||pe!==Dn||Q!==Un)&&(n.stencilFunc(nt,Dn,Un),ne=nt,pe=Dn,Q=Un)},setOp:function(nt,Dn,Un){(X!==nt||ve!==Dn||Le!==Un)&&(n.stencilOp(nt,Dn,Un),X=nt,ve=Dn,Le=Un)},setLocked:function(nt){I=nt},setClear:function(nt){ht!==nt&&(n.clearStencil(nt),ht=nt)},reset:function(){I=!1,se=null,ne=null,pe=null,Q=null,X=null,ve=null,Le=null,ht=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},p={},h=new WeakMap,u=[],g=null,v=!1,m=null,f=null,S=null,T=null,b=null,R=null,w=null,A=new He(0,0,0),x=0,y=!1,Y=null,C=null,F=null,G=null,W=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ee)[1]),V=O>=1):ee.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),V=O>=2);let Z=null,he={};const ge=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Fe=new yt().fromArray(ge),ut=new yt().fromArray(ue);function dt(I,se,ne,pe){const Q=new Uint8Array(4),X=n.createTexture();n.bindTexture(I,X),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<ne;ve++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(se+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return X}const j={};j[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(ir),Be(!1),bt(Gc),ie(n.CULL_FACE),tt(Xn);function ie(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function ae(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Ue(I,se){return p[I]!==se?(n.bindFramebuffer(I,se),p[I]=se,I===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=se),I===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(I,se){let ne=u,pe=!1;if(I){ne=h.get(se),ne===void 0&&(ne=[],h.set(se,ne));const Q=I.textures;if(ne.length!==Q.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let X=0,ve=Q.length;X<ve;X++)ne[X]=n.COLOR_ATTACHMENT0+X;ne.length=Q.length,pe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ne)}function Pe(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Dt={[bi]:n.FUNC_ADD,[fd]:n.FUNC_SUBTRACT,[pd]:n.FUNC_REVERSE_SUBTRACT};Dt[md]=n.MIN,Dt[gd]=n.MAX;const We={[_d]:n.ZERO,[xd]:n.ONE,[vd]:n.SRC_COLOR,[io]:n.SRC_ALPHA,[Td]:n.SRC_ALPHA_SATURATE,[bd]:n.DST_COLOR,[Sd]:n.DST_ALPHA,[Md]:n.ONE_MINUS_SRC_COLOR,[ro]:n.ONE_MINUS_SRC_ALPHA,[Ed]:n.ONE_MINUS_DST_COLOR,[yd]:n.ONE_MINUS_DST_ALPHA,[wd]:n.CONSTANT_COLOR,[Ad]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Cd]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(I,se,ne,pe,Q,X,ve,Le,ht,nt){if(I===Xn){v===!0&&(ae(n.BLEND),v=!1);return}if(v===!1&&(ie(n.BLEND),v=!0),I!==ud){if(I!==m||nt!==y){if((f!==bi||b!==bi)&&(n.blendEquation(n.FUNC_ADD),f=bi,b=bi),nt)switch(I){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",I);break}else switch(I){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hc:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",I);break}S=null,T=null,R=null,w=null,A.set(0,0,0),x=0,m=I,y=nt}return}Q=Q||se,X=X||ne,ve=ve||pe,(se!==f||Q!==b)&&(n.blendEquationSeparate(Dt[se],Dt[Q]),f=se,b=Q),(ne!==S||pe!==T||X!==R||ve!==w)&&(n.blendFuncSeparate(We[ne],We[pe],We[X],We[ve]),S=ne,T=pe,R=X,w=ve),(Le.equals(A)===!1||ht!==x)&&(n.blendColor(Le.r,Le.g,Le.b,ht),A.copy(Le),x=ht),m=I,y=!1}function ot(I,se){I.side===Hn?ae(n.CULL_FACE):ie(n.CULL_FACE);let ne=I.side===Qt;se&&(ne=!ne),Be(ne),I.blending===er&&I.transparent===!1?tt(Xn):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){Y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),Y=I)}function bt(I){I!==ld?(ie(n.CULL_FACE),I!==C&&(I===Gc?n.cullFace(n.BACK):I===hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),C=I}function P(I){I!==F&&(V&&n.lineWidth(I),F=I)}function Tt(I,se,ne){I?(ie(n.POLYGON_OFFSET_FILL),(G!==se||W!==ne)&&(G=se,W=ne,a.getReversed()&&(se=-se),n.polygonOffset(se,ne))):ae(n.POLYGON_OFFSET_FILL)}function Qe(I){I?ie(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function lt(I){I===void 0&&(I=n.TEXTURE0+k-1),Z!==I&&(n.activeTexture(I),Z=I)}function ye(I,se,ne){ne===void 0&&(Z===null?ne=n.TEXTURE0+k-1:ne=Z);let pe=he[ne];pe===void 0&&(pe={type:void 0,texture:void 0},he[ne]=pe),(pe.type!==I||pe.texture!==se)&&(Z!==ne&&(n.activeTexture(ne),Z=ne),n.bindTexture(I,se||j[I]),pe.type=I,pe.texture=se)}function E(){const I=he[Z];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function $(){try{n.texSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function K(){try{n.texSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function re(){try{n.texStorage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Ae(){try{n.texStorage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Ce(){try{n.texImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function J(){try{n.texImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function te(I){Fe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Fe.copy(I))}function xe(I){ut.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ut.copy(I))}function Me(I,se){let ne=c.get(se);ne===void 0&&(ne=new WeakMap,c.set(se,ne));let pe=ne.get(I);pe===void 0&&(pe=n.getUniformBlockIndex(se,I.name),ne.set(I,pe))}function de(I,se){const pe=c.get(se).get(I);l.get(se)!==pe&&(n.uniformBlockBinding(se,pe,I.__bindingPointIndex),l.set(se,pe))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Z=null,he={},p={},h=new WeakMap,u=[],g=null,v=!1,m=null,f=null,S=null,T=null,b=null,R=null,w=null,A=new He(0,0,0),x=0,y=!1,Y=null,C=null,F=null,G=null,W=null,Fe.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Pe,setBlending:tt,setMaterial:ot,setFlipSided:Be,setCullFace:bt,setLineWidth:P,setPolygonOffset:Tt,setScissorTest:Qe,activeTexture:lt,bindTexture:ye,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:Ce,texImage3D:J,updateUBOMapping:Me,uniformBlockBinding:de,texStorage2D:re,texStorage3D:Ae,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:_e,scissor:te,viewport:xe,reset:ke}}function h0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,d=new WeakMap;let p;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return u?new OffscreenCanvas(E,_):Os("canvas")}function v(E,_,L){let $=1;const K=ye(E);if((K.width>L||K.height>L)&&($=L/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor($*K.width),_e=Math.floor($*K.height);p===void 0&&(p=g(q,_e));const re=_?g(q,_e):p;return re.width=q,re.height=_e,re.getContext("2d").drawImage(E,0,0,q,_e),Ie("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+_e+")."),re}else return"data"in E&&Ie("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,_,L,$,K=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),_===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(q=n.RGB16UI),L===n.UNSIGNED_INT&&(q=n.RGB32UI),L===n.BYTE&&(q=n.RGB8I),L===n.SHORT&&(q=n.RGB16I),L===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),L===n.UNSIGNED_INT&&(q=n.RGBA32UI),L===n.BYTE&&(q=n.RGBA8I),L===n.SHORT&&(q=n.RGBA16I),L===n.INT&&(q=n.RGBA32I)),_===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),_===n.RGBA){const _e=K?Fs:Ye.getTransfer($);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=_e===it?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(E,_){let L;return E?_===null||_===Cn||_===Br?L=n.DEPTH24_STENCIL8:_===En?L=n.DEPTH32F_STENCIL8:_===Or&&(L=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===Br?L=n.DEPTH_COMPONENT24:_===En?L=n.DEPTH_COMPONENT32F:_===Or&&(L=n.DEPTH_COMPONENT16),L}function R(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==zt&&E.minFilter!==$t?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),x(_),_.isVideoTexture&&d.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),Y(_)}function x(E){const _=i.get(E);if(_.__webglInit===void 0)return;const L=E.source,$=h.get(L);if($){const K=$[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(E),Object.keys($).length===0&&h.delete(L)}i.remove(E)}function y(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const L=E.source,$=h.get(L);delete $[_.__cacheKey],a.memory.textures--}function Y(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let K=0;K<_.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[$][K]);else n.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)n.deleteFramebuffer(_.__webglFramebuffer[$]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=E.textures;for(let $=0,K=L.length;$<K;$++){const q=i.get(L[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(L[$])}i.remove(E)}let C=0;function F(){C=0}function G(){const E=C;return E>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),C+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function k(E,_){const L=i.get(E);if(E.isVideoTexture&&Qe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){const $=E.image;if($===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{j(L,E,_);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function V(E,_){const L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){j(L,E,_);return}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function O(E,_){const L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){j(L,E,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function ee(E,_){const L=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&L.__version!==E.version){ie(L,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const Z={[fo]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[po]:n.MIRRORED_REPEAT},he={[zt]:n.NEAREST,[Ld]:n.NEAREST_MIPMAP_NEAREST,[es]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[pa]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},ge={[Nd]:n.NEVER,[zd]:n.ALWAYS,[Fd]:n.LESS,[lc]:n.LEQUAL,[Od]:n.EQUAL,[hc]:n.GEQUAL,[Bd]:n.GREATER,[kd]:n.NOTEQUAL};function ue(E,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===$t||_.magFilter===pa||_.magFilter===es||_.magFilter===Ti||_.minFilter===$t||_.minFilter===pa||_.minFilter===es||_.minFilter===Ti)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Z[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Z[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Z[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,he[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==es&&_.minFilter!==Ti||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(E,_){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const $=_.source;let K=h.get($);K===void 0&&(K={},h.set($,K));const q=W(_);if(q!==E.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[q].usedTimes++;const _e=K[E.__cacheKey];_e!==void 0&&(K[E.__cacheKey].usedTimes--,_e.usedTimes===0&&y(_)),E.__cacheKey=q,E.__webglTexture=K[q].texture}return L}function ut(E,_,L){return Math.floor(Math.floor(E/L)/_)}function dt(E,_,L,$){const q=E.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,L,$,_.data);else{q.sort((J,te)=>J.start-te.start);let _e=0;for(let J=1;J<q.length;J++){const te=q[_e],xe=q[J],Me=te.start+te.count,de=ut(xe.start,_.width,4),ke=ut(te.start,_.width,4);xe.start<=Me+1&&de===ke&&ut(xe.start+xe.count-1,_.width,4)===de?te.count=Math.max(te.count,xe.start+xe.count-te.start):(++_e,q[_e]=xe)}q.length=_e+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let J=0,te=q.length;J<te;J++){const xe=q[J],Me=Math.floor(xe.start/4),de=Math.ceil(xe.count/4),ke=Me%_.width,I=Math.floor(Me/_.width),se=de,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,ke,I,se,ne,L,$,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function j(E,_,L){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);const K=Fe(E,_),q=_.source;t.bindTexture($,E.__webglTexture,n.TEXTURE0+L);const _e=i.get(q);if(q.version!==_e.__version||K===!0){t.activeTexture(n.TEXTURE0+L);const re=Ye.getPrimaries(Ye.workingColorSpace),Ae=_.colorSpace===ai?null:Ye.getPrimaries(_.colorSpace),Ce=_.colorSpace===ai||re===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let J=v(_.image,!1,r.maxTextureSize);J=lt(_,J);const te=s.convert(_.format,_.colorSpace),xe=s.convert(_.type);let Me=T(_.internalFormat,te,xe,_.colorSpace,_.isVideoTexture);ue($,_);let de;const ke=_.mipmaps,I=_.isVideoTexture!==!0,se=_e.__version===void 0||K===!0,ne=q.dataReady,pe=R(_,J);if(_.isDepthTexture)Me=b(_.format===wi,_.type),se&&(I?t.texStorage2D(n.TEXTURE_2D,1,Me,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Me,J.width,J.height,0,te,xe,null));else if(_.isDataTexture)if(ke.length>0){I&&se&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ke[0].width,ke[0].height);for(let Q=0,X=ke.length;Q<X;Q++)de=ke[Q],I?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,xe,de.data):t.texImage2D(n.TEXTURE_2D,Q,Me,de.width,de.height,0,te,xe,de.data);_.generateMipmaps=!1}else I?(se&&t.texStorage2D(n.TEXTURE_2D,pe,Me,J.width,J.height),ne&&dt(_,J,te,xe)):t.texImage2D(n.TEXTURE_2D,0,Me,J.width,J.height,0,te,xe,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,ke[0].width,ke[0].height,J.depth);for(let Q=0,X=ke.length;Q<X;Q++)if(de=ke[Q],_.format!==xn)if(te!==null)if(I){if(ne)if(_.layerUpdates.size>0){const ve=gl(de.width,de.height,_.format,_.type);for(const Le of _.layerUpdates){const ht=de.data.subarray(Le*ve/de.data.BYTES_PER_ELEMENT,(Le+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Le,de.width,de.height,1,te,ht)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,te,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Me,de.width,de.height,J.depth,0,de.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,te,xe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Me,de.width,de.height,J.depth,0,te,xe,de.data)}else{I&&se&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ke[0].width,ke[0].height);for(let Q=0,X=ke.length;Q<X;Q++)de=ke[Q],_.format!==xn?te!==null?I?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Me,de.width,de.height,0,de.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,te,xe,de.data):t.texImage2D(n.TEXTURE_2D,Q,Me,de.width,de.height,0,te,xe,de.data)}else if(_.isDataArrayTexture)if(I){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,J.width,J.height,J.depth),ne)if(_.layerUpdates.size>0){const Q=gl(J.width,J.height,_.format,_.type);for(const X of _.layerUpdates){const ve=J.data.subarray(X*Q/J.data.BYTES_PER_ELEMENT,(X+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,te,xe,ve)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,xe,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,te,xe,J.data);else if(_.isData3DTexture)I?(se&&t.texStorage3D(n.TEXTURE_3D,pe,Me,J.width,J.height,J.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,xe,J.data)):t.texImage3D(n.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,te,xe,J.data);else if(_.isFramebufferTexture){if(se)if(I)t.texStorage2D(n.TEXTURE_2D,pe,Me,J.width,J.height);else{let Q=J.width,X=J.height;for(let ve=0;ve<pe;ve++)t.texImage2D(n.TEXTURE_2D,ve,Me,Q,X,0,te,xe,null),Q>>=1,X>>=1}}else if(ke.length>0){if(I&&se){const Q=ye(ke[0]);t.texStorage2D(n.TEXTURE_2D,pe,Me,Q.width,Q.height)}for(let Q=0,X=ke.length;Q<X;Q++)de=ke[Q],I?ne&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,te,xe,de):t.texImage2D(n.TEXTURE_2D,Q,Me,te,xe,de);_.generateMipmaps=!1}else if(I){if(se){const Q=ye(J);t.texStorage2D(n.TEXTURE_2D,pe,Me,Q.width,Q.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,xe,J)}else t.texImage2D(n.TEXTURE_2D,0,Me,te,xe,J);m(_)&&f($),_e.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ie(E,_,L){if(_.image.length!==6)return;const $=Fe(E,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const q=i.get(K);if(K.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+L);const _e=Ye.getPrimaries(Ye.workingColorSpace),re=_.colorSpace===ai?null:Ye.getPrimaries(_.colorSpace),Ae=_.colorSpace===ai||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,te=[];for(let X=0;X<6;X++)!Ce&&!J?te[X]=v(_.image[X],!0,r.maxCubemapSize):te[X]=J?_.image[X].image:_.image[X],te[X]=lt(_,te[X]);const xe=te[0],Me=s.convert(_.format,_.colorSpace),de=s.convert(_.type),ke=T(_.internalFormat,Me,de,_.colorSpace),I=_.isVideoTexture!==!0,se=q.__version===void 0||$===!0,ne=K.dataReady;let pe=R(_,xe);ue(n.TEXTURE_CUBE_MAP,_);let Q;if(Ce){I&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ke,xe.width,xe.height);for(let X=0;X<6;X++){Q=te[X].mipmaps;for(let ve=0;ve<Q.length;ve++){const Le=Q[ve];_.format!==xn?Me!==null?I?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,ke,Le.width,Le.height,0,Le.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,0,0,Le.width,Le.height,Me,de,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,ke,Le.width,Le.height,0,Me,de,Le.data)}}}else{if(Q=_.mipmaps,I&&se){Q.length>0&&pe++;const X=ye(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ke,X.width,X.height)}for(let X=0;X<6;X++)if(J){I?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,te[X].width,te[X].height,Me,de,te[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ke,te[X].width,te[X].height,0,Me,de,te[X].data);for(let ve=0;ve<Q.length;ve++){const ht=Q[ve].image[X].image;I?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,0,0,ht.width,ht.height,Me,de,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,ke,ht.width,ht.height,0,Me,de,ht.data)}}else{I?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Me,de,te[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ke,Me,de,te[X]);for(let ve=0;ve<Q.length;ve++){const Le=Q[ve];I?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,0,0,Me,de,Le.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,ke,Me,de,Le.image[X])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),q.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ae(E,_,L,$,K,q){const _e=s.convert(L.format,L.colorSpace),re=s.convert(L.type),Ae=T(L.internalFormat,_e,re,L.colorSpace),Ce=i.get(_),J=i.get(L);if(J.__renderTarget=_,!Ce.__hasExternalTextures){const te=Math.max(1,_.width>>q),xe=Math.max(1,_.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,q,Ae,te,xe,_.depth,0,_e,re,null):t.texImage2D(K,q,Ae,te,xe,0,_e,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Tt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,J.__webglTexture,0,P(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,J.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(E,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=b(_.stencilBuffer,K),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Tt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),q,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{const $=_.textures;for(let K=0;K<$.length;K++){const q=$[K],_e=s.convert(q.format,q.colorSpace),re=s.convert(q.type),Ae=T(q.internalFormat,_e,re,q.colorSpace);Tt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Ae,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(E,_,L){const $=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ce=s.convert(_.depthTexture.format),J=s.convert(_.depthTexture.type);let te;_.depthTexture.format===$n?te=n.DEPTH_COMPONENT24:_.depthTexture.format===wi&&(te=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,te,_.width,_.height,0,Ce,J,null)}}else k(_.depthTexture,0);const q=K.__webglTexture,_e=P(_),re=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,Ae=_.depthTexture.format===wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===$n)Tt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,re,q,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,re,q,0);else if(_.depthTexture.format===wi)Tt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,re,q,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,re,q,0);else throw new Error("Unknown depthTexture format")}function Pe(E){const _=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let $=0;$<6;$++)Re(_.__webglFramebuffer[$],E,$);else{const $=E.texture.mipmaps;$&&$.length>0?Re(_.__webglFramebuffer[0],E,0):Re(_.__webglFramebuffer,E,0)}else if(L){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[$],E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else{const $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(E,_,L){const $=i.get(E);_!==void 0&&ae($.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Pe(E)}function We(E){const _=E.texture,L=i.get(E),$=i.get(_);E.addEventListener("dispose",A);const K=E.textures,q=E.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,a.memory.textures++),q){L.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[re]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)L.__webglFramebuffer[re][Ae]=n.createFramebuffer()}else L.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)L.__webglFramebuffer[re]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(_e)for(let re=0,Ae=K.length;re<Ae;re++){const Ce=i.get(K[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Tt(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const Ae=K[re];L.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[re]);const Ce=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),te=T(Ae.internalFormat,Ce,J,Ae.colorSpace,E.isXRRenderTarget===!0),xe=P(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,te,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,L.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(L.__webglFramebuffer[re][Ae],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae);else ae(L.__webglFramebuffer[re],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,Ae=K.length;re<Ae;re++){const Ce=K[re],J=i.get(Ce);let te=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),ue(te,Ce),ae(L.__webglFramebuffer,E,Ce,n.COLOR_ATTACHMENT0+re,te,0),m(Ce)&&f(te)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),ue(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(L.__webglFramebuffer[Ae],E,_,n.COLOR_ATTACHMENT0,re,Ae);else ae(L.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,re,0);m(_)&&f(re),t.unbindTexture()}E.depthBuffer&&Pe(E)}function tt(E){const _=E.textures;for(let L=0,$=_.length;L<$;L++){const K=_[L];if(m(K)){const q=S(E),_e=i.get(K).__webglTexture;t.bindTexture(q,_e),f(q),t.unbindTexture()}}}const ot=[],Be=[];function bt(E){if(E.samples>0){if(Tt(E)===!1){const _=E.textures,L=E.width,$=E.height;let K=n.COLOR_BUFFER_BIT;const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),re=_.length>1;if(re)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ae=E.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);const J=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,L,$,0,0,L,$,K,n.NEAREST),l===!0&&(ot.length=0,Be.length=0,ot.push(n.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push(q),Be.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);const J=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(E){return Math.min(r.maxSamples,E.samples)}function Tt(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Qe(E){const _=a.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function lt(E,_){const L=E.colorSpace,$=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==ar&&L!==ai&&(Ye.getTransfer(L)===it?($!==xn||K!==an)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",L)),_}function ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=ee,this.rebindTextures=Dt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function d0(n,e){function t(i,r=ai){let s;const a=Ye.getTransfer(r);if(i===an)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ch)return n.BYTE;if(i===lh)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===ic)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===fh)return n.RGB;if(i===xn)return n.RGBA;if(i===$n)return n.DEPTH_COMPONENT;if(i===wi)return n.DEPTH_STENCIL;if(i===ph)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===sr)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===ws||i===As||i===Rs||i===Cs)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===_o||i===xo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vo||i===Mo||i===So||i===yo||i===bo||i===Eo||i===To)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vo||i===Mo)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===So)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===yo)return s.COMPRESSED_R11_EAC;if(i===bo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Eo)return s.COMPRESSED_RG11_EAC;if(i===To)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wo||i===Ao||i===Ro||i===Co||i===Po||i===Io||i===Lo||i===Do||i===Uo||i===No||i===Fo||i===Oo||i===Bo||i===ko)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ao)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Co)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Io)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Do)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===No)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ko)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===Go||i===Vo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zo)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ho||i===Wo||i===Xo||i===Yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new In({vertexShader:u0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m0 extends dr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new p0,f={},S=t.getContextAttributes();let T=null,b=null;const R=[],w=[],A=new qe;let x=null;const y=new gn;y.viewport=new yt;const Y=new gn;Y.viewport=new yt;const C=[y,Y],F=new wu;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=R[j];return ie===void 0&&(ie=new ya,R[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=R[j];return ie===void 0&&(ie=new ya,R[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=R[j];return ie===void 0&&(ie=new ya,R[j]=ie),ie.getHandSpace()};function k(j){const ie=w.indexOf(j.inputSource);if(ie===-1)return;const ae=R[ie];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||a),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",O);for(let j=0;j<R.length;j++){const ie=w[j];ie!==null&&(w[j]=null,R[j].disconnect(ie))}G=null,W=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(T),u=null,h=null,p=null,r=null,b=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",V),r.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ue=null,Re=null;S.depth&&(Re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=S.stencil?wi:$n,Ue=S.stencil?Br:Cn);const Pe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new An(h.textureWidth,h.textureHeight,{format:xn,type:an,depthTexture:new zr(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new An(u.framebufferWidth,u.framebufferHeight,{format:xn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(j){for(let ie=0;ie<j.removed.length;ie++){const ae=j.removed[ie],Ue=w.indexOf(ae);Ue>=0&&(w[Ue]=null,R[Ue].disconnect(ae))}for(let ie=0;ie<j.added.length;ie++){const ae=j.added[ie];let Ue=w.indexOf(ae);if(Ue===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=w.length){w.push(ae),Ue=Pe;break}else if(w[Pe]===null){w[Pe]=ae,Ue=Pe;break}if(Ue===-1)break}const Re=R[Ue];Re&&Re.connect(ae)}}const ee=new N,Z=new N;function he(j,ie,ae){ee.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const Ue=ee.distanceTo(Z),Re=ie.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,Dt=Re[14]/(Re[10]-1),We=Re[14]/(Re[10]+1),tt=(Re[9]+1)/Re[5],ot=(Re[9]-1)/Re[5],Be=(Re[8]-1)/Re[0],bt=(Pe[8]+1)/Pe[0],P=Dt*Be,Tt=Dt*bt,Qe=Ue/(-Be+bt),lt=Qe*-Be;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(lt),j.translateZ(Qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ye=Dt+Qe,E=We+Qe,_=P-lt,L=Tt+(Ue-lt),$=tt*We/E*ye,K=ot*We/E*ye;j.projectionMatrix.makePerspective(_,L,$,K,ye,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ge(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,ae=j.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),F.near=Y.near=y.near=ie,F.far=Y.far=y.far=ae,(G!==F.near||W!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,W=F.far),F.layers.mask=j.layers.mask|6,y.layers.mask=F.layers.mask&-5,Y.layers.mask=F.layers.mask&-3;const Ue=j.parent,Re=F.cameras;ge(F,Ue);for(let Pe=0;Pe<Re.length;Pe++)ge(Re[Pe],Ue);Re.length===2?he(F,y,Y):F.projectionMatrix.copy(y.projectionMatrix),ue(j,F,Ue)};function ue(j,ie,ae){ae===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return f[j]};let Fe=null;function ut(j,ie){if(d=ie.getViewerPose(c||a),g=ie,d!==null){const ae=d.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let Ue=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let We=0;We<ae.length;We++){const tt=ae[We];let ot=null;if(u!==null)ot=u.getViewport(tt);else{const bt=p.getViewSubImage(h,tt);ot=bt.viewport,We===0&&(e.setRenderTargetTextures(b,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(b))}let Be=C[We];Be===void 0&&(Be=new gn,Be.layers.enable(We),Be.viewport=new yt,C[We]=Be),Be.matrix.fromArray(tt.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(tt.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(ot.x,ot.y,ot.width,ot.height),We===0&&(F.matrix.copy(Be.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Be)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){p=i.getBinding();const We=p.getDepthInformation(ae[0]);We&&We.isValid&&We.texture&&m.init(We,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),p=i.getBinding();for(let We=0;We<ae.length;We++){const tt=ae[We].camera;if(tt){let ot=f[tt];ot||(ot=new wh,f[tt]=ot);const Be=p.getCameraImage(tt);ot.sourceTexture=Be}}}}for(let ae=0;ae<R.length;ae++){const Ue=w[ae],Re=R[ae];Ue!==null&&Re!==void 0&&Re.update(Ue,ie,c||a)}Fe&&Fe(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const dt=new Dh;dt.setAnimationLoop(ut),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const Si=new Pn,g0=new vt;function _0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ah(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,S,T,b){f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&u(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),T=S.envMap,b=S.envMapRotation;T&&(m.envMap.value=T,Si.copy(b),Si.x*=-1,Si.y*=-1,Si.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(Si)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function x0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const b=T.program;i.uniformBlockBinding(S,b)}function c(S,T){let b=r[S.id];b===void 0&&(g(S),b=d(S),r[S.id]=b,S.addEventListener("dispose",m));const R=T.program;i.updateUBOMapping(S,R);const w=e.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function d(S){const T=p();S.__bindingPointIndex=T;const b=n.createBuffer(),R=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const T=r[S.id],b=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,A=b.length;w<A;w++){const x=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,Y=x.length;y<Y;y++){const C=x[y];if(u(C,w,y,R)===!0){const F=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let k=0;k<G.length;k++){const V=G[k],O=v(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+W,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(S,T,b,R){const w=S.value,A=T+"_"+b;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const x=R[A];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return R[A]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function g(S){const T=S.uniforms;let b=0;const R=16;for(let A=0,x=T.length;A<x;A++){const y=Array.isArray(T[A])?T[A]:[T[A]];for(let Y=0,C=y.length;Y<C;Y++){const F=y[Y],G=Array.isArray(F.value)?F.value:[F.value];for(let W=0,k=G.length;W<k;W++){const V=G[W],O=v(V),ee=b%R,Z=ee%O.boundary,he=ee+Z;b+=Z,he!==0&&R-he<O.storage&&(b+=R-he),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=O.storage}}}const w=b%R;return w>0&&(b+=R-w),S.__size=b,S.__cache={},this}function v(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){const T=S.target;T.removeEventListener("dispose",m);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const v0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function M0(){return Sn===null&&(Sn=new hu(v0,16,16,sr,qn),Sn.name="DFG_LUT",Sn.minFilter=$t,Sn.magFilter=$t,Sn.wrapS=Wn,Sn.wrapT=Wn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class S0{constructor(e={}){const{canvas:t=Vd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:u=an}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=u,m=new Set([cc,oc,ac]),f=new Set([an,Cn,Or,Br,rc,sc]),S=new Uint32Array(4),T=new Int32Array(4);let b=null,R=null;const w=[],A=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let Y=!1;this._outputColorSpace=sn;let C=0,F=0,G=null,W=-1,k=null;const V=new yt,O=new yt;let ee=null;const Z=new He(0);let he=0,ge=t.width,ue=t.height,Fe=1,ut=null,dt=null;const j=new yt(0,0,ge,ue),ie=new yt(0,0,ge,ue);let ae=!1;const Ue=new fc;let Re=!1,Pe=!1;const Dt=new vt,We=new N,tt=new yt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function bt(){return G===null?Fe:1}let P=i;function Tt(M,D){return t.getContext(M,D)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ht,!1),P===null){const D="webgl2";if(P=Tt(D,M),P===null)throw Tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ke("WebGLRenderer: "+M.message),M}let Qe,lt,ye,E,_,L,$,K,q,_e,re,Ae,Ce,J,te,xe,Me,de,ke,I,se,ne,pe;function Q(){Qe=new Sm(P),Qe.init(),se=new d0(P,Qe),lt=new fm(P,Qe,e,se),ye=new l0(P,Qe),lt.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),E=new Em(P),_=new jg,L=new h0(P,Qe,ye,_,lt,se,E),$=new Mm(y),K=new Ru(P),ne=new dm(P,K),q=new ym(P,K,E,ne),_e=new wm(P,q,K,ne,E),de=new Tm(P,lt,L),te=new pm(_),re=new $g(y,$,Qe,lt,ne,te),Ae=new _0(y,_),Ce=new Zg,J=new i0(Qe),Me=new hm(y,$,ye,_e,g,l),xe=new c0(y,_e,lt),pe=new x0(P,E,lt,ye),ke=new um(P,Qe,E),I=new bm(P,Qe,E),E.programs=re.programs,y.capabilities=lt,y.extensions=Qe,y.properties=_,y.renderLists=Ce,y.shadowMap=xe,y.state=ye,y.info=E}Q(),v!==an&&(x=new Rm(v,t.width,t.height,r,s));const X=new m0(y,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(M){M!==void 0&&(Fe=M,this.setSize(ge,ue,!1))},this.getSize=function(M){return M.set(ge,ue)},this.setSize=function(M,D,H=!0){if(X.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=M,ue=D,t.width=Math.floor(M*Fe),t.height=Math.floor(D*Fe),H===!0&&(t.style.width=M+"px",t.style.height=D+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(ge*Fe,ue*Fe).floor()},this.setDrawingBufferSize=function(M,D,H){ge=M,ue=D,Fe=H,t.width=Math.floor(M*H),t.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(v===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(V)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,D,H,z){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,D,H,z),ye.viewport(V.copy(j).multiplyScalar(Fe).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,D,H,z){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,D,H,z),ye.scissor(O.copy(ie).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(M){ye.setScissorTest(ae=M)},this.setOpaqueSort=function(M){ut=M},this.setTransparentSort=function(M){dt=M},this.getClearColor=function(M){return M.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,H=!0){let z=0;if(M){let B=!1;if(G!==null){const ce=G.texture.format;B=m.has(ce)}if(B){const ce=G.texture.type,fe=f.has(ce),le=Me.getClearColor(),Se=Me.getClearAlpha(),Ee=le.r,De=le.g,ze=le.b;fe?(S[0]=Ee,S[1]=De,S[2]=ze,S[3]=Se,P.clearBufferuiv(P.COLOR,0,S)):(T[0]=Ee,T[1]=De,T[2]=ze,T[3]=Se,P.clearBufferiv(P.COLOR,0,T))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT),H&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Me.dispose(),Ce.dispose(),J.dispose(),_.dispose(),$.dispose(),_e.dispose(),ne.dispose(),pe.dispose(),re.dispose(),X.dispose(),X.removeEventListener("sessionstart",Dc),X.removeEventListener("sessionend",Uc),pi.stop()};function ve(M){M.preventDefault(),jc("WebGLRenderer: Context Lost."),Y=!0}function Le(){jc("WebGLRenderer: Context Restored."),Y=!1;const M=E.autoReset,D=xe.enabled,H=xe.autoUpdate,z=xe.needsUpdate,B=xe.type;Q(),E.autoReset=M,xe.enabled=D,xe.autoUpdate=H,xe.needsUpdate=z,xe.type=B}function ht(M){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nt(M){const D=M.target;D.removeEventListener("dispose",nt),Dn(D)}function Dn(M){Un(M),_.remove(M)}function Un(M){const D=_.get(M).programs;D!==void 0&&(D.forEach(function(H){re.releaseProgram(H)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,z,B,ce){D===null&&(D=ot);const fe=B.isMesh&&B.matrixWorld.determinant()<0,le=id(M,D,H,z,B);ye.setMaterial(z,fe);let Se=H.index,Ee=1;if(z.wireframe===!0){if(Se=q.getWireframeAttribute(H),Se===void 0)return;Ee=2}const De=H.drawRange,ze=H.attributes.position;let we=De.start*Ee,rt=(De.start+De.count)*Ee;ce!==null&&(we=Math.max(we,ce.start*Ee),rt=Math.min(rt,(ce.start+ce.count)*Ee)),Se!==null?(we=Math.max(we,0),rt=Math.min(rt,Se.count)):ze!=null&&(we=Math.max(we,0),rt=Math.min(rt,ze.count));const Et=rt-we;if(Et<0||Et===1/0)return;ne.setup(B,z,le,H,Se);let Mt,st=ke;if(Se!==null&&(Mt=K.get(Se),st=I,st.setIndex(Mt)),B.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*bt()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(B.isLine){let Ht=z.linewidth;Ht===void 0&&(Ht=1),ye.setLineWidth(Ht*bt()),B.isLineSegments?st.setMode(P.LINES):B.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else B.isPoints?st.setMode(P.POINTS):B.isSprite&&st.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ht=B._multiDrawStarts,be=B._multiDrawCounts,en=B._multiDrawCount,je=Se?K.get(Se).bytesPerElement:1,dn=_.get(z).currentProgram.getUniforms();for(let vn=0;vn<en;vn++)dn.setValue(P,"_gl_DrawID",vn),st.render(Ht[vn]/je,be[vn])}else if(B.isInstancedMesh)st.renderInstances(we,Et,B.count);else if(H.isInstancedBufferGeometry){const Ht=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,be=Math.min(H.instanceCount,Ht);st.renderInstances(we,Et,be)}else st.render(we,Et)};function Lc(M,D,H){M.transparent===!0&&M.side===Hn&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,Qr(M,D,H),M.side=hi,M.needsUpdate=!0,Qr(M,D,H),M.side=Hn):Qr(M,D,H)}this.compile=function(M,D,H=null){H===null&&(H=M),R=J.get(H),R.init(D),A.push(R),H.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(R.pushLight(B),B.castShadow&&R.pushShadow(B))}),M!==H&&M.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(R.pushLight(B),B.castShadow&&R.pushShadow(B))}),R.setupLights();const z=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let fe=0;fe<ce.length;fe++){const le=ce[fe];Lc(le,H,B),z.add(le)}else Lc(ce,H,B),z.add(ce)}),R=A.pop(),z},this.compileAsync=function(M,D,H=null){const z=this.compile(M,D,H);return new Promise(B=>{function ce(){if(z.forEach(function(fe){_.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){B(M);return}setTimeout(ce,10)}Qe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ha=null;function nd(M){ha&&ha(M)}function Dc(){pi.stop()}function Uc(){pi.start()}const pi=new Dh;pi.setAnimationLoop(nd),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(M){ha=M,X.setAnimationLoop(M),M===null?pi.stop():pi.start()},X.addEventListener("sessionstart",Dc),X.addEventListener("sessionend",Uc),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const H=X.enabled===!0&&X.isPresenting===!0,z=x!==null&&(G===null||H)&&x.begin(y,G);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,D,G),R=J.get(M,A.length),R.init(D),A.push(R),Dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ue.setFromProjectionMatrix(Dt,Tn,D.reversedDepth),Pe=this.localClippingEnabled,Re=te.init(this.clippingPlanes,Pe),b=Ce.get(M,w.length),b.init(),w.push(b),X.enabled===!0&&X.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&da(fe,D,-1/0,y.sortObjects)}da(M,D,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(ut,dt),Be=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Be&&Me.addToRenderList(b,M),this.info.render.frame++,Re===!0&&te.beginShadows();const B=R.state.shadowsArray;if(xe.render(B,M,D),Re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&x.hasRenderPass())===!1){const fe=b.opaque,le=b.transmissive;if(R.setupLights(),D.isArrayCamera){const Se=D.cameras;if(le.length>0)for(let Ee=0,De=Se.length;Ee<De;Ee++){const ze=Se[Ee];Fc(fe,le,M,ze)}Be&&Me.render(M);for(let Ee=0,De=Se.length;Ee<De;Ee++){const ze=Se[Ee];Nc(b,M,ze,ze.viewport)}}else le.length>0&&Fc(fe,le,M,D),Be&&Me.render(M),Nc(b,M,D)}G!==null&&F===0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G)),z&&x.end(y),M.isScene===!0&&M.onAfterRender(y,M,D),ne.resetDefaultState(),W=-1,k=null,A.pop(),A.length>0?(R=A[A.length-1],Re===!0&&te.setGlobalState(y.clippingPlanes,R.state.camera)):R=null,w.pop(),w.length>0?b=w[w.length-1]:b=null};function da(M,D,H,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ue.intersectsSprite(M)){z&&tt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Dt);const fe=_e.update(M),le=M.material;le.visible&&b.push(M,fe,le,H,tt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ue.intersectsObject(M))){const fe=_e.update(M),le=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),tt.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),tt.copy(fe.boundingSphere.center)),tt.applyMatrix4(M.matrixWorld).applyMatrix4(Dt)),Array.isArray(le)){const Se=fe.groups;for(let Ee=0,De=Se.length;Ee<De;Ee++){const ze=Se[Ee],we=le[ze.materialIndex];we&&we.visible&&b.push(M,fe,we,H,tt.z,ze)}}else le.visible&&b.push(M,fe,le,H,tt.z,null)}}const ce=M.children;for(let fe=0,le=ce.length;fe<le;fe++)da(ce[fe],D,H,z)}function Nc(M,D,H,z){const{opaque:B,transmissive:ce,transparent:fe}=M;R.setupLightsView(H),Re===!0&&te.setGlobalState(y.clippingPlanes,H),z&&ye.viewport(V.copy(z)),B.length>0&&Jr(B,D,H),ce.length>0&&Jr(ce,D,H),fe.length>0&&Jr(fe,D,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Fc(M,D,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[z.id]===void 0){const we=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[z.id]=new An(1,1,{generateMipmaps:!0,type:we?qn:an,minFilter:Ti,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ce=R.state.transmissionRenderTarget[z.id],fe=z.viewport||V;ce.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const le=y.getRenderTarget(),Se=y.getActiveCubeFace(),Ee=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(Z),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),Be&&Me.render(H);const De=y.toneMapping;y.toneMapping=wn;const ze=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),R.setupLightsView(z),Re===!0&&te.setGlobalState(y.clippingPlanes,z),Jr(M,H,z),L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let rt=0,Et=D.length;rt<Et;rt++){const Mt=D[rt],{object:st,geometry:Ht,material:be,group:en}=Mt;if(be.side===Hn&&st.layers.test(z.layers)){const je=be.side;be.side=Qt,be.needsUpdate=!0,Oc(st,H,z,Ht,be,en),be.side=je,be.needsUpdate=!0,we=!0}}we===!0&&(L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce))}y.setRenderTarget(le,Se,Ee),y.setClearColor(Z,he),ze!==void 0&&(z.viewport=ze),y.toneMapping=De}function Jr(M,D,H){const z=D.isScene===!0?D.overrideMaterial:null;for(let B=0,ce=M.length;B<ce;B++){const fe=M[B],{object:le,geometry:Se,group:Ee}=fe;let De=fe.material;De.allowOverride===!0&&z!==null&&(De=z),le.layers.test(H.layers)&&Oc(le,D,H,Se,De,Ee)}}function Oc(M,D,H,z,B,ce){M.onBeforeRender(y,D,H,z,B,ce),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(y,D,H,z,M,ce),B.transparent===!0&&B.side===Hn&&B.forceSinglePass===!1?(B.side=Qt,B.needsUpdate=!0,y.renderBufferDirect(H,D,z,B,M,ce),B.side=hi,B.needsUpdate=!0,y.renderBufferDirect(H,D,z,B,M,ce),B.side=Hn):y.renderBufferDirect(H,D,z,B,M,ce),M.onAfterRender(y,D,H,z,B,ce)}function Qr(M,D,H){D.isScene!==!0&&(D=ot);const z=_.get(M),B=R.state.lights,ce=R.state.shadowsArray,fe=B.state.version,le=re.getParameters(M,B.state,ce,D,H),Se=re.getProgramCacheKey(le);let Ee=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const De=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=$.get(M.envMap||z.environment,De),z.envMapRotation=z.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ee===void 0&&(M.addEventListener("dispose",nt),Ee=new Map,z.programs=Ee);let ze=Ee.get(Se);if(ze!==void 0){if(z.currentProgram===ze&&z.lightsStateVersion===fe)return kc(M,le),ze}else le.uniforms=re.getUniforms(M),M.onBeforeCompile(le,y),ze=re.acquireProgram(le,Se),Ee.set(Se,ze),z.uniforms=le.uniforms;const we=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=te.uniform),kc(M,le),z.needsLights=sd(M),z.lightsStateVersion=fe,z.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),z.currentProgram=ze,z.uniformsList=null,ze}function Bc(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Ps.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function kc(M,D){const H=_.get(M);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function id(M,D,H,z,B){D.isScene!==!0&&(D=ot),L.resetTextureUnits();const ce=D.fog,fe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,le=G===null?y.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ar,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ee=$.get(z.envMap||fe,Se),De=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color;let Mt=wn;z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ht=st!==void 0?st.length:0,be=_.get(z),en=R.state.lights;if(Re===!0&&(Pe===!0||M!==k)){const Ut=M===k&&z.id===W;te.setState(z,M,Ut)}let je=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==en.state.version||be.outputColorSpace!==le||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==Ee||z.fog===!0&&be.fog!==ce||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==te.numPlanes||be.numIntersection!==te.numIntersection)||be.vertexAlphas!==De||be.vertexTangents!==ze||be.morphTargets!==we||be.morphNormals!==rt||be.morphColors!==Et||be.toneMapping!==Mt||be.morphTargetsCount!==Ht)&&(je=!0):(je=!0,be.__version=z.version);let dn=be.currentProgram;je===!0&&(dn=Qr(z,D,B));let vn=!1,mi=!1,Ui=!1;const ct=dn.getUniforms(),Ot=be.uniforms;if(ye.useProgram(dn.program)&&(vn=!0,mi=!0,Ui=!0),z.id!==W&&(W=z.id,mi=!0),vn||k!==M){ye.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(P,"projectionMatrix",M.projectionMatrix),ct.setValue(P,"viewMatrix",M.matrixWorldInverse);const Jn=ct.map.cameraPosition;Jn!==void 0&&Jn.setValue(P,We.setFromMatrixPosition(M.matrixWorld)),lt.logarithmicDepthBuffer&&ct.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,mi=!0,Ui=!0)}if(be.needsLights&&(en.state.directionalShadowMap.length>0&&ct.setValue(P,"directionalShadowMap",en.state.directionalShadowMap,L),en.state.spotShadowMap.length>0&&ct.setValue(P,"spotShadowMap",en.state.spotShadowMap,L),en.state.pointShadowMap.length>0&&ct.setValue(P,"pointShadowMap",en.state.pointShadowMap,L)),B.isSkinnedMesh){ct.setOptional(P,B,"bindMatrix"),ct.setOptional(P,B,"bindMatrixInverse");const Ut=B.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ct.setValue(P,"boneTexture",Ut.boneTexture,L))}B.isBatchedMesh&&(ct.setOptional(P,B,"batchingTexture"),ct.setValue(P,"batchingTexture",B._matricesTexture,L),ct.setOptional(P,B,"batchingIdTexture"),ct.setValue(P,"batchingIdTexture",B._indirectTexture,L),ct.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(P,"batchingColorTexture",B._colorsTexture,L));const Zn=H.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&de.update(B,H,dn),(mi||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,ct.setValue(P,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Ot.envMapIntensity.value=D.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=M0()),mi&&(ct.setValue(P,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&rd(Ot,Ui),ce&&z.fog===!0&&Ae.refreshFogUniforms(Ot,ce),Ae.refreshMaterialUniforms(Ot,z,Fe,ue,R.state.transmissionRenderTarget[M.id]),Ps.upload(P,Bc(be),Ot,L)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ps.upload(P,Bc(be),Ot,L),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(P,"center",B.center),ct.setValue(P,"modelViewMatrix",B.modelViewMatrix),ct.setValue(P,"normalMatrix",B.normalMatrix),ct.setValue(P,"modelMatrix",B.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ut=z.uniformsGroups;for(let Jn=0,Ni=Ut.length;Jn<Ni;Jn++){const zc=Ut[Jn];pe.update(zc,dn),pe.bind(zc,dn)}}return dn}function rd(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function sd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(M,D,H){const z=_.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=D,_.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){const H=_.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0};const ad=P.createFramebuffer();this.setRenderTarget=function(M,D=0,H=0){G=M,C=D,F=H;let z=null,B=!1,ce=!1;if(M){const le=_.get(M);if(le.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),V.copy(M.viewport),O.copy(M.scissor),ee=M.scissorTest,ye.viewport(V),ye.scissor(O),ye.setScissorTest(ee),W=-1;return}else if(le.__webglFramebuffer===void 0)L.setupRenderTarget(M);else if(le.__hasExternalTextures)L.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const De=M.depthTexture;if(le.__boundDepthTexture!==De){if(De!==null&&_.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(M)}}const Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ce=!0);const Ee=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?z=Ee[D][H]:z=Ee[D],B=!0):M.samples>0&&L.useMultisampledRTT(M)===!1?z=_.get(M).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[H]:z=Ee,V.copy(M.viewport),O.copy(M.scissor),ee=M.scissorTest}else V.copy(j).multiplyScalar(Fe).floor(),O.copy(ie).multiplyScalar(Fe).floor(),ee=ae;if(H!==0&&(z=ad),ye.bindFramebuffer(P.FRAMEBUFFER,z)&&ye.drawBuffers(M,z),ye.viewport(V),ye.scissor(O),ye.setScissorTest(ee),B){const le=_.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,le.__webglTexture,H)}else if(ce){const le=D;for(let Se=0;Se<M.textures.length;Se++){const Ee=_.get(M.textures[Se]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Se,Ee.__webglTexture,H,le)}}else if(M!==null&&H!==0){const le=_.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,H)}W=-1},this.readRenderTargetPixels=function(M,D,H,z,B,ce,fe,le=0){if(!(M&&M.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){ye.bindFramebuffer(P.FRAMEBUFFER,Se);try{const Ee=M.textures[le],De=Ee.format,ze=Ee.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!lt.textureFormatReadable(De)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(ze)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-z&&H>=0&&H<=M.height-B&&P.readPixels(D,H,z,B,se.convert(De),se.convert(ze),ce)}finally{const Ee=G!==null?_.get(G).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(M,D,H,z,B,ce,fe,le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se)if(D>=0&&D<=M.width-z&&H>=0&&H<=M.height-B){ye.bindFramebuffer(P.FRAMEBUFFER,Se);const Ee=M.textures[le],De=Ee.format,ze=Ee.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!lt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(D,H,z,B,se.convert(De),se.convert(ze),0);const rt=G!==null?_.get(G).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,rt);const Et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Hd(P,Et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(we),P.deleteSync(Et),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,H=0){const z=Math.pow(2,-H),B=Math.floor(M.image.width*z),ce=Math.floor(M.image.height*z),fe=D!==null?D.x:0,le=D!==null?D.y:0;L.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,fe,le,B,ce),ye.unbindTexture()};const od=P.createFramebuffer(),cd=P.createFramebuffer();this.copyTextureToTexture=function(M,D,H=null,z=null,B=0,ce=0){let fe,le,Se,Ee,De,ze,we,rt,Et;const Mt=M.isCompressedTexture?M.mipmaps[ce]:M.image;if(H!==null)fe=H.max.x-H.min.x,le=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,De=H.min.y,ze=H.isBox3?H.min.z:0;else{const Ot=Math.pow(2,-B);fe=Math.floor(Mt.width*Ot),le=Math.floor(Mt.height*Ot),M.isDataArrayTexture?Se=Mt.depth:M.isData3DTexture?Se=Math.floor(Mt.depth*Ot):Se=1,Ee=0,De=0,ze=0}z!==null?(we=z.x,rt=z.y,Et=z.z):(we=0,rt=0,Et=0);const st=se.convert(D.format),Ht=se.convert(D.type);let be;D.isData3DTexture?(L.setTexture3D(D,0),be=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(L.setTexture2DArray(D,0),be=P.TEXTURE_2D_ARRAY):(L.setTexture2D(D,0),be=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const en=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),dn=P.getParameter(P.UNPACK_SKIP_PIXELS),vn=P.getParameter(P.UNPACK_SKIP_ROWS),mi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const Ui=M.isDataArrayTexture||M.isData3DTexture,ct=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){const Ot=_.get(M),Zn=_.get(D),Ut=_.get(Ot.__renderTarget),Jn=_.get(Zn.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Ni=0;Ni<Se;Ni++)Ui&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(M).__webglTexture,B,ze+Ni),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(D).__webglTexture,ce,Et+Ni)),P.blitFramebuffer(Ee,De,fe,le,we,rt,fe,le,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||_.has(M)){const Ot=_.get(M),Zn=_.get(D);ye.bindFramebuffer(P.READ_FRAMEBUFFER,od),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,cd);for(let Ut=0;Ut<Se;Ut++)Ui?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ot.__webglTexture,B,ze+Ut):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ot.__webglTexture,B),ct?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zn.__webglTexture,ce,Et+Ut):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zn.__webglTexture,ce),B!==0?P.blitFramebuffer(Ee,De,fe,le,we,rt,fe,le,P.COLOR_BUFFER_BIT,P.NEAREST):ct?P.copyTexSubImage3D(be,ce,we,rt,Et+Ut,Ee,De,fe,le):P.copyTexSubImage2D(be,ce,we,rt,Ee,De,fe,le);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(be,ce,we,rt,Et,fe,le,Se,st,Ht,Mt.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(be,ce,we,rt,Et,fe,le,Se,st,Mt.data):P.texSubImage3D(be,ce,we,rt,Et,fe,le,Se,st,Ht,Mt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ce,we,rt,fe,le,st,Ht,Mt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ce,we,rt,Mt.width,Mt.height,st,Mt.data):P.texSubImage2D(P.TEXTURE_2D,ce,we,rt,fe,le,st,Ht,Mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,en),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,dn),P.pixelStorei(P.UNPACK_SKIP_ROWS,vn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,mi),ce===0&&D.generateMipmaps&&P.generateMipmap(be),ye.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&L.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?L.setTextureCube(M,0):M.isData3DTexture?L.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?L.setTexture2DArray(M,0):L.setTexture2D(M,0),ye.unbindTexture()},this.resetState=function(){C=0,F=0,G=null,ye.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const _t=Object.freeze({gravity:18,minSpeed:13,extraSpeed:15,minPull:.08,minAngle:5,maxAngle:80,maxFlight:5}),di=Object.freeze({x:-6.8,y:2.85}),kt=Object.freeze({minX:8,maxX:8.62,minY:.6,maxY:5.8}),jn=(n,e,t)=>Math.min(t,Math.max(e,n));function mr(...n){if(!n.every(Number.isFinite))throw new RangeError("Shot math requires finite numbers.")}function ta(n){mr(n.origin.x,n.origin.y,n.velocity.x,n.velocity.y)}function kh(n,e,t,i){const r=Math.min(t,i)*.34;if(![n,e,t,i,r].every(Number.isFinite)||t<=0||i<=0)return null;const s=Math.hypot(n,e)/r;return s<_t.minPull||n>=0?null:{angle:jn(Math.atan2(e,-n)*180/Math.PI,_t.minAngle,_t.maxAngle),power:jn(s,0,1)}}function na(n){mr(n.angle,n.power);const e=jn(n.angle,_t.minAngle,_t.maxAngle)*Math.PI/180,t=_t.minSpeed+_t.extraSpeed*jn(n.power,0,1);return{origin:{...di},velocity:{x:Math.cos(e)*t,y:Math.sin(e)*t}}}function ui(n,e){return ta(n),mr(e),{x:n.origin.x+n.velocity.x*e,y:n.origin.y+n.velocity.y*e-.5*_t.gravity*e*e}}function zl(n,e){return ta(n),mr(e),{x:n.velocity.x,y:n.velocity.y-_t.gravity*e}}function y0(n,e,t,i){if(ta(n),mr(e.minX,e.maxX,e.minY,e.maxY,t,i),e.minX>e.maxX||e.minY>e.maxY)throw new RangeError("Bounds must be ordered.");if(i<t||t<0)return null;const r=[t,i];if(n.velocity.x!==0)for(const s of[e.minX,e.maxX])r.push((s-n.origin.x)/n.velocity.x);for(const s of[e.minY,e.maxY]){const a=n.velocity.y**2+2*_t.gravity*(n.origin.y-s);if(a>=0){const o=Math.sqrt(a);r.push((n.velocity.y-o)/_t.gravity,(n.velocity.y+o)/_t.gravity)}}for(const s of r.filter(a=>a>=t-1e-9&&a<=i+1e-9).sort((a,o)=>a-o)){const a=ui(n,s);if(a.x>=e.minX-1e-8&&a.x<=e.maxX+1e-8&&a.y>=e.minY-1e-8&&a.y<=e.maxY+1e-8)return jn(s,t,i)}return null}function zh(n,e=.24){return ta(n),mr(e),n.origin.y<e?0:(n.velocity.y+Math.sqrt(n.velocity.y**2+2*_t.gravity*(n.origin.y-e)))/_t.gravity}function b0(n,e,t,i,r){return kh(n*r,e,t,i)}function E0(n,e,t){if(t<e||!n.length)return null;const i=(t-e)/1e3,r=n.find(o=>o.time>=i)??n.at(-1),s=n[Math.max(0,n.indexOf(r)-1)],a=r.time===s.time?1:Math.min(1,Math.max(0,(i-s.time)/(r.time-s.time)));return r.poses.map(o=>{const l=s.poses.find(c=>c.actorId===o.actorId)?.feet??o.feet;return{actorId:o.actorId,feet:{x:l.x+(o.feet.x-l.x)*a,y:l.y+(o.feet.y-l.y)*a,z:0}}})}function T0(n,e,t=32){return[...new Set(n.map(i=>`${Math.floor(i%e/t)}:${Math.floor(Math.floor(i/e)/t)}`))]}function w0(n,e){if(!n)return"";if(n.state==="finished")return n.draw?"Both archers draw.":n.winner===e?"You are the last archer standing.":"Your opponent is the last archer standing.";if(n.state==="aborted")return"The service ended this duel safely.";if(n.state!=="active"||n.phase!=="planning"||!n.lastEvent?.teleport)return"";const t=n.lastEvent.teleport;if(t.ok)return"Teleport landed on a clear supported surface.";const i={"not-upward":"the arrow did not land on an upward-facing surface","no-support":"there was no supporting surface","occupied-or-blocked":"the arrival space was occupied or blocked"};return`Teleport failed: ${t.reason?i[t.reason]:"there was no legal arrival"}. The action was consumed.`}const qt=n=>n.version==="volley-1";function Gs(n){return JSON.stringify(qt(n)?[n.id,n.version,n.seat.lifeId,n.epoch,n.roundId]:[n.id,n.version,n.seat.lifeId,n.activeSeat,n.planningStartedAt])}function A0(n,e){return!!n&&Gs(n)===Gs(e)&&e.state==="active"&&e.phase==="planning"&&e.seat.canAct}function R0(n,e){return qt(n)?n.locks.find(t=>t.actorId===e)?.plan??null:null}function Gl(n,e,t){return JSON.stringify([n.id,e.actorId,e.lifeId,e.epoch,e.roundId,e.actionId,t])}function C0(n){if(!n.seats.every(t=>t.ready))return!1;if(!qt(n))return n.seats.length===2;if(n.mode==="royale")return n.seats.length>=2&&n.seats.length<=8;const e=new Map;for(const t of n.seats){if(t.teamId===null)return!1;e.set(t.teamId,(e.get(t.teamId)??0)+1)}return n.seats.length===4&&e.size===2&&[...e.values()].every(t=>t===2)}function P0(n,e){const t=qt(n),i=n.seats.find(h=>h.actorId===e);let r=w0(n,e);if(t&&n.state==="finished"&&(r=n.draw?"Match complete · draw.":n.winningTeam!==null?i&&"teamId"in i&&i.teamId===n.winningTeam?"Your team won.":"The other team won.":n.winner===e?"You are the last archer standing.":"Another archer is the last one standing."),t&&n.state==="aborted"&&(r="The service ended this match safely."),!t)return{preset:"Duel · alternate turns",turn:n.state==="waiting"?"Both archers must ready before the host starts.":n.state==="active"?n.phase==="planning"?n.seat.canAct?"Your turn. Choose an arrow and draw.":"Opponent’s turn. Watch the arena.":"Arrow resolving. Waiting for settlement.":n.state==="finished"?n.draw?"Duel complete · draw.":n.winner===e?"Duel complete · you won.":"Duel complete · opponent won.":"This duel was aborted. Leave to create a new room.",result:r,priority:[],locks:[],pressure:""};const s=n.locks.find(h=>h.actorId===e),a=n.actors.filter(h=>!h.eliminated).length,o=n.seat.canAct?"Choose an arrow and draw to lock.":s?.locked?s.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":n.priority.includes(e)?"Watch the arena.":"You are eliminated. Watch the remaining archers.",l=n.preset==="teams-1"?"Teams 2v2 · shared 20-second planning":n.preset==="royale-fixed-1"?"Royale · fixed arena · 30 rounds / 15 minutes · 20-second planning":"Royale · shrinking safe area · 20-second planning",c=n.state==="waiting"?n.mode==="teams"?"Four archers, two per team, must ready before the host starts.":"Two to eight archers must all ready before the host starts.":n.state==="active"?`Round ${n.round} · ${a} alive · ${n.phase==="planning"?o:"Arrows resolve in published priority order."}`:r,d=n.preset!=="royale-shrink-1"?"":`Safe area (solid) ${n.pressure.minX.toFixed(1)} to ${n.pressure.maxX.toFixed(1)}${n.pressure.warning?` · dashed bounds after round ${n.pressure.warning.afterRound} to ${n.pressure.warning.minX.toFixed(1)}–${n.pressure.warning.maxX.toFixed(1)} · outside feet take 25 damage`:""}`,p=n.locks.map(h=>{const u=h.plan;return{actorId:h.actorId,text:h.locked?u?u.kind==="pass"?"Pass locked":`${u.aim.arrow} locked · ${Math.round(u.aim.angle)}° · ${Math.round(u.aim.power*100)}% · ${u.aim.facing===1?"right":"left"}`:"Locked":"Planning"}});return{preset:l,turn:c,result:r,priority:n.priority,locks:p,pressure:d}}const qa="archery.challenge.identity.v1",Is=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function Vl(n){if(!Is(n)||Object.keys(n).length!==2||typeof n.guestId!="string"||!n.guestId||typeof n.token!="string"||!n.token)throw new Error("Invalid guest identity.");return{guestId:n.guestId,token:n.token}}class gc{base;fetcher;storage;current=null;generation=0;identityError=null;creating=null;constructor(e,t=fetch,i){if(e!=="/api")throw new Error("Only same-origin /api is supported.");this.base=e,this.fetcher=t,this.storage=i;let r;try{r=i?.getItem(qa)??null}catch{return}if(r!==null)try{this.current=Object.freeze({...Vl(JSON.parse(r)),revision:this.generation})}catch{this.identityError=new Error("Saved guest identity is unreadable or unsupported. Existing data is preserved; forget it explicitly before creating another guest.")}}get revision(){return this.generation}get guestId(){return this.current?.guestId??null}credentials(){return this.current}assertContext(e,t,i){if(e!==this.base||t!==this.fetcher||i!==this.storage)throw new Error("Shared guest session context must match /api, fetcher and storage.")}assertRevision(e){if(e!==this.generation)throw new Error("Guest identity changed. Start again with the current guest.")}ensure(){if(this.identityError)return Promise.reject(this.identityError);if(this.current)return Promise.resolve(this.current);if(this.creating)return this.creating;const e=this.generation,t=this.create(e).finally(()=>{this.creating===t&&(this.creating=null)});return this.creating=t,t}async create(e){const t=Vl(await this.request("/guests",{}));this.assertRevision(e),this.current=Object.freeze({...t,revision:++this.generation});try{this.storage?.setItem(qa,JSON.stringify(t))}catch{}return this.current}async request(e,t){if(this.identityError)throw this.identityError;if(!e.startsWith("/")||e.startsWith("//")||e.includes("\\"))throw new Error("Invalid shared service path.");const i=this.generation,r=await this.fetcher.call(globalThis,this.base+e,{signal:AbortSignal.timeout(15e3),method:t===void 0?"GET":"POST",headers:{"Content-Type":"application/json",...this.current?{Authorization:`Bearer ${this.current.token}`}:{}},...t===void 0?{}:{body:JSON.stringify(t)}});this.assertRevision(i);const s=await r.json();if(this.assertRevision(i),!r.ok)throw Object.assign(new Error(Is(s)&&Is(s.error)&&typeof s.error.message=="string"?s.error.message:"Shared service unavailable. Retry or start a new local challenge."),{status:r.status});if(!Is(s))throw new Error("Invalid shared service response.");return s}forget(){this.generation++,this.current=null,this.identityError=null,this.creating=null;try{this.storage?.removeItem(qa)}catch{}}}const _c="combat-protocol-1",ia="combat-1",Ai="combat-protocol-2",Gn=Object.freeze({nock:Object.freeze({x:.92,y:2.77,z:0}),halfWidth:.86,height:3.055,head:Object.freeze({minX:-.325,maxX:.325,minY:2.255,maxY:2.905}),body:Object.freeze({minX:-.86,maxX:.86,minY:0,maxY:2.255})}),Gh=Object.freeze({version:"combat-1",cell:.125,gravity:18,step:1/120,maxSteps:3600,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,bombRadius:3,craterRadius:2,bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,groundFriction:14,airDrag:.15,restitution:0,matchMs:9e5,planningMs:2e4,launchDelayMs:100,maxActors:8});function xc(...n){if(!n.every(Number.isFinite))throw new RangeError("Finite combat coordinates required.")}function Ko(n){if(!n||typeof n!="object")throw new RangeError("Planar position required.");if(xc(n.x,n.y,n.z),n.z!==0)throw new RangeError("Combat uses world z=0.")}function I0(n){if(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))throw new RangeError("Identifier must be a 1..128 character ASCII token.")}function L0(n){if(!n||typeof n!="object")throw new RangeError("Aim required.");if(xc(n.angle,n.power),n.angle<5||n.angle>80||n.power<.08||n.power>1||n.facing!==1&&n.facing!==-1)throw new RangeError("Aim outside combat limits.");if("arrow"in n&&!["normal","bomb","teleport"].includes(n.arrow))throw new RangeError("Unknown arrow.")}function D0(n){if(!Array.isArray(n)||n.length>Gh.maxActors)throw new RangeError("At most eight actors.");const e=new Set;for(const t of n){if(I0(t.id),Ko(t.feet),Ko(t.velocity),xc(t.health),!Number.isInteger(t.health)||t.health<0||t.health>100||Math.abs(t.feet.x)>1024||Math.abs(t.feet.y)>1024||Math.abs(t.velocity.x)>1e3||Math.abs(t.velocity.y)>1e3||e.has(t.id)||t.facing!==1&&t.facing!==-1||typeof t.eliminated!="boolean")throw new RangeError("Invalid actor.");e.add(t.id)}}function U0(n,e=n.facing){return{x:n.feet.x+Gn.nock.x*e,y:n.feet.y+Gn.nock.y,z:0}}function Hl(n,e){D0([n]),L0(e);const t=na(e),i=U0(n,e.facing);return{origin:{x:i.x,y:i.y},velocity:{x:t.velocity.x*e.facing,y:t.velocity.y}}}function $a(){const n=Gh.cell,e=512,t=288,i=-32,r=-8,s=new Array(e*t).fill(0);for(let a=0;a<t;a++)for(let o=0;o<e;o++){const l=i+(o+.5)*n,c=r+(a+.5)*n;(c<0||(l<-25||l>25)&&c>=5&&c<6||Math.abs(l)>10&&Math.abs(l)<13&&c>=11&&c<12)&&(s[a*e+o]=1)}return{version:"arena-1",revision:0,cell:n,minX:i,minY:r,width:e,height:t,bedrockY:-6,cells:s,spawnPads:[-28,-20,-16,-8,8,16,20,28].map(a=>({x:a,y:0,z:0}))}}function N0(n){if(!n||n.version!=="arena-1"||n.cell!==.125||n.width!==512||n.height!==288||n.minX!==-32||n.minY!==-8||n.bedrockY!==-6||!Number.isSafeInteger(n.revision)||n.revision<0||!Array.isArray(n.cells)||n.cells.length!==n.width*n.height||!Array.isArray(n.spawnPads)||n.spawnPads.length!==8)throw new RangeError("Invalid arena snapshot.")}function F0(n){if(N0(n),!n.cells.every(e=>e===0||e===1))throw new RangeError("Invalid occupancy mask.");for(const e of n.spawnPads)Ko(e)}function Vh(n){if(!n||typeof n!="object"||"cells"in n||typeof n.maskHex!="string"||n.maskHex.length!==36864||!/^[0-9a-f]+$/.test(n.maskHex))throw new RangeError("Invalid compact terrain mask.");const{maskHex:e,...t}=n,i=new Array(147456);for(let s=0;s<e.length;s++){const a=Number.parseInt(e[s],16);for(let o=0;o<4;o++)i[s*4+o]=a>>o&1}const r={...t,cells:i};return F0(r),r}const Es="archery.combat.room.v1",Wl={protocolVersion:_c,rulesVersion:ia},ja={protocolVersion:Ai,rulesVersion:ia},bn=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function O0(n){if(!bn(n)||![_c,Ai].includes(n.protocolVersion)||n.rulesVersion!==ia||typeof n.roomId!="string"||!n.roomId||typeof n.code!="string"||!Number.isFinite(n.serverNow)||!Number.isSafeInteger(n.snapshotRevision)||Number(n.snapshotRevision)<0||!bn(n.membership)||typeof n.membership.actorId!="string"||typeof n.membership.lifeId!="string"||typeof n.membership.canStart!="boolean"||!Array.isArray(n.connections)||!bn(n.state)||!Number.isSafeInteger(n.state.revision)||Number(n.state.revision)<0||n.state.id!==n.roomId||!Array.isArray(n.state.actors)||!Array.isArray(n.state.seats)||!bn(n.state.seat)||!["waiting","active","finished","aborted"].includes(String(n.state.state))||!["planning","resolving","settling"].includes(String(n.state.phase))||!(n.currentTurnId===null||typeof n.currentTurnId=="string"))throw new Error("The combat service returned an unsupported room.");if(n.protocolVersion===Ai?n.roomKind!=="volley"||n.state.version!=="volley-1"||n.currentTurnId!==null||!Number.isSafeInteger(n.state.epoch)||typeof n.state.roundId!="string"||!Array.isArray(n.state.locks)||!Array.isArray(n.state.priority):n.state.version!=="duel-1"||"roomKind"in n)throw new Error("The combat service returned an unsupported room kind or version.");const e=n;return Vh(e.state.terrain),e}class B0{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};rejectedLock=null;get lockAgain(){const e=this.room,t=e?.state,i=this.rejectedLock;return!!(i&&e&&t&&e.protocolVersion===Ai&&i.roomId===e.roomId&&i.lifeId===e.membership.lifeId&&i.epoch===e.state.epoch&&i.roundId===e.state.roundId&&t.seat.canAct)}session;socketFactory;socket=null;reconnectTimer=null;pollTimer=null;stopped=!1;socketGeneration=0;roomGeneration=0;clockOffset=0;hasClock=!1;storage;constructor(e,t=fetch,i,r,s={}){if(e!=="/api")throw new Error("Only same-origin /api is supported.");r?.assertContext(e,t,i),this.session=r??new gc(e,t,i),this.storage=i,this.socketFactory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>Date.now()+this.clockOffset;get savedRoom(){try{const e=JSON.parse(this.storage?.getItem(Es)??"null");return bn(e)&&e.guestId===this.session.guestId&&typeof e.roomId=="string"?e.roomId:null}catch{return null}}emit(){this.onChange()}context(e=this.room?.roomId){const t=this.room?.roomId===e?this.room?.membership:void 0;return{generation:this.roomGeneration,roomId:e,...this.room&&this.room.roomId===e?{protocolVersion:this.room.protocolVersion}:{},...t?{membership:{actorId:t.actorId,lifeId:t.lifeId}}:{}}}assertContext(e){if(e.generation!==this.roomGeneration||e.roomId&&this.room&&e.roomId!==this.room.roomId)throw new Error("The combat room context changed while this request was pending.")}validateResponse(e,t,i){this.session.assertRevision(t),this.assertContext(i);const r=O0(e);if(i.protocolVersion&&r.protocolVersion!==i.protocolVersion)throw new Error("The combat response changed the confirmed room kind or protocol version.");if(i.roomId&&r.roomId!==i.roomId)throw new Error("The combat response belongs to a different room.");if(i.membership&&(r.membership.actorId!==i.membership.actorId||r.membership.lifeId!==i.membership.lifeId))throw new Error("The combat response belongs to a different membership identity.");return r}apply(e,t,i){const r=this.validateResponse(e,t,i);if(this.room&&this.room.roomId===r.roomId){if(r.snapshotRevision<this.room.snapshotRevision||r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return;if(r.state.revision<this.room.state.revision)throw new Error("The combat response would reverse the confirmed room state.")}this.room=r;const s=r.serverNow-Date.now();this.clockOffset=this.hasClock?Math.max(this.clockOffset,s):s,this.hasClock=!0;try{this.storage?.setItem(Es,JSON.stringify({roomId:r.roomId,guestId:this.session.guestId}))}catch{}this.emit()}async create(e){return this.begin("/rooms",e?{...ja,...e}:Wl,e?Ai:_c)}async join(e){return this.begin("/rooms/join",{...ja,code:e.trim().toUpperCase()})}async begin(e,t,i){if(this.busy||this.pending||this.room)throw new Error("Leave the current room or finish the pending action first.");this.roomGeneration++;const r={...this.context(),...i?{protocolVersion:i}:{}};this.stopped=!1,this.busy=!0,this.emit();try{const s=await this.session.ensure();this.session.assertRevision(s.revision),this.assertContext(r),this.pending={path:e,body:{actionId:crypto.randomUUID(),...t},revision:s.revision,context:r}}finally{r.generation===this.roomGeneration&&(this.busy=!1)}return this.retry()}async command(e){if(this.busy||this.pending||!this.room)throw new Error("Finish the pending action first.");const t=this.room,i=this.session.credentials();if(!i)throw new Error("Reconnect with the existing guest first.");const r=t.protocolVersion===Ai;if(r&&e.kind==="cancel")throw new Error("Volley locks are immutable and cannot be cancelled.");const s=e.kind==="shot"||e.kind==="pass";if(r&&s&&(!t.state.seat.canAct||t.state.state!=="active"||t.state.phase!=="planning"))throw new Error("This planning opportunity is no longer available.");const a=!r&&["shot","pass","cancel"].includes(e.kind)?{turnId:t.currentTurnId}:{};if("turnId"in a&&!a.turnId)throw new Error("This turn is no longer available.");const o=r?{...ja,epoch:t.state.epoch,...s?{roundId:t.state.roundId}:{}}:{...Wl,...a};this.rejectedLock=null;const l={actionId:crypto.randomUUID(),expectedRevision:t.state.revision,lifeId:t.membership.lifeId,...o,...e};return this.pending={path:`/rooms/${encodeURIComponent(t.roomId)}/commands`,body:l,revision:i.revision,context:this.context()},this.retry()}async retry(){if(!this.pending||this.busy)throw new Error("No pending action is ready to retry.");const e=this.pending;this.session.assertRevision(e.revision),this.assertContext(e.context),this.busy=!0,this.emit();try{const t=await this.session.request(e.path,e.body);if(this.session.assertRevision(e.revision),this.assertContext(e.context),this.pending!==e)throw new Error("The pending combat action changed.");return e.body.kind==="leave"?(this.validateResponse(t,e.revision,e.context),this.pending=null,this.clearRoom()):(this.apply(t,e.revision,e.context),this.pending=null,this.openSocket()),this.room}catch(t){if(e.context.generation!==this.roomGeneration)throw t;if(this.session.revision!==e.revision)this.pending=null,this.clearRoom();else if(bn(t)&&typeof t.status=="number"&&t.status>=400&&t.status<500){if(this.pending=null,t.status===409&&e.body.kind==="shot"&&e.body.protocolVersion===Ai&&e.context.roomId&&(this.rejectedLock={roomId:e.context.roomId,lifeId:String(e.body.lifeId),epoch:e.body.epoch,roundId:e.body.roundId}),this.room)try{await this.refresh()}catch{}}else if(this.room)try{await this.refresh()}catch{}throw t}finally{e.context.generation===this.roomGeneration&&(this.busy=!1,this.emit())}}async reconnect(e=this.room?.roomId??this.savedRoom){if(this.pending)throw new Error("Retry the pending action first.");if(!e)throw new Error("No saved room is available.");if(!this.session.credentials())throw new Error("The original guest identity is required to reconnect.");const t=this.context(e);this.stopped=!1,await this.refresh(e),this.assertContext(t),this.openSocket()}async refresh(e=this.room?.roomId){if(!e)return;const t=this.session.credentials();if(!t)throw new Error("The original guest identity is required.");const i=this.context(e);try{const r=await this.session.request(`/rooms/${encodeURIComponent(e)}`);this.apply(r,t.revision,i)}catch(r){if(this.session.assertRevision(t.revision),this.assertContext(i),bn(r)&&typeof r.status=="number"&&[403,404,410].includes(r.status)){this.pending=null,this.clearRoom(e);const s=Object.assign(new Error("This room is no longer available. Create or join another room with the same guest."),{status:r.status});throw this.onError(s),s}throw r}}receive(e){const t=this.session.credentials();!t||!this.room||this.stopped||!bn(e)||e.type!=="room"||e.roomId===this.room.roomId&&this.apply(e,t.revision,this.context())}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e)return;if(this.connected=!1,!this.socketFactory){this.connected=!0,this.emit();return}const t=++this.socketGeneration,i=this.context(),r=this.room.roomId,s=this.socketFactory(`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/api/combat/events`);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===t&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={type:"authenticate",token:e.token,roomId:r,lastRevision:this.room?.snapshotRevision??0,protocolVersion:this.room.protocolVersion,rulesVersion:ia};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const l=JSON.parse(String(o.data));bn(l)&&l.type==="room"&&(this.apply(l,e.revision,i),this.connected=!0,this.emit())}catch(l){this.onError(l),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),!this.stopped&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.pollTimer||this.stopped)return;const e=this.context();this.pollTimer=setTimeout(async()=>{if(this.pollTimer=null,!(!this.room||this.stopped||e.generation!==this.roomGeneration)){try{await this.refresh()}catch(t){e.generation===this.roomGeneration&&this.onError(t)}e.generation===this.roomGeneration&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.reconnectTimer||this.stopped)return;const e=this.context();this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,!(this.stopped||e.generation!==this.roomGeneration))try{await this.refresh(),this.assertContext(e),this.openSocket()}catch(t){e.generation===this.roomGeneration&&(this.onError(t),this.scheduleRecovery())}},1500)}clearRoom(e=this.room?.roomId??this.savedRoom??void 0){this.close(),this.room=null,this.rejectedLock=null,this.hasClock=!1;try{const t=JSON.parse(this.storage?.getItem(Es)??"null");bn(t)&&t.roomId===e&&(!this.session.guestId||t.guestId===this.session.guestId)&&this.storage?.removeItem(Es)}catch{}this.emit()}forgetRoom(){this.pending=null,this.clearRoom()}close(){this.stopped=!0,this.socketGeneration++,this.roomGeneration++,this.busy=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.pollTimer&&clearTimeout(this.pollTimer),this.reconnectTimer=null,this.pollTimer=null;const e=this.socket;this.socket=null,e?.close(),this.connected=!1}}function Hh(n,e,t){const i=1-Math.exp(-18*Math.max(0,t));return{angle:n.angle+(e.angle-n.angle)*i,pull:n.pull+(e.pull-n.pull)*i}}function Vs(n,e=0){const t=n.angle*Math.PI/180,i=Math.cos(t),r=Math.sin(t),s={x:-7.7+i*(1.3-.37),y:2.3+r*(1.3-.37)},a={x:s.x-i*n.pull,y:s.y-r*n.pull},o={x:a.x-i*.16*e,y:a.y-r*.16*e+.04*e},l=n.pull+(.08-n.pull)*e,c={x:s.x-i*l,y:s.y-r*l},d=-7.95,p=2.3,h=o.x-d,u=o.y-p,g=Math.hypot(h,u),v=(.65**2-.9**2+g**2)/(2*g),m=Math.sqrt(Math.max(0,.65**2-v**2)),f={x:d+h/g*v-u/g*m,y:p+u/g*v+h/g*m};return{bow:s,hand:o,nock:c,elbow:f}}const Xl=.16;function Dr(n,e,t){if(e>=Xl){const T=zl(n,e);return{position:ui(n,e),angle:Math.atan2(T.y,T.x)}}const i=Xl,r=Math.max(0,e)/i,s=ui(n,i),a=zl(n,i),o=Math.hypot(n.velocity.x,n.velocity.y),l={x:Math.cos(t.angle)*o,y:Math.sin(t.angle)*o},c=2*r**3-3*r*r+1,d=r**3-2*r*r+r,p=-2*r**3+3*r*r,h=r**3-r*r,u=(6*r*r-6*r)/i,g=3*r*r-4*r+1,v=(-6*r*r+6*r)/i,m=3*r*r-2*r,f={x:c*t.tip.x+d*i*l.x+p*s.x+h*i*a.x,y:c*t.tip.y+d*i*l.y+p*s.y+h*i*a.y},S={x:u*t.tip.x+g*l.x+v*s.x+m*a.x,y:u*t.tip.y+g*l.y+v*s.y+m*a.y};return{position:f,angle:Math.atan2(S.y,S.x)}}const cn=Object.freeze({count:7,start:.055,duration:.228,radiusPx:3.5,outlinePx:1.75});function Hs(n){if(!Number.isInteger(n.count)||n.count<1||n.count>32||![n.start,n.duration].every(Number.isFinite)||n.start<0||n.duration<0||n.start+n.duration>.35)throw new RangeError("Short opening guide settings required.");return Array.from({length:n.count},(e,t)=>n.start+(n.count===1?0:t/(n.count-1)*n.duration))}const At=n=>document.getElementById(n),Rt=(n,e,t=0)=>new N(n,e,t);class k0{constructor(e){this.canvas=e,this.scene.add(this.terrainGroup,this.pressureGroup),this.scene.add(new Ph("#fff4d8","#62765d",2.6));const t=new Lh("#fff4d8",3);t.position.set(-8,20,12),this.scene.add(t),this.camera.position.set(0,8,55),this.camera.lookAt(0,8,0),this.rebuildTerrain(this.terrain);for(const i of["normal","bomb","teleport"])At(`combat-arrow-${i}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.arrow=i,this.updateControls())});for(const i of[-1,1])At(`combat-face-${i===1?"right":"left"}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim.facing=i,this.updateControls())});for(const i of["angle","power"])At(`combat-${i}`).addEventListener("input",()=>{!this.canAim()||this.draw||(this.aim.angle=Number(At("combat-angle").value),this.aim.power=Number(At("combat-power").value)/100,this.updateControls())});At("combat-fire").addEventListener("click",()=>this.fire()),At("combat-overview").addEventListener("click",()=>{!this.draw&&this.state?.phase==="planning"&&this.frame(!0)}),this.canvas.addEventListener("pointerdown",i=>this.pointerDown(i)),this.canvas.addEventListener("pointermove",i=>this.pointerMove(i)),this.canvas.addEventListener("pointerup",i=>{if(!this.active||this.draw?.id!==i.pointerId)return;this.pointerMove(i);const r=this.draw?.valid;this.endDraw(!r),r&&this.fire()});for(const i of["pointercancel","lostpointercapture"])this.canvas.addEventListener(i,r=>{this.active&&this.draw?.id===r.pointerId&&this.cancelInput()})}canvas;scene=new Mh;camera=new $r(-24,24,18,-10,.1,150);materials=new Map;terrainGroup=new Kt;chunks=new Map;terrain=$a();terrainKey="";pressureGroup=new Kt;pressureKey="";actorLabels=new Map;labels=document.getElementById("combat-actor-labels");lockAgain=!1;rigs=new Map;state=null;ownId=null;active=!1;draw=null;width=1;height=1;theme="light";aim={angle:29,power:.62,facing:1};arrow="normal";busy=!1;online=!1;serverNow=()=>Date.now();guide=document.getElementById("combat-guide");dots=Hs(cn).map(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","circle");return e.setAttribute("r",String(cn.radiusPx)),e.setAttribute("stroke-width",String(cn.outlinePx)),this.guide.append(e),e});onShot=()=>{};onDrawing=()=>{};material(e){let t=this.materials.get(e);return t||(t=new Rh({color:e,roughness:1,flatShading:!0}),this.materials.set(e,t)),t}box(e,t,i,r,s,a,o,l){const c=new Ct(new Li(s,a,o),this.material(l));return c.position.set(t,i,r),e.add(c),c}beam(e,t,i,r,s){const a=this.box(e,0,0,0,r,1,r,s);return this.updateBeam(a,t,i),a}updateBeam(e,t,i){e.position.copy(t).add(i).multiplyScalar(.5),e.scale.y=t.distanceTo(i),e.quaternion.setFromUnitVectors(Rt(0,1),i.clone().sub(t).normalize())}makeArrow(e){const t=new Kt;this.box(t,-.6,0,0,1.2,.045,.045,"#f3dfaa"),this.box(t,-1.08,0,0,.22,.17,.04,"#e9e6c8");const i=new Ct(new qr(.085,.24,4),this.material("#58685d"));return i.rotation.z=-Math.PI/2,i.position.x=-.12,t.add(i),e.add(t),t}makeRig(e){const t=new Kt;this.scene.add(t);const i=this.state&&qt(this.state)?this.state.seats.find(p=>p.actorId===this.ownId)?.teamId:null,r=this.state&&qt(this.state)?this.state.seats.find(p=>p.actorId===e.id)?.teamId:null,s=e.id===this.ownId?"#d19b58":i&&i===r?"#78ad75":"#6e98a0";for(const p of[-.3,.4])this.box(t,p,.47,0,.36,.8,.4,"#38473f");for(const p of[-.36,.46])this.box(t,p,.12,.12,.64,.24,.55,"#4c4938");this.box(t,0,1.53,0,.85,1.5,.6,s),this.box(t,0,1.07,.32,.95,.18,.12,"#6b6845"),this.box(t,0,(Gn.head.minY+Gn.head.maxY)/2,0,.65,Gn.head.maxY-Gn.head.minY,.6,"#eac795"),this.box(t,-.13,2.92,-.04,.95,.27,.76,"#4d6e57"),this.box(t,-.26,2.64,-.02,.23,.45,.65,"#4d6e57"),this.box(t,.32,2.65,.32,.08,.08,.07,"#34483c");const a=new Kt;t.add(a);const o=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let p=1;p<o.length;p++)this.beam(a,Rt(...o[p-1]),Rt(...o[p]),.075,"#78523c");const l=new Vt().setFromPoints([Rt(0,-.92),Rt(-.3,0),Rt(0,.92)]);a.add(new Ji(l,new or({color:"#f1e7bf"})));const c=[this.beam(t,Rt(0,2),Rt(1,2),.23,"#eac795"),this.beam(t,Rt(0,2),Rt(1,2),.22,s),this.beam(t,Rt(0,2),Rt(1,2),.18,"#eac795")],d=this.box(t,0,0,.12,.19,.19,.19,"#eac795");return{root:t,bow:a,string:l,arms:c,hand:d,arrow:this.makeArrow(t),pose:{angle:29,pull:.51},release:0}}disposeRig(e){this.scene.remove(e.root),e.root.traverse(t=>{if(t instanceof Ct&&t.geometry.dispose(),t instanceof Ji){t.geometry.dispose();const i=t.material;Array.isArray(i)||i.dispose()}})}rebuildTerrain(e,t){const r=t??Array.from({length:Math.ceil(e.width/32)*Math.ceil(e.height/32)},(s,a)=>`${a%Math.ceil(e.width/32)}:${Math.floor(a/Math.ceil(e.width/32))}`);for(const s of r){const a=this.chunks.get(s);a&&(this.terrainGroup.remove(a),a.geometry.dispose(),this.chunks.delete(s));const[o,l]=s.split(":").map(Number),c=[],d=(h,u,g,v)=>c.push(...h,...u,...g,...h,...g,...v),p=(h,u)=>h>=0&&u>=0&&h<e.width&&u<e.height&&e.cells[u*e.width+h]===1;for(let h=l*32;h<Math.min((l+1)*32,e.height);h++){const u=e.minY+h*e.cell,g=e.cell;for(let v=o*32;v<Math.min((o+1)*32,e.width);v++)if(p(v,h)){const m=v;for(;v+1<Math.min((o+1)*32,e.width)&&p(v+1,h);)v++;const f=e.minX+m*g,S=e.minX+(v+1)*g;d([f,u,.18],[S,u,.18],[S,u+g,.18],[f,u+g,.18]),d([S,u,-.8],[f,u,-.8],[f,u+g,-.8],[S,u+g,-.8]);for(let T=m;T<=v;T++){const b=e.minX+T*g;p(T,h+1)||d([b,u+g,.18],[b+g,u+g,.18],[b+g,u+g,-.8],[b,u+g,-.8]),p(T,h-1)||d([b,u,-.8],[b+g,u,-.8],[b+g,u,.18],[b,u,.18])}p(m-1,h)||d([f,u,-.8],[f,u,.18],[f,u+g,.18],[f,u+g,-.8]),p(v+1,h)||d([S,u,.18],[S,u,-.8],[S,u+g,-.8],[S,u+g,.18])}}if(c.length){const h=new Vt;h.setAttribute("position",new Gt(c,3)),h.computeVertexNormals();const u=new Ct(h,this.material("#7d9461"));this.chunks.set(s,u),this.terrainGroup.add(u)}}}setSnapshot(e,t,i){const r=this.state;this.state=e,this.ownId=t,this.serverNow=i,this.draw&&(!this.canAim()||!A0(r,e))&&this.cancelInput(),(!r||r.id!==e.id)&&(this.cancelInput(),this.aim.facing=e.actors.find(a=>a.id===t)?.facing??1);const s=R0(e,t);s?.kind==="shot"&&s.aim&&(this.aim={angle:s.aim.angle,power:s.aim.power,facing:s.aim.facing},this.arrow=s.aim.arrow),this.syncTerrain(),this.syncPressure();for(const a of e.actors)this.rigs.has(a.id)||this.rigs.set(a.id,this.makeRig(a));for(const[a,o]of this.rigs)e.actors.some(l=>l.id===a)||(this.disposeRig(o),this.rigs.delete(a));(!r||r.id!==e.id||e.phase==="planning"&&(Gs(r)!==Gs(e)||r.phase!=="planning"||r.actors.length!==e.actors.length))&&this.frame(),this.updateControls()}syncPressure(){const e=this.state,t=e&&qt(e)&&e.preset==="royale-shrink-1"?e.pressure:null,i=JSON.stringify(t);if(i===this.pressureKey)return;this.pressureKey=i;for(const s of[...this.pressureGroup.children])this.pressureGroup.remove(s),s instanceof Ji&&(s.geometry.dispose(),s.material.dispose());if(!t)return;const r=(s,a,o)=>{for(const l of[s,a]){const c=new Vt().setFromPoints([Rt(l,-8,.5),Rt(l,18,.5)]),d=o?new yu({color:"#f3b747",dashSize:.5,gapSize:.35}):new or({color:"#70bb9d"}),p=new Ji(c,d);p.computeLineDistances(),this.pressureGroup.add(p)}};r(t.minX,t.maxX,!1),t.warning&&r(t.warning.minX,t.warning.maxX,!0)}setLockAgain(e){this.lockAgain=e,this.updateControls()}syncTerrain(){if(!this.state)return;const e=this.state,t=e.effect;let i=`${e.id}:${e.terrain.revision}`;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt&&(i+=`:${Gl(e,t)}`),i===this.terrainKey)return;let s=Vh(e.terrain);if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt){s={...s,cells:s.cells.slice()};for(const c of t.delta.removed)s.cells[c]=0}if(i===this.terrainKey)return;const a=[];for(let c=0;c<s.cells.length;c++)s.cells[c]!==this.terrain.cells[c]&&a.push(c);const o=T0(a,s.width),l=new Set(o);for(const c of o){const[d,p]=c.split(":").map(Number);for(const[h,u]of[[-1,0],[1,0],[0,-1],[0,1]])d+h>=0&&p+u>=0&&d+h<16&&p+u<9&&l.add(`${d+h}:${p+u}`)}this.rebuildTerrain(s,[...l]),this.terrain=s,this.terrainKey=i}clearSnapshot(){this.cancelInput(),this.state=null,this.ownId=null,this.lockAgain=!1,this.labels.replaceChildren(),this.actorLabels.clear(),this.syncPressure();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.terrainKey="",this.rebuildTerrain($a()),this.terrain=$a(),this.frame(),this.updateControls()}setTransport(e,t){this.online=e,this.busy=t,this.canAim()||this.cancelInput(),this.updateControls()}activate(){this.active=!0,this.updateControls(),this.frame()}deactivate(){this.cancelInput(),this.active=!1,this.guide.style.visibility="hidden",this.labels.replaceChildren(),this.actorLabels.clear()}setTheme(e){this.theme=e,this.material("#7d9461").color.set(e==="dark"?"#445c48":"#7d9461")}resize(e,t){this.cancelInput(),this.width=e,this.height=t,this.guide.setAttribute("viewBox",`0 0 ${e} ${t}`),this.frame()}frame(e=!1){if(this.draw||this.state&&this.state.phase!=="planning"&&this.state.state==="active")return;const t=this.state?.actors??[],i=Gn.nock.x+(_t.minSpeed+_t.extraSpeed)*(cn.start+cn.duration)+1,r=e||!t.length?-32:Math.min(...t.map(g=>g.feet.x))-i,s=e||!t.length?32:Math.max(...t.map(g=>g.feet.x))+i,a=e?-8:Math.min(0,...t.map(g=>g.feet.y))-2,o=e?18:Math.max(9,...t.map(g=>g.feet.y+Gn.height+4)),l=this.state&&qt(this.state)?Math.min(.25,2*(cn.radiusPx+cn.outlinePx)/this.width):0,c=this.width/this.height,d=Math.max(s-r,(o-a)*c)/(1-l),p=d/c,h=(r+s)/2,u=(a+o)/2;Object.assign(this.camera,{left:-d/2,right:d/2,top:p/2,bottom:-p/2}),this.camera.position.set(h,u,55),this.camera.lookAt(h,u,0),this.camera.updateProjectionMatrix()}canAim(){return this.active&&this.online&&!this.busy&&!!this.state?.seat.canAct&&this.state.deadlineAt!==null&&this.serverNow()<this.state.deadlineAt}get hasRoom(){return this.state!==null}get drawing(){return!!this.draw}cancelInput(){this.endDraw(!0)}endDraw(e){if(!this.draw)return;const t=this.draw;this.draw=null,e&&(this.aim=t.previous),this.canvas.hasPointerCapture(t.id)&&this.canvas.releasePointerCapture(t.id),At("combat-drag-marker").hidden=!0,this.onDrawing(!1),this.updateControls()}pointerDown(e){if(!this.active)return;if(this.draw){e.pointerId!==this.draw.id&&this.cancelInput();return}if(!this.canAim()||!e.isPrimary||e.button!==0)return;e.preventDefault();const t=this.canvas.getBoundingClientRect();this.draw={id:e.pointerId,x:e.clientX,y:e.clientY,width:t.width,height:t.height,previous:{...this.aim},valid:!1},this.canvas.setPointerCapture(e.pointerId),this.canvas.focus({preventScroll:!0});const i=At("combat-drag-marker");i.style.left=`${e.clientX-t.left}px`,i.style.top=`${e.clientY-t.top}px`,i.hidden=!1,this.onDrawing(!0),this.updateControls()}pointerMove(e){if(!this.active||this.draw?.id!==e.pointerId)return;const t=b0(e.clientX-this.draw.x,e.clientY-this.draw.y,this.draw.width,this.draw.height,this.aim.facing);this.draw.valid=!!t,t&&(this.aim={...t,facing:this.aim.facing}),this.updateControls()}keydown(e){if(this.active){if(e.code==="Escape"){this.cancelInput();return}!this.canAim()||this.draw||(e.code==="Space"?(e.preventDefault(),e.repeat||this.fire()):["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.aim.angle=jn(this.aim.angle+(e.code==="ArrowLeft"?-1:e.code==="ArrowRight"?1:0),5,80),this.aim.power=jn(this.aim.power+(e.code==="ArrowUp"?.02:e.code==="ArrowDown"?-.02:0),.08,1),this.updateControls()))}}fire(){!this.canAim()||this.draw||this.arrow==="bomb"&&!this.state?.seat.bombReady||this.onShot(this.arrow,{...this.aim})}updateControls(){At("combat-fire").textContent=this.state&&qt(this.state)?this.lockAgain?"Lock again":"Lock arrow":"Fire arrow";const e=!this.canAim()||!!this.draw;for(const t of["fire","angle","power","face-left","face-right","arrow-normal","arrow-bomb","arrow-teleport"])At(`combat-${t}`).disabled=e||t==="arrow-bomb"&&!this.state?.seat.bombReady;for(const t of["normal","bomb","teleport"])At(`combat-arrow-${t}`).setAttribute("aria-pressed",String(this.arrow===t));for(const t of[-1,1])At(`combat-face-${t===1?"right":"left"}`).setAttribute("aria-pressed",String(this.aim.facing===t));At("combat-angle").value=String(this.aim.angle),At("combat-power").value=String(this.aim.power*100),At("combat-angle-value").textContent=`${Math.round(this.aim.angle)}°`,At("combat-power-value").textContent=`${Math.round(this.aim.power*100)}%`,At("combat-bomb-status").textContent=this.state?.seat.bombReady?"Bomb ready":"Bomb reloads after your next personal opportunity.",At("combat-overview").disabled=!!this.draw||this.state?.phase!=="planning"}render(e,t){if(!this.active)return;const i=this.state,r=this.serverNow();this.syncTerrain();let s;const a=i?.effect&&i.effect.startedAt!==null?E0(i.effect.motion,i.effect.startedAt,r):null;for(const c of i?.actors??[]){const d=this.rigs.get(c.id),p=a?.find(b=>b.actorId===c.id)?.feet??c.feet,h=i?.action?.actorId===c.id?i.action:null,u=c.id===this.ownId&&!h,g=h??(u?this.aim:{angle:29,power:.62,facing:c.facing});d.root.position.set(p.x,p.y,0),d.root.scale.x=g.facing,d.root.visible=!c.eliminated,u&&(s=c),d.pose=Hh(d.pose,{angle:g.angle,pull:.2+g.power*.5},t),d.release+=((h?1:0)-d.release)*(1-Math.exp(-18*t));const v=Vs(d.pose,d.release),m=(b,R=.12)=>Rt(b.x+7.72,b.y-.08,R),f=d.pose.angle*Math.PI/180;d.bow.position.copy(m(v.bow)),d.bow.rotation.z=f;const S=d.string.attributes.position;S.setXYZ(1,(v.nock.x-v.bow.x)*Math.cos(f)+(v.nock.y-v.bow.y)*Math.sin(f),0,0),S.needsUpdate=!0,this.updateBeam(d.arms[0],Rt(.02,2.22,.42),m({x:v.bow.x+Math.cos(f)*.37,y:v.bow.y+Math.sin(f)*.37})),this.updateBeam(d.arms[1],Rt(-.23,2.22,.45),m(v.elbow,.28)),this.updateBeam(d.arms[2],m(v.elbow,.28),m(v.hand)),d.hand.position.copy(m(v.hand));const T=m({x:v.nock.x+Math.cos(f)*1.2,y:v.nock.y+Math.sin(f)*1.2});if(d.arrow.position.copy(T),d.arrow.rotation.z=f,d.arrow.visible=!0,h&&i?.launchAt!==null&&i?.launchAt!==void 0&&r>=i.launchAt){const b=Hl(c,g),R=Math.max(0,(Math.min(r,i.contactAt??1/0)-i.launchAt)/1e3),w={tip:{x:c.feet.x+T.x*g.facing,y:c.feet.y+T.y},angle:g.facing===1?f:Math.PI-f},A=Gl(i,{...h,actionId:h.id},i.launchAt);d.flightId!==A&&(d.flightId=A,d.held=w);const x=Dr(b,R,d.held??w);d.arrow.position.set((x.position.x-p.x)*g.facing,x.position.y-p.y,.12),d.arrow.rotation.z=g.facing===1?x.angle:Math.PI-x.angle,d.arrow.visible=i.phase!=="settling"}}if(this.guide.style.visibility=s&&this.canAim()&&(!this.draw||this.draw.valid)?"visible":"hidden",s){const c=this.rigs.get(s.id),d=Hl(s,this.aim),p=c.pose.angle*Math.PI/180,h=Vs(c.pose),u={tip:{x:s.feet.x+(h.nock.x+7.72+Math.cos(p)*1.2)*this.aim.facing,y:s.feet.y+h.nock.y-.08+Math.sin(p)*1.2},angle:this.aim.facing===1?p:Math.PI-p};Hs(cn).forEach((g,v)=>{const m=Dr(d,g,u).position,f=Rt(m.x,m.y,.1).project(this.camera);this.dots[v].setAttribute("cx",String((f.x+1)*this.width/2)),this.dots[v].setAttribute("cy",String((1-f.y)*this.height/2))})}for(const[c,d]of this.actorLabels)i?.actors.some(p=>p.id===c)||(d.remove(),this.actorLabels.delete(c));const o=this.width<640,l=i&&qt(i)?[...new Set(i.seats.map(c=>c.teamId).filter(c=>c!==null))]:[];(i?.actors??[]).forEach((c,d)=>{let p=this.actorLabels.get(c.id);p||(p=document.createElement("span"),this.actorLabels.set(c.id,p),this.labels.append(p));const h=a?.find(m=>m.actorId===c.id)?.feet??c.feet,u=Rt(h.x,h.y+Gn.height+.4,.2).project(this.camera),g=i.seats.find(m=>m.actorId===c.id),v=g&&"teamId"in g&&typeof g.teamId=="string"?` · ${String.fromCharCode(65+l.indexOf(g.teamId))}`:"";p.className="combat-actor-label",p.dataset.actorId=c.id,p.dataset.own=String(c.id===this.ownId),p.style.left=`${(u.x+1)*this.width/2}px`,p.style.top=`${(1-u.y)*this.height/2-(o&&i.actors.length>4?d%2*16:0)}px`,p.textContent=`${c.id===this.ownId?"You":`#${d+1}`}${v}${o?"":` · ${c.eliminated?"out":c.health}`}`}),this.canvas.dataset.combat=JSON.stringify({revision:i?.revision,state:i?.state,phase:i?.phase,actors:i?.actors,terrainRevision:i?.terrain.revision,ownId:this.ownId,aim:this.aim,drawing:!!this.draw,view:[this.camera.left,this.camera.right,this.camera.top,this.camera.bottom],chunks:this.chunks.size}),e.setClearColor(this.theme==="dark"?"#202f36":"#dce8df"),e.render(this.scene,this.camera)}}const Gr="challenge-v1";function Ws(n){if(n!=="course"&&n!=="endless")throw new RangeError("Unknown challenge format.")}function z0(n){if(!Number.isFinite(n.angle)||!Number.isFinite(n.power)||n.angle<_t.minAngle||n.angle>_t.maxAngle||n.power<0||n.power>1)throw new RangeError("Challenge aim must have an angle from 5 to 80 and power from 0 to 1.")}const Ka=(...n)=>32*Number.EPSILON*Math.max(1,...n.map(Math.abs));function Wh(n,e){if(Ws(n),!Number.isSafeInteger(e)||e<0||n==="course"&&e>=12)throw new RangeError("Challenge shot index is out of range.");const t=Math.floor(e/3),i=n==="course"?[12,18,24,30][t]:Math.min(30,12+2*t),r=n==="course"?2.6:Math.max(.8,2.6-.1*t);return Object.freeze({distance:i,centerY:3.2,radius:r,faceX:di.x+i})}function G0(n,e){if(z0(n),![e.distance,e.centerY,e.radius,e.faceX].every(Number.isFinite)||e.distance<=0||e.radius<=0||Math.abs(e.faceX-(di.x+e.distance))>Ka(e.faceX,e.distance))throw new RangeError("Challenge target must have finite, consistent geometry and positive distance and radius.");const t=na(n),i=(e.faceX-t.origin.x)/t.velocity.x,r=Math.min(zh(t),_t.maxFlight);if(i>=r-Ka(i,r))return Object.freeze({score:0,innerBullseye:!1,impact:null,at:r,hit:!1});const s=Object.freeze({x:e.faceX,y:ui(t,i).y}),a=Math.abs(s.y-e.centerY),o=Ka(a,s.y,e.centerY,e.radius);let l=0;for(let c=1;c<=10;c++)if(a<=e.radius*c/10+o){l=11-c;break}return Object.freeze({score:l,innerBullseye:a<=e.radius/20+o,impact:s,at:i,hit:l>0})}function Xh(n,e=Gr){if(Ws(n),typeof e!="string"||e.trim().length===0)throw new RangeError("A challenge requires a rules version.");return Object.freeze({format:n,rulesVersion:e,status:"active",revision:0,shots:Object.freeze([]),total:0,hits:0,innerBullseyes:0,tens:0,misses:0})}function vc(n){if(n.status!=="active")throw new Error("The challenge has already ended.")}function Mc(n,e){vc(n);const t=Wh(n.format,n.shots.length),i=G0(e,t),r=Object.freeze({aim:Object.freeze({angle:e.angle,power:e.power}),target:t,outcome:i}),s=Object.freeze([...n.shots,r]),a=n.misses+ +!i.hit,o=n.format==="course"?s.length===12:a===3;return Object.freeze({...n,status:o?"completed":"active",revision:n.revision+1,shots:s,total:n.total+i.score,hits:n.hits+Number(i.hit),innerBullseyes:n.innerBullseyes+Number(i.innerBullseye),tens:n.tens+ +(i.score===10),misses:a})}function Sc(n){if(vc(n),n.format!=="endless"||n.shots.length===0)throw new Error("Only a nonempty endless challenge can be banked.");return Object.freeze({...n,status:"completed",revision:n.revision+1})}function V0(n){return vc(n),Object.freeze({...n,status:"abandoned",revision:n.revision+1})}function Za(n,e){if(Ws(n.format),Ws(e.format),n.format!==e.format)throw new RangeError("Challenge results must use the same format.");const t=n.format==="course"?["total","innerBullseyes","tens"]:["total","hits","innerBullseyes","tens"];for(const i of t)if(n[i]!==e[i])return e[i]-n[i];return 0}const Yl="archery.challenge.results.v1",ql="archery.challenge.initials.v1",Zi=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function Zo(n){if(!Zi(n)||!["course","endless"].includes(String(n.format))||n.rulesVersion!==Gr||!Array.isArray(n.shots))throw new Error("Unsupported challenge data.");let e=Xh(n.format);for(const i of n.shots){if(!Zi(i)||!Zi(i.aim)||typeof i.aim.angle!="number"||typeof i.aim.power!="number")throw new Error("Invalid challenge shot.");e=Mc(e,{angle:i.aim.angle,power:i.aim.power})}n.status==="completed"&&e.status==="active"&&(e=Sc(e)),n.status==="abandoned"&&e.status==="active"&&(e=V0(e));function t(i,r){return Array.isArray(i)&&Array.isArray(r)?i.length===r.length&&i.every((s,a)=>t(s,r[a])):Zi(i)&&Zi(r)?Object.keys(i).length===Object.keys(r).length&&Object.keys(i).every(s=>s in r&&t(i[s],r[s])):i===r}if(!t(e,n))throw new Error("Challenge data failed verification.");return e}class H0{message="Results stay on this browser.";storage;constructor(e){this.storage=e}readResults(){let e;try{if(!this.storage)throw new Error;e=this.storage.getItem(Yl)}catch{return this.message="Result not saved: browser storage unavailable. You can still play.",null}if(e===null)return[];try{const t=JSON.parse(e);if(!Array.isArray(t))throw new Error;return t.map(i=>{const r=Zo(i);if(r.status!=="completed")throw new Error;return r})}catch{return this.message="Local results are unreadable or use another rules version. Existing data is preserved; new results cannot be saved.",null}}results(e){return(this.readResults()??[]).filter(t=>t.format===e).sort(Za).slice(0,100)}save(e){if(e.status!=="completed")return!1;const t=this.readResults();if(t===null)return!1;try{const i=[Zo(e),...t.filter(s=>s.format===e.format)].sort(Za).slice(0,100),r=t.filter(s=>s.format!==e.format).sort(Za).slice(0,100);return this.storage.setItem(Yl,JSON.stringify([...i,...r])),this.message="Best 100 results per format stay on this browser.",!0}catch{return this.message="Result not saved: browser storage unavailable.",!1}}initials(){try{return this.storage?.getItem(ql)??""}catch{return""}}saveInitials(e){try{this.storage?.setItem(ql,e)}catch{}}}function $l(n){if(!Array.isArray(n))throw new Error("Invalid leaderboard.");return n.map(e=>{if(!Zi(e)||!["rank","total","hits","innerBullseyes","tens","misses"].every(t=>Number.isSafeInteger(e[t])&&Number(e[t])>=0)||typeof e.guestId!="string"||typeof e.initials!="string"||!/^[a-z]{3}$/.test(e.initials)||typeof e.own!="boolean"||typeof e.publishedAt!="string")throw new Error("Invalid leaderboard entry.");return e})}class W0{attempt=null;pending=null;busy=!1;session;attemptRevision=null;pendingRevision=null;constructor(e,t=fetch,i,r){r?.assertContext(e,t,i),this.session=r??new gc(e,t,i)}checkAttemptRevision(){const e=this.attemptRevision??this.session.revision;return this.session.assertRevision(e),this.attemptRevision=e,e}checkPending(e,t,i){if(this.session.assertRevision(i),this.pending!==e||this.attempt!==t)throw new Error("Challenge changed while the action was pending.")}decodeAttempt(e){if(typeof e.id!="string"||!e.id)throw new Error("Invalid attempt response.");return{id:e.id,state:Zo(e.state)}}async start(e){if(this.busy||this.pending)throw new Error("Finish the pending action first.");this.busy=!0;try{const t=await this.session.ensure();this.session.assertRevision(t.revision);const i=this.decodeAttempt(await this.session.request("/attempts",{format:e,rulesVersion:Gr}));return this.session.assertRevision(t.revision),this.attempt=i,this.attemptRevision=t.revision,i}finally{this.busy=!1}}async shot(e){return this.action("shot",{aim:{...e}})}async bank(){return this.action("bank",{})}async action(e,t){if(!this.attempt||this.pending||this.busy)throw new Error("Finish the pending action first.");return this.pendingRevision=this.checkAttemptRevision(),this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/actions`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,kind:e,...t},kind:"action"},this.retry()}async retry(){if(!this.pending||this.pending.kind!=="action"||!this.attempt||this.busy)throw new Error("No retryable action.");const e=this.pending,t=this.attempt,i=this.pendingRevision??this.checkAttemptRevision();this.checkPending(e,t,i),this.busy=!0;try{const r=this.decodeAttempt(await this.session.request(e.url,e.body));this.checkPending(e,t,i);const s=e.body.kind==="shot"?Mc(t.state,e.body.aim):Sc(t.state);if(r.id!==t.id||JSON.stringify(r.state)!==JSON.stringify(s))throw new Error("Shared response does not match the pending action.");return this.attempt=r,this.pending=null,this.pendingRevision=null,r}finally{this.busy=!1}}async publish(e){if(!this.attempt||this.attempt.state.status!=="completed"||this.busy||this.pending?.kind==="action")throw new Error("Finish the pending shot first.");if(e=e.trim().toLowerCase(),!/^[a-z]{3}$/.test(e))throw new Error("Use exactly three letters A–Z.");const t=this.checkAttemptRevision();this.pending||(this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/publish`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,initials:e},kind:"publish"},this.pendingRevision=t);const i=this.pending,r=this.attempt;this.checkPending(i,r,this.pendingRevision??t),this.busy=!0;try{const s=await this.session.request(i.url,i.body);this.checkPending(i,r,t);const a=$l(s.entries);return this.pending=null,this.pendingRevision=null,a}catch(s){throw s instanceof Error&&"status"in s&&s.status===400&&this.pending===i&&this.attempt===r&&this.session.revision===t&&(this.pending=null,this.pendingRevision=null),s}finally{this.busy=!1}}async boards(e){const t=this.session.revision,i=await this.session.request(`/leaderboards/${e}?rulesVersion=${encodeURIComponent(Gr)}`);return this.session.assertRevision(t),$l(i.entries)}forget(){this.session.forget(),this.attempt=null,this.pending=null,this.attemptRevision=null,this.pendingRevision=null}}function jl(n,e,t=kt){if(!Number.isFinite(e)||e<=0)throw new RangeError("Positive finite aspect required.");if(![t.minX,t.maxX,t.minY,t.maxY].every(Number.isFinite)||t.minX>t.maxX||t.minY>t.maxY)throw new RangeError("Ordered finite target required.");n.updateMatrixWorld(!0);let i=-11.4,r=11.4,s=-11.4/e,a=11.4/e;const o=(h,u,g)=>{const v=new N(h,u,g).applyMatrix4(n.matrixWorldInverse),m=1.1;i=Math.min(i,v.x-m),r=Math.max(r,v.x+m),s=Math.min(s,v.y-m),a=Math.max(a,v.y+m)};for(const h of[-8.5,8.62])for(const u of[0,6])o(h,u,.12);for(const h of[t.minX,t.maxX])for(const u of[t.minY,t.maxY])for(const g of[-.9,.12])o(h,u,g);const l=(i+r)/2,c=(s+a)/2,d=Math.max((a-s)/2,(r-i)/(2*e)),p=d*e;n.left=l-p,n.right=l+p,n.bottom=c-d,n.top=c+d,n.updateProjectionMatrix()}function X0(n,e,t){if(![n.origin.x,n.origin.y,n.velocity.x,n.velocity.y,e.x,e.y,t].every(Number.isFinite)||t<0||t>_t.maxFlight)throw new RangeError("Finite shot and a bounded resolved interval required.");const i=n.origin.x-e.x,r=n.origin.y-e.y,s=n.velocity.x,a=n.velocity.y,o=_t.gravity,l=.5*o*o,c=-1.5*o*a,d=s*s+a*a-o*r,p=s*i+a*r;if(![l,c,d,p].every(Number.isFinite))throw new RangeError("Shot exceeds supported numeric range.");const h=f=>((l*f+c)*f+d)*f+p,u=[0,t],g=4*c*c-12*l*d;if(g>=0)for(const f of[(-2*c-Math.sqrt(g))/(6*l),(-2*c+Math.sqrt(g))/(6*l)])f>0&&f<t&&u.push(f);u.sort((f,S)=>f-S);const v=[...u];for(let f=1;f<u.length;f++){let S=u[f-1],T=u[f],b=h(S),R=h(T);if(!(b===0||R===0||b<0==R<0)){for(let w=0;w<64;w++){const A=(S+T)/2,x=h(A);b<0==x<0?(S=A,b=x):T=A}v.push((S+T)/2)}}const m=Math.min(...v.map(f=>{const S=ui(n,f);return Math.hypot(S.x-e.x,S.y-e.y)}));if(!Number.isFinite(m))throw new RangeError("Shot exceeds supported numeric range.");return m}function Ri(){return{completed:0,hits:0,best:null,mean:null,last:null,lastShotId:0,m2:0,currentStreak:0,bestStreak:0,recent:[]}}function yc(n,e,t,i,r={angle:29,power:.62}){if(!Number.isSafeInteger(e)||e<0||!Number.isFinite(i)||i<0||typeof t!="boolean"||!Number.isFinite(r.angle)||r.angle<5||r.angle>80||!Number.isFinite(r.power)||r.power<.08||r.power>1)throw new RangeError("Valid completion identity, aim and distance required.");if(e<=n.lastShotId)return n;const s=n.completed+1,a=i-(n.mean??0),o=(n.mean??0)+a/s,l=t?n.currentStreak+1:0,c={completed:s,hits:n.hits+Number(t),best:Math.min(n.best??1/0,i),mean:o,last:i,lastShotId:e,m2:Math.max(0,n.m2+a*(i-o)),currentStreak:l,bestStreak:Math.max(n.bestStreak,l),recent:[{hit:t,distance:i,...r},...n.recent].slice(0,10)};if(!Number.isSafeInteger(s)||!Number.isFinite(c.m2)||!Number.isFinite(o))throw new RangeError("Practice exceeds supported numeric range.");return c}const Y0="archery-practice",Ja="progress",Qa="practice";function q0(n){return{version:1,stats:n}}function $0(n){if(n===void 0)return Ri();const e=()=>{throw new Error("Saved practice is incompatible or damaged. Clear it to start again.")};if(!n||typeof n!="object"||n.version!==1)return e();const t=(a,o)=>Object.keys(a).sort().join(",")===o.sort().join(",");if(!t(n,["version","stats"]))return e();const i=n.stats;if(!i||typeof i!="object"||!t(i,Object.keys(Ri())))return e();const r=a=>Number.isSafeInteger(a)&&a>=0,s=a=>typeof a=="number"&&Number.isFinite(a)&&a>=0;if(![i.completed,i.hits,i.lastShotId,i.currentStreak,i.bestStreak].every(r)||i.hits>i.completed||i.lastShotId<i.completed||i.currentStreak>i.bestStreak||i.bestStreak>i.hits||i.hits>0&&i.bestStreak===0||!s(i.m2)||!Array.isArray(i.recent)||i.recent.length!==Math.min(i.completed,10))return e();if(i.completed){if(!s(i.best)||!s(i.mean)||!s(i.last)||i.best>i.mean||i.best>i.last||i.completed===1&&(i.m2!==0||i.mean!==i.last||i.best!==i.last)||i.hits===0&&i.bestStreak!==0||i.hits===i.completed&&(i.currentStreak!==i.completed||i.bestStreak!==i.completed))return e()}else if(i.hits||i.lastShotId||i.currentStreak||i.bestStreak||i.m2||i.best!==null||i.mean!==null||i.last!==null)return e();for(const a of i.recent)if(!a||!t(a,["hit","distance","angle","power"])||typeof a.hit!="boolean"||!s(a.distance)||!Number.isFinite(a.angle)||a.angle<5||a.angle>80||!Number.isFinite(a.power)||a.power<.08||a.power>1||i.best>a.distance)return e();if(i.completed){if(i.last!==i.recent[0].distance)return e();let a=0;for(const u of i.recent){if(!u.hit)break;a++}if(a<i.recent.length?i.currentStreak!==a:i.currentStreak<a)return e();let o=0,l=0;for(const u of[...i.recent].reverse())o=u.hit?o+1:0,l=Math.max(l,o);const c=i.recent.reduce((u,g)=>u+(g.distance-i.mean)**2,0);if(l>i.bestStreak||c>i.m2+1e-9*Math.max(1,i.m2))return e();const d=i.best+i.recent.reduce((u,g)=>u+(g.distance-i.best)/i.completed,0),p=Math.sqrt(i.completed-1)*(i.mean-i.best);if(d>i.mean+1e-10*Math.max(1,i.mean)||Math.sqrt(i.m2/i.completed)>p+1e-10*Math.max(1,p))return e();const h=i.recent.filter(u=>u.hit).length;if(h>i.hits||i.recent.length-h>i.completed-i.hits)return e();if(i.completed>10){const u=i.completed-i.recent.length,g=u-(i.hits-h),v=i.hits-h,m=i.mean-i.best;let f=u*m-i.recent.reduce((x,y)=>x+(y.distance-i.mean),0);const S=1e-9*Math.max(1,u*m,...i.recent.map(x=>Math.abs(x.distance-i.mean)));if(f<-S)return e();f=Math.max(0,f);const T=!i.recent.some(x=>x.distance===i.best);if(T&&u===1&&f>S)return e();const b=u*(f/u-m)**2,R=c+b+(T&&u>1?f/u*(f/(u-1)):0),w=c+b+f/u*f*(u-1);if(!Number.isFinite(R)||i.m2<R-1e-9*Math.max(1,i.m2,R)||i.m2>w+1e-9*Math.max(1,i.m2,w))return e();let A=0;for(const x of[...i.recent].reverse()){if(!x.hit)break;A++}if(A===i.recent.length){const x=i.currentStreak-A,y=v-x;if(x>v||x<0||g===0&&x!==u||y>g*i.bestStreak||i.bestStreak<x+A||i.bestStreak>Math.max(l,x+A,y))return e()}else if(v>(g+1)*i.bestStreak-A||i.bestStreak>Math.max(l,v+A))return e()}if(i.completed<=10){let u=Ri();for(const v of[...i.recent].reverse())u=yc(u,u.lastShotId+1,v.hit,v.distance,v);const g=(v,m)=>Math.abs(v-m)<=1e-10*Math.max(1,Math.abs(v),Math.abs(m));if(!g(u.mean,i.mean)||!g(u.m2,i.m2)||u.best!==i.best||u.bestStreak!==i.bestStreak)return e()}}return structuredClone(i)}class j0{db=null;queue;unavailable=!1;view={stats:Ri(),state:"loading",message:"Loading saved practice…"};notify;constructor(e,t=()=>indexedDB){this.notify=e,this.notify(this.view),this.queue=new Promise(i=>{let r;try{r=t().open(Y0,1)}catch{this.fail(),i();return}r.onupgradeneeded=()=>{r.result.createObjectStore(Ja)},r.onblocked=()=>{this.fail("Saved practice is blocked by another tab."),i()},r.onerror=()=>{this.fail(),i()},r.onsuccess=()=>{if(this.unavailable){r.result.close(),i();return}const s=r.result;this.db=s,s.onversionchange=()=>{this.db===s&&(this.db=null,s.close(),this.fail("Saved practice changed in another tab. Reload to reconnect."))},this.transaction().then(i,()=>{this.db&&this.fail(),i()})}})}fail(e="Saved practice unavailable. This visit still counts."){this.unavailable=!0,this.view={...this.view,state:"unavailable",message:e},this.notify(this.view)}transaction(e,t=!1){return new Promise((i,r)=>{const s=this.db;if(!s){r(new Error("Storage unavailable"));return}let a=Ri(),o;try{o=s.transaction(Ja,e||t?"readwrite":"readonly");const l=o.objectStore(Ja);if(t)l.delete(Qa);else{const c=l.get(Qa);c.onsuccess=()=>{try{a=$0(c.result),e&&(a=yc(a,a.lastShotId+1,e.hit,e.distance,e),l.put(q0(a),Qa))}catch(d){o.abort(),r(d)}}}o.oncomplete=()=>{this.db!==s?this.view={...this.view,stats:a}:(this.unavailable=!1,this.view={stats:a,state:"saved",message:`Saved on this browser only · ${a.completed} ${a.completed===1?"shot":"shots"}`}),this.notify(this.view),i()},o.onabort=o.onerror=()=>r(new Error("Storage transaction failed"))}catch(l){r(l)}})}enqueue(e,t=!1){return this.queue=this.queue.then(async()=>{if(!(!this.db||this.unavailable&&!t)){this.view={...this.view,state:e||t?"saving":"loading",message:t?"Clearing saved practice…":e?"Saving practice…":"Loading saved practice…"},this.notify(this.view);try{await this.transaction(e,t)}catch{this.db&&this.fail()}}}),this.queue}append(e){return this.enqueue(e)}clear(){return this.enqueue(void 0,!0)}refresh(){return this.enqueue()}}const Yh="archery-theme";function K0(n,e){try{const t=n.getItem(Yh);return t==="light"||t==="dark"?t:e}catch{return e}}function Z0(n,e){try{n.setItem(Yh,e)}catch{}}const U=n=>document.getElementById(n),at=U("scene");let Pt="range",ft,Xe=null,Ls="";const qh=U("status"),$h=U("phase"),Ur=U("retry"),ra=U("fire"),Xs=U("pause"),Vr=U("angle"),Hr=U("power"),Nr=U("drag-marker"),J0=U("gesture-hint"),nr=U("theme"),sa=document.getElementById("guide"),Kl=Hs(cn).map(()=>{const n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("r",String(cn.radiusPx)),n.setAttribute("stroke-width",String(cn.outlinePx)),sa.append(n),n}),wr=U("arrow-cue");let Pr=Ri(),jh=Ri(),Kh=0,Ds="visit",si={angle:29,pull:.2+.62*.5},Ir=0,Jo={tip:{...di},angle:29*Math.PI/180},Yt="light";try{Yt=K0(localStorage,matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}let Te="ready",gt={angle:29,power:.62},Ze=null,xt=!1,St=null,rn=0,bc=0,Ys=performance.now(),qs=0,Zl="",Kn;try{Kn=new S0({canvas:at,antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{throw qh.textContent="This clearing needs WebGL. Please try a browser with graphics enabled.",$h.textContent="GRAPHICS UNAVAILABLE",at.hidden=!0,ra.disabled=!0,Xs.disabled=!0,new Error("WebGL unavailable")}Kn.setClearColor("#dce8df");Kn.shadowMap.enabled=!0;Kn.shadowMap.type=Lr;Kn.outputColorSpace=sn;const Je=new Mh;Je.fog=new uc("#dce8df",38,80);const mn=new $r(-11,11,10,-10,.1,100);mn.position.set(0,9,30);mn.lookAt(0,3.7,0);const Qo=new Ph("#fff7d7","#6a8161",2.6);Je.add(Qo);const Di=new Lh("#fff4d6",3);Di.position.set(-8,16,10);Di.castShadow=!0;Di.shadow.mapSize.set(1024,1024);Object.assign(Di.shadow.camera,{left:-16,right:16,top:15,bottom:-12,near:.5,far:60});Di.shadow.bias=-.002;Je.add(Di);const Us=new Map;function jr(n){return Us.has(n)||Us.set(n,new Rh({color:n,roughness:1,metalness:0,flatShading:!0})),Us.get(n)}function $e(n,e,t,i,r,s,a,o){const l=new Ct(new Li(r,s,a),jr(o));return l.position.set(e,t,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function Kr(n,e,t,i,r){const s=$e(n,0,0,0,i,e.distanceTo(t),i,r);return s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new N(0,1,0),t.clone().sub(e).normalize()),s}const mt=(n,e,t=0)=>new N(n,e,t),Ii={x:(kt.minX+kt.maxX)/2,y:(kt.minY+kt.maxY)/2},$s=$e(Je,(kt.minX+kt.maxX)/2,(kt.minY+kt.maxY)/2,-.45,kt.maxX-kt.minX,kt.maxY-kt.minY,.9,"#cc684a");$e(Je,Ii.x,Ii.y,.015,.61,.12,.025,"#f4ddb3");$e(Je,Ii.x,Ii.y,.035,.14,.32,.025,"#4b3c31");$e(Je,8.31,.3,-.45,1.35,.6,1.5,"#66734a");$e(Je,0,-.25,-2,27,.9,14,"#7d9461");$e(Je,0,-.9,-2,27,.4,14,"#8d7653");$e(Je,0,-1.65,-2,26.2,1.1,13.4,"#b1a17b");for(let n=0;n<7;n++){const e=-16+n*5.5,t=new Ct(new qr(6+n%3,9+n%4,4),jr(n%2?"#afc5ae":"#c2d1bb"));t.position.set(e,3,-18-n%2*3),t.rotation.y=Math.PI/4,Je.add(t)}function aa(n,e,t){$e(Je,n,1*t,e,.3*t,2*t,.3*t,"#7c7853"),$e(Je,n,3*t,e,1.8*t,2.2*t,1.7*t,"#718d65"),$e(Je,n-.3*t,4.1*t,e,1.3*t,1.2*t,1.25*t,"#89a176")}aa(-11.3,-3.8,1.2);aa(-3.2,-6.5,.8);aa(5.8,-7,1.05);aa(11.8,-4.5,1.4);for(let n=0;n<34;n++){const e=Math.sin(n*73.3)*12,t=-2-Math.cos(n*29.1)*3;$e(Je,e,.25,t,.16,.2+n%3*.08,.17,n%6===0?"#e5d0a1":"#96ab6f")}for(const[n,e,t]of[[-4,-1,.5],[4,-2,.7],[10,1,.5]])$e(Je,n,.3,e,t,t*.65,t,"#a7ae94");const hn=new Kt;Je.add(hn);$e(hn,-8.02,.55,0,.36,.8,.4,"#38473f");$e(hn,-7.32,.55,0,.36,.8,.4,"#38473f");$e(hn,-8.08,.2,.12,.64,.24,.55,"#4c4938");$e(hn,-7.26,.2,.12,.64,.24,.55,"#4c4938");$e(hn,-7.72,1.61,0,.85,1.5,.6,"#d19b58");$e(hn,-7.72,1.15,.32,.95,.18,.12,"#6b6845");$e(hn,-7.72,2.66,0,.65,.65,.6,"#eac795");$e(hn,-7.85,3,-.04,.95,.27,.76,"#4d6e57");$e(hn,-7.98,2.72,-.02,.23,.45,.65,"#4d6e57");$e(hn,-7.4,2.73,.32,.08,.08,.07,"#34483c");Kr(hn,mt(-8.14,1.6,-.38),mt(-8.36,2.8,-.38),.28,"#786244");const lr=new Kt;lr.position.set(di.x,di.y,.12);Je.add(lr);const eo=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let n=1;n<eo.length;n++)Kr(lr,mt(...eo[n-1]),mt(...eo[n]),.075,"#78523c");const Zh=new Vt().setFromPoints([mt(0,-.92),mt(-.3,0),mt(0,.92)]),Q0=new Ji(Zh,new or({color:"#f1e7bf"}));lr.add(Q0);const e_=Kr(Je,mt(-7.7,2.3,.42),mt(di.x,di.y,.42),.23,"#eac795"),t_=Kr(Je,mt(-7.95,2.3,.45),mt(-7.8,2.7,.3),.22,"#d19b58"),n_=Kr(Je,mt(-7.8,2.7,.3),mt(-7.3,2.7,.12),.18,"#eac795"),i_=$e(Je,-7.3,2.7,.12,.19,.19,.19,"#eac795");function to(n,e,t){const i=n.geometry.parameters.height;n.scale.y=e.distanceTo(t)/i,n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(mt(0,1,0),t.clone().sub(e).normalize())}function r_(){const n=new Kt;$e(n,-.6,0,0,1.2,.045,.045,"#f3dfaa");const e=new Ct(new qr(.085,.24,4),jr("#58685d"));return e.rotation.z=-Math.PI/2,e.position.x=-.12,n.add(e),$e(n,-1.08,0,0,.22,.17,.04,"#e9e6c8"),Je.add(n),n}const zn=r_(),ec=new Vt,oa=new Ji(ec,new or({color:"#f6edcf",transparent:!0,opacity:.55}));Je.add(oa);const hr=Array.from({length:9},(n,e)=>{const t=$e(Je,0,0,0,.08+e%2*.05,.08,.08,"#ffedb7");return t.visible=!1,t});let me=null,Bt=null,fi=!1,et=!1,Ec=!1,Zr;try{Zr=localStorage}catch{}const Ci=new H0(Zr),Jl=document.querySelector('meta[name="archery-api"]')?.content,js=Jl==="/api"?new gc(Jl,fetch,Zr):null,Ge=js?new W0("/api",fetch,Zr,js):null,Tc=new Kt;for(const n of[$s,...Je.children.filter(e=>e instanceof Ct&&e!==$s&&(e.position.x===Ii.x&&e.position.y===Ii.y||e.position.x===8.31&&e.position.y===.3))])Tc.add(n);Je.add(Tc);const Vn=new Kt;Je.add(Vn);Vn.visible=!1;const gr=new Kt;Je.add(gr);gr.visible=!1;$e(gr,13,-.25,-2,25,.9,14,"#7d9461");$e(gr,13,-.9,-2,25,.4,14,"#8d7653");$e(gr,13,-1.65,-2,25,1.1,13.4,"#b1a17b");const Ts=["#f5f1df","#f5f1df","#222d2a","#222d2a","#59a6c5","#59a6c5","#d96350","#d96350","#efc655","#efc655"];function wc(){const n=me.shots.length;return Wh(me.format,Math.max(0,Bt||me.status!=="active"?n-1:n))}function Ac(){if(Pt==="range")if(me){const n=wc();jl(mn,ci/li,{minX:n.faceX-.1,maxX:n.faceX+.1,minY:n.centerY-n.radius,maxY:n.centerY+n.radius})}else jl(mn,ci/li)}function Rc(){Tc.visible=!me,Vn.visible=!!me,gr.visible=!!me,U("face-inset").hidden=!me;for(const n of[...Vn.children])Vn.remove(n),n instanceof Ct&&n.geometry.dispose();if(U("face-rings").replaceChildren(),U("face-impact").setAttribute("hidden",""),me){const n=wc();for(let e=0;e<10;e++){const t=n.radius*(10-e)/10,i=new Ct(new pc(t,48),jr(Ts[e]));i.rotation.y=-Math.PI/2,i.position.set(n.faceX-e*.001,n.centerY,0),Vn.add(i),$e(Vn,n.faceX-.035,n.centerY+t-n.radius/20,0,.09,n.radius/10,.07,Ts[e]),$e(Vn,n.faceX-.035,n.centerY-t+n.radius/20,0,.09,n.radius/10,.07,Ts[e]);const r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("r",String((10-e)/10)),r.setAttribute("fill",Ts[e]),r.setAttribute("stroke",e<4?"#a8ada0":"#384d46"),r.setAttribute("stroke-width",".01"),U("face-rings").append(r)}$e(Vn,n.faceX,.5,-.12,.18,1,.18,"#786244")}Ac()}function s_(){const n=xt||et||!!Ge?.pending||Te==="flying"||Te==="aiming";for(const e of["practice","course","endless"]){const t=U(`mode-${e}`);t.disabled=n,t.setAttribute("aria-pressed",String(e===(me?.format??"practice")))}U("challenge-panel").hidden=!me,U("practice-stats").hidden=!!me;for(const e of["challenge-restart","challenge-leave","challenge-bank","clear-identity"])U(e).disabled=n||xt;if(U("online-mode").disabled=n||!!me,me){const e=wc(),t=me.status!=="active";U("challenge-name").textContent=`${me.format==="course"?"12-arrow course":"Endless"} · ${fi?"shared scoring":"local"}`,U("challenge-total").textContent=`${me.total}${me.format==="course"?" / 120":""} points`,U("challenge-progress").textContent=`${t?"Completed":`Arrow ${me.shots.length+1}${me.format==="course"?" of 12":""}`} · ${e.distance} units · ${me.misses} ${me.format==="endless"?"/ 3 ":""}misses · ${me.innerBullseyes} inner bullseyes`,U("challenge-rules").textContent=me.format==="course"?"3 arrows each at 12, 18, 24 and 30 units. Ten rings, 10 points at center.":"Three misses ends the run. Every 3 arrows: +2 units (max 30), radius −0.1 (min 0.8). End & bank between shots.",U("challenge-bank").hidden=me.format!=="endless"||t||!me.shots.length,Ur.hidden=t||!["hit","miss"].includes(Te),Ur.textContent="Next arrow ↗",ra.disabled||=t||Te==="hit"||Te==="miss"||et||!!Ge?.pending,Vr.disabled||=t||Te==="hit"||Te==="miss"||et||!!Ge?.pending,Hr.disabled||=t||Te==="hit"||Te==="miss"||et||!!Ge?.pending,U("gesture-hint").hidden||=t||et||!!Ge?.pending,U("publish-form").hidden=!(t&&fi&&!Ec),U("initials").disabled=et||Ge?.pending?.kind==="publish",U("publish").disabled=et||!!Ge?.pending&&Ge.pending.kind==="action"}else Ur.innerHTML="Try again <span>↗</span>",U("publish-form").hidden=!0;at.dataset.format=me?.format??"practice"}let Ns=0;async function Qi(n=""){const e=++Ns,t=U("board-format").value;U("board-rules").textContent=`Rules ${Gr} · ties share a rank · score, ${t==="endless"?"hits, ":""}inner bullseyes, tens`;const i=Ci.results(t);if(U("local-empty").hidden=i.length>0,U("local-board").replaceChildren(...i.slice(0,10).map(r=>{const s=document.createElement("li");return s.textContent=`${r.total} points · ${r.hits} hits · ${r.shots.length} arrows`,s})),U("challenge-storage").textContent=Ci.message,!!Ge){U("shared-board").replaceChildren(),U("shared-status").textContent=n||"Loading shared board…";try{const r=await Ge.boards(t);if(e!==Ns)return;a_(r),U("shared-status").textContent=n||"Shared boards available. Choose shared scoring before starting a challenge."}catch(r){if(e!==Ns)return;U("shared-status").textContent=`${n?n+" ":""}Shared boards unavailable. ${r instanceof Error?r.message:"Try later."} Local challenges are playable.`,U("shared-board").replaceChildren()}}}function a_(n){U("shared-board").replaceChildren(...n.map(e=>{const t=document.createElement("li");return t.value=e.rank,t.dataset.own=String(e.own),t.textContent=`${e.initials}${e.own?" · you":""} — ${e.total} points · ${e.hits} hits`,t}))}function Fr(n){U("network-recovery").hidden=!1,U("network-message").textContent=`${n instanceof Error?n.message:"Connection interrupted."} No result has been promoted to the shared board.`,U("network-retry").hidden=!Ge?.pending,ln("Shared action needs attention below the clearing.","CHALLENGE WAITING"),pt()}function tc(){if(me?.status!=="completed")return!1;const n=fi||Ci.save(me);return Qi(),n}async function Ar(n,e=!1){if(!(Pt==="combat"&&(ed("range"),(me?.format??"practice")===n))&&!(et||Te==="flying"||Ze||xt)&&!(me?.status==="active"&&!confirm("Abandon this challenge? Its unfinished score will not be banked."))&&!(Ge?.pending&&!e)){e&&(Ge.pending=null),et=!0,pt();try{const t=n!=="practice"&&!e&&!!Ge&&U("online-mode").checked;let i=null;n!=="practice"&&(i=t?(await Ge.start(n)).state:Xh(n)),me=i,fi=t,Bt=null,Ec=!1,U("network-recovery").hidden=!0,U("publish-form").hidden=!0,U("board-format").value=n==="practice"?"course":n,Te="ready",St=null,rn=0,oa.visible=!1,U("shot-result").hidden=!0;for(const r of hr)r.visible=!1;Rc(),ln("Pull back. Breathe. Release.",me?"CHALLENGE READY":"YOUR NEXT SHOT"),Qi()}catch(t){Fr(t)}finally{et=!1,pt()}}}async function o_(n){et=!0,pt();try{me=fi?(await Ge.shot(n)).state:Mc(me,n),Bt=me.shots.at(-1).outcome,Ic(n)}catch(e){Te="ready",Fr(e)}finally{et=!1,pt()}}function c_(){if(!me||!Bt||!St)return;Te=Bt.hit?"hit":"miss",rn=Bt.at,bc=qs,U("shot-result-caption").textContent="Actual impact · ten-ring scoring",U("shot-result-value").textContent=Bt.hit?`${Bt.score} points${Bt.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",U("shot-result").hidden=!1;const n=Bt.impact;if(n){const t=me.shots.at(-1).target,i=U("face-impact");i.setAttribute("cx","0"),i.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-t.centerY)/t.radius)))),i.removeAttribute("hidden")}const e=tc();ln(me.status==="completed"?`${me.total} points. ${fi?"Publish with your initials below.":e?"Saved to this browser’s local board.":Ci.message}`:Bt.hit?"On the face. Take your next arrow when ready.":"Outside the face. Take your next arrow when ready.",me.status==="completed"?"CHALLENGE COMPLETE":Bt.hit?"SCORED":"MISS"),pt()}function l_(){for(const n of["practice","course","endless"])U(`mode-${n}`).addEventListener("click",()=>{Ar(n)});if(U("challenge-restart").addEventListener("click",()=>{Ar(me.format)}),U("challenge-leave").addEventListener("click",()=>{Ar("practice")}),U("challenge-bank").addEventListener("click",async()=>{if(!(!me||et||xt||Ze||Te==="flying"||Ge?.pending)){et=!0,pt();try{me=fi?(await Ge.bank()).state:Sc(me);const n=tc();ln(`${me.total} points banked.${n?"":" "+Ci.message}`,"CHALLENGE COMPLETE")}catch(n){Fr(n)}finally{et=!1,pt()}}}),U("board-format").addEventListener("change",()=>{Qi()}),U("network-local").addEventListener("click",()=>{Ar(me?.format??"course",!0)}),U("network-retry").addEventListener("click",async()=>{if(!(et||!Ge?.pending)){if(Ge.pending.kind==="publish"){U("publish-form").requestSubmit();return}et=!0,pt();try{const n=Ge.pending.body.kind;if(me=(await Ge.retry()).state,U("network-recovery").hidden=!0,n==="shot"){const e=me.shots.at(-1);Bt=e.outcome,Ic(e.aim)}else tc(),ln(`${me.total} points banked.`,"CHALLENGE COMPLETE")}catch(n){Fr(n)}finally{et=!1,pt()}}}),U("publish-form").addEventListener("submit",async n=>{if(n.preventDefault(),et||!Ge)return;const e=U("initials").value.trim().toLowerCase();et=!0,++Ns,pt();try{await Ge.publish(e),Ci.saveInitials(e),Ec=!0,U("network-recovery").hidden=!0,U("publish-form").hidden=!0;const t="Published. The shared board keeps your strongest result for this format and rules version.";U("shared-status").textContent=t,await Qi(t)}catch(t){Fr(t)}finally{et=!1,pt()}}),U("clear-identity").addEventListener("click",()=>{et||Te==="flying"||Ze||Ge?.pending||confirm("Forget this browser’s shared guest identity? Any unfinished challenge is abandoned. Published scores remain, and this browser will no longer own them. Local results and saved practice stay.")&&(Ge?.forget(),Xe?.forgetRoom(),ft.clearSnapshot(),me=null,Bt=null,fi=!1,U("online-mode").checked=!1,Ar("practice",!0))}),U("initials").value=Ci.initials(),U("online-choice").hidden=!Ge,U("clear-identity").hidden=!Ge,Qi(),Ge){const n=new WebSocket(`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/api/events`);n.addEventListener("message",e=>{try{const t=JSON.parse(String(e.data));typeof t=="object"&&t!==null&&"type"in t&&t.type==="board-changed"&&Qi()}catch{}}),window.addEventListener("pagehide",()=>n.close(),{once:!0})}}const h_={"#cc684a":"#cf785c","#7d9461":"#445c48","#8d7653":"#645b47","#b1a17b":"#7d765f","#afc5ae":"#3b5150","#c2d1bb":"#465e5b","#718d65":"#405d4d","#89a176":"#58735a","#96ab6f":"#64794d","#a7ae94":"#737f6e","#66734a":"#556343"};function Cc(){ft?.setTheme(Yt),document.documentElement.dataset.theme=Yt,nr.setAttribute("aria-pressed",String(Yt==="dark")),nr.setAttribute("aria-label",Yt==="dark"?"Switch to light theme":"Switch to dark theme"),nr.textContent=Yt==="dark"?"☀ Light":"☾ Dark";const n=Yt==="dark"?"#202f36":"#dce8df";Kn.setClearColor(n),Je.fog.color.set(n),Qo.color.set(Yt==="dark"?"#c6d7e8":"#fff7d7"),Qo.groundColor.set(Yt==="dark"?"#435b4b":"#6a8161"),Di.color.set(Yt==="dark"?"#d7def1":"#fff4d6");for(const[e,t]of Us)t.color.set(Yt==="dark"?h_[e]??e:e);document.querySelector('meta[name="theme-color"]')?.setAttribute("content",Yt==="dark"?"#18231f":"#eef2de")}function ca(){const n=Ds==="visit"?Pr:jh;U("shots-value").textContent=String(n.completed),U("hit-count-value").textContent=String(n.hits),U("hits-value").textContent=n.completed?`${Math.round(n.hits/n.completed*100)}%`:"0%",U("best-value").textContent=n.best===null?"—":`${n.best.toFixed(2)} units`,U("mean-value").textContent=n.mean===null?"—":`${n.mean.toFixed(2)} units`,U("streak-value").textContent=String(n.currentStreak),U("best-streak-value").textContent=String(n.bestStreak),U("spread-value").textContent=n.completed?`${Math.sqrt(n.m2/n.completed).toFixed(2)} units`:"—",U("recent-shots").replaceChildren(...n.recent.map(e=>{const t=document.createElement("li");return t.textContent=`${e.hit?"Hit":"Miss"} · ${e.distance.toFixed(2)} units · ${e.angle.toFixed(1)}° · ${(e.power*100).toFixed(1)}% power`,t})),U("recent-empty").hidden=n.completed>0,U("visit-stats").setAttribute("aria-pressed",String(Ds==="visit")),U("saved-stats").setAttribute("aria-pressed",String(Ds==="saved"))}const la=new j0(n=>{jh=n.stats,U("save-status").textContent=n.message,U("save-status").dataset.state=n.state,ca()});for(const[n,e]of[["visit-stats","visit"],["saved-stats","saved"]])U(n).addEventListener("click",()=>{Ze||(Ds=e,ca(),e==="saved"&&la.refresh())});document.querySelector(".recent-details summary")?.addEventListener("click",n=>{Ze&&n.preventDefault()});U("clear-practice").addEventListener("click",()=>{Ze||(U("clear-confirmation").hidden=!1)});U("cancel-clear").addEventListener("click",()=>{Ze||(U("clear-confirmation").hidden=!0)});U("confirm-clear").addEventListener("click",()=>{Ze||(U("clear-confirmation").hidden=!0,la.clear())});window.addEventListener("focus",()=>{Pt==="range"&&la.refresh()});function ln(n,e){qh.textContent=n,$h.textContent=e}function pt(){if(Pt!=="range")return;U("angle-value").textContent=`${Math.round(gt.angle)}°`,U("power-value").textContent=`${Math.round(gt.power*100)}%`,U("angle-meter").style.width=`${gt.angle/80*100}%`,U("power-meter").style.width=`${gt.power*100}%`,Vr.value=String(Math.round(gt.angle)),Hr.value=String(Math.round(gt.power*100));const n=xt||Te==="aiming"||Te==="flying"||et||!!Ge?.pending;nr.disabled=Te==="aiming",U("mode-combat").disabled=Te==="aiming"||et||!!Ge?.pending;for(const e of["visit-stats","saved-stats","clear-practice","confirm-clear","cancel-clear"])U(e).disabled=Te==="aiming";ra.disabled=n,Vr.disabled=n,Hr.disabled=n,Ur.hidden=Te!=="hit"&&Te!=="miss",J0.hidden=Te!=="ready"||xt,at.dataset.state=Te,at.dataset.paused=String(xt),s_()}function Wr(){if(!(Te==="flying"||xt||et||Ge?.pending||me&&me.status!=="active")){me&&(Bt=null,Rc()),Te="ready",St=null,rn=0,oa.visible=!1,U("shot-result").hidden=!0;for(const n of hr)n.visible=!1;ln("Pull back. Breathe. Release.","YOUR NEXT SHOT"),pt()}}function Pc(){if(Pt==="range"&&!(xt||Te==="flying"||et||Ge?.pending)){if(me){if(me.status!=="active"||Te!=="ready"&&Te!=="aiming")return;o_({...gt});return}Ic(gt)}}function Ic(n){gt={...n};const e=Vs(si,Ir),t=si.angle*Math.PI/180;Jo={tip:{x:e.nock.x+Math.cos(t)*1.2,y:e.nock.y+Math.sin(t)*1.2},angle:t},St=na(gt),at.dataset.shot=JSON.stringify(St),Kh++,rn=0,Te="flying",oa.visible=!0,U("shot-result").hidden=!0;for(const i of hr)i.visible=!1;ln("Let it fly…","ARROW IN FLIGHT"),pt()}function no(n,e){if(Te!=="flying"||!St)return;Te=n?"hit":"miss",rn=e,bc=qs,U("shot-result-caption").textContent="Closest approach · this shot";const t=X0(St,Ii,e),i=Pr;Pr=yc(Pr,Kh,n,t,gt),ca(),Pr!==i&&la.append({hit:n,distance:t,...gt}),U("shot-result-value").textContent=`${t.toFixed(2)} units from center`,U("shot-result").hidden=!1;const r=ui(St,e),s=(kt.minX-St.origin.x)/St.velocity.x,a=ui(St,s);Zl=a.y>kt.maxY?"A little high. Try less angle or draw.":a.y<kt.minY?"A little low. Try more draw or angle.":"Just short. Give it a little more draw.",ln(n?"A lovely shot.":Zl,n?"TARGET HIT":"ANOTHER TRY");for(const o of hr)o.position.set(r.x,r.y,.2);pt()}function Ln(n=!0){if(!Ze)return;const e=Ze;Ze=null,at.hasPointerCapture(e.id)&&at.releasePointerCapture(e.id),gt=e.previous,Nr.hidden=!0,Te="ready",n&&ln("Draw cancelled. Take your time.","YOUR NEXT SHOT"),pt()}function _r(n){Ln(!1),xt=n,Ys=performance.now(),U("paused").hidden=!xt,Xs.textContent=xt?"▶":"Ⅱ",Xs.setAttribute("aria-label",xt?"Resume game":"Pause game"),pt()}at.addEventListener("pointerdown",n=>{if(Pt!=="range"||xt||Te==="flying"||et||Ge?.pending||me&&(me.status!=="active"||Te==="hit"||Te==="miss")||Ze||!n.isPrimary||n.button!==0)return;n.preventDefault(),(Te==="hit"||Te==="miss")&&Wr();const e=at.getBoundingClientRect();Ze={id:n.pointerId,x:n.clientX,y:n.clientY,width:e.width,height:e.height,previous:{...gt},valid:!1},at.setPointerCapture(n.pointerId),at.focus({preventScroll:!0}),Nr.style.left=`${n.clientX-e.left}px`,Nr.style.top=`${n.clientY-e.top}px`,Nr.hidden=!1,Te="aiming",ln("Pull left and down. Release to shoot.","FIND YOUR ARC"),pt()});function Jh(n){if(Pt!=="range"||!Ze||n.pointerId!==Ze.id)return;const e=kh(n.clientX-Ze.x,n.clientY-Ze.y,Ze.width,Ze.height);Ze.valid=e!==null,e&&(gt=e),ln(e?"Release when it feels right.":"Pull left and down to draw the bow.","FIND YOUR ARC"),pt()}at.addEventListener("pointermove",Jh);at.addEventListener("pointerup",n=>{if(Pt!=="range"||!Ze||n.pointerId!==Ze.id)return;if(Jh(n),!Ze?.valid){Ln();return}const e=Ze.id;Ze=null,Nr.hidden=!0,at.hasPointerCapture(e)&&at.releasePointerCapture(e),Pc()});at.addEventListener("pointercancel",n=>{Ze?.id===n.pointerId&&Ln()});at.addEventListener("lostpointercapture",n=>{Ze?.id===n.pointerId&&Ln()});at.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("resize",()=>{Pt==="range"?Ln():ft.cancelInput()});window.addEventListener("blur",()=>{Pt==="range"?_r(!0):ft.cancelInput()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Pt==="range"?_r(!0):ft.cancelInput())});Xs.addEventListener("click",()=>_r(!xt));nr.addEventListener("click",()=>{if(!Ze){Yt=Yt==="dark"?"light":"dark",Cc();try{Z0(localStorage,Yt)}catch{}}});U("resume").addEventListener("click",()=>{_r(!1),at.focus({preventScroll:!0})});Ur.addEventListener("click",()=>{Wr(),at.focus({preventScroll:!0})});ra.addEventListener("click",()=>{Ln(!1),Pc()});for(const n of[Vr,Hr])n.addEventListener("input",()=>{if(Te==="flying"||xt||et||Ge?.pending||me&&(me.status!=="active"||Te==="hit"||Te==="miss")){pt();return}const e={angle:Number(Vr.value),power:Number(Hr.value)/100};Ln(!1),(Te==="hit"||Te==="miss")&&Wr(),gt=e,pt()});window.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLButtonElement||n.target instanceof HTMLElement&&["SUMMARY","SELECT","TEXTAREA"].includes(n.target.tagName)||n.target instanceof HTMLElement&&n.target.isContentEditable)){if(Pt==="combat"){ft.keydown(n);return}if(n.code==="KeyP"){n.preventDefault(),n.repeat||_r(!xt);return}if(n.code==="Escape"){Ln();return}if(!(xt||Ze||et||Ge?.pending||me&&me.status!=="active")){if(n.code==="Space"){if(n.preventDefault(),n.repeat)return;Te==="hit"||Te==="miss"?Wr():Pc()}else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.code)&&Te!=="flying"){if(n.preventDefault(),Te==="hit"||Te==="miss"){if(me)return;Wr()}gt.angle=jn(gt.angle+(n.code==="ArrowLeft"?-1:n.code==="ArrowRight"?1:0),5,80),gt.power=jn(gt.power+(n.code==="ArrowDown"?-.02:n.code==="ArrowUp"?.02:0),.08,1),pt()}}}});let ci=1,li=1;const d_=new ResizeObserver(()=>{Pt==="range"?Ln():ft.cancelInput();const{width:n,height:e}=at.getBoundingClientRect();n<=0||e<=0||(Kn.setSize(Math.round(n*.85),Math.round(e*.85),!1),ci=n,li=e,sa.setAttribute("viewBox",`0 0 ${n} ${e}`),Pt==="range"?Ac():ft.resize(n,e))});d_.observe(at);at.addEventListener("webglcontextlost",n=>{if(n.preventDefault(),Pt==="combat"){ft.cancelInput(),U("combat-message").textContent="Graphics interrupted. Reload to reconnect with the same guest.";return}_r(!0),ln("Graphics interrupted. Reload to return to the clearing.","GRAPHICS PAUSED")});function Qh(n){requestAnimationFrame(Qh);const e=Math.max(0,(n-Ys)/1e3);if(Ys=n,Pt==="combat"){ft.render(Kn,e),td();return}if(!xt&&(qs+=e,Te==="flying"&&St)){const l=Math.min(rn+e,_t.maxFlight);if(me&&Bt)l>=Bt.at?c_():rn=l;else{const c=y0(St,kt,rn,l),d=zh(St);c!==null&&c<=d?no(!0,c):l>=d?no(!1,d):l>=_t.maxFlight?no(!1,l):rn=l}}const t={angle:gt.angle,pull:.2+gt.power*.5};xt||(si=Hh(si,t,e),Ir+=((St?1:0)-Ir)*(1-Math.exp(-18*e)));const i=si.angle*Math.PI/180,r=Vs(si,Ir);lr.rotation.z=i,lr.position.set(r.bow.x,r.bow.y,.12);const s=Zh.attributes.position;if(s.setXYZ(1,(r.nock.x-r.bow.x)*Math.cos(i)+(r.nock.y-r.bow.y)*Math.sin(i),0,0),s.needsUpdate=!0,to(e_,mt(-7.7,2.3,.42),mt(r.bow.x+Math.cos(i)*.37,r.bow.y+Math.sin(i)*.37,.12)),to(t_,mt(-7.95,2.3,.45),mt(r.elbow.x,r.elbow.y,.28)),to(n_,mt(r.elbow.x,r.elbow.y,.28),mt(r.hand.x,r.hand.y,.12)),i_.position.set(r.hand.x,r.hand.y,.12),St){const l=Dr(St,rn,Jo);zn.position.set(l.position.x,l.position.y,.12),zn.rotation.z=l.angle;const c=Array.from({length:16},(d,p)=>{const h=Math.max(0,rn-.23+p/15*.23),u=Dr(St,h,Jo).position;return mt(u.x,u.y,.04)});ec.setFromPoints(c)}else zn.position.set(r.nock.x+Math.cos(i)*1.2,r.nock.y+Math.sin(i)*1.2,.12),zn.rotation.z=i;const a=na(gt);if(sa.style.visibility=!St&&!xt&&(Te!=="aiming"||Ze?.valid)?"visible":"hidden",Hs(cn).forEach((l,c)=>{const d={x:r.nock.x+Math.cos(i)*1.2,y:r.nock.y+Math.sin(i)*1.2},p=Dr(a,l,{tip:d,angle:i}).position,h=mt(p.x,p.y,.06).project(mn);Kl[c].setAttribute("cx",String((h.x+1)*ci/2)),Kl[c].setAttribute("cy",String((1-h.y)*li/2))}),wr.hidden=!0,St&&Te==="flying"&&!xt){const l=mt(zn.position.x,zn.position.y,.12).project(mn);if(Math.abs(l.x)>1||Math.abs(l.y)>1){const c=l.x*ci/2,d=-l.y*li/2,p=Math.min((ci/2-20)/Math.abs(c),(li/2-20)/Math.abs(d));wr.style.left=`${ci/2+c*p}px`,wr.style.top=`${li/2+d*p}px`,wr.style.setProperty("--cue-angle",`${Math.atan2(d,c)+Math.PI/2}rad`),wr.hidden=!1}}const o=qs-bc;hr.forEach((l,c)=>{if(l.visible=Te==="hit"&&o<.65,l.visible&&St){const d=ui(St,rn),p=c/hr.length*Math.PI*2;l.position.set(d.x+Math.cos(p)*o*2,d.y+Math.sin(p)*o*2-o*o*2,.25)}}),$s.material=jr(Te==="hit"&&o<.2?"#edbc7e":"#cc684a"),$s.material.color.set(Te==="hit"&&o<.2?"#edbc7e":Yt==="dark"?"#cf785c":"#cc684a"),at.dataset.pose=JSON.stringify({angle:si.angle,pull:si.pull,release:Ir,...r,arrow:{x:zn.position.x,y:zn.position.y,angle:zn.rotation.z},trail:Array.from(ec.getAttribute("position")?.array??[]),flightTime:rn}),at.dataset.view=JSON.stringify([mn.left,mn.right,mn.top,mn.bottom]),Kn.render(Je,mn)}ft=new k0(at);u_();Cc();ca();l_();pt();requestAnimationFrame(Qh);function ed(n){if(n!==Pt){n==="combat"?(Ln(!1),Pt=n,ft.activate()):(ft.deactivate(),Pt=n),Ys=performance.now(),document.body.dataset.view=n;for(const e of[".controls",".boards"]){const t=document.querySelector(e);t&&(t.hidden=n==="combat")}for(const e of["combat-panel","combat-controls","combat-scene-label"])U(e).hidden=n!=="combat";for(const e of["pause","guide","gesture-hint","arrow-cue","shot-result","face-inset","paused"])U(e).hidden=n==="combat";U("challenge-panel").hidden=n==="combat"||!me,U("mode-combat").setAttribute("aria-pressed",String(n==="combat"));for(const e of["practice","course","endless"]){const t=U(`mode-${e}`);t.disabled=!1,n==="combat"&&t.setAttribute("aria-pressed","false")}at.dataset.viewMode=n,n==="combat"?(sa.style.visibility="hidden",ft.resize(ci,li)):(Ac(),Cc(),Rc(),U("paused").hidden=!xt,U("shot-result").hidden=Te!=="hit"&&Te!=="miss",pt())}}function u_(){Xe=js?new B0("/api",fetch,Zr,js):null,U("mode-combat").addEventListener("click",()=>{et||Ge?.pending||Ze||(ed("combat"),Ki())});const n=async e=>{Ls="";try{await e()}catch(t){Ls=t instanceof Error?t.message:"The combat service is unavailable. Reconnect or retry the pending action."}Ki()};U("combat-create").addEventListener("click",()=>{Xe&&n(()=>{const e=U("combat-preset").value,t=e==="teams-1"?{mode:"teams",preset:"teams-1"}:e==="royale-shrink-1"||e==="royale-fixed-1"?{mode:"royale",preset:e}:void 0;return Xe.create(t)})}),U("combat-join-form").addEventListener("submit",e=>{e.preventDefault(),Xe&&n(()=>Xe.join(U("combat-join-code").value))}),U("combat-ready").addEventListener("click",()=>{const e=Xe;e?.room&&n(()=>e.command({kind:"ready",ready:!e.room.state.seats.find(t=>t.actorId===e.room.membership.actorId)?.ready}))}),U("combat-start").addEventListener("click",()=>{Xe&&n(()=>Xe.command({kind:"start"}))}),U("combat-pass").addEventListener("click",()=>{Xe&&n(()=>Xe.command({kind:"pass"}))}),U("combat-cancel").addEventListener("click",()=>{const e=Xe?.room?.state.action;Xe&&e&&n(()=>Xe.command({kind:"cancel",cancelActionId:e.id}))}),U("combat-leave").addEventListener("click",()=>{Xe&&!ft.drawing&&n(()=>Xe.command({kind:"leave"}))}),U("combat-resign").addEventListener("click",()=>{Xe&&!ft.drawing&&confirm(Xe.room&&qt(Xe.room.state)?"Resign this match? Your archer will leave the competition.":"Resign this duel? Your opponent wins.")&&n(()=>Xe.command({kind:"resign"}))}),U("combat-retry").addEventListener("click",()=>{Xe&&n(()=>Xe.retry())}),U("combat-reconnect").addEventListener("click",()=>{Xe&&n(()=>Xe.reconnect())}),ft.onShot=(e,t)=>{Xe&&n(()=>Xe.command({kind:"shot",arrow:e,aim:t}))},ft.onDrawing=e=>{nr.disabled=e;for(const t of["practice","course","endless","combat"])U(`mode-${t}`).disabled=e;Ki()},Xe&&(Xe.onChange=Ki,Xe.onError=e=>{Ls=e instanceof Error?e.message:"Connection interrupted. Reconnecting with the same guest.",Ki()}),window.addEventListener("pagehide",()=>Xe?.close(),{once:!0}),Ki()}function Ki(){const n=Xe,e=n?.room,t=e?.state,i=ft.drawing,r=!!n?.busy||!!n?.pending;ft.setTransport(!!n?.connected,r),ft.setLockAgain(!!n?.lockAgain),e?ft.setSnapshot(e.state,e.membership.actorId,n.now):ft.hasRoom&&ft.clearSnapshot(),U("combat-lobby").hidden=!!e,U("combat-code").textContent=e?e.code:"",U("combat-message").textContent=n?Ls||(e?n.connected?"Connected to the private room. Share its code with a friend.":"Connecting to the private room. Server clocks continue.":"Create a room or enter a friend’s invitation code."):"Combat needs the local shared service. Practice and local Challenges are available.";for(const c of["create","join","join-code"])U(`combat-${c}`).disabled=!n||r||i||!!e;U("combat-roster").replaceChildren(...(t?.seats??[]).map((c,d)=>{const p=t.actors.find(f=>f.id===c.actorId),h=e.connections.find(f=>f.actorId===c.actorId),u=document.createElement("li"),g=c.actorId===e.membership.actorId;u.dataset.actorId=c.actorId;const v=h?.reservedUntil?` · reserved ${Math.max(0,Math.ceil((h.reservedUntil-n.now())/1e3))}s`:"";u.textContent=`${h?.label??`Archer ${d+1}`}${g?" · you":""} · ${p?.health??100} health${p?.eliminated?" · eliminated":""} · ${t.state==="waiting"?c.ready?"ready":"not ready":h?.status??"disconnected"}${h?.status==="disconnected"?v:""}`;const m=document.createElement("progress");return m.max=100,m.value=p?.health??100,m.setAttribute("aria-label",`Archer ${d+1} health`),u.append(m),u}));const s=t&&e?P0(t,e.membership.actorId):null,a=c=>{const d=t?.seats.findIndex(p=>p.actorId===c)??-1;return e?.connections.find(p=>p.actorId===c)?.label??`Archer ${d+1}`};if(U("combat-rules").textContent=t?qt(t)?"Lock one arrow or pass during shared 20-second planning. Locks are final. Server time continues in the background.":"Two archers · 100 health · alternating 20-second turns. Server time continues in the background.":"Duel alternates turns; Teams and Royale share a planning deadline. Server time continues in the background.",U("combat-key-help").textContent=`← → elevation · ↓ ↑ draw · Space ${t&&qt(t)?"lock":"fire"} · Escape cancel draw. Combat has no local pause.`,U("combat-preset-label").textContent=s?.preset??"",U("combat-priority").textContent=s?.priority.length?`Priority: ${s.priority.map(a).join(" → ")}`:"",U("combat-pressure").textContent=s?.pressure??"",U("combat-scene-label").textContent=t&&qt(t)?`${t.mode==="teams"?"TEAMS 2v2":"ROYALE"} · SIDE VIEW`:"PRIVATE DUEL · SIDE VIEW",U("combat-preset").disabled=!n||r||i||!!e,s)for(const c of U("combat-roster").children){const d=c.dataset.actorId,p=t.seats.find(u=>u.actorId===d),h=s.locks.find(u=>u.actorId===d);if(p&&"teamId"in p&&p.teamId){const u=document.createElement("strong");u.className="combat-team",u.textContent=String(p.teamId),c.prepend(u)}if(h&&t.state==="active"){const u=document.createElement("div");u.textContent=h.text,c.append(u)}}const o=t?.seats.find(c=>c.actorId===e?.membership.actorId);U("combat-ready").hidden=t?.state!=="waiting",U("combat-ready").textContent=o?.ready?"Not ready":"Ready",U("combat-start").hidden=t?.state!=="waiting"||!e?.membership.canStart,U("combat-leave").hidden=!e||t?.state==="active",U("combat-resign").hidden=t?.state!=="active",U("combat-reconnect").hidden=!n||!e&&!n.savedRoom||!!n.connected,U("combat-retry").hidden=!n?.pending;for(const c of["ready","start","leave","resign","reconnect","retry"])U(`combat-${c}`).disabled=i||!!n?.busy||c!=="retry"&&!!n?.pending;U("combat-start").disabled||=!t||!C0(t)||!n?.connected,U("combat-pass").disabled=i||r||!n?.connected||!t?.seat.canAct,U("combat-pass").textContent=t&&qt(t)?"Lock pass":"Pass turn",U("combat-cancel").hidden=!!t&&qt(t)||t?.phase!=="resolving"||t.action?.actorId!==e?.membership.actorId||t.launchAt===null||n.now()>=t.launchAt,U("combat-cancel").disabled=i||r||!n?.connected;const l=s?.result??"";U("combat-result").hidden=!l,U("combat-result").textContent=l,U("combat-phase").textContent=t?t.state==="active"?t.phase.toUpperCase():t.state.toUpperCase():"WAITING FOR A ROOM",U("combat-turn").textContent=s?.turn??"Invite a friend to the arena.",td()}function td(){const n=Xe?.room,e=n?.state;if(!e){U("combat-clock").textContent="";return}const t=Xe.now();U("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.state==="active"&&e.deadlineAt!==null&&t>=e.deadlineAt&&(U("combat-fire").disabled=!0,U("combat-pass").disabled=!0)}
