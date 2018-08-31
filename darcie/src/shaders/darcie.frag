precision highp float;

uniform sampler2D oneSampler;
uniform sampler2D twoSampler;
uniform sampler2D threeSampler;
uniform sampler2D fourSampler;
uniform sampler2D fiveSampler;
uniform sampler2D sixSampler;

uniform vec2 textureSize;

void main(void) {
    vec2 coords = vec2(gl_FragCoord.x / textureSize.x, gl_FragCoord.y / textureSize.y);
    vec4 oneFrag = texture2D(oneSampler, coords);
    vec4 twoFrag = texture2D(twoSampler, coords);
    vec4 threeFrag = texture2D(threeSampler, coords);
    vec4 fourFrag = texture2D(fourSampler, coords);
    vec4 fiveFrag = texture2D(fiveSampler, coords);
    vec4 sixFrag = texture2D(sixSampler, coords);

    gl_FragColor = (oneFrag + twoFrag + threeFrag + 
        fourFrag + fiveFrag + sixFrag) / 4.0;
}
