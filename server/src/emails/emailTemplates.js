export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Messenger</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f0f2f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f2f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.08);">
          
          <!-- Header Section -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 40px; text-align: center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <div style="background-color: rgba(255,255,255,0.2); backdrop-filter: blur(10px); width: 100px; height: 100px; border-radius: 50%; display: inline-block; margin-bottom: 24px; border: 3px solid rgba(255,255,255,0.3); padding: 15px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/1455/1455098.png" alt="Messenger" style="width: 60px; height: 60px; display: block; margin-top: 15px;">
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">Welcome to Messenger</h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 12px 0 0 0; font-size: 16px; font-weight: 400;">Your journey starts here</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 48px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="font-size: 20px; color: #1a1a1a; margin: 0 0 16px 0; font-weight: 600;">Hi ${name} 👋</p>
                    <p style="font-size: 16px; color: #4a5568; line-height: 1.6; margin: 0 0 28px 0;">We're thrilled to have you on board! Messenger makes it easy to stay connected with the people who matter most. Chat in real-time, share moments, and never miss a beat.</p>
                  </td>
                </tr>
                
                <!-- Feature Cards -->
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f6f8fb 0%, #f0f2f5 100%); border-radius: 12px; padding: 32px; margin-bottom: 32px;">
                      <tr>
                        <td>
                          <p style="font-size: 17px; font-weight: 600; color: #1a1a1a; margin: 0 0 20px 0;">🚀 Quick Start Guide</p>
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.06);">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="40" valign="top">
                                      <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white; font-weight: 600; font-size: 14px; text-align: center; line-height: 32px;">1</div>
                                    </td>
                                    <td style="padding-left: 16px;">
                                      <p style="margin: 0; font-size: 15px; font-weight: 500; color: #2d3748;">Complete Your Profile</p>
                                      <p style="margin: 4px 0 0 0; font-size: 13px; color: #718096;">Add a photo and bio to personalize your account</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.06);">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="40" valign="top">
                                      <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white; font-weight: 600; font-size: 14px; text-align: center; line-height: 32px;">2</div>
                                    </td>
                                    <td style="padding-left: 16px;">
                                      <p style="margin: 0; font-size: 15px; font-weight: 500; color: #2d3748;">Connect with Friends</p>
                                      <p style="margin: 4px 0 0 0; font-size: 13px; color: #718096;">Find and add contacts to start chatting</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.06);">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="40" valign="top">
                                      <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white; font-weight: 600; font-size: 14px; text-align: center; line-height: 32px;">3</div>
                                    </td>
                                    <td style="padding-left: 16px;">
                                      <p style="margin: 0; font-size: 15px; font-weight: 500; color: #2d3748;">Start Messaging</p>
                                      <p style="margin: 4px 0 0 0; font-size: 13px; color: #718096;">Send your first message and share media</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0 0 0;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="40" valign="top">
                                      <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: white; font-weight: 600; font-size: 14px; text-align: center; line-height: 32px;">4</div>
                                    </td>
                                    <td style="padding-left: 16px;">
                                      <p style="margin: 0; font-size: 15px; font-weight: 500; color: #2d3748;">Explore Features</p>
                                      <p style="margin: 4px 0 0 0; font-size: 13px; color: #718096;">Discover voice calls, video chats, and more</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding: 8px 0 32px 0;">
                    <a href="${clientURL}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 16px 48px; border-radius: 50px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);">Get Started Now →</a>
                  </td>
                </tr>
                
                <!-- Help Section -->
                <tr>
                  <td style="background-color: #fef9f6; border-left: 4px solid #f6ad55; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0 0 8px 0; font-size: 15px; font-weight: 600; color: #744210;">💬 Need Help?</p>
                    <p style="margin: 0; font-size: 14px; color: #744210; line-height: 1.6;">Our support team is here 24/7. Visit our Help Center or reply to this email anytime.</p>
                  </td>
                </tr>
                
                <!-- Closing -->
                <tr>
                  <td style="padding-top: 32px;">
                    <p style="font-size: 15px; color: #4a5568; line-height: 1.6; margin: 0 0 8px 0;">Happy messaging! 🎉</p>
                    <p style="font-size: 15px; color: #2d3748; font-weight: 500; margin: 0;">The Messenger Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f7fafc; padding: 32px 40px; border-top: 1px solid #e2e8f0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 16px 0; font-size: 12px; color: #a0aec0;">© 2025 Messenger. All rights reserved.</p>
                    <p style="margin: 0;">
                      <a href="#" style="color: #667eea; text-decoration: none; font-size: 13px; margin: 0 12px;">Privacy Policy</a>
                      <span style="color: #cbd5e0;">•</span>
                      <a href="#" style="color: #667eea; text-decoration: none; font-size: 13px; margin: 0 12px;">Terms</a>
                      <span style="color: #cbd5e0;">•</span>
                      <a href="#" style="color: #667eea; text-decoration: none; font-size: 13px; margin: 0 12px;">Contact</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
