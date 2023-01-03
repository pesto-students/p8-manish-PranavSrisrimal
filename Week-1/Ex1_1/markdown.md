# Pesto Assignment - Exercise 1.1

## a. What is the main functionality of the browser? <br>

A web browser is an application software to access websites. <br> The **main function of a browser** is -

* To **present the web resource** you choose, by **requesting it from the server** and **displaying** it in the browser window.

	* The resource is usually an HTML document, but may also be a PDF, image, or some other type of content.

* The **location of the resource** is specified by the user using a **URI** (Uniform Resource Identifier).

---

## b. High Level Components of a browser - <br>

![browser_components](browser_components.jpg)

  

## The browser's main components are:

1. **User Interface** : This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

2. **Browser Engine** : This marshals actions between the UI and the rendering engine.

3. **Rendering Engine** : It is responsible for displaying requested content. For example, if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

4. **Networking** : For network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

5. **UI backend** : It is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

6. **JavaScript interpreter** : It is used to parse and execute JavaScript code.

7. **Data storage**: This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
  
---
## c. Rendering engine and its use.

The **rendering engine** displays the requested contents on the browser screen. <br>
* By default, the rendering engine can display HTML, XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in.

* The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.

After that, this is the basic flow of the rendering engine:

![rendering_engine_flow](rendering_engine.jpg)

1. The rendering engine will start parsing the HTML document and convert elements to **DOM**  nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. 

2. Styling information together with visual instructions in the HTML will be used to create another tree: the **render tree**. 
* The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.
4. After the construction of the render tree it goes through a **layout** process. This means giving each node the exact coordinates where it should appear on the screen. 

5. The next stage is  **painting**  - the render tree will be traversed and each node will be painted using the UI backend layer.

For **better user experience**, the rendering engine will try to **display contents on the screen as soon as possible**. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

---
## d. Parsers (HTML, CSS, etc)
Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

### HTML Parser  
The job of the HTML parser is to parse the HTML markup into a parse tree.

For example, parsing the expression `2 + 3 - 1` could return this tree:

![html_parsing_tree](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/xNQUG9emGd8FzuOpumP7.png?auto=format&w=439)

### DOM 

The output tree (the "parse tree") is a tree of DOM element and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript.

The root of the tree is the Document object.

The DOM has an almost one-to-one relation to the markup. For example:
```
<html>  
<body>  
<p>  
Hello World  
</p>  
<div>  <img src="example.png"/></div>  
</body>  
</html>
```
This markup would be translated to the following DOM tree:

![rendering_engine_flow](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/DNtfwOq9UaC3TrEj3D9h.png?auto=format&w=439)

---
## e. Script Processors
---
## f. Tree construction
---
## g. Order of script processing

### Scripts 

    The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a  `<script>`  tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

### Speculative parsing

    Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved. Note: the speculative parser only parses references to external resources like external scripts, style sheets and images: it doesn't modify the DOM tree - that is left to the main parser.

### Style sheets 

    Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems. It seems to be an edge case but is quite common. Firefox blocks all scripts when there is a style sheet that is still being loaded and parsed. WebKit blocks scripts only when they try to access certain style properties that may be affected by unloaded style sheets.
---
## h. Layout and Painting

  
  
<br>
<br>
Guidelines:

1.Submit this assignment on GIT - Answer should be in readme File (with images) on GIT.

2.Candidates should be able to explain how a browser works.

3.What are the high level components of a browser?

4.How each component works with each other. (For example: Networking component isthe one which makes HTTP calls, Data storage component is a browser’s persistencelayer which saves data locally such as Cookies and Local Storage.5.How Parsing works and its importance.6.The order of execution of scripts.

  
  
  

I need to highlight these ==very important words==.