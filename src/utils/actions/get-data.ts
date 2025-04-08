export async function getDataHome(){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67f52c4fcbb3fe972a6386bc?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)
        
        if(!res.ok){
            throw new Error("Failed to fetch data")
        }

        return res.json();
        
    } catch (err) {
        throw new Error("Failed to fetch data")
        
    }
}