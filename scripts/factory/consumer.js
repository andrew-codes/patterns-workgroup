import * as factories from './factory';

class DescriptorMapper {
    createAttributeDescriptors = () => {
        const type = typeof DescriptorMapper;
        const results = [];
        results.push(factories.AttributeDescriptor.forInt('remoteId', type));
        results.push(factories.AttributeDescriptor.forDate('createDate', type));
        results.push(factories.AttributeDescriptor.forDate('lastChangedDate', type));
        results.push(factories.AttributeDescriptor.forUser('createdBy', type));
        results.push(factories.AttributeDescriptor.forUser('lastChangeDBy', type));
        return results;
    }
}
