uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 pos = position;

  // subtle breathing displacement along the normal
  float wobble = sin(uTime * 0.6 + position.y * 3.0) * 0.01;
  pos += normal * wobble;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = pos;

  gl_Position = projectedPosition;
}
