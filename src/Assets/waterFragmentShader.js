const fragmentShader = `

varying vec3 vColor;
varying float height;
void main() {
  gl_FragColor = vec4(0.1, 0.2, 0.96 + (height+1.0)/1.0, 0.4);
 //gl_FragColor = vec4( vColor.rgb, 1. );

}
`

export default fragmentShader
