'use strict';

const NoFlo = require('noflo');
const RedisDS = require('../datasources/redis.ds');
const _ = require('lodash');
const PORT_REDIS = 'redis';
const PORT_OUT = 'out';
const PORT_ERROR = 'error';
const PORT_IN = 'in';
const PORT_AGENT_EXISTS = 'agent_exists';

exports.getComponent = () => {

    const c = new NoFlo.Component();
    c.description = 'Get all domains by domain id';
    c.icon = 'user';

    c.inPorts.add(PORT_IN, {
        datatype: 'object',
        description: 'Object with all parsed values.'
    });

    c.inPorts.add(PORT_AGENT_EXISTS, {
        datatype: 'boolean',
        description: 'Agent Exists'
    });

    c.inPorts.add(PORT_REDIS, {
        datatype: 'object',
        description: 'Redis client'
    });

    c.outPorts.add(PORT_OUT, {
        datatype: 'object'
    });

    c.outPorts.add(PORT_ERROR, {
        datatype: 'object'
    });

    return c.process((input, output) => {

        if (!input.has(PORT_IN, PORT_REDIS, PORT_AGENT_EXISTS)) {
            return;
        }

        const { scope } = input;
        const redis = input.getData(PORT_REDIS);
        const agentExists = input.getData(PORT_AGENT_EXISTS);
        const { id, domainId } = input.getData(PORT_IN);

        if (!agentExists) {
            return output.sendDone({ [PORT_ERROR]: new NoFlo.IP('data', `Agent [${id}] doesn't exists`, { scope }) });

        }
        RedisDS
            .findAllInSet({
                redis,
                start: 0,
                limit: -1,
                type: `agentDomains:${id}`,
                subType: 'domain'
            })
            .then((domains) => {

                const domain = _.filter(domains, (tempDomain) => {

                    return tempDomain.id.toString() === domainId.toString();
                });
                if (domain && domain.length === 0) {
                    return output.sendDone({ [PORT_ERROR]: new NoFlo.IP('data', 'Domain Not Found', { scope }) });
                }
                return output.sendDone({ [PORT_OUT]: new NoFlo.IP('data', domain[0], { scope }) });
            })
            .catch((err) => {

                return output.sendDone({ [PORT_ERROR]: new NoFlo.IP('data', err, { scope }) });
            });
    });
};