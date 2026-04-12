export type MqttEvent = 'onMqttConnected' | 'onMqttDisconnected' | 'onMqttMessageReceived' | 'onMqttError' | 'onMqttSubscribed' | 'onMqttUnsubscribed';
export interface MqttMessage {
    topic: string;
    message: string;
}
export declare const Mqtt: {
    connect: (brokerUrl: string, username: string, password: string) => Promise<string>;
    disconnect: () => Promise<string>;
    subscribe: (topic: string, qos?: number) => Promise<string>;
    unsubscribe: (topic: string) => Promise<string>;
    publish: (topic: string, message: string, qos?: number) => Promise<string>;
    addListener: (eventName: MqttEvent, callback: (data: any) => void) => import("react-native").EventSubscription;
};
export default Mqtt;
//# sourceMappingURL=index.d.ts.map