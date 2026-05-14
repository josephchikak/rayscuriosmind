uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uColorCore;
uniform vec3 uColorEdge;
uniform vec3 uColorHot;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  float facing = clamp(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0, 1.0);

  vec2 q = vPosition.xy * 2.5 + uMouse * 0.4;
  float n = fbm(q + uTime * 0.15);

  vec3 color = mix(uColorEdge, uColorCore, n);
  float rim = pow(1.0 - facing, 2.5);
  color = mix(color, uColorHot, rim * 0.9);
  color *= 0.45 + 0.55 * facing;

  gl_FragColor = vec4(color, 1.0);
}
