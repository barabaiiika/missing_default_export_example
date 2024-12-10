import axios from 'axios';
import remote from 'remote/instance';

const hostInstance = axios.create();
const remoteInstance = remote;
