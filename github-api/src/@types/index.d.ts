export default interface Repo {
    id: number;
    full_name: string;
    description:string;
    html_url: string;
    owner: {
        avatar_url: string;
        login: string;
    }
}