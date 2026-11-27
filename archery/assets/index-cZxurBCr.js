(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const hh="183",I0=0,Cu=1,P0=2,ya=1,L0=2,ma=3,dr=0,In=1,fi=2,ki=0,Cs=1,Iu=2,Pu=3,Lu=4,D0=5,Tr=100,N0=101,U0=102,F0=103,O0=104,k0=200,B0=201,z0=202,H0=203,Ql=204,ed=205,G0=206,V0=207,W0=208,X0=209,$0=210,Y0=211,j0=212,q0=213,K0=214,td=0,nd=1,id=2,Ls=3,rd=4,sd=5,ad=6,od=7,Kp=0,J0=1,Z0=2,xi=0,Jp=1,Zp=2,Qp=3,em=4,tm=5,nm=6,im=7,rm=300,kr=301,Ds=302,Wc=303,Xc=304,yc=306,cd=1e3,Ni=1001,ld=1002,un=1003,Q0=1004,Qa=1005,vn=1006,$c=1007,Cr=1008,On=1009,sm=1010,am=1011,Ea=1012,uh=1013,yi=1014,Qn=1015,Vi=1016,fh=1017,ph=1018,Ta=1020,om=35902,cm=35899,lm=1021,dm=1022,ei=1023,Wi=1026,Ir=1027,mh=1028,gh=1029,Ns=1030,xh=1031,_h=1033,No=33776,Uo=33777,Fo=33778,Oo=33779,dd=35840,hd=35841,ud=35842,fd=35843,pd=36196,md=37492,gd=37496,xd=37488,_d=37489,vd=37490,yd=37491,bd=37808,Md=37809,Sd=37810,wd=37811,Ed=37812,Td=37813,Ad=37814,Rd=37815,Cd=37816,Id=37817,Pd=37818,Ld=37819,Dd=37820,Nd=37821,Ud=36492,Fd=36494,Od=36495,kd=36283,Bd=36284,zd=36285,Hd=36286,ex=3200,hm=0,tx=1,rr="",Un="srgb",Us="srgb-linear",qo="linear",ut="srgb",is=7680,Du=519,nx=512,ix=513,rx=514,vh=515,sx=516,ax=517,yh=518,ox=519,Nu=35044,Uu=35048,Fu="300 es",pi=2e3,Aa=2001;function cx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lx(){const n=Ko("canvas");return n.style.display="block",n}const Ou={};function ku(...n){const e="THREE."+n.shift();console.log(e,...n)}function um(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=um(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=um(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Jo(...n){const e=n.join(" ");e in Ou||(Ou[e]=!0,Le(...n))}function dx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const hx={[td]:nd,[id]:ad,[rd]:od,[Ls]:sd,[nd]:td,[ad]:id,[od]:rd,[sd]:Ls};class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,Gd=180/Math.PI;function Ba(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function ux(n,e){return(n%e+e)%e}function jc(n,e,t){return(1-t)*n+t*e}function ia(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $r{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(d!==v||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+d*v;m<0&&(h=-h,p=-p,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);f=Math.sin(f*y)/b,o=Math.sin(o*y)/b,c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+v*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+v*o;const y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-o*p,e[t+2]=l*g+u*p+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new k,Bu=new $r;class Fe{constructor(e,t,i,r,s,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],y=r[1],b=r[4],M=r[7],T=r[2],R=r[5],I=r[8];return s[0]=a*v+o*y+c*T,s[3]=a*m+o*b+c*R,s[6]=a*f+o*M+c*I,s[1]=l*v+u*y+d*T,s[4]=l*m+u*b+d*R,s[7]=l*f+u*M+d*I,s[2]=h*v+p*y+g*T,s[5]=h*m+p*b+g*R,s[8]=h*f+p*M+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,p=l*s-a*c,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new Fe,zu=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fx(){const n={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=Is(r.r),r.g=Is(r.g),r.b=Is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?qo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Us]:{primaries:e,whitePoint:i,transfer:qo,toXYZ:zu,fromXYZ:Hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:zu,fromXYZ:Hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),n}const nt=fx();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class px{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=Ko("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mx=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jc(r[a].image)):s.push(Jc(r[a]))}else s=Jc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?px.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let gx=0;const Zc=new k;class Tn extends js{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,i=Ni,r=Ni,s=vn,a=Cr,o=ei,c=On,l=Tn.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Ba(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=rm;Tn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(p+1)/2,T=(f+1)/2,R=(u+h)/4,I=(d+v)/4,x=(g+m)/4;return b>M&&b>T?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=I/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=I/s,r=x/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xx extends js{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Tn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new bh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends xx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fm extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _x extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e,t,i,r,s,a,o,c,l,u,d,h,p,g,v,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,d,h,p,g,v,m)}set(e,t,i,r,s,a,o,c,l,u,d,h,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,v=l*d;t[0]=h+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,v=l*d;t[0]=h-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,yx)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ki.crossVectors(i,Dn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ki.crossVectors(i,Dn)),Ki.normalize(),eo.crossVectors(Dn,Ki),r[0]=Ki.x,r[4]=eo.x,r[8]=Dn.x,r[1]=Ki.y,r[5]=eo.y,r[9]=Dn.y,r[2]=Ki.z,r[6]=eo.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],y=i[3],b=i[7],M=i[11],T=i[15],R=r[0],I=r[4],x=r[8],w=r[12],F=r[1],C=r[5],U=r[9],z=r[13],W=r[2],B=r[6],G=r[10],O=r[14],Z=r[3],K=r[7],de=r[11],xe=r[15];return s[0]=a*R+o*F+c*W+l*Z,s[4]=a*I+o*C+c*B+l*K,s[8]=a*x+o*U+c*G+l*de,s[12]=a*w+o*z+c*O+l*xe,s[1]=u*R+d*F+h*W+p*Z,s[5]=u*I+d*C+h*B+p*K,s[9]=u*x+d*U+h*G+p*de,s[13]=u*w+d*z+h*O+p*xe,s[2]=g*R+v*F+m*W+f*Z,s[6]=g*I+v*C+m*B+f*K,s[10]=g*x+v*U+m*G+f*de,s[14]=g*w+v*z+m*O+f*xe,s[3]=y*R+b*F+M*W+T*Z,s[7]=y*I+b*C+M*B+T*K,s[11]=y*x+b*U+M*G+T*de,s[15]=y*w+b*z+M*O+T*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15],y=c*p-l*h,b=o*p-l*d,M=o*h-c*d,T=a*p-l*u,R=a*h-c*u,I=a*d-o*u;return t*(v*y-m*b+f*M)-i*(g*y-m*T+f*R)+r*(g*b-v*T+f*I)-s*(g*M-v*R+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=t*o-i*a,b=t*c-r*a,M=t*l-s*a,T=i*c-r*o,R=i*l-s*o,I=r*l-s*c,x=u*v-d*g,w=u*m-h*g,F=u*f-p*g,C=d*m-h*v,U=d*f-p*v,z=h*f-p*m,W=y*z-b*U+M*C+T*F-R*w+I*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/W;return e[0]=(o*z-c*U+l*C)*B,e[1]=(r*U-i*z-s*C)*B,e[2]=(v*I-m*R+f*T)*B,e[3]=(h*R-d*I-p*T)*B,e[4]=(c*F-a*z-l*w)*B,e[5]=(t*z-r*F+s*w)*B,e[6]=(m*M-g*I-f*b)*B,e[7]=(u*I-h*M+p*b)*B,e[8]=(a*U-o*F+l*x)*B,e[9]=(i*F-t*U-s*x)*B,e[10]=(g*R-v*M+f*y)*B,e[11]=(d*M-u*R-p*y)*B,e[12]=(o*w-a*C-c*x)*B,e[13]=(t*C-i*w+r*x)*B,e[14]=(v*b-g*T-m*y)*B,e[15]=(u*T-d*b+h*y)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,p=s*u,g=s*d,v=a*u,m=a*d,f=o*d,y=c*l,b=c*u,M=c*d,T=i.x,R=i.y,I=i.z;return r[0]=(1-(v+f))*T,r[1]=(p+M)*T,r[2]=(g-b)*T,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(h+f))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(g+b)*I,r[9]=(m-y)*I,r[10]=(1-(h+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),c=ss.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yn.copy(this);const l=1/a,u=1/o,d=1/c;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,t.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=pi,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===pi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Aa)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=pi,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===pi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Aa)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new k,Yn=new St,vx=new k(0,0,0),yx=new k(1,1,1),Ki=new k,eo=new k,Dn=new k,Gu=new St,Vu=new $r;class bi{constructor(e=0,t=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class pm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bx=0;const Wu=new k,as=new $r,Ti=new St,to=new k,ra=new k,Mx=new k,Sx=new $r,Xu=new k(1,0,0),$u=new k(0,1,0),Yu=new k(0,0,1),ju={type:"added"},wx={type:"removed"},os={type:"childadded",child:null},Qc={type:"childremoved",child:null};class on extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new k,t=new bi,i=new $r,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Fe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?to.copy(e):to.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(ra,to,this.up):Ti.lookAt(to,ra,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Ti),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ju),os.child=e,this.dispatchEvent(os),os.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wx),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ju),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new k(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kt extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ex={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ex)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},no={h:0,s:0,l:0};function tl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=ux(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=tl(a,s,e+1/3),this.g=tl(a,s,e),this.b=tl(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Un){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=mm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return nt.workingToColorSpace(gn.copy(this),e),Math.round(qe(gn.r*255,0,255))*65536+Math.round(qe(gn.g*255,0,255))*256+Math.round(qe(gn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(gn.copy(this),t);const i=gn.r,r=gn.g,s=gn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Un){nt.workingToColorSpace(gn.copy(this),e);const t=gn.r,i=gn.g,r=gn.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(no);const i=jc(Ji.h,no.h,t),r=jc(Ji.s,no.s,t),s=jc(Ji.l,no.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Je;Je.NAMES=mm;class Mh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new Mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gm extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jn=new k,Ai=new k,nl=new k,Ri=new k,cs=new k,ls=new k,qu=new k,il=new k,rl=new k,sl=new k,al=new Bt,ol=new Bt,cl=new Bt;class Jn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jn.subVectors(e,t),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jn.subVectors(r,t),Ai.subVectors(i,t),nl.subVectors(e,t);const a=jn.dot(jn),o=jn.dot(Ai),c=jn.dot(nl),l=Ai.dot(Ai),u=Ai.dot(nl),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ri.x),c.addScaledVector(a,Ri.y),c.addScaledVector(o,Ri.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return al.setScalar(0),ol.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,i),cl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(al,s.x),a.addScaledVector(ol,s.y),a.addScaledVector(cl,s.z),a}static isFrontFacing(e,t,i,r){return jn.subVectors(i,t),Ai.subVectors(e,t),jn.cross(Ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;cs.subVectors(r,i),ls.subVectors(s,i),il.subVectors(e,i);const c=cs.dot(il),l=ls.dot(il);if(c<=0&&l<=0)return t.copy(i);rl.subVectors(e,r);const u=cs.dot(rl),d=ls.dot(rl);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(cs,a);sl.subVectors(e,s);const p=cs.dot(sl),g=ls.dot(sl);if(g>=0&&p<=g)return t.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(ls,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return qu.subVectors(s,r),o=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(qu,o);const f=1/(m+v+h);return a=v*f,o=h*f,t.copy(i).addScaledVector(cs,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),ro.subVectors(this.max,sa),ds.subVectors(e.a,sa),hs.subVectors(e.b,sa),us.subVectors(e.c,sa),Zi.subVectors(hs,ds),Qi.subVectors(us,hs),_r.subVectors(ds,us);let t=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-_r.z,_r.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,_r.z,0,-_r.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-_r.y,_r.x,0];return!ll(t,ds,hs,us,ro)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,ds,hs,us,ro))?!1:(so.crossVectors(Zi,Qi),t=[so.x,so.y,so.z],ll(t,ds,hs,us,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new k,new k,new k,new k,new k,new k,new k,new k],qn=new k,io=new Yr,ds=new k,hs=new k,us=new k,Zi=new k,Qi=new k,_r=new k,sa=new k,ro=new k,so=new k,vr=new k;function ll(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vr.fromArray(n,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),c=e.dot(vr),l=t.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Yt=new k,ao=new Qe;let Tx=0;class Wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ia(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nu&&(e.usage=this.usage),e}}class xm extends Wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _m extends Wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ax=new Yr,aa=new k,dl=new k;class qs{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ax.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(dl)),this.expandByPoint(aa.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rx=0;const kn=new St,hl=new on,fs=new k,Nn=new Yr,oa=new Yr,sn=new k;class Xt extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?_m:xm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Nn.min,oa.min),Nn.expandByPoint(sn),sn.addVectors(Nn.max,oa.max),Nn.expandByPoint(sn)):(Nn.expandByPoint(oa.min),Nn.expandByPoint(oa.max))}Nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)sn.fromBufferAttribute(o,l),c&&(fs.fromBufferAttribute(e,l),sn.add(fs)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new k,c[x]=new k;const l=new k,u=new k,d=new k,h=new Qe,p=new Qe,g=new Qe,v=new k,m=new k;function f(x,w,F){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,F),h.fromBufferAttribute(s,x),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,F),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[x].add(v),o[w].add(v),o[F].add(v),c[x].add(m),c[w].add(m),c[F].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const F=y[x],C=F.start,U=F.count;for(let z=C,W=C+U;z<W;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new k,M=new k,T=new k,R=new k;function I(x){T.fromBufferAttribute(r,x),R.copy(T);const w=o[x];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),M.crossVectors(R,w);const C=M.dot(c[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,C)}for(let x=0,w=y.length;x<w;++x){const F=y[x],C=F.start,U=F.count;for(let z=C,W=C+U;z<W;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,u=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Wn(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cx=0;class Ks extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=Cs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ed,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ii=new k,ul=new k,oo=new k,er=new k,fl=new k,co=new k,pl=new k;class vm{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ul.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),er.copy(this.origin).sub(ul);const s=e.distanceTo(t)*.5,a=-this.direction.dot(oo),o=er.dot(this.direction),c=-er.dot(oo),l=er.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ul).addScaledVector(oo,h),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,r,s){fl.subVectors(t,e),co.subVectors(i,e),pl.crossVectors(fl,co);let a=this.direction.dot(pl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;er.subVectors(this.origin,e);const c=o*this.direction.dot(co.crossVectors(er,co));if(c<0)return null;const l=o*this.direction.dot(fl.cross(er));if(l<0||c+l>a)return null;const u=-o*er.dot(pl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zi extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ku=new St,yr=new vm,lo=new qs,Ju=new k,ho=new k,uo=new k,fo=new k,ml=new k,po=new k,Zu=new k,mo=new k;class Ke extends on{constructor(e=new Xt,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(ml.fromBufferAttribute(d,e),a?po.addScaledVector(ml,u):po.addScaledVector(ml.sub(t),u))}t.add(po)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(lo.containsPoint(yr.origin)===!1&&(yr.intersectSphere(lo,Ju)===null||yr.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Ku.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,T=b;M<T;M+=3){const R=o.getX(M),I=o.getX(M+1),x=o.getX(M+2);r=go(this,f,e,i,l,u,d,R,I,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=go(this,a,e,i,l,u,d,y,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,T=b;M<T;M+=3){const R=M,I=M+1,x=M+2;r=go(this,f,e,i,l,u,d,R,I,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=m,b=m+1,M=m+2;r=go(this,a,e,i,l,u,d,y,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ix(n,e,t,i,r,s,a,o){let c;if(e.side===In?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===dr,o),c===null)return null;mo.copy(o),mo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(mo);return l<t.near||l>t.far?null:{distance:l,point:mo.clone(),object:n}}function go(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,ho),n.getVertexPosition(c,uo),n.getVertexPosition(l,fo);const u=Ix(n,e,t,i,ho,uo,fo,Zu);if(u){const d=new k;Jn.getBarycoord(Zu,ho,uo,fo,d),r&&(u.uv=Jn.getInterpolatedAttribute(r,o,c,l,d,new Qe)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,o,c,l,d,new Qe)),a&&(u.normal=Jn.getInterpolatedAttribute(a,o,c,l,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new k,materialIndex:0};Jn.getNormal(ho,uo,fo,h.normal),u.face=h,u.barycoord=d}return u}class ym extends Tn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=un,u=un,d,h){super(null,a,o,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vd extends Wn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new St,Qu=new St,xo=[],ef=new Yr,Px=new St,ca=new Ke,la=new qs;class Lx extends Ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vd(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Px)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),ef.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(ef)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),la.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(la)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(i),e.ray.intersectsSphere(la)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ps),Qu.multiplyMatrices(i,ps),ca.matrixWorld=Qu,ca.raycast(e,xo);for(let a=0,o=xo.length;a<o;a++){const c=xo[a];c.instanceId=s,c.object=this,t.push(c)}xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ym(new Float32Array(r*this.count),r,this.count,mh,Qn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gl=new k,Dx=new k,Nx=new Fe;class wr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=gl.subVectors(i,t).cross(Dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nx.getNormalMatrix(e),r=this.coplanarPoint(gl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new qs,Ux=new Qe(.5,.5),_o=new k;class Sh{constructor(e=new wr,t=new wr,i=new wr,r=new wr,s=new wr,a=new wr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],v=s[9],m=s[10],f=s[11],y=s[12],b=s[13],M=s[14],T=s[15];if(r[0].setComponents(l-a,p-u,f-g,T-y).normalize(),r[1].setComponents(l+a,p+u,f+g,T+y).normalize(),r[2].setComponents(l+o,p+d,f+v,T+b).normalize(),r[3].setComponents(l-o,p-d,f-v,T-b).normalize(),i)r[4].setComponents(c,h,m,M).normalize(),r[5].setComponents(l-c,p-h,f-m,T-M).normalize();else if(r[4].setComponents(l-c,p-h,f-m,T-M).normalize(),t===pi)r[5].setComponents(l+c,p+h,f+m,T+M).normalize();else if(t===Aa)r[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const t=Ux.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_o.x=r.normal.x>0?e.max.x:e.min.x,_o.y=r.normal.y>0?e.max.y:e.min.y,_o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fs extends Ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zo=new k,Qo=new k,tf=new St,da=new vm,vo=new qs,xl=new k,nf=new k;class Ss extends on{constructor(e=new Xt,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Zo.fromBufferAttribute(t,r-1),Qo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Zo.distanceTo(Qo);e.setAttribute("lineDistance",new Dt(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;tf.copy(r).invert(),da.copy(e.ray).applyMatrix4(tf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const f=u.getX(v),y=u.getX(v+1),b=yo(this,e,da,c,f,y,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),f=yo(this,e,da,c,v,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const f=yo(this,e,da,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=yo(this,e,da,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yo(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Zo.fromBufferAttribute(o,r),Qo.fromBufferAttribute(o,s),t.distanceSqToSegment(Zo,Qo,xl,nf)>i)return;xl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(xl);if(!(l<e.near||l>e.far))return{distance:l,point:nf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class bm extends Tn{constructor(e=[],t=kr,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ra extends Tn{constructor(e,t,i=yi,r,s,a,o=un,c=un,l,u=Wi,d=1){if(u!==Wi&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fx extends Ra{constructor(e,t=yi,i=kr,r,s,a=un,o=un,c,l=Wi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mm extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends Xt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(d,2));function g(v,m,f,y,b,M,T,R,I,x,w){const F=M/I,C=T/x,U=M/2,z=T/2,W=R/2,B=I+1,G=x+1;let O=0,Z=0;const K=new k;for(let de=0;de<G;de++){const xe=de*C-z;for(let pe=0;pe<B;pe++){const ke=pe*F-U;K[v]=ke*y,K[m]=xe*b,K[f]=W,l.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[f]=R>0?1:-1,u.push(K.x,K.y,K.z),d.push(pe/I),d.push(1-de/x),O+=1}}for(let de=0;de<x;de++)for(let xe=0;xe<I;xe++){const pe=h+xe+B*de,ke=h+xe+B*(de+1),It=h+(xe+1)+B*(de+1),At=h+(xe+1)+B*de;c.push(pe,ke,At),c.push(ke,It,At),Z+=6}o.addGroup(p,Z,w),p+=Z,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hr extends Xt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new k,u=new Qe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(o,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wh extends Xt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const v=[],m=i/2;let f=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(p,2));function y(){const M=new k,T=new k;let R=0;const I=(t-e)/i;for(let x=0;x<=s;x++){const w=[],F=x/s,C=F*(t-e)+e;for(let U=0;U<=r;U++){const z=U/r,W=z*c+o,B=Math.sin(W),G=Math.cos(W);T.x=C*B,T.y=-F*i+m,T.z=C*G,d.push(T.x,T.y,T.z),M.set(B,I,G).normalize(),h.push(M.x,M.y,M.z),p.push(z,1-F),w.push(g++)}v.push(w)}for(let x=0;x<r;x++)for(let w=0;w<s;w++){const F=v[w][x],C=v[w+1][x],U=v[w+1][x+1],z=v[w][x+1];(e>0||w!==0)&&(u.push(F,C,z),R+=3),(t>0||w!==s-1)&&(u.push(C,U,z),R+=3)}l.addGroup(f,R,0),f+=R}function b(M){const T=g,R=new Qe,I=new k;let x=0;const w=M===!0?e:t,F=M===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,m*F,0),h.push(0,F,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=r;U++){const W=U/r*c+o,B=Math.cos(W),G=Math.sin(W);I.x=w*G,I.y=m*F,I.z=w*B,d.push(I.x,I.y,I.z),h.push(0,F,0),R.x=B*.5+.5,R.y=G*.5*F+.5,p.push(R.x,R.y),g++}for(let U=0;U<r;U++){const z=T+U,W=C+U;M===!0?u.push(W,W+1,z):u.push(W+1,W,z),x+=3}l.addGroup(f,x,M===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends wh{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new za(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qr extends Xt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const y=f*h-a;for(let b=0;b<l;b++){const M=b*d-s;g.push(M,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const b=y+l*f,M=y+l*(f+1),T=y+1+l*(f+1),R=y+1+l*f;p.push(b,M,R),p.push(M,T,R)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Eh extends Xt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/r,p=new k,g=new Qe;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<r;v++){const m=v*(i+1);for(let f=0;f<i;f++){const y=f+m,b=y,M=y+i+1,T=y+i+2,R=y+1;o.push(b,M,R),o.push(M,T,R)}}this.setIndex(o),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mn(n){const e={};for(let t=0;t<n.length;t++){const i=Os(n[t]);for(const r in i)e[r]=i[r]}return e}function Ox(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const kx={clone:Os,merge:Mn};var Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hx extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ko extends Ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gx extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vx extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wx extends Fs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class wm extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Em extends wm{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _l=new St,rf=new k,sf=new k;class Xx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Aa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bo=new k,Mo=new $r,ci=new k;class Tm extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bo,Mo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Mo,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(bo,Mo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Mo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const tr=new k,af=new Qe,of=new Qe;class Kn extends Tm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,af,of),t.subVectors(of,af)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ha extends Tm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $x extends Xx{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Am extends wm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new $x}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ms=-90,gs=1;class Yx extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(ms,gs,e,t);r.layers=this.layers,this.add(r);const s=new Kn(ms,gs,e,t);s.layers=this.layers,this.add(s);const a=new Kn(ms,gs,e,t);a.layers=this.layers,this.add(a);const o=new Kn(ms,gs,e,t);o.layers=this.layers,this.add(o);const c=new Kn(ms,gs,e,t);c.layers=this.layers,this.add(c);const l=new Kn(ms,gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jx extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function cf(n,e,t,i){const r=qx(i);switch(t){case lm:return n*e;case mh:return n*e/r.components*r.byteLength;case gh:return n*e/r.components*r.byteLength;case Ns:return n*e*2/r.components*r.byteLength;case xh:return n*e*2/r.components*r.byteLength;case dm:return n*e*3/r.components*r.byteLength;case ei:return n*e*4/r.components*r.byteLength;case _h:return n*e*4/r.components*r.byteLength;case No:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fo:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hd:case fd:return Math.max(n,16)*Math.max(e,8)/4;case dd:case ud:return Math.max(n,8)*Math.max(e,8)/2;case pd:case md:case xd:case _d:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gd:case vd:case yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Td:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ud:case Fd:case Od:return Math.ceil(n/4)*Math.ceil(e/4)*16;case kd:case Bd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zd:case Hd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(n){switch(n){case On:case sm:return{byteLength:1,components:1};case Ea:case am:case Vi:return{byteLength:2,components:1};case fh:case ph:return{byteLength:2,components:4};case yi:case uh:case Qn:return{byteLength:4,components:1};case om:case cm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);function Rm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Kx(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zx=`#ifdef USE_ALPHAHASH
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
#endif`,Qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i_=`#ifdef USE_AOMAP
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
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_=`#ifdef USE_BATCHING
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
#endif`,a_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d_=`#ifdef USE_IRIDESCENCE
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
#endif`,h_=`#ifdef USE_BUMPMAP
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,x_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,__=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,y_=`#define PI 3.141592653589793
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
} // validated`,b_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M_=`vec3 transformedNormal = objectNormal;
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
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A_="gl_FragColor = linearToOutputTexel( gl_FragColor );",R_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,N_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k_=`#ifdef USE_GRADIENTMAP
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
}`,B_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G_=`uniform bool receiveShadow;
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
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,W_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j_=`PhysicalMaterial material;
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
#endif`,q_=`uniform sampler2D dfgLUT;
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
}`,K_=`
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,av=`#if defined( USE_POINTS_UV )
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
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`#ifdef USE_MORPHTARGETS
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
#endif`,fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vv=`#ifdef USE_NORMALMAP
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
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ev=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uv=`float getShadowMask() {
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
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,iy=`#if DEPTH_PACKING == 3200
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
}`,ry=`#define DISTANCE
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
}`,sy=`#define DISTANCE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
}`,ly=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,py=`#define MATCAP
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
}`,my=`#define MATCAP
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
}`,gy=`#define NORMAL
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
}`,xy=`#define NORMAL
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
}`,_y=`#define PHONG
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
}`,vy=`#define PHONG
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
}`,yy=`#define STANDARD
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
}`,by=`#define STANDARD
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
}`,My=`#define TOON
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
}`,Sy=`#define TOON
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
}`,wy=`uniform float size;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,Ry=`uniform float rotation;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Jx,alphahash_pars_fragment:Zx,alphamap_fragment:Qx,alphamap_pars_fragment:e_,alphatest_fragment:t_,alphatest_pars_fragment:n_,aomap_fragment:i_,aomap_pars_fragment:r_,batching_pars_vertex:s_,batching_vertex:a_,begin_vertex:o_,beginnormal_vertex:c_,bsdfs:l_,iridescence_fragment:d_,bumpmap_pars_fragment:h_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:p_,clipping_planes_vertex:m_,color_fragment:g_,color_pars_fragment:x_,color_pars_vertex:__,color_vertex:v_,common:y_,cube_uv_reflection_fragment:b_,defaultnormal_vertex:M_,displacementmap_pars_vertex:S_,displacementmap_vertex:w_,emissivemap_fragment:E_,emissivemap_pars_fragment:T_,colorspace_fragment:A_,colorspace_pars_fragment:R_,envmap_fragment:C_,envmap_common_pars_fragment:I_,envmap_pars_fragment:P_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:V_,envmap_vertex:D_,fog_vertex:N_,fog_pars_vertex:U_,fog_fragment:F_,fog_pars_fragment:O_,gradientmap_pars_fragment:k_,lightmap_pars_fragment:B_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:H_,lights_pars_begin:G_,lights_toon_fragment:W_,lights_toon_pars_fragment:X_,lights_phong_fragment:$_,lights_phong_pars_fragment:Y_,lights_physical_fragment:j_,lights_physical_pars_fragment:q_,lights_fragment_begin:K_,lights_fragment_maps:J_,lights_fragment_end:Z_,logdepthbuf_fragment:Q_,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:rv,map_particle_fragment:sv,map_particle_pars_fragment:av,metalnessmap_fragment:ov,metalnessmap_pars_fragment:cv,morphinstance_vertex:lv,morphcolor_vertex:dv,morphnormal_vertex:hv,morphtarget_pars_vertex:uv,morphtarget_vertex:fv,normal_fragment_begin:pv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:xv,normal_vertex:_v,normalmap_pars_fragment:vv,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Mv,iridescence_pars_fragment:Sv,opaque_fragment:wv,packing:Ev,premultiplied_alpha_fragment:Tv,project_vertex:Av,dithering_fragment:Rv,dithering_pars_fragment:Cv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:Pv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Uv,skinbase_vertex:Fv,skinning_pars_vertex:Ov,skinning_vertex:kv,skinnormal_vertex:Bv,specularmap_fragment:zv,specularmap_pars_fragment:Hv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Vv,transmission_fragment:Wv,transmission_pars_fragment:Xv,uv_pars_fragment:$v,uv_pars_vertex:Yv,uv_vertex:jv,worldpos_vertex:qv,background_vert:Kv,background_frag:Jv,backgroundCube_vert:Zv,backgroundCube_frag:Qv,cube_vert:ey,cube_frag:ty,depth_vert:ny,depth_frag:iy,distance_vert:ry,distance_frag:sy,equirect_vert:ay,equirect_frag:oy,linedashed_vert:cy,linedashed_frag:ly,meshbasic_vert:dy,meshbasic_frag:hy,meshlambert_vert:uy,meshlambert_frag:fy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:xy,meshphong_vert:_y,meshphong_frag:vy,meshphysical_vert:yy,meshphysical_frag:by,meshtoon_vert:My,meshtoon_frag:Sy,points_vert:wy,points_frag:Ey,shadow_vert:Ty,shadow_frag:Ay,sprite_vert:Ry,sprite_frag:Cy},oe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},hi={basic:{uniforms:Mn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Mn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Mn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Mn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Mn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Mn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Mn([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Mn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Mn([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Mn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Mn([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Mn([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Mn([oe.lights,oe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};hi.physical={uniforms:Mn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const So={r:0,b:0,g:0},Mr=new bi,Iy=new St;function Py(n,e,t,i,r,s){const a=new Je(0);let o=r===!0?0:1,c,l,u=null,d=0,h=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(y){let b=!1;const M=p(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,b){const M=p(b);M&&(M.isCubeTexture||M.mapping===yc)?(l===void 0&&(l=new Ke(new jr(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Os(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Mr.copy(b.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(Mr)),l.material.toneMapped=nt.getTransfer(M.colorSpace)!==ut,(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ke(new qr(2,2),new Mi({name:"BackgroundMaterial",uniforms:Os(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=nt.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(So,Sm(n)),t.buffers.color.setClear(So.r,So.g,So.b,b,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:f}}function Ly(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(C,U,z,W,B){let G=!1;const O=d(C,W,z,U);s!==O&&(s=O,l(s.object)),G=p(C,W,z,B),G&&g(C,W,z,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(C,U,z,W),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,U,z,W){const B=W.wireframe===!0;let G=i[U.id];G===void 0&&(G={},i[U.id]=G);const O=C.isInstancedMesh===!0?C.id:0;let Z=G[O];Z===void 0&&(Z={},G[O]=Z);let K=Z[z.id];K===void 0&&(K={},Z[z.id]=K);let de=K[B];return de===void 0&&(de=h(c()),K[B]=de),de}function h(C){const U=[],z=[],W=[];for(let B=0;B<t;B++)U[B]=0,z[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:W,object:C,attributes:{},index:null}}function p(C,U,z,W){const B=s.attributes,G=U.attributes;let O=0;const Z=z.getAttributes();for(const K in Z)if(Z[K].location>=0){const xe=B[K];let pe=G[K];if(pe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),xe===void 0||xe.attribute!==pe||pe&&xe.data!==pe.data)return!0;O++}return s.attributesNum!==O||s.index!==W}function g(C,U,z,W){const B={},G=U.attributes;let O=0;const Z=z.getAttributes();for(const K in Z)if(Z[K].location>=0){let xe=G[K];xe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const pe={};pe.attribute=xe,xe&&xe.data&&(pe.data=xe.data),B[K]=pe,O++}s.attributes=B,s.attributesNum=O,s.index=W}function v(){const C=s.newAttributes;for(let U=0,z=C.length;U<z;U++)C[U]=0}function m(C){f(C,0)}function f(C,U){const z=s.newAttributes,W=s.enabledAttributes,B=s.attributeDivisors;z[C]=1,W[C]===0&&(n.enableVertexAttribArray(C),W[C]=1),B[C]!==U&&(n.vertexAttribDivisor(C,U),B[C]=U)}function y(){const C=s.newAttributes,U=s.enabledAttributes;for(let z=0,W=U.length;z<W;z++)U[z]!==C[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function b(C,U,z,W,B,G,O){O===!0?n.vertexAttribIPointer(C,U,z,B,G):n.vertexAttribPointer(C,U,z,W,B,G)}function M(C,U,z,W){v();const B=W.attributes,G=z.getAttributes(),O=U.defaultAttributeValues;for(const Z in G){const K=G[Z];if(K.location>=0){let de=B[Z];if(de===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const xe=de.normalized,pe=de.itemSize,ke=e.get(de);if(ke===void 0)continue;const It=ke.buffer,At=ke.type,q=ke.bytesPerElement,ie=At===n.INT||At===n.UNSIGNED_INT||de.gpuType===uh;if(de.isInterleavedBufferAttribute){const ae=de.data,Ue=ae.stride,Re=de.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<K.locationSize;Pe++)f(K.location+Pe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<K.locationSize;Pe++)m(K.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,It);for(let Pe=0;Pe<K.locationSize;Pe++)b(K.location+Pe,pe/K.locationSize,At,xe,Ue*q,(Re+pe/K.locationSize*Pe)*q,ie)}else{if(de.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)f(K.location+ae,de.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);n.bindBuffer(n.ARRAY_BUFFER,It);for(let ae=0;ae<K.locationSize;ae++)b(K.location+ae,pe/K.locationSize,At,xe,pe*q,pe/K.locationSize*ae*q,ie)}}else if(O!==void 0){const xe=O[Z];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(K.location,xe);break;case 3:n.vertexAttrib3fv(K.location,xe);break;case 4:n.vertexAttrib4fv(K.location,xe);break;default:n.vertexAttrib1fv(K.location,xe)}}}}y()}function T(){w();for(const C in i){const U=i[C];for(const z in U){const W=U[z];for(const B in W){const G=W[B];for(const O in G)u(G[O].object),delete G[O];delete W[B]}}delete i[C]}}function R(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const z in U){const W=U[z];for(const B in W){const G=W[B];for(const O in G)u(G[O].object),delete G[O];delete W[B]}}delete i[C.id]}function I(C){for(const U in i){const z=i[U];for(const W in z){const B=z[W];if(B[C.id]===void 0)continue;const G=B[C.id];for(const O in G)u(G[O].object),delete G[O];delete B[C.id]}}}function x(C){for(const U in i){const z=i[U],W=C.isInstancedMesh===!0?C.id:0,B=z[W];if(B!==void 0){for(const G in B){const O=B[G];for(const Z in O)u(O[Z].object),delete O[Z];delete B[G]}delete z[W],Object.keys(z).length===0&&delete i[U]}}}function w(){F(),a=!0,s!==r&&(s=r,l(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Dy(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ny(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==ei&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==On&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Qn&&!x)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:R}}function Uy(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new wr,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const y=s?0:i,b=y*4;let M=f.clippingState||null;c.value=M,M=u(g,h,b,p);for(let T=0;T!==b;++T)M[T]=t[T];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=p;b!==v;++b,M+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const sr=4,lf=[.125,.215,.35,.446,.526,.582],Ar=20,Fy=256,ha=new Ha,df=new Je;let vl=null,yl=0,bl=0,Ml=!1;const Oy=new k;class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Oy}=s;vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,yl,bl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Vi,format:ei,colorSpace:Us,depthBuffer:!1},r=uf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ky(s)),this._blurMaterial=zy(s,e,t),this._ggxMaterial=By(s,e,t)}return r}_compileMaterial(e){const t=new Ke(new Xt,e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,i,r,s){const c=new Kn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(df),d.toneMapping=xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new jr,new zi({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,f=!0):(m.color.copy(df),f=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const T=this._cubeSize;xs(r,M*T,b>2?T:0,T,T),d.setRenderTarget(r),f&&d.render(v,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===kr||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;xs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,p=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-sr?i-g+sr:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,xs(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,ha),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,xs(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,ha)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=l;const h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Ar;m>Ar&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const f=[];let y=0;for(let I=0;I<Ar;++I){const x=I/v,w=Math.exp(-x*x/2);f.push(w),I===0?y+=w:I<m&&(y+=2*w)}for(let I=0;I<f.length;I++)f[I]=f[I]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const M=this._sizeLods[r],T=3*M*(r>b-sr?r-b+sr:0),R=4*(this._cubeSize-M);xs(t,T,R,3*M,2*M),c.setRenderTarget(t),c.render(d,ha)}}function ky(n){const e=[],t=[],i=[];let r=n;const s=n-sr+1+lf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-sr?c=lf[a-n+sr-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*p),b=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,x=R>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];y.set(w,v*g*R),b.set(h,m*g*R);const F=[R,R,R,R,R,R];M.set(F,f*g*R)}const T=new Xt;T.setAttribute("position",new Wn(y,v)),T.setAttribute("uv",new Wn(b,m)),T.setAttribute("faceIndex",new Wn(M,f)),i.push(new Ke(T,null)),r>sr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function uf(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function By(n,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function zy(n,e,t){const i=new Float32Array(Ar),r=new k(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function ff(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function pf(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}class Cm extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jr(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:ki});s.uniforms.tEquirect.value=t;const a=new Ke(r,s),o=t.minFilter;return t.minFilter===Cr&&(t.minFilter=vn),new Yx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Hy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Wc||p===Xc)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Cm(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===Wc||p===Xc,v=p===kr||p===Ds;if(g||v){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new hf(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new hf(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Wc?h.mapping=kr:p===Xc&&(h.mapping=Ds),h}function c(h){let p=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Gy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Jo("WebGLRenderer: "+i+" extension not supported."),r}}}function Vy(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const y=p.array;v=p.version;for(let b=0,M=y.length;b<M;b+=3){const T=y[b+0],R=y[b+1],I=y[b+2];h.push(T,R,R,I,I,T)}}else{const y=g.array;v=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const T=b+0,R=b+1,I=b+2;h.push(T,R,R,I,I,T)}}const m=new(g.count>=65535?_m:xm)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Wy(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*a,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(h,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*v[y];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Xy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $y(n,e,t){const i=new WeakMap,r=new Bt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let F=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var p=F;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*R*4*d),x=new fm(I,T,R,d);x.type=Qn,x.needsUpdate=!0;const w=M*4;for(let C=0;C<d;C++){const U=f[C],z=y[C],W=b[C],B=T*R*4*C;for(let G=0;G<U.count;G++){const O=G*w;g===!0&&(r.fromBufferAttribute(U,G),I[B+O+0]=r.x,I[B+O+1]=r.y,I[B+O+2]=r.z,I[B+O+3]=0),v===!0&&(r.fromBufferAttribute(z,G),I[B+O+4]=r.x,I[B+O+5]=r.y,I[B+O+6]=r.z,I[B+O+7]=0),m===!0&&(r.fromBufferAttribute(W,G),I[B+O+8]=r.x,I[B+O+9]=r.y,I[B+O+10]=r.z,I[B+O+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:x,size:new Qe(T,R)},i.set(o,h),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Yy(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const jy={[Jp]:"LINEAR_TONE_MAPPING",[Zp]:"REINHARD_TONE_MAPPING",[Qp]:"CINEON_TONE_MAPPING",[em]:"ACES_FILMIC_TONE_MAPPING",[nm]:"AGX_TONE_MAPPING",[im]:"NEUTRAL_TONE_MAPPING",[tm]:"CUSTOM_TONE_MAPPING"};function qy(n,e,t,i,r){const s=new _i(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new _i(e,t,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),o=new Xt;o.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Dt([0,2,0,0,2,0],2));const c=new Hx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ke(o,c),u=new Ha(-1,1,1,-1,0,1);let d=null,h=null,p=!1,g,v=null,m=[],f=!1;this.setSize=function(y,b){s.setSize(y,b),a.setSize(y,b);for(let M=0;M<m.length;M++){const T=m[M];T.setSize&&T.setSize(y,b)}},this.setEffects=function(y){m=y,f=m.length>0&&m[0].isRenderPass===!0;const b=s.width,M=s.height;for(let T=0;T<m.length;T++){const R=m[T];R.setSize&&R.setSize(b,M)}},this.begin=function(y,b){if(p||y.toneMapping===xi&&m.length===0)return!1;if(v=b,b!==null){const M=b.width,T=b.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return f===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=xi,!0},this.hasRenderPass=function(){return f},this.end=function(y,b){y.toneMapping=g,p=!0;let M=s,T=a;for(let R=0;R<m.length;R++){const I=m[R];if(I.enabled!==!1&&(I.render(y,T,M,b),I.needsSwap!==!1)){const x=M;M=T,T=x}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,c.defines={},nt.getTransfer(d)===ut&&(c.defines.SRGB_TRANSFER="");const R=jy[h];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(v),y.render(l,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Im=new Tn,Wd=new Ra(1,1),Pm=new fm,Lm=new _x,Dm=new bm,mf=[],gf=[],xf=new Float32Array(16),_f=new Float32Array(9),vf=new Float32Array(4);function Js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mf[r];if(s===void 0&&(s=new Float32Array(r),mf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mc(n,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function Qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function eb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;vf.set(i),n.uniformMatrix2fv(this.addr,!1,vf),tn(t,i)}}function tb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;_f.set(i),n.uniformMatrix3fv(this.addr,!1,_f),tn(t,i)}}function nb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;xf.set(i),n.uniformMatrix4fv(this.addr,!1,xf),tn(t,i)}}function ib(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function ob(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function hb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wd.compareFunction=t.isReversedDepthBuffer()?yh:vh,s=Wd):s=Im,t.setTexture2D(e||s,r)}function ub(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lm,r)}function fb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dm,r)}function pb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pm,r)}function mb(n){switch(n){case 5126:return Ky;case 35664:return Jy;case 35665:return Zy;case 35666:return Qy;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ab;case 5125:return ob;case 36294:return cb;case 36295:return lb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(n,e){n.uniform1fv(this.addr,e)}function xb(n,e){const t=Js(e,this.size,2);n.uniform2fv(this.addr,t)}function _b(n,e){const t=Js(e,this.size,3);n.uniform3fv(this.addr,t)}function vb(n,e){const t=Js(e,this.size,4);n.uniform4fv(this.addr,t)}function yb(n,e){const t=Js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bb(n,e){const t=Js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mb(n,e){const t=Js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sb(n,e){n.uniform1iv(this.addr,e)}function wb(n,e){n.uniform2iv(this.addr,e)}function Eb(n,e){n.uniform3iv(this.addr,e)}function Tb(n,e){n.uniform4iv(this.addr,e)}function Ab(n,e){n.uniform1uiv(this.addr,e)}function Rb(n,e){n.uniform2uiv(this.addr,e)}function Cb(n,e){n.uniform3uiv(this.addr,e)}function Ib(n,e){n.uniform4uiv(this.addr,e)}function Pb(n,e,t){const i=this.cache,r=e.length,s=Mc(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Wd:a=Im;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Lb(n,e,t){const i=this.cache,r=e.length,s=Mc(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Lm,s[a])}function Db(n,e,t){const i=this.cache,r=e.length,s=Mc(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Dm,s[a])}function Nb(n,e,t){const i=this.cache,r=e.length,s=Mc(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pm,s[a])}function Ub(n){switch(n){case 5126:return gb;case 35664:return xb;case 35665:return _b;case 35666:return vb;case 35674:return yb;case 35675:return bb;case 35676:return Mb;case 5124:case 35670:return Sb;case 35667:case 35671:return wb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return Ab;case 36294:return Rb;case 36295:return Cb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Nb}}class Fb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mb(t.type)}}class Ob{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ub(t.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function yf(n,e){n.seq.push(e),n.map[e.id]=e}function Bb(n,e,t){const i=n.name,r=i.length;for(Sl.lastIndex=0;;){const s=Sl.exec(i),a=Sl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){yf(t,l===void 0?new Fb(o,n,e):new Ob(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new kb(o),yf(t,d)),t=d}}}class Bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Bb(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function bf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zb=37297;let Hb=0;function Gb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Mf=new Fe;function Vb(n){nt._getMatrix(Mf,nt.workingColorSpace,n);const e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case qo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Gb(n.getShaderSource(e),o)}else return s}function Wb(n,e){const t=Vb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Xb={[Jp]:"Linear",[Zp]:"Reinhard",[Qp]:"Cineon",[em]:"ACESFilmic",[nm]:"AgX",[im]:"Neutral",[tm]:"Custom"};function $b(n,e){const t=Xb[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wo=new k;function Yb(){nt.getLuminanceCoefficients(wo);const n=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function qb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ga(n){return n!==""}function wf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(n){return n.replace(Jb,Qb)}const Zb=new Map;function Qb(n,e){let t=Be[e];if(t===void 0){const i=Zb.get(e);if(i!==void 0)t=Be[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xd(t)}const eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(n){return n.replace(eM,tM)}function tM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Af(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const nM={[ya]:"SHADOWMAP_TYPE_PCF",[ma]:"SHADOWMAP_TYPE_VSM"};function iM(n){return nM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rM={[kr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[yc]:"ENVMAP_TYPE_CUBE_UV"};function sM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":rM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const aM={[Ds]:"ENVMAP_MODE_REFRACTION"};function oM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":aM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cM={[Kp]:"ENVMAP_BLENDING_MULTIPLY",[J0]:"ENVMAP_BLENDING_MIX",[Z0]:"ENVMAP_BLENDING_ADD"};function lM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cM[n.combine]||"ENVMAP_BLENDING_NONE"}function dM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=iM(t),l=sM(t),u=oM(t),d=lM(t),h=dM(t),p=jb(t),g=qb(s),v=r.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ga).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ga).join(`
`),f.length>0&&(f+=`
`)):(m=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),f=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Be.tonemapping_pars_fragment:"",t.toneMapping!==xi?$b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Wb("linearToOutputTexel",t.outputColorSpace),Yb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),a=Xd(a),a=wf(a,t),a=Ef(a,t),o=Xd(o),o=wf(o,t),o=Ef(o,t),a=Tf(a),o=Tf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+m+a,M=y+f+o,T=bf(r,r.VERTEX_SHADER,b),R=bf(r,r.FRAGMENT_SHADER,M);r.attachShader(v,T),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(R)||"",B=U.trim(),G=z.trim(),O=W.trim();let Z=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,R);else{const de=Sf(r,T,"vertex"),xe=Sf(r,R,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+de+`
`+xe)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(G===""||O==="")&&(K=!1);K&&(C.diagnostics={runnable:Z,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(T),r.deleteShader(R),x=new Bo(r,v),w=Kb(r,v)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(v,zb)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=R,this}let uM=0;class fM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pM(e),t.set(e,i)),i}}class pM{constructor(e){this.id=uM++,this.code=e,this.usedTimes=0}}function mM(n,e,t,i,r,s){const a=new pm,o=new fM,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,w,F,C,U){const z=C.fog,W=U.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||B,G),Z=O&&O.mapping===yc?O.image.height:null,K=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=de!==void 0?de.length:0;let pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let ke,It,At,q;if(K){const ht=hi[K];ke=ht.vertexShader,It=ht.fragmentShader}else ke=x.vertexShader,It=x.fragmentShader,o.update(x),At=o.getVertexShaderID(x),q=o.getFragmentShaderID(x);const ie=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,Pe=!!x.map,nn=!!x.matcap,tt=!!O,dt=!!x.aoMap,vt=!!x.lightMap,He=!!x.bumpMap,zt=!!x.normalMap,P=!!x.displacementMap,$t=!!x.emissiveMap,lt=!!x.metalnessMap,wt=!!x.roughnessMap,Se=x.anisotropy>0,A=x.clearcoat>0,_=x.dispersion>0,D=x.iridescence>0,j=x.sheen>0,J=x.transmission>0,Y=Se&&!!x.anisotropyMap,_e=A&&!!x.clearcoatMap,re=A&&!!x.clearcoatNormalMap,Ae=A&&!!x.clearcoatRoughnessMap,Ie=D&&!!x.iridescenceMap,Q=D&&!!x.iridescenceThicknessMap,te=j&&!!x.sheenColorMap,ve=j&&!!x.sheenRoughnessMap,be=!!x.specularMap,fe=!!x.specularColorMap,Ge=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,se=J&&!!x.thicknessMap,ne=!!x.gradientMap,ge=!!x.alphaMap,ee=x.alphaTest>0,$=!!x.alphaHash,ye=!!x.extensions;let De=xi;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(De=n.toneMapping);const Et={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:It,defines:x.defines,customVertexShaderID:At,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Us,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:nn,envMap:tt,envMapMode:tt&&O.mapping,envMapCubeUVHeight:Z,aoMap:dt,lightMap:vt,bumpMap:He,normalMap:zt,displacementMap:P,emissiveMap:$t,normalMapObjectSpace:zt&&x.normalMapType===tx,normalMapTangentSpace:zt&&x.normalMapType===hm,metalnessMap:lt,roughnessMap:wt,anisotropy:Se,anisotropyMap:Y,clearcoat:A,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:D,iridescenceMap:Ie,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:te,sheenRoughnessMap:ve,specularMap:be,specularColorMap:fe,specularIntensityMap:Ge,transmission:J,transmissionMap:L,thicknessMap:se,gradientMap:ne,opaque:x.transparent===!1&&x.blending===Cs&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:$,combine:x.combine,mapUv:Pe&&g(x.map.channel),aoMapUv:dt&&g(x.aoMap.channel),lightMapUv:vt&&g(x.lightMap.channel),bumpMapUv:He&&g(x.bumpMap.channel),normalMapUv:zt&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:$t&&g(x.emissiveMap.channel),metalnessMapUv:lt&&g(x.metalnessMap.channel),roughnessMapUv:wt&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:fe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ge&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:se&&g(x.thicknessMap.channel),alphaMapUv:ge&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(zt||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Pe||ge),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&zt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:$t&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fi,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)w.push(F),w.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(f(w,x),y(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const w=p[x.type];let F;if(w){const C=hi[w];F=kx.clone(C.uniforms)}else F=x.uniforms;return F}function M(x,w){let F=u.get(w);return F!==void 0?++F.usedTimes:(F=new hM(n,w,x,r),l.push(F),u.set(w,F)),F}function T(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function I(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:T,releaseShaderCache:R,programs:l,dispose:I}}function gM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function xM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Rf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,v,m,f){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},n[e]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=g,y.materialVariant=a(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=m,y.group=f),e++,y}function c(h,p,g,v,m,f){const y=o(h,p,g,v,m,f);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):t.push(y)}function l(h,p,g,v,m,f){const y=o(h,p,g,v,m,f);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(h,p){t.length>1&&t.sort(h||xM),i.length>1&&i.sort(p||Rf),r.length>1&&r.sort(p||Rf)}function d(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function _M(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Cf,n.set(i,[a])):r>=s.length?(a=new Cf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function vM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Je};break;case"SpotLight":t={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function yM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bM=0;function MM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SM(n){const e=new vM,t=yM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new St,a=new St;function o(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,y=0,b=0,M=0,T=0,R=0,I=0;l.sort(MM);for(let w=0,F=l.length;w<F;w++){const C=l[w],U=C.color,z=C.intensity,W=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ns?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=U.r*z,d+=U.g*z,h+=U.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],z);I++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,y++}i.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[v]=G;const O=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,O.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[v]=O.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=B,M++}v++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const O=C.shadow,Z=t.get(C);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,x.directionalLength=p,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=I,i.version=bM++)}function c(l,u){let d=0,h=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const b=l[f];if(b.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function If(n){const e=new SM(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function wM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new If(n),e.set(r,[o])):s>=a.length?(o=new If(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const EM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
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
}`,AM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],RM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Pf=new St,ua=new k,wl=new k;function CM(n,e,t){let i=new Sh;const r=new Qe,s=new Qe,a=new Bt,o=new Gx,c=new Vx,l={},u=t.maxTextureSize,d={[dr]:In,[In]:dr,[fi]:fi},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:EM,fragmentShader:TM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ke(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya;let f=this.type;this.render=function(R,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===L0&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ya);const w=n.getRenderTarget(),F=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ki),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=f!==this.type;z&&I.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=R.length;W<B;W++){const G=R[W],O=G.shadow;if(O===void 0){Le("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Z=O.getFrameExtents();r.multiply(Z),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,O.mapSize.y=s.y));const K=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=K,O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ma){if(G.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new _i(r.x,r.y,{format:Ns,type:Vi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new Ra(r.x,r.y,Qn),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=Wi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un}else G.isPointLight?(O.map=new Cm(r.x),O.map.depthTexture=new Fx(r.x,yi)):(O.map=new _i(r.x,r.y),O.map.depthTexture=new Ra(r.x,r.y,yi)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=Wi,this.type===ya?(O.map.depthTexture.compareFunction=K?yh:vh,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un);O.camera.updateProjectionMatrix()}const de=O.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<de;xe++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,xe),n.clear();else{xe===0&&(n.setRenderTarget(O.map),n.clear());const pe=O.getViewport(xe);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),U.viewport(a)}if(G.isPointLight){const pe=O.camera,ke=O.matrix,It=G.distance||pe.far;It!==pe.far&&(pe.far=It,pe.updateProjectionMatrix()),ua.setFromMatrixPosition(G.matrixWorld),pe.position.copy(ua),wl.copy(pe.position),wl.add(AM[xe]),pe.up.copy(RM[xe]),pe.lookAt(wl),pe.updateMatrixWorld(),ke.makeTranslation(-ua.x,-ua.y,-ua.z),Pf.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Pf,pe.coordinateSystem,pe.reversedDepth)}else O.updateMatrices(G);i=O.getFrustum(),M(I,x,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===ma&&y(O,x),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,F,C)};function y(R,I){const x=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _i(r.x,r.y,{format:Ns,type:Vi})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,x,h,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,x,p,v,null)}function b(R,I,x,w){let F=null;const C=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)F=C;else if(F=x.isPointLight===!0?c:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const U=F.uuid,z=I.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let B=W[z];B===void 0&&(B=F.clone(),W[z]=B,I.addEventListener("dispose",T)),F=B}if(F.visible=I.visible,F.wireframe=I.wireframe,w===ma?F.side=I.shadowSide!==null?I.shadowSide:I.side:F.side=I.shadowSide!==null?I.shadowSide:d[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,F.map=I.map,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const U=n.properties.get(F);U.light=x}return F}function M(R,I,x,w,F){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&F===ma)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);const z=e.update(R),W=R.material;if(Array.isArray(W)){const B=z.groups;for(let G=0,O=B.length;G<O;G++){const Z=B[G],K=W[Z.materialIndex];if(K&&K.visible){const de=b(R,K,w,F);R.onBeforeShadow(n,R,I,x,z,de,Z),n.renderBufferDirect(x,null,z,de,R,Z),R.onAfterShadow(n,R,I,x,z,de,Z)}}}else if(W.visible){const B=b(R,W,w,F);R.onBeforeShadow(n,R,I,x,z,B,null),n.renderBufferDirect(x,null,z,B,R,null),R.onAfterShadow(n,R,I,x,z,B,null)}}const U=R.children;for(let z=0,W=U.length;z<W;z++)M(U[z],I,x,w,F)}function T(R){R.target.removeEventListener("dispose",T);for(const x in l){const w=l[x],F=R.target.uuid;F in w&&(w[F].dispose(),delete w[F])}}}function IM(n,e){function t(){let L=!1;const se=new Bt;let ne=null;const ge=new Bt(0,0,0,0);return{setMask:function(ee){ne!==ee&&!L&&(n.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){L=ee},setClear:function(ee,$,ye,De,Et){Et===!0&&(ee*=De,$*=De,ye*=De),se.set(ee,$,ye,De),ge.equals(se)===!1&&(n.clearColor(ee,$,ye,De),ge.copy(se))},reset:function(){L=!1,ne=null,ge.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,ne=null,ge=null,ee=null;return{setReversed:function($){if(se!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),se=$;const De=ee;ee=null,this.setClear(De)}},getReversed:function(){return se},setTest:function($){$?ie(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function($){ne!==$&&!L&&(n.depthMask($),ne=$)},setFunc:function($){if(se&&($=hx[$]),ge!==$){switch($){case td:n.depthFunc(n.NEVER);break;case nd:n.depthFunc(n.ALWAYS);break;case id:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case rd:n.depthFunc(n.EQUAL);break;case sd:n.depthFunc(n.GEQUAL);break;case ad:n.depthFunc(n.GREATER);break;case od:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=$}},setLocked:function($){L=$},setClear:function($){ee!==$&&(ee=$,se&&($=1-$),n.clearDepth($))},reset:function(){L=!1,ne=null,ge=null,ee=null,se=!1}}}function r(){let L=!1,se=null,ne=null,ge=null,ee=null,$=null,ye=null,De=null,Et=null;return{setTest:function(ht){L||(ht?ie(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ht){se!==ht&&!L&&(n.stencilMask(ht),se=ht)},setFunc:function(ht,wi,Ei){(ne!==ht||ge!==wi||ee!==Ei)&&(n.stencilFunc(ht,wi,Ei),ne=ht,ge=wi,ee=Ei)},setOp:function(ht,wi,Ei){($!==ht||ye!==wi||De!==Ei)&&(n.stencilOp(ht,wi,Ei),$=ht,ye=wi,De=Ei)},setLocked:function(ht){L=ht},setClear:function(ht){Et!==ht&&(n.clearStencil(ht),Et=ht)},reset:function(){L=!1,se=null,ne=null,ge=null,ee=null,$=null,ye=null,De=null,Et=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,b=null,M=null,T=null,R=null,I=new Je(0,0,0),x=0,w=!1,F=null,C=null,U=null,z=null,W=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=O>=2);let K=null,de={};const xe=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),ke=new Bt().fromArray(xe),It=new Bt().fromArray(pe);function At(L,se,ne,ge){const ee=new Uint8Array(4),$=n.createTexture();n.bindTexture(L,$),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<ne;ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(se+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return $}const q={};q[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Ls),He(!1),zt(Cu),ie(n.CULL_FACE),dt(ki);function ie(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ae(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ue(L,se){return d[L]!==se?(n.bindFramebuffer(L,se),d[L]=se,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(L,se){let ne=p,ge=!1;if(L){ne=h.get(se),ne===void 0&&(ne=[],h.set(se,ne));const ee=L.textures;if(ne.length!==ee.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let $=0,ye=ee.length;$<ye;$++)ne[$]=n.COLOR_ATTACHMENT0+$;ne.length=ee.length,ge=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ne)}function Pe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const nn={[Tr]:n.FUNC_ADD,[N0]:n.FUNC_SUBTRACT,[U0]:n.FUNC_REVERSE_SUBTRACT};nn[F0]=n.MIN,nn[O0]=n.MAX;const tt={[k0]:n.ZERO,[B0]:n.ONE,[z0]:n.SRC_COLOR,[Ql]:n.SRC_ALPHA,[$0]:n.SRC_ALPHA_SATURATE,[W0]:n.DST_COLOR,[G0]:n.DST_ALPHA,[H0]:n.ONE_MINUS_SRC_COLOR,[ed]:n.ONE_MINUS_SRC_ALPHA,[X0]:n.ONE_MINUS_DST_COLOR,[V0]:n.ONE_MINUS_DST_ALPHA,[Y0]:n.CONSTANT_COLOR,[j0]:n.ONE_MINUS_CONSTANT_COLOR,[q0]:n.CONSTANT_ALPHA,[K0]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(L,se,ne,ge,ee,$,ye,De,Et,ht){if(L===ki){v===!0&&(ae(n.BLEND),v=!1);return}if(v===!1&&(ie(n.BLEND),v=!0),L!==D0){if(L!==m||ht!==w){if((f!==Tr||M!==Tr)&&(n.blendEquation(n.FUNC_ADD),f=Tr,M=Tr),ht)switch(L){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iu:n.blendFunc(n.ONE,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pu:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,R=null,I.set(0,0,0),x=0,m=L,w=ht}return}ee=ee||se,$=$||ne,ye=ye||ge,(se!==f||ee!==M)&&(n.blendEquationSeparate(nn[se],nn[ee]),f=se,M=ee),(ne!==y||ge!==b||$!==T||ye!==R)&&(n.blendFuncSeparate(tt[ne],tt[ge],tt[$],tt[ye]),y=ne,b=ge,T=$,R=ye),(De.equals(I)===!1||Et!==x)&&(n.blendColor(De.r,De.g,De.b,Et),I.copy(De),x=Et),m=L,w=!1}function vt(L,se){L.side===fi?ae(n.CULL_FACE):ie(n.CULL_FACE);let ne=L.side===In;se&&(ne=!ne),He(ne),L.blending===Cs&&L.transparent===!1?dt(ki):dt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){F!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),F=L)}function zt(L){L!==I0?(ie(n.CULL_FACE),L!==C&&(L===Cu?n.cullFace(n.BACK):L===P0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),C=L}function P(L){L!==U&&(G&&n.lineWidth(L),U=L)}function $t(L,se,ne){L?(ie(n.POLYGON_OFFSET_FILL),(z!==se||W!==ne)&&(z=se,W=ne,a.getReversed()&&(se=-se),n.polygonOffset(se,ne))):ae(n.POLYGON_OFFSET_FILL)}function lt(L){L?ie(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function wt(L){L===void 0&&(L=n.TEXTURE0+B-1),K!==L&&(n.activeTexture(L),K=L)}function Se(L,se,ne){ne===void 0&&(K===null?ne=n.TEXTURE0+B-1:ne=K);let ge=de[ne];ge===void 0&&(ge={type:void 0,texture:void 0},de[ne]=ge),(ge.type!==L||ge.texture!==se)&&(K!==ne&&(n.activeTexture(ne),K=ne),n.bindTexture(L,se||q[L]),ge.type=L,ge.texture=se)}function A(){const L=de[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){at("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){at("WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){at("WebGLState:",L)}}function J(){try{n.texSubImage3D(...arguments)}catch(L){at("WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){at("WebGLState:",L)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(L){at("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){at("WebGLState:",L)}}function Ae(){try{n.texStorage3D(...arguments)}catch(L){at("WebGLState:",L)}}function Ie(){try{n.texImage2D(...arguments)}catch(L){at("WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){at("WebGLState:",L)}}function te(L){ke.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function ve(L){It.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),It.copy(L))}function be(L,se){let ne=l.get(se);ne===void 0&&(ne=new WeakMap,l.set(se,ne));let ge=ne.get(L);ge===void 0&&(ge=n.getUniformBlockIndex(se,L.name),ne.set(L,ge))}function fe(L,se){const ge=l.get(se).get(L);c.get(se)!==ge&&(n.uniformBlockBinding(se,ge,L.__bindingPointIndex),c.set(se,ge))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,de={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,b=null,M=null,T=null,R=null,I=new Je(0,0,0),x=0,w=!1,F=null,C=null,U=null,z=null,W=null,ke.set(0,0,n.canvas.width,n.canvas.height),It.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ae,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Pe,setBlending:dt,setMaterial:vt,setFlipSided:He,setCullFace:zt,setLineWidth:P,setPolygonOffset:$t,setScissorTest:lt,activeTexture:wt,bindTexture:Se,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ie,texImage3D:Q,updateUBOMapping:be,uniformBlockBinding:fe,texStorage2D:re,texStorage3D:Ae,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:te,viewport:ve,reset:Ge}}function PM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):Ko("canvas")}function v(A,_,D){let j=1;const J=Se(A);if((J.width>D||J.height>D)&&(j=D/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(j*J.width),_e=Math.floor(j*J.height);d===void 0&&(d=g(Y,_e));const re=_?g(Y,_e):d;return re.width=Y,re.height=_e,re.getContext("2d").drawImage(A,0,0,Y,_e),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+_e+")."),re}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,_,D,j,J=!1){if(A!==null){if(n[A]!==void 0)return n[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=_;if(_===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),_===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const _e=J?qo:nt.getTransfer(j);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=_e===ut?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(A,_){let D;return A?_===null||_===yi||_===Ta?D=n.DEPTH24_STENCIL8:_===Qn?D=n.DEPTH32F_STENCIL8:_===Ea&&(D=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yi||_===Ta?D=n.DEPTH_COMPONENT24:_===Qn?D=n.DEPTH_COMPONENT32F:_===Ea&&(D=n.DEPTH_COMPONENT16),D}function T(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==vn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),x(_),_.isVideoTexture&&u.delete(_)}function I(A){const _=A.target;_.removeEventListener("dispose",I),F(_)}function x(A){const _=i.get(A);if(_.__webglInit===void 0)return;const D=A.source,j=h.get(D);if(j){const J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(A),Object.keys(j).length===0&&h.delete(D)}i.remove(A)}function w(A){const _=i.get(A);n.deleteTexture(_.__webglTexture);const D=A.source,j=h.get(D);delete j[_.__cacheKey],a.memory.textures--}function F(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let J=0;J<_.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[j][J]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=A.textures;for(let j=0,J=D.length;j<J;j++){const Y=i.get(D[j]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[j])}i.remove(A)}let C=0;function U(){C=0}function z(){const A=C;return A>=r.maxTextures&&Le("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),C+=1,A}function W(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function B(A,_){const D=i.get(A);if(A.isVideoTexture&&lt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&D.__version!==A.version){const j=A.image;if(j===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,A,_);return}}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function G(A,_){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){q(D,A,_);return}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function O(A,_){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){q(D,A,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function Z(A,_){const D=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&D.__version!==A.version){ie(D,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const K={[cd]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[ld]:n.MIRRORED_REPEAT},de={[un]:n.NEAREST,[Q0]:n.NEAREST_MIPMAP_NEAREST,[Qa]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[$c]:n.LINEAR_MIPMAP_NEAREST,[Cr]:n.LINEAR_MIPMAP_LINEAR},xe={[nx]:n.NEVER,[ox]:n.ALWAYS,[ix]:n.LESS,[vh]:n.LEQUAL,[rx]:n.EQUAL,[yh]:n.GEQUAL,[sx]:n.GREATER,[ax]:n.NOTEQUAL};function pe(A,_){if(_.type===Qn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===vn||_.magFilter===$c||_.magFilter===Qa||_.magFilter===Cr||_.minFilter===vn||_.minFilter===$c||_.minFilter===Qa||_.minFilter===Cr)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,K[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,K[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,K[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===un||_.minFilter!==Qa&&_.minFilter!==Cr||_.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ke(A,_){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const j=_.source;let J=h.get(j);J===void 0&&(J={},h.set(j,J));const Y=W(_);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[Y].usedTimes++;const _e=J[A.__cacheKey];_e!==void 0&&(J[A.__cacheKey].usedTimes--,_e.usedTimes===0&&w(_)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return D}function It(A,_,D){return Math.floor(Math.floor(A/D)/_)}function At(A,_,D,j){const Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,D,j,_.data);else{Y.sort((Q,te)=>Q.start-te.start);let _e=0;for(let Q=1;Q<Y.length;Q++){const te=Y[_e],ve=Y[Q],be=te.start+te.count,fe=It(ve.start,_.width,4),Ge=It(te.start,_.width,4);ve.start<=be+1&&fe===Ge&&It(ve.start+ve.count-1,_.width,4)===fe?te.count=Math.max(te.count,ve.start+ve.count-te.start):(++_e,Y[_e]=ve)}Y.length=_e+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Q=0,te=Y.length;Q<te;Q++){const ve=Y[Q],be=Math.floor(ve.start/4),fe=Math.ceil(ve.count/4),Ge=be%_.width,L=Math.floor(be/_.width),se=fe,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ge,L,se,ne,D,j,_.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function q(A,_,D){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const J=ke(A,_),Y=_.source;t.bindTexture(j,A.__webglTexture,n.TEXTURE0+D);const _e=i.get(Y);if(Y.version!==_e.__version||J===!0){t.activeTexture(n.TEXTURE0+D);const re=nt.getPrimaries(nt.workingColorSpace),Ae=_.colorSpace===rr?null:nt.getPrimaries(_.colorSpace),Ie=_.colorSpace===rr||re===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Q=v(_.image,!1,r.maxTextureSize);Q=wt(_,Q);const te=s.convert(_.format,_.colorSpace),ve=s.convert(_.type);let be=b(_.internalFormat,te,ve,_.colorSpace,_.isVideoTexture);pe(j,_);let fe;const Ge=_.mipmaps,L=_.isVideoTexture!==!0,se=_e.__version===void 0||J===!0,ne=Y.dataReady,ge=T(_,Q);if(_.isDepthTexture)be=M(_.format===Ir,_.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,be,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,te,ve,null));else if(_.isDataTexture)if(Ge.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,ge,be,Ge[0].width,Ge[0].height);for(let ee=0,$=Ge.length;ee<$;ee++)fe=Ge[ee],L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,fe.width,fe.height,te,ve,fe.data):t.texImage2D(n.TEXTURE_2D,ee,be,fe.width,fe.height,0,te,ve,fe.data);_.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,ge,be,Q.width,Q.height),ne&&At(_,Q,te,ve)):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,te,ve,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,be,Ge[0].width,Ge[0].height,Q.depth);for(let ee=0,$=Ge.length;ee<$;ee++)if(fe=Ge[ee],_.format!==ei)if(te!==null)if(L){if(ne)if(_.layerUpdates.size>0){const ye=cf(fe.width,fe.height,_.format,_.type);for(const De of _.layerUpdates){const Et=fe.data.subarray(De*ye/fe.data.BYTES_PER_ELEMENT,(De+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,De,fe.width,fe.height,1,te,Et)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,Q.depth,te,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,be,fe.width,fe.height,Q.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,Q.depth,te,ve,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,be,fe.width,fe.height,Q.depth,0,te,ve,fe.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,ge,be,Ge[0].width,Ge[0].height);for(let ee=0,$=Ge.length;ee<$;ee++)fe=Ge[ee],_.format!==ei?te!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,fe.width,fe.height,te,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,be,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,fe.width,fe.height,te,ve,fe.data):t.texImage2D(n.TEXTURE_2D,ee,be,fe.width,fe.height,0,te,ve,fe.data)}else if(_.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,be,Q.width,Q.height,Q.depth),ne)if(_.layerUpdates.size>0){const ee=cf(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const ye=Q.data.subarray($*ee/Q.data.BYTES_PER_ELEMENT,($+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,te,ve,ye)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,te,ve,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Q.width,Q.height,Q.depth,0,te,ve,Q.data);else if(_.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,ge,be,Q.width,Q.height,Q.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,te,ve,Q.data)):t.texImage3D(n.TEXTURE_3D,0,be,Q.width,Q.height,Q.depth,0,te,ve,Q.data);else if(_.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,ge,be,Q.width,Q.height);else{let ee=Q.width,$=Q.height;for(let ye=0;ye<ge;ye++)t.texImage2D(n.TEXTURE_2D,ye,be,ee,$,0,te,ve,null),ee>>=1,$>>=1}}else if(Ge.length>0){if(L&&se){const ee=Se(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ge,be,ee.width,ee.height)}for(let ee=0,$=Ge.length;ee<$;ee++)fe=Ge[ee],L?ne&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,te,ve,fe):t.texImage2D(n.TEXTURE_2D,ee,be,te,ve,fe);_.generateMipmaps=!1}else if(L){if(se){const ee=Se(Q);t.texStorage2D(n.TEXTURE_2D,ge,be,ee.width,ee.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,ve,Q)}else t.texImage2D(n.TEXTURE_2D,0,be,te,ve,Q);m(_)&&f(j),_e.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ie(A,_,D){if(_.image.length!==6)return;const j=ke(A,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+D);const Y=i.get(J);if(J.version!==Y.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const _e=nt.getPrimaries(nt.workingColorSpace),re=_.colorSpace===rr?null:nt.getPrimaries(_.colorSpace),Ae=_.colorSpace===rr||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,te=[];for(let $=0;$<6;$++)!Ie&&!Q?te[$]=v(_.image[$],!0,r.maxCubemapSize):te[$]=Q?_.image[$].image:_.image[$],te[$]=wt(_,te[$]);const ve=te[0],be=s.convert(_.format,_.colorSpace),fe=s.convert(_.type),Ge=b(_.internalFormat,be,fe,_.colorSpace),L=_.isVideoTexture!==!0,se=Y.__version===void 0||j===!0,ne=J.dataReady;let ge=T(_,ve);pe(n.TEXTURE_CUBE_MAP,_);let ee;if(Ie){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ge,ve.width,ve.height);for(let $=0;$<6;$++){ee=te[$].mipmaps;for(let ye=0;ye<ee.length;ye++){const De=ee[ye];_.format!==ei?be!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ge,De.width,De.height,0,De.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,De.width,De.height,be,fe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ge,De.width,De.height,0,be,fe,De.data)}}}else{if(ee=_.mipmaps,L&&se){ee.length>0&&ge++;const $=Se(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(Q){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,te[$].width,te[$].height,be,fe,te[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,te[$].width,te[$].height,0,be,fe,te[$].data);for(let ye=0;ye<ee.length;ye++){const Et=ee[ye].image[$].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Et.width,Et.height,be,fe,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ge,Et.width,Et.height,0,be,fe,Et.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,fe,te[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,be,fe,te[$]);for(let ye=0;ye<ee.length;ye++){const De=ee[ye];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,be,fe,De.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ge,be,fe,De.image[$])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),Y.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ae(A,_,D,j,J,Y){const _e=s.convert(D.format,D.colorSpace),re=s.convert(D.type),Ae=b(D.internalFormat,_e,re,D.colorSpace),Ie=i.get(_),Q=i.get(D);if(Q.__renderTarget=_,!Ie.__hasExternalTextures){const te=Math.max(1,_.width>>Y),ve=Math.max(1,_.height>>Y);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,Ae,te,ve,_.depth,0,_e,re,null):t.texImage2D(J,Y,Ae,te,ve,0,_e,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),$t(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,Q.__webglTexture,0,P(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,Q.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(A,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){const j=_.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=M(_.stencilBuffer,J),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$t(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Y,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,A)}else{const j=_.textures;for(let J=0;J<j.length;J++){const Y=j[J],_e=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),Ae=b(Y.internalFormat,_e,re,Y.colorSpace);$t(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Ae,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(A,_,D){const j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),pe(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ie=s.convert(_.depthTexture.format),Q=s.convert(_.depthTexture.type);let te;_.depthTexture.format===Wi?te=n.DEPTH_COMPONENT24:_.depthTexture.format===Ir&&(te=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,te,_.width,_.height,0,Ie,Q,null)}}else B(_.depthTexture,0);const Y=J.__webglTexture,_e=P(_),re=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Ae=_.depthTexture.format===Ir?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wi)$t(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,re,Y,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,re,Y,0);else if(_.depthTexture.format===Ir)$t(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,re,Y,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,re,Y,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const _=i.get(A),D=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=j}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)Re(_.__webglFramebuffer[j],A,j);else{const j=A.texture.mipmaps;j&&j.length>0?Re(_.__webglFramebuffer[0],A,0):Re(_.__webglFramebuffer,A,0)}else if(D){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[j],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nn(A,_,D){const j=i.get(A);_!==void 0&&ae(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Pe(A)}function tt(A){const _=A.texture,D=i.get(A),j=i.get(_);A.addEventListener("dispose",I);const J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)D.__webglFramebuffer[re][Ae]=n.createFramebuffer()}else D.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)D.__webglFramebuffer[re]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(_e)for(let re=0,Ae=J.length;re<Ae;re++){const Ie=i.get(J[re]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&$t(A)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const Ae=J[re];D.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Ie=s.convert(Ae.format,Ae.colorSpace),Q=s.convert(Ae.type),te=b(Ae.internalFormat,Ie,Q,Ae.colorSpace,A.isXRRenderTarget===!0),ve=P(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,te,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,D.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),pe(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(D.__webglFramebuffer[re][Ae],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae);else ae(D.__webglFramebuffer[re],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,Ae=J.length;re<Ae;re++){const Ie=J[re],Q=i.get(Ie);let te=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,Q.__webglTexture),pe(te,Ie),ae(D.__webglFramebuffer,A,Ie,n.COLOR_ATTACHMENT0+re,te,0),m(Ie)&&f(te)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),pe(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ae(D.__webglFramebuffer[Ae],A,_,n.COLOR_ATTACHMENT0,re,Ae);else ae(D.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,re,0);m(_)&&f(re),t.unbindTexture()}A.depthBuffer&&Pe(A)}function dt(A){const _=A.textures;for(let D=0,j=_.length;D<j;D++){const J=_[D];if(m(J)){const Y=y(A),_e=i.get(J).__webglTexture;t.bindTexture(Y,_e),f(Y),t.unbindTexture()}}}const vt=[],He=[];function zt(A){if(A.samples>0){if($t(A)===!1){const _=A.textures,D=A.width,j=A.height;let J=n.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(A),re=_.length>1;if(re)for(let Ie=0;Ie<_.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<_.length;Ie++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const Q=i.get(_[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,D,j,0,0,D,j,J,n.NEAREST),c===!0&&(vt.length=0,He.length=0,vt.push(n.COLOR_ATTACHMENT0+Ie),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(Y),He.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ie=0;Ie<_.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const Q=i.get(_[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(A){return Math.min(r.maxSamples,A.samples)}function $t(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function lt(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function wt(A,_){const D=A.colorSpace,j=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==Us&&D!==rr&&(nt.getTransfer(D)===ut?(j!==ei||J!==On)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",D)),_}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=nn,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LM(n,e){function t(i,r=rr){let s;const a=nt.getTransfer(r);if(i===On)return n.UNSIGNED_BYTE;if(i===fh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ph)return n.UNSIGNED_SHORT_5_5_5_1;if(i===om)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sm)return n.BYTE;if(i===am)return n.SHORT;if(i===Ea)return n.UNSIGNED_SHORT;if(i===uh)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===Vi)return n.HALF_FLOAT;if(i===lm)return n.ALPHA;if(i===dm)return n.RGB;if(i===ei)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===mh)return n.RED;if(i===gh)return n.RED_INTEGER;if(i===Ns)return n.RG;if(i===xh)return n.RG_INTEGER;if(i===_h)return n.RGBA_INTEGER;if(i===No||i===Uo||i===Fo||i===Oo)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dd||i===hd||i===ud||i===fd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ud)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pd||i===md||i===gd||i===xd||i===_d||i===vd||i===yd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pd||i===md)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xd)return s.COMPRESSED_R11_EAC;if(i===_d)return s.COMPRESSED_SIGNED_R11_EAC;if(i===vd)return s.COMPRESSED_RG11_EAC;if(i===yd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bd||i===Md||i===Sd||i===wd||i===Ed||i===Td||i===Ad||i===Rd||i===Cd||i===Id||i===Pd||i===Ld||i===Dd||i===Nd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Md)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ed)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Td)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ad)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ld)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ud||i===Fd||i===Od)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ud)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kd||i===Bd||i===zd||i===Hd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const DM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NM=`
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

}`;class UM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mi({vertexShader:DM,fragmentShader:NM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FM extends js{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new UM,f={},y=t.getContextAttributes();let b=null,M=null;const T=[],R=[],I=new Qe;let x=null;const w=new Kn;w.viewport=new Bt;const F=new Kn;F.viewport=new Bt;const C=[w,F],U=new jx;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=T[q];return ie===void 0&&(ie=new el,T[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=T[q];return ie===void 0&&(ie=new el,T[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=T[q];return ie===void 0&&(ie=new el,T[q]=ie),ie.getHandSpace()};function B(q){const ie=R.indexOf(q.inputSource);if(ie===-1)return;const ae=T[ie];ae!==void 0&&(ae.update(q.inputSource,q.frame,l||a),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",O);for(let q=0;q<T.length;q++){const ie=R[q];ie!==null&&(R[q]=null,T[q].disconnect(ie))}z=null,W=null,m.reset();for(const q in f)delete f[q];e.setRenderTarget(b),p=null,h=null,d=null,r=null,M=null,At.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",G),r.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ue=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?Ir:Wi,Ue=y.stencil?Ta:yi);const Pe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new _i(h.textureWidth,h.textureHeight,{format:ei,type:On,depthTexture:new Ra(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new _i(p.framebufferWidth,p.framebufferHeight,{format:ei,type:On,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),At.setContext(r),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(q){for(let ie=0;ie<q.removed.length;ie++){const ae=q.removed[ie],Ue=R.indexOf(ae);Ue>=0&&(R[Ue]=null,T[Ue].disconnect(ae))}for(let ie=0;ie<q.added.length;ie++){const ae=q.added[ie];let Ue=R.indexOf(ae);if(Ue===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=R.length){R.push(ae),Ue=Pe;break}else if(R[Pe]===null){R[Pe]=ae,Ue=Pe;break}if(Ue===-1)break}const Re=T[Ue];Re&&Re.connect(ae)}}const Z=new k,K=new k;function de(q,ie,ae){Z.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const Ue=Z.distanceTo(K),Re=ie.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,nn=Re[14]/(Re[10]-1),tt=Re[14]/(Re[10]+1),dt=(Re[9]+1)/Re[5],vt=(Re[9]-1)/Re[5],He=(Re[8]-1)/Re[0],zt=(Pe[8]+1)/Pe[0],P=nn*He,$t=nn*zt,lt=Ue/(-He+zt),wt=lt*-He;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(wt),q.translateZ(lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Se=nn+lt,A=tt+lt,_=P-wt,D=$t+(Ue-wt),j=dt*tt/A*Se,J=vt*tt/A*Se;q.projectionMatrix.makePerspective(_,D,j,J,Se,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function xe(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ie=q.near,ae=q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),U.near=F.near=w.near=ie,U.far=F.far=w.far=ae,(z!==U.near||W!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,W=U.far),U.layers.mask=q.layers.mask|6,w.layers.mask=U.layers.mask&-5,F.layers.mask=U.layers.mask&-3;const Ue=q.parent,Re=U.cameras;xe(U,Ue);for(let Pe=0;Pe<Re.length;Pe++)xe(Re[Pe],Ue);Re.length===2?de(U,w,F):U.projectionMatrix.copy(w.projectionMatrix),pe(q,U,Ue)};function pe(q,ie,ae){ae===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return f[q]};let ke=null;function It(q,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ue=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,Ue=!0);for(let tt=0;tt<ae.length;tt++){const dt=ae[tt];let vt=null;if(p!==null)vt=p.getViewport(dt);else{const zt=d.getViewSubImage(h,dt);vt=zt.viewport,tt===0&&(e.setRenderTargetTextures(M,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(M))}let He=C[tt];He===void 0&&(He=new Kn,He.layers.enable(tt),He.viewport=new Bt,C[tt]=He),He.matrix.fromArray(dt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(dt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(vt.x,vt.y,vt.width,vt.height),tt===0&&(U.matrix.copy(He.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ue===!0&&U.cameras.push(He)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const tt=d.getDepthInformation(ae[0]);tt&&tt.isValid&&tt.texture&&m.init(tt,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let tt=0;tt<ae.length;tt++){const dt=ae[tt].camera;if(dt){let vt=f[dt];vt||(vt=new Mm,f[dt]=vt);const He=d.getCameraImage(dt);vt.sourceTexture=He}}}}for(let ae=0;ae<T.length;ae++){const Ue=R[ae],Re=T[ae];Ue!==null&&Re!==void 0&&Re.update(Ue,ie,l||a)}ke&&ke(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const At=new Rm;At.setAnimationLoop(It),this.setAnimationLoop=function(q){ke=q},this.dispose=function(){}}}const Sr=new bi,OM=new St;function kM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Sm(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,b,M){f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===In&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===In&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,Sr.copy(M),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),m.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Sr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===In&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const M=b.program;i.uniformBlockBinding(y,M)}function l(y,b){let M=r[y.id];M===void 0&&(g(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",m));const T=b.program;i.updateUBOMapping(y,T);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const b=d();y.__bindingPointIndex=b;const M=n.createBuffer(),T=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=r[y.id],M=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,I=M.length;R<I;R++){const x=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,F=x.length;w<F;w++){const C=x[w];if(p(C,R,w,T)===!0){const U=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let B=0;B<z.length;B++){const G=z[B],O=v(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,M,T){const R=y.value,I=b+"_"+M;if(T[I]===void 0)return typeof R=="number"||typeof R=="boolean"?T[I]=R:T[I]=R.clone(),!0;{const x=T[I];if(typeof R=="number"||typeof R=="boolean"){if(x!==R)return T[I]=R,!0}else if(x.equals(R)===!1)return x.copy(R),!0}return!1}function g(y){const b=y.uniforms;let M=0;const T=16;for(let I=0,x=b.length;I<x;I++){const w=Array.isArray(b[I])?b[I]:[b[I]];for(let F=0,C=w.length;F<C;F++){const U=w[F],z=Array.isArray(U.value)?U.value:[U.value];for(let W=0,B=z.length;W<B;W++){const G=z[W],O=v(G),Z=M%T,K=Z%O.boundary,de=Z+K;M+=K,de!==0&&T-de<O.storage&&(M+=T-de),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=O.storage}}}const R=M%T;return R>0&&(M+=T-R),y.__size=M,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const zM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function HM(){return li===null&&(li=new ym(zM,16,16,Ns,Vi),li.name="DFG_LUT",li.minFilter=vn,li.magFilter=vn,li.wrapS=Ni,li.wrapT=Ni,li.generateMipmaps=!1,li.needsUpdate=!0),li}class GM{constructor(e={}){const{canvas:t=lx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=On}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=p,m=new Set([_h,xh,gh]),f=new Set([On,yi,Ea,Ta,fh,ph]),y=new Uint32Array(4),b=new Int32Array(4);let M=null,T=null;const R=[],I=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=Un;let C=0,U=0,z=null,W=-1,B=null;const G=new Bt,O=new Bt;let Z=null;const K=new Je(0);let de=0,xe=t.width,pe=t.height,ke=1,It=null,At=null;const q=new Bt(0,0,xe,pe),ie=new Bt(0,0,xe,pe);let ae=!1;const Ue=new Sh;let Re=!1,Pe=!1;const nn=new St,tt=new k,dt=new Bt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function zt(){return z===null?ke:1}let P=i;function $t(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hh}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Et,!1),P===null){const N="webgl2";if(P=$t(N,S),P===null)throw $t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw at("WebGLRenderer: "+S.message),S}let lt,wt,Se,A,_,D,j,J,Y,_e,re,Ae,Ie,Q,te,ve,be,fe,Ge,L,se,ne,ge;function ee(){lt=new Gy(P),lt.init(),se=new LM(P,lt),wt=new Ny(P,lt,e,se),Se=new IM(P,lt),wt.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),A=new Xy(P),_=new gM,D=new PM(P,lt,Se,_,wt,se,A),j=new Hy(w),J=new Kx(P),ne=new Ly(P,J),Y=new Vy(P,J,A,ne),_e=new Yy(P,Y,J,ne,A),fe=new $y(P,wt,D),te=new Uy(_),re=new mM(w,j,lt,wt,ne,te),Ae=new kM(w,_),Ie=new _M,Q=new wM(lt),be=new Py(w,j,Se,_e,g,c),ve=new CM(w,_e,wt),ge=new BM(P,A,wt,Se),Ge=new Dy(P,lt,A),L=new Wy(P,lt,A),A.programs=re.programs,w.capabilities=wt,w.extensions=lt,w.properties=_,w.renderLists=Ie,w.shadowMap=ve,w.state=Se,w.info=A}ee(),v!==On&&(x=new qy(v,t.width,t.height,r,s));const $=new FM(w,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=lt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=lt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(S){S!==void 0&&(ke=S,this.setSize(xe,pe,!1))},this.getSize=function(S){return S.set(xe,pe)},this.setSize=function(S,N,X=!0){if($.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=S,pe=N,t.width=Math.floor(S*ke),t.height=Math.floor(N*ke),X===!0&&(t.style.width=S+"px",t.style.height=N+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(xe*ke,pe*ke).floor()},this.setDrawingBufferSize=function(S,N,X){xe=S,pe=N,ke=X,t.width=Math.floor(S*X),t.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(v===On){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,N,X,V){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,N,X,V),Se.viewport(G.copy(q).multiplyScalar(ke).round())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,N,X,V){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,N,X,V),Se.scissor(O.copy(ie).multiplyScalar(ke).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){Se.setScissorTest(ae=S)},this.setOpaqueSort=function(S){It=S},this.setTransparentSort=function(S){At=S},this.getClearColor=function(S){return S.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let V=0;if(S){let H=!1;if(z!==null){const ce=z.texture.format;H=m.has(ce)}if(H){const ce=z.texture.type,me=f.has(ce),le=be.getClearColor(),Me=be.getClearAlpha(),Ee=le.r,Ne=le.g,Ve=le.b;me?(y[0]=Ee,y[1]=Ne,y[2]=Ve,y[3]=Me,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=Ee,b[1]=Ne,b[2]=Ve,b[3]=Me,P.clearBufferiv(P.COLOR,0,b))}else V|=P.COLOR_BUFFER_BIT}N&&(V|=P.DEPTH_BUFFER_BIT),X&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),be.dispose(),Ie.dispose(),Q.dispose(),_.dispose(),j.dispose(),_e.dispose(),ne.dispose(),ge.dispose(),re.dispose(),$.dispose(),$.removeEventListener("sessionstart",bu),$.removeEventListener("sessionend",Mu),gr.stop()};function ye(S){S.preventDefault(),ku("WebGLRenderer: Context Lost."),F=!0}function De(){ku("WebGLRenderer: Context Restored."),F=!1;const S=A.autoReset,N=ve.enabled,X=ve.autoUpdate,V=ve.needsUpdate,H=ve.type;ee(),A.autoReset=S,ve.enabled=N,ve.autoUpdate=X,ve.needsUpdate=V,ve.type=H}function Et(S){at("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ht(S){const N=S.target;N.removeEventListener("dispose",ht),wi(N)}function wi(S){Ei(S),_.remove(S)}function Ei(S){const N=_.get(S).programs;N!==void 0&&(N.forEach(function(X){re.releaseProgram(X)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,V,H,ce){N===null&&(N=vt);const me=H.isMesh&&H.matrixWorld.determinant()<0,le=w0(S,N,X,V,H);Se.setMaterial(V,me);let Me=X.index,Ee=1;if(V.wireframe===!0){if(Me=Y.getWireframeAttribute(X),Me===void 0)return;Ee=2}const Ne=X.drawRange,Ve=X.attributes.position;let Te=Ne.start*Ee,mt=(Ne.start+Ne.count)*Ee;ce!==null&&(Te=Math.max(Te,ce.start*Ee),mt=Math.min(mt,(ce.start+ce.count)*Ee)),Me!==null?(Te=Math.max(Te,0),mt=Math.min(mt,Me.count)):Ve!=null&&(Te=Math.max(Te,0),mt=Math.min(mt,Ve.count));const Ht=mt-Te;if(Ht<0||Ht===1/0)return;ne.setup(H,V,le,X,Me);let Ft,gt=Ge;if(Me!==null&&(Ft=J.get(Me),gt=L,gt.setIndex(Ft)),H.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*zt()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(H.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),Se.setLineWidth(pn*zt()),H.isLineSegments?gt.setMode(P.LINES):H.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else H.isPoints?gt.setMode(P.POINTS):H.isSprite&&gt.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const pn=H._multiDrawStarts,we=H._multiDrawCounts,Ln=H._multiDrawCount,st=Me?J.get(Me).bytesPerElement:1,$n=_.get(V).currentProgram.getUniforms();for(let oi=0;oi<Ln;oi++)$n.setValue(P,"_gl_DrawID",oi),gt.render(pn[oi]/st,we[oi])}else if(H.isInstancedMesh)gt.renderInstances(Te,Ht,H.count);else if(X.isInstancedBufferGeometry){const pn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,we=Math.min(X.instanceCount,pn);gt.renderInstances(Te,Ht,we)}else gt.render(Te,Ht)};function yu(S,N,X){S.transparent===!0&&S.side===fi&&S.forceSinglePass===!1?(S.side=In,S.needsUpdate=!0,Za(S,N,X),S.side=dr,S.needsUpdate=!0,Za(S,N,X),S.side=fi):Za(S,N,X)}this.compile=function(S,N,X=null){X===null&&(X=S),T=Q.get(X),T.init(N),I.push(T),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ce=H.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const le=ce[me];yu(le,X,H),V.add(le)}else yu(ce,X,H),V.add(ce)}),T=I.pop(),V},this.compileAsync=function(S,N,X=null){const V=this.compile(S,N,X);return new Promise(H=>{function ce(){if(V.forEach(function(me){_.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){H(S);return}setTimeout(ce,10)}lt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Gc=null;function S0(S){Gc&&Gc(S)}function bu(){gr.stop()}function Mu(){gr.start()}const gr=new Rm;gr.setAnimationLoop(S0),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(S){Gc=S,$.setAnimationLoop(S),S===null?gr.stop():gr.start()},$.addEventListener("sessionstart",bu),$.addEventListener("sessionend",Mu),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const X=$.enabled===!0&&$.isPresenting===!0,V=x!==null&&(z===null||X)&&x.begin(w,z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,N,z),T=Q.get(S,I.length),T.init(N),I.push(T),nn.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(nn,pi,N.reversedDepth),Pe=this.localClippingEnabled,Re=te.init(this.clippingPlanes,Pe),M=Ie.get(S,R.length),M.init(),R.push(M),$.enabled===!0&&$.isPresenting===!0){const me=w.xr.getDepthSensingMesh();me!==null&&Vc(me,N,-1/0,w.sortObjects)}Vc(S,N,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(It,At),He=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,He&&be.addToRenderList(M,S),this.info.render.frame++,Re===!0&&te.beginShadows();const H=T.state.shadowsArray;if(ve.render(H,S,N),Re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&x.hasRenderPass())===!1){const me=M.opaque,le=M.transmissive;if(T.setupLights(),N.isArrayCamera){const Me=N.cameras;if(le.length>0)for(let Ee=0,Ne=Me.length;Ee<Ne;Ee++){const Ve=Me[Ee];wu(me,le,S,Ve)}He&&be.render(S);for(let Ee=0,Ne=Me.length;Ee<Ne;Ee++){const Ve=Me[Ee];Su(M,S,Ve,Ve.viewport)}}else le.length>0&&wu(me,le,S,N),He&&be.render(S),Su(M,S,N)}z!==null&&U===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),V&&x.end(w),S.isScene===!0&&S.onAfterRender(w,S,N),ne.resetDefaultState(),W=-1,B=null,I.pop(),I.length>0?(T=I[I.length-1],Re===!0&&te.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Vc(S,N,X,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ue.intersectsSprite(S)){V&&dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(nn);const me=_e.update(S),le=S.material;le.visible&&M.push(S,me,le,X,dt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ue.intersectsObject(S))){const me=_e.update(S),le=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),dt.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),dt.copy(me.boundingSphere.center)),dt.applyMatrix4(S.matrixWorld).applyMatrix4(nn)),Array.isArray(le)){const Me=me.groups;for(let Ee=0,Ne=Me.length;Ee<Ne;Ee++){const Ve=Me[Ee],Te=le[Ve.materialIndex];Te&&Te.visible&&M.push(S,me,Te,X,dt.z,Ve)}}else le.visible&&M.push(S,me,le,X,dt.z,null)}}const ce=S.children;for(let me=0,le=ce.length;me<le;me++)Vc(ce[me],N,X,V)}function Su(S,N,X,V){const{opaque:H,transmissive:ce,transparent:me}=S;T.setupLightsView(X),Re===!0&&te.setGlobalState(w.clippingPlanes,X),V&&Se.viewport(G.copy(V)),H.length>0&&Ja(H,N,X),ce.length>0&&Ja(ce,N,X),me.length>0&&Ja(me,N,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function wu(S,N,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Te=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new _i(1,1,{generateMipmaps:!0,type:Te?Vi:On,minFilter:Cr,samples:Math.max(4,wt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const ce=T.state.transmissionRenderTarget[V.id],me=V.viewport||G;ce.setSize(me.z*w.transmissionResolutionScale,me.w*w.transmissionResolutionScale);const le=w.getRenderTarget(),Me=w.getActiveCubeFace(),Ee=w.getActiveMipmapLevel();w.setRenderTarget(ce),w.getClearColor(K),de=w.getClearAlpha(),de<1&&w.setClearColor(16777215,.5),w.clear(),He&&be.render(X);const Ne=w.toneMapping;w.toneMapping=xi;const Ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Re===!0&&te.setGlobalState(w.clippingPlanes,V),Ja(S,X,V),D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let mt=0,Ht=N.length;mt<Ht;mt++){const Ft=N[mt],{object:gt,geometry:pn,material:we,group:Ln}=Ft;if(we.side===fi&&gt.layers.test(V.layers)){const st=we.side;we.side=In,we.needsUpdate=!0,Eu(gt,X,V,pn,we,Ln),we.side=st,we.needsUpdate=!0,Te=!0}}Te===!0&&(D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce))}w.setRenderTarget(le,Me,Ee),w.setClearColor(K,de),Ve!==void 0&&(V.viewport=Ve),w.toneMapping=Ne}function Ja(S,N,X){const V=N.isScene===!0?N.overrideMaterial:null;for(let H=0,ce=S.length;H<ce;H++){const me=S[H],{object:le,geometry:Me,group:Ee}=me;let Ne=me.material;Ne.allowOverride===!0&&V!==null&&(Ne=V),le.layers.test(X.layers)&&Eu(le,N,X,Me,Ne,Ee)}}function Eu(S,N,X,V,H,ce){S.onBeforeRender(w,N,X,V,H,ce),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(w,N,X,V,S,ce),H.transparent===!0&&H.side===fi&&H.forceSinglePass===!1?(H.side=In,H.needsUpdate=!0,w.renderBufferDirect(X,N,V,H,S,ce),H.side=dr,H.needsUpdate=!0,w.renderBufferDirect(X,N,V,H,S,ce),H.side=fi):w.renderBufferDirect(X,N,V,H,S,ce),S.onAfterRender(w,N,X,V,H,ce)}function Za(S,N,X){N.isScene!==!0&&(N=vt);const V=_.get(S),H=T.state.lights,ce=T.state.shadowsArray,me=H.state.version,le=re.getParameters(S,H.state,ce,N,X),Me=re.getProgramCacheKey(le);let Ee=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const Ne=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=j.get(S.envMap||V.environment,Ne),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",ht),Ee=new Map,V.programs=Ee);let Ve=Ee.get(Me);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===me)return Au(S,le),Ve}else le.uniforms=re.getUniforms(S),S.onBeforeCompile(le,w),Ve=re.acquireProgram(le,Me),Ee.set(Me,Ve),V.uniforms=le.uniforms;const Te=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=te.uniform),Au(S,le),V.needsLights=T0(S),V.lightsStateVersion=me,V.needsLights&&(Te.ambientLightColor.value=H.state.ambient,Te.lightProbe.value=H.state.probe,Te.directionalLights.value=H.state.directional,Te.directionalLightShadows.value=H.state.directionalShadow,Te.spotLights.value=H.state.spot,Te.spotLightShadows.value=H.state.spotShadow,Te.rectAreaLights.value=H.state.rectArea,Te.ltc_1.value=H.state.rectAreaLTC1,Te.ltc_2.value=H.state.rectAreaLTC2,Te.pointLights.value=H.state.point,Te.pointLightShadows.value=H.state.pointShadow,Te.hemisphereLights.value=H.state.hemi,Te.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Te.spotLightMatrix.value=H.state.spotLightMatrix,Te.spotLightMap.value=H.state.spotLightMap,Te.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function Tu(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Bo.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Au(S,N){const X=_.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function w0(S,N,X,V,H){N.isScene!==!0&&(N=vt),D.resetTextureUnits();const ce=N.fog,me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,le=z===null?w.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Us,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ee=j.get(V.envMap||me,Me),Ne=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!X.morphAttributes.position,mt=!!X.morphAttributes.normal,Ht=!!X.morphAttributes.color;let Ft=xi;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ft=w.toneMapping);const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pn=gt!==void 0?gt.length:0,we=_.get(V),Ln=T.state.lights;if(Re===!0&&(Pe===!0||S!==B)){const rn=S===B&&V.id===W;te.setState(V,S,rn)}let st=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ln.state.version||we.outputColorSpace!==le||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Ee||V.fog===!0&&we.fog!==ce||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Ve||we.morphTargets!==Te||we.morphNormals!==mt||we.morphColors!==Ht||we.toneMapping!==Ft||we.morphTargetsCount!==pn)&&(st=!0):(st=!0,we.__version=V.version);let $n=we.currentProgram;st===!0&&($n=Za(V,N,H));let oi=!1,xr=!1,ts=!1;const yt=$n.getUniforms(),cn=we.uniforms;if(Se.useProgram($n.program)&&(oi=!0,xr=!0,ts=!0),V.id!==W&&(W=V.id,xr=!0),oi||B!==S){Se.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),yt.setValue(P,"projectionMatrix",S.projectionMatrix),yt.setValue(P,"viewMatrix",S.matrixWorldInverse);const qi=yt.map.cameraPosition;qi!==void 0&&qi.setValue(P,tt.setFromMatrixPosition(S.matrixWorld)),wt.logarithmicDepthBuffer&&yt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,xr=!0,ts=!0)}if(we.needsLights&&(Ln.state.directionalShadowMap.length>0&&yt.setValue(P,"directionalShadowMap",Ln.state.directionalShadowMap,D),Ln.state.spotShadowMap.length>0&&yt.setValue(P,"spotShadowMap",Ln.state.spotShadowMap,D),Ln.state.pointShadowMap.length>0&&yt.setValue(P,"pointShadowMap",Ln.state.pointShadowMap,D)),H.isSkinnedMesh){yt.setOptional(P,H,"bindMatrix"),yt.setOptional(P,H,"bindMatrixInverse");const rn=H.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),yt.setValue(P,"boneTexture",rn.boneTexture,D))}H.isBatchedMesh&&(yt.setOptional(P,H,"batchingTexture"),yt.setValue(P,"batchingTexture",H._matricesTexture,D),yt.setOptional(P,H,"batchingIdTexture"),yt.setValue(P,"batchingIdTexture",H._indirectTexture,D),yt.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(P,"batchingColorTexture",H._colorsTexture,D));const ji=X.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&fe.update(H,X,$n),(xr||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,yt.setValue(P,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=HM()),xr&&(yt.setValue(P,"toneMappingExposure",w.toneMappingExposure),we.needsLights&&E0(cn,ts),ce&&V.fog===!0&&Ae.refreshFogUniforms(cn,ce),Ae.refreshMaterialUniforms(cn,V,ke,pe,T.state.transmissionRenderTarget[S.id]),Bo.upload(P,Tu(we),cn,D)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bo.upload(P,Tu(we),cn,D),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(P,"center",H.center),yt.setValue(P,"modelViewMatrix",H.modelViewMatrix),yt.setValue(P,"normalMatrix",H.normalMatrix),yt.setValue(P,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const rn=V.uniformsGroups;for(let qi=0,ns=rn.length;qi<ns;qi++){const Ru=rn[qi];ge.update(Ru,$n),ge.bind(Ru,$n)}}return $n}function E0(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function T0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,N,X){const V=_.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=N,_.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const X=_.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const A0=P.createFramebuffer();this.setRenderTarget=function(S,N=0,X=0){z=S,C=N,U=X;let V=null,H=!1,ce=!1;if(S){const le=_.get(S);if(le.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),G.copy(S.viewport),O.copy(S.scissor),Z=S.scissorTest,Se.viewport(G),Se.scissor(O),Se.setScissorTest(Z),W=-1;return}else if(le.__webglFramebuffer===void 0)D.setupRenderTarget(S);else if(le.__hasExternalTextures)D.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(le.__boundDepthTexture!==Ne){if(Ne!==null&&_.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ce=!0);const Ee=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?V=Ee[N][X]:V=Ee[N],H=!0):S.samples>0&&D.useMultisampledRTT(S)===!1?V=_.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[X]:V=Ee,G.copy(S.viewport),O.copy(S.scissor),Z=S.scissorTest}else G.copy(q).multiplyScalar(ke).floor(),O.copy(ie).multiplyScalar(ke).floor(),Z=ae;if(X!==0&&(V=A0),Se.bindFramebuffer(P.FRAMEBUFFER,V)&&Se.drawBuffers(S,V),Se.viewport(G),Se.scissor(O),Se.setScissorTest(Z),H){const le=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,le.__webglTexture,X)}else if(ce){const le=N;for(let Me=0;Me<S.textures.length;Me++){const Ee=_.get(S.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,X,le)}}else if(S!==null&&X!==0){const le=_.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,X)}W=-1},this.readRenderTargetPixels=function(S,N,X,V,H,ce,me,le=0){if(!(S&&S.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Se.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Ee=S.textures[le],Ne=Ee.format,Ve=Ee.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!wt.textureFormatReadable(Ne)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Ve)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&X>=0&&X<=S.height-H&&P.readPixels(N,X,V,H,se.convert(Ne),se.convert(Ve),ce)}finally{const Ee=z!==null?_.get(z).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,V,H,ce,me,le=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(N>=0&&N<=S.width-V&&X>=0&&X<=S.height-H){Se.bindFramebuffer(P.FRAMEBUFFER,Me);const Ee=S.textures[le],Ne=Ee.format,Ve=Ee.type;if(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!wt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(N,X,V,H,se.convert(Ne),se.convert(Ve),0);const mt=z!==null?_.get(z).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,mt);const Ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await dx(P,Ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(Te),P.deleteSync(Ht),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){const V=Math.pow(2,-X),H=Math.floor(S.image.width*V),ce=Math.floor(S.image.height*V),me=N!==null?N.x:0,le=N!==null?N.y:0;D.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,me,le,H,ce),Se.unbindTexture()};const R0=P.createFramebuffer(),C0=P.createFramebuffer();this.copyTextureToTexture=function(S,N,X=null,V=null,H=0,ce=0){let me,le,Me,Ee,Ne,Ve,Te,mt,Ht;const Ft=S.isCompressedTexture?S.mipmaps[ce]:S.image;if(X!==null)me=X.max.x-X.min.x,le=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Ne=X.min.y,Ve=X.isBox3?X.min.z:0;else{const cn=Math.pow(2,-H);me=Math.floor(Ft.width*cn),le=Math.floor(Ft.height*cn),S.isDataArrayTexture?Me=Ft.depth:S.isData3DTexture?Me=Math.floor(Ft.depth*cn):Me=1,Ee=0,Ne=0,Ve=0}V!==null?(Te=V.x,mt=V.y,Ht=V.z):(Te=0,mt=0,Ht=0);const gt=se.convert(N.format),pn=se.convert(N.type);let we;N.isData3DTexture?(D.setTexture3D(N,0),we=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),we=P.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),we=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Ln=P.getParameter(P.UNPACK_ROW_LENGTH),st=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$n=P.getParameter(P.UNPACK_SKIP_PIXELS),oi=P.getParameter(P.UNPACK_SKIP_ROWS),xr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve);const ts=S.isDataArrayTexture||S.isData3DTexture,yt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const cn=_.get(S),ji=_.get(N),rn=_.get(cn.__renderTarget),qi=_.get(ji.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,rn.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ns=0;ns<Me;ns++)ts&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(S).__webglTexture,H,Ve+ns),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(N).__webglTexture,ce,Ht+ns)),P.blitFramebuffer(Ee,Ne,me,le,Te,mt,me,le,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||_.has(S)){const cn=_.get(S),ji=_.get(N);Se.bindFramebuffer(P.READ_FRAMEBUFFER,R0),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,C0);for(let rn=0;rn<Me;rn++)ts?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,cn.__webglTexture,H,Ve+rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,cn.__webglTexture,H),yt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ji.__webglTexture,ce,Ht+rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ji.__webglTexture,ce),H!==0?P.blitFramebuffer(Ee,Ne,me,le,Te,mt,me,le,P.COLOR_BUFFER_BIT,P.NEAREST):yt?P.copyTexSubImage3D(we,ce,Te,mt,Ht+rn,Ee,Ne,me,le):P.copyTexSubImage2D(we,ce,Te,mt,Ee,Ne,me,le);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else yt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(we,ce,Te,mt,Ht,me,le,Me,gt,pn,Ft.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(we,ce,Te,mt,Ht,me,le,Me,gt,Ft.data):P.texSubImage3D(we,ce,Te,mt,Ht,me,le,Me,gt,pn,Ft):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ce,Te,mt,me,le,gt,pn,Ft.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ce,Te,mt,Ft.width,Ft.height,gt,Ft.data):P.texSubImage2D(P.TEXTURE_2D,ce,Te,mt,me,le,gt,pn,Ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ln),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$n),P.pixelStorei(P.UNPACK_SKIP_ROWS,oi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,xr),ce===0&&N.generateMipmaps&&P.generateMipmap(we),Se.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&D.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?D.setTextureCube(S,0):S.isData3DTexture?D.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?D.setTexture2DArray(S,0):D.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){C=0,U=0,z=null,Se.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Ut=Object.freeze({gravity:18,minSpeed:13,extraSpeed:15,minPull:.08,minAngle:5,maxAngle:80,maxFlight:5}),ks=n=>n.gravity??Ut.gravity,Wt=Object.freeze({x:-6.8,y:2.85}),jt=Object.freeze({minX:8,maxX:8.62,minY:.6,maxY:5.8}),VM=Object.freeze({x:jt.minX,y:(jt.minY+jt.maxY)/2}),Br=(n,e,t)=>Math.min(t,Math.max(e,n));function Hi(...n){if(!n.every(Number.isFinite))throw new RangeError("Shot math requires finite numbers.")}function Ga(n){Hi(n.origin.x,n.origin.y,n.velocity.x,n.velocity.y),n.gravity!==void 0&&Hi(n.gravity),n.wind!==void 0&&Hi(n.wind)}function Th(n,e,t,i){const r=Math.min(t,i)*.34;if(![n,e,t,i,r].every(Number.isFinite)||t<=0||i<=0)return null;const s=Math.hypot(n,e)/r;return s<Ut.minPull||n>=0?null:{angle:Br(Math.atan2(e,-n)*180/Math.PI,Ut.minAngle,Ut.maxAngle),power:Br(s,0,1)}}function Sc(n,e=Ut){Hi(n.angle,n.power);const t=Br(n.angle,Ut.minAngle,Ut.maxAngle)*Math.PI/180,i=e.minSpeed+e.extraSpeed*Br(n.power,0,1);return{origin:{...Wt},velocity:{x:Math.cos(t)*i,y:Math.sin(t)*i}}}function qt(n,e){Ga(n),Hi(e);const t=n.origin.y+n.velocity.y*e-.5*ks(n)*e*e;return n.wind?{x:n.origin.x+n.velocity.x*e+.5*n.wind*e*e,y:t}:{x:n.origin.x+n.velocity.x*e,y:t}}function ec(n,e){return Ga(n),Hi(e),n.wind?{x:n.velocity.x+n.wind*e,y:n.velocity.y-ks(n)*e}:{x:n.velocity.x,y:n.velocity.y-ks(n)*e}}function Ah(n,e){const t=n.wind/2,i=n.velocity.x,r=n.origin.x-e;if(t===0)return i===0?r===0?[0]:[]:[-r/i];const s=i*i-4*t*r;if(s<0)return[];const a=-(i+(i<0?-1:1)*Math.sqrt(s))/2;return a===0?[0]:[a/t,r/a]}function Rh(n,e,t,i){if(Ga(n),Hi(e.minX,e.maxX,e.minY,e.maxY,t,i),e.minX>e.maxX||e.minY>e.maxY)throw new RangeError("Bounds must be ordered.");if(i<t||t<0)return null;const r=[t,i];if(n.wind){r.push(-n.velocity.x/n.wind);for(const s of[e.minX,e.maxX])r.push(...Ah(n,s))}else if(n.velocity.x!==0)for(const s of[e.minX,e.maxX])r.push((s-n.origin.x)/n.velocity.x);for(const s of[e.minY,e.maxY]){const a=ks(n),o=n.velocity.y**2+2*a*(n.origin.y-s);if(o>=0){const c=Math.sqrt(o);r.push((n.velocity.y-c)/a,(n.velocity.y+c)/a)}}for(const s of r.filter(a=>a>=t-1e-9&&a<=i+1e-9).sort((a,o)=>a-o)){const a=qt(n,s);if(a.x>=e.minX-1e-8&&a.x<=e.maxX+1e-8&&a.y>=e.minY-1e-8&&a.y<=e.maxY+1e-8)return Br(s,t,i)}return null}function Ch(n,e=.24){if(Ga(n),Hi(e),n.origin.y<e)return 0;const t=ks(n);return(n.velocity.y+Math.sqrt(n.velocity.y**2+2*t*(n.origin.y-e)))/t}function Nm(n,e){if(Ga(n),Hi(e),!n.wind)return n.velocity.x===0?null:(e-n.origin.x)/n.velocity.x;const t=Ah(n,e).filter(i=>i>=0).sort((i,r)=>i-r);return t.length?t[0]:null}const WM=[[-1,0],[1,0],[0,-1],[0,1]];function Um(n,e,t=32){return[...new Set(n.map(i=>`${Math.floor(i%e/t)}:${Math.floor(Math.floor(i/e)/t)}`))]}function Fm(n,e,t){const i=new Set(n);for(const r of n){const[s,a]=r.split(":").map(Number);for(const[o,c]of WM)s+o>=0&&a+c>=0&&s+o<e&&a+c<t&&i.add(`${s+o}:${a+c}`)}return[...i]}function XM(n,e,t,i,r){return Th(n*r,e,t,i)}function $M(n,e,t,i){if(n===0)return null;const r=n<0?1:-1,s=Th(n*r,e,t,i);return s?{...s,facing:r}:null}function YM(n,e,t){if(t<e||!n.length)return null;const i=(t-e)/1e3,r=n.find(o=>o.time>=i)??n.at(-1),s=n[Math.max(0,n.indexOf(r)-1)],a=r.time===s.time?1:Math.min(1,Math.max(0,(i-s.time)/(r.time-s.time)));return r.poses.map(o=>{const c=s.poses.find(l=>l.actorId===o.actorId)?.feet??o.feet;return{actorId:o.actorId,feet:{x:c.x+(o.feet.x-c.x)*a,y:c.y+(o.feet.y-c.y)*a,z:0}}})}function jM(n,e){if(!n)return"";if(n.state==="finished")return n.draw?"Both archers draw.":n.winner===e?"You are the last archer standing.":"Your opponent is the last archer standing.";if(n.state==="aborted")return"The service ended this duel safely.";if(n.state!=="active"||n.phase!=="planning"||!n.lastEvent?.teleport)return"";const t=n.lastEvent.teleport;if(t.ok)return"Teleport landed on a clear supported surface.";const i={"not-upward":"the arrow did not land on an upward-facing surface","no-support":"there was no supporting surface","occupied-or-blocked":"the arrival space was occupied or blocked"};return`Teleport failed: ${t.reason?i[t.reason]:"there was no legal arrival"}. The action was consumed.`}const Zn=n=>n.version==="volley-1";function qM(n){return JSON.stringify(Zn(n)?[n.id,n.version,n.seat.lifeId,n.epoch,n.roundId]:[n.id,n.version,n.seat.lifeId,n.activeSeat,n.planningStartedAt])}function KM(n,e){return Zn(n)?n.locks.find(t=>t.actorId===e)?.plan??null:null}function JM(n){if(!n.seats.every(t=>t.ready))return!1;if(!Zn(n))return n.seats.length===2;if(n.mode==="royale")return n.seats.length>=2&&n.seats.length<=8;const e=new Map;for(const t of n.seats){if(t.teamId===null)return!1;e.set(t.teamId,(e.get(t.teamId)??0)+1)}return n.seats.length===4&&e.size===2&&[...e.values()].every(t=>t===2)}function Om(n,e){const t=Zn(n),i=n.seats.find(h=>h.actorId===e);let r=jM(n,e);if(t&&n.state==="finished"&&(r=n.draw?"Match complete · draw.":n.winningTeam!==null?i&&"teamId"in i&&i.teamId===n.winningTeam?"Your team won.":"The other team won.":n.winner===e?"You are the last archer standing.":"Another archer is the last one standing."),t&&n.state==="aborted"&&(r="The service ended this match safely."),!t)return{preset:"Duel · alternate turns",turn:n.state==="waiting"?"Both archers must ready before the host starts.":n.state==="active"?n.phase==="planning"?n.seat.canAct?"Your turn. Choose an arrow and draw.":"Opponent’s turn. Watch the arena.":"Arrow resolving. Waiting for settlement.":n.state==="finished"?n.draw?"Duel complete · draw.":n.winner===e?"Duel complete · you won.":"Duel complete · opponent won.":"This duel was aborted. Leave to create a new room.",result:r,priority:[],locks:[],pressure:""};const s=n.locks.find(h=>h.actorId===e),a=n.actors.filter(h=>!h.eliminated).length,o=n.seat.canAct?"Choose an arrow and draw to lock.":s?.locked?s.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":n.priority.includes(e)?"Watch the arena.":"You are eliminated. Watch the remaining archers.",c=n.preset==="teams-1"?"Teams 2v2 · shared 20-second planning":n.preset==="royale-fixed-1"?"Royale · fixed arena · 30 rounds / 15 minutes · 20-second planning":"Royale · shrinking safe area · 20-second planning",l=n.state==="waiting"?n.mode==="teams"?"Four archers, two per team, must ready before the host starts.":"Two to eight archers must all ready before the host starts.":n.state==="active"?`Round ${n.round} · ${a} alive · ${n.phase==="planning"?o:"Arrows resolve in published priority order."}`:r,u=n.preset!=="royale-shrink-1"?"":`Safe area (solid) ${n.pressure.minX.toFixed(1)} to ${n.pressure.maxX.toFixed(1)}${n.pressure.warning?` · dashed bounds after round ${n.pressure.warning.afterRound} to ${n.pressure.warning.minX.toFixed(1)}–${n.pressure.warning.maxX.toFixed(1)} · outside feet take 25 damage`:""}`,d=n.locks.map(h=>{const p=h.plan;return{actorId:h.actorId,text:h.locked?p?p.kind==="pass"?"Pass locked":`${p.aim.arrow} locked · ${Math.round(p.aim.angle)}° · ${Math.round(p.aim.power*100)}% · ${p.aim.facing===1?"right":"left"}`:"Locked":"Planning"}});return{preset:c,turn:l,result:r,priority:n.priority,locks:d,pressure:u}}function km(n,e){return n.state!=="finished"&&n.state!=="aborted"?{kind:"none",label:""}:e?e.joined?{kind:"enter",label:"Enter rematch lobby"}:{kind:"join",label:"Join rematch"}:{kind:"request",label:"Rematch"}}function ZM(n){const e=/^team[-_ ]?([A-Za-z0-9]+)$/i.exec(n);return e?`Team ${e[1].toUpperCase()}`:n}function QM(n,e,t,i){const r=Om(n,e).locks;return n.seats.map((s,a)=>{const o=n.actors.find(h=>h.id===s.actorId),c=t.find(h=>h.actorId===s.actorId),l=o?.health??100,u=c?.reservedUntil?` · reserved ${Math.max(0,Math.ceil((c.reservedUntil-i())/1e3))}s`:"",d=n.state==="active"?r.find(h=>h.actorId===s.actorId):void 0;return{actorId:s.actorId,text:`${c?.label??`Archer ${a+1}`}${s.actorId===e?" · you":""} · ${l} health${o?.eliminated?" · eliminated":""} · ${n.state==="waiting"?s.ready?"ready":"not ready":c?.status??"disconnected"}${c?.status==="disconnected"?u:""}`,health:l,healthLabel:`Archer ${a+1} health`,team:"teamId"in s&&s.teamId?String(s.teamId):null,lockText:d?.text??null}})}const wc="combat-protocol-1",Zs="combat-4",eS="The combat rules version has changed. Reload the page to continue.",Ih="skirmish-protocol-1",Ph=Zs,tS="This public arena has been updated. Reload the page to continue.",Lh=Object.freeze({maxRooms:128,maxSockets:128,maxSocketsPerMember:4,maxDebtPerArena:1024,maxDebt:8192,maxMemberships:16384,maxControls:4096,controlsPerMember:2,controlRetryMs:3e5,maxRateBuckets:1024,commandBurst:30,commandWindowMs:1e4,commandBodyBytes:8192,socketFrameBytes:2048,maxSnapshotBytes:4*1024*1024,slowClientBytes:4*1024*1024,authenticationTimeoutMs:5e3,maxUnauthenticatedSockets:16}),ui="combat-protocol-2";function Lf(n,e=!1){if(typeof n!="string"||n.length>320)throw new Error("Invalid service origin.");const t=/^(https?):\/\/([A-Za-z0-9.-]+)(?::([1-9][0-9]{0,4}))?$/.exec(n);if(!t||t[0]!==n||!e&&t[1]!=="https")throw new Error("Invalid service origin.");const i=t[2].toLowerCase(),r=i.split(".");if(i.length>253||r.some(c=>!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(c)))throw new Error("Invalid service host.");const s=i==="127.0.0.1";if(!/[a-z]/.test(r.at(-1))&&!(e&&s))throw new Error("DNS service host required.");if(new URL(`${t[1]}://${i}`).hostname!==i)throw new Error("Ambiguous service host.");const a=t[3]===void 0?void 0:Number(t[3]);if(a!==void 0&&a>65535)throw new Error("Invalid service port.");const o=a===(t[1]==="https"?443:80)?void 0:a;return`${t[1]}://${i}${o===void 0?"":`:${o}`}`}function $d(n,e){if(n==="")return null;const t=Lf(e,!0),i=n==="/api",r=i?t:Lf(n.endsWith("/api")?n.slice(0,-4):n);if(!i&&!n.endsWith("/api"))throw new Error("Service endpoint must end in /api.");const s=`${r}/api`,a=s.replace(/^http/,"ws");return Object.freeze({mode:i?"same-origin":"https",requestBase:i?"/api":s,serviceId:s,boardSocket:`${a}/events`,combatSocket:`${a}/combat/events`})}function nS(n,e){if(n.length!==1)return null;try{return $d(n[0],e)}catch{return null}}function Bm(n){if(n.mode==="same-origin")return Object.freeze({identity:"archery.challenge.identity.v1",room:"archery.combat.room.v1",legacy:!0});const e=encodeURIComponent(n.serviceId);return Object.freeze({identity:`archery.service.identity.v2:${e}`,room:`archery.service.room.v2:${e}`,legacy:!1})}function Df(n){if(typeof n=="string"){if(n!=="/api")throw new Error("Use a parsed endpoint or same-origin /api.");return $d("/api",typeof location>"u"?"http://localhost":location.origin)}const e=n.serviceId.slice(0,-4),t=$d(n.mode==="same-origin"?"/api":n.serviceId,e);if(!t||Object.keys(t).some(i=>t[i]!==n[i]))throw new Error("Invalid shared service context.");return t}const zo=n=>!!n&&typeof n=="object"&&!Array.isArray(n);class vi extends Error{status;code;retryAfterMs;transient;constructor(e,t,i,r){super(e),this.name="GuestRequestError",this.status=t,this.code=i,this.retryAfterMs=r,this.transient=r!==null}}function iS(n,e){let t=NaN;return n!==null&&/^[0-9]+$/.test(n)?t=Number(n)*1e3:n!==null&&/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), [0-9]{2} [A-Z][a-z]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT$/.test(n)&&(t=Math.max(0,Date.parse(n)-e)),Number.isSafeInteger(t)&&t>=0&&Number.isSafeInteger(e+t)?Math.max(1e3,t):1e3}function Nf(n){if(!zo(n)||Object.keys(n).length!==2||typeof n.guestId!="string"||!n.guestId||typeof n.token!="string"||!n.token)throw new Error("Invalid guest identity.");return{guestId:n.guestId,token:n.token}}class Ec{selectedEndpoint;selectedKeys;fetcher;storage;current=null;generation=0;identityError=null;creating=null;admission=null;constructor(e,t=fetch,i){this.selectedEndpoint=Df(e),this.selectedKeys=Bm(this.selectedEndpoint),this.fetcher=t,this.storage=i;let r;try{r=i?.getItem(this.storageKeys.identity)??null}catch{return}if(r!==null)try{this.current=Object.freeze({...Nf(JSON.parse(r)),revision:this.generation})}catch{this.identityError=new Error("Saved guest identity is unreadable or unsupported. Existing data is preserved; forget it explicitly before creating another guest.")}}get revision(){return this.generation}get guestId(){return this.current?.guestId??null}get endpoint(){return this.selectedEndpoint}get serviceId(){return this.endpoint.serviceId}get storageKeys(){return this.selectedKeys}credentials(){return this.current}assertContext(e,t,i){if(!(typeof e=="string"?e==="/api"&&this.endpoint.mode==="same-origin":(()=>{const s=Df(e);return s.mode===this.endpoint.mode&&s.serviceId===this.serviceId})())||t!==this.fetcher||i!==this.storage)throw new Error("Shared guest session context must match service, fetcher and storage.")}assertRevision(e){if(e!==this.generation)throw new Error("Guest identity changed. Start again with the current guest.")}ensure(){if(this.identityError)return Promise.reject(this.identityError);if(this.current)return Promise.resolve(this.current);if(this.creating)return this.creating;const e=this.generation,t=this.create(e).finally(()=>{this.creating===t&&(this.creating=null)});return this.creating=t,t}async create(e){const t=Nf(await this.request("/guests",{}));this.assertRevision(e),this.current=Object.freeze({...t,revision:++this.generation});try{this.storage?.setItem(this.storageKeys.identity,JSON.stringify(t))}catch{}return this.current}request(e,t){return this.requestJson(e,t)}readReadiness(){return this.requestJson("/readiness",void 0,!0)}async requestJson(e,t,i=!1){if(this.identityError)throw this.identityError;if(!e.startsWith("/")||e.startsWith("//")||e.includes("\\"))throw new Error("Invalid shared service path.");if(this.admission&&Date.now()<this.admission.notBefore)throw this.admission.error;const r=this.generation,s=await this.fetcher.call(globalThis,this.endpoint.requestBase+e,{signal:AbortSignal.timeout(i?3e3:15e3),method:t===void 0?"GET":"POST",credentials:"omit",redirect:"error",...i?{}:{headers:{"Content-Type":"application/json",...this.current?{Authorization:`Bearer ${this.current.token}`}:{}}},...t===void 0?{}:{body:JSON.stringify(t)}});this.assertRevision(r);let a;try{a=await s.json()}catch(o){if(s.ok)throw o;a=null}if(this.assertRevision(r),!s.ok){const o=zo(a)&&zo(a.error)?a.error:null,c=o&&typeof o.code=="string"?o.code:null,l=c!==null&&["room_capacity","guest_room_capacity","command_capacity","socket_capacity","challenge_capacity","guest_capacity"].includes(c),u=Date.now(),d=s.status===429&&!l?iS(s.headers.get("Retry-After"),u):null,h=new vi(o&&typeof o.message=="string"?o.message:d!==null?"The shared service is busy. Wait a moment, then retry.":"Shared service unavailable. Retry or start a new local challenge.",s.status,c,d);throw d!==null&&(!this.admission||u+d>this.admission.notBefore)&&(this.admission={notBefore:u+d,error:h}),h}if(i&&(s.status!==200||s.headers.get("Content-Type")?.split(";",1)[0].trim().toLowerCase()!=="application/json"))throw new Error("Invalid shared service readiness.");if(!zo(a))throw new Error("Invalid shared service response.");return a}forget(){this.generation++,this.current=null,this.identityError=null,this.creating=null;try{this.storage?.removeItem(this.storageKeys.identity)}catch{}}}const Er={rulesVersion:Zs,code:"rules_version",reload:eS},di={rulesVersion:Ph,code:"protocol_version",reload:tS};function ar(n,e){return n instanceof vi&&n.status===409&&n.code===e.code}function Yd(n){return new vi(n.reload,409,n.code,null)}const zm=["combat-1","combat-2","combat-3"];function Uf(n,e){return Array.isArray(n)&&n.length===e.length&&e.every((t,i)=>n[i]===t)}async function Ff(n,e){n.assertRevision(e);let t;try{t=await n.readReadiness()}catch{}if(n.assertRevision(e),!t)return!1;const{ready:i,apiVersion:r,rulesVersion:s,combatRulesVersion:a,protocols:o,roomKinds:c,presets:l,publicProfile:u}=t;return i===!0&&r==="shared-api-1"&&s==="challenge-v1"&&zm.includes(a)&&Object.keys(t).length===(u===void 0?7:8)&&(u===void 0||u==="public-admission-v1")&&Uf(o,[wc,ui,Ih])&&Uf(c,["duel","teams","royale","skirmish"])&&Array.isArray(l)&&l.length===1&&(l[0]==="skirmish-1"||l[0]==="skirmish-2"||l[0]==="skirmish-3")}function rS(n,e,t){return n instanceof TypeError?!0:n instanceof vi?n.status===400&&n.code==="path"&&n.message==="Invalid service query."||t===di&&e!=="/skirmish/rules"&&n.status===404&&n.code==="not_found"&&n.message==="Public arena not found.":!1}async function ws(n,e,t){const i=n.revision;let r;try{r=await n.request(e+"?rulesVersion="+encodeURIComponent(t.rulesVersion))}catch(s){throw rS(s,e,t)&&await Ff(n,i)?Yd(t):s}if(zm.includes(r.rulesVersion)&&await Ff(n,i))throw Yd(t);return r}const Va=Object.freeze({shotGravity:Object.freeze({min:8,max:30}),shotMinSpeed:Object.freeze({min:8,max:20}),shotExtraSpeed:Object.freeze({min:5,max:24}),actorGravity:Object.freeze({min:8,max:40}),airDrag:Object.freeze({min:0,max:2}),groundFriction:Object.freeze({min:2,max:30}),restitution:Object.freeze({min:0,max:.6}),impactThreshold:Object.freeze({min:2,max:20}),impactMultiplier:Object.freeze({min:0,max:10}),physicsDamageCap:Object.freeze({min:0,max:100,integer:!0}),health:Object.freeze({min:25,max:100,integer:!0}),directBodyDamage:Object.freeze({min:1,max:100,integer:!0}),directHeadDamage:Object.freeze({min:1,max:100,integer:!0}),blastNearDamage:Object.freeze({min:0,max:100,integer:!0}),blastMidDamage:Object.freeze({min:0,max:100,integer:!0}),blastFarDamage:Object.freeze({min:0,max:100,integer:!0}),bombRadius:Object.freeze({min:1,max:3}),bombImpulseFloor:Object.freeze({min:0,max:1}),bombHorizontalImpulse:Object.freeze({min:0,max:20}),bombUpImpulse:Object.freeze({min:0,max:25}),craterRadius:Object.freeze({min:1,max:3}),chipRadius:Object.freeze({min:.25,max:3}),directKnockbackHorizontal:Object.freeze({min:0,max:12}),directKnockbackUp:Object.freeze({min:0,max:12}),planningMs:Object.freeze({min:5e3,max:6e4,integer:!0})}),Hm=Object.freeze({min:0,max:6}),Of=40,Nr=Object.keys(Va),ur=n=>n.windMax??0,sS=/^[a-z0-9][a-z0-9._-]{0,31}$/;function Tc(n){return Object.freeze(n)}const Pn=Tc({id:"base-1",shotGravity:18,shotMinSpeed:13,shotExtraSpeed:15,actorGravity:18,airDrag:.15,groundFriction:14,restitution:0,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,health:100,directBodyDamage:50,directHeadDamage:100,blastNearDamage:25,blastMidDamage:10,blastFarDamage:5,bombRadius:3,bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,craterRadius:3,chipRadius:.5,directKnockbackHorizontal:0,directKnockbackUp:0,planningMs:2e4}),jd=Tc({...Pn,id:"playtest-1",chipRadius:1.25,directKnockbackHorizontal:4,directKnockbackUp:5,bombUpImpulse:14,bombHorizontalImpulse:11,restitution:.4,groundFriction:8,impactThreshold:8}),kf=Tc({...jd,id:"playtest-2",windMax:3}),ri=Object.freeze({[Pn.id]:Pn,[jd.id]:jd,[kf.id]:kf});function nr(n){throw new RangeError(`Invalid tuning profile: ${n}`)}function aS(n,e){return Nr.every(t=>n[t]===e[t])&&ur(n)===ur(e)}function Ac(n){(!n||typeof n!="object"||Array.isArray(n))&&nr("an object is required.");const e=n,t=Object.keys(e);(!Object.hasOwn(e,"id")||Nr.some(s=>!Object.hasOwn(e,s))||t.some(s=>s!=="id"&&!Nr.includes(s)&&s!=="windMax"))&&nr("fields differ from the tuning schema."),(typeof e.id!="string"||!sS.test(e.id))&&nr("id must be 1..32 lowercase letters, digits, dot, underscore or hyphen.");const i=Nr.map(s=>[s,Va[s]]);Object.hasOwn(e,"windMax")&&i.push(["windMax",Hm]);for(const[s,a]of i){const o=e[s];(typeof o!="number"||!Number.isFinite(o))&&nr(`${s} must be a finite number.`),(o<a.min||o>a.max||a.integer&&!Number.isInteger(o))&&nr(`${s} must be ${a.integer?"an integer ":""}between ${a.min} and ${a.max}.`)}const r=e;r.shotMinSpeed+r.shotExtraSpeed>Of&&nr(`shotMinSpeed + shotExtraSpeed must not exceed ${Of}.`),(r.blastNearDamage<r.blastMidDamage||r.blastMidDamage<r.blastFarDamage)&&nr("blast damage must not increase with distance.")}function oS(n){Ac(n);const e=tc(n.id);e&&!aS(n,e)&&nr(`id ${n.id} is reserved for its preset values.`)}function tc(n){return typeof n=="string"&&Object.hasOwn(ri,n)?ri[n]:void 0}function cS(n){return JSON.stringify([n.id,...Nr.map(e=>n[e]),...ur(n)===0?[]:[ur(n)]])}function Gm(n){let e=0xcbf29ce484222325n;for(const t of new TextEncoder().encode(n))e=BigInt.asUintN(64,(e^BigInt(t))*0x100000001b3n);return e}function nc(n){return`fnv64-${Gm(cS(n)).toString(16).padStart(16,"0")}`}function Bf(n){oS(n);const e={id:n.id};for(const t of Nr)e[t]=n[t];return ur(n)!==0&&(e.windMax=n.windMax),Tc(e)}function Rc(n){return Object.hasOwn(n,"tuning")&&n.tuning?n.tuning:Pn}const Qs=Object.freeze([...Nr,"windMax"]);function Dh(n,e){const t=tc(n);if(!t)throw new RangeError(`Unknown tuning preset. Known presets: ${Object.keys(ri).join(", ")}.`);if(!e||typeof e!="object"||Array.isArray(e))throw new RangeError("Tuning overrides must be an object.");const i=Object.entries(e);for(const[s,a]of i){if(!Qs.includes(s))throw new RangeError(`Unknown tuning field "${s.slice(0,40)}".`);if(typeof a!="number"||!Number.isFinite(a))throw new RangeError(`${s} must be a finite number.`)}if(i.length===0)return t;const r=Vm(JSON.stringify({base:t.id,...Object.fromEntries(i)}));return nc({...r,id:t.id})===nc(t)?t:r}function Vm(n){if(n===void 0||n.trim()==="")return Pn;const e=n.trim();if(!e.startsWith("{")){const s=tc(e);if(!s)throw new RangeError(`Unknown tuning preset "${e.slice(0,40)}". Known presets: ${Object.keys(ri).join(", ")}.`);return s}if(e.length>4096)throw new RangeError("Tuning JSON is too large.");let t;try{t=JSON.parse(e)}catch{throw new RangeError("Tuning JSON is not valid JSON.")}if(!t||typeof t!="object"||Array.isArray(t))throw new RangeError("Tuning JSON must be an object.");let i=t;if(Object.hasOwn(i,"base")){const{base:s,...a}=i,o=tc(s);if(!o)throw new RangeError(`Unknown tuning base preset. Known presets: ${Object.keys(ri).join(", ")}.`);const{id:c,...l}=o;i={...l,...a}}if(Object.hasOwn(i,"id"))return Bf(i);const r={...i,id:"custom"};return Bf({...r,id:`custom-${nc(r).slice(-8)}`})}const Jt=Object.freeze({nock:Object.freeze({x:.92,y:2.77,z:0}),halfWidth:.86,height:3.055,head:Object.freeze({minX:-.325,maxX:.325,minY:2.255,maxY:2.905}),body:Object.freeze({minX:-.86,maxX:.86,minY:0,maxY:2.255})}),Wm=Object.freeze({version:"combat-1",cell:.125,gravity:18,step:1/120,maxSteps:3600,impactThreshold:6,impactMultiplier:4,physicsDamageCap:50,bombRadius:3,craterRadius:3,chipRadius:.5,maxDeltaCells:2048,activeTerrainRules:"current",bombImpulseFloor:.5,bombHorizontalImpulse:9,bombUpImpulse:11,groundFriction:14,airDrag:.15,restitution:0,matchMs:9e5,planningMs:2e4,launchDelayMs:100,maxActors:8});function Cc(...n){if(!n.every(Number.isFinite))throw new RangeError("Finite combat coordinates required.")}function ic(n){if(!n||typeof n!="object")throw new RangeError("Planar position required.");if(Cc(n.x,n.y,n.z),n.z!==0)throw new RangeError("Combat uses world z=0.")}function lS(n){if(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))throw new RangeError("Identifier must be a 1..128 character ASCII token.")}function Xm(n){if(!n||typeof n!="object")throw new RangeError("Aim required.");if(Cc(n.angle,n.power),n.angle<5||n.angle>80||n.power<.08||n.power>1||n.facing!==1&&n.facing!==-1)throw new RangeError("Aim outside combat limits.");if("arrow"in n&&!["normal","bomb","teleport"].includes(n.arrow))throw new RangeError("Unknown arrow.")}function Nh(n){if(!Array.isArray(n)||n.length>Wm.maxActors)throw new RangeError("At most eight actors.");const e=new Set;for(const t of n){if(lS(t.id),ic(t.feet),ic(t.velocity),Cc(t.health),!Number.isInteger(t.health)||t.health<0||t.health>100||Math.abs(t.feet.x)>1024||Math.abs(t.feet.y)>1024||Math.abs(t.velocity.x)>1e3||Math.abs(t.velocity.y)>1e3||e.has(t.id)||t.facing!==1&&t.facing!==-1||typeof t.eliminated!="boolean")throw new RangeError("Invalid actor.");e.add(t.id)}}function zf(n,e){return{minX:n.x+e.minX,maxX:n.x+e.maxX,minY:n.y+e.minY,maxY:n.y+e.maxY}}function dS(n){return[{kind:"head",bounds:zf(n.feet,Jt.head)},{kind:"body",bounds:zf(n.feet,Jt.body)}]}function hS(n,e=n.facing){return{x:n.feet.x+Jt.nock.x*e,y:n.feet.y+Jt.nock.y,z:0}}function El(n,e,t=Pn,i=0){Nh([n]),Xm(e);const r=Sc(e,{minSpeed:t.shotMinSpeed,extraSpeed:t.shotExtraSpeed}),s=hS(n,e.facing);return{origin:{x:s.x,y:s.y},velocity:{x:r.velocity.x*e.facing,y:r.velocity.y},...t.shotGravity===Pn.shotGravity?{}:{gravity:t.shotGravity},...i===0?{}:{wind:i}}}function $m(n,e,t,i,r=!1){const l=t*i,u=Math.ceil(t/32),d=Math.ceil(i/32);return Object.freeze({version:n,cell:.125,minX:e,minY:-8,width:t,height:i,bedrockY:-6,bounds:Object.freeze({minX:e,maxX:e+t*.125,minY:-8,maxY:-8+i*.125}),cellCount:l,maxCellIndex:l-1,maskHexLength:l/4,chunkSize:32,chunkColumns:u,chunkRows:d,maxChunks:u*d,protectPads:r})}const Ym=$m("arena-1",-32,512,288),jm=$m("arena-2",-40,640,352,!0);function Cn(n){if(n==="arena-1")return Ym;if(n==="arena-2")return jm;throw new RangeError("Unsupported terrain profile.")}function Uh(n){if(n==="skirmish-1")return Ym;if(n==="skirmish-2"||n==="skirmish-3")return jm;throw new RangeError("Unsupported public arena version.")}function Fh(n,e){const t=e===void 0?void 0:Cn(e);if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid terrain metadata.");const i=n,r=Cn(i.version);if(t&&r!==t)throw new RangeError("Terrain differs from the expected profile.");for(const s of["cell","minX","minY","width","height","bedrockY"])if(i[s]!==r[s])throw new RangeError("Invalid terrain profile geometry.");if(!Number.isSafeInteger(i.revision)||i.revision<0||!Array.isArray(i.spawnPads)||i.spawnPads.length!==8)throw new RangeError("Invalid terrain metadata.");for(const s of i.spawnPads){if(Array.isArray(s))throw new RangeError("Planar spawn pad required.");ic(s)}if(r.protectPads)for(const s of i.spawnPads)fS(r,s),pS(r,s);return r}const uS=Object.freeze([[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]]),rc=1.5,qm=.5;function fS(n,e){const{cell:t,minX:i,minY:r,width:s,height:a}=n,o={col0:Math.round((e.x-rc-i)/t),col1:Math.round((e.x+rc-i)/t),row0:Math.round((e.y-qm-r)/t),row1:Math.round((e.y-r)/t)};if(!Number.isFinite(o.col0+o.row0)||o.col0<0||o.col1>s||o.row0<0||o.row1>a)throw new RangeError("Spawn pad protection outside the terrain grid.");return o}function pS(n,e){const{cell:t,minX:i,minY:r,width:s,height:a}=n,o=t/2;if(!(Number.isInteger((e.x-i)/o)&&Number.isInteger((e.y-r)/o))||e.x-rc<i||e.x+rc>i+s*t||e.y-qm<r||e.y+Jt.height>r+a*t)throw new RangeError("Spawn pad protection outside the terrain grid.")}Object.freeze(uS.map(([n,e])=>Object.freeze({x:n,y:e})));const mS="tgen-1",Km=/^[a-z0-9][a-z0-9._-]{0,31}@[1-9][0-9]{0,5}$/;function gS(n){if(typeof n!="string"||!Km.test(n))return null;const e=n.indexOf("@");return{id:n.slice(0,e),version:Number(n.slice(e+1))}}const xS=Object.freeze({version:"skirmish-1",slots:8,minimumParticipants:4,planningMs:2e4,resetAfter:20,idleAfter:3,receiptLimit:16}),Jm=xS,Zm=Object.freeze({...Jm,version:"skirmish-2",spawnPolicy:"separated"}),_S=Object.freeze({...Zm,version:"skirmish-3",terrain:Object.freeze({generator:mS,pool:"public"})});function Ic(n){if(Uh(n),n==="skirmish-1")return Jm;if(n==="skirmish-2")return Zm;if(n==="skirmish-3")return _S;throw new RangeError("Unsupported public rules version.")}const Oh="skirmish-3";Ic(Oh);const ct=()=>{throw new Error("The public arena service returned an unsupported response.")},kh=n=>{(!n||typeof n!="object"||Array.isArray(n))&&ct()},Pt=n=>{(!Number.isSafeInteger(n)||n<0)&&ct()},Bs=n=>{Number.isFinite(n)||ct()},it=n=>{(typeof n!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(n))&&ct()},En=n=>{typeof n!="boolean"&&ct()},$e=(...n)=>e=>{n.includes(e)||ct()},zr=n=>e=>{Pt(e),e>n&&ct()},Vt=n=>e=>{e!==null&&n(e)},Mt=(n,e={})=>t=>{kh(t),(Object.keys(n).some(i=>!Object.hasOwn(t,i))||Object.keys(t).some(i=>!Object.hasOwn(n,i)&&!Object.hasOwn(e,i)))&&ct();for(const[i,r]of Object.entries(n))r(t[i]);for(const[i,r]of Object.entries(e))Object.hasOwn(t,i)&&r(t[i])},Vn=(n,e)=>t=>{(!Array.isArray(t)||t.length>e)&&ct();for(const i of t)n(i)},Hf=n=>{Vn(it,8)(n),new Set(n).size!==n.length&&ct()},Hr=n=>{Mt({x:Bs,y:Bs,z:$e(0)})(n),ic(n)},Bh={protocolVersion:$e(Ih),rulesVersion:$e(Ph)},vS=n=>{Mt({arrow:$e("normal","bomb","teleport"),angle:Bs,power:Bs,facing:$e(-1,1)})(n),Xm(n)},sc=n=>{Mt({id:it,actorId:it,lifeId:it,epoch:Pt,roundId:it,kind:$e("shot","pass"),aim:Vt(vS)})(n),n.kind==="shot"!=(n.aim!==null)&&ct()},yS=n=>{Mt({id:it,feet:Hr,velocity:Hr,facing:$e(-1,1),health:zr(100),eliminated:En})(n)},bS=Mt({memberId:it,actorId:it,lifeId:it,slotId:$e("s0","s1","s2","s3","s4","s5","s6","s7"),kind:$e("human","npc"),present:En,leaving:En,idle:En,missedWindows:zr(3),spawnPending:En,bombReady:En}),Qm=Mt({memberId:it,actorId:it,lifeId:it,slotId:$e("s0","s1","s2","s3","s4","s5","s6","s7"),kind:$e("human","npc")}),eg=n=>Mt({fromRevision:Pt,toRevision:Pt,removed:Vn(zr(n.maxCellIndex),Wm.maxDeltaCells)}),tg=n=>Mt({kind:$e("terrain","head","body","bounds","timeout"),time:Bs,point:Hr,normal:Hr},{actorId:it,cell:zr(n.maxCellIndex)}),MS=Vn(Mt({time:Bs,poses:Vn(Mt({actorId:it,feet:Hr}),8)}),902),SS=Mt({ok:En},{reason:$e("not-upward","no-support","occupied-or-blocked"),feet:Hr}),wS=n=>Mt({action:sc,roster:Vn(Qm,8),contact:tg(n),delta:eg(n),motion:MS,startedAt:Vt(Pt),endsAt:Vt(Pt)}),ES=n=>Mt({action:sc,roster:Vn(Qm,8),contact:tg(n),damage:Vn(Mt({actorId:it,amount:zr(100),cause:$e("direct","blast","physics")}),408),delta:eg(n),teleport:Vt(SS)}),TS=n=>{try{Ac(n)}catch{ct()}},AS=Mt({template:n=>{(typeof n!="string"||!Km.test(n))&&ct()}}),RS=n=>{kh(n);let e;try{e=Uh(n.version)}catch{return ct()}const t=i=>{Mt({version:$e(e.version),revision:Pt,cell:$e(e.cell),minX:$e(e.minX),minY:$e(e.minY),width:$e(e.width),height:$e(e.height),bedrockY:$e(e.bedrockY),spawnPads:Vn(Hr,8),maskHex:r=>{(typeof r!="string"||r.length!==e.maskHexLength||!/^[0-9a-f]+$/.test(r))&&ct()}})(i);try{Fh(i,e.version)}catch{ct()}};Mt({version:$e("skirmish-1","skirmish-2","skirmish-3"),id:it,epoch:Pt,revision:Pt,state:$e("active","suspended","aborted"),phase:$e("planning","resolving","settling"),terrain:t,actors:Vn(yS,8),members:Vn(bS,8),roundSerial:Pt,roundId:it,completedRounds:zr(20),resetIn:Vt(zr(2)),slotOrder:Hf,priority:Hf,drainThenBoundary:En,planningStartedAt:Vt(Pt),deadlineAt:Vt(Pt),launchAt:Vt(Pt),contactAt:Vt(Pt),resolutionEndsAt:Vt(Pt),locks:Vn(Mt({actorId:it,locked:En,plan:Vt(sc)}),8),action:Vt(sc),effect:Vt(wS(e)),lastEvent:Vt(ES(e)),self:Mt({memberId:Vt(it),actorId:Vt(it),lifeId:Vt(it),pending:En,canAct:En,bombReady:En,opportunities:Pt,bombReadyAt:Pt}),abortReason:Vt($e("settling-exhausted"))},{tuning:TS,layout:AS,wind:i=>{(typeof i!="number"||!Number.isFinite(i)||i===0)&&ct()}})(n),Object.hasOwn(n,"layout")!==!!Ic(n.version).terrain&&ct(),Object.hasOwn(n,"wind")&&!(Math.abs(n.wind)<=(n.tuning?.windMax??0))&&ct()};function ng(n){new TextEncoder().encode(JSON.stringify(n)).byteLength>Lh.maxSnapshotBytes&&ct()}function ig(n){ng(n),Mt({...Bh,roomKind:$e("skirmish"),arenaId:it,serverNow:Pt,snapshotRevision:Pt,retryHorizonMs:Pt,membership:Mt({memberId:it,actorId:it,lifeId:Vt(it),status:$e("pending","active","idle","left","suspended","respawn","aborted"),canAct:En,bombReady:En}),connections:Vn(Mt({actorId:it,label:i=>{(typeof i!="string"||i.length>80)&&ct()},kind:$e("human","npc"),connected:En}),8),state:RS})(n);const e=n,t=e.state;return Nh(t.actors),(t.id!==e.arenaId||e.retryHorizonMs<1||e.retryHorizonMs>Lh.controlRetryMs||t.self.lifeId!==e.membership.lifeId||t.self.canAct!==e.membership.canAct||t.self.bombReady!==e.membership.bombReady||t.self.actorId!==null&&t.self.actorId!==e.membership.actorId)&&ct(),(t.slotOrder.length!==8||t.slotOrder.some(i=>!/^s[0-7]$/.test(i))||new Set(t.members.map(i=>i.actorId)).size!==t.members.length||new Set(t.members.map(i=>i.memberId)).size!==t.members.length||new Set(t.members.map(i=>i.slotId)).size!==t.members.length)&&ct(),(t.state==="active"&&t.priority.some(i=>!t.members.some(r=>r.actorId===i))||t.actors.some(i=>!t.members.some(r=>r.actorId===i.id))||t.locks.some(i=>!t.priority.includes(i.actorId)||i.plan!==null&&(!i.locked||i.plan.actorId!==i.actorId||i.plan.epoch!==t.epoch||i.plan.roundId!==t.roundId||!t.members.some(r=>r.actorId===i.actorId&&r.lifeId===i.plan.lifeId)||t.phase==="planning"&&i.actorId!==e.membership.actorId)))&&ct(),t.state!=="active"&&(t.self.canAct||t.action!==null||t.effect!==null||t.locks.some(i=>i.locked||i.plan!==null)||[t.deadlineAt,t.launchAt,t.contactAt,t.resolutionEndsAt].some(i=>i!==null))&&ct(),t.state==="suspended"&&(t.phase!=="planning"||t.planningStartedAt!==null)&&ct(),(t.action&&(t.action.kind!=="shot"||t.action.epoch!==t.epoch)||t.effect&&(t.phase!=="settling"||t.effect.action.epoch!==t.epoch||t.effect.startedAt===null||t.effect.endsAt===null||t.effect.startedAt>t.effect.endsAt||t.effect.startedAt>e.serverNow))&&ct(),e.membership.canAct&&(e.membership.status!=="active"||t.state!=="active"||t.phase!=="planning"||t.deadlineAt===null||!t.priority.includes(e.membership.actorId))&&ct(),e}function CS(n){ng(n),Mt({ack:Mt({...Bh,arenaId:it,memberId:it,actionId:it,kind:$e("join","leave","rejoin","shot","pass"),epoch:Pt,roundId:Vt(it),lifeId:Vt(it),acceptedRevision:Pt,outcome:$e("accepted","existing-membership")}),current:Mt({type:$e("current"),envelope:t=>{ig(t)}})},{reassignedFrom:Mt({arenaId:it,memberId:it})})(n);const e=n;return(e.ack.outcome==="existing-membership"&&e.ack.kind!=="join"||e.reassignedFrom&&e.ack.kind!=="rejoin"||["shot","pass"].includes(e.ack.kind)&&(e.ack.lifeId===null||e.ack.roundId===null))&&ct(),e}function Gf(n){kh(n);let e;try{e=Ic(n.preset)}catch{return ct()}return Mt({...Bh,roomKind:$e("skirmish"),serverNow:Pt,preset:$e(e.version),planningMs:$e(e.planningMs),slots:$e(e.slots),minimumParticipants:$e(e.minimumParticipants),resetAfter:$e(e.resetAfter),idleAfter:$e(e.idleAfter),retryHorizonMs:t=>{Pt(t),(t<1||t>Lh.controlRetryMs)&&ct()}})(n),n}const Eo={protocolVersion:Ih,rulesVersion:Ph},Tl=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function IS(n){return`${Bm(n).identity}:skirmish-locator-v1:${encodeURIComponent(`${n.mode}:${n.serviceId}`)}`}const PS={404:"not_found",403:"membership",410:"expired"};function Vf(n){return n instanceof vi&&n.code!==null&&PS[n.status]===n.code?"gone":"unknown"}const LS=new Set(["validation","membership","wrong_epoch","wrong_life","wrong_round","retry_retired","stale_revision","conflict","inactive","cooldown","wrong_actor","deadline","wrong_phase","not_found","room_capacity","socket_capacity","debt_capacity","control_capacity","membership_capacity","rate_capacity","protocol_version"]);class DS{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};session;storage;locatorKey;factory;socket=null;poll=null;recovery=null;generation=0;socketGeneration=0;stopped=!1;observedServerTime=0;observedAt=0;hasClock=!1;rejected=null;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new Ec(e,t,i),this.storage=i,this.locatorKey=IS(this.session.endpoint),this.factory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>this.hasClock?this.observedServerTime+Math.max(0,performance.now()-this.observedAt):0;get savedArena(){try{const e=JSON.parse(this.storage?.getItem(this.locatorKey)??"null");return Tl(e)&&Object.keys(e).sort().join(",")==="arenaId,guestId,memberId"&&e.guestId===this.session.guestId&&typeof e.arenaId=="string"&&typeof e.memberId=="string"?{arenaId:e.arenaId,memberId:e.memberId}:null}catch{return null}}get lockAgain(){return!!this.room&&this.room.membership.canAct&&this.rejected===this.opportunity(this.room)}opportunity(e){return JSON.stringify([e.arenaId,e.membership.memberId,e.membership.actorId,e.membership.lifeId,e.state.epoch,e.state.roundId])}scope(){return this.room?{arenaId:this.room.arenaId,memberId:this.room.membership.memberId}:{}}check(e,t){if(this.session.assertRevision(t),this.generation!==e)throw Error("The public arena context changed while this request was pending.")}emit(){this.onChange()}install(e,t,i=!1){const r=ig(e);if(!i&&(t.arenaId&&t.arenaId!==r.arenaId||t.memberId&&t.memberId!==r.membership.memberId))throw Error("The public response belongs to a different membership.");if(this.room&&r.arenaId===this.room.arenaId&&r.membership.memberId===this.room.membership.memberId){if(r.snapshotRevision<this.room.snapshotRevision)return;if(r.state.epoch<this.room.state.epoch||r.state.epoch===this.room.state.epoch&&r.state.revision<this.room.state.revision)throw Error("The public response would reverse the confirmed world.");if(r.snapshotRevision===this.room.snapshotRevision&&(r.state.epoch!==this.room.state.epoch||r.membership.actorId!==this.room.membership.actorId||r.membership.lifeId!==this.room.membership.lifeId))throw Error("A public identity transition needs a newer snapshot.");if(r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return}else if(this.room&&!i)throw Error("The public response changed membership without an explicit rejoin.");i&&this.disconnect(),this.room=r,this.observedServerTime=this.hasClock?Math.max(this.now(),r.serverNow):r.serverNow,this.observedAt=performance.now(),this.hasClock=!0;try{this.storage?.setItem(this.locatorKey,JSON.stringify({arenaId:r.arenaId,memberId:r.membership.memberId,guestId:this.session.guestId}))}catch{}this.emit()}applyReply(e,t){const i=CS(e),r=i.ack,s=t.body;if(r.kind!==s.kind||r.actionId!==s.actionId)throw Error("The public acknowledgement does not match the pending action.");if(r.outcome==="existing-membership"&&(s.kind!=="join"||r.acceptedRevision!==i.current.envelope.state.revision||r.arenaId!==i.current.envelope.arenaId||r.memberId!==i.current.envelope.membership.memberId||r.epoch!==i.current.envelope.state.epoch))throw Error("Invalid current-membership acknowledgement.");if((s.kind==="shot"||s.kind==="pass")&&(r.arenaId!==t.scope.arenaId||r.memberId!==s.memberId||r.lifeId!==s.lifeId||r.roundId!==s.roundId||r.epoch!==s.epoch))throw Error("The public acknowledgement changed action scope.");const a=i.reassignedFrom,o=!!a;if(a&&(s.kind!=="rejoin"||a.arenaId!==t.scope.arenaId||a.memberId!==t.scope.memberId))throw Error("The public reassignment does not match this explicit rejoin.");if(!a&&s.kind!=="join"&&(r.arenaId!==t.scope.arenaId||r.memberId!==t.scope.memberId))throw Error("The public acknowledgement changed membership.");return this.install(i.current.envelope,s.kind==="join"&&!this.room?{}:t.scope,o),o}async join(){if(this.busy||this.pending)throw Error("Finish the pending public action first.");const e=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const t=await this.session.ensure();this.check(e,t.revision);const i=Gf(await ws(this.session,"/skirmish/rules",di));this.check(e,t.revision),this.pending={path:"/skirmish/join",body:Object.freeze({...Eo,kind:"join",actionId:crypto.randomUUID(),issuedAt:i.serverNow}),revision:t.revision,scope:this.scope()}}finally{e===this.generation&&(this.busy=!1,this.emit())}return this.retry()}async control(e,t=!1){if(!this.room||this.pending||this.busy)throw Error("Reconnect or finish the pending public action first.");const i=this.session.credentials();if(!i)throw Error("The original guest identity is required.");const r=this.generation,s=this.scope();this.busy=!0,this.stopped=!1,this.emit();try{await this.refresh(s.arenaId,s.memberId),this.check(r,i.revision);const a=Gf(await ws(this.session,"/skirmish/rules",di));this.check(r,i.revision);const o=this.room;if(!o||o.arenaId!==s.arenaId||o.membership.memberId!==s.memberId)throw Error("Public membership changed.");this.pending={path:`/skirmish/${encodeURIComponent(o.arenaId)}/commands`,body:Object.freeze({...Eo,kind:e,actionId:crypto.randomUUID(),issuedAt:a.serverNow,memberId:o.membership.memberId,epoch:o.state.epoch,expectedRevision:o.state.revision}),revision:i.revision,scope:this.scope()}}finally{r===this.generation&&(this.busy=!1,this.emit())}try{return await this.retry()}catch(a){if(t||r!==this.generation||!(a instanceof vi)||a.code!=="stale_revision")throw a;const o=this.room,c=o?.membership.status;if(!o||o.arenaId!==s.arenaId||o.membership.memberId!==s.memberId||this.pending||!c||(e==="rejoin"?!["idle","left","aborted"].includes(c):["left","idle"].includes(c)))throw a;return this.control(e,!0)}}async command(e){const t=this.room,i=this.session.credentials();if(!t||!i||this.busy||this.pending||!t.membership.canAct||!t.membership.lifeId)throw Error("This public planning opportunity is unavailable.");return this.rejected=null,this.pending={path:`/skirmish/${encodeURIComponent(t.arenaId)}/commands`,body:Object.freeze({...Eo,...e,...e.kind==="shot"?{aim:Object.freeze({...e.aim})}:{},actionId:crypto.randomUUID(),memberId:t.membership.memberId,lifeId:t.membership.lifeId,epoch:t.state.epoch,roundId:t.state.roundId,expectedRevision:t.state.revision}),revision:i.revision,scope:this.scope()},this.retry()}async retry(){const e=this.pending;if(!e||this.busy)throw Error("No public action is ready to retry.");if(this.session.assertRevision(e.revision),e.unadmitted&&e.scope.arenaId){const i=this.room,r=e.body;if(!i||i.arenaId!==e.scope.arenaId||i.membership.memberId!==e.scope.memberId||r.epoch!==void 0&&i.state.epoch!==r.epoch||r.lifeId!==void 0&&(i.membership.lifeId!==r.lifeId||i.state.roundId!==r.roundId))throw this.pending=null,this.emit(),Error("The public opportunity changed. Choose a new action explicitly.")}let t=this.generation;this.stopped=!1,this.busy=!0,this.emit();try{const i=await this.session.request(e.path,e.body);if(this.check(t,e.revision),this.pending!==e)throw Error("The pending public action changed.");const r=this.applyReply(i,e);return this.check(t,e.revision),this.pending=null,r&&(t=++this.generation),e.body.kind==="leave"?this.disconnect():this.openSocket(),this.room}catch(i){if(t!==this.generation)throw i;if(this.session.revision!==e.revision)this.forgetArena();else if(i instanceof vi&&i.transient)["admission_rate","command_rate"].includes(i.code??"")||(e.uncertain=!0),e.unadmitted=!e.uncertain;else if(ar(i,di))this.pending=null,this.rejected=null;else if(i instanceof vi&&LS.has(i.code??"")){if(this.pending=null,e.body.kind==="shot"&&this.room&&this.room.state.epoch===e.body.epoch&&this.room.state.roundId===e.body.roundId&&this.room.membership.lifeId===e.body.lifeId&&(this.rejected=this.opportunity(this.room)),this.room)try{await this.refresh()}catch(r){if(ar(r,di))throw r}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(r){if(ar(r,di))throw r}throw i}finally{t===this.generation&&(this.busy=!1,this.emit())}}async refresh(e=this.room?.arenaId??this.savedArena?.arenaId,t=this.room?.membership.memberId??this.savedArena?.memberId){if(!e||!t)return;const i=this.session.credentials();if(!i)throw Error("The original guest identity is required to reconnect.");const r=this.generation;try{const s=await ws(this.session,`/skirmish/${encodeURIComponent(e)}`,di);this.check(r,i.revision),this.install(s,{arenaId:e,memberId:t})}catch(s){throw this.check(r,i.revision),ar(s,di)&&this.room?.arenaId===e&&this.room.membership.memberId===t&&(this.pending?.scope.arenaId===e&&this.pending.scope.memberId===t&&this.pending.revision===i.revision&&(this.pending=null),this.rejected=null,this.emit()),Vf(s)==="gone"?(this.forgetArena(),Error("This public membership is no longer available. Join explicitly with the same guest.")):s}}async probeSavedArena(){const e=this.savedArena,t=this.session.credentials();if(!e||!t||this.room||this.pending||this.busy)return"unknown";const i=this.generation,r=()=>this.generation===i&&this.session.revision===t.revision&&!this.room&&!this.pending&&!this.busy&&this.savedArena?.arenaId===e.arenaId&&this.savedArena.memberId===e.memberId;let s;try{await ws(this.session,`/skirmish/${encodeURIComponent(e.arenaId)}`,di),s="exists"}catch(a){s=Vf(a)}return r()?(s==="gone"&&this.forgetArena(),s):"unknown"}async reconnect(){if(this.pending||this.busy)throw Error("Retry the pending public action first.");if(!this.room&&!this.savedArena)throw Error("No saved public membership is available.");this.stopped=!1;const e=this.generation;if(await this.refresh(),e!==this.generation)throw Error("The public context changed.");this.openSocket()}receive(e){if(!(!this.session.credentials()||!this.room||this.stopped||!Tl(e)||e.type!=="skirmish")){if(Object.keys(e).sort().join(",")!=="envelope,type")throw Error("Unsupported public event.");this.install(e.envelope,this.scope())}}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e||!this.factory)return;const t=this.generation,i=++this.socketGeneration,r=this.scope(),s=this.factory(`${this.session.serviceId.replace(/^http/,"ws")}/skirmish/events`);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===i&&this.generation===t&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={...Eo,type:"authenticate",token:e.token,arenaId:r.arenaId,memberId:r.memberId,lastRevision:this.room?.snapshotRevision??0};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));if(!Tl(c)||c.type!=="skirmish")throw Error("Unsupported public stream message.");if(this.receive(c),!a())return;this.connected=!0,this.emit()}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),(a()||this.generation===t&&this.session.revision===e.revision&&!this.stopped)&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.poll||this.stopped)return;const e=this.generation;this.poll=setTimeout(async()=>{if(this.poll=null,!(this.stopped||e!==this.generation)){try{await this.refresh()}catch(t){e===this.generation&&this.onError(t)}e===this.generation&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.recovery||this.stopped)return;const e=this.generation;this.recovery=setTimeout(async()=>{if(this.recovery=null,!(this.stopped||e!==this.generation))try{await this.refresh(),e===this.generation&&this.openSocket()}catch(t){e===this.generation&&(this.onError(t),this.scheduleRecovery())}},1500)}disconnect(){this.socketGeneration++;const e=this.socket;this.socket=null,e?.close(),this.connected=!1,this.poll&&clearTimeout(this.poll),this.recovery&&clearTimeout(this.recovery),this.poll=null,this.recovery=null}close(){this.stopped=!0,this.generation++,this.disconnect(),this.busy=!1,this.emit()}forgetArena(){this.close(),this.room=null,this.pending=null,this.rejected=null,this.hasClock=!1;try{this.storage?.removeItem(this.locatorKey)}catch{}this.emit()}}function NS(n){const e=n.state,t=e.locks.find(a=>a.actorId===n.membership.actorId),i=n.membership.status,s=["idle","left"].includes(i)&&e.state==="suspended"?"Paused — no active players. Rejoin when ready to play.":i==="pending"?"Your place is reserved. You enter at the next planning window.":i==="idle"?"Spectating. Inactive after three missed windows; Rejoin when ready to play.":i==="left"?"Spectating. You left public play; Rejoin when ready to play.":i==="aborted"?"This arena stopped safely. Rejoin to start a fresh arena.":i==="respawn"?"Waiting for a clear place to respawn.":i==="suspended"?"The empty arena is suspended. Reconnect to return.":e.phase!=="planning"?"Arrows resolve in the published priority order.":n.membership.canAct?"Choose an arrow or pass. Locks are final.":t?.locked?t.plan?.kind==="pass"?"Your pass is locked.":"Your arrow is locked.":"You will respawn at the next planning window.";return{phase:i==="active"?e.phase.toUpperCase():i.toUpperCase(),turn:s,warning:e.resetIn!==null?`Fresh terrain in ${e.resetIn} completed round${e.resetIn===1?"":"s"}.`:"",priority:e.priority,locks:e.locks.map(a=>({actorId:a.actorId,text:a.locked?"Locked":"Planning"})),canRejoin:["idle","left","aborted"].includes(i),canLeave:!["left","idle"].includes(i)}}function zh(n){return n.state.members.map((e,t)=>{const i=n.state.actors.find(s=>s.id===e.actorId),r=n.connections.find(s=>s.actorId===e.actorId)?.label??`Archer ${t+1}`;return{actorId:e.actorId,kind:e.kind,label:r,health:i?.health??0,text:`${r}${e.actorId===n.membership.actorId?" · you":""} · ${e.spawnPending||!i?"waiting to respawn":i.eliminated?"respawning next round":`${i.health} health`}${n.state.locks.find(s=>s.actorId===e.actorId)?.locked?" · locked":""}`}})}function US(n=Oh){const e=Ic(n),t=e.minimumParticipants===4?"four":String(e.minimumParticipants);return`Shared ${e.planningMs/1e3}-second planning · at least ${t} archers · respawn next round · fresh terrain every ${e.resetAfter} completed rounds.`}const FS=["s0","s1","s2","s3","s4","s5","s6","s7"],OS=Object.freeze({s0:{slotId:"s0",name:"amber",hex:"#e69f00",symbol:"A"},s1:{slotId:"s1",name:"sky",hex:"#56b4e9",symbol:"B"},s2:{slotId:"s2",name:"emerald",hex:"#009e73",symbol:"C"},s3:{slotId:"s3",name:"lemon",hex:"#f0e442",symbol:"D"},s4:{slotId:"s4",name:"cobalt",hex:"#0072b2",symbol:"E"},s5:{slotId:"s5",name:"vermilion",hex:"#d55e00",symbol:"F"},s6:{slotId:"s6",name:"rose",hex:"#cc79a7",symbol:"G"},s7:{slotId:"s7",name:"violet",hex:"#8b5fd0",symbol:"H"}});function kS(n){return typeof n=="string"&&FS.includes(n)}const BS=Object.freeze({slotId:"s0",name:"grey",hex:"#8a8f87",symbol:"?"});function Ho(n){return kS(n)?OS[n]:BS}function zS(n){const e=parseInt(n.slice(1),16),t=r=>{const s=r/255;return s<=.03928?s/12.92:((s+.055)/1.055)**2.4};return .2126*t(e>>16&255)+.7152*t(e>>8&255)+.0722*t(e&255)>.3?"#141c18":"#ffffff"}function rg(n,e,t){const i=Ho(e.slotId);return{actorId:e.actorId,slotId:e.slotId,color:i.hex,ink:zS(i.hex),symbol:i.symbol,colorName:i.name,label:t,own:e.actorId===n.membership.actorId,npc:e.kind==="npc"}}const sg=n=>`${n.label}${n.own?", you":""}${n.npc?", NPC":""}, ${n.colorName} ${n.symbol}`;function HS(n){const e=n.state,t=zh(n),i=e.phase==="resolving"&&e.state==="active"?e.action?.actorId??null:null,r=[];for(const s of e.priority){const a=e.members.findIndex(u=>u.actorId===s);if(a<0)continue;const o=rg(n,e.members[a],t[a].label),c=r.length+1,l=i===s;r.push({...o,position:c,current:l,ariaLabel:`Priority ${c}: ${sg(o)}${l?", resolving now":""}`})}return r}function GS(n){const e=zh(n),t=n.state.slotOrder,i=r=>{const s=t.indexOf(r);return s<0?99:s};return n.state.members.map((r,s)=>{const a=n.state.actors.find(d=>d.id===r.actorId),o=rg(n,r,e[s].label),c=r.spawnPending||!a?"pending":a.eliminated?"respawning":"alive",l=c==="pending"?"Waiting":c==="respawning"?"Respawning":`${a.health}`,u=r.idle||r.leaving||!r.present;return{row:{...o,health:c==="alive"?a.health:0,status:c,valueText:l,inactive:u,locked:n.state.locks.find(d=>d.actorId===r.actorId)?.locked??!1,ariaLabel:`${sg(o)}: ${c==="alive"?`${l} health`:l.toLowerCase()}${u?", inactive":""}`},rank:i(r.slotId)}}).sort((r,s)=>r.rank-s.rank).slice(0,8).map(r=>r.row)}const Wf={kind:"none",text:"",stateText:"",remainingMs:null,expired:!1,label:""};function ag(n,e){if(!n||!Number.isFinite(e))return Wf;if(n.state==="suspended")return{kind:"paused",text:"Paused",stateText:"No active players",remainingMs:null,expired:!1,label:"Arena paused, no active players"};if(n.state==="aborted")return{kind:"stopped",text:"Stopped",stateText:"Arena stopped",remainingMs:null,expired:!1,label:"Arena stopped"};if(n.state!=="active")return Wf;if(n.phase!=="planning"||n.deadlineAt===null)return{kind:"resolving",text:"Resolving",stateText:"Arrows in flight",remainingMs:null,expired:!1,label:"Arrows are resolving"};const t=Math.max(0,n.deadlineAt-e),i=Math.ceil(t/1e3),r=t===0;return{kind:"planning",text:`${i}s`,stateText:r?"Locking":"Planning",remainingMs:t,expired:r,label:r?"Planning time is up, waiting for the server":`${i} second${i===1?"":"s"} of planning remaining`}}class VS{seen=null;observe(e,t){const i=ag(e,t);if(i.kind!=="planning"||i.remainingMs===null||this.seen===`${e.id}:${e.epoch}:${e.roundId}`)return null;this.seen=`${e.id}:${e.epoch}:${e.roundId}`;const r=e.planningStartedAt!==null&&e.deadlineAt!==null?e.deadlineAt-e.planningStartedAt:null;return{roundId:e.roundId,nativeMs:r,firstRemainingMs:i.remainingMs,marginMs:r===null?null:r-i.remainingMs}}}const Hh=Object.freeze({mode:"inline",controlsVisible:!1}),fr=(n,e={})=>({state:n,cancelHeld:!0,requestNative:!1,exitNative:!1,...e}),Kr=n=>({state:n,cancelHeld:!1,requestNative:!1,exitNative:!1}),Pr=n=>n.mode!=="inline";function WS(n,e){return n.mode!=="inline"?Kr(n):e?fr({mode:"requesting",controlsVisible:!1},{requestNative:!0}):fr({mode:"fallback",controlsVisible:!1})}function XS(n){return n.mode==="requesting"?fr({...n,mode:"native"}):Kr(n)}function Xf(n){return n.mode==="requesting"?fr({...n,mode:"fallback"}):Kr(n)}function $S(n){return n.mode==="native"||n.mode==="requesting"?fr(Hh):Kr(n)}function YS(n){return n.mode==="inline"?Kr(n):fr(Hh,{exitNative:n.mode==="native"||n.mode==="requesting"})}function jS(n,e){return Pr(n)&&n.controlsVisible!==e?fr({...n,controlsVisible:e}):Kr(n)}function qS(n){return Pr(n)?fr(n):Kr(n)}class KS{state=Hh;available=!1;d;constructor(e){this.d=e,e.expand.addEventListener("click",()=>this.expand()),e.exit.addEventListener("click",()=>this.exit()),e.controlsToggle.addEventListener("click",()=>this.apply(jS(this.state,!this.state.controlsVisible)));for(const t of["fullscreenchange","webkitfullscreenchange"])e.doc.addEventListener(t,()=>this.fullscreenChanged());e.doc.addEventListener("keydown",t=>{t.code==="Escape"&&this.state.mode==="fallback"&&!t.defaultPrevented&&!this.d.isDrawing()&&this.exit()}),e.win.addEventListener("pagehide",()=>this.exit());for(const t of["resize","orientationchange"])e.win.addEventListener(t,()=>this.apply(qS(this.state)));this.render()}nativeSupported(){const e=this.d;return!!(e.doc.fullscreenEnabled??e.doc.webkitFullscreenEnabled)&&!!(e.shell.requestFullscreen??e.shell.webkitRequestFullscreen)}nativeElement(){return this.d.doc.fullscreenElement??this.d.doc.webkitFullscreenElement??null}setAvailable(e){this.available=e,e||this.exit(),this.render()}expand(){this.available&&this.d.canExpand()&&this.apply(WS(this.state,this.nativeSupported()))}exit(){this.apply(YS(this.state))}fullscreenChanged(){if(this.nativeElement()===this.d.shell&&this.state.mode==="inline"){this.leaveNative();return}this.apply(this.nativeElement()===this.d.shell?XS(this.state):$S(this.state))}apply(e){const t=this.state;e.cancelHeld&&this.d.cancelInput(),this.state=e.state,e.requestNative&&this.requestNative(),e.exitNative&&this.nativeElement()===this.d.shell&&this.leaveNative(),this.render(),t.mode==="inline"&&Pr(this.state)?this.d.exit.focus():Pr(t)&&!Pr(this.state)&&(this.d.expand.hidden?this.d.focusFallback?.():this.d.expand.focus())}leaveNative(){try{Promise.resolve((this.d.doc.exitFullscreen??this.d.doc.webkitExitFullscreen)?.call(this.d.doc)).catch(()=>{})}catch{}}requestNative(){const e=this.d.shell;try{const t=(e.requestFullscreen??e.webkitRequestFullscreen).call(e);Promise.resolve(t).catch(()=>this.apply(Xf(this.state)))}catch{this.apply(Xf(this.state))}}render(){const e=this.state,t=Pr(e),i=this.d;i.shell.classList.toggle("is-expanded",t),i.shell.classList.toggle("controls-open",t&&e.controlsVisible),i.doc.body.classList.toggle("arena-expanded",t),i.setModal?.(t),i.exit.hidden=!t,i.controlsToggle.hidden=!t,i.expand.hidden=t||!this.available,i.controlsToggle.setAttribute("aria-expanded",String(e.controlsVisible)),i.controlsToggle.textContent=e.controlsVisible?"Hide controls":"Show controls",i.exit.textContent=e.mode==="fallback"?"Exit expanded view":"Exit full screen",i.onChange?.(e)}}function $f(n,e,t,i,r){const s=Math.max(0,i.x0),a=Math.min(e,i.x1),o=Math.max(0,i.y0),c=Math.min(t,i.y1);if(!(a<=s))for(let l=o;l<c;l++)n.fill(r,l*e+s,l*e+a)}function JS(n,e,t){const i=new Array(n*e).fill(0);for(const r of t)r.op==="add"&&$f(i,n,e,r,1);for(const r of t)r.op==="clear"&&$f(i,n,e,r,0);return i}function ZS(n,e){const t=r=>{const s=(r-n.minX)/n.cell;if(!Number.isInteger(s))throw new RangeError("Template bound is not cell-aligned.");return s},i=r=>{const s=(r-n.minY)/n.cell;if(!Number.isInteger(s))throw new RangeError("Template bound is not cell-aligned.");return s};return{x0:t(e.x0),x1:t(e.x1),y0:i(e.y0),y1:i(e.y1)}}function QS(n){if(n.mode!=="fixed"||!n.fixed)throw new RangeError("A fixed template is required.");const e=Cn(n.profile),{cell:t,width:i,height:r,minX:s,minY:a,bedrockY:o}=e,c=n.fixed.parts.map(d=>({op:d.op,...ZS(e,d)})),l=JS(i,r,c),u=n.fixed.pads.map(([d,h])=>({x:d,y:h,z:0}));return{version:e.version,revision:0,cell:t,minX:s,minY:a,width:i,height:r,bedrockY:o,cells:l,spawnPads:u}}const og={kind:"terrain-template",id:"arena-2",version:1,weight:0,tags:["authored","fallback"],profile:"arena-2",mode:"fixed",fixed:{parts:[{op:"add",x0:-39,x1:-32,y0:-8,y1:0},{op:"add",x0:-28,x1:-21,y0:4.5,y1:6},{op:"add",x0:-18.5,x1:-12,y0:10.5,y1:12},{op:"add",x0:-8,x1:-1,y0:-8,y1:3},{op:"add",x0:2,x1:8.5,y0:7.5,y1:9},{op:"add",x0:12,x1:19,y0:-8,y1:0},{op:"add",x0:22,x1:28.5,y0:13.5,y1:15},{op:"add",x0:32,x1:39,y0:4.5,y1:6},{op:"add",x0:-24,x1:-20,y0:16,y1:17},{op:"add",x0:-5.5,x1:-2,y0:16,y1:17},{op:"add",x0:7.5,x1:11,y0:20,y1:21},{op:"add",x0:27.5,x1:31.5,y0:24.5,y1:25.5},{op:"add",x0:-28,x1:-27.25,y0:6,y1:9.5},{op:"add",x0:-2,x1:-1,y0:3,y1:6.5},{op:"add",x0:17.5,x1:18.5,y0:0,y1:3.5},{op:"add",x0:32,x1:32.75,y0:6,y1:9.25}],pads:[[-35,0],[-25,6],[-15,12],[-5,3],[5,9],[15,0],[25,15],[35,6]]},voids:{count:{min:2,max:4},width:{min:2,max:40}},lanes:{padHeadroom:4.5,launchReach:2,skyBandMinY:22,skyMaxFill:.05}};Cn("arena-1").bounds;function Al(n="arena-1"){if(n==="arena-2")return QS(og);const e=Cn(n),{cell:t,width:i,height:r,minX:s,minY:a,bedrockY:o}=e,c=new Array(e.cellCount).fill(0);for(let u=0;u<r;u++)for(let d=0;d<i;d++){const h=s+(d+.5)*t,p=a+(u+.5)*t;(p<0||(h<-25||h>25)&&p>=5&&p<6||Math.abs(h)>10&&Math.abs(h)<13&&p>=11&&p<12)&&(c[u*i+d]=1)}const l=[-28,-20,-16,-8,8,16,20,28].map(u=>({x:u,y:0,z:0}));return{version:e.version,revision:0,cell:t,minX:s,minY:a,width:i,height:r,bedrockY:o,cells:c,spawnPads:l}}function cg(n){if(!n||typeof n!="object"||Array.isArray(n))throw new RangeError("Invalid arena snapshot.");const e=Cn(n.version);if(n.cell!==e.cell||n.width!==e.width||n.height!==e.height||n.minX!==e.minX||n.minY!==e.minY||n.bedrockY!==e.bedrockY||!Number.isSafeInteger(n.revision)||n.revision<0||!Array.isArray(n.cells)||n.cells.length!==e.cellCount||!Array.isArray(n.spawnPads)||n.spawnPads.length!==8)throw new RangeError("Invalid arena snapshot.");return e}function ew(n){return cg(n).bounds}function lg(n){if(cg(n),Fh(n),!n.cells.every(e=>e===0||e===1))throw new RangeError("Invalid occupancy mask.")}function tw(n,e){const t=Math.floor(e/n.width),i=e%n.width;return{minX:n.minX+i*n.cell,maxX:n.minX+(i+1)*n.cell,minY:n.minY+t*n.cell,maxY:n.minY+(t+1)*n.cell}}const Yf=1e3,nw=6,qd=1e-9,jf={terrain:0,head:1,body:2,bounds:3,timeout:4};function iw(n,e){if(n.time<e.time-qd)return!0;if(Math.abs(n.time-e.time)>qd)return!1;const t=jf[n.kind]-jf[e.kind];if(t!==0)return t<0;const i=n.actorId??"",r=e.actorId??"";return i!==r?i<r:(n.cell??0)<(e.cell??0)}function rw(n,e,t){const i=qt(n,t),r=ec(n,t),s=1e-6,a=i.x>=e.minX-s&&i.x<=e.maxX+s,o=i.y>=e.minY-s&&i.y<=e.maxY+s,c=[{d:Math.abs(i.y-e.maxY),x:0,y:1,incoming:-r.y,on:a},{d:Math.abs(i.y-e.minY),x:0,y:-1,incoming:r.y,on:a},{d:Math.abs(i.x-e.minX),x:-1,y:0,incoming:r.x,on:o},{d:Math.abs(i.x-e.maxX),x:1,y:0,incoming:-r.x,on:o}].filter(p=>p.on&&p.d<=s);if(!c.length)return null;const l=Math.min(...c.map(p=>p.d)),u=c.filter(p=>p.d<=l+1e-9),d=u.filter(p=>p.incoming>0),h=d.length?d:u;return h.sort((p,g)=>p.d-g.d||g.y-p.y),{x:h[0].x,y:h[0].y,z:0}}function sw(n,e,t){if(n.wind){const o=rw(n,e,t);if(o)return o}const i=qt(n,t),r=ec(n,t),s=[{d:Math.abs(i.y-e.maxY),x:0,y:1,incoming:-r.y},{d:Math.abs(i.y-e.minY),x:0,y:-1,incoming:r.y},{d:Math.abs(i.x-e.minX),x:-1,y:0,incoming:r.x},{d:Math.abs(i.x-e.maxX),x:1,y:0,incoming:-r.x}].filter(o=>o.incoming>0);s.sort((o,c)=>o.d-c.d||c.y-o.y);const a=s[0];return a?{x:a.x,y:a.y,z:0}:{x:0,y:0,z:0}}function aw(n,e,t,i){if(lg(n),Nh(e),Cc(i.origin.x,i.origin.y,i.velocity.x,i.velocity.y),i.wind!==void 0&&!(Math.abs(i.wind)<=nw))throw new RangeError("Shot outside bounded simulation.");if(Math.abs(i.velocity.x)>Yf||Math.abs(i.velocity.y)>Yf||Math.abs(i.origin.x)>1e3||Math.abs(i.origin.y)>1e3)throw new RangeError("Shot outside bounded simulation.");const r=m=>({...qt(i,m),z:0});let s={kind:"timeout",time:Ut.maxFlight,point:r(Ut.maxFlight),normal:{x:0,y:0,z:0}};const a=(m,f,y,b,M={})=>{const T=Rh(i,f,y,Math.min(b,s.time));if(T!==null){const R={kind:m,time:T,point:r(T),normal:sw(i,f,T),...M};iw(R,s)&&(s=R)}},o=ew(n);if(i.origin.x<o.minX||i.origin.x>o.maxX||i.origin.y<o.minY||i.origin.y>o.maxY)return{kind:"bounds",time:0,point:r(0),normal:{x:0,y:0,z:0}};for(const m of[{minX:o.minX,maxX:o.minX,minY:o.minY,maxY:o.maxY},{minX:o.maxX,maxX:o.maxX,minY:o.minY,maxY:o.maxY},{minX:o.minX,maxX:o.maxX,minY:o.minY,maxY:o.minY},{minX:o.minX,maxX:o.maxX,minY:o.maxY,maxY:o.maxY}])a("bounds",m,0,s.time);for(const m of e)if(m.id!==t&&!m.eliminated&&m.health>0)for(const f of dS(m))a(f.kind,f.bounds,0,s.time,{actorId:m.id});const c=qt(i,s.time);let l=Math.min(i.origin.x,c.x),u=Math.max(i.origin.x,c.x);if(i.wind){const m=-i.velocity.x/i.wind;if(m>0&&m<s.time){const f=qt(i,m).x;l=Math.min(l,f),u=Math.max(u,f)}}const d=i.wind?1:0,h=Math.max(0,Math.floor((l-n.minX)/n.cell)-d),p=Math.min(n.width-1,Math.floor((u-n.minX)/n.cell)+d),g=Array.from({length:Math.max(0,p-h+1)},(m,f)=>i.velocity.x<0?p-f:h+f),v=new Map;if(i.wind){const m=s.time,f=-i.velocity.x/i.wind;for(const y of g){const b=n.minX+y*n.cell,M=b+n.cell,T=[0,m];f>0&&f<m&&T.push(f);for(const I of[b,M])T.push(...Ah(i,I));const R=T.filter(I=>I>=0&&I<=m&&qt(i,I).x>=b-1e-7&&qt(i,I).x<=M+1e-7);R.length&&v.set(y,[Math.min(...R),Math.max(...R)])}g.length=0,g.push(...[...v.keys()].sort((y,b)=>v.get(y)[0]-v.get(b)[0]||y-b))}for(const m of g){const f=n.minX+m*n.cell,y=f+n.cell;let b=0,M=s.time;if(i.wind)[b,M]=v.get(m),M=Math.min(M,s.time);else if(i.velocity.x!==0){const w=(f-i.origin.x)/i.velocity.x,F=(y-i.origin.x)/i.velocity.x;b=Math.max(0,Math.min(w,F)),M=Math.min(s.time,Math.max(w,F))}if(b>M+qd)continue;const T=[qt(i,b).y,qt(i,M).y],R=i.velocity.y/ks(i);R>b&&R<M&&T.push(qt(i,R).y);const I=Math.max(0,Math.floor((Math.min(...T)-n.minY)/n.cell)-1),x=Math.min(n.height-1,Math.floor((Math.max(...T)-n.minY)/n.cell)+1);for(let w=I;w<=x;w++){const F=w*n.width+m;n.cells[F]&&a("terrain",tw(n,F),b,M,{cell:F})}}return s}function dg(n,e){if(!n||typeof n!="object"||Array.isArray(n)||"cells"in n)throw new RangeError("Invalid compact terrain mask.");const t=Fh(n,e);if(typeof n.maskHex!="string"||n.maskHex.length!==t.maskHexLength||!/^[0-9a-f]+$/.test(n.maskHex))throw new RangeError("Invalid compact terrain mask.");const{maskHex:i,...r}=n,s=new Array(t.cellCount);for(let o=0;o<i.length;o++){const c=Number.parseInt(i[o],16);for(let l=0;l<4;l++)s[o*4+l]=c>>l&1}const a={...r,cells:s};return lg(a),a}const qf=10;function ow(n){let e=n;return e^=e>>33n,e=BigInt.asUintN(64,e*0xff51afd7ed558ccdn),e^=e>>33n,e=BigInt.asUintN(64,e*0xc4ceb9fe1a85ec53n),e^e>>33n}function cw(n,e){if(n===0)return 0;const t=Number(ow(Gm(e))>>11n)/2**53,i=Math.round(n*(2*t-1)*qf)/qf;return Math.max(-n,Math.min(n,i))+0}const Kf={protocolVersion:wc,rulesVersion:Zs},Rl={protocolVersion:ui,rulesVersion:Zs},zn=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function lw(n){if(!zn(n)||![wc,ui].includes(n.protocolVersion)||n.rulesVersion!==Zs||typeof n.roomId!="string"||!n.roomId||typeof n.code!="string"||!Number.isFinite(n.serverNow)||!Number.isSafeInteger(n.snapshotRevision)||Number(n.snapshotRevision)<0||!zn(n.membership)||typeof n.membership.actorId!="string"||typeof n.membership.lifeId!="string"||typeof n.membership.canStart!="boolean"||!Array.isArray(n.connections)||!zn(n.state)||!Number.isSafeInteger(n.state.revision)||Number(n.state.revision)<0||n.state.id!==n.roomId||!Array.isArray(n.state.actors)||!Array.isArray(n.state.seats)||!zn(n.state.seat)||!["waiting","active","finished","aborted"].includes(String(n.state.state))||!["planning","resolving","settling"].includes(String(n.state.phase))||!(n.currentTurnId===null||typeof n.currentTurnId=="string"))throw new Error("The combat service returned an unsupported room.");if(n.protocolVersion===ui?n.roomKind!=="volley"||n.state.version!=="volley-1"||n.currentTurnId!==null||!Number.isSafeInteger(n.state.epoch)||typeof n.state.roundId!="string"||!Array.isArray(n.state.locks)||!Array.isArray(n.state.priority):n.state.version!=="duel-1"||"roomKind"in n)throw new Error("The combat service returned an unsupported room kind or version.");const e=n;if("tuning"in e.state)try{Ac(e.state.tuning)}catch{throw new Error("The combat service returned an unsupported tuning profile.")}if("wind"in e.state){const t=e.state.wind;if(typeof t!="number"||!Number.isFinite(t)||t===0||!(Math.abs(t)<=ur(Rc(e.state))))throw new Error("The combat service returned an unsupported wind.")}if("successor"in e&&e.successor!==void 0){const t=e.successor;if(!zn(t)||typeof t.roomId!="string"||!t.roomId||typeof t.code!="string"||!/^[A-Z2-9]{6}$/.test(t.code)||typeof t.joined!="boolean")throw new Error("The combat service returned an unsupported rematch lobby.")}return dg(e.state.terrain,"arena-1"),e}class dw{room=null;pending=null;busy=!1;connected=!1;onChange=()=>{};onError=()=>{};rejectedLock=null;get lockAgain(){const e=this.room,t=e?.state,i=this.rejectedLock;return!!(i&&e&&t&&e.protocolVersion===ui&&i.roomId===e.roomId&&i.lifeId===e.membership.lifeId&&i.epoch===e.state.epoch&&i.roundId===e.state.roundId&&t.seat.canAct)}session;socketFactory;socket=null;reconnectTimer=null;pollTimer=null;stopped=!1;socketGeneration=0;roomGeneration=0;clockOffset=0;hasClock=!1;storage;constructor(e,t=fetch,i,r,s={}){r?.assertContext(e,t,i),this.session=r??new Ec(e,t,i),this.storage=i,this.socketFactory=s.socket===void 0?typeof WebSocket>"u"?null:a=>new WebSocket(a):s.socket}now=()=>Date.now()+this.clockOffset;get savedRoom(){try{const e=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");return zn(e)&&e.guestId===this.session.guestId&&typeof e.roomId=="string"?e.roomId:null}catch{return null}}emit(){this.onChange()}context(e=this.room?.roomId){const t=this.room?.roomId===e?this.room?.membership:void 0;return{generation:this.roomGeneration,roomId:e,...this.room&&this.room.roomId===e?{protocolVersion:this.room.protocolVersion}:{},...t?{membership:{actorId:t.actorId,lifeId:t.lifeId}}:{}}}assertContext(e){if(e.generation!==this.roomGeneration||e.roomId&&this.room&&e.roomId!==this.room.roomId)throw new Error("The combat room context changed while this request was pending.")}validateResponse(e,t,i){this.session.assertRevision(t),this.assertContext(i);const r=lw(e);if(i.protocolVersion&&r.protocolVersion!==i.protocolVersion)throw new Error("The combat response changed the confirmed room kind or protocol version.");if(i.roomId&&r.roomId!==i.roomId)throw new Error("The combat response belongs to a different room.");if(i.membership&&(r.membership.actorId!==i.membership.actorId||r.membership.lifeId!==i.membership.lifeId))throw new Error("The combat response belongs to a different membership identity.");return r}apply(e,t,i){const r=this.validateResponse(e,t,i);if(this.room&&this.room.roomId===r.roomId){if(r.snapshotRevision<this.room.snapshotRevision||r.snapshotRevision===this.room.snapshotRevision&&r.serverNow<=this.room.serverNow)return;if(r.state.revision<this.room.state.revision)throw new Error("The combat response would reverse the confirmed room state.")}this.room=r;const s=r.serverNow-Date.now();this.clockOffset=this.hasClock?Math.max(this.clockOffset,s):s,this.hasClock=!0;try{this.storage?.setItem(this.session.storageKeys.room,JSON.stringify({roomId:r.roomId,guestId:this.session.guestId}))}catch{}this.emit()}async create(e){return this.begin("/rooms",e?{...Rl,...e}:Kf,e?ui:wc)}async join(e){return this.begin("/rooms/join",{...Rl,code:e.trim().toUpperCase()})}async begin(e,t,i){if(this.busy||this.pending||this.room)throw new Error("Leave the current room or finish the pending action first.");this.roomGeneration++;const r={...this.context(),...i?{protocolVersion:i}:{}};this.stopped=!1,this.busy=!0,this.emit();try{const s=await this.session.ensure();this.session.assertRevision(s.revision),this.assertContext(r),this.pending={path:e,body:{actionId:crypto.randomUUID(),...t},revision:s.revision,context:r}}finally{r.generation===this.roomGeneration&&(this.busy=!1)}return this.retry()}async command(e){if(this.busy||this.pending||!this.room)throw new Error("Finish the pending action first.");const t=this.room,i=this.session.credentials();if(!i)throw new Error("Reconnect with the existing guest first.");const r=t.protocolVersion===ui;if(r&&e.kind==="cancel")throw new Error("Volley locks are immutable and cannot be cancelled.");const s=e.kind==="shot"||e.kind==="pass";if(r&&s&&(!t.state.seat.canAct||t.state.state!=="active"||t.state.phase!=="planning"))throw new Error("This planning opportunity is no longer available.");const a=!r&&["shot","pass","cancel"].includes(e.kind)?{turnId:t.currentTurnId}:{};if("turnId"in a&&!a.turnId)throw new Error("This turn is no longer available.");const o=r?{...Rl,epoch:t.state.epoch,...s?{roundId:t.state.roundId}:{}}:{...Kf,...a};this.rejectedLock=null;const c={actionId:crypto.randomUUID(),expectedRevision:t.state.revision,lifeId:t.membership.lifeId,...o,...e};return this.pending={path:`/rooms/${encodeURIComponent(t.roomId)}/commands`,body:c,revision:i.revision,context:this.context()},this.retry()}async followRematch(){const e=this.room?.successor;if(!e||this.busy||this.pending)throw new Error("No rematch lobby is available yet.");const t=this.room.roomId;this.forgetRoom();try{if(e.joined)return await this.reconnect(e.roomId);try{return await this.join(e.code)}catch(i){if(zn(i)&&i.code==="already_joined")return await this.reconnect(e.roomId);throw i}}catch(i){try{this.pending?await this.refresh(t):await this.reconnect(t)}catch{}throw i}}async retry(){if(!this.pending||this.busy)throw new Error("No pending action is ready to retry.");const e=this.pending;if(this.session.assertRevision(e.revision),this.assertContext(e.context),e.unadmitted&&e.context.roomId){const t=this.room,i=e.body;if(!t||t.roomId!==e.context.roomId||t.membership.lifeId!==i.lifeId||i.protocolVersion===ui&&(t.protocolVersion!==ui||t.state.epoch!==i.epoch||"roundId"in i&&t.state.roundId!==i.roundId)||"turnId"in i&&t.currentTurnId!==i.turnId)throw this.pending=null,this.emit(),new Error("The room opportunity changed. Choose an action for the current room.")}this.busy=!0,this.emit();try{const t=await this.session.request(e.path,e.body);if(this.session.assertRevision(e.revision),this.assertContext(e.context),this.pending!==e)throw new Error("The pending combat action changed.");return e.body.kind==="leave"?(this.validateResponse(t,e.revision,e.context),this.pending=null,this.clearRoom()):(this.apply(t,e.revision,e.context),this.pending=null,this.openSocket()),this.room}catch(t){if(e.context.generation!==this.roomGeneration)throw t;if(this.session.revision!==e.revision)this.pending=null,this.clearRoom();else if(t instanceof vi&&t.transient)t.code!=="admission_rate"&&t.code!=="command_rate"&&(e.uncertain=!0),e.unadmitted=!e.uncertain;else{if(ar(t,Er))throw this.pending=null,this.rejectedLock=null,Yd(Er);if(zn(t)&&typeof t.status=="number"&&t.status>=400&&t.status<500){if(this.pending=null,t.status===409&&e.body.kind==="shot"&&e.body.protocolVersion===ui&&e.context.roomId&&(this.rejectedLock={roomId:e.context.roomId,lifeId:String(e.body.lifeId),epoch:e.body.epoch,roundId:e.body.roundId}),this.room)try{await this.refresh()}catch(i){if(ar(i,Er))throw i}}else if(e.uncertain=!0,e.unadmitted=!1,this.room)try{await this.refresh()}catch(i){if(ar(i,Er))throw i}}throw t}finally{e.context.generation===this.roomGeneration&&(this.busy=!1,this.emit())}}async reconnect(e=this.room?.roomId??this.savedRoom){if(this.pending)throw new Error("Retry the pending action first.");if(!e)throw new Error("No saved room is available.");if(!this.session.credentials())throw new Error("The original guest identity is required to reconnect.");const t=this.context(e);this.stopped=!1,await this.refresh(e),this.assertContext(t),this.openSocket()}async refresh(e=this.room?.roomId){if(!e)return;const t=this.session.credentials();if(!t)throw new Error("The original guest identity is required.");const i=this.context(e);try{const r=await ws(this.session,`/rooms/${encodeURIComponent(e)}`,Er);this.apply(r,t.revision,i)}catch(r){if(this.session.assertRevision(t.revision),this.assertContext(i),ar(r,Er)&&(this.pending?.context.roomId===e&&this.pending.revision===t.revision&&(this.pending=null),this.room?.roomId===e&&(this.rejectedLock=null),this.emit()),zn(r)&&typeof r.status=="number"&&[403,404,410].includes(r.status)){this.pending=null,this.clearRoom(e);const s=Object.assign(new Error("This room is no longer available. Create or join another room with the same guest."),{status:r.status});throw this.onError(s),s}throw r}}receive(e){const t=this.session.credentials();!t||!this.room||this.stopped||!zn(e)||e.type!=="room"||e.roomId===this.room.roomId&&this.apply(e,t.revision,this.context())}openSocket(){if(this.stopped||!this.room||this.socket)return;const e=this.session.credentials();if(!e)return;if(this.connected=!1,!this.socketFactory){this.connected=!0,this.emit();return}const t=++this.socketGeneration,i=this.context(),r=this.room.roomId,s=this.socketFactory(this.session.endpoint.combatSocket);this.socket=s;const a=()=>this.socket===s&&this.socketGeneration===t&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&!this.stopped;s.addEventListener("open",()=>{if(!a()){s.close();return}const o={type:"authenticate",token:e.token,roomId:r,lastRevision:this.room?.snapshotRevision??0,protocolVersion:this.room.protocolVersion,rulesVersion:Zs};s.send(JSON.stringify(o))}),s.addEventListener("message",o=>{if(a())try{const c=JSON.parse(String(o.data));zn(c)&&c.type==="room"&&(this.apply(c,e.revision,i),this.connected=!0,this.emit())}catch(c){this.onError(c),s.close()}}),s.addEventListener("close",()=>{this.socket===s&&(this.socket=null,this.connected=!1,this.emit(),!this.stopped&&this.roomGeneration===i.generation&&this.session.revision===e.revision&&this.scheduleRecovery())}),s.addEventListener("error",()=>{}),this.schedulePoll()}schedulePoll(){if(this.pollTimer||this.stopped)return;const e=this.context();this.pollTimer=setTimeout(async()=>{if(this.pollTimer=null,!(!this.room||this.stopped||e.generation!==this.roomGeneration)){try{await this.refresh()}catch(t){e.generation===this.roomGeneration&&this.onError(t)}e.generation===this.roomGeneration&&this.schedulePoll()}},3e3)}scheduleRecovery(){if(this.reconnectTimer||this.stopped)return;const e=this.context();this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,!(this.stopped||e.generation!==this.roomGeneration))try{await this.refresh(),this.assertContext(e),this.openSocket()}catch(t){e.generation===this.roomGeneration&&(this.onError(t),this.scheduleRecovery())}},1500)}clearRoom(e=this.room?.roomId??this.savedRoom??void 0){this.close(),this.room=null,this.rejectedLock=null,this.hasClock=!1;try{const t=JSON.parse(this.storage?.getItem(this.session.storageKeys.room)??"null");zn(t)&&t.roomId===e&&(!this.session.guestId||t.guestId===this.session.guestId)&&this.storage?.removeItem(this.session.storageKeys.room)}catch{}this.emit()}forgetRoom(){this.pending=null,this.clearRoom()}close(){this.stopped=!0,this.socketGeneration++,this.roomGeneration++,this.busy=!1,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.pollTimer&&clearTimeout(this.pollTimer),this.reconnectTimer=null,this.pollTimer=null;const e=this.socket;this.socket=null,e?.close(),this.connected=!1}}const hw=/^[A-Z2-9]{6}$/,ac="room",Kd="Copied",uw="Select and copy the code";function fw(n){if(typeof n!="string")return null;const e=n.trim().toUpperCase();return hw.test(e)?e:null}function pw(n,e){const t=new URLSearchParams(n.search);return t.set(ac,e),`${n.origin}${n.pathname}?${t.toString()}`}function mw(n){return fw(new URLSearchParams(n).get(ac))}function gw(n){const e=new URLSearchParams(n.search);if(!e.has(ac))return null;e.delete(ac);const t=e.toString();return`${n.pathname}${t?`?${t}`:""}${n.hash??""}`}function xw(n,e){return`Join my private archery match with room code ${n}: ${e}`}function _w(n){return`Join my private archery match with room code ${n}.`}const vw=n=>!!n&&typeof n=="object"&&["AbortError","InvalidStateError"].includes(n.name??"");async function yw(n,e,t){const i=xw(e,t);if(n&&typeof n.share=="function")try{return await n.share({title:"Archery private match",text:_w(e),url:t}),"shared"}catch(r){if(vw(r))return"cancelled"}if(n?.clipboard&&typeof n.clipboard.writeText=="function")try{return await n.clipboard.writeText(i),"copied"}catch{}return"manual"}function bw(n,e){return n.kills===e.kills&&n.damageDealt===e.damageDealt&&Ca(n)===Ca(e)&&n.shots===e.shots}function Mw(n,e){return e.kills-n.kills||e.damageDealt-n.damageDealt||Ca(e)-Ca(n)||n.shots-e.shots||(n.actorId<e.actorId?-1:n.actorId>e.actorId?1:0)}function Ca(n){return n.shots?n.hits/n.shots:0}const Jf=["shots","hits","headshots","damageDealt","damageTaken","kills","longestHit","terrainDestroyed"];function Sw(n){const e=n?.rows;if(!Array.isArray(e)||e.length>64)throw new Error("The service returned an unsupported session board.");return e.map(t=>{const i=t;if(!i||typeof i.actorId!="string"||Jf.some(r=>typeof i[r]!="number"||!Number.isFinite(i[r])||i[r]<0))throw new Error("The service returned an unsupported session board.");return Object.fromEntries(["actorId",...Jf].map(r=>[r,i[r]]))})}function hg(n,e,t,i){const r=new Map(n.map(c=>[c.actorId,c])),s=e.map(c=>({label:c.label,stat:r.get(c.actorId)??{actorId:c.actorId,shots:0,hits:0,headshots:0,damageDealt:0,damageTaken:0,kills:0,longestHit:0,terrainDestroyed:0}}));s.sort((c,l)=>Mw(c.stat,l.stat));const a=s.some(c=>c.stat.shots>0),o=s.map((c,l)=>({actorId:c.stat.actorId,label:c.label,shots:c.stat.shots,accuracy:c.stat.shots?`${Math.round(Ca(c.stat)*100)}%`:"–",damage:Math.round(c.stat.damageDealt),kills:c.stat.kills,own:c.stat.actorId===t,leader:i&&a&&l===0&&!(s[1]&&bw(c.stat,s[1].stat))}));return{title:i?"Final standings":"Session board",rows:o,visible:o.length>0&&a}}function ug(n){return n.state==="active"&&n.phase!=="planning"?null:`${n.state}:${n.revision}`}function ww(n,e){return n?.state==="finished"&&e!==null&&e.startsWith("finished:")}class fg{stats=[];onChange=()=>{};get loadedKey(){return this.loaded}scope=null;wanted=null;loaded=null;busy=!1;token=0;failed=null;session;kind;constructor(e,t){this.session=e,this.kind=t}want(e,t,i){this.scope!==e&&(this.scope=e,this.stats=[],this.loaded=null),!(this.loaded===t||this.wanted?.key===t||this.failed?.key===t&&Date.now()<this.failed.until)&&(this.wanted={scope:e,key:t,path:i},this.pump())}hold(e){this.token++,this.wanted=null,this.scope!==e&&(this.scope=e,this.stats=[],this.loaded=null)}clear(){this.token++,this.scope=null,this.wanted=null,this.loaded=null,this.stats.length&&(this.stats=[],this.onChange())}async pump(){if(!this.busy){this.busy=!0;try{for(;this.wanted;){const e=this.wanted,t=this.session.revision,i=this.token;try{const r=Sw(await ws(this.session,e.path,this.kind==="private"?Er:di));this.session.assertRevision(t),this.scope===e.scope&&i===this.token&&(this.stats=r,this.loaded=e.key,this.failed=null,this.onChange())}catch{this.failed={key:e.key,until:Date.now()+3e3}}this.wanted===e&&(this.wanted=null)}}finally{this.busy=!1}}}}function pg(n,e,t){const i=1-Math.exp(-18*Math.max(0,t));return{angle:n.angle+(e.angle-n.angle)*i,pull:n.pull+(e.pull-n.pull)*i}}function oc(n,e=0){const t=n.angle*Math.PI/180,i=Math.cos(t),r=Math.sin(t),s={x:-7.7+i*(1.3-.37),y:2.3+r*(1.3-.37)},a={x:s.x-i*n.pull,y:s.y-r*n.pull},o={x:a.x-i*.16*e,y:a.y-r*.16*e+.04*e},c=n.pull+(.08-n.pull)*e,l={x:s.x-i*c,y:s.y-r*c},u=-7.95,d=2.3,h=o.x-u,p=o.y-d,g=Math.hypot(h,p),v=(.65**2-.9**2+g**2)/(2*g),m=Math.sqrt(Math.max(0,.65**2-v**2)),f={x:u+h/g*v-p/g*m,y:d+p/g*v+h/g*m};return{bow:s,hand:o,nock:l,elbow:f}}const Zf=.16;function ba(n,e,t){if(e>=Zf){const b=ec(n,e);return{position:qt(n,e),angle:Math.atan2(b.y,b.x)}}const i=Zf,r=Math.max(0,e)/i,s=qt(n,i),a=ec(n,i),o=Math.hypot(n.velocity.x,n.velocity.y),c={x:Math.cos(t.angle)*o,y:Math.sin(t.angle)*o},l=2*r**3-3*r*r+1,u=r**3-2*r*r+r,d=-2*r**3+3*r*r,h=r**3-r*r,p=(6*r*r-6*r)/i,g=3*r*r-4*r+1,v=(-6*r*r+6*r)/i,m=3*r*r-2*r,f={x:l*t.tip.x+u*i*c.x+d*s.x+h*i*a.x,y:l*t.tip.y+u*i*c.y+d*s.y+h*i*a.y},y={x:p*t.tip.x+g*c.x+v*s.x+m*a.x,y:p*t.tip.y+g*c.y+v*s.y+m*a.y};return{position:f,angle:Math.atan2(y.y,y.x)}}const Rn=Object.freeze({count:7,start:.055,duration:.228,radiusPx:3.5,outlinePx:1.75});function cc(n){if(!Number.isInteger(n.count)||n.count<1||n.count>32||![n.start,n.duration].every(Number.isFinite)||n.start<0||n.duration<0||n.start+n.duration>.35)throw new RangeError("Short opening guide settings required.");return Array.from({length:n.count},(e,t)=>n.start+(n.count===1?0:t/(n.count-1)*n.duration))}const lc=Object.freeze({minAngle:Ut.minAngle,maxAngle:Ut.maxAngle,minPower:.08,maxPower:1}),mg=(n,e,t)=>Math.min(t,Math.max(e,n)),gg=n=>mg(Math.round(n*10)/10,lc.minAngle,lc.maxAngle),xg=n=>mg(Math.round(n*1e3)/1e3,lc.minPower,lc.maxPower),To=n=>({...n,angle:gg(n.angle),power:xg(n.power)}),_g=n=>`${n.toFixed(1)}°`,vg=n=>`${(n*100).toFixed(1)}%`,Ew=n=>n.toFixed(1),Tw=n=>(n*100).toFixed(1),Aw=n=>`Last: ${_g(n.angle)} · ${vg(n.power)}`,Qf=Object.freeze([{id:"combat-angle-minus-large",field:"angle",delta:-1},{id:"combat-angle-minus-fine",field:"angle",delta:-.1},{id:"combat-angle-plus-fine",field:"angle",delta:.1},{id:"combat-angle-plus-large",field:"angle",delta:1},{id:"combat-power-minus-large",field:"power",delta:-5},{id:"combat-power-minus-fine",field:"power",delta:-.5},{id:"combat-power-plus-fine",field:"power",delta:.5},{id:"combat-power-plus-large",field:"power",delta:5}]);function Cl(n,e,t){return e==="angle"?{...n,angle:gg((Math.round(n.angle*10)+Math.round(t*10))/10)}:{...n,power:xg((Math.round(n.power*1e3)+Math.round(t*10))/1e3)}}class Rw{scope=null;locked=null;shot=null;noteLocked(e,t){if(!e)return;const i=this.locked?.aim;i&&i.arrow===e.arrow&&i.angle===e.angle&&i.power===e.power&&i.facing===e.facing||(this.locked={aim:{...e},at:t})}postdatesLock(e){return!!this.locked&&e.startedAt!==null&&e.startedAt>=this.locked.at}fallback(e){if(!this.postdatesLock(e))return null;const t=this.locked.aim;return this.locked=null,t}observe(e,t,i){if(e!==this.scope&&(this.scope=e,this.shot=null,this.locked=null),!i||!t||i.actorId!==t||!i.point)return;if(this.shot?.actionId===i.actionId){const s=this.shot.aim??i.aim??this.fallback(i);i.aim&&this.postdatesLock(i)&&(this.locked=null),this.shot={...this.shot,aim:s?{...s}:null,at:this.shot.at??i.startedAt};return}const r=i.aim??this.fallback(i);i.aim&&this.postdatesLock(i)&&(this.locked=null),this.shot={actionId:i.actionId,aim:r?{...r}:null,impact:{...i.point},at:i.startedAt}}clear(){this.scope=null,this.shot=null,this.locked=null}markerVisible(e){return!!this.shot&&this.shot.at!==null&&e>=this.shot.at}}function Cw(n){let e=3735928559,t=1103547991;const i=r=>{e=Math.imul(e^r,2654435761),t=Math.imul(t^r,1597334677)};for(const r of`${n.version}:${n.revision}:${n.cells.length}:`)i(r.charCodeAt(0));for(let r=0;r<n.cells.length;r+=4)i((n.cells[r]?1:0)|(n.cells[r+1]?2:0)|(n.cells[r+2]?4:0)|(n.cells[r+3]?8:0));return e=Math.imul(e^e>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),t=Math.imul(t^t>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),(4294967296*(2097151&t)+(e>>>0)).toString(16).padStart(14,"0")}function Jd(n){if(!Number.isFinite(n))return"Wind calm";const e=Math.abs(n).toFixed(1);return e==="0.0"?"Wind calm":`Wind ${n<0?"←":"→"} ${e}`}const Iw="position:absolute;top:10px;left:50%;transform:translateX(-50%);z-index:3;padding:4px 10px;border-radius:999px;font:600 12px/1.2 system-ui,sans-serif;letter-spacing:.3px;background:rgba(16,24,40,.72);color:#fff;pointer-events:none;white-space:nowrap";class yg{element=null;parent;id;constructor(e,t="combat-wind"){this.parent=e,this.id=t}ensure(){if(this.element)return this.element;const e=this.parent();if(!e)return null;const t=document.createElement("div");return t.id=this.id,t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.style.cssText=Iw,t.hidden=!0,e.appendChild(t),this.element=t}update(e,t){if(!(t>0)){this.hide();return}const i=this.ensure();if(!i)return;i.hidden=!1;const r=Jd(e);i.textContent!==r&&(i.textContent=r),i.dataset.wind=String(e)}hide(){this.element&&(this.element.hidden=!0)}}function dc(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const ep=(n,e,t)=>Math.imul(Math.round(n*64)|0,73856093)^Math.imul(Math.round(e*64)|0,19349663)^Math.imul(t|0,83492791);function Pw(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^e>>>16)>>>0}const Pc=n=>Pw(JSON.stringify(n)),Xi=(n,e,t)=>Math.min(t,Math.max(e,n)),Lw=800,Gh=64,Dw=12,Nw=[.49,.58,.38],Uw=[.6,.46,.31],Fw=[.36,.29,.24],Ow=[.22,.22,.26],Il=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,Vh=n=>[Il(n[0]),Il(n[1]),Il(n[2])],tp=.5,kw=.75,Bw={surface:Nw,soil:Uw,deep:Fw,bedrock:Ow};function np(n,e,t=0,i=Bw){const r=t-n,s=Math.max(1e-6,t-e);return r<=tp?i.surface:n-e<kw?i.bedrock:i.detail&&r<=tp+i.detail.depth?i.detail.color:r/s<.55?i.soil:i.deep}function zw(n){return[Xi(n[0]*.62+.2,0,1),n[1]*.5+.07,n[2]*.42+.02]}const Hw=[[-1,0],[1,0],[0,-1],[0,1]];function Gw(n,e,t,i,r){if(!r.size)return!1;for(const[s,a]of Hw){const o=n+s,c=e+a;if(o>=0&&c>=0&&o<t&&c<i&&r.has(c*t+o))return!0}return!1}const ip=6e3,Vw=(n,e,t,i,r)=>n.size?Fm(Um([...n],e,t),i,r):[];class Ww{keys=null;until=0;release(){const e=this.keys??[];return this.keys=null,e}set(e,t){this.keys=e.length?e:null,this.until=t}due(e){return this.keys===null||e<this.until?null:this.release()}clear(){this.keys=null}}function Xw(n,e,t=Lw){return n!==null&&e>=n&&e-n<=t}function $w(n,e){if(!n.length)return null;let t=0,i=0;for(const s of n)t+=s%e.width,i+=Math.floor(s/e.width);const r=n.length;return{x:e.minX+(t/r+.5)*e.cell,y:e.minY+(i/r+.5)*e.cell,extent:Math.sqrt(r)*e.cell,count:r}}const bg=n=>n.extent>=1.5,Wh=.35;function Yw(n,e,t,i){return i||!bg(n)||t<=0?0:Xi(n.extent*.1,0,.6)*Xi(1-e/(t*1.5),0,1)}const jw=(n,e=Wh)=>n<0||n>=e?0:(1-n/e)**2;function qw(n,e,t=Wh){const i=e*jw(n,t);return i===0?{x:0,y:0}:{x:i*Math.sin(n*71),y:i*Math.sin(n*93+1.3)}}function Kw(n,e,t,i){if(t<e||n.length<2)return null;const r=(t-e)/1e3,s=n.findIndex(d=>d.time>=r);if(s<=0)return{vx:0,vy:0};const a=n[s-1],o=n[s],c=a.poses.find(d=>d.actorId===i)?.feet,l=o.poses.find(d=>d.actorId===i)?.feet,u=o.time-a.time;return!c||!l||u<=1e-9?{vx:0,vy:0}:{vx:(l.x-c.x)/u,vy:(l.y-c.y)/u}}const Jw=.4,rp=.5;function Zw(n,e){return Math.hypot(n,e)<Jw?0:Xi(-n*.04,-rp,rp)}const Qw=(n,e,t)=>n+(e-n)*(1-Math.exp(-10*Math.max(0,t)));function e1(n,e){return n!==null&&n<=-2&&e>-.5?-n:0}const t1=.22;function n1(n,e,t=t1){return n<0||n>=t||e<=0?{sy:1}:{sy:1-Xi(e*.015,0,.3)*(1-n/t)}}const i1=.08,sp=.22,r1=n=>n>=0&&n<i1;function s1(n,e,t=!1){return t||n<0||n>=sp?0:-e*.22*(1-n/sp)**2}function a1(n,e){return e.filter(t=>n.has(t.id)&&t.health<n.get(t.id)).map(t=>t.id)}class o1{items=[];capacity;constructor(e=Gh){this.capacity=e}emit(e){this.items.length>=this.capacity&&this.items.shift(),this.items.push(e)}step(e){const t=this.items;let i=0;for(let r=0;r<t.length;r++){const s=t[r];s.age+=e,s.x+=s.vx*e,s.y+=s.vy*e,s.kind==="debris"?s.vy-=18*e:(s.vx*=Math.exp(-3*e),s.vy=s.vy*Math.exp(-3*e)+.6*e),s.age<s.life&&(t[i++]=s)}t.length=i}clear(){this.items.length=0}}function c1(n){const e=Xi(n.age/n.life,0,1);return n.kind==="dust"?n.size*(1+e)*(1-e*e):n.size*(1-e)}function l1(n,e){const t=Xi(Math.round(4+n*6),4,20),i=Xi(Math.round(3+n*3),3,12);return e?{debris:Math.min(4,t),dust:Math.min(2,i)}:{debris:t,dust:i}}function d1(n,e,t,i,r){const{debris:s,dust:a}=l1(e.extent,i),o=Math.min(1.2,e.extent*.5),c=3+Math.min(6,e.extent*2);for(let l=0;l<s;l++){const u=Math.PI*(.1+.8*t()),d=c*(.5+t()),h=e.y+(t()-.5)*o;n.emit({kind:"debris",x:e.x+(t()-.5)*o,y:h,vx:Math.cos(u)*d*(t()<.5?-1:1),vy:Math.sin(u)*d,age:0,life:.5+t()*.4,size:.08+t()*.1,color:r(h)})}for(let l=0;l<a;l++)n.emit({kind:"dust",x:e.x+(t()-.5)*o*1.5,y:e.y+(t()-.3)*o,vx:(t()-.5)*3,vy:t()*1.5,age:0,life:.5+t()*.3,size:.3+t()*.3,color:[.78,.74,.66]})}function h1(n,e,t,i,r,s){const a=s?1:Xi(Math.round(i*.5),2,6);for(let o=0;o<a;o++)n.emit({kind:"dust",x:e+(r()-.5)*.8,y:t+.05,vx:(o%2?1:-1)*(.6+r()*1.2),vy:.3+r()*.5,age:0,life:.35+r()*.2,size:.25+r()*.2,color:[.78,.74,.66]})}const Gr=(...n)=>n.every(Number.isFinite);function Xh(n){return Gr(n.minX,n.maxX,n.minY,n.maxY)&&n.minX<n.maxX&&n.minY<n.maxY}function ap(n,e,t){return e+(n.shotMinSpeed+n.shotExtraSpeed)*(t.start+t.duration)+1}const Mg=4;function u1(n,e,t,i){if(!Xh(n)||!Gr(i,t.halfWidth,t.height)||i<0)throw new RangeError("Ordered finite profile bounds and margin required.");let r=n.minX+t.halfWidth-i,s=n.maxX-t.halfWidth+i,a=n.minY,o=n.maxY;for(const c of e){if(!Gr(c.x,c.y))throw new RangeError("Finite actor positions required.");const l=Math.max(i,t.halfWidth);r=Math.min(r,c.x-l),s=Math.max(s,c.x+l),a=Math.min(a,c.y-2),o=Math.max(o,c.y+t.height+Mg)}return{minX:Math.min(r,n.minX),maxX:Math.max(s,n.maxX),minY:a,maxY:o}}const f1=Object.freeze({inline:Object.freeze({side:12,top:68,bottom:56}),expanded:Object.freeze({side:12,top:108,bottom:12})}),Pl=.2;function Lr(n,e,t="inline"){if(!Gr(n,e)||n<=0||e<=0)throw new RangeError("Positive finite viewport required.");const i=f1[t];if(!i)throw new RangeError("Unknown HUD mode.");const r=Math.min(i.side,n*Pl);return{left:r,right:r,top:Math.min(i.top,e*Pl),bottom:Math.min(i.bottom,e*Pl)}}function Sg(n,e,t,i=Lr(e,t)){if(!Xh(n))throw new RangeError("Ordered finite bounds required.");if(!Gr(e,t)||e<=0||t<=0)throw new RangeError("Positive finite viewport required.");p1(e,t,i);const r=e-i.left-i.right,s=t-i.top-i.bottom,a=Math.min(r/(n.maxX-n.minX),s/(n.maxY-n.minY));return wg((n.minX+n.maxX)/2,(n.minY+n.maxY)/2,a,e,t,i)}function wg(n,e,t,i,r,s){const a=r-s.top-s.bottom;return{centerX:n-(s.left-s.right)/2/t,centerY:e+(s.top+a/2-r/2)/t,halfWidth:i/(2*t),halfHeight:r/(2*t),scale:t}}function p1(n,e,t){const i=n-t.left-t.right,r=e-t.top-t.bottom;if(!Gr(t.left,t.right,t.top,t.bottom)||t.left<0||t.right<0||t.top<0||t.bottom<0||i<=0||r<=0)throw new RangeError("Insets must leave a positive area.")}const $h=20,op=Object.freeze({minPx:300,maxPx:520}),Eg=1e-9,Ao=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function m1(n,e,t,i){const r=a=>({x:a.x,y:a.y,reach:t.halfWidth+2});if(n){const a=[{x:n.x,y:n.y,reach:Math.max(i,t.halfWidth)}];let o=null;for(const c of e)(!o||Ao(n,c)<Ao(n,o))&&(o=c);return o?[...a,r(o)]:a}if(e.length<2)return e.map(r);let s=[e[0],e[1]];for(let a=0;a<e.length;a++)for(let o=a+1;o<e.length;o++)Ao(e[a],e[o])<Ao(s[0],s[1])&&(s=[e[a],e[o]]);return s.map(r)}function Tg(n,e){return{minX:Math.min(...n.map(t=>t.x-t.reach)),maxX:Math.max(...n.map(t=>t.x+t.reach)),minY:Math.min(...n.map(t=>t.y-2)),maxY:Math.max(...n.map(t=>t.y+e.height+Mg))}}function g1(n,e,t,i,r=[]){if(!Xh(n))throw new RangeError("Ordered finite bounds required.");if(!Gr(e)||e<=0)throw new RangeError("Positive finite width required.");const s=Lr(e,1e3,t).left,a=e-2*s,o=$h/i.height,c=r.length?Tg(r,i):null,l=Math.max(a/(n.maxX-n.minX),c?Math.min(o,a/(c.maxX-c.minX)):o),u=(n.maxY-n.minY)*l;let d=u;for(let h=0;h<6;h++){const p=Lr(e,Math.max(d,1),t);d=u+p.top+p.bottom}return Math.min(op.maxPx,Math.max(op.minPx,Math.ceil(d)))}const Zd=(n,e,t,i)=>t>=e-n?(n+e)/2:Math.min(Math.max(i,n+t/2),e-t/2);function x1(n,e,t,i,r,s,a=!1){const o=Sg(n,e,t,i),c=$h/r.height;if(a||o.scale>=c-Eg)return{...o,windowed:!1};const l=e-i.left-i.right,u=t-i.top-i.bottom,d=Math.min(c,u/(n.maxY-n.minY)),h=s.length?Tg(s,r):null,p=h?Math.min(l/(h.maxX-h.minX),u/(h.maxY-h.minY)):1/0,g=Math.max(o.scale,Math.min(d,p)),v=h?(h.minX+h.maxX)/2:(n.minX+n.maxX)/2,m=h?(h.minY+h.maxY)/2:(n.minY+n.maxY)/2;return{...wg(Zd(n.minX,n.maxX,l/g,v),Zd(n.minY,n.maxY,u/g,m),g,e,t,i),windowed:!0}}function _1(n,e,t,i,r){return Sg(n,e,t,i).scale*r.height<$h-Eg}function v1(n,e){return!n||n.worldKey!==e.worldKey||n.profile!==e.profile||n.epoch!==e.epoch||n.width!==e.width||n.height!==e.height||n.mode!==e.mode||(n.focus??"")!==(e.focus??"")}const y1=new $r;class b1{mesh;capacity;geometry=new qr(1,1);material;alpha;matrix=new St;position=new k;scale=new k;color=new Je;constructor(e=Gh){this.capacity=e,this.material=new zi({color:"#ffffff",transparent:!0,depthWrite:!1}),this.material.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float instanceAlpha;
varying float vInstanceAlpha;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vInstanceAlpha = instanceAlpha;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vInstanceAlpha;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vInstanceAlpha;`)},this.mesh=new Lx(this.geometry,this.material,e),this.mesh.instanceMatrix.setUsage(Uu),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.visible=!1,this.alpha=new Vd(new Float32Array(e),1),this.alpha.setUsage(Uu),this.geometry.setAttribute("instanceAlpha",this.alpha),this.mesh.setColorAt(0,this.color)}update(e){const t=Math.min(e.length,this.capacity);for(let i=0;i<t;i++){const r=e[i],s=Math.max(.001,c1(r)),a=Vh(r.color);this.position.set(r.x,r.y,.6),this.scale.set(s,s,s),this.mesh.setMatrixAt(i,this.matrix.compose(this.position,y1,this.scale)),this.mesh.setColorAt(i,this.color.setRGB(a[0],a[1],a[2])),this.alpha.setX(i,r.kind==="dust"?.55*(1-r.age/r.life):.95)}this.mesh.count=t,this.mesh.visible=t>0,t>0&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.alpha.needsUpdate=!0)}clear(){this.mesh.count=0,this.mesh.visible=!1}dispose(){this.geometry.dispose(),this.material.dispose(),this.mesh.dispose()}}class wn extends RangeError{path;constructor(e,t){super(t),this.name="DefinitionError",this.path=e}}const yn=(n,e)=>{throw new wn(n,n?`${n} ${e}`:e)},Jr=n=>n,M1=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),Go=(n,e)=>typeof e=="number"?`${n}[${e}]`:n?`${n}.${e}`:e,zs=n=>{try{const e=JSON.stringify(n);return e===void 0?String(n):e.length>40?`${e.slice(0,37)}...`:e}catch{return String(n)}},or=(n={})=>Jr((e,t)=>{if(typeof e!="string")return yn(t,`must be a string (got ${zs(e)})`);n.min!==void 0&&e.length<n.min&&yn(t,`must have at least ${n.min} characters`),n.max!==void 0&&e.length>n.max&&yn(t,`must have at most ${n.max} characters`),n.pattern&&!n.pattern.test(e)&&yn(t,`must be ${n.what??`a match for ${n.pattern}`} (got ${zs(e)})`)}),Sn=()=>or({pattern:/^#[0-9a-fA-F]{6}$/,what:"#rrggbb"}),Ze=(n={})=>Jr((e,t)=>{if(typeof e!="number"||!Number.isFinite(e))return yn(t,`must be a finite number (got ${zs(e)})`);n.int&&!Number.isInteger(e)&&yn(t,`must be an integer (got ${e})`),n.min!==void 0&&e<n.min&&yn(t,`must be at least ${n.min} (got ${e})`),n.max!==void 0&&e>n.max&&yn(t,`must be at most ${n.max} (got ${e})`)}),Ur=n=>Jr((e,t)=>{n.includes(e)||yn(t,`must be one of ${n.map(i=>JSON.stringify(i)).join(", ")} (got ${zs(e)})`)}),Fn=(n,e={})=>Jr((t,i)=>{if(!Array.isArray(t))return yn(i,`must be a list (got ${zs(t)})`);e.min!==void 0&&t.length<e.min&&yn(i,`must have at least ${e.min} entries (has ${t.length})`),e.max!==void 0&&t.length>e.max&&yn(i,`must have at most ${e.max} entries (has ${t.length})`),t.forEach((r,s)=>n(r,Go(i,s)))}),_t=n=>Object.assign(Jr((e,t)=>{e!==void 0&&n(e,t)}),{optional:!0}),bt=n=>Jr((e,t)=>{if(!M1(e))return yn(t,`must be an object (got ${zs(e)})`);for(const i of Object.keys(n)){const r=n[i];e[i]===void 0?r.optional||yn(Go(t,i),"is required"):r(e[i],Go(t,i))}for(const i of Object.keys(e))i in n||yn(Go(t,i),`is not a known field (allowed: ${Object.keys(n).join(", ")})`)}),mr=(n,e)=>Jr((t,i)=>{n(t,i);const r=e(t);r&&yn(i,r)}),Yh=/^[a-z0-9][a-z0-9._-]{0,31}$/,S1=65536,jh={kind:or({min:1,max:32}),id:or({pattern:Yh,what:"an id (a-z, 0-9, . _ -; max 32)"}),version:Ze({min:1,int:!0}),weight:Ze({min:0,max:S1,int:!0}),tags:Fn(or({pattern:/^[a-z0-9][a-z0-9._-]{0,31}$/,what:"a tag"}),{max:16})},cp=1<<20;function Ag(n){if(typeof n=="object"&&n!==null&&!Object.isFrozen(n)){Object.freeze(n);for(const e of Object.values(n))Ag(e)}return n}function Qd(n,e,t){const i=new Map,r=(d,h)=>`${d}@${h}`,s=(d,h)=>d.id<h.id?-1:d.id>h.id?1:d.version-h.version,a=d=>[...i.values()].sort(s).filter(h=>!d||d(h)),o=d=>i.get(r(d.id,d.version)),c=d=>{if(!Yh.test(d))return;let h;for(const p of i.values())p.id===d&&(!h||p.version>h.version)&&(h=p);return h},l=d=>{const h=d,p=`${n} ${typeof h?.id=="string"?h.id:"?"}@${typeof h?.version=="number"?h.version:"?"}: `;try{if(e(d,""),d.kind!==n)throw new wn("kind",`kind must be ${JSON.stringify(n)} (got ${JSON.stringify(d.kind)})`);t?.(d,u)}catch(g){throw g instanceof wn?new wn(g.path,p+g.message):g}},u={kind:n,register(d){l(d);const h=d,p=r(h.id,h.version);if(i.has(p))throw new wn("",`${n} ${p}: is already registered`);const g=Ag(structuredClone(h));return i.set(p,g),g},check(d){try{return l(d),null}catch(h){if(h instanceof wn)return h.message;throw h}},find:o,findLatest:c,has:d=>o(d)!==void 0,get(d){const h=o(d);if(!h)throw new wn("ref",`${n} ${r(String(d?.id),d?.version)}: ref is not registered`);return h},latest(d){const h=c(d);if(!h)throw new wn("id",`${n} ${JSON.stringify(d)}: id is not registered`);return h},list:a,pick(d,h){const p=a(h).filter(m=>m.weight>0);if(!p.length)throw new RangeError(`No selectable ${n} definition (nothing eligible has weight above 0)`);const g=p.reduce((m,f)=>m+f.weight,0);if(g>cp)throw new RangeError(`${n} selectable weight total ${g} exceeds ${cp}`);let v=(d>>>0)%g;for(const m of p){if(v<m.weight)return m;v-=m.weight}return p[p.length-1]}};return u}const Gn=n=>{const e=parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]},qh=n=>`#${n.map(e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,"0")).join("")}`,w1=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],E1={kind:"theme",id:"classic",version:1,weight:0,tags:["default"],name:"Classic",sky:{stops:[{at:0,color:"#dce8df"},{at:1,color:"#dce8df"}],darkStops:[{at:0,color:"#202f36"},{at:1,color:"#202f36"}]},light:{hemiSky:"#fff4d8",hemiGround:"#62765d",hemiIntensity:2.6,sun:"#fff4d8",sunIntensity:3},terrain:{surface:"#7d9461",soil:"#99754f",deep:"#5c4a3d",bedrock:"#383842"},parallax:[]},T1={kind:"theme",id:"meadow",version:2,weight:1,tags:["temperate","green"],name:"Meadow",sky:{stops:[{at:0,color:"#86bde8"},{at:1,color:"#e6f2dc"}]},light:{hemiSky:"#fff4d8",hemiGround:"#62765d",hemiIntensity:2.6,sun:"#fff4d8",sunIntensity:3},haze:{color:"#e6f2dc",strength:.35},terrain:{surface:"#669641",soil:"#8c6a46",deep:"#574330",bedrock:"#35363f",detail:{color:"#a6c46a",depth:.25}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#ffffff",opacity:.85,baseY:14,amplitude:6,frequency:5,size:9,seed:11,drift:.5},{id:"far-hills",shape:"hills",depth:.35,color:"#9dbfb0",opacity:1,baseY:3,amplitude:9,frequency:3,seed:21},{id:"near-hills",shape:"hills",depth:.6,color:"#103a25",opacity:1,baseY:-1,amplitude:6,frequency:4,seed:22}]},A1={kind:"theme",id:"canyon",version:2,weight:1,tags:["arid","warm"],name:"Canyon",sky:{stops:[{at:0,color:"#f0b57d"},{at:1,color:"#fbe6c0"}]},light:{hemiSky:"#ffe6c0",hemiGround:"#8a5a3c",hemiIntensity:2.7,sun:"#ffe0b0",sunIntensity:3.2},haze:{color:"#fbe6c0",strength:.4},terrain:{surface:"#c98450",soil:"#a85d38",deep:"#6f3f2b",bedrock:"#3a2a28",detail:{color:"#e5bd8a",depth:.3}},parallax:[{id:"sun-haze",shape:"band",depth:0,color:"#ffd9a0",opacity:.35,baseY:2,amplitude:0,frequency:1,seed:1,floorY:-10},{id:"far-mesas",shape:"ridge",depth:.3,color:"#d89a6a",opacity:1,baseY:2,amplitude:11,frequency:4,seed:31},{id:"near-mesas",shape:"ridge",depth:.55,color:"#4a2616",opacity:1,baseY:-2,amplitude:8,frequency:5,seed:32}]},R1={kind:"theme",id:"dusk",version:1,weight:1,tags:["night","warm"],name:"Dusk",sky:{stops:[{at:0,color:"#2c2766"},{at:.55,color:"#c9657a"},{at:1,color:"#f6c38b"}]},light:{hemiSky:"#ffc9a0",hemiGround:"#4a3a6a",hemiIntensity:2.2,sun:"#ffb27a",sunIntensity:2.6},haze:{color:"#f2a58a",strength:.3},terrain:{surface:"#6b8a5c",soil:"#6a4a52",deep:"#43333f",bedrock:"#241d2f",detail:{color:"#8aa66c",depth:.2}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#f4a183",opacity:.55,baseY:12,amplitude:5,frequency:4,size:12,seed:41,drift:.35},{id:"far-ridge",shape:"ridge",depth:.3,color:"#5a4a86",opacity:1,baseY:1,amplitude:12,frequency:4,seed:42},{id:"near-ridge",shape:"hills",depth:.55,color:"#34295a",opacity:1,baseY:-2,amplitude:7,frequency:3,seed:43}],ui:{labelInk:"#f6e9d8",labelBg:"#2b2347",guideFill:"#fff2b5",guideStroke:"#1a1730"}},C1={kind:"theme",id:"snow",version:3,weight:1,tags:["cold","bright"],name:"Snow",sky:{stops:[{at:0,color:"#7aa5cf"},{at:1,color:"#a8c4de"}],darkStops:[{at:0,color:"#0b1530"},{at:1,color:"#1d2c4a"}]},light:{hemiSky:"#eaf3ff",hemiGround:"#8a96a8",hemiIntensity:2.8,sun:"#f4f8ff",sunIntensity:2.8},haze:{color:"#eef5fb",strength:.45},terrain:{surface:"#eef3f8",soil:"#737b88",deep:"#5a6270",bedrock:"#2e323c",detail:{color:"#b9dcee",depth:.35}},parallax:[{id:"clouds",shape:"clouds",depth:.1,color:"#ffffff",opacity:.8,baseY:15,amplitude:5,frequency:4,size:10,seed:51,drift:.4},{id:"far-peaks",shape:"ridge",depth:.25,color:"#c5d4e5",opacity:1,baseY:1,amplitude:14,frequency:3,seed:52},{id:"near-peaks",shape:"ridge",depth:.5,color:"#8aa0ba",opacity:1,baseY:-2,amplitude:9,frequency:5,seed:53}]},I1=[E1,T1,A1,R1,C1],P1=["hills","ridge","clouds","band"],lp=mr(Fn(bt({at:Ze({min:0,max:1}),color:Sn()}),{min:2,max:8}),n=>n[0].at!==0?"first stop must be at 0":n[n.length-1].at!==1?"last stop must be at 1":n.some((e,t)=>t&&e.at<=n[t-1].at)?"stops must be in strictly increasing order":null),L1=bt({id:or({pattern:/^[a-z][a-z0-9-]{0,29}$/,what:"a lowercase slug"}),shape:Ur(P1),depth:Ze({min:0,max:1}),color:Sn(),opacity:Ze({min:0,max:1}),baseY:Ze({min:-40,max:80}),amplitude:Ze({min:0,max:40}),frequency:Ze({min:1,max:24,int:!0}),seed:Ze({int:!0,min:0,max:4294967295}),drift:_t(Ze({min:-8,max:8})),size:_t(Ze({min:1,max:60})),floorY:_t(Ze({min:-120,max:80})),period:_t(Ze({min:20,max:160}))}),D1=mr(bt({...jh,name:or({min:1,max:40}),sky:bt({stops:lp,darkStops:_t(lp)}),light:bt({hemiSky:Sn(),hemiGround:Sn(),hemiIntensity:Ze({min:0,max:8}),sun:Sn(),sunIntensity:Ze({min:0,max:8})}),haze:_t(bt({color:Sn(),strength:Ze({min:0,max:1})})),terrain:bt({surface:Sn(),soil:Sn(),deep:Sn(),bedrock:Sn(),detail:_t(bt({color:Sn(),depth:Ze({min:.05,max:1.5})}))}),parallax:Fn(L1,{max:8}),ui:_t(bt({labelInk:_t(Sn()),labelBg:_t(Sn()),guideFill:_t(Sn()),guideStroke:_t(Sn())}))}),n=>{const e=n,t=e.parallax.map(r=>r.id),i=t.find((r,s)=>t.indexOf(r)!==s);return i?`parallax layer id ${JSON.stringify(i)} is used twice`:!!e.ui?.labelInk!=!!e.ui?.labelBg?"ui.labelInk and ui.labelBg must be set together":!!e.ui?.guideFill!=!!e.ui?.guideStroke?"ui.guideFill and ui.guideStroke must be set together":null}),N1="classic",U1="theme",Ui=Qd("theme",D1);for(const n of I1)Ui.register(n);const dp=()=>Ui.latest(N1);function F1(n,e={}){const t=e.pin?Ui.findLatest(e.pin):void 0;if(t)return t;const i=Pc(["theme-1",n]),r=e.preferred?.length?new Set(e.preferred):null;return r&&Ui.list(s=>r.has(s.id)&&s.weight>0).length?Ui.pick(i,s=>r.has(s.id)):Ui.pick(i)}function O1(n){if(!n)return null;let e=null;try{e=new URLSearchParams(n).get(U1)}catch{return null}return e&&Ui.findLatest(e)?e:null}const hp=new WeakMap;function up(n){let e=hp.get(n);if(!e){const t=n.terrain;e={surface:Gn(t.surface),soil:Gn(t.soil),deep:Gn(t.deep),bedrock:Gn(t.bedrock),detail:t.detail?{color:Gn(t.detail.color),depth:t.detail.depth}:void 0},hp.set(n,e)}return e}const Ro=Object.freeze({solidCells:34e3,chunks:80,rowRuns:840,protectedCells:768}),Ia=Cn("arena-2"),fp=Ia.cell,Hs=(n,e)=>{throw new wn(n,`${n} ${e}`)},si=(n,e,t)=>{n(e,t)},ea=n=>n,Kh=or({pattern:/^[a-z][a-z0-9]{0,15}$/,what:"a parameter name"}),_s=(n,e)=>typeof n=="number"?n:(n.add??0)+n.terms.reduce((t,[i,r])=>t+r*e[i],0),Jh=Ze({int:!0,min:-4096,max:4096}),k1=ea((n,e)=>{(!Array.isArray(n)||n.length!==2)&&Hs(e,"must be a [param, coefficient] pair"),si(Kh,n[0],`${e}[0]`),si(Ze({int:!0,min:-8,max:8}),n[1],`${e}[1]`)}),B1=bt({terms:Fn(k1,{min:1,max:4}),add:_t(Jh)}),Es=ea((n,e)=>{si(typeof n=="number"?Jh:B1,n,e)}),pp={x0:Es,x1:Es,y0:Es,y1:Es},z1=mr(bt({min:Ze({int:!0,min:-4096,max:4096}),max:Ze({int:!0,min:-4096,max:4096}),step:Ze({int:!0,min:1,max:4096})}),n=>n.min>n.max?"min must not exceed max":(n.max-n.min)%n.step!==0?"max - min must be a multiple of step":null);function vs(n){return typeof n=="number"?[]:n.terms.map(e=>e[0])}function H1(n){return Object.keys(n).sort().reduce((t,i)=>t.flatMap(r=>[{...r,[i]:n[i].min},{...r,[i]:n[i].max}]),[{}])}const G1=mr(bt({...jh,params:ea((n,e)=>{(typeof n!="object"||n===null||Array.isArray(n))&&Hs(e,"must be an object of parameter ranges");const t=Object.keys(n);t.length>4&&Hs(e,`must have at most 4 parameters (has ${t.length})`);for(const i of t)si(Kh,i,`${e}.${i}`),si(z1,n[i],`${e}.${i}`)}),parts:Fn(bt({op:Ur(["add","clear"]),...pp}),{min:1,max:16}),surface:_t(bt({x0:Es,x1:Es})),requiresClear:_t(Fn(bt(pp),{max:8}))}),n=>{const e=n,t=[];e.parts.forEach((s,a)=>t.push([`parts[${a}]`,s.x0,s.x1,s.y0,s.y1])),(e.requiresClear??[]).forEach((s,a)=>t.push([`requiresClear[${a}]`,s.x0,s.x1,s.y0,s.y1]));const i=new Set(Object.keys(e.params)),r=H1(e.params);for(const[s,a,o,c,l]of t){for(const u of[...vs(a),...vs(o),...vs(c),...vs(l)])if(!i.has(u))return`${s} uses unknown parameter ${JSON.stringify(u)}`;if(r.some(u=>_s(o,u)<=_s(a,u)||_s(l,u)<=_s(c,u)))return`${s} must have a positive extent for every parameter value`}if(e.surface){for(const s of[...vs(e.surface.x0),...vs(e.surface.x1)])if(!i.has(s))return`surface uses unknown parameter ${JSON.stringify(s)}`;if(r.some(s=>_s(e.surface.x1,s)<=_s(e.surface.x0,s)))return"surface must have a positive width for every parameter value"}return null}),hn=(n={})=>{const e=Ze({min:n.min,max:n.max});return ea((t,i)=>{si(e,t,i),Number.isInteger(t/fp)||Hs(i,`must be a whole number of cells (${fp} units); got ${t}`)})},Pa={min:Ia.bounds.minX,max:Ia.bounds.maxX},Vr={min:Ia.bounds.minY,max:Ia.bounds.maxY},V1=mr(bt({x0:hn(Pa),x1:hn(Pa),y0:hn(Vr),y1:hn(Vr)}),n=>n.x1<=n.x0||n.y1<=n.y0?"must have a positive extent":null),W1=mr(bt({op:Ur(["add","clear"]),x0:hn(Pa),x1:hn(Pa),y0:hn(Vr),y1:hn(Vr)}),n=>n.x1<=n.x0||n.y1<=n.y0?"must have a positive extent":null),X1=hn(Pa),$1=hn(Vr),Y1=ea((n,e)=>{(!Array.isArray(n)||n.length!==2)&&Hs(e,"must be an [x, y] pair"),si(X1,n[0],`${e}[0]`),si($1,n[1],`${e}[1]`)}),mp=Ur(["mirror","balanced"]),Ll=bt({id:or({pattern:Yh,what:"an id"}),version:Ze({int:!0,min:1})}),Ma=n=>mr(bt({min:n,max:n}),e=>e.min>e.max?"min must not exceed max":null),j1=Ma(Ze({int:!0,min:0,max:16})),q1=Ma(Jh),gp=ea((n,e)=>{(typeof n!="object"||n===null||Array.isArray(n))&&Hs(e,"must be an object of parameter overrides");for(const t of Object.keys(n))si(Kh,t,`${e}.${t}`),si(q1,n[t],`${e}.${t}`)}),K1=bt({solidCells:_t(Ze({int:!0,min:1,max:Ro.solidCells})),chunks:_t(Ze({int:!0,min:1,max:Ro.chunks})),rowRuns:_t(Ze({int:!0,min:1,max:Ro.rowRuns})),protectedCells:_t(Ze({int:!0,min:0,max:Ro.protectedCells}))}),J1=mr(bt({...jh,profile:Ur(["arena-2"]),mode:Ur(["fixed","procedural"]),fixed:_t(bt({parts:Fn(W1,{min:1,max:64}),pads:Fn(Y1,{min:8,max:8}),requiresClear:_t(Fn(V1,{max:16})),symmetry:_t(mp)})),pads:_t(bt({levels:Fn(hn(Vr),{min:3,max:16}),offset:Ma(hn({min:-.5,max:.5})),symmetry:mp,maxAdjacentStep:hn({min:0}),minDistinctLevels:Ze({int:!0,min:3,max:8}),support:Fn(bt({block:Ll,weight:Ze({int:!0,min:1,max:1e3}),params:_t(gp)}),{min:1,max:8})})),features:_t(Fn(bt({block:Ll,zone:Ur(["gap","upper","lower","sky"]),count:j1,weight:Ze({int:!0,min:1,max:1e3}),params:_t(gp)}),{max:16})),voids:bt({count:Ma(Ze({int:!0,min:0,max:8})),width:Ma(hn({min:2,max:80}))}),lanes:bt({padHeadroom:hn({min:3,max:20}),launchReach:hn({min:1,max:10}),skyBandMinY:hn(Vr),skyMaxFill:Ze({min:0,max:1})}),limits:_t(K1),preferredThemes:_t(Fn(Ll,{max:16}))}),n=>{const e=n;if(e.mode==="fixed"){if(!e.fixed)return"a fixed template requires `fixed`";if(e.pads||e.features)return"a fixed template must not carry `pads` or `features`"}else{if(!e.pads)return"a procedural template requires `pads`";if(e.fixed)return"a procedural template must not carry `fixed`";if(new Set(e.pads.levels).size!==e.pads.levels.length)return"pads.levels must be distinct";if(e.pads.levels.length<e.pads.minDistinctLevels)return"pads.levels must offer at least minDistinctLevels levels"}return null}),ys=n=>`${n.id}@${n.version}`;function Z1(n){const e=Qd("terrain-block",G1),t=(r,s,a,o)=>{const c=e.find(r);if(!c)throw new wn(`${a}.block`,`${a}.block ${ys(r)} is not a registered terrain-block`);if(o&&!c.surface)throw new wn(`${a}.block`,`${a}.block ${ys(r)} has no surface to carry a pad`);for(const[l,u]of Object.entries(s??{})){const d=c.params[l];if(!d)throw new wn(`${a}.params.${l}`,`${a}.params.${l} is not a parameter of ${ys(r)}`);if(u.min<d.min||u.max>d.max)throw new wn(`${a}.params.${l}`,`${a}.params.${l} must narrow ${ys(r)} (${d.min}..${d.max}), not widen it`);if((u.min-d.min)%d.step!==0||(u.max-d.min)%d.step!==0)throw new wn(`${a}.params.${l}`,`${a}.params.${l} must stay on the step ${d.step} of ${ys(r)}`)}},i=Qd("terrain-template",J1,r=>{r.pads?.support.forEach((s,a)=>t(s.block,s.params,`pads.support[${a}]`,!0)),r.features?.forEach((s,a)=>t(s.block,s.params,`features[${a}]`,!1)),r.preferredThemes?.forEach((s,a)=>{if(!n(s))throw new wn(`preferredThemes[${a}]`,`preferredThemes[${a}] ${ys(s)} is not a registered theme`)})});return{blocks:e,templates:i}}const Q1={kind:"terrain-block",id:"arch",version:1,weight:1,tags:["gate","cover"],params:{hw:{min:24,max:40,step:4},ph:{min:20,max:32,step:4}},parts:[{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",-1]],add:8},y0:-8,y1:{terms:[["ph",1]]}},{op:"add",x0:{terms:[["hw",1]],add:-8},x1:{terms:[["hw",1]]},y0:-8,y1:{terms:[["ph",1]]}},{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:{terms:[["ph",1]]},y1:{terms:[["ph",1]],add:8}}],requiresClear:[{x0:{terms:[["hw",-1]],add:8},x1:{terms:[["hw",1]],add:-8},y0:0,y1:{terms:[["ph",1]]}}]},eE={kind:"terrain-block",id:"island",version:1,weight:1,tags:["floating"],params:{h:{min:16,max:48,step:2}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:-8,y1:0},{op:"add",x0:{terms:[["h",-1]],add:8},x1:{terms:[["h",1]],add:-8},y0:-16,y1:-8}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},tE={kind:"terrain-block",id:"ledge",version:1,weight:1,tags:["slab","thin"],params:{h:{min:16,max:40,step:2}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:-4,y1:0}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},nE={kind:"terrain-block",id:"pillar",version:1,weight:1,tags:["obstruction"],params:{hw:{min:3,max:8,step:1},ht:{min:16,max:48,step:4}},parts:[{op:"add",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:-8,y1:{terms:[["ht",1]]}}]},iE={kind:"terrain-block",id:"terrace",version:1,weight:1,tags:["slab","ground"],params:{h:{min:16,max:64,step:2},t:{min:8,max:400,step:4}},parts:[{op:"add",x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]},y0:{terms:[["t",-1]]},y1:0}],surface:{x0:{terms:[["h",-1]]},x1:{terms:[["h",1]]}}},rE={kind:"terrain-block",id:"void",version:1,weight:1,tags:["gap"],params:{hw:{min:12,max:48,step:1}},parts:[{op:"clear",x0:{terms:[["hw",-1]]},x1:{terms:[["hw",1]]},y0:0,y1:96}]},sE={kind:"terrain-template",id:"cascade",version:1,weight:3,tags:["mirror","terraces"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"mirror",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"ledge",version:1},weight:3,params:{h:{min:20,max:28}}},{block:{id:"terrace",version:1},weight:2,params:{h:{min:24,max:28},t:{min:8,max:16}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:24},t:{min:200,max:400}}},{block:{id:"ledge",version:1},zone:"upper",count:{min:3,max:3},weight:6,params:{h:{min:16,max:24}}},{block:{id:"arch",version:1},zone:"gap",count:{min:0,max:1},weight:4},{block:{id:"pillar",version:1},zone:"gap",count:{min:0,max:1},weight:3}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"meadow",version:2},{id:"snow",version:3}]},aE={kind:"terrain-template",id:"isles",version:1,weight:2,tags:["mirror","floating"],profile:"arena-2",mode:"procedural",pads:{levels:[1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"mirror",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"island",version:1},weight:4,params:{h:{min:20,max:28}}},{block:{id:"ledge",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:22},t:{min:200,max:400}}},{block:{id:"island",version:1},zone:"upper",count:{min:3,max:3},weight:6,params:{h:{min:16,max:18}}},{block:{id:"island",version:1},zone:"sky",count:{min:0,max:1},weight:4,params:{h:{min:16,max:24}}}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"dusk",version:1},{id:"snow",version:3}]},oE={kind:"terrain-template",id:"mesas",version:1,weight:3,tags:["balanced","mesa"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"balanced",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"terrace",version:1},weight:3,params:{h:{min:24,max:28},t:{min:8,max:16}}},{block:{id:"ledge",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:24},t:{min:200,max:400}}},{block:{id:"terrace",version:1},zone:"upper",count:{min:2,max:2},weight:6,params:{h:{min:16,max:24},t:{min:8,max:12}}},{block:{id:"pillar",version:1},zone:"gap",count:{min:1,max:1},weight:4},{block:{id:"ledge",version:1},zone:"upper",count:{min:1,max:1},weight:3,params:{h:{min:16,max:24}}}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"canyon",version:2}]},cE={kind:"terrain-template",id:"ridge",version:1,weight:2,tags:["balanced","ledges"],profile:"arena-2",mode:"procedural",pads:{levels:[0,1.5,3,4.5,6,7.5],offset:{min:-.5,max:.5},symmetry:"balanced",maxAdjacentStep:4.5,minDistinctLevels:3,support:[{block:{id:"ledge",version:1},weight:3,params:{h:{min:20,max:28}}},{block:{id:"island",version:1},weight:1,params:{h:{min:20,max:28}}}]},features:[{block:{id:"terrace",version:1},zone:"lower",count:{min:2,max:2},weight:9,params:{h:{min:16,max:22},t:{min:200,max:400}}},{block:{id:"arch",version:1},zone:"gap",count:{min:1,max:1},weight:5},{block:{id:"ledge",version:1},zone:"upper",count:{min:3,max:3},weight:4,params:{h:{min:16,max:24}}},{block:{id:"pillar",version:1},zone:"lower",count:{min:0,max:1},weight:2}],voids:{count:{min:1,max:2},width:{min:3,max:5}},lanes:{padHeadroom:4.5,launchReach:3,skyBandMinY:22,skyMaxFill:.05},preferredThemes:[{id:"dusk",version:1},{id:"meadow",version:2}]},Rg=Z1(n=>Ui.has(n)),lE=Rg.blocks,Cg=Rg.templates,dE=[iE,tE,eE,nE,Q1,rE],hE=[og,sE,aE,oE,cE];for(const n of dE)lE.register(n);for(const n of hE)Cg.register(n);function uE(n){const e=gS(n),t=e&&Cg.find(e);return t?.preferredThemes?.length?t.preferredThemes.map(i=>i.id):null}const Dl=.55,fE="#8c8c8c",Ig=n=>[n[0]*Dl,n[1]*Dl,n[2]*Dl],Co=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,Nl=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055;function xp(n,e,t){let i=Gn(n.color);return e&&(i=w1(i,Gn(e.color),e.strength*(1-n.depth))),qh(t?Ig(i):i)}function pE(n,e){if(e==="light")return n;const t=Co(Gn(fE)[0]),i=Gn(n);return qh([Nl(Co(i[0])*t),Nl(Co(i[1])*t),Nl(Co(i[2])*t)])}const Lc=80,hc=3,mE=48,gE=-80,xE=n=>-20-(1-n)*30;function _p(n,e,t){const i=e&&t?t:n,r=[],s=[],a=[];i.forEach((c,l)=>{const u=Vh(e&&!t?Ig(Gn(c.color)):Gn(c.color));if(r.push(-.5,.5-c.at,0,.5,.5-c.at,0),s.push(...u,...u),l){const d=(l-1)*2;a.push(d,d+2,d+1,d+1,d+2,d+3)}});const o=new Xt;return o.setAttribute("position",new Dt(r,3)),o.setAttribute("color",new Dt(s,3)),o.setIndex(a),o}function Ul(n,e){const t=n.period??Lc,i=t*hc,r=mE*hc*2,s=n.floorY??n.baseY-60,a=new Float32Array((r+1)*6),o=[];for(let l=0;l<=r;l++){const u=-i+l/r*2*i;if(a.set([u,s,0,u,Math.max(s,n.baseY+e(u)),0],l*6),l){const d=(l-1)*2;o.push(d,d+1,d+2,d+1,d+3,d+2)}}const c=new Xt;return c.setAttribute("position",new Wn(a,3)),c.setIndex(o),c}function _E(n){const e=n.period??Lc,t=dc(n.seed),i=n.size??8,r=[],s=[],a=Array.from({length:n.frequency},(l,u)=>({x:(u+t()*.6+.2)/n.frequency*e,y:n.baseY+t()*n.amplitude,w:i*(.7+t()*.6)})),o=(l,u,d,h)=>{const p=r.length/3;r.push(l,u,0);for(let g=0;g<10;g++){const v=g/10*Math.PI*2;r.push(l+Math.cos(v)*d,u+Math.sin(v)*h,0)}for(let g=0;g<10;g++)s.push(p,p+1+g,p+1+(g+1)%10)};for(let l=-hc;l<hc;l++)for(const u of a){const d=u.x+l*e;o(d,u.y,u.w/2,u.w*.17),o(d-u.w*.27,u.y-u.w*.04,u.w*.26,u.w*.12),o(d+u.w*.25,u.y-u.w*.03,u.w*.3,u.w*.13)}const c=new Xt;return c.setAttribute("position",new Dt(r,3)),c.setIndex(s),c}function vE(n){const e=n.period??Lc;if(n.shape==="clouds")return _E(n);if(n.shape==="band")return Ul(n,()=>0);const t=dc(n.seed);if(n.shape==="hills"){const r=[t(),t(),t()],s=[.6,.3,.1];return Ul(n,a=>{let o=0;for(let c=0;c<3;c++)o+=s[c]*Math.sin(2*Math.PI*((c+1)*n.frequency*a/e+r[c]));return n.amplitude*(.5+.5*o)})}const i=Array.from({length:n.frequency*3},()=>.2+t()*.8);return Ul(n,r=>{const s=(r/e%1+1)%1*i.length,a=Math.floor(s),o=s-a;return n.amplitude*(i[a%i.length]*(1-o)+i[(a+1)%i.length]*o)})}class yE{group=new Kt;sky;layers=[];ax=0;ay=0;dark;theme;constructor(e,t=!1){this.dark=t,this.theme=e,this.sky=new Ke(_p(e.sky.stops,t,e.sky.darkStops),new zi({vertexColors:!0,depthWrite:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.position.z=gE,this.group.add(this.sky);for(const i of e.parallax){const r=i.opacity>=1,s=new zi({color:xp(i,e.haze,t),transparent:!r,opacity:i.opacity,depthWrite:r,side:fi}),a=new Ke(vE(i),s);a.frustumCulled=!1,a.position.z=xE(i.depth),a.renderOrder=-5+Math.round(i.depth*4),this.group.add(a),this.layers.push({mesh:a,def:i,k:1-i.depth,period:i.period??Lc})}}get layerCount(){return this.layers.length}get meshes(){return[this.sky,...this.layers.map(e=>e.mesh)]}setDark(e){if(e!==this.dark){this.dark=e,this.sky.geometry.dispose(),this.sky.geometry=_p(this.theme.sky.stops,e,this.theme.sky.darkStops);for(const t of this.layers)t.mesh.material.color.set(xp(t.def,this.theme.haze,e))}}anchor(e){this.ax=e.position.x,this.ay=e.position.y}update(e,t,i){const r=e.position.x,s=e.position.y,a=r-this.ax,o=s-this.ay;this.sky.position.x=r,this.sky.position.y=s,this.sky.scale.x=(e.right-e.left)*1.05,this.sky.scale.y=(e.top-e.bottom)*1.05;for(let c=0;c<this.layers.length;c++){const l=this.layers[c],u=i?0:l.def.drift??0,d=u?(t*u%l.period+l.period)%l.period:0;l.mesh.position.x=a*l.k+d,l.mesh.position.y=o*l.k}}dispose(){this.group.removeFromParent();for(const e of this.meshes)e.geometry.dispose(),e.material.dispose();this.layers.length=0,this.group.clear()}}const vp=1e3,bE=400,ME=-.1,Fl=.15;function SE(n,e=0){return{left:e-vp,right:e+vp,top:n,bottom:n-bE}}const Ol=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,kl=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055;function wE(n,e){const t=Gn(pE(n.terrain.bedrock,e));return qh([kl(Ol(t[0])*Fl),kl(Ol(t[1])*Fl),kl(Ol(t[2])*Fl)])}function EE(n,e,t){return e>=t?t/2:Math.min(Math.max(n,e/2),t-e/2)}function TE(n,e){const t=Math.max(1,e.maxTiers??4)-1;return n.stack==="down"?n.y===void 0||e.maxBottom===void 0||!e.tierPx?t:Math.max(0,Math.min(t,Math.floor((e.maxBottom-n.y)/e.tierPx))):n.y===void 0||e.minTop===void 0||!e.tierPx?t:Math.max(0,Math.min(t,Math.floor((n.y-(n.height??0)-e.minTop)/e.tierPx)))}const AE=(n,e,t)=>Math.abs(n.x-e.x)<(n.width+e.width)/2+t;function RE(n,e,t){const i=t.gap??2,r=t.hysteresis??6,s=Math.max(1,t.maxTiers??4),a=[],o=new Map;for(const c of n){const l={x:EE(c.x,c.width,t.viewWidth),width:c.width,y:c.y,height:c.height,sg:c.stack==="down"?-1:1},u=t.tierPx,d=(f,y)=>{const b=f.y-f.sg*y*u;return[b-(f.height??u),b]},h=(f,y,b)=>{if(!AE(l,f,b))return!1;if(l.y===void 0||f.y===void 0||!u)return f.tier===y;const[M,T]=d(l,y),[R,I]=d(f,f.tier);return M<I&&R<T},p=TE(c,{...t,maxTiers:s}),g=(f,y)=>!a.some(b=>h(b,f,y)),v=e.get(c.id);let m=-1;for(let f=0;f<=p;f++)if(g(f,i)){m=f;break}if(v!==void 0&&v<=p&&v!==m&&g(v,i-r)&&(m<0||v<m||!g(m,i+r))&&(m=v),m<0){let f=1/0;for(let y=0;y<=p;y++){const b=a.filter(M=>h(M,y,i)).length;b<f&&(f=b,m=y)}}a.push({...l,tier:m}),o.set(c.id,{x:l.x,tier:m})}return o}function CE(n,e){const t=[n==="left"?"to the left":n==="right"?"to the right":"",e==="up"?"above":e==="down"?"below":""].filter(Boolean);return t.length?`, off screen ${t.join(" and ")}`:""}function yp(n,e,t,i){const r=n<0?"left":n>i.width?"right":null,s=Math.min(i.maxBottom??i.height,i.height),a=Math.min((i.minTop??0)+t,s),o=e<0?"up":e>i.height?"down":null,c=o==="up"?a:o==="down"?s:r?Math.min(Math.max(e,a),s):e,l=(r==="left"?"‹":r==="right"?"›":"")+(o==="up"?"↑":o==="down"?"↓":"");return{edge:r,vert:o,mark:l,y:c,pin:o==="up"||r&&e<a?"top":null,hint:CE(r,o)}}function IE(n){return n.version==="skirmish-1"||n.version==="skirmish-2"||n.version==="skirmish-3"}function PE(n,e){const t=IE(n),i=!t&&Zn(n)?n:null,r=t?"skirmish":i?"volley":"duel",s=t?n.epoch:i?.epoch??0,a=t?n.self:n.seat,o=JSON.stringify(n.version==="skirmish-2"||n.version==="skirmish-3"?[r,n.id,s,n.version,Uh(n.version).version]:[r,n.id,s]),c=t?n.members.map((d,h)=>({actorId:d.actorId,lifeId:d.lifeId,teamId:null,label:d.kind==="npc"?`NPC ${h+1}`:null,slotId:d.slotId})):n.seats.map(d=>({actorId:d.actorId,lifeId:"lifeId"in d?d.lifeId:d.actorId===e?a.lifeId:null,teamId:"teamId"in d?d.teamId:null,label:null,slotId:null})),l=t?n.action?.aim?{...n.action.aim,id:n.action.id,actorId:n.action.actorId,lifeId:n.action.lifeId,epoch:n.action.epoch,roundId:n.action.roundId}:null:n.action;let u=null;if(t){const d=n.effect;d&&(u={identity:JSON.stringify([o,d.action.actorId,d.action.lifeId,d.action.roundId,d.action.id]),actionId:d.action.id,actorId:d.action.actorId,aim:d.action.aim?{...d.action.aim}:null,point:d.contact?.point?{x:d.contact.point.x,y:d.contact.point.y}:null,delta:d.delta,motion:d.motion,startedAt:d.startedAt,endsAt:d.endsAt})}else{const d=n.effect;d&&(u={identity:JSON.stringify([o,d.actorId,d.lifeId,"roundId"in d?d.roundId:null,d.actionId]),actionId:d.actionId,actorId:d.actorId,aim:n.action&&n.action.id===d.actionId?{arrow:n.action.arrow,angle:n.action.angle,power:n.action.power,facing:n.action.facing}:null,point:d.contact?.point?{x:d.contact.point.x,y:d.contact.point.y}:null,delta:d.delta,motion:d.motion,startedAt:d.startedAt,endsAt:d.endsAt})}return{format:r,id:n.id,revision:n.revision,epoch:s,worldKey:o,scopeKey:JSON.stringify([o,e,a.lifeId]),planningKey:t?JSON.stringify([o,e,a.lifeId,n.roundId]):qM(n),sharedPlanning:t||!!i,state:n.state,phase:n.phase,terrain:n.terrain,actors:n.actors,seats:c,seat:{canAct:a.canAct,bombReady:a.bombReady,lifeId:a.lifeId},deadlineAt:n.deadlineAt,launchAt:n.launchAt,contactAt:n.contactAt,action:l,effect:u,pressure:i?.preset==="royale-shrink-1"?i.pressure:null,lockedPlan:t?n.locks.find(d=>d.actorId===e)?.plan??null:KM(n,e),tuning:Rc(n),wind:n.wind??0,layoutTemplate:t?n.layout?.template??null:null}}function LE(n,e){return!!n&&n.planningKey===e.planningKey&&e.state==="active"&&e.phase==="planning"&&e.seat.canAct}function DE(n,e){return JSON.stringify([n.worldKey,e.actorId,e.lifeId,e.epoch,e.roundId,e.id,n.launchAt])}const Io=16,NE=2,bp=new Set,Bl=Gh,Ot=n=>document.getElementById(n),Gt=(n,e,t=0)=>new k(n,e,t);class UE{constructor(e){this.canvas=e,this.belowWorld.frustumCulled=!1,this.scene.add(this.belowWorld),this.scene.add(this.terrainGroup,this.pressureGroup,this.fxGroup),this.motionQuery=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,this.reducedMotion=!!this.motionQuery?.matches,this.motionQuery?.addEventListener?.("change",this.onMotionChange),this.flash.visible=!1,this.flash.position.z=.9,this.fxGroup.add(this.flash),this.lastMarker.add(new Ke(new Eh(.4,.62,28),new zi({color:"#ff7a45",transparent:!0,opacity:.95,depthTest:!1})),new Ke(new hr(.13,12),new zi({color:"#ff7a45",depthTest:!1}))),this.lastMarker.visible=!1,this.lastMarker.renderOrder=5,this.scene.add(this.lastMarker),this.fxGroup.add(this.particleBatch.mesh),this.scene.add(this.hemi),this.sun.position.set(-8,20,12),this.scene.add(this.sun),this.applyBiome(this.basicBiome()),this.camera.position.set(0,8,55),this.camera.lookAt(0,8,0),this.rebuildTerrain(this.terrain);for(const t of["normal","bomb","teleport"])Ot(`combat-arrow-${t}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.arrow=t,this.updateControls())});for(const t of[-1,1])Ot(`combat-face-${t===1?"right":"left"}`).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim.facing=t,this.updateControls())});for(const t of["angle","power"])Ot(`combat-${t}`).addEventListener("input",()=>{!this.canAim()||this.draw||(this.aim=To({...this.aim,angle:Number(Ot("combat-angle").value),power:Number(Ot("combat-power").value)/100}),this.updateControls())});for(const t of Qf)Ot(t.id).addEventListener("click",()=>{this.draw||!this.canAim()||(this.aim=Cl(this.aim,t.field,t.delta),this.updateControls())});Ot("combat-fire").addEventListener("click",()=>this.fire()),Ot("combat-overview").addEventListener("click",()=>{if(!(this.draw||this.state?.phase!=="planning")){if(!this.publicV2()){this.frame(!0);return}this.overview=!this.overview,this.updateControls(),this.frame(!0)}}),this.canvas.addEventListener("pointerdown",t=>this.pointerDown(t)),this.canvas.addEventListener("pointermove",t=>this.pointerMove(t)),this.canvas.addEventListener("pointerup",t=>{if(!this.active||this.draw?.id!==t.pointerId)return;this.pointerMove(t);const i=this.draw?.valid;this.endDraw(!i),i&&this.fire()});for(const t of["pointercancel","lostpointercapture"])this.canvas.addEventListener(t,i=>{this.active&&this.draw?.id===i.pointerId&&this.cancelInput()})}canvas;scene=new gm;camera=new Ha(-24,24,18,-10,.1,150);materials=new Map;terrainGroup=new Kt;belowWorld=new Ke(new qr(1,1),new ko({roughness:1,flatShading:!0}));chunks=new Map;terrain=Al();terrainKey="";terrainWorld="";terrainMaterial=new ko({color:"#ffffff",roughness:1,flatShading:!0,vertexColors:!0});reducedMotion=!1;motionQuery=null;onMotionChange=e=>{this.reducedMotion=e.matches,e.matches&&(this.shake=null)};fxGroup=new Kt;particles=new o1(Bl);particleBatch=new b1(Bl);tint=new Ww;homeCamera=new k;installedDigest="";arenaFrame=null;frameBoundary=null;hudMode="inline";overview=!1;frameTargets=null;stageHeight="";flash=new Ke(new hr(1,24),new zi({color:"#fff2c4",transparent:!0,opacity:0,depthWrite:!1}));flashAge=1;shake=null;fxIdentity="";lastHealth=new Map;resync=!1;lastShot=new Rw;lastMarker=new Kt;pressureGroup=new Kt;pressureKey="";actorLabels=new Map;labelKeys=new Map;labelWidths=new Map;labelTiers=new Map;labelHeights=new Map;labelTierPx=Io;labelTierDirty=!1;hudBand={key:"",top:0};labels=document.getElementById("combat-actor-labels");lockAgain=!1;rigs=new Map;state=null;get tuning(){return this.state?.tuning??Pn}get wind(){return this.state?.wind??0}windIndicator=new yg(()=>document.getElementById("scene")?.parentElement);ownId=null;active=!1;draw=null;width=1;height=1;theme="light";biome=dp();palette=up(this.biome);parallax=null;hemi=new Em("#fff4d8","#62765d",2.6);sun=new Am("#fff4d8",3);biomePin=O1(typeof location>"u"?"":location.search);aim={angle:29,power:.62,facing:1};arrow="normal";busy=!1;online=!1;serverNow=()=>Date.now();guide=document.getElementById("combat-guide");dots=cc(Rn).map(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","circle");return e.setAttribute("r",String(Rn.radiusPx)),e.setAttribute("stroke-width",String(Rn.outlinePx)),this.guide.append(e),e});onShot=()=>{};onDrawing=()=>{};material(e){let t=this.materials.get(e);return t||(t=new ko({color:e,roughness:1,flatShading:!0}),this.materials.set(e,t)),t}box(e,t,i,r,s,a,o,c){const l=new Ke(new jr(s,a,o),this.material(c));return l.position.set(t,i,r),e.add(l),l}beam(e,t,i,r,s){const a=this.box(e,0,0,0,r,1,r,s);return this.updateBeam(a,t,i),a}updateBeam(e,t,i){e.position.copy(t).add(i).multiplyScalar(.5),e.scale.y=t.distanceTo(i),e.quaternion.setFromUnitVectors(Gt(0,1),i.clone().sub(t).normalize())}makeArrow(e){const t=new Kt;this.box(t,-.6,0,0,1.2,.045,.045,"#f3dfaa"),this.box(t,-1.08,0,0,.22,.17,.04,"#e9e6c8");const i=new Ke(new za(.085,.24,4),this.material("#58685d"));return i.rotation.z=-Math.PI/2,i.position.x=-.12,t.add(i),e.add(t),t}makeRig(e){const t=new Kt;this.scene.add(t);const i=this.state?.format==="volley"?this.state.seats.find(h=>h.actorId===this.ownId)?.teamId:null,r=this.state?.format==="volley"?this.state.seats.find(h=>h.actorId===e.id)?.teamId:null,s=this.state?.format==="skirmish"?this.state.seats.find(h=>h.actorId===e.id)?.slotId:null,a=s?Ho(s).hex:e.id===this.ownId?"#d19b58":i&&i===r?"#78ad75":"#6e98a0";for(const h of[-.3,.4])this.box(t,h,.47,0,.36,.8,.4,"#38473f");for(const h of[-.36,.46])this.box(t,h,.12,.12,.64,.24,.55,"#4c4938");this.box(t,0,1.53,0,.85,1.5,.6,a),this.box(t,0,1.07,.32,.95,.18,.12,"#6b6845"),this.box(t,0,(Jt.head.minY+Jt.head.maxY)/2,0,.65,Jt.head.maxY-Jt.head.minY,.6,"#eac795"),this.box(t,-.13,2.92,-.04,.95,.27,.76,"#4d6e57"),this.box(t,-.26,2.64,-.02,.23,.45,.65,"#4d6e57"),this.box(t,.32,2.65,.32,.08,.08,.07,"#34483c");const o=new Kt;t.add(o);const c=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let h=1;h<c.length;h++)this.beam(o,Gt(...c[h-1]),Gt(...c[h]),.075,"#78523c");const l=new Xt().setFromPoints([Gt(0,-.92),Gt(-.3,0),Gt(0,.92)]);o.add(new Ss(l,new Fs({color:"#f1e7bf"})));const u=[this.beam(t,Gt(0,2),Gt(1,2),.23,"#eac795"),this.beam(t,Gt(0,2),Gt(1,2),.22,a),this.beam(t,Gt(0,2),Gt(1,2),.18,"#eac795")],d=this.box(t,0,0,.12,.19,.19,.19,"#eac795");return{root:t,bow:o,string:l,arms:u,hand:d,arrow:this.makeArrow(t),pose:{angle:29,pull:.51},release:0,fx:{lean:0,prevVy:null,landAge:9,landSpeed:0,hitAge:9,feet:null}}}disposeRig(e){this.scene.remove(e.root),e.root.traverse(t=>{if(t instanceof Ke&&t.geometry.dispose(),t instanceof Ss){t.geometry.dispose();const i=t.material;Array.isArray(i)||i.dispose()}})}placeBelowWorld(e){const t=SE(e.minY,e.minX+e.width*e.cell/2);this.belowWorld.position.set((t.left+t.right)/2,(t.top+t.bottom)/2,ME),this.belowWorld.scale.set(t.right-t.left,t.top-t.bottom,1)}recolorBelowWorld(){this.belowWorld.material.color.set(wE(this.biome,this.theme))}rebuildTerrain(e,t,i=bp){const r=Cn(e.version),s=r.chunkSize;if(!t){for(const o of this.chunks.values())this.terrainGroup.remove(o),o.geometry.dispose();this.chunks.clear(),this.placeBelowWorld(e)}const a=t??Array.from({length:r.maxChunks},(o,c)=>`${c%r.chunkColumns}:${Math.floor(c/r.chunkColumns)}`);for(const o of a){const c=this.chunks.get(o);c&&(this.terrainGroup.remove(c),c.geometry.dispose(),this.chunks.delete(o));const[l,u]=o.split(":").map(Number),d=[],h=[];let p=[1,1,1];const g=(m,f,y,b)=>{d.push(...m,...f,...y,...m,...y,...b);for(let M=0;M<6;M++)h.push(...p)},v=(m,f)=>m>=0&&f>=0&&m<e.width&&f<e.height&&e.cells[f*e.width+m]===1;for(let m=u*s;m<Math.min((u+1)*s,e.height);m++){const f=e.minY+m*e.cell,y=e.cell;for(let b=l*s;b<Math.min((l+1)*s,e.width);b++)if(v(b,m)){const M=F=>Gw(F,m,e.width,e.height,i),T=np(f+y/2,e.bedrockY,0,this.palette),R=b,I=M(b);for(;b+1<Math.min((l+1)*s,e.width)&&v(b+1,m)&&M(b+1)===I;)b++;p=Vh(I?zw(T):T);const x=e.minX+R*y,w=e.minX+(b+1)*y;g([x,f,.18],[w,f,.18],[w,f+y,.18],[x,f+y,.18]),g([w,f,-.8],[x,f,-.8],[x,f+y,-.8],[w,f+y,-.8]);for(let F=R;F<=b;F++){const C=e.minX+F*y;v(F,m+1)||g([C,f+y,.18],[C+y,f+y,.18],[C+y,f+y,-.8],[C,f+y,-.8]),v(F,m-1)||g([C,f,-.8],[C+y,f,-.8],[C+y,f,.18],[C,f,.18])}v(R-1,m)||g([x,f,-.8],[x,f,.18],[x,f+y,.18],[x,f+y,-.8]),v(b+1,m)||g([w,f,.18],[w,f,-.8],[w,f+y,-.8],[w,f+y,.18])}}if(d.length){const m=new Xt;m.setAttribute("position",new Dt(d,3)),m.setAttribute("color",new Dt(h,3)),m.computeVertexNormals();const f=new Ke(m,this.terrainMaterial);this.chunks.set(o,f),this.terrainGroup.add(f)}}}setSnapshot(e,t,i){const r=PE(e,t),s=this.state;this.state=r,this.ownId=t,this.serverNow=i,this.draw&&(!this.canAim()||!LE(s,r))&&this.cancelInput(),(!s||s.scopeKey!==r.scopeKey)&&(this.lastHealth.clear(),this.cancelInput(),this.aim={angle:29,power:.62,facing:r.actors.find(c=>c.id===t)?.facing??1});const a=r.lockedPlan;a?.kind==="shot"&&a.aim&&(this.aim=To({angle:a.aim.angle,power:a.aim.power,facing:a.aim.facing}),this.arrow=a.aim.arrow),this.syncBiome(r),this.syncTerrain(),this.syncPressure(),this.syncWind(),this.lastShot.noteLocked(a?.kind==="shot"?a.aim:null,this.serverNow()),this.lastShot.observe(r.scopeKey,t,r.effect??this.ownPendingShot(r,t)),s&&s.worldKey!==r.worldKey&&this.clearFx(),this.noteHealth(r);for(const[c,l]of this.rigs)(s?.worldKey!==r.worldKey||s?.seats.find(u=>u.actorId===c)?.lifeId!==r.seats.find(u=>u.actorId===c)?.lifeId)&&(this.disposeRig(l),this.rigs.delete(c));for(const c of r.actors)this.rigs.has(c.id)||this.rigs.set(c.id,this.makeRig(c));for(const[c,l]of this.rigs)r.actors.some(u=>u.id===c)||(this.disposeRig(l),this.rigs.delete(c));const o=!s||s.worldKey!==r.worldKey;this.publicV2()?v1(this.frameBoundary,this.boundaryOf(r))&&this.frame(!1,o):(o||r.phase==="planning"&&(s.planningKey!==r.planningKey||s.phase!=="planning"||s.actors.length!==r.actors.length))&&this.frame(!1,o),this.updateControls()}ownPendingShot(e,t){const i=e.action,r=e.actors.find(o=>o.id===t);if(e.format==="duel"||!i||i.actorId!==t||!r||e.contactAt===null)return null;const s={arrow:i.arrow,angle:i.angle,power:i.power,facing:i.facing},a=e.contactAt;try{const o=aw(this.terrain,e.actors,t,El(r,s,this.tuning,this.wind));return{actionId:i.id,actorId:t,aim:s,point:{x:o.point.x,y:o.point.y},startedAt:a}}catch{return null}}syncPressure(){const e=this.state,t=e?.pressure??null,i=JSON.stringify(t);if(i===this.pressureKey)return;this.pressureKey=i;for(const s of[...this.pressureGroup.children])this.pressureGroup.remove(s),s instanceof Ss&&(s.geometry.dispose(),s.material.dispose());if(!t)return;const r=(s,a,o)=>{for(const c of[s,a]){const l=new Xt().setFromPoints([Gt(c,-8,.5),Gt(c,18,.5)]),u=o?new Wx({color:"#f3b747",dashSize:.5,gapSize:.35}):new Fs({color:"#70bb9d"}),d=new Ss(l,u);d.computeLineDistances(),this.pressureGroup.add(d)}};r(t.minX,t.maxX,!1),t.warning&&r(t.warning.minX,t.warning.maxX,!0)}clearFx(){this.particles.clear(),this.shake=null,this.flashAge=1,this.flash.visible=!1,this.fxIdentity="",this.lastHealth.clear(),this.particleBatch.clear(),this.tint.clear()}dispose(){this.clearFx(),this.lastMarker.traverse(e=>{e instanceof Ke&&(e.geometry.dispose(),e.material.dispose())}),this.motionQuery?.removeEventListener?.("change",this.onMotionChange),this.particleBatch.dispose(),this.flash.geometry.dispose(),this.flash.material.dispose();for(const e of this.chunks.values())e.geometry.dispose();this.chunks.clear(),this.terrainMaterial.dispose(),this.scene.remove(this.belowWorld),this.belowWorld.geometry.dispose(),this.belowWorld.material.dispose();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.parallax?.dispose(),this.parallax=null}colorAt=e=>np(e,this.terrain.bedrockY,0,this.palette);spawnImpact(e){if(this.particles.capacity=this.reducedMotion?Dw:Bl,d1(this.particles,e,dc(ep(e.x,e.y,e.count)),this.reducedMotion,this.colorAt),!bg(e))return;this.flash.position.set(e.x,e.y,.9),this.flash.scale.setScalar(e.extent*.6),this.flashAge=0;const t=this.camera.position.x,i=(this.camera.right-this.camera.left)/2,r=Yw(e,Math.abs(e.x-t),i,this.reducedMotion);r>0&&(this.shake={age:0,amplitude:r})}updateFx(e,t,i){const r=e?.effect;if(r&&r.startedAt!==null&&t>=r.startedAt&&r.identity!==this.fxIdentity&&(this.fxIdentity=r.identity,Xw(r.startedAt,t))){const a=$w(r.delta.removed,this.terrain);a&&this.spawnImpact(a)}const s=this.tint.due(t);if(s&&this.rebuildTerrain(this.terrain,s),this.particles.step(i),this.particleBatch.update(this.particles.items),this.flashAge<1){this.flashAge+=i/.18;const a=this.flash.material;this.flash.visible=this.flashAge<1,a.opacity=Math.max(0,.85*(1-this.flashAge))}this.shake&&(this.shake.age+=i,this.shake.age>=Wh&&(this.shake=null))}noteHealth(e){if(this.online&&!this.resync)for(const t of a1(this.lastHealth,e.actors)){const i=this.rigs.get(t);i&&(i.fx.hitAge=0)}this.online&&(this.resync=!1),this.lastHealth=new Map(e.actors.map(t=>[t.id,t.health]))}actorFx(e,t,i,r,s,a,o){const c=e.fx;c.hitAge+=s,c.landAge+=s,r1(c.hitAge)&&c.feet&&!o?i=c.feet:c.feet={x:i.x,y:i.y};const l=r?.vy??0,u=r?e1(c.prevVy,l):0;u>0&&!this.reducedMotion&&(c.landAge=0,c.landSpeed=u),u>0&&h1(this.particles,i.x,i.y,u,dc(ep(i.x,i.y,Math.round(u*10))),this.reducedMotion),c.prevVy=r?l:null,c.lean=Qw(c.lean,r?Zw(r.vx,l):0,s);const d=this.reducedMotion||o,h=d?0:c.lean+s1(c.hitAge,a,!1);return e.root.rotation.z=Math.abs(h)<1e-4?0:h,e.root.scale.y=d?1:n1(c.landAge,c.landSpeed).sy,{feet:i}}setLockAgain(e){this.lockAgain=e,this.updateControls()}syncTerrain(){if(!this.state)return;const e=this.state,t=e.effect;let i=`${e.worldKey}:${e.terrain.version}:${e.terrain.revision}`;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt&&(i+=`:${t.identity}`),i===this.terrainKey)return;let s=dg(e.terrain),a=bp;if(t&&t.startedAt!==null&&this.serverNow()>=t.startedAt){s={...s,cells:s.cells.slice()};for(const c of t.delta.removed)s.cells[c]=0;this.serverNow()-t.startedAt<ip&&(a=new Set(t.delta.removed))}if(this.terrainWorld!==e.worldKey||this.terrain.version!==s.version)this.rebuildTerrain(s,void 0,a);else{const c=Cn(s.version),l=[];for(let d=0;d<s.cells.length;d++)s.cells[d]!==this.terrain.cells[d]&&l.push(d);const u=Um(l,s.width,c.chunkSize);this.rebuildTerrain(s,Fm([...u,...this.tint.release()],c.chunkColumns,c.chunkRows),a)}{const c=Cn(s.version);this.tint.set(Vw(a,s.width,c.chunkSize,c.chunkColumns,c.chunkRows),t&&t.startedAt!==null?t.startedAt+ip:0)}this.terrain=s,this.terrainKey=i,this.terrainWorld=e.worldKey,this.installedDigest=Cw(s)}clearSnapshot(){this.cancelInput(),this.lastShot.clear(),this.lastMarker.visible=!1,this.state=null,this.windIndicator.hide(),this.ownId=null,this.lockAgain=!1,this.labels.replaceChildren(),this.actorLabels.clear(),this.labelKeys.clear(),this.labelWidths.clear(),this.labelHeights.clear(),this.labelTiers.clear(),this.labelTierPx=Io,this.labelTierDirty=!1,this.syncPressure();for(const e of this.rigs.values())this.disposeRig(e);this.rigs.clear(),this.terrainKey="",this.terrainWorld="",this.installedDigest="",this.arenaFrame=null,this.frameBoundary=null,this.frameTargets=null,this.overview=!1,this.setStageHeight(null),this.clearFx(),this.applyBiome(this.basicBiome()),this.rebuildTerrain(Al()),this.terrain=Al(),this.frame(),this.updateControls()}setTransport(e,t){e||(this.lastHealth.clear(),this.resync=!0),this.online=e,this.busy=t,this.canAim()||this.cancelInput(),this.updateControls()}syncWind(){if(!this.active||!this.state){this.windIndicator.hide();return}this.windIndicator.update(this.state.wind,ur(this.state.tuning))}activate(){this.active=!0,this.syncWind(),this.updateControls(),this.frame()}deactivate(){this.cancelInput(),this.active=!1,this.setStageHeight(null),this.windIndicator.hide(),this.guide.style.visibility="hidden",this.labels.replaceChildren(),this.actorLabels.clear(),this.labelKeys.clear(),this.labelWidths.clear(),this.labelHeights.clear(),this.labelTiers.clear(),this.labelTierPx=Io,this.labelTierDirty=!1}setTheme(e){this.theme=e,this.terrainMaterial.color.set(e==="dark"?"#8c8c8c":"#ffffff"),this.recolorBelowWorld(),this.parallax?.setDark(e==="dark")}basicBiome(){return this.biomePin?Ui.latest(this.biomePin):dp()}syncBiome(e){const t=e.format==="skirmish"&&Cn(e.terrain.version).version==="arena-2";this.applyBiome(t?F1(e.worldKey,{pin:this.biomePin,preferred:uE(e.layoutTemplate)}):this.basicBiome())&&(this.terrainWorld="")}applyBiome(e){if(e===this.biome&&this.parallax)return!1;this.biome=e,this.palette=up(e),this.recolorBelowWorld(),this.parallax?.dispose(),this.parallax=new yE(e,this.theme==="dark"),this.scene.add(this.parallax.group),this.parallax.anchor(this.camera);const t=e.light;this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.sun.color.set(t.sun),this.sun.intensity=t.sunIntensity;const i=e.ui??{},r=(s,a,o)=>{o?s.style.setProperty?.(a,o):s.style.removeProperty?.(a)};return r(this.labels,"--label-ink",i.labelInk),r(this.labels,"--label-bg",i.labelBg),r(this.guide,"--guide-fill",i.guideFill),r(this.guide,"--guide-stroke",i.guideStroke),!0}resize(e,t){this.cancelInput(),this.width=e,this.height=t,this.guide.setAttribute("viewBox",`0 0 ${e} ${t}`),this.frame()}setHudMode(e){e!==this.hudMode&&(this.hudMode=e,this.state&&this.publicV2()&&this.frame())}publicV2(){return this.state?.format==="skirmish"&&Cn(this.terrain.version).version==="arena-2"}boundaryOf(e){const i=_1(this.publicBounds(e),this.width,this.height,Lr(this.width,this.height,this.hudMode),Jt)?e.phase==="planning"||!this.frameBoundary?.focus?e.planningKey:this.frameBoundary.focus:"";return{worldKey:e.worldKey,profile:this.terrain.version,epoch:e.epoch,width:this.width,height:this.height,mode:this.hudMode,focus:i}}publicBounds(e){return(!this.arenaFrame||this.arenaFrame.worldKey!==e.worldKey)&&(this.arenaFrame={worldKey:e.worldKey,bounds:u1(Cn(this.terrain.version).bounds,e.actors.filter(t=>!t.eliminated).map(t=>({x:t.feet.x,y:t.feet.y})),Jt,ap(this.tuning,Jt.nock.x,Rn))}),this.arenaFrame.bounds}setStageHeight(e){const t=e===null?"":`${e}px`;if(t===this.stageHeight)return;this.stageHeight=t;const i=this.canvas.parentElement?.style;i&&(t?i.setProperty?.("--public-stage-h",t):i.removeProperty?.("--public-stage-h"))}frameArena(e){const t=this.publicBounds(e),i=Lr(this.width,this.height,this.hudMode),r=this.boundaryOf(e).focus??"";if(!r)this.frameTargets=null;else if(this.frameTargets?.key!==r){const o=e.actors.filter(u=>!u.eliminated),c=o.find(u=>u.id===this.ownId),l=u=>({x:u.feet.x,y:u.feet.y});this.frameTargets={key:r,targets:m1(c?l(c):null,o.filter(u=>u!==c).map(l),Jt,ap(this.tuning,Jt.nock.x,Rn))}}const s=this.frameTargets?.targets??[],a=x1(t,this.width,this.height,i,Jt,s,this.overview);this.setStageHeight(this.hudMode==="inline"?g1(t,this.width,this.hudMode,Jt,s):null),Object.assign(this.camera,{left:-a.halfWidth,right:a.halfWidth,top:a.halfHeight,bottom:-a.halfHeight}),this.camera.position.set(a.centerX,a.centerY,55),this.camera.lookAt(a.centerX,a.centerY,0),this.camera.updateProjectionMatrix(),this.parallax?.anchor(this.camera),this.frameBoundary=this.boundaryOf(e)}frame(e=!1,t=!1){if(this.draw)return;if(this.state&&this.publicV2()){this.frameArena(this.state);return}if(this.arenaFrame=null,this.frameBoundary=null,this.frameTargets=null,this.setStageHeight(null),!t&&this.state&&this.state.phase!=="planning"&&this.state.state==="active")return;const i=this.state?.actors??[],r=Jt.nock.x+(this.tuning.shotMinSpeed+this.tuning.shotExtraSpeed)*(Rn.start+Rn.duration)+1,s=e||!i.length?-32:Math.min(...i.map(m=>m.feet.x))-r,a=e||!i.length?32:Math.max(...i.map(m=>m.feet.x))+r,o=e?-8:Math.min(0,...i.map(m=>m.feet.y))-2,c=e?18:Math.max(9,...i.map(m=>m.feet.y+Jt.height+4)),l=this.state?.sharedPlanning?Math.min(.25,2*(Rn.radiusPx+Rn.outlinePx)/this.width):0,u=this.width/this.height,d=Math.max(a-s,(c-o)*u)/(1-l),h=d/u,p=Cn(this.terrain.version).bounds,g=Zd(p.minX,p.maxX,d,(s+a)/2),v=(o+c)/2;Object.assign(this.camera,{left:-d/2,right:d/2,top:h/2,bottom:-h/2}),this.camera.position.set(g,v,55),this.camera.lookAt(g,v,0),this.camera.updateProjectionMatrix(),this.parallax?.anchor(this.camera)}canAim(){return this.active&&this.online&&!this.busy&&!!this.state?.seat.canAct&&this.state.deadlineAt!==null&&this.serverNow()<this.state.deadlineAt}get hasRoom(){return this.state!==null}get drawing(){return!!this.draw}cancelInput(){this.endDraw(!0)}endDraw(e){if(!this.draw)return;const t=this.draw;this.draw=null,e&&(this.aim=t.previous),this.canvas.hasPointerCapture(t.id)&&this.canvas.releasePointerCapture(t.id),Ot("combat-drag-marker").hidden=!0,this.onDrawing(!1),this.updateControls()}pointerDown(e){if(!this.active)return;if(this.draw){e.pointerId!==this.draw.id&&this.cancelInput();return}if(!this.canAim()||!e.isPrimary||e.button!==0)return;e.preventDefault();const t=this.canvas.getBoundingClientRect();this.draw={id:e.pointerId,x:e.clientX,y:e.clientY,width:t.width,height:t.height,previous:{...this.aim},valid:!1},this.canvas.setPointerCapture(e.pointerId),this.canvas.focus({preventScroll:!0});const i=Ot("combat-drag-marker");i.style.left=`${e.clientX-t.left}px`,i.style.top=`${e.clientY-t.top}px`,i.hidden=!1,this.onDrawing(!0),this.updateControls()}pointerMove(e){if(!this.active||this.draw?.id!==e.pointerId)return;const{x:t,y:i,width:r,height:s}=this.draw,a=e.clientX-t,o=e.clientY-i,c=this.state?.format==="skirmish"?$M(a,o,r,s):XM(a,o,r,s,this.aim.facing);this.draw.valid=!!c,c&&(this.aim=To({facing:this.aim.facing,...c})),this.updateControls()}keydown(e){if(this.active){if(e.code==="Escape"){this.cancelInput();return}!this.canAim()||this.draw||(e.code==="Space"?(e.preventDefault(),e.repeat||this.fire()):["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.aim=Cl(Cl(this.aim,"angle",e.code==="ArrowLeft"?-1:e.code==="ArrowRight"?1:0),"power",e.code==="ArrowUp"?2:e.code==="ArrowDown"?-2:0),this.updateControls()))}}fire(){if(!this.canAim()||this.draw||this.arrow==="bomb"&&!this.state?.seat.bombReady)return;const e=To(this.aim);this.onShot(this.arrow,e)}updateControls(){Ot("combat-fire").textContent=this.state?.sharedPlanning?this.lockAgain?"Lock again":"Lock arrow":"Fire arrow";const e=!this.canAim()||!!this.draw;for(const r of["fire","angle","power","face-left","face-right","arrow-normal","arrow-bomb","arrow-teleport",...Qf.map(s=>s.id.slice(7))])Ot(`combat-${r}`).disabled=e||r==="arrow-bomb"&&!this.state?.seat.bombReady;for(const r of["normal","bomb","teleport"])Ot(`combat-arrow-${r}`).setAttribute("aria-pressed",String(this.arrow===r));for(const r of[-1,1])Ot(`combat-face-${r===1?"right":"left"}`).setAttribute("aria-pressed",String(this.aim.facing===r));Ot("combat-angle").value=Ew(this.aim.angle),Ot("combat-power").value=Tw(this.aim.power),Ot("combat-angle-value").textContent=_g(this.aim.angle),Ot("combat-power-value").textContent=vg(this.aim.power);const t=this.lastShot.shot?.aim,i=Ot("combat-last-shot");i.hidden=!t,i.textContent=t?Aw(t):"",Ot("combat-bomb-status").textContent=this.state?.seat.bombReady?"Bomb ready":"Bomb reloads after your next personal opportunity.",Ot("combat-overview").disabled=!!this.draw||this.state?.phase!=="planning",this.syncOverviewPressed()}syncOverviewPressed(){const e=Ot("combat-overview");this.publicV2()?e.setAttribute("aria-pressed",String(this.overview)):e.removeAttribute("aria-pressed")}labelView(){return!this.publicV2()||!(this.width>0)||!(this.height>0)?null:{width:this.width,height:this.height,minTop:this.labelMinTop(),maxBottom:this.height-Lr(this.width,this.height,this.hudMode).bottom}}labelMinTop(){const e=this.hudBottom();return this.hudMode==="expanded"&&this.width>0&&this.height>0?Math.max(e,Lr(this.width,this.height,"expanded").top):e}hudBottom(){const e=document.getElementById("arena-hud");if(!e||e.hidden||typeof this.labels.getBoundingClientRect!="function")return 0;const t=["arena-priority","arena-clock"].map(r=>document.getElementById(r)),i=`${this.width}x${this.height}|${t.map(r=>r?.childElementCount??0).join()}`;if(this.hudBand.key!==i){const r=this.labels.getBoundingClientRect().top;let s=0;for(const a of t){if(!a||a.hidden||typeof a.getBoundingClientRect!="function")continue;const o=a.getBoundingClientRect();o.height>0&&(s=Math.max(s,o.bottom-r))}this.hudBand={key:i,top:s}}return this.hudBand.top}render(e,t){if(!this.active)return;const i=this.state,r=this.serverNow();this.syncTerrain(),this.updateFx(i,r,t);let s;const a=i?.effect&&i.effect.startedAt!==null?YM(i.effect.motion,i.effect.startedAt,r):null;for(const b of i?.actors??[]){const M=this.rigs.get(b.id),T=a?.find(B=>B.actorId===b.id)?.feet??b.feet,R=i?.action?.actorId===b.id?i.action:null,I=b.id===this.ownId&&!R,x=R??(I?this.aim:{angle:29,power:.62,facing:b.facing}),w=this.actorFx(M,b,T,i?.effect&&i.effect.startedAt!==null?Kw(i.effect.motion,i.effect.startedAt,r,b.id):null,t,x.facing,!!R);M.root.position.set(w.feet.x,w.feet.y,0),M.root.scale.x=x.facing,M.root.visible=!b.eliminated,I&&(s=b),M.pose=pg(M.pose,{angle:x.angle,pull:.2+x.power*.5},t),M.release+=((R?1:0)-M.release)*(1-Math.exp(-18*t));const F=oc(M.pose,M.release),C=(B,G=.12)=>Gt(B.x+7.72,B.y-.08,G),U=M.pose.angle*Math.PI/180;M.bow.position.copy(C(F.bow)),M.bow.rotation.z=U;const z=M.string.attributes.position;z.setXYZ(1,(F.nock.x-F.bow.x)*Math.cos(U)+(F.nock.y-F.bow.y)*Math.sin(U),0,0),z.needsUpdate=!0,this.updateBeam(M.arms[0],Gt(.02,2.22,.42),C({x:F.bow.x+Math.cos(U)*.37,y:F.bow.y+Math.sin(U)*.37})),this.updateBeam(M.arms[1],Gt(-.23,2.22,.45),C(F.elbow,.28)),this.updateBeam(M.arms[2],C(F.elbow,.28),C(F.hand)),M.hand.position.copy(C(F.hand));const W=C({x:F.nock.x+Math.cos(U)*1.2,y:F.nock.y+Math.sin(U)*1.2});if(M.arrow.position.copy(W),M.arrow.rotation.z=U,M.arrow.visible=!0,R&&i?.launchAt!==null&&i?.launchAt!==void 0&&r>=i.launchAt){const B=El(b,x,this.tuning,this.wind),G=Math.max(0,(Math.min(r,i.contactAt??1/0)-i.launchAt)/1e3),O={tip:{x:b.feet.x+W.x*x.facing,y:b.feet.y+W.y},angle:x.facing===1?U:Math.PI-U},Z=DE(i,R);M.flightId!==Z&&(M.flightId=Z,M.held=O);const K=ba(B,G,M.held??O);M.arrow.position.set((K.position.x-T.x)*x.facing,K.position.y-T.y,.12),M.arrow.rotation.z=x.facing===1?K.angle:Math.PI-K.angle,M.arrow.visible=i.phase!=="settling"}}if(this.guide.style.visibility=s&&this.canAim()&&(!this.draw||this.draw.valid)?"visible":"hidden",s){const b=this.rigs.get(s.id),M=El(s,this.aim,this.tuning,this.wind),T=b.pose.angle*Math.PI/180,R=oc(b.pose),I={tip:{x:s.feet.x+(R.nock.x+7.72+Math.cos(T)*1.2)*this.aim.facing,y:s.feet.y+R.nock.y-.08+Math.sin(T)*1.2},angle:this.aim.facing===1?T:Math.PI-T};cc(Rn).forEach((x,w)=>{const F=ba(M,x,I).position,C=Gt(F.x,F.y,.1).project(this.camera);this.dots[w].setAttribute("cx",String((C.x+1)*this.width/2)),this.dots[w].setAttribute("cy",String((1-C.y)*this.height/2))})}for(const[b,M]of this.actorLabels)i?.actors.some(T=>T.id===b)||(M.remove(),this.actorLabels.delete(b),this.labelKeys.delete(b),this.labelWidths.delete(b),this.labelHeights.delete(b),this.labelTiers.delete(b),this.labelTierDirty=!0);const o=this.width<640,c=i?.sharedPlanning?[...new Set(i.seats.map(b=>b.teamId).filter(b=>b!==null))]:[],l=[],u=this.labelView();if((i?.actors??[]).forEach((b,M)=>{let T=this.actorLabels.get(b.id);T||(T=document.createElement("span"),this.actorLabels.set(b.id,T),this.labels.append(T));const R=a?.find(K=>K.actorId===b.id)?.feet??b.feet,I=Gt(R.x,R.y+Jt.height+.4,.2).project(this.camera),x=i.seats.find(K=>K.actorId===b.id),w=x&&"teamId"in x&&typeof x.teamId=="string"?` · ${String.fromCharCode(65+c.indexOf(x.teamId))}`:"",F=b.id===this.ownId,C=x?.slotId?Ho(x.slotId).symbol:"",U=`${F?"You":x?.label??`#${M+1}`}${w}${o?"":` · ${b.eliminated?"out":b.health}`}`,z=(1-I.y)*this.height/2,W=u?yp((I.x+1)*this.width/2,z,0,u).hint:"",B=`${F}|${C}|${U}|${W}`;if(this.labelKeys.get(b.id)!==B){if(T.className="combat-actor-label",T.dataset.actorId=b.id,T.dataset.own=String(F),T.style.zIndex=F?"1":"",x?.slotId?(T.style.borderLeft=`5px solid ${Ho(x.slotId).hex}`,T.dataset.slot=x.slotId,T.dataset.symbol=C):(T.style.borderLeft="",delete T.dataset.slot,delete T.dataset.symbol),W){const de=document.createElement("span");de.className="combat-label-hint",de.textContent=W,T.replaceChildren(U,de)}else T.textContent=U;delete T.dataset.mark,T.dataset.offscreen="false";const K=T.offsetWidth;this.labelWidths.set(b.id,K),this.labelHeights.set(b.id,T.offsetHeight),this.labelTierDirty=!0,K>0&&this.labelKeys.set(b.id,B)}const G=u?yp((I.x+1)*this.width/2,z,this.labelHeights.get(b.id)??0,u):null,O=G?.y??z;G?.mark?(T.dataset.mark=G.mark,T.dataset.edge=G.edge??"",T.dataset.offscreen="true"):(delete T.dataset.mark,delete T.dataset.edge,T.dataset.offscreen="false");const Z={id:b.id,x:(I.x+1)*this.width/2,width:this.labelWidths.get(b.id)??0,y:O,height:this.labelHeights.get(b.id)??0,stack:G?.pin==="top"?"down":"up"};(F?l.unshift.bind(l):l.push.bind(l))({id:b.id,label:T,y:O,box:Z})}),this.labelTierDirty){const b=Math.max(0,...this.labelHeights.values());this.labelTierPx=b>0?b+NE:Io,this.labelTierDirty=!1}const d=this.labelTierPx,h=RE(l.map(b=>b.box),this.labelTiers,{viewWidth:this.width,tierPx:d,minTop:u?.minTop??this.hudBottom(),maxBottom:u?.maxBottom});this.labelTiers=new Map([...h].map(([b,M])=>[b,M.tier]));for(const b of l){const M=h.get(b.id);b.label.style.left=`${M.x}px`,b.label.style.top=`${b.y+(b.box.stack==="down"?1:-1)*M.tier*d}px`}const p=this.lastShot.shot;this.lastMarker.visible=!!p&&this.lastShot.markerVisible(r),p&&this.lastMarker.position.set(p.impact.x,p.impact.y,.7),e.setClearColor(this.theme==="dark"?"#202f36":"#dce8df");const g=this.shake?qw(this.shake.age,this.shake.amplitude):null,v=this.homeCamera.copy(this.camera.position);g&&this.camera.position.set(v.x+g.x,v.y+g.y,v.z),this.parallax?.update(this.camera,performance.now()/1e3,this.reducedMotion),e.render(this.scene,this.camera),this.camera.position.copy(v);const m=this.ownId?this.rigs.get(this.ownId):null,f=i?.format==="skirmish"&&i.action?.actorId===this.ownId?i.action:null,y=m?{actorId:this.ownId,lifeId:i?.seat.lifeId,mirror:m.root.scale.x,bow:m.bow.getWorldPosition(Gt(0,0)),arrow:{...m.arrow.getWorldPosition(Gt(0,0)),visible:m.root.visible&&m.arrow.visible},action:f?{id:f.id,actorId:f.actorId,lifeId:f.lifeId,epoch:f.epoch,roundId:f.roundId,at:r,launchAt:i?.launchAt,contactAt:i?.contactAt}:null}:null;this.canvas.dataset.combat=JSON.stringify({revision:i?.revision,format:i?.format,epoch:i?.epoch,worldKey:i?.worldKey,state:i?.state,phase:i?.phase,actors:i?.actors,terrainRevision:i?.terrain.revision,terrainDigest:this.installedDigest,ownId:this.ownId,aim:this.aim,drawing:!!this.draw,view:[this.camera.left,this.camera.right,this.camera.top,this.camera.bottom],chunks:this.chunks.size,renderedOwn:y})}}const zl=Object.freeze({commentChars:500,maxRound:1e5,idChars:80}),La=Object.freeze([{id:"arrowDamage",label:"Arrow damage"},{id:"bombDamage",label:"Bomb damage and reach"},{id:"speedOfDeath",label:"How fast you died"},{id:"knockback",label:"Knockback"},{id:"groundDestruction",label:"Ground destruction"},{id:"aimingDifficulty",label:"Aiming difficulty"}]),Mp=Object.freeze(["too-little","just-right","too-much"]),FE=Object.freeze({"too-little":"Too little","just-right":"Just right","too-much":"Too much"});function Pg(n){const e=Object.fromEntries(La.map(t=>[t.id,{tooLittle:0,justRight:0,tooMuch:0}]));for(const t of n)for(const i of La){const r=t[i.id];r==="too-little"?e[i.id].tooLittle++:r==="just-right"?e[i.id].justRight++:r==="too-much"&&e[i.id].tooMuch++}return e}const OE=Object.freeze({arrowDamage:{tooMuch:[{field:"directBodyDamage",delta:-10},{field:"directHeadDamage",delta:-10}],tooLittle:[{field:"directBodyDamage",delta:10},{field:"directHeadDamage",delta:10}]},bombDamage:{tooMuch:[{field:"blastMidDamage",delta:-2},{field:"blastFarDamage",delta:-1},{field:"bombRadius",delta:-.25}],tooLittle:[{field:"blastMidDamage",delta:2},{field:"blastFarDamage",delta:1},{field:"bombRadius",delta:.25}]},speedOfDeath:{tooMuch:[{field:"blastNearDamage",delta:-5},{field:"impactThreshold",delta:1}],tooLittle:[{field:"blastNearDamage",delta:5},{field:"impactThreshold",delta:-1}]},knockback:{tooMuch:[{field:"directKnockbackHorizontal",delta:-1},{field:"directKnockbackUp",delta:-1},{field:"bombHorizontalImpulse",delta:-1},{field:"bombUpImpulse",delta:-1}],tooLittle:[{field:"directKnockbackHorizontal",delta:1},{field:"directKnockbackUp",delta:1},{field:"bombHorizontalImpulse",delta:1},{field:"bombUpImpulse",delta:1}]},groundDestruction:{tooMuch:[{field:"chipRadius",delta:-.25},{field:"craterRadius",delta:-.25}],tooLittle:[{field:"chipRadius",delta:.25},{field:"craterRadius",delta:.25}]},aimingDifficulty:{tooMuch:[{field:"shotGravity",delta:-1}],tooLittle:[{field:"shotGravity",delta:1}]}}),xa=Object.keys(Va),kE=(n,e)=>xa.every(t=>n[t]===e[t]),BE=n=>Math.round(n*1e4)/1e4;function zE(n,e){const t=Va[n],i=Math.min(t.max,Math.max(t.min,BE(e)));return t.integer?Math.round(i):i}function HE(n){const e=Object.hasOwn(ri,n.id)?ri[n.id]:void 0;return e&&kE(e,n)?e:Pn}const GE=3;function VE(n,e,t){const i=Pg(e),r=Object.fromEntries(xa.map(p=>[p,n[p]])),s=[],a=new Map;for(const p of La){const g=i[p.id],v=g.tooLittle+g.justRight+g.tooMuch,m=g.tooMuch-g.tooLittle;if(m===0||Math.abs(m)*2<v||t!==void 0&&t>=GE&&v<2)continue;const f=m>0?"too-much":"too-little";s.push({question:p.id,direction:f});for(const y of OE[p.id][m>0?"tooMuch":"tooLittle"])r[y.field]=zE(y.field,r[y.field]+y.delta),a.has(y.field)||a.set(y.field,p.id)}r.blastMidDamage=Math.min(r.blastMidDamage,r.blastNearDamage),r.blastFarDamage=Math.min(r.blastFarDamage,r.blastMidDamage),r.shotMinSpeed+r.shotExtraSpeed>40&&(r.shotExtraSpeed=40-r.shotMinSpeed);const o={...r,id:"suggested"},c=xa.filter(p=>o[p]!==n[p]).map(p=>({field:p,from:n[p],to:o[p],question:a.get(p)}));if(!c.length)return{reasons:s,changes:c,override:null,profile:n};Ac(o);const l=HE(n),u={base:l.id};for(const p of xa)o[p]!==l[p]&&(u[p]=o[p]);const d=JSON.stringify(u),h=Vm(d);if(!xa.every(p=>h[p]===o[p]))throw new RangeError("Suggested tuning did not round-trip.");return{reasons:s,changes:c,override:d,profile:h}}const uc=n=>n.replace(/([A-Z])/g," $1").toLowerCase().replace(/^./,e=>e.toUpperCase()),Zh=n=>({key:n,label:uc(n),bound:n==="windMax"?Hm:Va[n]}),WE=Object.freeze(["chipRadius","windMax"].map(Zh)),XE=Object.freeze(Qs.filter(n=>n!=="chipRadius"&&n!=="windMax").map(Zh)),Lg=Object.freeze(Object.keys(ri)),ti=(n,e)=>e==="windMax"?ur(n):n[e];function $E(n){let e=Pn.id,t=1/0,i=1/0;for(const r of Lg){const s=ri[r];let a=0,o=0;for(const c of Qs){const l=Math.abs(ti(s,c)-ti(n,c));if(l===0)continue;const{min:u,max:d}=Zh(c).bound;a++,o+=d>u?l/(d-u):0}(a<t||a===t&&o<i)&&(e=r,t=a,i=o)}return e}function Dg(n){const e=Object.hasOwn(ri,n)?ri[n]:Pn;return Object.fromEntries(Qs.map(t=>[t,ti(e,t)]))}function YE(n,e){const t=Dg(n),i={};for(const r of Qs){const s=(e[r]??"").trim();if(s==="")throw new Error(`Enter a value for ${uc(r).toLowerCase()}.`);const a=Number(s);if(!Number.isFinite(a))throw new Error(`${uc(r)} must be a number.`);a!==t[r]&&(i[r]=a)}try{Dh(n,i)}catch(r){throw new Error(r instanceof RangeError?r.message.replace(/^Invalid tuning profile: /,""):"Those settings are not valid.")}return{kind:"tuning",preset:n,overrides:i}}function jE(n){return`${n.id.startsWith("custom-")?"Custom settings":`Preset ${n.id}`} · chip radius ${ti(n,"chipRadius")} · wind ${ti(n,"windMax")===0?"calm":`up to ${ti(n,"windMax")}`}`}const Sp=n=>nc(Rc(n));let Ng=null;const Ug="archery.suggestedTuning";function qE(n,e){Ng=n;try{e?.setItem(Ug,n??"")}catch{}}function wp(n){let e=Ng;if(e===null)try{e=n?.getItem(Ug)??null}catch{e=null}if(!e)return null;try{const t=JSON.parse(e);if(!t||typeof t!="object"||Array.isArray(t))return null;const{base:i,...r}=t;return typeof i!="string"?null:(Dh(i,r),{kind:"tuning",preset:i,overrides:r})}catch{return null}}function KE(n,e,t){return n!==null&&n.roomId===e.roomId&&n.digest!==e.digest}function Ep(n,e,t,i){return i?t?e:null:n}function Tp(n,e,t){return n==="skip"?"Finishing the last action…":n==="error"?"":e!==null&&e===t?"No changes":"Saved"}function JE(n,e){let t;try{t=Dh(n.preset,n.overrides)}catch{return null}const i=Qs.filter(s=>ti(t,s)!==ti(e,s));return i.length?`Apply suggestion: ${i.slice(0,3).map(s=>s==="windMax"?`wind up to ${ti(t,s)}`:`${uc(s).toLowerCase()} ${ti(t,s)}`).join(", ")}${i.length>3?` +${i.length-3} more`:""}`:null}const ZE=1e4,QE=30,eT=8e3,tT=1500,Ap="archery.feedback.v1.",Ce=n=>document.getElementById(n),Pi=(n,e="",t="")=>{const i=document.createElement(n);return e&&(i.textContent=e),t&&(i.className=t),i};function nT(){try{return sessionStorage}catch{return null}}class Ts{guest;store;target=null;arena=null;finished=null;tuning=Pn;answers={};rating=null;sent=!1;lastPrivateId=null;pollTimer=null;polls=0;seenRounds=new Map;roundTimer=null;roundTarget=null;buttons=new Map;override=null;constructor(e,t=nT()){this.guest=e,this.store=t,this.buildQuestions(),Ce("feedback-form").addEventListener("submit",r=>{r.preventDefault(),this.sendSurvey()}),Ce("feedback-skip").addEventListener("click",()=>this.closeSheet(!0)),Ce("feedback-close").addEventListener("click",()=>this.closeSheet(this.target?.type!=="public")),Ce("feedback-reopen").addEventListener("click",()=>{this.finished&&this.openSheet(this.finished,!0)}),Ce("feedback-copy").addEventListener("click",()=>{this.copyOverride()}),Ce("skirmish-feedback").addEventListener("click",()=>{this.arena&&this.openPublic(this.arena,!0)});const i=Ce("feedback-comment");i.maxLength=zl.commentChars,i.addEventListener("input",()=>{Ce("feedback-count").textContent=`${i.value.length}/${zl.commentChars}`});for(const r of["up","down"])Ce(`feedback-round-${r}`).addEventListener("click",()=>{this.sendRound(r)});Ce("feedback-round-dismiss").addEventListener("click",()=>this.hideRound())}static key(e){return e.type==="private"?e.roomId:`public:${e.arenaId}`}recorded(e){try{return this.store?.getItem(Ap+e)??null}catch{return null}}record(e,t){try{(t==="sent"||this.recorded(e)!=="sent")&&this.store?.setItem(Ap+e,t)}catch{}}buildQuestions(){const e=Ce("feedback-questions");for(const i of La){const r=Pi("div","","feedback-question");r.setAttribute("role","group"),r.setAttribute("aria-label",i.label),r.append(Pi("p",i.label,"feedback-label"));const s=Pi("div","","feedback-choices");for(const a of Mp){const o=Pi("button",FE[a]);o.type="button",o.setAttribute("aria-pressed","false"),o.dataset.question=i.id,o.dataset.answer=a,o.addEventListener("click",()=>this.choose(i.id,a)),this.buttons.set(`${i.id}:${a}`,o),s.append(o)}r.append(s),e.append(r)}const t=Ce("feedback-rating");for(let i=1;i<=5;i++){const r=Pi("button",String(i));r.type="button",r.setAttribute("aria-pressed","false"),r.setAttribute("aria-label",`${i} out of 5`),r.addEventListener("click",()=>{this.rating=this.rating===i?null:i;for(const[s,a]of[...t.children].entries())a.setAttribute("aria-pressed",String(this.rating===s+1))}),t.append(r)}}choose(e,t){this.answers[e]===t?delete this.answers[e]:this.answers[e]=t;for(const i of Mp)this.buttons.get(`${e}:${i}`).setAttribute("aria-pressed",String(this.answers[e]===i))}syncPrivate(e){const t=e?.roomId??null;if(t!==this.lastPrivateId){for(const i of[...this.seenRounds.keys()])i.startsWith("private:")&&this.seenRounds.delete(i);this.lastPrivateId=t}!e||e.state.state!=="finished"?(this.target?.type==="private"&&this.closeSheet(!1),this.finished=null,this.updateReopen()):this.finished?.roomId!==e.roomId?(this.finished=e,this.recorded(e.roomId)===null?this.openSheet(e,!1):this.updateReopen()):this.finished=e,e&&e.state.state==="active"&&this.observeRounds(`private:${e.roomId}:${e.state.epoch??0}`,{type:"private",roomId:e.roomId},e.state.epoch??0,e.state.completedRounds)}syncPublic(e){if(!e){for(const i of[...this.seenRounds.keys()])i.startsWith("public:")&&this.seenRounds.delete(i);this.arena=null,this.target?.type==="public"&&this.closeSheet(!1),this.updatePublicButton();return}!(this.arena?.arenaId===e.arenaId&&this.arena.memberId===e.memberId)&&this.target?.type==="public"&&this.closeSheet(!1),this.arena={type:"public",arenaId:e.arenaId,memberId:e.memberId},this.updatePublicButton(),this.observeRounds(`public:${e.arenaId}:${e.epoch}`,{type:"public",arenaId:e.arenaId,memberId:e.memberId},e.epoch,e.completedRounds)}observeRounds(e,t,i,r){if(r===void 0||!Number.isSafeInteger(r))return;const s=this.seenRounds.get(e);this.seenRounds.set(e,r),s!==void 0&&r>s&&r>0&&this.offerRound(t,i,r),this.seenRounds.size>16&&this.seenRounds.delete(this.seenRounds.keys().next().value)}updateReopen(){Ce("feedback-reopen").hidden=this.finished===null||this.target!==null}updatePublicButton(){Ce("skirmish-feedback").hidden=!this.arena||this.target!==null||this.recorded(Ts.key(this.arena))!==null}openPublic(e,t){this.resetSheet(e,Pn,!1),Ce("feedback-title").textContent="How is the arena playing?",Ce("feedback-summary").hidden=!0,Ce("feedback-override-box").hidden=!0,this.override=null,this.stopPolling(),this.updateReopen(),this.updatePublicButton(),t&&this.buttons.values().next().value?.focus?.()}openSheet(e,t){this.resetSheet({type:"private",roomId:e.roomId},e.state.tuning??Pn,t),Ce("feedback-title").textContent="How did that match feel?",Ce("feedback-summary").hidden=!1,this.renderSummary([],0),this.updateReopen(),this.updatePublicButton(),this.stopPolling(),this.polls=0,this.refresh(),this.pollTimer=setInterval(()=>{++this.polls>QE?this.stopPolling():this.refresh()},ZE)}resetSheet(e,t,i){this.target=e,this.tuning=t,this.answers={},this.rating=null,this.sent=this.recorded(Ts.key(e))==="sent";for(const s of this.buttons.values())s.setAttribute("aria-pressed","false");for(const s of Ce("feedback-rating").children)s.setAttribute("aria-pressed","false");Ce("feedback-comment").value="",Ce("feedback-count").textContent=`0/${zl.commentChars}`,Ce("feedback-status").textContent="";const r=i||this.sent;Ce("feedback-form").hidden=r,Ce("feedback-skip").hidden=r,Ce("feedback-sheet").hidden=!1}closeSheet(e){e&&this.target&&this.record(Ts.key(this.target),this.sent?"sent":"dismissed"),this.stopPolling(),this.target=null,Ce("feedback-sheet").hidden=!0,this.updateReopen(),this.updatePublicButton()}stopPolling(){this.pollTimer!==null&&clearInterval(this.pollTimer),this.pollTimer=null}async sendSurvey(){const e=this.target;if(!e||this.sent)return;const t=Ts.key(e),i=Ce("feedback-comment").value.trim(),r=Ce("feedback-status");if(!Object.keys(this.answers).length&&this.rating===null&&!i){r.textContent="Pick an answer, a rating or write a note, or skip.";return}const s={kind:"survey",room:e,answers:this.answers,...this.rating===null?{}:{rating:this.rating},...i?{comment:i}:{}};Ce("feedback-send").disabled=!0,r.textContent="Sending…";try{const a=await this.guest.request("/feedback",s);if(this.record(t,"sent"),this.updatePublicButton(),this.target!==e)return;this.sent=!0,r.textContent=a.duplicate===!0?"Your answers were already recorded.":"Thanks. Your answers are saved.",Ce("feedback-form").hidden=!0,Ce("feedback-skip").hidden=!0,await this.refresh()}catch(a){this.target===e&&(r.textContent=a instanceof Error?a.message:"Feedback could not be sent. You can skip.")}finally{Ce("feedback-send").disabled=!1}}async refresh(){const e=this.target;if(e?.type!=="private")return;const t=e.roomId;try{const i=await this.guest.request(`/feedback/rooms/${encodeURIComponent(t)}`);if(this.target!==e||!Array.isArray(i.surveys))return;const r=[];for(const s of i.surveys)s&&typeof s=="object"&&"answers"in s&&s.answers&&typeof s.answers=="object"&&r.push(s.answers);this.renderSummary(r,typeof i.members=="number"&&Number.isSafeInteger(i.members)?i.members:r.length)}catch{}}renderSummary(e,t){const i=Pg(e),r=Ce("feedback-tally");Ce("feedback-summary-title").textContent=e.length?`Room feedback · based on ${e.length} of ${Math.max(t,e.length)} players`:"Room feedback · no answers yet",r.replaceChildren(...La.map(a=>{const o=i[a.id],c=Pi("li");return c.append(Pi("span",a.label,"feedback-tally-label"),Pi("span",`${o.tooLittle} too little · ${o.justRight} just right · ${o.tooMuch} too much`,"feedback-tally-counts")),c}));let s;try{s=VE(this.tuning,e,t)}catch{s=null}this.override=s?.override??null,qE(this.override,this.store??void 0),Ce("feedback-changes").replaceChildren(...(s?.changes??[]).map(a=>Pi("li",`${a.field}: ${a.from} → ${a.to}`))),Ce("feedback-suggestion-note").textContent=this.override?"Suggested tuning. The host can apply it from the settings of the next lobby (use Rematch), or an operator can set ARCHERY_TUNING and redeploy.":e.length?"No tuning change suggested from these answers.":"A tuning suggestion appears once answers arrive.",Ce("feedback-override").textContent=this.override?`ARCHERY_TUNING='${this.override}'`:"",Ce("feedback-override-box").hidden=!this.override}async copyOverride(){if(this.override){try{await navigator.clipboard.writeText(`ARCHERY_TUNING='${this.override}'`),Ce("feedback-copy").textContent="Copied"}catch{Ce("feedback-copy").textContent="Select the text to copy"}setTimeout(()=>{Ce("feedback-copy").textContent="Copy"},2e3)}}offerRound(e,t,i){this.roundTarget={target:e,epoch:t,round:i},Ce("feedback-round-text").textContent="How was that round?";for(const r of["up","down"])Ce(`feedback-round-${r}`).disabled=!1;Ce("feedback-round").hidden=!1,this.roundTimer!==null&&clearTimeout(this.roundTimer),this.roundTimer=setTimeout(()=>this.hideRound(),eT)}hideRound(){this.roundTimer!==null&&clearTimeout(this.roundTimer),this.roundTimer=null,this.roundTarget=null,Ce("feedback-round").hidden=!0}async sendRound(e){const t=this.roundTarget;if(!t)return;this.roundTimer!==null&&clearTimeout(this.roundTimer);for(const r of["up","down"])Ce(`feedback-round-${r}`).disabled=!0;Ce("feedback-round-text").textContent="Sending…";let i="Thanks.";try{await this.guest.request("/feedback",{kind:"round",room:t.target,epoch:t.epoch,round:t.round,vote:e})}catch{i="Could not send that vote."}this.roundTarget===t&&(Ce("feedback-round-text").textContent=i,this.roundTimer=setTimeout(()=>this.hideRound(),tT))}}const ln=n=>document.getElementById(n);function Rp(){try{return sessionStorage}catch{return}}class iT{constructor(e){this.send=e;const t=ln("combat-settings-preset");t.replaceChildren(...Lg.map(r=>{const s=document.createElement("option");return s.value=r,s.textContent=r,s}));const i=(r,s)=>{const a=document.createElement("label"),o=document.createElement("input"),c=`combat-settings-${s.key}`;a.append(`${s.label} `,o),o.id=c,o.type="number",o.step=s.bound.integer?"1":"any",o.min=String(s.bound.min),o.max=String(s.bound.max),o.inputMode=s.bound.integer?"numeric":"decimal",o.dataset.knob=s.key,this.inputs.set(s.key,o),r.append(a)};for(const r of WE)i(ln("combat-settings-primary"),r);for(const r of XE)i(ln("combat-settings-more"),r);t.addEventListener("change",()=>this.fill(Dg(t.value))),ln("combat-settings-save").addEventListener("click",()=>{try{this.submit(YE(t.value,Object.fromEntries([...this.inputs].map(([r,s])=>[r,s.value]))))}catch(r){ln("combat-settings-status").textContent=r instanceof Error?r.message:"Those settings are not valid."}}),ln("combat-settings-suggest").addEventListener("click",()=>{const r=wp(Rp());r&&this.submit(r)})}send;synced="";last=null;changedNotice=!1;sending=!1;inputs=new Map;async submit(e){if(!this.sending){this.sending=!0;try{const t=this.last?.digest??null,i=await this.send(e);ln("combat-settings-status").textContent=Tp(i,t,this.last?.digest??null)}finally{this.sending=!1}}}fill(e){for(const[t,i]of this.inputs)i.value=String(e[t])}fillFrom(e){ln("combat-settings-preset").value=$E(e),this.fill(Object.fromEntries([...this.inputs.keys()].map(t=>[t,ti(e,t)])))}render(e,t){const i=!!e&&e.state.state==="waiting";if(ln("combat-settings").hidden=!i,!e||!i){this.last=Ep(this.last,null,!1,!!e),e&&(this.synced="",this.changedNotice=!1,ln("combat-settings-status").textContent="");return}const r=Rc(e.state),s=e.membership.canStart,a={roomId:e.roomId,digest:Sp(e.state)};this.last&&this.last.roomId!==a.roomId&&(this.changedNotice=!1);const o=KE(this.last,a);if(o&&(this.changedNotice=!0),(o||this.last&&this.last.roomId!==a.roomId)&&!this.sending&&(ln("combat-settings-status").textContent=""),this.last=Ep(this.last,a,!0,!0),!t&&ln("combat-settings-status").textContent===Tp("skip",null,null)&&(ln("combat-settings-status").textContent=""),e.state.seats.find(h=>h.actorId===e.membership.actorId)?.ready&&(this.changedNotice=!1),ln("combat-settings-summary").textContent=jE(r)+(s?"":" · set by the host")+(this.changedNotice?" · Settings changed — ready up again":""),ln("combat-settings-editor").hidden=!s,!s)return;const c=e.roomId+Sp(e.state);c!==this.synced&&(this.synced=c,this.fillFrom(r));const l=wp(Rp()),u=l?JE(l,r):null,d=ln("combat-settings-suggest");d.hidden=u===null,u&&(d.textContent=u,d.title=u);for(const h of["save","suggest"])ln(`combat-settings-${h}`).disabled=t}}function eh(n,e="arrow"){return n?`Next ${e}`:"Try again"}function rT(n,e,t="below",i="arrow"){const r=t==="below"?" below":"";return n==="ready"?{icon:"↙",text:"Drag back on the stage to aim and draw"}:(n==="hit"||n==="miss")&&i==="level"&&t==="below"?null:n==="hit"||n==="miss"?{icon:"↓",text:e?i==="level"?`Tap Next level${r} to continue`:`Tap Next arrow${r} for another shot`:`Drag again, or tap Try again${r}`}:null}const Da="challenge-v1";function fc(n){if(n!=="course"&&n!=="endless")throw new RangeError("Unknown challenge format.")}function sT(n){if(!Number.isFinite(n.angle)||!Number.isFinite(n.power)||n.angle<Ut.minAngle||n.angle>Ut.maxAngle||n.power<0||n.power>1)throw new RangeError("Challenge aim must have an angle from 5 to 80 and power from 0 to 1.")}const Qh=(...n)=>32*Number.EPSILON*Math.max(1,...n.map(Math.abs));function eu(n,e){if(fc(n),!Number.isSafeInteger(e)||e<0||n==="course"&&e>=12)throw new RangeError("Challenge shot index is out of range.");const t=Math.floor(e/3),i=n==="course"?[12,18,24,30][t]:Math.min(30,12+2*t),r=n==="course"?2.6:Math.max(.8,2.6-.1*t);return Object.freeze({distance:i,centerY:3.2,radius:r,faceX:Wt.x+i})}function aT(n,e){if(sT(n),![e.distance,e.centerY,e.radius,e.faceX].every(Number.isFinite)||e.distance<=0||e.radius<=0||Math.abs(e.faceX-(Wt.x+e.distance))>Qh(e.faceX,e.distance))throw new RangeError("Challenge target must have finite, consistent geometry and positive distance and radius.");const t=Sc(n);return tu(t,e,Math.min(Ch(t),Ut.maxFlight))}function oT(n,e){const t=Math.abs(n-e.centerY),i=Qh(t,n,e.centerY,e.radius);let r=0;for(let s=1;s<=10;s++)if(t<=e.radius*s/10+i){r=11-s;break}return{score:r,innerBullseye:t<=e.radius/20+i}}function tu(n,e,t){const i=Nm(n,e.faceX);if(i===null||i>=t-Qh(i,t))return Object.freeze({score:0,innerBullseye:!1,impact:null,at:t,hit:!1});const r=Object.freeze({x:e.faceX,y:qt(n,i).y}),{score:s,innerBullseye:a}=oT(r.y,e);return Object.freeze({score:s,innerBullseye:a,impact:r,at:i,hit:s>0})}function Fg(n,e=Da){if(fc(n),typeof e!="string"||e.trim().length===0)throw new RangeError("A challenge requires a rules version.");return Object.freeze({format:n,rulesVersion:e,status:"active",revision:0,shots:Object.freeze([]),total:0,hits:0,innerBullseyes:0,tens:0,misses:0})}function nu(n){if(n.status!=="active")throw new Error("The challenge has already ended.")}function iu(n,e){nu(n);const t=eu(n.format,n.shots.length),i=aT(e,t),r=Object.freeze({aim:Object.freeze({angle:e.angle,power:e.power}),target:t,outcome:i}),s=Object.freeze([...n.shots,r]),a=n.misses+ +!i.hit,o=n.format==="course"?s.length===12:a===3;return Object.freeze({...n,status:o?"completed":"active",revision:n.revision+1,shots:s,total:n.total+i.score,hits:n.hits+Number(i.hit),innerBullseyes:n.innerBullseyes+Number(i.innerBullseye),tens:n.tens+ +(i.score===10),misses:a})}function ru(n){if(nu(n),n.format!=="endless"||n.shots.length===0)throw new Error("Only a nonempty endless challenge can be banked.");return Object.freeze({...n,status:"completed",revision:n.revision+1})}function cT(n){return nu(n),Object.freeze({...n,status:"abandoned",revision:n.revision+1})}function Hl(n,e){if(fc(n.format),fc(e.format),n.format!==e.format)throw new RangeError("Challenge results must use the same format.");const t=n.format==="course"?["total","innerBullseyes","tens"]:["total","hits","innerBullseyes","tens"];for(const i of t)if(n[i]!==e[i])return e[i]-n[i];return 0}const Wr=.24,Og=-1;function lT(n){const{step:e,scale:t,heights:i}=n.ground,r=[];for(let s=0;s<i.length;){const a=i[s];let o=s+1;for(;o<i.length&&i[o]===a;)o++;a>0&&r.push({minX:Wt.x+s*e,maxX:Wt.x+o*e,minY:Og,maxY:Wr+a*t}),s=o}for(const s of n.obstacles)r.push({minX:Wt.x+s.x,maxX:Wt.x+s.x+s.width,minY:s.y0,maxY:s.y1});return r}function Wa(n){const{distance:e,centerY:t,radius:i}=n.target,r=Object.freeze({distance:e,centerY:t,radius:i,faceX:Wt.x+e});return Object.freeze({level:n,target:r,blockers:lT(n).filter(s=>s.minX<=r.faceX)})}function su(n,e){const t=Sc(e);return n.wind?{...t,wind:n.wind}:t}function kg(n,e){const t=su(n.level,e),i=Ch(t,Wr);let r=Math.min(i,Ut.maxFlight),s=i<Ut.maxFlight?"ground":"timeout";for(const a of n.blockers){const o=Rh(t,a,0,r);o!==null&&o<r&&(r=o,s=a.minY===Og?"ground":"obstacle")}return{shot:t,stop:r,cause:s}}function Bg(n,e){const{shot:t,stop:i}=kg(n,e);return tu(t,n.target,i)}function dT(n){const{step:e,scale:t,heights:i}=n.ground,r=n.target.distance/e,s=Number.isInteger(r)?[r-1,r]:[Math.floor(r)];return Math.max(Wr,...s.filter(a=>a>=0&&a<i.length).map(a=>Wr+i[a]*t))}function hT(n){const{distance:e,centerY:t,radius:i}=n.target,r=t-i,s=t+i,a=[];return r>dT(n)||a.push("face-buried"),n.obstacles.some(o=>o.x<=e&&e<=o.x+o.width&&o.y0<=r&&o.y1>=s)&&a.push("face-covered"),a}function uT(n){const e=n.target.faceX-Wt.x,t=n.target.centerY-Wt.y;return n.blockers.some(i=>{let r=0,s=1;for(const[a,o,c,l]of[[e,Wt.x,i.minX,i.maxX],[t,Wt.y,i.minY,i.maxY]]){if(a===0){if(o<c||o>l)return!1;continue}const u=(c-o)/a,d=(l-o)/a;r=Math.max(r,Math.min(u,d)),s=Math.min(s,Math.max(u,d))}return r<=s})}const $i=12,au=10,pc=au*10,Cp=5,fT=30,bs=n=>Math.floor(n*10+.5);function pT(n){if(!Number.isSafeInteger(n)||n<0)throw new RangeError(`isqrt needs a non-negative safe integer, got ${String(n)}`);let e=Math.floor(Math.sqrt(n));for(;e*e>n;)e--;for(;(e+1)*(e+1)<=n;)e++;return e}function mT(n){let e=0;for(let t=1;t<=Cp;t++)n>=(fT*t)**2&&e++;return Cp-e}function gT(n,e){const t=Math.abs(bs(e.faceX)-bs(n.x)),i=Math.max(0,bs(e.centerY-e.radius)-bs(n.y),bs(n.y)-bs(e.centerY+e.radius));return t*t+i*i}function xT(n,e){const{shot:t,stop:i,cause:r}=kg(n,e),s=tu(t,n.target,i);if(s.impact)return{x:s.impact.x,y:s.impact.y,onFace:s.hit,ring:s.score,innerBullseye:s.innerBullseye,cause:"face"};const a=qt(t,s.at);return{x:a.x,y:a.y,onFace:!1,ring:0,innerBullseye:!1,cause:r}}function _T(n,e){if(e.onFace)return{points:au*e.ring,landing:e,d2:0,distanceTenths:0};const t=gT(e,n.target);return{points:mT(t),landing:e,d2:t,distanceTenths:pT(t)}}function vT(n,e){return _T(n,xT(n,e))}function yT(n){return`${Math.floor(n/10)}.${n%10}`}function bT(){return Object.freeze({status:"active",shots:Object.freeze([]),total:0,tens:0,inner:0})}function MT(n,e){if(n.status!=="active"||n.shots.length>=$i)throw new Error("The one-shot run has already ended.");const{points:t,landing:i}=e;if(!Number.isInteger(t)||t<0||t>pc)throw new RangeError("One-shot points must be an integer from 0 to 100.");const r=Object.freeze([...n.shots,Object.freeze({points:t,innerBullseye:i.innerBullseye})]);return Object.freeze({status:r.length===$i?"completed":"active",shots:r,total:n.total+t,tens:n.tens+ +(t===pc),inner:n.inner+Number(i.innerBullseye)})}const ST=n=>n>=pc?"bullseye":n>=au?"ring":n>0?"near":"far",wT={face:"Passed the face",ground:"Landed on the ground",obstacle:"Stopped by an obstacle",timeout:"Ran out of flight"};function ET(n,e){const{points:t,landing:i}=n,r=i.onFace?`${i.ring===10?"Bullseye":`Ring ${i.ring}`} · +${t}`:t>0?`${yT(n.distanceTenths)} off · +${t}`:"Too far · +0",s=Jd(e)==="Wind calm"?"":` · ${Jd(e)}`,a=i.onFace?i.innerBullseye?"Inner bullseye":"On the face":wT[i.cause];return Object.freeze({points:t,tier:ST(t),value:r,caption:`${a}${s}`})}function TT(n){if(!Number.isInteger(n)||n<0||n>4294967295)throw new RangeError("A one-shot seed must be a uint32.");return Object.freeze({seed:n,run:bT(),reports:Object.freeze([])})}function AT(n,e,t){const i=MT(n.run,e);return Object.freeze({seed:n.seed,run:i,reports:Object.freeze([...n.reports,ET(e,t)])})}function RT(n){const e=new Uint32Array(1);return n(e),e[0]}const ou=n=>n.run.shots.length;function CT(n,e){const t=n.run.shots.length;return`Level ${Math.min($i,e?t:t+1)} / ${$i} · ${n.run.total} pts`}function IT(n){return Array.from({length:$i},(e,t)=>{const i=n.reports[t];return i?{index:t,state:"done",points:i.points,tier:i.tier,label:String(i.points)}:{index:t,state:t===n.run.shots.length&&n.run.status==="active"?"current":"todo",points:null,tier:null,label:""}})}const zg=n=>`${n.run.total} / ${$i*pc} points`,PT="Finish or abandon the one-shot run to switch modes.";function LT(n,e){if(!n)return{action:"switch"};const t=n.run.status==="active"&&n.run.shots.length===0;return t&&e==="oneshot"?{action:"noop"}:t||n.run.status!=="active"?{action:"switch"}:{action:"confirm",declineMessage:PT}}const DT="(orientation:landscape) and (max-height:540px) and (pointer:coarse)",NT="(orientation:portrait) and (max-width:640px) and (pointer:coarse)",Hg="archery-rotate-hint-dismissed";function UT(n){return n.view==="range"&&n.portraitPhone&&!n.dismissed}function FT(n){try{return n.getItem(Hg)==="1"}catch{return!1}}function OT(n){try{n.setItem(Hg,"1")}catch{}}function Gg(n,e,t=2){return Math.abs(e.width-n.width)>t||Math.abs(e.height-n.height)>t}function kT(n){return n.landscapePhone&&n.view==="range"&&n.outcome!=="unchanged"}function BT(n,e,t){const i=Math.max(1,t?e:e+1);return{arrow:i,distance:eu(n,n==="course"?Math.min(i,12)-1:i-1).distance}}function Vg(n){return!!n&&n.status==="completed"}function Wg(n,e,t){return Vg(n)&&e&&!t}const zT="Leave without posting your score?";function HT(n,e,t){return!n||e?"none":t?"initials":"result"}const Ip="archery.challenge.results.v1",Pp="archery.challenge.initials.v1",Ms=n=>!!n&&typeof n=="object"&&!Array.isArray(n);function th(n){if(!Ms(n)||!["course","endless"].includes(String(n.format))||n.rulesVersion!==Da||!Array.isArray(n.shots))throw new Error("Unsupported challenge data.");let e=Fg(n.format);for(const i of n.shots){if(!Ms(i)||!Ms(i.aim)||typeof i.aim.angle!="number"||typeof i.aim.power!="number")throw new Error("Invalid challenge shot.");e=iu(e,{angle:i.aim.angle,power:i.aim.power})}n.status==="completed"&&e.status==="active"&&(e=ru(e)),n.status==="abandoned"&&e.status==="active"&&(e=cT(e));function t(i,r){return Array.isArray(i)&&Array.isArray(r)?i.length===r.length&&i.every((s,a)=>t(s,r[a])):Ms(i)&&Ms(r)?Object.keys(i).length===Object.keys(r).length&&Object.keys(i).every(s=>s in r&&t(i[s],r[s])):i===r}if(!t(e,n))throw new Error("Challenge data failed verification.");return e}class GT{message="Results stay on this browser.";storage;constructor(e){this.storage=e}readResults(){let e;try{if(!this.storage)throw new Error;e=this.storage.getItem(Ip)}catch{return this.message="Result not saved: browser storage unavailable. You can still play.",null}if(e===null)return[];try{const t=JSON.parse(e);if(!Array.isArray(t))throw new Error;return t.map(i=>{const r=th(i);if(r.status!=="completed")throw new Error;return r})}catch{return this.message="Local results are unreadable or use another rules version. Existing data is preserved; new results cannot be saved.",null}}results(e){return(this.readResults()??[]).filter(t=>t.format===e).sort(Hl).slice(0,100)}save(e){if(e.status!=="completed")return!1;const t=this.readResults();if(t===null)return!1;try{const i=[th(e),...t.filter(s=>s.format===e.format)].sort(Hl).slice(0,100),r=t.filter(s=>s.format!==e.format).sort(Hl).slice(0,100);return this.storage.setItem(Ip,JSON.stringify([...i,...r])),this.message="Best 100 results per format stay on this browser.",!0}catch{return this.message="Result not saved: browser storage unavailable.",!1}}initials(){try{return this.storage?.getItem(Pp)??""}catch{return""}}saveInitials(e){try{this.storage?.setItem(Pp,e)}catch{}}}function Lp(n){if(!Array.isArray(n))throw new Error("Invalid leaderboard.");return n.map(e=>{if(!Ms(e)||!["rank","total","hits","innerBullseyes","tens","misses"].every(t=>Number.isSafeInteger(e[t])&&Number(e[t])>=0)||typeof e.guestId!="string"||typeof e.initials!="string"||!/^[a-z]{3}$/.test(e.initials)||typeof e.own!="boolean"||typeof e.publishedAt!="string")throw new Error("Invalid leaderboard entry.");return e})}class VT{attempt=null;pending=null;busy=!1;session;attemptRevision=null;pendingRevision=null;constructor(e,t=fetch,i,r){r?.assertContext(e,t,i),this.session=r??new Ec(e,t,i)}checkAttemptRevision(){const e=this.attemptRevision??this.session.revision;return this.session.assertRevision(e),this.attemptRevision=e,e}checkPending(e,t,i){if(this.session.assertRevision(i),this.pending!==e||this.attempt!==t)throw new Error("Challenge changed while the action was pending.")}decodeAttempt(e){if(typeof e.id!="string"||!e.id)throw new Error("Invalid attempt response.");return{id:e.id,state:th(e.state)}}async start(e){if(this.busy||this.pending)throw new Error("Finish the pending action first.");this.busy=!0;try{const t=await this.session.ensure();this.session.assertRevision(t.revision);const i=this.decodeAttempt(await this.session.request("/attempts",{format:e,rulesVersion:Da}));return this.session.assertRevision(t.revision),this.attempt=i,this.attemptRevision=t.revision,i}finally{this.busy=!1}}async shot(e){return this.action("shot",{aim:{...e}})}async bank(){return this.action("bank",{})}async action(e,t){if(!this.attempt||this.pending||this.busy)throw new Error("Finish the pending action first.");return this.pendingRevision=this.checkAttemptRevision(),this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/actions`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,kind:e,...t},kind:"action"},this.retry()}async retry(){if(!this.pending||this.pending.kind!=="action"||!this.attempt||this.busy)throw new Error("No retryable action.");const e=this.pending,t=this.attempt,i=this.pendingRevision??this.checkAttemptRevision();this.checkPending(e,t,i),this.busy=!0;try{const r=this.decodeAttempt(await this.session.request(e.url,e.body));this.checkPending(e,t,i);const s=e.body.kind==="shot"?iu(t.state,e.body.aim):ru(t.state);if(r.id!==t.id||JSON.stringify(r.state)!==JSON.stringify(s))throw new Error("Shared response does not match the pending action.");return this.attempt=r,this.pending=null,this.pendingRevision=null,r}catch(r){throw r instanceof vi&&r.code==="challenge_capacity"&&e.body.kind==="shot"&&this.pending===e&&this.attempt===t&&this.session.revision===i&&(this.pending=null,this.pendingRevision=null),r}finally{this.busy=!1}}async publish(e){if(!this.attempt||this.attempt.state.status!=="completed"||this.busy||this.pending?.kind==="action")throw new Error("Finish the pending shot first.");if(e=e.trim().toLowerCase(),!/^[a-z]{3}$/.test(e))throw new Error("Use exactly three letters A–Z.");const t=this.checkAttemptRevision();this.pending||(this.pending={url:`/attempts/${encodeURIComponent(this.attempt.id)}/publish`,body:{actionId:crypto.randomUUID(),expectedRevision:this.attempt.state.revision,initials:e},kind:"publish"},this.pendingRevision=t);const i=this.pending,r=this.attempt;this.checkPending(i,r,this.pendingRevision??t),this.busy=!0;try{const s=await this.session.request(i.url,i.body);this.checkPending(i,r,t);const a=Lp(s.entries);return this.pending=null,this.pendingRevision=null,a}catch(s){throw s instanceof Error&&"status"in s&&s.status===400&&this.pending===i&&this.attempt===r&&this.session.revision===t&&(this.pending=null,this.pendingRevision=null),s}finally{this.busy=!1}}async boards(e){const t=this.session.revision,i=await this.session.request(`/leaderboards/${e}?rulesVersion=${encodeURIComponent(Da)}`);return this.session.assertRevision(t),Lp(i.entries)}forget(){this.session.forget(),this.attempt=null,this.pending=null,this.attemptRevision=null,this.pendingRevision=null}}const WT="Finish or abandon the course to switch modes.",XT="Finish or abandon the endless run to switch modes.";function $T(n,e,t=!1){return n&&n.status==="active"&&n.shots.length===0&&e===n.format&&!t?{action:"noop"}:!n||n.status!=="active"||n.shots.length===0?{action:"switch"}:{action:"confirm",declineMessage:n.format==="endless"?XT:WT}}function Xg(n){try{return n()===!0}catch{return!1}}function YT(n){return n.busy||n.pending||n.state==="flying"||n.state==="aiming"}function Gl(n,e,t=jt){if(!Number.isFinite(e)||e<=0)throw new RangeError("Positive finite aspect required.");if(![t.minX,t.maxX,t.minY,t.maxY].every(Number.isFinite)||t.minX>t.maxX||t.minY>t.maxY)throw new RangeError("Ordered finite target required.");n.updateMatrixWorld(!0);let i=-11.4,r=11.4,s=-11.4/e,a=11.4/e;const o=(h,p,g)=>{const v=new k(h,p,g).applyMatrix4(n.matrixWorldInverse),m=1.1;i=Math.min(i,v.x-m),r=Math.max(r,v.x+m),s=Math.min(s,v.y-m),a=Math.max(a,v.y+m)};for(const h of[-8.5,8.62])for(const p of[0,6])o(h,p,.12);for(const h of[t.minX,t.maxX])for(const p of[t.minY,t.maxY])for(const g of[-.9,.12])o(h,p,g);const c=(i+r)/2,l=(s+a)/2,u=Math.max((a-s)/2,(r-i)/(2*e)),d=u*e;n.left=c-d,n.right=c+d,n.bottom=l-u,n.top=l+u,n.updateProjectionMatrix()}function jT(n,e,t){if(![n.origin.x,n.origin.y,n.velocity.x,n.velocity.y,e.x,e.y,t].every(Number.isFinite)||t<0||t>Ut.maxFlight)throw new RangeError("Finite shot and a bounded resolved interval required.");const i=n.origin.x-e.x,r=n.origin.y-e.y,s=n.velocity.x,a=n.velocity.y,o=Ut.gravity,c=.5*o*o,l=-1.5*o*a,u=s*s+a*a-o*r,d=s*i+a*r;if(![c,l,u,d].every(Number.isFinite))throw new RangeError("Shot exceeds supported numeric range.");const h=f=>((c*f+l)*f+u)*f+d,p=[0,t],g=4*l*l-12*c*u;if(g>=0)for(const f of[(-2*l-Math.sqrt(g))/(6*c),(-2*l+Math.sqrt(g))/(6*c)])f>0&&f<t&&p.push(f);p.sort((f,y)=>f-y);const v=[...p];for(let f=1;f<p.length;f++){let y=p[f-1],b=p[f],M=h(y),T=h(b);if(!(M===0||T===0||M<0==T<0)){for(let R=0;R<64;R++){const I=(y+b)/2,x=h(I);M<0==x<0?(y=I,M=x):b=I}v.push((y+b)/2)}}const m=Math.min(...v.map(f=>{const y=qt(n,f);return Math.hypot(y.x-e.x,y.y-e.y)}));if(!Number.isFinite(m))throw new RangeError("Shot exceeds supported numeric range.");return m}function Fr(){return{completed:0,hits:0,best:null,mean:null,last:null,lastShotId:0,m2:0,currentStreak:0,bestStreak:0,recent:[]}}function cu(n,e,t,i,r={angle:29,power:.62}){if(!Number.isSafeInteger(e)||e<0||!Number.isFinite(i)||i<0||typeof t!="boolean"||!Number.isFinite(r.angle)||r.angle<5||r.angle>80||!Number.isFinite(r.power)||r.power<.08||r.power>1)throw new RangeError("Valid completion identity, aim and distance required.");if(e<=n.lastShotId)return n;const s=n.completed+1,a=i-(n.mean??0),o=(n.mean??0)+a/s,c=t?n.currentStreak+1:0,l={completed:s,hits:n.hits+Number(t),best:Math.min(n.best??1/0,i),mean:o,last:i,lastShotId:e,m2:Math.max(0,n.m2+a*(i-o)),currentStreak:c,bestStreak:Math.max(n.bestStreak,c),recent:[{hit:t,distance:i,...r},...n.recent].slice(0,10)};if(!Number.isSafeInteger(s)||!Number.isFinite(l.m2)||!Number.isFinite(o))throw new RangeError("Practice exceeds supported numeric range.");return l}const qT="archery-practice",Vl="progress",Wl="practice";function KT(n){return{version:1,stats:n}}function JT(n){if(n===void 0)return Fr();const e=()=>{throw new Error("Saved practice is incompatible or damaged. Clear it to start again.")};if(!n||typeof n!="object"||n.version!==1)return e();const t=(a,o)=>Object.keys(a).sort().join(",")===o.sort().join(",");if(!t(n,["version","stats"]))return e();const i=n.stats;if(!i||typeof i!="object"||!t(i,Object.keys(Fr())))return e();const r=a=>Number.isSafeInteger(a)&&a>=0,s=a=>typeof a=="number"&&Number.isFinite(a)&&a>=0;if(![i.completed,i.hits,i.lastShotId,i.currentStreak,i.bestStreak].every(r)||i.hits>i.completed||i.lastShotId<i.completed||i.currentStreak>i.bestStreak||i.bestStreak>i.hits||i.hits>0&&i.bestStreak===0||!s(i.m2)||!Array.isArray(i.recent)||i.recent.length!==Math.min(i.completed,10))return e();if(i.completed){if(!s(i.best)||!s(i.mean)||!s(i.last)||i.best>i.mean||i.best>i.last||i.completed===1&&(i.m2!==0||i.mean!==i.last||i.best!==i.last)||i.hits===0&&i.bestStreak!==0||i.hits===i.completed&&(i.currentStreak!==i.completed||i.bestStreak!==i.completed))return e()}else if(i.hits||i.lastShotId||i.currentStreak||i.bestStreak||i.m2||i.best!==null||i.mean!==null||i.last!==null)return e();for(const a of i.recent)if(!a||!t(a,["hit","distance","angle","power"])||typeof a.hit!="boolean"||!s(a.distance)||!Number.isFinite(a.angle)||a.angle<5||a.angle>80||!Number.isFinite(a.power)||a.power<.08||a.power>1||i.best>a.distance)return e();if(i.completed){if(i.last!==i.recent[0].distance)return e();let a=0;for(const p of i.recent){if(!p.hit)break;a++}if(a<i.recent.length?i.currentStreak!==a:i.currentStreak<a)return e();let o=0,c=0;for(const p of[...i.recent].reverse())o=p.hit?o+1:0,c=Math.max(c,o);const l=i.recent.reduce((p,g)=>p+(g.distance-i.mean)**2,0);if(c>i.bestStreak||l>i.m2+1e-9*Math.max(1,i.m2))return e();const u=i.best+i.recent.reduce((p,g)=>p+(g.distance-i.best)/i.completed,0),d=Math.sqrt(i.completed-1)*(i.mean-i.best);if(u>i.mean+1e-10*Math.max(1,i.mean)||Math.sqrt(i.m2/i.completed)>d+1e-10*Math.max(1,d))return e();const h=i.recent.filter(p=>p.hit).length;if(h>i.hits||i.recent.length-h>i.completed-i.hits)return e();if(i.completed>10){const p=i.completed-i.recent.length,g=p-(i.hits-h),v=i.hits-h,m=i.mean-i.best;let f=p*m-i.recent.reduce((x,w)=>x+(w.distance-i.mean),0);const y=1e-9*Math.max(1,p*m,...i.recent.map(x=>Math.abs(x.distance-i.mean)));if(f<-y)return e();f=Math.max(0,f);const b=!i.recent.some(x=>x.distance===i.best);if(b&&p===1&&f>y)return e();const M=p*(f/p-m)**2,T=l+M+(b&&p>1?f/p*(f/(p-1)):0),R=l+M+f/p*f*(p-1);if(!Number.isFinite(T)||i.m2<T-1e-9*Math.max(1,i.m2,T)||i.m2>R+1e-9*Math.max(1,i.m2,R))return e();let I=0;for(const x of[...i.recent].reverse()){if(!x.hit)break;I++}if(I===i.recent.length){const x=i.currentStreak-I,w=v-x;if(x>v||x<0||g===0&&x!==p||w>g*i.bestStreak||i.bestStreak<x+I||i.bestStreak>Math.max(c,x+I,w))return e()}else if(v>(g+1)*i.bestStreak-I||i.bestStreak>Math.max(c,v+I))return e()}if(i.completed<=10){let p=Fr();for(const v of[...i.recent].reverse())p=cu(p,p.lastShotId+1,v.hit,v.distance,v);const g=(v,m)=>Math.abs(v-m)<=1e-10*Math.max(1,Math.abs(v),Math.abs(m));if(!g(p.mean,i.mean)||!g(p.m2,i.m2)||p.best!==i.best||p.bestStreak!==i.bestStreak)return e()}}return structuredClone(i)}class ZT{db=null;queue;unavailable=!1;view={stats:Fr(),state:"loading",message:"Loading saved practice…"};notify;constructor(e,t=()=>indexedDB){this.notify=e,this.notify(this.view),this.queue=new Promise(i=>{let r;try{r=t().open(qT,1)}catch{this.fail(),i();return}r.onupgradeneeded=()=>{r.result.createObjectStore(Vl)},r.onblocked=()=>{this.fail("Saved practice is blocked by another tab."),i()},r.onerror=()=>{this.fail(),i()},r.onsuccess=()=>{if(this.unavailable){r.result.close(),i();return}const s=r.result;this.db=s,s.onversionchange=()=>{this.db===s&&(this.db=null,s.close(),this.fail("Saved practice changed in another tab. Reload to reconnect."))},this.transaction().then(i,()=>{this.db&&this.fail(),i()})}})}fail(e="Saved practice unavailable. This visit still counts."){this.unavailable=!0,this.view={...this.view,state:"unavailable",message:e},this.notify(this.view)}transaction(e,t=!1){return new Promise((i,r)=>{const s=this.db;if(!s){r(new Error("Storage unavailable"));return}let a=Fr(),o;try{o=s.transaction(Vl,e||t?"readwrite":"readonly");const c=o.objectStore(Vl);if(t)c.delete(Wl);else{const l=c.get(Wl);l.onsuccess=()=>{try{a=JT(l.result),e&&(a=cu(a,a.lastShotId+1,e.hit,e.distance,e),c.put(KT(a),Wl))}catch(u){o.abort(),r(u)}}}o.oncomplete=()=>{this.db!==s?this.view={...this.view,stats:a}:(this.unavailable=!1,this.view={stats:a,state:"saved",message:`Saved on this browser only · ${a.completed} ${a.completed===1?"shot":"shots"}`}),this.notify(this.view),i()},o.onabort=o.onerror=()=>r(new Error("Storage transaction failed"))}catch(c){r(c)}})}enqueue(e,t=!1){return this.queue=this.queue.then(async()=>{if(!(!this.db||this.unavailable&&!t)){this.view={...this.view,state:e||t?"saving":"loading",message:t?"Clearing saved practice…":e?"Saving practice…":"Loading saved practice…"},this.notify(this.view);try{await this.transaction(e,t)}catch{this.db&&this.fail()}}}),this.queue}append(e){return this.enqueue(e)}clear(){return this.enqueue(void 0,!0)}refresh(){return this.enqueue()}}const QT={course:"finish a course",endless:"finish an endless run"};function eA(n){switch(n.phase){case"off":return{kind:"off",emptyText:"Shared scoring is not available here."};case"loading":return{kind:"loading",emptyText:"Loading shared board…"};case"error":return{kind:"error",emptyText:"Shared board could not be loaded."};case"loaded":return(n.entryCount??0)>0?{kind:"entries",emptyText:""}:{kind:"empty",emptyText:`No shared results yet. Turn on shared scoring and ${QT[n.format]} to post one.`}}}const $g="archery-theme";function tA(n,e){try{const t=n.getItem($g);return t==="light"||t==="dark"?t:e}catch{return e}}function nA(n,e){try{n.setItem($g,e)}catch{}}const lu="lgen-1",Yg="levels-v1",Xa="levels-v1-wind",jg=.5,qg=.1,iA=2,rA=4294967295;function sA(n){if(!Number.isInteger(n)||n<0||n>rA)throw new RangeError(`level seed must be a uint32, got ${String(n)}`)}function aA(n){if(!Number.isSafeInteger(n)||n<0)throw new RangeError(`level index must be a non-negative safe integer, got ${String(n)}`)}function oA(n,e){return sA(n),aA(e),Pc([lu,n,e])}function Kg(n,e,...t){return Pc([n,e,...t])>>>0}const Na=n=>{if(n&&typeof n=="object"){for(const e of Object.values(n))Na(e);Object.freeze(n)}return n},cA="level";function lA(n){const e=new URLSearchParams(n).get(cA);if(e===null)return null;const t=/^(\d{1,10}):(\d{1,9})(?::(wind))?$/.exec(e);if(!t)return null;const i=Number(t[1]),r=Number(t[2]);return i>4294967295?null:Object.freeze({seed:i,index:r,windOn:t[3]==="wind"})}const dA=Wr-.04;function du(n){const{step:e,scale:t,heights:i}=n.ground,r=[];for(let l=0;l<i.length;){const u=i[l];let d=l+1;for(;d<i.length&&i[d]===u;)d++;u>0&&r.push({x0:Wt.x+l*e,x1:Wt.x+d*e,y0:dA,y1:Wr+u*t}),l=d}const s=n.obstacles.map(l=>({x0:Wt.x+l.x,x1:Wt.x+l.x+l.width,y0:l.y0,y1:l.y1})),{faceX:a,centerY:o,radius:c}=Wa(n).target;return Object.freeze({target:{faceX:a,centerY:o,radius:c},ground:r,obstacles:s,wind:n.wind,windRules:n.rules===Xa})}function hA(n){const e=du(n),{faceX:t,centerY:i,radius:r}=e.target,s=[{x0:t-.1,x1:t+.1,y0:i-r,y1:i+r}];for(const a of[...e.obstacles,...e.ground])a.x0<=t&&s.push(a);return{minX:Math.min(...s.map(a=>a.x0)),maxX:Math.max(...s.map(a=>a.x1)),minY:Math.min(...s.map(a=>a.y0)),maxY:Math.max(...s.map(a=>a.y1))}}const uA="level-theme-1",Dp=Object.freeze([Object.freeze({name:"meadow",ground:"#8f9a5a",obstacle:"#9a8b78",cap:"#b7a88f",style:"wall"}),Object.freeze({name:"quarry",ground:"#a08c68",obstacle:"#7d8590",cap:"#a0a8b2",style:"pillar"}),Object.freeze({name:"orchard",ground:"#7c9a5c",obstacle:"#8a6a4a",cap:"#a98763",style:"pillar"})]);function nh(n,e){return Dp[Pc([uA,n,e])%Dp.length]}const ih=1.4,Np=-ih/2;function fA(n,e,t,i){for(const a of[...n.children])n.remove(a),a instanceof Ke&&a.geometry.dispose();const r=du(e),s=(a,o,c)=>{const l=i(n,(o.x0+o.x1)/2,(o.y0+o.y1)/2,Np,o.x1-o.x0,o.y1-o.y0,ih,c);return l.userData.kind=a,l};for(const a of r.ground)s("ground",a,t.ground);for(const a of r.obstacles)s("obstacle",a,t.obstacle),t.style==="pillar"&&i(n,(a.x0+a.x1)/2,a.y1-.08,Np,a.x1-a.x0,.16,ih+.1,t.cap)}const Up=n=>{const{width:e,height:t}=n.geometry.parameters,i=e*n.scale.x,r=t*n.scale.y;return{x0:n.position.x-i/2,x1:n.position.x+i/2,y0:n.position.y-r/2,y1:n.position.y+r/2}};function pA(n){const e=n.children.filter(t=>t instanceof Ke);return{ground:e.filter(t=>t.userData.kind==="ground").map(Up),obstacles:e.filter(t=>t.userData.kind==="obstacle").map(Up)}}function mA(n){const e=n.children.filter(i=>i instanceof Ke&&i.geometry instanceof hr),t=e[0];return t?{faceX:t.position.x,centerY:t.position.y,radius:t.geometry.parameters.radius,rings:e.length}:null}const gA=Na([[{distance:12,centerY:2.8,radius:2.3,difficulty:1},{distance:12.5,centerY:3.6,radius:2.5,difficulty:1},{distance:14,centerY:2.8,radius:2.5,difficulty:1},{distance:15.5,centerY:3.2,radius:2.5,difficulty:1},{distance:16.5,centerY:3.4,radius:2.3,difficulty:1},{distance:18,centerY:4,radius:2.3,difficulty:1},{distance:19.5,centerY:2.5,radius:2.2,difficulty:1},{distance:20,centerY:4.5,radius:2.5,difficulty:1}],[{distance:12,centerY:5.4,radius:1.5,difficulty:2,bumps:[0,0,1,1,2,3,5,7,9,7,5,3,1],obstacles:[{x:8,width:.6,y0:.54,y1:6.54}]},{distance:17,centerY:4.5,radius:1.5,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,8,7,7,7,7,7,8,9,10,10,10,10,10,10,10],obstacles:[{x:6,width:.7,y0:.64,y1:6.64}]},{distance:19,centerY:4.5,radius:2.5,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,4,3,1,0,2,4,6,8,7,6,5,5,3,2,1,0,2,4,6,8,6,4,2,1,0,0,0,0,2,5],obstacles:[{x:11.5,width:1.4,y0:1.94,y1:6.8}]},{distance:21,centerY:5.5,radius:2.2,difficulty:2,bumps:[0,1,3,4,6,6,6,6,7,5,4,3,2,1,1,0,0,0,1,2,3,4,6,8,10,10,10,10,10,9,8,7,7,7,8,9,10,8,7,5,4,5,6,7,8,7,7],obstacles:[{x:8,width:.9,y0:1.14,y1:7.14}]},{distance:23.5,centerY:4.8,radius:2.4,difficulty:2,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,6,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,9,9],obstacles:[{x:6,width:1.5,y0:.94,y1:6.94}]},{distance:12,centerY:3.9,radius:2.3,difficulty:3,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,7,8,9,10,8,6,4,2,3,5,7,9,8,7,6,6],obstacles:[{x:7.5,width:.6,y0:1.64,y1:6.3}]},{distance:20.5,centerY:5.9,radius:2,difficulty:3,bumps:[0,0,1,1,2,1,1,0,0,1,2,3,5,3,2,1,0,2,5,7,10,8,7,6,5,6,7,8,10,7,5,3,1,2,4,6,8,8,9,9,10,10,10,10,10,10],obstacles:[{x:10,width:.9,y0:2.64,y1:8.64}]},{distance:22.5,centerY:5.3,radius:2.5,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,1,3,4,6,5,5,4,4,3,2,1,0,0,0,0,0,1,2,3,4,3,2,1,0,1,2,3,5,3,2,1,0,2,5,7,10,10,10,10,10,10],obstacles:[{x:6,width:1.4,y0:2.54,y1:7.9}]}],[{distance:12,centerY:5.5,radius:1.2,difficulty:3,bumps:[0,0,0,0,0,0,0,0,0,1,2,3,4,3,2,1,0,0,0,0,0,1,3,5,7,5,3,1],obstacles:[{x:7.5,width:1.1,y0:.84,y1:6.84}]},{distance:16.5,centerY:6.2,radius:2,difficulty:3,bumps:[0,1,3,5,7,5,3,1,0,0,1,2,3,2,1,0,0,0,0,0,0,1,2,3,5,6,7,8,10,11,12,13,15,14,13,12,11,11],obstacles:[{x:5.5,width:1,y0:1.14,y1:7.14}]},{distance:12.5,centerY:6.9,radius:1.4,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,2,4,6,8,9,11,13,15,16,17,18,19,18,18,18,18,18,18,18,19,18],obstacles:[{x:4.5,width:.7,y0:1.14,y1:7.14}]},{distance:17.5,centerY:6.8,radius:2.4,difficulty:4,bumps:[0,0,0,0,0,0,0,0,0,1,3,5,7,5,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,5,5,5,6,4,3,1],obstacles:[{x:4,width:.6,y0:.84,y1:6.84}]},{distance:20,centerY:6.6,radius:2.3,difficulty:5,bumps:[0,0,0,0,0,1,3,4,6,4,3,1,0,1,3,5,7,7,8,8,9,7,6,5,4,4,4,4,5,3,2,1,0,0,0,0,0,2,4,6,9,9,10,10,11],obstacles:[{x:7,width:1.4,y0:3.14,y1:9.14}]},{distance:19.5,centerY:3.5,radius:1.8,difficulty:6,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,5,7,8,10,12,14,13,12,11,10,11,13,14,16,13,11,9,7,5,4,3,2,1,1,1,1],obstacles:[{x:6,width:.7,y0:2.94,y1:7.8}]},{distance:16,centerY:3.4,radius:2.4,difficulty:7,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,7,10,8,6,4,3,2,1],obstacles:[{x:6,width:1.1,y0:2.74,y1:7.9}]},{distance:21.5,centerY:6.1,radius:1.9,difficulty:7,bumps:[0,0,0,0,0,0,1,2,3,2,2,2,2,1,1,1,1,2,3,4,6,6,7,7,8,6,5,3,2,4,6,8,11,10,9,8,7,7,7,7,8,9,11,13,15,14,14,13],obstacles:[{x:5.5,width:.6,y0:2.64,y1:8.64}]}],[{distance:11,centerY:6.6,radius:2.4,difficulty:5,bumps:[0,1,2,3,5,4,4,4,4,3,2,1,0,1,3,5,7,5,4,3,2,1,1,0,0,2,4],obstacles:[{x:6.5,width:1,y0:2.44,y1:8.44}]},{distance:10.5,centerY:3.9,radius:2.5,difficulty:6,bumps:[0,0,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,4,6,7],obstacles:[{x:5,width:1.2,y0:.84,y1:6.84}]},{distance:19.5,centerY:3.7,radius:1.9,difficulty:6,bumps:[0,0,0,0,0,0,0,0,0,1,2,3,4,6,8,10,12,12,12,12,12,11,10,9,8,8,8,8,8,6,4,2,0,2,5,7,10,8,7,5,4,3,2,1],obstacles:[{x:8,width:1,y0:2.64,y1:8.64}]},{distance:15.5,centerY:7.4,radius:2.6,difficulty:7,bumps:[0,1,2,3,4,3,2,1,0,2,5,7,10,10,10,10,10,9,9,9,9,11,14,16,19,21,23,25,27,27,28,29,30,30,30,30],obstacles:[{x:6,width:1,y0:3.54,y1:9.54},{x:6.5,width:1.5,y0:2.74,y1:8.74}]},{distance:10.5,centerY:4.2,radius:2.6,difficulty:8,bumps:[0,2,5,7,10,10,11,11,12,11,10,9,9,11,14,16,19,17,15,13,12,13,15,16,18,16],obstacles:[{x:4,width:.7,y0:2.14,y1:7.7},{x:5.5,width:1.2,y0:1.94,y1:7.94}]},{distance:15.5,centerY:6.9,radius:2.4,difficulty:8,bumps:[0,0,0,0,0,2,4,6,8,6,4,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,6,7,9,11,14,16],obstacles:[{x:4,width:.7,y0:2.34,y1:8.34}]},{distance:11.5,centerY:4.5,radius:2.2,difficulty:9,bumps:[0,0,0,0,0,1,2,3,5,3,2,1,0,1,3,5,7,8,10,12,14,14,14,14,14,13,12,11],obstacles:[{x:4,width:1.4,y0:3.44,y1:7.9},{x:7,width:.7,y0:1.44,y1:7.44}]},{distance:19,centerY:4.4,radius:2,difficulty:9,bumps:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,3,4,5,6,5,4,3,2,4,6,8,10,10,10,10,10,8,7,6,5,5,6],obstacles:[{x:5.5,width:1,y0:2.94,y1:8.94}]}]]),Jg=1,xA=Ut.minAngle,_A=Ut.maxAngle,Zg=Ut.minPull,Qg=1,vA=76,yA=48,Fp=24,Op=11,bA=1.5,rh=Object.freeze({width:0,lo:0,hi:0}),kp=n=>n.score===10,Bp=n=>n.hit,zp=(n,e,t)=>Array.from({length:t},(i,r)=>n+(e-n)*r/(t-1));function Hp(n,e,t,i){const r=a=>Bg(n,{angle:a,power:e}),s=i.map(r);return t.map(a=>{const o=[];i.forEach((u,d)=>{o.push({a:u,ok:a(s[d])});const h=s[d],p=s[d+1];if(!o[o.length-1].ok&&p&&!a(p)&&h.impact&&p.impact&&(h.impact.y-n.target.centerY)*(p.impact.y-n.target.centerY)<0){let g=u,v=i[d+1],m=h.impact.y-n.target.centerY,f=!1;for(let b=0;b<Fp&&!f;b++){const M=(g+v)/2,T=r(M);if(!T.impact){f=!0;break}(T.impact.y-n.target.centerY)*m>0?g=M:v=M}const y=(g+v)/2;!f&&a(r(y))&&o.push({a:y,ok:!0})}});const c=(u,d)=>{for(let h=0;h<Fp;h++){const p=(u+d)/2;a(r(p))?u=p:d=p}return u};let l=rh;for(let u=0;u<o.length;u++){if(!o[u].ok)continue;let d=u;for(;d+1<o.length&&o[d+1].ok;)d++;const h=u===0?o[0].a:c(o[u].a,o[u-1].a),p=d===o.length-1?o[d].a:c(o[d].a,o[d+1].a);p-h>l.width&&(l={width:p-h,lo:h,hi:p}),u=d}return l})}function MA(n,e,t){const i={w1:{power:e[0],win:rh},w10:{power:e[0],win:rh}},r=a=>{const[o,c]=Hp(n,a,[Bp,kp],t);o.width>i.w1.win.width&&(i.w1={power:a,win:o}),c.width>i.w10.win.width&&(i.w10={power:a,win:c})};e.forEach(r);const s=e[1]-e[0];for(const a of["w1","w10"]){if(!i[a].win.width)continue;let o=i[a].power,c=s;for(let l=0;l<3;l++,c/=3){for(let u=-3;u<=3;u++){if(u===0)continue;const d=Math.min(Qg,Math.max(Zg,o+c*u/3)),h=Hp(n,d,[a==="w1"?Bp:kp],t)[0];h.width>i[a].win.width&&(i[a]={power:d,win:h})}o=i[a].power}}return i}function SA(n,e,t,i){const r=o=>{const c=su({...n,wind:o},{angle:t,power:i}),l=Nm(c,e.target.faceX);return l===null?null:qt(c,l).y},s=r(n.wind),a=r(n.wind+1);return s===null||a===null?null:Math.abs(a-s)}const e0=n=>Math.min(2,Math.round(Math.abs(n)/bA));function wA(n,e,t){const i=Math.min(1,Math.max(0,Math.log(Op/n)/Math.log(Op/Jg))),r=(e?1:0)+e0(t);return Math.min(10,Math.max(1,Math.round(1+7*i)+r))}function EA(n,e={}){const t=Wa(n),i=zp(xA,_A,e.angles??vA),r=MA(t,zp(Zg,Qg,e.powers??yA),i),s=r.w1.win.width,a=r.w10.win.width,o=uT(t),c=a>0,l=(r.w10.win.lo+r.w10.win.hi)/2;return Object.freeze({solvable:s>0,window:s,window10:a,power10:c?r.w10.power:null,obstructed:o,windSensitivity:c?SA(n,t,l,r.w10.power):null,difficulty:c?wA(a,o,n.wind):null})}function TA(n,e={}){const t=hT(n);if(t.length)return Object.freeze({admitted:!1,reasons:Object.freeze(t),measure:null});const i=EA(n,e);return i.window10>=Jg||t.push("window-below-min"),Object.freeze({admitted:t.length===0,reasons:Object.freeze(t),measure:i})}const Gp=6,AA=5,RA=3,CA=15;function IA(n){return n<Gp?0:Math.min(CA,AA+RA*(n-Gp))/10}const PA=(n,e)=>JSON.stringify(["level",Xa,n,e]),LA=(n,e)=>cw(IA(e),PA(n,e)),Vp=4,fa=4,Wp=10,DA=4,NA=10,UA=3,Xp=[10,60],hu=Na([{from:0,dLo:1,dHi:2,d2:[24,40],r:[22,26],cyHi:45,amp:0,obstacles:[0,0],over:[0,0],gap:[0,0],x:[4,4]},{from:3,dLo:2,dHi:4,d2:[24,50],r:[14,26],cyHi:60,amp:10,obstacles:[1,1],over:[20,40],gap:[0,20],x:[8,24]},{from:6,dLo:3,dHi:7,d2:[24,44],r:[12,24],cyHi:70,amp:20,obstacles:[1,1],over:[20,45],gap:[0,30],x:[8,16]},{from:10,dLo:5,dHi:9,d2:[20,40],r:[9,26],cyHi:75,amp:30,obstacles:[1,2],over:[30,60],gap:[0,30],x:[8,16]}]);function FA(n,e=hu){let t=0;for(let i=0;i<e.length;i++)n>=e[i].from&&(t=i);return t}const OA=n=>Math.floor((435*n+999)/1e3),kA=Math.round(Wr*100),t0=n=>n+2*iA+1;function BA(n,e,t,i=null){const r=(f,y,b,...M)=>f+Kg(n,b,e,...M)%(y-f+1),s=r(t.d2[0],t.d2[1],"distance"),a=OA(s),o=Math.max(t.r[0],a),c=r(o,Math.max(t.r[1],o),"radius"),l=t0(s),u=[0];for(let f=1;f<=Math.floor((l-1)/fa)+1;f++){const y=r(-Wp,Wp,"knot",f);u.push(Math.min(t.amp,Math.max(0,u[f-1]+y)))}const d=Array.from({length:l},(f,y)=>{const b=Math.floor(y/fa),M=y%fa;return Math.floor((u[b]*(fa-M)+u[b+1]*M)/fa)}),h=Math.max(d[s-1],d[s]),p=Math.max(10,c+h+UA),g=r(p,Math.max(t.cyHi,p),"centerY"),v=r(t.obstacles[0],t.obstacles[1],"obstacle-count"),m=[];for(let f=0;f<v;f++){const y=r(6,15,"obstacle-width",f),b=r(t.over[0],t.over[1],"obstacle-over",f),M=Math.floor((s*5-NA-y)/5),T=Math.min(M,Math.max(DA,t.x[0])),R=r(T,Math.max(T,Math.min(M,t.x[1])),"obstacle-x",f),I=R,x=Math.ceil((R*5+y)/5)-1;let w=0;for(let W=I;W<=x;W++)w=Math.max(w,d[W]);const F=r(t.gap[0],t.gap[1],"obstacle-gap",f),C=kA+10*(w+F),U=10*(g+b),z=Math.min(C+10*Xp[1],Math.max(C+10*Xp[0],U));m.push({x:R/2,width:y/10,y0:C/100,y1:z/100})}return m.sort((f,y)=>f.x-y.x||f.y0-y.y0||f.y1-y.y1||f.width-y.width),{generator:lu,rules:i===null?Yg:Xa,target:{distance:s/2,centerY:g/10,radius:c/10},ground:{step:jg,scale:qg,heights:d},obstacles:m,wind:i??0}}function zA(n,e,t){const i=gA[e];if(!i||i.length===0)throw new RangeError(`no fallback pool for band ${e}`);const r=i[Kg(n,"fallback")%i.length],s=t0(r.distance*2),a=Array.from({length:s},(o,c)=>r.bumps?.[c]??0);return{generator:lu,rules:t,target:{distance:r.distance,centerY:r.centerY,radius:r.radius},ground:{step:jg,scale:qg,heights:a},obstacles:(r.obstacles??[]).map(o=>({...o})),wind:0,difficulty:r.difficulty,fallback:!0}}function HA(n,e,t=hu,i=!1){const r=oA(n,e),s=i?LA(n,e):null,a=FA(e,t),o=t[a];let c=!1;for(let l=0;l<Vp;l++){const u=BA(r,l,o,s),d=TA(u);if(!d.admitted)continue;c=!0;const h=d.measure?.difficulty??0,p=h-e0(u.wind);if(p>=o.dLo&&p<=o.dHi)return{level:Na({...u,difficulty:h,fallback:!1}),attempts:l+1,fallback:null,window10:d.measure?.window10??null}}return{level:Na(zA(r,a,s===null?Yg:Xa)),attempts:Vp,fallback:c?"out-of-band":"never-admissible",window10:null}}const n0=(n,e,t=!1)=>HA(n,e,hu,t).level,E=n=>document.getElementById(n),je=E("scene");let pt="range",Oe,We=null,Bn="",Dr=0,i0=null,xt=null,Ua="";const GA=new VS;let Xl="",$l=[];function VA(n){for(const e of $l)e.removeAttribute("inert");if($l=[],!!n)for(let e=E("arena-shell");e&&e!==document.body;e=e.parentElement)for(const t of Array.from(e.parentElement?.children??[]))t!==e&&!t.hasAttribute("inert")&&t.tagName!=="SCRIPT"&&(t.setAttribute("inert",""),$l.push(t))}function WA(){for(const n of["skirmish-title","mode-combat"]){const e=document.getElementById(n);if(e&&!e.hidden&&e.offsetParent!==null){e.focus();return}}}let Tt="private",kt=!1,cr=!1;const r0=E("status"),s0=E("phase"),ni=E("retry"),$a=E("fire"),mc=E("pause"),Gs=E("angle"),Vs=E("power"),Sa=E("drag-marker"),XA=E("gesture-hint"),$A=E("gesture-icon"),YA=E("gesture-text"),Dc=matchMedia(DT),a0=matchMedia(NT);let uu=!1;try{uu=FT(localStorage)}catch{}const jA=E("rotate-hint"),Vo=E("stage-retry");function Nc(){jA.hidden=!UT({portraitPhone:a0.matches,dismissed:uu,view:pt})}function qA(){Vo.hidden=ni.hidden,Vo.disabled=ni.disabled,Vo.textContent=ni.textContent}const Ps=E("theme"),Uc=document.getElementById("guide"),$p=cc(Rn).map(()=>{const n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("r",String(Rn.radiusPx)),n.setAttribute("stroke-width",String(Rn.outlinePx)),Uc.append(n),n}),pa=E("arrow-cue");let _a=Fr(),o0=Fr(),c0=0,Wo="visit",ir={angle:29,pull:.2+.62*.5},va=0,sh={tip:{...Wt},angle:29*Math.PI/180},xn="light";try{xn=tA(localStorage,matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}let he="ready",Ct={angle:29,power:.62},Ye=null,Lt=!1,Rt=null,dn=0,Fc=0,gc=performance.now(),Fa=0,Yp="",Yi;try{Yi=new GM({canvas:je,antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{throw r0.textContent="This clearing needs WebGL. Please try a browser with graphics enabled.",s0.textContent="GRAPHICS UNAVAILABLE",je.hidden=!0,$a.disabled=!0,mc.disabled=!0,new Error("WebGL unavailable")}Yi.setClearColor("#dce8df");Yi.shadowMap.enabled=!0;Yi.shadowMap.type=ya;Yi.outputColorSpace=Un;const rt=new gm;rt.fog=new Mh("#dce8df",38,80);const Hn=new Ha(-11,11,10,-10,.1,100);Hn.position.set(0,9,30);Hn.lookAt(0,3.7,0);const ah=new Em("#fff7d7","#6a8161",2.6);rt.add(ah);const Zr=new Am("#fff4d6",3);Zr.position.set(-8,16,10);Zr.castShadow=!0;Zr.shadow.mapSize.set(1024,1024);Object.assign(Zr.shadow.camera,{left:-16,right:16,top:15,bottom:-12,near:.5,far:60});Zr.shadow.bias=-.002;rt.add(Zr);const Xo=new Map;function Ya(n){return Xo.has(n)||Xo.set(n,new ko({color:n,roughness:1,metalness:0,flatShading:!0})),Xo.get(n)}function et(n,e,t,i,r,s,a,o){const c=new Ke(new jr(r,s,a),Ya(o));return c.position.set(e,t,i),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function ja(n,e,t,i,r){const s=et(n,0,0,0,i,e.distanceTo(t),i,r);return s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new k(0,1,0),t.clone().sub(e).normalize()),s}const Nt=(n,e,t=0)=>new k(n,e,t),Ws={x:(jt.minX+jt.maxX)/2,y:(jt.minY+jt.maxY)/2},xc=et(rt,(jt.minX+jt.maxX)/2,(jt.minY+jt.maxY)/2,-.45,jt.maxX-jt.minX,jt.maxY-jt.minY,.9,"#cc684a");et(rt,Ws.x,Ws.y,.015,.61,.12,.025,"#f4ddb3");et(rt,Ws.x,Ws.y,.035,.14,.32,.025,"#4b3c31");et(rt,8.31,.3,-.45,1.35,.6,1.5,"#66734a");et(rt,0,-.25,-2,27,.9,14,"#7d9461");et(rt,0,-.9,-2,27,.4,14,"#8d7653");et(rt,0,-1.65,-2,26.2,1.1,13.4,"#b1a17b");for(let n=0;n<7;n++){const e=-16+n*5.5,t=new Ke(new za(6+n%3,9+n%4,4),Ya(n%2?"#afc5ae":"#c2d1bb"));t.position.set(e,3,-18-n%2*3),t.rotation.y=Math.PI/4,rt.add(t)}function Oc(n,e,t){et(rt,n,1*t,e,.3*t,2*t,.3*t,"#7c7853"),et(rt,n,3*t,e,1.8*t,2.2*t,1.7*t,"#718d65"),et(rt,n-.3*t,4.1*t,e,1.3*t,1.2*t,1.25*t,"#89a176")}Oc(-11.3,-3.8,1.2);Oc(-3.2,-6.5,.8);Oc(5.8,-7,1.05);Oc(11.8,-4.5,1.4);for(let n=0;n<34;n++){const e=Math.sin(n*73.3)*12,t=-2-Math.cos(n*29.1)*3;et(rt,e,.25,t,.16,.2+n%3*.08,.17,n%6===0?"#e5d0a1":"#96ab6f")}for(const[n,e,t]of[[-4,-1,.5],[4,-2,.7],[10,1,.5]])et(rt,n,.3,e,t,t*.65,t,"#a7ae94");const Xn=new Kt;rt.add(Xn);et(Xn,-8.02,.55,0,.36,.8,.4,"#38473f");et(Xn,-7.32,.55,0,.36,.8,.4,"#38473f");et(Xn,-8.08,.2,.12,.64,.24,.55,"#4c4938");et(Xn,-7.26,.2,.12,.64,.24,.55,"#4c4938");et(Xn,-7.72,1.61,0,.85,1.5,.6,"#d19b58");et(Xn,-7.72,1.15,.32,.95,.18,.12,"#6b6845");et(Xn,-7.72,2.66,0,.65,.65,.6,"#eac795");et(Xn,-7.85,3,-.04,.95,.27,.76,"#4d6e57");et(Xn,-7.98,2.72,-.02,.23,.45,.65,"#4d6e57");et(Xn,-7.4,2.73,.32,.08,.08,.07,"#34483c");ja(Xn,Nt(-8.14,1.6,-.38),Nt(-8.36,2.8,-.38),.28,"#786244");const Xs=new Kt;Xs.position.set(Wt.x,Wt.y,.12);rt.add(Xs);const Yl=[[0,-.92],[.27,-.6],[.37,0],[.27,.6],[0,.92]];for(let n=1;n<Yl.length;n++)ja(Xs,Nt(...Yl[n-1]),Nt(...Yl[n]),.075,"#78523c");const l0=new Xt().setFromPoints([Nt(0,-.92),Nt(-.3,0),Nt(0,.92)]),KA=new Ss(l0,new Fs({color:"#f1e7bf"}));Xs.add(KA);const JA=ja(rt,Nt(-7.7,2.3,.42),Nt(Wt.x,Wt.y,.42),.23,"#eac795"),ZA=ja(rt,Nt(-7.95,2.3,.45),Nt(-7.8,2.7,.3),.22,"#d19b58"),QA=ja(rt,Nt(-7.8,2.7,.3),Nt(-7.3,2.7,.12),.18,"#eac795"),eR=et(rt,-7.3,2.7,.12,.19,.19,.19,"#eac795");function jl(n,e,t){const i=n.geometry.parameters.height;n.scale.y=e.distanceTo(t)/i,n.position.copy(e).add(t).multiplyScalar(.5),n.quaternion.setFromUnitVectors(Nt(0,1,0),t.clone().sub(e).normalize())}function tR(){const n=new Kt;et(n,-.6,0,0,1.2,.045,.045,"#f3dfaa");const e=new Ke(new za(.085,.24,4),Ya("#58685d"));return e.rotation.z=-Math.PI/2,e.position.x=-.12,n.add(e),et(n,-1.08,0,0,.22,.17,.04,"#e9e6c8"),rt.add(n),n}const Li=tR(),oh=new Xt,ta=new Ss(oh,new Fs({color:"#f6edcf",transparent:!0,opacity:.55}));rt.add(ta);const pr=Array.from({length:9},(n,e)=>{const t=et(rt,0,0,0,.08+e%2*.05,.08,.08,"#ffedb7");return t.visible=!1,t});let ue=null,an=null,Si=!1,ot=!1,qa=!1,$s;try{$s=localStorage}catch{}const Or=new GT($s),_c=nS(Array.from(document.querySelectorAll('meta[name="archery-api"]'),n=>n.content),location.origin),_n=_c?new Ec(_c,fetch,$s):null,$o=_n?new Ts(_n):null,Xe=_n?new VT(_n.endpoint,fetch,$s,_n):null,Rr=_n?new fg(_n,"private"):null,As=_n?new fg(_n,"public"):null;function d0(n,e){const t=E(n);t.hidden=!e.visible,t.caption.textContent=e.title,t.tBodies[0].replaceChildren(...e.rows.map(i=>{const r=document.createElement("tr");return r.dataset.actorId=i.actorId,r.dataset.own=String(i.own),r.dataset.leader=String(i.leader),[i.own?`${i.label} · you`:i.label,String(i.shots),i.accuracy,String(i.damage),String(i.kills)].forEach((s,a)=>{const o=document.createElement("td");o.textContent=s,a===0&&(o.title=s),r.append(o)}),r}))}const fu=new Kt;for(const n of[xc,...rt.children.filter(e=>e instanceof Ke&&e!==xc&&(e.position.x===Ws.x&&e.position.y===Ws.y||e.position.x===8.31&&e.position.y===.3))])fu.add(n);rt.add(fu);const mi=new Kt;rt.add(mi);mi.visible=!1;const na=new Kt;rt.add(na);na.visible=!1;et(na,13,-.25,-2,25,.9,14,"#7d9461");et(na,13,-.9,-2,25,.4,14,"#8d7653");et(na,13,-1.65,-2,25,1.1,13.4,"#b1a17b");let fn=null,ii=null,Xr=null,Qt=null;const Oa=new Kt;rt.add(Oa);Oa.visible=!1;const ch=new yg(()=>je.parentElement,"level-wind"),kc=["practice","course","endless","oneshot"];let ze=null,Ys=null,Gi=!1,ql="",lr=null;const h0=[];let Yo=null;const gi=new Kt;rt.add(gi);const vc=()=>ue?.format??(ze?"oneshot":"practice"),u0=()=>!!ue&&(ue.status!=="active"||he==="hit"||he==="miss")||!!ze&&(ze.run.status!=="active"||he==="hit"||he==="miss");function f0(){gi.userData={};for(const n of[...gi.children])gi.remove(n),n instanceof Ke&&(n.geometry.dispose(),n.material.dispose())}function p0(n,e){f0();const t=Math.max(e.centerY-e.radius,Math.min(e.centerY+e.radius,n.y)),i=e.faceX-n.x,r=t-n.y,s=Math.hypot(i,r),a=Math.atan2(r,i),o=.22,c=.14,l=h=>new zi({color:h});for(let h=0;h<s-1e-6&&s>.05;h+=o+c){const p=Math.min(o,s-h),g=h+p/2,v=new Ke(new qr(p,.07),l("#fff4d6"));v.position.set(n.x+Math.cos(a)*g,n.y+Math.sin(a)*g,.3),v.rotation.z=a,gi.add(v)}const u=new Ke(new hr(.24,24),l("#fff4d6"));u.position.set(n.x,n.y,.29),gi.add(u);const d=new Ke(new hr(.16,24),l("#d9402b"));d.position.set(n.x,n.y,.31),gi.add(d),gi.userData={x:n.x,y:n.y,toY:t}}const Qr=()=>!!fn&&!ue,m0=n=>Qr()?su(fn,n):Sc(n),Po=["#f5f1df","#f5f1df","#222d2a","#222d2a","#59a6c5","#59a6c5","#d96350","#d96350","#efc655","#efc655"];function pu(){const n=ue.shots.length;return eu(ue.format,Math.max(0,an||ue.status!=="active"?n-1:n))}function mu(){if(pt==="range")if(ue){const n=pu();Gl(Hn,Fi/Oi,{minX:n.faceX-.1,maxX:n.faceX+.1,minY:n.centerY-n.radius,maxY:n.centerY+n.radius})}else Qr()?Gl(Hn,Fi/Oi,hA(fn)):Gl(Hn,Fi/Oi)}function jp(n,e){for(let t=0;t<10;t++){const i=n.radius*(10-t)/10,r=new Ke(new hr(i,48),Ya(Po[t]));r.rotation.y=-Math.PI/2,r.position.set(n.faceX-t*.001,n.centerY,0),mi.add(r),et(mi,n.faceX-.035,n.centerY+i-n.radius/20,0,.09,n.radius/10,.07,Po[t]),et(mi,n.faceX-.035,n.centerY-i+n.radius/20,0,.09,n.radius/10,.07,Po[t]);const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("r",String((10-t)/10)),s.setAttribute("fill",Po[t]),s.setAttribute("stroke",t<4?"#a8ada0":"#384d46"),s.setAttribute("stroke-width",".01"),E("face-rings").append(s)}et(mi,n.faceX,e.y,-.12,.18,e.height,.18,"#786244")}function Ka(){const n=Qr();fu.visible=!ue&&!n,mi.visible=!!ue||n,na.visible=!!ue||n,Oa.visible=n,E("face-inset").hidden=!ue&&!n;for(const e of[...mi.children])mi.remove(e),e instanceof Ke&&e.geometry.dispose();if(E("face-rings").replaceChildren(),E("face-impact").setAttribute("hidden",""),f0(),ue)jp(pu(),{y:.5,height:1});else if(n){const e=ii.target,t=e.centerY-e.radius;jp(e,{y:(.24+Math.max(.24,t))/2,height:Math.max(.2,t-.24)})}n&&fn&&Xr?(fA(Oa,fn,Xr,et),Bc(),ch.update(fn.wind,fn.rules===Xa?1:0)):ch.hide(),ze&&Gi&&lr&&ii&&p0(lr,ii.target),nR(),mu()}function nR(){if(Qt||delete je.dataset.levelOutcome,!Qr()||!fn){delete je.dataset.levelStage;return}const n=document.getElementById("level-wind");je.dataset.levelStage=JSON.stringify({theme:Xr?.name,face:mA(mi),...pA(Oa),wind:{value:n?.dataset.wind===void 0?null:Number(n.dataset.wind),text:n&&!n.hidden?n.textContent:null}})}function iR(){const n=Lt||ot||!!Xe?.pending||he==="flying"||he==="aiming";for(const e of kc){const t=E(`mode-${e}`);t.disabled=YT({busy:ot,pending:!!Xe?.pending,state:he}),t.setAttribute("aria-pressed",String(e===vc()))}ue?.status!=="active"&&(E("mode-note").textContent=""),E("challenge-panel").hidden=!ue&&!ze,E("practice-stats").hidden=!!ue||!!ze;for(const e of["challenge-restart","challenge-leave","challenge-bank","clear-identity"])E(e).disabled=n||Lt;if(E("online-mode").disabled=n||!!ue,ue){const e=pu(),t=ue.status!=="active";E("challenge-name").textContent=`${ue.format==="course"?"12-arrow course":"Endless"} · ${Si?"shared scoring":"local"}`,E("challenge-total").textContent=`${ue.total}${ue.format==="course"?" / 120":""} points`;const i=BT(ue.format,ue.shots.length,!!an);E("challenge-progress").textContent=`${t?"Completed":`Arrow ${i.arrow}${ue.format==="course"?" of 12":""}`} · ${t?e.distance:i.distance} units · ${ue.misses} ${ue.format==="endless"?"/ 3 ":""}misses · ${ue.innerBullseyes} inner bullseyes`,E("challenge-rules").textContent=ue.format==="course"?"3 arrows each at 12, 18, 24 and 30 units. Ten rings, 10 points at center.":"Three misses ends the run. Every 3 arrows: +2 units (max 30), radius −0.1 (min 0.8). End & bank between shots.",E("challenge-bank").hidden=ue.format!=="endless"||t||!ue.shots.length,E("result-actions").hidden=!Vg(ue);for(const r of["result-again","result-practice"])E(r).disabled=n;ni.hidden=t||!["hit","miss"].includes(he),ni.textContent=`${eh(!0)} ↗`,$a.disabled||=t||he==="hit"||he==="miss"||ot||!!Xe?.pending,Gs.disabled||=t||he==="hit"||he==="miss"||ot||!!Xe?.pending,Vs.disabled||=t||he==="hit"||he==="miss"||ot||!!Xe?.pending,E("gesture-hint").hidden||=t||ot||!!Xe?.pending,E("publish-form").hidden=!(t&&Si&&!qa),E("initials").disabled=ot||Xe?.pending?.kind==="publish",E("publish").disabled=ot||!!Xe?.pending&&Xe.pending.kind==="action"}else ni.innerHTML=`${eh(!1)} <span>↗</span>`,E("publish-form").hidden=!0,E("result-actions").hidden=!0;je.dataset.format=vc(),rR()}function rR(){const n=!!ze;if(E("oneshot-strip").hidden=!n,E("result-new").hidden=!n,E("result-again").textContent=n?"Replay these levels":"Play again",!n){ql="",delete je.dataset.oneShot,E("oneshot-strip").replaceChildren();return}const e=ze,t=e.run.status==="completed",i=Lt||he==="flying"||he==="aiming"||ot;E("challenge-name").textContent="One shot · local, unscored",E("challenge-total").textContent=t?zg(e):`${e.run.total} points`,E("challenge-progress").textContent=`${t?`Run complete · ${$i} levels`:CT(e,Gi)} · seed ${e.seed}`,E("challenge-rules").textContent=`${$i} levels, one arrow each. Landing close to the face still scores; wind starts at level 7. Nothing is saved or sent: this run stays on this device.`,E("challenge-bank").hidden=!0,E("result-actions").hidden=!t;for(const o of["result-again","result-new","result-practice"])E(o).disabled=i;ni.hidden=t||!["hit","miss"].includes(he),ni.textContent=`${eh(!0,"level")} ↗`;const r=t||he==="hit"||he==="miss";$a.disabled||=r,Gs.disabled||=r,Vs.disabled||=r,E("gesture-hint").hidden||=t,E("face-inset").hidden=Dc.matches&&Gi&&!!lr;const s=IT(e),a=JSON.stringify(s);a!==ql&&(ql=a,E("oneshot-strip").replaceChildren(...s.map(o=>{const c=document.createElement("li");return c.dataset.state=o.state,c.dataset.index=String(o.index),o.tier&&(c.dataset.tier=o.tier,c.dataset.points=String(o.points)),c.textContent=o.label,c.setAttribute("aria-label",o.tier?`Level ${o.index+1}: ${o.points} points`:o.state==="current"?`Level ${o.index+1}: next`:`Level ${o.index+1}: not played`),c}))),je.dataset.oneShot=JSON.stringify({seed:e.seed,level:ou(e),resolved:Gi,status:e.run.status,total:e.run.total,shots:e.reports.map(o=>({points:o.points,tier:o.tier,value:o.value,caption:o.caption})),landing:gi.children.length?gi.userData:null})}let jo=0;async function Rs(n=""){const e=++jo,t=E("board-format").value;E("board-rules").textContent=`Rules ${Da} · ties share a rank · score, ${t==="endless"?"hits, ":""}inner bullseyes, tens`;const i=Or.results(t);if(E("local-empty").hidden=i.length>0,E("local-board").replaceChildren(...i.slice(0,10).map(r=>{const s=document.createElement("li");return s.textContent=`${r.total} points · ${r.hits} hits · ${r.shots.length} arrows`,s})),E("challenge-storage").textContent=Or.message,!Xe){Lo({phase:"off",format:t});return}E("shared-board").replaceChildren(),Lo({phase:"loading",format:t}),E("shared-status").textContent=n||"Loading shared board…";try{const r=await Xe.boards(t);if(e!==jo)return;sR(r),Lo({phase:"loaded",entryCount:r.length,format:t}),E("shared-status").textContent=n||"Shared boards available. Choose shared scoring before starting a challenge."}catch(r){if(e!==jo)return;E("shared-status").textContent=`${n?n+" ":""}Shared boards unavailable. ${r instanceof Error?r.message:"Try later."} Local challenges are playable.`,E("shared-board").replaceChildren(),Lo({phase:"error",format:t})}}function Lo(n){const e=eA(n),t=E("shared-empty");t.textContent=e.emptyText,t.hidden=!e.emptyText}function sR(n){E("shared-board").replaceChildren(...n.map(e=>{const t=document.createElement("li");return t.value=e.rank,t.dataset.own=String(e.own),t.textContent=`${e.initials}${e.own?" · you":""} — ${e.total} points · ${e.hits} hits`,t}))}function wa(n){E("network-recovery").hidden=!1,E("network-message").textContent=`${n instanceof Error?n.message:"Connection interrupted."} No result has been promoted to the shared board.`,E("network-retry").hidden=!Xe?.pending,bn("Shared action needs attention. Retry it or start a new local challenge.","CHALLENGE WAITING"),ft()}function lh(){if(ue?.status!=="completed")return!1;const n=Si||Or.save(ue);return Rs(),n}function aR(n){kT({landscapePhone:Dc.matches,view:pt,outcome:n})&&scrollTo({top:E("arena-shell").getBoundingClientRect().top+scrollY,behavior:"instant"})}async function Di(n,e=!1,t){const i=pt==="combat";if(i&&(_u("range"),vc()===n))return"switched";if(ot||he==="flying"||Ye)return i?"switched":"unchanged";const r=ze?LT(ze,n):$T(ue,n,e);if(r.action==="noop"||Xe?.pending&&!e)return i?"switched":"unchanged";if(r.action==="confirm"&&!Xg(()=>confirm(ze?"Abandon this one-shot run? Nothing from it is saved.":"Abandon this challenge? Its unfinished score will not be banked.")))return E("mode-note").textContent=r.declineMessage,i?"switched":"unchanged";E("mode-note").textContent="",Lt&&es(!1),e&&(Xe.pending=null),ot=!0,ft();let s="switched";try{const a=n==="oneshot",o=!a&&n!=="practice"&&!e&&!!Xe&&E("online-mode").checked;let c=null;!a&&n!=="practice"&&(c=o?(await Xe.start(n)).state:Fg(n)),ue=c,Si=o,an=null,Qt=null,qa=!1,ze=a?TT(t??RT(l=>crypto.getRandomValues(l))):null,Ys=null,Gi=!1,lr=null,h0.length=0,ze?x0():Yo?(fn=Yo.level,ii=Wa(fn),Xr=Yo.theme):(fn=null,ii=null,Xr=null),E("network-recovery").hidden=!0,E("publish-form").hidden=!0,E("board-format").value=n==="practice"||a?"course":n,he="ready",Rt=null,dn=0,ta.visible=!1,E("shot-result").hidden=!0;for(const l of pr)l.visible=!1;Ka(),bn("Pull back. Breathe. Release.",a?"LEVEL READY":ue?"CHALLENGE READY":"YOUR NEXT SHOT"),a||Rs()}catch(a){s="failed",wa(a)}finally{ot=!1,ft()}return s}async function oR(n){ot=!0,ft();try{ue=Si?(await Xe.shot(n)).state:iu(ue,n),an=ue.shots.at(-1).outcome,xu(n)}catch(e){he="ready",wa(e)}finally{ot=!1,ft()}}function cR(){if(!ue||!an||!Rt)return;he=an.hit?"hit":"miss",dn=an.at,Fc=Fa,E("shot-result-caption").textContent="Actual impact · ten-ring scoring",E("shot-result-value").textContent=an.hit?`${an.score} points${an.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",E("shot-result").hidden=!1;const n=an.impact;if(n){const t=ue.shots.at(-1).target,i=E("face-impact");i.setAttribute("cx","0"),i.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-t.centerY)/t.radius)))),i.removeAttribute("hidden")}const e=lh();bn(ue.status==="completed"?`${ue.total} points. ${Si?"Publish with your initials below.":e?"Saved to this browser’s local board.":Or.message}`:an.hit?"On the face. Take your next arrow when ready.":"Outside the face. Take your next arrow when ready.",ue.status==="completed"?"CHALLENGE COMPLETE":an.hit?"SCORED":"MISS"),ft(),dh()}function lR(){if(!Qt||!Rt)return;if(he=Qt.hit?"hit":"miss",dn=Qt.at,Fc=Fa,ze&&Ys){dR();return}E("shot-result-caption").textContent="Level shot · ten-ring face · local, not scored",E("shot-result-value").textContent=Qt.hit?`${Qt.score} points${Qt.innerBullseye?" · inner bullseye":""}`:"Miss · 0 points",E("shot-result").hidden=!1;const n=Qt.impact,e=ii.target;if(n){const t=E("face-impact");t.setAttribute("cx","0"),t.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(n.y-e.centerY)/e.radius)))),t.removeAttribute("hidden")}bn(Qt.hit?"On the face.":"Stopped short or off the face. Try again.",Qt.hit?"TARGET HIT":"ANOTHER TRY"),ft()}function dR(){const n=Ys,e=ii.target;Ys=null,ze=AT(ze,n,fn.wind),Gi=!0;const t=ze.reports.at(-1),i=ze.run.status==="completed",r=ze.run.shots.length;E("shot-result-value").textContent=t.value,E("shot-result-caption").textContent=`Level ${r} of ${$i} · ${t.caption}`,E("shot-result").hidden=!1;const s=Qt.impact;if(s){const a=E("face-impact");a.setAttribute("cx","0"),a.setAttribute("cy",String(Math.max(-1.2,Math.min(1.2,-(s.y-e.centerY)/e.radius)))),a.removeAttribute("hidden")}lr=n.landing.onFace?null:n.landing,lr&&p0(lr,e),bn(i?`Run complete: ${zg(ze)}.`:`${t.value}. Tap Next level when you are ready.`,i?"RUN COMPLETE":"LEVEL SCORED"),ft(),i||setTimeout(()=>{ze&&g0(ou(ze))},0)}const g0=n=>h0[n]??=n0(ze.seed,n,!0);function x0(){const n=ou(ze);fn=g0(n),ii=Wa(fn),Xr=nh(ze.seed,n)}function hR(){if(!(!ze||!Gi||ze.run.status!=="active")){Gi=!1,Ys=null,lr=null,Qt=null,x0(),he="ready",Rt=null,dn=0,ta.visible=!1,E("shot-result").hidden=!0;for(const n of pr)n.visible=!1;Ka(),bn("Pull back. Breathe. Release.","LEVEL READY"),ft()}}function dh(){if(he==="flying")return;const n=HT(ue?.status==="completed",window.matchMedia("(pointer: coarse)").matches,Wg(ue,Si,qa)),e=n==="initials"?E("initials"):n==="result"?E("status"):null;e&&!e.disabled&&e.offsetParent!==null&&e.focus({preventScroll:!0})}function Do(){return!Wg(ue,Si,qa)||Xg(()=>confirm(zT))}function uR(){for(const n of kc)E(`mode-${n}`).addEventListener("click",()=>{Di(n).then(aR)});if(E("challenge-restart").addEventListener("click",()=>{Do()&&Di(vc())}),E("challenge-leave").addEventListener("click",()=>{Do()&&Di("practice")}),E("result-again").addEventListener("click",()=>{Do()&&(ze?Di("oneshot",!1,ze.seed):Di(ue.format))}),E("result-new").addEventListener("click",()=>{ze&&Di("oneshot")}),E("result-practice").addEventListener("click",()=>{Do()&&Di("practice")}),E("challenge-bank").addEventListener("click",async()=>{if(!(!ue||ot||Lt||Ye||he==="flying"||Xe?.pending)){ot=!0,ft();try{ue=Si?(await Xe.bank()).state:ru(ue);const n=lh();bn(`${ue.total} points banked.${n?"":" "+Or.message}`,"CHALLENGE COMPLETE")}catch(n){wa(n)}finally{ot=!1,ft(),dh()}}}),E("board-format").addEventListener("change",()=>{Rs()}),E("network-local").addEventListener("click",()=>{Di(ue?.format??"course",!0)}),E("network-retry").addEventListener("click",async()=>{if(!(ot||!Xe?.pending)){if(Xe.pending.kind==="publish"){E("publish-form").requestSubmit();return}ot=!0,ft();try{const n=Xe.pending.body.kind;if(ue=(await Xe.retry()).state,E("network-recovery").hidden=!0,n==="shot"){const e=ue.shots.at(-1);an=e.outcome,xu(e.aim)}else lh(),bn(`${ue.total} points banked.`,"CHALLENGE COMPLETE")}catch(n){wa(n)}finally{ot=!1,ft(),dh()}}}),E("publish-form").addEventListener("submit",async n=>{if(n.preventDefault(),ot||!Xe)return;const e=E("initials").value.trim().toLowerCase();ot=!0,++jo,ft();try{await Xe.publish(e),Or.saveInitials(e),qa=!0,E("network-recovery").hidden=!0,E("publish-form").hidden=!0;const t="Published. The shared board keeps your strongest result for this format and rules version.";E("shared-status").textContent=t,await Rs(t)}catch(t){wa(t)}finally{ot=!1,ft()}}),E("clear-identity").addEventListener("click",()=>{ot||he==="flying"||Ye||Xe?.pending||confirm("Forget this browser’s shared guest identity? Any unfinished challenge is abandoned. Published scores remain, and this browser will no longer own them. Local results and saved practice stay.")&&(Xe?.forget(),We?.forgetRoom(),xt?.forgetArena(),Oe.clearSnapshot(),ue=null,an=null,Si=!1,E("online-mode").checked=!1,Di("practice",!0))}),E("initials").value=Or.initials(),E("online-choice").hidden=!Xe,E("clear-identity").hidden=!Xe,Rs(),Xe){const n=new WebSocket(_n.endpoint.boardSocket);n.addEventListener("message",e=>{try{const t=JSON.parse(String(e.data));typeof t=="object"&&t!==null&&"type"in t&&t.type==="board-changed"&&Rs()}catch{}}),window.addEventListener("pagehide",()=>n.close(),{once:!0})}}const fR={"#cc684a":"#cf785c","#7d9461":"#445c48","#8d7653":"#645b47","#b1a17b":"#7d765f","#afc5ae":"#3b5150","#c2d1bb":"#465e5b","#718d65":"#405d4d","#89a176":"#58735a","#96ab6f":"#64794d","#a7ae94":"#737f6e","#66734a":"#556343","#8f9a5a":"#596238","#a08c68":"#6c5f47","#7c9a5c":"#4a6238","#9a8b78":"#665c4f","#7d8590":"#515962","#8a6a4a":"#5b4630","#b7a88f":"#7a7060","#a0a8b2":"#6c737c","#a98763":"#725a41"};function Bc(){Oe?.setTheme(xn),document.documentElement.dataset.theme=xn,Ps.setAttribute("aria-pressed",String(xn==="dark")),Ps.setAttribute("aria-label",xn==="dark"?"Switch to light theme":"Switch to dark theme"),Ps.textContent=xn==="dark"?"☀ Light":"☾ Dark";const n=xn==="dark"?"#202f36":"#dce8df";Yi.setClearColor(n),rt.fog.color.set(n),ah.color.set(xn==="dark"?"#c6d7e8":"#fff7d7"),ah.groundColor.set(xn==="dark"?"#435b4b":"#6a8161"),Zr.color.set(xn==="dark"?"#d7def1":"#fff4d6");for(const[e,t]of Xo)t.color.set(xn==="dark"?fR[e]??e:e);document.querySelector('meta[name="theme-color"]')?.setAttribute("content",xn==="dark"?"#18231f":"#eef2de")}function zc(){const n=Wo==="visit"?_a:o0;E("shots-value").textContent=String(n.completed),E("hit-count-value").textContent=String(n.hits),E("hits-value").textContent=n.completed?`${Math.round(n.hits/n.completed*100)}%`:"0%",E("best-value").textContent=n.best===null?"—":`${n.best.toFixed(2)} units`,E("mean-value").textContent=n.mean===null?"—":`${n.mean.toFixed(2)} units`,E("streak-value").textContent=String(n.currentStreak),E("best-streak-value").textContent=String(n.bestStreak),E("spread-value").textContent=n.completed?`${Math.sqrt(n.m2/n.completed).toFixed(2)} units`:"—",E("recent-shots").replaceChildren(...n.recent.map(e=>{const t=document.createElement("li");return t.textContent=`${e.hit?"Hit":"Miss"} · ${e.distance.toFixed(2)} units · ${e.angle.toFixed(1)}° · ${(e.power*100).toFixed(1)}% power`,t})),E("recent-empty").hidden=n.completed>0,E("visit-stats").setAttribute("aria-pressed",String(Wo==="visit")),E("saved-stats").setAttribute("aria-pressed",String(Wo==="saved"))}const Hc=new ZT(n=>{o0=n.stats,E("save-status").textContent=n.message,E("save-status").dataset.state=n.state,zc()});for(const[n,e]of[["visit-stats","visit"],["saved-stats","saved"]])E(n).addEventListener("click",()=>{Ye||(Wo=e,zc(),e==="saved"&&Hc.refresh())});document.querySelector(".recent-details summary")?.addEventListener("click",n=>{Ye&&n.preventDefault()});E("clear-practice").addEventListener("click",()=>{Ye||(E("clear-confirmation").hidden=!1)});E("cancel-clear").addEventListener("click",()=>{Ye||(E("clear-confirmation").hidden=!0)});E("confirm-clear").addEventListener("click",()=>{Ye||(E("clear-confirmation").hidden=!0,Hc.clear())});window.addEventListener("focus",()=>{pt==="range"&&Hc.refresh()});function bn(n,e){r0.textContent=n,s0.textContent=e}function ft(){if(pt!=="range")return;E("angle-value").textContent=`${Math.round(Ct.angle)}°`,E("power-value").textContent=`${Math.round(Ct.power*100)}%`,E("angle-meter").style.width=`${Ct.angle/80*100}%`,E("power-meter").style.width=`${Ct.power*100}%`,Gs.value=String(Math.round(Ct.angle)),Vs.value=String(Math.round(Ct.power*100));const n=Lt||he==="aiming"||he==="flying"||ot||!!Xe?.pending;Ps.disabled=he==="aiming",E("mode-combat").disabled=he==="aiming"||ot||!!Xe?.pending;for(const t of["visit-stats","saved-stats","clear-practice","confirm-clear","cancel-clear"])E(t).disabled=he==="aiming";$a.disabled=n,Gs.disabled=n,Vs.disabled=n,ni.hidden=he!=="hit"&&he!=="miss";const e=rT(he,!!ue||!!ze,Dc.matches?"on-stage":"below",ze?"level":"arrow");XA.hidden=!e||Lt,e&&($A.textContent=e.icon,YA.textContent=e.text),je.dataset.state=he,je.dataset.paused=String(Lt),iR(),qA()}function ka(){if(!(he==="flying"||Lt||ot||Xe?.pending||ue&&ue.status!=="active")){if(ze){hR();return}(ue||Qr())&&(an=null,Qt=null,Ka()),he="ready",Rt=null,dn=0,ta.visible=!1,E("shot-result").hidden=!0;for(const n of pr)n.visible=!1;bn("Pull back. Breathe. Release.","YOUR NEXT SHOT"),ft()}}function gu(){if(pt==="range"&&!(Lt||he==="flying"||ot||Xe?.pending)){if(ue){if(ue.status!=="active"||he!=="ready"&&he!=="aiming")return;oR({...Ct});return}ze&&(ze.run.status!=="active"||Gi||he!=="ready"&&he!=="aiming")||(Qr()&&(Qt=Bg(ii,Ct),je.dataset.levelOutcome=JSON.stringify(Qt),ze&&(Ys=vT(ii,Ct))),xu(Ct))}}function xu(n){Ct={...n};const e=oc(ir,va),t=ir.angle*Math.PI/180;sh={tip:{x:e.nock.x+Math.cos(t)*1.2,y:e.nock.y+Math.sin(t)*1.2},angle:t},Rt=m0(Ct),je.dataset.shot=JSON.stringify(Rt),c0++,dn=0,he="flying",ta.visible=!0,E("shot-result").hidden=!0;for(const i of pr)i.visible=!1;bn("Let it fly…","ARROW IN FLIGHT"),ft()}function Kl(n,e){if(he!=="flying"||!Rt)return;he=n?"hit":"miss",dn=e,Fc=Fa,E("shot-result-caption").textContent="Closest approach · this shot";const t=jT(Rt,VM,e),i=_a;_a=cu(_a,c0,n,t,Ct),zc(),_a!==i&&Hc.append({hit:n,distance:t,...Ct}),E("shot-result-value").textContent=`${t.toFixed(2)} units from center`,E("shot-result").hidden=!1;const r=qt(Rt,e),s=(jt.minX-Rt.origin.x)/Rt.velocity.x,a=qt(Rt,s);Yp=a.y>jt.maxY?"A little high. Try less angle or draw.":a.y<jt.minY?"A little low. Try more draw or angle.":"Just short. Give it a little more draw.",bn(n?"A lovely shot.":Yp,n?"TARGET HIT":"ANOTHER TRY");for(const o of pr)o.position.set(r.x,r.y,.2);ft()}function ai(n=!0){if(!Ye)return;const e=Ye;Ye=null,je.hasPointerCapture(e.id)&&je.releasePointerCapture(e.id),Ct=e.previous,Sa.hidden=!0,he="ready",n&&bn("Draw cancelled. Take your time.","YOUR NEXT SHOT"),ft()}function es(n){ai(!1),Lt=n,gc=performance.now(),E("paused").hidden=!Lt,mc.textContent=Lt?"▶":"Ⅱ",mc.setAttribute("aria-label",Lt?"Resume game":"Pause game"),ft()}je.addEventListener("pointerdown",n=>{if(pt!=="range"||Lt||he==="flying"||ot||Xe?.pending||u0()||Ye||!n.isPrimary||n.button!==0)return;n.preventDefault(),(he==="hit"||he==="miss")&&ka();const e=je.getBoundingClientRect();Ye={id:n.pointerId,x:n.clientX,y:n.clientY,width:e.width,height:e.height,vw:innerWidth,vh:innerHeight,previous:{...Ct},valid:!1},je.setPointerCapture(n.pointerId),je.focus({preventScroll:!0}),Sa.style.left=`${n.clientX-e.left}px`,Sa.style.top=`${n.clientY-e.top}px`,Sa.hidden=!1,he="aiming",bn("Pull left and down. Release to shoot.","FIND YOUR ARC"),ft()});function _0(n){if(pt!=="range"||!Ye||n.pointerId!==Ye.id)return;const e=Th(n.clientX-Ye.x,n.clientY-Ye.y,Ye.width,Ye.height);Ye.valid=e!==null,e&&(Ct=e),bn(e?"Release when it feels right.":"Pull left and down to draw the bow.","FIND YOUR ARC"),ft()}je.addEventListener("pointermove",_0);je.addEventListener("pointerup",n=>{if(pt!=="range"||!Ye||n.pointerId!==Ye.id)return;if(_0(n),!Ye?.valid){ai();return}const e=Ye.id;Ye=null,Sa.hidden=!0,je.hasPointerCapture(e)&&je.releasePointerCapture(e),gu()});je.addEventListener("pointercancel",n=>{Ye?.id===n.pointerId&&ai()});je.addEventListener("lostpointercapture",n=>{Ye?.id===n.pointerId&&ai()});je.addEventListener("contextmenu",n=>n.preventDefault());function pR(){return!Ye||Gg(Ye,je.getBoundingClientRect())}function mR(){return!Ye||Gg({width:Ye.vw,height:Ye.vh},{width:innerWidth,height:innerHeight})}window.addEventListener("resize",()=>{pt==="range"?mR()&&ai():Oe.cancelInput()});window.addEventListener("orientationchange",()=>{pt==="range"?ai():Oe.cancelInput()});for(const n of[Dc,a0])n.addEventListener("change",()=>{Nc(),ft()});E("rotate-hint-dismiss").addEventListener("click",()=>{uu=!0;try{OT(localStorage)}catch{}Nc(),je.focus({preventScroll:!0})});Vo.addEventListener("click",()=>ni.click());Nc();window.addEventListener("blur",()=>{pt==="range"?es(!0):Oe.cancelInput()});document.addEventListener("visibilitychange",()=>{document.hidden&&(pt==="range"?es(!0):Oe.cancelInput())});mc.addEventListener("click",()=>es(!Lt));Ps.addEventListener("click",()=>{if(!Ye){xn=xn==="dark"?"light":"dark",Bc();try{nA(localStorage,xn)}catch{}}});E("resume").addEventListener("click",()=>{es(!1),je.focus({preventScroll:!0})});ni.addEventListener("click",()=>{ka(),je.focus({preventScroll:!0})});$a.addEventListener("click",()=>{ai(!1),gu()});for(const n of[Gs,Vs])n.addEventListener("input",()=>{if(he==="flying"||Lt||ot||Xe?.pending||u0()){ft();return}const e={angle:Number(Gs.value),power:Number(Vs.value)/100};ai(!1),(he==="hit"||he==="miss")&&ka(),Ct=e,ft()});window.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLButtonElement||n.target instanceof HTMLElement&&["SUMMARY","SELECT","TEXTAREA"].includes(n.target.tagName)||n.target instanceof HTMLElement&&n.target.isContentEditable)){if(pt==="combat"){Oe.keydown(n);return}if(n.code==="KeyP"){n.preventDefault(),n.repeat||es(!Lt);return}if(n.code==="Escape"){ai();return}if(!(Lt||Ye||ot||Xe?.pending||ue&&ue.status!=="active"||ze?.run.status==="completed")){if(n.code==="Space"){if(n.preventDefault(),n.repeat)return;he==="hit"||he==="miss"?ka():gu()}else if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.code)&&he!=="flying"){if(n.preventDefault(),he==="hit"||he==="miss"){if(ue||ze)return;ka()}Ct.angle=Br(Ct.angle+(n.code==="ArrowLeft"?-1:n.code==="ArrowRight"?1:0),5,80),Ct.power=Br(Ct.power+(n.code==="ArrowDown"?-.02:n.code==="ArrowUp"?.02:0),.08,1),ft()}}}});let Fi=1,Oi=1;const gR=new ResizeObserver(()=>{pt==="range"?pR()&&ai():Oe.cancelInput();const{width:n,height:e}=je.getBoundingClientRect();n<=0||e<=0||(Yi.setSize(Math.round(n*.85),Math.round(e*.85),!1),Fi=n,Oi=e,Uc.setAttribute("viewBox",`0 0 ${n} ${e}`),pt==="range"?mu():Oe.resize(n,e))});gR.observe(je);je.addEventListener("webglcontextlost",n=>{if(n.preventDefault(),pt==="combat"){Oe.cancelInput(),E("combat-message").textContent="Graphics interrupted. Reload to reconnect with the same guest.";return}es(!0),bn("Graphics interrupted. Reload to return to the clearing.","GRAPHICS PAUSED")});function v0(n){requestAnimationFrame(v0);const e=Math.max(0,(n-gc)/1e3);if(gc=n,pt==="combat"){Oe.render(Yi,e),y0();return}if(!Lt&&(Fa+=e,he==="flying"&&Rt)){const c=Math.min(dn+e,Ut.maxFlight);if(ue&&an)c>=an.at?cR():dn=c;else if(Qr()&&Qt)c>=Qt.at?lR():dn=c;else{const l=Rh(Rt,jt,dn,c),u=Ch(Rt);l!==null&&l<=u?Kl(!0,l):c>=u?Kl(!1,u):c>=Ut.maxFlight?Kl(!1,c):dn=c}}const t={angle:Ct.angle,pull:.2+Ct.power*.5};Lt||(ir=pg(ir,t,e),va+=((Rt?1:0)-va)*(1-Math.exp(-18*e)));const i=ir.angle*Math.PI/180,r=oc(ir,va);Xs.rotation.z=i,Xs.position.set(r.bow.x,r.bow.y,.12);const s=l0.attributes.position;if(s.setXYZ(1,(r.nock.x-r.bow.x)*Math.cos(i)+(r.nock.y-r.bow.y)*Math.sin(i),0,0),s.needsUpdate=!0,jl(JA,Nt(-7.7,2.3,.42),Nt(r.bow.x+Math.cos(i)*.37,r.bow.y+Math.sin(i)*.37,.12)),jl(ZA,Nt(-7.95,2.3,.45),Nt(r.elbow.x,r.elbow.y,.28)),jl(QA,Nt(r.elbow.x,r.elbow.y,.28),Nt(r.hand.x,r.hand.y,.12)),eR.position.set(r.hand.x,r.hand.y,.12),Rt){const c=ba(Rt,dn,sh);Li.position.set(c.position.x,c.position.y,.12),Li.rotation.z=c.angle;const l=Array.from({length:16},(u,d)=>{const h=Math.max(0,dn-.23+d/15*.23),p=ba(Rt,h,sh).position;return Nt(p.x,p.y,.04)});oh.setFromPoints(l)}else Li.position.set(r.nock.x+Math.cos(i)*1.2,r.nock.y+Math.sin(i)*1.2,.12),Li.rotation.z=i;const a=m0(Ct);if(Uc.style.visibility=!Rt&&!Lt&&(he!=="aiming"||Ye?.valid)?"visible":"hidden",cc(Rn).forEach((c,l)=>{const u={x:r.nock.x+Math.cos(i)*1.2,y:r.nock.y+Math.sin(i)*1.2},d=ba(a,c,{tip:u,angle:i}).position,h=Nt(d.x,d.y,.06).project(Hn);$p[l].setAttribute("cx",String((h.x+1)*Fi/2)),$p[l].setAttribute("cy",String((1-h.y)*Oi/2))}),pa.hidden=!0,Rt&&he==="flying"&&!Lt){const c=Nt(Li.position.x,Li.position.y,.12).project(Hn);if(Math.abs(c.x)>1||Math.abs(c.y)>1){const l=c.x*Fi/2,u=-c.y*Oi/2,d=Math.min((Fi/2-20)/Math.abs(l),(Oi/2-20)/Math.abs(u));pa.style.left=`${Fi/2+l*d}px`,pa.style.top=`${Oi/2+u*d}px`,pa.style.setProperty("--cue-angle",`${Math.atan2(u,l)+Math.PI/2}rad`),pa.hidden=!1}}const o=Fa-Fc;pr.forEach((c,l)=>{if(c.visible=he==="hit"&&o<.65,c.visible&&Rt){const u=qt(Rt,dn),d=l/pr.length*Math.PI*2;c.position.set(u.x+Math.cos(d)*o*2,u.y+Math.sin(d)*o*2-o*o*2,.25)}}),xc.material=Ya(he==="hit"&&o<.2?"#edbc7e":"#cc684a"),xc.material.color.set(he==="hit"&&o<.2?"#edbc7e":xn==="dark"?"#cf785c":"#cc684a"),je.dataset.pose=JSON.stringify({angle:ir.angle,pull:ir.pull,release:va,...r,arrow:{x:Li.position.x,y:Li.position.y,angle:Li.rotation.z},trail:Array.from(oh.getAttribute("position")?.array??[]),flightTime:dn}),je.dataset.view=JSON.stringify([Hn.left,Hn.right,Hn.top,Hn.bottom]),Yi.render(rt,Hn)}Oe=new UE(je);const xR=new KS({shell:E("arena-shell"),expand:E("arena-expand"),exit:E("arena-exit"),controlsToggle:E("arena-controls-toggle"),doc:document,win:window,cancelInput:()=>Oe.cancelInput(),isDrawing:()=>Oe.drawing,canExpand:()=>pt==="combat"&&Tt==="public"&&kt,setModal:VA,focusFallback:WA,onChange:n=>Oe.setHudMode(Pr(n)?"expanded":"inline")});yR();vR();Bc();zc();uR();ft();_R();requestAnimationFrame(v0);function qp(n,e){if(Yo={level:n,theme:e},!ze&&(fn=n,ii=Wa(n),Xr=e,Qt=null,!(pt!=="range"||he==="flying"||Ye))){he="ready",Rt=null,dn=0,ta.visible=!1,E("shot-result").hidden=!0;for(const t of pr)t.visible=!1;Ka(),bn("Pull back. Breathe. Release.","LEVEL READY"),ft()}}function _R(){const n=lA(location.search);if(n){try{qp(n0(n.seed,n.index,n.windOn),nh(n.seed,n.index))}catch{return}window.archeryLevelDebug={set:(e,t=0,i=0)=>qp(e,nh(t,i)),geometry:()=>fn?du(fn):null}}}function _u(n){if(n!==pt){n==="combat"?(E("mode-note").textContent="",ai(!1),pt=n,Oe.activate()):(Oe.deactivate(),pt=n,Tt==="public"&&(kt=!1,xt?.close())),gc=performance.now(),document.body.dataset.view=n,Nc();for(const e of[".controls",".boards"]){const t=document.querySelector(e);t&&(t.hidden=n==="combat")}for(const e of["combat-panel","combat-controls","combat-scene-label"])E(e).hidden=n!=="combat";for(const e of["pause","guide","gesture-hint","arrow-cue","shot-result","face-inset","paused"])E(e).hidden=n==="combat";n==="combat"&&ch.hide(),E("challenge-panel").hidden=n==="combat"||!ue&&!ze,E("mode-combat").setAttribute("aria-pressed",String(n==="combat"));for(const e of kc){const t=E(`mode-${e}`);t.disabled=!1,n==="combat"&&t.setAttribute("aria-pressed","false")}je.dataset.viewMode=n,vu(),document.querySelector(".play-area").hidden=!1,n==="combat"?(Uc.style.visibility="hidden",Oe.resize(Fi,Oi)):(mu(),Bc(),Ka(),E("paused").hidden=!Lt,E("shot-result").hidden=he!=="hit"&&he!=="miss",ft())}}function vR(){const n=mw(location.search),e=gw(location);if(e!==null)try{history.replaceState(history.state,"",e)}catch{}if(!n||!We)return;Tt="private",_u("combat"),Zt();const t=E("combat-join-code");!t.disabled&&!We.room&&(t.value=n,Bn="Invitation code filled in. Tap Join room to enter.",Zt(),window.matchMedia("(pointer: coarse)").matches||E("combat-join").focus())}function yR(){We=_n?new dw(_n.endpoint,fetch,$s,_n):null,xt=_n?new DS(_n.endpoint,fetch,$s,_n):null,E("mode-combat").addEventListener("click",()=>{ot||Xe?.pending||Ye||(_u("combat"),Zt(),Tt==="public"&&E("skirmish-title").focus())});let n=!1;E("combat-share").addEventListener("click",async()=>{const t=We?.room?.code;if(!t||n)return;n=!0;let i;try{i=await yw(navigator,t,pw(location,t))}finally{n=!1}if(!(i==="cancelled"||i==="shared")){if(i==="copied")Bn=Kd,Dr&&clearTimeout(Dr),Dr=window.setTimeout(()=>{Dr=0,Bn===Kd&&(Bn="",Zt())},4e3);else{Bn=uw;const r=E("combat-code"),s=window.getSelection();if(s){const a=document.createRange();a.selectNodeContents(r),s.removeAllRanges(),s.addRange(a)}}Zt()}});const e=async t=>{Bn="";try{await t()}catch(i){Bn=i instanceof Error?i.message:"The combat service is unavailable. Reconnect or retry the pending action."}Zt()};E("combat-create").addEventListener("click",()=>{We&&e(()=>{const t=E("combat-preset").value,i=t==="teams-1"?{mode:"teams",preset:"teams-1"}:t==="royale-shrink-1"||t==="royale-fixed-1"?{mode:"royale",preset:t}:void 0;return We.create(i)})}),E("combat-join-form").addEventListener("submit",t=>{t.preventDefault(),We&&e(()=>We.join(E("combat-join-code").value))}),i0=new iT(async t=>{const i=We;return!i||Oe.drawing||i.busy||i.pending||!i.room?"skip":(await e(()=>i.command(t)),Bn?"error":"done")}),E("combat-ready").addEventListener("click",()=>{const t=We;t?.room&&e(()=>t.command({kind:"ready",ready:!t.room.state.seats.find(i=>i.actorId===t.room.membership.actorId)?.ready}))}),E("combat-start").addEventListener("click",()=>{We&&e(()=>We.command({kind:"start"}))}),E("combat-pass").addEventListener("click",()=>{Tt==="public"?xt&&Jl(()=>xt.command({kind:"pass"})):We&&e(()=>We.command({kind:"pass"}))}),E("combat-cancel").addEventListener("click",()=>{const t=We?.room?.state.action;We&&t&&e(()=>We.command({kind:"cancel",cancelActionId:t.id}))}),E("combat-rematch").addEventListener("click",()=>{const t=We;if(!t?.room||Oe.drawing)return;const i=km(t.room.state,t.room.successor);i.kind!=="none"&&e(async()=>{i.kind==="request"&&await t.command({kind:"rematch"}),await t.followRematch()})}),E("combat-leave").addEventListener("click",()=>{We&&!Oe.drawing&&e(()=>We.command({kind:"leave"}))}),E("combat-resign").addEventListener("click",()=>{We&&!Oe.drawing&&confirm(We.room&&Zn(We.room.state)?"Resign this match? Your archer will leave the competition.":"Resign this duel? Your opponent wins.")&&e(()=>We.command({kind:"resign"}))}),E("combat-retry").addEventListener("click",()=>{We&&e(()=>We.retry())}),E("combat-reconnect").addEventListener("click",()=>{We&&e(()=>We.reconnect())}),Oe.onShot=(t,i)=>{Tt==="public"?xt&&Jl(()=>xt.command({kind:"shot",arrow:t,aim:i})):We&&e(()=>We.command({kind:"shot",arrow:t,aim:i}))},Oe.onDrawing=t=>{Ps.disabled=t;for(const i of[...kc,"combat"])E(`mode-${i}`).disabled=t;Zt()},We&&(We.onChange=()=>{Tt==="private"&&Zt()},We.onError=t=>{Bn=t instanceof Error?t.message:"Connection interrupted. Reconnecting with the same guest.",Zt()}),window.addEventListener("pagehide",()=>{We?.close(),xt?.close()});for(const t of["private","public"])E(`combat-mode-${t}`).addEventListener("click",()=>{Oe.drawing||t===Tt||(kt=!1,Tt=t,t==="private"&&xt?.close(),Oe.clearSnapshot(),Zt(),t==="public"&&(E("skirmish-title").focus(),bR()))});for(const[t,i]of[["join",()=>xt.join()],["reconnect",()=>xt.reconnect()],["rejoin",()=>xt.control("rejoin")],["leave",()=>xt.control("leave")],["retry",()=>xt.retry()]])E(`skirmish-${t}`).addEventListener("click",()=>{if(xt&&!Oe.drawing){const r=t==="retry"?xt.pending?.body.kind:t;Jl(i,r==="leave"?"leave":t==="retry"||["join","rejoin","reconnect"].includes(r??"")?"enter":"stay")}});E("skirmish-back").addEventListener("click",()=>{cr||xt?.busy||xt?.pending||Oe.drawing||(kt=!1,xt?.close(),Zt(),E("skirmish-title").focus())}),Rr&&(Rr.onChange=()=>{Tt==="private"&&Zt()}),As&&(As.onChange=()=>{Tt==="public"&&Zt()}),xt&&(xt.onChange=()=>{Tt==="public"&&Zt()},xt.onError=t=>{Ua=t instanceof Error?t.message:"Connection interrupted. Reconnect with the same guest.",Tt==="public"&&Zt()}),Zt()}function Zt(){const n=pt==="combat"&&Tt==="public"&&!kt;Tt!=="public"&&vu(),document.querySelector(".play-area").hidden=n,E("combat-controls").hidden=pt!=="combat"||n,E("combat-scene-label").hidden=pt!=="combat"||n;for(const h of["combat-mode-picker","combat-preset-choice","combat-preset-label","combat-rules"])E(h).hidden=!_c;E("combat-private-title").textContent=_c?"Private match":"Private duel",E("combat-private-panel").hidden=Tt!=="private",E("skirmish-panel").hidden=Tt!=="public";for(const h of["private","public"])E(`combat-mode-${h}`).setAttribute("aria-pressed",String(Tt===h)),E(`combat-mode-${h}`).disabled=Oe.drawing;if(E("combat-drag-help").textContent=Tt==="public"?"Pull left to aim right or right to aim left, and pull down to raise the arc. Release to lock. Facing buttons also work before drawing. The short seven-dot guide shows only the opening arc.":"Pull backward and down from anywhere in the arena. Change facing before drawing. The short seven-dot guide shows only the opening arc.",Tt==="public"){$o?.syncPrivate(null),MR();return}const e=We,t=e?.room,i=t?.state,r=Oe.drawing,s=!!e?.busy||!!e?.pending;Oe.setTransport(!!e?.connected,s),Oe.setLockAgain(!!e?.lockAgain),t?Oe.setSnapshot(t.state,t.membership.actorId,e.now):Oe.hasRoom&&Oe.clearSnapshot(),E("combat-lobby").hidden=!!t;{const h=E("combat-code"),p=t?t.code:"";h.textContent!==p&&(h.textContent=p);const g=E("combat-share");g.hidden=!p,!p&&Dr&&(clearTimeout(Dr),Dr=0,Bn===Kd&&(Bn="")),p?g.setAttribute("aria-label",`Share room code ${p}`):g.removeAttribute("aria-label")}E("combat-message").textContent=e?Bn||(t?e.connected?"Connected to the private room. Share its code with a friend.":"Connecting to the private room. Server clocks continue.":"Create a room or enter a friend’s invitation code."):"Private duel is unavailable here. Practice and local Challenges are available.";for(const h of["create","join","join-code"])E(`combat-${h}`).disabled=!e||s||r||!!t;E("combat-roster").replaceChildren(...(t?QM(t.state,t.membership.actorId,t.connections,e.now):[]).map(h=>{const p=document.createElement("li");p.dataset.actorId=h.actorId,p.textContent=h.text;const g=document.createElement("progress");if(g.max=100,g.value=h.health,g.setAttribute("aria-label",h.healthLabel),p.append(g),h.team!==null){const v=document.createElement("strong");v.className="combat-team",v.textContent=ZM(h.team),p.prepend(v)}if(h.lockText!==null){const v=document.createElement("div");v.textContent=h.lockText,p.append(v)}return p}));const a=i&&t?Om(i,t.membership.actorId):null,o=h=>{const p=i?.seats.findIndex(g=>g.actorId===h)??-1;return t?.connections.find(g=>g.actorId===h)?.label??`Archer ${p+1}`},c=i?ug(i):null;t&&i?c?Rr?.want(t.roomId,c,`/rooms/${encodeURIComponent(t.roomId)}/stats`):Rr?.hold(t.roomId):Rr?.clear(),d0("combat-board",hg(Rr?.stats??[],(i?.seats??[]).map(h=>({actorId:h.actorId,label:o(h.actorId)})),t?.membership.actorId??null,ww(i??null,Rr?.loadedKey??null))),E("combat-rules").textContent=i?Zn(i)?"Lock one arrow or pass during shared 20-second planning. Locks are final. Server time continues in the background.":"Two archers · 100 health · alternating 20-second turns. Server time continues in the background.":"Duel alternates turns; Teams and Royale share a planning deadline. Server time continues in the background.",E("combat-key-help").textContent=`← → elevation · ↓ ↑ draw · Space ${i&&Zn(i)?"lock":"fire"} · Escape cancel draw. Combat has no local pause.`,E("combat-preset-label").textContent=a?.preset??"",i0?.render(t,r||s),E("combat-priority").textContent=a?.priority.length?`Priority: ${a.priority.map(o).join(" → ")}`:"",E("combat-pressure").textContent=a?.pressure??"",b0(E("combat-scene-label"),i&&Zn(i)?i.mode==="teams"?"TEAMS 2v2":"ROYALE":"PRIVATE DUEL"),E("combat-preset").disabled=!e||s||r||!!t;const l=i?.seats.find(h=>h.actorId===t?.membership.actorId);E("combat-ready").hidden=i?.state!=="waiting",E("combat-ready").textContent=l?.ready?"Not ready":"Ready",E("combat-start").hidden=i?.state!=="waiting"||!t?.membership.canStart;const u=i&&t?km(i,t.successor):{kind:"none",label:""};E("combat-rematch").hidden=u.kind==="none",E("combat-rematch").textContent=u.label,E("combat-leave").hidden=!t||i?.state==="active",E("combat-resign").hidden=i?.state!=="active",E("combat-reconnect").hidden=!e||!t&&!e.savedRoom||!!e.connected,E("combat-retry").hidden=!e?.pending;for(const h of["ready","start","rematch","leave","resign","reconnect","retry"])E(`combat-${h}`).disabled=r||!!e?.busy||h!=="retry"&&!!e?.pending;E("combat-start").disabled||=!i||!JM(i)||!e?.connected,E("combat-pass").disabled=r||s||!e?.connected||!i?.seat.canAct,E("combat-pass").textContent=i&&Zn(i)?"Lock pass":"Pass turn",E("combat-cancel").hidden=!!i&&Zn(i)||i?.phase!=="resolving"||i.action?.actorId!==t?.membership.actorId||i.launchAt===null||e.now()>=i.launchAt,E("combat-cancel").disabled=r||s||!e?.connected;const d=a?.result??"";E("combat-result").hidden=!d,E("combat-result").textContent=d,E("combat-phase").textContent=i?i.state==="active"?i.phase.toUpperCase():i.state.toUpperCase():"WAITING FOR A ROOM",E("combat-turn").textContent=a?.turn??"Invite a friend to the arena.",$o?.syncPrivate(t&&i?{roomId:t.roomId,state:i}:null),$o?.syncPublic(null),y0()}function y0(){if(Tt==="public"){M0();return}const n=We?.room,e=n?.state;if(!e){E("combat-clock").textContent="";return}const t=We.now();E("combat-clock").textContent=e.state==="active"&&e.deadlineAt!==null?`${Math.max(0,Math.ceil((e.deadlineAt-t)/1e3))}s`:e.state==="active"?"Resolving":"",e.state==="active"&&e.deadlineAt!==null&&t>=e.deadlineAt&&(E("combat-fire").disabled=!0,E("combat-pass").disabled=!0)}async function Jl(n,e="stay"){if(cr)return;cr=!0,Ua="",Tt==="public"&&Zt();let t=!1;try{await n(),Tt==="public"&&pt==="combat"&&(e==="leave"&&xt?.room?.membership.status==="left"?(kt=!1,t=!0):e==="enter"&&xt?.room&&(kt=!0,t=!0))}catch(i){Ua=i instanceof Error?i.message:"Public play is unavailable. Reconnect or retry the pending action."}finally{cr=!1,Tt==="public"&&(Zt(),t&&E("skirmish-title").focus())}}const Zl=new Set;async function bR(){const n=xt,e=n?.savedArena;if(!n||!e||n.room||n.pending||n.busy||cr)return;const t=`${n.locatorKey}|${e.arenaId}|${e.memberId}`;if(Zl.has(t))return;Zl.add(t);let i="unknown";try{i=await n.probeSavedArena()}catch{}i==="unknown"&&Zl.delete(t),i==="gone"&&(Ua="Your last arena ended. Join a new one."),Tt==="public"&&Zt()}function MR(){const n=xt,e=n?.room,t=e?.state,i=Oe.drawing,r=cr||!!n?.busy||!!n?.pending,s=e?NS(e):null;$o?.syncPublic(e&&t&&kt?{arenaId:e.arenaId,memberId:e.membership.memberId,epoch:t.epoch,completedRounds:t.completedRounds}:null),E("skirmish-rules-note").textContent=US(t?.version??Oh),Oe.setTransport(kt&&!!n?.connected,r),Oe.setLockAgain(!!n?.lockAgain),e&&kt?Oe.setSnapshot(e.state,e.membership.actorId,n.now):Oe.hasRoom&&Oe.clearSnapshot(),E("skirmish-entry").hidden=kt,E("skirmish-roster").hidden=!kt,E("skirmish-message").textContent=n?Ua||(cr?"Contacting the arena…":kt?e?n.connected?s.turn:"Connection interrupted. Reconnect to observe or return to this arena.":"Join an arena. NPC archers fill the open places.":n.pending?"An action is awaiting acknowledgement. Retry the original action before continuing.":e?.membership.status==="left"?"You left public play. Rejoin when ready, or return to watch.":e||n.savedArena?"Your arena is saved. Return to play or watch with the same guest.":"Join when ready. NPC archers fill the open places."):"Public play is unavailable here. Practice and local Challenges are available.",E("skirmish-join").hidden=!!e||!!n?.savedArena||!!n?.pending,E("skirmish-rejoin").hidden=!s?.canRejoin,E("skirmish-leave").hidden=!kt||!s?.canLeave,E("skirmish-reconnect").hidden=!n||!e&&!n.savedArena||kt&&!!n.connected,E("skirmish-retry").hidden=!n?.pending,E("skirmish-reconnect").textContent=e&&["idle","left","aborted"].includes(e.membership.status)?"Watch arena":kt?"Reconnect":"Return to arena",E("skirmish-back").hidden=!kt||!e||!["idle","left","aborted"].includes(e.membership.status),E("skirmish-back").disabled=i||r;for(const o of["join","reconnect","rejoin","leave","retry"])E(`skirmish-${o}`).disabled=!n||i||cr||!!n.busy||o!=="retry"&&!!n.pending;{const o=E("arena-status"),c=E("skirmish-message").textContent??"";o.textContent!==c&&(o.textContent=c)}vu();const a=t?ug(t):null;e&&t&&kt?a?As?.want(`${e.arenaId}:${t.epoch}`,a,`/skirmish/${encodeURIComponent(e.arenaId)}/stats`):As?.hold(`${e.arenaId}:${t.epoch}`):As?.clear(),d0("skirmish-board",hg(As?.stats??[],e&&kt?zh(e):[],e?.membership.actorId??null,!1)),E("combat-preset-label").textContent="",b0(E("combat-scene-label"),"PUBLIC ARENA"),E("combat-phase").textContent=s?.phase??"JOIN A PUBLIC ARENA",E("combat-turn").textContent=s?.turn??"Continuous play with human and NPC archers.",E("combat-priority").textContent=t?.priority.length?`Priority: ${t.priority.map(o=>e.connections.find(c=>c.actorId===o)?.label??"Archer").join(" → ")}`:"",E("combat-pressure").textContent=s?.warning??"",E("combat-result").hidden=!0,E("combat-result").textContent="",E("combat-key-help").textContent="← → elevation · ↓ ↑ draw · Space lock · Escape cancel draw. Public play follows server time.",E("combat-cancel").hidden=!0,E("combat-pass").textContent="Lock pass",E("combat-pass").disabled=!kt||i||r||!n?.connected||!e?.membership.canAct,M0()}function b0(n,e,t=" · SIDE VIEW"){if(n.textContent===e+t&&n.querySelector(".scene-label-extra"))return;const i=document.createElement("span");i.className="scene-label-extra",i.textContent=t,n.replaceChildren(e,i)}function M0(){const n=xt,e=n?.room?.state,t=n?.now()??0,i=ag(e,t);E("combat-clock").textContent="";const r=E("arena-clock");r.dataset.kind!==i.kind&&(r.dataset.kind=i.kind);const s=E("arena-clock-value"),a=E("arena-clock-state");s.textContent!==i.text&&(s.textContent=i.text),a.textContent!==i.stateText&&(a.textContent=i.stateText),r.getAttribute("aria-label")!==i.label&&r.setAttribute("aria-label",i.label);const o=e&&kt?GA.observe(e,t):null;o&&(r.dataset.nativeMs=String(o.nativeMs),r.dataset.firstRemainingMs=String(Math.round(o.firstRemainingMs)),r.dataset.firstMarginMs=String(o.marginMs===null?"":Math.round(o.marginMs))),e&&e.deadlineAt!==null&&t>=e.deadlineAt&&(E("combat-fire").disabled=!0,E("combat-pass").disabled=!0)}function vu(){const n=xt?.room,e=pt==="combat"&&Tt==="public"&&kt&&!!n;if(E("arena-hud").hidden=!e,E("skirmish-roster").hidden=!e,xR.setAvailable(e),!e||!n){Xl="";return}const t=`${n.arenaId}:${n.state.epoch}:${n.state.revision}:${n.snapshotRevision}:${n.membership.actorId}:${n.membership.status}`;t!==Xl&&(Xl=t,E("arena-priority").replaceChildren(...HS(n).map(i=>{const r=document.createElement("li");r.className="arena-icon",r.dataset.actorId=i.actorId,r.dataset.slot=i.slotId,r.dataset.own=String(i.own),r.dataset.npc=String(i.npc),r.style.setProperty("--slot",i.color),r.style.setProperty("--slot-ink",i.ink),r.setAttribute("aria-label",i.ariaLabel),i.current&&r.setAttribute("aria-current","true");const s=document.createElement("span");return s.setAttribute("aria-hidden","true"),s.textContent=i.symbol,r.append(s),r})),E("skirmish-roster").replaceChildren(...GS(n).map(i=>{const r=document.createElement("li");r.dataset.actorId=i.actorId,r.dataset.kind=i.npc?"npc":"human",r.dataset.slot=i.slotId,r.dataset.status=i.status,r.dataset.own=String(i.own),r.style.setProperty("--slot",i.color),r.style.setProperty("--slot-ink",i.ink);const s=document.createElement("span");s.className="arena-swatch",s.setAttribute("aria-hidden","true"),s.textContent=i.symbol;const a=document.createElement("span");a.className="arena-health-name",a.textContent=`${i.label}${i.own?" · you":i.npc?" · NPC":""}${i.locked?" · locked":""}`;const o=document.createElement("span");o.className="arena-health-value",o.textContent=i.valueText;const c=document.createElement("progress");return c.max=100,c.value=i.health,c.setAttribute("aria-label",i.ariaLabel),r.append(s,a,o,c),r})))}
