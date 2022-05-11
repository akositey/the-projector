const Ziggy = {"url":"https:\/\/netzwelt-projector.herokuapp.com","port":null,"defaults":{},"routes":{"projects.index":{"uri":"projects","methods":["GET","HEAD"]},"projects.create":{"uri":"projects\/create","methods":["GET","HEAD"]},"projects.store":{"uri":"projects","methods":["POST"]},"projects.show":{"uri":"projects\/{project}","methods":["GET","HEAD"],"bindings":{"project":"id"}},"projects.edit":{"uri":"projects\/{project}\/edit","methods":["GET","HEAD"],"bindings":{"project":"id"}},"projects.update":{"uri":"projects\/{project}","methods":["PUT","PATCH"],"bindings":{"project":"id"}},"projects.destroy":{"uri":"projects\/{project}","methods":["DELETE"],"bindings":{"project":"id"}},"persons.index":{"uri":"persons","methods":["GET","HEAD"]},"persons.create":{"uri":"persons\/create","methods":["GET","HEAD"]},"persons.store":{"uri":"persons","methods":["POST"]},"persons.show":{"uri":"persons\/{person}","methods":["GET","HEAD"],"bindings":{"person":"id"}},"persons.edit":{"uri":"persons\/{person}\/edit","methods":["GET","HEAD"],"bindings":{"person":"id"}},"persons.update":{"uri":"persons\/{person}","methods":["PUT","PATCH"],"bindings":{"person":"id"}},"persons.destroy":{"uri":"persons\/{person}","methods":["DELETE"],"bindings":{"person":"id"}},"persons.password.update":{"uri":"persons\/{person}\/updatePassword","methods":["PATCH"],"bindings":{"person":"id"}},"projects.assignments.destroy":{"uri":"projects\/{project}\/assignments\/{person}","methods":["DELETE"],"bindings":{"project":"id","person":"id"}},"projects.assignments.edit":{"uri":"projects\/{project}\/assignments","methods":["GET","HEAD"],"bindings":{"project":"id"}},"projects.assignments.store":{"uri":"projects\/{project}\/assignments","methods":["POST"],"bindings":{"project":"id"}},"persons.assignments.destroy":{"uri":"persons\/{person}\/assignments\/{project}","methods":["DELETE"],"bindings":{"person":"id","project":"id"}},"persons.assignments.edit":{"uri":"persons\/{person}\/assignments","methods":["GET","HEAD"],"bindings":{"person":"id"}},"persons.assignments.store":{"uri":"persons\/{person}\/assignments","methods":["POST"],"bindings":{"person":"id"}},"login":{"uri":"signin","methods":["GET","HEAD"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
