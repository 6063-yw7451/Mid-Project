## Book
I chose the book "*I AM A CAT*" written by *Soseki Natsume* who is a Japanese novelist. The story is narrated from the perspective of an unnamed cat, who observes and comments on the lives and behaviors of the people around him. The cat lives in the home of a teacher and his family in Tokyo during the Meiji era, a period of significant social and cultural change in Japan. It offers a unique and often amusing perspective on the human condition, seen through the eyes of a cat who is simultaneously an astute observer and an outsider to the human world. While the novel is primarily a satire and a social commentary, it explores various themes, including:
- Observation of Human Behavior
- Social Critique
- Loneliness and Alienation
- Identity and Self-Reflection
- Humor and Irony


## Ideas
I will include the main character cat in my cover, and also some symbols of elements the book mentioned, for example: money, social status, unity... 
The cat's eyes are the key point for interactive, they will keep moving, just like the cat in the book who is always observing its surroundings. But as the mouse moves, the cat's eyes will follow the movement of the mouse to pursue some symbols that pop up. The symbols will change when the mouse clicks.
It can be both interactive and time based, if the mouse doesn't move/click, it will change slowly by itself based on time. But when someone moves/clicks the mouse, it will follow the mouse action.

I want to use some symbols to represent abstract concepts, just like the reading in week3 "*Glitch Feminism: A Manifesto*", the author used "glitches" in technology as a metaphor for the imperfections and biases in our society. I researched about symbols and metaphors in geometric shapes, for example: 
- Fist Raised in Solidarity = unity and strength
- Peace Symbol = harmony in society
- Key Symbol = the quest for justice and equal access to resources
- Globe or Earth Symbol = interconnectedness of social justice issues
- Bicycle Wheel = sustainable and equitable mobility


## Sketches
Here are some sketches that show my ideas directly.
![Sketch01](./sketch1.JPG)
![Sketch01](./sketch2.JPG)
01-03 show the movement when mouse moves/clicks.
04-06 show the movement without interaction.


## Progress
This week, I created an animation of cat eyes that follow a circular motion.
- catImg: An image object representing a cat image loaded from an asset.
- eyeLeft and eyeRight: Objects of the CatEye class, representing the left and right eyes of the cat.
- The animation of the cat's eyes and the circular motion of the logo are driven by the draw function. The logo's motion is time-based as logoA is decremented in each frame, simulating the logo's rotation.
- CatEye (Class): A class representing the eyes of the cat. The move method updates the eye's position based on the current logoA angle, making it appear as if the cat's eyes are tracking the logo's motion.

## Description(what I will do next)
I will add mouse move/clicked functions and make logo changes next week.
1. **Classes, Objects, and Arrays:**
- logos: An array that holds multiple logo images loaded from assets.
- logoIndex: An integer representing the index of the current logo image to be displayed.
- logoX and logoY: Variables representing the current position of the logo image on the canvas.
- changeNum: An integer used to keep track of changes in logo motion.
2. **Interactivity and Time-Based Logic:**
- The mouseClicked function changes the current logo image when the mouse is clicked.
- The timer variable introduces a delay, allowing the animation to pause temporarily when the mouse moves.
3. **Functions:**
- preload(): Loads resources (logo images and cat image).
- setup(): Initializes the canvas, resizes the cat image, and sets up initial values for various parameters.
- draw(): for rendering the animation, updating the logo's position, and drawing the cat's eyes.
- mouseClicked(): Change the logo image when the mouse is clicked.
- changeLogo(): A function that increments the logoIndex to change the logo image.
- moveWithMouse(): A function that adjusts the logo's position based on the mouse's movement, creating a springing effect.

There may be some elements/funtions missing, it will be figured out when I write the code for the mouse and logo part next week.




