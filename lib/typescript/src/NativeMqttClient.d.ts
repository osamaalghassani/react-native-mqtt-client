import { type TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    connect(brokerUrl: string, username: string, password: string): Promise<string>;
    disconnect(): Promise<string>;
    subscribe(topic: string, qos: number): Promise<string>;
    unsubscribe(topic: string): Promise<string>;
    publish(topic: string, message: string, qos: number): Promise<string>;
    addListener(eventName: string): void;
    removeListeners(count: number): void;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeMqttClient.d.ts.map