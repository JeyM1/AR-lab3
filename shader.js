const getVertexShaderSource = () => fetch('./Shaders/vertex_shader.glsl').then(res => res.text())
const getFragmentShaderSource = () => fetch('./Shaders/fragment_shader.glsl').then(res => res.text())
