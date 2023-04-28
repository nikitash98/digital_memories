const fragmentShader = `
void main() {
  //gl_FragColor = vec4(0.34, 0.53, 0.96, 1.0);
  gl_FragColor = gl_Color;

}
`

export default fragmentShader
