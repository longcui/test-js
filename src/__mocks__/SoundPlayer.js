// Import this named export into your test file:
export const mockPlaySoundFile = jest.fn(() => {
    const a = 5;
});
const mock = jest.fn().mockImplementation(() => {
    return {playSoundFile: mockPlaySoundFile};
});

export default mock;