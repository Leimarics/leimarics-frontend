import { NextRequest, NextResponse } from 'next/server'
import { submitContactForm } from '@/lib/supabase'
import { z } from 'zod'

// Validation schema updated to exactly match the frontend <Select> options
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  // Updated enum to match the new frontend dropdown values
  projectType: z.enum(['basic', 'business', 'ecommerce', 'maintenance', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input from frontend
    const validatedData = contactSchema.parse(body)
    
    // Map camelCase (frontend) to snake_case (database) to keep Supabase happy
    const dbPayload = {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      project_type: validatedData.projectType, 
      message: validatedData.message
    }
    
    // Submit to database
    const result = await submitContactForm(dbPayload)
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Failed to save to database' },
        { status: 500 }
      )
    }
    
    // CRITICAL FIX: Added `success: true` so the frontend knows it worked
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully', data: result.data },
      { status: 200 }
    )
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Zod Validation Error:", error.issues)
      return NextResponse.json(
        { success: false, error: 'Validation failed. Please check your inputs.', details: error.issues },
        { status: 400 }
      )
    }
    
    console.error("Server Error:", error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}