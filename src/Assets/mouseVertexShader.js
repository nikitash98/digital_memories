const vertexShader = `
uniform vec2 uMouse;
uniform mat4 p_matrix;
uniform mat4 m_v_matrix;
varying vec3 vColor;
void main() {

  //modelPosition.x += uMouse.x;
  //modelPosition.x = uMouse.x * 0.001;
  //projectedPosition.x = uMouse.x * 0.001;
  //if(abs(uMouse.x - projectedPosition.x) < 1.0) {
  //  projectedPosition.x += 10.0;
  //}

  //vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  //vec4 viewPosition = viewMatrix * modelPosition;
  //vec4 projectedPosition = projectionMatrix * viewPosition;
  //gl_Position = projectedPosition;
  gl_Position = p_matrix * m_v_matrix * vec4(position, 1.0);
  vColor = color;
  gl_Position.xy /= gl_Position.w;
  gl_Position.xy *= 2.0;
  gl_Position.xy -= 1.0;
  gl_PointSize = 8.0;
}

`

export default vertexShader
