const Ziggy = {"url":"http:\/\/netzwelt-projector.test","port":null,"defaults":{},"routes":{"projects.index":{"uri":"projects","methods":["GET","HEAD"]},"projects.create":{"uri":"projects\/create","methods":["GET","HEAD"]},"projects.store":{"uri":"projects","methods":["POST"]},"projects.show":{"uri":"projects\/{project}","methods":["GET","HEAD"],"bindings":{"project":"id"}},"projects.edit":{"uri":"projects\/{project}\/edit","methods":["GET","HEAD"],"bindings":{"project":"id"}},"projects.update":{"uri":"projects\/{project}","methods":["PUT","PATCH"],"bindings":{"project":"id"}},"projects.destroy":{"uri":"projects\/{project}","methods":["DELETE"],"bindings":{"project":"id"}},"persons.index":{"uri":"persons","methods":["GET","HEAD"]},"persons.create":{"uri":"persons\/create","methods":["GET","HEAD"]},"persons.store":{"uri":"persons","methods":["POST"]},"persons.show":{"uri":"persons\/{person}","methods":["GET","HEAD"]},"persons.edit":{"uri":"persons\/{person}\/edit","methods":["GET","HEAD"]},"persons.update":{"uri":"persons\/{person}","methods":["PUT","PATCH"]},"persons.destroy":{"uri":"persons\/{person}","methods":["DELETE"]},"assignments.edit":{"uri":"projects\/{project}\/assignments","methods":["GET","HEAD"]},"login":{"uri":"signin","methods":["GET","HEAD"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (let name in window.Ziggy.routes) {
        Ziggy.routes[name] = window.Ziggy.routes[name];
    }
}

export { Ziggy };
