import { useAuth } from "@/UseContext/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const schema = z.object({
    username: z.string().min(1, { message: " Nama harus diisi" }),
    gender: z.string().min(1, { message: " Gender harus diisi" }),

})

export type LoginForm = z.infer<typeof schema>

const LoginPage = () => {

    const { login } = useAuth()

    const route = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        defaultValues: {
            username: "",
            gender: "",
        },
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: LoginForm) => {
        login(data.username, data.gender);
        toast.success("Anda berhasil masuk")
        route.push("/")
    };



    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md md:mx-auto mx-4 ">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-md px-16 md:px-20 py-10  mb-4 border-2 border-primary">
                    <div className="mb-4">
                     
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Masukan Nama Anda"
                            {...register("username", { required: 'Username is required' })}
                        />
                        {errors.username && <p className="text-red-500 text-xs ">{errors.username.message}</p>}
                    </div>
                    <div className="mb-4">
                       
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="gender"
                            {...register("gender", { required: 'Gender is required' })}
                        >
                            <option value="">Pilih Gender</option>
                            <option value="male">Pria</option>
                            <option value="female">Wanita</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-xs">{errors.gender.message}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-primary hover:bg-transparent text-sm w-full text-white hover:text-primary border border-primary font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Masuk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;