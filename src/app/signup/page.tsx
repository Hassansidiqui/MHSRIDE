"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
            <div className="w-full max-w-md bg-card rounded-3xl shadow-xl p-8 border border-border">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-500 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl mb-4 shadow-lg shadow-blue-500/20">
                        <span className="text-white font-black text-2xl leading-none">M</span>
                    </div>
                    <h1 className="text-2xl font-bold">Create Account</h1>
                    <p className="text-muted-foreground">Join MHSRIDE today</p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
                        Create Account
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500 font-bold hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
