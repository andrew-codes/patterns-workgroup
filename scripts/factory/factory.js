export class AttributeDescriptor {
    static forInt(name, mapperClass) {
        return new DefaultDescriptor(name, mapperClass, typeof 1);
    }

    static forDate(name, mapperClass) {
        return new DefaultDescriptor(name, mapperClass, typeof Date);
    }

    static forUser(name, mapperClass) {
        return new ReferenceDescriptor(name, mapperClass, typeof User, typeof User);
    }
}

export class User {
}

class DefaultDescriptor extends AttributeDescriptor {
    constructor(name, mapperClass, userType) {
        super();
        console.log(arguments);
    }
}

class ReferenceDescriptor extends AttributeDescriptor {
    constructor(name, mapperClass, userType, remoteUserType) {
        super();
        console.log(arguments);
    }
}
