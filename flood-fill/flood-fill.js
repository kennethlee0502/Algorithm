/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const currColor = image[sr][sc];
    if(currColor === color){
        return image;
    }

    const stack =[[sr,sc]];
    while(stack.length > 0 ){
        const [i,j] = stack.pop();
        if(i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== currColor){
            continue;
        }
        image[i][j] = color;
        stack.push([i+1, j]);
        stack.push([i-1, j]);
        stack.push([i,j+1]);
        stack.push([i,j-1]);
    }
    return image;
};