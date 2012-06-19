
// Forth interface

// Install Forth interface. terminal, stack are jQuery objects
forth.interface = function(terminal) {
    terminal.terminal(
        function(str, terminal, stack) {
            try {
                var words = forth.parse(str);
                forth.execute(words);
                forth.redrawStack();
            } catch(err) {
                terminal.error(err);
            }
        },
        {
            greetings: "FORTH Interpreter. Type 'clear' to clear",
            prompt: '> '
        });
    forth.terminal = terminal.terminal();
    forth.stackElt = $(stack);
};

forth.redrawStack = function() {
    forth.stackElt.empty();
    for (var i = 0; i < forth.stack.data.length; i++) {
        var val = forth.stack.data[i];
        var elt = $('<div class="stackElt">'+val+'</div>');
        forth.stackElt.append(elt);
    }
};
