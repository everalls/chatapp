// Simple slass describing the message (used short name Messg to avoid possible confusung)
// property mtext - the body (text only!) of tghe message
// propety incoming:
// true: for incoming messages (REALTIVE TO SPECIFIC USER)
// false: for outcoming messages

export class Messg {
    mtext: string;
    incoming: boolean;
}
