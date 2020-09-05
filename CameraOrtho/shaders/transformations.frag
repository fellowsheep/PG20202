#version 450 core

in vec4 finalColor;

uniform vec4 contourColor;
uniform int rasterCode;

out vec4 color;

void main()
{
    if (rasterCode == 0)
        color = finalColor;
    else color = contourColor;
}