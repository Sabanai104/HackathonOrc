export default function isPasswordValid(password: string) {
    if(password.length < 7) {
        return false;
    }
    return true
}